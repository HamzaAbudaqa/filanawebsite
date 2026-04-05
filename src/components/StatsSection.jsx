import { motion } from 'framer-motion'

const stats = [
  { value: '250K+', label: 'Active users', sub: 'and growing' },
  { value: '$2.1B', label: 'Tracked annually', sub: 'across all accounts' },
  { value: '99.8%', label: 'Accuracy', sub: 'AI categorization' },
  { value: '4.9', label: 'App Store rating', sub: '12K+ reviews' },
]

export default function StatsSection() {
  return (
    <section className="relative py-28 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span className="text-[12px] text-white/25 uppercase tracking-[3px] font-medium">Trusted by thousands</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="text-[48px] md:text-[56px] font-bold tracking-tight leading-none mb-2 text-white">
              {stat.value}
            </p>
            <p className="text-[14px] text-white/40 font-medium">{stat.label}</p>
            <p className="text-[12px] text-white/15 mt-0.5">{stat.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
