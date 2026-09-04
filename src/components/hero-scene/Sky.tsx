export function Sky({ isDark }: { isDark: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0B1026 0%, #131A3A 45%, #1D2350 75%, #2A2F55 100%)'
          : 'linear-gradient(180deg, #F7B267 0%, #F4845F 28%, #E85D3F 52%, #C9457A 74%, #6B3F82 100%)',
      }}
      aria-hidden="true"
    />
  )
}
