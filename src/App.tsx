import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { LazySection } from '@/components/ui/LazySection'
import { WebVitalsBadge } from '@/components/ui/WebVitalsBadge'

/**
 * Navbar + Hero ship in the main bundle — they're above the fold and own the
 * LCP. Everything below is a separate chunk that only downloads once it nears
 * the viewport (see LazySection). minHeight values are the real desktop heights
 * measured at 1280px, so the swap-in costs no layout shift.
 */
const sections = [
  {
    id: 'about',
    minHeight: 996,
    load: () => import('@/components/sections/About').then((m) => ({ default: m.About })),
  },
  {
    id: 'skills',
    minHeight: 685,
    load: () => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
  },
  {
    id: 'experience',
    minHeight: 1487,
    load: () => import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
  },
  {
    id: 'education',
    minHeight: 422,
    load: () => import('@/components/sections/Education').then((m) => ({ default: m.Education })),
  },
  {
    id: 'contact',
    minHeight: 656,
    load: () => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
  },
]

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main">
        <Hero />
        {sections.map((section) => (
          <LazySection key={section.id} {...section} />
        ))}
      </main>
      <LazySection
        id="site-footer"
        minHeight={69}
        load={() => import('@/components/layout/Footer').then((m) => ({ default: m.Footer }))}
      />
      {/* Not gated by LazySection: it measures the page's own load, so it has
          to be mounted from the start — see useWebVitals for how it still
          keeps that off the critical path. */}
      <WebVitalsBadge />
    </div>
  )
}

export default App
