import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const ACCENT = '#C2703D'
const INK = '#0E0E0E'
const TEXT = 'rgba(14,14,14,0.58)'

// **bold** and the contact email become formatted inline nodes.
function fmt(text, email) {
  return String(text)
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold" style={{ color: INK }}>{part.slice(2, -2)}</strong>
      }
      if (!email || !part.includes(email)) return part
      return part.split(email).flatMap((chunk, j) =>
        j === 0
          ? [chunk]
          : [
              <a
                key={`${i}-${j}`}
                href={`mailto:${email}`}
                className="underline underline-offset-[3px] decoration-black/20 hover:decoration-black/60"
                style={{ color: INK }}
              >
                {email}
              </a>,
              chunk,
            ]
      )
    })
}

function Body({ text, email }) {
  return String(text)
    .split('\n')
    .filter((line) => line.trim())
    .map((line, i) => <p key={i}>{fmt(line, email)}</p>)
}

function BulletList({ items, email }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
          <span>{fmt(item, email)}</span>
        </li>
      ))}
    </ul>
  )
}

// "3. What Legal Bases…" -> ["3", "What Legal Bases…"]
function splitTitle(title) {
  const m = title.match(/^(\d+)\.\s*(.*)$/)
  return m ? [m[1].padStart(2, '0'), m[2]] : [null, title]
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -75% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

function Section({ section, email }) {
  const [num, heading] = splitTitle(section.title)
  const list = section.list || section.items

  return (
    <section id={section.id} className="scroll-mt-28 py-10 border-t border-black/[0.06] first:border-t-0 first:pt-0">
      <h2 className="flex items-baseline gap-4 text-[22px] md:text-[26px] font-bold tracking-[-0.02em] leading-[1.2] mb-5" style={{ color: INK }}>
        {num && (
          <span className="text-[13px] font-semibold tabular-nums flex-shrink-0" style={{ color: ACCENT }}>{num}</span>
        )}
        <span>{heading}</span>
      </h2>

      <div className="flex flex-col gap-4 text-[15.5px] leading-[1.7]" style={{ color: TEXT }}>
        {section.intro && <p>{fmt(section.intro, email)}</p>}
        {section.body && <Body text={section.body} email={email} />}
        {list && <BulletList items={list} email={email} />}
        {section.body_after && <p>{fmt(section.body_after, email)}</p>}

        {section.subsections?.map((sub, i) => (
          <div key={i} className="mt-4 flex flex-col gap-3">
            <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: INK }}>{sub.subtitle}</h3>
            {sub.intro && <p>{fmt(sub.intro, email)}</p>}
            {sub.note && <p className="text-black/45">{fmt(sub.note, email)}</p>}
            {sub.body && <Body text={sub.body} email={email} />}
            {sub.items && <BulletList items={sub.items} email={email} />}
            {sub.body_after && <p>{fmt(sub.body_after, email)}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function LegalPage({ title, subtitle, lastUpdated, email, intro, summary, toc, sections }) {
  const [ids] = useState(() => toc.map((t) => t.id))
  const active = useActiveSection(ids)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">Legal</span>
          </div>
          <h1 className="text-[44px] md:text-[72px] font-bold tracking-[-0.04em] leading-[0.98] mb-6" style={{ color: INK }}>
            {title}
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8" style={{ color: 'rgba(14,14,14,0.45)' }}>
            {subtitle}
          </p>
          <span
            className="inline-flex items-center text-[13px] font-medium px-4 py-2 rounded-full"
            style={{ background: 'rgba(14,14,14,0.04)', border: '1px solid rgba(14,14,14,0.06)', color: 'rgba(14,14,14,0.55)' }}
          >
            Last updated {lastUpdated}
          </span>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-[240px_minmax(0,1fr)] gap-12 lg:gap-20">
        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <nav className="no-scrollbar sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto" aria-label="Contents">
            <p className="text-[11px] uppercase tracking-[2px] font-medium text-black/35 mb-4">On this page</p>
            <ol className="flex flex-col gap-0.5 border-l border-black/[0.07]">
              {toc.map(({ id, label }) => {
                const isActive = id === active
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block -ml-px pl-4 py-1.5 text-[13px] leading-snug border-l transition-colors duration-200 hover:text-black/80"
                      style={{
                        textDecoration: 'none',
                        borderColor: isActive ? ACCENT : 'transparent',
                        color: isActive ? INK : 'rgba(14,14,14,0.45)',
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {splitTitle(label)[1]}
                    </a>
                  </li>
                )
              })}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-[720px]">
          {/* Intro */}
          {intro?.length > 0 && (
            <div className="flex flex-col gap-4 text-[16px] leading-[1.7] mb-10" style={{ color: TEXT }}>
              {intro.map((p, i) => <p key={i}>{fmt(p, email)}</p>)}
            </div>
          )}

          {/* Summary */}
          {summary?.length > 0 && (
            <div className="rounded-[24px] p-7 md:p-9 mb-12" style={{ background: '#F6F6F5', border: '1px solid rgba(0,0,0,0.04)' }}>
              <h2 className="text-[18px] font-bold tracking-tight mb-6" style={{ color: INK }}>Summary of key points</h2>
              <dl className="grid md:grid-cols-2 gap-x-8 gap-y-5 text-[14px] leading-relaxed">
                {summary.map(([q, a], i) => (
                  <div key={i}>
                    <dt className="font-semibold mb-1" style={{ color: INK }}>{q}</dt>
                    <dd className="m-0" style={{ color: TEXT }}>{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Mobile TOC */}
          <details className="lg:hidden group rounded-[20px] mb-12 border border-black/[0.07]">
            <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-4 text-[14px] font-semibold" style={{ color: INK }}>
              Contents
              <span className="text-black/40 transition-transform duration-200 group-open:rotate-180">⌄</span>
            </summary>
            <ol className="px-6 pb-5 flex flex-col gap-2.5">
              {toc.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-[14px] text-black/55 hover:text-black/85" style={{ textDecoration: 'none' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          {sections.map((section) => (
            <Section key={section.id} section={section} email={email} />
          ))}

          {/* Contact card */}
          <div className="mt-12 rounded-[24px] p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ background: '#F6F6F5' }}>
            <div>
              <h2 className="text-[18px] font-bold tracking-tight mb-1" style={{ color: INK }}>Still have questions?</h2>
              <p className="text-[14px]" style={{ color: TEXT }}>{email}</p>
            </div>
            <a
              href={`mailto:${email}`}
              className="inline-flex justify-center text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all duration-300 active:scale-95 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              style={{ background: INK, textDecoration: 'none' }}
            >
              Contact us
            </a>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  )
}
