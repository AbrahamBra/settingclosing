import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Agence setting LinkedIn vs freelance setter : le bon choix | Setting',
  description:
    'Agence de setting LinkedIn ou setter freelance ? Co\u00fbt, m\u00e9thode, outils, garantie : le comparatif point par point pour choisir selon votre situation.',
  alternates: {
    canonical: 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
    languages: {
      'fr': 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
      'x-default': 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
    },
  },
  openGraph: {
    title: 'Agence setting LinkedIn vs setter freelance | Setting',
    description: 'Co\u00fbt, m\u00e9thode, outils, supervision : le comparatif entre agence de setting et setter freelance.',
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence setting LinkedIn vs setter freelance | Setting',
    description: 'Co\u00fbt, m\u00e9thode, outils, supervision : le comparatif entre agence de setting et setter freelance.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
  headline: 'Agence setting LinkedIn vs setter freelance : le bon choix selon votre situation',
  description:
    'Agence de setting LinkedIn ou setter freelance ? Co\u00fbt mensuel, m\u00e9thode, outils fournis, garantie r\u00e9sultats : le comparatif honn\u00eate pour trancher.',
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
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: 'https://www.setting.live/opengraph-image',
  },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  inLanguage: 'fr-FR',
  wordCount: 3200,
  url: 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
  },
  image: 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
}

const faqItems = [
  {
    question: 'Peut-on passer de freelance \u00e0 agence en cours de route ?',
    answer:
      'Oui, et c\u0027est assez courant. Beaucoup d\u0027entreprises d\u00e9marrent avec un setter freelance pour tester le canal LinkedIn, puis basculent vers une agence quand elles r\u00e9alisent que la gestion quotidienne prend trop de temps. La transition se fait en g\u00e9n\u00e9ral en 1 \u00e0 2 semaines. L\u0027agence reprend les listes de prospects, recalibre les messages et relance la machine.',
  },
  {
    question: 'Un freelance peut-il utiliser les m\u00eames outils qu\u0027une agence ?',
    answer:
      'Techniquement, oui. Sales Navigator, Reactin, un CRM, un syst\u00e8me de scoring IA : tout est accessible \u00e0 l\u0027unit\u00e9. Mais la diff\u00e9rence n\u0027est pas l\u0027acc\u00e8s aux outils. C\u0027est leur configuration, leur interconnexion et la m\u00e9thode qui va avec. Un outil mal calibr\u00e9 ne donne rien. Une agence s\u00e9rieuse fournit l\u0027outil d\u00e9j\u00e0 param\u00e9tr\u00e9, avec les workflows en place.',
  },
  {
    question: 'Quel est le risque principal avec un setter freelance ?',
    answer:
      'Le risque num\u00e9ro un : la d\u00e9pendance \u00e0 une seule personne. Si le freelance tombe malade, part en vacances ou arr\u00eate sa mission, votre prospection s\u0027arr\u00eate avec lui. Il n\u0027y a pas de backup. Avec une agence, un setter de remplacement prend le relais en quelques jours. Le deuxi\u00e8me risque : un freelance sans m\u00e9thode \u00e9prouv\u00e9e va t\u00e2tonner pendant 2 \u00e0 3 mois avant de trouver le bon angle.',
  },
  {
    question: 'Combien de temps pour voir les premiers r\u00e9sultats ?',
    answer:
      'Avec une agence structur\u00e9e, les premiers RDV arrivent en 2 \u00e0 3 semaines apr\u00e8s le d\u00e9marrage. Le calibrage initial (ICP, messages, ciblage) prend 1 \u00e0 2 semaines, puis les prises de contact partent. Avec un freelance, comptez plut\u00f4t 4 \u00e0 6 semaines si vous devez lui fournir la m\u00e9thode et les outils. Si le freelance est exp\u00e9riment\u00e9 et autonome, le d\u00e9lai se rapproche de celui d\u0027une agence.',
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
      name: 'Agence setting LinkedIn vs freelance',
      item: 'https://www.setting.live/ressources/agence-setting-linkedin-vs-freelance',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AgenceSettingLinkedinVsFreelancePage() {
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
          <nav aria-label="Fil d&apos;Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Agence setting LinkedIn vs freelance</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Comparatif &middot; Setting
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Agence setting LinkedIn vs setter freelance : le bon choix selon votre situation
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Les deux options fonctionnent. Mais pas pour les m&ecirc;mes profils, pas au m&ecirc;me prix,
              et pas avec les m&ecirc;mes risques. Voici comment trancher.
            </p>
            <AuthorBlock date="2026-03-25" readTime="9 min de lecture" dateLabel="25 mars 2026" updatedDate="2026-03-25" />
          </header>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Agence de setting vs setter freelance : quelle diff&eacute;rence ?
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
              Une <strong className="text-text-primary">agence de setting</strong> fournit un package complet :
              la m&eacute;thode de prospection, les outils (Sales Navigator, CRM, enrichissement, scoring IA),
              un setter form&eacute;, et la supervision de la campagne. Vous recevez des rendez-vous dans votre
              agenda. Le reste est g&eacute;r&eacute; pour vous.
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Un <strong className="text-text-primary">setter freelance</strong> fournit l&apos;ex&eacute;cution.
              Il envoie les messages, qualifie les r&eacute;ponses, booke les RDV. Mais la m&eacute;thode, les
              outils, l&apos;onboarding et le suivi sont &agrave; votre charge. C&apos;est vous qui pilotez.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '500\u20131 200 \u20ac/mois', label: 'co\u00fbt freelance (hors outils)' },
              { stat: '1 000\u20133 000 \u20ac/mois', label: 'co\u00fbt agence (tout inclus)' },
              { stat: '2\u20133 mois', label: 'temps de calibration moyen' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 — Freelance */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que vous obtenez avec un setter freelance
              </h2>
              <p className="mb-4">
                Le co&ucirc;t est plus bas. La relation est directe. Vous choisissez la personne,
                vous n&eacute;gociez le tarif, vous d&eacute;cidez du rythme.
              </p>
              <p className="mb-4">
                Un bon setter freelance facture entre 500 et 1 200 &euro; par mois.
                Certains travaillent &agrave; la prime par RDV (50 &agrave; 150 &euro; par rendez-vous livr&eacute;).
                D&apos;autres combinent fixe et variable. Le mod&egrave;le est flexible.
              </p>
              <p className="mb-4">
                Mais il y a une contrepartie nette : c&apos;est &agrave; vous de fournir tout le reste.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'La m\u00e9thode',
                    desc: 'Quel message envoyer ? \u00c0 quel profil ? Dans quel ordre ? Si vous n\u0027avez pas de process de prospection LinkedIn \u00e9prouv\u00e9, le freelance va t\u00e2tonner. Et vous allez t\u00e2tonner avec lui.',
                  },
                  {
                    title: 'Les outils',
                    desc: 'Sales Navigator (100 \u20ac/mois), outils d\u0027enrichissement, CRM, scoring. Comptez 150 \u00e0 300 \u20ac/mois en plus du tarif du setter. Ce co\u00fbt est souvent oubli\u00e9 dans la comparaison.',
                  },
                  {
                    title: 'L\u0027onboarding',
                    desc: 'Vous devez former le freelance sur votre offre, votre ICP, vos arguments. Comptez 2 \u00e0 4 semaines avant qu\u0027il soit op\u00e9rationnel. C\u0027est votre temps, pas le sien.',
                  },
                  {
                    title: 'La supervision',
                    desc: 'Qui v\u00e9rifie la qualit\u00e9 des messages ? Qui ajuste le ciblage quand les r\u00e9ponses baissent ? C\u0027est vous. Pr\u00e9voyez 2 \u00e0 3 heures par semaine de suivi.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">&rarr;</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  En r&eacute;sum&eacute;
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Si vous savez d&eacute;j&agrave; prospecter sur LinkedIn et que vous avez un process qui
                  tourne, le freelance est une option rentable. Si vous d&eacute;couvrez le{' '}
                  <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting</a>,
                  vous allez perdre 2 &agrave; 3 mois &agrave; construire la m&eacute;thode en m&ecirc;me
                  temps que le freelance essaie de l&apos;appliquer.
                </p>
              </div>
            </section>

            {/* Section 2 — Agence */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que vous obtenez avec une agence de setting
              </h2>
              <p className="mb-4">
                Le prix est plus &eacute;lev&eacute;. C&apos;est normal : vous payez un service, pas
                juste une paire de mains. Voici ce qui est inclus dans un programme d&apos;agence structur&eacute;.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'M\u00e9thode fournie',
                    desc: 'S\u00e9quences de messages test\u00e9es, scripts de qualification, logique de relance. Vous ne partez pas de z\u00e9ro. L\u0027agence applique ce qui fonctionne d\u00e9j\u00e0 sur des dizaines de campagnes.',
                  },
                  {
                    title: 'Outils inclus',
                    desc: 'Sales Navigator, enrichissement, CRM, scoring IA. Pas de licence \u00e0 g\u00e9rer de votre c\u00f4t\u00e9. Tout est configur\u00e9 et interconnect\u00e9 avant le lancement.',
                  },
                  {
                    title: 'Supervision et calibration',
                    desc: 'Un responsable de campagne suit les KPIs chaque semaine. Les messages sont ajust\u00e9s en continu. Le ciblage \u00e9volue selon les r\u00e9sultats. Vous n\u0027avez pas \u00e0 jouer le r\u00f4le de manager.',
                  },
                  {
                    title: 'Remplacement setter',
                    desc: 'Si le setter ne convient pas ou s\u0027absente, l\u0027agence le remplace en quelques jours. Pas de trou dans la prospection. C\u0027est l\u0027un des avantages les plus sous-estim\u00e9s.',
                  },
                  {
                    title: 'Garantie r\u00e9sultats',
                    desc: 'Les agences s\u00e9rieuses s\u0027engagent sur un minimum de RDV qualifi\u00e9s par mois. Chez Setting, c\u0027est 5 RDV minimum. Si le seuil n\u0027est pas atteint, la diff\u00e9rence n\u0027est pas factur\u00e9e.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">&rarr;</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  En r&eacute;sum&eacute;
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Vous recevez des rendez-vous qualifi&eacute;s dans votre agenda. Le reste est g&eacute;r&eacute; :
                  messages, ciblage, outils, ajustements. Le co&ucirc;t est plus &eacute;lev&eacute;, mais le temps
                  que vous y passez tombe &agrave; moins d&apos;une heure par semaine.
                </p>
              </div>
            </section>

            {/* Section 3 — Comparatif point par point */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comparatif point par point
              </h2>
              <p className="mb-6">
                Les deux options c&ocirc;te &agrave; c&ocirc;te, sur les crit&egrave;res qui comptent pour d&eacute;cider.
              </p>

              {/* Semantic HTML table for AI / machine readability */}
              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm text-left font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="py-3 px-4 text-text-muted font-semibold">Freelance</th>
                      <th className="py-3 px-4 text-[#C87533] font-semibold">Agence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Co&ucirc;t mensuel</td>
                      <td className="py-3 px-4 text-text-primary">500–1 200 &euro; + outils</td>
                      <td className="py-3 px-4 text-text-primary">1 000–3 000 &euro; tout inclus</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Onboarding</td>
                      <td className="py-3 px-4 text-text-primary">2–4 semaines, vous g&eacute;rez</td>
                      <td className="py-3 px-4 text-text-primary">1–2 semaines, g&eacute;r&eacute; pour vous</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">M&eacute;thode et outils</td>
                      <td className="py-3 px-4 text-text-primary">&Agrave; votre charge</td>
                      <td className="py-3 px-4 text-text-primary">Fournis et configur&eacute;s</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Remplacement setter</td>
                      <td className="py-3 px-4 text-text-primary">Vous recommencez</td>
                      <td className="py-3 px-4 text-text-primary">Backup setter en quelques jours</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Scalabilit&eacute;</td>
                      <td className="py-3 px-4 text-text-primary">Trouver un autre freelance</td>
                      <td className="py-3 px-4 text-text-primary">Ajouter un setter au programme</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Garantie r&eacute;sultats</td>
                      <td className="py-3 px-4 text-text-primary">Rare</td>
                      <td className="py-3 px-4 text-text-primary">Souvent incluse (5 RDV min chez Setting)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-6">
                <div className="grid grid-cols-3 bg-bg-secondary border-b border-white/[0.06]">
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    Crit&egrave;re
                  </div>
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary border-l border-white/[0.06]">
                    Freelance
                  </div>
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent border-l border-white/[0.06]">
                    Agence
                  </div>
                </div>
                {[
                  {
                    critere: 'Co\u00fbt mensuel',
                    freelance: '500\u20131 200 \u20ac + outils',
                    agence: '1 000\u20133 000 \u20ac tout inclus',
                  },
                  {
                    critere: 'Onboarding',
                    freelance: '2\u20134 semaines, vous g\u00e9rez',
                    agence: '1\u20132 semaines, g\u00e9r\u00e9 pour vous',
                  },
                  {
                    critere: 'M\u00e9thode et outils',
                    freelance: '\u00c0 votre charge',
                    agence: 'Fournis et configur\u00e9s',
                  },
                  {
                    critere: 'Remplacement setter',
                    freelance: 'Vous recommencez',
                    agence: 'Backup setter en quelques jours',
                  },
                  {
                    critere: 'Scalabilit\u00e9',
                    freelance: 'Trouver un autre freelance',
                    agence: 'Ajouter un setter au programme',
                  },
                  {
                    critere: 'Garantie r\u00e9sultats',
                    freelance: 'Rare',
                    agence: 'Souvent incluse (5 RDV min chez Setting)',
                  },
                ].map(({ critere, freelance, agence }, i) => (
                  <div
                    key={critere}
                    className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-secondary/40'}`}
                  >
                    <div className="px-4 py-4 font-sans text-sm text-text-secondary leading-snug">
                      {critere}
                    </div>
                    <div className="px-4 py-4 font-sans text-sm text-text-secondary leading-snug border-l border-white/[0.06]">
                      {freelance}
                    </div>
                    <div className="px-4 py-4 font-sans text-sm text-text-primary leading-snug border-l border-white/[0.06]">
                      {agence}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Le tableau r&eacute;sume les diff&eacute;rences structurelles. Mais le bon choix d&eacute;pend
                de votre situation concr&egrave;te. Voici les profils types.
              </p>
            </section>

            {/* Section 4 — Quand choisir un freelance */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand choisir un setter freelance
              </h2>
              <p className="mb-4">
                Le freelance est le bon choix si vous cochez la plupart de ces cases.
                Pas toutes. Mais au moins trois sur quatre.
              </p>

              <div className="space-y-3 my-6">
                {[
                  'Vous avez d\u00e9j\u00e0 un process de prospection LinkedIn qui fonctionne. Les messages sont \u00e9crits, le ciblage est d\u00e9fini, les KPIs sont clairs.',
                  'Vous connaissez votre ICP sur le bout des doigts. Vous savez \u00e0 qui parler, avec quels arguments, et ce qui d\u00e9clenche un RDV.',
                  'Vous avez le temps de manager quelqu\u0027un. 2 \u00e0 3 heures par semaine pour v\u00e9rifier les messages, ajuster le ciblage et suivre les r\u00e9sultats.',
                  'Votre budget mensuel est sous 800 \u20ac. \u00c0 ce tarif, une agence n\u0027est pas viable. Un setter freelance peut d\u00e9livrer.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5 text-sm font-semibold">&rarr;</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <p>
                Si vous &ecirc;tes dans cette configuration, un freelance bien choisi va vous co&ucirc;ter
                moins cher et fonctionner correctement. L&apos;article sur le{' '}
                <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline transition-colors">guide complet du setter B2B</a>{' '}
                d&eacute;taille les mod&egrave;les de r&eacute;mun&eacute;ration possibles.
              </p>
            </section>

            {/* Section 5 — Quand choisir une agence */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand choisir une agence de setting
              </h2>
              <p className="mb-4">
                L&apos;agence est le bon choix dans des situations diff&eacute;rentes.
                G&eacute;n&eacute;ralement, quand vous voulez des r&eacute;sultats sans g&eacute;rer
                le quotidien de la prospection.
              </p>

              <div className="space-y-3 my-6">
                {[
                  'Vous partez de z\u00e9ro en setting LinkedIn. Pas de m\u00e9thode, pas de scripts, pas d\u0027exp\u00e9rience. L\u0027agence fournit tout cela d\u00e8s le d\u00e9marrage.',
                  'Vous n\u0027avez pas le temps de superviser un freelance. Vous \u00eates fondateur, vous g\u00e9rez d\u00e9j\u00e0 le produit, les clients et les ops. La prospection doit tourner sans vous.',
                  'Vous voulez une garantie sur les r\u00e9sultats. Un nombre minimum de RDV qualifi\u00e9s par mois, avec un engagement mesurable.',
                  'Votre offre d\u00e9passe 2 000 \u20ac de panier moyen. Le co\u00fbt de l\u0027agence est absorb\u00e9 d\u00e8s 1 \u00e0 2 deals par mois. Le ROI est rapide.',
                  'Vous voulez scaler. Passer de 5 \u00e0 15 RDV par mois en ajoutant un setter, sans recommencer l\u0027onboarding.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5 text-sm font-semibold">&rarr;</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <p>
                Si vous h&eacute;sitez encore, posez-vous une seule question : avez-vous le temps
                et la comp&eacute;tence pour piloter la prospection vous-m&ecirc;me ? Si la r&eacute;ponse
                est non, l&apos;agence va vous faire gagner 2 &agrave; 3 mois de calibration.
                Les <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs de Setting</a> sont
                d&eacute;taill&eacute;s sur la page d&eacute;di&eacute;e.
              </p>
            </section>

            {/* Section 6 — Le troisième chemin */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le troisi&egrave;me chemin : le setter interne
              </h2>
              <p className="mb-4">
                Il existe une troisi&egrave;me option : recruter un setter (ou SDR) en interne.
                Salaire brut + charges patronales, c&apos;est un budget de 40 000 &agrave; 60 000 &euro;
                par an selon le profil. Plus les outils. Plus le management.
              </p>
              <p className="mb-4">
                L&apos;avantage : un contr&ocirc;le total sur la personne et une connaissance produit
                qui s&apos;accumule avec le temps. L&apos;inconv&eacute;nient : le co&ucirc;t est
                3 &agrave; 5 fois plus &eacute;lev&eacute; qu&apos;une agence, et la p&eacute;riode
                de ramp-up dure 3 &agrave; 6 mois.
              </p>
              <p>
                Ce choix est pertinent si vous avez le volume et la structure pour justifier un poste
                &agrave; temps plein. On a d&eacute;taill&eacute; le comparatif dans l&apos;article{' '}
                <a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">SDR interne vs externalis&eacute;</a>,
                avec les vrais chiffres c&ocirc;t&eacute; employeur.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes
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

          </article>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/ressources/comment-devenir-setter-b2b', label: "Devenir setter ou closer B2B : le guide complet" },
                { href: '/externaliser-prospection-linkedin', label: 'SDR interne vs externalis\u00e9 : le comparatif co\u00fbt r\u00e9el' },
                { href: '/tarifs', label: 'Tarifs Setting : forfaits et garantie r\u00e9sultats' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Tester le setting LinkedIn avec une agence, sans engagement
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Programme de <a href="/setting" className="text-accent hover:underline transition-colors">setting LinkedIn</a> externalis&eacute;.
              M&eacute;thode, outils et setter inclus. Op&eacute;rationnel en 2 semaines.
              Garantie 5 RDV qualifi&eacute;s minimum par mois. R&eacute;siliation libre.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un &eacute;change d&eacute;couverte &rarr;
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
