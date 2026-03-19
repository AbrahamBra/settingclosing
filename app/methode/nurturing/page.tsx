import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { nurturingSteps } from '@/lib/methode-nurturing-data'

export const metadata: Metadata = {
  title: 'Nurturing — Funnel de conversion par maturité | ChallengersLab',
  description:
    'Notre système de nurturing : scoring comportemental, séquences personnalisées et routing automatique. Transformez votre base dormante en RDV qualifiés.',
  alternates: {
    canonical: 'https://challengerslab.fr/methode/nurturing',
  },
  openGraph: {
    title: 'Nurturing — Funnel de conversion par maturité | ChallengersLab',
    description:
      'Notre système de nurturing : scoring comportemental, séquences personnalisées et routing automatique.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://challengerslab.fr/methode/nurturing',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nurturing — Funnel de conversion par maturité',
  description:
    'Notre système de nurturing : scoring comportemental, séquences personnalisées et routing automatique.',
  url: 'https://challengerslab.fr/methode/nurturing',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

export default function NurturingPage() {
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
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C87533' }}>
                Setup Nurturing
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Votre base de leads. Notre syst&egrave;me.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Scoring, segmentation, s&eacute;quences personnalis&eacute;es et routing automatique.
                On construit le workflow qui transforme votre base dormante en RDV qualifi&eacute;s.
              </p>

              {/* Layer legend */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {legendLayers.map((layer) => {
                  const cfg = layerConfig[layer]
                  return (
                    <span
                      key={layer}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                    >
                      {cfg.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            {nurturingSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <PipelineStep
                  num={step.num}
                  label={step.label}
                  layers={[...step.layers]}
                  desc={step.desc}
                  tools={[...step.tools]}
                  isLast={i === nurturingSteps.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Votre base a du potentiel. On le d&eacute;bloque.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Construisons ensemble le syst&egrave;me qui transforme vos contacts en rendez-vous.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Construire mon syst&egrave;me
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
