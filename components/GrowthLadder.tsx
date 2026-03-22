'use client'

import { offers } from '@/lib/offers-data'
import type { Offer } from '@/lib/offers-data'
import { simulatorConfigs } from '@/lib/simulator-configs'
import { MiniSimulator } from '@/components/MiniSimulator'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const TRANSITION_TEXTS: Record<number, string> = {
  1: 'Tu re\u00e7ois aussi des leads entrants\u00a0?',
  2: 'Tu as une base email \u00e0 mon\u00e9tiser\u00a0?',
}

function PhaseCard({ offer }: { offer: Offer }) {
  const config = simulatorConfigs[offer.id]
  const isPhaseOne = offer.phase === 1

  const setupAmount = offer.pricing.setup?.amount ?? null
  const setupLabel = offer.pricing.setup?.label ?? ''
  const setupIsFree = setupAmount === 0
  const setupHasPrice = setupAmount !== null && setupAmount > 0

  return (
    <div
      id={offer.phaseLabel.toLowerCase()}
      className="bg-bg-secondary rounded-2xl border border-white/[0.06] border-l-4 p-6 md:p-8"
      style={{ borderLeftColor: offer.color }}
    >
      {/* Header badges */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: `${offer.color}1A`,
            color: offer.color,
          }}
        >
          {offer.eyebrow}
        </span>

        {isPhaseOne && (
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: 'rgba(200,117,51,0.12)',
              color: '#C87533',
            }}
          >
            L&agrave; o&ugrave; 80% de nos clients commencent
          </span>
        )}

        {offer.tag && !isPhaseOne && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.06] text-text-secondary">
            {offer.tag}
          </span>
        )}
      </div>

      {/* Two-column layout */}
      <div className="md:grid md:grid-cols-2 gap-8">
        {/* Left: features + guarantee */}
        <div className="space-y-4 mb-8 md:mb-0">
          <p className="text-text-secondary text-sm font-semibold uppercase tracking-widest">
            {offer.eyebrow}
          </p>

          <ul className="space-y-3">
            {offer.features.map((feature) => (
              <li key={feature.title} className="flex flex-col gap-0.5">
                <span className="text-text-primary text-sm font-medium">{feature.title}</span>
                <span className="text-text-muted text-xs">{feature.detail}</span>
              </li>
            ))}
          </ul>

          {offer.guarantee && (
            <p
              className="text-xs leading-relaxed mt-4 px-3 py-2 rounded-lg"
              style={{
                color: '#4ade80',
                backgroundColor: 'rgba(74,222,128,0.06)',
                border: '1px solid rgba(74,222,128,0.15)',
              }}
            >
              ✓ Garantie : {offer.guarantee}
            </p>
          )}

          {offer.noCommitment && (
            <p className="text-text-muted text-xs mt-2">Sans engagement.</p>
          )}
        </div>

        {/* Right: pricing + simulator + CTA */}
        <div className="space-y-6">
          {/* Pricing block */}
          <div
            className="rounded-xl p-4 space-y-2"
            style={{
              backgroundColor: `${offer.color}0D`,
              border: `1px solid ${offer.color}25`,
            }}
          >
            {setupIsFree && (
              <span className="inline-block px-2 py-0.5 rounded-md text-[11px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                Setup offert
              </span>
            )}

            {setupHasPrice && (
              <p className="text-text-secondary text-xs">
                {setupLabel} : <span className="text-text-primary font-semibold">{setupAmount?.toLocaleString('fr-FR')}&nbsp;€</span>
              </p>
            )}

            {offer.pricing.subscription && (
              <p
                className="font-bold text-2xl tabular-nums"
                style={{ color: offer.color }}
              >
                {offer.pricing.subscription.amount.toLocaleString('fr-FR')}&nbsp;€{' '}
                <span className="text-sm font-medium text-text-secondary">
                  {offer.pricing.subscription.period}
                </span>
              </p>
            )}

            {offer.pricing.bonus && (
              <p className="text-text-muted text-xs leading-relaxed">
                {offer.pricing.bonus}
              </p>
            )}
          </div>

          {/* MiniSimulator */}
          {config && (
            <div className="bg-bg-primary rounded-xl border border-white/[0.06] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-3">
                Simulateur ROI
              </p>
              <MiniSimulator config={config} />
            </div>
          )}

          {/* CTA */}
          <ButtonGlow href={offer.cta.href} className="w-full text-sm">
            {offer.cta.label}
          </ButtonGlow>
        </div>
      </div>
    </div>
  )
}

function TransitionConnector({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-6">
      <div className="w-px h-8 bg-white/10" />
      <p className="text-text-muted text-xs text-center px-4">{text}</p>
      <div className="w-px h-8 bg-white/10" />
    </div>
  )
}

function PackCroissance() {
  return (
    <div className="mt-12 bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 text-center">
      <h3 className="font-sans font-semibold text-text-primary text-lg mb-2">
        Pack Croissance
      </h3>
      <p className="text-text-secondary text-sm mb-6">
        Combine deux offres et économise 10% sur le total mensuel.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-6">
        <div className="bg-bg-primary rounded-xl border border-white/[0.06] p-4 text-center">
          <p className="text-text-primary text-sm font-medium">LinkedIn + Téléphonique</p>
        </div>
        <div className="bg-bg-primary rounded-xl border border-white/[0.06] p-4 text-center">
          <p className="text-text-primary text-sm font-medium">LinkedIn + Newsletter</p>
        </div>
      </div>
      <ButtonGlow href="#contact?offre=pack-croissance">Composer mon pack →</ButtonGlow>
    </div>
  )
}

export function GrowthLadder() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {offers.map((offer, index) => (
          <div key={offer.id}>
            <ScrollReveal delay={index * 100}>
              <PhaseCard offer={offer} />
            </ScrollReveal>

            {TRANSITION_TEXTS[offer.phase] && (
              <TransitionConnector text={TRANSITION_TEXTS[offer.phase]} />
            )}
          </div>
        ))}

        <ScrollReveal delay={300}>
          <PackCroissance />
        </ScrollReveal>
      </div>
    </section>
  )
}
