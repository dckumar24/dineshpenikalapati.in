import { useEffect, useState } from 'react'

/**
 * Types `text` out once, character by character. Respects prefers-reduced-motion
 * by rendering the full string immediately instead of animating. `startDelayMs`
 * lets the caller wait its turn in a longer entrance sequence.
 */
export function useTypewriter(text: string, speedMs = 35, startDelayMs = 0) {
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setOutput(text)
      setDone(true)
      return
    }

    let interval: ReturnType<typeof setInterval>
    const start = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i += 1
        setOutput(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speedMs)
    }, startDelayMs)

    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [text, speedMs, startDelayMs])

  return { output, done }
}
