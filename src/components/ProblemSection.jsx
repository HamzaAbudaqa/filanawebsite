import { motion } from 'framer-motion'

const ACCENT = '#C2703D'

const problems = [
  {
    title: 'The shoebox of receipts',
    desc: 'CRA wants proof for every deduction. You have a glovebox of paper and a folder of forwarded email PDFs you\'ll "deal with later."',
  },
  {
    title: 'The category guessing game',
    desc: 'Was that lunch a client meeting or personal? Multiply that one decision by hundreds of transactions a month, every month.',
  },
  {
    title: 'The March scramble',
    desc: 'Your accountant asks for a clean P&L. You\'re still reconciling January — and hoping nothing important got missed.',
  },
]

export default function ProblemSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">The problem</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[36px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-16 max-w-2xl"
        >
          <span className="text-[#0E0E0E]">Running a business is hard.</span>
          <br />
          <span className="text-black/25">Bookkeeping shouldn't be.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[24px] p-8"
              style={{ background: '#F6F6F5', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-6 text-[14px] font-bold"
                style={{ background: 'rgba(194,112,61,0.12)', color: ACCENT }}
              >
                {i + 1}
              </div>
              <h3 className="text-[19px] font-semibold text-[#0E0E0E] mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed" style={{ color: 'rgba(14,14,14,0.5)' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
