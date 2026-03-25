import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Prospection LinkedIn B2B en 2026 | Setting",
  description: "Prospecter sur LinkedIn en B2B en 2026 : signaux d'achat, messages qui obtiennent des réponses, Sales Navigator et IA co-rédacteur.",
  openGraph: {
    title: "Prospection LinkedIn B2B en 2026 | Setting",
    description: "Signaux inbound et outbound, rédaction des messages, relances, qualification. Comment construire un système de prospection LinkedIn qui livre des RDV qualifiés semaine après semaine.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
      'x-default': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
  headline: "Prospection LinkedIn B2B : méthode complète en 2026",
  description:
    "Comment prospecter sur LinkedIn en B2B en 2026 : signaux d'achat, messages qui obtiennent des réponses, Sales Navigator, IA comme co-rédacteur. La méthode terrain.",
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
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
  },
  image: 'https://www.setting.live/ressources/prospection-linkedin-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 3500,
  about: [
    { '@type': 'Thing', name: 'Prospection LinkedIn B2B' },
    { '@type': 'Thing', name: 'Signaux d\'achat LinkedIn' },
  ],
}

const faqItems = [
  {
    question: "Combien de messages LinkedIn envoyer par semaine pour prospecter ?",
    answer:
      "En phase de calibration (mois 1–2) : 20 à 40 messages par semaine, majoritairement manuels, pour construire les références. En phase de scaling : 50 à 100 messages calibrés, avec un taux de réponse cible au-dessus de 15 %. Au-delà, la qualité se dégrade. LinkedIn limite aussi les connexions (environ 100 par semaine pour les comptes normaux).",
  },
  {
    question: "Faut-il avoir LinkedIn Premium ou Sales Navigator pour prospecter ?",
    answer:
      "LinkedIn gratuit suffit pour les signaux inbound (réactions à vos posts). Sales Navigator est indispensable pour le sourcing outbound structuré : filtres avancés, alertes de changement de poste, liste de comptes à monitorer. Le coût (~100 €/mois) est rentabilisé dès le premier RDV signé.",
  },
  {
    question: "La prospection LinkedIn fonctionne-t-elle pour tous les secteurs B2B ?",
    answer:
      "LinkedIn est efficace là où les décideurs sont actifs sur la plateforme : tech, SaaS, conseil, formation, immobilier commercial, finance d'entreprise, RH. Dans les secteurs où les décideurs ne sont pas sur LinkedIn (artisanat, petite industrie locale), l'approche reste limitée. Le test : votre ICP est-il actif et joignable sur LinkedIn ? Si oui, la méthode fonctionne.",
  },
  {
    question: "Comment qualifier un prospect avant de lui envoyer un message ?",
    answer:
      "Quatre critères de base : correspond-il à l'ICP (poste, secteur, taille) ? Y a-t-il un déclencheur récent (changement de poste, levée de fonds, recrutement) ? Le profil montre-t-il des signes d'intérêt actif (posts sur le sujet, engagement récent) ? A-t-on une connexion commune ? Répondre oui à 2 de ces 4 critères suffit pour justifier un message.",
  },
  {
    question: "Quelle est la différence entre prospection LinkedIn et cold email ?",
    answer:
      "LinkedIn permet d'accéder au contexte du prospect (posts, réactions, parcours) avant même de contacter — ce qui rend le premier message plus pertinent. Le cold email offre plus de volume mais moins de contexte. Les meilleurs systèmes combinent les deux : LinkedIn pour les prospects avec signaux, email pour le volume outbound sans signal.",
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
      name: "Prospection LinkedIn B2B",
      item: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProspectionLinkedInB2BPage() {
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
              <li className="text-text-primary">Prospection LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/setting" className="hover:underline transition-colors">Setting</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Prospection LinkedIn B2B : méthode complète en 2026
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La boîte de réception LinkedIn est saturée. Les décideurs reçoivent 15 messages
              de prospection par semaine. Ce qui fait la différence n&apos;est pas le talent rédactionnel —
              c&apos;est le contexte. Voici comment construire un système qui livre des RDV qualifiés
              semaine après semaine.
            </p>
            <AuthorBlock date="2026-03-18" readTime="13 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          <TldrBox>
            <p>La prospection LinkedIn en 2026, ce n&apos;est plus envoyer des messages &agrave; froid. Cet article explique la m&eacute;thode signal-based en 6 &eacute;tapes : d&eacute;tection des signaux d&apos;achat, ciblage ICP, r&eacute;daction des messages, relance et qualification. Taux de r&eacute;ponse vis&eacute; : 20-35&nbsp;%.</p>
          </TldrBox>

          {/* Bloc Définition */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              La <strong>prospection LinkedIn B2B signal-based</strong> consiste à détecter
              des comportements observables sur LinkedIn — likes, commentaires, interactions sur des comptes tiers —
              qui indiquent qu&apos;un prospect explore activement un sujet lié à votre offre,
              puis à utiliser ce contexte pour construire un premier message pertinent.
              Pas de froid pur. Pas d&apos;interruption. Un déclencheur, une approche, une conversation.
            </p>
          </div>

          {/* Bloc stats */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">&lt;&nbsp;3&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">
                Taux de réponse sans méthode
              </p>
            </div>
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">&gt;&nbsp;20&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">
                Avec signal + message calibré
              </p>
            </div>
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">Sem.&nbsp;1</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">
                Premiers RDV dès la semaine 1
              </p>
            </div>
          </div>

          {/* Section 1 — Pourquoi la prospection à froid ne fonctionne plus */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi la prospection LinkedIn à froid ne fonctionne plus
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Il y a cinq ans, envoyer 50 messages LinkedIn par semaine était une tactique viable.
              Les boîtes de réception étaient peu encombrées. Un message personnalisé avec le prénom
              et une phrase sur le poste obtenait facilement 8 à 10 % de réponse.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce n&apos;est plus le cas. Les décideurs B2B reçoivent en moyenne 15 messages de prospection
              par semaine. Ils ont développé un réflexe de filtre : dès les deux premières lignes,
              ils savent si le message a été envoyé à mille personnes ou réellement écrit pour eux.
              Et ils agissent en conséquence — c&apos;est l&apos;une des raisons pour lesquelles tant de <a href="/ressources/messages-linkedin-sans-reponse" className="text-accent hover:underline transition-colors">messages LinkedIn restent sans réponse</a>.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le plafond de la prospection froide sans signal est bas. Vous pouvez écrire les meilleurs
              messages du monde, peaufiner chaque phrase, tester dix variables — vous resterez autour
              de 2 à 3 % de taux de réponse. Pas parce que vos messages sont mauvais. Parce que
              le problème n&apos;est pas rédactionnel.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Ce qui différencie un message qui obtient une réponse, c&apos;est le contexte. Le prospect
              a posté quelque chose sur le sujet il y a trois jours. Il a commenté un post d&apos;un concurrent.
              Il vient de changer de poste et son profil indique qu&apos;il recrute. Ce sont des <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signaux d&apos;achat LinkedIn</a> qui créent
              une fenêtre d&apos;attention. Un message qui entre par cette fenêtre n&apos;est plus une interruption —
              c&apos;est une continuation de quelque chose qu&apos;il a lui-même commencé.
            </p>
          </section>

          {/* Section 2 — Les deux sources de prospects chauds */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les deux sources de prospects chauds sur LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Un prospect chaud n&apos;est pas nécessairement quelqu&apos;un qui vous connaît.
              C&apos;est quelqu&apos;un qui explore activement un sujet lié à votre offre.
              Sur LinkedIn, ces signaux d&apos;intérêt viennent de deux endroits distincts.
            </p>

            <div className="space-y-6">

              {/* Signal inbound */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">Signal inbound</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">
                    Votre contenu
                  </span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">
                    Le prospect a réagi à un de vos posts. Il a liké, commenté, ou partagé.
                    Il vous connaît au moins de vue. La relation de confiance est déjà amorcée.
                    Ce type de signal est le plus facile à exploiter — le contexte est explicite,
                    la fenêtre d&apos;attention est ouverte.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Outil :</strong>{' '}
                    Des outils comme Reactin surveillent automatiquement chaque interaction
                    sur vos posts et les classent par type de signal. Vous obtenez une liste
                    quotidienne de prospects à contacter, avec le contexte déjà prêt.
                  </p>
                </div>
              </div>

              {/* Signal outbound/tiers */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">Signal tiers</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">
                    Comptes surveillés
                  </span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">
                    Le prospect ne vous connaît pas encore. Mais il a interagi avec le contenu
                    d&apos;un autre compte que vous surveillez — un concurrent, un expert complémentaire,
                    un créateur de contenu sur votre sujet. Il a montré, ailleurs, qu&apos;il
                    cherche une réponse à un problème que vous résolvez.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary font-semibold">Exemple concret :</strong>{' '}
                    Vous vendez une formation au closing B2B. Vous surveillez 5 créateurs de contenu
                    qui publient sur la vente et la prospection. Un directeur commercial qui commente
                    &ldquo;on a exactement ce problème en ce moment&rdquo; sous un post sur les pipelines vides
                    est un prospect chaud — même s&apos;il ne vous suit pas.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Outil :</strong>{' '}
                    Des outils comme Spyer automatisent la surveillance des comptes tiers
                    et vous remontent les interactions pertinentes. Sans outil, vous en manquerez
                    la grande majorité — ces signaux disparaissent du fil en quelques heures.
                  </p>
                </div>
              </div>

            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Les deux flux se complètent. Aucun ne suffit seul.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                L&apos;inbound dépend de votre volume de publication — si vous ne postez pas,
                il se tarit. Le signal tiers fonctionne même sans contenu propre, mais nécessite
                une curation précise des comptes à surveiller. Un système mature utilise les deux.
              </p>
            </div>
            <p className="text-sm text-text-muted italic mt-2">
              Pour aller plus loin : <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline">Comment prospecter sur LinkedIn en 2026</a>
            </p>
          </section>

          <CtaArticle />

          {/* Section 3 — Sales Navigator */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Sales Navigator : comment cibler efficacement
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Sales Navigator n&apos;est pas un outil de prospection à froid. C&apos;est un outil de ciblage.
              La nuance est importante — elle détermine comment vous l&apos;utilisez.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Ce que Sales Navigator permet : filtrer par poste, secteur, taille d&apos;entreprise,
              zone géographique. Créer des listes de comptes à monitorer. Recevoir des alertes
              de changement de poste sur vos prospects prioritaires — l&apos;un des signaux d&apos;achat
              les plus forts qui existe, souvent ignoré. Sauvegarder des recherches et les
              exécuter automatiquement chaque semaine.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-5">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">Ce que Sales Navigator fait</p>
                <ul className="space-y-2">
                  {[
                    "Filtres avancés poste / secteur / taille / trigger",
                    "Alertes changement de poste sur vos cibles",
                    "Liste de comptes à surveiller",
                    "Profils hors réseau accessibles",
                    "Historique des contacts et notes",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                      <span className="text-accent shrink-0 mt-0.5">→</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-5">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">Ce qu&apos;il ne fait pas seul</p>
                <ul className="space-y-2">
                  {[
                    "Détecter les signaux d'intérêt actif",
                    "Surveiller les comptes tiers",
                    "Rédiger des messages adaptés au contexte",
                    "Qualifier la chaleur du prospect",
                    "Gérer les relances et le nurturing",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                      <span className="text-text-secondary/40 shrink-0 mt-0.5">–</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              La combinaison qui fonctionne : Sales Navigator pour construire une liste
              de profils qualifiés selon l&apos;ICP, puis les outils de signaux pour identifier
              lesquels sont actifs en ce moment. Vous n&apos;envoyez plus des messages à une liste —
              vous contactez des profils précis avec un contexte précis. Le taux de réponse
              suit mécaniquement.
            </p>
          </section>

          {/* Section 4 — Rédiger un message */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Rédiger un message de prospection qui obtient une réponse
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Le signal crée le contexte. Le message l&apos;active. Les deux sont nécessaires :
              un bon signal avec un mauvais message, c&apos;est une opportunité gâchée.
              Voici les cinq règles non-négociables.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  rule: '5 phrases maximum',
                  detail: "Au-delà, le taux de réponse chute mécaniquement. Un message long dit \"j'ai besoin de vous convaincre\". Un message court dit \"je respecte votre temps\".",
                },
                {
                  rule: 'La deuxième phrase est un fait précis',
                  detail: "Post récent, question posée, changement de poste, connexion commune. Jamais une généralité sur le secteur ou le rôle. Cette phrase est celle qui distingue votre message de tous les autres.",
                },
                {
                  rule: 'Pas de pitch au premier DM',
                  detail: "Le premier message a un seul objectif : ouvrir la conversation. La qualification vient après la réponse. Le pitch vient après la qualification. Compresser ces étapes en un seul message brûle le lead.",
                },
                {
                  rule: 'Test du téléphone avant envoi',
                  detail: "Lisez le message à voix haute. Est-ce que ce message pourrait être envoyé depuis votre téléphone un mardi matin ? Si la réponse est non, réécrivez. Ce test filtre 80 % des messages qui n'obtiennent jamais de réponse.",
                },
                {
                  rule: 'Pas de formule de politesse creuse',
                  detail: "\"J'espère que vous allez bien\", \"je me permets de vous contacter\" : ce sont des marqueurs d'email automatique. Le prospect les identifie en une seconde. L'effet de personnalisation disparaît immédiatement.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold">→</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{item.rule}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Mauvais message vs bon message — même profil, même signal
            </p>

            {/* Mauvais */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
              <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">
                  À ne pas envoyer
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;Bonjour Thomas, j&apos;espère que vous allez bien. Je travaille avec des
                  dirigeants de PME pour les aider à développer leur pipeline commercial. Notre
                  programme combine setting, closing et IA pour générer des RDV qualifiés.
                  On a aidé plus de 150 entreprises à doubler leurs RDV en 90 jours. Seriez-vous
                  disponible pour un appel de 20 minutes cette semaine ?&rdquo;
                </p>
              </div>
            </div>

            {/* Bon */}
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden mb-8">
              <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">
                  Version calibrée
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;Bonjour Thomas, j&apos;ai vu votre post sur les difficultés à remplir l&apos;agenda
                  de vos commerciaux en ce moment. Ce que vous décrivez ressemble exactement à ce
                  qu&apos;on voit chez nos clients avant de structurer le premier flux. Vous avez
                  20 min jeudi pour qu&apos;on regarde ça ensemble ?&rdquo;
                </p>
              </div>
            </div>

            {/* Deux modes */}
            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
              La structure exacte dépend aussi de la chaleur du signal.
              On distingue deux modes selon l&apos;intensité de l&apos;interaction détectée.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-5">
                <p className="font-sans text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
                  Mode One Shot — Signal fort
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Commentaire précis, question directe sur le sujet, interaction répétée.
                  Objectif : proposer un call dans le premier message. Pas de phase
                  de nurturing — la fenêtre est ouverte, profitez-en.
                </p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-5">
                <p className="font-sans text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  Mode Conversation — Signal faible
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Like passif, vue de profil, interaction hors-sujet.
                  Objectif : ouvrir l&apos;échange, qualifier sur 2 à 3 messages.
                  Ne proposez pas le call avant d&apos;avoir une réponse qualitative.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Relances */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La logique des relances
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              80 % des commerciaux abandonnent après le premier ou deuxième message.
              Et pourtant, en moyenne, il faut 8 points de contact pour décrocher un RDV B2B.
              Ce décalage explique à lui seul une large partie des résultats médiocres en prospection.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Une relance n&apos;est pas un rappel. Ce n&apos;est pas &ldquo;je reviens vers vous&rdquo;.
              Chaque relance est un nouveau message avec un angle différent — une information
              récente, une question directe, un changement de registre. Jamais une copie du
              message précédent. Jamais une mention de l&apos;absence de réponse.
            </p>

            <div className="space-y-0">
              {[
                {
                  label: 'Message initial',
                  sub: 'Jour 1 — signal activé, premier contact',
                  color: 'bg-accent/10 border-accent/40 text-accent',
                },
                {
                  label: 'Relance J+3',
                  sub: 'Angle différent — nouvelle observation, autre fait tiré du profil',
                  color: 'bg-bg-secondary border-white/[0.06] text-text-secondary',
                },
                {
                  label: 'Relance J+7',
                  sub: 'Nouvelle information — actu du secteur, déclencheur récent, cas similaire',
                  color: 'bg-bg-secondary border-white/[0.06] text-text-secondary',
                },
                {
                  label: 'Relance J+14',
                  sub: 'Question directe — êtes-vous la bonne personne ? est-ce le bon moment ?',
                  color: 'bg-bg-secondary border-white/[0.06] text-text-secondary',
                },
                {
                  label: 'Relance J+21',
                  sub: 'Fermeture propre — dernier message, porte laissée ouverte, pas de pression',
                  color: 'bg-bg-secondary border-white/[0.06] text-text-secondary',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold font-sans ${step.color}`}>
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <div className="w-px flex-1 my-1.5 bg-white/[0.06]" style={{ minHeight: '20px' }} />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{step.label}</p>
                    <p className="font-sans text-text-secondary text-xs">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-2 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Les prospects qui ne répondent pas à 4 relances entrent en nurturing newsletter.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Pas de DM supplémentaire. Ils ne sont pas désintéressés — ils ne sont peut-être
                pas en phase d&apos;achat maintenant. Le nurturing maintient le contact sans
                harceler. Dans 30 à 90 jours, une partie de ces leads redeviendra active.
              </p>
            </div>
          </section>

          {/* Section 6 — L'IA comme co-rédacteur */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              L&apos;IA comme co-rédacteur dans la prospection LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;IA utilisée sans contexte produit des messages génériques. C&apos;est
              précisément le type de messages que les décideurs filtrent en deux secondes.
              Le problème n&apos;est pas l&apos;outil — c&apos;est l&apos;usage.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;IA avec le bon contexte produit des messages personnalisés. Le flux correct :
              vous copiez le profil LinkedIn du prospect dans le modèle — titre, bio, posts récents,
              connexions communes. Vous ajoutez les règles de rédaction et deux exemples de bons messages.
              Le modèle analyse, identifie les signaux, propose un premier draft. Vous relisez.
              Vous corrigez si nécessaire. Vous envoyez.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce n&apos;est pas de la génération automatique. C&apos;est de la co-rédaction assistée.
              L&apos;IA fait le travail d&apos;analyse et de premier draft. Le jugement humain
              valide avant envoi. Cette distinction est importante — les équipes qui envoient
              les drafts sans relire ont des taux de réponse inférieurs à ceux qui valident
              systématiquement.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              La règle finale reste la même quelle que soit la méthode : lisez le message
              à voix haute. Si vous entendez le LLM, réécrivez. Si ça sonne comme un humain
              qui connaît le prospect, envoyez.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Le flux : profil → règles + exemples → draft → test voix haute → envoi.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Chaque étape est obligatoire. Sauter le test voix haute revient à déléguer
                le jugement à l&apos;algorithme. Le taux de réponse chute, et vous ne savez
                pas pourquoi — parce que les messages semblent bons à l&apos;écrit.
              </p>
            </div>
            <p className="text-sm text-text-muted italic mt-2">
              Pour aller plus loin : <a href="/ressources/messages-prospection-linkedin-exemples" className="text-accent hover:underline">Messages de prospection LinkedIn : 15 exemples</a>
            </p>
          </section>

          {/* Section 7 — Construire un système */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Construire un système, pas juste une tactique
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Envoyer des messages LinkedIn n&apos;est pas opérer un système de prospection.
              Au bout de deux mois, la différence est nette dans les chiffres.
              L&apos;un plafonne. L&apos;autre monte.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un système a quatre composantes : une source de signaux (inbound ou tiers),
              un CRM minimal pour tracker chaque prospect et son statut, un journal hebdomadaire
              des taux de réponse par message et par segment, et un flux de nurturing
              pour les leads qui ne sont pas encore en phase d&apos;achat.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              En phase de calibration (mois 1 à 2), l&apos;objectif n&apos;est pas le volume.
              C&apos;est la référence. Vous envoyez 20 à 40 messages par semaine, vous mesurez
              les taux de réponse par type de signal, par structure de message, par segment.
              Vous affinez les critères ICP à partir des profils qui répondent le mieux.
              Vous construisez les templates qui survivent au terrain.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              En phase de scaling (mois 3 et au-delà), le système tourne sur des bases connues.
              50 &agrave; 100 messages par semaine (LinkedIn limite les connexions &agrave; environ 100/semaine), taux de r&eacute;ponse stable au-dessus de 15&nbsp;%,
              pipeline prévisible. C&apos;est le résultat direct des deux mois de calibration.
              La plupart abandonnent avant d&apos;y arriver.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Un système se calibre en 8 semaines. Il tourne seul ensuite.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Les premières semaines sont les plus chronophages — sourcing manuel,
                messages validés un par un, feedback loop serré. Passé la calibration,
                le système peut être délégué ou assisté par IA avec un taux d&apos;erreur
                acceptable. C&apos;est l&apos;investissement initial qui rend possible la délégation.
              </p>
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

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/messages-linkedin-sans-reponse', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses" },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06] mt-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Un système de prospection LinkedIn opéré pour vous
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Signaux détectés, messages rédigés et validés, RDV livrés dans votre agenda.
              Garantie 5 RDV qualifiés minimum par mois. On démarre en 2 semaines.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Déléguer ma prospection →
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/signal-achat-linkedin', title: "C\u2019est quoi un signal d\u2019achat LinkedIn ?", readTime: '7 min' },
            { href: '/ressources/script-setting-linkedin', title: 'Scripts de setting LinkedIn B2B : anatomie, exemples et cadre complet', readTime: '11 min' },
            { href: '/ressources/relance-linkedin-b2b', title: 'Relance LinkedIn B2B : quand et comment relancer sans passer pour un spammeur', readTime: '9 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
