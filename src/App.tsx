import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { LazySection } from '@/components/ui/LazySection'

/**
 * Navbar + Hero ship in the main bundle — they're above the fold and own the
 * LCP. Everything below is a separate chunk that only downloads once it nears
 * the viewport (see LazySection).
 *
 * minHeightClassName is two tiers, not one number: a mobile value plus the
 * breakpoint where that section's OWN layout actually changes column count
 * (`lg:` for About — its grid only collapses at 1024px; `sm:` for the rest,
 * which switch at 640px). Both tiers are real measurements (390px-wide and
 * 1280px-wide iframes against production), rounded up ~20-50px for headroom,
 * not estimates — a single desktop number here is what produced a 0.353
 * mobile CLS after the previous deploy.
 */
const sections = [
  {
    id: 'about',
    minHeightClassName: 'min-h-[1900px] lg:min-h-[1000px]',
    load: () => import('@/components/sections/About').then((m) => ({ default: m.About })),
  },
  {
    id: 'skills',
    minHeightClassName: 'min-h-[1260px] sm:min-h-[700px]',
    load: () => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
  },
  {
    id: 'experience',
    minHeightClassName: 'min-h-[2650px] sm:min-h-[1500px]',
    load: () => import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
  },
  {
    id: 'education',
    minHeightClassName: 'min-h-[570px] sm:min-h-[430px]',
    load: () => import('@/components/sections/Education').then((m) => ({ default: m.Education })),
  },
  {
    id: 'contact',
    minHeightClassName: 'min-h-[730px] sm:min-h-[660px]',
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
        minHeightClassName="min-h-[190px] sm:min-h-[75px]"
        load={() => import('@/components/layout/Footer').then((m) => ({ default: m.Footer }))}
      />
    </div>
  )
}

export default App
