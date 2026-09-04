import clsx from 'clsx'

/**
 * The source mark (assets/mylogo.svg) is a solid white fill. It's applied here as a
 * CSS mask so it renders in `currentColor` and auto-adapts across the dark/light theme
 * without needing a second asset variant.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Dinesh Kumar Penikalapati logo mark"
      className={clsx('inline-block bg-text', className)}
      style={{
        WebkitMaskImage: 'url(/mylogo.svg)',
        maskImage: 'url(/mylogo.svg)',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  )
}
