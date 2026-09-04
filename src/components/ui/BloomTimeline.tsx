import clsx from 'clsx'
import { useInView } from '@/hooks/useInView'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Role } from '@/data/portfolio'

function BloomIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={clsx(
        'h-6 w-6 transition-all duration-500 ease-out',
        open ? 'scale-100 rotate-0 text-bloom' : 'scale-50 rotate-45 text-border'
      )}
      aria-hidden="true"
    >
      <g fill="currentColor">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="12" cy="6.5" rx="2.1" ry="4" transform={`rotate(${i * 45} 12 12)`} />
        ))}
      </g>
      <circle cx="12" cy="12" r="3" className="fill-accent" />
    </svg>
  )
}

function TimelineNode({ role }: { role: Role }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <div ref={ref} className="relative flex gap-6">
      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
        <BloomIcon open={inView} />
      </div>

      <div
        className={clsx(
          'flex-1 pb-2 transition-all duration-500',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        )}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold text-text sm:text-xl">{role.title}</h3>
          <span className="font-mono text-xs text-muted">{role.period}</span>
        </div>
        <p className="mt-1 text-sm text-muted">
          {role.company} · {role.companyLocation}
        </p>

        {role.current && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-bloom/10 px-2.5 py-1 font-mono text-xs text-bloom">
            <span className="h-1.5 w-1.5 rounded-full bg-bloom" aria-hidden="true" />
            in bloom · now
          </span>
        )}

        <div className="mt-4 space-y-3">
          {role.projects.map((project) => (
            <ProjectCard key={project.name} project={project} defaultOpen={role.projects.length === 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function BloomTimeline({ roles }: { roles: Role[] }) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()

  return (
    <div ref={ref} className="relative">
      <div className="absolute bottom-3 left-[15px] top-3 w-px bg-border" aria-hidden="true" />
      <div
        className="absolute left-[15px] top-3 w-px bg-gradient-to-b from-[#7CA65B] to-bloom transition-[height] duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
        aria-hidden="true"
      />
      <div className="space-y-16">
        {roles.map((role) => (
          <TimelineNode key={role.company} role={role} />
        ))}
      </div>
    </div>
  )
}
