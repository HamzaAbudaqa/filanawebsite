import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import DeviceMockupCluster from './DeviceMockupCluster'

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 px-6 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="text-center max-w-5xl mb-6"
      >
        <span className="block text-[48px] md:text-[68px] lg:text-[84px] font-bold tracking-[-0.04em] leading-[0.96]">
          <span className="text-[#0E0E0E]">Your books.</span>
          <br />
          <span style={{ color: 'rgba(14,14,14,0.28)' }}>Organized, categorized,</span>
          <br />
          <span style={{ color: 'rgba(14,14,14,0.28)' }}>and finally </span>
          <span className="text-[#0E0E0E]">tax-season ready.</span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-[16px] md:text-[18px] text-center max-w-lg leading-relaxed mb-10"
        style={{ color: 'rgba(14,14,14,0.45)' }}
      >
        Automatic expense tracking, receipt matching, AI categorization,
        and a financial assistant that finds what's deductible :
        so tax time is an export, not a scramble.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-3 mb-16"
      >
        <button
          className="text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 active:scale-95"
          style={{
            background: '#0E0E0E',
            boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.24)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.16)'}
          onClick={() => navigate('/download')}
        >
          Get Filana
        </button>
        <button
          className="font-medium px-8 py-4 rounded-full text-[15px] transition-all duration-300"
          style={{
            background: 'rgba(14,14,14,0.04)',
            border: '1px solid rgba(14,14,14,0.08)',
            color: 'rgba(14,14,14,0.6)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(14,14,14,0.07)'; e.currentTarget.style.color = 'rgba(14,14,14,0.85)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(14,14,14,0.04)'; e.currentTarget.style.color = 'rgba(14,14,14,0.6)' }}
          onClick={() => navigate('/services')}
        >
          See how it works
        </button>
      </motion.div>

      <DeviceMockupCluster />
    </section>
  )
}
