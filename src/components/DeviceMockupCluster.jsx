import { motion } from 'framer-motion'
import DashboardScreen from '../screens/DashboardScreen'
import InsightsScreen from '../screens/InsightsScreen'
import CategoriesScreen from '../screens/CategoriesScreen'

/**
 * Phone3D — A 3D-feeling iPhone built purely with CSS.
 *
 * NOT a flat PNG. Instead:
 *   - Metallic gradient border (titanium feel)
 *   - Inner shadow for screen depth
 *   - Outer drop shadow for elevation
 *   - Glass reflection overlay (5-8% opacity, top-left → bottom-right)
 *   - Dynamic Island
 *   - Home indicator
 *
 * This makes the phone feel like a physical object, not an image.
 */
function Phone3D({ children, className = '', style = {} }) {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Outer body — metallic gradient border creates titanium frame feel */}
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
          {/* Screen container with inner shadow for depth */}
          <div
            className="w-full h-full rounded-[39px] overflow-hidden relative bg-[#080808]"
            style={{
              boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.6), inset 0 0 4px rgba(0,0,0,0.4)',
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-20">
              <div className="absolute right-[14px] top-[8px] w-[8px] h-[8px] rounded-full bg-[#1a1a2e] border border-[#2a2a3e]" />
            </div>

            {/* Screen content */}
            <div className="absolute inset-0">
              {children}
            </div>

            {/* Glass reflection overlay — creates depth and realism */}
            <div
              className="absolute inset-0 rounded-[39px] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 30%, transparent 60%, rgba(255,255,255,0.01) 100%)',
              }}
            />

            {/* Home indicator */}
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/15 rounded-full z-20" />
          </div>
        </div>
      </div>

      {/* Subtle frame edge highlight — top edge catch light */}
      <div
        className="absolute top-0 left-[15%] right-[15%] h-[1px] rounded-full z-30"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
        }}
      />
    </div>
  )
}

/**
 * DeviceMockupCluster — 3 phones in cinematic composition.
 *
 * Layout:
 *   - Center: scale 1.0, sharp, slight float animation
 *   - Left: -12° rotateY, scale 0.9, 80% opacity, slight blur, behind
 *   - Right: +12° rotateY, scale 0.9, 80% opacity, slight blur, behind
 *
 * Behind: radial lime glow (10-20% opacity, heavy blur) for product-commercial lighting.
 * Below: soft shadow ellipses under each phone.
 */
export default function DeviceMockupCluster() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: '720px' }}>
      {/* === BACKGROUND LIGHTING === */}

      {/* Primary lime glow — the "energy source" behind the phones */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(177,247,11,0.12) 0%, rgba(177,247,11,0.04) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Secondary warm glow */}
      <div
        className="absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(177,247,11,0.06) 0%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, #050505 100%)',
        }}
      />

      {/* === LEFT PHONE — AI Insights === */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        className="absolute z-[1]"
        style={{
          left: 'calc(50% - 330px)',
          top: '80px',
        }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
        >
          <div style={{ perspective: '1200px' }}>
            <Phone3D
              className="w-[240px] h-[500px]"
              style={{
                transform: 'rotateY(-12deg) rotateX(3deg)',
                opacity: 0.8,
                filter: 'blur(1.5px)',
              }}
            >
              <InsightsScreen />
            </Phone3D>
          </div>

          {/* Shadow under left phone */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[65%] h-[20px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* === RIGHT PHONE — Categories === */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="absolute z-[1]"
        style={{
          right: 'calc(50% - 330px)',
          top: '60px',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <div style={{ perspective: '1200px' }}>
            <Phone3D
              className="w-[240px] h-[500px]"
              style={{
                transform: 'rotateY(12deg) rotateX(2deg)',
                opacity: 0.8,
                filter: 'blur(1.5px)',
              }}
            >
              <CategoriesScreen />
            </Phone3D>
          </div>

          {/* Shadow under right phone */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[65%] h-[20px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* === CENTER PHONE — Main Dashboard (front, largest, sharpest) === */}
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
              style={{
                transform: 'rotateX(3deg)',
              }}
            >
              <DashboardScreen />
            </Phone3D>
          </div>

          {/* Shadow under center phone — larger and more prominent */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[55%] h-[25px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(177,247,11,0.1) 0%, rgba(0,0,0,0.4) 50%, transparent 70%)',
              filter: 'blur(12px)',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
