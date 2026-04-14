import { motion } from 'framer-motion'

/**
 * To swap screenshots: replace the src values below.
 *   LEFT_PHONE   — shown at left, rotated, slightly blurred
 *   CENTER_PHONE — the hero phone, sharpest and largest
 *   RIGHT_PHONE  — shown at right, rotated, slightly blurred
 *
 * Just drop your PNG/JPG into assets/, copy it to public/, and update the path.
 */
const LEFT_PHONE   = '/IMG_2277.PNG'   // Spending Insights
const CENTER_PHONE = '/IMG_2265.PNG'   // AI Categorization
const RIGHT_PHONE  = '/IMG_2272.PNG'   // AI Assistant

function Phone3D({ src, alt = '', className = '', style = {} }) {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Outer metallic frame */}
      <div
        className="w-full h-full rounded-[42px] p-[2.5px]"
        style={{
          background: 'linear-gradient(165deg, #555 0%, #2a2a2a 30%, #1a1a1a 60%, #333 100%)',
          boxShadow: `
            0 25px 60px rgba(0,0,0,0.7),
            0 10px 25px rgba(0,0,0,0.5),
            0 0 0 1px rgba(255,255,255,0.04)
          `,
        }}
      >
        {/* Inner bezel */}
        <div className="w-full h-full rounded-[40px] bg-black p-[1.5px]">
          {/* Screen */}
          <div
            className="w-full h-full rounded-[39px] overflow-hidden relative bg-[#080808]"
            style={{ boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.6)' }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20" />

            {/* Screenshot */}
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />

            {/* Glass reflection */}
            <div
              className="absolute inset-0 rounded-[39px] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 30%, transparent 60%)',
              }}
            />

            {/* Home indicator */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/15 rounded-full z-20" />
          </div>
        </div>
      </div>

      {/* Top edge catch light */}
      <div
        className="absolute top-0 left-[15%] right-[15%] h-[1px] rounded-full z-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
      />
    </div>
  )
}

export default function DeviceMockupCluster() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: '720px' }}>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, #050505 100%)' }}
      />

      {/* LEFT PHONE */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        className="absolute z-[1]"
        style={{ left: 'calc(50% - 330px)', top: '80px' }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
        >
          <div style={{ perspective: '1200px' }}>
            <Phone3D
              src={LEFT_PHONE}
              alt="Spending Insights"
              className="w-[240px] h-[500px]"
              style={{ transform: 'rotateY(-12deg) rotateX(3deg)', opacity: 0.75, filter: 'blur(1.5px)' }}
            />
          </div>
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[65%] h-[20px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)', filter: 'blur(8px)' }}
          />
        </motion.div>
      </motion.div>

      {/* RIGHT PHONE */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="absolute z-[1]"
        style={{ right: 'calc(50% - 330px)', top: '60px' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <div style={{ perspective: '1200px' }}>
            <Phone3D
              src={RIGHT_PHONE}
              alt="AI Assistant"
              className="w-[240px] h-[500px]"
              style={{ transform: 'rotateY(12deg) rotateX(2deg)', opacity: 0.75, filter: 'blur(1.5px)' }}
            />
          </div>
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[65%] h-[20px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)', filter: 'blur(8px)' }}
          />
        </motion.div>
      </motion.div>

      {/* CENTER PHONE */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
        className="relative z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <div style={{ perspective: '1400px' }}>
            <Phone3D
              src={CENTER_PHONE}
              alt="Main screen"
              className="w-[290px] h-[605px]"
              style={{ transform: 'rotateX(3deg)' }}
            />
          </div>
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[55%] h-[25px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(217,67,145,0.06) 0%, rgba(0,0,0,0.4) 50%, transparent 70%)', filter: 'blur(12px)' }}
          />
        </motion.div>
      </motion.div>

    </div>
  )
}
