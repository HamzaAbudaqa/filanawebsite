import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import CTASection from './components/CTASection'
import ServicesPage from './pages/ServicesPage'
import PrivacyPage from './pages/PrivacyPage'

function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <FeatureSection />
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/FILANA.png" alt="Filana" className="h-5 w-auto opacity-50" />
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '#' },
              { label: 'Support', href: '#' },
              { label: 'Careers', href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-white/15 hover:text-white/35 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-[12px] text-white/[0.08]">&copy; 2026 Filana. All rights reserved.</p>
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
      </Routes>
    </BrowserRouter>
  )
}
