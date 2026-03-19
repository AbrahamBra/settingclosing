'use client'

import { useCallback, useEffect, useState } from 'react'

export function VideoBackground() {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null)

  // Callback ref — guaranteed to fire when the element mounts
  const videoCallback = useCallback((node: HTMLVideoElement | null) => {
    setVideoEl(node)
  }, [])

  useEffect(() => {
    if (!videoEl) return

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return
      const progress = Math.min(window.scrollY / maxScroll, 1)
      // Shift from top (15%) to bottom (85%) of video frame as user scrolls
      const yPos = 15 + progress * 70
      videoEl.style.objectPosition = `center ${yPos}%`
    }

    // Slow the video down so it doesn't compete with text
    videoEl.playbackRate = 0.4

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // set initial position
    return () => window.removeEventListener('scroll', onScroll)
  }, [videoEl])

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
        ref={videoCallback}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 15%',
          filter: 'saturate(0.35) brightness(0.65)',
          opacity: 0.18,
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
            'linear-gradient(to bottom, rgba(10,9,8,0.4) 0%, transparent 12%, transparent 88%, rgba(10,9,8,0.4) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
