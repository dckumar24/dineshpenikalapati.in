import { useEffect, useState } from 'react'

export type VitalRating = 'good' | 'needs-improvement' | 'poor'

export interface VitalReading {
  value: number
  rating: VitalRating
}

export type VitalName = 'FCP' | 'LCP' | 'INP' | 'CLS' | 'TTFB'

export type VitalsState = Partial<Record<VitalName, VitalReading>>

/**
 * Real, in-browser Core Web Vitals for this visit — not a static replay of a
 * lab-test score. Backed by Google's own `web-vitals` library, which does the
 * threshold math (the "good/needs-improvement/poor" rating) internally, so
 * nothing here re-implements or drifts from the published thresholds.
 *
 * The library import is deferred to idle time, same reasoning as the GA
 * deferral in index.html: fetching it during the critical path would make the
 * page slightly slower in order to report how fast the page is. INP has no
 * reading until the visitor's first interaction — that's inherent to the
 * metric, not a bug here.
 */
export function useWebVitals() {
  const [vitals, setVitals] = useState<VitalsState>({})

  useEffect(() => {
    let cancelled = false

    function record(name: VitalName) {
      return (metric: { value: number; rating: VitalRating }) => {
        if (cancelled) return
        setVitals((prev) => ({ ...prev, [name]: { value: metric.value, rating: metric.rating } }))
      }
    }

    async function start() {
      const { onFCP, onLCP, onINP, onCLS, onTTFB } = await import('web-vitals')
      if (cancelled) return
      // web-vitals' default is to report each metric only once, at tab-hide —
      // meant for batching analytics beacons, not for a widget the visitor is
      // actively looking at. reportAllChanges makes every callback fire as
      // soon as a metric has any value, then again whenever it changes.
      const live = { reportAllChanges: true }
      onFCP(record('FCP'), live)
      onLCP(record('LCP'), live)
      onINP(record('INP'), live)
      onCLS(record('CLS'), live)
      onTTFB(record('TTFB'))
    }

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(start, { timeout: 4000 })
      return () => {
        cancelled = true
        cancelIdleCallback(id)
      }
    }

    const id = setTimeout(start, 1500)
    return () => {
      cancelled = true
      clearTimeout(id)
    }
  }, [])

  return vitals
}
