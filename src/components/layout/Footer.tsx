import { Mail, Phone } from 'lucide-react'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { Logo } from '@/components/layout/Logo'
import { profile } from '@/data/portfolio'

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
  { href: `tel:${profile.phone.replace(/\s+/g, '')}`, label: 'Phone', icon: Phone },
  { href: profile.github, label: 'GitHub', icon: GitHubIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>

        <ul className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/50 hover:text-text"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
         <div className="flex items-center gap-2">
          <span className="text-sm text-muted">
            Made with love and keyboard.
          </span>
        </div>
      </div>
    </footer>
  )
}
