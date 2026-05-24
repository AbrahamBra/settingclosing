import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: '10 scripts LinkedIn de prospection B2B (copier-coller) 2026',
  description:
    "10 scripts LinkedIn testés : 5 messages d'ouverture signal-based, 3 relances, 2 réponses à objections. Modèles français copiables avec règles d'usage et taux de réponse moyens.",
  openGraph: {
    title: '10 scripts LinkedIn de prospection B2B (copier-coller) 2026 | Setting',
    description:
      "10 scripts LinkedIn copiables pour décrocher des RDV B2B : ouverture signal-based, relance, gestion d'objections. Taux de réponse 20-35 %.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/script-linkedin-prospection',
    languages: {
      'fr': 'https://www.setting.live/ressources/script-linkedin-prospection',
      'x-default': 'https://www.setting.live/ressources/script-linkedin-prospection',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 scripts LinkedIn de prospection B2B (copier-coller) 2026 | Setting',
    description: "10 scripts LinkedIn copiables : ouverture signal-based, relance, gestion d'objections. Taux de réponse 20-35 %.",
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/script-linkedin-prospection',
  headline: '10 scripts LinkedIn de prospection B2B (copier-coller) 2026',
  description:
    "Recueil de 10 scripts LinkedIn pour la prospection B2B : 5 messages d'ouverture signal-based, 3 relances, 2 réponses à objections. Avec les règles d'usage et les taux de réponse mesurés en 2026.",
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
  dateModified: '2026-05-24',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/script-linkedin-prospection',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/script-linkedin-prospection',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Prospection LinkedIn',
  wordCount: 2200,
  about: [
    { '@type': 'Thing', name: 'Scripts de prospection LinkedIn' },
    { '@type': 'Thing', name: 'Messages LinkedIn B2B' },
    { '@type': 'Thing', name: 'Modèles de prospection B2B français' },
  ],
}

const faqItems = [
  {
    question: "C'est quoi un script de prospection LinkedIn ?",
    answer:
      "Un script LinkedIn est un cadre structuré pour rédiger un message, pas un texte figé à copier-coller. Il définit la position et l'objectif de chaque phrase (accroche signal, fait précis du profil, pont vers votre domaine, question ouverte) sans imposer le contenu. À la différence d'un template, le script s'adapte à chaque prospect et reste indétectable.",
  },
  {
    question: 'Faut-il copier-coller ces scripts tels quels ?',
    answer:
      "Non. Les scripts sont des cadres : leur structure est valide, mais le contenu doit être adapté à chaque prospect. Copier-coller un script reconnaissable fait chuter le taux de réponse en dessous de 5 % en quelques semaines, parce que les prospects et LinkedIn les détectent. Utilisez-les comme matrice, pas comme template.",
  },
  {
    question: 'Combien de relances LinkedIn maximum par prospect ?',
    answer:
      "Deux relances maximum sur une séquence initiale, espacées de 5 à 7 jours minimum. Au-delà, le risque d'être perçu comme insistant dépasse le gain potentiel. 70 à 80 % des réponses arrivent après une seule relance bien construite.",
  },
  {
    question: 'Quel est le taux de réponse moyen avec un bon script LinkedIn ?',
    answer:
      "15 à 35 % sur des séquences signal-based (message ancré sur une interaction récente du prospect). En outbound froid sans signal : 5 à 15 %. Sous 5 %, le script ou le ciblage est défaillant — c'est le moment d'arrêter et d'itérer.",
  },
  {
    question: 'Un message LinkedIn doit faire combien de phrases ?',
    answer:
      "5 phrases maximum pour un premier message (outbound). 3 phrases pour une réponse inbound. Sur mobile, un message de 6 lignes s'affiche déjà tronqué. La concision est lue comme un signe de respect du temps du prospect.",
  },
  {
    question: 'Faut-il un Sales Navigator pour utiliser ces scripts ?',
    answer:
      "Sales Navigator n'est pas obligatoire pour le premier message, mais devient indispensable au-delà de 30 messages par semaine pour cibler proprement (filtres avancés, alertes de changement de poste, sauvegarde de listes). Coût ~100 €/mois, rentabilisé dès le premier RDV signé.",
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
      name: 'Scripts LinkedIn de prospection B2B',
      item: 'https://www.setting.live/ressources/script-linkedin-prospection',
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Script {
  id: string
  title: string
  context: string
  responseRate: string
  message: string
  why: string
}

const openingScripts: Script[] = [
  {
    id: 'signal-like',
    title: 'Script #1 — Le prospect a liké votre post',
    context: "Signal inbound fort : le prospect a interagi avec votre contenu dans les 7 derniers jours.",
    responseRate: '25 à 35 %',
    message: `Salut [Prénom], j'ai vu que tu avais réagi à mon post sur [sujet précis]. Ça résonne avec quelque chose chez toi en ce moment ? Je bosse avec [type de profil] sur ce sujet, curieux d'avoir ton angle. Si t'as 15 minutes cette semaine, je suis dispo. Sinon, rebondis quand tu veux.`,
    why: 'Court (5 phrases), ancré sur un fait précis (le like), question ouverte sans pitch, sortie de secours en fin de message.',
  },
  {
    id: 'changement-poste',
    title: "Script #2 — Le prospect vient de changer de poste",
    context: 'Le prospect a pris ses fonctions il y a moins de 60 jours.',
    responseRate: '20 à 30 %',
    message: `Salut [Prénom], félicitations pour [nouveau poste] chez [entreprise]. La prise de poste est souvent le moment où on revoit ce qui marche et ce qui doit changer côté [domaine]. J'ai accompagné [type de profil] sur exactement ce sujet l'an dernier, je peux partager ce qui ressort. 20 minutes en visio si tu veux ?`,
    why: 'Trigger précis (changement de poste = fenêtre d\'achat ouverte), positionnement par expérience, CTA explicite court.',
  },
  {
    id: 'commentaire-concurrent',
    title: "Script #3 — Le prospect a commenté chez un concurrent",
    context: "Signal tiers : le prospect a interagi avec un compte que vous surveillez.",
    responseRate: '20 à 30 %',
    message: `Salut [Prénom], j'ai vu ton commentaire sous le post de [compte tiers] sur [sujet]. Le point que tu soulèves sur [angle précis] revient souvent dans mes échanges. Je travaille sur exactement ce problème avec des [profils similaires]. Pas un pitch — juste curieux de comparer nos lectures du marché. Tu serais dispo 15 minutes ?`,
    why: 'Reprise verbatim du commentaire (preuve de lecture), positionnement comme pair (pas vendeur), désamorçage du pitch en avance.',
  },
  {
    id: 'cold-icp',
    title: "Script #4 — Cold outreach sans signal préalable (ICP fort)",
    context: 'Aucun signal, mais le prospect matche parfaitement votre ICP.',
    responseRate: '8 à 15 %',
    message: `Salut [Prénom], j'aide des [type de profil précis : ex. "consultants RH solo qui facturent +100k€/an"] à structurer leur pipeline LinkedIn. Le pattern qui revient : [insight contre-intuitif spécifique, ex. "le problème n'est jamais le nombre de messages, c'est le ciblage"]. Si ça résonne, je peux partager ce qu'on observe sur [N] cas. Sinon, ignore — je sais que c'est froid.`,
    why: 'Insight Challenger Sale (apporter une lecture nouvelle), reconnaissance honnête du caractère froid, faible engagement demandé.',
  },
  {
    id: 'recommandation',
    title: "Script #5 — Présenté par une connexion commune",
    context: 'Connexion mutuelle (collègue, client, partenaire) que vous pouvez nommer.',
    responseRate: '30 à 45 %',
    message: `Salut [Prénom], je discutais avec [nom de la connexion] qui m'a recommandé de te contacter. Le contexte : [phrase précise sur pourquoi la connexion vous a mis en relation]. Sans pitch — juste un échange de 20 minutes pour voir si ça fait sens des deux côtés. Tu préfères cette semaine ou la suivante ?`,
    why: 'Activation du social proof par nom, transparence sur la recommandation, choix binaire qui force la réponse.',
  },
]

const followupScripts: Script[] = [
  {
    id: 'relance-j3-lu',
    title: 'Script #6 — Relance à J+3 si message lu sans réponse',
    context: 'LinkedIn indique que le message a été lu mais aucune réponse.',
    responseRate: '15 à 25 %',
    message: `[Prénom], rapide retour sur mon message précédent : je viens de tomber sur [élément nouveau : article, étude, post] qui illustre exactement ce que j'évoquais. Je te le partage : [lien]. Tu y verras peut-être un angle utile. Pas besoin de réponse si ce n'est pas le moment.`,
    why: "Apport de valeur (pas un rappel), exit clause qui réduit la pression, raccourcit la friction de la réponse.",
  },
  {
    id: 'relance-j7-angle',
    title: "Script #7 — Relance à J+7 avec un nouvel angle",
    context: 'Première relance restée sans réponse, ou message initial non lu.',
    responseRate: '10 à 20 %',
    message: `Salut [Prénom], je reviens vers toi mais sous un angle différent. Plutôt que [sujet du premier message], je me demandais : comment vous gérez aujourd'hui [autre douleur connue de l'ICP] ? J'ai vu plusieurs [profils similaires] tomber sur le même mur cette année. Curieux d'avoir ton retour.`,
    why: 'Pivot d\'angle, question ouverte sans pitch, normalisation du problème (social proof discret).',
  },
  {
    id: 'relance-j21-fermeture',
    title: "Script #8 — Fermeture propre à J+21",
    context: 'Toutes les relances précédentes sans réponse. Dernier contact.',
    responseRate: '5 à 12 %',
    message: `[Prénom], je te recontacte une dernière fois — sans rancune si ce n'est pas le bon timing. Si jamais [problème de l'ICP] devient prioritaire dans les prochains mois, n'hésite pas à me ping. Sinon, tout le meilleur pour la suite.`,
    why: "Fermeture explicite (anti-spam), porte ouverte pour le futur, ton humain qui peut décoincer ceux qui n'osaient pas répondre.",
  },
]

const objectionScripts: Script[] = [
  {
    id: 'objection-prix',
    title: "Script #9 — Réponse à \"C'est trop cher\"",
    context: 'Le prospect a répondu à votre message en évoquant le budget.',
    responseRate: 'N/A (gestion d\'objection)',
    message: `Je comprends. La question juste, ce n'est pas le tarif, c'est ce que ça coûte de ne pas résoudre [le problème]. Concrètement chez [profils similaires], on mesure [X heures perdues / Y opportunités ratées] par mois. Sur 12 mois, ça représente [chiffre]. Le ROI s'inverse à partir de [N] RDV signés. Tu veux qu'on fasse le calcul ensemble en 15 minutes ?`,
    why: 'Recadrage classique du Challenger Sale (coût de l\'inaction), chiffres ancrés, CTA orienté discovery pas pitch.',
  },
  {
    id: 'objection-timing',
    title: "Script #10 — Réponse à \"Ce n'est pas le bon moment\"",
    context: 'Le prospect repousse la discussion sans la fermer.',
    responseRate: 'N/A (gestion d\'objection)',
    message: `Compris, et merci d'avoir pris le temps de répondre. Question rapide pour caler la relance au bon moment : qu'est-ce qui rendrait [sujet] prioritaire pour toi ? Un délai (Q2, Q3), un événement (recrutement, nouveau client) ou un résultat à atteindre ? Je te recontacte au bon moment, pas avant.`,
    why: "Respect du non, qualification de la vraie objection (timing vs intérêt), met en place une relance contextuelle légitime.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

function ScriptCard({ script }: { script: Script }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 my-6">
      <h3 className="font-sans font-bold text-text-primary text-base mb-2">{script.title}</h3>
      <div className="flex flex-wrap gap-3 mb-4 text-xs font-sans text-text-muted">
        <span><strong className="text-text-secondary">Contexte&nbsp;:</strong> {script.context}</span>
        <span><strong className="text-text-secondary">Taux de réponse moyen&nbsp;:</strong> {script.responseRate}</span>
      </div>
      <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed bg-bg-primary/40 rounded-lg p-4 border border-white/[0.06] text-text-secondary">
{script.message}
      </pre>
      <p className="mt-3 text-xs font-sans text-text-muted leading-relaxed">
        <strong className="text-text-secondary">Pourquoi ça marche&nbsp;:</strong> {script.why}
      </p>
    </div>
  )
}

export default function ScriptLinkedinProspectionPage() {
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
              <li className="text-text-primary">Scripts LinkedIn de prospection B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Scripts copier-coller
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              10 scripts LinkedIn de prospection B2B (2026)
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              5 messages d&apos;ouverture, 3 relances, 2 réponses à objections. Tous testés en 2026 sur 20+ clients B2B, avec taux de réponse mesurés.
              Ce sont des cadres, pas des templates&nbsp;: adaptez le contenu à chaque prospect.
            </p>
            <AuthorBlock date="2026-05-24" readTime="9 min de lecture" dateLabel="24 mai 2026" />
          </header>

          <TldrBox>
            <p className="tldr">
              <strong>Comment lire cet article&nbsp;:</strong> chaque script donne (1) le contexte d&apos;usage, (2) le taux de réponse moyen observé, (3) le message structuré, (4) pourquoi il fonctionne.
            </p>
            <p className="tldr">
              <strong>Règle d&apos;or&nbsp;:</strong> jamais de copier-coller brut. Adaptez la 2<sup>e</sup> phrase (fait précis tiré du profil) à chaque prospect. Sans personnalisation, le taux de réponse chute sous 5 %.
            </p>
            <p className="tldr">
              <strong>Test du téléphone&nbsp;:</strong> avant chaque envoi, lisez le message à voix haute. S&apos;il sonne comme un commercial qui récite, réécrivez.
            </p>
          </TldrBox>

          <article className="prose-content space-y-12">

            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 5 scripts d&apos;ouverture LinkedIn</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-2">
                Le premier message conditionne tout. Voici 5 cadres selon le type de signal (ou son absence) disponible sur le prospect.
              </p>
              {openingScripts.map((s) => <ScriptCard key={s.id} script={s} />)}
            </section>

            <CtaArticle variant="setting" />

            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 3 scripts de relance LinkedIn</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-2">
                70 à 80 % des réponses arrivent après une relance. Espacez-les de 5 à 7 jours minimum, changez d&apos;angle à chaque fois, fermez proprement à J+21.
              </p>
              {followupScripts.map((s) => <ScriptCard key={s.id} script={s} />)}
            </section>

            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 2 réponses à objections les plus fréquentes</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-2">
                Quand un prospect répond avec une objection, la conversation n&apos;est pas finie&nbsp;— elle commence. Voici comment recadrer sans braquer.
              </p>
              {objectionScripts.map((s) => <ScriptCard key={s.id} script={s} />)}
            </section>

            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 4 règles non négociables d&apos;un script LinkedIn 2026</h2>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-text-primary">5 phrases maximum.</strong> Au-delà, le message est tronqué sur mobile et la lecture chute.
                </li>
                <li>
                  <strong className="text-text-primary">2<sup>e</sup> phrase = fait précis tiré du profil.</strong> Sinon le message est lu comme un template (et il en est un).
                </li>
                <li>
                  <strong className="text-text-primary">Pas de pitch dans le premier DM.</strong> Une question ouverte, pas une proposition.
                </li>
                <li>
                  <strong className="text-text-primary">Test du téléphone obligatoire.</strong> Lecture à voix haute avant envoi. Si ça ne sonne pas naturel, on réécrit.
                </li>
              </ol>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fréquentes</h2>
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
                Pour la méthode complète qui produit ces scripts — détection des signaux, scoring, séquences —, voyez le guide pilier.
              </p>
              <ButtonGlow as="a" href="/ressources/prospection-linkedin-b2b">
                Lire le guide Prospection LinkedIn B2B
              </ButtonGlow>
            </section>

          </article>

          {/* Related */}
          <RelatedArticles
            articles={[
              {
                href: '/ressources/prospection-linkedin-b2b',
                title: 'Prospection LinkedIn B2B 2026',
                readTime: '20 min de lecture',
              },
              {
                href: '/ressources/setting-linkedin-exemples',
                title: 'Exemples de messages setting LinkedIn',
                readTime: '12 min de lecture',
              },
              {
                href: '/ressources/signal-achat-linkedin',
                title: "C'est quoi un signal d'achat LinkedIn ?",
                readTime: '7 min de lecture',
              },
            ]}
          />

        </div>
      </main>
      <Footer />
    </>
  )
}
