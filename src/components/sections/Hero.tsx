import type { CSSProperties } from 'react'
import { ArrowDown, Mail, Phone } from 'lucide-react'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import { useTypewriter } from '@/hooks/useTypewriter'
import { useTheme } from '@/hooks/useTheme'
import { profile, experience } from '@/data/portfolio'
import { AnimatedName } from '@/components/ui/AnimatedName'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { Sky } from '@/components/hero-scene/Sky'
import { Sun } from '@/components/hero-scene/Sun'
import { Mountains } from '@/components/hero-scene/Mountains'
import { Clouds } from '@/components/hero-scene/Clouds'
import { Birds } from '@/components/hero-scene/Birds'
import { Stars } from '@/components/hero-scene/Stars'
import { Comets } from '@/components/hero-scene/Comets'
import { Sunflowers } from '@/components/hero-scene/Sunflowers'

const currentRole = experience[0]

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail, external: false },
  { href: `tel:${profile.phone.replace(/\s+/g, '')}`, label: 'Phone', Icon: Phone, external: false },
  { href: profile.github, label: 'GitHub', Icon: GitHubIcon, external: true },
]

/** Entrance beats — the name types itself in first, everything else follows. */
const beat = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/**
 * The scene follows the site's dark/light toggle directly: light mode is a
 * fixed sunset (sun, clouds, birds), dark mode is a fixed starry night
 * (stars, comets) — no timed transition between the two. Content stays a
 * fixed white/black palette (not the --bg/--text tokens) so it reads
 * cleanly against either scene.
 */
export function Hero() {
  const { output, done } = useTypewriter(`${profile.title} — React & TypeScript`, 28, 500)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="hero" className="relative h-[92vh] min-h-[640px] overflow-hidden">
      <Sky isDark={isDark} />
      {isDark ? (
        <>
          <Stars />
          <Comets />
        </>
      ) : (
        <>
          <Sun />
          <Clouds />
          <Birds />
        </>
      )}
      <Mountains isDark={isDark} />
      <Sunflowers />

      <div className="relative z-20 mx-auto flex h-full max-w-5xl items-center px-6">
        <div className="mr-auto flex w-full max-w-md flex-col items-start text-left">
          <div className="hero-enter inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1 font-mono text-xs text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F2C14E]" aria-hidden="true" />
            building @ {currentRole.company} — {currentRole.title.split(',').pop()?.trim()}
          </div>

          <h1
            className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}
          >
            <AnimatedName name={profile.name} />
          </h1>

          <div
            className="hero-enter mt-4 w-full rounded-lg border border-white/20 bg-black/30 px-2 py-3 text-left font-mono text-sm text-white/85 backdrop-blur-md sm:text-base"
            style={beat(220)}
          >
            <span className="text-[#F2C14E]">&gt;</span> whoami
            <div className="mt-1 text-white">
              {output}
              {!done && (
                <span
                  className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-blink bg-[#F2C14E]"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>

          {/* Deliberately not `hero-enter`: this paragraph is the LCP element,
              and an element fading up from opacity 0 doesn't count as painted
              until its delay elapses — which cost ~300ms of LCP on mobile. */}
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
          >
            {profile.tagline}
          </p>

          <div
            className="hero-enter mt-8 flex flex-wrap items-center justify-start gap-4"
            style={beat(400)}
          >
            <a
              href="#experience"
              className="rounded-full bg-[#F2C14E] px-5 py-2.5 text-sm font-semibold text-[#2B1B10] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View experience
            </a>
            <ResumeButton variant="ghost">Download résumé</ResumeButton>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/85 backdrop-blur-sm transition-colors hover:border-white/60 hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-white/80 transition-colors hover:text-white sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
