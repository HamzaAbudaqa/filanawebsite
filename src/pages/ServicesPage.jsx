import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ACCENT = '#C2703D'

const services = [
  {
    tag: 'Receipt Scanning',
    title: 'Snap a receipt. Stay audit-ready.',
    description:
      'Point your camera at any paper or digital receipt. Filana extracts the vendor, total, date, and category, then automatically matches it to the transaction — even from crumpled or low-light photos.',
    bullets: [
      'Works on paper receipts, email PDFs, and screenshots',
      'Extracts vendor, items, total, tax, and date',
      'Auto-matches to your card transaction when possible',
      'Keeps every receipt organized and CRA audit-ready',
    ],
    image: '/screenshots/receipts.png',
    flip: false,
  },
  {
    tag: 'AI Categorization',
    title: 'Business or personal? Sorted instantly.',
    description:
      'Filana learns from your spending patterns and categorizes every transaction the moment it arrives — no rules to set, no manual sorting. Client dinners, software subscriptions, office supplies: it just knows.',
    bullets: [
      'Learns and adapts to your business spending habits',
      'Handles edge cases like split bills and refunds',
      'Supports 40+ categories out of the box',
      'Lets you override and retrain in one tap',
    ],
    image: '/screenshots/dashboard.png',
    flip: true,
  },
  {
    tag: 'Mentor — AI CFO',
    title: 'Ask anything about your money.',
    description:
      'Chat with Mentor in plain English. Get instant spending summaries, health scores, deductible expense finds, and answers to questions like "Why did my spending change this month?"',
    bullets: [
      'Natural language — no financial jargon needed',
      'Understands context across your full transaction history',
      '150+ insight types: trends, anomalies, forecasts',
      'Responds in under 2 seconds on average',
    ],
    image: '/screenshots/mentor.png',
    flip: false,
  },
  {
    tag: 'Monthly Close',
    title: 'See patterns you never noticed.',
    description:
      'Every month closes into a clean summary: total spend, category breakdown, and an AI-written recap that flags what changed and why. Track your health score to stay audit-ready year-round.',
    bullets: [
      'Monthly, and yearly breakdowns',
      'Category drill-down with merchant-level detail',
      'Comparison to previous periods',
      'AI-written recap with deductible savings estimate',
    ],
    image: '/screenshots/monthly.png',
    flip: true,
  },
  {
    tag: 'Account Sync',
    title: 'All your accounts, one place.',
    description:
      'Bank accounts sync through Plaid — the same trusted infrastructure behind Venmo and Robinhood — giving you access to 10,000+ financial institutions. All connections are read-only and encrypted end-to-end, so Filana can see your data but never touch it.',
    bullets: [
      'Bank sync powered by Plaid — read-only, never moves money',
      'Email sync via Google for receipts and subscription tracking',
      'End-to-end 256-bit encryption on all synced data',
      'Revoke access at any time from your device settings',
    ],
    image: '/screenshots/sync.png',
    flip: true,
  },
]

function PhoneFrame({ image, style = {} }) {
  return (
    <div
      className="rounded-[32px] overflow-hidden flex-shrink-0 bg-white"
      style={{
        width: 200,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.14)',
        aspectRatio: '9/18.5',
        ...style,
      }}
    >
      <img src={image} alt="" className="w-full h-full object-cover object-top" />
    </div>
  )
}

function ScreenshotSlot({ image }) {
  return <PhoneFrame image={image} style={{ width: 220 }} />
}

function ServiceRow({ service }) {
  const { tag, title, description, bullets, image, flip } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: 0.05 }}
      className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20 py-20`}
      style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      {/* Screenshot */}
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
        <ScreenshotSlot image={image} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div
          className="inline-flex items-center rounded-full px-3 py-1.5 mb-5 text-[11px] font-medium uppercase tracking-widest"
          style={{ background: 'rgba(0,0,0,0.05)', color: 'rgba(14,14,14,0.5)', letterSpacing: '0.12em' }}
        >
          {tag}
        </div>

        <h3 className="text-[30px] md:text-[38px] font-bold tracking-tight leading-[1.1] text-[#0E0E0E] mb-4">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(14,14,14,0.5)' }}>
          {description}
        </p>

        <ul className="flex flex-col gap-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(14,14,14,0.62)' }}>
              <span
                className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: ACCENT }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center rounded-full px-3 py-1.5 mb-6 text-[11px] font-medium uppercase"
            style={{ background: 'rgba(0,0,0,0.05)', color: 'rgba(14,14,14,0.5)', letterSpacing: '0.15em' }}
          >
            What Filana does
          </div>

          <h1 className="text-[42px] md:text-[64px] font-bold tracking-tight leading-[1.0] mb-5">
            <span className="text-[#0E0E0E]">Everything you need</span>
            <br />
            <span style={{ color: 'rgba(14,14,14,0.28)' }}>to run clean books.</span>
          </h1>

          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(14,14,14,0.45)' }}
          >
            From receipt matching to an AI CFO that finds your deductions,
            here's every feature that makes tax time a non-event.
          </p>
        </motion.div>
      </section>

      {/* Services list */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        {services.map((service, i) => (
          <ServiceRow key={i} service={service} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[34px] md:text-[50px] font-bold tracking-tight text-[#0E0E0E] mb-4">
            Ready to try it?
          </h2>
          <p className="text-[15px] mb-8" style={{ color: 'rgba(14,14,14,0.4)' }}>
            14 days free, then $9.99/mo. Cancel anytime.
          </p>
          <button
            className="font-semibold px-8 py-4 rounded-full text-[15px] text-white transition-all duration-300 active:scale-95"
            style={{
              background: '#0E0E0E',
              boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.24)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.16)'}
            onClick={() => navigate('/download')}
          >
            Get Filana
          </button>
        </motion.div>
      </section>
    </div>
  )
}
