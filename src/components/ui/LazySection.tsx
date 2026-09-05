import { Suspense, lazy, useEffect, useState, type ComponentType, type ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface LazySectionProps {
  /** The section's anchor id — lives on the placeholder too, so navbar links
   *  still resolve to a section whose chunk hasn't downloaded yet. */
  id: string
  /** Reserved height (px, desktop-measured) so the swap-in costs no layout shift. */
  minHeight: number
  load: () => Promise<{ default: ComponentType }>
}

/**
 * Defers a section's JS chunk until it is about to scroll into view.
 *
 * React.lazy only fires its import when the lazy element first *renders*, so
 * gating that render behind an IntersectionObserver is what keeps the chunk out
 * of the network tab until the user actually scrolls near the section. The
 * 300px rootMargin starts the download just early enough that the section is
 * ready by the time it's on screen.
 */
export function LazySection({ id, minHeight, load }: LazySectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0, rootMargin: '300px 0px' })
  const targetedByHash = useHashTarget(id)
  // Created once — a lazy() rebuilt on every render would remount the section.
  const [Component] = useState(() => lazy(load))

  if (!inView && !targetedByHash) return <div id={id} ref={ref} style={{ minHeight }} />

  return (
    <Suspense fallback={<div id={id} style={{ minHeight }} />}>
      <AnchorAwareSection id={id}>
        <Component />
      </AnchorAwareSection>
    </Suspense>
  )
}

/**
 * True once this section is the current #fragment. Jumping straight to a
 * section the observer hasn't reached — a navbar link, or a shared deep link —
 * has to load it on demand rather than wait to be scrolled past.
 */
function useHashTarget(id: string) {
  const [targeted, setTargeted] = useState(() => window.location.hash === `#${id}`)

  useEffect(() => {
    function check() {
      if (window.location.hash === `#${id}`) setTargeted(true)
    }
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [id])

  return targeted
}

/**
 * Native fragment scrolling can't be trusted here: `scroll-behavior: smooth`
 * animates the jump, and the reflow from sections materialising along the way
 * cancels that animation partway (often back at scroll 0). So once the real
 * section is mounted, put the viewport where the link asked for.
 *
 * 'instant' rather than 'auto' is deliberate — 'auto' defers to the element's
 * computed scroll-behavior, which is the same `smooth` that just failed.
 */
function AnchorAwareSection({ id, children }: { id: string; children: ReactNode }) {
  useEffect(() => {
    if (window.location.hash !== `#${id}`) return
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [id])

  return <>{children}</>
}
