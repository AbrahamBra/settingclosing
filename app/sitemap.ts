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
      url: 'https://challengerslab.fr/blog/setting-commercial-b2b',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://challengerslab.fr/blog/prospection-linkedin-b2b',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/comment-devenir-setter-b2b',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/cout-setter-b2b-prix',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/ia-methode-humain-setting-linkedin',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/messages-linkedin-sans-reponse',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
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
    {
      url: 'https://challengerslab.fr/blog/script-setting-linkedin',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/relance-linkedin-b2b',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/blog/closer-b2b',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/a-propos',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
