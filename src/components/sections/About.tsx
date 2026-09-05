import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatCard } from '@/components/ui/StatCard'
import { about, stats, profile } from '@/data/portfolio'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface p-2 shadow-lg">
            <img
              src="/heroImage-384.webp"
              srcSet="/heroImage-384.webp 384w, /heroImage-480.webp 480w, /heroImage-640.webp 640w, /heroImage-768.webp 768w, /heroImage-960.webp 960w"
              /* The frame is max-w-sm (384px) less its 8px padding, at every breakpoint. */
              sizes="368px"
              alt={`${profile.name}, illustrated sitting in a sunflower field`}
              className="h-full w-full rounded-2xl object-cover"
              width={480}
              height={640}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading eyebrow="about" title="Systems thinking, applied to the frontend" />
          </Reveal>
          <Reveal delay={80} className="space-y-5">
            {about.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </div>

      <Reveal delay={160} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Reveal>
    </section>
  )
}
