// ─────────────────────────────────────────────────────────────────────────────
// Prerender the legal pages to static, fully-crawlable HTML.
//
// Why: the site is a client-rendered SPA, so a raw fetch of /privacy or /terms
// (e.g. by Google's OAuth verification crawler) only sees the empty index.html
// shell — the policy text is injected later by JavaScript. This script bakes the
// real content into dist/privacy/index.html and dist/terms/index.html so the text
// is present in the server response with no JS required.
//
// Content comes from the SAME source as the React pages (src/content/*.js), so
// the two renderers can never drift. Runs after `vite build` (see package.json).
// ─────────────────────────────────────────────────────────────────────────────

import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import * as privacy from '../src/content/privacy.js'
import * as terms from '../src/content/terms.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const SITE = 'https://filananova.com'

// ─── escaping / inline formatting ────────────────────────────────────────────

const esc = (s) =>
  String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const escAttr = (s) => esc(s).replaceAll('"', '&quot;')

// **bold** -> <strong>, everything escaped.
const inline = (text) =>
  String(text)
    .split(/(\*\*[^*]+\*\*)/)
    .map((part) =>
      part.startsWith('**') && part.endsWith('**')
        ? `<strong>${esc(part.slice(2, -2))}</strong>`
        : esc(part),
    )
    .join('')

// Turn the contact email into a mailto link (after escaping; email has no special chars).
const linkifyEmail = (html, email) =>
  email ? html.replaceAll(esc(email), `<a href="mailto:${escAttr(email)}">${esc(email)}</a>`) : html

const fmt = (text, email) => linkifyEmail(inline(text), email)

// A body string may contain \n line breaks; mirror the React renderer by treating
// each non-empty line as its own paragraph.
const bodyToHtml = (text, email) =>
  String(text)
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => `<p>${fmt(line, email)}</p>`)
    .join('')

const listToHtml = (items, email) =>
  `<ul>${items.map((it) => `<li>${fmt(it, email)}</li>`).join('')}</ul>`

const tocToHtml = (toc) =>
  `<nav class="toc" aria-label="Contents">` +
  `<p class="toc-label">Contents</p>` +
  `<ul class="toc-list">${toc
    .map((t) => `<li><a href="#${escAttr(t.id)}">${esc(t.label)}</a></li>`)
    .join('')}</ul>` +
  `</nav>`

const sectionToHtml = (sec, email) => {
  let h = `<section id="${escAttr(sec.id)}"><h2>${esc(sec.title)}</h2>`
  if (sec.intro) h += `<p class="lead">${fmt(sec.intro, email)}</p>`
  if (sec.body) h += bodyToHtml(sec.body, email)
  if (sec.list) h += listToHtml(sec.list, email)
  if (sec.body_after) h += `<p>${fmt(sec.body_after, email)}</p>`
  for (const sub of sec.subsections ?? []) {
    h += `<div class="sub">`
    if (sub.subtitle) h += `<h3>${esc(sub.subtitle)}</h3>`
    if (sub.intro) h += `<p>${fmt(sub.intro, email)}</p>`
    if (sub.note) h += `<p class="note">${fmt(sub.note, email)}</p>`
    if (sub.body) h += bodyToHtml(sub.body, email)
    if (sub.items) h += listToHtml(sub.items, email)
    if (sub.body_after) h += `<p>${fmt(sub.body_after, email)}</p>`
    h += `</div>`
  }
  return h + `</section>`
}

// ─── styles (inlined so the page is fully self-contained) ─────────────────────

const STYLE = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0; background: #fff; color: rgba(14,14,14,0.58);
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", "Segoe UI", sans-serif;
    line-height: 1.7; -webkit-font-smoothing: antialiased;
  }
  a { color: #0E0E0E; text-decoration: underline; text-decoration-color: rgba(14,14,14,0.2); text-underline-offset: 3px; }
  a:hover { text-decoration-color: rgba(14,14,14,0.6); }
  ::selection { background: #C2703D30; color: #0E0E0E; }
  .site-header {
    position: sticky; top: 20px; z-index: 10; width: calc(100% - 2rem); max-width: 560px; margin: 20px auto 0;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(255,255,255,0.8); backdrop-filter: blur(24px) saturate(1.4); -webkit-backdrop-filter: blur(24px) saturate(1.4);
    border: 1px solid rgba(0,0,0,0.06); border-radius: 999px; padding: 10px 12px 10px 24px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }
  .brand { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; color: #0E0E0E; text-decoration: none; }
  .header-cta { background: #0E0E0E; color: #fff; text-decoration: none; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 999px; }
  .header-cta:hover { color: #fff; }
  main { max-width: 760px; margin: 0 auto; padding: 96px 24px 88px; }
  .hero { text-align: center; margin: 0 0 64px; }
  .eyebrow { display: inline-flex; align-items: center; gap: 8px; text-transform: uppercase; letter-spacing: 3px; font-size: 12px; font-weight: 500; color: rgba(14,14,14,0.4); margin: 0 0 24px; }
  .eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 999px; background: #C2703D; }
  h1 { font-size: clamp(44px, 8vw, 72px); font-weight: 700; letter-spacing: -0.04em; line-height: 0.98; color: #0E0E0E; margin: 0 0 24px; }
  .updated { display: inline-block; font-size: 13px; font-weight: 500; color: rgba(14,14,14,0.55); background: rgba(14,14,14,0.04); border: 1px solid rgba(14,14,14,0.06); padding: 8px 16px; border-radius: 999px; margin: 0 0 12px; }
  .contact-line { font-size: 14px; color: rgba(14,14,14,0.45); margin: 0; }
  section { padding: 40px 0; border-top: 1px solid rgba(0,0,0,0.06); }
  h2 { font-size: 24px; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2; color: #0E0E0E; margin: 0 0 20px; scroll-margin-top: 110px; }
  section[id] { scroll-margin-top: 110px; }
  h3 { font-size: 16px; font-weight: 600; letter-spacing: -0.01em; color: #0E0E0E; margin: 28px 0 10px; }
  p { margin: 0 0 16px; font-size: 15.5px; }
  strong { color: #0E0E0E; font-weight: 600; }
  .lead { font-size: 16px; }
  .note { color: rgba(14,14,14,0.45); }
  ul { margin: 8px 0 16px; padding: 0; list-style: none; }
  li { position: relative; padding-left: 20px; margin: 0 0 12px; font-size: 15.5px; }
  li::before { content: ""; position: absolute; left: 2px; top: 11px; width: 6px; height: 6px; border-radius: 999px; background: #C2703D; }
  .card { background: #F6F6F5; border: 1px solid rgba(0,0,0,0.04); border-radius: 24px; padding: 32px; margin: 40px 0 48px; }
  .card h2 { margin: 0 0 20px; font-size: 18px; }
  .card p { font-size: 14px; }
  .toc { border: 1px solid rgba(0,0,0,0.07); border-radius: 20px; padding: 24px 28px; margin: 0 0 48px; }
  .toc-label { text-transform: uppercase; letter-spacing: 2px; font-size: 11px; font-weight: 500; color: rgba(14,14,14,0.35); margin: 0 0 14px; }
  .toc-list li { padding-left: 0; margin: 0 0 8px; }
  .toc-list li::before { display: none; }
  .toc-list a { color: rgba(14,14,14,0.55); text-decoration: none; font-size: 14px; }
  .toc-list a:hover { color: #0E0E0E; }
  .divider { display: none; }
  .site-footer { border-top: 1px solid rgba(0,0,0,0.06); padding: 40px 24px; text-align: center; color: rgba(14,14,14,0.3); font-size: 13px; }
  .site-footer p { font-size: 13px; margin: 0 0 8px; }
  .site-footer a { color: rgba(14,14,14,0.5); }
`

// ─── page template ────────────────────────────────────────────────────────────

function renderPage({ slug, title, heading, eyebrow, lastUpdated, email, description, introHtml }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <title>${esc(title)}</title>
    <meta name="description" content="${escAttr(description)}" />
    <link rel="canonical" href="${SITE}/${slug}" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <style>${STYLE}</style>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label="Filana home">Filana</a>
      <a class="header-cta" href="/download">Get Filana</a>
    </header>
    <main>
      <div class="hero">
        ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
        <h1>${esc(heading)}</h1>
        <p class="updated">Last updated ${esc(lastUpdated)}</p>
        <p class="contact-line">Contact: <a href="mailto:${escAttr(email)}">${esc(email)}</a></p>
      </div>
      ${introHtml}
    </main>
    <footer class="site-footer">
      <p>Questions? Email <a href="mailto:${escAttr(email)}">${esc(email)}</a> &middot; <a href="/">Back to Filana</a></p>
      <p>&copy; 2026 Filana. All rights reserved.</p>
    </footer>
  </body>
</html>
`
}

// ─── build privacy page body ──────────────────────────────────────────────────

const privacyIntro =
  privacy.INTRO.map((p) => `<p class="lead">${fmt(p, privacy.CONTACT_EMAIL)}</p>`).join('') +
  `<div class="card"><h2>Summary of Key Points</h2>` +
  privacy.SUMMARY.map(
    ([q, a]) => `<p><strong>${esc(q)}</strong> ${esc(a)}</p>`,
  ).join('') +
  `</div>` +
  tocToHtml(privacy.TOC) +
  `<div class="divider"></div>` +
  privacy.sections.map((s) => sectionToHtml(s, privacy.CONTACT_EMAIL)).join('')

const privacyHtml = renderPage({
  slug: 'privacy',
  title: 'Privacy Policy — Filana',
  heading: 'Privacy Policy',
  eyebrow: 'Legal',
  lastUpdated: privacy.LAST_UPDATED,
  email: privacy.CONTACT_EMAIL,
  description:
    'Filana Privacy Policy — what personal information we collect, how we use and share it, how we keep it safe, and how to review or delete your data.',
  introHtml: privacyIntro,
})

// ─── build terms page body ────────────────────────────────────────────────────

const termsIntro =
  tocToHtml(terms.TOC) +
  `<div class="divider"></div>` +
  terms.sections.map((s) => sectionToHtml(s, terms.CONTACT_EMAIL)).join('')

const termsHtml = renderPage({
  slug: 'terms',
  title: 'Terms of Service — Filana',
  heading: 'Terms of Service',
  eyebrow: 'Legal',
  lastUpdated: terms.LAST_UPDATED,
  email: terms.CONTACT_EMAIL,
  description:
    'Filana Terms of Service — acceptable use, subscriptions and billing, AI features, limitations of liability, termination, and how to contact us.',
  introHtml: termsIntro,
})

// ─── write files ──────────────────────────────────────────────────────────────

function write(slug, html) {
  const dir = resolve(DIST, slug)
  mkdirSync(dir, { recursive: true })
  const file = resolve(dir, 'index.html')
  writeFileSync(file, html)
  console.log(`prerendered ${slug} -> ${file} (${html.length} bytes)`)
}

write('privacy', privacyHtml)
write('terms', termsHtml)
