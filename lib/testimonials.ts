export interface Testimonial {
  id: string
  name: string
  company: string
  role?: string
  quote: string
  avatar?: string
  logo?: string
  type: 'text' | 'video'
}

export interface VideoTestimonial extends Testimonial {
  type: 'video'
  videoId: string
  provider: 'youtube' | 'vimeo'
  thumbnailUrl: string
}

export const textTestimonials: Testimonial[] = []

export const videoTestimonials: VideoTestimonial[] = []
