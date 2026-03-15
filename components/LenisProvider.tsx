'use client'

import { useEffect } from 'react'

export function LenisProvider() {
  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let lenis: any

    async function init() {
      try {
        // Use @studio-freight/lenis (lenis package not installed)
        const mod = await import('@studio-freight/lenis')
        const Lenis = mod.default
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis unavailable, skip smooth scroll
      }
    }

    init()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return null
}
