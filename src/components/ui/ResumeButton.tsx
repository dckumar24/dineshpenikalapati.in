import { useState } from 'react'
import clsx from 'clsx'
import { profile } from '@/data/portfolio'

type Variant = 'solid' | 'solidLarge' | 'ghost' | 'block'

/* The accent pill carries dark-brown text in BOTH themes: white on the light
   theme's #D97B29 only reaches 3.08:1, which fails WCAG AA. #2B1B10 clears it
   at ~5.4:1 on the orange and ~10:1 on the dark theme's gold. */
const variants: Record<Variant, string> = {
  /* navbar: filled accent pill */
  solid:
    'rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#2B1B10] transition-transform hover:scale-[1.03] active:scale-[0.98]',
  /* contact section: same pill, roomier */
  solidLarge:
    'mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#2B1B10] transition-transform hover:scale-[1.03] active:scale-[0.98]',
  /* hero: sits on the sunset scene, so it needs its own light-on-dark treatment */
  ghost:
    'rounded-full border border-white/30 bg-black/20 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/60',
  /* mobile menu: full-width */
  block: 'mt-4 block rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-[#2B1B10]',
}

interface ResumeButtonProps {
  variant?: Variant
  className?: string
  children?: string
}

/**
 * The résumé PDF must not touch the network until the user actually asks for it,
 * so the click is intercepted and the file fetched on demand. The real `href`
 * stays on the anchor for right-click / no-JS / crawlers, and `rel="nofollow"`
 * keeps Chrome's link preloading from pulling the 165 kB PDF on page load.
 */
export function ResumeButton({ variant = 'solid', className, children = 'Résumé' }: ResumeButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (new tab, save-as) behave natively.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
    event.preventDefault()
    if (loading) return

    setLoading(true)
    try {
      const response = await fetch(profile.resumeUrl)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = profile.resumeUrl.replace(/^\//, '')
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch {
      // Network hiccup or blocked blob — fall back to letting the browser handle it.
      window.location.href = profile.resumeUrl
    } finally {
      setLoading(false)
    }
  }

  return (
    <a
      href={profile.resumeUrl}
      download
      rel="nofollow"
      onClick={handleClick}
      aria-busy={loading || undefined}
      className={clsx(variants[variant], className)}
    >
      {loading ? 'Preparing…' : children}
    </a>
  )
}
