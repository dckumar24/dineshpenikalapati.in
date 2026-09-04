export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bloom">
        <span className="h-1.5 w-1.5 rounded-full bg-bloom" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
    </div>
  )
}
