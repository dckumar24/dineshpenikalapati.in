import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

function readInitialTheme(): Theme {
  // Light is the default everywhere — dark only when the boot script in
  // index.html found an explicit stored preference for it.
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Single source of truth for the theme, shared via context — the toggle
 * button and the Hero scene both need to react to the same value, which a
 * per-component local useState can't provide (each instance would only
 * know its own initial read of the DOM class, never the other's updates).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
