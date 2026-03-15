# ChallengersLab — Page vitrine Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a French-language Next.js landing page for ChallengersLab that generates leads via a contact form (Resend) and Calendly embed.

**Architecture:** Single-page Next.js App Router application. Each section is an isolated component. UI primitives (GlassCard, ButtonGlow, ScrollReveal, CursorGlow, VideoModal) live in `components/ui/` and are consumed by section components. The contact API route handles form submission via Resend. No database required.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis, react-calendly, Resend, Vitest

**Spec:** `docs/superpowers/specs/2026-03-15-challengerslab-vitrine-design.md`

---

## Chunk 1: Project Setup & Foundation

### Task 1: Initialize Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.env.local`, `.env.example`

- [ ] **Step 1: Scaffold the project**

```bash
cd /c/Users/abrah/CLsettingclosing
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --yes
```

- [ ] **Step 2: Verify scaffold succeeded**

```bash
ls
```

Expected: `app/`, `public/`, `package.json`, `tailwind.config.ts`, `tsconfig.json` present.

- [ ] **Step 3: Create `.env.local` with placeholders**

```bash
cat > .env.local << 'EOF'
RESEND_API_KEY=re_placeholder
CONTACT_EMAIL=contact@challengerslab.fr
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/placeholder
EOF
```

- [ ] **Step 4: Create `.env.example` for documentation**

```bash
cat > .env.example << 'EOF'
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
EOF
```

- [ ] **Step 5: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project"
```

---

### Task 2: Install all dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install runtime dependencies**

```bash
npm install framer-motion @studio-freight/lenis react-calendly resend
```

- [ ] **Step 2: Install dev/test dependencies**

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

- [ ] **Step 3: Verify install succeeded**

```bash
npm ls framer-motion react-calendly resend vitest --depth=0
```

Expected: all four packages listed without errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install all runtime and dev dependencies"
```

---

### Task 3: Configure Tailwind with design tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `tailwind.config.ts` with full token config**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        'bg-primary': '#0A0A0F',
        'bg-secondary': '#111118',
        'text-primary': '#F8FAFC',
        'text-muted': '#64748B',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '400' }],
        'h1': ['3.5rem', { lineHeight: '1.15', fontWeight: '400' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace `app/globals.css` with CSS variables and base styles**

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --accent: #3B82F6;
  --accent-hover: #2563EB;
  --accent-rgb: 59, 130, 246;
  --bg-primary: #0A0A0F;
  --bg-secondary: #111118;
  --text-primary: #F8FAFC;
  --text-muted: #64748B;
  --border: rgba(255, 255, 255, 0.06);

  --z-base: 0;
  --z-card: 10;
  --z-navbar: 50;
  --z-modal-backdrop: 80;
  --z-modal: 90;
  --z-cursor: 9999;
  --z-grain: 9998;
}

@layer base {
  html {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans), system-ui, sans-serif;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }
}

@layer components {
  .section-padding {
    @apply px-6 md:px-12 lg:px-20 py-[80px] lg:py-[120px];
  }

  .container-max {
    @apply max-w-6xl mx-auto;
  }
}

@keyframes shine {
  0% { transform: rotate(30deg) translateX(-100%); }
  100% { transform: rotate(30deg) translateX(200%); }
}
```

- [ ] **Step 3: Verify Tailwind config parses correctly**

```bash
npx tailwindcss --input app/globals.css --output /dev/null
```

Expected: no errors printed.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "feat: configure Tailwind tokens and CSS variables"
```

---

### Task 4: Setup fonts and app/layout.tsx

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write `app/layout.tsx` with fonts, metadata, and grain overlay**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { Instrument_Serif, IBM_Plex_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'ChallengersLab — Setting & Closing pour solopreneurs',
  description: 'Déléguez votre prospection et votre closing à des experts formés aux meilleures méthodes B2B. Garantie 5 RDV minimum.',
  openGraph: {
    title: 'ChallengersLab — Setting & Closing pour solopreneurs',
    description: 'Déléguez votre prospection et votre closing à des experts formés aux meilleures méthodes B2B. Garantie 5 RDV minimum.',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://challengerslab.fr',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://challengerslab.fr/#website',
      url: 'https://challengerslab.fr',
      name: 'ChallengersLab',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://challengerslab.fr/#business',
      name: 'ChallengersLab',
      url: 'https://challengerslab.fr',
      description: 'Setting et closing externalisés pour solopreneurs et infopreneurs.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting',
            description: 'Prospection externalisée avec garantie 5 RDV minimum',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '500',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Closing',
            description: 'Coaching closing 2h/semaine, méthode Challenger Sale',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1000',
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Grain overlay */}
        <svg
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 'var(--z-grain)' as any,
            opacity: 0.015,
          }}
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000 | head -20
kill %1
```

Expected: HTML response containing `ChallengersLab`.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: setup layout with fonts, metadata, JSON-LD, and grain overlay"
```

---

## Chunk 2: UI Primitives

### Task 5: GlassCard component

**Files:**
- Create: `components/ui/GlassCard.tsx`

- [ ] **Step 1: Create GlassCard**

```typescript
// components/ui/GlassCard.tsx
import { HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean
}

export function GlassCard({ accent = false, className = '', children, ...props }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        border: accent
          ? '1px solid rgba(59, 130, 246, 0.4)'
          : '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      {...props}
    >
      {/* Gradient border shine */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: '1px',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/GlassCard.tsx
git commit -m "feat: add GlassCard UI primitive with glassmorphism and gradient border"
```

---

### Task 6: ButtonGlow component

**Files:**
- Create: `components/ui/ButtonGlow.tsx`

- [ ] **Step 1: Create ButtonGlow**

```typescript
// components/ui/ButtonGlow.tsx
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonGlowProps =
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a'; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)

export function ButtonGlow({ as: Tag = 'button', className = '', children, ...props }: any) {
  return (
    <Tag
      className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-sans font-semibold text-white overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        boxShadow: '0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)',
      }}
      onMouseEnter={(e: any) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow =
          '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.3), 0 15px 40px -10px rgba(59,130,246,0.5)'
      }}
      onMouseLeave={(e: any) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow =
          '0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)'
      }}
      {...props}
    >
      {/* Shine animation */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
          animation: 'shine 8s infinite',
          transform: 'rotate(30deg)',
        }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/ButtonGlow.tsx
git commit -m "feat: add ButtonGlow with glow effect and shine animation"
```

---

### Task 7: ScrollReveal component

**Files:**
- Create: `components/ui/ScrollReveal.tsx`

- [ ] **Step 1: Create ScrollReveal**

```typescript
// components/ui/ScrollReveal.tsx
'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionMap = {
  up: 'translate3d(0, 30px, 0)',
  down: 'translate3d(0, -30px, 0)',
  left: 'translate3d(30px, 0, 0)',
  right: 'translate3d(-30px, 0, 0)',
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '-50px 0px 0px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0,0,0)' : directionMap[direction],
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/ScrollReveal.tsx
git commit -m "feat: add ScrollReveal with IntersectionObserver, fire-once, configurable direction"
```

---

### Task 8: CursorGlow component (desktop only)

**Files:**
- Create: `components/ui/CursorGlow.tsx`

- [ ] **Step 1: Create CursorGlow**

```typescript
// components/ui/CursorGlow.tsx
'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const haloRef = useRef<HTMLDivElement>(null)
  const pointRef = useRef<HTMLDivElement>(null)
  const lastX = useRef(0)
  const lastY = useRef(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    // Disable on mobile/touch
    if (window.matchMedia('(hover: none)').matches) return

    const updatePosition = (x: number, y: number) => {
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
      if (pointRef.current) {
        pointRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastX.current = e.clientX
      lastY.current = e.clientY
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          updatePosition(lastX.current, lastY.current)
          rafId.current = null
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      {/* Large halo */}
      <div
        ref={haloRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)' as any,
          willChange: 'transform',
        }}
      />
      {/* Bright point */}
      <div
        ref={pointRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(59,130,246,0.6)',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)' as any,
          willChange: 'transform',
        }}
      />
    </>
  )
}
```

- [ ] **Step 2: Add dynamic import in `app/page.tsx` (placeholder — will be used in Task 23)**

Note: CursorGlow will be imported via `dynamic(() => import('../components/ui/CursorGlow'), { ssr: false })` in `app/page.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/ui/CursorGlow.tsx
git commit -m "feat: add CursorGlow desktop-only component with RAF throttling"
```

---

### Task 9: VideoModal component

**Files:**
- Create: `components/ui/VideoModal.tsx`

- [ ] **Step 1: Create VideoModal**

```typescript
// components/ui/VideoModal.tsx
'use client'

import { useEffect } from 'react'

interface VideoModalProps {
  videoId: string
  provider: 'youtube' | 'vimeo'
  onClose: () => void
}

function getEmbedUrl(videoId: string, provider: 'youtube' | 'vimeo') {
  if (provider === 'youtube') {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }
  return `https://player.vimeo.com/video/${videoId}?autoplay=1`
}

export function VideoModal({ videoId, provider, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Témoignage vidéo"
      style={{ zIndex: 'var(--z-modal-backdrop)' as any }}
      className="fixed inset-0 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal content */}
      <div
        style={{ zIndex: 'var(--z-modal)' as any }}
        className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden"
      >
        <iframe
          src={getEmbedUrl(videoId, provider)}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Témoignage vidéo"
        />
        <button
          onClick={onClose}
          aria-label="Fermer la vidéo"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/VideoModal.tsx
git commit -m "feat: add VideoModal with YouTube/Vimeo embed, Escape key, focus management"
```

---

## Chunk 3: Navbar + Hero

### Task 10: Navbar component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create Navbar**

```typescript
// components/Navbar.tsx
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

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const navLinks = [
    { label: 'Setting', href: '#setting' },
    { label: 'Closing', href: '#closing' },
  ]

  return (
    <>
      <nav
        style={{ zIndex: 'var(--z-navbar)' as any }}
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0F]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-serif text-xl text-text-primary">
          ChallengersLab
        </a>

        {/* Desktop nav */}
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Réserver un appel
          </ButtonGlow>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/60 md:hidden"
          style={{ zIndex: 'calc(var(--z-navbar) - 1)' as any }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed top-0 right-0 h-full w-72 bg-bg-secondary border-l border-white/5 flex flex-col p-8 gap-8 transition-transform duration-300 md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 'var(--z-navbar)' as any }}
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
        <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
          Réserver un appel
        </ButtonGlow>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar with sticky scroll effect and mobile drawer"
```

---

### Task 11: Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero**

```typescript
// components/Hero.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ButtonGlow } from './ui/ButtonGlow'

const personas = ['solopreneur', 'infopreneur']

export function Hero() {
  const [index, setIndex] = useState(0)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % personas.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding flex flex-col items-center text-center min-h-screen justify-center">
      <div className="container-max max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-h1 md:text-display text-text-primary mb-6"
        >
          Vous avez une offre qui cartonne.{' '}
          <br className="hidden md:block" />
          Arrêtez de perdre du temps à la vendre.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg text-text-muted mb-4 max-w-xl mx-auto"
        >
          ChallengersLab prend en charge votre setting et votre closing — avec les méthodes qui font la différence en B2B.
        </motion.p>

        {/* Animated persona word */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 text-text-muted font-sans text-base mb-12"
        >
          <span>Pour le</span>
          <span className="relative inline-block w-36 h-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={personas[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center text-accent font-semibold"
              >
                {personas[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>qui veut déléguer.</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Réserver un appel gratuit
          </ButtonGlow>
          <a
            href="#setting"
            className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Découvrir l'offre ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero with animated persona word and Framer Motion entrance"
```

---

## Chunk 4: Content Sections

### Task 12: Probleme component

**Files:**
- Create: `components/Probleme.tsx`

- [ ] **Step 1: Create Probleme**

```typescript
// components/Probleme.tsx
import { GlassCard } from './ui/GlassCard'
import { ScrollReveal } from './ui/ScrollReveal'

const problems = [
  {
    title: 'Vous prospectez dans le vide',
    body: 'Pas de ciblage, pas de scoring. Des messages centrés sur le produit plutôt que sur ce que le client gagne. Peu de réponses, beaucoup de temps perdu.',
  },
  {
    title: 'Vos appels ne convertissent pas',
    body: 'Sans discovery solide et sans méthode pour augmenter la valeur perçue, vous baissez le prix ou vous perdez le deal.',
  },
  {
    title: 'Vous faites tout vous-même',
    body: 'Pendant que vous prospectez et tentez de closer, votre vraie valeur ajoutée — la création, le coaching, l'expertise — attend.',
  },
]

export function Probleme() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-16">
            Ce que ça coûte de ne pas avoir de méthode
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 100}>
              <GlassCard className="p-8 h-full">
                <h3 className="font-sans font-semibold text-h3 text-text-primary mb-4">
                  {problem.title}
                </h3>
                <p className="font-sans text-text-muted leading-relaxed">
                  {problem.body}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Probleme.tsx
git commit -m "feat: add Probleme section with 3 glassmorphism cards"
```

---

### Task 13: Philosophie component

**Files:**
- Create: `components/Philosophie.tsx`

- [ ] **Step 1: Create Philosophie**

```typescript
// components/Philosophie.tsx
import { ScrollReveal } from './ui/ScrollReveal'

export function Philosophie() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max max-w-4xl">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-8">
            Les meilleures méthodes B2B, importées dans votre secteur
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-sans text-text-muted text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Le secteur des solopreneurs et infopreneurs évolue vite. La prospection et le closing restent souvent artisanaux. ChallengersLab applique ce qui fonctionne en B2B — scoring, niveaux de maturité, Challenger Sale — à ce marché.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          <ScrollReveal delay={100}>
            <div className="bg-bg-primary p-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Setting
              </p>
              <h3 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                Piloté par la donnée
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                Ciblage, scoring, LinkedIn Sales Navigator, copywriting orienté bénéfice client — pas produit.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-bg-primary p-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Closing
              </p>
              <h3 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                Structuré
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                Discovery approfondie, valeur perçue, méthode Challenger Sale appliquée.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Philosophie.tsx
git commit -m "feat: add Philosophie section with two-column method overview"
```

---

### Task 14: SectionSetting component

**Files:**
- Create: `components/SectionSetting.tsx`

- [ ] **Step 1: Create SectionSetting**

```typescript
// components/SectionSetting.tsx
import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const methods = [
  'Base de connaissance construite avec l'IA — contexte client et best practices marketing/sales',
  'Segmentation par niveaux de maturité pour cibler au bon moment',
  'Système de scoring pour prioriser les bons prospects',
  'Listes sur-mesure via LinkedIn Sales Navigator',
  'Copywriting orienté bénéfice client, pas produit',
]

export function SectionSetting() {
  return (
    <section id="setting" className="section-padding bg-bg-secondary">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Method */}
          <ScrollReveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-8">
              5 rendez-vous qualifiés. Minimum. Garanti.
            </h2>
            <ul className="space-y-4">
              {methods.map((method) => (
                <li key={method} className="flex gap-3 font-sans text-text-muted">
                  <span className="text-accent mt-1 shrink-0">→</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right: Offer card */}
          <ScrollReveal delay={150}>
            <GlassCard accent className="p-8 flex flex-col gap-6">
              <div>
                <p className="font-sans text-text-muted text-sm mb-2">Tarif</p>
                <p className="font-serif text-h2 text-text-primary">
                  À partir de 500 €
                  <span className="text-h3 text-text-muted font-sans"> / client</span>
                </p>
                <p className="font-sans text-text-muted text-sm mt-1">
                  Fixe + variable sur devis
                </p>
              </div>
              <div className="border-t border-white/5 pt-6">
                <p className="font-sans text-text-primary font-semibold mb-1">
                  Garantie : minimum 5 RDV qualifiés
                </p>
                <p className="font-sans text-text-muted text-sm">
                  Vous déléguez plusieurs clients ? On s'adapte au volume.
                </p>
              </div>
              <ButtonGlow
                as="a"
                href="#contact"
                className="w-full text-center"
              >
                Déléguer mon setting →
              </ButtonGlow>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/SectionSetting.tsx
git commit -m "feat: add SectionSetting with method list and offer card"
```

---

### Task 15: SectionClosing component

**Files:**
- Create: `components/SectionClosing.tsx`

- [ ] **Step 1: Create SectionClosing**

```typescript
// components/SectionClosing.tsx
import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const methods = [
  'Formé à la Challenger Sale — la méthode avec les meilleurs résultats sur les ventes complexes',
  'Discovery approfondie pour comprendre les vrais enjeux avant de parler prix',
  'Techniques pour augmenter la valeur perçue sans baisser le prix',
  '"Catch the cat" — reprendre le contrôle d'un deal qui part dans tous les sens',
]

export function SectionClosing() {
  return (
    <section id="closing" className="section-padding bg-bg-primary">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Offer card (columns reversed vs Setting) */}
          <ScrollReveal>
            <GlassCard accent className="p-8 flex flex-col gap-6">
              <div>
                <p className="font-sans text-text-muted text-sm mb-2">Tarif</p>
                <p className="font-serif text-h2 text-text-primary">
                  1 000 €
                  <span className="text-h3 text-text-muted font-sans"> / mois</span>
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 space-y-3">
                <p className="font-sans text-text-primary font-semibold">
                  2h de coaching par semaine
                </p>
                <div className="flex gap-3 font-sans text-text-muted text-sm">
                  <span className="text-accent shrink-0">→</span>
                  <span>1h en visio — debriefs, stratégie, cas concrets</span>
                </div>
                <div className="flex gap-3 font-sans text-text-muted text-sm">
                  <span className="text-accent shrink-0">→</span>
                  <span>1h en situation réelle — coaching en direct sur un appel prospect</span>
                </div>
              </div>
              <ButtonGlow as="a" href="#contact" className="w-full text-center">
                Améliorer mon closing →
              </ButtonGlow>
            </GlassCard>
          </ScrollReveal>

          {/* Right: Method */}
          <ScrollReveal delay={150}>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-8">
              Apprenez à closer comme les meilleurs commerciaux B2B.
            </h2>
            <ul className="space-y-4">
              {methods.map((method) => (
                <li key={method} className="flex gap-3 font-sans text-text-muted">
                  <span className="text-accent mt-1 shrink-0">→</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/SectionClosing.tsx
git commit -m "feat: add SectionClosing with columns reversed, Challenger Sale method"
```

---

## Chunk 5: Testimonials Data + Preuves Section

### Task 16: Testimonials data model

**Files:**
- Create: `lib/testimonials.ts`
- Create: `tests/lib/testimonials.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// tests/lib/testimonials.test.ts
import { describe, it, expect } from 'vitest'
import { textTestimonials, videoTestimonials } from '../../lib/testimonials'

describe('testimonials data', () => {
  it('has at least 3 text testimonials', () => {
    expect(textTestimonials.length).toBeGreaterThanOrEqual(3)
  })

  it('each text testimonial has required fields', () => {
    textTestimonials.forEach((t) => {
      expect(t.id).toBeTruthy()
      expect(t.name).toBeTruthy()
      expect(t.company).toBeTruthy()
      expect(t.quote).toBeTruthy()
      expect(t.type).toBe('text')
    })
  })

  it('each video testimonial has videoId and provider', () => {
    videoTestimonials.forEach((t) => {
      expect(t.videoId).toBeTruthy()
      expect(['youtube', 'vimeo']).toContain(t.provider)
      expect(t.thumbnailUrl).toBeTruthy()
      expect(t.type).toBe('video')
    })
  })
})
```

- [ ] **Step 2: Setup Vitest config**

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: [],
  },
})
```

- [ ] **Step 3: Run tests to verify they fail**

```bash
npx vitest run tests/lib/testimonials.test.ts
```

Expected: FAIL — `Cannot find module '../../lib/testimonials'`

- [ ] **Step 4: Implement `lib/testimonials.ts`**

```typescript
// lib/testimonials.ts

export interface Testimonial {
  id: string
  name: string
  company: string
  role?: string
  quote: string
  avatar?: string
  logo?: string
  type: 'text' | 'video'
}

export interface VideoTestimonial extends Testimonial {
  type: 'video'
  videoId: string
  provider: 'youtube' | 'vimeo'
  thumbnailUrl: string
}

export const textTestimonials: Testimonial[] = [
  {
    id: '99pct',
    name: 'Placeholder Nom',
    company: '99% Done',
    role: 'Fondateur',
    quote: 'Placeholder citation — à remplacer avant mise en ligne.',
    type: 'text',
  },
  {
    id: 'ellipse',
    name: 'Placeholder Nom',
    company: 'Ellipse',
    role: 'Fondateur',
    quote: 'Placeholder citation — à remplacer avant mise en ligne.',
    type: 'text',
  },
  {
    id: 'kbdigit',
    name: 'Placeholder Nom',
    company: 'KBDigit',
    role: 'Fondateur',
    quote: 'Placeholder citation — à remplacer avant mise en ligne.',
    type: 'text',
  },
]

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 'video-1',
    name: 'Placeholder Nom',
    company: 'Placeholder Entreprise',
    quote: '',
    type: 'video',
    videoId: 'placeholder-video-id',
    provider: 'youtube',
    thumbnailUrl: '/thumbnails/placeholder-1.jpg',
  },
]
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npx vitest run tests/lib/testimonials.test.ts
```

Expected: PASS — 3 tests

- [ ] **Step 6: Commit**

```bash
git add lib/testimonials.ts tests/lib/testimonials.test.ts vitest.config.ts
git commit -m "feat: add testimonials data model with TypeScript interfaces and Vitest tests"
```

---

### Task 17: Preuves component

**Files:**
- Create: `components/Preuves.tsx`

- [ ] **Step 1: Create Preuves**

```typescript
// components/Preuves.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GlassCard } from './ui/GlassCard'
import { ScrollReveal } from './ui/ScrollReveal'
import { VideoModal } from './ui/VideoModal'
import { textTestimonials, videoTestimonials, VideoTestimonial } from '@/lib/testimonials'

export function Preuves() {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null)

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-16">
            Ils nous ont fait confiance
          </h2>
        </ScrollReveal>

        {/* Text testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {textTestimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.id} delay={i * 100}>
              <GlassCard className="p-8 h-full flex flex-col gap-4">
                <p className="font-sans text-text-muted leading-relaxed flex-1">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-sans font-semibold text-text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-text-muted text-sm">
                    {testimonial.role && `${testimonial.role}, `}{testimonial.company}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Video testimonials */}
        {videoTestimonials.length > 0 && (
          <>
            <ScrollReveal>
              <h3 className="font-sans font-semibold text-h3 text-text-primary text-center mb-8">
                En vidéo
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTestimonials.map((video, i) => (
                <ScrollReveal key={video.id} delay={i * 100}>
                  <button
                    aria-label={`Regarder le témoignage de ${video.name} (${video.company})`}
                    onClick={() => setActiveVideo(video)}
                    className="relative w-full aspect-video rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={video.thumbnailUrl}
                      alt={`Témoignage ${video.company}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center">
                        <span className="text-white text-xl ml-1">▶</span>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>

      {activeVideo && (
        <VideoModal
          videoId={activeVideo.videoId}
          provider={activeVideo.provider}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Preuves.tsx
git commit -m "feat: add Preuves section with text cards and video modal grid"
```

---

## Chunk 6: Contact API, CTAFinale & Footer

### Task 18: Contact API route with Resend

**Files:**
- Create: `app/api/contact/route.ts`
- Create: `tests/api/contact.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// tests/api/contact.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock Resend before importing the route
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: { id: 'email-id' }, error: null }),
    },
  })),
}))

// Mock env vars
vi.stubEnv('RESEND_API_KEY', 're_test_key')
vi.stubEnv('CONTACT_EMAIL', 'test@example.com')

async function callRoute(body: object): Promise<Response> {
  const { POST } = await import('../../app/api/contact/route')
  const request = new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return POST(request)
}

describe('POST /api/contact', () => {
  beforeEach(() => vi.resetModules())

  it('returns 422 when required fields are missing', async () => {
    const res = await callRoute({ email: 'test@test.com' })
    expect(res.status).toBe(422)
    const json = await res.json()
    expect(json.success).toBe(false)
  })

  it('returns 200 on valid submission', async () => {
    const res = await callRoute({
      firstName: 'Jean',
      email: 'jean@example.com',
      interest: 'setting',
    })
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 422 for invalid email format', async () => {
    const res = await callRoute({
      firstName: 'Jean',
      email: 'not-an-email',
      interest: 'setting',
    })
    expect(res.status).toBe(422)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npx vitest run tests/api/contact.test.ts
```

Expected: FAIL — `Cannot find module '../../app/api/contact/route'`

- [ ] **Step 3: Implement the API route**

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactPayload {
  firstName: string
  email: string
  phone?: string
  interest: 'setting' | 'closing' | 'les_deux'
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(data: Partial<ContactPayload>): string | null {
  if (!data.firstName || data.firstName.trim().length < 2) {
    return 'Prénom invalide (minimum 2 caractères)'
  }
  if (!data.email || !isValidEmail(data.email)) {
    return 'Adresse email invalide'
  }
  if (!data.interest || !['setting', 'closing', 'les_deux'].includes(data.interest)) {
    return 'Veuillez sélectionner un service'
  }
  if (data.message && data.message.length > 1000) {
    return 'Message trop long (maximum 1000 caractères)'
  }
  return null
}

export async function POST(request: Request) {
  let data: Partial<ContactPayload>

  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Corps de requête invalide' }, { status: 422 })
  }

  const validationError = validate(data)
  if (validationError) {
    return NextResponse.json({ success: false, error: validationError }, { status: 422 })
  }

  const payload = data as ContactPayload

  try {
    await resend.emails.send({
      from: 'ChallengersLab <noreply@challengerslab.fr>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nouvelle demande — ${payload.interest} — ${payload.firstName}`,
      text: [
        `Prénom : ${payload.firstName}`,
        `Email : ${payload.email}`,
        `Téléphone : ${payload.phone ?? 'Non renseigné'}`,
        `Service : ${payload.interest}`,
        `Message : ${payload.message ?? 'Aucun message'}`,
      ].join('\n'),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npx vitest run tests/api/contact.test.ts
```

Expected: PASS — 3 tests

- [ ] **Step 5: Commit**

```bash
git add app/api/contact/route.ts tests/api/contact.test.ts
git commit -m "feat: add contact API route with Resend, validation, TDD"
```

---

### Task 19: CTAFinale component

**Files:**
- Create: `components/CTAFinale.tsx`

- [ ] **Step 1: Create CTAFinale**

```typescript
// components/CTAFinale.tsx
'use client'

import { useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

type Interest = 'setting' | 'closing' | 'les_deux'
type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  firstName: string
  email: string
  phone: string
  interest: Interest | ''
  message: string
}

const initialForm: FormData = {
  firstName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

export function CTAFinale() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleInterest = (value: Interest) => {
    setForm((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()

      if (!res.ok) {
        setState('error')
        setErrorMsg(json.error ?? 'Une erreur est survenue.')
        return
      }

      setState('success')
      setForm(initialForm)

      // GA4 event — only after confirmed success
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        ;(window as any).gtag('event', 'generate_lead', {
          event_category: 'contact',
          lead_type: form.interest,
          method: 'form',
        })
      }
    } catch {
      setState('error')
      setErrorMsg('Une erreur est survenue. Réessayez plus tard.')
    }
  }

  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-16">
            Prêt à déléguer ?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
          {/* Left: Form */}
          <ScrollReveal>
            <div className="bg-bg-secondary p-10 border-b md:border-b-0 md:border-r border-white/5">
              <h3 className="font-sans font-semibold text-h3 text-text-primary mb-8">
                Nous contacter
              </h3>

              {state === 'success' ? (
                <p className="font-sans text-accent font-semibold">
                  Message reçu. On vous répond sous 24h.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Prénom */}
                  <div>
                    <label htmlFor="firstName" className="font-sans text-sm text-text-muted block mb-1.5">
                      Prénom *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      minLength={2}
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Jean"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="font-sans text-sm text-text-muted block mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="jean@example.com"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="font-sans text-sm text-text-muted block mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>

                  {/* Interest radio */}
                  <div>
                    <p className="font-sans text-sm text-text-muted mb-3">
                      Vous intéresse * :
                    </p>
                    <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Service souhaité">
                      {(['setting', 'closing', 'les_deux'] as Interest[]).map((value) => {
                        const labels = { setting: 'Setting', closing: 'Closing', les_deux: 'Les deux' }
                        return (
                          <button
                            key={value}
                            type="button"
                            role="radio"
                            aria-checked={form.interest === value}
                            onClick={() => handleInterest(value)}
                            className={`px-4 py-2 rounded-lg font-sans text-sm border transition-colors ${
                              form.interest === value
                                ? 'border-accent text-accent bg-accent/10'
                                : 'border-white/10 text-text-muted hover:border-white/20'
                            }`}
                          >
                            {labels[value]}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="font-sans text-sm text-text-muted block mb-1.5">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={1000}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="Décrivez votre situation..."
                    />
                  </div>

                  {state === 'error' && (
                    <p className="font-sans text-sm text-red-400">{errorMsg}</p>
                  )}

                  <ButtonGlow
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full"
                  >
                    {state === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </ButtonGlow>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right: Calendly */}
          <ScrollReveal delay={150}>
            <div className="bg-bg-secondary p-10 flex flex-col gap-6">
              <div>
                <h3 className="font-sans font-semibold text-h3 text-text-primary mb-2">
                  Vous préférez en parler directement ?
                </h3>
                <p className="font-sans text-text-muted text-sm">
                  Réservez un créneau de 30 minutes, sans engagement.
                </p>
              </div>
              <InlineWidget
                url={calendlyUrl}
                styles={{ height: '500px', minWidth: '280px' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/CTAFinale.tsx
git commit -m "feat: add CTAFinale with validated form, GA4 event, and Calendly InlineWidget"
```

---

### Task 20: Footer component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create Footer**

```typescript
// components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-primary">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-text-primary mb-2">ChallengersLab</p>
            <p className="font-sans text-text-muted text-sm max-w-xs">
              Les meilleures méthodes B2B, pour votre activité.
            </p>
          </div>

          {/* Links */}
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
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer with contact info and legal placeholder links"
```

---

## Chunk 7: SEO Files + Integration

### Task 21: SEO files

**Files:**
- Create: `app/sitemap.ts`
- Create: `public/robots.txt`

- [ ] **Step 1: Create sitemap**

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://challengerslab.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

- [ ] **Step 2: Create robots.txt**

```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://challengerslab.fr/sitemap.xml
```

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts public/robots.txt
git commit -m "feat: add sitemap.ts and robots.txt"
```

---

### Task 22: Lenis smooth scroll initialization

**Files:**
- Create: `components/LenisProvider.tsx`

- [ ] **Step 1: Create LenisProvider (disabled on mobile)**

```typescript
// components/LenisProvider.tsx
'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export function LenisProvider() {
  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return null
}
```

- [ ] **Step 2: Commit**

```bash
git add components/LenisProvider.tsx
git commit -m "feat: add Lenis smooth scroll provider, disabled on mobile"
```

---

### Task 23: Assemble app/page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Write the assembled page**

```typescript
// app/page.tsx
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Probleme } from '@/components/Probleme'
import { Philosophie } from '@/components/Philosophie'
import { SectionSetting } from '@/components/SectionSetting'
import { SectionClosing } from '@/components/SectionClosing'
import { Preuves } from '@/components/Preuves'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { LenisProvider } from '@/components/LenisProvider'

// CursorGlow: desktop only, no SSR
const CursorGlow = dynamic(
  () => import('@/components/ui/CursorGlow').then((m) => m.CursorGlow),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <LenisProvider />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <Philosophie />
        <SectionSetting />
        <SectionClosing />
        <Preuves />
        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run full test suite**

```bash
npx vitest run
```

Expected: all tests PASS

- [ ] **Step 3: Build to check for TypeScript/compile errors**

```bash
npm run build
```

Expected: no errors, build succeeds.

- [ ] **Step 4: Spot-check dev server**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- Hero renders with animated text
- Navbar scrolls to opaque after 80px
- All sections visible
- Form submits (check network tab — expect 200 or 422 depending on inputs)
- Calendly widget loads

- [ ] **Step 5: Final commit**

```bash
git add app/page.tsx components/LenisProvider.tsx
git commit -m "feat: assemble page.tsx with all sections, Lenis, CursorGlow dynamic import"
```

---

## Environment Variables Checklist (before going live)

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Clé API Resend (https://resend.com) |
| `CONTACT_EMAIL` | Email de destination pour le formulaire |
| `NEXT_PUBLIC_CALENDLY_URL` | URL de la page Calendly |

---

## Content Checklist (before going live)

- [ ] Remplacer les citations placeholders dans `lib/testimonials.ts`
- [ ] Ajouter les vraies thumbnails vidéo dans `public/thumbnails/`
- [ ] Mettre à jour les `videoId` et `thumbnailUrl` dans `lib/testimonials.ts`
- [ ] Remplacer `contact@challengerslab.fr` dans Footer par le vrai email
- [ ] Remplacer les liens LinkedIn dans Footer
- [ ] Créer les pages `/mentions-legales` et `/politique-confidentialite`
- [ ] Remplacer `https://challengerslab.fr` par le vrai domaine dans layout.tsx et sitemap.ts
- [ ] Remplacer `G-PLACEHOLDER` dans layout.tsx par le vrai ID Google Analytics
