import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const PINK = '#d94391'

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
        background: '#fff',
        padding: '14px 28px',
        textDecoration: 'none',
        boxShadow: '0 0 40px rgba(217,67,145,0.18)',
      }}
    >
      <svg width="26" height="32" viewBox="0 0 814 1000" fill="#000">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-162.7-101c-58.9-63.5-105.4-162.2-105.4-255.4 0-178.4 116.5-272.7 231.3-272.7 59.8 0 109.4 39.4 147.2 39.4 36 0 92.7-41.8 160.8-41.8 28.9 0 108.3 2.6 168.9 80.5zm-318.8-65.4c31.3-37.5 53.2-89.7 53.2-141.9 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 84.7-55.1 137.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.4-70.7z"/>
      </svg>
      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '11px', color: '#000', letterSpacing: '0.04em', lineHeight: 1 }}>
          Download on the
        </div>
        <div style={{ fontSize: '22px', fontWeight: 700, color: '#000', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
          App Store
        </div>
      </div>
    </motion.a>
  )
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <div
            className="rounded-[36px] overflow-hidden"
            style={{
              width: 240,
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(217,67,145,0.08)',
            }}
          >
            <img src="/IMG_2265.PNG" alt="Filana app" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-8"
        >
          <div>
            <h1
              className="text-[46px] md:text-[58px] font-bold leading-[1.0] tracking-tight text-white mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Your finances,<br />
              <span style={{ color: PINK }}>finally organized.</span>
            </h1>
            <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Free to download. No credit card required.
            </p>
          </div>

          <AppStoreButton />
        </motion.div>
      </section>
    </div>
  )
}
