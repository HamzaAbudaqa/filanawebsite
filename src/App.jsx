import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import FeatureSection from './components/FeatureSection'
import StatsSection from './components/StatsSection'
import CTASection from './components/CTASection'
import ServicesPage from './pages/ServicesPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import DownloadPage from './pages/DownloadPage'
import SupportPage from './pages/SupportPage'
import Logo from './components/Logo'

function HomePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <FeatureSection />
      <StatsSection />
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-black/[0.06] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="opacity-50">
            <Logo size={22} />
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Support', href: '/support' },
              { label: 'Careers', href: '#' },
            ].map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[13px] text-black/30 hover:text-black/60 transition-colors duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] text-black/30 hover:text-black/60 transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          <p className="text-[12px] text-black/20">&copy; 2026 Filana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  )
}
