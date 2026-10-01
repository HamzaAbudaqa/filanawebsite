import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Phone3D } from '../components/DeviceMockupCluster'

const ACCENT = '#C2703D'
const INK = '#0E0E0E'
const EASE = [0.16, 1, 0.3, 1]

// TODO: paste the real App Store listing URL here. Until it's set, the button
// falls back to the App Store home page and the desktop QR code stays hidden.
const APP_STORE_URL = ''
const STORE_HREF = APP_STORE_URL || 'https://apps.apple.com'

const features = [
  'Automatic expense tracking',
  'Receipt matching, CRA-ready',
  'AI categorization — no manual sorting',
  'Mentor, your AI CFO',
]

const trust = [
  { label: 'Read-only bank sync via Plaid', icon: <path d="M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3l9 5H3l9-5Z" /> },
  { label: '256-bit encryption', icon: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></> },
  { label: 'Cancel anytime', icon: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-3 9 2 2 4-4" /> },
]

function Icon({ children, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

function AppStoreButton() {
  return (
    <motion.a
      href={STORE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 rounded-2xl px-7 py-3.5 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.26)]"
      style={{ background: INK, textDecoration: 'none', boxShadow: '0 10px 28px rgba(0,0,0,0.18)' }}
    >
      <svg width="24" height="30" viewBox="0 0 814 1000" fill="#fff" aria-hidden="true">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-162.7-101c-58.9-63.5-105.4-162.2-105.4-255.4 0-178.4 116.5-272.7 231.3-272.7 59.8 0 109.4 39.4 147.2 39.4 36 0 92.7-41.8 160.8-41.8 28.9 0 108.3 2.6 168.9 80.5zm-318.8-65.4c31.3-37.5 53.2-89.7 53.2-141.9 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 84.7-55.1 137.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.4-70.7z" />
      </svg>
      <div className="text-left">
        <div className="text-[11px] text-white/70 leading-none tracking-[0.04em]">Download on the</div>
        <div className="text-[21px] font-bold text-white leading-[1.2] tracking-[-0.02em]">App Store</div>
      </div>
    </motion.a>
  )
}

function QRCard() {
  return (
    <div
      className="hidden md:flex items-center gap-4 rounded-2xl p-3 pr-6 text-left"
      style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)' }}
    >
      <div className="rounded-xl p-2" style={{ background: '#F6F6F5' }}>
        <QRCodeSVG value={APP_STORE_URL} size={84} fgColor={INK} bgColor="#F6F6F5" level="M" />
      </div>
      <div>
        <p className="text-[14px] font-semibold tracking-tight" style={{ color: INK }}>Scan to download</p>
        <p className="text-[13px] text-black/45">Point your iPhone camera here</p>
      </div>
    </div>
  )
}

function DemoPhone() {
  return (
    <div className="relative w-full h-[560px] md:h-[660px] flex items-center justify-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(194,112,61,0.24) 0%, transparent 70%)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        className="relative"
      >
        <Phone3D className="w-[250px] h-[520px] md:w-[300px] md:h-[625px]">
          <video
            src="/screenshots/filana-demo.mp4"
            poster="/screenshots/filana-demo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Filana app demo"
            className="w-full h-full object-cover object-top pt-[38px] bg-white"
          />
        </Phone3D>
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-[24px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.16) 0%, transparent 70%)', filter: 'blur(8px)' }}
        />
      </motion.div>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-32 md:pt-36 pb-20 grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-start"
        >
          <h1 className="text-[46px] md:text-[66px] font-bold tracking-[-0.04em] leading-[0.98] mb-6">
            <span style={{ color: INK }}>Your books,</span>
            <br />
            <span className="text-black/25">finally organized.</span>
          </h1>

          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-md mb-10" style={{ color: 'rgba(14,14,14,0.45)' }}>
            Try every feature free for 14 days, then{' '}
            <span className="font-semibold" style={{ color: INK }}>$9.99/mo</span>. Cancel anytime.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-12">
            <AppStoreButton />
            {APP_STORE_URL && (
              <>
                <span className="hidden md:block text-[13px] text-black/30">or</span>
                <QRCard />
              </>
            )}
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-8 w-full mb-8" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14px] leading-snug" style={{ color: 'rgba(14,14,14,0.7)' }}>
                <span
                  className="mt-[1px] flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0"
                  style={{ background: INK, color: '#FFFFFF' }}
                >
                  <Icon size={10}><path d="m5 12 5 5 9-10" strokeWidth="3" /></Icon>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {trust.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 text-[12.5px] font-medium px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(14,14,14,0.04)', color: 'rgba(14,14,14,0.55)' }}
              >
                <Icon size={13}>{t.icon}</Icon>
                {t.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Demo */}
        <DemoPhone />
      </section>

      <Footer />
    </div>
  )
}
