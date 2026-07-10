import { motion } from 'framer-motion'

const items = [
  {
    label: 'Bank-level encryption',
    sub: '256-bit, end-to-end',
    icon: (
      <path d="M6 10V7a6 6 0 0 1 12 0v3M4 10h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10z" />
    ),
  },
  {
    label: 'Read-only access',
    sub: 'We can never move your money',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
  {
    label: 'Powered by Plaid',
    sub: '10,000+ institutions supported',
    icon: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
  },
  {
    label: 'CRA audit-ready',
    sub: 'Every receipt, organized',
    icon: (
      <>
        <path d="M7 3h10a1 1 0 0 1 1 1v16l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1z" />
        <path d="M9 8h6M9 12h6" />
      </>
    ),
  },
]

export default function TrustStrip() {
  return (
    <section className="relative py-14 px-6 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-3"
          >
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: 36, height: 36, background: 'rgba(14,14,14,0.045)' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="rgba(14,14,14,0.55)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {item.icon}
              </svg>
            </div>
            <div>
              <p className="text-[13.5px] font-semibold text-[#0E0E0E] leading-tight">{item.label}</p>
              <p className="text-[12px] mt-0.5 leading-snug" style={{ color: 'rgba(14,14,14,0.4)' }}>{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
