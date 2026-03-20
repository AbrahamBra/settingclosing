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
  breadcrumb: { '@id': 'https://challengerslab.fr/ressources#breadcrumb' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://challengerslab.fr/ressources#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://challengerslab.fr',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ressources',
      item: 'https://challengerslab.fr/ressources',
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="pt-28 pb-24">

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <nav
          aria-label="Fil d&apos;Ariane"
          className="bg-bg-primary border-b border-white/[0.06]"
        >
          <div className="container-max py-3">
            <ol className="flex items-center gap-2 font-sans text-sm text-text-muted">
              <li>
                <a href="/" className="hover:text-text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li className="text-text-primary font-medium" aria-current="page">
                Ressources
              </li>
            </ol>
          </div>
        </nav>

        <BlogContent />
      </main>
      <Footer />
    </>
  )
}
