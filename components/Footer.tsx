export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-bg-secondary">
      <div className="container-max px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-sans font-extrabold text-xl text-text-primary mb-2">Setting</p>
            <p className="font-sans text-text-muted text-sm max-w-xs">
              Ce qui fonctionne en B2B, appliqué à votre activité.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-sm font-sans text-text-muted">
            <div className="flex flex-col gap-2">
              <p className="text-text-primary font-semibold mb-1">Ressources</p>
              <a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a>
              <a href="/methode" className="hover:text-text-primary transition-colors">Notre m&eacute;thode</a>
              <a href="/tarifs" className="hover:text-text-primary transition-colors">Tarifs</a>
              <a href="/resultats" className="hover:text-text-primary transition-colors">R&eacute;sultats</a>
              <a href="/glossaire" className="hover:text-text-primary transition-colors">Glossaire</a>
              <a href="/externaliser-prospection-linkedin" className="hover:text-text-primary transition-colors">Externaliser sa prospection</a>
              <a href="/a-propos" className="hover:text-text-primary transition-colors">&Agrave; propos</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-text-primary font-semibold mb-1">Contact</p>
              <a
                href="mailto:contact@setting.live"
                className="hover:text-text-primary transition-colors"
              >
                contact@setting.live
              </a>
              <a
                href="https://www.linkedin.com/company/challengerslab"
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
        <div className="border-t border-white/[0.06] mt-8 pt-8">
          <p className="font-sans text-text-muted text-xs">
            © {new Date().getFullYear()} Setting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
