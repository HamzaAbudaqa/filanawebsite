import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Features', href: '/services' },
  { label: 'For accountants', href: '/#accountants' },
  { label: 'Support', href: '/support' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[560px]"
    >
      <div
        className="flex items-center gap-1 rounded-full px-3 py-2.5"
        style={{
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(24px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.6) inset',
        }}
      >
        {/* Wordmark */}
        <Link to="/" className="flex items-center px-4 pr-6">
          <span className="text-[#0E0E0E] text-[15px] font-semibold tracking-tight">Filana</span>
        </Link>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.label}
                to={item.href}
                className="text-[13px] whitespace-nowrap transition-all duration-300 px-4 py-2 rounded-full hover:bg-black/[0.04]"
                style={{
                  color: isActive ? 'rgba(14,14,14,0.9)' : 'rgba(14,14,14,0.45)',
                  fontWeight: isActive ? 600 : 500,
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
            background: '#0E0E0E',
            boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.28)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.18)'
          }}
          onClick={() => navigate('/download')}
        >
          Get Filana
        </button>
      </div>
    </motion.nav>
  )
}
