import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SkillOrbs from '../three/SkillOrbs'
import { skills } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const categories = ['All', ...Array.from(new Set(skills.map((s) => s.category)))]

export default function SkillsSection() {
  const [selected, setSelected] = useState<{ name: string; description: string } | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const revealRef = useScrollReveal()

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-32 overflow-hidden" style={{ background: '#060d14' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408] pointer-events-none" />

      <div ref={revealRef} className="section-reveal max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[#ff00aa] tracking-widest mb-3">
            <span className="text-gray-500">{'// '}</span>02. SKILLS_MATRIX
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white">
            TECH<span className="text-[#00f5ff]"> ARSENAL</span>
          </h2>
          <div className="cyber-divider mt-4 w-32" />
          <p className="font-mono text-sm text-gray-400 mt-4">
            Interact with the 3D helix — hover orbs to identify skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* 3D Canvas */}
          <div className="relative h-[500px] neon-border-cyan"
            style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <SkillOrbs
                onSelect={(name, description) => setSelected({ name, description })}
                onDeselect={() => setSelected(null)}
              />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.8}
              />
            </Canvas>
            {/* Selected skill overlay */}
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 right-6 bg-black/90 border border-[#00f5ff]/40 p-4"
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                <p className="font-orbitron text-[#00f5ff] text-sm mb-2">{selected.name}</p>
                <p className="font-mono text-xs text-gray-300 leading-relaxed">{selected.description}</p>
              </motion.div>
            )}
          </div>

          {/* Skill list */}
          <div>
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs px-3 py-1 tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#00f5ff] text-black'
                      : 'border border-gray-700 text-gray-400 hover:border-[#00f5ff]/50 hover:text-[#00f5ff]'
                  }`}
                  style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skill list */}
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setSelected({ name: skill.name, description: skill.description })}
                  className="group cursor-pointer p-3 border border-gray-700/40 hover:border-[#00f5ff]/60 transition-all duration-300"
                  style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
                    />
                    <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
