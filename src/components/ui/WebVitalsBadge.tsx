import { useState } from 'react'
import { Activity } from 'lucide-react'
import clsx from 'clsx'
import { useWebVitals, type VitalName, type VitalRating, type VitalsState } from '@/hooks/useWebVitals'

const METRIC_ORDER: VitalName[] = ['LCP', 'INP', 'CLS', 'FCP', 'TTFB']

const METRIC_LABEL: Record<VitalName, string> = {
  LCP: 'Largest Contentful Paint',
  INP: 'Interaction to Next Paint',
  CLS: 'Cumulative Layout Shift',
  FCP: 'First Contentful Paint',
  TTFB: 'Time to First Byte',
}

const RATING_COLOR: Record<VitalRating, string> = {
  good: '#22c55e',
  'needs-improvement': '#eab308',
  poor: '#ef4444',
}

function formatValue(name: VitalName, value: number) {
  if (name === 'CLS') return value.toFixed(3)
  return value < 1000 ? `${Math.round(value)}ms` : `${(value / 1000).toFixed(2)}s`
}

/** Worst-of-what's-measured-so-far, so the collapsed dot never claims more than it knows. */
function overallStatus(vitals: VitalsState): VitalRating | 'pending' {
  const readings = Object.values(vitals)
  if (readings.length === 0) return 'pending'
  if (readings.some((r) => r?.rating === 'poor')) return 'poor'
  if (readings.some((r) => r?.rating === 'needs-improvement')) return 'needs-improvement'
  return 'good'
}

/**
 * Real Core Web Vitals for THIS visit, not a replayed lab score — see
 * useWebVitals for why. INP legitimately has no reading until you interact
 * with the page; that row just says "waiting for interaction" until then.
 */
export function WebVitalsBadge() {
  const vitals = useWebVitals()
  const [open, setOpen] = useState(false)
  const status = overallStatus(vitals)
  const dotColor = status === 'pending' ? 'rgb(var(--text-muted))' : RATING_COLOR[status]

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {open && (
        <div
          role="status"
          className="w-64 rounded-2xl border border-border bg-surface p-4 text-left shadow-lg"
        >
          <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            <Activity className="h-3.5 w-3.5" aria-hidden="true" />
            Web Vitals — this visit
          </p>
          <ul className="space-y-2">
            {METRIC_ORDER.map((name) => {
              const reading = vitals[name]
              return (
                <li key={name} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-muted" title={METRIC_LABEL[name]}>
                    {name}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-text">
                    {reading ? (
                      <>
                        {formatValue(name, reading.value)}
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: RATING_COLOR[reading.rating] }}
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <span className="text-muted">
                        {name === 'INP' ? 'awaiting interaction' : 'measuring…'}
                      </span>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Web Vitals for this visit: ${status === 'pending' ? 'measuring' : status.replace('-', ' ')}`}
        className={clsx(
          'flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-text shadow-lg transition-colors hover:border-accent/50'
        )}
      >
        <span
          className={clsx('h-2.5 w-2.5 rounded-full', status === 'pending' && 'animate-pulse')}
          style={{ background: dotColor }}
          aria-hidden="true"
        />
        Vitals
      </button>
    </div>
  )
}
