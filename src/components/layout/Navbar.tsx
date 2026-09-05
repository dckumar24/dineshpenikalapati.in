import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/layout/Logo'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { profile } from '@/data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-[#2B1B10]"
      >
        Skip to content
      </a>

      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-1">
        <a href="#hero" className="flex items-center" aria-label={`${profile.name} — home`}>
          <Logo className="h-16 w-16" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="transition-colors hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton variant="block" />
        </div>
      )}
    </header>
  )
}
