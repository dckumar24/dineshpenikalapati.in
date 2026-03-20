import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function EducationSection() {
  const [active, setActive] = useState(0)
  const revealRef = useScrollReveal()

  return (
    <section id="education" className="relative py-32 px-8 md:px-16 lg:px-24 hex-bg">
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00f5ff]/30 to-transparent" />

      <div ref={revealRef} className="section-reveal max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[#00f5ff] tracking-widest mb-3">
            <span className="text-gray-500">{'// '}</span>04. EDUCATION
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white">
            ACADEMIC<span className="text-[#00f5ff]"> JOURNEY</span>
          </h2>
          <div className="mt-4 w-32 h-px bg-gradient-to-r from-[#00f5ff] to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education selector */}
          <div className="space-y-2">
            {education.map((edu, i) => (
              <motion.button
                key={edu.institution}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-4 border transition-all duration-300 ${
                  active === i
                    ? 'border-l-4 bg-black/60'
                    : 'border-gray-800 hover:border-gray-600 bg-transparent'
                }`}
                style={active === i ? { borderColor: edu.color, borderLeftWidth: '4px' } : {}}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: edu.color, boxShadow: `0 0 6px ${edu.color}` }}
                  />
                  <span className="font-orbitron text-sm font-bold text-white">{edu.institution}</span>
                </div>
                <p className="font-mono text-xs text-gray-500 ml-5">{edu.period}</p>
                <span
                  className="font-mono text-xs ml-5"
                  style={{ color: edu.color }}
                >
                  {edu.degree}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Education detail */}
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
                    border: `1px solid ${education[active].color}33`,
                    clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
                  }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="font-orbitron font-bold text-2xl text-white mb-1">
                      {education[active].degree}
                    </h3>
                    <p className="font-orbitron text-lg" style={{ color: education[active].color }}>
                      {education[active].institution}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <span className="font-mono text-xs text-gray-400">📅 {education[active].period}</span>
                      <span className="font-mono text-xs text-gray-400">📍 {education[active].location}</span>
                    </div>
                  </div>

                  {/* Field of Study */}
                  <div className="mb-6">
                    <p className="font-mono text-xs text-gray-500 tracking-widest mb-2">FIELD</p>
                    <p className="text-gray-300 leading-relaxed">{education[active].field}</p>
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
