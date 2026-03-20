import { useState } from 'react'
import { motion } from 'framer-motion'
import { profileData } from '../../data/portfolio'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const revealRef = useScrollReveal()

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactLinks = [
    { label: 'EMAIL', value: profileData.email, icon: '✉️', action: copyEmail, actionLabel: copied ? '✓ COPIED' : 'COPY' },
    { label: 'LINKEDIN', value: 'dineshpenikalapati', icon: '🔗', href: profileData.linkedin },
    { label: 'GITHUB', value: 'dckumar24', icon: '⌨️', href: profileData.github },
    { label: 'WEBSITE', value: 'dineshpenikalapati.in', icon: '🌐', href: profileData.website },
    { label: 'PHONE', value: profileData.phone, icon: '📱', href: `tel:${profileData.phone}` },
    {label:"WHATSAPP", value:'', icon:'📞', href:`https://wa.me/918790351056?text=Hi Dinesh, I have gone through your website.`},
  ]

  return (
    <section id="contact" className="relative py-32 px-8 md:px-16 lg:px-24 hex-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)' }}
      />

      <div ref={revealRef} className="section-reveal max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-[#ff00aa] tracking-widest mb-3">
            <span className="text-gray-500">{'// '}</span>05. CONTACT
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-4">
            LET'S<span className="text-[#00f5ff]"> CONNECT</span>
          </h2>
          <div className="cyber-divider mx-auto w-32 mb-6" />
          <p className="font-mono text-sm text-gray-400 max-w-lg mx-auto">
            Open to senior frontend roles, consulting, and interesting projects. 
            Let's build something extraordinary together.
          </p>
        </div>

       

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 bg-black/40 border border-gray-800 hover:border-[#00f5ff]/50 transition-all duration-300"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{link.icon}</span>
                <span className="font-mono text-xs text-[#00f5ff] tracking-widest">{link.label}</span>
              </div>
              <p className="font-mono text-xs text-gray-400 mb-3 truncate">{link.value}</p>
              {link.action ? (
                <button
                  onClick={link.action}
                  className="font-mono text-xs text-[#00f5ff] hover:text-white transition-colors tracking-widest"
                >
                  {link.actionLabel} →
                </button>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-gray-500 hover:text-[#00f5ff] transition-colors tracking-widest"
                >
                  VISIT →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
