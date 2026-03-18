'use client'

import { useEffect, useRef } from 'react'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        if (maxScroll <= 0) { ticking = false; return }

        // Map scroll to vertical position: top of page = 20%, bottom = 80%
        const progress = Math.min(scrollY / maxScroll, 1)
        const yPos = 20 + progress * 60
        video.style.objectPosition = `center ${yPos}%`
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="hidden md:block"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          filter: 'blur(1px) saturate(0.4) brightness(0.7)',
          opacity: 0.25,
          mixBlendMode: 'luminosity',
        }}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      {/* Subtle edge fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,9,8,0.5) 0%, transparent 15%, transparent 85%, rgba(10,9,8,0.5) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
