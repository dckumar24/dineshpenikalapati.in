interface CloudProps {
  animClass: string
  top: string
  left: string
  scale?: number
  opacity?: number
}

function Cloud({ animClass, top, left, scale = 1, opacity = 0.75 }: CloudProps) {
  return (
    <div
      className={`hero-cloud absolute ${animClass}`}
      style={{ top, left, opacity, transform: `scale(${scale})`, transformOrigin: 'center' }}
      aria-hidden="true"
    >
      <div className="relative h-8 w-24 rounded-full bg-white/70 blur-[2px] sm:h-10 sm:w-32">
        <span className="absolute -top-3 left-3 h-8 w-10 rounded-full bg-white/70 blur-[2px]" />
        <span className="absolute -top-4 left-10 h-10 w-12 rounded-full bg-white/70 blur-[2px]" />
        <span className="absolute -top-2 right-2 h-7 w-9 rounded-full bg-white/70 blur-[2px]" />
      </div>
    </div>
  )
}

/** Clustered near/above the sun rather than sweeping across the whole sky. */
export function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Cloud animClass="hero-cloud-1" top="10%" left="70%" scale={1.05} opacity={0.7} />
      <Cloud animClass="hero-cloud-2" top="6%" left="60%" scale={0.75} opacity={0.5} />
      <Cloud animClass="hero-cloud-3" top="16%" left="80%" scale={0.85} opacity={0.6} />
    </div>
  )
}
