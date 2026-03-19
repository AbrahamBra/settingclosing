import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { BlogContent } from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Ressources — Prospection et setting LinkedIn B2B | ChallengersLab',
  description:
    'Méthodes, scripts et stratégies de prospection LinkedIn B2B. Guides pour fondateurs, freelances et solopreneurs qui veulent des RDV qualifiés.',
  openGraph: {
    title: 'Ressources — Prospection et setting LinkedIn B2B | ChallengersLab',
    description:
      'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://challengerslab.fr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ressources ChallengersLab — Prospection LinkedIn B2B',
      },
    ],
  },
  alternates: {
    canonical: 'https://challengerslab.fr/ressources',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const resourcesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://challengerslab.fr/ressources',
  name: 'Ressources — Prospection et setting LinkedIn B2B',
  description:
    'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
  url: 'https://challengerslab.fr/ressources',
  isPartOf: { '@id': 'https://challengerslab.fr/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
      { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://challengerslab.fr/ressources' },
    ],
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResourcesIndexPage() {
  return (
    <>
      <NavbarBlog />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
      />
      <main className="pt-28 pb-24">
        <BlogContent />
      </main>
      <Footer />
    </>
  )
}
