import { Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { label: 'Features', href: '/services' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Support', href: '/support' },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="opacity-50 hover:opacity-80 transition-opacity duration-300" aria-label="Filana home">
          <Logo size={22} />
        </Link>
        <div className="flex items-center gap-6">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-[13px] text-black/30 hover:text-black/60 transition-colors duration-300"
              style={{ textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-[12px] text-black/20">&copy; 2026 Filana. All rights reserved.</p>
      </div>
    </footer>
  )
}
