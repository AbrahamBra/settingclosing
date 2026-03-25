'use client'

import { useState } from 'react'
import { ScrollReveal } from './ui/ScrollReveal'

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
              On r&eacute;pond avant que tu demandes
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
                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: open === i ? '500px' : '0',
                    opacity: open === i ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5">
                    <p className="font-sans text-sm text-text-secondary leading-relaxed faq-answer">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
