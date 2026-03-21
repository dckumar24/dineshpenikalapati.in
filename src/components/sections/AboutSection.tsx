  import { motion } from 'framer-motion'
  import { useScrollReveal } from '../../hooks/useScrollReveal'
  import { profileData } from '../../data/portfolio'

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '∞', label: 'Lines of Code' },
  ]

  const techHighlights = [
    { icon: '⚛️', label: 'React 19', sub: 'Expert' },
    { icon: '🔷', label: 'TypeScript', sub: 'Strongly typed' },
    { icon: '🏗️', label: 'Nx Monorepo', sub: 'Architecture' },
    { icon: '🤖', label: 'AI Tools', sub: 'Copilot & Windsurf' },
    { icon: '🧪', label: 'Vitest/Jest + RTL', sub: '' },
  ]

  export default function AboutSection() {
    const revealRef = useScrollReveal()

    return (
      <section id="about" className="relative py-32 px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24  hex-bg overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#00f5ff]/20 to-transparent" />

        <div ref={revealRef} className="section-reveal max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <p className="font-mono text-xs text-[#ff00aa] tracking-widest mb-3">
              <span className="text-gray-500">{'// '}</span>01. ABOUT_ME
            </p>
            <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white">
              WHO AM I<span className="text-[#00f5ff]">?</span>
            </h2>
            <div className="cyber-divider mt-4 w-32" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Bio */}
            <div>
              <div className="neon-border-cyan p-6 mb-8 bg-black/40 backdrop-blur-sm"
                style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
              >
                <p className="font-mono text-sm text-gray-300 leading-loose">
                  {profileData.bio}
                </p>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'LOCATION', value: 'Hyderabad <-> Bengaluru, India' },
                  { label: 'CURRENT', value: 'Infosys — Consultant' },
                  { label: 'DOMAIN', value: 'Healthcare & BFS' },
                  { label: 'OPEN TO', value: 'Remote / Hybrid' },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#00f5ff]/30 pl-4">
                    <p className="font-mono text-xs text-[#00f5ff] tracking-widest mb-1 break-words">{item.label}</p>
                    <p className="font-mono text-sm text-white break-words">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'GITHUB', href: profileData.github, color: 'yellow' },
                  { label: 'LINKEDIN', href: profileData.linkedin, color: '#00f5ff' },
                  { label: 'TWITTER', href: profileData.twitter, color: '#ff00aa' },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="font-orbitron text-xs px-4 py-2 tracking-widest transition-all duration-300 "
                    style={{
                      border: `1px solid ${link.color}`,
                      color: link.color,
                      clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Stats + tech highlights */}
            <div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 bg-black/60 border border-gray-800 hover:border-[#00f5ff]/50 transition-all duration-300 group"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
                  >
                    <p className="font-orbitron font-black text-4xl text-[#00f5ff] group-hover:text-[#ff00aa] transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="font-mono text-xs text-gray-500 tracking-widest mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech highlights */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                {techHighlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 bg-black/40 border border-gray-800/60 hover:border-[#00f5ff]/40 transition-all duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-mono text-xs text-white">{item.label}</p>
                      <p className="font-mono text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
