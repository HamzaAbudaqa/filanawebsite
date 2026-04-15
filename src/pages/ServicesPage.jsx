import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const PINK = '#d94391'

const services = [
  {
    tag: 'AI Categorization',
    title: 'Every expense, auto-sorted.',
    description:
      'Filana learns from your spending patterns and categorizes every transaction the moment it arrives — no rules to set, no manual sorting. Groceries, subscriptions, dining, travel: it just knows.',
    bullets: [
      'Learns and adapts to your personal spending habits',
      'Handles edge cases like split bills and refunds',
      'Supports 40+ categories out of the box',
      'Lets you override and retrain in one tap',
    ],
    images: ['/IMG_2265.PNG', '/IMG_2274.PNG'],
    screenshotAlt: 'AI Categorization screen',
    flip: false,
  },
  {
    tag: 'Receipt Scanning',
    title: 'Snap a receipt. Done.',
    description:
      'Point your camera at any paper or digital receipt. Filana extracts the vendor, line items, total, date, and category in under two seconds — even from crumpled or low-light photos.',
    bullets: [
      'Works on paper receipts, email PDFs, and screenshots',
      'Extracts vendor, items, total, tax, and date',
      'Auto-matches to your card transaction when possible',
      'Stores original image for reference',
    ],
    images: ['/IMG_2276.PNG'],
    screenshotAlt: 'Receipt Scanning screen',
    flip: true,
  },
  {
    tag: 'AI Assistant',
    title: 'Ask anything about your money.',
    description:
      'Chat with the Filana AI in plain English. Get instant spending summaries, budget forecasts, savings suggestions, and answers to questions like "How much did I spend on coffee last month?"',
    bullets: [
      'Natural language — no financial jargon needed',
      'Understands context across your full transaction history',
      '150+ insight types: trends, anomalies, forecasts',
      'Responds in under 2 seconds on average',
    ],
    images: ['/IMG_2272.PNG', '/IMG_2273.PNG'],
    screenshotAlt: 'AI Assistant chat screen',
    flip: false,
  },
  {
    tag: 'Spending Insights',
    title: 'See patterns you never noticed.',
    description:
      'Interactive charts break down your spending by category, merchant, time period, and more. Spot trends at a glance and understand exactly where your money goes each month.',
    bullets: [
      'Weekly, monthly, and yearly breakdowns',
      'Category drill-down with merchant-level detail',
      'Comparison to previous periods',
      'Unusual spend alerts',
    ],
    images: ['/IMG_2277.PNG', '/IMG_2278.PNG'],
    screenshotAlt: 'Spending Insights charts screen',
    flip: true,
  },
  {
    tag: 'Account Sync',
    title: 'All your accounts, one place.',
    description:
      'Connect bank accounts, credit cards, and digital wallets securely. Filana keeps everything in sync so you always have an up-to-date picture of your net worth.',
    bullets: [
      'Bank-level 256-bit encryption',
      'Connects to 10,000+ financial institutions',
      'Auto-refresh every few hours in the background',
      'Read-only access — Filana never moves money',
    ],
    images: ['/IMG_2264.PNG'],
    screenshotAlt: 'Account Sync screen',
    flip: true,
  },
]

function PhoneFrame({ src, alt, style = {} }) {
  return (
    <div
      className="rounded-[32px] overflow-hidden flex-shrink-0"
      style={{
        width: 200,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
        ...style,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  )
}

function ScreenshotSlot({ alt, images }) {
  if (images && images.length === 2) {
    return (
      <div className="relative flex items-end justify-center" style={{ width: 310, height: 440 }}>
        {/* Back phone */}
        <div className="absolute" style={{ left: 0, bottom: 0 }}>
          <PhoneFrame src={images[1]} alt={alt} style={{ width: 195, opacity: 0.88 }} />
        </div>
        {/* Front phone */}
        <div className="absolute" style={{ right: 0, bottom: 28 }}>
          <PhoneFrame src={images[0]} alt={alt} style={{ width: 205 }} />
        </div>
      </div>
    )
  }

  if (images && images.length === 1) {
    return <PhoneFrame src={images[0]} alt={alt} style={{ width: 220 }} />
  }

  return (
    <div
      className="rounded-[32px] flex flex-col items-center justify-center gap-3"
      style={{
        width: 220,
        aspectRatio: '9/18',
        background: '#111111',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="rgba(255,255,255,0.25)" />
          <path d="M3 16l5-5 4 4 3-3 6 6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-[11px] text-center px-4" style={{ color: 'rgba(255,255,255,0.18)' }}>{alt}</p>
    </div>
  )
}

function ServiceRow({ service }) {
  const { tag, title, description, bullets, screenshotAlt, images, flip } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: 0.05 }}
      className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20 py-20`}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Screenshot */}
      <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
        <ScreenshotSlot alt={screenshotAlt} images={images} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div
          className="inline-flex items-center rounded-full px-3 py-1.5 mb-5 text-[11px] font-medium uppercase tracking-widest"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em' }}
        >
          {tag}
        </div>

        <h3 className="text-[30px] md:text-[38px] font-bold tracking-tight leading-[1.1] text-white mb-4">
          {title}
        </h3>

        <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.38)' }}>
          {description}
        </p>

        <ul className="flex flex-col gap-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
              <span
                className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.25)' }}
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
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
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
            style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em' }}
          >
            What Filana does
          </div>

          <h1 className="text-[42px] md:text-[64px] font-bold tracking-tight leading-[1.0] mb-5">
            <span className="text-white">Everything you need</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>to own your finances.</span>
          </h1>

          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            From automatic categorization to an AI that answers your money questions,
            here's every feature that makes Filana different.
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
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[34px] md:text-[50px] font-bold tracking-tight text-white mb-4">
            Ready to try it?
          </h2>
          <p className="text-[15px] mb-8" style={{ color: 'rgba(255,255,255,0.30)' }}>
            Your first month is free. No credit card required.
          </p>
          <button
            className="font-semibold px-8 py-4 rounded-full text-[15px] text-white transition-all duration-300 active:scale-95"
            style={{
              background: PINK,
              boxShadow: '0 0 24px rgba(217,67,145,0.18), 0 4px 15px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 36px rgba(217,67,145,0.28), 0 4px 15px rgba(0,0,0,0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 24px rgba(217,67,145,0.18), 0 4px 15px rgba(0,0,0,0.3)'}
          >
            Start tracking
          </button>
        </motion.div>
      </section>
    </div>
  )
}
