import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Inbound Setting LinkedIn : transformer l'engagement en RDV qualifi\u00e9s (2026)",
  description:
    "L'inbound setting LinkedIn consiste \u00e0 d\u00e9tecter les signaux d'int\u00e9r\u00eat (likes, commentaires, vues de profil) pour engager des prospects chauds. M\u00e9thode en 5 \u00e9tapes, scripts et outils.",
  openGraph: {
    title: "Inbound Setting LinkedIn : transformer l'engagement en RDV qualifi\u00e9s (2026)",
    description:
      "L'inbound setting LinkedIn consiste \u00e0 d\u00e9tecter les signaux d'int\u00e9r\u00eat (likes, commentaires, vues de profil) pour engager des prospects chauds. M\u00e9thode en 5 \u00e9tapes, scripts et outils.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/inbound-setting-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/inbound-setting-linkedin',
      'x-default': 'https://www.setting.live/ressources/inbound-setting-linkedin',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inbound Setting LinkedIn : transformer l'engagement en RDV qualifi\u00e9s (2026)",
    description:
      "L'inbound setting LinkedIn consiste \u00e0 d\u00e9tecter les signaux d'int\u00e9r\u00eat (likes, commentaires, vues de profil) pour engager des prospects chauds. M\u00e9thode en 5 \u00e9tapes, scripts et outils.",
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/inbound-setting-linkedin#article',
  headline: "Inbound Setting LinkedIn : transformer l'engagement en RDV qualifi\u00e9s",
  description:
    "L'inbound setting LinkedIn consiste \u00e0 d\u00e9tecter les signaux d'int\u00e9r\u00eat (likes, commentaires, vues de profil) pour engager des prospects chauds. M\u00e9thode en 5 \u00e9tapes, scripts et outils.",
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
  datePublished: '2026-04-12',
  dateModified: '2026-04-12',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/inbound-setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/inbound-setting-linkedin',
  },
  image: 'https://www.setting.live/ressources/inbound-setting-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Inbound Setting LinkedIn',
  wordCount: 3500,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: [
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/inbound-setting-linkedin#inbound-setting',
      name: 'Inbound setting LinkedIn',
      description:
        "M\u00e9thode de prospection r\u00e9active sur LinkedIn qui consiste \u00e0 d\u00e9tecter les signaux d'int\u00e9r\u00eat g\u00e9n\u00e9r\u00e9s par votre propre contenu (likes, commentaires, visites de profil, demandes de connexion) puis \u00e0 engager ces prospects chauds avec un message contextualis\u00e9. Taux de r\u00e9ponse : 25-40 %.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Comment transformer l'engagement LinkedIn en RDV qualifi\u00e9s",
  description:
    "Les 5 \u00e9tapes pour exploiter les signaux inbound LinkedIn et les convertir en rendez-vous qualifi\u00e9s.",
  totalTime: 'P14D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Cr\u00e9er du contenu qui g\u00e9n\u00e8re des signaux',
      text: "Publiez 2 \u00e0 3 posts LinkedIn par semaine sur les probl\u00e9matiques de votre ICP. Privil\u00e9giez les posts d'opinion, les \u00e9tudes de cas et les r\u00e9sultats chiffr\u00e9s.",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'D\u00e9tecter et scorer les signaux',
      text: "Utilisez Reactin ou v\u00e9rifiez manuellement chaque jour. Classez les signaux : chaud (commentaire d\u00e9taill\u00e9), ti\u00e8de (like simple), froid (visite de profil seule).",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Envoyer le premier message contextualis\u00e9',
      text: "R\u00e9pondez dans les 24 heures avec un message ancr\u00e9 sur le signal. Pas de pitch. Une observation pr\u00e9cise et une question ouverte.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Qualifier le prospect',
      text: "Posez 3 \u00e0 5 questions naturelles pour \u00e9valuer le besoin, le budget, le timing et le d\u00e9cideur. Gardez le ton conversationnel.",
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'S\u00e9curiser le rendez-vous',
      text: "Quand le prospect confirme un int\u00e9r\u00eat explicite, proposez un cr\u00e9neau pr\u00e9cis ou un lien Calendly. Pr\u00e9parez un brief pour le closer.",
    },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce que l'inbound setting LinkedIn ?",
    answer:
      "L'inbound setting LinkedIn est une m\u00e9thode de prospection r\u00e9active. Au lieu de contacter des inconnus (outbound), vous d\u00e9tectez les personnes qui ont d\u00e9j\u00e0 interagi avec votre contenu LinkedIn (likes, commentaires, visites de profil, demandes de connexion) et vous les engagez avec un message contextualis\u00e9. Le prospect vous conna\u00eet d\u00e9j\u00e0, ce qui produit des taux de r\u00e9ponse 3 \u00e0 5 fois sup\u00e9rieurs au cold outreach.",
  },
  {
    question: "Quelle diff\u00e9rence entre inbound setting et outbound setting ?",
    answer:
      "L'outbound setting consiste \u00e0 contacter des prospects qui ne vous connaissent pas, en se basant sur des signaux tiers (r\u00e9actions sur les posts d'autres comptes, changements de poste). L'inbound setting exploite uniquement les signaux g\u00e9n\u00e9r\u00e9s par votre propre activit\u00e9 LinkedIn. Le prospect a d\u00e9j\u00e0 vu votre nom, lu votre contenu, ou visit\u00e9 votre profil. La conversation d\u00e9marre avec un niveau de confiance plus \u00e9lev\u00e9.",
  },
  {
    question: "Quel taux de r\u00e9ponse avec l'inbound setting LinkedIn ?",
    answer:
      "Les taux de r\u00e9ponse observ\u00e9s en inbound setting oscillent entre 25 et 40 %, contre 5 \u00e0 15 % en outbound setting et 2 \u00e0 5 % en cold outreach sans signal. Le facteur cl\u00e9 est la rapidit\u00e9 : un message envoy\u00e9 dans les 24 heures apr\u00e8s le signal obtient 60 \u00e0 70 % de r\u00e9ponse positive.",
  },
  {
    question: "Quels outils pour l'inbound setting LinkedIn ?",
    answer:
      "Reactin (49 \u20ac/mois) d\u00e9tecte automatiquement les r\u00e9actions sur vos posts et les classe par type de signal. LinkedIn gratuit suffit pour le suivi manuel. Sales Navigator (99 \u20ac/mois) est optionnel mais utile pour enrichir les profils d\u00e9tect\u00e9s. BreakCold (29 \u20ac/mois) g\u00e8re le pipeline. Make (29 \u20ac/mois) automatise les notifications.",
  },
  {
    question: "L'inbound setting LinkedIn fonctionne-t-il sans cr\u00e9er de contenu ?",
    answer:
      "Difficilement. Sans contenu LinkedIn, vous ne g\u00e9n\u00e9rez pas de signaux inbound (r\u00e9actions, commentaires). Vous pouvez exploiter les visites de profil et les demandes de connexion entrantes, mais le volume sera limit\u00e9. Pour un pipeline inbound r\u00e9gulier, 2 \u00e0 3 posts par semaine sont n\u00e9cessaires.",
  },
  {
    question: "Combien de temps avant les premiers r\u00e9sultats ?",
    answer:
      "Les premiers rendez-vous arrivent d\u00e8s la deuxi\u00e8me semaine si vous publiez d\u00e9j\u00e0 du contenu. En partant de z\u00e9ro, comptez 3 \u00e0 4 semaines pour que le contenu g\u00e9n\u00e8re assez de signaux exploitables. Le r\u00e9gime de croisi\u00e8re (5 \u00e0 12 RDV par mois en inbound seul) s'installe en 6 \u00e0 8 semaines.",
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
      name: 'Inbound Setting LinkedIn',
      item: 'https://www.setting.live/ressources/inbound-setting-linkedin',
    },
  ],
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'definition', label: "Qu'est-ce que l'inbound setting LinkedIn ?" },
  { id: 'pourquoi', label: "Pourquoi l'inbound setting surpasse le cold outreach" },
  { id: 'signaux', label: 'Les 3 types de signaux inbound \u00e0 d\u00e9tecter' },
  { id: 'etape-1', label: '\u00c9tape 1 : Cr\u00e9er du contenu qui g\u00e9n\u00e8re des signaux' },
  { id: 'etape-2', label: '\u00c9tape 2 : D\u00e9tecter et scorer les signaux' },
  { id: 'etape-3', label: '\u00c9tape 3 : Le premier message (scripts concrets)' },
  { id: 'etape-4', label: '\u00c9tape 4 : Qualifier le prospect' },
  { id: 'etape-5', label: '\u00c9tape 5 : S\u00e9curiser le RDV' },
  { id: 'outils', label: 'Outils pour automatiser votre inbound setting' },
  { id: 'resultats', label: 'R\u00e9sultats concrets et benchmarks 2026' },
  { id: 'pieges', label: 'Les pi\u00e8ges \u00e0 \u00e9viter' },
  { id: 'faq', label: 'Questions fr\u00e9quentes' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InboundSettingLinkedinPage() {
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
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Inbound Setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/ressources/setting-linkedin" className="hover:underline transition-colors">Setting LinkedIn</a> &middot; Guide inbound
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Inbound Setting LinkedIn : transformer l&apos;engagement en RDV qualifi&eacute;s
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Quelqu&apos;un a lik&eacute; votre post. Un autre a comment&eacute;. Un troisi&egrave;me
              a visit&eacute; votre profil. Chaque interaction est un signal. La question :
              qu&apos;est-ce que vous en faites&nbsp;? L&apos;inbound setting, c&apos;est la m&eacute;thode
              pour transformer ces signaux en conversations, puis en rendez-vous. Ce guide
              pose les 5 &eacute;tapes, les scripts, les outils et les benchmarks 2026.
            </p>
            <AuthorBlock date="2026-04-12" readTime="15 min de lecture" dateLabel="12 avril 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              L&apos;<strong className="text-text-primary">inbound setting LinkedIn</strong> exploite
              les signaux g&eacute;n&eacute;r&eacute;s par votre propre contenu : likes, commentaires,
              visites de profil, demandes de connexion. Au lieu de contacter des inconnus, vous engagez
              des prospects qui vous connaissent d&eacute;j&agrave;. Taux de r&eacute;ponse :
              25 &agrave; 40&nbsp;% (vs 2-5&nbsp;% en cold outreach). M&eacute;thode en 5 &eacute;tapes :
              cr&eacute;er du contenu, d&eacute;tecter les signaux, envoyer le bon message, qualifier,
              s&eacute;curiser le RDV. R&eacute;sultat vis&eacute; : 5 &agrave; 12 RDV qualifi&eacute;s
              par mois en inbound seul.
            </p>
          </TldrBox>

          {/* D\u00e9finition */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10" itemScope itemType="https://schema.org/DefinedTerm" data-speakable="true">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary leading-relaxed" itemProp="name">
              <strong>Inbound setting LinkedIn</strong>
            </p>
            <p className="font-sans text-text-secondary leading-relaxed text-sm mt-1" itemProp="description">
              M&eacute;thode de prospection r&eacute;active sur LinkedIn qui consiste &agrave; d&eacute;tecter
              les signaux d&apos;int&eacute;r&ecirc;t g&eacute;n&eacute;r&eacute;s par votre propre contenu
              (likes, commentaires, visites de profil, demandes de connexion) puis &agrave; engager ces
              prospects chauds avec un message contextualis&eacute;. Le prospect vous conna&icirc;t d&eacute;j&agrave;.
              La conversation d&eacute;marre avec un niveau de confiance &eacute;lev&eacute;.
              Taux de r&eacute;ponse observ&eacute; : 25 &agrave; 40&nbsp;%.
            </p>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-3 gap-4 mb-14" data-speakable="true">
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">25-40&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">Taux de r&eacute;ponse inbound setting</p>
            </div>
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">60-70&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">De r&eacute;ponse si message &lt;&nbsp;24h</p>
            </div>
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">5-12</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">RDV qualifi&eacute;s/mois en inbound seul</p>
            </div>
            <p className="col-span-3 font-sans text-xs text-text-muted text-center">
              Sources : donn&eacute;es terrain Setting (800+ messages inbound analys&eacute;s, 2025-2026)
            </p>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Sommaire</p>
            <ol className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item.id} className="flex gap-3 font-sans text-sm">
                  <span className="text-accent shrink-0 font-semibold">{i + 1}.</span>
                  <a href={`#${item.id}`} className="text-text-secondary hover:text-text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ═══ SECTION 1 — D\u00e9finition ═══ */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qu&apos;est-ce que l&apos;inbound setting LinkedIn&nbsp;?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;<strong className="text-text-primary">inbound setting</strong> est une approche
              de prospection r&eacute;active. Contrairement au cold outreach o&ugrave; vous contactez
              des inconnus, ici le prospect a d&eacute;j&agrave; montr&eacute; un int&eacute;r&ecirc;t
              pour ce que vous faites. Il a lik&eacute; votre post. Comment&eacute; votre publication.
              Visit&eacute; votre profil. Demand&eacute; la connexion.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Chacune de ces actions est un signal d&apos;int&eacute;r&ecirc;t. L&apos;inbound setting
              consiste &agrave; capter ce signal, &agrave; analyser le profil du prospect, puis &agrave;
              engager une conversation naturelle qui m&egrave;ne vers un rendez-vous qualifi&eacute;.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le terme &laquo;&nbsp;<a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">setting LinkedIn</a>&nbsp;&raquo;
              d&eacute;signe l&apos;ensemble du processus de prospection sur LinkedIn. L&apos;inbound
              setting en est la version la plus chaude : vous ne partez jamais de z&eacute;ro.
              Le prospect a fait le premier pas.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Si vous &ecirc;tes fondateur, consultant ou expert et que vous publiez
              r&eacute;guli&egrave;rement sur LinkedIn, vous avez d&eacute;j&agrave; la mati&egrave;re premi&egrave;re.
              Votre contenu g&eacute;n&egrave;re des signaux. Le setting les transforme en pipeline.
            </p>
          </section>

          {/* ═══ SECTION 2 — Pourquoi ═══ */}
          <section id="pourquoi" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi l&apos;inbound setting surpasse le cold outreach
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Ce n&apos;est pas une question de message. C&apos;est une question de contexte.
              Un prospect qui a comment&eacute; votre post n&apos;est pas dans le m&ecirc;me
              &eacute;tat mental qu&apos;un inconnu qui re&ccedil;oit un DM. Le premier est
              curieux. Le second est m&eacute;fiant.
            </p>

            {/* Comparison table */}
            <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden mb-6">
              <div className="grid grid-cols-3 border-b border-white/[0.06]">
                <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent">Approche</div>
                <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent">Taux de r&eacute;ponse</div>
                <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent">Contexte</div>
              </div>
              <div className="grid grid-cols-3 border-b border-white/[0.06]">
                <div className="px-4 py-3 font-sans text-sm text-text-secondary">Cold outreach</div>
                <div className="px-4 py-3 font-sans text-sm text-text-secondary">2-5&nbsp;%</div>
                <div className="px-4 py-3 font-sans text-sm text-text-secondary">Aucun. Le prospect ne vous conna&icirc;t pas.</div>
              </div>
              <div className="grid grid-cols-3 border-b border-white/[0.06]">
                <div className="px-4 py-3 font-sans text-sm text-text-secondary">Outbound setting (signal tiers)</div>
                <div className="px-4 py-3 font-sans text-sm text-text-secondary">12-25&nbsp;%</div>
                <div className="px-4 py-3 font-sans text-sm text-text-secondary">Le prospect explore le sujet mais ne vous conna&icirc;t pas.</div>
              </div>
              <div className="grid grid-cols-3">
                <div className="px-4 py-3 font-sans text-sm font-semibold text-text-primary">Inbound setting</div>
                <div className="px-4 py-3 font-sans text-sm font-semibold text-accent">25-40&nbsp;%</div>
                <div className="px-4 py-3 font-sans text-sm font-semibold text-text-primary">Le prospect vous conna&icirc;t d&eacute;j&agrave;.</div>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Pourquoi un tel &eacute;cart&nbsp;? La confiance. Quand vous contactez quelqu&apos;un
              qui a comment&eacute; votre post, il sait qui vous &ecirc;tes. Il a lu votre point
              de vue. Votre message n&apos;est pas une interruption. C&apos;est la suite d&apos;une
              conversation qu&apos;il a lui-m&ecirc;me initi&eacute;e.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;autre avantage : le volume est naturellement filtr&eacute;. Seuls les profils
              qui s&apos;int&eacute;ressent &agrave; votre sujet apparaissent dans vos signaux.
              Vous ne perdez pas de temps &agrave; qualifier des listes. Les signaux font
              la pr&eacute;-qualification pour vous.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le cold outreach reste utile quand on a besoin de volume. Mais pour la qualit&eacute;
              des conversations et le taux de conversion, l&apos;inbound setting est loin devant.
              Les bases de la <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">m&eacute;thode setting LinkedIn</a> sont
              dans notre guide d&eacute;di&eacute;.
            </p>
          </section>

          {/* ═══ SECTION 3 — Signaux ═══ */}
          <section id="signaux" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 types de signaux inbound &agrave; d&eacute;tecter
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Tous les signaux n&apos;ont pas la m&ecirc;me valeur. Un commentaire d&eacute;taill&eacute;
              sur votre post vaut 10 likes simples. Voici les trois cat&eacute;gories, class&eacute;es
              par chaleur. Pour aller plus loin sur la d&eacute;tection, consultez notre guide sur les
              <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors"> signaux d&apos;achat LinkedIn</a>.
            </p>

            <div className="space-y-6">
              {/* Signal 1 */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">R&eacute;actions &agrave; vos posts</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">Signal chaud</span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-3">
                    Likes, commentaires, partages sur vos publications. Le commentaire d&eacute;taill&eacute;
                    est le signal le plus fort : le prospect a pris du temps pour r&eacute;agir &agrave;
                    votre point de vue. Le like seul est un signal ti&egrave;de mais exploitable en volume.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Exemple :</strong> Un directeur
                    commercial commente votre post sur les limites du cold calling. Il partage son
                    exp&eacute;rience. Ce n&apos;est pas un like poli. C&apos;est un signal d&apos;achat.
                  </p>
                </div>
              </div>

              {/* Signal 2 */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">Visites de profil</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">Signal ti&egrave;de</span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-3">
                    Quelqu&apos;un consulte votre profil LinkedIn. Il peut venir d&apos;un post,
                    d&apos;une recommandation algorithmique ou d&apos;une recherche directe.
                    La visite seule ne suffit pas, mais coupl&eacute;e &agrave; un profil ICP,
                    elle justifie une prise de contact.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Exemple :</strong> Un VP
                    Sales d&apos;une SaaS B2B visite votre profil apr&egrave;s avoir lu votre post.
                    Il n&apos;a pas lik&eacute;, mais il a cliqu&eacute;. C&apos;est un signal &agrave; exploiter.
                  </p>
                </div>
              </div>

              {/* Signal 3 */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">Demandes de connexion entrantes</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">Signal fort</span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-3">
                    Le prospect fait d&eacute;lib&eacute;r&eacute;ment le premier pas. Il veut &ecirc;tre
                    dans votre r&eacute;seau. C&apos;est le signal le plus exploitable en inbound setting :
                    le prospect a d&eacute;j&agrave; accept&eacute; l&apos;id&eacute;e d&apos;une relation.
                    Le message de remerciement est votre porte d&apos;entr&eacute;e.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Exemple :</strong> Un fondateur
                    de startup vous envoie une demande de connexion sans note. Vous acceptez et
                    engagez la conversation avec un message contextualis&eacute; sur son activit&eacute; r&eacute;cente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ SECTION 4 — \u00c9tape 1 ═══ */}
          <section id="etape-1" className="mb-14 scroll-mt-24">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">&Eacute;tape 1 sur 5</p>
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Cr&eacute;er du contenu qui g&eacute;n&egrave;re des signaux
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;inbound setting ne commence pas au premier message. Il commence
              &agrave; la publication. Pas de post, pas de r&eacute;actions. Pas de r&eacute;actions,
              pas de signaux. Pas de signaux, rien &agrave; convertir. Votre contenu LinkedIn,
              c&apos;est votre g&eacute;n&eacute;rateur de prospects chauds.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              L&apos;enjeu n&apos;est pas la fr&eacute;quence. C&apos;est de publier du contenu
              qui attire votre ICP et provoque des r&eacute;actions exploitables. Un post qui
              g&eacute;n&egrave;re 15 commentaires de d&eacute;cideurs vaut plus que 500 likes
              de profils hors cible.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { type: "Posts d'opinion", detail: "Prenez position sur un sujet de votre secteur. Les opinions polaris\u00e9es g\u00e9n\u00e8rent des commentaires de personnes qui partagent ou contestent votre point de vue. Les deux sont des signaux." },
                { type: '\u00c9tudes de cas', detail: "Partagez les r\u00e9sultats concrets de vos clients (anonymis\u00e9s ou non). Les d\u00e9cideurs qui ont le m\u00eame probl\u00e8me s'identifient et r\u00e9agissent." },
                { type: 'R\u00e9sultats chiffr\u00e9s', detail: "Des stats pr\u00e9cises attirent l'attention. \u00ab\u00a025 RDV qualifi\u00e9s en 6 semaines\u00a0\u00bb g\u00e9n\u00e8re plus de signaux que \u00ab\u00a0nous aidons les entreprises \u00e0 prospecter\u00a0\u00bb." },
              ].map((item) => (
                <div key={item.type} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans font-semibold text-text-primary mb-2">{item.type}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Rythme recommand&eacute; : 2 &agrave; 3 posts par semaine</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                En dessous de 2 posts, le volume de signaux est insuffisant pour alimenter un pipeline
                r&eacute;gulier. Au-dessus de 5, la qualit&eacute; baisse et l&apos;algorithme vous
                p&eacute;nalise. Le sweet spot se situe entre 2 et 3 publications par semaine,
                publi&eacute;es les mardis et jeudis matin.
              </p>
            </div>
          </section>

          <CtaArticle />

          {/* ═══ SECTION 5 — \u00c9tape 2 ═══ */}
          <section id="etape-2" className="mb-14 scroll-mt-24">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">&Eacute;tape 2 sur 5</p>
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              D&eacute;tecter et scorer les signaux
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              D&eacute;tecter les signaux manuellement prend 30 &agrave; 45 minutes par jour.
              Un outil comme Reactin automatise cette d&eacute;tection et classe les profils
              par type de signal. Quelle que soit la m&eacute;thode, l&apos;objectif est le m&ecirc;me :
              chaque matin, savoir qui a interagi avec votre contenu dans les derni&egrave;res 24 heures.
            </p>

            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Tous les signaux ne se valent pas. Vous devez les scorer pour prioriser vos messages :
            </p>

            <div className="space-y-3 mb-6">
              {[
                { score: 'Chaud', color: 'text-accent', detail: "Commentaire d\u00e9taill\u00e9, partage avec commentaire, r\u00e9ponse \u00e0 un commentaire. Le prospect a investi du temps. Contactez-le dans les 12 heures." },
                { score: 'Ti\u00e8de', color: 'text-text-primary', detail: "Like simple, r\u00e9action emoji, visite de profil r\u00e9p\u00e9t\u00e9e. Int\u00e9r\u00eat pr\u00e9sent mais passif. Contactez dans les 24 heures si le profil correspond \u00e0 l'ICP." },
                { score: 'Froid', color: 'text-text-secondary', detail: "Visite de profil unique, like sur un post ancien. Signal faible. Ne contactez que si le profil est un ICP parfait." },
              ].map((item) => (
                <div key={item.score} className="flex gap-4 items-start">
                  <span className={`font-sans text-sm font-semibold shrink-0 w-16 ${item.color}`}>{item.score}</span>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Routine quotidienne : 15 minutes le matin</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Ouvrez Reactin ou vos notifications LinkedIn. Identifiez les nouveaux signaux.
                Classez par chaleur. S&eacute;lectionnez les 3 &agrave; 5 profils prioritaires.
                R&eacute;digez les messages. Le reste de la journ&eacute;e, vous &ecirc;tes libre.
              </p>
            </div>
          </section>

          {/* ═══ SECTION 6 — \u00c9tape 3 ═══ */}
          <section id="etape-3" className="mb-14 scroll-mt-24">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">&Eacute;tape 3 sur 5</p>
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le premier message : 3 scripts concrets
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Premier message = pas de pitch. C&apos;est un rebond sur ce que le prospect
              a fait. Il a comment&eacute;&nbsp;? Vous r&eacute;pondez &agrave; son commentaire.
              Il a visit&eacute; votre profil&nbsp;? Vous rebondissez l&agrave;-dessus.
              Trois scripts, un par type de signal. Pour d&apos;autres exemples de messages, consultez notre guide
              <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline transition-colors"> prospection LinkedIn B2B</a>.
            </p>

            <div className="space-y-6 mb-6">
              {/* Script 1 */}
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Apr&egrave;s un commentaire sur votre post</p>
                <div className="font-sans text-text-primary text-sm leading-relaxed space-y-2">
                  <p>&laquo;&nbsp;Merci pour votre commentaire sur [sujet du post], [pr&eacute;nom].</p>
                  <p>J&apos;ai vu que vous &ecirc;tes [poste] chez [entreprise]. Votre point sur [ce qu&apos;il/elle a dit] m&apos;a interpell&eacute;, on voit exactement la m&ecirc;me chose chez nos clients [secteur].</p>
                  <p>C&apos;est un sujet actif pour vous en ce moment&nbsp;?&nbsp;&raquo;</p>
                </div>
                <p className="font-sans text-text-secondary text-xs mt-3">3 phrases. Ancrage sur le signal. Question ouverte. Pas de pitch.</p>
              </div>

              {/* Script 2 */}
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Apr&egrave;s une visite de profil</p>
                <div className="font-sans text-text-primary text-sm leading-relaxed space-y-2">
                  <p>&laquo;&nbsp;[Pr&eacute;nom], j&apos;ai vu que vous aviez consult&eacute; mon profil.</p>
                  <p>En regardant le v&ocirc;tre, j&apos;ai not&eacute; que [observation pr&eacute;cise sur son activit&eacute; ou son poste]. On travaille avec plusieurs [type d&apos;entreprise] sur [sujet connexe].</p>
                  <p>Curiosit&eacute;&nbsp;: qu&apos;est-ce qui vous a amen&eacute; sur mon profil&nbsp;?&nbsp;&raquo;</p>
                </div>
                <p className="font-sans text-text-secondary text-xs mt-3">Naturel. Le prospect a fait le premier pas, vous rebondissez.</p>
              </div>

              {/* Script 3 */}
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Apr&egrave;s une demande de connexion</p>
                <div className="font-sans text-text-primary text-sm leading-relaxed space-y-2">
                  <p>&laquo;&nbsp;Merci pour la connexion, [pr&eacute;nom].</p>
                  <p>J&apos;ai regard&eacute; votre profil. [Observation pr&eacute;cise : r&eacute;cent post, projet, changement de poste]. On accompagne des [type de profils similaires] sur [sujet].</p>
                  <p>Qu&apos;est-ce qui vous a donn&eacute; envie de vous connecter&nbsp;?&nbsp;&raquo;</p>
                </div>
                <p className="font-sans text-text-secondary text-xs mt-3">Le prospect a initi&eacute; la relation. Votre message est une suite logique, pas une interruption.</p>
              </div>
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">R&egrave;gle d&apos;or : le message doit pouvoir &ecirc;tre lu en 10 secondes</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Si le prospect doit scroller pour voir la fin du message sur mobile, c&apos;est trop long.
                3 &agrave; 4 phrases maximum. Chaque phrase a un r&ocirc;le : ancrage, observation, question.
              </p>
            </div>
          </section>

          {/* ═══ SECTION 7 — \u00c9tape 4 ═══ */}
          <section id="etape-4" className="mb-14 scroll-mt-24">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">&Eacute;tape 4 sur 5</p>
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qualifier le prospect
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le prospect a r&eacute;pondu. La conversation est lanc&eacute;e. Maintenant, vous
              devez comprendre si ce prospect correspond &agrave; votre offre. Pas en l&apos;interrogeant.
              En posant des questions naturelles qui font avancer l&apos;&eacute;change.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Le framework de qualification en inbound setting suit quatre axes : Besoin, Budget,
              Timing, D&eacute;cideur. Vous ne posez pas ces questions directement. Vous les int&eacute;grez
              dans une conversation fluide.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { axe: 'Besoin', question: "\u00ab\u00a0Vous g\u00e9rez \u00e7a en interne ou vous avez d\u00e9j\u00e0 test\u00e9 une solution externe ?\u00a0\u00bb", objectif: "Comprendre s'il y a un probl\u00e8me actif, pas juste de la curiosit\u00e9." },
                { axe: 'Budget', question: "\u00ab\u00a0Vous avez d\u00e9j\u00e0 allou\u00e9 un budget pour \u00e7a ou c'est encore en exploration ?\u00a0\u00bb", objectif: "Identifier si le prospect est en phase d'achat ou de veille." },
                { axe: 'Timing', question: "\u00ab\u00a0C'est un sujet pour ce trimestre ou plut\u00f4t pour la rentr\u00e9e ?\u00a0\u00bb", objectif: '\u00c9valuer la probabilit\u00e9 de conversion \u00e0 court terme.' },
                { axe: 'D\u00e9cideur', question: "\u00ab\u00a0C'est vous qui pilotez ce projet ou il y a d'autres personnes impliqu\u00e9es ?\u00a0\u00bb", objectif: "Savoir si vous parlez au d\u00e9cideur ou \u00e0 un influenceur interne." },
              ].map((item) => (
                <div key={item.axe} className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06]">
                  <p className="font-sans font-semibold text-accent text-sm mb-1">{item.axe}</p>
                  <p className="font-sans text-text-primary text-sm mb-1 italic">{item.question}</p>
                  <p className="font-sans text-text-secondary text-xs leading-relaxed">{item.objectif}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Ne posez pas les quatre questions d&apos;affil&eacute;e. L&apos;objectif est une
              conversation, pas un interrogatoire. Deux &agrave; trois de ces questions r&eacute;parties
              sur deux messages suffisent pour savoir si un RDV a du sens. Si le prospect n&apos;a
              ni besoin actif, ni budget, ni timing, remerciez et passez au suivant.
            </p>
          </section>

          {/* ═══ SECTION 8 — \u00c9tape 5 ═══ */}
          <section id="etape-5" className="mb-14 scroll-mt-24">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">&Eacute;tape 5 sur 5</p>
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              S&eacute;curiser le RDV
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le moment de proposer un rendez-vous arrive quand le prospect a confirm&eacute; trois
              choses : il a un besoin actif, c&apos;est un sujet d&apos;actualit&eacute; pour lui,
              et il est ouvert &agrave; en discuter. Si vous proposez trop t&ocirc;t, vous passez
              en mode vendeur. Si vous attendez trop, l&apos;int&eacute;r&ecirc;t retombe.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] mb-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">La phrase de transition</p>
              <p className="font-sans text-text-primary text-sm leading-relaxed italic">
                &laquo;&nbsp;&Eacute;coutez [pr&eacute;nom], ce que vous d&eacute;crivez ressemble
                beaucoup &agrave; ce qu&apos;on fait chez [votre entreprise]. Je pense qu&apos;un
                &eacute;change de 20 minutes pourrait clarifier si on peut vous aider. Vous
                &ecirc;tes dispo cette semaine ou la semaine prochaine&nbsp;?&nbsp;&raquo;
              </p>
              <p className="font-sans text-text-secondary text-xs mt-3">
                Concret. Dur&eacute;e annonc&eacute;e. Deux options de timing. Pas de pression.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Si le prospect accepte, envoyez un lien Calendly dans la foul&eacute;e.
              Chaque heure qui passe entre le &laquo;&nbsp;oui&nbsp;&raquo; et le
              cr&eacute;neau r&eacute;serv&eacute; augmente le risque de no-show.
              Le lien doit partir dans les 5 minutes.
            </p>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Pr&eacute;parez un brief pour le closer (ou pour vous-m&ecirc;me si vous faites
              aussi le closing) : quel signal a d&eacute;clench&eacute; le contact, ce que le
              prospect a dit pendant la qualification, son niveau de maturit&eacute;, les objections
              potentielles. Ce brief &eacute;vite au prospect de r&eacute;p&eacute;ter ce qu&apos;il
              a d&eacute;j&agrave; dit et montre un niveau de professionnalisme qui rassure.
            </p>

            <p className="font-sans text-text-secondary leading-relaxed">
              Pour une m&eacute;thode compl&egrave;te de <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline transition-colors">prospection sur LinkedIn</a>,
              tout est l&agrave;-dedans. Si vous pr&eacute;f&eacute;rez
              <a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors"> externaliser votre prospection LinkedIn</a>,
              d&eacute;couvrez notre offre.
            </p>
          </section>

          {/* ═══ SECTION 9 — Outils ═══ */}
          <section id="outils" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Outils pour automatiser votre inbound setting
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Pas besoin d&apos;une usine &agrave; gaz. Cinq outils couvrent tout le pipeline,
              de la d&eacute;tection au rendez-vous.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { name: 'Reactin', role: 'D\u00e9tection des signaux inbound', price: '49 \u20ac/mois', detail: "Surveille chaque interaction sur vos posts LinkedIn. Classe les profils par type de signal (commentaire, like, partage). Exporte les donn\u00e9es vers votre CRM." },
                { name: 'LinkedIn (gratuit)', role: 'Base de votre pr\u00e9sence', price: 'Gratuit', detail: "Publiez du contenu, consultez les visites de profil, recevez les demandes de connexion. Suffisant pour d\u00e9marrer en inbound setting." },
                { name: 'Sales Navigator', role: 'Enrichissement des profils', price: '99 \u20ac/mois', detail: "Optionnel en inbound pur. Utile pour v\u00e9rifier si un profil correspond \u00e0 l'ICP avant de le contacter, et pour acc\u00e9der aux filtres avanc\u00e9s." },
                { name: 'BreakCold', role: 'CRM et pipeline', price: '29 \u20ac/mois', detail: "Suivez chaque prospect dans un pipeline d\u00e9di\u00e9. Statuts : signal d\u00e9tect\u00e9, message envoy\u00e9, r\u00e9ponse re\u00e7ue, RDV propos\u00e9, RDV confirm\u00e9." },
                { name: 'Make', role: 'Automatisation des notifications', price: '29 \u20ac/mois', detail: "Connecte Reactin \u00e0 Slack ou email. Recevez une notification d\u00e8s qu'un profil ICP interagit avec votre contenu." },
              ].map((tool) => (
                <div key={tool.name} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-sans font-semibold text-text-primary">{tool.name}</p>
                    <span className="font-sans text-xs text-accent font-semibold">{tool.price}</span>
                  </div>
                  <p className="font-sans text-text-secondary text-xs uppercase tracking-widest mb-2">{tool.role}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{tool.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Budget total : 136 &agrave; 235&nbsp;&euro;/mois</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Rentabilis&eacute; d&egrave;s le premier rendez-vous sign&eacute; si votre ticket moyen
                d&eacute;passe 1 000&nbsp;&euro;. Pour conna&icirc;tre nos tarifs de setting
                externalis&eacute;, consultez notre <a href="/tarifs" className="text-accent hover:underline transition-colors">page tarifs</a>.
              </p>
            </div>
          </section>

          {/* ═══ SECTION 10 — R\u00e9sultats ═══ */}
          <section id="resultats" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              R&eacute;sultats concrets et benchmarks 2026
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Chiffres terrain, tir&eacute;s de nos programmes d&apos;inbound setting
              en 2025-2026. Inbound seul &mdash; sans compter les RDV outbound.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden mb-6">
              <div className="grid grid-cols-2 border-b border-white/[0.06]">
                <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent">Indicateur</div>
                <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent">Benchmark inbound</div>
              </div>
              {[
                { metric: 'Volume de signaux', value: '30 \u00e0 80 par semaine' },
                { metric: 'Taux de r\u00e9ponse', value: '25-40 %' },
                { metric: 'Taux de RDV (sur r\u00e9ponse)', value: '50-70 %' },
                { metric: 'RDV qualifi\u00e9s par mois', value: '5 \u00e0 12 (inbound seul)' },
                { metric: 'D\u00e9lai premier r\u00e9sultat', value: '2 \u00e0 3 semaines' },
                { metric: 'ROI \u00e0 3 mois', value: 'x4 \u00e0 x6' },
              ].map((row, i, arr) => (
                <div key={row.metric} className={`grid grid-cols-2 ${i < arr.length - 1 ? 'border-b border-white/[0.06]' : ''}`}>
                  <div className="px-4 py-3 font-sans text-sm text-text-secondary">{row.metric}</div>
                  <div className="px-4 py-3 font-sans text-sm font-semibold text-text-primary">{row.value}</div>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le volume de signaux d&eacute;pend directement de votre fr&eacute;quence de publication.
              Un cr&eacute;ateur qui publie 3 fois par semaine avec 500+ impressions par post
              g&eacute;n&egrave;re en moyenne 50 &agrave; 80 signaux exploitables par semaine.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              x4 &agrave; x6, concr&egrave;tement : pour 1&nbsp;&euro; investi (outils + temps),
              vous g&eacute;n&eacute;rez 4 &agrave; 6&nbsp;&euro; de CA. Et le ratio s&apos;am&eacute;liore
              avec le temps. Vos anciens posts continuent de g&eacute;n&eacute;rer des signaux.
              Plus vous publiez, plus le volant tourne vite.
            </p>
          </section>

          {/* ═══ SECTION 11 — Pi\u00e8ges ═══ */}
          <section id="pieges" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les pi&egrave;ges &agrave; &eacute;viter
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Sur le papier, c&apos;est simple. En pratique, cinq erreurs reviennent
              sans arr&ecirc;t.
            </p>

            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'R\u00e9pondre trop tard',
                  detail: "Un signal perd 50 % de sa valeur apr\u00e8s 24 heures. Apr\u00e8s 48 heures, le prospect a oubli\u00e9 votre post. La fen\u00eatre d'attention est courte. Les meilleurs setters r\u00e9pondent dans les 12 heures.",
                },
                {
                  num: '02',
                  title: 'Envoyer un pitch d\u00e8s le premier message',
                  detail: "Le prospect a lik\u00e9 votre post. Il n'a pas demand\u00e9 une d\u00e9mo. Un pitch au premier message d\u00e9truit la confiance que le signal avait cr\u00e9\u00e9e. Le premier message ouvre la conversation. Le pitch vient apr\u00e8s la qualification.",
                },
                {
                  num: '03',
                  title: 'Ignorer les signaux faibles',
                  detail: "Un like simple ne justifie pas un message d\u00e9di\u00e9. Mais 3 likes en 2 semaines du m\u00eame profil ICP, c'est un pattern. Les signaux faibles deviennent forts en s\u00e9rie. Suivez les r\u00e9currences.",
                },
                {
                  num: '04',
                  title: 'Ne pas cr\u00e9er de contenu',
                  detail: "Pas de contenu, pas de signaux, pas d'inbound. Certains tentent de faire de l'inbound setting sans publier. Le r\u00e9sultat : 2 \u00e0 3 visites de profil par semaine au lieu de 30 \u00e0 80 signaux.",
                },
                {
                  num: '05',
                  title: 'Automatiser les r\u00e9ponses',
                  detail: "Les outils d'automatisation de messages LinkedIn d\u00e9truisent la qualit\u00e9 de l'inbound. Le prospect a interagi avec VOTRE contenu. Il attend UNE r\u00e9ponse personnelle. Un message automatis\u00e9 se rep\u00e8re imm\u00e9diatement et g\u00e9n\u00e8re un sentiment de trahison.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-red-500/40 bg-red-500/10 flex items-center justify-center text-red-400 text-xs font-semibold font-sans">{item.num}</div>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{item.title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ FAQ ═══ */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fr&eacute;quentes</h2>
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">{item.question}</p>
                  <p className="font-sans text-text-secondary leading-relaxed text-sm faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">Pour aller plus loin</p>
            <div className="space-y-3">
              {[
                { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet (d\u00e9finition et m\u00e9thode)' },
                { href: '/ressources/signal-achat-linkedin', label: "Signal d'achat LinkedIn : comment les d\u00e9tecter" },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : scripts et exemples' },
                { href: '/methode/setting-linkedin', label: 'La m\u00e9thode setting LinkedIn en d\u00e9tail' },
                { href: '/externaliser-prospection-linkedin', label: 'Externaliser votre prospection LinkedIn' },
              ].map(({ href, label }) => (
                <a key={label} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06] mt-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Setting</p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">Votre inbound setting op&eacute;r&eacute; par des experts</h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              On g&egrave;re le contenu, la d&eacute;tection, la r&eacute;daction des messages
              et la qualification. Vous, vous recevez les RDV dans votre agenda. 5 RDV qualifi&eacute;s
              minimum par mois. D&eacute;marrage en 2 semaines.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              D&eacute;l&eacute;guer mon inbound setting &rarr;
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : le guide complet (d\u00e9finition et m\u00e9thode)', readTime: '18 min' },
            { href: '/ressources/signal-achat-linkedin', title: "Signal d'achat LinkedIn : comment les d\u00e9tecter", readTime: '8 min' },
            { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : scripts et exemples', readTime: '22 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
