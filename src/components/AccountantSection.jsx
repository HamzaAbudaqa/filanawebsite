import { motion } from 'framer-motion'

const ACCENT = '#C2703D'
const MINT = '#1E8449'
const MINT_SOFT = 'rgba(30,132,73,0.16)'

const points = [
  'Every expense tagged as business or personal',
  'Every receipt matched — CRA audit-ready',
  'Monthly close with a clean, exportable summary',
  'Deductible expenses flagged automatically',
]

export default function AccountantSection() {
  return (
    <section id="accountants" className="relative py-28 px-6" style={{ background: '#0E0E0E', scrollMarginTop: '96px' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — copy */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[12px] text-white/40 uppercase tracking-[3px] font-medium">For your accountant</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[34px] md:text-[46px] font-bold tracking-tight leading-[1.08] mb-6 text-white"
          >
            Hand them clean books,
            <br />
            <span className="text-white/35">not a shoebox.</span>
          </motion.h2>

          <p className="text-[15.5px] leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Every transaction categorized as it happens. Every receipt attached and matched. When tax season comes,
            export a reconciled summary instead of digging through a year of statements.
          </p>

          <div className="flex flex-col gap-4">
            {points.map((p) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: MINT_SOFT }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12l6 6 10-12" stroke={MINT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[14.5px]" style={{ color: 'rgba(255,255,255,0.75)' }}>{p}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — monthly close screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div
            className="absolute inset-0 m-auto"
            style={{
              width: '80%',
              height: '80%',
              background: 'radial-gradient(ellipse at center, rgba(30,132,73,0.14) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <div
            className="relative rounded-[32px] overflow-hidden bg-white"
            style={{
              width: 260,
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
              aspectRatio: '9/18.5',
            }}
          >
            <img src="/screenshots/monthly.png" alt="Filana monthly close screen" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
