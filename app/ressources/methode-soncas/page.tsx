import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: 'Méthode SONCAS : 6 leviers B2B | Setting.live',
  description:
    'Méthode SONCAS en B2B : Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie. Définition des 6 leviers et exemples concrets.',
  openGraph: {
    title: 'Méthode SONCAS : 6 leviers B2B | Setting.live',
    description:
      'SONCAS : comment utiliser les 6 motivations d\'achat pour améliorer sa discovery call et son taux de closing en B2B.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/methode-soncas',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/methode-soncas',
  headline: 'Méthode SONCAS en B2B 2026 : définition, 6 leviers et exemples',
  description:
    'La méthode SONCAS permet d\'identifier les motivations d\'achat d\'un prospect B2B et d\'adapter son discours commercial en conséquence.',
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
  url: 'https://www.setting.live/ressources/methode-soncas',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/methode-soncas',
  },
}

const faqItems = [
  {
    question: 'Qu\'est-ce que la méthode SONCAS ?',
    answer:
      'La méthode SONCAS est un outil commercial qui identifie 6 motivations d\'achat universelles : Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie. En détectant le profil motivationnel d\'un prospect dès la discovery call, le commercial adapte son discours aux leviers qui comptent vraiment pour cette personne — et évite d\'argumenter sur ce qui ne l\'intéresse pas.',
  },
  {
    question: 'Comment utiliser SONCAS en B2B ?',
    answer:
      'En B2B, SONCAS s\'applique pendant la discovery call. Quelques questions suffisent pour identifier les 2 ou 3 motivations dominantes du prospect : "qu\'est-ce qui est important pour vous dans ce type de décision ?" ou "qu\'est-ce qui vous a fait hésiter jusqu\'ici ?" Un prospect qui parle de risques → Sécurité. Qui parle de résultats chiffrés → Argent. Qui parle de son équipe → Confort ou Sympathie.',
  },
  {
    question: 'SONCAS et setting commercial, quel lien ?',
    answer:
      'Le setting commercial qualifie les leads avant l\'appel de closing. La méthode SONCAS s\'applique dans le closing — pendant l\'appel de discovery. Le setter transmet au closeur un brief sur le profil du prospect ; le closeur utilise SONCAS pour adapter son discours pendant l\'appel. Les deux méthodes sont complémentaires dans un système setter-closeur.',
  },
  {
    question: 'La méthode SONCAS est-elle encore valide en 2026 ?',
    answer:
      'Oui. SONCAS date des années 1990 mais ses 6 leviers correspondent à des motivations humaines stables. Ce qui a changé en 2026 : les prospects B2B sont plus informés et plus sceptiques. Le levier Sécurité est devenu dominant (risque de mauvais achat, peur de l\'engagement). Et Argent se lit moins comme "prix bas" que comme "ROI mesurable". La grille reste valide, son application demande plus de nuance.',
  },
  {
    question: 'Quelle est la différence entre SONCAS et SONCASE ?',
    answer:
      'SONCASE ajoute un 7e levier à SONCAS : l\'Environnement/Éthique. Ce 7e levier est pertinent dans les secteurs où les critères RSE pèsent dans la décision d\'achat. En B2B classique (services, conseil, formation), les 6 leviers de SONCAS couvrent la grande majorité des situations.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    { '@type': 'ListItem', position: 3, name: 'Méthode SONCAS', item: 'https://www.setting.live/ressources/methode-soncas' },
  ],
}

const leviersData = [
  {
    lettre: 'S',
    nom: 'Sécurité',
    def: 'Le prospect veut minimiser les risques. Il a peur de se tromper, d\'acheter quelque chose qui ne fonctionnera pas, de devoir justifier sa décision.',
    signaux: ['Il pose beaucoup de questions sur les garanties', 'Il demande des références clients', 'Il hésite à s\'engager sans "test" préalable', 'Il mentionne des mauvaises expériences passées'],
    discours: 'Mettre en avant les garanties, les cas clients détaillés, la progressivité de l\'engagement. Ne pas brusquer la décision. Rassurer sur la réversibilité.',
    exemple: '"Vous nous parlez d\'une expérience difficile avec une agence précédente. C\'est exactement pourquoi on démarre avec une phase de calibration de 4 semaines — ça permet de voir les premiers résultats avant de s\'engager sur 3 mois."',
  },
  {
    lettre: 'O',
    nom: 'Orgueil',
    def: 'Le prospect veut être reconnu, valorisé, se distinguer. Il est sensible au statut que confère la décision.',
    signaux: ['Il parle de ses résultats et réussites', 'Il mentionne des concurrents qu\'il veut dépasser', 'Il est attentif à qui d\'autre utilise le service'],
    discours: 'Valoriser son positionnement, le qualifier comme le type de profil qui réussit avec la méthode. Éviter le discours "pour tout le monde".',
    exemple: '"Les clients qui tirent le plus de valeur du programme sont des consultants qui ont déjà une offre premium — ils ont juste besoin que leurs RDV reflètent le niveau de ce qu\'ils font."',
  },
  {
    lettre: 'N',
    nom: 'Nouveauté',
    def: 'Le prospect est attiré par l\'innovation, les approches différentes, les méthodes récentes.',
    signaux: ['Il demande comment vous vous différenciez', 'Il utilise du vocabulaire tech ou IA', 'Il mentionne ce qu\'il cherche à tester'],
    discours: 'Mettre en avant l\'approche signal-based, les outils (Reactin, Spyer, Claude), la méthode différente du cold email.',
    exemple: '"La méthode qu\'on utilise n\'existait pas il y a 2 ans. On ne prospecte que les personnes qui ont déjà montré un signal — une réaction, un commentaire, un changement de poste. Le taux de réponse est 7x supérieur au cold."',
  },
  {
    lettre: 'C',
    nom: 'Confort',
    def: 'Le prospect veut simplifier sa vie, réduire les frictions, ne pas avoir à gérer quelque chose de complexe.',
    signaux: ['Il parle de surcharge, de manque de temps', 'Il veut que ça soit simple à mettre en place', 'Il n\'a pas envie de former quelqu\'un ou de gérer'],
    discours: 'Insister sur le fait que le setter gère tout : de la détection des signaux à la prise de RDV. Rien à faire côté client.',
    exemple: '"Vous n\'avez rien à gérer — vous recevez des rendez-vous dans votre agenda. Le setter s\'occupe de la prospection, de la qualification et du briefing. Votre seul rôle : faire le call."',
  },
  {
    lettre: 'A',
    nom: 'Argent',
    def: 'Le prospect est sensible au ROI, au rapport coût/valeur, à la rentabilité de la décision.',
    signaux: ['Il demande le prix tôt dans la conversation', 'Il compare avec d\'autres solutions', 'Il parle de budget, de coût d\'acquisition'],
    discours: 'Ancrer le prix sur le ROI calculé : combien vaut un RDV qualifié dans son secteur ? Combien coûte son temps de prospection actuel ?',
    exemple: '"Un client signé représente combien pour vous ? Si le programme génère 3 clients de plus par mois, ça représente quoi en chiffre d\'affaires ? Le programme coûte moins qu\'un seul de ces clients."',
  },
  {
    lettre: 'S',
    nom: 'Sympathie',
    def: 'Le prospect décide aussi en fonction de la relation. Il veut travailler avec des personnes en qui il a confiance.',
    signaux: ['Il pose des questions personnelles sur l\'équipe', 'Il parle d\'alignement de valeurs', 'La relation prime sur les arguments rationnels'],
    discours: 'Être authentique, montrer de l\'intérêt pour son contexte spécifique. Les cas clients sont là pour créer de l\'identification.',
    exemple: '"Je vous pose ces questions parce que le programme est différent selon le marché et le profil. Je veux comprendre votre situation avant de vous parler de ce qu\'on peut faire."',
  },
]

export default function MethodeSoncasPage() {
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
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Méthode SONCAS</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Méthodes · Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Méthode SONCAS en B2B 2026 : définition, 6 leviers et exemples concrets
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              SONCAS est un cadre pour comprendre pourquoi un prospect achète — ou n&apos;achète pas.
              Six motivations universelles : Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie.
              En les identifiant pendant la discovery call, vous adaptez votre discours à ce qui
              compte vraiment pour la personne en face de vous.
            </p>
            <AuthorBlock date="2026-03-18" readTime="10 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Stat externe */}
          <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Chiffre clé
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Selon une étude Gartner (2023), <strong className="text-text-primary">77 % des acheteurs B2B</strong> décrivent leur dernier
              achat comme &ldquo;complexe ou difficile&rdquo;. Comprendre les motivations individuelles
              du décideur est l&apos;un des leviers les plus efficaces pour réduire cette friction.
            </p>
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: 'Qu\'est-ce que la méthode SONCAS ?' },
                { id: 'leviers', label: 'Les 6 leviers SONCAS : définition + exemples' },
                { id: 'application', label: 'Comment appliquer SONCAS en discovery call' },
                { id: 'setting-closing', label: 'SONCAS dans un système setter-closeur' },
                { id: 'erreurs', label: 'Les erreurs à éviter' },
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

          {/* Section 1 — Définition */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qu&apos;est-ce que la méthode SONCAS ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              SONCAS est un acronyme commercial né dans les années 1990 qui liste six motivations
              d&apos;achat universelles : <strong className="text-text-primary">S</strong>écurité,{' '}
              <strong className="text-text-primary">O</strong>rgueil,{' '}
              <strong className="text-text-primary">N</strong>ouveauté,{' '}
              <strong className="text-text-primary">C</strong>onfort,{' '}
              <strong className="text-text-primary">A</strong>rgent,{' '}
              <strong className="text-text-primary">S</strong>ympathie.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;idée centrale : les prospects n&apos;achètent pas tous pour les mêmes raisons.
              Présenter les mêmes arguments dans le même ordre à tout le monde est une des causes
              majeures de closing raté. Un prospect motivé par la Sécurité veut des garanties
              et des références — pas votre liste de fonctionnalités. Un prospect motivé par
              l&apos;Argent veut un ROI chiffré — pas une promesse de confort.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              En pratique, chaque prospect a 2 ou 3 motivations dominantes. Votre rôle pendant
              la discovery call : les identifier, puis construire votre présentation autour de
              ces leviers-là.
            </p>
            <div className="border-l-2 border-accent/30 pl-5">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                SONCASE est une version étendue qui ajoute un 7e levier : <strong className="text-text-primary">E</strong>nvironnement/Éthique.
                Pertinent dans les secteurs où la RSE pèse dans la décision. En B2B
                services/conseil, les 6 leviers de SONCAS couvrent la grande majorité des situations.
              </p>
            </div>
          </section>

          {/* Section 2 — Les 6 leviers */}
          <section id="leviers" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 6 leviers SONCAS : définition + exemples
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Pour chaque levier : ce que ça signifie, comment le détecter pendant un appel,
              et comment adapter son discours.
            </p>
            <div className="space-y-10">
              {leviersData.map(({ lettre, nom, def, signaux, discours, exemple }) => (
                <div key={nom} className="border-l-2 border-white/[0.06] pl-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-2xl text-accent leading-none">{lettre}</span>
                    <h3 className="font-sans font-semibold text-text-primary text-base">{nom}</h3>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-4">{def}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                        Signaux pendant l&apos;appel
                      </p>
                      <ul className="space-y-1">
                        {signaux.map((s) => (
                          <li key={s} className="font-sans text-xs text-text-secondary flex gap-2">
                            <span className="text-accent shrink-0">→</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                        Comment adapter son discours
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">{discours}</p>
                    </div>
                  </div>

                  <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                      Exemple de formulation
                    </p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                      {exemple}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Application en discovery */}
          <section id="application" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment appliquer SONCAS en discovery call
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              SONCAS ne s&apos;applique pas après la discovery — il guide la discovery.
              L&apos;objectif des premières 15 minutes d&apos;un appel : comprendre le contexte du
              prospect ET identifier ses 2 ou 3 motivations dominantes.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: '01',
                  title: 'Commencer par le contexte',
                  desc: "Questions sur la situation actuelle, les enjeux du moment, ce qui a motivé la prise de contact. Ne cherchez pas encore à identifier SONCAS — écoutez juste.",
                },
                {
                  step: '02',
                  title: 'Identifier les motivations en cours d\'écoute',
                  desc: "Notez mentalement ce qui revient. Le prospect parle de risques et de garanties ? Sécurité. Il mentionne son concurrent qui fait mieux ? Orgueil. Il dit qu'il n'a plus le temps de gérer ? Confort.",
                },
                {
                  step: '03',
                  title: 'Valider avec une question directe',
                  desc: '"Qu\'est-ce qui est le plus important pour vous dans ce type de décision ?" ou "Qu\'est-ce qui vous ferait dire que c\'est la bonne décision ?" La réponse dit tout.',
                },
                {
                  step: '04',
                  title: 'Construire le pitch sur ces 2-3 leviers',
                  desc: "Ne présentez pas tout. Ancrez votre offre sur les motivations identifiées. Un prospect Argent + Sécurité : chiffrez le ROI et rassurez sur la progressivité. Un prospect Nouveauté + Orgueil : montrez l'approche distinctive et ce que ça dit de son positionnement.",
                },
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
          </section>

          {/* Section 4 — Setting-Closing */}
          <section id="setting-closing" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              SONCAS dans un système setter-closeur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Dans un système avec un setter dédié, SONCAS intervient à deux niveaux.
            </p>
            <div className="space-y-3 mb-5">
              {[
                {
                  phase: 'Setter (avant l\'appel)',
                  detail: "Le setter analyse le profil LinkedIn du prospect et les échanges de prospection. Certains signaux SONCAS apparaissent déjà : un prospect qui publie beaucoup sur les résultats de son équipe → probable Orgueil ou Argent. Qui commente des posts sur les risques du marché → probable Sécurité. Le setter note ces hypothèses dans le brief transmis au closeur.",
                },
                {
                  phase: 'Closeur (pendant l\'appel)',
                  detail: "Le closeur reçoit le brief avec les hypothèses SONCAS. Il confirme ou affine pendant les premières minutes de l'appel. Puis il construit la présentation en conséquence. Sans SONCAS, il présente la même chose à tout le monde et espère que ça colle.",
                },
                {
                  phase: 'Boucle d\'apprentissage',
                  detail: "Le closeur documente quels leviers ont été déterminants sur chaque deal signé. Le setter ajuste sa qualification. Avec le temps, la base de connaissance permet d'anticiper les motivations dominantes par secteur et profil.",
                },
              ].map(({ phase, detail }) => (
                <div key={phase} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-1">{phase}</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Pour aller plus loin sur le rôle du setter dans la qualification :{' '}
              <a href="/ressources/setting-commercial-b2b" className="text-accent hover:text-text-primary transition-colors">
                setting commercial B2B — définition, méthode et programme complet
              </a>
              . Sur la structure de la discovery call :{' '}
              <a href="/ressources/discovery-call-b2b" className="text-accent hover:text-text-primary transition-colors">
                discovery call B2B — structure et questions
              </a>
              .
            </p>
          </section>

          {/* Section 5 — Erreurs */}
          <section id="erreurs" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les erreurs à éviter avec SONCAS
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'Supposer les motivations sans les vérifier',
                  desc: 'Un prospect qui travaille dans la finance → probable "Argent". Ce n\'est pas une règle. Certains CFO sont plus sensibles à la Sécurité qu\'au ROI. Vérifiez toujours avec une question directe.',
                },
                {
                  num: '02',
                  title: 'Utiliser tous les leviers dans le même pitch',
                  desc: '"C\'est sécurisé, innovant, simple, et vous ferez des économies." = discours générique. SONCAS sert à choisir 2 ou 3 leviers, pas à tout couvrir.',
                },
                {
                  num: '03',
                  title: 'Confondre le levier dominant et le levier déclaré',
                  desc: 'Un prospect dit "je veux réduire les coûts" (Argent), mais hésite à signer pendant 3 semaines. La vraie résistance est probablement la Sécurité — peur de se tromper. Les deux niveaux coexistent.',
                },
                {
                  num: '04',
                  title: 'Appliquer SONCAS comme un script',
                  desc: 'SONCAS est un cadre de réflexion, pas un script à dérouler. Si vous dites "je vois que vous êtes sensible à l\'Orgueil, donc...", vous avez raté le point.',
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{num}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes sur la méthode SONCAS
            </h2>
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
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/closing-b2b', label: 'Closing B2B : définition, méthode et programme complet' },
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure, questions et erreurs à éviter' },
                { href: '/ressources/gestion-objections-b2b', label: 'Gérer les objections en vente B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition et méthode' },
                { href: '/ressources/challenger-sale-definition', label: 'La méthode Challenger Sale expliquée' },
                { href: '/glossaire', label: 'Glossaire : closer, discovery, objection, pipeline' },
                { href: '/ressources/methodes-vente-b2b', label: 'Méthodes de vente B2B comparées : Challenger Sale, SPIN, SONCAS' },
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
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez améliorer votre taux de closing ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder votre structure d&apos;appel actuelle — discovery,
              adaptation du discours, gestion des objections. Gratuit. Sans engagement.
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
