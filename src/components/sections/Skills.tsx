import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusChip } from '@/components/ui/StatusChip'
import { skillCategories } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="skills" title="The stack, by category" />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 60}>
              <h3 className="text-sm font-semibold text-text">{category.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <StatusChip key={item} label={item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
