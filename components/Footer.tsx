export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-primary">
      <div className="container-max px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-serif text-xl text-text-primary mb-2">ChallengersLab</p>
            <p className="font-sans text-text-muted text-sm max-w-xs">
              Les meilleures méthodes B2B, pour votre activité.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-sm font-sans text-text-muted">
            <div className="flex flex-col gap-2">
              <p className="text-text-primary font-semibold mb-1">Contact</p>
              <a
                href="mailto:contact@challengerslab.fr"
                className="hover:text-text-primary transition-colors"
              >
                contact@challengerslab.fr
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-text-primary font-semibold mb-1">Légal</p>
              <a href="/mentions-legales" className="hover:text-text-primary transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-text-primary transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-8">
          <p className="font-sans text-text-muted text-xs">
            © {new Date().getFullYear()} ChallengersLab. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
