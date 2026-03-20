import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ParticleField from '../three/ParticleField'
import FloatingGeometry from '../three/FloatingGeometry'
import { profileData } from '../../data/portfolio'
import yourPhoto from '../../../assets/myphoto_nobg.png'

const roles = [
  'Senior Frontend Developer',
  'React + TypeScript Expert',
  'Nx Monorepo Architect',
  'Enterprise UI Engineer',
  'AI-Assisted Developer',
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="text-[#00f5ff]">
      {displayed}
      <span className="animate-pulse ml-1 text-[#ff00aa]">|</span>
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden hex-bg">

      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleField count={1800} />
          <FloatingGeometry />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none" />

      {/* ── Layout ──
          Mobile:  flex-col-reverse → photo on top, text below
          Desktop: flex-row         → text left, photo right
      */}
      <div className="relative z-10 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-8 md:px-16 lg:px-24 gap-10 lg:gap-0 py-24 lg:py-0 pointer-events-none">

        {/* LEFT — text content */}
        <div className="flex flex-col justify-center max-w-xl w-full pointer-events-none">

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse" />
            <span className="font-mono text-xs text-[#00ff9f] tracking-widest uppercase">
              Available for opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-sm text-gray-400 tracking-widest mb-3"
          >
            <span className="text-[#ff00aa]">{'>'}</span> Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-orbitron font-black text-5xl md:text-7xl leading-none mb-2"
          >
            <span
              className="glitch-text text-white block"
              data-text={profileData.name}
            >
              {profileData.name}
            </span>
            <span className="text-[#ff00aa] text-4xl md:text-5xl block mt-1">
              {profileData.lastName}
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-orbitron text-xl md:text-2xl mt-4 mb-6 h-8"
          >
            <TypewriterText />
          </motion.div>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['6+ Years Exp', 'React 19 Expert', 'AI-Assisted Dev', 'Healthcare & BFS Domain'].map((tag) => (
              <span key={tag} className="cyber-tag">{tag}</span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 pointer-events-auto"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-orbitron text-xs px-8 py-3 border border-[#ff00aa] text-[#ff00aa] tracking-widest hover:bg-[#ff00aa] hover:text-black transition-all duration-300"
              style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
            >
              GET IN TOUCH
            </button>
          </motion.div>
        </div>

        {/* RIGHT / TOP — Photo */}
        <div className="flex items-center justify-center relative pointer-events-none
                        w-[220px] h-[220px]
                        sm:w-[260px] sm:h-[260px]
                        lg:w-[360px] lg:h-[360px]">

          {/* Static border ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #00f5ff, #ff00aa, #00ff9f, #00f5ff)',
              padding: '2px',
            }}
          >
            <div className="w-full h-full rounded-full bg-[#020408]" />
          </div>

          {/* Outer glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              inset: '-10px',
              boxShadow: '0 0 40px rgba(0,245,255,0.15), 0 0 80px rgba(255,0,170,0.1)',
            }}
          />

          {/* Corner scan-line decorations */}
          {[
            'top-0 left-0 border-t border-l',
            'top-0 right-0 border-t border-r',
            'bottom-0 left-0 border-b border-l',
            'bottom-0 right-0 border-b border-r',
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-6 h-6 lg:w-8 lg:h-8 ${pos} border-[#00f5ff]`}
              style={{ opacity: 0.7 }}
            />
          ))}

          {/* Photo */}
          <div
            className="relative rounded-full overflow-hidden z-10"
            style={{
              width: 'calc(100% - 12px)',
              height: 'calc(100% - 12px)',
              border: '2px solid rgba(0,245,255,0.3)',
              boxShadow: 'inset 0 0 30px rgba(0,245,255,0.05)',
            }}
          >
            <img
              src={yourPhoto}
              alt={profileData.name}
              className="w-full h-full object-cover object-top"
              style={{ filter: 'contrast(1.05) saturate(0.9)' }}
            />

            {/* Cyan duotone overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(160deg, rgba(0,245,255,0.12) 0%, transparent 60%, rgba(255,0,170,0.08) 100%)',
                mixBlendMode: 'screen',
              }}
            />

            {/* Scan-line effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
              }}
            />
          </div>

          {/* Static status badge */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 border border-[#00f5ff]/30 bg-black/80 backdrop-blur-sm whitespace-nowrap"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9f] animate-pulse" />
            <span className="font-mono text-xs text-[#00f5ff] tracking-widest">ONLINE</span>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-xs text-gray-500 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#00f5ff] to-transparent"
        />
      </motion.div>

    </section>
  )
}