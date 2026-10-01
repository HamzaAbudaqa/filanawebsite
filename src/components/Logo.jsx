export function LogoMark({ size = 32 }) {
  return (
    <img
      src="/app-icon-128.png"
      alt=""
      width={size}
      height={size}
      className="block flex-shrink-0"
      style={{ borderRadius: size * 0.28 }}
    />
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
