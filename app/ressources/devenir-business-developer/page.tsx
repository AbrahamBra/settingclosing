import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Devenir Business Developer en 2026 | Setting',
  description:
    'Métier de business developer : quotidien, salaire, compétences et formation en alternance depuis Chartres avec Back School et Setting.',
  openGraph: {
    title: 'Devenir Business Developer en 2026 | Setting',
    description:
      'Le métier de business developer a changé. Outils numériques, automatisation, IA : on vous explique le quotidien réel et comment vous y former en alternance.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/devenir-business-developer',
    languages: {
      'fr': 'https://www.setting.live/ressources/devenir-business-developer',
      'x-default': 'https://www.setting.live/ressources/devenir-business-developer',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devenir Business Developer en 2026 | Setting',
    description: 'Le métier de business developer a changé. Outils numériques, automatisation, IA : on vous explique le quotidien réel et comment vous y former en alternance.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/devenir-business-developer',
  headline:
    'Business developer : le métier que vous ne connaissiez pas (et qui recrute près de chez vous)',
  description:
    'Le métier de business developer a changé. Outils numériques, automatisation, IA : on vous explique le quotidien réel et comment vous y former en alternance.',
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
  datePublished: '2026-02-26',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/devenir-business-developer',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/devenir-business-developer',
  },
  image: 'https://www.setting.live/ressources/devenir-business-developer/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Métiers B2B',
  wordCount: 2800,
  about: [
    { '@type': 'Thing', name: 'Business developer' },
    { '@type': 'Thing', name: 'Développement commercial B2B' },
  ],
}

const faqItems = [
  {
    question: 'Faut-il un diplôme spécifique pour devenir business developer ?',
    answer:
      "Non. Le métier est accessible sans diplôme spécifique. Ce qui compte, c'est la motivation, la curiosité et les qualités humaines : écoute, persévérance, capacité à convaincre. La formation en alternance vous apporte la méthode et les outils qui complètent ces qualités.",
  },
  {
    question: 'Combien gagne un business developer débutant ?',
    answer:
      'Un business developer junior en France gagne entre 28 000 et 35 000 euros brut par an, avec une part variable de 10 à 30 %. En trois à cinq ans, les profils confirmés atteignent 45 000 à 60 000 euros. La part variable récompense directement vos résultats.',
  },
  {
    question: 'Est-ce que la formation est accessible depuis Chartres ?',
    answer:
      'Oui. Le programme d\'alternance avec Back School est accessible depuis Chartres et ses environs. Contactez votre conseiller France Travail à Chartres ou Back School directement pour connaître les modalités.',
  },
  {
    question: 'Est-ce que la reconversion est un frein pour ce métier ?',
    answer:
      'Au contraire. Les personnes en reconversion apportent des qualités que les jeunes diplômés n\'ont pas toujours : maturité, expérience de la relation client, gestion du stress, sens de l\'engagement. Ces compétences sont directement transférables au business development.',
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
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ressources',
      item: 'https://www.setting.live/ressources',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Devenir Business Developer',
      item: 'https://www.setting.live/ressources/devenir-business-developer',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DevenirBusinessDeveloperPage() {
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
              <li className="text-text-primary">Devenir Business Developer</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide carrière · Reconversion
            </p>
            <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
              Business developer : le métier que vous ne connaissiez pas (et qui recrute près de chez vous)
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le métier de business developer a changé. Outils numériques, automatisation, IA : on vous
              explique le quotidien réel et comment vous pouvez vous y former en alternance depuis Chartres,
              en étant rémunéré.
            </p>
            <AuthorBlock date="2026-02-26" readTime="7 min de lecture" dateLabel="26 février 2026" updatedDate="2026-03-19" />
          </header>

          <div data-speakable="true">
            <TldrBox>
              <p>Ce qu&apos;il faut savoir pour devenir business developer en 2026 : comp&eacute;tences attendues, parcours possibles (BTS, &eacute;cole de commerce, reconversion), fourchettes de salaire (30-55k&nbsp;&euro; selon exp&eacute;rience, source&nbsp;: <a href="https://www.apec.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">APEC</a>) et r&eacute;alit&eacute;s du m&eacute;tier au quotidien.</p>
            </TldrBox>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { stat: '28–35k€', label: 'salaire brut/an pour un business developer junior' },
              { stat: '45–60k€', label: 'en 3 à 5 ans pour un profil confirmé' },
              { stat: '100 %', label: 'rémunéré pendant toute la durée de la formation en alternance' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-white/[0.06]">
                <p className="font-sans font-extrabold text-2xl text-accent mb-1">{stat}</p>
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
                { id: 'commercial-2025', label: 'Un commercial, mais version 2026' },
                { id: 'numerique', label: 'Le numérique a tout changé' },
                { id: 'recrutement', label: 'Pourquoi ce métier recrute autant' },
                { id: 'reconversion', label: 'La reconversion est un atout, pas un handicap' },
                { id: 'alternance', label: 'Se former en alternance : apprendre en faisant' },
                { id: 'terrain', label: "Ce que ça donne sur le terrain : l'exemple Setting" },
                { id: 'lancer', label: 'Comment se lancer' },
                { id: 'setter-closer', label: 'Setter, closer : le business developer du solopreneur' },
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

          {/* Intro */}
          <p className="font-sans text-text-secondary leading-relaxed mb-4">
            Vous êtes en reconversion. Peut-être que votre ancien métier ne vous correspondait plus. Peut-être
            qu&apos;on ne vous a pas laissé le choix. Dans les deux cas, vous êtes là, à chercher ce qui vient
            après — et c&apos;est déjà une forme de courage que beaucoup sous-estiment.
          </p>
          <p className="font-sans text-text-secondary leading-relaxed mb-14">
            Si vous lisez cet article, c&apos;est qu&apos;on vous a parlé du métier de business developer.
            Ou que le terme vous intrigue sans que vous sachiez vraiment ce qu&apos;il recouvre. Normal.
            C&apos;est un métier qui existe depuis une dizaine d&apos;années sous ce nom, et qui a très peu
            à voir avec l&apos;image qu&apos;on se fait du &ldquo;commercial&rdquo;.
          </p>

          {/* Section 1 — Un commercial version 2025 */}
          <section id="commercial-2025" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Un commercial, mais version 2026
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Oubliez le commercial qui frappe aux portes avec sa mallette. Le business developer ne vend
              pas un produit sur un marché. Il construit une stratégie pour trouver les bons clients, au bon
              moment, avec le bon message.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Son quotidien ressemble plus à ça :
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Identifier des entreprises qui pourraient avoir besoin d'un service",
                'Les contacter par email, par téléphone, sur LinkedIn',
                "Comprendre leur problème lors d'un premier échange",
                'Proposer une solution adaptée, négocier, conclure',
              ].map((item) => (
                <li key={item} className="flex gap-3 font-sans text-text-secondary text-sm leading-relaxed">
                  <span className="text-accent shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-text-secondary leading-relaxed">
              C&apos;est un métier de contact humain, oui. Mais c&apos;est aussi un métier de méthode.
              Et c&apos;est là que ça devient intéressant.
            </p>
          </section>

          {/* Section 2 — Le numérique */}
          <section id="numerique" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Le numérique a tout changé
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Il y a quinze ans, un commercial travaillait avec un annuaire, un téléphone fixe et un tableau
              Excel. Aujourd&apos;hui, un business developer utilise des dizaines d&apos;outils numériques
              au quotidien. Et ça change radicalement la façon de travailler.
            </p>
            <div className="space-y-5 mb-6">
              {[
                {
                  title: 'Trouver des prospects',
                  desc: "Avant, on achetait des fichiers de contacts plus ou moins à jour. Aujourd'hui, il existe des plateformes qui permettent de trouver en quelques clics le bon interlocuteur dans une entreprise, avec son poste, son email professionnel, son parcours. Le travail de recherche qui prenait des heures se fait en minutes.",
                },
                {
                  title: 'Automatiser les relances',
                  desc: "Personne n'aime relancer quinze fois la même personne à la main. Les outils actuels permettent de créer des séquences automatiques : un premier email personnalisé, une relance trois jours plus tard si pas de réponse, un message LinkedIn en parallèle. Le business developer configure la séquence une fois, et le système s'en charge.",
                },
                {
                  title: 'Suivre son activité',
                  desc: "Les logiciels de gestion commerciale (les fameux CRM) permettent de visualiser en temps réel où en est chaque contact dans le processus. Qui a ouvert votre email. Qui a cliqué sur votre lien. Qui est prêt à passer à l'étape suivante. On ne travaille plus à l'aveugle.",
                },
                {
                  title: "Qualifier avec l'intelligence artificielle",
                  desc: "L'IA permet d'analyser des centaines de profils d'entreprises pour identifier celles qui correspondent le mieux à ce que vous proposez. Elle peut aussi vous aider à rédiger des messages, résumer un échange, préparer un rendez-vous. Pas pour remplacer le business developer, mais pour lui enlever les tâches répétitives et le laisser se concentrer sur ce qui compte : la relation humaine.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le résultat, c&apos;est un métier qui demande de la curiosité, de la rigueur, et une vraie
              capacité à apprendre de nouveaux outils. Pas besoin d&apos;être ingénieur informatique. Mais
              il faut aimer comprendre comment les choses fonctionnent et ne pas avoir peur de tester.
            </p>
          </section>

          <CtaArticle />

          {/* Section 3 — Pourquoi ça recrute */}
          <section id="recrutement" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Pourquoi ce métier recrute autant
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Toutes les entreprises ont besoin de clients. C&apos;est une évidence, mais elle a une
              conséquence directe : le business development est l&apos;une des fonctions les plus
              recherchées sur le marché de l&apos;emploi en France.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Les startups en recrutent dès qu&apos;elles ont un produit à vendre. Les PME qui veulent se
              développer au-delà du bouche-à-oreille en ont besoin. Les grandes entreprises ont des équipes
              entières dédiées à la prospection. Les agences spécialisées en recrutent pour leurs clients.
            </p>
            <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Rémunération
              </p>
              <div className="space-y-2">
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Un business developer junior en France gagne entre{' '}
                  <span className="font-semibold text-text-primary">28 000 et 35 000 € brut/an</span>,
                  avec une part variable de 10 à 30 %.
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  En trois à cinq ans, les profils confirmés atteignent{' '}
                  <span className="font-semibold text-text-primary">45 000 à 60 000 €</span> (source&nbsp;:{' '}
                  <a href="https://www.apec.fr/tous-nos-metiers/commercial-marketing/business-developer.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">APEC</a>).
                  Et les meilleurs dépassent largement ces chiffres.
                </p>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le métier ne connaît pas la crise parce qu&apos;il est directement lié au chiffre
              d&apos;affaires. Un bon business developer génère du revenu. C&apos;est mesurable,
              c&apos;est concret, et ça donne un pouvoir de négociation salariale que beaucoup de
              métiers n&apos;offrent pas.
            </p>
          </section>

          {/* Section 4 — Reconversion */}
          <section id="reconversion" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              La reconversion est un atout, pas un handicap
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              On entend souvent des gens en reconversion dire qu&apos;ils &ldquo;partent de
              zéro&rdquo;. C&apos;est faux.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Si vous avez travaillé dans la restauration, vous savez gérer la pression et comprendre
              ce qu&apos;un client attend sans qu&apos;il le dise. Si vous venez du bâtiment, vous
              connaissez la valeur d&apos;un engagement tenu et d&apos;un travail bien fini. Si vous
              étiez dans l&apos;administratif, vous savez organiser, suivre des dossiers, ne rien
              laisser tomber.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le business development repose sur des qualités humaines avant tout : l&apos;écoute,
              la persévérance, la capacité à se mettre à la place de l&apos;autre. Ces qualités ne
              s&apos;apprennent pas dans un cours. Elles se forgent dans la vie, dans les expériences
              professionnelles passées, y compris celles qui semblent n&apos;avoir aucun rapport.
            </p>
            <div className="border-l-2 border-accent/30 pl-5">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                Ce qui vous manque, c&apos;est la méthode et les outils. Et ça, ça s&apos;apprend.
              </p>
            </div>
          </section>

          {/* Section 5 — Alternance */}
          <section id="alternance" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Se former en alternance : apprendre en faisant
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;alternance est probablement la meilleure façon d&apos;entrer dans ce métier. Vous
              apprenez la théorie en formation, et vous la mettez en pratique immédiatement en entreprise.
              Vous êtes rémunéré pendant toute la durée du programme. Et à la fin, vous avez un diplôme et
              une expérience professionnelle réelle, pas juste une ligne sur un CV.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              <a
                href="https://back-school.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                Back School
              </a>{' '}
              est un centre de formation certifié Qualiopi qui propose un programme dédié au business
              development. La pédagogie est orientée terrain : des mises en situation, des simulations
              d&apos;appels, des études de cas réels. Vous pratiquez dès le premier jour.
            </p>
            <div className="bg-bg-secondary rounded-xl border border-white/[0.06] overflow-hidden mb-6">
              <div className="px-5 py-3 border-b border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                  Programme de formation
                </p>
              </div>
              <div className="divide-y divide-white/[0.06]">
                {[
                  {
                    module: 'Fondamentaux du développement commercial',
                    detail: 'Le rôle du business developer, le cycle de vente, comment construire une proposition de valeur',
                  },
                  {
                    module: 'Prospection multicanale',
                    detail: 'Téléphone, email, LinkedIn : comment contacter les bons interlocuteurs sur chaque canal',
                  },
                  {
                    module: 'Outils numériques et CRM',
                    detail: 'Utiliser les logiciels du métier pour organiser, suivre et piloter votre activité',
                  },
                  {
                    module: 'Techniques de vente et négociation',
                    detail: 'Préparer un rendez-vous, argumenter, gérer les objections, conclure',
                  },
                  {
                    module: 'Fidélisation client',
                    detail: 'Développer un portefeuille existant, faire du cross-sell et de l\'upsell',
                  },
                  {
                    module: 'Pilotage de la performance',
                    detail: 'Fixer des objectifs, suivre des indicateurs, analyser ses résultats pour progresser',
                  },
                ].map(({ module, detail }) => (
                  <div key={module} className="px-5 py-4 grid sm:grid-cols-2 gap-1">
                    <p className="font-sans text-sm font-semibold text-text-primary">{module}</p>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-l-2 border-accent/30 pl-5">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                La formation est{' '}
                <span className="font-semibold text-text-primary">
                  accessible depuis Chartres et ses environs
                </span>
                . Pas besoin de déménager pour changer de vie.
              </p>
            </div>
          </section>

          {/* Section 6 — Terrain */}
          <section id="terrain" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Ce que ça donne sur le terrain : l&apos;exemple Setting
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Setting est une agence basée à Paris qui aide les entreprises B2B à structurer leurs
              ventes et à intégrer l&apos;intelligence artificielle dans leurs processus commerciaux. On
              combine vingt ans d&apos;expérience commerciale avec les outils les plus récents du marché.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Concrètement, nos équipes font de la prospection pour des PME et des scale-ups : on identifie
              les bons prospects, on les contacte, on qualifie les opportunités, on met en place les outils
              et les automatisations qui permettent de faire plus avec moins.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un alternant chez nous ne fait pas du classement de dossiers. Il est intégré aux opérations
              dès le début. Il apprend à utiliser un CRM, à construire des séquences de prospection, à
              analyser les résultats d&apos;une campagne. Il voit comment l&apos;IA transforme le métier
              au quotidien, pas dans un article de blog, mais dans la pratique, sur de vrais clients.
            </p>
            <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                C&apos;est un environnement exigeant. Mais c&apos;est aussi un environnement où on apprend
                vite, parce que chaque action a un résultat mesurable. En quelques mois, un alternant motivé
                sait faire des choses que certains commerciaux avec cinq ans d&apos;expérience ne maîtrisent
                pas encore.
              </p>
            </div>
          </section>

          {/* Section 7 — Comment se lancer */}
          <section id="lancer" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Comment se lancer
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Si cet article vous a donné envie d&apos;en savoir plus, voici trois façons d&apos;avancer :
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: '01',
                  title: 'Votre conseiller France Travail à Chartres',
                  desc: "Le programme d'alternance en business development fait partie des parcours accompagnés. Votre conseiller peut vous orienter et vous aider à monter votre dossier.",
                },
                {
                  num: '02',
                  title: 'Back School',
                  desc: 'Ils répondent à vos questions sur le programme, les modalités et le calendrier. Email : contact@back-school.fr / Tél : 06 68 20 85 57',
                },
                {
                  num: '03',
                  title: 'Setting',
                  desc: "Si vous voulez comprendre à quoi ressemble le quotidien d'un business developer dans une agence qui mêle commerce et intelligence artificielle, on est disponibles pour en parler.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5 bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <span className="font-sans text-accent font-semibold text-xs tabular-nums shrink-0 w-6 pt-0.5">
                    {num}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Changer de métier, c&apos;est difficile. Personne ne va prétendre que c&apos;est simple ou
              que tout sera facile. Mais si vous êtes curieux, tenace, et que l&apos;idée d&apos;un métier
              où chaque journée est différente vous attire, le business development mérite qu&apos;on
              s&apos;y intéresse sérieusement.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mt-4">
              Le marché recrute. La formation existe. L&apos;opportunité est là, près de chez vous. Le reste,
              c&apos;est votre décision.
            </p>
          </section>

          {/* Section — Setter / Closer */}
          <section id="setter-closer" className="mb-14 scroll-mt-24">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-5">
              Setter, closer : le business developer du solopreneur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Dans une entreprise classique, le business developer fait tout : il trouve les prospects,
              les qualifie, prend les rendez-vous et signe. Un seul poste. Une fiche de mission large.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Dans l&apos;économie des solopreneurs, coachs et consultants, ça ne fonctionne pas
              comme ça. Ces profils ont besoin de clients, mais pas le temps de faire leur propre
              prospection. Ils délèguent. C&apos;est de là que viennent le{' '}
              <strong>setter</strong> et le <strong>closer</strong>.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Le setter
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-3">
                  Il prospecte sur LinkedIn, qualifie les leads et remplit l&apos;agenda du closer.
                  La partie &ldquo;trouver les bons clients&rdquo; du métier, avec des outils et
                  des indicateurs clairs.
                </p>
                <a
                  href="/ressources/setting-commercial-b2b"
                  className="font-sans text-xs text-accent hover:underline"
                >
                  Comprendre le rôle du setter →
                </a>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Le closer
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-3">
                  Il conduit les appels, creuse le problème du prospect et signe. La partie
                  directement liée au chiffre d&apos;affaires.
                </p>
                <a
                  href="/ressources/closing-b2b"
                  className="font-sans text-xs text-accent hover:underline"
                >
                  Comprendre le rôle du closer →
                </a>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un coach qui vend un programme à 2 000 €, un consultant qui facture 5 000 € la mission,
              un formateur B2B. Aucun ne peut prospecter à plein temps et délivrer son service en
              même temps. Quelqu&apos;un doit gérer le commercial à leur place.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le setter et le closer, c&apos;est ça : le{' '}
              <strong>business developer externalisé</strong> du solopreneur. L&apos;homme de
              l&apos;ombre qui fait tourner la machine commerciale pendant que le fondateur fait
              son métier.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 mb-6">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                La différence avec le poste en entreprise ? Le setter/closer travaille souvent pour
                plusieurs clients en parallèle, à distance, 100 % en ligne. Les compétences sont
                les mêmes : prospection, qualification, négociation. Le cadre, non.
              </p>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Si vous êtes en reconversion, c&apos;est un marché concret. Les solopreneurs et
              consultants cherchent des profils commerciaux capables de gérer ça pour eux, souvent
              rémunérés à la performance. Les revenus peuvent monter vite quand ça tourne.
            </p>
            <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Pour aller plus loin
              </p>
              <ul className="space-y-2">
                {[
                  { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                  { href: '/ressources/setting-commercial-b2b', label: 'Setting vs Closing : quelle est la différence ?' },
                  { href: '/ressources/comment-devenir-setter-b2b', label: 'Comment devenir setter B2B en 2026' },
                  { href: '/ressources/setting-commercial-b2b', label: 'Le setting commercial B2B : guide complet' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="text-accent text-xs">→</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqItems.map(({ question, answer }, i) => (
                <details key={question} className="group bg-bg-secondary rounded-xl p-6 border border-white/[0.06]" {...(i === 0 ? { open: true } : {})}>
                  <summary className="font-sans font-semibold text-text-primary text-sm cursor-pointer list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    {question}
                    <span className="shrink-0 text-accent transition-transform group-open:rotate-45 text-lg">+</span>
                  </summary>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mt-3 faq-answer">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <RelatedArticles articles={[
            { href: '/ressources/comment-devenir-setter-b2b', title: 'Comment devenir setter B2B en 2026', readTime: '11 min' },
            { href: '/ressources/closing-b2b', title: "Closer B2B : ce que c\u2019est vraiment, ce que \u00e7a demande, comment en recruter un", readTime: '11 min' },
            { href: '/ressources/methodes-vente-b2b', title: 'Qualifier un lead en B2B 2026 : m\u00e9thodes, crit\u00e8res et exemples', readTime: '8 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
