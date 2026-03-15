'use client'

import { useState } from 'react'
import { GlassCard } from './ui/GlassCard'
import { ScrollReveal } from './ui/ScrollReveal'
import { VideoModal } from './ui/VideoModal'
import { textTestimonials, videoTestimonials } from '@/lib/testimonials'
import type { VideoTestimonial } from '@/lib/testimonials'

export function Preuves() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null)

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-16">
            Ils nous ont fait confiance
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {textTestimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.id} delay={i * 100}>
              <GlassCard className="p-8 h-full flex flex-col gap-4">
                <p className="font-sans text-text-muted leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-sans font-semibold text-text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-text-muted text-sm">
                    {testimonial.role ? `${testimonial.role}, ` : ''}{testimonial.company}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {videoTestimonials.length > 0 && (
          <>
            <ScrollReveal>
              <h3 className="font-sans font-semibold text-h3 text-text-primary text-center mb-8">
                En vidéo
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTestimonials.map((video, i) => (
                <ScrollReveal key={video.id} delay={i * 100}>
                  <button
                    aria-label={`Regarder le témoignage de ${video.name} (${video.company})`}
                    onClick={() => setActiveVideo(video)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden group bg-bg-primary"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center">
                        <span className="text-white text-xl ml-1">▶</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <p className="font-sans text-white text-sm font-semibold">{video.name}</p>
                      <p className="font-sans text-white/70 text-xs">{video.company}</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo.videoId}
          provider={activeVideo.provider}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  )
}
