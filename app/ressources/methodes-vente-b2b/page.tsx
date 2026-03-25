import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Méthodes de vente B2B comparées | Setting',
  description:
    'Challenger Sale, SPIN Selling, SONCAS : comparatif des 3 méthodes de vente B2B. Cas d\'usage et guide pour choisir la bonne.',
  openGraph: {
    title: 'Méthodes de vente B2B comparées | Setting',
    description:
      'Challenger Sale, SPIN Selling, SONCAS : les 3 méthodes de vente B2B qui structurent un cycle de vente. Comparatif, cas d\'usage et guide pour choisir la bonne approche.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/methodes-vente-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/methodes-vente-b2b',
      'x-default': 'https://www.setting.live/ressources/methodes-vente-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/methodes-vente-b2b',
  headline: 'Méthodes de vente B2B : Challenger Sale, SPIN Selling, SONCAS',
  description:
    'Comparatif des 3 méthodes de vente B2B les plus utilisées en France. Comment les choisir, les combiner et les appliquer selon votre cycle de vente.',
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
  url: 'https://www.setting.live/ressources/methodes-vente-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/methodes-vente-b2b',
  },
  image: 'https://www.setting.live/ressources/methodes-vente-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Méthode de vente B2B',
  wordCount: 2800,
  about: [
    { '@type': 'Thing', name: 'Méthodes de vente B2B' },
    { '@type': 'Thing', name: 'Challenger Sale' },
    { '@type': 'Thing', name: 'SPIN Selling' },
  ],
}

const faqItems = [
  {
    question: 'Quelle est la meilleure méthode de vente B2B ?',
    answer:
      'Il n\'existe pas de méthode universelle. Le Challenger Sale convient aux cycles de vente complexes avec plusieurs décideurs. Le SPIN Selling est idéal pour les phases de discovery et de vente consultative. La méthode SONCAS aide à comprendre les motivations profondes de l\'acheteur. Le plus efficace est souvent de combiner les trois selon les étapes de votre pipeline.',
  },
  {
    question: 'Peut-on combiner plusieurs méthodes de vente B2B ?',
    answer:
      'Oui, et c\'est même recommandé dans la plupart des cas. Un pipeline B2B complet peut utiliser SONCAS pour le profilage du prospect, SPIN Selling pour la phase de discovery, et le Challenger Sale pour la présentation de valeur et le closing. Les méthodes ne s\'opposent pas : elles couvrent des phases différentes du cycle de vente.',
  },
  {
    question: 'La méthode SONCAS fonctionne-t-elle en B2B ?',
    answer:
      'Absolument. Les six leviers SONCAS (Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie) s\'appliquent aussi aux décideurs B2B. En B2B, les leviers Sécurité et Argent sont souvent dominants — le décideur veut minimiser le risque et justifier le ROI. SONCAS permet de personnaliser votre argumentaire en fonction du profil psychologique de votre interlocuteur.',
  },
  {
    question: 'Le Challenger Sale est-il adapté aux petites entreprises ?',
    answer:
      'Le Challenger Sale a été conçu pour la vente complexe avec des offres à forte valeur ajoutée. Pour les petites entreprises, il est pertinent si vous vendez des prestations à plus de 2 000 euros avec un cycle de vente qui implique plusieurs conversations. Si votre offre est simple et votre cycle court, le SPIN Selling ou SONCAS seuls suffiront.',
  },
  {
    question: 'Combien de temps faut-il pour maîtriser une méthode de vente B2B ?',
    answer:
      'Comptez 4 à 8 semaines de pratique régulière pour intégrer les bases d\'une méthode, et 3 à 6 mois pour qu\'elle devienne naturelle sur vos appels. La clé : enregistrez vos appels, réécoutez-les, et identifiez les moments où vous avez dévié du cadre. La progression vient du feedback répété, pas de la théorie seule.',
  },
  {
    question: 'Comment former une équipe commerciale à ces méthodes ?',
    answer:
      'Commencez par une seule méthode — celle qui correspond le mieux à votre cycle de vente actuel. Formez en jeu de rôle, pas en présentation théorique. Enregistrez les appels réels pour illustrer les bons et les mauvais exemples. Ajoutez une méthode complémentaire tous les 2-3 mois, une fois que la première est intégrée dans les réflexes de l\'équipe.',
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
      name: 'Méthodes de vente B2B',
      item: 'https://www.setting.live/ressources/methodes-vente-b2b',
    },
  ],
}

// ─── Content Data ─────────────────────────────────────────────────────────────

const methodes = [
  {
    id: 'challenger-sale',
    nom: 'Challenger Sale',
    sousTitre: 'Teach, Tailor, Take Control',
    description:
      'Le Challenger Sale repose sur trois piliers : enseigner quelque chose de nouveau au prospect (Teach), adapter le discours à son contexte spécifique (Tailor), et garder le contrôle de la conversation commerciale (Take Control). Le closer qui utilise cette méthode ne cherche pas à plaire — il pousse le prospect à reconsidérer sa façon de voir son propre problème.',
    quandUtiliser: [
      'Vente complexe avec plusieurs décideurs impliqués',
      'Offres B2B à forte valeur (plus de 3 000 euros)',
      'Marchés où le prospect pense déjà avoir trouvé une solution',
      'Cycles de vente longs qui nécessitent de créer de l\'urgence',
    ],
    pointsForts: [
      'Crée une différenciation forte dès le premier échange',
      'Fonctionne même quand le prospect n\'a pas de douleur identifiée',
      'Positionne le vendeur comme expert, pas comme preneur de commande',
    ],
    lien: '/ressources/challenger-sale-definition',
    libelleArticle: 'Lire le guide complet sur le Challenger Sale',
  },
  {
    id: 'spin-selling',
    nom: 'SPIN Selling',
    sousTitre: 'Situation, Problem, Implication, Need-payoff',
    description:
      'Le SPIN Selling structure la phase de discovery autour de quatre types de questions. Les questions de Situation posent le contexte. Les questions de Problème identifient les douleurs. Les questions d\'Implication révèlent les conséquences de ne rien faire. Les questions de Need-payoff font verbaliser au prospect la valeur de la solution. Le prospect construit lui-même sa propre conviction.',
    quandUtiliser: [
      'Discovery calls et première conversation commerciale',
      'Vente consultative où l\'écoute prime sur le pitch',
      'Offres qui nécessitent de comprendre un contexte complexe',
      'Situations où le prospect ne mesure pas encore l\'ampleur de son problème',
    ],
    pointsForts: [
      'Évite le piège du pitch trop tôt',
      'Fait émerger des besoins que le prospect n\'avait pas formulés',
      'Crée un cadre reproductible pour les discovery calls',
    ],
    lien: '/ressources/methode-spin-selling',
    libelleArticle: 'Lire le guide complet sur le SPIN Selling',
  },
  {
    id: 'soncas',
    nom: 'SONCAS',
    sousTitre: 'Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie',
    description:
      'La méthode SONCAS identifie six leviers de motivation qui déclenchent une décision d\'achat. Chaque prospect a un ou deux leviers dominants : certains achètent pour se sécuriser, d\'autres pour innover, d\'autres encore pour le confort ou le retour sur investissement. Identifier le levier dominant permet de formuler un argumentaire qui parle directement à ce qui motive vraiment l\'acheteur.',
    quandUtiliser: [
      'Profilage du prospect avant ou pendant la discovery',
      'Personnalisation de l\'argumentaire de vente',
      'Gestion des objections en comprenant la motivation sous-jacente',
      'Vente en cycle court où il faut capter rapidement la bonne corde',
    ],
    pointsForts: [
      'Facile à apprendre et à appliquer rapidement',
      'Applicable aussi bien en B2B qu\'en B2C',
      'Complète naturellement SPIN et Challenger en ajoutant la couche psychologique',
    ],
    lien: '/ressources/methode-soncas',
    libelleArticle: 'Lire le guide complet sur la méthode SONCAS',
  },
]

const comparatif = [
  {
    critere: 'Phase du cycle',
    challenger: 'Pitch et closing',
    spin: 'Discovery',
    soncas: 'Profilage et argumentaire',
  },
  {
    critere: 'Complexité d\'apprentissage',
    challenger: 'Élevée',
    spin: 'Moyenne',
    soncas: 'Faible',
  },
  {
    critere: 'Cycle de vente idéal',
    challenger: 'Long (multi-appels)',
    spin: 'Moyen à long',
    soncas: 'Court à moyen',
  },
  {
    critere: 'Valeur d\'offre',
    challenger: '> 3 000 euros',
    spin: 'Toutes valeurs',
    soncas: 'Toutes valeurs',
  },
  {
    critere: 'Posture du vendeur',
    challenger: 'Expert provocateur',
    spin: 'Consultant à l\'écoute',
    soncas: 'Lecteur de motivations',
  },
  {
    critere: 'Force principale',
    challenger: 'Différenciation',
    spin: 'Compréhension du besoin',
    soncas: 'Personnalisation',
  },
]

const pipelineSteps = [
  {
    etape: '1. Profilage',
    methode: 'SONCAS',
    detail:
      'Avant même la discovery, identifiez le levier dominant du prospect. Analysez son secteur, son poste, son historique. Un directeur financier sera sensible au levier Argent et Sécurité. Un fondateur de startup répondra davantage à Nouveauté et Orgueil. Cette lecture oriente toute la suite.',
  },
  {
    etape: '2. Discovery',
    methode: 'SPIN Selling',
    detail:
      'Utilisez la structure SPIN pour creuser le contexte et les douleurs. Les questions d\'Implication sont les plus puissantes : elles font prendre conscience au prospect de ce qu\'il perd à ne pas agir. Chaque réponse vous donne de la matière pour la phase suivante.',
  },
  {
    etape: '3. Présentation de valeur',
    methode: 'Challenger Sale',
    detail:
      'Avec la matière récoltée en discovery, construisez une perspective nouvelle. Ne répétez pas ce que le prospect sait déjà — montrez-lui un angle qu\'il n\'avait pas vu. Adaptez votre discours à son contexte précis (Tailor), puis guidez fermement vers la décision (Take Control).',
  },
  {
    etape: '4. Closing',
    methode: 'Challenger + SONCAS',
    detail:
      'Au moment de conclure, appuyez sur le levier SONCAS dominant identifié en phase 1. Si le prospect est sensible à la Sécurité, rassurez sur les garanties. S\'il est sensible à l\'Argent, reformulez le ROI. La posture Challenger maintient le cadre et évite les négociations inutiles.',
  },
]

export default function MethodesVenteB2BPage() {
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
              <li className="text-text-primary">M&eacute;thodes de vente B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              M&eacute;thodes de vente
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              M&eacute;thodes de vente B2B : Challenger Sale, SPIN Selling, SONCAS
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Une m&eacute;thode de vente n&apos;est pas un script. C&apos;est un cadre de r&eacute;flexion
              qui structure la fa&ccedil;on dont vous menez une conversation commerciale. Voici les trois
              approches les plus efficaces en B2B, quand les utiliser, et comment les combiner dans un
              pipeline concret.
            </p>
            <AuthorBlock date="2026-03-18" readTime="10 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          <TldrBox>
            <p>Trois m&eacute;thodes de vente B2B pass&eacute;es au crible : Challenger Sale (enseigner avant de vendre), SPIN Selling (questionner pour r&eacute;v&eacute;ler le besoin), SONCAS (s&apos;adapter au profil psychologique). Pour chacune : quand l&apos;utiliser, les limites, et ce qui marche en pratique.</p>
          </TldrBox>

          {/* Key Insight */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              L&apos;essentiel
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              La plupart des &eacute;quipes commerciales B2B &eacute;chouent parce qu&apos;elles
              improvisent leurs appels. Une m&eacute;thode de vente ne remplace pas le talent
              commercial &mdash; elle lui donne un cadre. Le{' '}
              <a
                href="/ressources/challenger-sale-definition"
                className="text-accent hover:underline transition-colors"
              >
                Challenger Sale
              </a>{' '}
              pour la diff&eacute;renciation, le{' '}
              <a
                href="/ressources/methode-spin-selling"
                className="text-accent hover:underline transition-colors"
              >
                SPIN Selling
              </a>{' '}
              pour la discovery, la{' '}
              <a
                href="/ressources/methode-soncas"
                className="text-accent hover:underline transition-colors"
              >
                m&eacute;thode SONCAS
              </a>{' '}
              pour la psychologie d&apos;achat. Trois outils, trois angles, un seul objectif :
              transformer un prospect qualifi&eacute; en client sign&eacute;.
            </p>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { num: '01', label: 'Le Challenger Sale : enseigner, adapter, contr\u00f4ler', anchor: 'challenger-sale' },
                { num: '02', label: 'Le SPIN Selling : structurer la discovery', anchor: 'spin-selling' },
                { num: '03', label: 'La m\u00e9thode SONCAS : comprendre les motivations d\u2019achat', anchor: 'soncas' },
                { num: '04', label: 'Comment choisir sa m\u00e9thode de vente', anchor: 'choisir' },
                { num: '05', label: 'Combiner les m\u00e9thodes dans un pipeline B2B', anchor: 'combiner' },
                { num: '06', label: 'Questions fr\u00e9quentes', anchor: 'faq' },
              ].map(({ num, label, anchor }) => (
                <li key={anchor} className="flex items-start gap-3 font-sans text-sm">
                  <span className="text-accent font-semibold shrink-0 w-6">{num}</span>
                  <a href={`#${anchor}`} className="text-text-secondary hover:text-text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Intro — Why methods matter */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi adopter une m&eacute;thode de vente en B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un commercial qui improvise chaque appel finit par reproduire les m&ecirc;mes erreurs
              sans les identifier. Il pitche trop t&ocirc;t, ne creuse pas assez les objections,
              et perd des deals qu&apos;il aurait pu signer avec une structure.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Une m&eacute;thode de vente ne dicte pas ce que vous devez dire mot pour mot. Elle
              d&eacute;finit un ordre logique pour mener la conversation : quand poser des questions,
              quand pr&eacute;senter la valeur, quand g&eacute;rer les objections, quand conclure.
              C&apos;est la diff&eacute;rence entre un cuisinier qui suit une recette et un qui
              improvise &mdash; les deux peuvent r&eacute;ussir, mais le premier est reproductible.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              En B2B, les enjeux sont plus &eacute;lev&eacute;s : les cycles de vente sont longs,
              les montants sont significatifs, et chaque prospect perdu repr&eacute;sente des semaines
              de travail gaspill&eacute;es. Trois m&eacute;thodes dominent le paysage commercial
              fran&ccedil;ais et international. Chacune r&eacute;pond &agrave; un besoin
              sp&eacute;cifique dans le cycle de vente.
            </p>
          </section>

          {/* Method Sections */}
          {methodes.map((m, idx) => (
            <section key={m.id} id={m.id} className="mb-14">
              <h2 className="font-serif text-h2 text-text-primary mb-2">
                {m.nom}
              </h2>
              <p className="font-sans text-accent font-semibold text-sm mb-5">
                {m.sousTitre}
              </p>
              <p className="font-sans text-text-secondary leading-relaxed mb-6">
                {m.description}
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-6 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-3">
                  Quand utiliser {m.nom}
                </p>
                <ul className="space-y-2">
                  {m.quandUtiliser.map((item, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm">
                      <span className="text-accent shrink-0">&mdash;</span>
                      <span className="text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-6 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-3">
                  Points forts
                </p>
                <ul className="space-y-2">
                  {m.pointsForts.map((item, i) => (
                    <li key={i} className="flex gap-3 font-sans text-sm">
                      <span className="text-accent shrink-0">&rarr;</span>
                      <span className="text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={m.lien}
                className="inline-flex items-center gap-2 font-sans text-sm text-accent hover:underline transition-colors group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                <span>{m.libelleArticle}</span>
              </a>
            </section>
          ))}

          <CtaArticle variant="methode" />

          {/* Section — Choisir sa méthode */}
          <section id="choisir" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment choisir sa m&eacute;thode de vente B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Le choix ne se fait pas au hasard. Il d&eacute;pend de votre cycle de vente, de la
              valeur de votre offre, de la maturit&eacute; de vos prospects et de la phase du
              pipeline sur laquelle vous avez le plus besoin de progresser.
            </p>

            {/* Comparatif Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b-2 border-white/[0.06]">
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">Crit&egrave;re</th>
                    <th className="text-left py-3 px-4 text-text-primary font-semibold">Challenger Sale</th>
                    <th className="text-left py-3 px-4 text-text-primary font-semibold">SPIN Selling</th>
                    <th className="text-left py-3 pl-4 text-text-primary font-semibold">SONCAS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparatif.map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 text-text-primary font-medium">{row.critere}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.challenger}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.spin}</td>
                      <td className="py-3 pl-4 text-text-secondary">{row.soncas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                R&egrave;gle pratique
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Si vous ne savez pas par o&ugrave; commencer, partez du SPIN Selling. C&apos;est la
                m&eacute;thode la plus polyvalente et la plus facile &agrave; int&eacute;grer dans
                des{' '}
                <a
                  href="/ressources/discovery-call-b2b"
                  className="text-accent hover:underline transition-colors"
                >
                  discovery calls B2B
                </a>
                {' '}existantes. Une fois que vos questions de discovery sont solides, ajoutez SONCAS
                pour affiner votre lecture du prospect, puis Challenger pour muscler votre
                pr&eacute;sentation de valeur.
              </p>
            </div>
          </section>

          {/* Section — Combiner les méthodes */}
          <section id="combiner" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Combiner les m&eacute;thodes dans un pipeline B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Les trois m&eacute;thodes ne se concurrencent pas &mdash; elles couvrent des
              moments diff&eacute;rents du cycle de vente. Un pipeline B2B bien structur&eacute;
              utilise chaque m&eacute;thode l&agrave; o&ugrave; elle est la plus forte.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Voici comment articuler les trois approches dans un cycle de vente r&eacute;el, du
              premier contact &agrave; la signature.
            </p>

            <div className="space-y-6 mb-8">
              {pipelineSteps.map((step, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-accent font-semibold text-sm">{step.etape}</span>
                    <span className="font-sans text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-md font-medium">
                      {step.methode}
                    </span>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-white/[0.06] pl-4 mb-6">
              <p className="font-sans text-text-secondary text-sm italic leading-relaxed">
                Ce cadre n&apos;est pas rigide. Sur un cycle court (une seule conversation), vous
                compressez les quatre &eacute;tapes en un seul appel. Sur un cycle long, chaque
                &eacute;tape peut correspondre &agrave; un rendez-vous distinct. L&apos;important
                est de garder l&apos;ordre : profilage avant discovery, discovery avant pitch.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La{' '}
              <a
                href="/ressources/qualification-leads-b2b"
                className="text-accent hover:underline transition-colors"
              >
                qualification des leads B2B
              </a>{' '}
              intervient en amont de tout ce processus. Sans leads bien qualifi&eacute;s, m&ecirc;me
              la meilleure combinaison de m&eacute;thodes ne produira pas de r&eacute;sultats.
              Le{' '}
              <a
                href="/ressources/setting-commercial-b2b"
                className="text-accent hover:underline transition-colors"
              >
                setting commercial B2B
              </a>{' '}
              pr&eacute;pare le terrain, et le{' '}
              <a
                href="/ressources/closing-b2b"
                className="text-accent hover:underline transition-colors"
              >
                closing B2B
              </a>{' '}
              finalise ce que les m&eacute;thodes ont construit.
            </p>

            <p className="font-sans text-text-secondary leading-relaxed">
              La{' '}
              <a
                href="/ressources/gestion-objections-b2b"
                className="text-accent hover:underline transition-colors"
              >
                gestion des objections en B2B
              </a>{' '}
              traverse toutes les &eacute;tapes. Chaque m&eacute;thode apporte un angle
              diff&eacute;rent pour traiter les r&eacute;sistances : SONCAS identifie la motivation
              derri&egrave;re l&apos;objection, SPIN la creuse avec des questions, et Challenger
              la recadre avec une perspective nouvelle.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fr&eacute;quentes
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
          <div className="mt-14 pt-8 border-t border-white/[0.06] mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/challenger-sale-definition', label: 'Challenger Sale : d\u00e9finition, principes et mise en pratique' },
                { href: '/ressources/methode-spin-selling', label: 'SPIN Selling : la m\u00e9thode pour structurer vos discovery calls' },
                { href: '/ressources/methode-soncas', label: 'M\u00e9thode SONCAS : les 6 leviers de motivation en vente' },
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : comment mener un appel de d\u00e9couverte' },
                { href: '/ressources/gestion-objections-b2b', label: 'Gestion des objections B2B : m\u00e9thode et exemples concrets' },
                { href: '/ressources/qualification-leads-b2b', label: 'Qualification de leads B2B : crit\u00e8res et processus' },
                { href: '/ressources/closing-b2b', label: 'Closing B2B : guide complet pour conclure vos ventes' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : d\u00e9finition, m\u00e9thode et programme' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
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
              Structurer votre m&eacute;thode de vente B2B
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Choisir la bonne m&eacute;thode ne suffit pas &mdash; il faut l&apos;int&eacute;grer
              dans un pipeline qui fonctionne. Discovery, qualification, closing : on construit
              avec vous le processus commercial qui transforme vos leads en clients.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Structurer mon pipeline de vente &rarr;
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/challenger-sale-definition', title: "Qu\u2019est-ce que le Challenger Sale ?", readTime: '9 min' },
            { href: '/ressources/methode-spin-selling', title: 'SPIN Selling 2026 : la m\u00e9thode pour vendre en B2B sans forcer', readTime: '9 min' },
            { href: '/ressources/methode-soncas', title: 'M\u00e9thode SONCAS en B2B 2026 : d\u00e9finition, 6 leviers et exemples concrets', readTime: '10 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
