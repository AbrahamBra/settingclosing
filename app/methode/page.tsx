import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig, closingTiers, settingSteps } from '@/lib/pipeline-data'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Prospection LinkedIn en 9 étapes | ChallengersLab',
  description:
    'Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d\'achat au RDV qualifié. IA, méthode et validation humaine.',
  alternates: {
    canonical: 'https://challengerslab.fr/methode',
  },
  openGraph: {
    title: 'Prospection LinkedIn en 9 étapes | ChallengersLab',
    description:
      "Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d'achat au RDV qualifié. IA, méthode et validation humaine.",
    locale: 'fr_FR',
    type: 'website',
    url: 'https://challengerslab.fr/methode',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Notre méthode de prospection LinkedIn en 9 étapes',
  description:
    "Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d'achat au RDV qualifié. IA, méthode et validation humaine.",
  url: 'https://challengerslab.fr/methode',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

// ─── Local Phase Definitions ──────────────────────────────────────────────────

const phases = [
  {
    id: 'detection',
    phaseLabel: 'Phase 1',
    title: 'DÉTECTION',
    accentText: 'text-semantic-ia',
    steps: settingSteps.slice(0, 3),
    bg: 'bg-bg-secondary',
    gradient: 'from-[#A78BFA]/[0.02]',
  },
  {
    id: 'qualification',
    phaseLabel: 'Phase 2',
    title: 'QUALIFICATION',
    accentText: 'text-semantic-methode',
    steps: settingSteps.slice(3, 6),
    bg: 'bg-bg-primary',
    gradient: 'from-[#FBBF24]/[0.02]',
  },
  {
    id: 'conversion',
    phaseLabel: 'Phase 3',
    title: 'CONVERSION',
    accentText: 'text-semantic-humain',
    steps: settingSteps.slice(6, 9),
    bg: 'bg-bg-secondary',
    gradient: 'from-[#34D399]/[0.02]',
  },
] as const

// ─── Layer Legend Keys ────────────────────────────────────────────────────────

const legendLayers = ['ia', 'methode', 'hybrid', 'humain'] as const

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MethodePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="methode-hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Notre méthode
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                9 étapes. 3 couches. Zéro message sans validation humaine.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Chaque étape du pipeline combine trois couches : l&apos;IA détecte et co-rédige,
                la méthode filtre et calibre, l&apos;humain valide et décide. Aucun message ne part sans
                avoir traversé les trois.
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

        {/* ── 3 Phase sections ─────────────────────────────────────────────── */}
        {phases.map((phase) => (
          <section
            key={phase.id}
            id={phase.id}
            className={`${phase.bg} section-padding bg-gradient-to-b ${phase.gradient} to-transparent scroll-mt-28`}
          >
            <div className="container-max">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-12">
                  <span className={`font-sans text-xs font-semibold uppercase tracking-widest ${phase.accentText}`}>
                    {phase.phaseLabel}
                  </span>
                  <h2 className={`font-sans font-extrabold text-h2 ${phase.accentText}`}>
                    {phase.title}
                  </h2>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
              </ScrollReveal>

              <div className="max-w-2xl mx-auto">
                {phase.steps.map((step, i) => (
                  <ScrollReveal key={step.num} delay={i * 60}>
                    <PipelineStep
                      num={step.num}
                      label={step.label}
                      layers={[...step.layers]}
                      desc={step.desc}
                      tools={[...step.tools]}
                      isLast={i === 2}
                      pedagogy={step.pedagogy}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Closing section ──────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
                  🤝 Pipeline Closing
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {closingTiers.map((tier, i) => (
                <ScrollReveal key={tier.level} delay={i * 100}>
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />

                    {/* Level + threshold */}
                    <div className="flex items-center justify-between mb-3 mt-1">
                      <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest">
                        {tier.level}
                      </span>
                      <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                        {tier.threshold}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-text-primary font-semibold text-base mb-2">{tier.label}</h3>

                    {/* Layer tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tier.layers.map((layer) => {
                        const cfg = layerConfig[layer]
                        return (
                          <span
                            key={layer}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                          >
                            {cfg.label}
                          </span>
                        )
                      })}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{tier.desc}</p>

                    {/* Tool pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {tier.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border text-semantic-humain bg-semantic-humain/10 border-semantic-humain/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Prêt à remplir votre agenda ?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Ce pipeline se calibre en deux mois. Après ça, vous vous concentrez sur les appels —
                pas sur la prospection.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
