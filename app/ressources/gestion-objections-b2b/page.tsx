import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Objections B2B : méthode et exemples | Setting",
  description:
    "Vraies objections vs prétextes : les 5 objections B2B les plus fréquentes avec réponses concrètes et méthode de traitement.",
  openGraph: {
    title: "Objections B2B : méthode et exemples | Setting",
    description:
      "Les 5 objections B2B les plus fréquentes — avec les bonnes et mauvaises réponses. Ce que 'c'est trop cher' veut dire en réalité.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/gestion-objections-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/gestion-objections-b2b',
      'x-default': 'https://www.setting.live/ressources/gestion-objections-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/gestion-objections-b2b',
  headline: "Gérer les objections en vente B2B : méthode et exemples",
  description:
    "Les objections en vente B2B ne se traitent pas toutes pareil. Vraies objections vs prétextes, les 5 plus fréquentes avec réponses concrètes.",
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
  url: 'https://www.setting.live/ressources/gestion-objections-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/gestion-objections-b2b',
  },
  image: 'https://www.setting.live/ressources/gestion-objections-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Méthode de vente B2B',
  wordCount: 2800,
  about: [
    { '@type': 'Thing', name: 'Objections commerciales B2B' },
    { '@type': 'Thing', name: 'Techniques de vente' },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce qu'une objection en vente B2B ?",
    answer:
      "Une objection est une résistance exprimée par le prospect pendant le processus de vente. Elle peut être réelle (doute légitime qui nécessite une réponse) ou être un prétexte (volonté de mettre fin à la conversation sans conflit direct). Les distinguer est la compétence principale d'un closeur.",
  },
  {
    question: "Comment répondre à 'je dois réfléchir' ?",
    answer:
      "'Je dois réfléchir' est presque toujours un prétexte. La réponse directe : 'Bien sûr. Pour que je comprenne : il y a quelque chose de flou sur notre offre, ou c'est plutôt que vous n'êtes pas encore convaincu que c'est la bonne solution pour vous ?' La réponse dit exactement où vous en êtes et quoi traiter.",
  },
  {
    question: "Est-ce qu'on peut prévenir les objections plutôt que les traiter ?",
    answer:
      "En grande partie oui. Les objections prix arrivent quand la valeur n'a pas été établie. Les objections 'besoin d'en parler à quelqu'un' arrivent quand le décideur n'a pas été qualifié en début d'appel. Les objections timing arrivent quand l'urgence n'a pas été créée pendant la discovery. Une bonne discovery prévient 60 % des objections.",
  },
  {
    question: "Combien de fois peut-on relancer après une objection ?",
    answer:
      "Une fois. Si vous traitez une objection et que le prospect en sort une nouvelle, traitez-la. Si une troisième arrive, c'est le signal que la décision est non — juste exprimée poliment. À ce stade, clarifiez directement : 'J'ai l'impression qu'on ne va pas dans la bonne direction. Qu'est-ce qui vous pose problème fondamentalement ?'",
  },
  {
    question: "L'objection prix signifie-t-elle toujours que c'est trop cher ?",
    answer:
      "Non. Dans la majorité des cas, l'objection prix signifie que la valeur perçue est insuffisante — pas que le prix est objectivement trop élevé. Si le prospect voyait clairement comment votre offre lui rapportait 10 000 € pour 3 000 €, le prix ne serait pas un problème. L'objection prix est un signal de discovery incomplète.",
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
      name: 'Gérer les objections B2B',
      item: 'https://www.setting.live/ressources/gestion-objections-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GestionObjectionsPage() {
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
              <li className="text-text-primary">Gérer les objections B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Gérer les objections en vente B2B : méthode et exemples
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Toutes les objections ne se traitent pas de la même façon. Il y a celles qui méritent une réponse
              et celles qui signalent que la décision est non. Confondre les deux vous fait passer du temps
              à argumenter avec des gens qui ne signeront pas.
            </p>
            <AuthorBlock date="2026-03-18" readTime="9 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Section 1 — Vraies vs fausses */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Vraies objections et objections-prétextes
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Une vraie objection est un doute légitime. Le prospect a une raison concrète de ne pas
              signer maintenant — un budget bloqué jusqu&apos;au trimestre suivant, un co-décideur à
              impliquer, un contrat en cours avec un concurrent. Ces objections méritent une réponse.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Une objection-prétexte est une sortie de secours. Le prospect n&apos;est pas convaincu
              mais il ne veut pas le dire directement. Il dit &ldquo;je vais réfléchir&rdquo;, &ldquo;envoyez-moi
              une plaquette&rdquo;, &ldquo;ce n&apos;est pas le bon moment&rdquo;. Traiter ces objections
              comme si elles étaient réelles est une perte de temps.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Objections réelles — à traiter
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Budget bloqué jusqu'au T3",
                    "Besoin de valider avec mon associé",
                    "Sous contrat avec un prestataire jusqu'en juin",
                    "Pas convaincu que c'est la bonne approche pour mon secteur",
                    "Besoin d'un essai avant de s'engager",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                  Prétextes — à clarifier, pas à traiter
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Je vais réfléchir (sans date)",
                    "Envoyez-moi une plaquette",
                    "Ce n'est pas le bon moment",
                    "C'est trop cher (sans avoir parlé de valeur)",
                    "Je reviens vers vous",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              La distinction se fait en posant une question directe : &ldquo;Est-ce que c&apos;est
              une question de timing ou c&apos;est que vous n&apos;êtes pas encore convaincu que
              c&apos;est la bonne solution ?&rdquo; La réponse dit exactement dans quelle situation
              vous êtes.
            </p>
          </section>

          <CtaArticle variant="methode" />

          {/* Section 2 — Les 5 objections */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 5 objections les plus fréquentes — et comment les traiter
            </h2>
            <div className="space-y-8">
              {[
                {
                  objection: "\"C'est trop cher\"",
                  diagnostic: "Dans 80 % des cas : la valeur n'a pas été établie. Le prospect compare votre prix à zéro, pas au coût de son problème.",
                  mauvaise: "\"Non, en fait on est dans la moyenne du marché et par rapport à ce qu'on offre...\" — défense du prix, perte de temps.",
                  bonne: "\"Vous avez mis un chiffre sur ce que ça vous coûte actuellement de ne pas résoudre ça ?\" — retour sur la valeur. Si le problème coûte 60 000 € par an et votre solution 24 000 €, le prix n'est plus le sujet.",
                },
                {
                  objection: "\"Je dois en parler à mon associé\"",
                  diagnostic: "Vraie objection si vous ne saviez pas qu'il y avait un co-décideur. Prétexte si ça arrive en fin d'appel sans que ce soit une surprise.",
                  mauvaise: "\"Pas de problème, je vous envoie un récap et vous pouvez lui transmettre\" — vous perdez le contrôle de la conversation.",
                  bonne: "\"Tout à fait. La meilleure façon d'avancer c'est qu'on organise un appel à trois — comme ça vous n'avez pas à tout réexpliquer et on répond à ses questions directement. Vous avez 30 minutes en commun cette semaine ?\"",
                },
                {
                  objection: "\"Je vais réfléchir\"",
                  diagnostic: "Prétexte dans 90 % des cas. Le prospect ne sait pas quoi objecter ou ne veut pas dire non directement.",
                  mauvaise: "\"Bien sûr, prenez le temps qu'il faut, je reviens vers vous dans une semaine.\" — vous attendez un non différé.",
                  bonne: "\"Bien sûr. Pour que je comprenne mieux : il y a quelque chose sur notre offre qui n'est pas clair, ou c'est plutôt que vous n'êtes pas encore convaincu que c'est la bonne approche pour vous ?\" La réponse vous dit exactement où vous en êtes.",
                },
                {
                  objection: "\"Ce n'est pas le bon moment\"",
                  diagnostic: "Parfois réel (fin d'exercice, période de recrutement, migration technique en cours). Souvent un prétexte.",
                  mauvaise: "\"Je comprends, je vous recontacte dans 3 mois.\" — vous confiez votre pipeline à l'espoir.",
                  bonne: "\"Qu'est-ce qui se passe en ce moment qui rend ce timing difficile ?\" Si la réponse est concrète, planifiez un suivi précis. Sinon : \"Admettons qu'on ne fasse rien maintenant — dans 3 mois, le problème sera toujours là ?\"",
                },
                {
                  objection: "\"J'ai déjà quelqu'un pour ça\"",
                  diagnostic: "Vraie objection — il faut comprendre la situation exacte. Est-ce qu'ils sont satisfaits ? Est-ce que ça couvre exactement votre offre ?",
                  mauvaise: "Argumenter que vous êtes meilleur que le prestataire actuel sans savoir ce qu'il fait.",
                  bonne: "\"C'est bien. Qu'est-ce que vous faites avec eux actuellement ? Et est-ce qu'il y a des choses que vous aimeriez qu'ils fassent mieux ?\" Ça peut ouvrir une complémentarité ou révéler une insatisfaction.",
                },
              ].map(({ objection, diagnostic, mauvaise, bonne }) => (
                <div key={objection} className="border border-white/[0.06] rounded-xl overflow-hidden">
                  <div className="bg-bg-secondary px-5 py-4 border-b border-white/[0.06]">
                    <p className="font-sans font-semibold text-text-primary text-sm">{objection}</p>
                    <p className="font-sans text-xs text-text-secondary mt-1">{diagnostic}</p>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <div className="px-5 py-4 border-b sm:border-b-0 sm:border-r border-white/[0.06]">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/50 mb-2">
                        Mauvaise réponse
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed italic">{mauvaise}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                        Bonne réponse
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed italic">{bonne}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Prévenir plutôt que traiter */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Prévenir plutôt que traiter
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La plupart des objections courantes sont évitables si la discovery call a bien été conduite.
            </p>
            <div className="space-y-3">
              {[
                { objection: "Objection prix", cause: "Valeur non établie pendant la discovery", prevention: "Demander le coût du statu quo avant de parler de l'offre." },
                { objection: "Besoin d'en parler à quelqu'un", cause: "Décideur non qualifié en début d'appel", prevention: "Demander dès les premières minutes qui co-décide." },
                { objection: "Pas le bon moment", cause: "Urgence non créée pendant l'exploration", prevention: "Demander : 'Si on ne résout pas ça dans 3 mois, que se passe-t-il ?'" },
                { objection: "Je vais réfléchir", cause: "Valeur floue + pas de demande de décision", prevention: "Synthèse du problème en fin de discovery + demande de décision explicite." },
              ].map(({ objection, cause, prevention }) => (
                <div key={objection} className="flex gap-4 py-3 border-b border-white/[0.06] last:border-0">
                  <div className="shrink-0 w-36">
                    <p className="font-sans text-xs font-semibold text-text-secondary/60">{objection}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-xs text-text-secondary mb-1">Cause : {cause}</p>
                    <p className="font-sans text-xs text-accent">Prévention : {prevention}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="border-l-2 border-white/[0.06] pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">{question}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{answer}</p>
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
                { href: '/ressources/closing-b2b', label: 'Closing B2B : définition, méthode et programme complet' },
                { href: '/ressources/discovery-call-b2b', label: "Discovery call B2B : structure, questions et erreurs à éviter" },
                { href: '/ressources/script-closing-b2b', label: 'Scripts et phrases de closing B2B : cadre et exemples' },
                { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
                { href: '/ressources/closer-b2b', label: 'Closer B2B : définition et compétences' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
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
              Vous perdez des deals sur des objections que vous pourriez éviter ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder où vos deals se perdent et ce qui changerait
              dans votre cas. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          <div className="mt-8 text-center">
            <a href="/ressources" className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors">
              ← Retour au blog
            </a>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/discovery-call-b2b', title: 'Discovery call B2B : structure, questions et erreurs à éviter', readTime: '10 min' },
            { href: '/ressources/closing-b2b', title: 'Closing B2B : définition, méthode et programme complet', readTime: '25 min' },
            { href: '/ressources/script-closing-b2b', title: 'Scripts et phrases de closing B2B : cadre et exemples', readTime: '10 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
