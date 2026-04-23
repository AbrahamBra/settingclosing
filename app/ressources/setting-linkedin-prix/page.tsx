import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Setting LinkedIn : prix, tarifs et co\u00fbts r\u00e9els en 2026 | Setting',
  description:
    "Combien co\u00fbte le setting LinkedIn en 2026 ? Comparatif interne vs agence vs freelance avec co\u00fbts r\u00e9els, ROI attendu et pi\u00e8ges \u00e0 \u00e9viter.",
  openGraph: {
    title: 'Setting LinkedIn : prix, tarifs et co\u00fbts r\u00e9els en 2026 | Setting',
    description:
      "Combien co\u00fbte le setting LinkedIn en 2026 ? Comparatif interne vs agence vs freelance avec co\u00fbts r\u00e9els, ROI attendu et pi\u00e8ges \u00e0 \u00e9viter.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn : prix, tarifs et co\u00fbts r\u00e9els en 2026 | Setting',
    description:
      "Combien co\u00fbte le setting LinkedIn en 2026 ? Comparatif interne vs agence vs freelance avec co\u00fbts r\u00e9els, ROI attendu et pi\u00e8ges \u00e0 \u00e9viter.",
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-linkedin-prix',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-linkedin-prix',
      'x-default': 'https://www.setting.live/ressources/setting-linkedin-prix',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-linkedin-prix#article',
  headline: 'Setting LinkedIn : prix, tarifs et co\u00fbts r\u00e9els en 2026',
  description:
    "Combien co\u00fbte vraiment le setting LinkedIn en 2026 ? D\u00e9composition ligne par ligne des co\u00fbts d'un SDR interne, d'une agence externalis\u00e9e et d'un freelance. ROI attendu et pi\u00e8ges \u00e0 \u00e9viter.",
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
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-linkedin-prix',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-linkedin-prix',
  },
  image: 'https://www.setting.live/ressources/setting-linkedin-prix/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 2500,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const faqItems = [
  {
    question: 'Quel budget minimum pour d\u00e9marrer en setting LinkedIn ?',
    answer:
      "En interne, comptez 3 500 \u20ac le premier mois (pro rata SDR + outils + management), et tant que le setter n'est pas productif. En externalis\u00e9, l'entr\u00e9e de gamme s\u00e9rieuse d\u00e9marre \u00e0 1 500 \u20ac/mois tout compris. En dessous, c'est soit de l'automatisation d\u00e9guis\u00e9e, soit un setter partag\u00e9 entre 10 clients. Les premiers RDV tombent en 5 \u00e0 7 jours sur un programme bien cadr\u00e9.",
  },
  {
    question: 'Agence ou freelance : lequel choisir ?',
    answer:
      "Le freelance co\u00fbte moins cher \u00e0 la journ\u00e9e (350-600 \u20ac) mais vous portez le brief, le process et la continuit\u00e9. Si le freelance tombe malade ou change de client, vous repartez de z\u00e9ro. L'agence co\u00fbte 15-25 % plus cher mais encadre la m\u00e9thode, garantit la continuit\u00e9 et absorbe les al\u00e9as. R\u00e8gle simple : freelance si vous avez d\u00e9j\u00e0 un playbook interne, agence si vous partez de z\u00e9ro ou si vous voulez scaler vite.",
  },
  {
    question: "Y a-t-il des frais cach\u00e9s dans les forfaits d'agence ?",
    answer:
      "Les frais cach\u00e9s typiques : setup fee (500-1 500 \u20ac la premi\u00e8re fois), outils non inclus (Sales Navigator \u00e0 99 \u20ac/mois souvent \u00e0 votre charge), frais de brief initial factur\u00e9s \u00e0 part, overage quand le volume de messages d\u00e9passe le forfait, reporting premium en option. Demandez toujours un devis tout inclus et v\u00e9rifiez ligne par ligne ce qui est dans le forfait. Chez Setting, tout est inclus dans le prix affich\u00e9.",
  },
  {
    question: 'Combien de temps avant le premier RDV ?',
    answer:
      "Les premiers RDV arrivent entre J+5 et J+10 sur un programme bien cadr\u00e9, \u00e0 condition que votre offre soit valid\u00e9e et votre ICP d\u00e9fini. Le volume se stabilise en 4 \u00e0 6 semaines, le temps de calibrer les signaux et d'affiner les messages. Une agence qui vous promet 10 RDV en premi\u00e8re semaine ment ou automatise.",
  },
  {
    question: 'Peut-on payer au r\u00e9sultat ?',
    answer:
      "Oui, mais le mod\u00e8le a des limites. Facturation au RDV qualifi\u00e9 : 80-180 \u20ac par RDV selon le ticket moyen. Le probl\u00e8me : l'agence est incit\u00e9e \u00e0 envoyer beaucoup de RDV, pas forc\u00e9ment les bons. Vous passez du temps en discovery calls qui ne m\u00e8nent nulle part. Le pay-at-results marche quand le crit\u00e8re de qualification est tr\u00e8s strict et valid\u00e9 par les deux parties. Sinon, le forfait mensuel aligne mieux les int\u00e9r\u00eats.",
  },
  {
    question: "Quand le setting LinkedIn n'est pas rentable ?",
    answer:
      "Trois cas o\u00f9 a ne vaut pas le coup : ticket moyen inf\u00e9rieur \u00e0 500 \u20ac (le co\u00fbt d'acquisition d\u00e9passe la marge), ICP tr\u00e8s large sans segmentation claire (pas de signaux exploitables), offre non valid\u00e9e (taux de conversion en appel sous les 15 %). Dans ce dernier cas, travaillez d'abord l'offre avant de scaler la prospection. Sinon vous financez des RDV qui ne closent pas.",
  },
  {
    question: 'Vos tarifs incluent-ils les outils ?',
    answer:
      "Chez Setting, oui. Sales Navigator, Reactin, CRM, base de connaissance, coaching : tout est dans le forfait mensuel. Pas de setup fee, pas de surprise. Chez certaines agences, les outils sont factur\u00e9s \u00e0 part (+200 \u00e0 300 \u20ac/mois). V\u00e9rifiez toujours avant de signer. Un forfait \u00e0 1 200 \u20ac hors outils revient plus cher qu'un forfait \u00e0 1 500 \u20ac tout inclus.",
  },
  {
    question: 'Quelle diff\u00e9rence entre setting LinkedIn et SDR externalis\u00e9 classique ?',
    answer:
      "Un SDR externalis\u00e9 classique fait du cold outreach : listes achet\u00e9es, emails en masse, s\u00e9quences automatis\u00e9es, 500-1 000 contacts par semaine, 2-5 % de r\u00e9ponse. Le setting LinkedIn d\u00e9tecte d'abord un signal d'achat, puis envoie un message humain, 30-60 par semaine, 15-35 % de r\u00e9ponse. Le SDR classique co\u00fbte moins cher par contact. Le setting LinkedIn co\u00fbte 3 \u00e0 4 fois moins cher par RDV qualifi\u00e9.",
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
      name: 'Setting LinkedIn prix',
      item: 'https://www.setting.live/ressources/setting-linkedin-prix',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingLinkedInPrixPage() {
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
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Setting LinkedIn prix</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Comparatif chiffr&eacute;
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting LinkedIn : prix, tarifs et co&ucirc;ts r&eacute;els en 2026
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6" data-speakable="true">
              La question du prix du setting LinkedIn revient tout le temps. Et la plupart
              des r&eacute;ponses sont fausses. Pas parce qu&apos;elles mentent sur les tarifs
              affich&eacute;s, mais parce qu&apos;elles oublient tout le reste : ramp-up,
              turnover, management, temps de brief. Cet article pose les vrais chiffres sur
              la table et compare les trois options : interne, agence, freelance.
            </p>
            <AuthorBlock date="2026-04-23" readTime="15 min de lecture" dateLabel="23 avril 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              Trois mod&egrave;les, trois logiques de co&ucirc;t.
              <strong className="text-text-primary"> En interne</strong>, un SDR charg&eacute; co&ucirc;te
              entre 45&nbsp;000 et 70&nbsp;000&nbsp;&euro; par an, auxquels s&apos;ajoutent 2-3 mois
              de ramp-up improductif, 200-300&nbsp;&euro;/mois d&apos;outils et 15-20&nbsp;% de management.
              <strong className="text-text-primary"> En agence</strong>, un programme complet va de
              1&nbsp;500 &agrave; 4&nbsp;000&nbsp;&euro;/mois outils inclus, productif d&egrave;s la
              semaine 1. <strong className="text-text-primary">En freelance</strong>, comptez
              350-600&nbsp;&euro;/jour, soit 1&nbsp;400 &agrave; 4&nbsp;800&nbsp;&euro;/mois selon
              l&apos;engagement. Recommandation&nbsp;: agence pour scaler sans g&eacute;rer, freelance
              si vous avez d&eacute;j&agrave; un playbook, interne seulement &agrave; partir de 3
              setters en portefeuille.
            </p>
          </TldrBox>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* Intro */}
            <section id="intro" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi la question du prix est pi&eacute;g&eacute;e
              </h2>
              <p className="mb-4">
                Demander &laquo;&nbsp;combien co&ucirc;te le setting LinkedIn&nbsp;?&raquo; revient
                &agrave; demander combien co&ucirc;te une voiture. a d&eacute;pend. Mais surtout,
                a d&eacute;pend de ce qu&apos;on d&eacute;cide d&apos;inclure dans le calcul.
                Le pi&egrave;ge classique&nbsp;: comparer un salaire brut SDR (40&nbsp;000&nbsp;&euro;)
                avec un forfait agence (2&nbsp;500&nbsp;&euro;/mois, soit 30&nbsp;000&nbsp;&euro;/an).
                Le salaire para&icirc;t moins cher. En r&eacute;alit&eacute;, il est 40 &agrave;
                60&nbsp;% plus cher une fois tout compt&eacute;.
              </p>
              <p className="mb-4">
                Le co&ucirc;t r&eacute;el d&apos;un setting LinkedIn, c&apos;est la somme du
                co&ucirc;t affich&eacute;, du temps humain consomm&eacute; (brief, debrief,
                qualif interne), du ramp-up improductif, du risque d&apos;&eacute;chec
                (turnover, mauvais casting) et des outils associ&eacute;s. Les trois mod&egrave;les
                n&apos;ont pas la m&ecirc;me distribution de ces co&ucirc;ts.
              </p>
              <p className="mb-4">
                Dans les sections qui suivent, on d&eacute;compose chaque option ligne par ligne,
                avec des fourchettes issues du terrain en 2026. Pas de moyennes floues&nbsp;:
                des chiffres concrets, avec un exemple de calcul complet pour l&apos;interne
                (le plus mal mesur&eacute;). Un tableau comparatif en fin de parcours. Et une
                grille de d&eacute;cision selon votre situation.
              </p>
              <p>
                Pour le contexte plus large de la m&eacute;thode, le{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">guide
                pilier du setting LinkedIn</a> d&eacute;taille la partie op&eacute;rationnelle.
                Ici, on parle argent.
              </p>
            </section>

            {/* 3 mod\u00e8les */}
            <section id="modeles" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 3 mod&egrave;les de co&ucirc;t du setting LinkedIn
              </h2>
              <p className="mb-6">
                Trois options existent pour faire du setting LinkedIn en 2026. Chacune a sa
                logique de co&ucirc;t et son profil de risque.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    label: 'Interne',
                    price: '4 500-7 000 \u20ac/mois',
                    sub: 'co\u00fbt charg\u00e9 r\u00e9el',
                  },
                  {
                    label: 'Agence',
                    price: '1 500-4 000 \u20ac/mois',
                    sub: 'tout inclus',
                  },
                  {
                    label: 'Freelance',
                    price: '1 400-4 800 \u20ac/mois',
                    sub: 'selon volume',
                  },
                ].map(({ label, price, sub }) => (
                  <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-white/[0.06]">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">{label}</p>
                    <p className="font-serif text-xl text-text-primary mb-1">{price}</p>
                    <p className="font-sans text-xs text-text-secondary">{sub}</p>
                  </div>
                ))}
              </div>

              <p className="mb-4">
                L&apos;interne porte le risque RH et le ramp-up, mais garde la connaissance
                m&eacute;tier en interne. L&apos;agence porte le risque op&eacute;rationnel et
                livre un service calibr&eacute;, avec une perte de contr&ocirc;le partielle.
                Le freelance offre le meilleur rapport expertise/prix si vous savez cadrer,
                mais la continuit&eacute; d&eacute;pend d&apos;une seule personne.
              </p>
              <p>
                Aucun des trois n&apos;est &laquo;&nbsp;mieux&nbsp;&raquo; dans l&apos;absolu.
                Le bon choix d&eacute;pend de votre stade, de votre niveau de maturit&eacute;
                commerciale et de votre tol&eacute;rance au risque. On d&eacute;coupe chaque
                mod&egrave;le en d&eacute;tail maintenant.
              </p>
            </section>

            {/* Interne */}
            <section id="interne" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Co&ucirc;t r&eacute;el d&apos;un setting LinkedIn en interne
              </h2>
              <p className="mb-4">
                Recruter un SDR interne para&icirc;t souvent le chemin &laquo;&nbsp;&eacute;vident&nbsp;&raquo;.
                Il est dans l&apos;&eacute;quipe, il conna&icirc;t le produit, on contr&ocirc;le tout.
                Sur le papier. Dans les faits, c&apos;est le mod&egrave;le le plus mal mesur&eacute;
                parce qu&apos;on oublie syst&eacute;matiquement la moiti&eacute; des co&ucirc;ts.
                Voici la d&eacute;composition ligne par ligne, sur la base d&apos;un SDR
                junior-interm&eacute;diaire en CDI en France.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 mb-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  D&eacute;composition du co&ucirc;t SDR interne
                </p>
                <ul className="space-y-4">
                  <li>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">
                      Salaire charg&eacute; : 45&nbsp;000 &agrave; 70&nbsp;000&nbsp;&euro;/an
                    </p>
                    <p className="font-sans text-sm">
                      Salaire brut 32-48&nbsp;k&euro; + charges patronales 42&nbsp;% + variable
                      3-6&nbsp;k&euro; + mutuelle/tickets-resto/&eacute;quipement. Un SDR
                      d&eacute;butant &agrave; Paris en 2026 ne descend pas sous 45&nbsp;k&euro;
                      charg&eacute; sans concession sur la qualit&eacute; du profil.
                    </p>
                  </li>
                  <li>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">
                      Ramp-up : 2 &agrave; 3 mois improductifs
                    </p>
                    <p className="font-sans text-sm">
                      Le temps d&apos;apprendre le produit, l&apos;ICP, les signaux, les
                      objections. Un SDR atteint 100&nbsp;% de sa productivit&eacute; cible
                      apr&egrave;s 10-14 semaines. Sur un salaire charg&eacute; mensuel de
                      4&nbsp;500&nbsp;&euro;, a fait 9&nbsp;000 &agrave; 13&nbsp;500&nbsp;&euro;
                      de salaire sans RDV correspondants.
                    </p>
                  </li>
                  <li>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">
                      Management : 3 &agrave; 5h/semaine manager
                    </p>
                    <p className="font-sans text-sm">
                      Revue de messages, coaching, 1:1, debrief des RDV. Sur un TJM manager
                      &agrave; 500&nbsp;&euro;, a repr&eacute;sente 700 &agrave; 1&nbsp;100&nbsp;&euro;
                      de temps manager par mois. Ce co&ucirc;t est r&eacute;el, m&ecirc;me s&apos;il
                      n&apos;appara&icirc;t pas sur une fiche de paie.
                    </p>
                  </li>
                  <li>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">
                      Turnover : 18 mois de dur&eacute;e moyenne
                    </p>
                    <p className="font-sans text-sm">
                      Les SDR restent en moyenne 18 mois sur le poste (source : &eacute;tudes
                      march&eacute; fran&ccedil;ais 2025). Chaque d&eacute;part co&ucirc;te
                      entre 12&nbsp;000 et 20&nbsp;000&nbsp;&euro; de remplacement
                      (recrutement + ramp-up du successeur). Amorti sur 18 mois, a fait
                      700 &agrave; 1&nbsp;100&nbsp;&euro; par mois de provision.
                    </p>
                  </li>
                  <li>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">
                      Outils : 200 &agrave; 300&nbsp;&euro;/mois
                    </p>
                    <p className="font-sans text-sm">
                      Sales Navigator (99&nbsp;&euro;), Reactin ou &eacute;quivalent (49&nbsp;&euro;),
                      CRM/outil de s&eacute;quences (50-100&nbsp;&euro;), Claude ou outil d&apos;aide
                      &agrave; la r&eacute;daction (20&nbsp;&euro;). Rentabilis&eacute;s d&egrave;s
                      le premier RDV sign&eacute;, mais r&eacute;els dans le calcul.
                    </p>
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                Prenons un cas concret. SDR &agrave; 55&nbsp;000&nbsp;&euro; charg&eacute;
                par an, soit 4&nbsp;580&nbsp;&euro;/mois. On ajoute 900&nbsp;&euro; de management,
                900&nbsp;&euro; de provision turnover, 250&nbsp;&euro; d&apos;outils. Total&nbsp;:
                <strong className="text-text-primary"> 6&nbsp;630&nbsp;&euro;/mois en r&eacute;gime
                de croisi&egrave;re</strong>. Sur les 3 premiers mois, ajoutez l&apos;improductivit&eacute;
                du ramp-up&nbsp;: le co&ucirc;t r&eacute;el par RDV tend vers l&apos;infini.
              </p>
              <p className="mb-4">
                En croisi&egrave;re, un SDR interne correctement managnt livre 10 &agrave; 12 RDV
                qualifi&eacute;s par mois. Soit un co&ucirc;t par RDV qualifi&eacute; compris
                entre <strong className="text-text-primary">550 et 660&nbsp;&euro;</strong>.
                &Agrave; comparer avec 120 &agrave; 250&nbsp;&euro; par RDV sur un programme
                externalis&eacute;.
              </p>
              <p>
                L&apos;interne devient pertinent &agrave; partir de 3 setters en portefeuille&nbsp;:
                le management absolu reste stable, les outils se mutualisent, et vous avez la masse
                critique pour absorber un d&eacute;part. En dessous, vous payez le prix fort pour un
                r&eacute;sultat &eacute;quivalent. Le d&eacute;bat interne vs externalis&eacute; est
                d&eacute;taill&eacute; dans l&apos;article{' '}
                <a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">externaliser
                sa prospection LinkedIn</a>.
              </p>
            </section>

            {/* Agence */}
            <section id="agence" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Prix d&apos;une agence de setting LinkedIn externalis&eacute;e
              </h2>
              <p className="mb-4">
                Le march&eacute; des agences de setting LinkedIn a mri en 2026. Trois
                fourchettes se d&eacute;gagent, selon le p&eacute;rim&egrave;tre et la
                qualit&eacute; d&apos;ex&eacute;cution.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    range: '1 500-2 200 \u20ac/mois',
                    label: 'Entr\u00e9e',
                    desc: 'Setter partag\u00e9, 20-30 messages/sem, reporting basique, outils g\u00e9n\u00e9ralement \u00e0 votre charge.',
                  },
                  {
                    range: '2 200-3 200 \u20ac/mois',
                    label: 'Standard',
                    desc: 'Setter d\u00e9di\u00e9, 40-50 messages/sem, base de connaissance, coaching closing, outils inclus.',
                  },
                  {
                    range: '3 200-4 000 \u20ac/mois',
                    label: 'Premium',
                    desc: 'Setter senior, 50-70 messages/sem, playbook sur-mesure, hand-off closing pilot\u00e9, reporting hebdo.',
                  },
                ].map(({ range, label, desc }) => (
                  <div key={label} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">{label}</p>
                    <p className="font-serif text-base text-text-primary mb-2">{range}</p>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="mb-4">
                Ce qui doit &ecirc;tre inclus dans un forfait agence s&eacute;rieux&nbsp;: un
                setter d&eacute;di&eacute; (pas un bot, pas un stagiaire tournant), les outils
                (Sales Navigator, d&eacute;tection de signaux, CRM), la construction de la base
                de connaissance initiale, le coaching closing pour que les RDV atterrissent bien,
                un reporting hebdo avec les KPIs (taux de r&eacute;ponse, RDV, show-up).
                Si l&apos;un de ces &eacute;l&eacute;ments est factur&eacute; en sus, c&apos;est
                un signal.
              </p>
              <p className="mb-4">
                Sur l&apos;engagement, deux mod&egrave;les coexistent. Le flexible mensuel (sans
                engagement) arrive souvent avec une surcote de 15-20&nbsp;% par rapport &agrave;
                l&apos;engagement 6 ou 12 mois. C&apos;est justifi&eacute;&nbsp;: l&apos;agence
                absorbe le risque de d&eacute;sengagement. Si vous &ecirc;tes s&ucirc;r de votre
                offre, l&apos;engagement paie. Si vous testez, le flexible vaut la surcote.
              </p>
              <p className="mb-4">
                Sur la facturation, le forfait mensuel reste la norme. Certaines agences
                proposent de la facturation au RDV (80-180&nbsp;&euro; par RDV qualifi&eacute;),
                mais a cr&eacute;e un probl&egrave;me d&apos;alignement&nbsp;: l&apos;agence
                est pouss&eacute;e &agrave; envoyer du volume, pas de la qualit&eacute;. Le
                forfait mensuel, avec un nombre de RDV attendu clairement d&eacute;fini, aligne
                mieux les int&eacute;r&ecirc;ts.
              </p>
              <p>
                <strong className="text-text-primary">Red flag &agrave; retenir</strong>&nbsp;:
                les agences qui facturent au lead envoy&eacute; ou au message envoy&eacute; ne
                font pas du setting. Elles font de l&apos;automatisation factur&eacute;e au volume.
                Le vrai setting se facture au RDV ou au forfait, jamais au message. Pour un
                comparatif d&eacute;taill&eacute; des acteurs du march&eacute;, voir l&apos;article{' '}
                <a href="/ressources/agence-prospection-linkedin" className="text-accent hover:underline transition-colors">agence
                de prospection LinkedIn</a>.
              </p>
            </section>

            {/* Freelance */}
            <section id="freelance" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Tarif d&apos;un freelance setting LinkedIn
              </h2>
              <p className="mb-4">
                Le march&eacute; freelance a explos&eacute; depuis 2023. R&eacute;sultat&nbsp;:
                une fourchette tr&egrave;s large, o&ugrave; le prix seul ne dit rien de la
                qualit&eacute;. Voici les rep&egrave;res 2026.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 mb-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  TJM freelance setting LinkedIn
                </p>
                <ul className="space-y-3">
                  <li className="flex justify-between gap-4 text-sm">
                    <span className="text-text-primary font-medium">D&eacute;butant (&lt; 1 an)</span>
                    <span className="text-accent font-semibold">250-350&nbsp;&euro;/jour</span>
                  </li>
                  <li className="flex justify-between gap-4 text-sm">
                    <span className="text-text-primary font-medium">Interm&eacute;diaire (1-3 ans)</span>
                    <span className="text-accent font-semibold">350-500&nbsp;&euro;/jour</span>
                  </li>
                  <li className="flex justify-between gap-4 text-sm">
                    <span className="text-text-primary font-medium">Senior ou spécialisé niche</span>
                    <span className="text-accent font-semibold">500-600&nbsp;&euro;/jour</span>
                  </li>
                  <li className="flex justify-between gap-4 text-sm">
                    <span className="text-text-primary font-medium">Expert top 10&nbsp;% (secteur pointu)</span>
                    <span className="text-accent font-semibold">600-900&nbsp;&euro;/jour</span>
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                L&apos;engagement typique se situe entre 4 et 8 jours par mois. Moins de 4 jours,
                le freelance perd la continuit&eacute; dans les conversations. Plus de 8, vous
                payez une pseudo-salari&eacute;e sans en avoir les avantages. Le forfait mensuel
                &eacute;quivalent s&apos;&eacute;tend donc de <strong className="text-text-primary">
                1&nbsp;400 &agrave; 4&nbsp;800&nbsp;&euro;/mois</strong>, outils non inclus la
                plupart du temps.
              </p>
              <p className="mb-4">
                Les vrais avantages du freelance&nbsp;: flexibilit&eacute; (on peut arr&ecirc;ter
                d&apos;un mois sur l&apos;autre), expertise sp&eacute;cialis&eacute;e possible
                (un freelance qui ne fait que du setting LinkedIn dans le SaaS cyber aura plus
                d&apos;angle qu&apos;une agence g&eacute;n&eacute;raliste), co&ucirc;t souvent
                inf&eacute;rieur de 15-25&nbsp;% &agrave; une agence.
              </p>
              <p className="mb-4">
                Les pi&egrave;ges&nbsp;: la charge mentale du brief reste chez vous (il faut
                documenter l&apos;ICP, les signaux, les objections, la base de connaissance), la
                disponibilit&eacute; d&eacute;pend d&apos;une seule personne (cong&eacute;s,
                maladie, autres clients prioritaires), la continuit&eacute; se casse si le
                freelance part. Et, honn&ecirc;tement, trouver un freelance vraiment bon demande
                du temps et un r&eacute;seau.
              </p>
              <p>
                Si vous avez d&eacute;j&agrave; fait du setting en interne et que vous cherchez
                un ex&eacute;cutant pour d&eacute;l&eacute;guer une brique, le freelance est le
                meilleur rapport qualit&eacute;/prix. Si vous partez de z&eacute;ro, l&apos;agence
                encadre davantage. Plus de contexte sur le r&ocirc;le lui-m&ecirc;me dans{' '}
                <a href="/ressources/setter-b2b" className="text-accent hover:underline transition-colors">setter
                B2B : le m&eacute;tier</a>.
              </p>
            </section>

            {/* Tableau comparatif */}
            <section id="comparatif" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Tableau comparatif
              </h2>
              <p className="mb-6">
                R&eacute;capitulatif des trois options sur les dimensions qui comptent vraiment
                quand on signe un contrat.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">Option</th>
                      <th className="text-left font-semibold text-accent py-3 pr-4">Co&ucirc;t initial</th>
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">Co&ucirc;t r&eacute;current</th>
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">D&eacute;lai ROI</th>
                      <th className="text-left font-semibold text-text-primary py-3">Risques</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">Interne</td>
                      <td className="py-3 pr-4 text-accent">8-15 k&euro; (recrutement + ramp-up)</td>
                      <td className="py-3 pr-4">4&nbsp;500-7&nbsp;000&nbsp;&euro;/mois charg&eacute;</td>
                      <td className="py-3 pr-4">5-8 mois</td>
                      <td className="py-3">Turnover 18 mois, management, ramp-up</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">Agence</td>
                      <td className="py-3 pr-4 text-accent">0-1&nbsp;500&nbsp;&euro; (setup si non inclus)</td>
                      <td className="py-3 pr-4">1&nbsp;500-4&nbsp;000&nbsp;&euro;/mois tout inclus</td>
                      <td className="py-3 pr-4">2-3 mois</td>
                      <td className="py-3">Perte partielle de contr&ocirc;le, qualit&eacute; variable</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-text-primary">Freelance</td>
                      <td className="py-3 pr-4 text-accent">0-500&nbsp;&euro; (brief initial)</td>
                      <td className="py-3 pr-4">1&nbsp;400-4&nbsp;800&nbsp;&euro;/mois hors outils</td>
                      <td className="py-3 pr-4">2-4 mois</td>
                      <td className="py-3">Continuit&eacute;, disponibilit&eacute;, charge de brief</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Le co&ucirc;t par RDV qualifi&eacute; se situe autour de 550-660&nbsp;&euro; en
                interne, 150-300&nbsp;&euro; en agence, 120-350&nbsp;&euro; en freelance selon le
                volume mensuel. L&apos;interne reste le plus cher par unit&eacute; produite tant
                qu&apos;on est sous les 3 setters. Pour comparer aussi avec d&apos;autres canaux,
                l&apos;article{' '}
                <a href="/ressources/chiffres-prospection-b2b-2026" className="text-accent hover:underline transition-colors">chiffres
                prospection B2B 2026</a> donne les ordres de grandeur.
              </p>
            </section>

            {/* Mid-article CTA */}
            <CtaArticle variant="setting" />

            {/* Co\u00fbt cach\u00e9 */}
            <section id="cout-cache" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Co&ucirc;t cach&eacute; : le temps de l&apos;&eacute;quipe
              </h2>
              <p className="mb-4">
                Quel que soit le mod&egrave;le choisi, un co&ucirc;t revient toujours&nbsp;: le
                temps de votre propre &eacute;quipe. Et c&apos;est celui qu&apos;on oublie
                syst&eacute;matiquement quand on chiffre un ROI.
              </p>
              <p className="mb-4">
                Le brief initial consomme 4 &agrave; 8 heures de votre temps. ICP, cas clients,
                objections typiques, messages &agrave; proscrire, ton de voix, historique des
                offres qui ont march&eacute;. Si vous bclez le brief, vous payez en qualit&eacute;
                de RDV pendant 6 mois. Si vous le faites bien, c&apos;est une journ&eacute;e qui
                ne reviendra pas.
              </p>
              <p className="mb-4">
                La qualification interne, ensuite. Chaque RDV pris n&eacute;cessite 10-15 minutes
                de votre part pour v&eacute;rifier que le prospect est dans la cible et pr&eacute;parer
                l&apos;appel. Sur 12 RDV/mois, a fait 2-3 heures. Petit &agrave; premi&egrave;re
                vue, r&eacute;el sur l&apos;ann&eacute;e.
              </p>
              <p className="mb-4">
                Le debrief avec le closeur ou le setter, enfin. 30 minutes par semaine pour ajuster
                la direction, remonter les objections nouvelles, valider les signaux qui performent.
                2 heures par mois, mais c&apos;est cette boucle qui fait la diff&eacute;rence entre
                un programme qui stagne et un programme qui s&apos;am&eacute;liore.
              </p>
              <p>
                Total&nbsp;: 6 &agrave; 10 heures par mois de temps d&eacute;cideur, d&egrave;s
                le mois 2. Sur un TJM d&eacute;cideur &agrave; 800-1&nbsp;000&nbsp;&euro;, a
                repr&eacute;sente 600 &agrave; 1&nbsp;200&nbsp;&euro; de co&ucirc;t cach&eacute;.
                C&apos;est souvent l&agrave; que l&apos;interne perd encore plus, parce que le
                manager passe largement plus de temps qu&apos;en externalis&eacute;.
              </p>
            </section>

            {/* Quelle option choisir */}
            <section id="choix" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quelle option choisir selon votre situation
              </h2>
              <p className="mb-6">
                Trois profils types, trois recommandations. Ce n&apos;est pas une r&egrave;gle
                absolue, mais a couvre 80&nbsp;% des cas qu&apos;on rencontre.
              </p>

              <div className="space-y-4">
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    TPE d&eacute;butante (CA &lt; 500 k&euro;)
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                    Commencez par faire le setting vous-m&ecirc;me
                  </p>
                  <p className="font-sans text-sm">
                    Tant que votre offre n&apos;est pas valid&eacute;e avec 10-15 clients payants,
                    d&eacute;l&eacute;guer est pr&eacute;matur&eacute;. Vous apprendrez les objections,
                    les angles qui marchent, les signaux qui comptent pour votre march&eacute;.
                    Apr&egrave;s, d&eacute;l&eacute;guez en sachant exactement ce que vous attendez.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    PME qui scale (CA 500 k&euro; &ndash; 5 M&euro;)
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                    Agence externalis&eacute;e ou freelance senior
                  </p>
                  <p className="font-sans text-sm">
                    Votre offre est valid&eacute;e, vous avez besoin de volume r&eacute;gulier.
                    Recruter en interne est encore trop risqu&eacute; (un seul SDR, pas de filet).
                    L&apos;agence d&eacute;marre en 5-7 jours, le freelance senior aussi si votre
                    brief est propre. Choisissez selon votre capacit&eacute; &agrave; cadrer le
                    travail&nbsp;: brief clair &rarr; freelance, brief &agrave; construire &rarr; agence.
                  </p>
                </div>

                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Scale-up industrielle (CA &gt; 5 M&euro;, plusieurs segments)
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                    Combinaison interne + agence, rarement freelance
                  </p>
                  <p className="font-sans text-sm">
                    &Agrave; partir de 3 setters en portefeuille, l&apos;interne redevient rentable.
                    Le mod&egrave;le qui marche&nbsp;: interne pour le segment strat&eacute;gique
                    et r&eacute;current, agence pour les nouveaux segments en test ou les pics de
                    volume. Le freelance devient un risque op&eacute;rationnel &agrave; cette taille.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                Si vous voulez creuser la question du choix entre agence et freelance, le
                d&eacute;cision tree compl&egrave;te est sur la page{' '}
                <a href="/ressources/agence-prospection-vs-setting-linkedin" className="text-accent hover:underline transition-colors">agence
                de prospection vs setting LinkedIn</a>. Et la grille tarifaire d&eacute;taill&eacute;e
                de notre programme externalis&eacute; est sur la page{' '}
                <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs
                Setting</a>.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes sur le prix du setting LinkedIn
              </h2>

              <div className="divide-y divide-white/[0.06]">
                {faqItems.map(({ question, answer }, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-sans font-semibold text-text-primary text-sm pr-4">{question}</h3>
                      <span className="text-accent shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="faq-answer font-sans text-text-secondary text-sm leading-relaxed mt-3">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Pour aller plus loin */}
            <section className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pour aller plus loin
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide pilier' },
                  { href: '/ressources/setting-linkedin-exemples', label: 'Setting LinkedIn : 5 exemples concrets' },
                  { href: '/ressources/setting-linkedin-ia', label: 'Setting LinkedIn et IA : la m\u00e9thode hybride' },
                  { href: '/externaliser-prospection-linkedin', label: 'Externaliser sa prospection LinkedIn' },
                  { href: '/tarifs', label: 'Nos tarifs d\u00e9taill\u00e9s' },
                  { href: '/outils/clone-style-linkedin', label: 'Clone de style LinkedIn (outil gratuit)' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                  >
                    <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                      {label}
                    </p>
                    <span className="font-sans text-xs text-text-secondary">&rarr; Lire</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-bg-secondary rounded-2xl p-8 md:p-10 text-center border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Pr&ecirc;t &agrave; comparer sur devis ?
              </p>
              <h2 className="font-serif text-h2 text-text-primary mb-4">
                Voyez nos tarifs, ligne par ligne
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
                Tout inclus&nbsp;: setter d&eacute;di&eacute;, outils, base de connaissance,
                coaching closing, reporting hebdo. Pas de setup fee, pas de frais cach&eacute;s.
                Premiers RDV en 5 jours.
              </p>
              <ButtonGlow href="/tarifs">
                Voir nos tarifs
              </ButtonGlow>
            </section>

          </article>

          {/* Related articles */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : le guide complet (d\u00e9finition, m\u00e9thode, exemples)', readTime: '25 min' },
              { href: '/externaliser-prospection-linkedin', title: 'Externaliser sa prospection LinkedIn : quand et comment', readTime: '12 min' },
              { href: '/tarifs', title: 'Nos tarifs Setting : grille d\u00e9taill\u00e9e', readTime: '5 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
