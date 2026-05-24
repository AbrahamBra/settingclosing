import { describe, it, expect } from 'vitest'
import { textTestimonials, videoTestimonials } from '../../lib/testimonials'

describe('testimonials data', () => {
  it('has at least 3 text testimonials', () => {
    expect(textTestimonials.length).toBeGreaterThanOrEqual(3)
  })

  it('each text testimonial has required fields', () => {
    textTestimonials.forEach((t) => {
      expect(t.id).toBeTruthy()
      expect(t.name).toBeTruthy()
      expect(t.company).toBeTruthy()
      expect(t.quote).toBeTruthy()
      expect(t.type).toBe('text')
    })
  })

  it('each video testimonial has videoId and provider', () => {
    videoTestimonials.forEach((t) => {
      expect(t.videoId).toBeTruthy()
      expect(['youtube', 'vimeo']).toContain(t.provider)
      expect(t.thumbnailUrl).toBeTruthy()
      expect(t.type).toBe('video')
    })
  })
})
