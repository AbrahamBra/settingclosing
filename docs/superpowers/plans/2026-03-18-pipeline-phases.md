# Pipeline 3 Phases Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 9 vertical pipeline steps on the homepage with 3 condensed phase cards, and create a new /methode page with the full 9-step detail.

**Architecture:** Extract shared data (layerConfig, closingTiers) to `lib/pipeline-data.ts`. Refactor PipelineSection.tsx to render 3 phase cards. Create app/methode/page.tsx reusing PipelineStep. Update Navbar link. Migrate PipelineStep to semantic tokens.

**Tech Stack:** Next.js App Router, Tailwind CSS, existing UI components (ScrollReveal, ButtonGlow, PipelineStep)

**Spec:** `docs/superpowers/specs/2026-03-18-pipeline-phases-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `lib/pipeline-data.ts` | Create | Shared layerConfig, closingTiers, step data |
| `components/PipelineStep.tsx` | Edit | Migrate layerConfig to semantic tokens, import from shared |
| `components/PipelineSection.tsx` | Rewrite | Phase cards data + rendering, import shared data |
| `components/Navbar.tsx` | Edit (line 23) | Change Méthode href from `#pipeline` to `/methode` |
| `app/methode/page.tsx` | Create | Narrative landing page with 9 steps grouped by phase |

---

## Chunk 1: Shared Data + Homepage Refactor

### Task 1: Extract shared pipeline data

**Files:**
- Create: `lib/pipeline-data.ts`

- [ ] **Step 1: Create lib/pipeline-data.ts**

```ts
// Shared pipeline data used by PipelineSection (homepage) and /methode page

export const layerConfig = {
  ia: { label: 'IA', text: 'text-semantic-ia', bg: 'bg-semantic-ia/10', border: 'border-semantic-ia/20' },
  methode: { label: 'Méthode', text: 'text-semantic-methode', bg: 'bg-semantic-methode/10', border: 'border-semantic-methode/20' },
  hybrid: { label: 'IA + Méthode', text: 'text-semantic-hybrid', bg: 'bg-semantic-hybrid/10', border: 'border-semantic-hybrid/20' },
  humain: { label: 'Humain', text: 'text-semantic-humain', bg: 'bg-semantic-humain/10', border: 'border-semantic-humain/20' },
} as const

export type LayerKey = keyof typeof layerConfig

export const closingTiers = [
  {
    level: 'Niveau 1',
    label: 'Closer la discovery',
    threshold: '2k – 5k€',
    layers: ['methode', 'humain'] as const,
    desc: "On vous forme à vendre correctement. Discovery structurée : comprendre le problème du prospect, qualifier son urgence, ne pitcher qu'au bon moment. La base que 80% des fondateurs n'ont jamais apprise.",
    tools: ['Challenger Sale', 'Discovery'],
  },
  {
    level: 'Niveau 2',
    label: 'Challenger le pricing',
    threshold: '5k – 10k€',
    layers: ['methode', 'humain'] as const,
    desc: "Le prospect compare et négocie. On vous forme à augmenter la valeur perçue pour que le prix ne soit plus le critère de décision. Structurer une offre qui se vend d'elle-même.",
    tools: ['Valeur perçue', 'Pricing'],
  },
  {
    level: 'Niveau 3',
    label: 'Déléguer le closing',
    threshold: '10k€+',
    layers: ['humain'] as const,
    desc: "Cycle de vente long, multi-interlocuteurs. Le fondateur ne peut plus tout faire seul. On recrute, forme et manage des closers dédiés sur votre offre. Vous n'êtes plus dans le pipe — vous le gérez.",
    tools: ['Closers formés', 'Management'],
  },
] as const

export const settingSteps = [
  {
    num: '01',
    label: 'Stratégie & ciblage',
    layers: ['hybrid'] as const,
    desc: "ICP défini avec l'IA. Comptes à monitorer sélectionnés (concurrents, complémentaires). Filtres Sales Navigator configurés : fonctions, industrie, taille, triggers récents. L'humain valide les cibles — c'est la fondation du reste.",
    tools: ['Sales Navigator', 'ICP'],
  },
  {
    num: '02',
    label: 'Signaux inbound',
    layers: ['ia'] as const,
    desc: "Reactin surveille chaque interaction sur vos posts et ceux de vos concurrents. L'IA identifie qui a réagi, quand, avec quel type de contenu. On traque aussi les lead magnets à succès pour maximiser la prise de RDV — c'est là que le scoring devient clé : LinkedIn limite les demandes d'ajout par semaine et la messagerie devient vite ingérable sans priorisation.",
    tools: ['Reactin', 'Lead magnets', 'Scoring'],
  },
  {
    num: '03',
    label: 'Signaux outbound',
    layers: ['ia'] as const,
    desc: "Spyer monitore les comptes concurrents et complémentaires. Sales Navigator remonte les changements de poste, prises de fonction et signaux d'achat récents. L'IA priorise les profils à contacter.",
    tools: ['Spyer', 'Sales Navigator'],
  },
  {
    num: '04',
    label: 'Profil analysé',
    layers: ['hybrid'] as const,
    desc: "Claude analyse le profil : titre, bio, posts récents, connexions communes. Résultat déposé dans un Google Sheet — contacter ou non, contexte clé, segment probable.",
    tools: ['Claude', 'Google Sheet'],
  },
  {
    num: '05',
    label: 'Scoring & ajustement',
    layers: ['methode'] as const,
    desc: "5 niveaux de maturité d'achat. L'œil humain valide chaque profil et ajuste les critères de ciblage au fil des retours terrain. Ce jugement recalibre Sales Navigator et Spyer en continu.",
    tools: ['Scoring', 'Feedback loop'],
  },
  {
    num: '06',
    label: 'Skill maison',
    layers: ['hybrid'] as const,
    desc: "Pour les clients qui le souhaitent : un skill Claude encodé sur leur expertise — jargon métier, objections connues, exemples de messages qui ont décroché des réponses. S'affine à chaque itération via le journal de bord du setter.",
    tools: ['Claude Skill', 'Journal de bord'],
  },
  {
    num: '07',
    label: 'Message co-rédigé',
    layers: ['hybrid'] as const,
    desc: "Claude propose un draft ancré dans le skill. La méthode impose les règles : 5 phrases max, 2e phrase = fait précis tiré du profil, jamais de pitch dans le premier DM.",
    tools: ['Claude', 'Règles méthode'],
  },
  {
    num: '08',
    label: 'Validé et envoyé',
    layers: ['humain'] as const,
    desc: "Test du téléphone appliqué. Si ça ne sonnerait pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine.",
    tools: ['Validation humaine'],
  },
  {
    num: '09',
    label: 'RDV qualifié',
    layers: ['humain'] as const,
    desc: "Le setter convertit la conversation en rendez-vous. Pas de pitch — une ouverture. Les leads tièdes qui ne sont pas prêts rentrent en nurturing vers la newsletter.",
    tools: ['Setter', 'Nurturing'],
  },
] as const
```

- [ ] **Step 2: Commit**

```bash
git add lib/pipeline-data.ts
git commit -m "refactor: extract shared pipeline data to lib/pipeline-data.ts"
```

---

### Task 2: Migrate PipelineStep to semantic tokens

**Files:**
- Modify: `components/PipelineStep.tsx`

- [ ] **Step 1: Replace local layerConfig with import from shared**

Replace lines 1-15 (the interface and local layerConfig) with:

```tsx
import { layerConfig } from '@/lib/pipeline-data'
import type { LayerKey } from '@/lib/pipeline-data'

interface PipelineStepProps {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
  isLast?: boolean
}
```

The rest of the component (lines 17-77) stays exactly the same — it already references `layerConfig[layers[0]]` and `layerConfig[layer]`, which now point to the shared import with semantic token classes.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | head -20`
Expected: No TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add components/PipelineStep.tsx
git commit -m "refactor: PipelineStep uses semantic tokens via shared layerConfig"
```

---

### Task 3: Rewrite PipelineSection with phase cards

**Files:**
- Rewrite: `components/PipelineSection.tsx`

- [ ] **Step 1: Replace the entire file content**

```tsx
import { ScrollReveal } from './ui/ScrollReveal'
import { layerConfig, closingTiers } from '@/lib/pipeline-data'
import Link from 'next/link'

const settingPhases = [
  {
    phase: 1,
    label: 'PHASE 1',
    title: 'Détection',
    stepNums: ['01', '02', '03'],
    steps: ['01 Stratégie & ciblage', '02 Signaux inbound', '03 Signaux outbound'],
    summary:
      "L'IA et Sales Navigator repèrent les signaux d'achat — inbound (réactions à vos posts et ceux des concurrents) et outbound (changements de poste, prises de fonction). L'humain valide les cibles : c'est la fondation du reste.",
    tools: ['Sales Navigator', 'Reactin', 'Spyer', 'ICP', 'Lead magnets', 'Scoring'],
    layers: ['ia', 'hybrid'] as const,
    accentText: 'text-semantic-ia',
    accentBg: 'bg-semantic-ia/10',
    accentBorder: 'border-semantic-ia/20',
    accentBar: 'bg-semantic-ia',
  },
  {
    phase: 2,
    label: 'PHASE 2',
    title: 'Qualification',
    stepNums: ['04', '05', '06'],
    steps: ['04 Profil analysé', '05 Scoring & ajustement', '06 Skill maison'],
    summary:
      "Claude analyse chaque profil (titre, bio, posts récents). 5 niveaux de maturité d'achat scorés. L'œil humain recalibre en continu. Pour les clients qui le souhaitent : un skill Claude encodé sur leur expertise — jargon métier, objections connues, messages qui ont marché.",
    tools: ['Claude', 'Google Sheet', 'Scoring', 'Feedback loop', 'Claude Skill', 'Journal de bord'],
    layers: ['hybrid', 'methode'] as const,
    accentText: 'text-semantic-methode',
    accentBg: 'bg-semantic-methode/10',
    accentBorder: 'border-semantic-methode/20',
    accentBar: 'bg-semantic-methode',
  },
  {
    phase: 3,
    label: 'PHASE 3',
    title: 'Conversion',
    stepNums: ['07', '08', '09'],
    steps: ['07 Message co-rédigé', '08 Validé et envoyé', '09 RDV qualifié'],
    summary:
      "Claude propose un draft ancré dans le skill. 5 phrases max, jamais de pitch dans le premier DM. Test du téléphone appliqué : si ça ne sonne pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine. Le setter convertit la conversation en RDV.",
    tools: ['Claude', 'Règles méthode', 'Validation humaine', 'Setter', 'Nurturing'],
    layers: ['hybrid', 'humain'] as const,
    accentText: 'text-semantic-humain',
    accentBg: 'bg-semantic-humain/10',
    accentBorder: 'border-semantic-humain/20',
    accentBar: 'bg-semantic-humain',
  },
] as const

export function PipelineSection() {
  return (
    <section id="pipeline" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Architecture
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-4">
              Ce que nous automatisons. Ce que nous encodons. Ce qui reste humain.
            </h2>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              L&apos;IA détecte et co-rédige. La méthode filtre et calibre. L&apos;humain valide et décide.
              Aucun message ne part sans avoir passé les trois couches.
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline Setting zone label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-ia/20 bg-semantic-ia/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-ia">
              ⚡ Pipeline Setting
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        {/* Setting phases — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {settingPhases.map((phase, i) => (
            <ScrollReveal key={phase.phase} delay={i * 100}>
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${phase.accentBar}`} />

                {/* Phase label + step numbers */}
                <div className="flex items-center justify-between mb-3 mt-1">
                  <span className={`${phase.accentText} text-xs font-semibold uppercase tracking-widest`}>
                    {phase.label}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">
                    {phase.stepNums.join(' · ')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-2">{phase.title}</h3>

                {/* Layer tags */}
                <div className="flex gap-1.5 mb-3">
                  {phase.layers.map((layer) => {
                    const cfg = layerConfig[layer]
                    return (
                      <span
                        key={layer}
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                      >
                        {cfg.label}
                      </span>
                    )
                  })}
                </div>

                {/* Step names */}
                <ul className="mb-3 space-y-1">
                  {phase.steps.map((step) => (
                    <li key={step} className="text-text-muted text-xs font-mono">
                      {step}
                    </li>
                  ))}
                </ul>

                {/* Summary */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{phase.summary}</p>

                {/* Tool pills */}
                <div className="flex flex-wrap gap-1.5">
                  {phase.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border ${phase.accentBg} ${phase.accentBorder} ${phase.accentText}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Link to /methode */}
        <ScrollReveal>
          <p className="text-center text-sm mt-8 mb-4">
            <Link
              href="/methode"
              className="text-text-muted hover:text-accent transition-colors"
            >
              Découvrir les 9 étapes en détail →
            </Link>
          </p>
        </ScrollReveal>

        {/* Pipeline Closing zone label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8 mt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
              🤝 Pipeline Closing
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        {/* Closing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {closingTiers.map((tier, i) => (
            <ScrollReveal key={tier.level} delay={i * 100}>
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />

                {/* Level + threshold */}
                <div className="flex items-center justify-between mb-3 mt-1">
                  <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest">
                    {tier.level}
                  </span>
                  <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                    {tier.threshold}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-2">{tier.label}</h3>

                {/* Layer tags */}
                <div className="flex gap-1.5 mb-3">
                  {tier.layers.map((layer) => {
                    const cfg = layerConfig[layer]
                    return (
                      <span
                        key={layer}
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                      >
                        {cfg.label}
                      </span>
                    )
                  })}
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{tier.desc}</p>

                {/* Tool pills */}
                <div className="flex flex-wrap gap-1.5">
                  {tier.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border text-semantic-humain bg-semantic-humain/10 border-semantic-humain/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={100}>
          <p className="text-center text-text-muted text-sm mt-12 max-w-xl mx-auto">
            Ce pipeline se calibre en deux mois. Après ça, vous vous concentrez sur les appels — pas sur la prospection.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | head -20`
Expected: No errors. Homepage renders with 3 phase cards.

- [ ] **Step 3: Commit**

```bash
git add components/PipelineSection.tsx
git commit -m "feat: refactor PipelineSection to 3 phase cards

Replace 9 vertical steps with 3 condensed phase cards (Détection,
Qualification, Conversion). Add link to /methode. Migrate closing
section to semantic tokens."
```

---

### Task 4: Update Navbar link

**Files:**
- Modify: `components/Navbar.tsx:23`

- [ ] **Step 1: Replace the Méthode href**

Change line 23 from:
```tsx
    { label: 'Méthode', href: '#pipeline' },
```
to:
```tsx
    { label: 'Méthode', href: '/methode' },
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "fix: navbar Méthode link points to /methode page"
```

---

## Chunk 2: /methode Page

### Task 5: Create the /methode landing page

**Files:**
- Create: `app/methode/page.tsx`

- [ ] **Step 1: Create app/methode/page.tsx**

```tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PipelineStep } from '@/components/PipelineStep'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { layerConfig, closingTiers, settingSteps } from '@/lib/pipeline-data'

export const metadata: Metadata = {
  title: 'Notre méthode de prospection LinkedIn en 9 étapes | ChallengersLab',
  description:
    'Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d\'achat au RDV qualifié. IA, méthode et validation humaine.',
  openGraph: {
    title: 'Notre méthode de prospection LinkedIn en 9 étapes',
    description:
      'Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d\'achat au RDV qualifié.',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/methode',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Notre méthode de prospection LinkedIn en 9 étapes',
  description:
    'Pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d\'achat au RDV qualifié. IA, méthode et validation humaine.',
  url: 'https://challengerslab.fr/methode',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

const phases = [
  {
    label: 'PHASE 1 — DÉTECTION',
    accentText: 'text-semantic-ia',
    bg: 'bg-bg-secondary',
    gradient: 'bg-gradient-to-b from-[#818CF8]/[0.02] to-transparent',
    steps: settingSteps.slice(0, 3),  // steps 01-03
    lastStepIndex: 2,
  },
  {
    label: 'PHASE 2 — QUALIFICATION',
    accentText: 'text-semantic-methode',
    bg: 'bg-bg-primary',
    gradient: 'bg-gradient-to-b from-[#FBBF24]/[0.02] to-transparent',
    steps: settingSteps.slice(3, 6),  // steps 04-06
    lastStepIndex: 2,
  },
  {
    label: 'PHASE 3 — CONVERSION',
    accentText: 'text-semantic-humain',
    bg: 'bg-bg-secondary',
    gradient: 'bg-gradient-to-b from-[#34D399]/[0.02] to-transparent',
    steps: settingSteps.slice(6, 9),  // steps 07-09
    lastStepIndex: 2,
  },
]

export default function MethodePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section className="section-padding pb-0">
          <div className="container-max text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Notre méthode
              </p>
              <h1 className="font-sans text-h2 text-text-primary mb-4">
                9 étapes. 3 couches. Zéro message sans validation humaine.
              </h1>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-8">
                L&apos;IA détecte et co-rédige. La méthode filtre et calibre. L&apos;humain valide et décide.
                Chaque étape du pipeline passe par au moins une de ces trois couches.
              </p>

              {/* Layer legend */}
              <div className="flex flex-wrap justify-center gap-3">
                {(Object.keys(layerConfig) as (keyof typeof layerConfig)[]).map((key) => {
                  const cfg = layerConfig[key]
                  return (
                    <span
                      key={key}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                    >
                      {cfg.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Phase sections ──────────────────────────────────────────── */}
        {phases.map((phase) => (
          <section
            key={phase.label}
            className={`section-padding ${phase.bg} ${phase.gradient}`}
          >
            <div className="container-max">
              <ScrollReveal>
                <h2 className={`font-sans text-xs font-semibold uppercase tracking-widest ${phase.accentText} mb-10`}>
                  {phase.label}
                </h2>
              </ScrollReveal>

              <div className="max-w-2xl mx-auto">
                {phase.steps.map((step, i) => (
                  <ScrollReveal key={step.num} delay={i * 50}>
                    <PipelineStep
                      num={step.num}
                      label={step.label}
                      layers={step.layers}
                      desc={step.desc}
                      tools={[...step.tools]}
                      isLast={i === phase.lastStepIndex}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Closing section ─────────────────────────────────────────── */}
        <section className="section-padding bg-bg-primary">
          <div className="container-max">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
                  🤝 Pipeline Closing
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {closingTiers.map((tier, i) => (
                <ScrollReveal key={tier.level} delay={i * 100}>
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />
                    <div className="flex items-center justify-between mb-3 mt-1">
                      <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest">
                        {tier.level}
                      </span>
                      <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                        {tier.threshold}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">{tier.label}</h3>
                    <div className="flex gap-1.5 mb-3">
                      {tier.layers.map((layer) => {
                        const cfg = layerConfig[layer]
                        return (
                          <span
                            key={layer}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                          >
                            {cfg.label}
                          </span>
                        )
                      })}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{tier.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border text-semantic-humain bg-semantic-humain/10 border-semantic-humain/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans text-h2 text-text-primary mb-4">
                Prêt à remplir votre agenda ?
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                Ce pipeline se calibre en deux mois. Après ça, vous vous concentrez sur les appels — pas sur la prospection.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | head -30`
Expected: Build succeeds. Both `/` and `/methode` routes listed.

- [ ] **Step 3: Commit**

```bash
git add app/methode/page.tsx
git commit -m "feat: create /methode landing page with full 9-step pipeline

Narrative landing page with hero, 3 phase sections using PipelineStep,
closing tiers, and simplified CTA. Includes SEO metadata and JSON-LD."
```

---

## Chunk 3: Final Verification

### Task 6: Build verification and push

- [ ] **Step 1: Run full build**

Run: `npx next build`
Expected: Build succeeds with no errors.

- [ ] **Step 2: Push all commits**

```bash
git push origin main
```
