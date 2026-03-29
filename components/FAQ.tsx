'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from './ui/ScrollReveal'
import { prepare, layout, type PreparedText } from '@chenglou/pretext'
import { BalancedText } from './ui/BalancedText'

const faqs = [
  {
    q: '790\u00a0€/mois c\u2019est beaucoup pour un solopreneur, non\u00a0?',
    a: 'C\u2019est 8-10h/semaine que tu récupères. Si ton taux horaire dépasse 80\u00a0€, c\u2019est rentable dès le premier mois. Et avec la garantie RDV, le risque est de notre côté.',
  },
  {
    q: 'Je peux le faire moi-même avec Lemlist/LaGrowthMachine\u00a0?',
    a: 'Oui, si tu as 5-8h/semaine et l\u2019expertise IA pour personnaliser chaque message. On combine détection de signaux + rédaction IA + validation humaine. C\u2019est ça qui fait la différence entre 2\u00a0% et 8\u00a0% de taux de réponse.',
  },
  {
    q: 'C\u2019est quoi la différence avec une agence de prospection\u00a0?',
    a: 'Le prix (3-5× moins), l\u2019engagement (aucun), et la méthode (IA + humain vs. templates en masse). Et on est payés au résultat avec les bonuses RDV.',
  },
  {
    q: 'Combien de temps avant les premiers RDV\u00a0?',
    a: 'Moins de 7 jours. On commence par tes clients idéaux et on itère chaque semaine.',
  },
  {
    q: 'Je n\u2019ai pas de base email, je peux quand m\u00eame\u00a0?',
    a: 'Pas besoin. Le Setting LinkedIn cible directement les prospects via les signaux d\u2019achat sur LinkedIn. Aucune base email requise.',
  },
  {
    q: 'Combien de clients tu prends par mois\u00a0?',
    a: '5 max. Chaque client a un setter dédié, on ne dilue pas la qualité. C\u2019est pour ça qu\u2019on peut garantir les résultats.',
  },
  {
    q: 'Et si ça marche pas\u00a0?',
    a: 'Zéro engagement. Tu peux arrêter à tout moment. Et la garantie RDV couvre ton risque\u00a0: si on ne délivre pas, on continue gratuitement.',
  },
  {
    q: 'C\u2019est quoi les bonuses RDV\u00a0?',
    a: 'Une prime variable par RDV g\u00e9n\u00e9r\u00e9, index\u00e9e sur ton ticket moyen. 50\u00a0\u20ac par RDV sous 5k\u00a0\u20ac, 150\u00a0\u20ac entre 5 et 15k, 250\u00a0\u20ac au-dessus. On gagne quand tu gagnes.',
  },
]

// Padding inside answer: px-5 pb-5 = 20px horizontal + 20px bottom padding
const ANSWER_PADDING_V = 20 // pb-5
const ANSWER_PADDING_H = 40 // px-5 × 2

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const [heights, setHeights] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const preparedRef = useRef<PreparedText[]>([])

  const computeHeights = () => {
    const el = containerRef.current
    if (!el || preparedRef.current.length === 0) return

    // Container is max-w-2xl (672px) minus px-5 padding on each side
    const containerWidth = el.offsetWidth - ANSWER_PADDING_H
    if (containerWidth <= 0) return

    // text-sm = 14px, leading-relaxed = 1.625 → 22.75px ≈ 23px
    const computed = window.getComputedStyle(el.querySelector('[data-faq-measure]') ?? el)
    const fontSize = parseFloat(computed.fontSize) || 14
    const lineHeightPx = Math.round(fontSize * 1.625)

    const newHeights = preparedRef.current.map((p) => {
      const result = layout(p, containerWidth, lineHeightPx)
      // Total height = text height + bottom padding
      return result.height + ANSWER_PADDING_V
    })
    setHeights(newHeights)
  }

  useEffect(() => {
    document.fonts.ready.then(() => {
      const el = containerRef.current
      if (!el) return
      const measureEl = el.querySelector('[data-faq-measure]') ?? el
      const computed = window.getComputedStyle(measureEl)
      const font = computed.font || `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`

      preparedRef.current = faqs.map((faq) => prepare(faq.a, font))
      computeHeights()
    })

    const onResize = () => computeHeights()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="faq" className="section-padding">
      <div ref={containerRef} className="container-max max-w-2xl">
        {/* Invisible measure element to read computed text styles */}
        <span
          aria-hidden="true"
          data-faq-measure
          className="font-sans text-sm leading-relaxed absolute opacity-0 pointer-events-none"
        />

        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Questions fréquentes
            </p>
            <BalancedText as="h2" className="font-sans text-h2 text-text-primary">
              {'On répond avant que tu demandes'}
            </BalancedText>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-sans text-sm font-semibold text-text-primary">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="text-text-muted text-lg shrink-0"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        // Use Pretext-predicted height when available, fallback to auto
                        height: heights[i] ?? 'auto',
                        opacity: 1,
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="font-sans text-sm text-text-secondary leading-relaxed faq-answer">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
