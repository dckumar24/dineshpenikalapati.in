import { useEffect, useRef, useState } from 'react'

/**
 * Tracks how far a container has been scrolled through the viewport, as 0..1.
 * rAF-throttled scroll listener — cheap, single listener regardless of content length.
 * Returns 1 immediately (line pre-drawn) when the user prefers reduced motion.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setProgress(1)
      return
    }

    let ticking = false

    const measure = () => {
      ticking = false
      const rect = node.getBoundingClientRect()
      const viewportH = window.innerHeight
      const total = rect.height + viewportH
      const scrolled = viewportH - rect.top
      const next = Math.min(1, Math.max(0, scrolled / total))
      setProgress(next)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(measure)
      }
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref, progress }
}
