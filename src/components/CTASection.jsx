import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const INK = '#0E0E0E'

const variants = {
  dark: {
    card: { background: INK },
    glow: 'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(194,112,61,0.45) 0%, transparent 70%)',
    padding: 'py-20 md:py-24',
    title: 'text-[36px] md:text-[56px] text-white',
    muted: 'text-white/35',
    body: 'text-white/50',
    primary: { background: '#FFFFFF', color: INK },
    primaryHover: 'hover:shadow-[0_10px_40px_rgba(255,255,255,0.18)]',
    secondary: 'text-white/75 bg-white/[0.06] border border-white/[0.12] hover:bg-white/[0.12] hover:text-white',
  },
  light: {
    card: { background: '#F6F6F5', border: '1px solid rgba(0,0,0,0.05)' },
    glow: 'radial-gradient(ellipse 50% 70% at 50% 130%, rgba(194,112,61,0.18) 0%, transparent 70%)',
    padding: 'py-14 md:py-16',
    title: 'text-[30px] md:text-[42px]',
    muted: 'text-black/25',
    body: 'text-black/45',
    primary: { background: INK, color: '#FFFFFF' },
    primaryHover: 'hover:shadow-[0_10px_32px_rgba(0,0,0,0.24)]',
    secondary: 'text-black/60 bg-white border border-black/[0.08] hover:text-black/85 hover:border-black/[0.15]',
  },
}

export default function CTASection({
  title = 'Stop doing books',
  titleMuted = 'the hard way.',
  body = "Download Filana and get this month's expenses categorized and receipted automatically. 14 days free, then $9.99/mo.",
  showSecondary = true,
  variant = 'dark',
}) {
  const navigate = useNavigate()
  const v = variants[variant]

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative overflow-hidden rounded-[32px] px-8 ${v.padding} text-center`}
        style={v.card}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: v.glow }} />
        <div className="relative">
          <h2 className={`${v.title} font-bold tracking-[-0.03em] leading-[1.02] mb-4`} style={variant === 'light' ? { color: INK } : undefined}>
            {title}
            {titleMuted && (
              <>
                <br />
                <span className={v.muted}>{titleMuted}</span>
              </>
            )}
          </h2>
          <p className={`text-[15px] md:text-[16px] leading-relaxed max-w-md mx-auto mb-8 ${v.body}`}>
            {body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              className={`font-semibold px-7 py-3.5 rounded-full text-[15px] transition-all duration-300 active:scale-95 ${v.primaryHover}`}
              style={v.primary}
              onClick={() => navigate('/download')}
            >
              Get Filana
            </button>
            {showSecondary && (
              <button
                className={`font-medium px-7 py-3.5 rounded-full text-[15px] transition-all duration-300 ${v.secondary}`}
                onClick={() => navigate('/services')}
              >
                See how it works
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
