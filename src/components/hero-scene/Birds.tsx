interface BirdProps {
  animClass: string
  top: string
  left: string
  size?: number
}

function Bird({ animClass, top, left, size = 18 }: BirdProps) {
  return (
    <div className={`hero-bird absolute text-white/70 ${animClass}`} style={{ top, left }} aria-hidden="true">
      <svg width={size} height={size * 0.6} viewBox="0 0 24 14" fill="none" className="hero-bird-wing">
        <path d="M1 8 Q6 0 12 7 Q18 0 23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

/** Fluttering near/above the sun rather than crossing the full sky. */
export function Birds() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Bird animClass="hero-bird-1" top="26%" left="66%" size={16} />
      <Bird animClass="hero-bird-2" top="20%" left="72%" size={12} />
      <Bird animClass="hero-bird-3" top="32%" left="70%" size={14} />
    </div>
  )
}
