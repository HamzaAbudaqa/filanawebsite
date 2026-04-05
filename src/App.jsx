import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import CTASection from './components/CTASection'

function App() {
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
            <div className="w-6 h-6 rounded-full bg-lime flex items-center justify-center shadow-sm shadow-lime/20">
              <span className="text-white text-[10px] font-bold">F</span>
            </div>
            <span className="text-[14px] font-semibold text-white/50">Finova</span>
          </div>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Support', 'Careers'].map((item) => (
              <a key={item} href="#" className="text-[13px] text-white/15 hover:text-white/35 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          <p className="text-[12px] text-white/[0.08]">&copy; 2026 Finova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
