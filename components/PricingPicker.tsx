'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { offers } from '@/lib/offers-data'
import type { Offer } from '@/lib/offers-data'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'
import { MiniSimulator } from './MiniSimulator'
import { simulatorConfigs } from '@/lib/simulator-configs'

const bundles = [
  {
    id: 'linkedin-telephonique',
    label: 'LinkedIn + Téléphonique',
    subtitle: 'Prospection + qualification, le pipeline complet',
    offerIds: ['setting-linkedin', 'setting-telephonique'] as const,
  },
  {
    id: 'linkedin-newsletter',
    label: 'LinkedIn + Newsletter',
    subtitle: 'Prospection + nurturing, zéro lead perdu',
    offerIds: ['setting-linkedin', 'setting-newsletter'] as const,
  },
]

function OfferPricingPanel({ offer }: { offer: Offer }) {
  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{
        borderColor: `${offer.color}20`,
        background: `linear-gradient(135deg, ${offer.color}06 0%, transparent 70%)`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        {/* Left column */}
        <div className="md:col-span-3 flex flex-col">
          {/* Setup price */}
          {offer.pricing.setup && (
            <div className="mb-3">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-0.5">
                {offer.pricing.setup.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans font-extrabold text-2xl" style={{ color: offer.color }}>
                  {offer.pricing.setup.amount.toLocaleString('fr-FR')}&nbsp;€
                </span>
                <span className="font-sans text-text-muted text-xs">one-shot</span>
              </div>
              <p className="font-sans text-text-muted text-[11px] mt-0.5">{offer.pricing.setup.detail}</p>
            </div>
          )}
          {/* Subscription price */}
          {offer.pricing.subscription && (
            <div className="mb-3">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-0.5">
                Récurrent
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-sans font-extrabold text-xl" style={{ color: offer.color }}>
                  {offer.pricing.subscription.amount.toLocaleString('fr-FR')}&nbsp;€
                </span>
                <span className="font-sans text-text-muted text-xs">{offer.pricing.subscription.period}</span>
              </div>
              <p className="font-sans text-text-muted text-[11px] mt-0.5">{offer.pricing.subscription.detail}</p>
            </div>
          )}
          {/* Bonus badge */}
          {offer.pricing.bonus && (
            <p className="font-sans text-xs font-semibold mb-4" style={{ color: offer.color }}>
              {offer.pricing.bonus}
            </p>
          )}
          {/* Features list */}
          <div className="flex flex-col gap-2 mb-4">
            {offer.features.map((f) => (
              <div key={f.title} className="flex items-start gap-2.5">
                <span className="text-sm mt-0.5 shrink-0" style={{ color: offer.color }}>→</span>
                <div>
                  <span className="text-text-primary text-sm font-semibold">{f.title}</span>
                  <span className="text-text-secondary text-xs ml-1.5">{f.detail}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Method link */}
          <Link
            href={offer.methodeLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: offer.color }}
          >
            Voir la méthode en détail <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right column */}
        <div
          className="md:col-span-2 rounded-xl border p-5"
          style={{ borderColor: `${offer.color}25`, background: `${offer.color}08` }}
        >
          <MiniSimulator config={simulatorConfigs[offer.id]} />
          {/* Guarantee badge */}
          {offer.guarantee && (
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-start gap-2">
                <span style={{ color: offer.color }} className="shrink-0 mt-0.5">✓</span>
                <p className="font-sans text-text-primary text-xs">
                  <span className="font-semibold">Garantie :</span> {offer.guarantee}
                </p>
              </div>
            </div>
          )}
          {offer.noCommitment && (
            <div className="flex items-start gap-2 mt-2">
              <span style={{ color: offer.color }} className="shrink-0 mt-0.5">✓</span>
              <p className="font-sans text-text-primary text-xs">
                <span className="font-semibold">Sans engagement.</span> Résiliable à tout moment.
              </p>
            </div>
          )}
          {/* CTA */}
          <div className="mt-4">
            <ButtonGlow as="a" href={`/tarifs?offre=${offer.slug}#contact`} className="w-full text-center">
              {offer.cta.label}
            </ButtonGlow>
          </div>
        </div>
      </div>
    </div>
  )
}

function BundlePanel() {
  return (
    <div className="rounded-2xl border border-white/[0.08] p-6 md:p-8"
      style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.04) 0%, rgba(251,191,36,0.04) 50%, rgba(200,117,51,0.04) 100%)' }}
    >
      <h3 className="font-sans text-text-primary text-lg font-bold mb-6">
        Combinez les offres pour une délégation complète
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {bundles.map((bundle) => {
          const setupTotal = bundle.offerIds.reduce(
            (sum, id) => sum + (offers.find((o) => o.id === id)?.pricing.setup?.amount ?? 0),
            0
          )
          const bundleOffers = bundle.offerIds.map((id) => offers.find((o) => o.id === id)!).filter(Boolean)

          return (
            <div
              key={bundle.id}
              className="rounded-xl border border-white/[0.08] p-5"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <p className="font-sans text-text-primary text-sm font-bold mb-1">{bundle.label}</p>
              <p className="font-sans text-text-muted text-xs mb-4">{bundle.subtitle}</p>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-text-muted text-[11px] w-24 shrink-0">Setup :</span>
                  <span className="font-sans font-semibold text-sm text-text-primary">
                    {setupTotal.toLocaleString('fr-FR')}&nbsp;€{' '}
                    <span className="font-normal text-text-muted text-xs">one-shot</span>
                  </span>
                </div>
                {bundleOffers.map((offer) =>
                  offer.pricing.subscription ? (
                    <div key={offer.id} className="flex items-baseline gap-1.5">
                      <span className="font-sans text-text-muted text-[11px] w-24 shrink-0 truncate">
                        {offer.eyebrow} :
                      </span>
                      <span className="font-sans font-semibold text-sm" style={{ color: offer.color }}>
                        {offer.pricing.subscription.amount.toLocaleString('fr-FR')}&nbsp;€
                        <span className="font-normal text-text-muted text-xs ml-1">
                          {offer.pricing.subscription.period}
                        </span>
                      </span>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          )
        })}
      </div>

      <p className="font-sans text-text-muted text-xs mb-6">
        Chaque combinaison est sur-mesure. Réservez un appel pour un devis précis.
      </p>

      <ButtonGlow as="a" href="/tarifs?offre=bundle#contact">
        Demander un devis combiné
      </ButtonGlow>
    </div>
  )
}

export function PricingPicker() {
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const total = offers.length + 1
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setSelected((prev) => (prev + 1) % total)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setSelected((prev) => (prev - 1 + total) % total)
    }
  }

  useEffect(() => {
    tabRefs.current[selected]?.focus()
  }, [selected])

  return (
    <section id="offres" className="section-padding bg-bg-secondary">
      <div className="container-max max-w-4xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              TARIFS
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              Quelle est votre situation&nbsp;?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Cliquez sur votre situation. Simulez votre retour sur investissement.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab bar */}
        <ScrollReveal>
          <div
            role="tablist"
            onKeyDown={handleKeyDown}
            className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-8"
          >
            {/* Offer tabs (0-2) */}
            {offers.map((offer, i) => {
              const isActive = selected === i
              return (
                <button
                  key={offer.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  ref={(el) => { tabRefs.current[i] = el }}
                  onClick={() => setSelected(i)}
                  className={`relative text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive ? '' : 'border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: `${offer.color}50`,
                          backgroundColor: `${offer.color}0D`,
                          boxShadow: `0 0 24px ${offer.color}12`,
                        }
                      : { backgroundColor: 'rgba(255,255,255,0.02)' }
                  }
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full mb-3 transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? offer.color : `${offer.color}60`,
                      boxShadow: isActive ? `0 0 8px ${offer.color}40` : 'none',
                    }}
                  />
                  <p
                    className="font-sans text-sm sm:text-base font-bold text-text-primary mb-1 transition-colors duration-300"
                    style={isActive ? { color: offer.color } : undefined}
                  >
                    {offer.situation}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    {offer.eyebrow}
                  </p>
                </button>
              )
            })}

            {/* Bundle tab (index 3) */}
            {(() => {
              const i = offers.length
              const isActive = selected === i
              return (
                <button
                  key="bundle"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  ref={(el) => { tabRefs.current[i] = el }}
                  onClick={() => setSelected(i)}
                  className={`relative text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive ? '' : 'border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: 'rgba(167,139,250,0.31)',
                          backgroundColor: 'rgba(167,139,250,0.05)',
                          boxShadow: '0 0 24px rgba(167,139,250,0.07)',
                        }
                      : { backgroundColor: 'rgba(255,255,255,0.02)' }
                  }
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full mb-3 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #A78BFA, #FBBF24, #C87533)',
                      boxShadow: isActive ? '0 0 8px rgba(167,139,250,0.40)' : 'none',
                    }}
                  />
                  <p
                    className="font-sans text-sm sm:text-base font-bold text-text-primary mb-1 transition-colors duration-300"
                    style={isActive ? { color: '#A78BFA' } : undefined}
                  >
                    Je veux déléguer toute ma prospection
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    PACKAGE
                  </p>
                </button>
              )
            })()}
          </div>
        </ScrollReveal>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected < offers.length ? offers[selected].id : 'bundle'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {selected < offers.length ? (
              <OfferPricingPanel offer={offers[selected]} />
            ) : (
              <BundlePanel />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
