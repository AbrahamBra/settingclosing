'use client'

import { useState, useEffect } from 'react'
import { ButtonGlow } from './ui/ButtonGlow'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const navLinks = [
    { label: 'Setting', href: '#setting' },
    { label: 'Closing', href: '#closing' },
    { label: 'Blog', href: '/blog' },
    { label: 'À propos', href: '/a-propos' },
  ]

  return (
    <>
      <nav
        style={{ zIndex: 50 }}
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
          scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-black/8' : 'bg-transparent'
        }`}
      >
        <a href="#" className="font-serif text-xl text-text-primary">
          ChallengersLab
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
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
        className={`fixed top-0 right-0 h-full w-72 bg-bg-secondary border-l border-black/8 flex flex-col p-8 gap-8 transition-transform duration-300 md:hidden ${
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
            className="font-sans text-lg text-text-primary"
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
