import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { LAST_UPDATED, TOC, sections } from '../content/terms'

export default function TermsPage() {
  return (
    <div className="relative min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-white/85">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-[40px] md:text-[52px] font-bold tracking-tight text-white leading-[1.05]">
            Terms of Service
          </h1>
          <p className="mt-3 text-[14px]" style={{ color: 'rgba(255,255,255,0.30)' }}>
            Last updated: {LAST_UPDATED}
          </p>
        </motion.header>

        {/* Table of contents */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 rounded-2xl p-6"
          style={{
            background: 'rgba(14,14,14,0.5)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p
            className="text-[11px] uppercase tracking-[2px] mb-4"
            style={{ color: 'rgba(255,255,255,0.30)' }}
          >
            Contents
          </p>
          <ol className="space-y-2">
            {TOC.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[14px] transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Sections */}
        {sections.map((sec, i) => (
          <motion.section
            key={sec.id}
            id={sec.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: Math.min(i * 0.02, 0.2) }}
            className="mb-12 scroll-mt-32"
          >
            <h2 className="text-[22px] md:text-[24px] font-semibold text-white mb-4 tracking-tight">
              {sec.title}
            </h2>
            {sec.intro && (
              <p
                className="text-[15px] leading-relaxed mb-3"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {sec.intro}
              </p>
            )}
            {sec.body && (
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {sec.body}
              </p>
            )}
            {sec.items && (
              <ul className="space-y-2 mt-3">
                {sec.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[15px] leading-relaxed pl-5 relative"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <span
                      className="absolute left-0 top-[10px] w-1 h-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.30)' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '40px' }} />
        <p className="text-[13px] text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>
          &copy; 2026 Filana. All rights reserved.
        </p>
      </article>
    </div>
  )
}
