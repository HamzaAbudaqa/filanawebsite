import { motion } from 'framer-motion'

function Screenshot({ src }) {
  return <img src={src} alt="" className="w-full h-full object-cover object-top" />
}

const FRAMES = {
  dark: {
    padding: 'p-[2.5px]',
    background: 'linear-gradient(165deg, #4a4a4a 0%, #232323 30%, #161616 60%, #2e2e2e 100%)',
    boxShadow: '0 25px 60px rgba(0,0,0,0.18), 0 10px 25px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)',
  },
  // Natural-titanium look, for placing a phone on dark backgrounds.
  silver: {
    padding: 'p-[4px]',
    background: 'linear-gradient(160deg, #f4f4f2 0%, #b9b8b4 28%, #8d8c88 55%, #d6d5d1 80%, #9e9d99 100%)',
    boxShadow: '0 30px 70px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.18), 0 0 80px rgba(194,112,61,0.25)',
  },
}

export function Phone3D({ children, className = '', style = {}, frame = 'dark' }) {
  const f = FRAMES[frame]
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Outer metallic frame */}
      <div
        className={`w-full h-full rounded-[42px] ${f.padding}`}
        style={{ background: f.background, boxShadow: f.boxShadow }}
      >
        {/* Inner bezel */}
        <div className="w-full h-full rounded-[40px] bg-black p-[1.5px]">
          {/* Screen */}
          <div
            className="w-full h-full rounded-[39px] overflow-hidden relative bg-white"
            style={{ boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.15)' }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20" />

            {children}

            {/* Glass reflection */}
            <div
              className="absolute inset-0 rounded-[39px] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 25%, transparent 55%)',
              }}
            />

            {/* Home indicator */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-black/15 rounded-full z-20" />
          </div>
        </div>
      </div>

      {/* Top edge catch light */}
      <div
        className="absolute top-0 left-[15%] right-[15%] h-[1px] rounded-full z-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
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
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, #ffffff 100%)' }}
      />

      {/* LEFT PHONE — Mentor AI CFO */}
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
              className="w-[240px] h-[500px]"
              style={{ transform: 'rotateY(-12deg) rotateX(3deg)', opacity: 0.9, filter: 'blur(1.5px)' }}
            >
              <Screenshot src="/screenshots/mentor.png" />
            </Phone3D>
          </div>
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[65%] h-[20px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)', filter: 'blur(8px)' }}
          />
        </motion.div>
      </motion.div>

      {/* RIGHT PHONE — Receipts */}
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
              className="w-[240px] h-[500px]"
              style={{ transform: 'rotateY(12deg) rotateX(2deg)', opacity: 0.9, filter: 'blur(1.5px)' }}
            >
              <Screenshot src="/screenshots/receipts.png" />
            </Phone3D>
          </div>
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[65%] h-[20px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)', filter: 'blur(8px)' }}
          />
        </motion.div>
      </motion.div>

      {/* CENTER PHONE — Dashboard */}
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
              className="w-[290px] h-[605px]"
              style={{ transform: 'rotateX(3deg)' }}
            >
              <Screenshot src="/screenshots/dashboard.png" />
            </Phone3D>
          </div>
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[55%] h-[25px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(194,112,61,0.10) 0%, rgba(0,0,0,0.12) 50%, transparent 70%)', filter: 'blur(12px)' }}
          />
        </motion.div>
      </motion.div>

    </div>
  )
}
