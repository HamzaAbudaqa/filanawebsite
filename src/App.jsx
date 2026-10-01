import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import ProblemSection from './components/ProblemSection'
import FeatureSection from './components/FeatureSection'
import StatsSection from './components/StatsSection'
import AccountantSection from './components/AccountantSection'
import CTASection from './components/CTASection'
import ServicesPage from './pages/ServicesPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import DownloadPage from './pages/DownloadPage'
import SupportPage from './pages/SupportPage'
import Footer from './components/Footer'

function ScrollToHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])
  return null
}

function HomePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <FeatureSection />
      <StatsSection />
      <AccountantSection />
      <CTASection variant="light" />

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
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
