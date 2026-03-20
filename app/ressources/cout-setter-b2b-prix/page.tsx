import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: "Prix d'un setter B2B en 2026 | Setting",
  description:
    "Combien coûte un setter B2B ? Fixe, prime par RDV, hybride : vrais chiffres du marché, pièges à éviter et calcul du ROI réel.",
  openGraph: {
    title: "Prix d'un setter B2B en 2026 | Setting",
    description:
      "Fixe seul vs prime seule vs modèle hybride : les chiffres du marché, comment comparer les offres, et ce que ça coûte vraiment d'après les données terrain.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/cout-setter-b2b-prix',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/cout-setter-b2b-prix',
  headline: "Coût d'un setter B2B en 2026 : prix, modèles et comparatif",
  description:
    "Combien coûte un setter B2B ? Fixe mensuel, prime par RDV, modèle hybride : les vrais chiffres, les pièges à éviter et comment calculer le ROI réel d'un programme de setting.",
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/cout-setter-b2b-prix',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/cout-setter-b2b-prix',
  },
}

const faqItems = [
  {
    question: "Y a-t-il des frais supplémentaires en dehors de la rémunération du setter ?",
    answer:
      "Oui. Les outils ont un coût propre : Sales Navigator (~100 €/mois), Reactin pour les signaux inbound (~50 €/mois), Spyer pour les signaux tiers (~30–80 €/mois). Ces coûts sont soit inclus dans le forfait de l'agence, soit facturés en sus — vérifiez avant de signer.",
  },
  {
    question: "Un setter junior coûte moins cher — vaut-il la peine ?",
    answer:
      "Un setter junior coûte moins mais calibre plus lentement. Si la méthode et les outils sont fournis par l'agence, la différence de résultat est faible. Si le setter travaille sans infrastructure (pas de skill IA, pas de système de scoring), un profil junior sans méthode livre en moyenne 30 à 50 % de RDV de moins qu'un profil expérimenté.",
  },
  {
    question: "Peut-on négocier la prime par RDV à la baisse ?",
    answer:
      "Oui, mais c'est contre-productif. Une prime basse supprime l'incentive qui pousse le setter à prioriser la qualité plutôt que le volume. Un modèle avec prime faible mais fixe élevé favorise le confort plutôt que la performance. La prime est le mécanisme d'alignement — ne pas la sacrifier.",
  },
  {
    question: "Quelle différence de coût entre un setter freelance et une agence de setting ?",
    answer:
      "Un setter freelance facture généralement moins (pas de frais de structure), mais vous gérez l'onboarding, les outils, la méthode et le suivi seul. Une agence comme Setting inclut la méthode, le skill IA, les outils et l'accompagnement — ce qui représente un surcoût de 200 à 500 €/mois justifié par la vitesse de calibration et la garantie sur les résultats.",
  },
  {
    question: "Qu'est-ce qu'une garantie de RDV concrètement ?",
    answer:
      "Une garantie sur le nombre de RDV livrés signifie que si le setter ne livre pas le minimum convenu sur un mois, le surplus est déduit de la prochaine facture ou remboursé. Chez Setting, la garantie est de 5 RDV qualifiés minimum par mois. Si ce seuil n'est pas atteint, on ne facture pas la différence.",
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
      name: "Coût d'un setter B2B",
      item: 'https://www.setting.live/ressources/cout-setter-b2b-prix',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoutSetterB2BPage() {
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
              <li className="text-text-primary">Coût d&apos;un setter B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Coût d&apos;un setter B2B en 2026 : les vrais chiffres
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Fixe, prime, hybride : ce que le marché pratique et comment ne pas se faire avoir.
              Avant de signer quoi que ce soit, posez ces questions et comprenez ce que vous payez vraiment.
            </p>
            <AuthorBlock date="2026-03-18" readTime="9 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Définition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Les modèles de rémunération d&apos;un setter B2B
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Un setter B2B est rémunéré selon trois modèles distincts. Le choix du modèle détermine
              l&apos;alignement des intérêts — et la qualité des RDV livrés.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '800–1 500 €', label: 'fixe mensuel moyen' },
              { stat: '50–200 €', label: 'par RDV livré' },
              { stat: '500 €/mois', label: 'fixe dans le modèle hybride Setting' },
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
                Les 3 modèles de rémunération d&apos;un setter
              </h2>
              <p className="mb-6">
                Quand vous cherchez un setter B2B, vous allez rencontrer trois structures tarifaires.
                Elles ne produisent pas les mêmes comportements. Comprendre la différence avant de
                signer vous évite de payer pour des résultats médiocres.
              </p>

              <div className="space-y-4 mb-6">
                {/* Model 1 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Modèle 1 — Fixe seul
                    </p>
                    <p className="font-sans text-sm font-semibold text-text-secondary">
                      800–1 500 €/mois
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    Vous payez chaque mois, que le setter livre des RDV ou non. Aucune incitation
                    à performer. Si les résultats ne viennent pas, la facture tombe quand même.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Ce modèle est courant chez les freelances qui veulent sécuriser un revenu fixe.
                    Il fonctionne si vous avez une relation de confiance établie et des KPIs clairs dès
                    le départ. Sans ça, vous financez la présence plutôt que la performance.
                  </p>
                </div>

                {/* Model 2 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Modèle 2 — Prime seule par RDV
                    </p>
                    <p className="font-sans text-sm font-semibold text-text-secondary">
                      50–200 €/RDV
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    Vous ne payez que pour les RDV livrés. L&apos;incentive est alignée en surface —
                    mais ce modèle favorise la quantité sur la qualité. Un setter rémunéré uniquement
                    à la prime a intérêt à livrer des RDV, même mal qualifiés.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Résultat : des appels avec des prospects qui ne correspondent pas à votre ICP,
                    qui ne sont pas décideurs, ou qui n&apos;ont pas de budget. Votre agenda se remplit.
                    Votre pipeline, non.
                  </p>
                </div>

                {/* Model 3 — Highlighted */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-accent/30">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Modèle 3 — Hybride fixe bas + prime par RDV
                    </p>
                    <p className="font-sans text-sm font-semibold text-accent">
                      Recommandé
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    Un fixe bas couvre la présence et la continuité du programme. La prime par RDV
                    aligne les intérêts sur les résultats qualifiés. Le setter a intérêt à bien
                    qualifier — parce que des RDV mal qualifiés feront remonter les objections et
                    réduire le fixe futur.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                    C&apos;est le modèle utilisé par Setting : 500 €/mois de fixe
                    + 50 à 250 €/RDV selon le ticket moyen du client. Le montant exact de la prime
                    dépend aussi de la présence de lead magnets actifs et d&apos;une stratégie de contenu
                    — un contexte favorable génère plus de volume et influence la fourchette.
                  </p>
                  <p className="font-sans text-accent text-xs font-semibold">
                    Les intérêts du setter et du client pointent dans la même direction.
                  </p>
                </div>
              </div>

              <p>
                La structure tarifaire n&apos;est pas un détail administratif. Elle détermine ce que
                votre setter va optimiser. Choisissez un modèle qui récompense la qualité, pas juste
                l&apos;activité.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce qui justifie le prix d&apos;un setter
              </h2>
              <p className="mb-4">
                Un setter ne fait pas que &ldquo;envoyer des messages LinkedIn&rdquo;.
                Si c&apos;était aussi simple, n&apos;importe qui pourrait le faire pour 200 €/mois.
                Le prix reflète une infrastructure, une méthode et un temps d&apos;apprentissage.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Les outils",
                    desc: "Sales Navigator (~100 €/mois) pour cibler les prospects avec des filtres précis. Reactin pour capturer les signaux inbound sur vos posts. Spyer pour surveiller les comptes concurrents et détecter les profils qui interagissent avec votre secteur (~30–80 €/mois). Ces outils seuls représentent 200 à 300 €/mois avant même de payer le setter.",
                  },
                  {
                    title: "La calibration",
                    desc: "Les deux premiers mois d'un programme de setting servent à affiner les critères de l'ICP, tester les angles de message, identifier les signaux qui génèrent vraiment des réponses. Ce temps de calibration est incompressible — il n'existe pas de raccourci. Un setter qui démarre sans cette phase livre du volume sans pertinence.",
                  },
                  {
                    title: "Le journal de bord et l'itération",
                    desc: "Un setter structuré documente tout : les messages envoyés, les réponses obtenues, les objections rencontrées, les angles qui ont fonctionné. Ce journal alimente la base de connaissance qui améliore les drafts IA au fil du temps. Sans cette documentation, chaque semaine repart de zéro.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Cheap sans méthode vs. structuré avec système
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Un setter à 400 €/mois sans méthode ni outils va livrer peu et brûler des leads.
                  Un setter à 800 €/mois avec infrastructure, skill IA et journal de bord va livrer
                  des RDV qualifiés dès le premier mois. La comparaison de prix sans comparer le
                  contexte est trompeuse.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment calculer le ROI d&apos;un programme de setting
              </h2>
              <p className="mb-4">
                Avant de comparer les prix, calculez ce que chaque RDV vous rapporte concrètement.
                Le reste suit.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Exemple de calcul
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Panier moyen de votre offre', value: '3 000 €' },
                    { label: 'Taux de closing sur un appel qualifié', value: '1 sur 3' },
                    { label: 'Valeur d&apos;un RDV qualifié', value: '1 000 €' },
                    { label: 'Programme : 500 €/mois + 50 €/RDV × 8 RDV/mois', value: '900 €/mois' },
                    { label: 'Valeur générée par mois (8 RDV × 1 000 €)', value: '8 000 €/mois' },
                    { label: 'ROI', value: '~8×', highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <p
                        className="font-sans text-sm text-text-secondary leading-snug"
                        dangerouslySetInnerHTML={{ __html: label }}
                      />
                      <p className={`font-sans text-sm font-semibold shrink-0 ${highlight ? 'text-accent' : 'text-text-primary'}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                La formule est simple :
              </p>
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20 mb-4">
                <p className="font-sans text-text-primary text-sm font-semibold text-center leading-relaxed">
                  (panier moyen × taux de closing × RDV par mois) ÷ coût programme
                </p>
              </div>
              <p>
                Si le résultat est inférieur à 3, le programme est mal calibré ou votre taux de
                closing est à travailler en priorité. Si le résultat est supérieur à 5, chaque
                euro investi dans le setting rapporte cinq fois sa valeur.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce qu&apos;on paye qu&apos;on ne voit pas
              </h2>
              <p className="mb-4">
                Le coût affiché d&apos;un programme de <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> n&apos;est pas le coût réel si le programme
                est mal exécuté. Les coûts cachés d&apos;un setter sans méthode s&apos;accumulent silencieusement.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "RDV mal qualifiés",
                    desc: "Chaque appel avec un prospect hors ICP coûte 30 à 60 minutes du temps du fondateur. Sur un mois avec 8 RDV dont 5 mal qualifiés, c'est 3 à 5 heures perdues — plus la frustration et le signal négatif envoyé au marché.",
                  },
                  {
                    title: "Leads brûlés",
                    desc: "Un prospect contacté avec un mauvais message se souvient de l'approche. Sur LinkedIn, relancer un profil déjà brûlé est très difficile. Un setter qui masse des messages génériques peut fermer définitivement des portes sur des profils qui auraient été parfaits.",
                  },
                  {
                    title: "Réputation LinkedIn dégradée",
                    desc: "Des messages trop commerciaux, trop fréquents ou mal ciblés génèrent des signalements. Un compte LinkedIn signalé perd en portée organique — et la réputation personnelle du fondateur en prend un coup auprès de son réseau.",
                  },
                  {
                    title: "Turnover setter",
                    desc: "Un setter qui part après 3 mois emporte avec lui la connaissance accumulée sur votre marché. Recrutement, onboarding, calibration : recommencer de zéro coûte 2 à 3 mois de retard et plusieurs milliers d'euros en temps et ressources.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Le coût réel d&apos;un programme mal exécuté dépasse largement ce qui est facturé.
                Leads brûlés + temps perdu + réputation abîmée + turnover s&apos;additionnent vite.
                Évaluer un programme uniquement sur le prix affiché, c&apos;est se tromper d&apos;indicateur.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment comparer les offres de setting
              </h2>
              <p className="mb-6">
                Avant de signer avec un setter ou une agence, posez ces cinq questions.
                Les réponses vous diront tout ce que vous avez besoin de savoir sur la qualité
                de ce que vous allez recevoir.
              </p>

              <div className="space-y-5">
                {[
                  {
                    num: '1',
                    question: "Quelle garantie sur les RDV ?",
                    detail: "Un programme sérieux s'engage sur un minimum mensuel. Si ce seuil n'est pas atteint, la différence doit être remboursée ou déduite. Sans garantie, vous portez seul le risque.",
                  },
                  {
                    num: '2',
                    question: "Comment le setter qualifie-t-il les leads ?",
                    detail: "Quels critères utilisez-vous ? Fonction, taille d'entreprise, budget, timing, signal d'achat détecté ? Un setter sans grille de qualification explicite livre du volume, pas de la pertinence.",
                  },
                  {
                    num: '3',
                    question: "Quelle est la méthode de rédaction des messages ?",
                    detail: "Y a-t-il une règle sur la longueur ? Un format type ? Un protocole pour le premier message vs la relance ? Un setter qui improvise à chaque fois n'est pas scalable.",
                  },
                  {
                    num: '4',
                    question: "Quels outils utilisez-vous ?",
                    detail: "Sales Navigator, Reactin, Spyer, BreakCold — les outils sont inclus dans le programme ou facturés en sus ? Si le setter n'utilise pas ces outils, la détection de signaux est manuelle et incomplète.",
                  },
                  {
                    num: '5',
                    question: "Y a-t-il un journal de bord et une session de calibration ?",
                    detail: "Le setter documente-t-il ce qui fonctionne et ce qui ne fonctionne pas ? Y a-t-il des sessions régulières pour ajuster la cible et les messages ? Sans itération structurée, le programme se dégrade avec le temps.",
                  },
                ].map(({ num, question, detail }) => (
                  <div key={num} className="flex gap-4">
                    <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4 pt-0.5">{num}.</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{question}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fréquentes sur le coût d&apos;un setter B2B
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
                { href: '/ressources/setter-b2b-definition', label: "C'est quoi un setter en B2B ?" },
                { href: '/ressources/sdr-interne-vs-externalise', label: 'SDR interne vs SDR externalisé : le comparatif coût réel en 2026' },
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
              Voir les tarifs et la garantie résultats
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Fixe mensuel + prime par RDV livré. Garantie 5 RDV qualifiés minimum par mois.
              Pas de paiement si l&apos;objectif n&apos;est pas atteint. On démarre en 2 semaines.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Voir le programme et les tarifs →
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

        </div>
      </main>
      <Footer />
    </>
  )
}
