'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const haloRef = useRef<HTMLDivElement>(null)
  const pointRef = useRef<HTMLDivElement>(null)
  const lastX = useRef(0)
  const lastY = useRef(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const updatePosition = (x: number, y: number) => {
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
      if (pointRef.current) {
        pointRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastX.current = e.clientX
      lastY.current = e.clientY
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          updatePosition(lastX.current, lastY.current)
          rafId.current = null
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div
        ref={haloRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
      <div
        ref={pointRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(59,130,246,0.6)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
    </>
  )
}
