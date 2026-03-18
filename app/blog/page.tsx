import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { BlogContent } from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Blog — Setting et closing LinkedIn | ChallengersLab',
  description:
    'Méthodes, définitions et stratégies de setting et closing LinkedIn pour fondateurs et freelances qui veulent prospecter et closer sur LinkedIn.',
  openGraph: {
    title: 'Blog — Setting et closing LinkedIn | ChallengersLab',
    description:
      'Méthodes, définitions et stratégies de setting et closing LinkedIn pour fondateurs et freelances qui veulent prospecter et closer sur LinkedIn.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://challengerslab.fr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Blog ChallengersLab — Setting et closing LinkedIn',
      },
    ],
  },
  alternates: {
    canonical: 'https://challengerslab.fr/blog',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://challengerslab.fr/blog',
  name: 'Blog — Setting et closing LinkedIn',
  description:
    'Méthodes, définitions et stratégies de setting et closing LinkedIn pour fondateurs et freelances qui veulent prospecter et closer sur LinkedIn.',
  url: 'https://challengerslab.fr/blog',
  isPartOf: { '@id': 'https://challengerslab.fr/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://challengerslab.fr/blog' },
    ],
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <>
      <NavbarBlog />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="bg-[#06080F] pt-28 pb-24">
        <BlogContent />
      </main>
      <Footer />
    </>
  )
}
