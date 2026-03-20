import { useEffect, useRef } from 'react'

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let ringX = 0, ringY = 0
    let curX = 0, curY = 0

    const moveCursor = (e: MouseEvent) => {
      curX = e.clientX
      curY = e.clientY
      cursor.style.left = curX - 6 + 'px'
      cursor.style.top = curY - 6 + 'px'
    }

    const animateRing = () => {
      ringX += (curX - ringX) * 0.12
      ringY += (curY - ringY) * 0.12
      ring.style.left = ringX - 18 + 'px'
      ring.style.top = ringY - 18 + 'px'
      requestAnimationFrame(animateRing)
    }

    const onMouseDown = () => {
      cursor.style.transform = 'scale(1.8)'
      ring.style.transform = 'scale(0.6)'
    }
    const onMouseUp = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    animateRing()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return { cursorRef, ringRef }
}
