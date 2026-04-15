import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const PINK = '#d94391'

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
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: PINK }} />
            <span className="text-[12px] text-white/25 uppercase tracking-[3px] font-medium">Get started</span>
          </div>

          <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold tracking-[-0.03em] leading-[1] mb-6">
            <span className="text-white">Take control</span>
            <br />
            <span className="text-white/25">of your finances.</span>
          </h2>

          <p
            className="text-[16px] md:text-[18px] max-w-md mx-auto leading-relaxed mb-10"
            style={{ color: 'rgba(255,255,255,0.30)' }}
          >
            Download Filana and see where your money actually goes. Your first month is free.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              className="text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 active:scale-95"
              style={{
                background: PINK,
                boxShadow: '0 0 28px rgba(217,67,145,0.18), 0 4px 15px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(217,67,145,0.30), 0 4px 15px rgba(0,0,0,0.3)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(217,67,145,0.18), 0 4px 15px rgba(0,0,0,0.3)'}
              onClick={() => navigate('/download')}
            >
              Start tracking
            </button>
            <button
              className="font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.50)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            >
              See how it works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
