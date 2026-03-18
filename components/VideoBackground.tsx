'use client'

import { useEffect, useRef } from 'react'

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Wait for video metadata to load so we know its duration
    const onLoaded = () => {
      video.pause() // We control playback via scroll

      const onScroll = () => {
        const scrollY = window.scrollY
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        if (maxScroll <= 0) return

        // Map scroll position to video time
        const progress = Math.min(scrollY / maxScroll, 1)
        video.currentTime = progress * video.duration
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll() // Set initial position

      // Store cleanup ref
      video.dataset.cleanup = 'true'
      const cleanup = () => window.removeEventListener('scroll', onScroll)
      ;(video as any)._cleanup = cleanup
    }

    if (video.readyState >= 1) {
      onLoaded()
    } else {
      video.addEventListener('loadedmetadata', onLoaded, { once: true })
    }

    return () => {
      if ((video as any)?._cleanup) {
        ;(video as any)._cleanup()
      }
    }
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
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(1px) saturate(0.4) brightness(0.7)',
          opacity: 0.28,
          mixBlendMode: 'luminosity',
        }}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      {/* Subtle edge fade only — no heavy center overlay */}
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
