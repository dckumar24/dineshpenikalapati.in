interface SunflowerProps {
  size?: number
  delay?: string
  className?: string
}

function Sunflower({ size = 40, delay = '0s', className = '' }: SunflowerProps) {
  const petals = Array.from({ length: 10 })
  return (
    <svg
      viewBox="0 0 40 60"
      width={size}
      height={size * 1.5}
      className={`hero-flower ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <line x1="20" y1="30" x2="20" y2="60" stroke="#4C7A3D" strokeWidth="3" />
      <g transform="translate(20 18)">
        {petals.map((_, i) => (
          <ellipse key={i} cx="0" cy="-13" rx="4.5" ry="9" fill="#F2C14E" transform={`rotate(${i * 36})`} />
        ))}
        <circle r="8" fill="#7A4A21" />
      </g>
    </svg>
  )
}

/** A small cluster nested at the base of the mountains, instead of a full-width row. */
export function Sunflowers() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-2 z-10 flex items-end gap-1 sm:right-4"
      aria-hidden="true"
    >
      <Sunflower size={26} delay="0s" />
      <Sunflower size={38} delay="-1.5s" />
      <Sunflower size={30} delay="-0.8s" className="hidden sm:block" />
      <Sunflower size={22} delay="-1s" />
    </div>
  )
}
