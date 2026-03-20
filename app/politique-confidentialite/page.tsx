import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | ChallengersLab',
  description:
    'Politique de confidentialité de setting.live : collecte, utilisation et protection de vos données personnelles.',
  alternates: {
    canonical: 'https://setting.live/politique-confidentialite',
  },
  robots: { index: true, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Politique de confidentialité</li>
            </ol>
          </nav>

          <header className="mb-14">
            <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-4">
              Politique de confidentialité
            </h1>
            <p className="font-sans text-text-muted text-sm">
              Dernière mise à jour : 18 mars 2026
            </p>
          </header>

          <div className="prose-legal font-sans text-text-primary leading-relaxed space-y-10">

            {/* Responsable */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Responsable du traitement</h2>
              <p className="text-text-muted">
                Le responsable du traitement des données personnelles collectées sur
                setting.live est ChallengersLab, représenté par Abraham.
              </p>
              <p className="text-text-muted mt-2">
                Contact : <a href="mailto:contact@setting.live" className="text-accent hover:underline">contact@setting.live</a>
              </p>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Données collectées</h2>
              <p className="text-text-muted mb-3">
                Nous collectons uniquement les données que vous nous transmettez
                volontairement via le formulaire de contact :
              </p>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                <li>Prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Message (optionnel)</li>
                <li>Service souhaité (setting, closing, les deux)</li>
              </ul>
            </section>

            {/* Finalité */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Finalité du traitement</h2>
              <p className="text-text-muted">
                Les données collectées sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside space-y-1 text-text-muted mt-3">
                <li>Répondre à votre demande de contact</li>
                <li>Vous recontacter dans le cadre de votre demande</li>
                <li>Améliorer nos services</li>
              </ul>
              <p className="text-text-muted mt-3">
                Vos données ne sont jamais vendues, louées ou transmises à des tiers à des
                fins commerciales.
              </p>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Base légale</h2>
              <p className="text-text-muted">
                Le traitement de vos données repose sur votre consentement (article 6.1.a du
                RGPD), exprimé lors de l'envoi du formulaire de contact.
              </p>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Durée de conservation</h2>
              <p className="text-text-muted">
                Les données personnelles collectées via le formulaire de contact sont
                conservées pendant une durée maximale de 3 ans à compter du dernier contact,
                conformément aux recommandations de la CNIL.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Cookies et mesure d'audience</h2>
              <p className="text-text-muted mb-3">
                Le site utilise Google Analytics 4 pour mesurer l'audience et comprendre
                comment les visiteurs utilisent le site. Ce service peut déposer des cookies
                sur votre navigateur.
              </p>
              <p className="text-text-muted">
                Vous pouvez refuser les cookies en configurant votre navigateur. La
                désactivation des cookies n'affecte pas votre navigation sur le site.
              </p>
            </section>

            {/* Droits */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Vos droits</h2>
              <p className="text-text-muted mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-text-muted mt-3">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:contact@setting.live" className="text-accent hover:underline">
                  contact@setting.live
                </a>.
                Nous nous engageons à répondre dans un délai de 30 jours.
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Hébergement des données</h2>
              <p className="text-text-muted">
                Les données du site sont hébergées par Vercel Inc. (États-Unis). Les emails
                de contact sont traités via Resend. Ces services sont conformes au RGPD via
                les clauses contractuelles types de la Commission européenne.
              </p>
            </section>

            {/* Modification */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Modification de cette politique</h2>
              <p className="text-text-muted">
                Cette politique de confidentialité peut être mise à jour. La date de dernière
                modification est indiquée en haut de cette page. Nous vous invitons à la
                consulter régulièrement.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
