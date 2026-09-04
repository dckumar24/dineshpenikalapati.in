import { useEffect, useState } from 'react'

/**
 * Types `text` out once, character by character. Respects prefers-reduced-motion
 * by rendering the full string immediately instead of animating.
 */
export function useTypewriter(text: string, speedMs = 35) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setOutput(text)
      setDone(true)
      return
    }

    let i = 0
    const id = setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speedMs)

    return () => clearInterval(id)
  }, [text, speedMs])

  return { output, done }
}
