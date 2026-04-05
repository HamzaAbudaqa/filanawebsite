import { motion } from 'framer-motion'

export default function FeatureSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-lime" />
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
          {/* Card 1 — Lime highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[24px] p-8 md:p-10 relative overflow-hidden group cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #7B5CFF 0%, #6347D9 60%, #4E35B1 100%)',
            }}
          >
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-6 right-8 w-28 h-28 rounded-full bg-black/[0.06]" />

            <div className="relative">
              <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5 mb-6">
                <span className="text-[12px]">🧠</span>
                <span className="text-[12px] text-white/70 font-medium">AI Categorization</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-4">
                Every expense,
                <br />auto-sorted.
              </h3>
              <p className="text-white/50 text-[15px] leading-relaxed max-w-sm">
                Finova learns your patterns and categorizes every transaction instantly. No rules, no manual sorting — just clarity.
              </p>

              <button className="mt-6 bg-white text-[#7B5CFF] font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
                Learn more →
              </button>
            </div>
          </motion.div>

          {/* Card 2 — Dark */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0E0E0E] rounded-[24px] p-8 md:p-10 relative overflow-hidden border border-white/[0.04] group cursor-pointer"
          >
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-lime/[0.02] group-hover:bg-lime/[0.04] transition-colors duration-700" />

            <div className="relative">
              <div className="inline-flex items-center gap-1.5 bg-white/[0.04] rounded-full px-3 py-1.5 mb-6">
                <span className="text-[12px]">📸</span>
                <span className="text-[12px] text-white/35 font-medium">Receipt Scanning</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-4">
                Snap a receipt.
                <br />Done.
              </h3>
              <p className="text-white/25 text-[15px] leading-relaxed max-w-sm">
                Point your camera at any receipt. Finova extracts the vendor, total, date, and category in seconds.
              </p>

              <button className="mt-6 bg-white/[0.05] border border-white/[0.07] text-white/55 font-medium text-[14px] px-6 py-3 rounded-full hover:bg-white/[0.08] transition-colors">
                Learn more →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Full-width card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 bg-[#0E0E0E] rounded-[24px] p-8 md:p-10 border border-white/[0.04] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(177,247,11,0.03) 0%, transparent 60%)', filter: 'blur(60px)' }} />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-1.5 bg-white/[0.04] rounded-full px-3 py-1.5 mb-6">
                <span className="text-[12px]">💬</span>
                <span className="text-[12px] text-white/35 font-medium">AI Assistant</span>
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-4">
                Ask anything <span className="text-white/25">about your money.</span>
              </h3>
              <p className="text-white/25 text-[15px] leading-relaxed">
                Chat with Finova AI to get instant spending breakdowns, budget forecasts, and personalized savings advice. It's like having a financial advisor in your pocket.
              </p>
            </div>

            <div className="flex flex-col gap-4 min-w-[200px]">
              {[
                { val: '< 2s', desc: 'Response time' },
                { val: '98.5%', desc: 'Answer accuracy' },
                { val: '150+', desc: 'Insight types' },
              ].map((item, i) => (
                <div key={i} className="text-right">
                  <p className="text-[24px] font-bold text-lime">{item.val}</p>
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
