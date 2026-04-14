import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Privacy', href: '/privacy' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1 rounded-full px-3 py-2.5"
        style={{
          background: 'rgba(14,14,14,0.75)',
          backdropFilter: 'blur(24px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.02) inset',
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center px-4 pr-6">
          <img src="/FILANA.png" alt="Filana" className="h-6 w-auto" />
        </Link>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.label}
                to={item.href}
                className="text-[13px] transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/[0.04]"
                style={{
                  color: isActive ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.35)',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <button
          className="ml-2 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95"
          style={{
            background: '#d94391',
            boxShadow: '0 0 20px rgba(217,67,145,0.20), 0 2px 8px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(217,67,145,0.35), 0 2px 12px rgba(0,0,0,0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(217,67,145,0.20), 0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          Start tracking
        </button>
      </div>
    </motion.nav>
  )
}
