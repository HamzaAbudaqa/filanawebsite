import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PINK = '#d94391'

export default function FeatureSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
          <span className="text-[12px] text-white/25 uppercase tracking-[3px] font-medium">Features</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-16 max-w-2xl"
        >
          <span className="text-white">Finance, reimagined</span>
          <br />
          <span className="text-white/25">with intelligence.</span>
        </motion.h2>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[24px] p-8 md:p-10 relative overflow-hidden group cursor-pointer"
            style={{
              background: '#0E0E0E',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="relative">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-6"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.40)' }}
              >
                <span className="text-[12px] font-medium">AI Categorization</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-4">
                Every expense,
                <br />auto-sorted.
              </h3>
              <p className="text-white/35 text-[15px] leading-relaxed max-w-sm">
                Filana learns your patterns and categorizes every transaction instantly. No rules, no manual sorting — just clarity.
              </p>

              <Link
                to="/services"
                className="inline-block mt-6 text-[14px] font-medium transition-colors duration-200"
                style={{ color: PINK }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Learn more →
              </Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[24px] p-8 md:p-10 relative overflow-hidden group cursor-pointer"
            style={{
              background: '#0E0E0E',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/[0.015] group-hover:bg-white/[0.03] transition-colors duration-700" />

            <div className="relative">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-6"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.40)' }}
              >
                <span className="text-[12px] font-medium">Receipt Scanning</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-4">
                Snap a receipt.
                <br />Done.
              </h3>
              <p className="text-white/35 text-[15px] leading-relaxed max-w-sm">
                Point your camera at any receipt. Filana extracts the vendor, total, date, and category in seconds.
              </p>

              <Link
                to="/services"
                className="inline-block mt-6 text-[14px] font-medium transition-opacity duration-200"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.60)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                Learn more →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 rounded-[24px] p-8 md:p-10 relative overflow-hidden"
          style={{
            background: '#0E0E0E',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-6"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.40)' }}
              >
                <span className="text-[12px] font-medium">AI Assistant</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-4">
                Ask anything <span className="text-white/25">about your money.</span>
              </h3>
              <p className="text-white/35 text-[15px] leading-relaxed">
                Chat with Filana AI to get instant spending breakdowns, budget forecasts, and personalized savings advice. Like having a financial advisor in your pocket.
              </p>
            </div>

            <div className="flex flex-col gap-5 min-w-[180px]">
              {[
                { val: '< 2s', desc: 'Response time' },
                { val: '98.5%', desc: 'Answer accuracy' },
                { val: '150+', desc: 'Insight types' },
              ].map((item, i) => (
                <div key={i} className="text-right">
                  <p className="text-[24px] font-bold text-white">{item.val}</p>
                  <p className="text-[12px] text-white/25">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
