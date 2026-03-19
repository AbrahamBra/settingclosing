'use client'

import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'

const levels = [
  {
    label: 'Je me lance',
    description: 'Pas encore d\u2019audience, peu de contenu. Il faut g\u00e9n\u00e9rer des RDV et construire le r\u00e9seau en m\u00eame temps.',
    arrow: 'Setting outbound',
    href: '#outbound',
    color: '#A78BFA',
  },
  {
    label: 'J\u2019ai du contenu qui performe',
    description: 'Lead magnets actifs, posts r\u00e9guliers. Les leads entrent, mais personne ne les qualifie.',
    arrow: 'Setting inbound + outbound',
    href: '#inbound',
    color: '#A78BFA',
  },
  {
    label: 'J\u2019ai une base \u00e9norme',
    description: 'Des milliers de contacts, des mois de contenu. Mais z\u00e9ro syst\u00e8me pour scorer, nourrir et convertir.',
    arrow: 'Setup nurturing',
    href: '#nurturing',
    color: '#C87533',
  },
]

export function MethodBlock() {
  return (
    <section id="methode" className="section-padding">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-4">
              Notre approche
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              Vous en &ecirc;tes o&ugrave;&nbsp;?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              L&apos;IA d&eacute;tecte, la m&eacute;thode structure, l&apos;humain d&eacute;cide &mdash; quel que soit votre niveau.
            </p>
          </div>
        </ScrollReveal>

        {/* Maturity levels */}
        <div className="flex flex-col gap-3">
          {levels.map((level, i) => (
            <ScrollReveal key={level.label} delay={i * 60}>
              <a
                href={level.href}
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-5"
              >
                {/* Number */}
                <span
                  className="font-mono text-xs font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center border"
                  style={{ color: level.color, borderColor: `${level.color}33` }}
                >
                  {i + 1}
                </span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-semibold text-text-primary">
                    {level.label}
                  </p>
                  <p className="font-sans text-xs text-text-muted mt-0.5">
                    {level.description}
                  </p>
                </div>

                {/* Arrow + offer */}
                <span
                  className="font-sans text-xs font-semibold shrink-0 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ color: level.color }}
                >
                  {level.arrow}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Link to /methode */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-8">
            <Link
              href="/methode"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
            >
              D&eacute;couvrir les 9 &eacute;tapes de notre m&eacute;thode
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
