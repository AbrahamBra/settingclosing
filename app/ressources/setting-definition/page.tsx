import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "C'est quoi le setting ? Définition simple et exemples",
  description:
    "Le setting, c'est la phase commerciale qui précède le closing : un setter identifie des prospects qualifiés, les contacte, qualifie l'intérêt et passe les RDV au closer. Définition, exemples et différence avec le closing.",
  openGraph: {
    title: "C'est quoi le setting ? Définition simple et exemples | Setting",
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
    title: "C'est quoi le setting ? Définition simple et exemples | Setting",
    description:
      "Définition du setting commercial : rôle du setter, différence avec le closing, méthode signal-based et exemples concrets en B2B.",
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-definition',
  headline: "C'est quoi le setting ? Définition simple et exemples",
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
  dateModified: '2026-05-24',
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
  wordCount: 1400,
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
  alternateName: ['Setting commercial', 'Sales setting'],
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
              C&apos;est quoi le setting&nbsp;?
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le setting, c&apos;est la phase commerciale qui précède le closing. Un setter identifie des prospects qualifiés, les contacte, qualifie l&apos;intérêt et passe les rendez-vous à un closer.
            </p>
            <AuthorBlock date="2026-05-24" readTime="5 min de lecture" dateLabel="24 mai 2026" />
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
                Pour aller plus loin — méthode complète, scripts, exemples chiffrés —, consultez le guide pilier.
              </p>
              <ButtonGlow as="a" href="/ressources/setting-commercial-b2b">
                Lire le guide complet du setting B2B
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
