import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'
import { ButtonGlow } from './ui/ButtonGlow'
import { offers } from '@/lib/offers-data'
import type { Offer } from '@/lib/offers-data'

function OfferBlock({ offer, isLast }: { offer: Offer; isLast: boolean }) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'
  const ctaHref = offer.cta.href === '#contact' ? calendlyUrl : offer.cta.href

  return (
    <div className="relative flex gap-5 md:gap-8">
      {/* Maturity line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-4 h-4 rounded-full border-2 shrink-0"
          style={{ borderColor: offer.color, backgroundColor: `${offer.color}33` }}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-[2px] flex-1 min-h-[2rem] bg-white/[0.06]" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-10 md:pb-14">
        {/* Eyebrow */}
        <p
          className="font-mono text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: offer.color }}
        >
          {offer.eyebrow}
        </p>

        {/* Situation */}
        <h3 className="font-sans text-lg md:text-xl font-bold text-text-primary mb-2">
          {offer.situation}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xl">
          {offer.description}
        </p>

        {/* Features */}
        <div className="flex flex-col gap-2 mb-4">
          {offer.features.map((f) => (
            <div key={f.title} className="flex items-start gap-2.5">
              <span className="text-sm mt-0.5 shrink-0" style={{ color: offer.color }}>&rarr;</span>
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
          className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-colors hover:opacity-80"
          style={{ color: offer.color }}
        >
          Voir la m&eacute;thode en d&eacute;tail
          <span aria-hidden="true">&rarr;</span>
        </Link>

        {/* Pricing zone */}
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{
            borderColor: `${offer.color}33`,
            background: `linear-gradient(135deg, ${offer.color}08 0%, ${offer.color}03 100%)`,
          }}
        >
          {offer.pricing.type === 'fixed' ? (
            <div className="space-y-3">
              {offer.pricing.launch && (
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {offer.pricing.launch.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-sans text-2xl text-text-primary font-bold">
                      {offer.pricing.launch.amount.toLocaleString('fr-FR')}&nbsp;&euro;
                    </p>
                    {!offer.pricing.subscription && (
                      <span className="font-sans text-text-muted text-sm">forfait</span>
                    )}
                  </div>
                  <p className="font-sans text-text-secondary text-xs mt-1">
                    {offer.pricing.launch.detail}
                  </p>
                </div>
              )}
              {offer.pricing.subscription && (
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {offer.pricing.launch ? 'Mois 2+ \u2014 Abonnement' : ''}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-sans text-2xl text-text-primary font-bold">
                      {offer.pricing.subscription.amount.toLocaleString('fr-FR')}&nbsp;&euro;
                    </p>
                    <span className="font-sans text-text-muted text-sm">
                      {offer.pricing.subscription.period}
                    </span>
                  </div>
                  <p className="font-sans text-text-secondary text-xs mt-1">
                    {offer.pricing.subscription.detail}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <p className="font-sans text-text-muted text-sm mb-1">{offer.pricing.customLabel}</p>
              <p className="font-sans text-text-secondary text-xs">{offer.pricing.customDetail}</p>
            </div>
          )}

          {/* Guarantee */}
          {offer.guarantee && (
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-start gap-2">
                <span style={{ color: offer.color }} className="shrink-0 mt-0.5">✓</span>
                <p className="font-sans text-text-primary text-sm">
                  <span className="font-semibold">Garantie&nbsp;:</span> {offer.guarantee}
                </p>
              </div>
            </div>
          )}
          {offer.noCommitment && (
            <div className="flex items-start gap-2 mt-2">
              <span style={{ color: offer.color }} className="shrink-0 mt-0.5">✓</span>
              <p className="font-sans text-text-primary text-sm">
                <span className="font-semibold">Sans engagement.</span> R&eacute;siliable &agrave; tout moment.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-4">
            <ButtonGlow as="a" href={ctaHref} target="_blank" rel="noopener noreferrer" className="w-full text-center">
              {offer.cta.label}
            </ButtonGlow>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OfferLadder() {
  return (
    <section id="offres" className="section-padding bg-bg-secondary">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-4">
              Notre approche
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              Tu en es o&ugrave;&nbsp;?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Trois niveaux de maturit&eacute;, trois r&eacute;ponses. Trouvez la v&ocirc;tre.
            </p>
          </div>
        </ScrollReveal>

        {/* Offer blocks */}
        <div className="flex flex-col">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.id} delay={i * 80}>
              <OfferBlock offer={offer} isLast={i === offers.length - 1} />
            </ScrollReveal>
          ))}
        </div>

        {/* Hub link */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-4">
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
