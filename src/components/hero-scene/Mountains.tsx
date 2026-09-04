export function Mountains({ isDark }: { isDark: boolean }) {
  const back = isDark ? '#161B3A' : '#8B5A73'
  const front = isDark ? '#0B1026' : '#5C3A52'

  return (
    <div className="absolute inset-x-0 bottom-0 h-[42%]" aria-hidden="true">
      <svg viewBox="0 0 400 160" preserveAspectRatio="none" className="h-full w-full">
        <path
          d="M0 160 L0 90 L40 60 L80 85 L130 40 L180 75 L230 50 L280 95 L340 55 L400 100 L400 160 Z"
          fill={back}
          opacity={0.6}
        />
        <path
          d="M0 160 L0 112 L50 72 L100 102 L150 58 L210 96 L260 66 L320 110 L400 82 L400 160 Z"
          fill={front}
          opacity={0.92}
        />
      </svg>
    </div>
  )
}
