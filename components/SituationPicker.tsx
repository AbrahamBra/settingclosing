'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { offers } from '@/lib/offers-data'
import type { Offer } from '@/lib/offers-data'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'
import { MiniSimulator } from './MiniSimulator'
import { simulatorConfigs } from '@/lib/simulator-configs'

function OfferPanel({ offer, calendlyUrl }: { offer: Offer; calendlyUrl: string }) {
  const ctaHref = offer.cta.href === '#contact' ? calendlyUrl : offer.cta.href

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{
        borderColor: `${offer.color}20`,
        background: `linear-gradient(135deg, ${offer.color}06 0%, transparent 70%)`,
      }}
    >
      <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
        {offer.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        {/* Features */}
        <div className="md:col-span-3 flex flex-col gap-3">
          {offer.features.map((f) => (
            <div key={f.title} className="flex items-start gap-2.5">
              <span className="text-sm mt-0.5 shrink-0" style={{ color: offer.color }}>&rarr;</span>
              <div>
                <span className="text-text-primary text-sm font-semibold">{f.title}</span>
                <span className="text-text-secondary text-xs ml-1.5">{f.detail}</span>
              </div>
            </div>
          ))}
          <Link
            href={offer.methodeLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2 transition-colors hover:opacity-80"
            style={{ color: offer.color }}
          >
            Voir la m&eacute;thode en d&eacute;tail
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Simulator or fallback */}
        <div
          className="md:col-span-2 rounded-xl border p-5"
          style={{
            borderColor: `${offer.color}25`,
            background: `${offer.color}08`,
          }}
        >
          {simulatorConfigs[offer.id] ? (
            <MiniSimulator config={simulatorConfigs[offer.id]} />
          ) : (
            <div className="py-4 text-center">
              <p className="font-sans text-text-muted text-sm">
                Offre sur-mesure selon votre base.
              </p>
            </div>
          )}

          {offer.guarantee && (
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-start gap-2">
                <span style={{ color: offer.color }} className="shrink-0 mt-0.5">&#10003;</span>
                <p className="font-sans text-text-primary text-xs">
                  <span className="font-semibold">Garantie&nbsp;:</span> {offer.guarantee}
                </p>
              </div>
            </div>
          )}
          {offer.noCommitment && (
            <div className="flex items-start gap-2 mt-2">
              <span style={{ color: offer.color }} className="shrink-0 mt-0.5">&#10003;</span>
              <p className="font-sans text-text-primary text-xs">
                <span className="font-semibold">Sans engagement.</span> R&eacute;siliable &agrave; tout moment.
              </p>
            </div>
          )}

          <div className="mt-4">
            <ButtonGlow
              as="a"
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              {offer.cta.label}
            </ButtonGlow>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SituationPicker() {
  const [selected, setSelected] = useState(0)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <section id="offres" className="section-padding bg-bg-secondary">
      <div className="container-max max-w-4xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-4">
              Notre approche
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              Quelle est votre situation&nbsp;?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Cliquez sur votre situation. Simulez votre retour sur investissement.
            </p>
          </div>
        </ScrollReveal>

        {/* Situation tabs */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {offers.map((offer, i) => {
              const isActive = selected === i
              return (
                <button
                  key={offer.id}
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
          </div>
        </ScrollReveal>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={offers[selected].id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <OfferPanel offer={offers[selected]} calendlyUrl={calendlyUrl} />
          </motion.div>
        </AnimatePresence>

        {/* Hub link */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-8">
            <Link
              href="/methode"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
            >
              D&eacute;couvrir notre m&eacute;thode
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
