import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Closer B2B : définition et compétences | Setting',
  description:
    'Closer B2B : définition, compétences clés, modèles freelance et comment évaluer un closer avant de le recruter.',
  openGraph: {
    title: 'Closer B2B : définition et compétences | Setting',
    description:
      'Closer B2B : définition, compétences clés, modèles freelance et comment évaluer un closer avant de le recruter.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/closer-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/closer-b2b',
      'x-default': 'https://www.setting.live/ressources/closer-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/closer-b2b',
  headline: 'Closer B2B : définition, compétences et comment en recruter un',
  description:
    'Le closer B2B prend en charge les appels entrants sur des leads qualifiés et les transforme en clients signés. Il ne prospecte pas, ne fait pas de setting, ne gère pas les relances. Son seul rôle : signer.',
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: 'https://www.setting.live/opengraph-image',
  },
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/closer-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/closer-b2b',
  },
  image: 'https://www.setting.live/ressources/closer-b2b/opengraph-image',
}

const faqItems = [
  {
    question: 'Quelle est la différence entre un closer et un commercial B2B ?',
    answer:
      "Un commercial B2B gère souvent tout le cycle : prospection, qualification, présentation, négociation, relance. Un closer B2B intervient uniquement sur la phase de conversion — il reçoit des leads déjà qualifiés par un setter et son travail commence à l'appel de vente. Aucun démarchage, aucune relance post-signature.",
  },
  {
    question: "Faut-il avoir de l'expérience pour devenir closer B2B ?",
    answer:
      "Pas nécessairement une expérience commerciale formelle, mais une pratique régulière de la conversation, de la posture d'écoute et de la gestion d'objections est indispensable. Des closers efficaces viennent du conseil, du coaching ou de la formation. Ce qui compte : la capacité à poser des questions sans pitcher trop tôt, et à tenir une posture même sous pression.",
  },
  {
    question: 'Combien gagne un closer B2B en freelance ?',
    answer:
      "La commission standard en France en 2026 se situe entre 8 % et 15 % du montant du deal selon le secteur et la complexité de l'offre. Sur des offres à 3 000–10 000 € TTC, un closer actif peut viser 3 000–6 000 € par mois sur 4 à 8 appels signés. Les modèles fixe + variable existent mais sont moins courants en freelance pur.",
  },
  {
    question: 'Un closer peut-il aussi faire du setting ?',
    answer:
      "Techniquement oui, mais ce n'est pas recommandé. Les deux postures sont opposées : le setting demande de la persévérance sur le volume et la qualification, le closing demande de la profondeur sur un seul appel. Mélanger les deux sur des offres à cycle long fragilise la qualité des deux rôles. Sur des offres simples à moins de 1 000 €, certains font les deux sans problème.",
  },
  {
    question: 'Comment trouver un bon closer B2B pour son activité ?',
    answer:
      "Les plateformes spécialisées (communities de closers, formations certifiantes) sont un bon point de départ. Mais l'entretien ne suffit pas : il faut tester le closer sur un jeu de rôle avec votre offre réelle, vos vraies objections. Un bon closer accepte toujours ce test sans hésiter. S'il refuse ou improvise sans préparation, c'est un signal clair.",
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
      name: 'Closer B2B',
      item: 'https://www.setting.live/ressources/closer-b2b',
    },
  ],
}

// ─── Content Data ─────────────────────────────────────────────────────────────

const competences = [
  {
    titre: "L'écoute active",
    corps:
      "Un closer qui parle plus de 40 % du temps sur un appel de closing est en train de pitcher, pas de closer. La règle n'est pas une posture — c'est une conséquence directe d'une bonne discovery. Plus vous posez les bonnes questions, plus le prospect structure lui-même sa propre conviction d'acheter. Le closer se tait parce qu'il a lancé quelque chose qui fonctionne tout seul.",
  },
  {
    titre: 'La discovery avant le pitch',
    corps:
      "Le réflexe du débutant : présenter l'offre dès que le prospect montre de l'intérêt. C'est une erreur. Une discovery solide dure 15 à 25 minutes sur un appel d'une heure. Elle sert à comprendre la situation actuelle, la douleur réelle, les tentatives passées et ce que le prospect perdrait à ne pas bouger. Sans ça, le pitch qui suit est générique — et les objections qui arrivent ensuite sont légitimes.",
  },
  {
    titre: 'La gestion des objections',
    corps:
      "Les objections ne se réfutent pas, elles se creusent. \"C'est trop cher\" est rarement une objection sur le prix — c'est souvent une incertitude sur le résultat, un manque de clarté sur le ROI, ou une comparaison avec une alternative que vous ne connaissez pas encore. Un bon closer reformule, pose une question, et ne répond à l'objection qu'après avoir compris ce qui se cache derrière.",
  },
  {
    titre: "Lire les signaux d'achat",
    corps:
      "Questions sur la logistique (\"comment ça se passe après ?\"), retour sur des détails concrets (\"et si j'ai besoin de X ?\"), silence après une réponse, ton qui devient plus engagé — ce sont des signaux d'achat. Le closer qui ne les capte pas continue à pitcher alors que le prospect est prêt à signer. Reconnaître ces signaux, c'est savoir quand arrêter de convaincre et commencer à conclure.",
  },
]

export default function CloserB2BPage() {
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
              <li className="text-text-primary">Closer B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Closer B2B : ce que c&apos;est vraiment, ce que ça demande, comment en recruter un
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le closer B2B n&apos;est pas un commercial qui prospecte. C&apos;est quelqu&apos;un
              qui prend un appel sur un lead qualifié et en sort avec une signature — ou sans. Voici
              ce que ça implique vraiment.
            </p>
            <AuthorBlock date="2026-03-18" readTime="11 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Definition Block */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Un <strong>closer B2B</strong> est un profil commercial spécialisé dans la conversion
              de leads qualifiés en clients. Il intervient uniquement sur la phase finale du cycle de
              vente — l&apos;appel de closing — après qu&apos;un{' '}
              <a
                href="/ressources/setter-b2b-definition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors"
              >
                setter B2B
              </a>{' '}
              a identifié, qualifié et préparé le prospect. Son périmètre est précis : discovery,
              présentation de valeur, gestion des objections, signature. Rien avant, rien après.
            </p>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { num: '01', label: "Ce que fait un closer B2B (et ce qu'il ne fait pas)", anchor: 'definition' },
                { num: '02', label: "Les compétences d'un bon closer B2B", anchor: 'competences' },
                { num: '03', label: 'Closer et setter : pourquoi les deux vont ensemble', anchor: 'setter-closer' },
                { num: '04', label: 'Closer B2B en freelance : comment ça fonctionne', anchor: 'freelance' },
                { num: '05', label: "Recruter un closer B2B : ce qu'il faut évaluer", anchor: 'recruter' },
                { num: '06', label: 'Questions fréquentes', anchor: 'faq' },
              ].map(({ num, label, anchor }) => (
                <li key={anchor} className="flex items-start gap-3 font-sans text-sm">
                  <span className="text-accent font-semibold shrink-0 w-6">{num}</span>
                  <a href={`#${anchor}`} className="text-text-secondary hover:text-text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 — Définition */}
          <section id="definition" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que fait un closer B2B — et ce qu&apos;il ne fait pas
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La confusion la plus fréquente : appeler &laquo; closer &raquo; un commercial classique
              qui fait tout, de la prospection à la signature. Ce n&apos;est pas ça. Un closer B2B
              au sens strict ne prospecte pas. Il ne cherche pas de contacts, ne construit pas de
              listes, ne fait pas de cold outreach. Il reçoit des appels sur des leads qui ont déjà
              dit oui à une conversation commerciale.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce que fait concrètement un closer sur un appel :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { label: 'Discovery →', desc: "Il passe les 15–25 premières minutes à comprendre la situation du prospect : où il en est, quel est le problème réel, ce qu'il a déjà essayé, ce qu'il perdrait à ne pas bouger." },
                { label: 'Présentation de valeur →', desc: "Il présente l'offre en réponse directe à ce qu'il vient d'entendre — pas un pitch générique. La valeur est formulée dans les mots du prospect." },
                { label: 'Gestion des objections →', desc: "Il creuse les résistances plutôt que de les écraser. Il ne négocie pas sur le prix tant qu'il n'a pas compris ce qui se cache derrière l'hésitation." },
                { label: 'Signature →', desc: "Il guide vers la décision. S'il y a signature, il s'assure du bon passage de relais vers l'onboarding. Son rôle s'arrête là." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans">
                  <span className="text-accent font-semibold shrink-0">{item.label}</span>
                  <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce qu&apos;il ne fait <strong>pas</strong> : le{' '}
              <a
                href="/ressources/setting-commercial-b2b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors"
              >
                setting commercial B2B
              </a>{' '}
              (qualifier les leads en amont), les relances après signature, la gestion des litiges
              clients, ou la prospection de nouveaux contacts.
            </p>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                La distinction qui compte : commercial vs closer
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Un commercial classique est généraliste : il gère tout le cycle. Un closer est
                spécialiste : il gère uniquement la conversion. Cette spécialisation change tout
                à la posture, aux métriques de performance et à la façon de le recruter.
              </p>
            </div>
          </section>

          {/* Section 2 — Compétences */}
          <section id="competences" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les compétences d&apos;un bon closer B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Ce n&apos;est pas inné. Aucune de ces compétences ne s&apos;improvise sur un premier
              appel — elles se construisent par la pratique, l&apos;écoute de ses propres
              enregistrements, et le travail sur ses angles morts. Voici ce qui sépare un closer
              moyen d&apos;un closer qui signe régulièrement.
            </p>
            <div className="space-y-8">
              {competences.map((comp, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <p className="font-sans font-semibold text-text-primary mb-3">{comp.titre}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{comp.corps}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              La{' '}
              <a
                href="/ressources/challenger-sale-definition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors"
              >
                méthode Challenger Sale
              </a>{' '}
              formalise une partie de ces compétences — notamment la façon de structurer une
              perspective avant de pitcher et de tenir une posture face aux objections de prix.
            </p>
          </section>

          {/* Section 3 — Setter + Closer */}
          <section id="setter-closer" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Closer et setter : pourquoi les deux vont ensemble
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un closer sans setter qualifié perd du temps. Il se retrouve sur des appels avec des
              prospects qui n&apos;ont pas été bien préparés — ils ne savent pas précisément ce
              qu&apos;ils vont entendre, ils comparent encore avec des alternatives, leur budget
              n&apos;a pas été validé. Le taux de transformation chute, et le closer commence à
              ajuster son pitch alors que le vrai problème est en amont.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              À l&apos;inverse, un{' '}
              <a
                href="/ressources/setter-b2b-definition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors"
              >
                setter B2B
              </a>{' '}
              sans closer solide gaspille ses leads. Il passe du temps à qualifier des prospects
              chauds, à créer de l&apos;envie, à poser les bonnes conditions pour un appel de vente
              — et tout ça se perd sur un appel mal conduit.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 mb-6 border border-white/[0.06]">
              <p className="font-sans font-semibold text-text-primary mb-3">
                Ce que le setter doit passer au closer
              </p>
              <ul className="space-y-2">
                {[
                  'Le contexte complet de la conversation : canal de contact, ton, questions posées par le prospect',
                  'Le problème déclaré par le prospect et les mots exacts qu\'il a utilisés',
                  'Les signaux positifs repérés : intérêt, urgence, budget évoqué',
                  'Les résistances identifiées en amont : hésitations, comparaisons avec des alternatives',
                  'Le créneau confirmé et la durée prévue de l\'appel',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-sans text-sm">
                    <span className="text-accent shrink-0">—</span>
                    <span className="text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Quand les deux rôles sont tenus correctement et que la transmission est complète, le
              closer arrive sur l&apos;appel avec un avantage réel : il sait déjà ce qui fait mal
              chez ce prospect, il sait ce que le setter a dit pour créer l&apos;envie, et il peut
              conduire sa discovery à partir d&apos;une base solide plutôt que de repartir de zéro.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              La{' '}
              <a
                href="/ressources/difference-setting-closing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline transition-colors"
              >
                différence entre setting et closing
              </a>{' '}
              mérite d&apos;être bien comprise avant de construire ou de recruter ces deux rôles.
            </p>
          </section>

          {/* Section 4 — Freelance */}
          <section id="freelance" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Closer B2B en freelance : comment ça fonctionne
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              La majorité des closers B2B en France travaillent en freelance ou en portage salarial,
              sur une ou plusieurs offres en parallèle. Le modèle est simple en théorie, mais il y a
              des questions à poser avant de signer.
            </p>

            <div className="space-y-5 mb-8">
              <div>
                <p className="font-sans font-semibold text-text-primary mb-2">
                  Les modèles de rémunération
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                  En 2026, la commission standard en France se situe entre 8 % et 15 % du montant
                  du deal. Sur des offres à 3 000–5 000 € (accompagnements, formations B2B, SaaS),
                  un closer qui signe 5 à 8 deals par mois tourne entre 2 500 € et 6 000 €.
                  Certains clients proposent un fixe bas (400–600 €) + variable — c&apos;est
                  intéressant si les leads sont peu nombreux mais très qualifiés.
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le modèle 100 % à la performance est le plus fréquent pour un closer qui débute
                  avec un nouveau client : il porte moins de risque pour le client, et permet au
                  closer de prouver ses résultats sur 30 jours avant de renégocier.
                </p>
              </div>

              <div>
                <p className="font-sans font-semibold text-text-primary mb-2">
                  Ce que les clients attendent
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Des résultats dans les deux premières semaines. Une disponibilité sur des créneaux
                  imposés — souvent le soir ou le samedi matin pour les offres grand public B2B.
                  Un reporting simple : nombre d&apos;appels, taux de signature, objections les plus
                  fréquentes. Les clients qui ne demandent pas de reporting sont généralement ceux
                  qui n&apos;ont pas de process — et c&apos;est un signal d&apos;alerte.
                </p>
              </div>

              <div>
                <p className="font-sans font-semibold text-text-primary mb-2">
                  Questions à poser avant de signer
                </p>
                <ul className="space-y-2">
                  {[
                    'Combien d\'appels par semaine puis-je espérer ? (moins de 3, c\'est difficile de pratiquer sérieusement)',
                    'Qui fait le setting ? Puis-je voir le brief qu\'il envoie aux prospects ?',
                    'Quelle est la durée moyenne des appels de vente que vous faites déjà ?',
                    'Y a-t-il un enregistrement des appels passés que je peux écouter ?',
                    'Quelle est votre politique sur les deals en attente ou les relances ?',
                  ].map((q, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm">
                      <span className="text-accent shrink-0">—</span>
                      <span className="text-text-secondary leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-2 border-white/[0.06] pl-4">
                <p className="font-sans text-text-secondary text-sm italic leading-relaxed">
                  Un bon brief closer décrit l&apos;offre en détail, les objections les plus
                  fréquentes avec les réponses attendues, le profil type du prospect, et le contexte
                  de ce qui a été dit pendant le setting. Un mauvais brief ressemble à une fiche
                  produit — il parle de l&apos;offre, pas du prospect.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Recruter */}
          <section id="recruter" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Recruter un closer B2B : ce qu&apos;il faut évaluer
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un CV de closer ne dit rien d&apos;utile. Les chiffres sont invérifiables, les
              contextes sont incomparables, et le vrai problème est ailleurs : est-ce que cette
              personne sait mener une discovery sans pitcher trop tôt ? Est-ce qu&apos;elle sait
              gérer une objection &laquo; c&apos;est trop cher &raquo; sans baisser le prix dans les
              30 secondes ?
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-6 border border-white/[0.06]">
              <p className="font-sans font-semibold text-text-primary mb-3">
                Comment tester un closer sérieusement
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                Le jeu de rôle sur votre offre réelle est non-négociable. Vous jouez le prospect
                avec votre vraie objection principale — &laquo; je vais y réfléchir &raquo;,
                &laquo; c&apos;est trop cher &raquo;, &laquo; j&apos;ai déjà essayé quelque chose
                de similaire &raquo;. Observez trois choses :
              </p>
              <ul className="space-y-2">
                {[
                  'Est-ce qu\'il commence par des questions ou par une présentation de l\'offre ?',
                  'Quand vous élevez une objection, reformule-t-il avant de répondre ?',
                  'Est-ce qu\'il sait ce que fait votre setter et ce qui lui a été transmis ?',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-sans text-sm">
                    <span className="text-accent shrink-0">→</span>
                    <span className="text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Les red flags à prendre au sérieux :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { flag: 'Il pitche sans poser de questions', detail: 'Il est en mode commercial classique, pas en mode closer. La discovery ne viendra pas naturellement sur les vrais appels.' },
                { flag: 'Il ne sait pas ce que fait un setter', detail: 'Il n\'a pas l\'habitude de travailler dans un pipeline structuré. La transmission d\'information ne sera pas dans ses réflexes.' },
                { flag: 'Il ne demande pas d\'enregistrements', detail: 'Un bon closer cherche toujours à s\'améliorer sur des données réelles. S\'il ne demande pas à écouter des appels précédents, il n\'a pas l\'habitude de se challenger lui-même.' },
                { flag: 'Il parle de ses techniques avant ses résultats', detail: 'Les meilleures approches de closing ne se revendiquent pas — elles se voient dans les chiffres.' },
              ].map((item, i) => (
                <li key={i} className="font-sans text-sm">
                  <span className="font-semibold text-text-primary">{item.flag} — </span>
                  <span className="text-text-secondary leading-relaxed">{item.detail}</span>
                </li>
              ))}
            </ul>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Commission standard marché FR 2026
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                8–12 % pour des offres B2B entre 1 500 € et 5 000 €. 10–15 % pour des offres à
                plus de 5 000 € avec un cycle de vente en un appel. En dessous de 8 %, le closer
                freelance aura du mal à rester motivé sur des volumes faibles. Au-dessus de 15 %,
                le client paie cher un rôle qu&apos;il pourrait internaliser à terme.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-14">
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
          <div className="mt-14 pt-8 border-t border-white/[0.06] mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/setter-b2b-definition', label: "C'est quoi un setter en B2B ? Rôle, missions et coût" },
                { href: '/ressources/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
                { href: '/ressources/closing-b2b', label: 'Closing B2B : définition et méthode complète' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Structurer votre pipeline setting + closing
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un closer performant sur des leads mal qualifiés ne sauvera pas votre taux de
              conversion. On travaille les deux rôles : qualification en amont, conversion sur
              l&apos;appel. 2 à 4 rendez-vous par semaine, leads chauds, suivi sur chaque deal.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Discuter de mon pipeline →
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
