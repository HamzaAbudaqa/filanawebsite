import { motion } from 'framer-motion'

const navItems = ['Home', 'Features', 'About', 'Pricing']

export default function Navbar() {
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
        <div className="flex items-center gap-2 px-4 pr-6">
          <div className="w-7 h-7 rounded-full bg-lime flex items-center justify-center shadow-md shadow-lime/20">
            <span className="text-white text-[11px] font-bold tracking-tight">F</span>
          </div>
          <span className="text-[14px] font-semibold tracking-tight text-white/90">Finova</span>
        </div>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[13px] text-white/35 hover:text-white/75 transition-all duration-300 px-4 py-2 rounded-full hover:bg-white/[0.04]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          className="ml-2 bg-lime text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95"
          style={{
            boxShadow: '0 0 20px rgba(177,247,11,0.15), 0 2px 8px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={(e) => e.target.style.boxShadow = '0 0 30px rgba(177,247,11,0.25), 0 2px 12px rgba(0,0,0,0.3)'}
          onMouseLeave={(e) => e.target.style.boxShadow = '0 0 20px rgba(177,247,11,0.15), 0 2px 8px rgba(0,0,0,0.3)'}
        >
          Start tracking
        </button>
      </div>
    </motion.nav>
  )
}
