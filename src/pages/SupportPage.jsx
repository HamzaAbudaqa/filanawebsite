import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ACCENT = '#C2703D'
const INK = '#0E0E0E'
const SUPPORT_EMAIL = 'supportfilana@gmail.com'

const faqs = [
  {
    q: 'How do I connect my bank account?',
    a: 'Open Filana, tap "Add Account," and follow the Plaid connection flow. Plaid supports 10,000+ financial institutions and the connection is read-only — we can never move or modify your money.',
  },
  {
    q: 'Is my data safe?',
    a: 'All synced data is encrypted end-to-end using 256-bit encryption. Bank connections use Plaid and email connections use Google — both with read-only access. You can revoke access at any time from your device settings.',
  },
  {
    q: 'How do I cancel or delete my account?',
    a: 'Go to Settings → Account → Delete Account inside the app. This permanently removes all your data from our servers. If you run into any issues, email us and we\'ll handle it manually within 24 hours.',
  },
  {
    q: 'A transaction is miscategorized — how do I fix it?',
    a: 'Tap any transaction and select "Edit Category." Filana will learn from your correction and apply it to similar transactions going forward.',
  },
  {
    q: 'Why is my account not syncing?',
    a: 'Try disconnecting and reconnecting the account from Settings → Connected Accounts. If the issue persists, your bank may have changed its security requirements. Email us with the institution name and we\'ll look into it.',
  },
]

const quickLinks = [
  {
    title: 'Privacy Policy',
    body: 'What we collect and how we protect it.',
    to: '/privacy',
    icon: <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
  },
  {
    title: 'Terms of Service',
    body: 'Billing, trials, and acceptable use.',
    to: '/terms',
    icon: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h6" />,
  },
  {
    title: 'Features',
    body: 'A tour of everything Filana does.',
    to: '/services',
    icon: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
  },
]

function Icon({ children, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div
      className="rounded-[20px] transition-colors duration-300"
      style={{ background: open ? '#F6F6F5' : '#FFFFFF', border: `1px solid ${open ? 'rgba(0,0,0,0.04)' : 'rgba(0,0,0,0.07)'}` }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
      >
        <span className="text-[15.5px] font-semibold tracking-tight" style={{ color: INK }}>{q}</span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? INK : 'rgba(14,14,14,0.05)',
            color: open ? '#FFFFFF' : INK,
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          <Icon size={14}><path d="M12 5v14M5 12h14" strokeWidth="2.2" /></Icon>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pr-16 text-[15px] leading-[1.7]" style={{ color: 'rgba(14,14,14,0.58)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-14 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            <span className="text-[12px] text-black/40 uppercase tracking-[3px] font-medium">Support</span>
          </div>
          <h1 className="text-[44px] md:text-[72px] font-bold tracking-[-0.04em] leading-[0.98] mb-6">
            <span style={{ color: INK }}>How can we</span>
            <br />
            <span className="text-black/25">help you?</span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-md mx-auto" style={{ color: 'rgba(14,14,14,0.45)' }}>
            Browse the common questions below, or reach out directly — we respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact + quick links */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-4"
      >
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="group relative overflow-hidden rounded-[28px] p-8 md:p-10 flex flex-col justify-between min-h-[260px]"
          style={{ background: INK, textDecoration: 'none' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 90% at 100% 120%, rgba(194,112,61,0.4) 0%, transparent 70%)' }}
          />
          <div className="relative w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <Icon><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 8 9 6 9-6" /></Icon>
          </div>
          <div className="relative mt-10">
            <p className="text-[13px] uppercase tracking-[2px] font-medium text-white/40 mb-2">Email support</p>
            <p className="text-[22px] md:text-[28px] font-bold tracking-tight text-white mb-2 break-all">{SUPPORT_EMAIL}</p>
            <p className="flex items-center gap-2 text-[14px] text-white/50">
              Replies within 24 hours
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </p>
          </div>
        </a>

        <div className="flex flex-col gap-4">
          {quickLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group flex items-center gap-5 rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.06)]"
              style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)', textDecoration: 'none' }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-black/[0.05] text-black/70 transition-colors duration-300 group-hover:bg-[#0E0E0E] group-hover:text-white">
                <Icon>{l.icon}</Icon>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold tracking-tight" style={{ color: INK }}>{l.title}</p>
                <p className="text-[13.5px] text-black/45">{l.body}</p>
              </div>
              <span className="text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black/60">→</span>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-24 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start px-2">
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-[-0.03em] leading-[1.05] mb-4">
            <span style={{ color: INK }}>Common</span>
            <br />
            <span className="text-black/25">questions.</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-black/45 max-w-xs">
            Can't find what you're looking for?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="underline underline-offset-[3px] decoration-black/20 hover:decoration-black/60" style={{ color: INK }}>
              Email us
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <FaqItem
              key={q}
              q={q}
              a={a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
