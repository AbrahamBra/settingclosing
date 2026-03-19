import { ScrollReveal } from './ui/ScrollReveal'
import { ButtonGlow } from './ui/ButtonGlow'

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

        {/* ── Bloc 2 : Outbound — Avant / Après ── */}
        <div id="outbound" className="scroll-mt-24" />
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
                &laquo;&nbsp;Bonjour, j&apos;ai vu que vous lanciez [offre concrète]. On a aidé [persona similaire] à passer de 2 à 8 RDV/semaine en 3 semaines.&nbsp;&raquo;
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Note outbound seul */}
        <ScrollReveal delay={150}>
          <p className="text-center text-text-secondary text-sm mt-6 max-w-2xl mx-auto">
            Ces résultats, c&apos;est l&apos;outbound seul.
          </p>
        </ScrollReveal>

        {/* ── Bloc 2b : Inbound — Lead Magnets ── */}
        <div id="inbound" className="scroll-mt-24" />
        <ScrollReveal delay={200}>
          <div className="mt-12 max-w-4xl mx-auto">
            <div
              className="relative rounded-xl overflow-hidden border border-semantic-methode/20 p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(251,191,36,0.06) 0%, rgba(251,191,36,0.02) 100%)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-semantic-methode" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-semantic-methode">
                  Accélérateur
                </span>
              </div>

              <h3 className="text-text-primary font-semibold text-lg mb-3">
                Quand l&apos;outbound tourne, on ouvre l&apos;inbound.
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                L&apos;outbound plafonne à 100 invitations par semaine. Une fois le pipeline calibré, on vous aide à attirer des leads qui viennent à vous&nbsp;: conseil sur les sujets de posts et formats de lead magnet, scoring des leads entrants, setting direct sans passer par l&apos;invitation.
                <span className="text-semantic-methode font-medium"> Inclus dans votre abonnement.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-semantic-methode text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Conseil lead magnet</p>
                    <p className="text-text-secondary text-xs">Sujets, formats, angles&nbsp;: on cadre avec vous</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-semantic-methode text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Scoring intégré</p>
                    <p className="text-text-secondary text-xs">Le formulaire qualifie en temps réel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-semantic-methode text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Setting direct</p>
                    <p className="text-text-secondary text-xs">Zéro invitation, zéro plafond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Bloc 2c : Nurturing — Base dormante ── */}
        <div id="nurturing" className="scroll-mt-24" />
        <ScrollReveal delay={200}>
          <div className="mt-12 max-w-4xl mx-auto">
            <div
              className="relative rounded-xl overflow-hidden border border-[#C87533]/20 p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(200,117,51,0.06) 0%, rgba(200,117,51,0.02) 100%)',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C87533]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#C87533]">
                  Nurturing
                </span>
              </div>

              <h3 className="text-text-primary font-semibold text-lg mb-3">
                Des milliers de contacts. Z&eacute;ro syst&egrave;me pour les activer.
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                Vous avez une newsletter, des participants &agrave; vos webinars, des t&eacute;l&eacute;chargements de lead magnets &mdash; mais tout dort dans un CRM.
                On construit avec vous le workflow qui score, nourrit et route ces contacts vers des RDV qualifi&eacute;s.
                <span className="text-[#C87533] font-medium"> Un syst&egrave;me qui s&apos;affine &agrave; chaque cycle.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#C87533] text-sm mt-0.5">&rarr;</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Scoring comportemental</p>
                    <p className="text-text-secondary text-xs">Engagement, r&eacute;cence, intent&nbsp;: chaque lead a un score</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C87533] text-sm mt-0.5">&rarr;</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">S&eacute;quences personnalis&eacute;es</p>
                    <p className="text-text-secondary text-xs">Contenu adapt&eacute; au niveau de maturit&eacute; du lead</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#C87533] text-sm mt-0.5">&rarr;</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Routing vers appel</p>
                    <p className="text-text-secondary text-xs">Les leads chauds sont rout&eacute;s automatiquement vers un cr&eacute;neau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── CTA unifié ── */}
        <ScrollReveal delay={100}>
          <div className="text-center mt-16">
            <p className="text-text-secondary text-sm mb-6 max-w-xl mx-auto">
              Premiers RDV dès la première semaine. Au mois 2, le pipeline tourne à plein régime.
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
