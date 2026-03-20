'use client'

import { useState } from 'react'
import { ScrollReveal } from './ui/ScrollReveal'

const faqs = [
  {
    q: 'Combien ça coûte au total ?',
    a: "500\u00a0€ le premier mois, 1\u00a0000\u00a0€/mois ensuite + une prime par RDV livré dont le montant est défini ensemble. Sans engagement.",
  },
  {
    q: 'Quand est-ce que je vois les premiers RDV ?',
    a: "Dès la première semaine. On ne commence pas par un audit de 30 jours. Votre setter envoie des messages dès le démarrage.",
  },
  {
    q: 'Est-ce que vous envoyez des messages sans mon accord ?',
    a: "Non. Chaque message est validé par un humain avant envoi. Aucune automatisation n\u2019envoie de messages à votre place.",
  },
  {
    q: 'Et si ça ne marche pas ?',
    a: "Moins de 5 RDV qualifiés livrés dans le mois\u00a0? Le mois suivant est offert. On continue jusqu\u2019à ce que le pipeline tourne.",
  },
  {
    q: "C'est quoi la différence avec un freelance SDR ?",
    a: "Un freelance SDR envoie des messages. On ajoute le ciblage IA et une méthode qui s\u2019affine chaque semaine sur vos retours terrain. Même quota LinkedIn, résultats ×10.",
  },
  {
    q: "Mon offre n'est pas encore rodée, c'est pour moi ?",
    a: "On travaille mieux avec une offre validée. Mais le setting est aussi un excellent test de marché\u00a0: en 4 semaines, vous saurez quels messages accrochent, quels profils répondent, et quels angles convertissent.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding">
      <div className="container-max max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Questions fréquentes
            </p>
            <h2 className="font-sans text-h2 text-text-primary">
              On r&eacute;pond avant que vous demandiez
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-sans text-sm font-semibold text-text-primary">
                    {faq.q}
                  </span>
                  <span
                    className="text-text-muted text-lg shrink-0 transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
