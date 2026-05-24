# Methode Page Refresh Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the /methode page with sticky phase navigation tabs, improved visual rhythm, lighter pedagogy blocks, and micro-interactions.

**Architecture:** Add a new PhaseNav client component that uses IntersectionObserver + scroll events to track active phase and progress. Update PipelineStep (server component) with CSS-only visual improvements. Modify page.tsx to wire everything together.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS, IntersectionObserver API, CSS transitions

**Spec:** `docs/superpowers/specs/2026-03-19-methode-page-refresh-design.md`

---

## Chunk 1: CSS Variables & PipelineStep Visual Refresh

### Task 1: Add CSS variables to globals.css

**Files:**
- Modify: `app/globals.css:5-24`

- [ ] **Step 1: Add `--navbar-height` and `--z-phase-nav` to `:root`**

In `app/globals.css`, add two variables inside the existing `:root` block, after `--z-grain`:

```css
  --navbar-height: 4rem;
  --z-phase-nav: 40;
```

The `:root` block should end with:
```css
  --z-cursor: 9999;
  --z-grain: 9998;
  --navbar-height: 4rem;
  --z-phase-nav: 40;
}
```

- [ ] **Step 2: Verify dev server compiles**

Run: `npm run dev` (if not already running)
Expected: No build errors. Variables available in browser DevTools under `:root`.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat(methode): add --navbar-height and --z-phase-nav CSS variables"
```

---

### Task 2: Update PipelineStep markers — responsive size + glow

**Files:**
- Modify: `components/PipelineStep.tsx`

The layerConfig uses Tailwind class names (e.g., `text-semantic-ia`) but inline box-shadow needs raw hex values. We need a color map inside PipelineStep.

- [ ] **Step 1: Add a glow color map and update marker size**

In `components/PipelineStep.tsx`, add a color map after the imports, before the interface:

```tsx
const glowColors: Record<string, string> = {
  'text-semantic-ia': '167, 139, 250',       // #A78BFA
  'text-semantic-methode': '251, 191, 36',    // #FBBF24
  'text-semantic-humain': '52, 211, 153',     // #34D399
  'text-semantic-hybrid': '192, 132, 252',    // #C084FC
}
```

- [ ] **Step 2: Update the marker div**

Find the current marker div (content match — the `shrink-0` wrapper containing `w-14 h-14 rounded-xl`):

```tsx
        <div className="shrink-0">
          <div
            className={`w-14 h-14 rounded-xl ${primary.bg} border ${primary.border} flex items-center justify-center`}
          >
            <span className={`font-mono text-sm font-bold ${primary.text}`}>{num}</span>
          </div>
        </div>
```

Replace with (uses CSS custom properties for hover glow via `group/marker` pattern):

```tsx
        <div className="shrink-0 group/marker">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${primary.bg} border ${primary.border} flex items-center justify-center transition-shadow duration-200 shadow-[0_0_16px_var(--glow)] group-hover/marker:shadow-[0_0_20px_var(--glow-hover)]`}
            style={{
              '--glow': `rgba(${glowColors[primary.text] ?? '255,255,255'}, 0.15)`,
              '--glow-hover': `rgba(${glowColors[primary.text] ?? '255,255,255'}, 0.30)`,
            } as React.CSSProperties}
          >
            <span className={`font-mono text-sm font-bold ${primary.text}`}>{num}</span>
          </div>
        </div>
```

**Verification:** If Tailwind does not compile `shadow-[0_0_16px_var(--glow)]`, fall back to using inline `style={{ boxShadow: ... }}` with a `:hover` pseudo-class in globals.css instead.

- [ ] **Step 3: Verify markers render correctly**

Run: Open `/methode` in browser.
Expected: Step markers are 56px on mobile, 64px on desktop. Each has a colored glow around it. Hover intensifies the glow.

- [ ] **Step 4: Commit**

```bash
git add components/PipelineStep.tsx
git commit -m "feat(methode): responsive step markers with semantic glow ring"
```

---

### Task 3: Replace `↓` connector with styled div

**Files:**
- Modify: `components/PipelineStep.tsx:80-85`

- [ ] **Step 1: Replace the connector arrow**

Find the connector arrow (content match — the `Connector arrow` comment block):

```tsx
      {/* Connector arrow */}
      {!isLast && (
        <div className="flex justify-start w-full pl-[1.125rem]">
          <span className="text-text-muted text-lg leading-none select-none">↓</span>
        </div>
      )}
```

Replace with a 2px colored line, centered under the marker (27px = 56px/2 - 1px on mobile, 31px = 64px/2 - 1px on desktop):

```tsx
      {/* Connector line */}
      {!isLast && (
        <div className="flex justify-start w-full pl-[27px] md:pl-[31px]">
          <div
            className="w-[2px] h-6 rounded-full"
            style={{ backgroundColor: `rgba(${glowColors[primary.text] ?? '255,255,255'}, 0.3)` }}
          />
        </div>
      )}
```

- [ ] **Step 2: Verify connectors**

Run: Open `/methode` in browser.
Expected: Thin colored vertical lines between steps, centered under the markers. No more `↓` characters.

- [ ] **Step 3: Commit**

```bash
git add components/PipelineStep.tsx
git commit -m "feat(methode): replace arrow connectors with styled vertical lines"
```

---

### Task 4: Lighten pedagogy blocks — border-left only

**Files:**
- Modify: `components/PipelineStep.tsx:66-75`

- [ ] **Step 1: Update pedagogy block styles**

Replace lines 66-75:

```tsx
            <div className="mt-4 space-y-2">
              <div className="flex gap-3 items-start rounded-lg bg-red-400/[0.04] border border-red-400/10 px-3.5 py-2.5">
                <span className="shrink-0 mt-0.5 text-red-400/70 text-xs font-semibold uppercase tracking-wider">✕</span>
                <p className="text-red-400/70 text-sm leading-relaxed">{pedagogy.mistake}</p>
              </div>
              <div className="flex gap-3 items-start rounded-lg bg-emerald-400/[0.04] border border-emerald-400/10 px-3.5 py-2.5">
                <span className="shrink-0 mt-0.5 text-emerald-400/70 text-xs font-semibold uppercase tracking-wider">→</span>
                <p className="text-emerald-400/70 text-sm leading-relaxed">{pedagogy.arbitrage}</p>
              </div>
            </div>
```

With:

```tsx
            <div className="mt-4 space-y-2">
              <div className="flex gap-3 items-start rounded-lg bg-red-400/[0.02] border-0 border-l-[3px] border-red-400/30 px-3.5 py-2.5">
                <span className="shrink-0 mt-0.5 text-red-400/60 text-xs font-semibold uppercase tracking-wider">✕</span>
                <p className="text-red-400/60 text-xs leading-relaxed">{pedagogy.mistake}</p>
              </div>
              <div className="flex gap-3 items-start rounded-lg bg-emerald-400/[0.02] border-0 border-l-[3px] border-emerald-400/30 px-3.5 py-2.5">
                <span className="shrink-0 mt-0.5 text-emerald-400/60 text-xs font-semibold uppercase tracking-wider">→</span>
                <p className="text-emerald-400/60 text-xs leading-relaxed">{pedagogy.arbitrage}</p>
              </div>
            </div>
```

Changes: `border border-red-400/10` → `border-0 border-l-[3px] border-red-400/30`, `bg-red-400/[0.04]` → `bg-red-400/[0.02]`, `text-sm` → `text-xs`, opacity from `/70` to `/60` for slightly more muted text.

- [ ] **Step 2: Verify pedagogy blocks**

Run: Open `/methode` in browser.
Expected: Pedagogy blocks have a left accent border only (no full border). Text is smaller. Background is near-invisible. Blocks are visually subordinate to the step content above.

- [ ] **Step 3: Commit**

```bash
git add components/PipelineStep.tsx
git commit -m "feat(methode): lighten pedagogy blocks with border-left-only style"
```

---

### Task 5: Add hover to tool pills

**Files:**
- Modify: `components/PipelineStep.tsx:53-61`

- [ ] **Step 1: Add hover transition to tool pill spans**

Find the tool pill className (content match — the `inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs border` line):

```tsx
                className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs border ${primary.bg} ${primary.border} ${primary.text}`}
```

Replace with (adds scale + border brightness on hover):

```tsx
                className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs border transition-all duration-200 hover:scale-105 hover:border-white/20 ${primary.bg} ${primary.border} ${primary.text}`}
```

- [ ] **Step 2: Verify hover on tool pills**

Run: Hover over any tool pill on `/methode`.
Expected: Subtle scale-up on hover with smooth 200ms transition.

- [ ] **Step 3: Commit**

```bash
git add components/PipelineStep.tsx
git commit -m "feat(methode): add hover scale micro-interaction on tool pills"
```

---

## Chunk 2: Page-Level Changes (Hero, Spacing, Delays)

### Task 6: Clean up hero — remove pedagogy intro

**Files:**
- Modify: `app/methode/page.tsx`

- [ ] **Step 1: Remove the pedagogy intro paragraph**

Find and delete (content match — the `Pedagogy intro` comment and the italic paragraph after it):

```tsx
              {/* Pedagogy intro */}
              <p className="text-text-secondary text-base leading-relaxed italic max-w-xl mx-auto">
                Vous avez les outils. Tout le monde les a. Le vrai avantage, c&apos;est de savoir quand l&apos;IA suffit, quand elle doit être entraînée sur votre métier, et quand seul un humain peut débloquer le deal.
              </p>
```

- [ ] **Step 2: Verify hero**

Run: Open `/methode`.
Expected: Hero ends with the layer legend pills, then directly into Phase 1.

- [ ] **Step 3: Commit**

```bash
git add app/methode/page.tsx
git commit -m "feat(methode): remove redundant pedagogy intro from hero"
```

---

### Task 7: Add section ids + increase phase header spacing + reduce scroll delays

**Files:**
- Modify: `app/methode/page.tsx`

**Note:** All step references in Tasks 7-10 use **content matching**, not line numbers. Prior tasks modify `page.tsx`, so line numbers will have shifted.

- [ ] **Step 1: Add `id` to the hero section**

Find (content match — the first `<section>` inside `<main>`, with `bg-bg-primary section-padding` right after `<main className="pt-20">`):
```tsx
        <section className="bg-bg-primary section-padding">
```
Replace with:
```tsx
        <section id="methode-hero" className="bg-bg-primary section-padding">
```

- [ ] **Step 2: Add `id` and `scroll-margin-top` to each phase section**

Find (content match — the `<section>` inside the `phases.map`):
```tsx
          <section
            key={phase.id}
            className={`${phase.bg} section-padding bg-gradient-to-b ${phase.gradient} to-transparent`}
```
Replace with:
```tsx
          <section
            key={phase.id}
            id={phase.id}
            className={`${phase.bg} section-padding bg-gradient-to-b ${phase.gradient} to-transparent scroll-mt-28`}
```

This gives sections `id="detection"`, `id="qualification"`, `id="conversion"`. The `scroll-mt-28` (112px) accounts for navbar (64px) + PhaseNav bar (~48px) so click-to-scroll lands below both sticky elements.

- [ ] **Step 3: Increase phase header spacing**

Find (content match — `flex items-center gap-3 mb-10`):
```tsx
                <div className="flex items-center gap-3 mb-10">
```
Replace with:
```tsx
                <div className="flex items-center gap-3 mb-12">
```

- [ ] **Step 4: Reduce ScrollReveal delay on steps**

Find (content match — `delay={i * 80}`):
```tsx
                  <ScrollReveal key={step.num} delay={i * 80}>
```
Replace with:
```tsx
                  <ScrollReveal key={step.num} delay={i * 60}>
```

- [ ] **Step 5: Verify all changes**

Run: Open `/methode`.
Expected: Phase sections have `id` attributes visible in DOM inspector. Phase headers have more breathing room. Steps animate in slightly faster.

- [ ] **Step 6: Commit**

```bash
git add app/methode/page.tsx
git commit -m "feat(methode): add section ids, increase phase spacing, faster reveal delays"
```

---

## Chunk 3: PhaseNav Component

### Task 8: Create PhaseNav client component

**Files:**
- Create: `components/ui/PhaseNav.tsx`

This is the main new component. It handles:
1. Visibility (hidden until hero scrolls out)
2. Active phase tracking (IntersectionObserver on sections)
3. Progress bar (scroll event)
4. Click-to-scroll
5. Keyboard navigation
6. Accessibility (ARIA tablist)

- [ ] **Step 1: Create the PhaseNav component**

Create `components/ui/PhaseNav.tsx`:

```tsx
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
    // Relies on scroll-mt-28 on each section (set in page.tsx, Task 7 Step 2)
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
```

- [ ] **Step 2: Verify the file compiles**

Run: `npm run dev` should not error.
Expected: No TypeScript or build errors.

- [ ] **Step 3: Commit**

```bash
git add components/ui/PhaseNav.tsx
git commit -m "feat(methode): create PhaseNav sticky tabs component with a11y"
```

---

### Task 9: Integrate PhaseNav into the methode page

**Files:**
- Modify: `app/methode/page.tsx`

- [ ] **Step 1: Add the import**

After the existing imports (line 6), add:

```tsx
import { PhaseNav } from '@/components/ui/PhaseNav'
```

- [ ] **Step 2: Place PhaseNav after the hero section**

After the closing `</section>` of the hero (the line after the layer legend section, before the `{/* ── 3 Phase sections */}` comment), insert:

```tsx
        {/* ── Phase navigation ────────────────────────────────────────────── */}
        <PhaseNav />
```

So the order becomes:
1. Hero `</section>`
2. `<PhaseNav />`
3. Phase sections map

- [ ] **Step 3: Verify full integration**

Run: Open `/methode` in browser.
Expected:
- Scroll past the hero → PhaseNav slides in below the navbar
- Scroll through phases → active tab updates automatically
- Click a tab → smooth scroll to that phase section
- Progress bar fills as you scroll through the content
- On mobile viewport → short labels shown, tabs have 44px height
- Keyboard: Tab to the nav, arrow keys to move between tabs

- [ ] **Step 4: Commit**

```bash
git add app/methode/page.tsx
git commit -m "feat(methode): integrate PhaseNav into methode page"
```

---

### Task 10: Add hover to closing section tool pills

**Files:**
- Modify: `app/methode/page.tsx`

- [ ] **Step 1: Add hover transition to closing tool pills**

Find (content match — the closing tool pill className, inside the `closingTiers.map`):
```tsx
                          className="font-mono text-[10px] px-2 py-0.5 rounded border text-semantic-humain bg-semantic-humain/10 border-semantic-humain/20"
```
Replace with:
```tsx
                          className="font-mono text-[10px] px-2 py-0.5 rounded border transition-all duration-200 hover:scale-105 hover:border-semantic-humain/40 text-semantic-humain bg-semantic-humain/10 border-semantic-humain/20"
```

- [ ] **Step 2: Commit**

```bash
git add app/methode/page.tsx
git commit -m "feat(methode): add hover micro-interaction to closing tool pills"
```

---

### Task 11: Visual review & final commit

- [ ] **Step 1: Full page walkthrough**

Open `/methode` and verify end-to-end:
1. Hero loads clean (no pedagogy intro paragraph)
2. PhaseNav appears after scrolling past hero
3. Active tab tracks scroll position
4. Progress bar fills smoothly
5. Step markers have glow rings that intensify on hover
6. Connectors are thin colored lines (not `↓`)
7. Pedagogy blocks have border-left only, smaller text
8. Tool pills scale on hover
9. Phase headers have `mb-12` spacing
10. Mobile: short labels in PhaseNav, smaller markers

- [ ] **Step 2: Fix any issues found**

Address whatever comes up in the walkthrough.

- [ ] **Step 3: Final commit if needed, then push**

```bash
git push
```
