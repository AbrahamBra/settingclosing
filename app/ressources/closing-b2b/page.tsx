import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Closing B2B : guide complet, closer definition, discovery call et gestion objections (2026)',
  description:
    "Le closing commercial B2B couvre tout le cycle de signature : closer B2B, discovery call, gestion des objections, scripts et programme coaching. Le guide pilier.",
  openGraph: {
    title: 'Closing B2B : guide complet du closing commercial (2026)',
    description:
      "Closer B2B, discovery call, gestion objections, scripts d'appel et programme de coaching. Tout le closing commercial en un seul guide.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Closing B2B : guide complet du closing commercial (2026)',
    description: 'Closer B2B, discovery call, gestion objections, scripts et coaching. Le guide pilier.',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/closing-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/closing-b2b',
      'x-default': 'https://www.setting.live/ressources/closing-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/closing-b2b#article',
  headline: 'Closing B2B : guide complet, closer definition, discovery call et gestion des objections',
  description:
    "Le closing commercial est la phase de vente B2B o\u00f9 un prospect qualifi\u00e9 devient client sign\u00e9. Guide complet : closer B2B, discovery call, gestion des objections, scripts d'appel et programme de coaching.",
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
  dateModified: '2026-03-26',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/closing-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/closing-b2b',
  },
  image: 'https://www.setting.live/ressources/closing-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Closing commercial',
  wordCount: 5200,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: [
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/closing-b2b#closing-commercial',
      name: 'Closing commercial',
      description: "Phase finale du cycle de vente B2B o\u00f9 un closer transforme un prospect qualifi\u00e9 en client sign\u00e9. Comprend la discovery call, la pr\u00e9sentation de valeur, la gestion des objections et la demande de d\u00e9cision.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/closing-b2b#closer-b2b',
      name: 'Closer B2B',
      alternateName: ['Closer', 'Closeur'],
      description: "Commercial sp\u00e9cialis\u00e9 dans la conversion de leads qualifi\u00e9s en clients. Il intervient sur la phase finale du cycle de vente : discovery, pr\u00e9sentation de valeur, objections, signature. Il ne prospecte pas.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/closing-b2b#discovery-call',
      name: 'Discovery call',
      description: "Premier appel commercial du closeur avec un prospect qualifi\u00e9. Objectif : comprendre le probl\u00e8me, le contexte, les tentatives pr\u00e9c\u00e9dentes et le co\u00fbt du statu quo avant de pr\u00e9senter l'offre. 60 \u00e0 70 % du temps en questions et \u00e9coute.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
  ],
  mentions: [
    { '@type': 'Thing', name: 'Challenger Sale', url: 'https://www.challengerinc.com' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment conduire un appel de closing B2B en 5 phases',
  description: "Structure d'un appel de closing commercial en B2B, de l'ouverture \u00e0 la demande de d\u00e9cision.",
  totalTime: 'PT45M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Ouverture et cadrage', text: "Posez le format de l'appel. Signalez que vous allez d'abord comprendre la situation avant de parler de votre offre. S\u00e9curisez 20 minutes de discovery." },
    { '@type': 'HowToStep', position: 2, name: 'Discovery : explorer le probl\u00e8me', text: "Questions ouvertes sur le probl\u00e8me, son co\u00fbt, les tentatives pr\u00e9c\u00e9dentes. 60-70 % du temps d'appel en \u00e9coute." },
    { '@type': 'HowToStep', position: 3, name: 'Qualifier le d\u00e9cideur et le timing', text: "Identifier qui prend la d\u00e9cision et s'il y a une contrainte de date. Ajuster la suite en cons\u00e9quence." },
    { '@type': 'HowToStep', position: 4, name: 'Pr\u00e9sentation de valeur calibr\u00e9e', text: "R\u00e9sumer ce que vous avez compris, valider avec le prospect, puis pr\u00e9senter l'offre en r\u00e9ponse directe \u00e0 son probl\u00e8me." },
    { '@type': 'HowToStep', position: 5, name: 'Demande de d\u00e9cision', text: "Demander explicitement si le prospect veut avancer. Traiter les objections restantes. Fixer une prochaine \u00e9tape dat\u00e9e." },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce que le closing en B2B ?",
    answer:
      "Le closing commercial B2B est la phase de vente o\u00f9 un closer transforme un prospect qualifi\u00e9 en client sign\u00e9. Il intervient apr\u00e8s le setting : le setter a g\u00e9n\u00e9r\u00e9 le rendez-vous, le closeur conduit l'appel de vente. Le closing inclut la discovery call, la pr\u00e9sentation de valeur, la gestion des objections et la demande de d\u00e9cision.",
  },
  {
    question: "Qu'est-ce qu'une discovery call ?",
    answer:
      "La discovery call est le premier appel commercial du closeur avec un prospect. Son objectif : comprendre le probl\u00e8me, le contexte, les tentatives pr\u00e9c\u00e9dentes et le co\u00fbt du statu quo avant de parler de l'offre. Une bonne discovery mobilise 60 \u00e0 70 % du temps de l'appel en questions et \u00e9coute.",
  },
  {
    question: "Comment g\u00e9rer l'objection 'c'est trop cher' ?",
    answer:
      "L'objection prix en fin d'appel signale presque toujours que la valeur n'a pas \u00e9t\u00e9 \u00e9tablie pendant la discovery. Revenez au co\u00fbt du probl\u00e8me : 'Si on ne fait rien, qu'est-ce que \u00e7a vous co\u00fbte dans 6 mois ?' Puis ancrez le prix sur cette valeur. Si le probl\u00e8me co\u00fbte 60 000 \u20ac par an et votre solution 24 000 \u20ac, le prix n'est plus le sujet.",
  },
  {
    question: "Quelle est la diff\u00e9rence entre setting et closing ?",
    answer:
      "Le setter g\u00e9n\u00e8re les rendez-vous qualifi\u00e9s : prospection LinkedIn, d\u00e9tection de signaux, qualification. Le closeur les transforme en contrats : discovery, pr\u00e9sentation, objections, signature. S\u00e9parer les deux permet d'optimiser chaque r\u00f4le.",
  },
  {
    question: "Comment mesurer son taux de closing ?",
    answer:
      "Taux de closing = contrats sign\u00e9s / rendez-vous r\u00e9alis\u00e9s. Sur des leads qualifi\u00e9s par un setter, un taux de 20 \u00e0 35 % est atteignable. Sur des leads froids ou auto-prospect\u00e9s, on tourne entre 10 et 15 %. En dessous de 10 %, le probl\u00e8me vient de la qualification ou de la structure de l'appel.",
  },
  {
    question: "Un script de closing doit-il \u00eatre appris par coeur ?",
    answer:
      "Non. Un script de closing est un cadre, pas un texte. Il d\u00e9finit la structure de l'appel, les phases, les objectifs de chaque moment. Les mots changent selon le contexte du prospect. Un closeur qui r\u00e9cite un texte sonne comme un r\u00e9pondeur.",
  },
  {
    question: "Combien gagne un closer B2B en freelance ?",
    answer:
      "La commission standard en France en 2026 se situe entre 8 % et 15 % du montant du deal. Sur des offres \u00e0 3 000\u201310 000 \u20ac, un closer actif peut viser 3 000\u20136 000 \u20ac par mois sur 4 \u00e0 8 appels sign\u00e9s.",
  },
  {
    question: "\u00c0 partir de quel prix un coaching closing est-il rentable ?",
    answer:
      "D\u00e8s que votre offre d\u00e9passe 1 500 \u00e0 2 000 \u20ac et que vous r\u00e9alisez plusieurs appels par semaine. Exemple : si vous signez 2 clients de plus par mois sur une offre \u00e0 3 000 \u20ac, le gain est de 6 000 \u20ac mensuels. Un coaching \u00e0 2 000 \u20ac/mois est amorti par un seul contrat suppl\u00e9mentaire.",
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
      name: 'Closing B2B',
      item: 'https://www.setting.live/ressources/closing-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClosingB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, howToSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">{'\u203A'}</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">{'\u203A'}</li>
              <li className="text-text-primary">Closing B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide complet · Closing commercial
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Closing B2B : le guide complet du closing commercial, de la discovery call aux objections
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6" data-speakable="true">
              Le closing commercial est le moment o&ugrave; un prospect qualifi&eacute; dit oui. Ou non.
              Ce guide couvre tout : le r&ocirc;le du closer B2B, la structure d&apos;une discovery call,
              la gestion des objections, les scripts qui fonctionnent, les erreurs qui co&ucirc;tent des
              deals, et comment un programme de coaching fait passer un taux de 10 % &agrave; 35 %.
            </p>
            <AuthorBlock date="2026-03-18" readTime="30 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-26" />
          </header>

          <TldrBox>
            <p data-speakable="true">Le closing commercial B2B transforme un prospect qualifi&eacute; en client sign&eacute;. Le closer conduit la discovery call (60-70 % du temps en &eacute;coute), pr&eacute;sente la valeur ancr&eacute;e sur le probl&egrave;me du prospect, traite les objections r&eacute;elles (pas les pr&eacute;textes) et demande une d&eacute;cision. Taux de closing vis&eacute; sur leads qualifi&eacute;s : 20 &agrave; 35 %. Sur les appels audit&eacute;s, l&apos;erreur num&eacute;ro un est de pitcher avant d&apos;avoir compris le probl&egrave;me.</p>
          </TldrBox>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { stat: '20\u201335 %', label: 'taux de closing sur leads qualifi\u00e9s', source: 'Donn\u00e9es internes Setting, 2025-2026' },
              { stat: '60\u201370 %', label: "du temps d'appel en \u00e9coute (discovery)", source: 'M\u00e9thode Challenger Sale, Dixon & Adamson 2011' },
              { stat: '8\u201315 %', label: 'commission standard closer B2B freelance', source: 'March\u00e9 fran\u00e7ais 2026' },
            ].map(({ stat, label, source }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-white/[0.06]">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
                <p className="font-sans text-[10px] text-text-secondary/40 mt-1">{source}</p>
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
                { id: 'definition', label: "Ce que le closing commercial est (et ce que ce n'est pas)" },
                { id: 'closer', label: "Closer B2B : r\u00f4le, comp\u00e9tences et journ\u00e9e type" },
                { id: 'discovery', label: "La discovery call : structure en 4 phases" },
                { id: 'questions', label: "Les questions qui font avancer un appel" },
                { id: 'objections', label: "Gestion des objections : les vraies et les fausses" },
                { id: 'scripts', label: "Scripts de closing : cadre et exemples" },
                { id: 'challenger', label: "La m\u00e9thode Challenger Sale" },
                { id: 'erreurs', label: "Les 5 erreurs qui d\u00e9truisent le taux de closing" },
                { id: 'programme', label: "Programme de coaching closing : semaine par semaine" },
                { id: 'cas-client', label: "Cas client : de 0 sign\u00e9 sur 10 \u00e0 8 sign\u00e9s sur 10" },
                { id: 'taux', label: "Mesurer et am\u00e9liorer son taux de closing" },
                { id: 'freelance', label: "Closer B2B en freelance : mod\u00e8les et r\u00e9mun\u00e9ration" },
                { id: 'recruter', label: "Recruter un closer B2B" },
                { id: 'pour-qui', label: "Pour qui le coaching closing fonctionne" },
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

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 1 — D\u00e9finition du closing commercial */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que le closing commercial est (et ce que ce n&apos;est pas)
            </h2>

            <div className="definition-block bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-6" itemScope itemType="https://schema.org/DefinedTerm" data-speakable="true">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                D&eacute;finition
              </p>
              <p className="font-sans text-text-primary leading-relaxed" itemProp="description">
                Le <strong itemProp="name">closing commercial</strong> est la phase finale d&apos;un cycle de vente B2B. Le closeur conduit un appel avec un prospect qualifi&eacute;, explore le probl&egrave;me en profondeur, pr&eacute;sente la valeur de l&apos;offre et obtient une d&eacute;cision. C&apos;est le moment o&ugrave; le chiffre d&apos;affaires rentre.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce que le closing n&apos;est pas : un ensemble de techniques de manipulation pour forcer une d&eacute;cision. Cette confusion vient du vocabulaire. &laquo;&nbsp;Techniques de closing&nbsp;&raquo;, &laquo;&nbsp;scripts de closing&nbsp;&raquo; laissent entendre qu&apos;il s&apos;agit de trouver les bons mots pour contourner le jugement du prospect. Un closeur professionnel ne force rien. Il &eacute;coute, il qualifie. Et il sait reconna&icirc;tre quand le prospect n&apos;est pas le bon client.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              En B2B, le closing porte sur des offres &agrave; partir de 1 500 &agrave; 2 000 &euro;. En dessous, le cycle de vente est trop court pour justifier un appel structur&eacute;. Au-dessus, un appel bien conduit peut faire la diff&eacute;rence entre 20 % et 40 % de taux de transformation. Sur un pipeline de 8 &agrave; 12 appels par mois, c&apos;est consid&eacute;rable.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                La confusion fr&eacute;quente : appeler &laquo;&nbsp;closing&nbsp;&raquo; tout le processus de vente. Dans une organisation avec un setter et un closeur, le closing d&eacute;signe sp&eacute;cifiquement ce que fait le closeur. Le{' '}
                <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial</a>{' '}
                (prospection, qualification, prise de RDV) est un r&ocirc;le distinct.
              </p>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le cycle complet : signal d&apos;achat d&eacute;tect&eacute; par le setter, message de prospection, qualification, prise de RDV, appel de closing. Le closeur n&apos;intervient qu&apos;&agrave; la derni&egrave;re &eacute;tape. C&apos;est lui qui d&eacute;cide si le chiffre d&apos;affaires rentre.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 2 — Closer B2B */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="closer" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Closer B2B : r&ocirc;le, comp&eacute;tences et journ&eacute;e type
            </h2>

            <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8" itemScope itemType="https://schema.org/DefinedTerm" data-speakable="true">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                D&eacute;finition
              </p>
              <p className="font-sans text-text-primary leading-relaxed" itemProp="description">
                Un <strong itemProp="name">closer B2B</strong> est un profil commercial sp&eacute;cialis&eacute; dans la conversion de leads qualifi&eacute;s en clients. Il ne prospecte pas, ne cherche pas de contacts, ne fait pas de cold outreach. Il re&ccedil;oit des appels sur des leads qui ont d&eacute;j&agrave; accept&eacute; une conversation commerciale. Son p&eacute;rim&egrave;tre est pr&eacute;cis : discovery, pr&eacute;sentation de valeur, gestion des objections, signature.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Ce que fait concr&egrave;tement un closer B2B sur un appel :
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Discovery', desc: "15 \u00e0 25 minutes \u00e0 comprendre la situation du prospect : o\u00f9 il en est, quel est le probl\u00e8me r\u00e9el, ce qu'il a d\u00e9j\u00e0 essay\u00e9, ce qu'il perdrait \u00e0 ne pas bouger." },
                { label: 'Pr\u00e9sentation de valeur', desc: "L'offre pr\u00e9sent\u00e9e en r\u00e9ponse directe \u00e0 ce qu'il vient d'entendre. Pas un pitch g\u00e9n\u00e9rique." },
                { label: 'Gestion des objections', desc: "Creuser les r\u00e9sistances plut\u00f4t que les \u00e9craser. Ne pas n\u00e9gocier le prix tant que l'h\u00e9sitation n'est pas comprise." },
                { label: 'Signature', desc: "Guider vers la d\u00e9cision et assurer le passage de relais vers l'onboarding." },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans">
                  <span className="text-accent font-semibold shrink-0 text-sm">{item.label} :</span>
                  <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>

            <p className="font-sans font-semibold text-text-primary mb-4">
              Les 4 comp&eacute;tences d&apos;un bon closer
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  titre: "\u00c9coute active",
                  corps: "Un closer qui parle plus de 40 % du temps est en train de pitcher, pas de closer. Plus vous posez les bonnes questions, plus le prospect structure lui-m\u00eame sa propre conviction.",
                },
                {
                  titre: 'Discovery avant le pitch',
                  corps: "Le r\u00e9flexe du d\u00e9butant : pr\u00e9senter l'offre d\u00e8s que le prospect montre de l'int\u00e9r\u00eat. Erreur. Une discovery solide dure 15 \u00e0 25 minutes. Sans elle, le pitch est g\u00e9n\u00e9rique et les objections qui suivent sont l\u00e9gitimes.",
                },
                {
                  titre: 'Gestion des objections',
                  corps: "Les objections ne se r\u00e9futent pas, elles se creusent. \"C'est trop cher\" est rarement sur le prix. C'est une incertitude sur le r\u00e9sultat, un manque de clart\u00e9 sur le ROI, ou une comparaison avec une alternative inconnue.",
                },
                {
                  titre: "Lecture des signaux d'achat",
                  corps: "Questions sur la logistique, retour sur des d\u00e9tails concrets, ton plus engag\u00e9. Le closer qui ne les capte pas continue \u00e0 pitcher alors que le prospect est pr\u00eat \u00e0 signer.",
                },
              ].map((comp, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">{comp.titre}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{comp.corps}</p>
                </div>
              ))}
            </div>

            <p className="font-sans font-semibold text-text-primary mb-4">
              La journ&eacute;e type d&apos;un closeur
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un closeur qui travaille avec un setter re&ccedil;oit ses RDV la veille ou en d&eacute;but de journ&eacute;e. Il ne prospecte pas. Sa journ&eacute;e est structur&eacute;e autour de deux ou trois appels, avec de la pr&eacute;paration en amont et de la documentation en aval.
            </p>
            <div className="space-y-4 mb-6">
              {[
                { time: '8h45', title: 'Lecture des briefs setter', desc: "Qui est le prospect, quel signal a d\u00e9clench\u00e9 le contact, ce qui a \u00e9t\u00e9 dit, son niveau de qualification. 10 \u00e0 15 minutes par appel." },
                { time: '9h30', title: 'Premier appel closing (45\u201360 min)', desc: "20 minutes de discovery, 15 minutes de pr\u00e9sentation calibr\u00e9e, 15 minutes d'objections et demande de d\u00e9cision." },
                { time: '10h45', title: 'Documentation post-appel (10 min)', desc: "R\u00e9sultat, objections rencontr\u00e9es, profil exact, ce qui a fonctionn\u00e9. Ce retour est transmis au setter." },
                { time: '14h00', title: 'Deuxi\u00e8me appel closing', desc: "M\u00eame structure. Deux appels par jour est le rythme soutenable pour un closing de qualit\u00e9." },
                { time: '15h30', title: 'Retour setter + alignement pipeline', desc: "Quels leads arrivent, quels profils convertissent mieux, ajustement des crit\u00e8res de qualification." },
                { time: '16h30', title: 'Relances en cours', desc: "Les prospects qui ont dit 'je r\u00e9fl\u00e9chis'. Une relance n'est pas un rappel de politesse. C'est un deuxi\u00e8me mini-appel commercial." },
              ].map(({ time, title, desc }) => (
                <div key={time} className="flex gap-5">
                  <span className="font-sans text-accent text-xs font-semibold tabular-nums shrink-0 w-12 pt-0.5">
                    {time}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CtaArticle variant="methode" />

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 3 — Discovery Call */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="discovery" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La discovery call : structure en 4 phases
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La majorit&eacute; des deals perdus en B2B ne se perdent pas sur les objections. Ils se perdent avant. Le closeur a pr&eacute;sent&eacute; son offre sans comprendre ce que le prospect voulait. La discovery call existe pour &eacute;viter &ccedil;a. Et la plupart des gens la b&acirc;clent.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Une discovery bien conduite r&eacute;pond &agrave; quatre questions avant tout pitch :
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { q: "Quel est le probl\u00e8me exact ?", detail: "Pas le probl\u00e8me g\u00e9n\u00e9ral. Le probl\u00e8me pr\u00e9cis, dans leur contexte. 'Je n'arrive pas \u00e0 prospecter r\u00e9guli\u00e8rement' n'est pas un probl\u00e8me. C'est un sympt\u00f4me. Le probl\u00e8me, c'est ce que ce manque leur co\u00fbte." },
                { q: "Quel est le co\u00fbt du statu quo ?", detail: "Ce qu'il en co\u00fbte de ne rien changer. En temps, argent, opportunit\u00e9s manqu\u00e9es. Sans ce chiffre dans la t\u00eate du prospect, le prix de votre solution n'a pas de r\u00e9f\u00e9rentiel." },
                { q: "Qu'ont-ils d\u00e9j\u00e0 essay\u00e9 ?", detail: "Les tentatives pr\u00e9c\u00e9dentes r\u00e9v\u00e8lent les crit\u00e8res de d\u00e9cision r\u00e9els, les biais, et ce qu'ils ne voudront plus jamais entendre comme argument." },
                { q: "Qui d\u00e9cide ?", detail: "Si la personne en face ne peut pas signer, toute la discovery doit l'amener \u00e0 vous mettre en contact avec le d\u00e9cideur." },
              ].map(({ q, detail }) => (
                <div key={q} className="bg-bg-secondary rounded-xl p-4 border border-white/[0.06]">
                  <p className="font-sans text-sm font-semibold text-text-primary mb-1">{q}</p>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            <p className="font-sans font-semibold text-text-primary mb-4">
              Les 4 phases d&apos;une discovery de 45 minutes
            </p>
            <div className="space-y-5 mb-6">
              {[
                { step: '01', title: "Ouverture et cadrage", desc: "Posez le cadre d'embl\u00e9e : 'Je voudrais qu'on prenne le temps de comprendre votre situation avant qu'on parle de notre offre. \u00c7a nous prend 20-25 minutes. \u00c7a vous convient ?' \u00c7a signale que vous n'allez pas pitcher tout de suite." },
                { step: '02', title: "Exploration du probl\u00e8me", desc: "Phase centrale. Quel est le probl\u00e8me pr\u00e9cis, depuis quand, ce qu'il co\u00fbte concr\u00e8tement, ce qui a d\u00e9j\u00e0 \u00e9t\u00e9 essay\u00e9. Chaque r\u00e9ponse int\u00e9ressante m\u00e9rite un approfondissement." },
                { step: '03', title: "Qualification du d\u00e9cideur et du timing", desc: "Est-ce que la personne en face peut prendre la d\u00e9cision ? Si quelqu'un d'autre est impliqu\u00e9, comment les rejoindre ? Quelle est l'urgence r\u00e9elle ?" },
                { step: '04', title: "Synth\u00e8se et transition", desc: "'Si je comprends bien, votre probl\u00e8me principal c'est X, vous avez d\u00e9j\u00e0 essay\u00e9 Y sans r\u00e9sultat, et l'enjeu c'est Z. C'est bien \u00e7a ?' \u00c7a montre que vous avez \u00e9cout\u00e9 et cr\u00e9e l'ouverture pour le pitch." },
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

            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                R&eacute;sultat concret
              </p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                10 RDV cons&eacute;cutifs, 0 contrat sign&eacute;. En premi&egrave;re session de coaching, on a r&eacute;&eacute;cout&eacute; un appel enregistr&eacute;. En 8 minutes, le probl&egrave;me &eacute;tait visible : il pitchait l&apos;offre avant d&apos;avoir compris le probl&egrave;me du prospect. Restructuration de la discovery, RDV suivant : sign&eacute;. Les 7 d&apos;apr&egrave;s aussi.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un d&eacute;roul&eacute; type de discovery call en 30 minutes :
            </p>
            <div className="space-y-3">
              {[
                { temps: '0\u20132 min', etape: "Accueil et cadrage", detail: "Pr\u00e9sentation courte. Proposez le format : 'Je voudrais d'abord comprendre votre situation avant de vous parler de notre approche.'" },
                { temps: '2\u201320 min', etape: "Exploration du probl\u00e8me", detail: "Questions ouvertes. Creusez les r\u00e9ponses. Demandez le co\u00fbt du statu quo. \u00c9coutez." },
                { temps: '20\u201324 min', etape: "Qualification d\u00e9cision et timing", detail: "Qui d\u00e9cide. Y a-t-il une contrainte de date. Ce qui se passe si rien n'est fait dans 3 mois." },
                { temps: '24\u201327 min', etape: "Synth\u00e8se et ouverture", detail: "R\u00e9sumez dans vos mots ce que vous avez compris. Validez. Puis pr\u00e9sentez." },
                { temps: '27\u201330 min', etape: "Prochaine \u00e9tape", detail: "Un deuxi\u00e8me appel avec le co-d\u00e9cideur, un devis, ou une d\u00e9cision directe." },
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

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 4 — Questions */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="questions" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les questions qui font avancer un appel
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Les questions ferm&eacute;es (r&eacute;ponse oui/non) ferment la conversation. Les questions ouvertes l&apos;ouvrent. Les questions de cons&eacute;quence, celles qui font r&eacute;fl&eacute;chir le prospect au co&ucirc;t de son probl&egrave;me, sont les plus utiles.
            </p>
            <div className="space-y-4">
              {[
                {
                  categorie: "Comprendre le probl\u00e8me",
                  questions: [
                    "Qu'est-ce qui vous a amen\u00e9 \u00e0 regarder ce sujet maintenant ?",
                    "Comment \u00e7a se manifeste concr\u00e8tement au quotidien ?",
                    "C'est un probl\u00e8me r\u00e9cent ou vous composez avec depuis longtemps ?",
                  ],
                },
                {
                  categorie: "Mesurer l'enjeu",
                  questions: [
                    "Si on ne r\u00e9sout pas \u00e7a dans les 6 prochains mois, qu'est-ce que \u00e7a vous co\u00fbte ?",
                    "Vous avez essay\u00e9 de quantifier l'impact sur votre activit\u00e9 ?",
                    "Qu'est-ce que \u00e7a changerait pour vous si ce probl\u00e8me \u00e9tait r\u00e9gl\u00e9 ?",
                  ],
                },
                {
                  categorie: "Qualifier les tentatives pr\u00e9c\u00e9dentes",
                  questions: [
                    "Vous avez d\u00e9j\u00e0 essay\u00e9 des choses pour r\u00e9gler \u00e7a ? Qu'est-ce qui n'a pas march\u00e9 ?",
                    "Pourquoi vous n'avez pas continu\u00e9 avec la solution pr\u00e9c\u00e9dente ?",
                  ],
                },
                {
                  categorie: "Qualifier la d\u00e9cision",
                  questions: [
                    "Pour avancer, vous prenez la d\u00e9cision seul ou vous avez besoin d'impliquer quelqu'un d'autre ?",
                    "Il y a une contrainte de timing de votre c\u00f4t\u00e9 ?",
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
                        <span className="text-accent/50 shrink-0 mt-0.5">{'\u2192'}</span>
                        <span className="italic">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 5 — Gestion des objections */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="objections" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Gestion des objections : les vraies et les fausses
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Toutes les objections ne se traitent pas de la m&ecirc;me fa&ccedil;on. C&apos;est la premi&egrave;re chose qu&apos;un closeur doit comprendre. Il y a les objections r&eacute;elles : le prospect a un doute l&eacute;gitime qui m&eacute;rite une r&eacute;ponse. Et il y a les objections-pr&eacute;textes : il cherche &agrave; finir la conversation sans conflit. Confondre les deux vous fait perdre du temps sur des gens qui ne signeront pas.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Objections r&eacute;elles
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Budget bloqu\u00e9 jusqu'au T3",
                    "Besoin de valider avec mon associ\u00e9",
                    "Sous contrat avec un prestataire jusqu'en juin",
                    "Pas convaincu pour mon secteur",
                    "Besoin d'un essai avant de s'engager",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">{'\u2192'}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                  Pr&eacute;textes
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Je vais r\u00e9fl\u00e9chir (sans date)",
                    "Envoyez-moi une plaquette",
                    "Ce n'est pas le bon moment",
                    "C'est trop cher (sans avoir parl\u00e9 de valeur)",
                    "Je reviens vers vous",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">{'\u2192'}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="font-sans font-semibold text-text-primary mb-4">
              Les 5 objections les plus fr&eacute;quentes et comment r&eacute;pondre
            </p>
            <div className="space-y-6 mb-6">
              {[
                {
                  objection: "\"C'est trop cher\"",
                  diagnostic: "Dans 80 % des cas : la valeur n'a pas \u00e9t\u00e9 \u00e9tablie.",
                  mauvaise: "\"On est dans la moyenne du march\u00e9 et par rapport \u00e0 ce qu'on offre...\" \u2014 d\u00e9fense du prix, perte de temps.",
                  bonne: "\"Vous avez mis un chiffre sur ce que \u00e7a vous co\u00fbte de ne pas r\u00e9soudre \u00e7a ?\" Retour sur la valeur.",
                },
                {
                  objection: "\"Je dois en parler \u00e0 mon associ\u00e9\"",
                  diagnostic: "Vraie objection si vous ne saviez pas qu'il y avait un co-d\u00e9cideur.",
                  mauvaise: "\"Je vous envoie un r\u00e9cap et vous lui transmettez\" \u2014 vous perdez le contr\u00f4le.",
                  bonne: "\"On organise un appel \u00e0 trois ? Comme \u00e7a vous n'avez pas \u00e0 tout r\u00e9expliquer. Vous avez 30 minutes en commun cette semaine ?\"",
                },
                {
                  objection: "\"Je vais r\u00e9fl\u00e9chir\"",
                  diagnostic: "Pr\u00e9texte dans 90 % des cas.",
                  mauvaise: "\"Prenez le temps qu'il faut, je reviens vers vous dans une semaine.\" \u2014 vous attendez un non diff\u00e9r\u00e9.",
                  bonne: "\"Il y a quelque chose sur notre offre qui n'est pas clair, ou c'est plut\u00f4t que vous n'\u00eates pas encore convaincu que c'est la bonne approche ?\"",
                },
                {
                  objection: "\"Ce n'est pas le bon moment\"",
                  diagnostic: "Parfois r\u00e9el (fin d'exercice, migration en cours). Souvent un pr\u00e9texte.",
                  mauvaise: "\"Je vous recontacte dans 3 mois.\" \u2014 vous confiez votre pipeline \u00e0 l'espoir.",
                  bonne: "\"Qu'est-ce qui se passe en ce moment qui rend ce timing difficile ?\" Si la r\u00e9ponse est concr\u00e8te, planifiez un suivi pr\u00e9cis.",
                },
                {
                  objection: "\"J'ai d\u00e9j\u00e0 quelqu'un pour \u00e7a\"",
                  diagnostic: "Vraie objection. Il faut comprendre la situation exacte.",
                  mauvaise: "Argumenter que vous \u00eates meilleur sans savoir ce que fait le prestataire actuel.",
                  bonne: "\"Qu'est-ce que vous faites avec eux actuellement ? Et est-ce qu'il y a des choses que vous aimeriez qu'ils fassent mieux ?\"",
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
                        Mauvaise r&eacute;ponse
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed italic">{mauvaise}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                        Bonne r&eacute;ponse
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed italic">{bonne}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans font-semibold text-text-primary mb-3">
              Pr&eacute;venir plut&ocirc;t que traiter
            </p>
            <div className="space-y-3">
              {[
                { objection: "Objection prix", cause: "Valeur non \u00e9tablie pendant la discovery", prevention: "Demander le co\u00fbt du statu quo avant de parler de l'offre." },
                { objection: "Besoin d'en parler \u00e0 quelqu'un", cause: "D\u00e9cideur non qualifi\u00e9 en d\u00e9but d'appel", prevention: "Demander d\u00e8s les premi\u00e8res minutes qui co-d\u00e9cide." },
                { objection: "Pas le bon moment", cause: "Urgence non cr\u00e9\u00e9e pendant l'exploration", prevention: "Demander : 'Si on ne r\u00e9sout pas \u00e7a dans 3 mois, que se passe-t-il ?'" },
                { objection: "Je vais r\u00e9fl\u00e9chir", cause: "Valeur floue + pas de demande de d\u00e9cision", prevention: "Synth\u00e8se du probl\u00e8me en fin de discovery + demande explicite." },
              ].map(({ objection, cause, prevention }) => (
                <div key={objection} className="flex gap-4 py-3 border-b border-white/[0.06] last:border-0">
                  <div className="shrink-0 w-36">
                    <p className="font-sans text-xs font-semibold text-text-secondary/60">{objection}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-xs text-text-secondary mb-1">Cause : {cause}</p>
                    <p className="font-sans text-xs text-accent">Pr&eacute;vention : {prevention}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CtaArticle variant="methode" />

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 6 — Scripts */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="scripts" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Scripts de closing : cadre et exemples
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un script de closing n&apos;est pas un texte &agrave; r&eacute;citer. C&apos;est un cadre : les phases de l&apos;appel, les objectifs de chaque moment, les questions qui font avancer. Les mots changent selon le prospect. La structure, non.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="bg-red-500/5 px-4 py-2 border-b border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">
                    Template, &agrave; &eacute;viter
                  </p>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                    &laquo;&nbsp;Bonjour [Pr&eacute;nom], merci d&apos;avoir accept&eacute; ce rendez-vous. Je vais vous pr&eacute;senter notre offre qui comprend A, B et C...&nbsp;&raquo;
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-accent/20 overflow-hidden">
                <div className="bg-accent/5 px-4 py-2 border-b border-accent/10">
                  <p className="font-sans text-xs font-semibold text-accent uppercase tracking-widest">
                    Script, ce qui fonctionne
                  </p>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                    &laquo;&nbsp;Avant qu&apos;on rentre dans les d&eacute;tails de notre offre, je voudrais d&apos;abord comprendre votre situation. &Ccedil;a nous prend 15-20 minutes. Qu&apos;est-ce qui vous a amen&eacute; &agrave; regarder ce sujet maintenant ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  num: '01',
                  titre: "Ouverture et cadrage de l'appel",
                  objectif: "Poser le format et s\u00e9curiser le temps pour la discovery.",
                  script: "\u00ab Merci d'avoir pris le temps. Avant qu'on rentre dans les d\u00e9tails, je voudrais d'abord comprendre votre situation pour voir si on peut vraiment vous aider. \u00c7a nous prend 15-20 minutes. Ensuite, si \u00e7a a du sens, je vous explique comment on travaille. \u00c7a vous convient ? \u00bb",
                  pourquoi: "Vous signifiez que vous n'\u00eates pas l\u00e0 pour pitcher \u00e0 tout prix. \u00c7a met le prospect \u00e0 l'aise.",
                },
                {
                  num: '02',
                  titre: "Question de co\u00fbt du statu quo",
                  objectif: "Ancrer la valeur du probl\u00e8me avant de parler du prix.",
                  script: "\u00ab Vous m'avez dit que \u00e7a fait 6 mois que vous prospectez sans r\u00e9sultats r\u00e9guliers. Si rien ne change dans les 6 prochains mois, comment vous estimez l'impact sur votre activit\u00e9 ? \u00bb",
                  pourquoi: "Apr\u00e8s cette question, votre prix sera compar\u00e9 \u00e0 ce chiffre, pas \u00e0 z\u00e9ro.",
                },
                {
                  num: '03',
                  titre: "Synth\u00e8se avant le pitch",
                  objectif: "Montrer que vous avez \u00e9cout\u00e9 et ouvrir la pr\u00e9sentation.",
                  script: "\u00ab Si je r\u00e9sume ce que vous m'avez dit : votre probl\u00e8me principal c'est [X], vous avez d\u00e9j\u00e0 essay\u00e9 [Y] mais \u00e7a n'a pas r\u00e9gl\u00e9 [Z], et l'enjeu c'est [chiffre]. C'est bien \u00e7a ? [attendre confirmation] Voil\u00e0 pourquoi notre approche correspond \u00e0 votre situation... \u00bb",
                  pourquoi: "La confirmation du prospect avant le pitch lui fait sentir qu'il va entendre quelque chose de pertinent pour lui.",
                },
                {
                  num: '04',
                  titre: "Demande de d\u00e9cision",
                  objectif: "Obtenir une r\u00e9ponse directe apr\u00e8s le pitch.",
                  script: "\u00ab On a couvert les points essentiels. Est-ce que ce qu'on a discut\u00e9 correspond \u00e0 ce que vous cherchez ? Est-ce qu'on avance ensemble ? \u00bb",
                  pourquoi: "Un closeur qui ne demande pas de d\u00e9cision ne close pas. Il pr\u00e9sente.",
                },
                {
                  num: '05',
                  titre: "R\u00e9ponse \u00e0 \u00ab je vais r\u00e9fl\u00e9chir \u00bb",
                  objectif: "Clarifier si c'est une vraie h\u00e9sitation ou un non poli.",
                  script: "\u00ab Bien s\u00fbr. Pour que je comprenne mieux : il y a quelque chose sur notre approche qui n'est pas clair, ou c'est plut\u00f4t que vous n'\u00eates pas encore convaincu que c'est la bonne solution pour votre situation ? \u00bb",
                  pourquoi: "Si c'est un point flou : traitez-le. Si c'est un manque de conviction : demandez ce qui manque. Si c'est vague : le deal est probablement perdu, et mieux vaut le savoir maintenant.",
                },
              ].map(({ num, titre, objectif, script, pourquoi }) => (
                <div key={num}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Script {num} : {titre}
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-3">
                    Objectif : {objectif}
                  </p>
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 mb-2">
                    <p className="font-sans text-sm text-text-primary leading-relaxed">
                      {script}
                    </p>
                  </div>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {pourquoi}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 7 — Challenger Sale */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="challenger" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La m&eacute;thode Challenger Sale
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Matthew Dixon et Brent Adamson ont &eacute;tudi&eacute; 6 000 commerciaux B2B pour comprendre ce qui s&eacute;parait les meilleurs des autres. Pas la sympathie. Pas la pers&eacute;v&eacute;rance. Les meilleurs vendeurs &eacute;taient ceux qui challengeaient le prospect. Ceux qui apportaient une perspective que le prospect n&apos;avait pas.
            </p>
            <div className="space-y-5 mb-6">
              {[
                {
                  step: 'Teach',
                  title: 'Apporter un insight',
                  desc: "Le closeur arrive avec une perspective que le prospect n'a pas. Pas un pitch produit. Une information sur son secteur ou son probl\u00e8me qu'il n'avait pas consid\u00e9r\u00e9e sous cet angle.",
                },
                {
                  step: 'Tailor',
                  title: 'Adapter au contexte',
                  desc: "Le m\u00eame insight pr\u00e9sent\u00e9 de la m\u00eame fa\u00e7on \u00e0 tous les prospects ne fonctionne pas. Un directeur commercial et un solopreneur n'ont pas les m\u00eames probl\u00e8mes ni le m\u00eame vocabulaire.",
                },
                {
                  step: 'Take Control',
                  title: 'Conduire la d\u00e9cision',
                  desc: "Demander explicitement une d\u00e9cision, recadrer quand la discussion d\u00e9rive, \u00eatre \u00e0 l'aise avec un 'non' direct plut\u00f4t qu'un 'je r\u00e9fl\u00e9chis' sans fin.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-accent text-xs font-semibold tabular-nums shrink-0 w-12 pt-0.5 uppercase tracking-widest">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Pour les fondateurs et solopreneurs B2B, le Take Control est la composante la plus difficile. Elle va contre l&apos;instinct de ne pas brusquer le prospect. C&apos;est pourtant ce qui distingue un appel qui se termine par &laquo;&nbsp;je r&eacute;fl&eacute;chis&nbsp;&raquo; d&apos;un appel qui se termine par une d&eacute;cision claire.{' '}
              <a href="/ressources/challenger-sale-definition" className="text-accent hover:text-text-primary transition-colors">
                L&apos;article complet sur le Challenger Sale
              </a>.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 8 — Erreurs */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="erreurs" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 5 erreurs qui d&eacute;truisent le taux de closing
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Ces erreurs reviennent dans presque tous les audits d&apos;appels qu&apos;on r&eacute;alise. Ce ne sont pas des erreurs de d&eacute;butant. On les retrouve chez des commerciaux avec 5 ou 10 ans d&apos;exp&eacute;rience. La diff&eacute;rence : les d&eacute;butants ne les voient pas, les exp&eacute;riment&eacute;s les rationalisent.
            </p>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  title: "Pitcher dans les 5 premi\u00e8res minutes",
                  desc: "Le closeur a pr\u00e9par\u00e9 son pitch, il le d\u00e9roule avant d'avoir compris le probl\u00e8me du prospect. R\u00e9sultat : le prospect r\u00e9pond aux questions depuis le prisme de ce qu'il vient d'entendre, pas depuis son vrai probl\u00e8me. Les deals se perdent 3 semaines plus tard quand le prospect r\u00e9alise que l'offre ne correspond pas.",
                },
                {
                  num: '02',
                  title: "Traiter 'je r\u00e9fl\u00e9chis' comme une r\u00e9ponse",
                  desc: "Les prospects qui disent 'je r\u00e9fl\u00e9chis' sans date pr\u00e9cise ne rappellent pas. La bonne r\u00e9ponse : 'Qu'est-ce qu'il vous manque pour prendre une d\u00e9cision aujourd'hui ?'",
                },
                {
                  num: '03',
                  title: "Ne pas identifier le d\u00e9cideur d\u00e8s le d\u00e9but",
                  desc: "45 minutes de discovery, une belle pr\u00e9sentation, et en fin d'appel : 'Je dois en parler \u00e0 mon associ\u00e9.' Cette information devait \u00eatre obtenue dans les 10 premi\u00e8res minutes.",
                },
                {
                  num: '04',
                  title: "Argumenter sur le prix au lieu d'explorer la valeur",
                  desc: "Quand le prospect dit 'c'est trop cher', l'instinct est de justifier le prix. \u00c7a ne fonctionne pas parce que la r\u00e9sistance est sur la valeur per\u00e7ue, pas sur le prix. La seule r\u00e9ponse efficace : revenir sur le co\u00fbt du probl\u00e8me.",
                },
                {
                  num: '05',
                  title: "Ne pas documenter apr\u00e8s l'appel",
                  desc: "Le closeur qui ne documente pas perd la m\u00e9moire de son pipeline. Il recommence les m\u00eames erreurs, ne rep\u00e8re pas les patterns d'objections, et n'a aucune donn\u00e9e \u00e0 transmettre au setter. 10 minutes de documentation apr\u00e8s chaque appel, c'est ce qui fait que le syst\u00e8me s'am\u00e9liore.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{num}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-2">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 9 — Programme coaching */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="programme" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Programme de coaching closing : semaine par semaine
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un programme de coaching closing ne ressemble pas &agrave; une formation classique. Pas de modules &agrave; regarder. Pas de quiz. Pas de certification. C&apos;est du travail sur vos appels r&eacute;els, avec votre offre, sur vos prospects.
            </p>

            {[
              { period: 'Semaine 1', title: "Audit de l'existant", desc: "On commence par \u00e9couter. Si vous avez des enregistrements d'appels, on les analyse ensemble. Sinon, on reconstitue la structure de vos 3 derniers appels. L'objectif : identifier le moment exact o\u00f9 les prospects se ferment.", result: "Un diagnostic pr\u00e9cis et un plan de travail pour les 2 prochains mois." },
              { period: 'Semaines 2\u20133', title: "Restructuration de la discovery", desc: "On r\u00e9\u00e9crit la structure de votre appel. L'ordre des questions (contexte, probl\u00e8me, co\u00fbt, tentatives, d\u00e9cideur), les formulations qui font parler et celles qui font se fermer. Vous testez sur des appels r\u00e9els.", result: "Une structure de discovery adapt\u00e9e \u00e0 votre offre et votre march\u00e9." },
              { period: 'Semaines 4\u20136', title: "Gestion des objections sp\u00e9cifiques", desc: "On construit votre biblioth\u00e8que d'objections : les 5 \u00e0 8 objections que vous entendez syst\u00e9matiquement, avec la r\u00e9ponse calibr\u00e9e pour chacune.", result: "Un taux de closing qui monte. Les objections deviennent pr\u00e9visibles." },
              { period: 'Semaines 7\u201310', title: "Demande de d\u00e9cision et relances", desc: "Comment conclure sans forcer. Les formulations qui ne mettent pas le prospect en position d\u00e9fensive. Le protocole de relance pour les prospects qui 'r\u00e9fl\u00e9chissent'.", result: "Votre taux de closing approche son plateau. Les deals 'je r\u00e9fl\u00e9chis' se r\u00e9solvent plus vite." },
              { period: 'Mois 3', title: "Cas difficiles et consolidation", desc: "On travaille ce qui r\u00e9siste encore : profils atypiques, deals \u00e0 plusieurs d\u00e9cideurs, cycles longs. On met en place les outils de pilotage autonome.", result: "" },
            ].map(({ period, title, desc, result }) => (
              <div key={period} className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                    {period}
                  </span>
                  <div className="flex-1 h-px bg-white/[0.06]" aria-hidden="true" />
                </div>
                <p className="font-sans text-sm font-semibold text-text-primary mb-2">{title}</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">{desc}</p>
                {result && (
                  <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06] text-sm">
                    <p className="font-sans text-text-secondary leading-relaxed">{result}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 10 — Cas client */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="cas-client" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Cas client : de 0 sign&eacute; sur 10 &agrave; 8 sign&eacute;s sur 10
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Consultant RH ind&eacute;pendant. Offre d&apos;accompagnement &agrave; 3 500 &euro; sur 3 mois. Pipeline r&eacute;gulier avec un setter qui g&eacute;n&eacute;rait 3 &agrave; 4 RDV par semaine. Le probl&egrave;me : 10 RDV cons&eacute;cutifs, 0 contrat sign&eacute;.
            </p>
            <div className="space-y-6 mb-6">
              <div className="border-l-2 border-white/[0.06] pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                  Situation initiale
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Structure type : 5 min d&apos;introduction, 15 min de pr&eacute;sentation de l&apos;offre, 5 min de questions, annonce du prix, gestion des objections. Le probl&egrave;me &eacute;tait visible d&egrave;s la premi&egrave;re &eacute;coute : il pr&eacute;sentait l&apos;offre avant d&apos;avoir compris le probl&egrave;me du prospect.
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  S&eacute;ance 1
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  On a r&eacute;&eacute;cout&eacute; un appel enregistr&eacute; ensemble. &Agrave; la minute 7, le prospect avait dit une phrase cl&eacute; sur son vrai probl&egrave;me. Il l&apos;avait ignor&eacute;e pour continuer son pitch. 3 points de rupture identifi&eacute;s. Nouvelle structure en 4 phases &agrave; tester.
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Semaine 2
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Nouvelle discovery : 20 min de questions. Pr&eacute;sentation de l&apos;offre ancr&eacute;e sur ce qu&apos;il avait entendu. Le prospect en fin d&apos;appel : &laquo;&nbsp;J&apos;ai l&apos;impression qu&apos;on a parl&eacute; de mon probl&egrave;me, pas de ta solution.&nbsp;&raquo; Premier contrat sign&eacute;.
                </p>
              </div>
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  4 mois plus tard
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Taux de closing stabilis&eacute; &agrave; 38 % sur 4 &agrave; 6 appels par semaine. +2 clients par mois. Sur une offre &agrave; 3 500 &euro;, c&apos;est +7 000 &euro;/mois. Le coaching lui a co&ucirc;t&eacute; 2 000 &euro;/mois pendant 3 mois. Amorti par le premier mois de r&eacute;sultats.
                </p>
              </div>
            </div>
            <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] grid sm:grid-cols-3 gap-4 text-center">
              {[
                { chiffre: '0 \u2192 38 %', detail: 'taux de closing en 10 semaines' },
                { chiffre: '+2 clients/mois', detail: "sur une offre \u00e0 3 500 \u20ac" },
                { chiffre: '+7 000 \u20ac/mois', detail: "chiffre d'affaires additionnel" },
              ].map(({ chiffre, detail }) => (
                <div key={chiffre}>
                  <p className="font-serif text-lg text-accent mb-1">{chiffre}</p>
                  <p className="font-sans text-xs text-text-secondary leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 11 — Taux de closing */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="taux" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Mesurer et am&eacute;liorer son taux de closing
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Taux de closing = contrats sign&eacute;s / rendez-vous r&eacute;alis&eacute;s. Mais ce ratio seul ne dit pas grand chose. Il faut le croiser avec la source des leads.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Leads qualifi\u00e9s par un setter', taux: '20\u201335 %', context: 'Le setter a qualifi\u00e9 le prospect. Le closeur arrive en terrain pr\u00e9par\u00e9.' },
                { label: 'Leads auto-prospect\u00e9s', taux: '10\u201315 %', context: 'Moins de contexte, moins de qualification, plus de temps perdu.' },
                { label: 'Leads inbound froids', taux: '5\u201310 %', context: "Formulaire rempli sans qualification. Intention floue." },
                { label: 'Leads sur r\u00e9f\u00e9rence', taux: '40\u201360 %', context: "Confiance pr\u00e9-\u00e9tablie. Discovery plus courte, moins d'objections." },
              ].map(({ label, taux, context }) => (
                <div key={label} className="bg-bg-secondary rounded-xl p-4 border border-white/[0.06]">
                  <p className="font-sans text-xs text-text-secondary mb-1">{label}</p>
                  <p className="font-serif text-xl text-accent mb-2">{taux}</p>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{context}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              En dessous de 10 % sur des leads qualifi&eacute;s : la qualification du setter est trop laxiste, ou la structure de l&apos;appel est d&eacute;faillante (pitch trop t&ocirc;t, pas de discovery, pas de demande de d&eacute;cision).
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Comment diagnostiquer : enregistrez vos 3 prochains appels. Est-ce que vous avez pass&eacute; plus de 15 minutes en questions avant de mentionner le prix ? Est-ce que vous savez ce que &ccedil;a co&ucirc;te au prospect de ne rien changer ? Est-ce que vous avez demand&eacute; une d&eacute;cision en fin d&apos;appel ? Si la r&eacute;ponse &agrave; l&apos;une de ces questions est non, vous avez trouv&eacute; votre premier axe de travail.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 12 — Freelance */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="freelance" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Closer B2B en freelance : mod&egrave;les et r&eacute;mun&eacute;ration
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              La majorit&eacute; des closers B2B en France travaillent en freelance ou en portage salarial. Le mod&egrave;le est simple en th&eacute;orie. En pratique, il y a des questions &agrave; poser avant de signer.
            </p>
            <div className="space-y-5 mb-6">
              <div>
                <p className="font-sans font-semibold text-text-primary mb-2">Mod&egrave;les de r&eacute;mun&eacute;ration</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Commission standard en France en 2026 : 8 % &agrave; 15 % du deal. Sur des offres &agrave; 3 000 &agrave; 5 000 &euro;, un closer qui signe 5 &agrave; 8 deals par mois tourne entre 2 500 &euro; et 6 000 &euro;. Le mod&egrave;le 100 % &agrave; la performance est le plus fr&eacute;quent pour un closer qui d&eacute;bute avec un nouveau client.
                </p>
              </div>
              <div>
                <p className="font-sans font-semibold text-text-primary mb-2">Questions &agrave; poser avant de signer</p>
                <ul className="space-y-2">
                  {[
                    "Combien d'appels par semaine ? (moins de 3, c'est difficile de pratiquer s\u00e9rieusement)",
                    "Qui fait le setting ? Puis-je voir le brief qu'il envoie aux prospects ?",
                    "Quelle est la dur\u00e9e moyenne des appels de vente que vous faites d\u00e9j\u00e0 ?",
                    "Y a-t-il un enregistrement des appels pass\u00e9s que je peux \u00e9couter ?",
                    "Quelle est votre politique sur les deals en attente ou les relances ?",
                  ].map((q, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm">
                      <span className="text-accent shrink-0">{'\u2014'}</span>
                      <span className="text-text-secondary leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 13 — Recruter */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="recruter" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Recruter un closer B2B : ce qu&apos;il faut &eacute;valuer
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un CV de closer ne dit rien d&apos;utile. Les chiffres sont inv&eacute;rifiables, les contextes incomparables. Le vrai crit&egrave;re : est-ce que cette personne sait mener une discovery sans pitcher trop t&ocirc;t ? Est-ce qu&apos;elle sait g&eacute;rer &laquo;&nbsp;c&apos;est trop cher&nbsp;&raquo; sans baisser le prix dans les 30 secondes ?
            </p>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-6 border border-white/[0.06]">
              <p className="font-sans font-semibold text-text-primary mb-3">
                Comment tester un closer
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                Le jeu de r&ocirc;le sur votre offre r&eacute;elle est non-n&eacute;gociable. Vous jouez le prospect avec votre vraie objection principale. Observez trois choses :
              </p>
              <ul className="space-y-2">
                {[
                  "Est-ce qu'il pose des questions avant de pitcher, ou est-ce qu'il d\u00e9roule un script ?",
                  "Est-ce qu'il creuse l'objection ou est-ce qu'il r\u00e9cite une r\u00e9ponse toute faite ?",
                  "Est-ce qu'il demande une d\u00e9cision en fin de jeu de r\u00f4le ?",
                ].map((q, i) => (
                  <li key={i} className="flex gap-3 font-sans text-sm">
                    <span className="text-accent shrink-0">{'\u2014'}</span>
                    <span className="text-text-secondary leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* Section 14 — Pour qui */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section id="pour-qui" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pour qui le coaching closing fonctionne
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  &Ccedil;a marche pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Solopreneurs avec une offre B2B \u00e0 1 500 \u20ac ou plus",
                    "Consultants qui font plusieurs appels par semaine",
                    "Closeurs qui ont un setter mais pas de m\u00e9thode",
                    "Ceux qui ont des leads mais un taux en dessous de 20 %",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">{'\u2192'}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                  &Ccedil;a ne marche pas pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Offres B2C ou grand public",
                    "Offres en dessous de 500 \u20ac",
                    "Ceux qui n'ont pas encore de leads r\u00e9guliers",
                    "Ceux qui cherchent des 'techniques' plut\u00f4t qu'une m\u00e9thode",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">{'\u2192'}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le coaching closing fonctionne quand le probl&egrave;me est dans la structure de l&apos;appel, pas dans le volume de leads. Si vous n&apos;avez pas encore de pipeline r&eacute;gulier, commencer par le{' '}
              <a href="/ressources/setting-commercial-b2b" className="text-accent hover:text-text-primary transition-colors">
                setting commercial B2B
              </a>
              {' '}est plus adapt&eacute;.
            </p>
          </section>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* FAQ */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fr&eacute;quentes sur le closing commercial B2B
            </h2>
            <div className="space-y-6">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="border-l-2 border-white/[0.06] pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">{question}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed faq-answer">{answer}</p>
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
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : guide complet, setter definition et m\u00e9thode LinkedIn' },
                { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
                { href: '/ressources/qualification-leads-b2b', label: 'Qualifier un lead en B2B : m\u00e9thodes et crit\u00e8res' },
                { href: '/ressources/comment-devenir-setter-b2b', label: 'Devenir setter ou closer B2B : guide complet' },
                { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn : exemples et cadre' },
                { href: '/glossaire', label: 'Glossaire : closer, discovery, objection, pipeline' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">{'\u2192'}</span>
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
              Vous voulez am&eacute;liorer votre taux de closing ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder votre structure d&apos;appel actuelle, identifier o&ugrave; les deals se perdent et ce qui changerait dans votre cas. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel gratuit {'\u2192'}
            </ButtonGlow>
          </div>

          {/* Glossaire */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-5">
            <p className="font-sans text-sm text-text-muted">
              Discovery call, objection, closing... Un terme vous &eacute;chappe ?{' '}
              <a href="/glossaire" className="text-accent hover:underline">Consultez le glossaire</a>.
            </p>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a href="/ressources" className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors">
              {'\u2190'} Retour au blog
            </a>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : guide complet, setter definition et m\u00e9thode LinkedIn', readTime: '30 min' },
            { href: '/ressources/challenger-sale-definition', title: "Qu'est-ce que le Challenger Sale ?", readTime: '8 min' },
            { href: '/ressources/comment-devenir-setter-b2b', title: 'Devenir setter ou closer B2B : guide complet', readTime: '25 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
