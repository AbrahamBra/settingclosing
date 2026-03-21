'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { offers } from '@/lib/offers-data'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const TRANSITIONS = [
  'Quand tu reçois des leads entrants',
  'Quand tu as une base à monétiser',
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

export function GrowthJourney() {
  return (
    <section id="growth-journey" className="section-padding bg-bg-primary">
      <div className="container-max">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              TON PARCOURS
            </p>
            <h2 className="font-sans text-h2 text-text-primary">
              Choisis ton niveau de croissance
            </h2>
          </div>
        </ScrollReveal>

        {/* Stepper */}
        <ScrollReveal delay={100}>
          {/* Desktop: horizontal flex | Mobile: vertical stack */}
          <div className="flex flex-col md:flex-row md:items-start gap-0">
            {offers.map((offer, i) => (
              <div
                key={offer.id}
                className="flex flex-col md:flex-row md:items-start flex-1 min-w-0"
              >
                {/* Phase card */}
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="flex-1 min-w-0"
                >
                  <Link
                    href={`/tarifs#${offer.phaseLabel.toLowerCase()}`}
                    className="group block h-full bg-bg-secondary rounded-2xl border border-white/[0.06] p-6 border-l-4 transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1"
                    style={{ borderLeftColor: offer.color }}
                  >
                    {/* Phase badge */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: offer.color }}
                    >
                      {offer.phase}
                    </div>

                    {/* Phase label */}
                    <h3
                      className="font-sans text-lg font-bold text-text-primary mb-1 group-hover:opacity-90 transition-opacity"
                    >
                      {offer.phaseLabel}
                    </h3>

                    {/* Situation */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {offer.phaseSituation}
                    </p>

                    {/* Eyebrow / offer name */}
                    <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                      {offer.eyebrow}
                    </p>

                    {/* Color-tinted arrow hint */}
                    <p
                      className="mt-4 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: offer.color }}
                    >
                      Voir l&apos;offre →
                    </p>
                  </Link>
                </motion.div>

                {/* Connector between cards (not after the last card) */}
                {i < offers.length - 1 && (
                  <div className="flex flex-col md:flex-row items-center md:items-center justify-center shrink-0 py-4 md:py-0 md:px-3">
                    {/* Mobile: vertical connector */}
                    <div className="flex md:hidden flex-col items-center gap-1.5">
                      <div className="w-px h-5 bg-white/[0.08]" />
                      <p className="text-text-muted text-xs text-center px-4 leading-snug max-w-[160px]">
                        → {TRANSITIONS[i]}
                      </p>
                      <div className="w-px h-5 bg-white/[0.08]" />
                    </div>

                    {/* Desktop: horizontal connector */}
                    <div className="hidden md:flex flex-col items-center gap-1.5 w-28">
                      <div className="flex items-center gap-1 w-full">
                        <div className="h-px flex-1 bg-white/[0.08]" />
                        <span className="text-white/20 text-base leading-none">→</span>
                        <div className="h-px flex-1 bg-white/[0.08]" />
                      </div>
                      <p className="text-text-muted text-xs text-center leading-snug">
                        {TRANSITIONS[i]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
