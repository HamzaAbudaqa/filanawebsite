import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { LAST_UPDATED, SUMMARY, TOC, sections } from '../content/privacy'

// ─── RENDER HELPERS ──────────────────────────────────────────────────────────

function renderBody(text) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    const parts = line.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="mb-0 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <span key={j} style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{part.slice(2, -2)}</span>
            : part
        )}
      </p>
    )
  })
}

function BulletList({ items, dimmer = false }) {
  return (
    <ul className="flex flex-col gap-2.5 text-[15px] mt-1">
      {items.map((item, j) => (
        <li key={j} className="flex items-start gap-3"
          style={{ color: dimmer ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.45)' }}>
          <span
            className="mt-[5px] w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          >
            <svg width="7" height="5" viewBox="0 0 8 6" fill="none">
              <path d="M1 3l2 2 4-4" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 text-[12px] font-medium tracking-widest uppercase"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.15em' }}
          >
            Legal
          </div>
          <h1 className="text-[40px] md:text-[58px] font-bold tracking-tight text-white leading-[1.05] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            Last updated: {LAST_UPDATED}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16 pb-32">

        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-[15px] leading-relaxed flex flex-col gap-3"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          <p>
            This Privacy Notice for <span style={{ color: 'rgba(255,255,255,0.72)' }}>Filana</span> describes how and why we might access, collect, store, use, and/or share your personal information when you use our Services, including when you download and use our mobile application (Filana) or engage with us in other related ways, including any marketing or events.
          </p>
          <p>
            <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 600 }}>Questions or concerns?</span> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{' '}
            <a href="mailto:hamza.daqa@gmail.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>hamza.daqa@gmail.com</a>.
          </p>
        </motion.div>

        {/* Summary of Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2 className="text-[17px] font-semibold text-white mb-4 tracking-tight">Summary of Key Points</h2>
          <div className="flex flex-col gap-3 text-[14px]" style={{ color: 'rgba(255,255,255,0.42)' }}>
            {SUMMARY.map(([q, a], i) => (
              <p key={i}><span style={{ color: 'rgba(255,255,255,0.68)', fontWeight: 600 }}>{q} </span>{a}</p>
            ))}
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-[20px] font-semibold text-white mb-5 tracking-tight">Table of Contents</h2>
          <ol className="flex flex-col gap-2">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-[14px] transition-colors duration-150"
                  style={{ color: 'rgba(255,255,255,0.42)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.42)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ── Divider ── */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '64px' }} />

        {/* Main sections */}
        {sections.map((section, i) => (
          <motion.div
            key={i}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.04 }}
            className="mb-14 scroll-mt-28"
          >
            <h2 className="text-[20px] font-semibold text-white mb-5 tracking-tight">
              {section.title}
            </h2>

            {section.intro && (
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {section.intro}
              </p>
            )}

            {section.body && (
              <div className="flex flex-col gap-2 text-[15px] mb-4">
                {renderBody(section.body)}
              </div>
            )}

            {section.list && <BulletList items={section.list} />}

            {section.body_after && (
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {section.body_after}
              </p>
            )}

            {section.subsections?.map((sub, j) => (
              <div key={j} className="mt-7">
                <h3 className="text-[14px] font-semibold mb-3 tracking-wide uppercase"
                  style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.08em', fontSize: '12px' }}>
                  {sub.subtitle}
                </h3>
                {sub.intro && (
                  <p className="text-[15px] leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {sub.intro}
                  </p>
                )}
                {sub.note && (
                  <p className="text-[15px] mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {sub.note}
                  </p>
                )}
                {sub.body && (
                  <div className="flex flex-col gap-2 text-[15px] mb-3">
                    {renderBody(sub.body)}
                  </div>
                )}
                {sub.items && <BulletList items={sub.items} dimmer />}
                {sub.body_after && (
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {sub.body_after}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        ))}

        {/* Bottom rule */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />
        <p className="text-[13px] text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>
          &copy; 2026 Filana. All rights reserved.
        </p>
      </article>
    </div>
  )
}
