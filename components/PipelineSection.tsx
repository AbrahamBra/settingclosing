import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'
import { ButtonGlow } from './ui/ButtonGlow'
import { closingTiers } from '@/lib/pipeline-data'

export function PipelineSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <section id="pipeline" className="section-padding">
      <div className="container-max">
        {/* ── Bloc 1 : Section header ── */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Notre approche
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-4">
              On combine IA, méthode structurée et validation humaine.
            </h2>
            <p className="font-sans text-text-secondary text-base leading-relaxed">
              Même quota LinkedIn. Résultats&nbsp;x10.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Bloc 2 : Avant / Après ── */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-ia/20 bg-semantic-ia/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-ia">
              ⚡ Pipeline Setting
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card gauche — Sans méthode */}
          <ScrollReveal>
            <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-6 h-full">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
                Sans méthode
              </span>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <div>
                    <span className="font-mono text-sm text-text-muted">100 invitations / semaine</span>
                    <span className="block text-xs text-text-muted mt-0.5">Contrainte LinkedIn</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="text-sm text-text-secondary">Ciblage au feeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="text-sm text-text-secondary">~3% de réponses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="font-semibold text-sm text-text-secondary">≈ 1 RDV / mois</span>
                </li>
              </ul>

              <p className="text-text-muted text-xs italic leading-relaxed border-t border-white/[0.06] pt-4">
                &laquo;&nbsp;Bonjour, j&apos;ai vu votre profil et j&apos;aimerais échanger avec vous...&nbsp;&raquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Card droite — Avec pipeline */}
          <ScrollReveal delay={100}>
            <div
              className="relative rounded-xl overflow-hidden border border-accent/30 p-6 h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(200,117,51,0.06) 0%, rgba(200,117,51,0.02) 100%)',
                boxShadow: '0 0 40px -12px rgba(200,117,51,0.15)',
              }}
            >
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-5">
                Avec notre pipeline
              </span>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <div>
                    <span className="font-mono text-sm text-text-muted">100 invitations / semaine</span>
                    <span className="block text-xs text-text-muted mt-0.5">Même contrainte</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent text-sm">→</span>
                  <span className="text-sm text-text-primary">Ciblage par signaux d&apos;achat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent text-sm">→</span>
                  <span className="text-sm text-text-primary">~25% de réponses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent text-sm">→</span>
                  <span className="font-semibold text-sm text-accent">≈ 3 RDV / semaine</span>
                </li>
              </ul>

              <p className="text-text-secondary text-xs italic leading-relaxed border-t border-accent/20 pt-4">
                &laquo;&nbsp;J&apos;ai vu votre post sur [sujet]. On a eu le même défi chez [entreprise]...&nbsp;&raquo;
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Note contenu + lead magnets */}
        <ScrollReveal delay={150}>
          <p className="text-center text-text-muted text-sm mt-6 max-w-2xl mx-auto">
            Ces résultats, c&apos;est l&apos;outbound seul. Avec une stratégie de contenu et des lead magnets, on les dépasse.
          </p>
        </ScrollReveal>

        {/* ── Bloc 3 : Légende 3 couches + lien /methode ── */}
        <ScrollReveal delay={100}>
          <div className="mt-12 mb-16">
            {/* Layer pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-ia/20 bg-semantic-ia/10 font-mono text-xs text-semantic-ia">
                <span className="w-2 h-2 rounded-full bg-semantic-ia" />
                IA détecte
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-methode/20 bg-semantic-methode/10 font-mono text-xs text-semantic-methode">
                <span className="w-2 h-2 rounded-full bg-semantic-methode" />
                Méthode qualifie
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-mono text-xs text-semantic-humain">
                <span className="w-2 h-2 rounded-full bg-semantic-humain" />
                Humain valide
              </span>
            </div>

            {/* Link to /methode */}
            <div className="text-center">
              <Link
                href="/methode"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold text-sm"
              >
                Voir les 9 étapes en détail
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Bloc 4 : Closing compact ── */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
              🤝 Pipeline Closing
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: horizontal progression with arrows */}
          <div className="hidden md:flex items-stretch gap-0">
            {closingTiers.map((tier, i) => (
              <ScrollReveal key={tier.level} delay={i * 100}>
                <div className="flex items-stretch">
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 flex-1 min-w-[200px]">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />

                    <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest block mb-2 mt-1">
                      {tier.level}
                    </span>
                    <h3 className="text-text-primary font-semibold text-base mb-1">
                      {tier.label}
                    </h3>
                    <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                      {tier.threshold}
                    </span>
                  </div>

                  {/* Arrow connector (not on last item) */}
                  {i < closingTiers.length - 1 && (
                    <div className="flex items-center px-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-text-muted">
                        <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {closingTiers.map((tier, i) => (
              <ScrollReveal key={tier.level} delay={i * 100}>
                <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest">
                      {tier.level}
                    </span>
                    <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                      {tier.threshold}
                    </span>
                  </div>
                  <h3 className="text-text-primary font-semibold text-base mt-2">
                    {tier.label}
                  </h3>
                </div>

                {/* Arrow between cards */}
                {i < closingTiers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-text-muted rotate-90">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Bloc 5 : CTA unifié ── */}
        <ScrollReveal delay={100}>
          <div className="text-center mt-16">
            <p className="text-text-secondary text-sm mb-6 max-w-xl mx-auto">
              Ce pipeline se calibre en deux mois. Après&nbsp;: vous closez, on prospecte.
            </p>
            <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Réserver un appel découverte
            </ButtonGlow>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
