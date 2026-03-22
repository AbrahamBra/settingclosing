# Homepage Continuation Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the monotone post-CTA homepage sections with an immersive story scroll, tool marquee, compact team strip, cross-sell teaser, and merged CTA+scarcity block.

**Architecture:** 3 new components (ToolMarquee, StoryScroll, TeamStrip) + 1 new section inline (CrossSellTeaser) + 1 modified component (CTAFinale with scarcity). Homepage rewired to new section order. All animations via CSS keyframes or framer-motion whileInView/useScroll.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS, framer-motion v12, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-22-homepage-continuation-design.md`

**Reference:** `C:\Users\abrah\challengerslab-v2\components\sections\MarqueeBanner.tsx` for marquee pattern

---

## Chunk 1: ToolMarquee + CSS Animation

### Task 1: Add marquee keyframe to globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add marquee keyframe animation**

Add at the end of `app/globals.css`:

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "style: add marquee keyframe animation"
```

---

### Task 2: Create ToolMarquee component

**Files:**
- Create: `components/ToolMarquee.tsx`

**Reference pattern:** `C:\Users\abrah\challengerslab-v2\components\sections\MarqueeBanner.tsx` — two rows, opposite directions, hover glow effect.

- [ ] **Step 1: Create the component**

```tsx
'use client'

interface Tool {
  name: string
  color: string
}

const toolsRow1: Tool[] = [
  { name: 'Claude Code', color: '#C87533' },
  { name: 'Sales Navigator', color: '#A78BFA' },
  { name: 'Reactin', color: '#A78BFA' },
  { name: 'Make', color: '#34D399' },
  { name: 'Google Sheets', color: '#6B6560' },
  { name: 'Calendly', color: '#C87533' },
]

const toolsRow2: Tool[] = [
  { name: 'Claude Cowork', color: '#C87533' },
  { name: 'Breakcold', color: '#34D399' },
  { name: 'LinkedIn', color: '#A78BFA' },
  { name: 'Notion', color: '#6B6560' },
  { name: 'HubSpot', color: '#FBBF24' },
  { name: 'Zapier', color: '#34D399' },
]

function Row({ tools, reverse = false }: { tools: Tool[]; reverse?: boolean }) {
  return (
    <div
      className="flex gap-10"
      style={{
        animation: `marquee ${reverse ? '40' : '35'}s linear infinite ${reverse ? 'reverse' : ''}`,
      }}
    >
      {[...tools, ...tools].map((tool, i) => (
        <span key={`${tool.name}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
          <span
            className="text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-300"
            style={{ color: tool.color, opacity: 0.3 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.textShadow = `0 0 20px ${tool.color}40`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.3'
              e.currentTarget.style.textShadow = 'none'
            }}
          >
            {tool.name}
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
        </span>
      ))}
    </div>
  )
}

export function ToolMarquee() {
  return (
    <section className="relative overflow-hidden py-8 border-y border-white/[0.04]">
      <p className="mb-5 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        Les outils qu&apos;on ma&icirc;trise
      </p>
      <div className="space-y-4 overflow-hidden">
        <div className="overflow-hidden">
          <Row tools={toolsRow1} />
        </div>
        <div className="overflow-hidden">
          <Row tools={toolsRow2} reverse />
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify in preview** — start dev server, navigate to `/`, temporarily add `<ToolMarquee />` after the CTA block in `app/page.tsx` to confirm it renders. Check: two rows scrolling opposite directions, hover glow works.

- [ ] **Step 3: Commit**

```bash
git add components/ToolMarquee.tsx
git commit -m "feat: add ToolMarquee component with dual-row glow effect"
```

---

## Chunk 2: StoryScroll (Sticky Counter + Panels)

### Task 3: Create StoryScroll component

**Files:**
- Create: `components/StoryScroll.tsx`

This is the most complex component. It uses:
- CSS `position: sticky` for the counter on desktop
- framer-motion `useScroll` + `useMotionValueEvent` for counter value transitions
- framer-motion `whileInView` for panel entrance animations
- framer-motion `useMotionValue` + `animate` for metric count-ups

- [ ] **Step 1: Create the data + types**

At the top of `components/StoryScroll.tsx`:

```tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

interface StoryStep {
  id: string
  counter: string
  color: string
  title: string
  desc: string
  tools: { name: string; color: string }[]
  metric?: { value: string; label: string }
  isOutcome?: boolean
}

const STEPS: StoryStep[] = [
  {
    id: 'j1',
    counter: 'J1',
    color: '#A78BFA',
    title: 'On cartographie ton march\u00e9',
    desc: 'ICP, signaux d\u2019achat, angles de message. On comprend ton offre, ton client id\u00e9al, et ce qui le fait r\u00e9agir.',
    tools: [
      { name: 'Sales Navigator', color: '#A78BFA' },
      { name: 'Claude Cowork', color: '#C87533' },
      { name: 'Google Sheets', color: '#6B6560' },
    ],
  },
  {
    id: 's1',
    counter: 'S1',
    color: '#FBBF24',
    title: 'Premiers messages envoy\u00e9s',
    desc: 'Ton setter a analys\u00e9 200+ profils. L\u2019IA a r\u00e9dig\u00e9 les messages. Il a valid\u00e9, ajust\u00e9 les angles, et lanc\u00e9 la s\u00e9quence.',
    tools: [
      { name: 'Reactin', color: '#A78BFA' },
      { name: 'Claude Code', color: '#C87533' },
      { name: 'Make', color: '#34D399' },
    ],
    metric: { value: '200+', label: 'profils analys\u00e9s' },
  },
  {
    id: 's2',
    counter: 'S2',
    color: '#34D399',
    title: 'Premier RDV dans ton agenda',
    desc: 'Les prospects int\u00e9ress\u00e9s sont qualifi\u00e9s et book\u00e9s directement dans ton calendrier. Toi, tu closes.',
    tools: [
      { name: 'Breakcold', color: '#34D399' },
      { name: 'Calendly', color: '#C87533' },
    ],
    metric: { value: '8%', label: 'taux de r\u00e9ponse' },
  },
  {
    id: 'm2',
    counter: 'M2+',
    color: '#C87533',
    title: 'Le syst\u00e8me s\u2019affine tout seul',
    desc: 'Chaque semaine, le feedback enrichit ta base de connaissance. Mois 3 n\u2019a rien \u00e0 voir avec mois 1.',
    tools: [],
    metric: { value: '1\u20134', label: 'RDV / semaine en croisi\u00e8re' },
    isOutcome: true,
  },
]
```

- [ ] **Step 2: Create the Panel sub-component**

```tsx
function Panel({ step, index }: { step: StoryStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl p-6 md:p-8 ${
        step.isOutcome
          ? 'bg-accent/5 border-2 border-accent/20'
          : 'bg-bg-secondary border border-white/[0.06]'
      }`}
    >
      {/* Mobile counter (hidden on md+) */}
      <div className="md:hidden mb-4">
        <span
          className="text-4xl font-extrabold"
          style={{ color: step.color }}
        >
          {step.counter}
        </span>
        <div className="w-10 h-[3px] mt-2 rounded-full" style={{ backgroundColor: step.color }} />
      </div>

      <h3 className="font-sans font-bold text-text-primary text-lg mb-2">
        {step.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {step.desc}
      </p>

      {/* Tool badges */}
      {step.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {step.tools.map((tool) => (
            <span
              key={tool.name}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium"
              style={{
                backgroundColor: `${tool.color}12`,
                border: `1px solid ${tool.color}25`,
                color: tool.color,
              }}
            >
              {tool.name}
            </span>
          ))}
        </div>
      )}

      {/* Metric */}
      {step.metric && (
        <div
          className="inline-flex items-baseline gap-2 px-3 py-1.5 rounded-lg"
          style={{ backgroundColor: `${step.color}10` }}
        >
          <span className="text-xl font-extrabold tabular-nums" style={{ color: step.color }}>
            {step.metric.value}
          </span>
          <span className="text-xs text-text-muted">{step.metric.label}</span>
        </div>
      )}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create the main StoryScroll component with sticky counter**

```tsx
export function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * STEPS.length), STEPS.length - 1)
    setActiveIndex(idx)
  })

  const activeStep = STEPS[activeIndex]

  return (
    <section ref={containerRef} className="section-padding bg-bg-primary">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Ton parcours
          </p>
          <h2 className="font-sans text-h2 font-extrabold text-text-primary">
            Ce qui se passe apr&egrave;s ton inscription
          </h2>
        </div>

        {/* Grid: sticky counter (desktop) + panels */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
          {/* Left: sticky counter (desktop only) */}
          <div className="hidden md:block">
            <div className="sticky top-[40vh]">
              <motion.span
                key={activeStep.counter}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="block text-7xl font-extrabold transition-colors duration-500"
                style={{ color: activeStep.color }}
              >
                {activeStep.counter}
              </motion.span>
              <div
                className="w-[60px] h-[3px] mt-3 rounded-full transition-colors duration-500"
                style={{ backgroundColor: activeStep.color }}
              />
            </div>
          </div>

          {/* Right: panels */}
          <div className="space-y-32 md:space-y-[40vh] pb-16">
            {STEPS.map((step, i) => (
              <Panel key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Verify in preview** — temporarily add to homepage, check:
  - Desktop: sticky counter on left changes as you scroll
  - Mobile: counter shows inline above each panel
  - Panels animate in on scroll
  - Tool badges render with correct colors

- [ ] **Step 5: Commit**

```bash
git add components/StoryScroll.tsx
git commit -m "feat: add StoryScroll component with sticky counter and scroll-driven panels"
```

---

## Chunk 3: TeamStrip + CrossSellTeaser + CTAFinale Update

### Task 4: Create TeamStrip component

**Files:**
- Create: `components/TeamStrip.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { ScrollReveal } from './ui/ScrollReveal'

const members = [
  { name: 'Brahim', initial: 'B', role: 'Setting', color: '#A78BFA', desc: 'Envoie les messages, qualifie, d\u00e9croche les RDV' },
  { name: 'Abraham', initial: 'A', role: 'IA & Automatisation', color: '#C87533', desc: 'Construit les outils de ciblage et les automatisations' },
  { name: 'Abdelhay', initial: 'A', role: 'Strat\u00e9gie', color: '#FBBF24', desc: 'D\u00e9finit l\u2019angle commercial et la strat\u00e9gie de conversion' },
]

export function TeamStrip() {
  return (
    <section className="section-padding">
      <div className="container-max max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-8 text-center">
            Qui fait tourner la machine
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 relative">
            {/* Connector line (desktop) */}
            <div className="hidden sm:block absolute top-6 left-[15%] right-[15%] h-px bg-white/[0.06]" />

            {members.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 relative z-10"
                  style={{ backgroundColor: `${m.color}15`, border: `2px solid ${m.color}30` }}
                >
                  <span className="font-extrabold text-sm" style={{ color: m.color }}>
                    {m.initial}
                  </span>
                </div>
                <p className="font-semibold text-text-primary text-sm">{m.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-text-muted text-xs mt-1 max-w-[160px]">{m.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/TeamStrip.tsx
git commit -m "feat: add compact TeamStrip component"
```

---

### Task 5: Update CTAFinale with scarcity banner

**Files:**
- Modify: `components/CTAFinale.tsx`

- [ ] **Step 1: Add scarcity line above heading**

In `CTAFinale.tsx`, replace the heading block:

```tsx
// OLD:
<h2 className="font-sans text-h2 font-bold text-text-primary text-center mb-16">
  Prêt à remplir ton agenda ?
</h2>

// NEW:
<div className="text-center mb-16">
  <p className="text-sm text-text-secondary mb-4">
    On accompagne 5 clients max par mois.{' '}
    <span className="font-semibold text-accent animate-pulse">
      2 places disponibles en avril.
    </span>
  </p>
  <h2 className="font-sans text-h2 font-bold text-text-primary">
    Pr&ecirc;t &agrave; remplir ton agenda ?
  </h2>
</div>
```

- [ ] **Step 2: Verify scarcity text renders above heading**

- [ ] **Step 3: Commit**

```bash
git add components/CTAFinale.tsx
git commit -m "feat: integrate scarcity banner into CTAFinale heading"
```

---

## Chunk 4: Wire Homepage

### Task 6: Rewire app/page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update imports**

Remove:
```tsx
import { GrowthJourney } from '@/components/GrowthJourney'
import { OnboardingTimeline } from '@/components/OnboardingTimeline'
import { SocialProof } from '@/components/SocialProof'
import { TeamBanner } from '@/components/TeamBanner'
```

Add:
```tsx
import { ToolMarquee } from '@/components/ToolMarquee'
import { StoryScroll } from '@/components/StoryScroll'
import { TeamStrip } from '@/components/TeamStrip'
```

- [ ] **Step 2: Replace the section order in the `<main>` block**

After the CTA 790€ `</section>` closing tag, replace everything before `<Footer />` with:

```tsx
        <ToolMarquee />

        <StoryScroll />

        <TeamStrip />

        <FAQ />

        {/* Teaser cross-sell */}
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#1A1714] border-t border-accent/10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Et apr&egrave;s ?
            </p>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
              Tu as trop de RDV ?<br />
              C&apos;est le delivery qui manque ?
            </h2>
            <p className="text-text-secondary text-sm mb-6">
              D&eacute;couvre comment acc&eacute;l&eacute;rer ta capacit&eacute; de delivery.
            </p>
            <a
              href="https://www.challengerslab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-accent border border-accent/20 hover:bg-accent/5 transition-colors"
            >
              D&eacute;couvrir web&middot;kit &rarr;
            </a>
          </div>
        </section>

        <CTAFinale />
```

Remove the standalone scarcity `<div>` that was between FAQ and CTAFinale (it's now inside CTAFinale).

- [ ] **Step 3: Verify full page flow**

Start dev server, navigate to `/`. Scroll through entire page and verify:
1. Hero renders (unchanged)
2. Pipeline visual renders (unchanged)
3. CTA 790€ renders (unchanged)
4. ToolMarquee: two rows scrolling, hover glow works
5. StoryScroll: sticky counter on desktop, panels animate in, metrics display
6. TeamStrip: horizontal compact layout with connector line
7. FAQ: accordion works (unchanged)
8. Cross-sell teaser: distinct background, ghost CTA button
9. CTAFinale: scarcity text above heading, form + Calendly work

- [ ] **Step 4: Check mobile**

Resize to mobile viewport. Verify:
- Marquee still scrolls (might overflow — should be hidden)
- StoryScroll: counter shows inline above each panel (no sticky sidebar)
- TeamStrip: stacks vertically
- Cross-sell: text wraps cleanly
- Form: full width

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rewire homepage — story scroll, tool marquee, team strip, cross-sell teaser"
```

---

## Chunk 5: Cleanup

### Task 7: Remove LinkedInShowcase (unused)

**Files:**
- Delete: `components/LinkedInShowcase.tsx`

- [ ] **Step 1: Delete the file**

```bash
rm components/LinkedInShowcase.tsx
```

- [ ] **Step 2: Verify no imports reference it**

Search for `LinkedInShowcase` across the codebase. Should return 0 results.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused LinkedInShowcase component"
```

---

### Task 8: Final verification

- [ ] **Step 1: Run build**

```bash
npx next build
```

Expected: clean build, no errors.

- [ ] **Step 2: Full scroll-through in preview**

Take screenshots of each major section for the user to review.

- [ ] **Step 3: Check no console errors**

Open browser console, verify no runtime errors during scroll.
