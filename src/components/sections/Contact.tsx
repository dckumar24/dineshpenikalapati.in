import { Mail, Phone } from 'lucide-react'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { Reveal } from '@/components/ui/Reveal'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/portfolio'

const channels = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
  { href: profile.linkedin, label: 'linkedin.com/in/dineshpenikalapati', icon: LinkedInIcon },
  { href: `tel:${profile.phone.replace(/\s+/g, '')}`, label: profile.phone, icon: Phone },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="contact" title="Let's ship something" />
      </Reveal>

      <Reveal delay={80} className="max-w-xl">
        <p className="text-lg leading-relaxed text-muted">
          Always glad to talk shop — React architecture, AI-assisted development workflows,
          or potential collaborations. Reach out directly, or grab the résumé.
        </p>

        <ul className="mt-8 space-y-3">
          {channels.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text transition-colors hover:border-accent/50"
              >
                <Icon className="h-4 w-4 shrink-0 text-bloom" aria-hidden="true" />
                <span className="font-mono">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <ResumeButton variant="solidLarge">Download résumé</ResumeButton>
      </Reveal>
    </section>
  )
}
