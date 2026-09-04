import type { Stat } from '@/data/portfolio'

export function StatCard({ label, value }: Stat) {
  return (
    <div className="rounded-xl border border-border bg-surface px-5 py-4">
      <div className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  )
}
