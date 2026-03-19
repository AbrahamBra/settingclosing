import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <NavbarBlog />
      <main className="bg-bg-primary pt-28 pb-24 min-h-[60vh] flex items-center">
        <div className="container-max max-w-2xl px-6 md:px-8 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Erreur 404
          </p>
          <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-4">
            Page introuvable
          </h1>
          <p className="font-sans text-text-muted text-lg mb-10">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-sans font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              Retour à l'accueil
            </a>
            <a
              href="/ressources"
              className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              Voir les ressources →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
