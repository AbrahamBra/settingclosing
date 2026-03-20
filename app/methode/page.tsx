import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { offers } from '@/lib/offers-data'

export const metadata: Metadata = {
  title: 'Notre méthode | ChallengersLab',
  description:
    'Trois niveaux de maturité, trois méthodes. Découvrez comment ChallengersLab remplit votre agenda avec le Setting LinkedIn, le Setting téléphonique ou le Nurturing.',
  alternates: {
    canonical: 'https://setting.live/methode',
  },
  openGraph: {
    title: 'Notre méthode | ChallengersLab',
    description:
      'Trois niveaux de maturité, trois méthodes. Setting LinkedIn, Setting téléphonique, Nurturing.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://setting.live/methode',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Notre méthode',
  description:
    'Trois niveaux de maturité, trois méthodes pour remplir votre agenda.',
  url: 'https://setting.live/methode',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://setting.live',
  },
}

export default function MethodeHubPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Notre m&eacute;thode
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Trois niveaux de maturit&eacute;. Trois m&eacute;thodes.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Chaque entreprise a un niveau de maturit&eacute; commerciale diff&eacute;rent.
                Notre approche s&apos;adapte &agrave; votre situation et construit le syst&egrave;me
                qui vous am&egrave;ne des RDV qualifi&eacute;s.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 3 offer cards */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <ScrollReveal key={offer.id} delay={i * 80}>
                <Link
                  href={offer.methodeLink}
                  className="group block rounded-xl border p-6 h-full transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: `${offer.color}33`,
                    background: `linear-gradient(135deg, ${offer.color}0F 0%, ${offer.color}05 100%)`,
                  }}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: offer.color }} />
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-widest"
                      style={{ color: offer.color }}
                    >
                      {offer.eyebrow}
                    </span>
                  </div>

                  {/* Situation */}
                  <h2 className="font-sans text-lg font-bold text-text-primary mb-2">
                    {offer.situation}
                  </h2>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  {/* Arrow */}
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: offer.color }}
                  >
                    D&eacute;couvrir la m&eacute;thode
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Pr&ecirc;t &agrave; remplir votre agenda&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Quel que soit votre niveau de maturit&eacute;, les premiers RDV arrivent d&egrave;s la premi&egrave;re semaine.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
