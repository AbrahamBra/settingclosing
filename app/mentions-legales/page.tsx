import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales | Setting',
  description:
    'Mentions légales du site setting.live : éditeur, hébergeur, propriété intellectuelle et conditions d\'utilisation.',
  alternates: {
    canonical: 'https://www.setting.live/mentions-legales',
    languages: {
      'fr': 'https://www.setting.live/mentions-legales',
      'x-default': 'https://www.setting.live/mentions-legales',
    },
  },
  robots: { index: true, follow: true },
}

export default function MentionsLegalesPage() {
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
              <li className="text-text-primary">Mentions légales</li>
            </ol>
          </nav>

          <header className="mb-14">
            <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-4">
              Mentions légales
            </h1>
            <p className="font-sans text-text-muted text-sm">
              Dernière mise à jour : 18 mars 2026
            </p>
          </header>

          <div className="prose-legal font-sans text-text-primary leading-relaxed space-y-10">

            {/* Éditeur */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Éditeur du site</h2>
              <p className="text-text-muted mb-2">
                Le site <strong>setting.live</strong> est édité par :
              </p>
              <ul className="list-none space-y-1 text-text-muted">
                <li><strong>Raison sociale :</strong> Setting</li>
                <li><strong>Forme juridique :</strong> Micro-entreprise</li>
                <li><strong>Responsable de la publication :</strong> Abraham</li>
                <li><strong>Email :</strong> contact@setting.live</li>
                <li><strong>Adresse :</strong> France</li>
              </ul>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Hébergement</h2>
              <ul className="list-none space-y-1 text-text-muted">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site :</strong> vercel.com</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Propriété intellectuelle</h2>
              <p className="text-text-muted">
                L'ensemble des contenus présents sur le site setting.live (textes, images,
                graphismes, logo, icônes, structure) est protégé par le droit d'auteur et reste
                la propriété exclusive de Setting, sauf mention contraire. Toute
                reproduction, représentation, modification, publication ou adaptation de tout ou
                partie des éléments du site est interdite sans autorisation écrite préalable.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Données personnelles</h2>
              <p className="text-text-muted">
                Les informations collectées via le formulaire de contact (prénom, email,
                téléphone, message) sont uniquement utilisées pour répondre à votre demande.
                Elles ne sont ni vendues, ni transmises à des tiers. Pour en savoir plus,
                consultez notre{' '}
                <a href="/politique-confidentialite" className="text-accent hover:underline">
                  politique de confidentialité
                </a>.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Cookies</h2>
              <p className="text-text-muted">
                Le site utilise Google Analytics pour mesurer l'audience. Ce service peut
                déposer des cookies sur votre navigateur. Vous pouvez les refuser en
                configurant votre navigateur.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-4">Limitation de responsabilité</h2>
              <p className="text-text-muted">
                Setting s'efforce d'assurer l'exactitude des informations publiées sur
                ce site. Toutefois, Setting ne peut garantir l'exactitude, la
                complétude ou l'actualité des informations diffusées. L'utilisateur reconnaît
                utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
