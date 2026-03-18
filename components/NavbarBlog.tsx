'use client'

import { useState, useEffect } from 'react'
import { ButtonGlow } from './ui/ButtonGlow'

export function NavbarBlog() {
  const [scrolled, setScrolled] = useState(false)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/#contact'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{ zIndex: 50 }}
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-black/8'
          : 'bg-bg-primary/90 backdrop-blur-sm'
      }`}
    >
      <a href="/" className="font-serif text-xl text-text-primary">
        ChallengersLab
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a
          href="/#setting"
          className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          Setting
        </a>
        <a
          href="/#closing"
          className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          Closing
        </a>
        <a
          href="/blog"
          className="font-sans text-sm text-text-primary font-medium transition-colors"
        >
          Blog
        </a>
        <a
          href="/a-propos"
          className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          À propos
        </a>
      </div>
      <div className="hidden md:block">
        <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
          Réserver un appel
        </ButtonGlow>
      </div>
    </nav>
  )
}
