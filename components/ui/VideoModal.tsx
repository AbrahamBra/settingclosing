'use client'

import { useEffect } from 'react'

interface VideoModalProps {
  videoId: string
  provider: 'youtube' | 'vimeo'
  onClose: () => void
}

function getEmbedUrl(videoId: string, provider: 'youtube' | 'vimeo') {
  if (provider === 'youtube') {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }
  return `https://player.vimeo.com/video/${videoId}?autoplay=1`
}

export function VideoModal({ videoId, provider, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Témoignage vidéo"
      style={{ zIndex: 80 }}
      className="fixed inset-0 flex items-center justify-center p-4"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        style={{ zIndex: 90 }}
        className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden"
      >
        <iframe
          src={getEmbedUrl(videoId, provider)}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Témoignage vidéo"
        />
        <button
          onClick={onClose}
          aria-label="Fermer la vidéo"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
