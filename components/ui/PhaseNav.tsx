'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const phases = [
  { id: 'detection', label: 'Détection', shortLabel: 'Détect.', color: 'text-semantic-ia', border: 'border-semantic-ia', bg: 'bg-semantic-ia' },
  { id: 'qualification', label: 'Qualification', shortLabel: 'Qualif.', color: 'text-semantic-methode', border: 'border-semantic-methode', bg: 'bg-semantic-methode' },
  { id: 'conversion', label: 'Conversion', shortLabel: 'Convers.', color: 'text-semantic-humain', border: 'border-semantic-humain', bg: 'bg-semantic-humain' },
] as const

export function PhaseNav() {
  const [visible, setVisible] = useState(false)
  const [activePhase, setActivePhase] = useState('detection')
  const [progress, setProgress] = useState(0)
  const navRef = useRef<HTMLElement>(null)

  // Track hero visibility — show nav when hero exits viewport
  useEffect(() => {
    const hero = document.getElementById('methode-hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Track active phase via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['detection', 'qualification', 'conversion']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActivePhase(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      )
      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Track scroll progress
  useEffect(() => {
    let rafId: number

    const updateProgress = () => {
      const first = document.getElementById('detection')
      const last = document.getElementById('conversion')
      if (!first || !last) return

      const start = first.offsetTop
      const end = last.offsetTop + last.offsetHeight
      const scrollY = window.scrollY + window.innerHeight * 0.5
      const pct = Math.min(100, Math.max(0, ((scrollY - start) / (end - start)) * 100))
      setProgress(pct)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateProgress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateProgress()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const scrollToPhase = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    // Relies on scroll-mt-28 on each section (set in page.tsx)
    // to offset for navbar + PhaseNav height
    el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      nextIndex = (currentIndex + 1) % phases.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      nextIndex = (currentIndex - 1 + phases.length) % phases.length
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      scrollToPhase(phases[currentIndex].id)
      return
    } else {
      return
    }

    const nextTab = navRef.current?.querySelector(`[data-phase="${phases[nextIndex].id}"]`) as HTMLElement
    nextTab?.focus()
    scrollToPhase(phases[nextIndex].id)
  }, [scrollToPhase])

  return (
    <nav
      ref={navRef}
      aria-label="Phases de la méthode"
      role="tablist"
      className={`sticky z-[var(--z-phase-nav)] bg-bg-primary/95 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300 ease-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ top: 'var(--navbar-height)' }}
    >
      <div className="container-max flex items-center justify-center gap-1 px-6 md:px-12 lg:px-20">
        {phases.map((phase, i) => {
          const isActive = activePhase === phase.id
          return (
            <button
              key={phase.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              data-phase={phase.id}
              onClick={() => scrollToPhase(phase.id)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`relative min-h-[44px] px-4 md:px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                isActive ? phase.color : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <span className="hidden md:inline">{phase.label}</span>
              <span className="md:hidden">{phase.shortLabel}</span>
              {isActive && (
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${phase.bg}`} />
              )}
            </button>
          )
        })}
      </div>
      {/* Progress bar */}
      <div className="h-[2px] bg-white/[0.03]">
        <div
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  )
}
