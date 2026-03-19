import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { telephoniqueSteps } from '@/lib/methode-telephonique-data'

export const metadata: Metadata = {
  title: 'Setting téléphonique — Qualification et routing | ChallengersLab',
  description:
    'Notre méthode de qualification téléphonique : chaque lead entrant est appelé, scoré et routé. Méthode Challenger Sale, zéro lead perdu.',
  alternates: {
    canonical: 'https://challengerslab.fr/methode/setting-telephonique',
  },
  openGraph: {
    title: 'Setting téléphonique — Qualification et routing | ChallengersLab',
    description:
      'Notre méthode de qualification téléphonique : chaque lead entrant est appelé, scoré et routé. Méthode Challenger Sale, zéro lead perdu.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://challengerslab.fr/methode/setting-telephonique',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Setting téléphonique — Qualification et routing',
  description:
    'Notre méthode de qualification téléphonique : chaque lead entrant est appelé, scoré et routé.',
  url: 'https://challengerslab.fr/methode/setting-telephonique',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

export default function SettingTelephoniquePage() {
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
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#FBBF24' }}>
                Setting t&eacute;l&eacute;phonique
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Vos leads entrent. Un sales les qualifie.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Chaque lead entrant est appel&eacute;, scor&eacute; et rout&eacute;.
                M&eacute;thode Challenger Sale, grille de qualification structur&eacute;e, z&eacute;ro lead oubli&eacute;.
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
            {telephoniqueSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <PipelineStep
                  num={step.num}
                  label={step.label}
                  layers={[...step.layers]}
                  desc={step.desc}
                  tools={[...step.tools]}
                  isLast={i === telephoniqueSteps.length - 1}
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
                Des leads qui entrent, des RDV qui sortent.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Discutons de votre volume de leads et de la qualification adapt&eacute;e &agrave; votre offre.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Discuter de mon volume
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
