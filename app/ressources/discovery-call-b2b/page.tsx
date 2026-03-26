import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Discovery call B2B : guide complet | Setting",
  description:
    "La discovery call est le premier appel du closeur. Structure en 4 phases, 10 questions clés et 3 erreurs qui font perdre des deals.",
  openGraph: {
    title: "Discovery call B2B : guide complet | Setting",
    description:
      "Comment conduire une discovery call B2B qui mène au closing : structure, questions, erreurs à éviter. Le guide terrain.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/discovery-call-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/discovery-call-b2b',
      'x-default': 'https://www.setting.live/ressources/discovery-call-b2b',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discovery call B2B : guide complet | Setting',
    description: "Comment conduire une discovery call B2B qui m\u00e8ne au closing : structure, questions, erreurs \u00e0 \u00e9viter. Le guide terrain.",
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/discovery-call-b2b',
  headline: "Discovery call B2B : structure, questions et erreurs à éviter",
  description:
    "La discovery call est le premier appel commercial du closeur. Structure en 4 phases, les 10 meilleures questions à poser, les 3 erreurs qui font perdre des deals.",
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
  url: 'https://www.setting.live/ressources/discovery-call-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/discovery-call-b2b',
  },
  image: 'https://www.setting.live/ressources/discovery-call-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Méthode de vente B2B',
  wordCount: 2800,
  about: [
    { '@type': 'Thing', name: 'Discovery call B2B' },
    { '@type': 'Thing', name: 'Qualification commerciale' },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce qu'une discovery call ?",
    answer:
      "La discovery call est le premier appel commercial conduit par le closeur avec un prospect qualifié. Son objectif n'est pas de vendre — c'est de comprendre le problème, le contexte, les tentatives précédentes et le coût du statu quo avant de présenter quoi que ce soit. Une discovery bien conduite mobilise 60 à 70 % de l'appel en questions et écoute.",
  },
  {
    question: "Combien de temps doit durer une discovery call ?",
    answer:
      "Entre 30 et 45 minutes en général. La phase de questions dure 20 à 30 minutes. Le pitch, s'il a lieu dans le même appel, prend 10 à 15 minutes. Certains closeurs séparent discovery et pitch en deux appels distincts — c'est souvent une bonne idée sur des deals à forte valeur, ça permet de revenir avec une présentation vraiment adaptée.",
  },
  {
    question: "Faut-il préparer une liste de questions avant chaque appel ?",
    answer:
      "Oui, mais pas pour les suivre à la lettre. Une liste de questions sert de filet de sécurité. Ce qui compte en discovery c'est la qualité d'écoute et la capacité à creuser les réponses intéressantes. 'Dites-m'en plus' ou 'Comment ça se traduit concrètement ?' sont souvent plus utiles que la question suivante sur votre liste.",
  },
  {
    question: "Que faire si le prospect commence à poser des questions sur l'offre en pleine discovery ?",
    answer:
      "Répondre brièvement et recentrer : 'Je vais vous répondre sur ce point dans un moment — avant ça, je voudrais comprendre [question spécifique].' Laisser le prospect piloter la conversation vers le pitch trop tôt vous prive des informations dont vous avez besoin pour présenter l'offre de façon pertinente.",
  },
  {
    question: "Comment qualifier le décideur pendant la discovery ?",
    answer:
      "Directement : 'Pour avancer sur ce sujet, c'est vous qui prenez la décision ou vous avez besoin de valider avec d'autres personnes ?' Si quelqu'un d'autre co-décide, demandez comment les impliquer. Passer une heure en discovery avec quelqu'un qui ne peut pas signer est le temps le moins bien investi d'un closeur.",
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
      name: 'Discovery call B2B',
      item: 'https://www.setting.live/ressources/discovery-call-b2b',
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment conduire une discovery call B2B',
  description:
    'Structure en 4 phases pour conduire une discovery call B2B efficace : ouverture et cadrage, exploration du problème, qualification du décideur et du timing, synthèse et transition vers le pitch.',
  totalTime: 'PT30M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Ouverture et cadrage',
      text: 'Posez le cadre de l\'appel dès le début : expliquez que vous allez d\'abord comprendre la situation du prospect avant de parler de votre offre. Cela signale que vous n\'allez pas pitcher immédiatement et rassure le prospect.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Exploration du problème',
      text: 'Phase centrale de la discovery. Cherchez à comprendre le problème précis, depuis combien de temps il existe, ce qu\'il coûte concrètement et ce qui a déjà été essayé. Approfondissez chaque réponse intéressante avant de passer à la question suivante.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Qualification du décideur et du timing',
      text: 'Avant de présenter quoi que ce soit, déterminez si la personne en face peut prendre la décision. Si quelqu\'un d\'autre est impliqué, demandez comment les rejoindre. Évaluez l\'urgence réelle et les contraintes de délai.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Synthèse et transition',
      text: 'Résumez ce que vous avez compris dans vos propres mots pour montrer que vous avez écouté. Validez avec le prospect, puis ouvrez la transition vers le pitch ou proposez une prochaine étape concrète.',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DiscoveryCallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema, howToSchema]),
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
              <li className="text-text-primary">Discovery call B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Discovery call B2B : structure, questions et erreurs à éviter
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La majority des deals perdus ne se perdent pas sur les objections. Ils se perdent parce
              que le closeur a pitché sans vraiment comprendre ce que le prospect voulait. La discovery
              call est la phase qui évite ça — et la plupart des gens la bâclent.
            </p>
            <AuthorBlock date="2026-03-18" readTime="10 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Résultat concret */}
          <div data-speakable="true" className="border-l-2 border-accent/30 pl-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Résultat concret
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              10 RDV consécutifs, 0 contrat signé. En première session de coaching, on a retravaillé
              la structure de la discovery — passer d&apos;une présentation de l&apos;offre à une
              exploration du problème client. Le RDV suivant : signé. Les 7 d&apos;après aussi.
              Le seul changement : commencer par écouter avant de parler.
            </p>
          </div>

          {/* Section 1 — Définition */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce qu&apos;est une discovery call — et ce que ce n&apos;est pas
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Une discovery call est le premier appel commercial conduit par le closeur avec un
              prospect qualifié. Son objectif n&apos;est pas de vendre. C&apos;est de comprendre
              le problème, le contexte et les enjeux du prospect avant de présenter quoi que ce soit.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce n&apos;est pas un pitch déguisé. Ce n&apos;est pas une démonstration produit. Et ce
              n&apos;est pas un interrogatoire. C&apos;est une conversation structurée où le closeur
              pose des questions, écoute les réponses et creuse ce qui est important.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Une discovery bien conduite mobilise 60 à 70 % du temps de l&apos;appel en questions
              et écoute. Le pitch, s&apos;il a lieu dans le même appel, arrive après. Souvent,
              les meilleurs closeurs séparent la discovery du pitch en deux appels distincts
              sur des deals à forte valeur.
            </p>
          </section>

          {/* Section 2 — Structure */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La structure en 4 phases
            </h2>
            <div className="space-y-5">
              {[
                {
                  step: '01',
                  title: "Ouverture et cadrage",
                  desc: "Posez le cadre de l'appel d'emblée : 'Je voudrais qu'on prenne le temps de comprendre votre situation avant qu'on parle de notre offre. Ça nous prend 20-25 minutes. Ça vous convient ?' Ça signale que vous n'allez pas pitcher immédiatement — et ça rassure.",
                },
                {
                  step: '02',
                  title: "Exploration du problème",
                  desc: "C'est la phase centrale. Vous cherchez à comprendre : quel est le problème précis, depuis quand, ce qu'il coûte concrètement, ce qui a déjà été essayé. Chaque réponse intéressante mérite un approfondissement avant de passer à la question suivante.",
                },
                {
                  step: '03',
                  title: "Qualification du décideur et du timing",
                  desc: "Avant de présenter quoi que ce soit : est-ce que la personne en face peut prendre la décision ? Si quelqu'un d'autre est impliqué, comment les rejoindre ? Et quelle est l'urgence réelle — est-ce qu'il y a un événement ou une date qui crée une contrainte ?",
                },
                {
                  step: '04',
                  title: "Synthèse et transition",
                  desc: "Résumez ce que vous avez compris dans vos propres mots : 'Si je comprends bien, votre problème principal c'est X, vous avez déjà essayé Y sans résultat, et l'enjeu c'est Z.' Ça montre que vous avez écouté et crée l'ouverture pour le pitch.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CtaArticle variant="methode" />

          {/* Section 3 — Questions */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les questions qui font avancer une discovery
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Pas toutes les questions se valent. Les questions fermées (réponse oui/non) ferment
              la conversation. Les questions ouvertes l&apos;ouvrent. Et les questions de
              conséquence — celles qui font réfléchir le prospect au coût de son problème — sont
              les plus utiles pour la suite.
            </p>
            <div className="space-y-4">
              {[
                {
                  categorie: "Comprendre le problème",
                  questions: [
                    "Qu'est-ce qui vous a amené à regarder ce sujet maintenant ?",
                    "Comment ça se manifeste concrètement au quotidien ?",
                    "C'est un problème récent ou vous composez avec depuis longtemps ?",
                  ],
                },
                {
                  categorie: "Mesurer l'enjeu",
                  questions: [
                    "Si on ne résout pas ça dans les 6 prochains mois, qu'est-ce que ça vous coûte ?",
                    "Vous avez essayé de quantifier l'impact sur votre activité ?",
                    "Qu'est-ce que ça changerait pour vous si ce problème était réglé ?",
                  ],
                },
                {
                  categorie: "Qualifier les tentatives précédentes",
                  questions: [
                    "Vous avez déjà essayé des choses pour régler ça ? Qu'est-ce qui n'a pas marché ?",
                    "Pourquoi vous n'avez pas continué avec la solution précédente ?",
                  ],
                },
                {
                  categorie: "Qualifier la décision",
                  questions: [
                    "Pour avancer, vous prenez la décision seul ou vous avez besoin d'impliquer quelqu'un d'autre ?",
                    "Il y a une contrainte de timing de votre côté ?",
                  ],
                },
              ].map(({ categorie, questions }) => (
                <div key={categorie} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    {categorie}
                  </p>
                  <ul className="space-y-2">
                    {questions.map((q) => (
                      <li key={q} className="flex gap-2 font-sans text-sm text-text-secondary">
                        <span className="text-accent/50 shrink-0 mt-0.5">→</span>
                        <span className="italic">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Erreurs */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 erreurs qui font perdre des deals avant le pitch
            </h2>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  titre: "Pitcher dans les 5 premières minutes",
                  texte: "Le prospect pose une question sur votre offre ou votre tarif. Vous répondez en détail. Vous venez de court-circuiter la discovery. Résultat : vous allez présenter une offre générique à quelqu'un dont vous ne connaissez pas le problème réel. La réponse correcte : 'Je vais vous répondre sur ce point, mais avant ça j'ai besoin de comprendre [question]. Est-ce qu'on peut prendre 10 minutes pour ça ?'",
                },
                {
                  num: '02',
                  titre: "Ne pas demander le coût du statu quo",
                  texte: "Si le prospect n'a pas mis de chiffre sur son problème, le prix de votre offre sera toujours trop élevé. Forcer la réflexion sur le coût du statu quo — pas avec une question agressive, mais avec une question de conséquence — crée l'ancre mentale sur laquelle votre prix est ensuite comparé. '3 000 € par mois' contre 'rien' semble cher. '3 000 € par mois' contre '60 000 € de manque à gagner annuel' est autre chose.",
                },
                {
                  num: '03',
                  titre: "Ne pas qualifier le décideur",
                  texte: "Passer 45 minutes en discovery avec quelqu'un qui va 'en parler à son associé' avant de décider est le temps le moins bien investi d'un closeur. Qualifiez tôt : 'Pour avancer sur ce sujet, vous prenez la décision seul ?' Si quelqu'un d'autre co-décide, la prochaine étape c'est un appel avec les deux personnes — pas une relance en solo.",
                },
              ].map(({ num, titre, texte }) => (
                <div key={num} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Erreur {num} — {titre}
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Exemple */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Exemple de déroulé — 30 minutes
            </h2>
            <div className="space-y-3">
              {[
                { temps: '0–2 min', etape: "Accueil et cadrage", detail: "Présentation courte. Proposez le format : 'Je voudrais d'abord comprendre votre situation avant de vous parler de notre approche. On a 30 minutes — ça vous convient ?'" },
                { temps: '2–20 min', etape: "Exploration du problème", detail: "Questions ouvertes. Creusez les réponses. Demandez le coût du statu quo. Écoutez sans interrompre sur les points importants." },
                { temps: '20–24 min', etape: "Qualification décision et timing", detail: "Qui décide. Y a-t-il une contrainte de date. Ce qui se passe si rien n'est fait dans les 3 prochains mois." },
                { temps: '24–27 min', etape: "Synthèse et ouverture", detail: "Résumez dans vos mots ce que vous avez compris. Validez. Puis : 'Voilà comment on travaille et pourquoi ça correspond à ce que vous décrivez.'" },
                { temps: '27–30 min', etape: "Prochaine étape", detail: "Proposez une suite concrète — pas 'je vous envoie une plaquette'. Un deuxième appel avec le co-décideur, un devis, ou une décision directe selon le niveau de maturité." },
              ].map(({ temps, etape, detail }) => (
                <div key={temps} className="flex gap-4 py-3 border-b border-white/[0.06] last:border-0">
                  <span className="font-sans text-xs text-text-secondary/50 tabular-nums shrink-0 w-16 pt-0.5">{temps}</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">{etape}</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{detail}</p>
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
                { href: '/ressources/gestion-objections-b2b', label: 'Gérer les objections en vente B2B : méthode et exemples' },
                { href: '/ressources/script-closing-b2b', label: 'Scripts et phrases de closing B2B : cadre et exemples' },
                { href: '/ressources/closer-b2b', label: 'Closer B2B : définition, compétences et recrutement' },
                { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
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
              Vous voulez travailler la structure de vos appels ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder comment vous conduisez vos discoveries actuellement
              et identifier ce qui changerait votre taux de closing. Gratuit. Sans engagement.
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
            { href: '/ressources/gestion-objections-b2b', title: 'Gérer les objections en vente B2B : méthode et exemples', readTime: '9 min' },
            { href: '/ressources/qualification-leads-b2b', title: 'Qualifier un lead en B2B 2026 : méthodes, critères et exemples', readTime: '8 min' },
            { href: '/ressources/closing-b2b', title: 'Closing B2B : définition, méthode et programme complet', readTime: '25 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
