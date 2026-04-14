import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "C'est quoi un signal d'achat LinkedIn ? | Setting",
  description:
    "Signal d'achat LinkedIn : action détectable qui révèle l'intérêt d'un prospect. Définition, 3 types de signaux et comment les exploiter.",
  openGraph: {
    title: "C'est quoi un signal d'achat LinkedIn ?",
    description:
      "Inbound ou signal tiers : deux façons de détecter des prospects chauds avant même qu'ils vous contactent. La base du setting moderne.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/signal-achat-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/signal-achat-linkedin',
      'x-default': 'https://www.setting.live/ressources/signal-achat-linkedin',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "C'est quoi un signal d'achat LinkedIn ?",
    description: "Inbound ou signal tiers : deux fa\u00e7ons de d\u00e9tecter des prospects chauds avant m\u00eame qu'ils vous contactent. La base du setting moderne.",
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/signal-achat-linkedin',
  headline: "C'est quoi un signal d'achat LinkedIn ?",
  description:
    "Un signal d'achat LinkedIn est une action détectable — like, commentaire, interaction sur un compte tiers — qui indique qu'un prospect s'intéresse activement à un sujet lié à votre offre.",
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/signal-achat-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/signal-achat-linkedin',
  },
  image: 'https://www.setting.live/ressources/signal-achat-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 2000,
  about: [
    { '@type': 'Thing', name: 'Signaux d\'achat LinkedIn' },
    { '@type': 'Thing', name: 'Intent data B2B' },
  ],
}

const faqItems = [
  {
    question: "Quelle est la différence entre un signal inbound et un signal tiers ?",
    answer:
      "Un signal inbound, c'est quand un prospect réagit à vos propres posts LinkedIn. Un signal tiers, c'est quand il réagit au contenu d'un autre compte que vous surveillez — sur un sujet lié à votre offre. Dans les deux cas, le prospect a levé la main sans vous contacter directement.",
  },
  {
    question: "Faut-il répondre à tous les signaux de la même façon ?",
    answer:
      "Non. La qualité du signal détermine l'approche. Un like passif : message court, question ouverte pour qualifier. Un commentaire : lisez-le d'abord, répondez au fond. Un signal fort (commentaire détaillé, question précise) : ignorez le template, répondez directement et proposez le call.",
  },
  {
    question: "Peut-on utiliser les signaux d'achat sans outil spécialisé ?",
    answer:
      "Partiellement. Les signaux inbound (réactions à vos posts) sont visibles directement dans LinkedIn. Les signaux tiers (réactions sur d'autres comptes) nécessitent un outil de surveillance comme Reactin ou Spyer pour être détectés automatiquement. Sans outil, vous en manquerez la majorité.",
  },
  {
    question: "Combien de temps reste valide un signal d'achat ?",
    answer:
      "Un signal frais (moins de 2 semaines) justifie un message qui le référence directement. Au-delà, préférez une approche indirecte qui part du sujet métier plutôt que de l'interaction. Un signal ancien indique un intérêt, mais la fenêtre d'attention s'est refermée — il faut créer un nouveau contexte.",
  },
  {
    question: "Le signal d'achat remplace-t-il la prospection à froid ?",
    answer:
      "Non, il la complète. La prospection sortante via Sales Navigator cible des profils pertinents sans signal préalable. Les signaux d'achat créent un contexte qui rend le premier message plus pertinent et moins intrusif. Les deux flux coexistent dans un système de setting structuré.",
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
      name: "Signal d'achat LinkedIn",
      item: 'https://www.setting.live/ressources/signal-achat-linkedin',
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const signalTypes = [
  {
    level: 'Faible',
    label: 'Like passif',
    color: 'text-text-secondary',
    dot: 'bg-text-muted/40',
    desc: "Le prospect a liké un post sur un sujet lié à votre offre. L'intérêt existe, mais il n'est pas encore verbalié. Objectif du DM : qualifier avant de pitcher. Message court, question ouverte.",
    rule: 'Template générique envoyé. Court et ouvert.',
  },
  {
    level: 'Moyen',
    label: 'Commentaire',
    color: 'text-accent',
    dot: 'bg-accent/60',
    desc: "Le prospect a commenté un post pertinent. C'est un signal plus fort : il a pris le temps d'écrire. Lisez le commentaire avant d'envoyer quoi que ce soit. Si la question est précise, répondez au fond directement.",
    rule: 'Lire le commentaire. Adapter la réponse au contenu.',
  },
  {
    level: 'Fort',
    label: 'Signal fort',
    color: 'text-green-400',
    dot: 'bg-green-500',
    desc: "Question détaillée, commentaire long, partage avec avis personnel. La fenêtre d'attention est ouverte — elle se refermera vite. Ignorez le template. Répondez directement au commentaire et proposez le call.",
    rule: 'Ignorer le template. Répondre dans les 24h.',
  },
]

const fluxSteps = [
  { step: '1', label: 'Signal détecté', sub: 'Inbound ou tiers' },
  { step: '2', label: 'Qualité évaluée', sub: 'Like / commentaire / signal fort' },
  { step: '3', label: 'Message adapté', sub: 'Direct ou indirect' },
  { step: '4', label: 'Prospect répond', sub: 'Conversation ouverte' },
  { step: '5', label: 'Qualification', sub: '2 à 3 questions max' },
  { step: '6', label: 'Call décroché', sub: 'RDV qualifié' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SignalAchatLinkedInPage() {
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
              <li className="text-text-primary">Signal d&apos;achat LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/setting" className="hover:underline transition-colors">Setting</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              C&apos;est quoi un signal d&apos;achat LinkedIn ?
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La plupart des solopreneurs pensent que prospecter sur LinkedIn, c&apos;est contacter des inconnus à froid.
              Un signal d&apos;achat, c&apos;est l&apos;opposé : le prospect a déjà levé la main — vous n&apos;avez plus qu&apos;à le voir.
            </p>
            <AuthorBlock date="2026-03-17" readTime="7 min de lecture" dateLabel="17 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Definition Block */}
          <div data-speakable="true" className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Un <strong>signal d&apos;achat LinkedIn</strong> est une action détectable — like, commentaire,
              interaction sur un post tiers — qui indique qu&apos;un prospect s&apos;intéresse activement
              à un sujet lié à votre offre. Il n&apos;a pas demandé à être contacté. Mais il a montré,
              par son comportement, qu&apos;il est en train de se poser les bonnes questions.
            </p>
          </div>

          {/* Section 1 — Pourquoi c'est important */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi le signal change tout
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un message envoyé sans signal est une interruption. Un message envoyé après un signal est
              une continuation. La différence n&apos;est pas stylistique — elle est structurelle.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Quand un prospect a liké un post sur la prospection B2B, commenté un article sur les rendements alternatifs,
              ou posé une question sur les techniques de closing : il est en train de chercher. Pas nécessairement
              votre offre spécifiquement — mais une réponse à un problème qui correspond exactement
              à ce que vous résolvez.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Votre message arrive alors dans un contexte d&apos;intérêt actif, pas de disruption.
              C&apos;est pourquoi les taux de réponse sur signaux sont structurellement plus élevés
              que sur la prospection purement froide.
            </p>

            {/* Stat */}
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Il faut en moyenne 8 points de contact pour décrocher un rendez-vous B2B.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Un signal d&apos;achat ne remplace pas ces 8 contacts — il rend chacun d&apos;eux plus pertinent.
                Le prospect répond parce que vous parlez d&apos;un sujet qu&apos;il explore déjà.
                (Source : Marketing Donut)
              </p>
            </div>
          </section>

          {/* Section 2 — Les 2 types */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 2 sources de signaux
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Tous les signaux ne viennent pas du même endroit. Dans un <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">système de setting LinkedIn</a> structuré,
              on distingue deux flux d&apos;acquisition distincts — avec des outils et des approches différentes.
              Les signaux inbound sont au cœur de l&apos;<a href="/ressources/inbound-setting-linkedin" className="text-accent hover:underline transition-colors">inbound setting LinkedIn</a>.
            </p>

            <div className="space-y-6">

              {/* Inbound */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <p className="font-sans font-semibold text-text-primary">Signal inbound</p>
                    <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">
                      Votre contenu
                    </span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">
                    Le prospect a interagi avec <strong className="text-text-primary font-semibold">un de vos posts</strong>.
                    Il vous connaît, au moins de nom. Il a vu votre contenu, il a montré un intérêt.
                    La relation de confiance est déjà amorcée d&apos;un côté.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Comment le détecter :</strong>{' '}
                    Les outils de surveillance inbound (type Reactin) trackent automatiquement chaque
                    interaction sur vos posts et déclenchent un DM selon le type de post.
                    Trois templates en production : un par type de post (découverte, évaluation, achat).
                  </p>
                </div>
              </div>

              {/* Signal tiers */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <p className="font-sans font-semibold text-text-primary">Signal tiers</p>
                    <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">
                      Comptes surveillés
                    </span>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">
                    Le prospect a interagi avec <strong className="text-text-primary font-semibold">le contenu d&apos;un autre compte</strong> que vous surveillez —
                    un créateur, un expert, un concurrent — sur un sujet lié à votre offre.
                    Il ne vous connaît pas encore. Mais il a montré, ailleurs, qu&apos;il cherche une réponse au problème que vous résolvez.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-3">
                    <strong className="text-text-primary font-semibold">Comment le détecter :</strong>{' '}
                    Les outils de surveillance tiers (type Spyer) détectent les interactions sur les comptes que vous avez
                    identifiés comme pertinents. Vous accédez ainsi à une audience qui ne vous suit pas encore,
                    mais qui s&apos;intéresse activement à votre sujet.
                  </p>
                  <div className="bg-bg-primary rounded-lg px-4 py-3 border border-white/[0.06]">
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">
                      <strong className="text-text-primary font-semibold">Règle clé :</strong>{' '}
                      le message sur signal tiers ne mentionne jamais la surveillance directement
                      si le signal est ancien ou le profil sur-sollicité. On part du sujet métier,
                      pas de &quot;j&apos;ai vu que vous avez liké un post&quot;.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <CtaArticle />

          {/* Section 3 — Les 3 niveaux de signal */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 niveaux de signal — et comment adapter votre réponse
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Tous les signaux n&apos;ont pas la même intensité. La qualité de l&apos;interaction
              détermine l&apos;approche. Envoyer le même template à un like passif et à un commentaire
              détaillé, c&apos;est rater 80&nbsp;% de la conversion.
            </p>

            <div className="space-y-4">
              {signalTypes.map((s, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                  <div className="px-6 py-4 flex items-center gap-3 border-b border-white/[0.06]">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${s.dot}`} />
                    <p className={`font-sans font-semibold ${s.color}`}>{s.label}</p>
                    <span className="font-sans text-xs text-text-secondary ml-auto">{s.level}</span>
                  </div>
                  <div className="px-6 py-5">
                    <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">{s.desc}</p>
                    <p className="font-sans text-xs text-text-secondary">
                      <strong className="text-text-primary font-semibold">Règle terrain :</strong> {s.rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Le flux complet */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Du signal au call : le flux complet
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Un signal seul ne génère pas de RDV. C&apos;est ce qui suit le signal — la qualité
              du message, la logique de qualification, le timing des relances — qui détermine
              si le signal se convertit en rendez-vous qualifié. C&apos;est tout l&apos;objet d&apos;une <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">méthode de setting LinkedIn</a> structurée.
            </p>

            <div className="space-y-0">
              {fluxSteps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                      {s.step}
                    </div>
                    {i < fluxSteps.length - 1 && (
                      <div className="w-px flex-1 my-1.5 bg-white/[0.06]" style={{ minHeight: '20px' }} />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{s.label}</p>
                    <p className="font-sans text-text-secondary text-xs">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                L&apos;erreur la plus courante : pitcher au premier DM.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Le premier message n&apos;a qu&apos;un objectif : ouvrir la conversation.
                Pas vendre. Pas présenter l&apos;offre. Pas mentionner les prix.
                Un seul objectif : créer un échange. La qualification vient après. Le pitch vient encore après.
              </p>
            </div>
          </section>

          {/* Section 5 — Direct vs Indirect */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Version directe ou indirecte : comment choisir
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Sur signal tiers, deux approches existent. Le choix dépend de l&apos;ancienneté
              du signal et du profil du prospect.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                <p className="font-sans font-semibold text-text-primary mb-2">Version directe</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                  Référence explicitement l&apos;interaction sur le contenu tiers.
                  Convertit mieux quand le signal est récent (moins de 2 semaines).
                </p>
                <p className="font-sans text-xs text-text-secondary italic">
                  &quot;J&apos;ai vu votre réaction sur un post autour de [sujet]. C&apos;est quelque chose que vous avez déjà creusé ?&quot;
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                <p className="font-sans font-semibold text-text-primary mb-2">Version indirecte</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                  Part du sujet métier, pas de la surveillance. Préférable sur les profils sur-sollicités
                  ou quand le signal est ancien.
                </p>
                <p className="font-sans text-xs text-text-secondary italic">
                  &quot;Je tombe sur votre profil en travaillant avec des [profil]. [Sujet], c&apos;est quelque chose que vous avez déjà exploré ?&quot;
                </p>
              </div>
            </div>

            <p className="font-sans text-sm text-text-secondary mt-4 leading-relaxed">
              La règle absolue dans les deux cas :{' '}
              <strong className="text-text-primary font-semibold">qualifier avant de pitcher.</strong>{' '}
              Le signal indique un intérêt — pas encore une intention d&apos;achat. C&apos;est la conversation
              qui permet de distinguer les deux.
            </p>
            <p className="text-sm text-text-muted italic mt-2">
              Pour aller plus loin : <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline">Social selling LinkedIn : d&eacute;finition et m&eacute;thode</a>
            </p>
          </section>

          {/* Section 6 — FAQ */}
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
                { href: '/methode/setting-linkedin', label: 'Setting LinkedIn B2B : notre méthode complète en 9 étapes' },
                { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet (définition, méthode et exemples)' },
                { href: '/ressources/inbound-setting-linkedin', label: 'Inbound Setting LinkedIn : transformer l\'engagement en RDV qualifiés' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/prospection-linkedin-b2b', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses" },
                { href: '/ressources/comment-prospecter-sur-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
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
              Vous voulez un système qui détecte et convertit les signaux pour vous ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Setting met en place le flux complet : surveillance des signaux, rédaction assistée
              par IA, suivi des conversations, RDV qualifiés livrés. Garantie 5 RDV minimum par mois.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Déléguer mon setting →
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te en 2026', readTime: '13 min' },
            { href: '/ressources/comment-prospecter-sur-linkedin', title: "IA, m\u00e9thode et humain : les 3 couches d\u2019un syst\u00e8me de setting LinkedIn qui tient sur la dur\u00e9e", readTime: '12 min' },
            { href: '/ressources/prospection-linkedin-b2b', title: "Pourquoi vos messages LinkedIn n\u2019obtiennent pas de r\u00e9ponses", readTime: '8 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
