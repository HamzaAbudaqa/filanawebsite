import { motion } from 'framer-motion'

const ACCENT = '#C2703D'

const stats = [
  { value: '<2s', label: 'Mentor response time', sub: 'ask, get an answer' },
  { value: '150+', label: 'AI insight types', sub: 'trends, anomalies, forecasts' },
  { value: '40+', label: 'Expense categories', sub: 'auto-sorted, no rules' },
  { value: '24/7', label: 'Always-on tracking', sub: 'every transaction, in real time' },
]

export default function StatsSection() {
  return (
    <section className="relative py-28 px-6 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">Under the hood</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`text-center md:text-left py-6 md:py-0 md:px-8 first:md:pl-0 ${i > 0 ? 'md:border-l md:border-black/[0.06]' : ''}`}
          >
            <p className="text-[48px] md:text-[56px] font-bold tracking-tight leading-none mb-2 text-[#0E0E0E]">
              {stat.value}
            </p>
            <p className="text-[14px] text-black/55 font-medium">{stat.label}</p>
            <p className="text-[12px] text-black/30 mt-0.5">{stat.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
