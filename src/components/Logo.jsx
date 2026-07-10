const ACCENT = '#C2703D'

export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="9" fill="#0E0E0E" />
      <path d="M11 9h11v3.4h-7.4v3.6h6.4v3.4h-6.4V23H11V9z" fill="#fff" />
      <rect x="22.5" y="9" width="2.6" height="3.4" fill={ACCENT} />
    </svg>
  )
}

export default function Logo({ size = 32, textClassName = '', showText = true }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      {showText && (
        <span className={`font-bold tracking-tight text-[#0E0E0E] ${textClassName}`} style={{ fontSize: size * 0.56 }}>
          Filana
        </span>
      )}
    </div>
  )
}
