import { Suspense, lazy, useEffect, useState, type ComponentType, type ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface LazySectionProps {
  /** The section's anchor id — lives on the placeholder too, so navbar links
   *  still resolve to a section whose chunk hasn't downloaded yet. */
  id: string
  /**
   * Reserved height, as Tailwind `min-h-[...]` utilities — NOT a single
   * desktop number. Real section heights vary a lot with viewport width (text
   * reflow, grids collapsing to one column), so this is normally two tiers:
   * a mobile value plus the section's own responsive prefix for the point
   * where its layout actually changes (`sm:` for most sections, `lg:` for
   * About, which only drops to one column at that breakpoint). Getting this
   * wrong is exactly what caused a 0.353 mobile CLS in production — the
   * placeholder was a single number measured at 1280px, so on a phone the
   * real content swapped in 500-1100px taller than what was reserved.
   */
  minHeightClassName: string
  load: () => Promise<{ default: ComponentType }>
}

/**
 * Defers a section's JS chunk until it is about to scroll into view.
 *
 * React.lazy only fires its import when the lazy element first *renders*, so
 * gating that render behind an IntersectionObserver is what keeps the chunk out
 * of the network tab until the user actually scrolls near the section. The
 * 300px rootMargin starts the download just early enough that the section is
 * usually ready by the time it's on screen. It was widened to 600px while
 * first chasing a mobile CLS regression, but measuring showed the accurate
 * two-tier reserved height below is what actually fixed it (0.353 → 0.007
 * either way) — so this stays at 300px rather than keeping an unproven change.
 */
export function LazySection({ id, minHeightClassName, load }: LazySectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0, rootMargin: '300px 0px' })
  const targetedByHash = useHashTarget(id)
  // Created once — a lazy() rebuilt on every render would remount the section.
  const [Component] = useState(() => lazy(load))

  if (!inView && !targetedByHash) {
    return <div id={id} ref={ref} className={minHeightClassName} />
  }

  return (
    <Suspense fallback={<div id={id} className={minHeightClassName} />}>
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
