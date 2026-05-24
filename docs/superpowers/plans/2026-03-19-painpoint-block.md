# PainPoint Block Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new PainPoint section on the homepage between SocialProof and PipelineSection that articulates the prospect's real problem — knowing when AI suffices vs. when human judgment is needed.

**Architecture:** Single server component (`PainPoint.tsx`) using `ScrollReveal` for animations. Inserted into `page.tsx` between existing components. No new dependencies.

**Tech Stack:** React (Next.js), Tailwind CSS, ScrollReveal (existing project component)

**Spec:** `docs/superpowers/specs/2026-03-19-painpoint-block-design.md`

---

## File Map

| Action | File | Responsibility |
|--------|------|---------------|
| Create | `components/PainPoint.tsx` | PainPoint section component |
| Modify | `app/page.tsx` | Import and render PainPoint between SocialProof and PipelineSection |

---

## Chunk 1: Implementation

### Task 1: Create the PainPoint component

**Files:**
- Create: `components/PainPoint.tsx`

- [ ] **Step 1: Create `components/PainPoint.tsx`**

Note: Tailwind JIT cannot detect dynamic class interpolations like `border-${color}/20`. Use explicit full class strings so they are picked up by content scanning.

```tsx
import { ScrollReveal } from './ui/ScrollReveal'

const pills = [
  {
    label: 'IA suffit',
    classes: 'border-semantic-ia/20 bg-semantic-ia/10 text-semantic-ia',
    dot: 'bg-semantic-ia',
  },
  {
    label: 'IA à entraîner',
    classes: 'border-semantic-methode/20 bg-semantic-methode/10 text-semantic-methode',
    dot: 'bg-semantic-methode',
  },
  {
    label: "L'humain doit décider",
    classes: 'border-semantic-humain/20 bg-semantic-humain/10 text-semantic-humain',
    dot: 'bg-semantic-humain',
  },
]

export function PainPoint() {
  return (
    <section className="section-padding py-20 text-center">
      <div className="container-max max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
            Le vrai problème
          </p>
          <h2 className="font-sans text-h2 text-text-primary mb-4">
            L&apos;IA fait le volume.
            <br className="hidden sm:block" />
            {' '}Mais qui arbitre&nbsp;?
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed max-w-xl mx-auto">
            Vous avez les outils. Tout le monde les a. Le vrai avantage,
            c&apos;est de savoir quand l&apos;IA suffit, quand elle doit être
            entraînée — et quand seul un humain peut débloquer le deal.
          </p>
        </ScrollReveal>

        <div className="flex justify-center gap-3 flex-wrap mt-8">
          {pills.map((pill, i) => (
            <ScrollReveal key={pill.label} delay={100 + i * 200}>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold ${pill.classes}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${pill.dot}`} />
                {pill.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

Note: `PainPoint` does not need `'use client'` — it is a server component that renders `ScrollReveal` (a client component) as children. No hooks or event handlers in this file.

- [ ] **Step 2: Commit**

```bash
git add components/PainPoint.tsx
git commit -m "feat: add PainPoint component with staggered pill animations"
```

### Task 2: Integrate PainPoint into the homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Add import to `app/page.tsx`**

Add after line 7 (`import { SocialProof } ...`):
```tsx
import { PainPoint } from '@/components/PainPoint'
```

- [ ] **Step 2: Insert component between SocialProof and PipelineSection**

In the JSX, between `<SocialProof />` and `<PipelineSection />`, add:
```tsx
<PainPoint />
```

Result — the `<main>` block should read:
```tsx
<main>
  <Hero />
  <SocialProof />
  <PainPoint />
  <PipelineSection />
  <PricingComparison />
  <CTAFinale />
  <BlogTeaser />
</main>
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add PainPoint section to homepage between SocialProof and Pipeline"
```

### Task 3: Visual verification

- [ ] **Step 1: Run dev server and verify the block renders correctly**

Run: `npm run dev`

Check at `http://localhost:3000`:
1. New section appears between stats bar and "Notre approche"
2. Eyebrow "Le vrai problème" is visible
3. H2 "L'IA fait le volume. Mais qui arbitre ?" displays correctly
4. Sub-text renders with proper line length
5. Three pills show with correct colors (purple, yellow, green)
6. Pills animate in sequentially on scroll (stagger ~200ms apart)
7. No layout shift or overlap with adjacent sections

- [ ] **Step 2: Check responsive (mobile)**

Verify at 375px width:
1. Text wraps properly
2. Pills wrap to multiple lines if needed
3. Spacing looks good on small screens

- [ ] **Step 3: Fix any issues found, then commit**

```bash
git add components/PainPoint.tsx app/page.tsx
git commit -m "fix: adjust PainPoint block after visual review"
```

(Skip this commit if no issues found.)
