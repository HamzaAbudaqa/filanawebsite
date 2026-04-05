import { motion } from 'framer-motion'
import DeviceMockupCluster from './DeviceMockupCluster'

/**
 * Hero — Cinematic product reveal.
 *
 * Layout: Feature pill → Massive split-opacity headline → Subtext → CTAs → Device cluster
 * Typography is poster-style: huge, bold, tight, with brightness contrast for hierarchy.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 px-6 overflow-hidden">
      {/* Massive headline — 3D popping text for key words */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="text-center max-w-5xl mb-6"
      >
        <span className="block text-[48px] md:text-[68px] lg:text-[84px] font-bold tracking-[-0.04em] leading-[0.96]">
          <span className="text-white">Your finances.</span>
          <br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(180deg, #888 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              filter: 'drop-shadow(0 4px 8px rgba(79,70,229,0.3)) drop-shadow(0 1px 0 rgba(255,255,255,0.1))',
            }}
          >Clear, automated,</span>
          <br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(180deg, #888 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 8px rgba(79,70,229,0.3)) drop-shadow(0 1px 0 rgba(255,255,255,0.1))',
            }}
          >and finally </span>{' '}
          <span className="text-white">under control.</span>
        </span>
      </motion.h1>

      {/* Supporting text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-[#666] text-[16px] md:text-[18px] text-center max-w-lg leading-relaxed mb-10"
      >
        Automatic expense tracking, smart categorization,
        AI-driven insights, and a personal financial assistant —
        all in one beautifully crafted app.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-3 mb-16"
      >
        <button
          className="bg-lime text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 active:scale-95"
          style={{
            boxShadow: '0 0 30px rgba(177,247,11,0.12), 0 4px 15px rgba(0,0,0,0.3)',
          }}
        >
          Start tracking
        </button>
        <button className="bg-white/[0.04] border border-white/[0.07] text-white/55 font-medium px-8 py-4 rounded-full text-[15px] hover:bg-white/[0.07] hover:text-white/70 transition-all duration-300">
          See how it works
        </button>
      </motion.div>

      {/* Device cluster — the cinematic centerpiece */}
      <DeviceMockupCluster />
    </section>
  )
}
