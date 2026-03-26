import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'R\u00e9sultats clients \u2014 Setting LinkedIn B2B | Setting',
  description:
    'Nos clients obtiennent 3+ RDV qualifi\u00e9s par semaine avec un taux de r\u00e9ponse de 20-35\u00a0%. D\u00e8s 790\u00a0\u20ac/mois. Premiers r\u00e9sultats en 7 jours.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.setting.live/resultats',
    languages: {
      'fr': 'https://www.setting.live/resultats',
      'x-default': 'https://www.setting.live/resultats',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R\u00e9sultats clients \u2014 Setting LinkedIn B2B | Setting',
    description: 'Nos clients obtiennent 3+ RDV qualifi\u00e9s par semaine avec un taux de r\u00e9ponse de 20-35\u00a0%. D\u00e8s 790\u00a0\u20ac/mois. Premiers r\u00e9sultats en 7 jours.',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultatsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="bg-bg-primary min-h-[60vh] flex items-center justify-center">
          <div className="container-max max-w-2xl mx-auto text-center py-24">
            <p className="font-sans text-5xl mb-6" aria-hidden="true">
              &#128679;
            </p>
            <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-4 leading-tight">
              Page en construction
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Nous pr&eacute;parons une nouvelle version de cette page avec des cas clients d&eacute;taill&eacute;s et des chiffres mis &agrave; jour.
            </p>
            <ButtonGlow as="a" href="/tarifs">
              Voir nos tarifs &rarr;
            </ButtonGlow>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
