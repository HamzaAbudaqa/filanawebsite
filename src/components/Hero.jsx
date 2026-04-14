import { motion } from 'framer-motion'
import DeviceMockupCluster from './DeviceMockupCluster'

const PINK = '#d94391'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 px-6 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="text-center max-w-5xl mb-6"
      >
        <span className="block text-[48px] md:text-[68px] lg:text-[84px] font-bold tracking-[-0.04em] leading-[0.96]">
          <span className="text-white">Your finances.</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>Clear, automated,</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.28)' }}>and finally </span>
          <span className="text-white">under control.</span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-[16px] md:text-[18px] text-center max-w-lg leading-relaxed mb-10"
        style={{ color: 'rgba(255,255,255,0.35)' }}
      >
        Automatic expense tracking, smart categorization,
        AI-driven insights, and a personal financial assistant —
        all in one beautifully crafted app.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-3 mb-16"
      >
        <button
          className="text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 active:scale-95"
          style={{
            background: PINK,
            boxShadow: '0 0 28px rgba(217,67,145,0.20), 0 4px 15px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(217,67,145,0.32), 0 4px 15px rgba(0,0,0,0.3)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(217,67,145,0.20), 0 4px 15px rgba(0,0,0,0.3)'}
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
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.70)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.50)' }}
        >
          See how it works
        </button>
      </motion.div>

      <DeviceMockupCluster />
    </section>
  )
}
