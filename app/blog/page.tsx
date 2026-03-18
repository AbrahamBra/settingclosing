import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — Setting, Closing et vente B2B | ChallengersLab',
  description:
    'Méthodes, définitions et stratégies pour fondateurs, freelances et solopreneurs B2B qui veulent mieux prospecter et mieux closer en B2B.',
  openGraph: {
    title: 'Blog — Setting, Closing et vente B2B | ChallengersLab',
    description:
      'Méthodes, définitions et stratégies pour fondateurs, freelances et solopreneurs B2B qui veulent mieux prospecter et mieux closer en B2B.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://challengerslab.fr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Blog ChallengersLab — Setting, Closing et vente B2B',
      },
    ],
  },
  alternates: {
    canonical: 'https://challengerslab.fr/blog',
  },
}

// ─── Données ───────────────────────────────────────────────────────────────────

const settingArticles = [
  {
    slug: 'script-setting-linkedin',
    title: 'Scripts de setting LinkedIn B2B : exemples et cadre complet',
    description: "L'anatomie d'un message LinkedIn qui obtient des réponses, 6 scripts concrets (inbound + outbound) et les 4 erreurs qui tuent le taux de réponse.",
    readTime: '11 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'relance-linkedin-b2b',
    title: 'Relance LinkedIn B2B : quand et comment relancer sans passer pour un spammeur',
    description: "Pas de réponse à votre message LinkedIn ? Quand relancer, avec quel message et combien de fois. Le cadre complet pour des follow-ups qui fonctionnent.",
    readTime: '9 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'prospection-linkedin-b2b',
    title: 'Prospection LinkedIn B2B : méthode complète en 2026',
    description: "Comment prospecter sur LinkedIn en B2B en 2026 : signaux d'achat, messages qui obtiennent des réponses, Sales Navigator, IA comme co-rédacteur.",
    readTime: '13 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'comment-devenir-setter-b2b',
    title: 'Comment devenir setter B2B en 2026',
    description: "Le métier de setter B2B en 2026 : ce que ça demande, les compétences réelles, les étapes pour démarrer et combien on peut gagner.",
    readTime: '11 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'cout-setter-b2b-prix',
    title: "Coût d'un setter B2B en 2026 : les vrais chiffres",
    description: "Fixe mensuel, prime par RDV, modèle hybride : les vrais chiffres du marché, les pièges à éviter et comment calculer le ROI réel d'un programme de setting.",
    readTime: '9 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'messages-linkedin-sans-reponse',
    title: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses",
    description: "5 erreurs précises qui tuent les taux de réponse — avec des exemples de mauvais drafts, leur analyse, et les versions corrigées.",
    readTime: '8 min',
    date: '17 mars 2026',
    dateTime: '2026-03-17',
  },
  {
    slug: 'signal-achat-linkedin',
    title: "C'est quoi un signal d'achat LinkedIn ?",
    description: "Un prospect qui like, commente ou interagit avec un sujet lié à votre offre a levé la main. C'est un signal d'achat — et c'est la base du setting moderne.",
    readTime: '7 min',
    date: '17 mars 2026',
    dateTime: '2026-03-17',
  },
  {
    slug: 'ia-methode-humain-setting-linkedin',
    title: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn",
    description: "Phase de calibration, phase de scaling : comment fonctionne vraiment un système de setting LinkedIn piloté par l'IA mais validé par l'humain.",
    readTime: '12 min',
    date: '17 mars 2026',
    dateTime: '2026-03-17',
  },
  {
    slug: 'setter-b2b-definition',
    title: "C'est quoi un setter en B2B ?",
    description: "Le setter est le commercial qui prospecte pour vous. Définition exacte, rôle au quotidien, coût réel et les 3 phases d'un programme de setting expliquées.",
    readTime: '8 min',
    date: '16 mars 2026',
    dateTime: '2026-03-16',
  },
]

const closingArticles = [
  {
    slug: 'discovery-call-b2b',
    title: 'Discovery call B2B : structure, questions et erreurs à éviter',
    description: "La phase que personne ne prépare assez. Structure en 4 temps, les questions qui font avancer et les 3 erreurs qui font perdre des deals avant le pitch.",
    readTime: '10 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'gestion-objections-b2b',
    title: 'Gérer les objections en vente B2B : méthode et exemples',
    description: "Vraies objections vs prétextes, les 5 plus fréquentes avec réponses concrètes, et pourquoi l'objection prix arrive quand la valeur n'a pas été établie.",
    readTime: '9 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'script-closing-b2b',
    title: 'Scripts et phrases de closing B2B : cadre et exemples',
    description: "Ouverture, discovery, demande de décision, réponse aux objections : les scripts de closing avec exemples avant/après. Un cadre, pas un texte à réciter.",
    readTime: '10 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'challenger-sale-definition',
    title: "Qu'est-ce que le Challenger Sale ?",
    description: "La méthode de vente B2B issue d'une étude sur 6 000 commerciaux. Ses 3 composantes (Teach, Tailor, Take Control) et comment l'appliquer à votre activité.",
    readTime: '9 min',
    date: '16 mars 2026',
    dateTime: '2026-03-16',
  },
  {
    slug: 'closer-b2b',
    title: 'Closer B2B : définition, compétences et comment en recruter un',
    description: "Le closer B2B signe les deals que le setter a qualifiés. Définition exacte, compétences clés, modèles freelance et comment évaluer un closer avant de le recruter.",
    readTime: '11 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
]

const methodeArticles = [
  {
    slug: 'qualification-leads-b2b',
    title: 'Qualifier un lead en B2B 2026 : méthodes, critères et exemples',
    description: "BANT, MEDDIC, ou signaux LinkedIn : comment qualifier un lead avant de planifier un call. Avec un système en 5 niveaux adapté à la prospection outbound.",
    readTime: '8 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'methode-soncas',
    title: 'Méthode SONCAS en B2B 2026 : définition, 6 leviers et exemples concrets',
    description: "Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie : comment détecter les leviers motivationnels d'un prospect et adapter son discours en discovery call.",
    readTime: '10 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'methode-spin-selling',
    title: 'SPIN Selling 2026 : la méthode pour vendre en B2B sans forcer',
    description: "Situation, Problème, Implication, Need-payoff : le cadre de questions issu d'une étude sur 35 000 appels de vente pour conduire un prospect à se convaincre lui-même.",
    readTime: '9 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'difference-setting-closing',
    title: 'Quelle est la différence entre setting et closing ?',
    description: "Deux rôles distincts dans un cycle de vente B2B. Comprendre la différence vous aide à identifier votre vrai levier de croissance et dans quel ordre investir.",
    readTime: '7 min',
    date: '16 mars 2026',
    dateTime: '2026-03-16',
  },
]

// ─── Structured Data ──────────────────────────────────────────────────────────

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://challengerslab.fr/blog',
  name: 'Blog — Setting, Closing et vente B2B',
  description:
    'Méthodes, définitions et stratégies pour fondateurs, freelances et solopreneurs B2B qui veulent mieux prospecter et mieux closer en B2B.',
  url: 'https://challengerslab.fr/blog',
  isPartOf: { '@id': 'https://challengerslab.fr/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://challengerslab.fr/blog' },
    ],
  },
}

// ─── Composant article ─────────────────────────────────────────────────────────

function ArticleCard({
  slug, title, description, readTime, date, dateTime,
}: {
  slug: string
  title: string
  description: string
  readTime: string
  date: string
  dateTime: string
}) {
  return (
    <article className="py-10">
      <a href={`/blog/${slug}`} className="group block">
        <h3 className="font-serif text-h3 text-text-primary mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="font-sans text-text-muted leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center gap-3 font-sans text-xs text-text-muted">
          <time dateTime={dateTime}>{date}</time>
          <span aria-hidden="true">·</span>
          <span>{readTime} de lecture</span>
          <span
            aria-hidden="true"
            className="ml-1 text-accent group-hover:translate-x-1 transition-transform inline-block"
          >
            →
          </span>
        </div>
      </a>
    </article>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <>
      <NavbarBlog />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="bg-bg-primary pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Blog</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Blog
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-4">
              Setting, closing et vente B2B
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              Méthodes et définitions pour fondateurs et freelances B2B qui veulent prospecter mieux et signer plus.
            </p>
            <p className="font-sans text-text-muted text-sm mt-3">
              {settingArticles.length + closingArticles.length + methodeArticles.length} articles · 3 guides piliers
            </p>
          </header>

          {/* Navigation par catégorie */}
          <nav aria-label="Catégories" className="flex flex-wrap gap-2 mb-12">
            {[
              { href: '#section-setting', label: 'Setting', count: settingArticles.length },
              { href: '#section-closing', label: 'Closing', count: closingArticles.length },
              { href: '#section-methode', label: 'Méthode', count: methodeArticles.length },
            ].map(({ href, label, count }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/8 font-sans text-sm text-text-muted hover:text-accent hover:border-accent/30 transition-colors"
              >
                {label}
                <span className="text-xs bg-black/5 rounded-full px-2 py-0.5">{count}</span>
              </a>
            ))}
          </nav>

          {/* Trois guides piliers */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            <a
              href="/blog/setting-commercial-b2b"
              className="group flex flex-col bg-bg-secondary rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Guide Setting · 14 min
              </p>
              <h2 className="font-serif text-h3 text-text-primary mb-4 group-hover:text-accent transition-colors leading-snug flex-1">
                Setting commercial B2B : définition et méthode
              </h2>
              <span className="font-sans text-sm text-accent group-hover:translate-x-1 transition-transform inline-block">
                Lire le guide →
              </span>
            </a>
            <a
              href="/blog/closing-b2b"
              className="group flex flex-col bg-bg-secondary rounded-2xl p-6 border border-black/8 hover:border-accent/30 transition-colors"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Guide Closing · 15 min
              </p>
              <h2 className="font-serif text-h3 text-text-primary mb-4 group-hover:text-accent transition-colors leading-snug flex-1">
                Closing B2B : définition et méthode
              </h2>
              <span className="font-sans text-sm text-accent group-hover:translate-x-1 transition-transform inline-block">
                Lire le guide →
              </span>
            </a>
            <a
              href="/blog/methodes-vente-b2b"
              className="group flex flex-col bg-bg-secondary rounded-2xl p-6 border border-black/8 hover:border-accent/30 transition-colors"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Guide Méthodes · 10 min
              </p>
              <h2 className="font-serif text-h3 text-text-primary mb-4 group-hover:text-accent transition-colors leading-snug flex-1">
                Méthodes de vente B2B : Challenger, SPIN, SONCAS
              </h2>
              <span className="font-sans text-sm text-accent group-hover:translate-x-1 transition-transform inline-block">
                Lire le guide →
              </span>
            </a>
          </div>

          {/* Section Setting */}
          <section aria-labelledby="section-setting">
            <div className="flex items-center gap-4 mb-0">
              <h2
                id="section-setting"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0"
              >
                Setting
              </h2>
              <div className="flex-1 h-px bg-black/8" aria-hidden="true" />
            </div>
            <div className="divide-y divide-black/8">
              {settingArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </section>

          {/* Section Closing */}
          <section aria-labelledby="section-closing" className="mt-10">
            <div className="flex items-center gap-4 mb-0">
              <h2
                id="section-closing"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0"
              >
                Closing
              </h2>
              <div className="flex-1 h-px bg-black/8" aria-hidden="true" />
            </div>
            <div className="divide-y divide-black/8">
              {closingArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </section>

          {/* Section Méthode */}
          <section aria-labelledby="section-methode" className="mt-10">
            <div className="flex items-center gap-4 mb-0">
              <h2
                id="section-methode"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0"
              >
                Méthode
              </h2>
              <div className="flex-1 h-px bg-black/8" aria-hidden="true" />
            </div>
            <div className="divide-y divide-black/8">
              {methodeArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
