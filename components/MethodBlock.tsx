'use client'

import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'
import { useInView } from './ui/useInView'

/* ─── Data ──────────────────────────────────────────────────────── */

interface Bar {
  name: string
  percent: number
  layerLabel: string
  color: string                    // tailwind class OR 'gradient-ia-methode' | 'gradient-methode-humain'
  layerColor: string               // tailwind text class
}

interface Phase {
  title: string
  subtitle: string
  borderColor: string
  keywordColor: string
  description: string
  bars: Bar[]
}

const phases: Phase[] = [
  {
    title: 'Mois 1',
    subtitle: 'Calibrage',
    borderColor: 'border-semantic-methode/[0.12]',
    keywordColor: 'text-semantic-methode',
    description:
      "On apprend votre marché, votre ICP, votre ton. Beaucoup d'humain partout — c'est normal.",
    bars: [
      { name: 'Détection',     percent: 70, layerLabel: 'IA',     color: 'bg-semantic-ia',     layerColor: 'text-semantic-ia' },
      { name: 'Qualification', percent: 25, layerLabel: 'Humain', color: 'bg-semantic-humain', layerColor: 'text-semantic-humain' },
      { name: 'Rédaction',     percent: 15, layerLabel: 'Humain', color: 'bg-semantic-humain', layerColor: 'text-semantic-humain' },
      { name: 'Closing',       percent: 5,  layerLabel: 'Humain', color: 'bg-semantic-humain', layerColor: 'text-semantic-humain' },
    ],
  },
  {
    title: 'Mois 2',
    subtitle: 'La machine se rode',
    borderColor: 'border-white/[0.06]',
    keywordColor: 'text-text-secondary',
    description:
      'Notre savoir-faire est encodé. La détection et la qualification tournent. Le setting devient régulier.',
    bars: [
      { name: 'Détection',     percent: 88, layerLabel: 'IA',         color: 'bg-semantic-ia',          layerColor: 'text-semantic-ia' },
      { name: 'Qualification', percent: 60, layerLabel: 'Méthode',    color: 'gradient-ia-methode',     layerColor: 'text-semantic-methode' },
      { name: 'Rédaction',     percent: 40, layerLabel: 'IA+Humain',  color: 'gradient-methode-humain', layerColor: 'text-semantic-humain' },
      { name: 'Closing',       percent: 8,  layerLabel: 'Humain',     color: 'bg-semantic-humain',      layerColor: 'text-semantic-humain' },
    ],
  },
  {
    title: 'Mois 3+',
    subtitle: 'La machine tourne',
    borderColor: 'border-semantic-humain/[0.15]',
    keywordColor: 'text-semantic-humain',
    description:
      "Le setting est quasi-autonome. L'humain est concentré là où il compte : le closing et la relation.",
    bars: [
      { name: 'Détection',     percent: 95, layerLabel: 'IA',          color: 'bg-semantic-ia',      layerColor: 'text-semantic-ia' },
      { name: 'Qualification', percent: 85, layerLabel: 'IA+Méthode',  color: 'gradient-ia-methode', layerColor: 'text-semantic-methode' },
      { name: 'Rédaction',     percent: 65, layerLabel: 'IA+Méthode',  color: 'gradient-ia-methode', layerColor: 'text-semantic-methode' },
      { name: 'Closing',       percent: 8,  layerLabel: 'Humain',      color: 'bg-semantic-humain',  layerColor: 'text-semantic-humain' },
    ],
  },
]

/* ─── AnimatedBar ───────────────────────────────────────────────── */

function AnimatedBar({ bar }: { bar: Bar }) {
  const [ref, isVisible] = useInView()

  const isGradient = bar.color.startsWith('gradient-')

  const fillStyle: React.CSSProperties = {
    width: isVisible ? `${bar.percent}%` : '0%',
    transition: 'width 0.8s ease-out',
    ...(bar.color === 'gradient-ia-methode'
      ? { background: 'linear-gradient(to right, #A78BFA, #FBBF24)' }
      : bar.color === 'gradient-methode-humain'
        ? { background: 'linear-gradient(to right, #FBBF24, #34D399)' }
        : {}),
  }

  return (
    <div ref={ref}>
      {/* label row */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-text-secondary text-xs">{bar.name}</span>
        <span className={`font-mono text-xs ${bar.layerColor}`}>
          {bar.percent}% {bar.layerLabel}
        </span>
      </div>
      {/* track */}
      <div className="h-1 bg-[#1a1a1a] rounded-sm overflow-hidden">
        <div
          className={`h-full rounded-sm ${!isGradient ? bar.color : ''}`}
          style={fillStyle}
        />
      </div>
    </div>
  )
}

/* ─── MethodBlock ───────────────────────────────────────────────── */

export function MethodBlock() {
  return (
    <section id="methode" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-3">
            Notre méthode
          </p>
          <h2 className="font-sans text-h2 text-text-primary mb-3">
            On sait où placer le curseur.
          </h2>
          <p className="text-text-secondary max-w-2xl mb-10">
            Vous ne branchez pas un outil. Vous branchez une machine de setting
            qui s&apos;affine jusqu&apos;à tourner seule.
          </p>
        </ScrollReveal>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.title} delay={i * 80}>
              <div
                className={`rounded-xl bg-white/[0.02] border ${phase.borderColor} p-5 h-full`}
              >
                <p className={`font-mono text-xs uppercase tracking-wider ${phase.keywordColor} mb-1`}>
                  {phase.title}
                </p>
                <p className="text-text-primary text-sm font-semibold mb-2">
                  {phase.subtitle}
                </p>
                <p className="text-text-muted text-xs leading-relaxed mb-4">
                  {phase.description}
                </p>
                <div className="flex flex-col gap-2.5">
                  {phase.bars.map((bar) => (
                    <AnimatedBar key={bar.name} bar={bar} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Callout */}
        <ScrollReveal delay={300}>
          <div className="text-center rounded-lg border border-semantic-methode/10 bg-semantic-methode/[0.04] px-4 py-3 max-w-2xl mx-auto mt-10">
            <p className="text-text-secondary text-sm">
              Chaque apprentissage est encodé en{' '}
              <strong className="text-text-primary">skill</strong>. Le
              savoir-faire s&apos;accumule — la machine accélère.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-6">
            <Link
              href="/methode"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
            >
              Voir les 9 étapes en détail →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
