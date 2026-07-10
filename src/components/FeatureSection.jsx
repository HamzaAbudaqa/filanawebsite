import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ACCENT = '#C2703D'

const extras = [
  'Monthly close with a clean summary',
  'Health score, so you know where you stand',
  'Deductible expense finder',
  '10,000+ banks via Plaid sync',
]

const prompts = [
  'Why did my spending change this month?',
  'What can I deduct this quarter?',
  'How much did I spend on meals & entertainment?',
]

export default function FeatureSection() {
  return (
    <section className="relative py-24 px-6" style={{ background: '#F6F6F5' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">Features</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-16 max-w-2xl"
        >
          <span className="text-[#0E0E0E]">Bookkeeping, reimagined</span>
          <br />
          <span className="text-black/25">with intelligence.</span>
        </motion.h2>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 — Receipts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[24px] p-8 md:p-10 relative cursor-pointer transition-shadow duration-500"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div className="relative">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-6"
                style={{ background: 'rgba(0,0,0,0.05)', color: 'rgba(14,14,14,0.55)' }}
              >
                <span className="text-[12px] font-medium">Receipt Scanning</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-[#0E0E0E] tracking-tight leading-[1.1] mb-4">
                Snap a receipt.
                <br />Stay audit-ready.
              </h3>
              <p className="text-black/45 text-[15px] leading-relaxed max-w-sm">
                Point your camera at any paper or digital receipt. Filana matches it to the transaction, extracts the total, and keeps every deduction backed by proof.
              </p>

              <Link
                to="/services"
                className="inline-block mt-6 text-[14px] font-medium transition-colors duration-200"
                style={{ color: ACCENT }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Learn more →
              </Link>
            </div>
          </motion.div>

          {/* Card 2 — Categorization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[24px] p-8 md:p-10 relative cursor-pointer transition-shadow duration-500"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div className="relative">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-6"
                style={{ background: 'rgba(0,0,0,0.05)', color: 'rgba(14,14,14,0.55)' }}
              >
                <span className="text-[12px] font-medium">AI Categorization</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-[#0E0E0E] tracking-tight leading-[1.1] mb-4">
                Business or personal?
                <br />Sorted instantly.
              </h3>
              <p className="text-black/45 text-[15px] leading-relaxed max-w-sm">
                Filana learns your spending patterns and categorizes every transaction the moment it lands — no rules to set, no end-of-month cleanup.
              </p>

              <Link
                to="/services"
                className="inline-block mt-6 text-[14px] font-medium transition-opacity duration-200"
                style={{ color: 'rgba(14,14,14,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(14,14,14,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(14,14,14,0.5)'}
              >
                Learn more →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Full-width card — Mentor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 rounded-[24px] p-8 md:p-10 relative overflow-hidden transition-shadow duration-500"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.08)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="max-w-lg">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-6"
                style={{ background: 'rgba(0,0,0,0.05)', color: 'rgba(14,14,14,0.55)' }}
              >
                <span className="text-[12px] font-medium">Mentor — your AI CFO</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-[#0E0E0E] tracking-tight leading-[1.1] mb-4">
                Ask anything <span className="text-black/30">about your money.</span>
              </h3>
              <p className="text-black/45 text-[15px] leading-relaxed">
                Chat with Mentor in plain English to get instant spending breakdowns, a health score, and deductible expenses you would've missed. Like having a CFO on call.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 min-w-[220px]">
              {prompts.map((p) => (
                <div
                  key={p}
                  className="text-[13px] rounded-2xl px-4 py-3 leading-snug"
                  style={{ background: 'rgba(14,14,14,0.035)', color: 'rgba(14,14,14,0.55)' }}
                >
                  "{p}"
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Also included strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          <span className="text-[12px] uppercase tracking-[2px] font-medium text-black/35">Also included</span>
          {extras.map((e) => (
            <span key={e} className="flex items-center gap-2 text-[13.5px]" style={{ color: 'rgba(14,14,14,0.55)' }}>
              <span className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
              {e}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
