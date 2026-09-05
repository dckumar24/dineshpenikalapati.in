import type { CSSProperties } from 'react'

/**
 * Splits the name into per-letter spans so each can rise into place on its own
 * beat (and wiggle on hover). The split is decorative only — the full name also
 * ships as one flat sr-only string, so screen readers and crawlers still read
 * "Dinesh Kumar Penikalapati" rather than 24 separate letters.
 */
export function AnimatedName({ name, className }: { name: string; className?: string }) {
  let letterIndex = 0

  return (
    <span className={className}>
      <span className="sr-only">{name}</span>
      <span className="name-reveal" aria-hidden="true">
        {name.split(' ').map((word, w) => (
          <span key={w}>
            {/* A real space between words, so anything reading this layer as
                plain text still gets "Dinesh Kumar Penikalapati". */}
            {w > 0 && ' '}
            <span className="name-word">
              {Array.from(word).map((char, c) => (
                <span
                  key={c}
                  className="name-letter"
                  style={{ '--i': letterIndex++ } as CSSProperties}
                >
                  <span className="name-letter-inner">{char}</span>
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  )
}
