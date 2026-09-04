const STAR_POSITIONS = [
  { top: '6%', left: '8%' },
  { top: '12%', left: '22%' },
  { top: '9%', left: '38%' },
  { top: '18%', left: '5%' },
  { top: '22%', left: '16%' },
  { top: '5%', left: '58%' },
  { top: '14%', left: '68%' },
  { top: '24%', left: '78%' },
  { top: '8%', left: '88%' },
  { top: '30%', left: '92%' },
  { top: '32%', left: '10%' },
  { top: '36%', left: '30%' },
  { top: '4%', left: '46%' },
  { top: '28%', left: '52%' },
  { top: '16%', left: '82%' },
  { top: '38%', left: '64%' },
  { top: '10%', left: '95%' },
  { top: '20%', left: '44%' },
  { top: '34%', left: '46%' },
  { top: '3%', left: '72%' },
  { top: '26%', left: '2%' },
  { top: '15%', left: '30%' },
  { top: '40%', left: '20%' },
  { top: '7%', left: '15%' },
]

export function Stars() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {STAR_POSITIONS.map((pos, i) => (
        <span
          key={i}
          className={`absolute h-[2px] w-[2px] rounded-full bg-white ${i % 4 === 0 ? 'hero-star-twinkle' : ''}`}
          style={{ top: pos.top, left: pos.left, animationDelay: `${(i % 5) * 0.7}s` }}
        />
      ))}
    </div>
  )
}
