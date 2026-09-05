import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn : la m&eacute;thode pour g&eacute;n&eacute;rer des RDV qualifi&eacute;s | Setting',
  description:
    'Le setting commercial LinkedIn combine d&eacute;tection de signaux, qualification humaine et messages contextualis&eacute;s pour g&eacute;n&eacute;rer 3 &agrave; 5 RDV qualifi&eacute;s par semaine.',
  openGraph: {
    title: 'Setting commercial LinkedIn : m&eacute;thode compl&egrave;te pour g&eacute;n&eacute;rer des RDV qualifi&eacute;s',
    description:
      'Le setting sur LinkedIn n\u2019est pas de la prospection automatis&eacute;e. D&eacute;couvrez la m&eacute;thode en 9 &eacute;tapes, les outils et les signaux qui g&eacute;n&egrave;rent 20 &agrave; 35 % de taux de r&eacute;ponse.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-commercial-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-commercial-linkedin',
      'x-default': 'https://www.setting.live/ressources/setting-commercial-linkedin',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting commercial LinkedIn : m\u00e9thode compl\u00e8te pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s',
    description: 'Le setting sur LinkedIn n\u2019est pas de la prospection automatis\u00e9e. D\u00e9couvrez la m\u00e9thode en 9 \u00e9tapes, les outils et les signaux qui g\u00e9n\u00e8rent 20 \u00e0 35 % de taux de r\u00e9ponse.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-commercial-linkedin',
  headline: 'Setting commercial LinkedIn : la m\u00e9thode pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s',
  description:
    'Le setting commercial LinkedIn est une m\u00e9thode de prospection B2B qui combine d\u00e9tection de signaux, qualification humaine et messages contextualis\u00e9s. 9 \u00e9tapes, 4 outils, premiers RDV en 3 semaines.',
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
  wordCount: 3800,
  url: 'https://www.setting.live/ressources/setting-commercial-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-commercial-linkedin',
  },
  image: 'https://www.setting.live/ressources/setting-commercial-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
}

const faqItems = [
  {
    question: 'Le setting LinkedIn fonctionne-t-il dans tous les secteurs ?',
    answer:
      'Non. Le setting LinkedIn fonctionne l\u00e0 o\u00f9 les acheteurs B2B sont actifs sur la plateforme : conseil, SaaS, formation, coaching, agences, recrutement. Il fonctionne moins bien dans les secteurs o\u00f9 les d\u00e9cideurs ne sont pas sur LinkedIn (artisanat, commerce de proximit\u00e9, B2C). Le premier crit\u00e8re \u00e0 v\u00e9rifier : est-ce que vos prospects publient, commentent ou r\u00e9agissent r\u00e9guli\u00e8rement sur LinkedIn ?',
  },
  {
    question: 'Combien de messages un setter envoie-t-il par semaine ?',
    answer:
      'En phase de calibration (semaines 1 \u00e0 4), entre 25 et 40 messages par semaine. En r\u00e9gime de croisi\u00e8re, entre 50 et 75. Chaque message est r\u00e9dig\u00e9 individuellement \u00e0 partir d\u2019un signal identifi\u00e9 sur le profil du prospect. Ce n\u2019est pas du volume : un setter qui envoie 200 messages g\u00e9n\u00e9riques par semaine fait de l\u2019automatisation d\u00e9guis\u00e9e, pas du setting.',
  },
  {
    question: 'Faut-il un compte LinkedIn Premium pour faire du setting ?',
    answer:
      'Sales Navigator (environ 100 \u20ac/mois) est recommand\u00e9 pour le ciblage avanc\u00e9 : filtres par fonction, taille d\u2019entreprise, anciennet\u00e9 dans le poste, changements r\u00e9cents. Un compte gratuit permet de faire du setting sur les signaux inbound (r\u00e9actions \u00e0 vos posts), mais limite s\u00e9rieusement la capacit\u00e9 de recherche outbound.',
  },
  {
    question: 'Quelle est la diff\u00e9rence entre le setting LinkedIn et la prospection automatis\u00e9e ?',
    answer:
      'La prospection automatis\u00e9e envoie des s\u00e9quences pr\u00e9-\u00e9crites \u00e0 des listes statiques. Le setting identifie un signal pr\u00e9cis sur chaque prospect (post, commentaire, changement de poste), puis r\u00e9dige un message ancr\u00e9 sur ce signal. Le taux de r\u00e9ponse passe de 2-5 % (automatisation) \u00e0 20-35 % (setting). La diff\u00e9rence n\u2019est pas le canal, c\u2019est la m\u00e9thode.',
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
      name: 'Setting commercial LinkedIn',
      item: 'https://www.setting.live/ressources/setting-commercial-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingCommercialLinkedInPage() {
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
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Setting commercial LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting &middot; LinkedIn
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting commercial LinkedIn : la m&eacute;thode pour g&eacute;n&eacute;rer des RDV qualifi&eacute;s
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le setting sur LinkedIn n&apos;est pas de la prospection automatis&eacute;e. C&apos;est une m&eacute;thode
              pr&eacute;cise qui combine d&eacute;tection de signaux, qualification humaine et messages
              contextualis&eacute;s. Pas de s&eacute;quences automatiques. Pas de templates. Un humain
              qui lit chaque profil, identifie un fait pr&eacute;cis, et &eacute;crit un message
              ancr&eacute; dessus.
            </p>
            <AuthorBlock date="2026-03-25" readTime="18 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* Definition block — GEO */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Setting commercial LinkedIn
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Approche de prospection B2B o&ugrave; un setter form&eacute; identifie manuellement
              des signaux d&apos;achat sur LinkedIn (posts, commentaires, changements de poste,
              actualit&eacute;s entreprise), qualifie chaque profil, et r&eacute;dige des messages
              contextualis&eacute;s ancr&eacute;s sur ces signaux. L&apos;objectif est la prise de
              rendez-vous qualifi&eacute; pour le closeur. Ce n&apos;est ni de l&apos;automatisation,
              ni de l&apos;outreach de masse.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '20\u201335 %', label: 'taux de r\u00e9ponse sur signaux qualifi\u00e9s' },
              { stat: '3 sem.', label: 'avant les premiers RDV' },
              { stat: '9', label: '\u00e9tapes de la d\u00e9tection au RDV' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: "Qu'est-ce que le setting commercial sur LinkedIn" },
                { id: 'pourquoi-linkedin', label: 'Pourquoi LinkedIn est le canal id\u00e9al pour le setting' },
                { id: 'etapes', label: 'Les 9 \u00e9tapes du setting LinkedIn' },
                { id: 'outils', label: 'Les outils du setter LinkedIn' },
                { id: 'cible', label: '\u00c0 qui s\u2019adresse le setting LinkedIn' },
                { id: 'differences', label: 'Ce qui distingue le setting de la prospection classique' },
                { id: 'faq', label: 'Questions fr\u00e9quentes' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${id}`}
                    className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* Section 1 — Qu'est-ce que le setting commercial sur LinkedIn */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Qu&apos;est-ce que le setting commercial sur LinkedIn
              </h2>
              <p className="mb-4">
                Le setting commercial sur LinkedIn est une approche o&ugrave; un setter form&eacute;
                identifie manuellement des signaux d&apos;achat sur la plateforme, qualifie chaque
                profil, et r&eacute;dige un message contextualis&eacute; ancr&eacute; sur un fait
                pr&eacute;cis. L&apos;objectif est simple : obtenir un rendez-vous qualifi&eacute;
                pour le closeur.
              </p>
              <p className="mb-4">
                Ce n&apos;est pas de l&apos;automatisation. Ce n&apos;est pas de l&apos;outreach
                de masse avec des templates &agrave; variables. Chaque message est &eacute;crit
                par un humain, apr&egrave;s lecture du profil et des publications r&eacute;centes
                du prospect. Le setter ne contacte pas les gens au hasard. Il contacte ceux qui
                ont montr&eacute; quelque chose.
              </p>
              <p className="mb-4">
                Un commentaire sous un post li&eacute; &agrave; votre th&eacute;matique. Un
                changement de poste. Une r&eacute;action &agrave; un article sur un sujet
                adjacent &agrave; votre offre. Ces signaux sont la mati&egrave;re premi&egrave;re
                du setter. Sans signal, pas de message.
              </p>
              <p className="mb-4">
                Pour comprendre le{' '}
                <a href="/setting" className="text-accent hover:underline transition-colors">setting commercial dans sa globalit&eacute;</a>,
                consultez le guide complet. L&apos;article{' '}
                <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial B2B</a>{' '}
                couvre la m&eacute;thode dans son ensemble. Ici, on se concentre sur LinkedIn
                comme canal d&apos;ex&eacute;cution.
              </p>
              <p>
                La diff&eacute;rence entre un setter LinkedIn et un SDR qui envoie des
                InMails : le setter lit avant d&apos;&eacute;crire. Le SDR &eacute;crit avant
                de lire. Cette inversion change tout. Le taux de r&eacute;ponse passe de 2-5 %
                &agrave; 20-35 %.
              </p>
            </section>

            {/* Section 2 — Pourquoi LinkedIn est le canal idéal */}
            <section id="pourquoi-linkedin" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi LinkedIn est le canal id&eacute;al pour le setting
              </h2>
              <p className="mb-5">
                Trois raisons font de LinkedIn le meilleur canal pour le setting commercial B2B.
                Aucun autre canal ne r&eacute;unit ces trois conditions.
              </p>

              <div className="space-y-5 mb-8">
                <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                  <div className="bg-bg-secondary px-5 py-3 border-b border-white/[0.06]">
                    <p className="font-sans font-semibold text-text-primary text-sm">Les signaux sont publics</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Sur LinkedIn, vos prospects publient des posts, commentent des articles,
                      r&eacute;agissent &agrave; des publications, changent de poste, annoncent des
                      recrutements. Chacune de ces actions est un{' '}
                      <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal d&apos;achat</a>{' '}
                      potentiel. En cold email, vous n&apos;avez aucun signal. Au t&eacute;l&eacute;phone,
                      vous interrompez sans contexte. Sur LinkedIn, le contexte est l&agrave;, visible,
                      gratuit.
                    </p>
                  </div>
                </div>

                <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                  <div className="bg-bg-secondary px-5 py-3 border-b border-white/[0.06]">
                    <p className="font-sans font-semibold text-text-primary text-sm">Le contexte professionnel est visible</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Fonction, entreprise, taille d&apos;&eacute;quipe, secteur, anciennet&eacute;
                      dans le poste. Tout est sur le profil. Le setter sait en 30 secondes si le
                      prospect correspond &agrave; l&apos;ICP. Pas besoin de bases de donn&eacute;es
                      externes. Pas besoin de scraper des emails. L&apos;information de qualification
                      est native &agrave; la plateforme.
                    </p>
                  </div>
                </div>

                <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                  <div className="bg-bg-secondary px-5 py-3 border-b border-white/[0.06]">
                    <p className="font-sans font-semibold text-text-primary text-sm">Acc&egrave;s direct aux d&eacute;cideurs</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Pas de standard t&eacute;l&eacute;phonique. Pas d&apos;assistante qui filtre.
                      Pas de spam filter qui bloque votre email. Sur LinkedIn, le message arrive
                      directement dans la bo&icirc;te du d&eacute;cideur. Un DG d&apos;une PME de
                      50 salari&eacute;s lit ses messages LinkedIn. Il ne lit pas les cold emails
                      qui arrivent dans son dossier spam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                  Comparaison rapide avec les autres canaux
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le cold email a un taux d&apos;ouverture de 15-25 % et un taux de r&eacute;ponse
                  de 1-3 %. Le t&eacute;l&eacute;phone a un taux de d&eacute;croch&eacute; de 5-15 %
                  et pas de contexte pour personnaliser. Le setting LinkedIn sur signaux obtient
                  20-35 % de taux de r&eacute;ponse parce que le message arrive au bon moment,
                  &agrave; la bonne personne, avec le bon contexte. La{' '}
                  <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline transition-colors">prospection LinkedIn B2B</a>{' '}
                  classique (sans signal) se situe entre les deux, autour de 5-10 %.
                </p>
              </div>
            </section>

            {/* Section 3 — Les 9 étapes */}
            <section id="etapes" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 9 &eacute;tapes du setting LinkedIn
              </h2>
              <p className="mb-6">
                Le setting LinkedIn suit un pipeline en 9 &eacute;tapes, organis&eacute; en trois
                phases : D&eacute;tection, Qualification, Conversion. Chaque &eacute;tape a un
                objectif pr&eacute;cis. La{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">m&eacute;thode compl&egrave;te</a>{' '}
                d&eacute;taille chaque &eacute;tape. Voici la vue d&apos;ensemble.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Phase 1 &mdash; D&eacute;tection
                </p>
                <div className="space-y-3">
                  {[
                    { num: '1', text: "Monitorer les signaux inbound : qui a r\u00e9agi \u00e0 vos posts, comment\u00e9 un contenu li\u00e9 \u00e0 votre th\u00e9matique, lik\u00e9 une publication pertinente." },
                    { num: '2', text: "Monitorer les signaux outbound : qui a interagi avec les publications de comptes concurrents ou compl\u00e9mentaires que vous surveillez." },
                    { num: '3', text: "Rep\u00e9rer les signaux de changement : nouvelle prise de poste, recrutement en cours, lev\u00e9e de fonds, croissance d'\u00e9quipe." },
                  ].map(({ num, text }) => (
                    <div key={num} className="flex gap-3">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{num}.</span>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Phase 2 &mdash; Qualification
                </p>
                <div className="space-y-3">
                  {[
                    { num: '4', text: "V\u00e9rifier la correspondance ICP : fonction, secteur, taille d'entreprise, offre \u00e0 plus de 2 000 \u20ac. Si le profil ne correspond pas, on passe." },
                    { num: '5', text: "Analyser le profil en profondeur : lire les 3 \u00e0 5 derniers posts, identifier le contexte actuel, rep\u00e9rer un angle d'accroche pr\u00e9cis." },
                    { num: '6', text: "Classer le prospect par niveau de maturit\u00e9 : de froid (aucun signal direct) \u00e0 chaud (a exprim\u00e9 un besoin explicite)." },
                  ].map(({ num, text }) => (
                    <div key={num} className="flex gap-3">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{num}.</span>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Phase 3 &mdash; Conversion
                </p>
                <div className="space-y-3">
                  {[
                    { num: '7', text: "R\u00e9diger le premier message : ancr\u00e9 sur le signal identifi\u00e9, 3 \u00e0 5 phrases maximum, aucun pitch. Le message ouvre une conversation, il ne vend rien." },
                    { num: '8', text: "G\u00e9rer la conversation : r\u00e9pondre aux questions, approfondir le contexte, qualifier plus finement. Chaque \u00e9change est humain, pas automatis\u00e9." },
                    { num: '9', text: "Proposer le rendez-vous au bon moment : quand le prospect a montr\u00e9 un int\u00e9r\u00eat explicite. Passer le lead au closeur avec le contexte complet." },
                  ].map(({ num, text }) => (
                    <div key={num} className="flex gap-3">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{num}.</span>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5">
                Ce pipeline n&apos;est pas th&eacute;orique. C&apos;est ce qu&apos;un setter
                ex&eacute;cute chaque jour. Les d&eacute;tails de chaque &eacute;tape, avec les
                scripts et les exemples, sont dans la{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">page m&eacute;thode</a>.
              </p>
            </section>

            {/* Section 4 — Les outils du setter LinkedIn */}
            <section id="outils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les outils du setter LinkedIn
              </h2>
              <p className="mb-5">
                Le setting LinkedIn repose sur quatre outils. Chacun a un r&ocirc;le
                pr&eacute;cis dans le pipeline. Aucun ne remplace le setter. Ils acc&eacute;l&egrave;rent
                son travail.
              </p>

              <div className="space-y-5">
                {[
                  {
                    tool: 'Sales Navigator',
                    role: 'Ciblage et filtrage',
                    detail: "L'outil premium de LinkedIn (~100 \u20ac/mois) permet de construire des listes de prospects selon des crit\u00e8res pr\u00e9cis : fonction, secteur, taille d'entreprise, anciennet\u00e9 dans le poste, changements r\u00e9cents. C'est le point de d\u00e9part du ciblage. Sales Navigator d\u00e9finit qui surveiller.",
                  },
                  {
                    tool: 'Reactin',
                    role: 'Signaux inbound',
                    detail: "Connect\u00e9 \u00e0 votre compte LinkedIn, Reactin recense qui a interact\u00e9 avec vos posts : likes, commentaires, r\u00e9actions. Chaque interaction est un signal. Sur un compte qui publie 2 \u00e0 3 fois par semaine, \u00e7a g\u00e9n\u00e8re 15 \u00e0 50 signaux par semaine. Le setter filtre ensuite selon l'ICP.",
                  },
                  {
                    tool: 'Spyer',
                    role: 'Signaux tiers (outbound)',
                    detail: "Vous d\u00e9finissez une liste de comptes \u00e0 surveiller : concurrents, influenceurs du secteur, comptes compl\u00e9mentaires. Spyer vous alerte quand des profils int\u00e9ressants interagissent avec leur contenu. Ces prospects n'ont pas encore interagi avec vous, mais ils ont montr\u00e9 un int\u00e9r\u00eat pour votre th\u00e9matique.",
                  },
                  {
                    tool: 'Claude (skill maison)',
                    role: 'Co-r\u00e9daction des messages',
                    detail: "Un skill IA construit sur le contexte sp\u00e9cifique du client : offre, march\u00e9, objections connues, formulations qui ont fonctionn\u00e9. Claude propose un draft pour chaque message. Le setter lit, ajuste, valide. Aucun message ne part sans validation humaine. Le journal de bord enrichit le skill chaque semaine.",
                  },
                ].map(({ tool, role, detail }) => (
                  <div key={tool} className="border border-white/[0.06] rounded-xl overflow-hidden">
                    <div className="bg-bg-secondary px-5 py-3 border-b border-white/[0.06] flex items-center justify-between gap-4">
                      <p className="font-sans font-semibold text-text-primary text-sm">{tool}</p>
                      <p className="font-sans text-xs text-accent">{role}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 — À qui s'adresse le setting LinkedIn */}
            <section id="cible" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                &Agrave; qui s&apos;adresse le setting LinkedIn
              </h2>
              <p className="mb-6">
                Le setting LinkedIn n&apos;est pas pour tout le monde. Il fonctionne dans
                des conditions pr&eacute;cises. Voici qui en tire le plus de valeur, et qui
                devrait chercher autre chose.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Le setting LinkedIn est fait pour
                  </p>
                  <ul className="space-y-3 font-sans text-sm text-text-secondary">
                    {[
                      'Fondateurs B2B avec une offre \u00e0 plus de 2 000 \u20ac',
                      'Vendeurs d\u2019expertise : consultants, coachs, agences',
                      'Professionnels qui ont besoin de 3 \u00e0 5 RDV qualifi\u00e9s par semaine',
                      'Ceux qui n\u2019ont pas le temps de prospecter eux-m\u00eames',
                      'March\u00e9s o\u00f9 les d\u00e9cideurs sont actifs sur LinkedIn',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-accent shrink-0 mt-0.5">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
                    Le setting LinkedIn n&apos;est pas adapt&eacute; pour
                  </p>
                  <ul className="space-y-3 font-sans text-sm text-text-secondary">
                    {[
                      'Offres B2C ou vente aux particuliers',
                      'Offres low-ticket (moins de 500 \u20ac)',
                      'Mod\u00e8les bas\u00e9s sur le volume (e-commerce, marketplace)',
                      'Secteurs o\u00f9 les acheteurs ne sont pas sur LinkedIn',
                      'Ceux qui veulent des r\u00e9sultats en 48 heures',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-text-secondary/40 shrink-0 mt-0.5">&minus;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                Le point commun des profils pour lesquels le setting LinkedIn fonctionne :
                une offre &agrave; forte valeur, un cycle de vente qui passe par un appel, et
                des prospects qui utilisent LinkedIn de mani&egrave;re active. Si ces trois
                conditions sont r&eacute;unies, le setting est le canal le plus rentable.
              </p>
            </section>

            {/* Section 6 — Ce qui distingue le setting de la prospection classique */}
            <section id="differences" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce qui distingue le setting de la prospection classique
              </h2>
              <p className="mb-6">
                La prospection classique sur LinkedIn et le setting partagent le m&ecirc;me
                canal. Mais la m&eacute;thode est oppos&eacute;e. Voici les diff&eacute;rences
                concr&egrave;tes.
              </p>

              <div className="space-y-4">
                {/* Row 1 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Source de contact
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Prospection classique</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Listes statiques. Le commercial importe une base de contacts, applique
                        des filtres basiques et envoie &agrave; tout le monde. Le prospect n&apos;a
                        rien montr&eacute; avant d&apos;&ecirc;tre contact&eacute;.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting LinkedIn</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Signaux d&eacute;tect&eacute;s. Le setter contacte un prospect parce
                        qu&apos;il a fait quelque chose : un commentaire, une r&eacute;action,
                        un changement de poste. Le signal justifie le contact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Niveau de personnalisation
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Prospection classique</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Templates avec variables. Le pr&eacute;nom et le nom de l&apos;entreprise
                        changent. Le reste est identique pour 200 personnes. Les prospects le
                        rep&egrave;rent &agrave; la deuxi&egrave;me phrase.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting LinkedIn</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Message &eacute;crit sur mesure. La deuxi&egrave;me phrase mentionne un
                        fait pr&eacute;cis tir&eacute; du profil ou d&apos;un post r&eacute;cent.
                        Le prospect sait que quelqu&apos;un a pris le temps de lire ce qu&apos;il
                        publie.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Objectif de volume
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Prospection classique</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Maximiser le nombre de messages envoy&eacute;s. La logique est
                        statistique : si j&apos;envoie 500 messages, 2 % r&eacute;pondront,
                        &ccedil;a fait 10 r&eacute;ponses. Le volume compense la qualit&eacute;.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting LinkedIn</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Maximiser la qualification. 50 messages par semaine, mais chacun est
                        valid&eacute; sur un signal. Le taux de r&eacute;ponse est 5 &agrave; 10
                        fois sup&eacute;rieur. Moins de messages, plus de rendez-vous.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Validation humaine
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Prospection classique</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Automatis&eacute;e. Les s&eacute;quences tournent seules. Personne ne
                        relit les messages avant envoi. Les r&eacute;ponses sont g&eacute;r&eacute;es
                        par des chatbots ou des r&egrave;gles IF/THEN.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting LinkedIn</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        100 % valid&eacute;e par un humain. Le setter lit chaque draft propos&eacute;
                        par l&apos;IA, ajuste si besoin, et valide manuellement. Chaque r&eacute;ponse
                        re&ccedil;ue est trait&eacute;e par un humain. Pas d&apos;automate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes sur le setting commercial LinkedIn
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

          {/* Internal links block */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/methode/setting-linkedin', label: 'M\u00e9thode Setting LinkedIn : les 9 \u00e9tapes en d\u00e9tail' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : d\u00e9finition, m\u00e9thode et programme complet' },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te en 2026' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Scripts de setting LinkedIn : exemples et cadre complet' },
                { href: '/ressources/comment-prospecter-sur-linkedin', label: 'Setting humain vs automatisation LinkedIn' },
                { href: '/ressources/prospection-linkedin-b2b', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de r\u00e9ponses" },
                { href: '/ressources/comment-devenir-setter-b2b', label: 'Devenir setter ou closer B2B : le guide complet' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting LinkedIn
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez des RDV qualifi&eacute;s via LinkedIn ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              On construit le syst&egrave;me complet : strat&eacute;gie, ciblage, skill maison,
              setter d&eacute;di&eacute;, coaching closing. Les premiers rendez-vous arrivent
              d&egrave;s la troisi&egrave;me semaine. Un appel de 30 minutes pour voir si votre
              march&eacute; est compatible.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel gratuit &rarr;
            </ButtonGlow>
          </div>

          {/* Glossaire */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-5">
            <p className="font-sans text-sm text-text-muted">
              Setter, ICP, signal d&apos;achat, pipeline... Un terme vous &eacute;chappe ?{' '}
              <a href="/glossaire" className="text-accent hover:underline">Consultez le glossaire</a>.
            </p>
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
