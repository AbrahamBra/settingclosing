import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Prospecter sur LinkedIn en 2026 : social selling, automatisation et m\u00e9thode signal-based | Setting',
  description:
    'Comment prospecter sur LinkedIn en B2B : social selling, automatisation (Waalaxy, Lemlist), m\u00e9thode signal-based, SSI, exemples de messages et comparatif humain vs robot. Guide complet 2026.',
  openGraph: {
    title: 'Prospecter sur LinkedIn en 2026 : social selling, automatisation et m\u00e9thode signal-based',
    description:
      'Social selling LinkedIn, automatisation, SSI, m\u00e9thode signal-based et comparatif humain vs robot. Le guide complet pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s en B2B.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
      'x-default': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
    },
  },
}

/* ─── Structured Data ─────────────────────────────────────────────────────── */

const defined = (term: string, definition: string) => ({
  '@type': 'DefinedTerm',
  name: term,
  description: definition,
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
  headline: 'Prospecter sur LinkedIn en 2026 : social selling, automatisation et m\u00e9thode signal-based',
  description:
    'Guide complet : social selling LinkedIn, automatisation (Waalaxy, Lemlist), m\u00e9thode signal-based, SSI, exemples de messages et comparatif humain vs robot pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s en B2B.',
  author: {
    '@type': 'Person',
    name: 'Abraham Brakha',
    jobTitle: 'Fondateur, Setting',
    url: 'https://www.setting.live/equipe/abraham-brakha',
    sameAs: 'https://www.linkedin.com/in/abraham-brakha/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: 'https://www.setting.live/opengraph-image',
  },
  datePublished: '2026-03-26',
  dateModified: '2026-03-26',
  inLanguage: 'fr-FR',
  wordCount: 5200,
  url: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
  },
  about: [
    defined('Prospecter sur LinkedIn', 'Identifier et contacter des d\u00e9cideurs B2B via LinkedIn en utilisant des signaux d\u2019achat, du contenu et des messages personnalis\u00e9s pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s.'),
    defined('Social selling LinkedIn', 'Strat\u00e9gie qui consiste \u00e0 construire une pr\u00e9sence cr\u00e9dible sur LinkedIn (profil, contenu, engagement) pour g\u00e9n\u00e9rer des signaux d\u2019int\u00e9r\u00eat avant tout contact direct.'),
    defined('Automatisation LinkedIn', 'Utilisation d\u2019outils tiers (Waalaxy, Lemlist, Dripify) pour envoyer des s\u00e9quences de messages automatis\u00e9es sur LinkedIn. Expos\u00e9 au ban (10-15 % des comptes) et limit\u00e9 \u00e0 2-5 % de taux de r\u00e9ponse.'),
    defined('Social Selling Index (SSI)', 'Score LinkedIn sur 100, mis \u00e0 jour quotidiennement, mesurant l\u2019activit\u00e9 sur 4 piliers : marque pro, recherche, \u00e9changes et relations. Indicateur d\u2019hygi\u00e8ne, pas de performance commerciale.'),
    defined('M\u00e9thode signal-based', 'Approche o\u00f9 chaque message de prospection est ancr\u00e9 sur un signal d\u2019achat identifi\u00e9 (post, commentaire, changement de poste). Taux de r\u00e9ponse : 20 \u00e0 35 %.'),
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]'],
  },
}

const faqItems = [
  {
    question: 'Combien de messages LinkedIn peut-on envoyer par jour sans risque ?',
    answer:
      'Entre 20 et 30 messages personnalis\u00e9s par jour. Au-del\u00e0, LinkedIn peut restreindre ton compte. 25 messages ancr\u00e9s sur un signal obtiennent plus de r\u00e9ponses que 200 templates g\u00e9n\u00e9riques.',
  },
  {
    question: 'La prospection LinkedIn est-elle compatible avec le RGPD ?',
    answer:
      'Oui, tant que tu ne scrapes pas de donn\u00e9es personnelles en dehors de la plateforme. Les messages manuels via LinkedIn restent dans le cadre de la plateforme. Le RGPD s\u2019applique surtout si tu exportes des donn\u00e9es (emails, t\u00e9l\u00e9phones) vers un outil tiers sans consentement.',
  },
  {
    question: 'Faut-il Sales Navigator pour prospecter sur LinkedIn ?',
    answer:
      'Recommand\u00e9 mais pas obligatoire. Sales Navigator (environ 100 \u20ac/mois) d\u00e9bloque les filtres avanc\u00e9s : fonction, taille d\u2019entreprise, anciennet\u00e9 dans le poste. Sans lui, tu peux prospecter sur les signaux inbound (r\u00e9actions \u00e0 tes posts) mais ta capacit\u00e9 outbound sera limit\u00e9e.',
  },
  {
    question: "C'est quoi un bon score SSI LinkedIn ?",
    answer:
      "Un SSI au-dessus de 70 est consid\u00e9r\u00e9 bon par LinkedIn. Mais le SSI mesure l\u2019activit\u00e9, pas les conversions. Un score de 85 sans aucun RDV g\u00e9n\u00e9r\u00e9, \u00e7a ne sert \u00e0 rien. Regarde ton SSI comme un indicateur d\u2019hygi\u00e8ne, pas comme un KPI business.",
  },
  {
    question: 'Le social selling remplace-t-il la prospection LinkedIn ?',
    answer:
      "Non, il la compl\u00e8te. Le social selling cr\u00e9e les conditions : visibilit\u00e9, cr\u00e9dibilit\u00e9, signaux d\u2019int\u00e9r\u00eat. La prospection convertit ces signaux en RDV. Sans social selling, tu prospectes \u00e0 froid. Sans prospection active, tu accumules de l\u2019engagement sans pipeline.",
  },
  {
    question: 'LinkedIn peut-il bannir mon compte si j\u2019automatise ?',
    answer:
      'Oui. LinkedIn d\u00e9tecte les patterns automatis\u00e9s (volumes anormaux, extensions Chrome, comportements r\u00e9p\u00e9titifs). Environ 10 \u00e0 15 % des comptes utilisant des outils d\u2019automatisation subissent une restriction dans les 6 premiers mois.',
  },
  {
    question: 'Peut-on combiner automatisation et setting humain ?',
    answer:
      'Oui, mais pas pour les m\u00eames t\u00e2ches. L\u2019automatisation est utile pour la d\u00e9tection de signaux (Reactin) et le routage CRM (Make/Zapier). L\u2019envoi de messages et la d\u00e9cision de contacter restent humains. C\u2019est le mod\u00e8le Setting : IA en support, humain aux commandes.',
  },
  {
    question: 'Combien co\u00fbte un setter LinkedIn par mois ?',
    answer:
      'Entre 500 et 1 500 \u20ac/mois selon le mod\u00e8le (fixe, prime par RDV, hybride). Chez Setting : 790 \u20ac/mois + prime par RDV qualifi\u00e9. Ce mod\u00e8le aligne les int\u00e9r\u00eats : le setter est pay\u00e9 pour la qualit\u00e9 des rendez-vous, pas le volume.',
  },
  {
    question: 'Combien de temps avant les premiers r\u00e9sultats ?',
    answer:
      'Avec la m\u00e9thode signal-based, les premiers RDV tombent d\u00e8s la premi\u00e8re semaine. En cold outreach classique, compte 3 \u00e0 4 semaines. Le social selling seul produit ses premiers signaux en 2 \u00e0 4 semaines et ses premiers RDV attribuables en 6 \u00e0 8 semaines.',
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
      name: 'Comment prospecter sur LinkedIn',
      item: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
    },
  ],
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function CommentProspecterLinkedInPage() {
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
              <li className="text-text-primary">Comment prospecter sur LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection &middot; Social Selling &middot; LinkedIn &middot; B2B
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Prospecter sur LinkedIn en 2026 : social selling, automatisation et m&eacute;thode signal-based
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Les templates LinkedIn ne fonctionnent plus. Les prospects les rep&egrave;rent en deux secondes.
              Ce guide couvre tout ce qui marche aujourd&apos;hui : social selling, automatisation
              (avec ses limites), m&eacute;thode signal-based, et le syst&egrave;me IA + humain
              qui produit 20 &agrave; 35 % de taux de r&eacute;ponse. Du profil au RDV.
            </p>
            <AuthorBlock date="2026-03-26" readTime="22 min de lecture" dateLabel="26 mars 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <div data-speakable>
              <p className="mb-2">Le social selling te rend visible et cr&eacute;dible (3 &agrave; 5h/semaine). L&apos;automatisation LinkedIn (Waalaxy, Lemlist) envoie en volume mais plafonne &agrave; 2-5 % de r&eacute;ponses et expose au ban (10-15 % des comptes). La m&eacute;thode signal-based fait le lien entre les deux : l&apos;IA d&eacute;tecte les signaux d&apos;achat, un humain r&eacute;dige le message. Taux de r&eacute;ponse : 20 &agrave; 35 %. Z&eacute;ro risque de ban.</p>
              <p>Chez Setting, les premiers RDV tombent d&egrave;s la semaine 1. 790 &euro;/mois, 5 RDV qualifi&eacute;s garantis.</p>
            </div>
          </TldrBox>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14" data-speakable>
            {[
              { stat: '950M', label: 'membres LinkedIn dans le monde', source: 'LinkedIn, 2025' },
              { stat: '20\u201335%', label: 'taux de r\u00e9ponse signal-based', source: 'Donn\u00e9es internes Setting' },
              { stat: '2\u20135%', label: 'taux de r\u00e9ponse automatisation', source: 'Waalaxy benchmark 2025' },
              { stat: '10\u201315%', label: 'comptes restreints apr\u00e8s automatisation', source: 'LinkedIn Safety Report 2025' },
            ].map(({ stat, label, source }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
                <p className="font-sans text-[10px] text-text-muted mt-1">{source}</p>
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
                { id: 'pourquoi-linkedin', label: 'Pourquoi LinkedIn reste le canal #1 en B2B' },
                { id: 'social-selling', label: 'Social selling LinkedIn : d\u00e9finition et SSI' },
                { id: 'approches', label: 'Cold outreach vs m\u00e9thode signal-based' },
                { id: 'preparation', label: 'Pr\u00e9parer sa prospection : profil, ICP et outils' },
                { id: 'etapes', label: 'Les 7 \u00e9tapes pour prospecter sur LinkedIn' },
                { id: 'automatisation', label: 'Automatisation LinkedIn : outils, limites et bon usage' },
                { id: 'comparatif', label: 'Setting humain vs automatisation : le vrai comparatif' },
                { id: 'systeme-ia', label: 'IA + m\u00e9thode + humain : le syst\u00e8me Setting' },
                { id: 'modes-message', label: 'Les 2 modes de message selon le signal' },
                { id: 'exemples', label: 'Exemples de messages de prospection' },
                { id: 'erreurs', label: 'Les erreurs qui ruinent ta prospection' },
                { id: 'roi', label: 'Mesurer le ROI du social selling' },
                { id: 'externaliser', label: 'Quand externaliser sa prospection LinkedIn' },
                { id: 'faq', label: 'Questions fr\u00e9quentes' },
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

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* ─── 1. Pourquoi LinkedIn ─── */}
            <section id="pourquoi-linkedin" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Pourquoi LinkedIn reste le canal #1 de la prospection B2B
              </h2>
              <p className="mb-4">
                950 millions de membres. 65 millions de d&eacute;cideurs. 28 millions de profils actifs rien qu&apos;en France. Aucune autre plateforme ne te met face aux gens qui signent les bons de commande.
              </p>
              <p className="mb-4">
                Un email froid : 1 &agrave; 3 % de taux de r&eacute;ponse. Un message LinkedIn ancr&eacute; sur un signal d&apos;achat : 20 &agrave; 35 %. Pourquoi un tel &eacute;cart ? Parce que sur LinkedIn, tu vois tout. Les posts que le prospect commente, les articles qu&apos;il partage, ses changements de poste. Chaque action te donne un angle pour &eacute;crire un message qui a une raison d&apos;exister.
              </p>
              <p>
                L&apos;autre avantage : la relation est directe. Pas de gatekeeper, pas de standard t&eacute;l&eacute;phonique. Tu &eacute;cris &agrave; la personne concern&eacute;e. Pas &agrave; son assistant.
              </p>
            </section>

            {/* ─── 2. Social selling ─── */}
            <section id="social-selling" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Social selling LinkedIn : d&eacute;finition et SSI
              </h2>

              <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-8" data-speakable>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  D&eacute;finition
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2">
                  Social selling LinkedIn
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le social selling, c&apos;est vendre sans avoir l&apos;air de vendre. Tu publies du contenu, tu commentes chez tes prospects, tu cr&eacute;es des points de contact avant le moindre pitch. Quand tu finis par &eacute;crire un message, le prospect a d&eacute;j&agrave; crois&eacute; ton nom 3 ou 4 fois. Tu n&apos;es plus un inconnu. Le social selling ne remplace pas la prospection. Il la rend plus facile.
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Les 5 piliers du social selling</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Profil optimis\u00e9', desc: 'Ton profil est ta landing page. Le headline dit ce que tu fais pour tes clients, pas ton titre de poste. La banni\u00e8re affiche ta proposition de valeur. La section \u00ab \u00c0 propos \u00bb suit le sch\u00e9ma : probl\u00e8me + solution + preuve.' },
                  { title: 'Contenu r\u00e9gulier (2-3 posts/semaine)', desc: 'Publier prouve ton expertise, te rend visible et g\u00e9n\u00e8re des signaux exploitables. Formats qui marchent : retour d\u2019exp\u00e9rience, opinion tranch\u00e9e, m\u00e9thode concr\u00e8te.' },
                  { title: 'Engagement cibl\u00e9', desc: 'Commenter chez tes prospects est le levier le plus sous-estim\u00e9. 5 \u00e0 10 profils strat\u00e9giques par jour. Pas de commentaires vides. Un vrai point de vue ajout\u00e9.' },
                  { title: 'D\u00e9tection de signaux', desc: 'Chaque interaction est un signal d\u2019achat potentiel. Un like sur ta th\u00e9matique, un commentaire chez un concurrent, un changement de poste. Surveille ces signaux quotidiennement.' },
                  { title: 'Premier contact ancr\u00e9 sur un signal', desc: 'Ton premier message mentionne un fait pr\u00e9cis du profil. C\u2019est ce qui transforme un message de prospection en message de social selling.' },
                ].map(({ title, desc }) => (
                  <div key={title}>
                    <p className="font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="text-sm">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le Social Selling Index (SSI)</h3>
              <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-6" data-speakable>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  D&eacute;finition
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2">
                  Social Selling Index (SSI)
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Score LinkedIn sur 100, mis &agrave; jour tous les jours. Il mesure ton activit&eacute; sur 4 piliers : marque professionnelle, recherche des bonnes personnes, &eacute;change d&apos;insights et construction de relations. Consulte-le gratuitement sur linkedin.com/sales/ssi. Au-dessus de 70, LinkedIn te consid&egrave;re comme un bon social seller. Score moyen en France : 25-35.
                </p>
              </div>
              <p className="mb-4">
                Mais attention. LinkedIn d&eacute;-emphase le SSI. Il n&apos;est plus mis en avant dans l&apos;interface r&eacute;cente. Raison probable : le SSI encourageait des comportements de vanity (liker en masse, publier pour publier) sans corr&eacute;lation avec les ventes.
              </p>
              <p>
                Un SSI de 90 avec z&eacute;ro RDV, c&apos;est un score d&apos;activit&eacute;. Un SSI de 55 avec 8 RDV par mois, c&apos;est un business qui tourne. Utilise le SSI comme indicateur d&apos;hygi&egrave;ne. Le vrai KPI reste le nombre de RDV qualifi&eacute;s.
              </p>
            </section>

            {/* ─── 3. Approches ─── */}
            <section id="approches" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Cold outreach vs m&eacute;thode signal-based
              </h2>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-text-primary font-semibold mb-2">Cold outreach classique</p>
                    <ul className="space-y-1">
                      <li>Liste Sales Navigator + templates</li>
                      <li>200 messages/semaine via outil</li>
                      <li>Taux de r&eacute;ponse : 2 &agrave; 5 %</li>
                      <li>Le prospect reconna&icirc;t le copier-coller</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-accent font-semibold mb-2">M&eacute;thode signal-based</p>
                    <ul className="space-y-1">
                      <li>D&eacute;tection d&apos;un signal d&apos;achat d&apos;abord</li>
                      <li>Message ancr&eacute; sur ce signal pr&eacute;cis</li>
                      <li>Taux de r&eacute;ponse : 20 &agrave; 35 %</li>
                      <li>Le prospect voit que tu as lu son activit&eacute;</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                C&apos;est la deuxi&egrave;me approche que nous utilisons chez Setting. L&apos;IA d&eacute;tecte les signaux. Le setter r&eacute;dige le message. Chaque envoi est une d&eacute;cision, pas un batch.
              </p>
            </section>

            {/* ─── 4. Pr&eacute;paration ─── */}
            <section id="preparation" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Pr&eacute;parer sa prospection : profil, ICP et outils
              </h2>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Ton profil LinkedIn</h3>
              <p className="mb-4">
                Avant d&apos;envoyer un seul message, ton profil doit inspirer confiance. Le headline compte. Pas &laquo;&nbsp;CEO&nbsp;&raquo; mais ce que tu fais concr&egrave;tement pour tes clients. La banni&egrave;re aussi : proposition de valeur lisible en 3 secondes. Et la section &laquo;&nbsp;&Agrave; propos&nbsp;&raquo; doit poser le probl&egrave;me r&eacute;solu, pour qui, avec une preuve.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Ton ICP (Ideal Customer Profile)</h3>
              <p className="mb-4">
                D&eacute;finis pr&eacute;cis&eacute;ment qui tu cibles. Secteur, taille d&apos;entreprise, poste du d&eacute;cideur, probl&egrave;me sp&eacute;cifique. Sans ICP clair, tu prospectes dans le vide. Avec un ICP pr&eacute;cis, chaque message a une raison d&apos;exister.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Les outils</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-primary font-semibold">Sales Navigator</span> (~100 &euro;/mois) : filtres avanc&eacute;s, alertes changements de poste, listes de prospects</li>
                  <li><span className="text-text-primary font-semibold">Reactin</span> : d&eacute;tecte qui r&eacute;agit &agrave; tes posts et ceux de tes concurrents</li>
                  <li><span className="text-text-primary font-semibold">BreakCold</span> : CRM l&eacute;ger pour suivre tes conversations LinkedIn</li>
                  <li><span className="text-text-primary font-semibold">Make / Zapier</span> : routage automatique des leads vers le bon canal</li>
                </ul>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/externaliser-prospection-linkedin#outils" className="text-accent hover:underline">Les outils du setting LinkedIn</a>
              </p>
            </section>

            {/* ─── 5. 7 &eacute;tapes ─── */}
            <section id="etapes" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les 7 &eacute;tapes pour prospecter sur LinkedIn
              </h2>

              <div className="space-y-8">
                {[
                  { n: 1, title: 'D\u00e9finir ton ICP', text: 'Qui est ton client id\u00e9al ? Quel poste, quelle taille d\u2019entreprise, quel probl\u00e8me ? Note tout sur une page. C\u2019est ta boussole.' },
                  { n: 2, title: 'Configurer Sales Navigator', text: 'Cr\u00e9e des filtres qui correspondent \u00e0 ton ICP. Sauvegarde tes recherches. Active les alertes sur les changements de poste et les nouvelles publications.' },
                  { n: 3, title: 'D\u00e9tecter les signaux d\u2019achat', text: 'Un signal d\u2019achat, c\u2019est un comportement observable. Le prospect like un post sur ta th\u00e9matique. Il commente chez un concurrent. Il change de poste. Il publie sur un probl\u00e8me que tu r\u00e9sous. Chacun de ces comportements te donne une raison concr\u00e8te de lui \u00e9crire.' },
                  { n: 4, title: 'Analyser le profil', text: 'Avant d\u2019\u00e9crire, lis. Titre, bio, 3 derniers posts, connexions communes. Tu cherches un fait pr\u00e9cis \u00e0 mentionner dans ton message. Si tu ne trouves rien de sp\u00e9cifique, passe au prospect suivant.' },
                  { n: 5, title: 'R\u00e9diger un message ancr\u00e9 sur le signal', text: '5 lignes maximum. La deuxi\u00e8me phrase mentionne le fait pr\u00e9cis que tu as identifi\u00e9. Pas de pitch. Une question ouverte \u00e0 la fin. Signe avec ton pr\u00e9nom uniquement.' },
                  { n: 6, title: 'Envoyer et suivre', text: 'Envoie le message. Note la date et le signal utilis\u00e9 dans ton CRM. Si pas de r\u00e9ponse apr\u00e8s 5 jours, relance une fois avec un nouvel angle. Apr\u00e8s 2 relances sans r\u00e9ponse, passe \u00e0 autre chose.' },
                  { n: 7, title: 'Qualifier et convertir en RDV', text: 'Quand le prospect r\u00e9pond, ne pitche pas. Pose des questions pour comprendre son contexte. Si le besoin est confirm\u00e9, propose un cr\u00e9neau. Envoie un lien Calendly court, pas 3 paragraphes de pitch.' },
                ].map(({ n, title, text }) => (
                  <div key={n}>
                    <h3 className="font-sans font-semibold text-text-primary mb-2">{n}. {title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <CtaArticle variant="methode" />

            {/* ─── 6. Automatisation ─── */}
            <section id="automatisation" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Automatisation LinkedIn : outils, limites et bon usage
              </h2>

              <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-8" data-speakable>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  D&eacute;finition
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2">
                  Automatisation de la prospection LinkedIn
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  L&apos;automatisation LinkedIn utilise des outils tiers (Waalaxy, Lemlist, Dripify, Phantombuster) pour envoyer des s&eacute;quences de messages &agrave; grande &eacute;chelle. Le volume trait&eacute; est son avantage principal : 200 &agrave; 500 actions par jour. Le message est le m&ecirc;me pour tous les profils, avec des variables automatiques (pr&eacute;nom, entreprise, poste). Taux de r&eacute;ponse moyen : 2 &agrave; 5 %.
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Les principaux outils en 2026</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.1]">
                      <th className="text-left py-3 pr-4 text-text-muted font-semibold">Outil</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Prix/mois</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Type</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Risque ban</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Waalaxy', '30-80 \u20ac', 'Extension Chrome', 'Moyen'],
                      ['Lemlist', '59-99 \u20ac', 'Multicanal (email + LI)', 'Faible'],
                      ['LaGrowthMachine', '60-120 \u20ac', 'Multicanal', 'Mod\u00e9r\u00e9'],
                      ['Phantombuster', '56-128 \u20ac', 'Scraping + automation', '\u00c9lev\u00e9'],
                      ['Dripify', '39-79 \u20ac', 'Cloud', 'Faible'],
                    ].map(([outil, prix, type, risque]) => (
                      <tr key={outil} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 text-text-primary font-medium">{outil}</td>
                        <td className="py-3 px-4">{prix}</td>
                        <td className="py-3 px-4">{type}</td>
                        <td className="py-3 px-4">{risque}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Les 5 risques de l&apos;automatisation</h3>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Ban ou restriction du compte', desc: 'LinkedIn d\u00e9tecte les volumes anormaux, extensions Chrome, patterns r\u00e9p\u00e9titifs. 10 \u00e0 15 % des comptes automatis\u00e9s subissent une restriction dans les 6 premiers mois.' },
                  { title: 'Taux de r\u00e9ponse faible : 2-5 %', desc: 'Le prospect reconna\u00eet le template. Il a d\u00e9j\u00e0 re\u00e7u la m\u00eame structure 10 fois ce mois-ci. Sur 200 messages, 4 \u00e0 10 r\u00e9ponses. La moiti\u00e9 sont des refus.' },
                  { title: 'D\u00e9g\u00e2ts sur la r\u00e9putation', desc: 'Un message g\u00e9n\u00e9rique associe ta marque au spam. Ce prospect aurait pu devenir client dans 6 mois. Tu as br\u00fbl\u00e9 le contact.' },
                  { title: 'Aucune qualification', desc: 'L\u2019automatisation envoie des messages, pas des questions. Tu obtiens des r\u00e9ponses sans savoir distinguer un lead chaud d\u2019un curieux.' },
                  { title: 'D\u00e9pendance \u00e0 un outil tiers', desc: 'Waalaxy change ses prix, Phantombuster modifie son API, LinkedIn bloque une extension. Ta prospec s\u2019arr\u00eate.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                    <p className="font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="text-sm">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le bon usage de l&apos;automatisation</h3>
              <p className="mb-4">
                L&apos;automatisation a sa place. Le probl&egrave;me, c&apos;est de l&apos;utiliser pour envoyer des messages. Utilis&eacute;e en amont ou en aval, elle apporte une vraie valeur.
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-accent font-semibold">Enrichissement de donn&eacute;es</span> : Phantombuster, Dropcontact, Kaspr pour trouver emails et t&eacute;l&eacute;phones</li>
                  <li><span className="text-accent font-semibold">Monitoring de signaux</span> : Reactin pour d&eacute;tecter les changements de poste, publications, interactions</li>
                  <li><span className="text-accent font-semibold">Routage des leads</span> : Make ou Zapier vers le bon canal</li>
                  <li><span className="text-red-400 font-semibold">Ce que l&apos;auto ne doit pas faire</span> : r&eacute;diger les messages ni d&eacute;cider d&apos;envoyer</li>
                </ul>
              </div>
            </section>

            {/* ─── 7. Comparatif ─── */}
            <section id="comparatif" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Setting humain vs automatisation : le vrai comparatif
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.1]">
                      <th className="text-left py-3 pr-4 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Automatisation</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Setting humain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Messages/semaine', '200-300', '50-80 (cibl\u00e9s)'],
                      ['Taux de r\u00e9ponse', '2-5 %', '20-35 %'],
                      ['Personnalisation', 'Template + variables', 'Signal-based, r\u00e9dig\u00e9 par humain'],
                      ['Risque de ban', '\u00c9lev\u00e9 (10-15 %)', 'Aucun'],
                      ['Co\u00fbt r\u00e9el/mois', '500-800 \u20ac (outil + temps)', '790 \u20ac (z\u00e9ro temps)'],
                      ['Qualification', 'Aucune', 'Scoring int\u00e9gr\u00e9'],
                      ['Temps investi par toi', '1-2h/jour', '0 heure'],
                    ].map(([critere, auto, setting]) => (
                      <tr key={critere} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 text-text-primary font-medium">{critere}</td>
                        <td className="py-3 px-4">{auto}</td>
                        <td className="py-3 px-4 text-accent">{setting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Le calcul qui surprend : 200 messages automatis&eacute;s &agrave; 3 % = 6 r&eacute;ponses. 60 messages cibl&eacute;s &agrave; 25 % = 15 r&eacute;ponses. Le volume n&apos;est pas la bonne m&eacute;trique. Le taux de conversion en RDV qualifi&eacute; l&apos;est.
              </p>
              <p>
                L&apos;automatisation donne l&apos;illusion de la productivit&eacute;. Le setting donne des rendez-vous.
              </p>
            </section>

            {/* ─── 8. Syst&egrave;me IA ─── */}
            <section id="systeme-ia" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                IA + m&eacute;thode + humain : le syst&egrave;me Setting
              </h2>

              <p className="mb-4">
                Tu colles un profil LinkedIn dans ChatGPT, tu demandes un message de prospection. Le r&eacute;sultat : un texte poli, bien structur&eacute;, que tout le monde ignore. Le probl&egrave;me n&apos;est pas l&apos;IA. C&apos;est qu&apos;elle n&apos;a jamais vu ton march&eacute;.
              </p>
              <p className="mb-6">
                Maintenant, donne-lui le contexte de ton offre, tes r&egrave;gles de r&eacute;daction et deux ou trois exemples de messages qui ont obtenu des r&eacute;ponses. L&agrave;, &ccedil;a change. Les messages sonnent &eacute;crits depuis un t&eacute;l&eacute;phone un mardi matin. Parce qu&apos;ils le sont presque.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Couche 1 : l&apos;IA comme radar et co-r&eacute;dacteur</h3>
              <p className="mb-4">
                Reactin surveille qui r&eacute;agit &agrave; tes posts. Spyer fait pareil sur les comptes de tes concurrents. L&apos;IA rep&egrave;re qui a interagi, quand, sur quel sujet. Ensuite, Claude analyse le profil du prospect et propose un premier draft de message. Le setter relit, ajuste le ton, et envoie.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Couche 2 : la m&eacute;thode comme filtre</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/10 mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">R&egrave;gles non-n&eacute;gociables</p>
                <ul className="space-y-2 text-sm">
                  {[
                    'Commencer par "Bonjour Pr\u00e9nom," pas Madame ni Monsieur',
                    '2e phrase = fait pr\u00e9cis tir\u00e9 du profil. Jamais une g\u00e9n\u00e9ralit\u00e9.',
                    '5 phrases max en outbound. 3 phrases max en r\u00e9ponse inbound.',
                    'Pas de tirets, pas de bullet points, pas de formules automatiques.',
                    'Jamais pitcher dans les 2 premiers messages.',
                    'Test du t\u00e9l\u00e9phone avant envoi. Si \u00e7a ne sonne pas naturel : r\u00e9\u00e9crire.',
                  ].map((rule) => (
                    <li key={rule} className="flex gap-3">
                      <span className="text-accent shrink-0">&rarr;</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Couche 3 : l&apos;humain comme d&eacute;cideur</h3>
              <p className="mb-4">
                Aucun message ne part sans validation humaine. L&apos;IA n&apos;est pas mauvaise, mais le risque est asym&eacute;trique. Un message rat&eacute; br&ucirc;le le lead. Souvent d&eacute;finitivement. C&apos;est le setter qui lit la conversation, sent si le prospect est pr&ecirc;t, d&eacute;cide si on pousse ou si on laisse maturer.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">La calibration (2 mois)</h3>
              <p className="mb-4">
                Au d&eacute;but, chaque profil d&eacute;tect&eacute; par l&apos;IA est &eacute;valu&eacute; &agrave; la main. 5 niveaux de maturit&eacute;, du like passif au signal fort. Le setter note tout dans un journal de bord : les angles qui marchent, les objections nouvelles, les formulations qui sonnent faux. Ces notes nourrissent directement Claude. Au bout de deux mois, le syst&egrave;me ne ressemble plus &agrave; ce qu&apos;il &eacute;tait au d&eacute;part.
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-semibold text-text-primary text-sm mb-3">Les 5 niveaux de maturit&eacute;</p>
                {[
                  { level: 1, label: 'Like passif', desc: 'Int\u00e9r\u00eat latent. Question ouverte pour qualifier.' },
                  { level: 2, label: 'Commentaire neutre', desc: 'Signal moyen. Adapter la r\u00e9ponse au contenu.' },
                  { level: 3, label: 'Commentaire pr\u00e9cis ou question', desc: 'Signal fort. R\u00e9pondre au fond, proposer le call.' },
                  { level: 4, label: 'R\u00e9pond \u00e0 un DM', desc: 'En conversation. Qualifier avant call.' },
                  { level: 5, label: 'Signal sur post achat', desc: 'Phase d\u00e9cisionnelle. Call direct justifi\u00e9.' },
                ].map(({ level, label, desc }) => (
                  <div key={level} className="flex gap-4 mb-2 last:mb-0">
                    <span className="font-serif text-accent/50 text-lg shrink-0 w-5">{level}</span>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">{label}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── 9. Modes message ─── */}
            <section id="modes-message" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les 2 modes de message selon la qualit&eacute; du signal
              </h2>
              <p className="mb-6">
                Tout signal ne se traite pas de la m&ecirc;me fa&ccedil;on. La qualit&eacute; de l&apos;interaction d&eacute;termine le mode d&apos;approche.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 mb-4 border-l-2 border-accent">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Mode One Shot : signal fort
                </p>
                <p className="text-sm mb-3">Signal r&eacute;cent (moins de 2 semaines), commentaire pr&eacute;cis, question publique. La fen&ecirc;tre est courte.</p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex gap-2"><span className="text-accent shrink-0">&rarr;</span> Phrase 1 : Bonjour + r&eacute;f&eacute;rence directe au signal</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&rarr;</span> Phrase 2 : Fait pr&eacute;cis qui montre que tu as lu</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&rarr;</span> Phrase 3 : Diff&eacute;renciation en une phrase, pas un pitch</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&rarr;</span> Phrase 4 : Question ou proposition de call</li>
                </ul>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border-l-2 border-text-muted/30">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">
                  Mode Conversation : signal faible
                </p>
                <p className="text-sm mb-3">Like passif, signal ancien, prospect sur-sollicit&eacute;. La fen&ecirc;tre n&apos;est pas ferm&eacute;e, mais pas ouverte non plus.</p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex gap-2"><span className="text-text-secondary/50 shrink-0">&rarr;</span> DM 1 : court, question ouverte. Pas de pitch.</li>
                  <li className="flex gap-2"><span className="text-text-secondary/50 shrink-0">&rarr;</span> J+3 &agrave; J+5 sans r&eacute;ponse : angle diff&eacute;rent</li>
                  <li className="flex gap-2"><span className="text-text-secondary/50 shrink-0">&rarr;</span> J+8 &agrave; J+12 : derni&egrave;re relance, nouvelle info</li>
                  <li className="flex gap-2"><span className="text-text-secondary/50 shrink-0">&rarr;</span> J+21 &agrave; J+28 : fermeture propre. Pas de pression.</li>
                </ul>
              </div>
            </section>

            {/* ─── 10. Exemples ─── */}
            <section id="exemples" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Exemples de messages de prospection LinkedIn
              </h2>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Signal inbound : r&eacute;action &agrave; ton post</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu que tu avais r&eacute;agi &agrave; mon post sur la qualification des leads B2B.<br />
                  C&apos;est un sujet sur lequel tu bosses en ce moment chez [Entreprise] ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Signal outbound : changement de poste</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  F&eacute;licitations pour ton nouveau poste de [Titre] chez [Entreprise].<br />
                  Quand on prend un r&ocirc;le commercial dans une nouvelle bo&icirc;te, la prospec est souvent le premier chantier. C&apos;est le cas pour toi ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Signal concurrent : commentaire chez un concurrent</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu ton commentaire sous le post de [Concurrent] sur l&apos;externalisation de la prospection.<br />
                  Tu &eacute;values des options pour [Entreprise] en ce moment ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Connexion commune</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  On a [Connexion] en commun. J&apos;ai vu que tu g&eacute;rais le d&eacute;veloppement commercial chez [Entreprise].<br />
                  Vous faites votre prospection en interne ou vous avez externalis&eacute; une partie ?<br /><br />
                  Abraham
                </p>
              </div>
            </section>

            <CtaArticle variant="methode" />

            {/* ─── 11. Erreurs ─── */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les erreurs qui ruinent ta prospection LinkedIn
              </h2>

              <div className="space-y-4">
                {[
                  { title: 'Pitcher dans le premier message', desc: 'Le premier DM sert \u00e0 ouvrir une conversation, pas \u00e0 vendre. Mentionner ton offre dans le premier message te fait perdre 80 % des r\u00e9ponses potentielles.' },
                  { title: 'Envoyer du volume sans personnalisation', desc: '200 messages g\u00e9n\u00e9riques = 4 r\u00e9ponses. 50 messages personnalis\u00e9s = 12 r\u00e9ponses. Fais le calcul.' },
                  { title: 'Relancer 4 fois ou plus', desc: 'Maximum 2 relances, espac\u00e9es de 5 \u00e0 7 jours. Au-del\u00e0, tu d\u00e9grades ta r\u00e9putation et risques le signalement spam.' },
                  { title: 'Ignorer les signaux d\u2019achat', desc: 'Un prospect qui commente sur ta th\u00e9matique est 10x plus r\u00e9ceptif qu\u2019un prospect froid. Ne pas exploiter ce signal, c\u2019est laisser de l\u2019argent sur la table.' },
                  { title: '\u00c9crire des messages trop longs', desc: '5 lignes maximum sur mobile. Si ton prospect doit scroller pour lire ton message, il ne le lira pas.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                    <p className="font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── 12. ROI ─── */}
            <section id="roi" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Mesurer le ROI du social selling
              </h2>
              <p className="mb-4">
                Le SSI ne te dit pas si tu gagnes de l&apos;argent. Pour mesurer le vrai ROI du social selling, regarde ailleurs.
              </p>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-text-primary font-semibold text-sm mb-3">Les KPIs qui comptent</p>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-primary font-semibold">Taux d&apos;engagement sur tes posts</span> : mesure ta visibilit&eacute; aupr&egrave;s de ta cible. Objectif : 2-5 %</li>
                  <li><span className="text-text-primary font-semibold">Taux de r&eacute;ponse aux DMs</span> : signal-based 20-35 %, cold 2-5 %</li>
                  <li><span className="text-text-primary font-semibold">Nombre de RDV qualifi&eacute;s/mois</span> : le KPI business final</li>
                  <li><span className="text-text-primary font-semibold">Co&ucirc;t par RDV</span> : temps investi (ou co&ucirc;t externalis&eacute;) divis&eacute; par le nombre de RDV</li>
                </ul>
              </div>

              <p className="mb-4">
                50 000 vues et z&eacute;ro RDV, c&apos;est du divertissement. 2 000 vues, 3 signaux exploit&eacute;s, 2 RDV : c&apos;est du business. La diff&eacute;rence, c&apos;est la cha&icirc;ne que tu traces : post publi&eacute;, r&eacute;action d&apos;un prospect ICP, message envoy&eacute;, r&eacute;ponse, RDV, client sign&eacute;.
              </p>
              <p>
                Un CRM l&eacute;ger (BreakCold, HubSpot, tableur) suffit. Note le signal d&apos;origine de chaque lead. Apr&egrave;s 3 mois, tu verras quels types de contenu g&eacute;n&egrave;rent des conversations et lesquels ne produisent que des likes.
              </p>
            </section>

            {/* ─── 13. Externaliser ─── */}
            <section id="externaliser" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Quand externaliser sa prospection LinkedIn
              </h2>
              <p className="mb-4">
                Prospecter sur LinkedIn prend du temps. D&eacute;tecter les signaux, lire les profils, &eacute;crire les messages, suivre les conversations. 5 &agrave; 10 heures par semaine au bas mot. Si ton taux horaire d&eacute;passe 80 &euro;, l&apos;externalisation est rentable d&egrave;s le premier mois.
              </p>
              <p className="mb-4">
                L&apos;externalisation a du sens dans ces situations :
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-2 items-baseline">
                  <span className="text-accent shrink-0">1.</span>
                  <span>Tu n&apos;as pas le temps de prospecter (la livraison mange tout)</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <span className="text-accent shrink-0">2.</span>
                  <span>Tu n&apos;as pas la m&eacute;thode (taux de r&eacute;ponse en dessous de 5 %)</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <span className="text-accent shrink-0">3.</span>
                  <span>Tu as besoin de r&eacute;sultats rapides (premiers RDV sous 7 jours)</span>
                </li>
              </ul>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <p className="font-semibold text-text-primary text-sm mb-3">Ce que tu obtiens avec Setting</p>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-primary font-semibold">790 &euro;/mois</span>, setup offert, z&eacute;ro engagement</li>
                  <li><span className="text-text-primary font-semibold">Setter d&eacute;di&eacute;</span> form&eacute; &agrave; ton offre et ton ICP</li>
                  <li><span className="text-text-primary font-semibold">5 RDV qualifi&eacute;s garantis</span> par mois</li>
                  <li><span className="text-text-primary font-semibold">Z&eacute;ro risque de ban</span> : messages envoy&eacute;s manuellement</li>
                  <li><span className="text-text-primary font-semibold">M&eacute;thode signal-based</span> : chaque message a un contexte</li>
                  <li><span className="text-text-primary font-semibold">Reporting hebdomadaire</span> : chaque message, chaque r&eacute;ponse, chaque lead</li>
                </ul>
              </div>
            </section>

            <CtaArticle />

            {/* ─── 14. FAQ ─── */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes
              </h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="border-b border-white/[0.06] pb-6">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">
                      {item.question}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Related Articles */}
          <RelatedArticles
            articles={[
              { href: '/ressources/signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min' },
              { href: '/ressources/script-setting-linkedin', title: 'Scripts de setting LinkedIn B2B', readTime: '11 min' },
              { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : d\u00e9finition et m\u00e9thode', readTime: '19 min' },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
