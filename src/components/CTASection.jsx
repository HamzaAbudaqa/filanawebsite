import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(177,247,11,0.04) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span className="text-[12px] text-white/25 uppercase tracking-[3px] font-medium">Get started</span>
          </div>

          <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold tracking-[-0.03em] leading-[1] mb-6">
            <span className="text-white">Take control</span>
            <br />
            <span className="text-white/25">of your finances.</span>
          </h2>

          <p className="text-[#444] text-[16px] md:text-[18px] max-w-md mx-auto leading-relaxed mb-10">
            Download Finova and see where your money actually goes. Your first month is free.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              className="bg-lime text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-all duration-300 active:scale-95"
              style={{
                boxShadow: '0 0 30px rgba(177,247,11,0.12), 0 4px 15px rgba(0,0,0,0.3)',
              }}
            >
              Start tracking
            </button>
            <button className="bg-white/[0.04] border border-white/[0.07] text-white/50 font-medium px-8 py-4 rounded-full text-[15px] hover:bg-white/[0.07] transition-all duration-300">
              See how it works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
