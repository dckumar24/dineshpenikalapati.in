import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ExperienceSection() {
  const [active, setActive] = useState(0)
  const revealRef = useScrollReveal()

  return (
    <section id="experience" className="relative py-32 px-8 md:px-16 lg:px-24 hex-bg">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff00aa]/30 to-transparent" />

      <div ref={revealRef} className="section-reveal max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[#ff00aa] tracking-widest mb-3">
            <span className="text-gray-500">{'// '}</span>03. WORK_EXPERIENCE
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white">
            CAREER<span className="text-[#ff00aa]"> LOG</span>
          </h2>
          <div className="mt-4 w-32 h-px bg-gradient-to-r from-[#ff00aa] to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company selector */}
          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <motion.button
                key={exp.company}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-4 border transition-all duration-300 ${
                  active === i
                    ? 'border-l-4 bg-black/60'
                    : 'border-gray-800 hover:border-gray-600 bg-transparent'
                }`}
                style={active === i ? { borderColor: exp.color, borderLeftWidth: '4px' } : {}}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: exp.color, boxShadow: `0 0 6px ${exp.color}` }}
                  />
                  <span className="font-orbitron text-sm font-bold text-white">{exp.company}</span>
                </div>
                <p className="font-mono text-xs text-gray-500 ml-5">{exp.period}</p>
                <span
                  className="font-mono text-xs ml-5"
                  style={{ color: exp.color }}
                >
                  {exp.domain}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Experience detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div
                  className="p-8 bg-black/40 backdrop-blur-sm h-full"
                  style={{
                    border: `1px solid ${experiences[active].color}33`,
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-orbitron font-bold text-2xl text-white mb-1">
                      {experiences[active].role}
                    </h3>
                    <p className="font-orbitron text-lg" style={{ color: experiences[active].color }}>
                      {experiences[active].company}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <span className="font-mono text-xs text-gray-400">📅 {experiences[active].period}</span>
                      <span className="font-mono text-xs text-gray-400">📍 {experiences[active].location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="font-mono text-xs text-gray-500 tracking-widest mb-4">HIGHLIGHTS</p>
                    <ul className="space-y-3">
                      {experiences[active].highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex gap-3 font-mono text-sm text-gray-300"
                        >
                          <span style={{ color: experiences[active].color }} className="mt-0.5 shrink-0">▸</span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack chips */}
                  <div>
                    <p className="font-mono text-xs text-gray-500 tracking-widest mb-3">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {experiences[active].stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1"
                          style={{
                            border: `1px solid ${experiences[active].color}44`,
                            color: experiences[active].color,
                            background: `${experiences[active].color}0a`,
                            clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
