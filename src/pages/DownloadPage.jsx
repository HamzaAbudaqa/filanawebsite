import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const ACCENT = '#C2703D'

const features = [
  { label: 'Auto expense tracking' },
  { label: 'AI-driven insights' },
  { label: 'Smart categorization' },
]

function AppStoreButton() {
  return (
    <motion.a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 rounded-2xl"
      style={{
        background: '#0E0E0E',
        padding: '14px 28px',
        textDecoration: 'none',
        boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
      }}
    >
      <svg width="26" height="32" viewBox="0 0 814 1000" fill="#fff">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-162.7-101c-58.9-63.5-105.4-162.2-105.4-255.4 0-178.4 116.5-272.7 231.3-272.7 59.8 0 109.4 39.4 147.2 39.4 36 0 92.7-41.8 160.8-41.8 28.9 0 108.3 2.6 168.9 80.5zm-318.8-65.4c31.3-37.5 53.2-89.7 53.2-141.9 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 84.7-55.1 137.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.4-70.7z" />
      </svg>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '11px', color: '#fff', letterSpacing: '0.04em', lineHeight: 1, opacity: 0.7 }}>
          Download on the
        </div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          App Store
        </div>
      </div>
    </motion.a>
  )
}

function PhoneMockup() {
  return (
    <div style={{ position: 'relative', isolation: 'isolate', display: 'inline-block' }}>
      <div
        style={{
          position: 'absolute',
          top: '2.4%',
          left: '3.6%',
          right: '3.6%',
          bottom: '2.4%',
          borderRadius: '11.5%',
          overflow: 'hidden',
          zIndex: 1,
          background: '#fff',
        }}
      >
        <img src="/screenshots/dashboard.png" alt="" className="w-full h-full object-cover object-top" />
      </div>

      <img
        src="/iphone-front.png"
        alt=""
        aria-hidden="true"
        style={{
          width: 280,
          display: 'block',
          position: 'relative',
          zIndex: 2,
          mixBlendMode: 'darken',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">

      {/* Ambient background glow */}
      <div
        style={{
          position: 'fixed',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          height: 900,
          background: 'radial-gradient(circle, rgba(194,112,61,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Secondary accent glow */}
      <div
        style={{
          position: 'fixed',
          top: '65%',
          left: '25%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(194,112,61,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Navbar />

      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Per-phone glow halo */}
          <div
            style={{
              position: 'absolute',
              inset: -50,
              background: 'radial-gradient(ellipse at 50% 55%, rgba(194,112,61,0.14) 0%, transparent 65%)',
              pointerEvents: 'none',
              borderRadius: '50%',
            }}
          />

          <div
            style={{
              transform: 'perspective(1400px) rotateY(-7deg) rotateX(4deg)',
              filter: 'drop-shadow(0 60px 100px rgba(0,0,0,0.20)) drop-shadow(-8px 16px 40px rgba(0,0,0,0.12)) drop-shadow(0 0 50px rgba(194,112,61,0.10))',
            }}
          >
            <PhoneMockup />
          </div>
        </motion.div>

        {/* Right — text + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8"
        >
          <div>
            <h1
              className="text-[46px] md:text-[58px] font-bold leading-[1.02] text-[#0E0E0E] mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Your finances,<br />
              <span style={{ color: ACCENT }}>finally organized.</span>
            </h1>
            <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(14,14,14,0.45)' }}>
              14 days free, then $9.99/mo. Cancel anytime.
            </p>
          </div>

          <AppStoreButton />

          {/* Feature pills */}
          <div className="flex flex-col gap-3">
            {features.map(({ label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span style={{ color: ACCENT, fontSize: 10 }}>✦</span>
                <span style={{ color: 'rgba(14,14,14,0.55)', fontSize: 14, fontWeight: 500 }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center gap-2"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: ACCENT, fontSize: 14 }}>★</span>
              ))}
            </div>
            <span style={{ color: 'rgba(14,14,14,0.35)', fontSize: 13 }}>
              Available on iOS
            </span>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
