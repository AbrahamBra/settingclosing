import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { BlogContent } from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Ressources — Prospection et setting LinkedIn B2B | Setting',
  description:
    'Méthodes, scripts et stratégies de prospection LinkedIn B2B. Guides pour fondateurs, freelances et solopreneurs qui veulent des RDV qualifiés.',
  openGraph: {
    title: 'Ressources — Prospection et setting LinkedIn B2B | Setting',
    description:
      'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ressources Setting — Prospection LinkedIn B2B',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources',
    languages: {
      'fr': 'https://www.setting.live/ressources',
      'x-default': 'https://www.setting.live/ressources',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ressources — Prospection et setting LinkedIn B2B | Setting',
    description: 'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const resourcesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.setting.live/ressources',
  name: 'Ressources — Prospection et setting LinkedIn B2B',
  description:
    'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
  url: 'https://www.setting.live/ressources',
  isPartOf: { '@id': 'https://www.setting.live/#website' },
  breadcrumb: { '@id': 'https://www.setting.live/ressources#breadcrumb' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': 'https://www.setting.live/ressources#breadcrumb',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.setting.live',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ressources',
      item: 'https://www.setting.live/ressources',
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
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              <li className="text-text-primary font-medium" aria-current="page">
                Ressources
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Intro SEO ──────────────────────────────────────────────── */}
        <div className="container-max pt-10 pb-6">
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-text-primary mb-4">
            Ressources
          </h1>
          <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-3xl mb-2">
            Guides pratiques sur le setting commercial, la prospection LinkedIn B2B et le closing.
            Chaque article est &eacute;crit par des praticiens qui font du setting au quotidien &mdash; pas de th&eacute;orie sans terrain.
          </p>
          <p className="font-sans text-text-muted text-sm leading-relaxed max-w-3xl">
            Vous trouverez ici nos m&eacute;thodes (BANT, Challenger Sale, SPIN), des scripts de messages LinkedIn,
            des comparatifs chiffr&eacute;s (SDR interne vs agence vs setting externalis&eacute;) et des retours terrain.
          </p>
        </div>

        <BlogContent />
      </main>
      <Footer />
    </>
  )
}
