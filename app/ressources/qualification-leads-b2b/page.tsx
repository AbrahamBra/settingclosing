import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: 'Qualification de leads B2B en 2026 | Setting.live',
  description:
    'Qualification de leads B2B : BANT, MEDDIC et qualification en 5 niveaux. Méthodes, critères et exemples pour évaluer vos prospects.',
  openGraph: {
    title: 'Qualification de leads B2B en 2026 | Setting.live',
    description:
      'BANT, MEDDIC, qualification signal-based : comment évaluer un prospect B2B avant d\'allouer du temps commercial. Méthodes comparées et exemples concrets.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/qualification-leads-b2b',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/qualification-leads-b2b',
  headline: 'Qualifier un lead en B2B 2026 : méthodes, critères et exemples',
  description:
    'Qualifier un lead B2B : BANT, MEDDIC, et qualification en 5 niveaux par signal. Comment évaluer la maturité d\'un prospect avant de lui consacrer du temps.',
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting.live',
    url: 'https://www.setting.live',
  },
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/qualification-leads-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/qualification-leads-b2b',
  },
}

const faqItems = [
  {
    question: 'Qu\'est-ce que qualifier un lead en B2B ?',
    answer:
      'Qualifier un lead en B2B signifie évaluer sa probabilité de devenir client avant de lui consacrer du temps commercial. Un lead qualifié a le bon profil (ICP), un problème que vous résolvez, les moyens d\'acheter et une maturité suffisante pour prendre une décision. Un lead non qualifié peut avoir n\'importe lequel de ces éléments manquant — et vous faire perdre du temps.',
  },
  {
    question: 'Qu\'est-ce que BANT ?',
    answer:
      'BANT est un cadre de qualification créé par IBM dans les années 1960 : Budget (le prospect peut-il payer ?), Authority (est-il le décideur ?), Need (a-t-il un vrai besoin ?), Timeline (dans quel délai décide-t-il ?). BANT reste utile comme checklist mais ses limites sont connues : il s\'applique bien au lead entrant chaud, moins bien à la prospection outbound. En B2B 2026, MEDDIC est souvent plus pertinent.',
  },
  {
    question: 'Quelle est la différence entre BANT et MEDDIC ?',
    answer:
      'BANT qualifie le prospect de façon statique : a-t-il le budget, le pouvoir de décision, le besoin, le timing ? MEDDIC qualifie le processus de décision de façon dynamique : Metrics (chiffres attendus), Economic buyer (qui signe vraiment), Decision criteria (sur quoi il décide), Decision process (comment il décide), Identify pain (problème précis), Champion (qui défend votre solution en interne). MEDDIC est plus adapté aux cycles longs avec plusieurs décideurs.',
  },
  {
    question: 'Comment qualifier un lead LinkedIn sans appel ?',
    answer:
      'La qualification LinkedIn pré-appel repose sur 4 données : le profil (poste, taille d\'entreprise, secteur), l\'activité récente (ce qu\'il publie ou commente révèle ses priorités), le signal d\'achat qui a motivé le contact (réaction à un post, changement de poste, etc.), et les échanges de prospection (ce qu\'il a demandé, comment il a répondu). Ces 4 éléments permettent de construire un niveau de qualification avant même le premier appel.',
  },
  {
    question: 'Qui qualifie les leads : le setter ou le closeur ?',
    answer:
      'Le setter qualifie en amont sur 5 niveaux de maturité depuis les échanges LinkedIn. Le closeur reçoit un brief et confirme ou affine la qualification pendant la discovery call. C\'est une qualification en deux temps : le setter évalue la probabilité de conversion et priorise les leads ; le closeur valide que le prospect a bien le problème, le budget et l\'autorité pour décider.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment qualifier un lead en B2B',
  description:
    "Processus de qualification de leads B2B : vérifier le profil ICP, appliquer BANT ou MEDDIC, attribuer un niveau de maturité par signal et coordonner setter-closeur.",
  step: [
    {
      '@type': 'HowToStep',
      name: 'Vérifier les 4 critères de base',
      text: "Évaluez si le lead correspond à l'ICP (profil, secteur, taille), a un problème réel que vous résolvez, dispose des moyens d'acheter et a l'autorité de décision.",
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Appliquer le cadre BANT',
      text: "Vérifiez Budget, Authority, Need et Timeline. BANT est particulièrement adapté aux leads inbound qui ont déjà formalisé leur besoin.",
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Appliquer MEDDIC pour les cycles longs',
      text: "Pour les deals complexes, qualifiez avec Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain et Champion.",
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Attribuer un niveau de maturité (N1 à N5)',
      text: "Classez chaque prospect de N1 (curiosité froide) à N5 (deal chaud). Seuls les leads N4 et N5 sont envoyés en appel de closing.",
      position: 4,
    },
    {
      '@type': 'HowToStep',
      name: 'Coordonner la qualification setter-closeur',
      text: "Le setter qualifie en amont (niveau, profil ICP, signal, résumé des échanges). Le closeur confirme pendant la discovery call et retransmet les résultats pour affiner les critères.",
      position: 5,
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    { '@type': 'ListItem', position: 3, name: 'Qualification leads B2B', item: 'https://www.setting.live/ressources/qualification-leads-b2b' },
  ],
}

const niveauxQualif = [
  { niveau: 'N1', label: 'Curiosité froide', desc: 'A réagi à un post générique. Aucun signal d\'intention. Pas prêt pour un appel — garder en liste de nurturing.' },
  { niveau: 'N2', label: 'Intérêt visible', desc: 'A commenté un contenu lié au problème que vous résolvez, ou a visité votre profil. Peut justifier un premier message de prospection.' },
  { niveau: 'N3', label: 'Signal qualifié', desc: 'A engagé une conversation sur son problème dans les échanges LinkedIn. Mentionne une situation que vous reconnaissez. Prêt pour une qualification rapide par message.' },
  { niveau: 'N4', label: 'Acheteur potentiel', desc: 'Confirme le problème, le budget approximatif et son rôle de décideur dans les échanges. Prêt pour un appel de discovery.' },
  { niveau: 'N5', label: 'Deal chaud', desc: 'A exprimé une intention d\'achat explicite ou une urgence ("on doit régler ça avant fin de trimestre"). Priorité absolue pour un appel rapide.' },
]

export default function QualificationLeadsB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
              <li className="text-text-primary">Qualification leads B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting · Méthodes
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Qualifier un lead en B2B 2026 : méthodes, critères et exemples
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Un lead non qualifié qui arrive dans l&apos;agenda du closeur, c&apos;est du temps
              perdu — et parfois un deal raté qui aurait pu attendre. Qualifier un lead en B2B
              signifie évaluer sa probabilité de devenir client avant de lui consacrer du temps
              commercial. BANT, MEDDIC, qualification signal-based : les méthodes comparées.
            </p>
            <AuthorBlock date="2026-03-18" readTime="8 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Stat externe */}
          <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Chiffre clé
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Selon HubSpot State of Sales (2024),{' '}
              <strong className="text-text-primary">seuls 27 % des leads transmis aux commerciaux sont réellement qualifiés</strong>.
              Les entreprises qui structurent une phase de qualification en amont constatent
              une hausse moyenne de 20 à 30 % du taux de transformation.
            </p>
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Sommaire</p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: 'Pourquoi qualifier un lead avant de l\'appeler' },
                { id: 'bant', label: 'La méthode BANT' },
                { id: 'meddic', label: 'La méthode MEDDIC' },
                { id: 'niveaux', label: 'Qualification en 5 niveaux par signal LinkedIn' },
                { id: 'setting-closeur', label: 'La qualification dans un système setter-closeur' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a href={`#${id}`} className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-snug">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi qualifier un lead avant de l&apos;appeler
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un appel de discovery dure entre 30 et 60 minutes. Multiplié par tous les leads
              non qualifiés qui passent dans l&apos;agenda d&apos;un closeur, le coût du temps
              perdu est considérable. La qualification sert à ne faire passer en appel que les
              prospects qui ont une probabilité réelle de devenir clients.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce qu&apos;un lead qualifié en B2B doit présenter :
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                { label: 'Le bon profil (ICP)', detail: 'Secteur, taille d\'entreprise, poste, marché — correspond à votre cible idéale.' },
                { label: 'Un problème réel', detail: 'Exprime une difficulté ou un objectif que vous aidez à résoudre.' },
                { label: 'Les moyens d\'acheter', detail: 'Budget compatible avec votre offre, même approximativement.' },
                { label: 'L\'autorité de décision', detail: 'Est décideur ou co-décideur. Sinon : peut vous mettre en relation avec celui qui l\'est.' },
              ].map(({ label, detail }) => (
                <div key={label} className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                  <p className="font-sans text-sm font-semibold text-text-primary mb-1">{label}</p>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Un lead qui coche 3 des 4 critères peut valoir un appel. Un lead qui en coche 1 ou 2
              est prématuré — il peut être gardé en nurturing pour être recontacté dans 4 à 8 semaines.
            </p>
          </section>

          {/* Section 2 — BANT */}
          <section id="bant" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La méthode BANT
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              BANT (Budget, Authority, Need, Timeline) est le cadre de qualification le plus ancien
              et le plus utilisé. Créé par IBM dans les années 1960, il reste une bonne checklist
              pour les leads entrants.
            </p>
            <div className="space-y-3 mb-5">
              {[
                { lettre: 'B', nom: 'Budget', question: 'Le prospect peut-il financer votre offre ?', limite: 'En B2B outbound, le budget est rarement défini à l\'avance. Ce critère est plus utile en qualification avancée.' },
                { lettre: 'A', nom: 'Authority', question: 'Est-il décideur ou co-décideur ?', limite: 'Difficile à évaluer par message. À confirmer impérativement en début d\'appel de discovery.' },
                { lettre: 'N', nom: 'Need', question: 'A-t-il un problème que vous résolvez ?', limite: 'Le critère le plus important et le plus facilement évaluable via les signaux LinkedIn.' },
                { lettre: 'T', nom: 'Timeline', question: 'Dans quel délai décide-t-il ?', limite: 'Un prospect sans urgence immédiate peut devenir un deal dans 3 mois. Ne pas écarter trop vite.' },
              ].map(({ lettre, nom, question, limite }) => (
                <div key={lettre} className="flex gap-4 border-l-2 border-white/[0.06] pl-5">
                  <span className="font-serif text-xl text-accent shrink-0 leading-none pt-0.5">{lettre}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm">{nom}</p>
                    <p className="font-sans text-xs text-text-secondary mb-1">{question}</p>
                    <p className="font-sans text-xs text-text-secondary/70 italic">{limite}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-l-2 border-accent/30 pl-5">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary">Limite de BANT :</strong> il suppose que le prospect
                a déjà défini son budget et son besoin. En prospection outbound signal-based, le prospect
                n&apos;a souvent pas encore formalisé tout ça. BANT est plus utile pour les leads
                inbound que pour les leads outbound.
              </p>
            </div>
          </section>

          {/* Section 3 — MEDDIC */}
          <section id="meddic" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La méthode MEDDIC
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              MEDDIC est un cadre de qualification plus complet, adapté aux cycles de vente longs
              avec plusieurs décideurs. Il qualifie non seulement le prospect mais le{' '}
              <em>processus de décision</em> dans lequel il s&apos;inscrit.
            </p>
            <div className="space-y-3 mb-5">
              {[
                { lettre: 'M', nom: 'Metrics', desc: 'Quels résultats chiffrés le prospect attend-il ? Avec quels indicateurs il évaluera le succès.' },
                { lettre: 'E', nom: 'Economic Buyer', desc: 'Qui signe le contrat au final ? Ce n\'est pas toujours la personne avec qui vous parlez.' },
                { lettre: 'D', nom: 'Decision Criteria', desc: 'Sur quels critères le prospect prend-il sa décision ? Prix, références, méthode, résultats attendus ?' },
                { lettre: 'D', nom: 'Decision Process', desc: 'Comment la décision est-elle prise ? Qui doit valider ? Quel est le délai type ?' },
                { lettre: 'I', nom: 'Identify Pain', desc: 'Quel est le problème précis — pas général, précis — que vous résolvez pour cette personne ?' },
                { lettre: 'C', nom: 'Champion', desc: 'Y a-t-il quelqu\'un en interne qui défend votre solution auprès des autres décideurs ?' },
              ].map(({ lettre, nom, desc }) => (
                <div key={nom} className="flex gap-4 border-l-2 border-white/[0.06] pl-5">
                  <span className="font-serif text-xl text-accent shrink-0 leading-none pt-0.5">{lettre}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm">{nom}</p>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              MEDDIC s&apos;applique principalement pendant la discovery call et les appels suivants.
              Pour les fondateurs, freelances et solopreneurs B2B avec des cycles courts (1 à 2 appels), les critères
              les plus utiles sont : Identify Pain, Economic Buyer, et Decision Process.
            </p>
          </section>

          {/* Section 4 — Niveaux signal */}
          <section id="niveaux" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qualification en 5 niveaux par signal LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Dans un système de{' '}
              <a href="/setting" className="text-accent hover:underline transition-colors">setting</a>{' '}
              signal-based, la qualification commence avant le premier message.
              Le setter attribue un niveau de 1 à 5 à chaque prospect selon la nature du signal
              et la qualité des échanges. Seuls les leads N4 et N5 sont envoyés en appel de closing.
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent w-16">Niveau</th>
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent">Label</th>
                    <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-accent">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {niveauxQualif.map(({ niveau, label, desc }) => (
                    <tr key={niveau}>
                      <td className="py-4 pr-4">
                        <span className={`font-serif text-base ${['N4', 'N5'].includes(niveau) ? 'text-accent' : 'text-text-secondary/50'}`}>
                          {niveau}
                        </span>
                      </td>
                      <td className="py-4 pr-4 font-semibold text-text-primary align-top whitespace-nowrap">{label}</td>
                      <td className="py-4 text-text-secondary leading-relaxed">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Les leads N1 et N2 restent dans la base de suivi — ils peuvent évoluer avec du nurturing
              (contenu, relances espacées). Les leads N3 passent en qualification approfondie par
              message. Seuls les N4 et N5 sont proposés pour un appel.
            </p>
          </section>

          {/* Section 5 — Setting-Closeur */}
          <section id="setting-closeur" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La qualification dans un système setter-closeur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              La qualification en deux temps est le principal avantage d&apos;un système setter-closeur.
              Sans setter, le closeur reçoit des leads dont il ne sait pas grand chose — et
              doit requalifier pendant l&apos;appel lui-même, ce qui consomme du temps et crée
              de la friction.
            </p>
            <div className="space-y-3 mb-5">
              {[
                { role: 'Setter', action: 'Qualification pré-appel : niveau de maturité (N1 à N5), profil ICP, signal détecté, échanges résumés. Transmet le brief au closeur avant chaque appel.' },
                { role: 'Closeur', action: 'Confirmation pendant la discovery : valide les hypothèses du setter, identifie l\'Economic Buyer, découvre le Decision Process, précise le pain exact.' },
                { role: 'Boucle', action: 'Le closeur retransmet au setter : quels profils N4-N5 ont finalement signé, quels signaux prédisent le mieux la conversion. Le setter affine ses critères.' },
              ].map(({ role, action }) => (
                <div key={role} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-1">{role}</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{action}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Pour comprendre en détail le rôle du setter dans la qualification :{' '}
              <a href="/ressources/setting-commercial-b2b" className="text-accent hover:text-text-primary transition-colors">
                setting commercial B2B — définition, méthode et programme complet
              </a>
              .
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fréquentes sur la qualification des leads B2B</h2>
            <div className="space-y-6">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="border-l-2 border-white/[0.06] pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">{question}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">Pour aller plus loin</p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure et questions' },
                { href: '/ressources/closing-b2b', label: 'Closing B2B : définition et méthode' },
                { href: '/ressources/methode-soncas', label: 'Méthode SONCAS : 6 leviers de motivation' },
                { href: '/ressources/methode-spin-selling', label: 'SPIN Selling : vendre sans forcer' },
                { href: '/glossaire', label: 'Glossaire : ICP, qualification, pipeline…' },
                { href: '/ressources/methodes-vente-b2b', label: 'Méthodes de vente B2B : quel framework choisir ?' },
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
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Setting.live</p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">Vos leads sont-ils vraiment qualifiés ?</h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour comprendre comment vous qualifiez aujourd&apos;hui, identifier
              ce qui se perd dans le pipeline et ce qu&apos;un setter dédié changerait. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="/#contact">Réserver un appel gratuit →</ButtonGlow>
          </div>

          <div className="mt-8 text-center">
            <a href="/ressources" className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors">← Retour au blog</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
