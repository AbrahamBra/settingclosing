import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { PhaseNav } from '@/components/ui/PhaseNav'
import { layerConfig, settingSteps } from '@/lib/pipeline-data'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Setting LinkedIn — Méthode en 9 étapes | ChallengersLab',
  description:
    'Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d\'achat au RDV qualifié. IA, méthode et validation humaine.',
  alternates: {
    canonical: 'https://setting.live/methode/setting-linkedin',
  },
  openGraph: {
    title: 'Setting LinkedIn — Méthode en 9 étapes | ChallengersLab',
    description:
      "Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d'achat au RDV qualifié. IA, méthode et validation humaine.",
    locale: 'fr_FR',
    type: 'website',
    url: 'https://setting.live/methode/setting-linkedin',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Setting LinkedIn — Méthode en 9 étapes',
  description:
    "Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d'achat au RDV qualifié. IA, méthode et validation humaine.",
  url: 'https://setting.live/methode/setting-linkedin',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://setting.live',
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

export default function SettingLinkedinMethodePage() {
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
                9 &eacute;tapes pour remplir votre agenda. Aucun message ne part sans validation humaine.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                L&apos;IA rep&egrave;re les bons profils et propose des drafts. Nos r&egrave;gles de m&eacute;thode filtrent
                ce qui est pertinent. Un humain relit et valide chaque envoi. Rien n&apos;est automatis&eacute; de bout en bout.
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

        {/* ── Phase navigation ────────────────────────────────────────────── */}
        <PhaseNav />

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

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/methode/setting-telephonique" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting téléphonique</p>
                  <p className="font-sans text-sm text-text-muted">Qualification et routing de vos leads entrants.</p>
                </a>
                <a href="/methode/nurturing" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setup Nurturing</p>
                  <p className="font-sans text-sm text-text-muted">Scoring, séquences et routing pour votre base existante.</p>
                </a>
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">D\u00e8s 490\u00a0\u20ac de setup + 790\u00a0\u20ac/mois. Sans engagement.</p>
                </a>
              </div>
            </ScrollReveal>
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
                Ce pipeline se calibre en deux mois. Apr&egrave;s &ccedil;a, vous vous concentrez sur les appels.
                La prospection tourne sans vous.
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
