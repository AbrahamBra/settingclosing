import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: "Scripts de closing B2B : exemples | Setting",
  description:
    "Scripts de closing B2B : cadres pour l'ouverture, la discovery, le pitch et la demande de décision. Avec exemples et erreurs courantes.",
  openGraph: {
    title: "Scripts de closing B2B : exemples | Setting",
    description:
      "Ouverture, discovery, pitch, demande de décision : les scripts de closing B2B avec exemples avant/après et les erreurs qui coûtent des deals.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/script-closing-b2b',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/script-closing-b2b',
  headline: "Scripts et phrases de closing B2B : cadre et exemples",
  description:
    "Les scripts de closing B2B ne sont pas des textes à réciter. Ouverture, discovery, pitch, demande de décision — les cadres avec exemples concrets.",
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
  url: 'https://www.setting.live/ressources/script-closing-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/script-closing-b2b',
  },
}

const faqItems = [
  {
    question: "Un script de closing doit-il être appris par coeur ?",
    answer:
      "Non. Un script de closing est un cadre, pas un texte. Il définit la structure de l'appel, les phases, les objectifs de chaque moment — mais les mots changent à chaque fois selon le contexte du prospect. Un closeur qui récite un texte appris par coeur sonne comme un répondeur. Ce qui crée la confiance, c'est une présence réelle dans la conversation.",
  },
  {
    question: "Quelle est la phrase de closing la plus efficace ?",
    answer:
      "Il n'y a pas une phrase magique. Ce qui fonctionne c'est une demande de décision claire et directe, après avoir établi la valeur. Exemple : 'On a compris que votre problème principal c'est X, que ça vous coûte Y, et que notre approche correspond à ce que vous cherchez. Est-ce qu'on avance ensemble ?' Pas de manipulation, pas de pression — une question directe après une conversation sérieuse.",
  },
  {
    question: "Comment demander une décision sans mettre la pression ?",
    answer:
      "En ne posant pas la question comme une pression. La pression vient du manque de valeur établie, pas de la demande elle-même. Si vous avez conduit une bonne discovery, résumé le problème dans vos mots et montré comment votre offre y répond, demander 'est-ce qu'on continue ensemble ?' est une suite logique de la conversation, pas une mise sous pression.",
  },
  {
    question: "Faut-il utiliser le même script pour tous les prospects ?",
    answer:
      "La structure est la même. Les mots et les exemples changent selon le secteur, le rôle et les problèmes spécifiques du prospect. Un consultant indépendant et un directeur commercial d'une PME de 50 personnes n'ont pas les mêmes enjeux. Le script est un cadre — l'adaptation est dans le contenu.",
  },
  {
    question: "Comment terminer un appel si le prospect ne décide pas ?",
    answer:
      "Avec une prochaine étape concrète et datée. 'Vous me dites que vous devez en parler avec votre associé — on peut prévoir un appel à trois mardi prochain ?' ou 'Si vous avez besoin de 48 heures pour relire l'offre, je vous rappelle jeudi à 14h.' Une sortie sans date de retour est un deal perdu.",
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment structurer un appel de closing B2B',
  description:
    "Les 5 phases d'un appel de closing B2B : ouverture, coût du statu quo, synthèse, demande de décision et gestion des objections.",
  step: [
    {
      '@type': 'HowToStep',
      name: "Ouvrir et cadrer l'appel",
      text: "Posez le format de l'appel : commencez par comprendre la situation du prospect avant tout pitch. Sécurisez 15 à 20 minutes de discovery.",
      position: 1,
    },
    {
      '@type': 'HowToStep',
      name: 'Poser la question du coût du statu quo',
      text: "Faites chiffrer au prospect l'impact de ne rien changer. Cela ancre la valeur du problème avant de parler du prix de votre offre.",
      position: 2,
    },
    {
      '@type': 'HowToStep',
      name: 'Faire la synthèse avant le pitch',
      text: "Résumez ce que le prospect vous a dit dans vos propres mots et obtenez sa confirmation avant de présenter votre offre.",
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Demander une décision',
      text: "Posez une question directe après le pitch : « Est-ce qu'on avance ensemble ? ». Ne laissez pas le prospect partir sans réponse claire.",
      position: 4,
    },
    {
      '@type': 'HowToStep',
      name: "Gérer l'objection « je vais réfléchir »",
      text: "Clarifiez si c'est une vraie hésitation ou un non poli. Demandez ce qui manque pour décider et fixez une prochaine étape datée.",
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Scripts de closing B2B',
      item: 'https://www.setting.live/ressources/script-closing-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ScriptClosingPage() {
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
              <li className="text-text-primary">Scripts de closing B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Scripts et phrases de closing B2B : cadre et exemples
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Un script de closing n&apos;est pas un texte à réciter. C&apos;est un cadre : les phases
              de l&apos;appel, les objectifs de chaque moment, les questions qui font avancer. Les mots
              changent selon le prospect. La structure, non.
            </p>
            <AuthorBlock date="2026-03-18" readTime="10 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Section 1 — Script vs template */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Script vs template : la différence qui compte
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un template est un texte figé : vous changez le prénom, vous envoyez. Un script est
              un cadre : il définit la structure, les questions clés, les transitions — mais les
              mots s&apos;adaptent à chaque appel.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="bg-red-500/5 px-4 py-2 border-b border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold text-text-secondary/60 uppercase tracking-widest">
                    Template — à éviter
                  </p>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                    &ldquo;Bonjour [Prénom], merci d&apos;avoir accepté ce rendez-vous. Je vais vous
                    présenter notre offre qui comprend A, B et C, et je suis sûr que vous allez
                    être intéressé par...&rdquo;
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-accent/20 overflow-hidden">
                <div className="bg-accent/5 px-4 py-2 border-b border-accent/10">
                  <p className="font-sans text-xs font-semibold text-accent uppercase tracking-widest">
                    Script — ce qui fonctionne
                  </p>
                </div>
                <div className="px-4 py-4">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                    &ldquo;Avant qu&apos;on rentre dans les détails de notre offre, je voudrais
                    d&apos;abord comprendre votre situation. Ça nous prend 15-20 minutes. Qu&apos;est-ce
                    qui vous a amené à regarder ce sujet maintenant ?&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le template annonce d&apos;emblée que vous allez parler de vous. Le script ouvre
              une vraie conversation. Sur des offres à 2 000 € ou plus, les gens perçoivent
              immédiatement la différence.
            </p>
          </section>

          {/* Section 2 — Les 5 scripts */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              5 scripts pour les moments clés de l&apos;appel
            </h2>

            <div className="space-y-10">

              {/* Script 1 */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 01 — Ouverture et cadrage de l&apos;appel
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Objectif : poser le format de l&apos;appel et sécuriser le temps pour la discovery
                  avant tout pitch.
                </p>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                  <p className="font-sans text-sm text-text-primary leading-relaxed">
                    &ldquo;Merci d&apos;avoir pris le temps. Avant qu&apos;on rentre dans les
                    détails, je voudrais d&apos;abord comprendre votre situation pour voir si
                    on peut vraiment vous aider. Ça nous prend 15-20 minutes. Ensuite, si ça
                    a du sens, je vous explique comment on travaille. Ça vous convient ?&rdquo;
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3 leading-relaxed">
                  Pourquoi ça fonctionne : vous signifiez que vous n&apos;êtes pas là pour pitcher
                  à tout prix. Ça met le prospect à l&apos;aise et crée une confiance immédiate.
                </p>
              </div>

              {/* Script 2 */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 02 — Question de coût du statu quo
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Objectif : ancrer la valeur du problème dans la tête du prospect avant de parler du prix.
                </p>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                  <p className="font-sans text-sm text-text-primary leading-relaxed">
                    &ldquo;Vous m&apos;avez dit que ça fait 6 mois que vous prospectez sans
                    résultats réguliers. Si rien ne change dans les 6 prochains mois, comment
                    vous estimez l&apos;impact sur votre activité — en CA manqué ou en
                    temps perdu ?&rdquo;
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3 leading-relaxed">
                  Après cette question, le prix de votre offre sera comparé à ce chiffre —
                  pas à zéro.
                </p>
              </div>

              {/* Script 3 */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 03 — Synthèse avant le pitch
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Objectif : montrer que vous avez écouté et créer l&apos;ouverture pour la présentation.
                </p>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                  <p className="font-sans text-sm text-text-primary leading-relaxed">
                    &ldquo;Si je résume ce que vous m&apos;avez dit : votre problème principal
                    c&apos;est [X], vous avez déjà essayé [Y] mais ça n&apos;a pas réglé [Z],
                    et l&apos;enjeu c&apos;est [chiffre ou conséquence]. C&apos;est bien ça ?
                    [attendre confirmation] Voilà pourquoi notre approche correspond à votre
                    situation, et spécifiquement sur [X]...&rdquo;
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3 leading-relaxed">
                  La confirmation du prospect avant le pitch lui fait sentir qu&apos;il va entendre
                  quelque chose de pertinent pour lui — pas un pitch générique.
                </p>
              </div>

              {/* Script 4 */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 04 — Demande de décision
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Objectif : obtenir une réponse directe après le pitch, sans ambiguïté.
                </p>
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                    <div className="px-4 py-2 border-b border-white/[0.06]">
                      <p className="font-sans text-xs text-text-secondary/60 uppercase tracking-widest font-semibold">Éviter</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="font-sans text-sm text-text-secondary italic">
                        &ldquo;Est-ce que vous avez des questions ? Je vous laisse réfléchir et
                        vous me dites...&rdquo;
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-accent/20 overflow-hidden">
                    <div className="bg-accent/5 px-4 py-2 border-b border-accent/10">
                      <p className="font-sans text-xs text-accent uppercase tracking-widest font-semibold">Utiliser</p>
                    </div>
                    <div className="px-4 py-3">
                      <p className="font-sans text-sm text-text-primary italic">
                        &ldquo;On a couvert les points essentiels. Est-ce que ce qu&apos;on a
                        discuté correspond à ce que vous cherchez ? Est-ce qu&apos;on avance
                        ensemble ?&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3 leading-relaxed">
                  Un closeur qui ne demande pas de décision ne close pas — il présente.
                  La question directe n&apos;est pas de la pression si la discovery a bien
                  été conduite.
                </p>
              </div>

              {/* Script 5 */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 05 — Réponse à &ldquo;je vais réfléchir&rdquo;
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                  Objectif : clarifier si c&apos;est une vraie hésitation ou un non poli,
                  sans forcer.
                </p>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                  <p className="font-sans text-sm text-text-primary leading-relaxed">
                    &ldquo;Bien sûr. Pour que je comprenne mieux et que je puisse vous aider :
                    est-ce qu&apos;il y a quelque chose sur notre approche qui n&apos;est pas
                    clair, ou c&apos;est plutôt que vous n&apos;êtes pas encore convaincu que
                    c&apos;est la bonne solution pour votre situation ?&rdquo;
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3 leading-relaxed">
                  Si la réponse est &ldquo;il y a un point flou&rdquo; : traitez-le.
                  Si la réponse est &ldquo;je ne suis pas convaincu&rdquo; : demandez ce
                  qui manque. Si la réponse est vague : le deal est probablement perdu,
                  et il vaut mieux le savoir maintenant.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3 — Erreurs */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 erreurs qui font perdre des deals en fin d&apos;appel
            </h2>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  titre: "Ne pas demander de décision",
                  texte: "Finir l'appel sur 'Je vous envoie un récap et on se reparle' sans demander ce que le prospect a décidé. Résultat : vous attendez un email qui ne viendra pas. La demande de décision directe est le moment que la plupart des closeurs débutants évitent parce qu'ils ont peur du non. Mais un non direct vaut mieux que deux semaines de silence.",
                },
                {
                  num: '02',
                  titre: "Négocier le prix sans contrepartie",
                  texte: "Le prospect dit 'c'est trop cher'. Vous baissez le prix. Vous venez de signaler que votre prix initial était arbitraire. Si vous faites une remise, attachez-la à quelque chose : paiement en avance, engagement plus long, démarrage immédiat. La remise sans contrepartie détruit la valeur perçue de votre offre.",
                },
                {
                  num: '03',
                  titre: "Terminer sans prochaine étape datée",
                  texte: "'Je vous recontacte dans quelques jours' n'est pas une prochaine étape. 'Je vous appelle jeudi à 14h pour avoir votre retour' en est une. Une conversation sans prochaine étape concrète et acceptée est un deal qui disparaît dans le silence.",
                },
              ].map(({ num, titre, texte }) => (
                <div key={num} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Erreur {num} — {titre}
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
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
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure et questions' },
                { href: '/ressources/gestion-objections-b2b', label: 'Gérer les objections en vente B2B' },
                { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
                { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn : exemples et cadre' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
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
              Vous voulez travailler vos scripts d&apos;appel ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour revoir la structure de vos appels de vente et identifier
              ce qui bloque vos closes. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          <div className="mt-8 text-center">
            <a href="/ressources" className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors">
              ← Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
