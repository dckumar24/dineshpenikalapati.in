export function StatusChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-text/90 transition-colors hover:border-accent/50">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bloom" aria-hidden="true" />
      <span className="font-mono">{label}</span>
    </span>
  )
}
