import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Setting LinkedIn et IA : o\u00f9 mettre l'humain, o\u00f9 laisser la machine (2026) | Setting",
  description:
    "IA dans le setting LinkedIn en 2026 : ce que la machine fait bien (signal, clone de style), ce qui reste humain (jugement, qualif). Le vrai \u00e9quilibre.",
  openGraph: {
    title: "Setting LinkedIn et IA : o\u00f9 mettre l'humain, o\u00f9 laisser la machine (2026)",
    description:
      "IA dans le setting LinkedIn en 2026 : ce que la machine fait bien (signal, clone de style), ce qui reste humain (jugement, qualif). Le vrai \u00e9quilibre.",
    locale: 'fr_FR',
    type: 'article',
    url: 'https://www.setting.live/ressources/setting-linkedin-ia',
    images: [
      {
        url: 'https://www.setting.live/ressources/setting-linkedin-ia/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Setting LinkedIn et IA : o\u00f9 mettre l'humain, o\u00f9 laisser la machine",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Setting LinkedIn et IA : o\u00f9 mettre l'humain, o\u00f9 laisser la machine (2026)",
    description:
      "IA dans le setting LinkedIn en 2026 : ce que la machine fait bien (signal, clone de style), ce qui reste humain (jugement, qualif). Le vrai \u00e9quilibre.",
    images: ['https://www.setting.live/ressources/setting-linkedin-ia/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-linkedin-ia',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-linkedin-ia',
      'x-default': 'https://www.setting.live/ressources/setting-linkedin-ia',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-linkedin-ia#article',
  headline: "Setting LinkedIn et IA : o\u00f9 mettre l'humain, o\u00f9 laisser la machine (2026)",
  description:
    "IA dans le setting LinkedIn en 2026 : ce que la machine fait bien (d\u00e9tection de signal, clone de style, scoring), ce qui reste humain (jugement, contexte fin, qualification). La division du travail qui marche.",
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
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-linkedin-ia',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-linkedin-ia',
  },
  image: 'https://www.setting.live/ressources/setting-linkedin-ia/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 2500,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const faqItems = [
  {
    question: "L'IA peut-elle vraiment cloner mon style d'\u00e9criture ?",
    answer:
      "Oui, partiellement. Avec 3 \u00e0 5 posts suffisamment longs, un LLM moderne capture le rythme de phrase, le vocabulaire r\u00e9current, les tics d'\u00e9criture et le niveau de formalit\u00e9. Ce qu'il ne capture pas : les r\u00e9f\u00e9rences implicites, les blagues internes, l'intuition du moment. Le clone \u00e9crit dans votre voix \u00e0 70-80 %. Le reste se joue \u00e0 la relecture humaine.",
  },
  {
    question: "Quel est le meilleur mod\u00e8le LLM pour le setting LinkedIn en 2026 ?",
    answer:
      "Pour g\u00e9n\u00e9rer des messages de prospection, Claude Haiku 4.5 et GPT-4.1 offrent le meilleur rapport qualit\u00e9-prix. Claude Sonnet 4.5 gagne l\u00e9g\u00e8rement en nuance d'\u00e9criture. Pour le scoring et la d\u00e9tection de signal, les mod\u00e8les rapides (Haiku, GPT-4 mini) suffisent. Ne pas utiliser de mod\u00e8les open-source non finetun\u00e9s pour la r\u00e9daction : le style est trop plat.",
  },
  {
    question: "Est-ce que LinkedIn d\u00e9tecte les messages g\u00e9n\u00e9r\u00e9s par IA ?",
    answer:
      "LinkedIn ne d\u00e9tecte pas encore les messages g\u00e9n\u00e9r\u00e9s, mais les d\u00e9cideurs, eux, les rep\u00e8rent en 3 secondes. Les signaux : tournures g\u00e9n\u00e9riques, ponctuation trop propre, transitions trop parfaites, absence de contexte sp\u00e9cifique au prospect. Le risque LinkedIn vient plut\u00f4t des outils d'automatisation (Waalaxy, Dripify) qui envoient en masse et violent les CGU.",
  },
  {
    question: "Faut-il dire au prospect que le message a \u00e9t\u00e9 r\u00e9dig\u00e9 avec l'IA ?",
    answer:
      "Non, ce n'est pas attendu en 2026. Un message IA-assist\u00e9 mais relu, ajust\u00e9 et envoy\u00e9 par un humain reste un message humain, au m\u00eame titre qu'un texte corrig\u00e9 dans Grammarly. La question pertinente : est-ce que le message dit quelque chose de vrai sur le prospect ? Si oui, peu importe comment il a \u00e9t\u00e9 \u00e9crit.",
  },
  {
    question: "Combien de temps pour entra\u00eener un clone sur 5 posts ?",
    answer:
      "Z\u00e9ro entra\u00eenement au sens classique. Les outils de clone de style actuels (dont notre g\u00e9n\u00e9rateur) utilisent du few-shot prompting : les 3 \u00e0 5 posts sont pass\u00e9s au LLM au moment de la g\u00e9n\u00e9ration, sans fine-tuning. R\u00e9sultat en 10 secondes. Pour un vrai fine-tuning (au-del\u00e0 de 50 posts), compter 30 min de traitement mais l'\u00e9cart qualit\u00e9 reste faible.",
  },
  {
    question: "L'IA remplace-t-elle le setter ?",
    answer:
      "Non. L'IA remplace les t\u00e2ches r\u00e9p\u00e9titives du setter : parsing de profils, draft de message, scoring. Elle ne remplace ni le jugement (ce signal vaut-il la peine ?), ni le contexte fin (la phrase pr\u00e9cise \u00e0 citer), ni la qualification (les 2-3 questions qui valident le besoin). Un setter \u00e9quip\u00e9 d'IA traite 3 \u00e0 4 fois plus de prospects qu'un setter non \u00e9quip\u00e9, avec un taux de r\u00e9ponse \u00e9quivalent.",
  },
  {
    question: "Quel ROI attendre en combinant IA et humain ?",
    answer:
      "Sur un programme calibr\u00e9, l'IA fait gagner 60 \u00e0 80 % du temps de r\u00e9daction (de 8 min \u00e0 2 min par message), sans d\u00e9grader le taux de r\u00e9ponse. R\u00e9sultat : le setter passe d'environ 30 messages par jour \u00e0 80-100. Le co\u00fbt par RDV baisse de 30 \u00e0 40 %. Le plafond vient de la qualification, pas de la r\u00e9daction, donc le gain n'est pas lin\u00e9aire au-del\u00e0.",
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
      name: 'Setting LinkedIn et IA',
      item: 'https://www.setting.live/ressources/setting-linkedin-ia',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingLinkedInIaPage() {
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
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Setting LinkedIn et IA</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              M&eacute;thode 2026
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting LinkedIn et IA : o&ugrave; mettre l&apos;humain, o&ugrave; laisser la machine
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6" data-speakable="true">
              L&apos;IA a envahi la prospection LinkedIn. 100&nbsp;% des outils promettent
              d&eacute;sormais des messages &laquo;&nbsp;personnalis&eacute;s par IA&nbsp;&raquo;.
              R&eacute;sultat : des taux de r&eacute;ponse qui s&apos;effondrent, des d&eacute;cideurs
              satur&eacute;s, des comptes bannis. L&apos;IA sert vraiment \u2014 mais pas partout.
              Ce guide pose la vraie ligne : ce que la machine fait mieux qu&apos;un humain,
              ce que l&apos;humain ne peut pas d&eacute;l&eacute;guer, et la division du travail qui
              fonctionne en 2026.
            </p>
            <AuthorBlock date="2026-04-23" readTime="16 min de lecture" dateLabel="23 avril 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              L&apos;<strong className="text-text-primary">IA seule</strong> plafonne
              &agrave; 2-5&nbsp;% de r&eacute;ponse sur LinkedIn : le bruit est trop
              grand, le contexte fin manque. L&apos;<strong className="text-text-primary">humain
              seul</strong> ne passe pas &agrave; l&apos;&eacute;chelle : 30 messages
              par jour, c&apos;est le plafond. La r&eacute;ponse n&apos;est ni &laquo;&nbsp;tout IA&nbsp;&raquo;
              ni &laquo;&nbsp;tout humain&nbsp;&raquo; : c&apos;est une division du travail claire.
              L&apos;IA d&eacute;tecte, scor&eacute;e et draft&eacute;e. L&apos;humain juge, contextualise,
              qualifie. Gain de productivit&eacute; : x3 \u00e0 x4 sur le volume, taux de
              r&eacute;ponse maintenu \u00e0 15-35&nbsp;%.
            </p>
          </TldrBox>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* Section 1 — Pourquoi 100% IA ne marche pas */}
            <section id="ia-ne-marche-pas" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi 100&nbsp;% IA ne marche pas
              </h2>
              <p className="mb-4">
                Sur LinkedIn en 2026, un d&eacute;cideur re&ccedil;oit entre 15 et 40
                messages de prospection par semaine. La moiti&eacute; commence par
                &laquo;&nbsp;J&apos;esp&egrave;re que vous allez bien&nbsp;&raquo;. L&apos;autre
                moiti&eacute; mentionne son pr&eacute;nom et l&apos;entreprise, rien de plus.
                Le r&eacute;flexe est devenu brutal : 3 secondes de lecture, puis on archive.
              </p>
              <p className="mb-4">
                Le probl&egrave;me des messages 100&nbsp;% IA, c&apos;est qu&apos;ils
                sonnent pareils. M&ecirc;mes transitions, m&ecirc;me ponctuation
                propre, m&ecirc;mes formules de politesse. Le mod&egrave;le tape
                dans la moyenne statistique de son training set. Sans ancre
                factuelle pr&eacute;cise, &ccedil;a donne un texte bien &eacute;crit mais
                g&eacute;n&eacute;rique. Exactement ce que le d&eacute;cideur rep&egrave;re
                en un coup d&apos;&oelig;il.
              </p>
              <p className="mb-4">
                Deuxi&egrave;me probl&egrave;me : l&apos;IA n&apos;a pas acc&egrave;s
                au contexte fin. Elle voit le profil public, les 5 derniers posts,
                le titre de poste. Elle ne voit pas que ce prospect a chang&eacute;
                de job il y a 3 semaines, que sa derni&egrave;re publication
                \u00e9voquait une galère sp&eacute;cifique de recrutement, que
                son commentaire d&apos;hier sur le post d&apos;un concurrent valait
                100 fois l&apos;info du profil. Le contexte qui fait mouche est
                rarement dans les 2000 tokens fournis au mod&egrave;le.
              </p>
              <p className="mb-4">
                Troisi&egrave;me probl&egrave;me : les outils d&apos;automatisation
                complets (Waalaxy, Dripify, PhantomBuster) qui promettent des
                s&eacute;quences compl&egrave;tes g&eacute;n&eacute;r&eacute;es
                par IA violent les CGU LinkedIn. LinkedIn d&eacute;tecte les
                patterns d&apos;envoi (200 messages par jour depuis la m&ecirc;me
                session, timing r&eacute;gulier, Chrome extensions connues). Le
                r&eacute;sultat : avertissements, puis bannissements d&eacute;finitifs.
                Perdre un compte de 5 ans pour gagner 3 mois de prospection, c&apos;est
                un mauvais deal.
              </p>
              <p className="mb-4">
                Les chiffres qu&apos;on voit chez les clients qui d&eacute;brayent
                du &laquo;&nbsp;full IA&nbsp;&raquo; : taux de r&eacute;ponse entre
                2 et 5&nbsp;%, exactement comme le cold email des ann&eacute;es
                2015. L&apos;IA a juste remplac&eacute; le template par un template
                un peu plus vari&eacute;. Le volume est l&agrave;. La pertinence a
                disparu.
              </p>
              <p>
                Ce qui fait la diff&eacute;rence en prospection B2B, c&apos;est le
                jugement humain sur le signal et le contexte. Le <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">setting
                LinkediIn</a> pose la m&eacute;thode : signal, contexte, message, qualif.
                L&apos;IA peut acc&eacute;l&eacute;rer 3 de ces 4 &eacute;tapes. Elle
                ne peut pas les faire seule.
              </p>
            </section>

            {/* Section 2 — L\u00e0 o\u00f9 l'IA est r\u00e9ellement efficace */}
            <section id="ia-efficace" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                L&agrave; o&ugrave; l&apos;IA est r&eacute;ellement efficace en 2026
              </h2>
              <p className="mb-8">
                Trois usages o&ugrave; la machine fait mieux qu&apos;un humain. Pas
                &laquo;&nbsp;aussi bien&nbsp;&raquo;. Mieux. Plus vite, plus de volume,
                sans fatigue.
              </p>

              <div className="space-y-6 mb-8">

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Usage 1 &mdash; D&eacute;tection de signal
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-text-primary">Quoi.</span>{' '}
                    Scanner LinkedIn en continu pour rep&eacute;rer les signaux d&apos;achat :
                    prises de poste, posts viraux d&apos;un prospect, interactions sur
                    des comptes concurrents, mentions d&apos;un sujet cl&eacute;. Un
                    humain fait &ccedil;a en 2h par jour pour 50 comptes. L&apos;IA fait
                    5000 comptes en continu.
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-text-primary">Comment.</span>{' '}
                    Sales Navigator pour les alertes structur&eacute;es (changement de poste,
                    promotion, recrutement). Reactin ou outils similaires pour les r&eacute;actions
                    sur vos posts. Un script LLM qui parse les posts des comptes cibl&eacute;s
                    et rep&egrave;re les phrases-signal (&laquo;&nbsp;on cherche un freelance&nbsp;&raquo;,
                    &laquo;&nbsp;galere de recrutement&nbsp;&raquo;, &laquo;&nbsp;on a test&eacute;
                    l&apos;outil X&nbsp;&raquo;).
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">Gain.</span>{' '}
                    Le setter passe de 50 prospects surveill&eacute;s \u00e0 2000-5000.
                    Temps humain de d&eacute;tection : de 2h/jour \u00e0 15 min de
                    validation des alertes.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Usage 2 &mdash; Clone de style d&apos;&eacute;criture
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-text-primary">Quoi.</span>{' '}
                    G&eacute;n&eacute;rer un message de prospection dans le ton
                    exact de celui qui envoie. \u00c0 partir de 3-5 posts LinkedIn
                    du setter ou du dirigeant, un LLM moderne capture le rythme de
                    phrase, le vocabulaire r&eacute;current, le niveau de formalit&eacute;.
                    Pas un template qu&apos;on d&eacute;guise. Une voix qu&apos;on
                    reproduit.
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-text-primary">Comment.</span>{' '}
                    Few-shot prompting : on passe les 3-5 posts au mod&egrave;le au
                    moment de la g&eacute;n&eacute;ration. Pas de fine-tuning n&eacute;cessaire
                    pour un usage individuel. Le mod&egrave;le (Claude Haiku 4.5 ou Sonnet,
                    GPT-4.1) extrait les marqueurs stylistiques implicites et les applique
                    au brief factuel fourni. On a construit un{' '}
                    <a href="/outils/clone-style-linkedin" className="text-accent hover:underline transition-colors">g&eacute;n&eacute;rateur
                    gratuit</a> qui le fait en 10 secondes.
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">Gain.</span>{' '}
                    Temps de r&eacute;daction : de 8 min \u00e0 2 min par message.
                    Chaque setter peut &eacute;crire &laquo;&nbsp;dans sa voix&nbsp;&raquo;.
                    Chaque dirigeant peut faire ses propres prospections en 5 min.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Usage 3 &mdash; Priorisation et scoring
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-text-primary">Quoi.</span>{' '}
                    Classer 200 prospects par niveau de signal pour que le setter se
                    concentre sur les 20 les plus chauds. L&apos;IA &eacute;value trois
                    dimensions : fit ICP (fonction, secteur, taille), force du signal
                    (prise de poste &gt; post viral &gt; like simple), timing (frais vs
                    signal de 3 semaines).
                  </p>
                  <p className="mb-3">
                    <span className="font-semibold text-text-primary">Comment.</span>{' '}
                    Un prompt structur&eacute; qui produit un score 0-100 avec
                    justification en une phrase. M&ecirc;me un mod&egrave;le rapide (Haiku,
                    GPT-4 mini) suffit : la d&eacute;cision est simple, pas cr&eacute;ative.
                    R&eacute;sultat stock&eacute; dans le CRM, le setter attaque par score
                    d&eacute;croissant.
                  </p>
                  <p>
                    <span className="font-semibold text-text-primary">Gain.</span>{' '}
                    Le setter ne passe plus 30&nbsp;% de son temps sur des prospects hors
                    ICP ou sur des signaux faibles. Taux de r&eacute;ponse global qui
                    monte m&eacute;caniquement de 3 \u00e0 8 points.
                  </p>
                </div>

              </div>

              <p>
                Ces trois usages ont un point commun : l&apos;IA fait le travail r&eacute;p&eacute;titif
                et volumineux. Elle ne d&eacute;cide pas. Elle pr&eacute;pare une d&eacute;cision
                humaine. C&apos;est la ligne qui compte.
              </p>
            </section>

            {/* Section 3 — L\u00e0 o\u00f9 l'humain reste indispensable */}
            <section id="humain-indispensable" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                L&agrave; o&ugrave; l&apos;humain reste indispensable
              </h2>
              <p className="mb-8">
                Trois domaines o&ugrave; la machine ne remplace pas l&apos;humain.
                Pas par manque de puissance. Par nature du probl&egrave;me.
              </p>

              <div className="space-y-6 mb-8">

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Indispensable 1 &mdash; Jugement
                  </p>
                  <p className="mb-3">
                    Le signal est d&eacute;tect&eacute;, le score est 78/100. Est-ce
                    que ce prospect vaut vraiment la peine ? L&apos;IA a pouss&eacute;
                    un post viral d&apos;un CMO dans une ETI de 300 personnes. Le score
                    dit oui. Le setter lit le post : c&apos;est un coup de gueule personnel
                    sans lien avec le sujet. Pas d&apos;angle. \u00c0 d&eacute;gager.
                  </p>
                  <p className="mb-3">
                    L&apos;IA n&apos;a pas de jugement sur la subtilit&eacute;. Elle a
                    des patterns. Un humain qui conna\u00eet son march&eacute; depuis 2 ans
                    reconna\u00eet en 10 secondes si un signal a du sens ou si c&apos;est
                    du bruit. Ce jugement ne s&apos;automatise pas, parce qu&apos;il
                    repose sur des r&egrave;gles floues et contextuelles que l&apos;humain
                    ne saurait lui-m&ecirc;me pas formaliser.
                  </p>
                  <p>
                    Concr&egrave;tement : l&apos;IA trie. L&apos;humain valide. Pour chaque
                    prospect scor&eacute; haut, le setter donne un go/no-go en 20 secondes
                    avant d&apos;engager.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Indispensable 2 &mdash; Contexte fin
                  </p>
                  <p className="mb-3">
                    Le message g&eacute;n&eacute;r&eacute; par l&apos;IA dit :
                    &laquo;&nbsp;J&apos;ai vu votre post sur le recrutement, sujet
                    qu&apos;on rencontre souvent&nbsp;&raquo;. Le setter ajoute, apr&egrave;s
                    lecture : &laquo;&nbsp;La phrase &lsquo;on a fait 40 entretiens
                    pour 2 embauches&rsquo; m&apos;a parl&eacute;&nbsp;&raquo;. La deuxi&egrave;me
                    version est irrepro-ductible par template.
                  </p>
                  <p className="mb-3">
                    Le contexte fin, c&apos;est la phrase pr&eacute;cise du dernier
                    post du prospect, le chiffre qu&apos;il a mentionn&eacute;, le
                    d&eacute;tail qui prouve que le message n&apos;est pas un gabarit.
                    L&apos;IA peut le citer si on lui demande. Mais choisir quelle
                    phrase citer parmi 10 candidates, &ccedil;a demande une lecture
                    humaine.
                  </p>
                  <p>
                    La r&egrave;gle : sur un message g&eacute;n&eacute;r&eacute; par
                    IA, le setter ajoute toujours au moins une phrase qui ne pouvait
                    venir que d&apos;une vraie lecture. C&apos;est ce qui fait passer
                    le message d&apos;un taux de r&eacute;ponse de 8&nbsp;% \u00e0 25&nbsp;%.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Indispensable 3 &mdash; Qualification et closing
                  </p>
                  <p className="mb-3">
                    Le prospect r&eacute;pond. &laquo;&nbsp;Ok int&eacute;ressant,
                    dites-m&apos;en plus&nbsp;&raquo;. Ce moment est le plus d&eacute;licat
                    du setting. Proposer le RDV trop vite : taux de show-up qui chute
                    \u00e0 40&nbsp;%. Qualifier trop longtemps : perdre l&apos;int&eacute;r&ecirc;t
                    du prospect. L&apos;IA n&apos;a pas le tempo pour &ccedil;a.
                  </p>
                  <p className="mb-3">
                    Le setter pose 2-3 questions qui valident le besoin : depuis
                    quand le probl&egrave;me, ordre de grandeur, solutions d&eacute;j\u00e0
                    test&eacute;es. Ces questions demandent de lire la tonalit&eacute;
                    du prospect, d&apos;adapter le rythme, d&apos;&eacute;viter les
                    formulations qui sentent le call center. Un humain fait &ccedil;a
                    de t&ecirc;te. Un bot sonne comme un bot.
                  </p>
                  <p>
                    Ensuite, le transfert au closer : brief structur&eacute; qui contient
                    le signal, les r&eacute;ponses aux questions, l&apos;intuition du
                    setter sur le niveau de maturit&eacute;. Le closer arrive en RDV
                    avec 80&nbsp;% du contexte d&eacute;j\u00e0 pos&eacute;.
                  </p>
                </div>

              </div>

              <p>
                Pour la vision d&apos;ensemble du r&ocirc;le humain dans la prospection,
                voir <a href="/ressources/setter-b2b" className="text-accent hover:underline transition-colors">ce
                que fait vraiment un setter B2B</a> et la{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">m&eacute;thode
                compl&egrave;te</a> qui articule humain et outils.
              </p>
            </section>

            {/* Mid-article CTA */}
            <CtaArticle variant="setting" />

            {/* Section 4 — Le bon \u00e9quilibre */}
            <section id="equilibre" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le bon &eacute;quilibre en 2026 : la division du travail
              </h2>
              <p className="mb-6">
                Le pipeline qui fonctionne, c&apos;est celui o&ugrave; chaque acteur fait
                ce qu&apos;il fait le mieux. L&apos;IA en amont, l&apos;humain sur la
                derni&egrave;re ligne droite.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Ce que fait l&apos;IA
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Scan continu de 2000-5000 comptes pour d\u00e9tecter les signaux',
                      'Scoring 0-100 par fit ICP + force de signal + timing',
                      'Draft du message dans le style du setter (clone few-shot)',
                      'Score de fid\u00e9lit\u00e9 de style du message g\u00e9n\u00e9r\u00e9',
                      'Suggestions d\u2019angle d\u2019accroche \u00e0 partir du profil',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Ce que fait l&apos;humain
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Validation du signal : ce prospect vaut la peine, oui/non',
                      'Relecture du draft : tonalit\u00e9, ajustement contextuel',
                      'Ajout d\u2019une phrase qui prouve une vraie lecture',
                      'Envoi manuel depuis LinkedIn (pas d\u2019automatisation)',
                      'Conversation, qualification, transfert au closer',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mb-4">
                Le chiffre qui r&eacute;sume tout : 80&nbsp;% du temps de r&eacute;daction
                est &eacute;conomis&eacute;, et les 20&nbsp;% restants (l&apos;ajustement
                humain) font 80&nbsp;% de l&apos;&eacute;cart sur le taux de r&eacute;ponse.
                Couper l&apos;&eacute;tape humaine pour gagner 2 minutes par message,
                c&apos;est revenir au 2-5&nbsp;% de r&eacute;ponse du cold g&eacute;n&eacute;rique.
              </p>
              <p>
                Pour voir les chiffres r&eacute;els d&apos;impact de ce mod&egrave;le,
                on a compil&eacute; les <a href="/ressources/chiffres-prospection-b2b-2026" className="text-accent hover:underline transition-colors">chiffres
                prospection B2B 2026</a>.
              </p>
            </section>

            {/* Section 5 — Cas pratique : clone de style */}
            <section id="cas-pratique-clone" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Cas pratique : le clone de style appliqu&eacute; au setting
              </h2>
              <p className="mb-6">
                Concr&egrave;tement, voici comment un clone de style s&apos;ins&egrave;re
                dans le pipeline. On prend l&apos;exemple d&apos;un dirigeant qui
                prospecte lui-m&ecirc;me 10 minutes par jour.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Entr&eacute;e
                </p>
                <p className="text-sm mb-4">
                  3 \u00e0 5 posts LinkedIn r&eacute;cents du dirigeant (ou du setter
                  qui envoie). Minimum 150 mots chacun. Plus les posts capturent la
                  vraie voix (pas les posts corporate r&eacute;dig&eacute;s par
                  l&apos;agence), meilleur est le clone. Le brief factuel : nom du
                  prospect, signal d&eacute;tect&eacute;, 1-2 phrases de contexte.
                </p>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Sortie
                </p>
                <p className="text-sm">
                  Un message de 3-5 phrases qui ancre sur le signal, utilise le vocabulaire
                  du dirigeant, respecte son rythme de phrase (courtes chez certains, longues
                  chez d&apos;autres), et finit sur une question ouverte. G&eacute;n&eacute;ration
                  en 10 secondes. Le dirigeant relit, ajuste un d&eacute;tail, envoie.
                </p>
              </div>

              <p className="mb-4">
                Ce que &ccedil;a change concr&egrave;tement : chaque setter peut envoyer
                dans sa voix sans se fatiguer la main apr&egrave;s 20 messages. Chaque
                dirigeant qui veut faire ses propres prospections peut s&apos;y mettre
                10 minutes par jour sans passer par un copywriter. Et le prospect re&ccedil;oit
                un message qui semble authentiquement &eacute;crit par la personne dont
                il voit le profil.
              </p>
              <p className="mb-6">
                Les limites, il faut les nommer. Le clone capture le style, pas le
                contexte fin. Il ne sait pas que vous avez rencontr&eacute; ce prospect
                dans une conf il y a 2 mois. Il ne sait pas que son dernier post
                reprenait une id&eacute;e qui vient de vous. Ces d&eacute;tails-l\u00e0
                restent \u00e0 ajouter \u00e0 la main \u2014 et ce sont eux qui transforment
                un bon message en message exceptionnel.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20 mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Outil gratuit
                </p>
                <p className="font-serif text-lg text-text-primary mb-3">
                  G&eacute;n&eacute;rateur de messages clone-de-style
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                  Coller 3-5 de vos posts LinkedIn, d&eacute;crire le prospect et le signal,
                  obtenir un message de prospection dans votre voix exacte. 10 secondes,
                  gratuit, sans compte.
                </p>
                <ButtonGlow href="/outils/clone-style-linkedin">
                  Essayer le clone de style
                </ButtonGlow>
              </div>
            </section>

            {/* Section 6 — 5 erreurs */}
            <section id="erreurs-stack-ia" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                5 erreurs qu&apos;on voit dans les stacks IA de setting LinkedIn
              </h2>
              <p className="mb-8">
                Ce qu&apos;on observe chez les \u00e9quipes qui ont ajout&eacute; de
                l&apos;IA mais voient leurs r&eacute;sultats stagner.
              </p>

              <div className="space-y-4">
                {[
                  {
                    number: 1,
                    title: 'D\u00e9l\u00e9guer la d\u00e9cision finale \u00e0 l\u2019IA',
                    description: "Laisser le mod\u00e8le d\u00e9cider qui contacter et envoyer automatiquement. La d\u00e9cision de contact est un jugement humain. L'IA propose, l'humain tranche. Si le workflow n'a pas de validation humaine avant envoi, ce n'est plus du setting, c'est du spam assist\u00e9.",
                  },
                  {
                    number: 2,
                    title: 'Entra\u00eener le clone sur des posts qui ne sont pas de toi',
                    description: "Utiliser les posts \u00ab corporate \u00bb r\u00e9dig\u00e9s par l'agence ou par un ghostwriter. Le clone va reproduire ce style, et le prospect va recevoir un message qui ne colle pas avec tes \u00e9changes r\u00e9els. R\u00e9sultat : incoh\u00e9rence au moment du RDV. N'entra\u00eene le clone que sur tes posts personnels.",
                  },
                  {
                    number: 3,
                    title: 'Utiliser des templates d\u00e9guis\u00e9s en personnalisation',
                    description: "Demander \u00e0 l'IA de remplir un template avec 3 variables ({pr\u00e9nom}, {entreprise}, {secteur}). Le d\u00e9cideur rep\u00e8re la structure en 3 secondes. La vraie personnalisation passe par un prompt ouvert qui g\u00e9n\u00e8re le message en partant du signal, pas par un template IA-compl\u00e9t\u00e9.",
                  },
                  {
                    number: 4,
                    title: 'Multiplier les outils au lieu d\u2019int\u00e9grer',
                    description: "Reactin + Sales Navigator + Waalaxy + Lemlist + ChatGPT + 2 CRM. Chaque outil fait sa t\u00e2che mais rien n'est connect\u00e9. Le setter passe 40 % de son temps \u00e0 copier-coller entre les outils. Mieux : 3-4 outils avec int\u00e9gration Make/Zapier, flux unique.",
                  },
                  {
                    number: 5,
                    title: 'Mesurer le volume au lieu de la qualit\u00e9',
                    description: "Dashboards qui affichent \u00ab 500 messages envoy\u00e9s cette semaine \u00bb. Le KPI qui compte, c'est le nombre de RDV qualifi\u00e9s et le taux de r\u00e9ponse. Si l'IA vous fait envoyer 3x plus de messages avec un taux qui chute de moiti\u00e9, le volume est un leurre. Suivre RDV / semaine, pas messages / semaine.",
                  },
                ].map(({ number, title, description }) => (
                  <div key={number} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 font-serif text-red-400 text-sm font-semibold">
                        {number}
                      </span>
                      <h3 className="font-sans font-semibold text-text-primary">{title}</h3>
                    </div>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes
              </h2>

              <div className="divide-y divide-white/[0.06]">
                {faqItems.map(({ question, answer }, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-sans font-semibold text-text-primary text-sm pr-4">{question}</h3>
                      <span className="text-accent shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="faq-answer font-sans text-text-secondary text-sm leading-relaxed mt-3">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Pour aller plus loin */}
            <section className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pour aller plus loin
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/outils/clone-style-linkedin', label: 'G\u00e9n\u00e9rateur clone de style LinkedIn' },
                  { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide pilier' },
                  { href: '/ressources/setting-linkedin-exemples', label: 'Setting LinkedIn : exemples concrets' },
                  { href: '/ressources/setting-linkedin-prix', label: 'Setting LinkedIn : prix et mod\u00e8les' },
                  { href: '/ressources/comment-prospecter-sur-linkedin', label: 'Comment prospecter sur LinkedIn' },
                  { href: '/ressources/signal-achat-linkedin', label: 'Signaux d\u2019achat LinkedIn' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                  >
                    <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                      {label}
                    </p>
                    <span className="font-sans text-xs text-text-secondary">&rarr; Lire</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Final CTA — dominant vers clone-style */}
            <section className="bg-bg-secondary rounded-2xl p-8 md:p-10 text-center border border-accent/20">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Outil gratuit
              </p>
              <h2 className="font-serif text-h2 text-text-primary mb-4">
                G&eacute;n&eacute;rer un message dans votre voix, en 10 secondes
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
                Coller 3-5 de vos posts LinkedIn, d&eacute;crire le prospect et le
                signal, obtenir un message qui sonne comme vous. Gratuit, sans compte.
                Le cas d&apos;usage le plus concret de l&apos;IA appliqu&eacute;e au
                setting LinkedIn.
              </p>
              <ButtonGlow href="/outils/clone-style-linkedin">
                Essayer le clone de style
              </ButtonGlow>
            </section>

          </article>

          {/* Related articles */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : le guide complet', readTime: '25 min' },
              { href: '/ressources/setting-linkedin-exemples', title: 'Setting LinkedIn : exemples concrets', readTime: '14 min' },
              { href: '/ressources/comment-prospecter-sur-linkedin', title: 'Comment prospecter sur LinkedIn', readTime: '18 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
