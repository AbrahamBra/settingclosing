import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Le setting, c'est quoi ? Définition, méthode et exemples (2026)",
  description:
    "Le setting est la phase commerciale qui précède le closing. Définition, méthode en 5 étapes pour faire du setting, différence avec le closing, chiffres de référence et erreurs à éviter.",
  openGraph: {
    title: "Le setting, c'est quoi ? Définition, méthode et exemples | Setting",
    description:
      "Définition du setting commercial : rôle du setter, différence avec le closing, méthode signal-based et exemples concrets en B2B.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-definition',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-definition',
      'x-default': 'https://www.setting.live/ressources/setting-definition',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: "Le setting, c'est quoi ? Définition, méthode et exemples | Setting",
    description:
      "Définition du setting commercial : rôle du setter, différence avec le closing, méthode signal-based et exemples concrets en B2B.",
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-definition',
  headline: "Le setting, c'est quoi ? Définition, méthode et exemples (2026)",
  description:
    "Le setting est la phase commerciale qui précède le closing. Un setter détecte des prospects qualifiés, engage la conversation, qualifie l'intérêt et passe les RDV au closer.",
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
  datePublished: '2026-05-24',
  dateModified: '2026-09-02',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-definition',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-definition',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Setting commercial',
  wordCount: 2600,
  about: [
    { '@type': 'Thing', name: 'Setting commercial' },
    { '@type': 'Thing', name: 'Setter B2B' },
    { '@type': 'Thing', name: 'Prospection commerciale' },
  ],
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Setting',
  alternateName: ['Setting commercial', 'Sales setting', 'Appointment setting', 'Prise de rendez-vous qualifiée'],
  description:
    "Le setting est la phase commerciale qui précède le closing : un setter identifie des prospects qualifiés, les contacte, qualifie l'intérêt et passe les rendez-vous à un closer. En B2B, le setting se fait principalement sur LinkedIn via la détection de signaux d'achat.",
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'Vocabulaire du setting commercial B2B',
    url: 'https://www.setting.live/glossaire',
  },
}

const faqItems = [
  {
    question: "C'est quoi le setting ?",
    answer:
      "Le setting est la phase commerciale qui précède le closing : un setter identifie des prospects qualifiés, les contacte par message, qualifie leur intérêt et passe les rendez-vous à un closer. Le setter ne signe pas — il remplit l'agenda du closer de rendez-vous pertinents. En B2B, le setting se fait majoritairement sur LinkedIn.",
  },
  {
    question: "Qu'est-ce qu'un setter ?",
    answer:
      "Un setter (ou commercial setting) est un commercial spécialisé dans la prise de rendez-vous. Son périmètre : identifier les prospects selon un ICP précis, envoyer des messages personnalisés, qualifier les réponses, et planifier les RDV pour le closer. Il ne fait pas de discovery approfondie ni de closing — son livrable, c'est un calendrier rempli de rendez-vous qualifiés.",
  },
  {
    question: 'Quelle est la différence entre setting et closing ?',
    answer:
      "Le setting génère et qualifie les rendez-vous. Le closing transforme les rendez-vous en clients signés. Le setter travaille en amont (prospection, premier contact, qualification légère). Le closer travaille en aval (discovery call, présentation, gestion des objections, signature). Dans une équipe rodée, un closer travaille avec 1 à 2 setters pour scaler sans diluer la qualité commerciale.",
  },
  {
    question: 'Comment faire du setting B2B en 2026 ?',
    answer:
      "La méthode qui marche aujourd'hui combine 4 briques : (1) un ICP défini précisément, (2) la détection de signaux d'achat — likes, commentaires, changements de poste, (3) une co-rédaction IA + validation humaine de chaque message, (4) une séquence de relances espacées de 7 jours maximum 2 fois. Résultat attendu : 20-35 % de taux de réponse et 2 à 4 RDV qualifiés par semaine.",
  },
  {
    question: "Le setting, c'est de l'automatisation ?",
    answer:
      "Non, pas exclusivement. Le setting moderne combine IA et humain. L'IA détecte les signaux d'achat et propose des drafts de messages. L'humain valide chaque message avant envoi, ajuste le ton, gère les conversations. L'automatisation pure (Lemlist, Waalaxy en mode batch) tourne autour de 2-5 % de taux de réponse. Le setting hybride (IA + humain) atteint 20-35 %.",
  },
  {
    question: 'Combien coûte un setter en B2B ?',
    answer:
      "Trois options : en interne, un setter junior coûte 35 000 à 45 000 €/an salaire chargé, avec 3 à 6 mois de ramp-up. En freelance, comptez 1 500 à 3 000 €/mois selon l'expérience. En externalisé en mode abonnement (comme Setting), 790 €/mois sans engagement, opérationnel sous 7 jours.",
  },
  {
    question: "Comment faire du setting quand on débute ?",
    answer:
      "Commencez par écrire l'ICP, pas par écrire des messages. Poste exact, taille d'entreprise, secteur, et un déclencheur récent. Identifiez ensuite une source de signaux : réactions à vos posts, commentaires chez vos concurrents, changements de poste. Ce n'est qu'après que vous rédigez. Un message correct au bon profil bat un message parfait au mauvais profil.",
  },
  {
    question: "Setting et closing, c'est quoi la différence exactement ?",
    answer:
      "Le setting s'arrête à la prise de rendez-vous, le closing commence au discovery call. Le setter ne présente pas l'offre, ne donne pas de prix et ne traite pas d'objection. Ce qui passe d'un métier à l'autre, c'est un brief : une phrase de contexte, le signal qui a déclenché le contact, et un verbatim du prospect.",
  },
  {
    question: 'Quels sont les taux de réponse en setting ?',
    answer:
      "20 à 35 % avec une méthode signal-based, contre 2 à 5 % en cold outreach sans contexte. L'écart ne vient pas de la qualité d'écriture mais du moment : un message envoyé à quelqu'un qui vient de manifester un intérêt arrive dans une fenêtre d'attention ouverte. Comptez 2 à 4 rendez-vous qualifiés par semaine en rythme de croisière.",
  },
  {
    question: 'Le setting se fait-il uniquement sur LinkedIn ?',
    answer:
      "Non. Il existe trois formes : le setting LinkedIn (le plus répandu en B2B français, parce que les signaux y sont publics), le setting téléphonique sur leads entrants, et le setting sur base entrante (formulaires, lead magnets, réponses à une newsletter). Le canal change, la logique reste la même.",
  },
  {
    question: "Setting, prospection, business development : c'est la même chose ?",
    answer:
      "Non. La prospection est le terme générique qui désigne toute action de prise de contact sortante. Le setting est une forme spécifique de prospection : structurée, signal-based, ciblée sur la prise de rendez-vous. Le business development couvre un périmètre plus large incluant la stratégie, les partenariats et le marché. Un setter fait de la prospection ; tous les prospecteurs ne font pas du setting.",
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
      name: "C'est quoi le setting",
      item: 'https://www.setting.live/ressources/setting-definition',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingDefinitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, definedTermSchema, faqSchema, breadcrumbSchema]),
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
              <li className="text-text-primary">C&apos;est quoi le setting</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Définition
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Le setting, c&apos;est quoi&nbsp;?
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le setting, c&apos;est la phase commerciale qui précède le closing. Un setter identifie des prospects qualifiés, les contacte, qualifie l&apos;intérêt et passe les rendez-vous à un closer.
            </p>
            <AuthorBlock date="2026-05-24" readTime="14 min de lecture" dateLabel="24 mai 2026" updatedDate="2026-09-02" />
          </header>

          <TldrBox>
            <p className="tldr">
              <strong>Définition simple&nbsp;:</strong> le setting est l&apos;ensemble des actions commerciales qui amènent un prospect inconnu jusqu&apos;à un rendez-vous qualifié. C&apos;est la première moitié du cycle de vente B2B.
            </p>
            <p className="tldr">
              <strong>Qui fait quoi&nbsp;:</strong> le setter prospecte et qualifie. Le closer prend le RDV qualifié et signe.
            </p>
            <p className="tldr">
              <strong>Où ça se passe en 2026&nbsp;:</strong> 80 % du setting B2B se fait sur LinkedIn, avec une méthode signal-based (on contacte ceux qui ont déjà montré un signe d&apos;intérêt). Le détail de cette approche est dans notre guide de référence&nbsp;:{' '}
              <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">setting LinkedIn</a>.
            </p>
          </TldrBox>

          <article className="prose-content space-y-10">

            {/* Définition détaillée */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Le setting, étape par étape</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Concrètement, un setter exécute 5 actions dans cet ordre. Chacune a un livrable mesurable.
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-text-primary">Cibler.</strong> Définir l&apos;ICP (poste, secteur, taille d&apos;entreprise, déclencheur récent). Filtrer Sales Navigator. Livrable&nbsp;: une liste de 100 à 300 profils par semaine.
                </li>
                <li>
                  <strong className="text-text-primary">Détecter.</strong> Surveiller les signaux d&apos;achat — likes sur vos posts ou ceux de vos concurrents, commentaires, changements de poste, demandes de connexion. Livrable&nbsp;: 30 à 50 signaux qualifiés par semaine.
                </li>
                <li>
                  <strong className="text-text-primary">Contacter.</strong> Rédiger un premier message ancré sur le signal (5 phrases max, 2<sup>e</sup> phrase = fait précis tiré du profil). Validation humaine avant envoi. Livrable&nbsp;: 50 à 100 messages calibrés/semaine.
                </li>
                <li>
                  <strong className="text-text-primary">Qualifier.</strong> Gérer les réponses, poser 2 à 3 questions d&apos;orientation (budget, timing, décideur). Livrable&nbsp;: classer chaque réponse en lead chaud / tiède / froid.
                </li>
                <li>
                  <strong className="text-text-primary">Passer le RDV.</strong> Planifier le rendez-vous dans le calendrier du closer avec un brief contextuel (1 phrase de synthèse + verbatim clé). Livrable&nbsp;: 2 à 4 RDV qualifiés par semaine.
                </li>
              </ol>
            </section>

            {/* Comment faire du setting */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Comment faire du setting&nbsp;: les conditions à réunir</h2>
              <p data-speakable="true" className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Les cinq étapes ci-dessus décrivent le geste. Elles ne suffisent pas. Faire du setting qui produit des rendez-vous demande quatre briques en place avant le premier message.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <div className="space-y-4">
                  {[
                    { t: 'Un ICP écrit, pas approximatif', d: 'Poste exact, taille d’entreprise, secteur, et un déclencheur récent. « Les dirigeants de PME » n’est pas un ICP. « Fondateur de SaaS B2B, 5 à 30 salariés, qui vient de recruter un commercial » en est un.' },
                    { t: 'Une source de signaux', d: 'Sans signal, vous faites du cold outreach et vous plafonnez à 2-5 % de réponse. Les signaux viennent de vos posts, de ceux de vos concurrents, et des changements de poste.' },
                    { t: 'Une IA co-rédactrice, pas rédactrice', d: 'Elle lit le profil et propose des angles. Un humain choisit, réécrit et valide. C’est ce qui sépare 25 % de réponse de 3 %.' },
                    { t: 'Une cadence de relance courte', d: 'Deux relances maximum, espacées de 7 jours. Au-delà, le taux de réponse ne monte plus et le risque de signalement augmente.' },
                  ].map(({ t, d }) => (
                    <div key={t}>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{t}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                L&apos;ordre compte. La plupart des gens commencent par le message, parce que c&apos;est la partie visible. C&apos;est l&apos;erreur classique. Un message parfait envoyé au mauvais profil ne produit rien. Un message correct envoyé au bon profil au bon moment fonctionne.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Le détail opérationnel, canal par canal, est dans notre{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">guide du setting LinkedIn</a>.
              </p>
            </section>

            {/* Les chiffres */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les chiffres de référence du setting</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Trois repères permettent de savoir si un setting fonctionne ou non.
              </p>
              <div className="grid grid-cols-3 gap-4 my-6">
                {[
                  { stat: '20-35 %', label: 'taux de réponse en signal-based' },
                  { stat: '2-5 %', label: 'taux de réponse en cold outreach' },
                  { stat: '2-4', label: 'RDV qualifiés par semaine' },
                ].map(({ stat, label }) => (
                  <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                    <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                    <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                L&apos;écart entre 3 % et 25 % ne vient pas du talent d&apos;écriture. Il vient du moment. Un message envoyé à quelqu&apos;un qui vient de commenter un post sur votre sujet arrive dans une fenêtre d&apos;attention ouverte. Le même message envoyé trois mois plus tard tombe dans le vide.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Un quatrième chiffre mérite d&apos;être suivi&nbsp;: le taux de no-show. Un setting qui produit 4 RDV par semaine dont la moitié ne se présente pas ne produit pas 4 RDV. Il en produit 2, et il coûte le double.
              </p>
            </section>

            {/* Setting vs closing */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Setting vs closing&nbsp;: la frontière exacte</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Beaucoup confondent les deux. La règle est simple&nbsp;: le setting s&apos;arrête à la prise de rendez-vous. Le closing commence à la discovery call.
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm font-sans text-text-secondary border border-white/[0.08] rounded-lg">
                  <thead className="bg-white/[0.03]">
                    <tr>
                      <th className="text-left p-3 border-b border-white/[0.08]">Critère</th>
                      <th className="text-left p-3 border-b border-white/[0.08]">Setter</th>
                      <th className="text-left p-3 border-b border-white/[0.08]">Closer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">Objectif</td>
                      <td className="p-3 border-b border-white/[0.06]">Générer un RDV qualifié</td>
                      <td className="p-3 border-b border-white/[0.06]">Faire signer le client</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">Canal</td>
                      <td className="p-3 border-b border-white/[0.06]">LinkedIn, email, téléphone</td>
                      <td className="p-3 border-b border-white/[0.06]">Visio / téléphone</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">Durée moyenne / prospect</td>
                      <td className="p-3 border-b border-white/[0.06]">5 à 15 minutes</td>
                      <td className="p-3 border-b border-white/[0.06]">30 à 60 minutes (call)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">KPI principal</td>
                      <td className="p-3 border-b border-white/[0.06]">Taux de réponse, RDV/semaine</td>
                      <td className="p-3 border-b border-white/[0.06]">Taux de closing, ticket moyen</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-text-primary">Coût marché 2026</td>
                      <td className="p-3">35–45 k€/an (interne) ou 790 €/mois (externalisé)</td>
                      <td className="p-3">50–80 k€/an + variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p data-speakable="true" className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                La confusion la plus fréquente porte sur le passage de relais. Le setter ne fait pas une mini-vente. Il ne présente pas l&apos;offre, ne donne pas de prix, ne traite pas d&apos;objection. S&apos;il le fait, le closer arrive sur un prospect qui croit déjà savoir, et l&apos;appel démarre mal.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Ce qui passe d&apos;un métier à l&apos;autre, c&apos;est un brief. Une phrase de contexte, le signal qui a déclenché le contact, et un verbatim du prospect. Trente secondes de lecture pour le closer. C&apos;est ce brief qui fait la différence entre un RDV qualifié et un simple créneau dans un agenda. Le détail du métier de closer est dans notre{' '}
                <a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">guide du closing B2B</a>.
              </p>
            </section>

            {/* Les formes de setting */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les trois formes de setting</h2>
              <p data-speakable="true" className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Le setting n&apos;est pas qu&apos;une pratique LinkedIn. Le canal change, la logique reste la même&nbsp;: un signal, un message contextualisé, une qualification, un rendez-vous.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <div className="space-y-4">
                  {[
                    { t: 'Setting LinkedIn', d: 'Le plus répandu en B2B français. Les signaux sont visibles publiquement : réactions, commentaires, changements de poste. C’est ce qui rend la contextualisation possible à grande échelle.' },
                    { t: 'Setting téléphonique', d: 'Sur des leads entrants, pas à froid. Chaque lead est appelé, scoré et routé. Le rythme est différent : la qualification prend cinq minutes au lieu de trois échanges écrits.' },
                    { t: 'Setting sur base entrante', d: 'Formulaires, lead magnets, réponses à une newsletter. Le signal est déjà là, il est explicite. Le travail porte sur la vitesse de réponse et la qualification.' },
                  ].map(({ t, d }) => (
                    <div key={t}>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{t}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Une distinction transversale compte plus que le canal&nbsp;: le setting <strong className="text-text-primary">réactif</strong> traite ceux qui se sont manifestés. Le setting <strong className="text-text-primary">proactif</strong> va chercher ceux qui correspondent à l&apos;ICP sans s&apos;être manifestés. Le premier a de meilleurs taux, le second fait le volume. Un pipeline sain utilise les deux.
              </p>
            </section>

            {/* Erreurs */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les erreurs qui font échouer un setting</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Quatre reviennent systématiquement. Aucune n&apos;est une question de talent.
              </p>
              <ul className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-disc pl-5 mb-4">
                <li><strong className="text-text-primary">Pitcher dans le premier message.</strong> Le prospect n&apos;a rien demandé. Un pitch non sollicité fait chuter le taux de réponse sous 5 %, quel que soit le ciblage.</li>
                <li><strong className="text-text-primary">Confondre volume et résultat.</strong> 200 messages à 3 % donnent 6 réponses. 60 messages ciblés à 25 % en donnent 15. Le volume coûte aussi en réputation de compte.</li>
                <li><strong className="text-text-primary">Automatiser la rédaction.</strong> Un message généré sans relecture finit par se voir. Les prospects B2B reçoivent une quinzaine de sollicitations par semaine, ils reconnaissent un template en deux lignes.</li>
                <li><strong className="text-text-primary">Qualifier trop peu.</strong> Un RDV pris sans vérifier le budget, le timing et le pouvoir de décision est un RDV que le closer va perdre. Le no-show et l&apos;appel stérile coûtent plus cher qu&apos;un rendez-vous en moins.</li>
              </ul>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Une cinquième erreur, plus discrète&nbsp;: prospecter sans surveiller son taux d&apos;acceptation. LinkedIn ajuste vos quotas en fonction de vos résultats. Une liste mal ciblée réduit le volume que vous pourrez envoyer la semaine suivante. Le détail est dans notre guide sur les{' '}
                <a href="/ressources/restrictions-linkedin-prospection" className="text-accent hover:underline transition-colors">restrictions LinkedIn</a>.
              </p>
            </section>

            {/* Origines */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">D&apos;où vient le terme «&nbsp;setting&nbsp;»&nbsp;?</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Le terme vient de l&apos;anglais «&nbsp;<em>appointment setting</em>&nbsp;» — littéralement, «&nbsp;poser le rendez-vous&nbsp;». Il s&apos;est popularisé dans l&apos;écosystème B2B américain entre 2018 et 2022, porté par les coachs et formateurs en vente en ligne (high-ticket sales). En France, l&apos;usage explose en 2023-2024 avec la montée des solopreneurs et des freelances B2B qui veulent déléguer la prospection sans recruter.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                À ne pas confondre avec «&nbsp;sales development&nbsp;» (terme plus large incluant le marketing entrant), ni avec «&nbsp;cold calling&nbsp;» (qui désigne uniquement le démarchage téléphonique à froid). Le setting est plus spécifique&nbsp;: il vise la prise de RDV, pas la vente, et il est aujourd&apos;hui majoritairement digital.
              </p>
            </section>

            {/* Quand utiliser */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Quand un setting fonctionne (et quand ça ne marche pas)</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Le setting B2B fonctionne quand <strong className="text-text-primary">trois conditions</strong> sont réunies&nbsp;:
              </p>
              <ul className="font-sans text-text-secondary text-base leading-relaxed space-y-2 list-disc pl-5 mb-4">
                <li>Une offre validée avec au moins 5 à 10 clients existants (savoir pour qui ça marche).</li>
                <li>Un ticket moyen supérieur à 2 000 €, qui justifie un cycle de vente structuré.</li>
                <li>Des décideurs accessibles sur LinkedIn (tech, conseil, SaaS, formation, finance, RH).</li>
              </ul>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                À l&apos;inverse, le setting est inefficace pour&nbsp;: le B2C, les marchés où LinkedIn n&apos;est pas le canal des acheteurs (artisanat local, retail), et les offres mal définies dont l&apos;ICP est flou.
              </p>
            </section>

            {/* CTA mid-article */}
            <CtaArticle variant="methode" />

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fréquentes sur le setting</h2>
              <div className="space-y-6">
                {faqItems.map((item, i) => (
                  <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                      <h3 className="font-sans font-semibold text-text-primary text-base">{item.question}</h3>
                      <span className="text-text-muted text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="faq-answer mt-3 font-sans text-text-secondary text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-6">
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Vous savez ce qu&apos;est le setting. La suite, c&apos;est la méthode : scripts, signaux, cadences et exemples chiffrés.
              </p>
              <ButtonGlow as="a" href="/ressources/setting-linkedin">
                Lire le guide du setting LinkedIn
              </ButtonGlow>
            </section>

          </article>

          {/* Related */}
          <RelatedArticles
            articles={[
              {
                href: '/ressources/setting-commercial-b2b',
                title: 'Setting commercial B2B : guide complet',
                readTime: '25 min de lecture',
              },
              {
                href: '/ressources/prospection-linkedin-b2b',
                title: 'Prospection LinkedIn B2B 2026',
                readTime: '20 min de lecture',
              },
              {
                href: '/ressources/closing-b2b',
                title: 'Closing B2B : le guide complet',
                readTime: '22 min de lecture',
              },
            ]}
          />

        </div>
      </main>
      <Footer />
    </>
  )
}
