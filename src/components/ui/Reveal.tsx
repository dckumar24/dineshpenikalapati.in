import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { useInView } from '@/hooks/useInView'

interface RevealProps {
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: PropsWithChildren<RevealProps>) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-700 ease-out',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
