import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — Setting, Closing et vente B2B | ChallengersLab',
  description:
    'Méthodes, définitions et stratégies pour solopreneurs et infopreneurs qui veulent mieux prospecter et mieux closer en B2B.',
  openGraph: {
    title: 'Blog — Setting, Closing et vente B2B | ChallengersLab',
    description:
      'Méthodes, définitions et stratégies pour solopreneurs et infopreneurs qui veulent mieux prospecter et mieux closer en B2B.',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/blog',
  },
}

const articles = [
  {
    slug: 'ia-methode-humain-setting-linkedin',
    category: 'Méthode',
    title: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn",
    description:
      "Phase de calibration, phase de scaling : comment fonctionne vraiment un système de setting LinkedIn piloté par l'IA mais validé par l'humain. Avec les deux modes de message.",
    readTime: '12 min',
    date: '17 mars 2026',
    dateTime: '2026-03-17',
  },
  {
    slug: 'messages-linkedin-sans-reponse',
    category: 'Setting',
    title: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses",
    description:
      "5 erreurs précises qui tuent les taux de réponse — avec des exemples de mauvais drafts, leur analyse, et les versions corrigées.",
    readTime: '8 min',
    date: '17 mars 2026',
    dateTime: '2026-03-17',
  },
  {
    slug: 'signal-achat-linkedin',
    category: 'Setting',
    title: "C'est quoi un signal d'achat LinkedIn ?",
    description:
      "Un prospect qui like, commente ou interagit avec un sujet lié à votre offre a levé la main sans vous contacter. C'est un signal d'achat — et c'est la base du setting moderne.",
    readTime: '7 min',
    date: '17 mars 2026',
    dateTime: '2026-03-17',
  },
  {
    slug: 'setter-b2b-definition',
    category: 'Setting',
    title: "C'est quoi un setter en B2B ?",
    description:
      "Le setter est le commercial qui prospecte pour vous. Définition exacte, rôle au quotidien, coût réel et les 3 phases d'un programme de setting expliquées.",
    readTime: '8 min',
    date: '16 mars 2026',
    dateTime: '2026-03-16',
  },
  {
    slug: 'challenger-sale-definition',
    category: 'Closing',
    title: "Qu'est-ce que le Challenger Sale ?",
    description:
      "La méthode de vente B2B issue d'une étude sur 6 000 commerciaux. Ses 3 composantes (Teach, Tailor, Take Control) et comment l'appliquer à votre activité.",
    readTime: '9 min',
    date: '16 mars 2026',
    dateTime: '2026-03-16',
  },
  {
    slug: 'difference-setting-closing',
    category: 'Méthode',
    title: 'Quelle est la différence entre setting et closing ?',
    description:
      "Deux rôles distincts dans un cycle de vente B2B. Comprendre la différence vous aide à identifier votre vrai levier de croissance et dans quel ordre investir.",
    readTime: '7 min',
    date: '16 mars 2026',
    dateTime: '2026-03-16',
  },
]

export default function BlogIndexPage() {
  return (
    <>
      <NavbarBlog />
      <main className="bg-bg-primary pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">
          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Blog
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-4">
              Setting, closing et vente B2B
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              Méthodes et définitions pour solopreneurs qui veulent prospecter mieux et signer plus.
            </p>
          </header>

          {/* Articles list */}
          <div className="divide-y divide-black/8">
            {articles.map((article) => (
              <article key={article.slug} className="py-10">
                <a href={`/blog/${article.slug}`} className="group block">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    {article.category}
                  </p>
                  <h2 className="font-serif text-h3 text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-sans text-text-muted leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-3 font-sans text-xs text-text-muted">
                    <time dateTime={article.dateTime}>{article.date}</time>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime} de lecture</span>
                    <span
                      aria-hidden="true"
                      className="ml-1 text-accent group-hover:translate-x-1 transition-transform inline-block"
                    >
                      →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
