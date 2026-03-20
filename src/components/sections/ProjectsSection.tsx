import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ProjectsSection() {
  const revealRef = useScrollReveal()

  return (
    <section id="projects" className="relative py-32 px-8 md:px-16 lg:px-24" style={{ background: '#060d14' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-[#020408] pointer-events-none" />

      <div ref={revealRef} className="section-reveal max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[#ff00aa] tracking-widest mb-3">
            <span className="text-gray-500">{'// '}</span>04. PROJECTS
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white">
            WHAT I'VE<span className="text-[#ffe600]"> BUILT</span>
          </h2>
          <div className="mt-4 w-32 h-px bg-gradient-to-r from-[#ffe600] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group p-6 bg-black/60 backdrop-blur-sm transition-all duration-300"
              style={{
                border: `1px solid ${project.color}22`,
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${project.color}08, transparent 70%)`,
                }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <span
                      className="font-mono text-xs tracking-widest"
                      style={{ color: project.color }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    ↗ LIVE
                  </a>
                )}
              </div>

              <h3 className="font-orbitron font-bold text-lg text-white mb-3 group-hover:text-[#00f5ff] transition-colors duration-300">
                {project.title}
              </h3>

              <p className="font-mono text-sm text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5"
                    style={{
                      border: `1px solid ${project.color}33`,
                      color: `${project.color}cc`,
                      background: `${project.color}08`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
