import { useEffect } from 'react'
import { useCursor } from './hooks/useCursor'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import EducationSection from './components/sections/EducationSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  const { cursorRef, ringRef } = useCursor()

  // Hide default cursor on mount
  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />

      {/* App */}
      <div className="relative bg-[#020408] min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
