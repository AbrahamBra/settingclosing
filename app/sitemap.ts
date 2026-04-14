import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.setting.live',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.setting.live/methode/setting-linkedin',
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/ressources',
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.setting.live/ressources/setting-commercial-b2b',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/ressources/closing-b2b',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // closer-b2b — redirigé vers closing-b2b (consolidation SEO)
    // discovery-call-b2b — redirigé vers closing-b2b (consolidation SEO)
    // gestion-objections-b2b — redirigé vers closing-b2b (consolidation SEO)
    // script-closing-b2b — redirigé vers closing-b2b (consolidation SEO)
    {
      url: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.setting.live/ressources/setting-linkedin',
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/ressources/inbound-setting-linkedin',
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // setting-linkedin-definition — redirigé vers setting-linkedin (dé-consolidation SEO)
    // ia-methode-humain-setting-linkedin — redirigé vers comment-prospecter-sur-linkedin (consolidation SEO)
    // messages-linkedin-sans-reponse — redirigé vers prospection-linkedin-b2b (consolidation SEO)
    {
      url: 'https://www.setting.live/ressources/signal-achat-linkedin',
      lastModified: new Date('2026-03-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // setter-b2b-definition — redirigé vers setting-commercial-b2b (consolidation SEO)
    // challenger-sale-definition — redirigé vers methodes-vente-b2b (consolidation SEO)
    // difference-setting-closing — redirigé vers setting-commercial-b2b (consolidation SEO)
    // script-setting-linkedin — redirigé vers prospection-linkedin-b2b (consolidation SEO)
    // relance-linkedin-b2b — redirigé vers prospection-linkedin-b2b (consolidation SEO)
    // closer-b2b — redirigé vers closing-b2b (consolidation SEO)
    {
      url: 'https://www.setting.live/a-propos',
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.setting.live/tarifs',
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/externaliser-prospection-linkedin',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/resultats',
      lastModified: new Date('2026-03-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
      lastModified: new Date('2026-03-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.setting.live/glossaire',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.setting.live/ressources/methodes-vente-b2b',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // methode-soncas — redirigé vers methodes-vente-b2b (consolidation SEO)
    // methode-spin-selling — redirigé vers methodes-vente-b2b (consolidation SEO)
    // qualification-leads-b2b — redirigé vers methodes-vente-b2b (consolidation SEO)
    {
      url: 'https://www.setting.live/ressources/devenir-business-developer',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // setting-humain-vs-automatisation-linkedin — redirigé vers comment-prospecter-sur-linkedin (consolidation SEO)
    // sdr-interne-vs-externalise → 301 vers /externaliser-prospection-linkedin
    {
      url: 'https://www.setting.live/equipe/abraham-brakha',
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // setting-commercial-linkedin — redirigé vers setting-commercial-b2b (consolidation SEO)
    // comment-choisir-setter-linkedin — redirigé vers comment-devenir-setter-b2b (consolidation SEO)
    // combien-coute-setting-linkedin — redirigé vers comment-devenir-setter-b2b (consolidation SEO)
    // agence-setting-linkedin-vs-freelance → 301 vers /externaliser-prospection-linkedin
    // outils-setting-linkedin → 301 vers /externaliser-prospection-linkedin
    {
      url: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/ressources/agence-prospection-linkedin',
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.setting.live/ressources/setter-b2b',
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026',
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // messages-prospection-linkedin-exemples — redirigé vers prospection-linkedin-b2b (consolidation SEO)
    // social-selling-linkedin-b2b — redirigé vers comment-prospecter-sur-linkedin (consolidation SEO)
    // automatisation-prospection-linkedin — redirigé vers comment-prospecter-sur-linkedin (consolidation SEO)
    {
      url: 'https://www.setting.live/mentions-legales',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.setting.live/politique-confidentialite',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
