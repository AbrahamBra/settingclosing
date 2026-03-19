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

        {/* Note outbound seul */}
        <ScrollReveal delay={150}>
          <p className="text-center text-text-muted text-sm mt-6 max-w-2xl mx-auto">
            Ces résultats, c&apos;est l&apos;outbound seul.
          </p>
        </ScrollReveal>

        {/* ── Bloc 2b : Lead Magnets — accélérateur ── */}
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
                Et si on n&apos;attendait plus les invitations LinkedIn&nbsp;?
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                On construit un formulaire de lead magnet conçu pour capter les signaux d&apos;achat dès la première interaction.
                Chaque question score le prospect en temps réel. Les leads chauds passent en setting téléphonique — zéro invitation LinkedIn, zéro limite.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-semantic-methode text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Scoring by design</p>
                    <p className="text-text-muted text-xs">Le formulaire qualifie avant vous</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-semantic-methode text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Setting téléphonique</p>
                    <p className="text-text-muted text-xs">Pas d&apos;invitation, pas de limite</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-semantic-methode text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-text-primary text-sm font-semibold">Itératif</p>
                    <p className="text-text-muted text-xs">On améliore le formulaire en continu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Setting showcase — "En pratique" */}
        <ScrollReveal delay={100}>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-text-primary font-semibold text-lg mb-6 text-center">
              En pratique, c&ocirc;té setting
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 — Ciblage Sales Navigator */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">🎯</span>
                    <span className="text-text-muted text-sm">Screenshot Sales Navigator à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    Ciblage Sales Navigator
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    On configure vos filtres pour capter les signaux d&apos;achat : changements de poste, interactions concurrents, levées de fonds.
                  </p>
                </div>
              </div>

              {/* Card 2 — Scoring Google Sheet */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">📊</span>
                    <span className="text-text-muted text-sm">Screenshot scoring à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    Scoring automatisé sur Google Sheet
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Chaque prospect est scoré sur 5 niveaux de maturité. Le scoring s&apos;appuie sur une base de connaissance qu&apos;on enrichit en continu avec vos retours terrain.
                  </p>
                </div>
              </div>

              {/* Card 3 — Messages qui convertissent */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">💬</span>
                    <span className="text-text-muted text-sm">Screenshot messages à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    Des messages qui prennent des RDV
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    5 phrases max, jamais de pitch en premier DM. Chaque message s&apos;appuie sur une base de connaissance qui s&apos;affine avec chaque retour. Validés avant envoi.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold text-sm"
              >
                Voir les 9 étapes en détail
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Bloc 4 : Closing ── */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
              🤝 Pipeline Closing
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        {/* Sans méthode closing */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-6">
            <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-6">
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Sans méthode de closing
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="text-sm text-text-secondary">Vous pitchez dès le premier appel</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="text-sm text-text-secondary">Le prospect négocie, vous baissez le prix</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="text-sm text-text-secondary">Deals à 2k€ alors que l&apos;offre en vaut 10k</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted text-sm">→</span>
                  <span className="text-sm text-text-secondary">Taux de closing ~10-15%</span>
                </div>
              </div>

              <p className="text-text-muted text-xs italic leading-relaxed border-t border-white/[0.06] pt-4 mt-4">
                &laquo;&nbsp;On fait un tarif si vous signez cette semaine...&nbsp;&raquo;
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Avec méthode — 3 niveaux */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-4">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-semantic-humain mb-4">
              Avec notre méthode
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {closingTiers.map((tier, i) => (
            <ScrollReveal key={tier.level} delay={i * 100}>
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />

                {/* Level + threshold */}
                <div className="flex items-center justify-between mb-3 mt-1">
                  <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest">
                    {tier.level}
                  </span>
                  <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                    {tier.threshold}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-text-primary font-semibold text-base mb-2">{tier.label}</h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">{tier.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing showcase — "En pratique" */}
        <ScrollReveal delay={100}>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-text-primary font-semibold text-lg mb-6 text-center">
              En pratique, c&ocirc;té closing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 — On assiste au RDV */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">🎥</span>
                    <span className="text-text-muted text-sm">Screenshot appel à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    On assiste à votre appel
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    On observe votre discovery en direct, ou on mène l&apos;appel de A à Z pendant que vous êtes en second. Débrief juste après pour ajuster.
                  </p>
                </div>
              </div>

              {/* Card 2 — Coaching en visio */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">🖥️</span>
                    <span className="text-text-muted text-sm">Extrait vidéo coaching à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    Coaching en visio, chaque semaine
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    1h en face à face. On décortique vos appels, on travaille le pricing, on répète jusqu&apos;à ce que ça devienne naturel.
                  </p>
                </div>
              </div>

              {/* Card 3 — On forme vos closers */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">🎓</span>
                    <span className="text-text-muted text-sm">Vidéo formation closers à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    On forme vos closers
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Une fois la discovery et le pricing maîtrisés, on forme des closers dans votre équipe pour prendre le relais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

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
