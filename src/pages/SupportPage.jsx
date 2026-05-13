import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

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

export default function SupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 text-[12px] font-medium uppercase"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.15em' }}
          >
            Support
          </div>
          <h1 className="text-[40px] md:text-[58px] font-bold tracking-tight text-white leading-[1.05] mb-4">
            How can we help?
          </h1>
          <p className="text-[16px] leading-relaxed max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Browse the common questions below, or reach out directly — we respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Email CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-3xl mx-auto px-6 mb-16"
      >
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all duration-200 group"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.055)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
                <path d="M2 8l10 7 10-7" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Email us at</p>
              <p className="text-[15px] font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{SUPPORT_EMAIL}</p>
            </div>
          </div>
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16 pb-32">
        <h2 className="text-[18px] font-semibold text-white mb-8 tracking-tight">
          Common questions
        </h2>

        <div className="flex flex-col gap-px" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="py-6"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[15px] font-medium text-white mb-2">{q}</p>
              <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{a}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-[14px] text-center" style={{ color: 'rgba(255,255,255,0.22)' }}>
          Still stuck?{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Email us
          </a>{' '}
          and we'll get back to you within 24 hours.
        </p>
      </section>
    </div>
  )
}
