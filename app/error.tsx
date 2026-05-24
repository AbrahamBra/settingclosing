'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex items-center">
      <div className="container-max max-w-2xl px-6 md:px-8 text-center py-28">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
          Erreur
        </p>
        <h1 className="font-serif text-h1 text-text-primary mb-4">
          Quelque chose s'est mal passé
        </h1>
        <p className="font-sans text-text-muted text-lg mb-10">
          Une erreur inattendue est survenue. Réessayez ou revenez à l'accueil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-text-primary font-sans font-semibold text-sm hover:bg-accent-hover transition-colors"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Retour à l'accueil →
          </a>
        </div>
      </div>
    </main>
  )
}
