import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BloomTimeline } from '@/components/ui/BloomTimeline'
import { experience } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="experience" title="Where I've bloomed" />
      </Reveal>

      <BloomTimeline roles={experience} />
    </section>
  )
}
