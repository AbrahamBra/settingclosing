import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Glossaire Setting & Prospection LinkedIn | Setting',
  description:
    'Définitions des termes clés du setting et de la prospection LinkedIn : setter, signal d\'achat, ICP, discovery, pipeline, qualification.',
  openGraph: {
    title: 'Glossaire Setting & Prospection LinkedIn | Setting',
    description:
      "Les définitions exactes des termes du setting et de la prospection LinkedIn — setter, signal d'achat, ICP, pipeline, qualification et plus.",
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Glossaire Setting & Prospection LinkedIn — Setting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glossaire Setting & Prospection LinkedIn | Setting',
    description: 'Définitions des termes clés du setting et de la prospection LinkedIn B2B : setter, signal d\'achat, ICP, pipeline, qualification.',
  },
  alternates: {
    canonical: 'https://www.setting.live/glossaire',
    languages: {
      'fr': 'https://www.setting.live/glossaire',
      'x-default': 'https://www.setting.live/glossaire',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const terms = [
  {
    id: 'setting-commercial',
    term: 'Setting commercial',
    definition:
      "Le setting commercial est la phase de prospection qui précède le closing. Le setter identifie des prospects qualifiés, envoie des messages de prise de contact, gère les échanges jusqu'à la prise de rendez-vous, puis passe le lead au closeur. En B2B, le setting se fait principalement sur LinkedIn.",
    relatedTerms: ['setter', 'closing', 'signal-achat'],
    articleHref: '/ressources/setting-commercial-b2b',
    articleLabel: 'Guide complet du setting commercial B2B',
  },
  {
    id: 'setter',
    term: 'Setter',
    definition:
      "Un setter est un commercial spécialisé dans la prospection et la prise de rendez-vous. Il ne signe pas les contrats — c'est le rôle du closeur. Son travail : identifier les prospects selon des critères précis, envoyer des messages personnalisés, qualifier les réponses et remplir l'agenda du closeur de rendez-vous pertinents.",
    relatedTerms: ['setting-commercial', 'closer', 'qualification'],
    articleHref: '/ressources/setter-b2b-definition',
    articleLabel: "C'est quoi un setter en B2B ?",
  },
  {
    id: 'closer',
    term: 'Closer',
    definition:
      "Un closer B2B est le commercial qui prend en charge les rendez-vous qualifiés par le setter et transforme les prospects en clients. Il conduit la discovery call, identifie les objections, présente l'offre et signe. Le closer travaille sur des leads déjà chauffés, ce qui lui permet d'atteindre des taux de conversion élevés.",
    relatedTerms: ['closing', 'setter', 'discovery'],
    articleHref: '/ressources/closer-b2b',
    articleLabel: 'Closer B2B : définition, compétences et recrutement',
  },
  {
    id: 'closing',
    term: 'Closing',
    definition:
      "Le closing est la phase de vente où un commercial transforme un prospect qualifié en client signé. En B2B, le closing se fait généralement lors d'un appel structuré (discovery call + pitch + gestion des objections + signature). Le taux de closing mesure le ratio prospects contactés / contrats signés.",
    relatedTerms: ['closer', 'setting-commercial', 'discovery'],
    articleHref: '/ressources/difference-setting-closing',
    articleLabel: 'Quelle est la différence entre setting et closing ?',
  },
  {
    id: 'signal-achat',
    term: "Signal d'achat",
    definition:
      "Un signal d'achat est un comportement observable d'un prospect qui indique un intérêt pour votre offre ou pour le problème que vous résolvez. Sur LinkedIn : liker un post sur votre thématique, commenter un contenu concurrent, changer de poste, réagir à une publication sur la transformation digitale. Les signaux d'achat sont la base du setting moderne : on contacte les prospects qui ont levé la main, pas une liste froide.",
    relatedTerms: ['setting-commercial', 'prospection-linkedin', 'icp'],
    articleHref: '/ressources/signal-achat-linkedin',
    articleLabel: "C'est quoi un signal d'achat LinkedIn ?",
  },
  {
    id: 'prospection-linkedin',
    term: 'Prospection LinkedIn',
    definition:
      "La prospection LinkedIn B2B consiste à identifier des prospects pertinents sur LinkedIn, à les contacter par message personnalisé et à qualifier leur intérêt avant de proposer un rendez-vous. La méthode signal-based utilise Sales Navigator et des outils comme Reactin ou Spyer pour détecter les signaux d'achat avant d'envoyer le premier message.",
    relatedTerms: ['signal-achat', 'setting-commercial', 'sales-navigator'],
    articleHref: '/ressources/prospection-linkedin-b2b',
    articleLabel: 'Prospection LinkedIn B2B : méthode complète',
  },
  {
    id: 'icp',
    term: 'ICP — Ideal Customer Profile',
    definition:
      "L'ICP (Ideal Customer Profile) est le profil précis du client idéal pour une offre donnée. En B2B, il inclut le secteur, la taille d'entreprise, le poste du décideur, le problème spécifique rencontré, le budget disponible et le niveau de maturité du prospect. Un setter travaille toujours avec un ICP défini pour ne pas perdre de temps sur des leads non qualifiés.",
    relatedTerms: ['setting-commercial', 'qualification', 'pipeline'],
    articleHref: '/ressources/setting-commercial-b2b',
    articleLabel: 'Setting commercial B2B : méthode complète',
  },
  {
    id: 'qualification',
    term: 'Qualification',
    definition:
      "La qualification est l'évaluation du niveau de maturité et d'adéquation d'un prospect par rapport à une offre. En setting B2B, on qualifie généralement sur 5 niveaux : du lead froid (niveau 1, pas de signal) au lead chaud (niveau 5, a exprimé un besoin explicite). Les niveaux 4 et 5 sont prioritaires pour décrocher un appel.",
    relatedTerms: ['setter', 'icp', 'pipeline'],
    articleHref: '/ressources/setting-commercial-b2b',
    articleLabel: 'Les 5 niveaux de qualification d\'un lead',
  },
  {
    id: 'discovery',
    term: 'Discovery call',
    definition:
      "La discovery call est le premier appel commercial, conduit par le closeur, dont l'objectif est de comprendre le problème, le contexte et le budget du prospect avant de présenter l'offre. Une bonne discovery dure 20 à 40 minutes et permet d'identifier si le prospect peut bénéficier de la solution. Elle précède toujours le pitch.",
    relatedTerms: ['closer', 'closing', 'qualification'],
    articleHref: '/ressources/closer-b2b',
    articleLabel: 'Closer B2B : définition et compétences',
  },
  {
    id: 'pipeline',
    term: 'Pipeline commercial',
    definition:
      "Le pipeline commercial est la représentation visuelle de toutes les opportunités commerciales en cours, classées par étape du cycle de vente. En setting B2B : prospects identifiés → messages envoyés → réponses reçues → leads qualifiés → RDV pris → RDV réalisés → offres envoyées → contrats signés. Le setter alimente l'entrée du pipeline, le closeur travaille la fin.",
    relatedTerms: ['setting-commercial', 'closer', 'qualification'],
    articleHref: '/ressources/difference-setting-closing',
    articleLabel: 'Setting vs closing : rôles dans le pipeline',
  },
  {
    id: 'sales-navigator',
    term: 'Sales Navigator',
    definition:
      "Sales Navigator est l'outil de prospection avancée de LinkedIn, vendu en abonnement (~100 €/mois). Il permet de filtrer les profils LinkedIn selon des dizaines de critères (poste, secteur, taille d'entreprise, ancienneté, signaux récents), de sauvegarder des listes de prospects et de recevoir des alertes sur les changements de poste ou activités récentes. C'est l'outil de base de tout setter professionnel.",
    relatedTerms: ['prospection-linkedin', 'signal-achat', 'setting-commercial'],
    articleHref: '/ressources/prospection-linkedin-b2b',
    articleLabel: 'Prospection LinkedIn B2B : méthode complète',
  },
  {
    id: 'taux-de-reponse',
    term: 'Taux de réponse',
    definition:
      "Le taux de réponse mesure le pourcentage de prospects qui répondent à un message de prospection. En prospection LinkedIn sans méthode, il tourne autour de 2 à 5 %. Avec une approche signal-based (message ancré sur un fait précis tiré du profil), il peut atteindre 20 à 35 % sur les prospects chauds. Le taux de réponse est le premier indicateur de performance d'un setter.",
    relatedTerms: ['setting-commercial', 'signal-achat', 'prospection-linkedin'],
    articleHref: '/ressources/messages-linkedin-sans-reponse',
    articleLabel: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses",
  },
  {
    id: 'challenger-sale',
    term: 'Challenger Sale',
    definition:
      "Le Challenger Sale est une méthode de vente B2B développée par Matthew Dixon et Brent Adamson, basée sur l'étude de 6 000 commerciaux. Elle identifie 5 profils de vendeurs et montre que les plus performants sont les \"Challengers\" — ceux qui éduquent le prospect, adaptent leur discours et prennent le contrôle de la conversation. Ses 3 composantes : Teach (apporter un insight), Tailor (adapter au contexte), Take Control (conduire la décision).",
    relatedTerms: ['closer', 'closing', 'discovery'],
    articleHref: '/ressources/challenger-sale-definition',
    articleLabel: "Qu'est-ce que le Challenger Sale ?",
  },
  {
    id: 'outreach',
    term: 'Outreach',
    definition:
      "L'outreach désigne l'ensemble des actions de prise de contact sortante vers des prospects qui ne vous ont pas sollicité. Par opposition à l'inbound (prospects qui viennent vers vous), l'outreach inclut les messages LinkedIn, les emails de prospection et les appels à froid. En setting B2B, l'outreach signal-based améliore fortement les taux de réponse en ciblant uniquement les prospects ayant récemment montré un signe d'intérêt.",
    relatedTerms: ['prospection-linkedin', 'signal-achat', 'setting-commercial'],
    articleHref: '/ressources/script-setting-linkedin',
    articleLabel: 'Scripts de setting LinkedIn : exemples concrets',
  },
  {
    id: 'inbound',
    term: 'Inbound',
    definition:
      "En vente B2B, l'inbound désigne les prospects qui viennent vers vous — via votre contenu, votre site, votre réputation ou vos recommandations. Un setter inbound traite les personnes qui ont réagi à vos posts, visité votre profil ou téléchargé un lead magnet. Le setting inbound a généralement des taux de réponse plus élevés que l'outreach pur, car le prospect a déjà montré de l'intérêt.",
    relatedTerms: ['signal-achat', 'setting-commercial', 'outreach'],
    articleHref: '/ressources/script-setting-linkedin',
    articleLabel: 'Scripts inbound vs outbound en setting LinkedIn',
  },
  {
    id: 'follow-up',
    term: 'Follow-up (relance)',
    definition:
      "Un follow-up est un message de relance envoyé après un premier message sans réponse, ou après un échange qui n'a pas débouché sur un rendez-vous. En setting B2B, la relance doit être sobre, courte et apporter un élément nouveau (article, question, contexte différent). La règle : maximum 2 relances, séparées de 5 à 7 jours. Plus de relances = risque de spam et dégradation de la réputation LinkedIn.",
    relatedTerms: ['setting-commercial', 'taux-de-reponse', 'outreach'],
    articleHref: '/ressources/relance-linkedin-b2b',
    articleLabel: 'Relance LinkedIn B2B : quand et comment relancer',
  },
  {
    id: 'objection',
    term: 'Objection',
    definition:
      "Une objection est une résistance du prospect pendant le processus de vente. Les objections courantes en closing B2B : \"C'est trop cher\", \"Je dois en parler à mon associé\", \"Je n'ai pas le temps maintenant\". La gestion des objections est une compétence centrale du closeur — il distingue les objections réelles (doutes légitimes) des objections-prétextes (volonté de mettre fin à la conversation sans conflit).",
    relatedTerms: ['closing', 'closer', 'discovery'],
    articleHref: '/ressources/closer-b2b',
    articleLabel: 'Closer B2B : gérer les objections',
  },
  {
    id: 'solopreneur',
    term: 'Solopreneur',
    definition:
      "Un solopreneur est un entrepreneur qui travaille seul, sans salariés, et génère son revenu via une ou plusieurs offres (consulting, formation, coaching, service). Contrairement au freelance, le solopreneur construit généralement une marque personnelle et des offres packagées. Le principal défi du solopreneur est la gestion simultanée de la prospection, de la livraison et du développement — c'est pourquoi l'externalisation du setting est souvent son premier levier de croissance.",
    relatedTerms: ['setting-commercial', 'icp', 'pipeline'],
    articleHref: '/ressources/setting-commercial-b2b',
    articleLabel: 'Setting commercial B2B pour solopreneurs',
  },
  {
    id: 'social-selling',
    term: 'Social selling',
    definition:
      "Le social selling est une approche de prospection qui utilise les réseaux sociaux — principalement LinkedIn en B2B — pour identifier, se connecter et interagir avec des prospects potentiels. Contrairement au cold calling ou au cold emailing, le social selling repose sur la construction d'une relation avant la prise de contact commerciale : publier du contenu pertinent, commenter les publications de ses prospects, et être visible dans leur fil d'actualité. Le setting LinkedIn est une forme avancée de social selling qui combine cette présence organique avec une détection active des signaux d'achat pour déclencher des conversations qualifiées.",
    relatedTerms: ['prospection-linkedin', 'signal-achat', 'outreach'],
    articleHref: '/ressources/prospection-linkedin-b2b',
    articleLabel: 'Prospection LinkedIn B2B : méthode complète',
  },
  {
    id: 'taux-de-conversion',
    term: 'Taux de conversion',
    definition:
      "Le taux de conversion mesure le pourcentage de prospects qui passent d'une étape du pipeline à la suivante. En setting B2B, on distingue plusieurs taux de conversion : le taux de réponse (messages envoyés → réponses, typiquement 20-35 % en signal-based), le taux de qualification (réponses → RDV pris, autour de 30-50 %), et le taux de closing (RDV → contrats signés, généralement 15-30 % en B2B). Le taux de conversion global du pipeline (premier message → contrat signé) est le produit de tous ces taux intermédiaires.",
    relatedTerms: ['taux-de-reponse', 'pipeline', 'closing'],
    articleHref: '/ressources/closing-b2b',
    articleLabel: 'Guide complet du closing B2B',
  },
  {
    id: 'cout-par-lead',
    term: 'Coût par lead (CPL)',
    definition:
      "Le coût par lead (CPL) est le montant total dépensé pour générer un lead qualifié. En prospection LinkedIn B2B, le CPL se calcule en divisant le coût mensuel total (abonnement + outils + temps passé) par le nombre de leads qualifiés générés. Avec un SDR interne (coût réel de 43 500 à 55 000 €/an), le CPL varie de 200 à 800 € selon le volume et la qualification. Avec un service de setting externalisé à 790 €/mois générant 8 à 15 RDV qualifiés, le CPL descend à 50-100 € par lead qualifié — un ratio 4 à 8 fois plus favorable qu'un recrutement interne.",
    relatedTerms: ['pipeline', 'qualification', 'taux-de-conversion'],
    articleHref: '/externaliser-prospection-linkedin',
    articleLabel: 'Externaliser sa prospection LinkedIn',
  },
  {
    id: 'pipeline-velocity',
    term: 'Pipeline velocity',
    definition:
      "La pipeline velocity (vélocité du pipeline) mesure la vitesse à laquelle les opportunités commerciales se transforment en revenus. La formule : (nombre d'opportunités × ticket moyen × taux de conversion) ÷ durée du cycle de vente. En setting B2B, on agit sur les deux premiers leviers : augmenter le nombre de RDV qualifiés qui entrent dans le pipeline, et raccourcir le cycle en pré-qualifiant les prospects (via la qualification téléphonique BANT). Un pipeline velocity élevé signifie que chaque euro investi en prospection génère du revenu plus rapidement.",
    relatedTerms: ['pipeline', 'taux-de-conversion', 'qualification'],
    articleHref: '/ressources/setting-commercial-b2b',
    articleLabel: 'Setting commercial B2B : méthode complète',
  },
  {
    id: 'lead-scoring',
    term: 'Lead scoring',
    definition:
      "Le lead scoring est un système de notation des prospects selon leur probabilité de conversion. En setting LinkedIn B2B, on score les leads sur 5 niveaux de maturité : niveau 1 (aucun signal, lead froid), niveau 2 (a vu un contenu), niveau 3 (a interagi — like, commentaire), niveau 4 (a répondu à un message ou visité le profil), niveau 5 (a exprimé un besoin explicite). Les niveaux 4 et 5 sont prioritaires pour la prise de RDV. Le scoring est recalibré chaque semaine en fonction des taux de conversion observés, ce qui permet d'affiner le ciblage en continu.",
    relatedTerms: ['qualification', 'signal-achat', 'icp'],
    articleHref: '/ressources/setting-commercial-b2b',
    articleLabel: 'Les 5 niveaux de qualification d\'un lead',
  },
]

const definedTermSchemas = terms.map((t) => ({
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  '@id': `https://www.setting.live/glossaire#${t.id}`,
  name: t.term,
  description: t.definition,
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    '@id': 'https://www.setting.live/glossaire',
    name: 'Glossaire Setting & Prospection B2B — Setting',
  },
}))

const glossairePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Glossaire Setting & Prospection B2B',
  url: 'https://www.setting.live/glossaire',
  inLanguage: 'fr-FR',
  isPartOf: { '@type': 'WebSite', name: 'Setting', url: 'https://www.setting.live' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.term-name', '.term-definition'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Glossaire', item: 'https://www.setting.live/glossaire' },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GlossairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([glossairePageSchema, ...definedTermSchemas, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Glossaire</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Référence
            </p>
            <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
              Glossaire Setting &amp; Prospection B2B
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              Les définitions exactes des termes qu&apos;on utilise dans le setting et la prospection B2B.
              Pas de jargon pour le jargon — chaque entrée explique ce que le mot veut dire en pratique,
              dans un contexte de vente B2B pour fondateurs, freelances et solopreneurs B2B.
            </p>
          </header>

          {/* Index rapide */}
          <nav aria-label="Index du glossaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Termes définis
            </p>
            <div className="flex flex-wrap gap-2">
              {terms.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="font-sans text-xs text-text-muted hover:text-text-primary bg-bg-primary border border-white/[0.06] rounded-lg px-3 py-1.5 transition-colors"
                >
                  {t.term}
                </a>
              ))}
            </div>
          </nav>

          {/* Définitions */}
          <div className="space-y-14">
            {terms.map((t) => (
              <article key={t.id} id={t.id} className="scroll-mt-24">
                <div className="mb-3">
                  <h2 className="font-sans font-extrabold text-h3 text-text-primary">{t.term}</h2>
                </div>
                <p className="font-sans text-text-muted leading-relaxed mb-5">
                  {t.definition}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {t.relatedTerms.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {t.relatedTerms.map((rel) => {
                        const related = terms.find((x) => x.id === rel)
                        if (!related) return null
                        return (
                          <a
                            key={rel}
                            href={`#${rel}`}
                            className="font-sans text-xs text-text-muted hover:text-text-primary bg-bg-secondary border border-white/[0.06] rounded-lg px-2.5 py-1 transition-colors"
                          >
                            → {related.term}
                          </a>
                        )
                      })}
                    </div>
                  )}
                  <a
                    href={t.articleHref}
                    className="font-sans text-xs text-accent hover:text-text-primary transition-colors ml-auto"
                  >
                    {t.articleLabel} →
                  </a>
                </div>
                <div className="mt-5 border-b border-white/[0.06]" />
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
              Vous voulez mettre tout ça en pratique ?
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Setting prend en charge le setting commercial pour les fondateurs, freelances et solopreneurs B2B
              en B2B. Setter dédié, méthode signal-based, RDV qualifiés dès la première semaine.
            </p>
            <a
              href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer"
              className="inline-block font-sans text-sm font-medium text-bg-primary bg-accent hover:bg-accent/90 transition-colors px-6 py-3 rounded-xl"
            >
              Voir comment ça marche →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
