import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Setter B2B : définition, rôle et comment en trouver un | ChallengersLab',
  description:
    'Un setter B2B est le commercial qui prospecte pour vous. Définition exacte, rôle au quotidien, coût réel et les 3 phases du setting — tout ce qu\'il faut savoir avant d\'externaliser.',
  openGraph: {
    title: 'Setter B2B : définition, rôle et comment en trouver un',
    description:
      'Un setter B2B est le commercial qui prospecte pour vous. Définition, rôle, coût et les 3 phases du setting expliqués pour les solopreneurs.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/ressources/setter-b2b-definition',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://challengerslab.fr/ressources/setter-b2b-definition',
  headline: "C'est quoi un setter en B2B ?",
  description:
    'Un setter B2B est un commercial spécialisé dans la prospection sortante. Il identifie des prospects pertinents, les contacte, qualifie leur intérêt et décroche des rendez-vous commerciaux qualifiés.',
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://challengerslab.fr/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  datePublished: '2026-03-16',
  dateModified: '2026-03-16',
  inLanguage: 'fr-FR',
  url: 'https://challengerslab.fr/ressources/setter-b2b-definition',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://challengerslab.fr/ressources/setter-b2b-definition',
  },
}

const faqItems = [
  {
    question: 'Quelle est la différence entre un setter et un SDR ?',
    answer:
      "SDR (Sales Development Representative) est le terme anglais pour setter. Les deux désignent un commercial chargé de la prospection sortante et de la prise de rendez-vous. En France, le terme 'setter' est plus courant chez les fondateurs, freelances et solopreneurs B2B, tandis que SDR est davantage utilisé dans les startups et grands groupes.",
  },
  {
    question: 'En combien de temps voit-on les premiers RDV avec un setter ?',
    answer:
      "Avec un setter expérimenté et une offre positionnée, les premiers rendez-vous qualifiés arrivent généralement en 2 à 4 semaines. Le premier mois sert souvent à affiner le ciblage et les messages. À partir du deuxième mois, le volume se stabilise et devient prédictible.",
  },
  {
    question: 'Est-ce que le setting fonctionne pour tous les secteurs ?',
    answer:
      "Le setting fonctionne bien dès que la cible est identifiable sur LinkedIn et que le ticket moyen justifie un rendez-vous commercial (généralement à partir de 500 €/mois ou 1 500 €/achat unique). Il est moins adapté aux offres très grand public ou aux ventes entièrement automatisées.",
  },
  {
    question: 'Faut-il un CRM pour travailler avec un setter ?',
    answer:
      "Un CRM aide à tracker les leads et à éviter les doublons, mais un simple Google Sheets suffit pour commencer. Ce qui est indispensable : un processus clair de handover entre le setter et vous — avec les informations clés sur chaque prospect avant votre appel de vente.",
  },
  {
    question: "Comment définit-on un RDV 'qualifié' ?",
    answer:
      "Un RDV qualifié, c'est un prospect qui correspond à votre ICP (Ideal Customer Profile), qui a exprimé un problème ou un intérêt en lien avec votre offre, et qui est disponible pour un échange structuré. Ce n'est pas un prospect qui a juste répondu 'OK' à un message générique.",
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
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://challengerslab.fr/ressources' },
    {
      '@type': 'ListItem',
      position: 3,
      name: "C'est quoi un setter en B2B ?",
      item: 'https://challengerslab.fr/ressources/setter-b2b-definition',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const phases = [
  {
    month: 'Mois 1',
    title: 'Prospection assistée par IA',
    body: "Avant d'envoyer le premier message, on définit le ciblage avec précision : ICP, Sales Navigator, signaux de déclenchement. L'IA génère et affine les variantes de messages jusqu'à trouver ceux qui créent de l'engagement. Pas de volume pour le volume — chaque contact doit avoir une raison d'être.",
  },
  {
    month: 'Mois 2',
    title: 'Base de connaissance',
    body: "La prospection générique ne convertit pas. Cette phase consiste à construire la connaissance métier : les vrais problèmes de vos prospects, leur vocabulaire, leurs objections récurrentes, ce qui les fait répondre. Les messages deviennent plus pertinents. Les taux de réponse augmentent.",
  },
  {
    month: 'Mois 3',
    title: 'Scoring + Nurturing',
    body: "Tous les prospects n'ont pas la même maturité. Certains sont prêts maintenant. D'autres dans 3 mois. D'autres jamais. Le scoring permet de trier et de concentrer l'énergie là où elle produit le plus de résultats — sans brûler les leads froids.",
  },
]

const comparisonRows = [
  ['Temps de démarrage', '2–4 mois (recrutement + formation)', '2–3 semaines'],
  ['Coût mensuel', '2 500–4 000 € (CDI junior chargé)', '500–1 500 €'],
  ['Flexibilité', 'Faible', 'Forte'],
  ['Dépendance humaine', 'Élevée', 'Faible'],
  ['Connaissance du marché', 'À construire', 'Souvent déjà là'],
]

const pricingModels = [
  {
    label: 'Fixe mensuel uniquement',
    desc: "Entre 800 et 1 500 €/mois selon l'expérience. Vous payez quoi qu'il arrive — même si les RDV ne viennent pas.",
  },
  {
    label: 'Prime à la performance uniquement',
    desc: "Entre 50 et 200 €/RDV livré. L'incentive est bien aligné, mais sans fixe, le setter priorise souvent la quantité sur la qualité.",
  },
  {
    label: 'Hybride : fixe bas + prime par RDV (recommandé)',
    desc: "Un fixe couvre l'infrastructure et le travail de fond. La prime aligne les intérêts sur les résultats réels. C'est le modèle ChallengersLab : 500 €/mois + 25 à 150 €/RDV livré selon la qualification.",
  },
]

export default function SetterDefinitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="bg-bg-primary pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Setter B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              C&apos;est quoi un setter en B2B ?
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              Définition complète, rôle au quotidien, coût réel et les 3 phases du setting expliquées simplement.
            </p>
            <AuthorBlock date="2026-03-16" readTime="8 min de lecture" dateLabel="16 mars 2026" />
          </header>

          {/* Definition Block — auto-extractable par les IA */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Un <strong>setter B2B</strong> est un commercial spécialisé dans la prospection sortante.
              Son rôle : identifier des prospects pertinents, les contacter via LinkedIn ou email,
              qualifier leur intérêt pour votre offre, et décrocher un rendez-vous avec votre closer
              ou vous-même. Le setter ne vend pas — il ouvre la porte.
            </p>
          </div>

          {/* Section 1 — Rôle au quotidien */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le rôle du setter au quotidien
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Le setter prend en charge tout ce qui précède un appel de vente.
              Concrètement, voilà ce qu&apos;il fait chaque semaine :
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Définir les critères du prospect idéal (secteur, taille, poste, déclencheurs d'achat)",
                "Utiliser LinkedIn Sales Navigator pour constituer des listes qualifiées",
                "Rédiger et envoyer les messages de prospection, tester les variantes",
                "Gérer les relances sur plusieurs semaines sans jamais paraître insistant",
                "Qualifier les réponses entrantes avec 2 à 3 questions de pré-qualification",
                "Fixer le rendez-vous dans votre agenda avec le contexte complet sur le prospect",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-text-muted">
                  <span className="text-accent shrink-0 mt-0.5">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-text-muted leading-relaxed">
              Ce que le setter ne fait <strong className="text-text-primary font-semibold">pas</strong> :
              il ne conduit pas l&apos;appel de vente, ne négocie pas le prix, ne présente pas l&apos;offre en détail.
              Cette partie appartient au closer.
            </p>

            {/* Stat block */}
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Il faut en moyenne 8 points de contact avant qu&apos;un prospect accepte un rendez-vous commercial.
              </p>
              <p className="font-sans text-text-muted text-sm">
                80 % des solopreneurs abandonnent après 2 ou 3 tentatives. C&apos;est pour ça que
                la majorité des opportunités ne sont jamais exploitées. (Source : Marketing Donut)
              </p>
            </div>
          </section>

          {/* Section 2 — Setter ≠ Closer */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setter ≠ Closer : pourquoi la distinction est importante
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Mélanger les deux rôles est l&apos;une des erreurs les plus courantes en B2B.
              Un solopreneur qui prospecte ET close dans la même journée fait deux choses mal
              plutôt qu&apos;une seule bien.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              L&apos;état d&apos;esprit n&apos;est pas le même. Le setter optimise le volume et la qualité
              des entrées dans le pipeline. Le closer optimise la conversion une fois face à un
              prospect qualifié. Passer de l&apos;un à l&apos;autre en continu crée de la friction mentale
              et réduit les performances des deux.
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              La séparation des rôles permet aussi d&apos;ajuster chaque partie sans tout casser : vous pouvez
              améliorer les messages de prospection sans toucher à l&apos;appel de vente, et vice versa.
            </p>
          </section>

          {/* Section 3 — Les 3 phases */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 phases d&apos;un programme de setting
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-8">
              Le <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial B2B</a> ne se résume pas à envoyer des messages LinkedIn en masse. Une vraie
              infrastructure se construit en 3 phases — chacune conditionne l&apos;efficacité de la suivante.
            </p>

            <div>
              {phases.map((phase, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                      {i + 1}
                    </div>
                    {i < phases.length - 1 && (
                      <div
                        className="w-px flex-1 my-1.5 bg-white/[0.06]"
                        style={{ minHeight: '24px' }}
                      />
                    )}
                  </div>
                  <div className="pb-7">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">
                      {phase.month}
                    </p>
                    <p className="font-sans font-semibold text-text-primary mb-1.5">
                      {phase.title}
                    </p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">
                      {phase.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-2 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Les équipes qui utilisent le scoring de leads convertissent 77 % plus que celles qui ne le font pas.
              </p>
              <p className="font-sans text-text-muted text-sm">
                Source : HubSpot State of Marketing Report
              </p>
            </div>
          </section>

          {/* Section 4 — Interne vs Externalisé */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setter interne ou setter externalisé ?
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Deux options s&apos;offrent à vous. Voici une comparaison honnête :
            </p>
            <div className="overflow-x-auto">
              <table className="w-full font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary w-1/3" />
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary">Setter interne</th>
                    <th className="text-left py-3 font-semibold text-text-primary">Setter externalisé</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, intern, extern], i) => (
                    <tr key={i} className="border-b border-white/[0.06]">
                      <td className="py-3 pr-6 font-medium text-text-primary">{label}</td>
                      <td className="py-3 pr-6 text-text-muted">{intern}</td>
                      <td className="py-3 text-text-muted">{extern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-text-muted text-sm mt-4 leading-relaxed">
              Pour un fondateur ou un freelance B2B qui structure son pipeline, l&apos;externalisation
              est l&apos;option la plus réaliste. Un recrutement en CDI à ce stade représente un risque
              opérationnel et financier difficile à absorber avant d&apos;avoir validé le volume.
            </p>
          </section>

          {/* Section 5 — Coût */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Combien coûte un setter B2B ?
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Il existe 3 modèles de tarification sur le marché. Le modèle choisi détermine
              l&apos;alignement des intérêts entre vous et votre setter.
            </p>
            <div className="space-y-5">
              {pricingModels.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0 font-sans mt-0.5">{i + 1}.</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{item.label}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  <p className="font-sans text-text-muted leading-relaxed text-sm">
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
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Prêt à déléguer votre setting ?
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Garantie 5 RDV qualifiés minimum par mois. Fixe mensuel + prime à la performance.
              On démarre en 2 semaines.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Déléguer mon setting →
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
