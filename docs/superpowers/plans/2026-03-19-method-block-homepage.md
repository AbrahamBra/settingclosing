# MethodBlock Homepage Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Le Curseur" method block to the homepage showing 3-month progression of IA/Human balance with animated progress bars.

**Architecture:** Single new component `MethodBlock.tsx` with inline data, integrated into `app/page.tsx` between SocialProof and PipelineSection. Redundant legend block removed from PipelineSection. Bar animation uses a small `useInView` hook with IntersectionObserver.

**Tech Stack:** React, Tailwind CSS, IntersectionObserver API, existing ScrollReveal component.

**Spec:** `docs/superpowers/specs/2026-03-19-method-block-homepage-design.md`

---

## File Structure

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `components/ui/useInView.ts` | Reusable hook: returns `[ref, isVisible]` via IntersectionObserver (once) |
| Create | `components/MethodBlock.tsx` | Full method block component with data, layout, animated bars |
| Modify | `app/page.tsx` | Import + render MethodBlock between SocialProof and PipelineSection |
| Modify | `components/PipelineSection.tsx` | Remove redundant Bloc 3 (legend + /methode link) |

---

## Chunk 1: useInView hook + MethodBlock component

### Task 1: Create useInView hook

**Files:**
- Create: `components/ui/useInView.ts`

- [ ] **Step 1: Create the hook**

```ts
'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, isVisible] as const
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/useInView.ts
git commit -m "feat: add useInView hook for scroll-triggered animations"
```

---

### Task 2: Create MethodBlock component

**Files:**
- Create: `components/MethodBlock.tsx`

- [ ] **Step 1: Create the component with data and layout**

The component contains:
1. Phase data as a local constant (3 phases, 4 bars each)
2. An `AnimatedBar` sub-component that uses `useInView` to animate width
3. The main layout: eyebrow + headline + subtitle + 3-column grid + callout + CTA

```tsx
'use client'

import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'
import { useInView } from './ui/useInView'

/* ── Data ── */

interface Bar {
  name: string
  percent: number
  gradient: string
  layerLabel: string
  layerColor: string
}

interface Phase {
  month: string
  keyword: string
  description: string
  borderColor: string
  keywordColor: string
  bars: Bar[]
}

const phases: Phase[] = [
  {
    month: 'Mois 1',
    keyword: 'Calibrage',
    description:
      'On apprend votre marché, votre ICP, votre ton. Beaucoup d\u2019humain partout\u00a0— c\u2019est normal.',
    borderColor: 'border-semantic-methode/[0.12]',
    keywordColor: 'text-semantic-methode',
    bars: [
      { name: 'Détection', percent: 70, gradient: 'bg-semantic-ia', layerLabel: 'IA', layerColor: 'text-semantic-ia' },
      { name: 'Qualification', percent: 25, gradient: 'bg-semantic-humain', layerLabel: 'Humain', layerColor: 'text-semantic-humain' },
      { name: 'Rédaction', percent: 15, gradient: 'bg-semantic-humain', layerLabel: 'Humain', layerColor: 'text-semantic-humain' },
      { name: 'Closing', percent: 5, gradient: 'bg-semantic-humain', layerLabel: 'Humain', layerColor: 'text-semantic-humain' },
    ],
  },
  {
    month: 'Mois 2',
    keyword: 'La machine se rode',
    description:
      'Notre savoir-faire est encodé. La détection et la qualification tournent. Le setting devient régulier.',
    borderColor: 'border-white/[0.06]',
    keywordColor: 'text-text-secondary',
    bars: [
      { name: 'Détection', percent: 88, gradient: 'bg-semantic-ia', layerLabel: 'IA', layerColor: 'text-semantic-ia' },
      { name: 'Qualification', percent: 60, gradient: 'bg-gradient-to-r from-semantic-ia to-semantic-methode', layerLabel: 'Méthode', layerColor: 'text-semantic-methode' },
      { name: 'Rédaction', percent: 40, gradient: 'bg-gradient-to-r from-semantic-methode to-semantic-humain', layerLabel: 'IA + Humain', layerColor: 'text-semantic-methode' },
      { name: 'Closing', percent: 8, gradient: 'bg-semantic-humain', layerLabel: 'Humain', layerColor: 'text-semantic-humain' },
    ],
  },
  {
    month: 'Mois 3+',
    keyword: 'La machine tourne',
    description:
      'Le setting est quasi-autonome. L\u2019humain est concentré là où il compte\u00a0: le closing et la relation.',
    borderColor: 'border-semantic-humain/[0.15]',
    keywordColor: 'text-semantic-humain',
    bars: [
      { name: 'Détection', percent: 95, gradient: 'bg-semantic-ia', layerLabel: 'IA', layerColor: 'text-semantic-ia' },
      { name: 'Qualification', percent: 85, gradient: 'bg-gradient-to-r from-semantic-ia to-semantic-methode', layerLabel: 'IA + Méthode', layerColor: 'text-semantic-ia' },
      { name: 'Rédaction', percent: 65, gradient: 'bg-gradient-to-r from-semantic-ia to-semantic-methode', layerLabel: 'IA + Méthode', layerColor: 'text-semantic-methode' },
      { name: 'Closing', percent: 8, gradient: 'bg-semantic-humain', layerLabel: 'Humain', layerColor: 'text-semantic-humain' },
    ],
  },
]

/* ── Animated bar ── */

function AnimatedBar({ bar }: { bar: Bar }) {
  const [ref, isVisible] = useInView()

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-text-secondary text-xs">{bar.name}</span>
        <span className={`font-mono text-xs ${bar.layerColor}`}>{bar.layerLabel}</span>
      </div>
      <div className="h-1 bg-[#1a1a1a] rounded-sm overflow-hidden">
        <div
          className={`h-full rounded-sm ${bar.gradient}`}
          style={{
            width: isVisible ? `${bar.percent}%` : '0%',
            transition: 'width 0.8s ease-out',
          }}
        />
      </div>
    </div>
  )
}

/* ── Main component ── */

export function MethodBlock() {
  return (
    <section id="methode" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-4">
              Notre méthode
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              On sait où placer le curseur.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Vous ne branchez pas un outil. Vous branchez une machine de setting qui s&apos;affine jusqu&apos;à tourner seule.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.month} delay={i * 80}>
              <div
                className={`rounded-xl bg-white/[0.02] border ${phase.borderColor} p-5 h-full`}
              >
                {/* Phase header */}
                <p className={`text-sm font-bold ${phase.keywordColor}`}>
                  {phase.month}
                </p>
                <p className={`text-xs ${phase.keywordColor} opacity-70 mb-3`}>
                  {phase.keyword}
                </p>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {phase.description}
                </p>

                {/* Bars */}
                <div className="flex flex-direction column gap-2.5">
                  {phase.bars.map((bar) => (
                    <AnimatedBar key={bar.name} bar={bar} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Skill callout */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mt-6">
            <div className="text-center rounded-lg border border-semantic-methode/10 bg-semantic-methode/[0.04] px-4 py-3">
              <p className="text-xs text-text-secondary">
                Chaque apprentissage est encodé en{' '}
                <strong className="text-semantic-methode">skill</strong>.
                Le savoir-faire s&apos;accumule — la machine accélère.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA link */}
        <ScrollReveal delay={150}>
          <div className="text-center mt-5">
            <Link
              href="/methode"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold text-sm"
            >
              Voir les 9 étapes en détail
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

**Note on gradients:** Tailwind's `bg-gradient-to-r` with `from-` / `to-` utility classes requires the gradient colors to be defined in `tailwind.config.ts` under `theme.extend.colors`. The existing `semantic-ia`, `semantic-methode`, `semantic-humain` colors are already defined there. If `from-semantic-ia` doesn't work, use inline `style={{ background: 'linear-gradient(to right, #A78BFA, #FBBF24)' }}` instead.

- [ ] **Step 2: Verify the component renders without errors**

Run: `npm run build 2>&1 | head -30`
Expected: No TypeScript or build errors related to MethodBlock.

- [ ] **Step 3: Commit**

```bash
git add components/MethodBlock.tsx
git commit -m "feat: add MethodBlock component with progressive cursor bars"
```

---

## Chunk 2: Homepage integration + PipelineSection cleanup

### Task 3: Add MethodBlock to homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add import and render**

Add import at top of `app/page.tsx`:
```ts
import { MethodBlock } from '@/components/MethodBlock'
```

Add `<MethodBlock />` between `<SocialProof />` and `<PipelineSection />`:
```tsx
<SocialProof />
<MethodBlock />
<PipelineSection />
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: integrate MethodBlock into homepage between SocialProof and Pipeline"
```

---

### Task 4: Remove redundant legend from PipelineSection

**Files:**
- Modify: `components/PipelineSection.tsx`

- [ ] **Step 1: Delete Bloc 3 (lines 175-207)**

Remove the entire `{/* ── Bloc 3 : Légende 3 couches + lien /methode ── */}` ScrollReveal block from `PipelineSection.tsx`. This is the block containing the 3 layer pills ("IA détecte", "Méthode qualifie", "Humain valide") and the "Voir les 9 étapes en détail" link. MethodBlock now covers this role.

Also remove the `import Link from 'next/link'` if it's no longer used elsewhere in the file (check: it is not used elsewhere — the closing tiers don't use Link).

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/PipelineSection.tsx
git commit -m "refactor: remove redundant layer legend from PipelineSection"
```

---

## Chunk 3: Visual verification

### Task 5: Verify in browser

- [ ] **Step 1: Start dev server and verify**

Run: `npm run dev`

Open `http://localhost:3000` and verify:
1. MethodBlock appears between SocialProof and PipelineSection
2. 3 columns show with correct month labels and descriptions
3. Progress bars animate from 0 to target width on scroll
4. Bars grow across columns (except Closing which stays small)
5. Skill callout and CTA link render correctly
6. Mobile responsive: columns stack on narrow viewport
7. PipelineSection no longer shows the 3-layer legend

- [ ] **Step 2: Fix gradient classes if needed**

If `bg-gradient-to-r from-semantic-ia to-semantic-methode` doesn't render, replace with inline styles:
- IA → Méthode: `style={{ background: 'linear-gradient(to right, #A78BFA, #FBBF24)' }}`
- Méthode → Humain: `style={{ background: 'linear-gradient(to right, #FBBF24, #34D399)' }}`

- [ ] **Step 3: Fix any layout issues**

Check the `flex flex-direction column` in the bars container — this should be `flex flex-col` in Tailwind. Fix if needed.

- [ ] **Step 4: Final commit if fixes were needed**

```bash
git add -u
git commit -m "fix: visual adjustments to MethodBlock after browser verification"
```
