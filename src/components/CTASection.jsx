import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ACCENT = '#C2703D'

export default function CTASection() {
  const navigate = useNavigate()
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">Get started</span>
          </div>

          <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold tracking-[-0.03em] leading-[1] mb-6">
            <span className="text-[#0E0E0E]">Take control</span>
            <br />
            <span className="text-black/25">of your finances.</span>
          </h2>

          <p
            className="text-[16px] md:text-[18px] max-w-md mx-auto leading-relaxed mb-10"
            style={{ color: 'rgba(14,14,14,0.45)' }}
          >
            Download Filana and see where your money actually goes. 14 days free, then $9.99/mo.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              className="text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 active:scale-95"
              style={{
                background: '#0E0E0E',
                boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.24)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.16)'}
              onClick={() => navigate('/download')}
            >
              Start tracking
            </button>
            <button
              className="font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300"
              style={{
                background: 'rgba(14,14,14,0.04)',
                border: '1px solid rgba(14,14,14,0.08)',
                color: 'rgba(14,14,14,0.6)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(14,14,14,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(14,14,14,0.04)' }}
            >
              See how it works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
