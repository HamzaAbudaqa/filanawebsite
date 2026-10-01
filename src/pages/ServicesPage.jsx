import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Phone3D } from '../components/DeviceMockupCluster'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const ACCENT = '#C2703D'
const INK = '#0E0E0E'

const services = [
  {
    id: 'receipts',
    tag: 'Receipt Scanning',
    title: 'Snap a receipt.',
    titleMuted: 'Stay audit-ready.',
    description:
      'Point your camera at any paper or digital receipt. Filana extracts the vendor, total, date, and category, then matches it to the transaction — even from crumpled or low-light photos.',
    bullets: [
      'Paper receipts, email PDFs, and screenshots',
      'Extracts vendor, items, total, tax, and date',
      'Auto-matches to your card transaction',
      'Organized and CRA audit-ready',
    ],
    stat: { value: 'Any', label: 'receipt — paper, PDF, or screenshot' },
    image: '/screenshots/receipts.png',
    secondaryImage: '/screenshots/receipt-detail.png',
    glow: 'rgba(194,112,61,0.28)',
  },
  {
    id: 'categorization',
    tag: 'AI Categorization',
    title: 'Business or personal?',
    titleMuted: 'Sorted instantly.',
    description:
      'Filana learns from your spending and categorizes every transaction the moment it arrives — no rules to set, no manual sorting. Client dinners, software, office supplies: it just knows.',
    bullets: [
      'Adapts to your business spending habits',
      'Handles split bills and refunds',
      '40+ categories out of the box',
      'Override and retrain in one tap',
    ],
    stat: { value: '40+', label: 'categories built in' },
    image: '/screenshots/dashboard.png',
    glow: 'rgba(30,132,73,0.22)',
  },
  {
    id: 'mentor',
    tag: 'Mentor — AI CFO',
    title: 'Ask anything',
    titleMuted: 'about your money.',
    description:
      'Chat with Mentor in plain English. Get spending summaries, health scores, deductible expense finds, and answers to questions like “Why did my spending change this month?”',
    bullets: [
      'Plain English — no financial jargon',
      'Context across your full history',
      '150+ insight types: trends, anomalies, forecasts',
      'Answers in under 2 seconds on average',
    ],
    stat: { value: '150+', label: 'insight types' },
    image: '/screenshots/mentor.png',
    secondaryImage: '/screenshots/sync.png',
    glow: 'rgba(110,90,200,0.22)',
  },
  {
    id: 'monthly',
    tag: 'Monthly Close',
    title: 'See patterns',
    titleMuted: 'you never noticed.',
    description:
      'Every month closes into a clean summary: total spend, category breakdown, and an AI-written recap that flags what changed and why. Track your health score to stay audit-ready year-round.',
    bullets: [
      'Monthly and yearly breakdowns',
      'Merchant-level category drill-down',
      'Comparison to previous periods',
      'Recap with deductible savings estimate',
    ],
    stat: { value: 'Monthly', label: '+ yearly breakdowns, written for you' },
    image: '/screenshots/monthly.png',
    glow: 'rgba(194,112,61,0.24)',
  },
  {
    id: 'sync',
    tag: 'Account Sync',
    title: 'All your accounts.',
    titleMuted: 'One place.',
    description:
      'Bank accounts sync through Plaid — the infrastructure behind Venmo and Robinhood — with access to 10,000+ institutions. Connections are read-only and encrypted, so Filana can see your data but never touch it.',
    bullets: [
      'Read-only via Plaid — never moves money',
      'Google email sync for receipts and subscriptions',
      '256-bit encryption on all synced data',
      'Revoke access anytime from settings',
    ],
    stat: { value: '10,000+', label: 'banks supported' },
    image: '/screenshots/connect-bank.png',
    glow: 'rgba(40,110,200,0.2)',
  },
]

const extras = [
  {
    title: 'Health score',
    body: 'One number that tells you how audit-ready your books are.',
    icon: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  },
  {
    title: 'Deductible finder',
    body: 'Surfaces write-offs you would have missed, with receipts attached.',
    icon: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4" />,
  },
  {
    title: 'Subscription tracking',
    body: 'Spots recurring charges from your inbox so nothing renews quietly.',
    icon: <path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M18 3v4h-4M6 21v-4h4" />,
  },
  {
    title: 'Bank-grade security',
    body: '256-bit encryption, read-only access, and revocable at any time.',
    icon: <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
  },
]

function Icon({ children, size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

function Check() {
  return (
    <span
      className="mt-[1px] flex items-center justify-center w-[18px] h-[18px] rounded-full flex-shrink-0"
      style={{ background: 'rgba(194,112,61,0.12)', color: ACCENT }}
    >
      <Icon size={11}>
        <path d="m5 12 5 5 9-10" strokeWidth="3" />
      </Icon>
    </span>
  )
}

const SLIDE_MS = 7000

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir * -60 }),
}

function FeatureSlide({ service, index }) {
  const { tag, title, titleMuted, description, bullets, stat, image, secondaryImage, glow } = service

  return (
    <div className="grid md:grid-cols-2 md:min-h-[640px]">
      {/* Text */}
      <div className="p-8 md:p-14 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[12px] font-semibold tabular-nums" style={{ color: ACCENT }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="w-6 h-px" style={{ background: 'rgba(14,14,14,0.15)' }} />
          <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/45">{tag}</span>
        </div>

        <h2 className="text-[32px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05] mb-5">
          <span style={{ color: INK }}>{title}</span>
          <br />
          <span className="text-black/30">{titleMuted}</span>
        </h2>

        <p className="text-[15.5px] leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(14,14,14,0.55)' }}>
          {description}
        </p>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-[14px] leading-snug" style={{ color: 'rgba(14,14,14,0.7)' }}>
              <Check />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-3 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          <span className="text-[28px] font-bold tracking-tight" style={{ color: INK }}>{stat.value}</span>
          <span className="text-[13px] text-black/45">{stat.label}</span>
        </div>
      </div>

      {/* Phone */}
      <div
        className="relative h-[420px] md:h-auto flex justify-center overflow-hidden"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 70%, ${glow} 0%, transparent 70%)` }}
      >
        {secondaryImage ? (
          <>
            <motion.div
              initial={{ y: 70, rotate: -6 }}
              animate={{ y: 0, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-16 md:top-24 left-[calc(50%-165px)] md:left-[calc(50%-215px)]"
            >
              <Phone3D className="w-[190px] h-[396px] md:w-[240px] md:h-[500px]">
                <img src={image} alt={`${tag} screen`} draggable={false} className="w-full h-full object-cover object-top" />
              </Phone3D>
            </motion.div>
            <motion.div
              initial={{ y: 50, rotate: 4 }}
              animate={{ y: 0, rotate: 4 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-10 md:top-12 left-[calc(50%-45px)] md:left-[calc(50%-40px)]"
            >
              <Phone3D className="w-[205px] h-[427px] md:w-[260px] md:h-[542px]">
                <img src={secondaryImage} alt={`${tag} detail screen`} draggable={false} className="w-full h-full object-cover object-top" />
              </Phone3D>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-12 md:top-16"
          >
            <Phone3D className="w-[250px] h-[520px] md:w-[280px] md:h-[584px]">
              <img src={image} alt={`${tag} screen`} draggable={false} className="w-full h-full object-cover object-top" />
            </Phone3D>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ArrowButton({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/[0.08] active:scale-95"
      style={{ background: 'rgba(14,14,14,0.04)', border: '1px solid rgba(14,14,14,0.07)', color: INK }}
    >
      <Icon size={16}>{children}</Icon>
    </button>
  )
}

function FeatureCarousel() {
  const location = useLocation()
  const [active, setActive] = useState(() =>
    Math.max(0, services.findIndex((s) => `#${s.id}` === location.hash))
  )
  const [direction, setDirection] = useState(1)
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })
  const reduceMotion = useReducedMotion()
  const paused = hovered || !inView

  const goTo = (i, dir = i > active ? 1 : -1) => {
    if (i === active) return
    setDirection(dir)
    setActive(i)
  }
  const next = () => goTo((active + 1) % services.length, 1)
  const prev = () => goTo((active - 1 + services.length) % services.length, -1)

  const onTabKeyDown = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 md:px-6 pb-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Features"
        onKeyDown={onTabKeyDown}
        className="no-scrollbar flex gap-2 overflow-x-auto md:justify-center mb-6 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {services.map((s, i) => {
          const isActive = i === active
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => goTo(i)}
              className="relative overflow-hidden flex-shrink-0 text-[13px] font-medium px-4 py-2.5 rounded-full transition-colors duration-300"
              style={
                isActive
                  ? { background: INK, color: '#FFFFFF', border: `1px solid ${INK}` }
                  : { background: 'rgba(14,14,14,0.04)', color: 'rgba(14,14,14,0.6)', border: '1px solid rgba(14,14,14,0.06)' }
              }
            >
              {s.tag}
              {isActive && !reduceMotion && (
                <span
                  className="feature-progress absolute left-0 bottom-0 h-[2px]"
                  style={{
                    background: ACCENT,
                    animationDuration: `${SLIDE_MS}ms`,
                    animationPlayState: paused ? 'paused' : 'running',
                  }}
                  onAnimationEnd={next}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Slide */}
      <div
        role="tabpanel"
        aria-label={services[active].tag}
        className="relative rounded-[32px] overflow-hidden"
        style={{ background: '#F6F6F5', border: '1px solid rgba(0,0,0,0.04)' }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={services[active].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset, velocity }) => {
              if (offset.x < -80 || velocity.x < -500) next()
              else if (offset.x > 80 || velocity.x > 500) prev()
            }}
          >
            <FeatureSlide service={services[active]} index={active} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5 px-2">
        <span className="text-[13px] font-medium tabular-nums text-black/40">
          <span style={{ color: INK }}>{String(active + 1).padStart(2, '0')}</span>
          {' / '}
          {String(services.length).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          <ArrowButton onClick={prev} label="Previous feature">
            <path d="m15 18-6-6 6-6" />
          </ArrowButton>
          <ArrowButton onClick={next} label="Next feature">
            <path d="m9 18 6-6-6-6" />
          </ArrowButton>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">Features</span>
          </div>

          <h1 className="text-[44px] md:text-[72px] font-bold tracking-[-0.04em] leading-[0.98] mb-6">
            <span style={{ color: INK }}>Everything you need</span>
            <br />
            <span className="text-black/25">to run clean books.</span>
          </h1>

          <p
            className="text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(14,14,14,0.45)' }}
          >
            From receipt matching to an AI CFO that finds your deductions :
            every feature that makes tax time a non-event.
          </p>

        </motion.div>
      </section>

      <FeatureCarousel />

      {/* Also included */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[30px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05] mb-10 px-2"
        >
          <span style={{ color: INK }}>And the details</span>{' '}
          <span className="text-black/25">that add up.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extras.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
              style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-black/[0.05] text-black/70 transition-colors duration-300 group-hover:bg-[#0E0E0E] group-hover:text-white">
                <Icon>{e.icon}</Icon>
              </div>
              <h3 className="text-[16px] font-semibold tracking-tight mb-2" style={{ color: INK }}>{e.title}</h3>
              <p className="text-[14px] leading-relaxed text-black/50">{e.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to try it?"
        titleMuted=""
        body="14 days free, then $9.99/mo. Cancel anytime."
        showSecondary={false}
      />
      <Footer />
    </div>
  )
}
