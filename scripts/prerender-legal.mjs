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
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0; background: #050505; color: rgba(255,255,255,0.85);
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.62; -webkit-font-smoothing: antialiased;
  }
  a { color: rgba(255,255,255,0.72); text-decoration: underline; text-underline-offset: 3px; }
  a:hover { color: #fff; }
  .site-header {
    position: sticky; top: 0; z-index: 10;
    background: rgba(5,5,5,0.72); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.06); padding: 16px 24px;
  }
  .brand { display: inline-block; }
  .brand img { height: 22px; width: auto; display: block; opacity: 0.9; }
  main { max-width: 760px; margin: 0 auto; padding: 56px 24px 88px; }
  .eyebrow {
    display: inline-block; text-transform: uppercase; letter-spacing: 0.15em;
    font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.06); padding: 6px 12px; border-radius: 999px; margin: 0 0 20px;
  }
  h1 { font-size: clamp(34px, 6vw, 52px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; color: #fff; margin: 0 0 12px; }
  .updated { font-size: 13px; color: rgba(255,255,255,0.32); margin: 0 0 16px; }
  .contact-line { font-size: 14px; color: rgba(255,255,255,0.5); margin: 0 0 40px; }
  h2 { font-size: 21px; font-weight: 600; letter-spacing: -0.01em; color: #fff; margin: 48px 0 16px; scroll-margin-top: 90px; }
  h3 { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.35); margin: 26px 0 10px; }
  p { color: rgba(255,255,255,0.55); margin: 0 0 14px; }
  .lead { color: rgba(255,255,255,0.62); }
  .note { color: rgba(255,255,255,0.42); }
  ul { margin: 8px 0 16px; padding: 0; list-style: none; }
  li { position: relative; padding-left: 20px; margin: 0 0 10px; color: rgba(255,255,255,0.55); }
  li::before { content: ""; position: absolute; left: 4px; top: 11px; width: 4px; height: 4px; border-radius: 999px; background: rgba(255,255,255,0.3); }
  .card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; margin: 0 0 40px; }
  .card h2 { margin: 0 0 14px; font-size: 17px; }
  .card p { font-size: 14px; color: rgba(255,255,255,0.5); }
  .toc { background: rgba(14,14,14,0.5); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 24px; margin: 0 0 56px; }
  .toc-label { text-transform: uppercase; letter-spacing: 0.16em; font-size: 11px; color: rgba(255,255,255,0.3); margin: 0 0 16px; }
  .toc-list li { padding-left: 0; }
  .toc-list li::before { display: none; }
  .toc-list a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 14px; }
  .toc-list a:hover { color: #fff; }
  .divider { height: 1px; background: rgba(255,255,255,0.06); margin: 8px 0 40px; }
  .site-footer { border-top: 1px solid rgba(255,255,255,0.06); padding: 32px 24px; text-align: center; color: rgba(255,255,255,0.3); font-size: 13px; }
  .site-footer a { color: rgba(255,255,255,0.5); }
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
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <style>${STYLE}</style>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/" aria-label="Filana home"><img src="/FILANA.png" alt="Filana" /></a>
    </header>
    <main>
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
      <h1>${esc(heading)}</h1>
      <p class="updated">Last updated: ${esc(lastUpdated)}</p>
      <p class="contact-line">Contact: <a href="mailto:${escAttr(email)}">${esc(email)}</a></p>
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
