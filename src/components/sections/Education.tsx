import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="education" title="Foundation" />
        </Reveal>

        {education.map((entry) => (
          <Reveal key={entry.school} delay={80}>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text">{entry.school}</h3>
                <p className="mt-1 text-sm text-muted">{entry.degree}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {entry.location} · {entry.period}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
