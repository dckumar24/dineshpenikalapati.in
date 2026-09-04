export function Comets() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <span
        className="hero-comet absolute h-px w-24 bg-gradient-to-r from-transparent via-white/80 to-white"
        style={{ top: '14%', left: '72%', animationDuration: '23s', animationDelay: '5s' }}
      />
      <span
        className="hero-comet absolute h-px w-20 bg-gradient-to-r from-transparent via-white/80 to-white"
        style={{ top: '32%', left: '48%', animationDuration: '29s', animationDelay: '16s' }}
      />
    </div>
  )
}
