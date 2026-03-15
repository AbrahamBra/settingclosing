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

export const textTestimonials: Testimonial[] = [
  {
    id: '99pct',
    name: 'Placeholder Nom',
    company: '99% Done',
    role: 'Fondateur',
    quote: 'Placeholder citation — à remplacer avant mise en ligne.',
    type: 'text',
  },
  {
    id: 'ellipse',
    name: 'Placeholder Nom',
    company: 'Ellipse',
    role: 'Fondateur',
    quote: 'Placeholder citation — à remplacer avant mise en ligne.',
    type: 'text',
  },
  {
    id: 'kbdigit',
    name: 'Placeholder Nom',
    company: 'KBDigit',
    role: 'Fondateur',
    quote: 'Placeholder citation — à remplacer avant mise en ligne.',
    type: 'text',
  },
]

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'video-1',
    name: 'Placeholder Nom',
    company: 'Placeholder Entreprise',
    quote: '',
    type: 'video',
    videoId: 'placeholder-video-id',
    provider: 'youtube',
    thumbnailUrl: '/thumbnails/placeholder-1.jpg',
  },
]
