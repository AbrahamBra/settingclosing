'use client'

import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'

/* ─── Data ──────────────────────────────────────────────────────── */

const loopSteps = [
  { label: 'IA détecte', detail: 'Signaux, timing, intent', color: 'border-semantic-ia/20 bg-semantic-ia/10 text-semantic-ia' },
  { label: 'Méthode qualifie', detail: 'Scoring, filtres, séquence', color: 'border-semantic-methode/20 bg-semantic-methode/10 text-semantic-methode' },
  { label: 'Humain décide', detail: 'Validation, ton, ajustement', color: 'border-semantic-humain/20 bg-semantic-humain/10 text-semantic-humain' },
  { label: '↻ Skill encodé', detail: 'Apprentissage capitalisé', color: 'border-semantic-methode/30 bg-semantic-methode/[0.12] text-semantic-methode font-semibold' },
]

interface Phase {
  title: string
  subtitle: string
  borderColor: string
  titleColor: string
  description: string
  details: string[]
}

const phases: Phase[] = [
  {
    title: 'Mois 1',
    subtitle: 'Lancement & premiers RDV',
    borderColor: 'border-semantic-methode/[0.12]',
    titleColor: 'text-semantic-methode',
    description:
      "On ne commence pas par un audit de 30 jours. D\u00e8s la premi\u00e8re semaine, votre setter envoie des messages, g\u00e9n\u00e8re des conversations et pose des RDV. En parall\u00e8le, chaque interaction enrichit la connaissance de votre march\u00e9.",
    details: [
      'Premiers messages envoy\u00e9s d\u00e8s la semaine 1',
      'Le setter apprend votre ICP en conditions r\u00e9elles',
      'Chaque retour affine le ciblage pour la suite',
    ],
  },
  {
    title: 'Mois 2',
    subtitle: 'Mont\u00e9e en puissance',
    borderColor: 'border-white/[0.06]',
    titleColor: 'text-text-primary',
    description:
      "Les patterns \u00e9mergent. Le scoring se pr\u00e9cise. La r\u00e9daction s\u2019affine gr\u00e2ce au skill maison sur-mesure pour le client.",
    details: [
      'Qualification plus rapide et plus juste',
      'Nouveaux secteurs absorb\u00e9s en jours',
      'Taux de r\u00e9ponse en hausse',
    ],
  },
  {
    title: 'Mois 3+',
    subtitle: 'R\u00e9gime de croisi\u00e8re',
    borderColor: 'border-semantic-humain/[0.15]',
    titleColor: 'text-semantic-humain',
    description:
      "Le pipeline est rod\u00e9. Le setter se concentre sur l\u2019optimisation et les pivots strat\u00e9giques.",
    details: [
      'Setting quasi-autonome',
      'Pivot de march\u00e9 en 3 jours',
      'Le setter optimise en continu',
    ],
  },
]

/* ─── MethodBlock ───────────────────────────────────────────────── */

export function MethodBlock() {
  return (
    <section id="methode" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-4">
              Notre m&eacute;thode
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              R&eacute;sultats d&egrave;s la semaine 1. Chaque semaine, &ccedil;a s&apos;acc&eacute;l&egrave;re.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              L&apos;IA d&eacute;tecte et pr&eacute;pare. L&apos;humain valide et envoie.
              Chaque semaine, le syst&egrave;me apprend de vos r&eacute;sultats.
            </p>
          </div>
        </ScrollReveal>

        {/* Loop visualization */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {loopSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <span
                  className={`inline-flex flex-col items-center px-4 py-2.5 rounded-xl border text-center ${step.color}`}
                >
                  <span className="text-xs font-semibold">{step.label}</span>
                  <span className="text-[10px] opacity-60">{step.detail}</span>
                </span>
                {i < loopSteps.length - 1 && (
                  <span className="text-text-muted text-xs">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.title} delay={i * 80}>
              <div
                className={`rounded-xl bg-white/[0.02] border ${phase.borderColor} p-5 h-full`}
              >
                <p className={`text-sm font-bold ${phase.titleColor}`}>
                  {phase.title} &mdash; {phase.subtitle}
                </p>
                <p className="text-text-muted text-xs leading-relaxed mt-2 mb-3">
                  {phase.description}
                </p>
                <div className="border-t border-white/[0.06] pt-3 flex flex-col gap-1.5">
                  {phase.details.map((d) => (
                    <p key={d} className="text-text-muted text-xs">{d}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-8">
            <Link
              href="/methode"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold text-sm"
            >
              Voir les 9 &eacute;tapes en d&eacute;tail
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
