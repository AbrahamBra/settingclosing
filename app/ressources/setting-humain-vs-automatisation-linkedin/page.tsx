import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Humain vs automatisation LinkedIn | Setting',
  description:
    'Waalaxy, PhantomBuster ou setter humain ? Comparatif honnête : taux de réponse, risque ban, coût réel et scalabilité.',
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
      'x-default': 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
    },
  },
  openGraph: {
    title: 'Setting humain vs automatisation LinkedIn | Setting',
    description: 'Automatisation vs setting humain sur LinkedIn. Comparatif des résultats réels.',
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting humain vs automatisation LinkedIn | Setting',
    description: 'Automatisation vs setting humain sur LinkedIn. Comparatif des résultats réels.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
  headline: 'Setting humain vs automatisation LinkedIn : le vrai comparatif',
  description:
    'Waalaxy, PhantomBuster ou setter humain ? Comparatif point par point : taux de réponse réels, risque de ban LinkedIn, coût mensuel vrai et scalabilité. Pour choisir en connaissance de cause.',
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
  },
  image: 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Stratégie commerciale',
  wordCount: 2800,
  about: [
    { '@type': 'Thing', name: 'Setting humain vs automatisation' },
    { '@type': 'Thing', name: 'Prospection LinkedIn' },
  ],
}

const faqItems = [
  {
    question: 'Peut-on combiner automatisation et setting humain ?',
    answer:
      "Oui, et c'est souvent ce que font les équipes les plus efficaces. L'automatisation gère le volume bas de gamme : des campagnes de notoriété, des connexions froides sur des segments peu prioritaires. Le setter humain prend en charge les profils à fort potentiel, les signaux d'achat détectés et les leads entrants. Les deux approches ne s'annulent pas — elles ciblent des profils différents à des stades différents.",
  },
  {
    question: "Est-ce que l'automatisation LinkedIn est légale ?",
    answer:
      "LinkedIn interdit explicitement l'utilisation d'outils tiers automatisés dans ses conditions d'utilisation. Ce n'est pas illégal au sens pénal, mais c'est une violation des CGU. En pratique, LinkedIn détecte les patterns anormaux et peut restreindre ou fermer le compte. Certains outils comme Waalaxy opèrent dans des zones grises en simulant un comportement humain, mais le risque reste réel, surtout sur des comptes à fort volume.",
  },
  {
    question: 'Combien coûte un setter LinkedIn par mois ?',
    answer:
      "Un setter LinkedIn humain coûte entre 500 et 1 500 €/mois selon le modèle de rémunération (fixe seul, prime par RDV ou hybride). Chez Setting, le modèle est hybride : 790 €/mois de fixe + prime par RDV qualifié livré. Ce modèle aligne les intérêts : le setter n'est pas payé pour le volume mais pour la qualité des rendez-vous. Les tarifs détaillés sont disponibles sur la page /tarifs.",
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
      name: 'Setting humain vs automatisation LinkedIn',
      item: 'https://www.setting.live/ressources/setting-humain-vs-automatisation-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingHumainVsAutomatisationPage() {
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
          <nav aria-label="Fil d&apos;Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Setting humain vs automatisation</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Comparatif · Prospection LinkedIn
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting humain vs automatisation LinkedIn : le vrai comparatif
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Waalaxy, PhantomBuster ou un setter humain. Les deux approches fonctionnent — dans des contextes différents.
              Avant de choisir, regardons les chiffres réels : taux de réponse, risque de ban, coût mensuel et temps investi.
            </p>
            <AuthorBlock date="2026-03-19" readTime="10 min de lecture" dateLabel="19 mars 2026" />
          </header>

          <TldrBox>
            <p>Les outils d&apos;automatisation LinkedIn envoient des messages. Le setting humain d&eacute;tecte les bons moments pour &eacute;crire. Cet article compare les deux approches sur 6 crit&egrave;res : taux de r&eacute;ponse, co&ucirc;t, scalabilit&eacute;, personnalisation, risque LinkedIn et qualit&eacute; des RDV.</p>
          </TldrBox>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Ce qu&apos;on compare
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Automatisation LinkedIn vs <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> humain
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              L&apos;automatisation utilise des outils (Waalaxy, PhantomBuster, Lemlist) pour envoyer des séquences de messages à grande échelle.
              Le <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting humain</a> confie la prospection à un setter qui lit les profils, détecte les signaux et rédige chaque message en contexte.
              Ce comparatif mesure ce qui compte vraiment : résultats, risques et coût de revient.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '2–5 %', label: 'taux de réponse moyen en automatisation' },
              { stat: '20–35 %', label: 'taux de réponse avec setting humain' },
              { stat: '0 h', label: 'temps investi par vous avec un setter dédié' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le problème de la prospection LinkedIn
              </h2>
              <p className="mb-4">
                Tout le monde a besoin de leads. La question n&apos;est pas de savoir si LinkedIn fonctionne
                — c&apos;est de savoir comment l&apos;utiliser sans y passer sa journée ni brûler son réseau.
              </p>
              <p className="mb-4">
                Deux réponses à cette question : automatiser les envois pour couvrir un maximum de profils,
                ou déléguer à un setter qui traite moins de profils mais mieux.
                Les deux ont des mérites réels. Ils répondent à des problèmes différents.
              </p>
              <p>
                Ce qui suit est un comparatif honnête. Pas un argument de vente.
                Si l&apos;automatisation est la bonne réponse pour votre situation, vous le verrez.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment fonctionne l&apos;automatisation LinkedIn
              </h2>
              <p className="mb-4">
                Des outils comme Waalaxy, PhantomBuster ou Lemlist automatisent une séquence d&apos;actions sur votre compte :
                visites de profils, demandes de connexion, messages de premier contact, relances programmées.
                Certains fonctionnent via extension Chrome, d&apos;autres via cloud.
              </p>
              <p className="mb-4">
                Le volume traité est leur principal avantage : 200 à 500 actions par jour selon l&apos;outil et les limites fixées.
                Le message est le même pour tous les profils, avec des variables automatiques — <code className="text-accent text-sm">{'{prénom}'}</code>,
                <code className="text-accent text-sm"> {'{entreprise}'}</code>, <code className="text-accent text-sm">{'{poste}'}</code> —
                injectées depuis la liste de prospection.
              </p>
              <p>
                Le setup prend quelques heures. Une fois la séquence lancée, elle tourne seule.
                C&apos;est le modèle.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment fonctionne le setting humain
              </h2>
              <p className="mb-4">
                Un setter lit chaque profil avant d&apos;écrire. Il regarde les posts récents, les connexions communes,
                les signaux d&apos;achat — une question posée publiquement, un post sur un problème que vous résolvez,
                une évolution de poste récente. Il écrit un message qui part de ce qu&apos;il a vu.
              </p>
              <p className="mb-4">
                L&apos;IA intervient en assistance : détection de signaux via des outils comme Reactin,
                co-rédaction avec Claude pour proposer un premier draft. Mais un humain valide chaque envoi.
                Aucun message ne part sans avoir passé l&apos;œil du setter.
              </p>
              <p>
                Le volume est plus faible — 20 à 50 profils ciblés par semaine plutôt que 500 contacts en masse.
                Le taux de réponse compense largement.
                Vous pouvez lire comment ce système fonctionne en détail dans l&apos;article{' '}
                <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline transition-colors">
                  IA, méthode et humain
                </a>.
              </p>
            </section>

            <CtaArticle />

            {/* Section 4 — Comparison table */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comparatif point par point
              </h2>
              <p className="mb-6">
                Six critères. Les chiffres viennent du terrain — pas de benchmarks marketing.
              </p>

              <div className="space-y-4">

                {/* Row 1 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Taux de réponse
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Automatisation</p>
                      <p className="font-serif text-xl text-text-secondary mb-2">2–5 %</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Un template avec {'{prénom}'} ne trompe plus personne. Les prospects ont appris à reconnaître
                        le style automatique à la deuxième phrase. La plupart archivent sans lire.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting humain</p>
                      <p className="font-serif text-xl text-accent mb-2">20–35 %</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Un message qui mentionne le post exact qu&apos;il vient de publier ou la question
                        qu&apos;il a posée la semaine dernière génère une réponse parce qu&apos;il est clair
                        que quelqu&apos;un a regardé son profil.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Risque ban LinkedIn
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Automatisation</p>
                      <p className="font-sans font-semibold text-red-400 text-sm mb-2">Élevé</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        LinkedIn détecte les patterns anormaux : volumes trop réguliers,
                        actions à des heures inhabituelles, taux de réponse effondré signalant du spam.
                        Les restrictions et fermetures de compte sont fréquentes au-delà de 300 actions par jour.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting humain</p>
                      <p className="font-sans font-semibold text-emerald-400 text-sm mb-2">Quasi nul</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Les actions se font manuellement depuis le compte, aux heures normales,
                        avec des volumes qui ne dépassent pas ce qu&apos;un utilisateur actif ferait.
                        LinkedIn ne voit pas de pattern anormal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Personnalisation
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Automatisation</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Insertion de variables. Le message reste identique pour tous les profils —
                        seuls le prénom, l&apos;entreprise et le poste changent. Aucun contexte sur
                        ce que le prospect a dit ou fait récemment.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting humain</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Personnalisation contextuelle réelle : le message part d&apos;un signal spécifique,
                        d&apos;un post, d&apos;une interaction ou d&apos;un fait tiré de l&apos;analyse du profil.
                        Chaque envoi est unique.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Coût mensuel réel
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Automatisation</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        50 à 200 €/mois pour l&apos;outil. Auquel s&apos;ajoute votre temps : gestion des séquences,
                        traitement des réponses, nettoyage des listes, ajustements des campagnes.
                        En pratique, 1 à 2 heures par jour minimum pour un programme qui tourne correctement.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting humain</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        500 à 1 500 €/mois selon le modèle. Votre temps : zéro. Tout est géré par le setter.
                        Vous recevez les RDV qualifiés dans votre agenda. Le coût est transparent et prévisible.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Scalabilité
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Automatisation</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Scale en volume facilement. Doublez la liste, doublez les envois.
                        La qualité ne s&apos;améliore pas, mais le volume de réponses brutes augmente.
                        Adapté si vous avez une équipe pour trier et traiter les retours.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting humain</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        Scale en qualité, pas en volume. La question est : avez-vous besoin de 500 messages
                        envoyés ou de 15 bonnes conversations ? Pour la plupart des offres B2B à 2-3k€ et plus,
                        la réponse est claire.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 6 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    Temps investi par vous
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans font-semibold text-text-secondary text-sm mb-1">Automatisation</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        1 à 2 heures par jour minimum. Surveillance des séquences, gestion des réponses entrant
                        en désordre, correction des campagnes qui ne performent pas. Ce temps n&apos;est pas négligeable
                        si vous êtes seul ou en petite équipe.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">Setting humain</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        0 heure. La prospection est entièrement déléguée. Vous recevez les RDV et prenez les appels.
                        C&apos;est la différence principale pour les fondateurs dont le temps est contrainte numéro un.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand l&apos;automatisation a du sens
              </h2>
              <p className="mb-4">
                Soyons directs : l&apos;automatisation n&apos;est pas toujours la mauvaise réponse.
                Elle fonctionne dans certains contextes bien précis.
              </p>
              <div className="space-y-3 my-6">
                {[
                  {
                    label: "Volume B2C-like",
                    desc: "Vous ciblez des milliers de profils homogènes avec une offre à faible ticket. La qualité du message compte moins que la couverture.",
                  },
                  {
                    label: "Test d'angles de message",
                    desc: "Avant d'investir dans un setter, vous voulez tester cinq angles différents sur un marché que vous ne connaissez pas. L'automatisation vous donne des données rapidement.",
                  },
                  {
                    label: "Équipe pour traiter les retours",
                    desc: "Vous avez des SDR ou une équipe commerciale qui peut absorber un volume de réponses inégales et qualifier en aval. Le setter humain devient alors une couche supplémentaire.",
                  },
                  {
                    label: "Notoriété sur un segment",
                    desc: "Vous voulez être présent dans le radar d'un segment, pas forcément déclencher une conversation immédiate. Les visites de profil automatisées ont un effet de visibilité passif.",
                  },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{label}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Si vous cochez deux de ces cases, l&apos;automatisation mérite d&apos;être testée sérieusement.
              </p>
              <p className="text-sm text-text-muted italic mt-2">
                Pour aller plus loin : <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline">Automatisation prospection LinkedIn : limites et alternatives</a>
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand le setting humain a du sens
              </h2>
              <p className="mb-4">
                Le setting humain est la bonne réponse dans des situations précises —
                et c&apos;est là qu&apos;il produit les résultats qu&apos;on lui attribue.
              </p>
              <div className="space-y-3 my-6">
                {[
                  {
                    label: "Offre B2B au-dessus de 2 000–3 000 €",
                    desc: "À ce ticket, la confiance compte avant tout. Un message automatique ne crée pas de confiance. Un setter qui a lu votre profil et sait pourquoi vous êtes pertinent pour lui, oui.",
                  },
                  {
                    label: "Vous vendez de l'expertise",
                    desc: "Un cabinet de conseil, une agence spécialisée, un prestataire technique. Votre différenciation est dans la nuance. Un template générique n'articule pas cette nuance.",
                  },
                  {
                    label: "Votre agenda a besoin de 3 à 5 RDV qualifiés par semaine",
                    desc: "Pas 100 réponses non qualifiées. Trois décideurs avec le bon contexte et le bon timing. Le setting humain vise exactement cela.",
                  },
                  {
                    label: "Vous n'avez pas de temps pour gérer la prospection",
                    desc: "Si chaque heure passée à gérer des séquences Waalaxy est une heure que vous n'utilisez pas pour livrer ou vendre, la délégation totale est la seule option rationnelle.",
                  },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{label}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Si vous reconnaissez votre situation dans ces points, la question n&apos;est pas "automatisation ou humain".
                La question est quand vous démarrez. Vous pouvez voir les détails sur les{' '}
                <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs et la garantie résultats</a>.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le vrai calcul
              </h2>
              <p className="mb-4">
                Le coût d&apos;un outil d&apos;automatisation ne se limite pas au prix affiché sur la page tarifaire.
                Calculez ce que vous payez réellement.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Coût réel de l&apos;automatisation
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Outil (Waalaxy, PhantomBuster...)", value: "50–200 €/mois" },
                    { label: "Sales Navigator pour cibler", value: "~100 €/mois" },
                    { label: "Votre temps (1–2h/jour × tarif horaire moyen)", value: "500–2 000 €/mois" },
                    { label: "Coût d'opportunité (taux de réponse à 3%)", value: "leads manqués" },
                    { label: "Risque ban et restauration du compte", value: "imprévisible" },
                    { label: "Total réel", value: "700–2 300 €/mois", highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <p className="font-sans text-sm text-text-secondary leading-snug">{label}</p>
                      <p className={`font-sans text-sm font-semibold shrink-0 ${highlight ? 'text-accent' : 'text-text-primary'}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-4">
                Le setting humain a un coût mensuel transparent : un forfait fixe + prime par RDV livré.
                Pas de surprise. Pas de temps caché. Pas de risque de perdre votre compte LinkedIn.
              </p>
              <p>
                La comparaison honnête n&apos;est pas "100 €/mois d&apos;outil vs 800 €/mois de setter".
                C&apos;est "800 à 2 300 €/mois tout compris avec 3% de taux de réponse vs 800 €/mois tout compris avec 20 à 35%".
                Pour en savoir plus sur comment évaluer les offres de setting,{' '}
                <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline transition-colors">
                  consultez le guide complet du setter B2B pour les modèles de rémunération
                </a>.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq">
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

          </article>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/signal-achat-linkedin', label: 'Détecter les signaux d\u2019achat LinkedIn pour prospecter au bon moment' },
                { href: '/ressources/comment-devenir-setter-b2b', label: "Devenir setter ou closer B2B : le guide complet" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
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
              Vous préférez déléguer entièrement ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un setter dédié, une méthode signal-based, et des RDV qualifiés dans votre agenda.
              Premiers résultats dès la première semaine. Garantie sur les résultats.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Voir le programme →
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              ← Retour au blog
            </a>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/comment-prospecter-sur-linkedin', title: "IA, m\u00e9thode et humain : les 3 couches d\u2019un syst\u00e8me de setting LinkedIn qui tient sur la dur\u00e9e", readTime: '12 min' },
            { href: '/externaliser-prospection-linkedin#sdr-commercial', title: 'SDR interne vs SDR externalis\u00e9 : le comparatif co\u00fbt r\u00e9el', readTime: '8 min' },
            { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te en 2026', readTime: '13 min' },
          ]} />

        </div>
      </main>

      <Footer />
    </>
  )
}
