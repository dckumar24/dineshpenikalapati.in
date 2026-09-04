import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import type { Project } from '@/data/portfolio'

export function ProjectCard({ project, defaultOpen = false }: { project: Project; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-2 text-sm">
          <span className="font-mono text-bloom">+</span>
          <span className="font-medium text-text">{project.name}</span>
        </span>
        <ChevronDown
          className={clsx('h-4 w-4 shrink-0 text-muted transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      <div
        className={clsx(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 px-5 pb-5 pt-1 text-sm leading-relaxed text-muted">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 shrink-0 font-mono text-bloom">›</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
