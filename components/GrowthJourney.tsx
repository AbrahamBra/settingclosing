'use client'

import { motion, type Variants } from 'framer-motion'
import { offers } from '@/lib/offers-data'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const TRANSITIONS = [
  'Tu re\u00e7ois aussi des leads entrants\u00a0?',
  'Tu as une base email \u00e0 mon\u00e9tiser\u00a0?',
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
              NOS SOLUTIONS
            </p>
            <h2 className="font-sans text-h2 text-text-primary">
              Une solution pour chaque situation
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
                  <div
                    className="h-full bg-bg-secondary rounded-2xl border border-white/[0.06] p-6 border-l-4"
                    style={{ borderLeftColor: offer.color }}
                  >
                    {/* Service badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `${offer.color}1A`, color: offer.color }}
                      >
                        {offer.eyebrow}
                      </span>
                      {offer.tag && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/[0.06] text-text-muted">
                          {offer.tag}
                        </span>
                      )}
                    </div>

                    {/* Situation */}
                    <h3 className="font-sans text-lg font-bold text-text-primary mb-1">
                      {offer.phaseSituation}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-3 space-y-1.5">
                      {offer.homepageBullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span
                            className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                            style={{ background: offer.color }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Result */}
                    <p className="mt-3 text-sm font-semibold" style={{ color: offer.color }}>
                      → {offer.homepageResult}
                    </p>

                    {/* Links */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-x-4 gap-y-1 text-xs">
                      <a
                        href="/methode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors"
                      >
                        Comprendre la m&eacute;thode →
                      </a>
                      <a
                        href={`/tarifs#${offer.phaseLabel.toLowerCase()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors"
                      >
                        Voir l&apos;offre →
                      </a>
                    </div>
                  </div>
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
