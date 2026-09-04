export function Sun() {
  return (
    <div
      className="absolute left-[72%] top-[30%] h-32 w-32 -translate-x-1/2 rounded-full sm:h-48 sm:w-48"
      style={{
        background: 'radial-gradient(circle, #FFE8A3 0%, #F7B267 35%, #E85D3F 68%, transparent 72%)',
        boxShadow: '0 0 120px 40px rgba(232,93,63,0.35)',
      }}
      aria-hidden="true"
    />
  )
}
