'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ButtonGlow } from './ui/ButtonGlow'

export function Navbar({ variant = 'default' }: { variant?: 'default' | 'inner' }) {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/#contact'

  useEffect(() => {
    const threshold = variant === 'default' ? 80 : 20
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const navLinks = [
    { label: 'Méthode', href: '/methode' },
    { label: 'Offres', href: '/#pricing' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'À propos', href: '/a-propos' },
  ]

  const isActive = (href: string) => {
    if (href === '/#pricing') return false
    if (href === '/ressources') return pathname === '/ressources' || pathname.startsWith('/ressources/')
    return pathname === href
  }

  const bgClasses = variant === 'default'
    ? (scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent')
    : (scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-bg-primary/90 backdrop-blur-sm')

  return (
    <>
      <nav
        style={{ zIndex: 50 }}
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${bgClasses}`}
      >
        <a href="/" className="font-sans font-extrabold text-xl text-text-primary">
          ChallengersLab
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm transition-colors ${
                isActive(link.href)
                  ? 'text-text-primary font-medium'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Réserver un appel
          </ButtonGlow>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setDrawerOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <span className="w-6 h-0.5 bg-text-primary block" />
          <span className="w-6 h-0.5 bg-text-primary block" />
          <span className="w-6 h-0.5 bg-text-primary block" />
        </button>
      </nav>

      {drawerOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/60 md:hidden"
          style={{ zIndex: 49 }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed top-0 right-0 h-full w-72 bg-bg-secondary border-l border-white/[0.06] flex flex-col p-8 gap-8 transition-transform duration-300 md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 50 }}
        onKeyDown={(e) => { if (e.key === 'Escape') setDrawerOpen(false) }}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          aria-label="Fermer le menu"
          className="self-end text-text-muted hover:text-text-primary text-xl"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-sans text-lg ${
              isActive(link.href) ? 'text-text-primary font-medium' : 'text-text-primary'
            }`}
            onClick={() => setDrawerOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center">
          Réserver un appel
        </ButtonGlow>
      </div>
    </>
  )
}
