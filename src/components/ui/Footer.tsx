import AnimatedLogo from './AnimatedLogo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/60 py-4 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <AnimatedLogo size="w-10" />
        <p className="font-mono text-xs text-gray-600 text-center">
          Designed & built by{' '}
          <span className="text-[#00f5ff]">🤖.</span>
          {' '}Prompted using ⌨ with 🤍
        </p>
        <p className="font-mono text-xs text-gray-700">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
