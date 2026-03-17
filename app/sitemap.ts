import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://challengerslab.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://challengerslab.fr/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://challengerslab.fr/blog/signal-achat-linkedin',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/setter-b2b-definition',
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/challenger-sale-definition',
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/difference-setting-closing',
      lastModified: new Date('2026-03-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
