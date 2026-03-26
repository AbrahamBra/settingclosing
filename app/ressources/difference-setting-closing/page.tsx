import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Setting vs Closing : la différence | Setting',
  description:
    'Setting et closing : deux phases distinctes du cycle de vente B2B. Comprenez la différence pour identifier ce qui bloque votre pipeline.',
  openGraph: {
    title: 'Setting vs Closing : la différence | Setting',
    description:
      'Deux rôles distincts. Savoir lequel travailler en premier change tout à votre croissance.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/difference-setting-closing',
    languages: {
      'fr': 'https://www.setting.live/ressources/difference-setting-closing',
      'x-default': 'https://www.setting.live/ressources/difference-setting-closing',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting vs Closing : la diff\u00e9rence | Setting',
    description: 'Deux r\u00f4les distincts. Savoir lequel travailler en premier change tout \u00e0 votre croissance.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/difference-setting-closing',
  headline: 'Quelle est la différence entre setting et closing en B2B ?',
  description:
    'Le setting désigne la phase de prospection commerciale B2B. Le closing désigne la phase de vente. Deux rôles distincts qui s\'optimisent indépendamment.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.setting.live/a-propos#abraham',
    name: 'Abraham Brakha',
    url: 'https://www.setting.live/equipe/abraham-brakha',
    jobTitle: 'Fondateur & Automatisation IA',
    sameAs: ['https://www.linkedin.com/in/abraham-brakha'],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.setting.live/icon.png',
      width: 512,
      height: 512,
    },
  },
  datePublished: '2026-03-16',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/difference-setting-closing',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/difference-setting-closing',
  },
  image: 'https://www.setting.live/ressources/difference-setting-closing/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Métiers B2B',
  wordCount: 2000,
  about: [
    { '@type': 'Thing', name: 'Setting vs Closing' },
    { '@type': 'Thing', name: 'Rôles commerciaux B2B' },
  ],
}

const faqItems = [
  {
    question: 'Faut-il absolument séparer setting et closing ?',
    answer:
      "Pas forcément dès le départ. Quand vous commencez, vous faites tout. La séparation devient pertinente quand vous avez validé que votre offre se vend et que vous êtes limité soit par le nombre de RDV, soit par votre taux de conversion. C'est à ce moment que déléguer l'un des deux libère vraiment du volume.",
  },
  {
    question: 'Un setter peut-il apprendre à closer ?',
    answer:
      "Oui, mais c'est plus rare qu'il n'y paraît. Les deux métiers demandent des qualités différentes : le setting demande de la persévérance, une peau épaisse et un rythme soutenu. Le closing demande de l'écoute active, de l'empathie calibrée et une bonne gestion des silences. Certains profils sont polyvalents, mais les former sur les deux simultanément prend du temps.",
  },
  {
    question: 'Combien de RDV par mois avant que le setting soit rentable ?',
    answer:
      "Si votre ticket moyen est de 1 000 €/mois et que vous closez 20 % de vos deals, 3 RDV qualifiés génèrent 600 € de revenus récurrents — ce qui couvre largement un setting externalisé. En règle générale : dès que le coût du setting est inférieur à la valeur d'un seul deal, l'opération est rentable.",
  },
  {
    question: 'Quel est un bon taux de closing en B2B ?',
    answer:
      "Un taux de 20 à 30 % sur des RDV qualifiés est considéré comme correct en B2B. Au-dessus de 40 %, soit votre qualification est excellente, soit votre prix est trop bas. En dessous de 15 %, il y a généralement un problème de discovery ou de valeur perçue — c'est souvent là que le coaching closing intervient.",
  },
  {
    question: 'Peut-on tout externaliser — setting ET closing ?',
    answer:
      "Le setting peut être totalement externalisé — c'est même recommandé à partir d'un certain volume. Le closing est plus délicat si votre offre est complexe ou très personnalisée. L'option la plus courante : externaliser le setting, se faire coacher sur le closing. Vous restez présent dans la vente mais vous arrêtez de prospecter.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Différence setting vs closing',
      item: 'https://www.setting.live/ressources/difference-setting-closing',
    },
  ],
}

// ─── Content Data ─────────────────────────────────────────────────────────────

const cycleSteps = [
  { label: 'Ciblage', owner: 'Setting', detail: "Définir qui contacter et pourquoi maintenant." },
  { label: 'Approche', owner: 'Setting', detail: "Premier contact — message LinkedIn, email, appel." },
  { label: 'Qualification', owner: 'Setting', detail: "Vérifier l'adéquation prospect / offre." },
  { label: 'Prise de RDV', owner: 'Setting', detail: "Fixer le rendez-vous avec le contexte." },
  { label: 'Discovery', owner: 'Closing', detail: "Comprendre le vrai problème avant de parler prix." },
  { label: 'Proposition de valeur', owner: 'Closing', detail: "Présenter l'offre adaptée au problème identifié." },
  { label: 'Traitement des objections', owner: 'Closing', detail: "Répondre aux freins sans baisser le prix." },
  { label: 'Signature', owner: 'Closing', detail: "Conclure et déclencher le contrat." },
]

const mistakeItems = [
  {
    title: "Perte d'énergie sur la prospection",
    desc: "Le solopreneur passe sa journée à prospecter au lieu de vendre. Il ne reste plus d'énergie pour les appels. Quand un prospect chaud répond enfin, la réponse arrive avec 3h de délai.",
  },
  {
    title: "Messages centrés sur l'offre, pas sur le problème",
    desc: "Sans rôle dédié au setting, les messages parlent du produit plutôt que du problème client. Résultat : peu de réponses, beaucoup de temps perdu sur des profils qui n'ont jamais rien demandé.",
  },
  {
    title: "Discovery bâclée",
    desc: "Épuisé par la prospection, le solopreneur arrive en appel en mode 'vite, je pitch'. La discovery est court-circuitée. Les objections n'ont pas été anticipées. Le deal part en 'je vais réfléchir'.",
  },
]

const maturityScenarios = [
  {
    situation: '"Je n\'ai pas assez de RDV"',
    symptom: 'Calendrier vide, pas de réponses aux messages, pipeline à sec.',
    verdict: 'Problème en amont → investir en setting en premier.',
    accentColor: true,
  },
  {
    situation: '"J\'ai des RDV mais ça ne signe pas"',
    symptom: "Des appels qui se passent bien mais finissent par 'je vais réfléchir'.",
    verdict: 'Problème dans la vente → investir en closing en premier.',
    accentColor: false,
  },
  {
    situation: '"J\'ai un setter, des RDV, mais le taux de closing reste faible"',
    symptom: "Les deux problèmes coexistent : leads insuffisamment qualifiés ET discovery non structurée.",
    verdict: 'Situation avancée → aligner setting et closing sur la même méthode.',
    accentColor: false,
  },
]

export default function DifferenceSettingClosingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Setting vs Closing</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Méthode
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Quelle est la différence entre setting et closing en B2B ?
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Deux rôles distincts dans un cycle de vente B2B. Comprendre lequel travailler
              en premier change tout à ce que vous signez chaque mois.
            </p>
            <AuthorBlock date="2026-03-16" readTime="7 min de lecture" dateLabel="16 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Two Definition Blocks */}
          <div data-speakable="true" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Setting
              </p>
              <p className="font-sans text-text-primary leading-relaxed text-sm">
                La phase de <strong>prospection commerciale</strong> B2B. Objectif : identifier
                des prospects pertinents, les contacter, qualifier leur intérêt et décrocher
                un rendez-vous. Le setter travaille en amont de la vente — il n&apos;est jamais
                présent pendant la négociation.
              </p>
            </div>
            <div className="border-l-4 border-white/[0.12] bg-bg-secondary rounded-r-xl px-6 py-5">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2">
                Closing
              </p>
              <p className="font-sans text-text-primary leading-relaxed text-sm">
                La phase de <strong>vente à proprement parler</strong>. Objectif : comprendre
                le besoin via une discovery structurée, présenter la valeur, répondre aux
                objections et signer. Le closer entre en jeu uniquement sur des leads qualifiés.
              </p>
            </div>
          </div>

          {/* Semantic HTML table — Setting vs Closing comparison for AI / machine readability */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm text-left font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-text-muted font-semibold">Critère</th>
                  <th className="py-3 px-4 text-[#C87533] font-semibold">Setting</th>
                  <th className="py-3 px-4 text-text-muted font-semibold">Closing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">Objectif</td>
                  <td className="py-3 px-4 text-text-primary">Décrocher des rendez-vous qualifiés</td>
                  <td className="py-3 px-4 text-text-primary">Signer des contrats</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">Phase du cycle de vente</td>
                  <td className="py-3 px-4 text-text-primary">Étapes 1 à 4 (ciblage, approche, qualification, prise de RDV)</td>
                  <td className="py-3 px-4 text-text-primary">Étapes 5 à 8 (discovery, proposition, objections, signature)</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">Compétences clés</td>
                  <td className="py-3 px-4 text-text-primary">Persévérance, rythme soutenu, peau épaisse</td>
                  <td className="py-3 px-4 text-text-primary">Écoute active, empathie calibrée, gestion des silences</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">Externalisable</td>
                  <td className="py-3 px-4 text-text-primary">Oui, totalement recommandé</td>
                  <td className="py-3 px-4 text-text-primary">Plus délicat, coaching recommandé</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">Budget externalisé</td>
                  <td className="py-3 px-4 text-text-primary">790 €/mois (fixe + prime par RDV)</td>
                  <td className="py-3 px-4 text-text-primary">1 000 €/mois (coaching 3 mois)</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">Quand investir en premier</td>
                  <td className="py-3 px-4 text-text-primary">Calendrier vide, pas assez de RDV</td>
                  <td className="py-3 px-4 text-text-primary">Des RDV mais taux de signature faible</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-3 px-4 text-text-muted">KPI principal</td>
                  <td className="py-3 px-4 text-text-primary">Nombre de RDV qualifiés par mois</td>
                  <td className="py-3 px-4 text-text-primary">Taux de closing (20–30 % = correct)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 1 — Le cycle complet */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le cycle de vente B2B complet
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Un cycle de vente B2B complet comprend 8 étapes. Le <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial B2B</a> couvre les 4 premières.
              Le closing couvre les 4 dernières.
            </p>
            <div className="space-y-0">
              {cycleSteps.map((step, i) => {
                const isSetting = step.owner === 'Setting'
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-sans ${
                          isSetting
                            ? 'border border-accent/40 bg-accent/10 text-accent'
                            : 'border border-white/[0.08] bg-bg-secondary text-text-secondary'
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < cycleSteps.length - 1 && (
                        <div
                          className={`w-px flex-1 my-1 ${isSetting ? 'bg-accent/20' : 'bg-white/[0.06]'}`}
                          style={{ minHeight: '20px' }}
                        />
                      )}
                    </div>
                    <div className="pb-5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-sans font-semibold text-text-primary text-sm">
                          {step.label}
                        </p>
                        <span
                          className={`font-sans text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                            isSetting
                              ? 'text-accent bg-accent/10'
                              : 'text-text-secondary bg-bg-secondary'
                          }`}
                        >
                          {step.owner}
                        </span>
                      </div>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Section 2 — Pourquoi séparer */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi les séparer — et ce qui se passe quand on ne le fait pas
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              La plupart des solopreneurs font les deux eux-mêmes sans s&apos;en rendre compte.
              Ce mélange crée 3 problèmes structurels.
            </p>
            <div className="space-y-4">
              {mistakeItems.map((item, i) => (
                <div key={i} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-sans text-xs font-semibold text-text-secondary">0{i + 1}</span>
                    <p className="font-sans font-semibold text-text-primary">{item.title}</p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Les commerciaux qui passent plus de 46 % du temps d&apos;un appel à écouter
                ont un taux de closing 3x supérieur à la moyenne.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Une discovery bien conduite commence par l&apos;écoute — pas par le pitch.
                (Source : Gong.io)
              </p>
            </div>
          </section>

          <CtaArticle />

          {/* Section 3 — Dans quel ordre investir */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Dans quel ordre investir selon votre situation
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Il n&apos;y a pas de réponse universelle — ça dépend de votre niveau de maturité
              commerciale. Voici 3 situations types.
            </p>
            <div className="space-y-4">
              {maturityScenarios.map((scenario, i) => (
                <div
                  key={i}
                  className={`rounded-xl px-6 py-5 border ${
                    scenario.accentColor ? 'border-accent/30 bg-accent/5' : 'border-white/[0.06] bg-bg-secondary'
                  }`}
                >
                  <p className="font-sans font-semibold text-text-primary mb-1">
                    {scenario.situation}
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    {scenario.symptom}
                  </p>
                  <p
                    className={`font-sans text-sm font-semibold ${
                      scenario.accentColor ? 'text-accent' : 'text-text-primary'
                    }`}
                  >
                    {scenario.verdict}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary text-sm leading-relaxed mt-6">
              Dans les 3 cas, le vrai problème est rarement là où on croit.
              Les solopreneurs qui pensent avoir un problème de <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> ont souvent un problème de
              message (Mois 2). Ceux qui pensent avoir un problème de closing ont souvent un problème
              de discovery (Mois 1 du closing). Poser le bon diagnostic avant d&apos;investir évite de traiter le mauvais symptôme.
            </p>
          </section>

          {/* Section 4 — Budget */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Quel budget pour chaque partie ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Setting externalisé
                </p>
                <p className="font-serif text-h3 text-text-primary mb-1">790 €<span className="font-sans text-text-secondary text-base font-normal">/mois</span></p>
                <p className="font-sans text-text-secondary text-sm">Fixe + prime à la performance par RDV livré. Garantie minimum 5 RDV qualifiés.</p>
              </div>
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">
                  Coaching closing
                </p>
                <p className="font-serif text-h3 text-text-primary mb-1">1 000 €<span className="font-sans text-text-secondary text-base font-normal">/mois</span></p>
                <p className="font-sans text-text-secondary text-sm">Programme sur 3 mois. 2h de coaching par semaine dont une heure en situation réelle.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
            </h2>
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    {item.question}
                  </p>
                  <p className="font-sans text-text-secondary leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related articles */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Pour aller plus loin
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="/setting"
                className="group bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] hover:border-accent/30 transition-colors"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">Page pilier</p>
                <p className="font-sans font-semibold text-text-primary group-hover:text-accent transition-colors">
                  Setting : le guide complet du setting commercial B2B →
                </p>
              </a>
              <a
                href="/ressources/setting-commercial-b2b"
                className="group bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] hover:border-accent/30 transition-colors"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">Guide pilier</p>
                <p className="font-sans font-semibold text-text-primary group-hover:text-accent transition-colors">
                  Setting commercial B2B : guide complet →
                </p>
              </a>
              <a
                href="/ressources/setter-b2b-definition"
                className="group bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] hover:border-accent/30 transition-colors"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">Setting</p>
                <p className="font-sans font-semibold text-text-primary group-hover:text-accent transition-colors">
                  C&apos;est quoi un setter en B2B ? →
                </p>
              </a>
              <a
                href="/ressources/challenger-sale-definition"
                className="group bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] hover:border-accent/30 transition-colors"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2">Closing</p>
                <p className="font-sans font-semibold text-text-primary group-hover:text-accent transition-colors">
                  Qu&apos;est-ce que le Challenger Sale ? →
                </p>
              </a>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Setting, closing ou les deux ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes suffit à identifier ce qui bloque réellement.
              On repart avec un plan d&apos;action concret.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/setter-b2b-definition', title: "C\u2019est quoi un setter en B2B ?", readTime: '8 min' },
            { href: '/ressources/closer-b2b', title: "Closer B2B : ce que c\u2019est vraiment, ce que \u00e7a demande, comment en recruter un", readTime: '11 min' },
            { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : d\u00e9finition, m\u00e9thode et programme complet', readTime: '25 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
