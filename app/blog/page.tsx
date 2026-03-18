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
    slug: 'script-setting-linkedin',
    category: 'Setting',
    title: 'Scripts de setting LinkedIn B2B : exemples et cadre complet',
    description:
      "L'anatomie d'un message LinkedIn qui obtient des réponses, 6 scripts concrets (inbound + outbound) et les 4 erreurs qui tuent le taux de réponse.",
    readTime: '11 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'relance-linkedin-b2b',
    category: 'Setting',
    title: 'Relance LinkedIn B2B : quand et comment relancer sans passer pour un spammeur',
    description:
      "Pas de réponse à votre message LinkedIn ? Quand relancer, avec quel message et combien de fois. Le cadre complet pour des follow-ups qui fonctionnent.",
    readTime: '9 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'closer-b2b',
    category: 'Closing',
    title: 'Closer B2B : définition, compétences et comment en recruter un',
    description:
      "Le closer B2B signe les deals que le setter a qualifiés. Définition exacte, compétences clés, modèles freelance et comment évaluer un closer avant de le recruter.",
    readTime: '11 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'prospection-linkedin-b2b',
    category: 'Setting',
    title: 'Prospection LinkedIn B2B : méthode complète en 2026',
    description:
      "Comment prospecter sur LinkedIn en B2B en 2026 : signaux d'achat, messages qui obtiennent des réponses, Sales Navigator, IA comme co-rédacteur. La méthode terrain.",
    readTime: '13 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'comment-devenir-setter-b2b',
    category: 'Setting',
    title: 'Comment devenir setter B2B en 2026',
    description:
      "Le métier de setter B2B en 2026 : ce que ça demande, les compétences réelles, les étapes pour démarrer et combien on peut gagner. Sans bullshit formation.",
    readTime: '11 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
  {
    slug: 'cout-setter-b2b-prix',
    category: 'Setting',
    title: "Coût d'un setter B2B en 2026 : les vrais chiffres",
    description:
      "Fixe mensuel, prime par RDV, modèle hybride : les vrais chiffres du marché, les pièges à éviter et comment calculer le ROI réel d'un programme de setting.",
    readTime: '9 min',
    date: '18 mars 2026',
    dateTime: '2026-03-18',
  },
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

          {/* Guide pilier */}
          <a
            href="/blog/setting-commercial-b2b"
            className="group block bg-bg-secondary rounded-2xl p-7 mb-14 border border-accent/20 hover:border-accent/40 transition-colors"
          >
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Guide complet · 14 min
            </p>
            <h2 className="font-serif text-h3 text-text-primary mb-3 group-hover:text-accent transition-colors">
              Setting commercial B2B : définition, méthode et programme complet
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Le guide de référence : ce qu&apos;est vraiment le setting, le rôle du setter au quotidien,
              la méthode LinkedIn signal-based, les 3 phases d&apos;un programme et ce que ça coûte.
            </p>
            <span className="font-sans text-sm text-accent group-hover:translate-x-1 transition-transform inline-block">
              Lire le guide →
            </span>
          </a>

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
