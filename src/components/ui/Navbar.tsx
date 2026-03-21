import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLogo from './AnimatedLogo'

const navItems = [
  { label: 'HOME', href: 'hero' },
  { label: 'ABOUT', href: 'about' },
  { label: 'SKILLS', href: 'skills' },
  { label: 'EXPERIENCE', href: 'experience' },
  { label: 'PROJECTS', href: 'projects' },
  {label:'EDUCATION', href:'education'},
  { label: 'CONTACT', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('HOME')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (href: string) => {
  const el = document.getElementById(href)

if (el) {

  window.scrollTo({
     top:el.getBoundingClientRect().top + window.scrollY ,
    behavior: 'smooth',
  })
 // slight delay to allow menu to close
  }
}

  const handleNav = (label: string, href: string) => {
    setActive(label)
    setMenuOpen(false)
    // document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    // ✅ More reliable on mobile
      setTimeout(() => scrollToSection(href), 100)

  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer"
          onClick={() => handleNav('HOME', '#hero')}
        >
          <AnimatedLogo />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.label, item.href)}
              className={`font-orbitron text-xs tracking-widest transition-all duration-300 relative cyber-underline ${
                active === item.label
                  ? 'text-[#00f5ff]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === item.label && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#00f5ff]"
                  style={{ boxShadow: '0 0 8px #00f5ff' }}
                />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:dineshpenikalapati@gmail.com"
          className="hidden md:block font-orbitron text-xs px-5 py-2 border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff] hover:text-black transition-all duration-300 tracking-widest"
          style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
        >
          HIRE ME
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#00f5ff] font-orbitron text-xs"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕ CLOSE' : '☰ MENU'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#00f5ff]/20"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(item.label, item.href)}
                className={`block w-full text-left px-6 py-4 font-orbitron text-xs tracking-widest border-b border-gray-800/50 ${
                  active === item.label ? 'text-[#00f5ff]' : 'text-gray-400'
                }`}
              >
                <span className="text-[#ff00aa] mr-2">{'>'}</span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
