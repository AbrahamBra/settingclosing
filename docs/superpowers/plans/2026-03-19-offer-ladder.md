# Offer Ladder Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace 3 redundant homepage sections (MethodBlock, PipelineSection, PricingComparison) with a single `OfferLadder` component, transform `/methode` into a hub, and create 3 sub-pages for each offer's methodology.

**Architecture:** Shared offer data in `lib/offers-data.ts` feeds both the homepage `OfferLadder` and the `/methode` hub. The current `/methode` content (9 LinkedIn steps) moves to `/methode/setting-linkedin`. Two new short-form sub-pages are created for téléphonique and nurturing. Existing components (`PipelineStep`, `PhaseNav`, `DarkCard`, `ScrollReveal`, `ButtonGlow`) are reused.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS

**Spec:** `docs/superpowers/specs/2026-03-19-offer-ladder-design.md`

---

## File Structure

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `lib/offers-data.ts` | Shared offer data (3 offers with situation, description, features, pricing, color, slug, CTA) |
| Create | `components/OfferLadder.tsx` | Homepage unified section — 3 stacked blocks with maturity line |
| Create | `app/methode/setting-linkedin/page.tsx` | 9-step LinkedIn methodology (moved from `/methode`) |
| Create | `app/methode/setting-telephonique/page.tsx` | 4-step phone qualification methodology |
| Create | `app/methode/nurturing/page.tsx` | 4-step nurturing funnel methodology |
| Create | `lib/methode-telephonique-data.ts` | Step data for setting téléphonique (4 steps) |
| Create | `lib/methode-nurturing-data.ts` | Step data for nurturing (4 steps) |
| Modify | `app/page.tsx` | Replace 3 imports/components with OfferLadder |
| Modify | `app/methode/page.tsx` | Transform into hub (hero + 3 cards + CTA) |
| Modify | `components/Navbar.tsx:27` | Change `/#pricing` to `/#offres` |
| Modify | `lib/pipeline-data.ts:12-37` | Remove `closingTiers` export |
| Modify | `app/sitemap.ts` | Add 3 new routes |
| Modify | `app/layout.tsx:57-95` | Add `url` to each offer in OfferCatalog JSON-LD |
| Delete | `components/MethodBlock.tsx` | Absorbed into OfferLadder |
| Delete | `components/PipelineSection.tsx` | Absorbed into OfferLadder |
| Delete | `components/PricingComparison.tsx` | Absorbed into OfferLadder |

---

## Chunk 1: Data Layer + OfferLadder Component

### Task 1: Create shared offer data

**Files:**
- Create: `lib/offers-data.ts`

- [ ] **Step 1: Create `lib/offers-data.ts`**

```typescript
export interface OfferFeature {
  title: string
  detail: string
}

export interface OfferPricing {
  type: 'fixed' | 'custom'
  /** Only for type: 'fixed' */
  launch?: { amount: number; label: string; detail: string }
  subscription?: { amount: number; period: string; detail: string }
  /** Only for type: 'custom' */
  customLabel?: string
  customDetail?: string
}

export interface Offer {
  id: string
  slug: string
  eyebrow: string
  color: string
  situation: string
  description: string
  features: OfferFeature[]
  methodeLink: string
  pricing: OfferPricing
  guarantee?: string
  noCommitment?: boolean
  cta: { label: string; href: string }
}

export const offers: Offer[] = [
  {
    id: 'setting-linkedin',
    slug: 'setting-linkedin',
    eyebrow: 'Setting LinkedIn',
    color: '#A78BFA',
    situation: 'Je n\u2019ai pas de leads',
    description:
      'Pas d\u2019audience, pas de pipe. On prospecte pour vous sur LinkedIn avec un ciblage par signaux d\u2019achat.',
    features: [
      { title: 'Ciblage signal-based', detail: 'Intent, timing, changement de poste' },
      { title: '\u22483 RDV / semaine', detail: 'Avec les m\u00eames 100 invitations LinkedIn' },
      { title: 'Skill IA sur-mesure', detail: 'Messages calibr\u00e9s sur votre march\u00e9' },
    ],
    methodeLink: '/methode/setting-linkedin',
    pricing: {
      type: 'fixed',
      launch: { amount: 500, label: 'Mois 1 \u2014 Lancement', detail: 'Tout inclus\u00a0: setter d\u00e9di\u00e9, setup outils, ciblage, premiers messages, premiers RDV.' },
      subscription: { amount: 1000, period: '/ mois', detail: 'Pipeline \u00e0 plein r\u00e9gime + prime par RDV livr\u00e9.' },
    },
    guarantee: 'Moins de 5 RDV qualifi\u00e9s livr\u00e9s dans le mois\u00a0? Le mois suivant est offert.',
    noCommitment: true,
    cta: { label: 'D\u00e9l\u00e9guer mon setting \u2192', href: '#contact' },
  },
  {
    id: 'setting-telephonique',
    slug: 'setting-telephonique',
    eyebrow: 'Setting t\u00e9l\u00e9phonique',
    color: '#FBBF24',
    situation: 'J\u2019ai des leads mais personne pour les qualifier',
    description:
      'Les lead magnets performent, les formulaires se remplissent. Mais personne ne d\u00e9croche pour qualifier et router.',
    features: [
      { title: 'Qualification t\u00e9l\u00e9phonique', detail: 'Un sales d\u00e9di\u00e9 appelle chaque lead entrant' },
      { title: 'Tri intelligent', detail: 'Chaud \u2192 RDV, ti\u00e8de \u2192 newsletter, froid \u2192 nurturing' },
      { title: 'Z\u00e9ro lead perdu', detail: 'Chaque contact est rout\u00e9, rien ne tombe dans l\u2019oubli' },
    ],
    methodeLink: '/methode/setting-telephonique',
    pricing: {
      type: 'custom',
      customLabel: 'Sur devis',
      customDetail: 'Tarif adapt\u00e9 au volume de leads entrants et \u00e0 la complexit\u00e9 de qualification.',
    },
    cta: { label: 'Discuter de mon volume \u2192', href: '#contact' },
  },
  {
    id: 'nurturing',
    slug: 'nurturing',
    eyebrow: 'Setup Nurturing',
    color: '#C87533',
    situation: 'J\u2019ai une base \u00e9norme',
    description:
      'Des milliers de contacts, actifs ou dormants. Z\u00e9ro syst\u00e8me pour scorer, nourrir et convertir.',
    features: [
      { title: 'Scoring comportemental', detail: 'Engagement, r\u00e9cence, intent\u00a0: chaque lead a un score' },
      { title: 'S\u00e9quences personnalis\u00e9es', detail: 'Contenu adapt\u00e9 au niveau de maturit\u00e9 du lead' },
      { title: 'Routing vers appel', detail: 'Les leads chauds arrivent directement dans l\u2019agenda' },
    ],
    methodeLink: '/methode/nurturing',
    pricing: {
      type: 'fixed',
      launch: { amount: 1500, label: 'Mise en place', detail: 'Construction du syst\u00e8me sur votre stack existante. Puis prime par RDV livr\u00e9.' },
    },
    cta: { label: 'Construire mon syst\u00e8me \u2192', href: '#contact' },
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit 2>&1 | tail -5`
Expected: No errors (project-wide check)

- [ ] **Step 3: Commit**

```bash
git add lib/offers-data.ts
git commit -m "feat: add shared offer data for OfferLadder and methode hub"
```

---

### Task 2: Create OfferLadder component

**Files:**
- Create: `components/OfferLadder.tsx`

- [ ] **Step 1: Create the component**

```tsx
import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'
import { ButtonGlow } from './ui/ButtonGlow'
import { offers } from '@/lib/offers-data'
import type { Offer } from '@/lib/offers-data'

function OfferBlock({ offer, isLast }: { offer: Offer; isLast: boolean }) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'
  const ctaHref = offer.cta.href === '#contact' ? calendlyUrl : offer.cta.href

  return (
    <div className="relative flex gap-5 md:gap-8">
      {/* Maturity line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-4 h-4 rounded-full border-2 shrink-0"
          style={{ borderColor: offer.color, backgroundColor: `${offer.color}33` }}
          aria-hidden="true"
        />
        {!isLast && (
          <div className="w-[2px] flex-1 min-h-[2rem] bg-white/[0.06]" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-10 md:pb-14">
        {/* Eyebrow */}
        <p
          className="font-mono text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: offer.color }}
        >
          {offer.eyebrow}
        </p>

        {/* Situation */}
        <h3 className="font-sans text-lg md:text-xl font-bold text-text-primary mb-2">
          {offer.situation}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xl">
          {offer.description}
        </p>

        {/* Features */}
        <div className="flex flex-col gap-2 mb-4">
          {offer.features.map((f) => (
            <div key={f.title} className="flex items-start gap-2.5">
              <span className="text-sm mt-0.5 shrink-0" style={{ color: offer.color }}>&rarr;</span>
              <div>
                <span className="text-text-primary text-sm font-semibold">{f.title}</span>
                <span className="text-text-secondary text-xs ml-1.5">{f.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Method link */}
        <Link
          href={offer.methodeLink}
          className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-colors hover:opacity-80"
          style={{ color: offer.color }}
        >
          Voir la m&eacute;thode en d&eacute;tail
          <span aria-hidden="true">&rarr;</span>
        </Link>

        {/* Pricing zone */}
        <div
          className="rounded-xl border p-5 md:p-6"
          style={{
            borderColor: `${offer.color}33`,
            background: `linear-gradient(135deg, ${offer.color}08 0%, ${offer.color}03 100%)`,
          }}
        >
          {offer.pricing.type === 'fixed' ? (
            <div className="space-y-3">
              {offer.pricing.launch && (
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {offer.pricing.launch.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-sans text-2xl text-text-primary font-bold">
                      {offer.pricing.launch.amount.toLocaleString('fr-FR')}&nbsp;&euro;
                    </p>
                    {!offer.pricing.subscription && (
                      <span className="font-sans text-text-muted text-sm">forfait</span>
                    )}
                  </div>
                  <p className="font-sans text-text-secondary text-xs mt-1">
                    {offer.pricing.launch.detail}
                  </p>
                </div>
              )}
              {offer.pricing.subscription && (
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {offer.pricing.launch ? 'Mois 2+ \u2014 Abonnement' : ''}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="font-sans text-2xl text-text-primary font-bold">
                      {offer.pricing.subscription.amount.toLocaleString('fr-FR')}&nbsp;&euro;
                    </p>
                    <span className="font-sans text-text-muted text-sm">
                      {offer.pricing.subscription.period}
                    </span>
                  </div>
                  <p className="font-sans text-text-secondary text-xs mt-1">
                    {offer.pricing.subscription.detail}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <p className="font-sans text-text-muted text-sm mb-1">{offer.pricing.customLabel}</p>
              <p className="font-sans text-text-secondary text-xs">{offer.pricing.customDetail}</p>
            </div>
          )}

          {/* Guarantee */}
          {offer.guarantee && (
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <div className="flex items-start gap-2">
                <span style={{ color: offer.color }} className="shrink-0 mt-0.5">&check;</span>
                <p className="font-sans text-text-primary text-sm">
                  <span className="font-semibold">Garantie&nbsp;:</span> {offer.guarantee}
                </p>
              </div>
            </div>
          )}
          {offer.noCommitment && (
            <div className="flex items-start gap-2 mt-2">
              <span style={{ color: offer.color }} className="shrink-0 mt-0.5">&check;</span>
              <p className="font-sans text-text-primary text-sm">
                <span className="font-semibold">Sans engagement.</span> R&eacute;siliable &agrave; tout moment.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-4">
            <ButtonGlow as="a" href={ctaHref} target="_blank" rel="noopener noreferrer" className="w-full text-center">
              {offer.cta.label}
            </ButtonGlow>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OfferLadder() {
  return (
    <section id="offres" className="section-padding bg-bg-secondary">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-semantic-methode mb-4">
              Notre approche
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              Vous en &ecirc;tes o&ugrave;&nbsp;?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Trois niveaux de maturit&eacute;, trois r&eacute;ponses. Trouvez la v&ocirc;tre.
            </p>
          </div>
        </ScrollReveal>

        {/* Offer blocks */}
        <div className="flex flex-col">
          {offers.map((offer, i) => (
            <ScrollReveal key={offer.id} delay={i * 80}>
              <OfferBlock offer={offer} isLast={i === offers.length - 1} />
            </ScrollReveal>
          ))}
        </div>

        {/* Hub link */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-4">
            <Link
              href="/methode"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm"
            >
              D&eacute;couvrir notre m&eacute;thode
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build compiles**

Run: `npx next build 2>&1 | tail -10`
Expected: Compiles without errors (page not yet wired up, but component should compile)

- [ ] **Step 3: Commit**

```bash
git add components/OfferLadder.tsx
git commit -m "feat: create OfferLadder component — unified maturity-based offer section"
```

---

### Task 3: Wire OfferLadder into homepage + update Navbar

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/Navbar.tsx:27`

- [ ] **Step 1: Replace 3 sections with OfferLadder in `app/page.tsx`**

Replace imports and usage of `MethodBlock`, `PipelineSection`, `PricingComparison` with `OfferLadder`.

The file should become:
```tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { OfferLadder } from '@/components/OfferLadder'
import { BlogTeaser } from '@/components/BlogTeaser'
import { SocialProof } from '@/components/SocialProof'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { CursorGlowClient } from '@/components/CursorGlowClient'
import { TeamBanner } from '@/components/TeamBanner'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
  description:
    'ChallengersLab gère votre setting commercial LinkedIn : setter dédié, méthode signal-based, RDV qualifiés dès la première semaine. Pour fondateurs, freelances et solopreneurs.',
  alternates: {
    canonical: 'https://challengerslab.fr',
  },
}

export default function Home() {
  return (
    <>
      <CursorGlowClient />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <OfferLadder />
        <FAQ />
        <TeamBanner />
        <CTAFinale />
        <BlogTeaser />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Update Navbar link from `/#pricing` to `/#offres`**

In `components/Navbar.tsx`, line 27:
```
Old: { label: 'Offres', href: '/#pricing' },
New: { label: 'Offres', href: '/#offres' },
```

Also update `isActive` check on line 32:
```
Old: if (href === '/#pricing') return false
New: if (href === '/#offres') return false
```

- [ ] **Step 3: Verify homepage builds and renders**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/Navbar.tsx
git commit -m "feat: wire OfferLadder into homepage, update Navbar anchor"
```

---

### Task 4: Delete replaced components

**Files:**
- Delete: `components/MethodBlock.tsx`
- Delete: `components/PipelineSection.tsx`
- Delete: `components/PricingComparison.tsx`

- [ ] **Step 1: Verify no other files import these components**

Run:
```bash
grep -r "MethodBlock\|PipelineSection\|PricingComparison" --include="*.tsx" --include="*.ts" -l | grep -v node_modules | grep -v .next
```

Expected: Only the 3 component files themselves (if `app/page.tsx` was already updated in Task 3)

- [ ] **Step 2: Delete the 3 files**

```bash
rm components/MethodBlock.tsx components/PipelineSection.tsx components/PricingComparison.tsx
```

- [ ] **Step 3: Verify build still passes**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add -u components/MethodBlock.tsx components/PipelineSection.tsx components/PricingComparison.tsx
git commit -m "chore: remove MethodBlock, PipelineSection, PricingComparison — absorbed into OfferLadder"
```

---

### Task 5: Clean up pipeline-data.ts

**Files:**
- Modify: `lib/pipeline-data.ts:12-37`

- [ ] **Step 1: Verify `closingTiers` is not imported anywhere**

Run:
```bash
grep -r "closingTiers" --include="*.tsx" --include="*.ts" -l | grep -v node_modules | grep -v .next | grep -v pipeline-data.ts
```

Expected: No results (only specs/plans reference it)

- [ ] **Step 2: Remove `closingTiers` from `lib/pipeline-data.ts`**

Delete lines 12-37 (the entire `closingTiers` export).

- [ ] **Step 3: Verify build passes**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add lib/pipeline-data.ts
git commit -m "chore: remove unused closingTiers from pipeline-data"
```

---

## Chunk 2: Methode Hub + Sub-Pages

### Task 6: Create `/methode/setting-linkedin` sub-page

**Files:**
- Create: `app/methode/setting-linkedin/page.tsx`

- [ ] **Step 1: Create the page**

Copy the **entire** content of `app/methode/page.tsx` to `app/methode/setting-linkedin/page.tsx`. This includes:
- All imports (`Navbar`, `Footer`, `ButtonGlow`, `ScrollReveal`, `PipelineStep`, `PhaseNav`, `layerConfig`, `settingSteps`)
- The `phases` array (detection, qualification, conversion) with gradients and accent colors
- The `legendLayers` array
- The `webPageSchema` JSON-LD
- The full JSX: hero section, PhaseNav, 3 phase sections with `PipelineStep` components (including `pedagogy` prop), CTA section

Then change **only** these values:
- Metadata title: `"Setting LinkedIn — Méthode en 9 étapes | ChallengersLab"`
- Metadata description: `"Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d'achat au RDV qualifié. IA, méthode et validation humaine."`  (keep current)
- Metadata canonical: `https://challengerslab.fr/methode/setting-linkedin`
- OpenGraph url: `https://challengerslab.fr/methode/setting-linkedin`
- WebPage schema url: `https://challengerslab.fr/methode/setting-linkedin`
- Export function name: `SettingLinkedinMethodePage`

**Critical:** Preserve PhaseNav, phase gradient backgrounds, layer legend, pedagogy blocks, and all PipelineStep props including `pedagogy={step.pedagogy}`.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add app/methode/setting-linkedin/page.tsx
git commit -m "feat: create /methode/setting-linkedin sub-page with 9-step pipeline"
```

---

### Task 7: Create step data for Setting téléphonique

**Files:**
- Create: `lib/methode-telephonique-data.ts`

- [ ] **Step 1: Create the step data file**

```typescript
import type { LayerKey } from './pipeline-data'

export const telephoniqueSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
}[] = [
  {
    num: '01',
    label: 'R\u00e9ception du lead',
    layers: ['ia'] as const,
    desc: "Le lead entre via formulaire, lead magnet ou demande de contact. L\u2019IA le route automatiquement vers la file de qualification avec les informations cl\u00e9s extraites\u00a0: source, entreprise, besoin d\u00e9clar\u00e9.",
    tools: ['CRM', 'Routing automatique'],
  },
  {
    num: '02',
    label: 'Appel de qualification',
    layers: ['humain'] as const,
    desc: "Un sales d\u00e9di\u00e9, form\u00e9 \u00e0 la m\u00e9thode Challenger Sale par Abdelhay, appelle chaque lead entrant. Grille de scoring structur\u00e9e\u00a0: budget, autorit\u00e9, besoin, timing. L\u2019objectif\u00a0: comprendre le probl\u00e8me, pas pitcher.",
    tools: ['Challenger Sale', 'Grille de scoring'],
  },
  {
    num: '03',
    label: 'Routing',
    layers: ['methode'] as const,
    desc: "Chaque lead est rout\u00e9 selon son score\u00a0: les leads chauds partent directement en RDV, les ti\u00e8des rejoignent la newsletter pour continuer la relation, les froids entrent dans une s\u00e9quence de nurturing automatis\u00e9e. Z\u00e9ro lead perdu.",
    tools: ['Scoring', 'Routing'],
  },
  {
    num: '04',
    label: 'Feedback loop',
    layers: ['hybrid'] as const,
    desc: "Les donn\u00e9es terrain recalibrent le scoring chaque semaine. Quels crit\u00e8res pr\u00e9disent un RDV\u00a0? Quels signaux trompent\u00a0? Le syst\u00e8me s\u2019affine \u00e0 chaque cycle.",
    tools: ['Feedback loop', 'Recalibrage'],
  },
] as const
```

- [ ] **Step 2: Commit**

```bash
git add lib/methode-telephonique-data.ts
git commit -m "feat: add step data for setting téléphonique methodology"
```

---

### Task 8: Create `/methode/setting-telephonique` sub-page

**Files:**
- Create: `app/methode/setting-telephonique/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { telephoniqueSteps } from '@/lib/methode-telephonique-data'

export const metadata: Metadata = {
  title: 'Setting téléphonique — Qualification et routing | ChallengersLab',
  description:
    'Notre méthode de qualification téléphonique : chaque lead entrant est appelé, scoré et routé. Méthode Challenger Sale, zéro lead perdu.',
  alternates: {
    canonical: 'https://challengerslab.fr/methode/setting-telephonique',
  },
  openGraph: {
    title: 'Setting téléphonique — Qualification et routing | ChallengersLab',
    description:
      'Notre méthode de qualification téléphonique : chaque lead entrant est appelé, scoré et routé. Méthode Challenger Sale, zéro lead perdu.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://challengerslab.fr/methode/setting-telephonique',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Setting téléphonique — Qualification et routing',
  description:
    'Notre méthode de qualification téléphonique : chaque lead entrant est appelé, scoré et routé.',
  url: 'https://challengerslab.fr/methode/setting-telephonique',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

export default function SettingTelephoniquePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#FBBF24' }}>
                Setting t&eacute;l&eacute;phonique
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Vos leads entrent. Un sales les qualifie.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Chaque lead entrant est appel&eacute;, scor&eacute; et rout&eacute;.
                M&eacute;thode Challenger Sale, grille de qualification structur&eacute;e, z&eacute;ro lead oubli&eacute;.
              </p>

              {/* Layer legend */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {legendLayers.map((layer) => {
                  const cfg = layerConfig[layer]
                  return (
                    <span
                      key={layer}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                    >
                      {cfg.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            {telephoniqueSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <PipelineStep
                  num={step.num}
                  label={step.label}
                  layers={[...step.layers]}
                  desc={step.desc}
                  tools={[...step.tools]}
                  isLast={i === telephoniqueSteps.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Des leads qui entrent, des RDV qui sortent.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Discutons de votre volume de leads et de la qualification adapt&eacute;e &agrave; votre offre.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Discuter de mon volume
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

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add app/methode/setting-telephonique/page.tsx
git commit -m "feat: create /methode/setting-telephonique sub-page"
```

---

### Task 9: Create step data for Nurturing

**Files:**
- Create: `lib/methode-nurturing-data.ts`

- [ ] **Step 1: Create the step data file**

```typescript
import type { LayerKey } from './pipeline-data'

export const nurturingSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
}[] = [
  {
    num: '01',
    label: 'Scoring comportemental',
    layers: ['ia'] as const,
    desc: "L\u2019IA analyse votre base existante\u00a0: engagement, r\u00e9cence, interactions pass\u00e9es, signaux d\u2019intent. Chaque contact re\u00e7oit un score de maturit\u00e9 qui d\u00e9termine son parcours.",
    tools: ['Scoring', 'Analyse comportementale'],
  },
  {
    num: '02',
    label: 'Segmentation',
    layers: ['methode'] as const,
    desc: "D\u00e9coupage de la base par niveau de maturit\u00e9 du funnel. Les contacts froids, ti\u00e8des et chauds re\u00e7oivent des parcours diff\u00e9rents. La m\u00e9thode structure les crit\u00e8res de passage d\u2019un segment \u00e0 l\u2019autre.",
    tools: ['Segmentation', 'Funnel de maturit\u00e9'],
  },
  {
    num: '03',
    label: 'S\u00e9quences personnalis\u00e9es',
    layers: ['hybrid'] as const,
    desc: "Contenu adapt\u00e9 au niveau de maturit\u00e9 de chaque segment. Newsletters, webinars, contenus exclusifs. Upsell vers une communaut\u00e9 Skool ou une offre low ticket pour acc\u00e9l\u00e9rer la conversion.",
    tools: ['S\u00e9quences email', 'Contenu adapt\u00e9'],
  },
  {
    num: '04',
    label: 'Routing vers appel',
    layers: ['humain'] as const,
    desc: "Les leads dont le score franchit le seuil arrivent directement dans l\u2019agenda commercial. Le syst\u00e8me s\u2019affine \u00e0 chaque cycle\u00a0: plus le temps passe, plus la machine est pr\u00e9cise.",
    tools: ['Routing automatique', 'Agenda commercial'],
  },
] as const
```

- [ ] **Step 2: Commit**

```bash
git add lib/methode-nurturing-data.ts
git commit -m "feat: add step data for nurturing methodology"
```

---

### Task 10: Create `/methode/nurturing` sub-page

**Files:**
- Create: `app/methode/nurturing/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { nurturingSteps } from '@/lib/methode-nurturing-data'

export const metadata: Metadata = {
  title: 'Nurturing — Funnel de conversion par maturité | ChallengersLab',
  description:
    'Notre système de nurturing : scoring comportemental, séquences personnalisées et routing automatique. Transformez votre base dormante en RDV qualifiés.',
  alternates: {
    canonical: 'https://challengerslab.fr/methode/nurturing',
  },
  openGraph: {
    title: 'Nurturing — Funnel de conversion par maturité | ChallengersLab',
    description:
      'Notre système de nurturing : scoring comportemental, séquences personnalisées et routing automatique.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://challengerslab.fr/methode/nurturing',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nurturing — Funnel de conversion par maturité',
  description:
    'Notre système de nurturing : scoring comportemental, séquences personnalisées et routing automatique.',
  url: 'https://challengerslab.fr/methode/nurturing',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

export default function NurturingPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C87533' }}>
                Setup Nurturing
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Votre base de leads. Notre syst&egrave;me.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Scoring, segmentation, s&eacute;quences personnalis&eacute;es et routing automatique.
                On construit le workflow qui transforme votre base dormante en RDV qualifi&eacute;s.
              </p>

              {/* Layer legend */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {legendLayers.map((layer) => {
                  const cfg = layerConfig[layer]
                  return (
                    <span
                      key={layer}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                    >
                      {cfg.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            {nurturingSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <PipelineStep
                  num={step.num}
                  label={step.label}
                  layers={[...step.layers]}
                  desc={step.desc}
                  tools={[...step.tools]}
                  isLast={i === nurturingSteps.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Votre base a du potentiel. On le d&eacute;bloque.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Construisons ensemble le syst&egrave;me qui transforme vos contacts en rendez-vous.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Construire mon syst&egrave;me
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

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add app/methode/nurturing/page.tsx
git commit -m "feat: create /methode/nurturing sub-page"
```

---

### Task 11: Transform `/methode` into hub page

**Files:**
- Modify: `app/methode/page.tsx`

- [ ] **Step 1: Rewrite `app/methode/page.tsx` as a hub**

Replace the entire file. The hub shows a hero introducing the 3 maturity levels, then 3 cards linking to the sub-pages, then a CTA.

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { offers } from '@/lib/offers-data'

export const metadata: Metadata = {
  title: 'Notre méthode | ChallengersLab',
  description:
    'Trois niveaux de maturité, trois méthodes. Découvrez comment ChallengersLab remplit votre agenda avec le Setting LinkedIn, le Setting téléphonique ou le Nurturing.',
  alternates: {
    canonical: 'https://challengerslab.fr/methode',
  },
  openGraph: {
    title: 'Notre méthode | ChallengersLab',
    description:
      'Trois niveaux de maturité, trois méthodes. Setting LinkedIn, Setting téléphonique, Nurturing.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://challengerslab.fr/methode',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Notre méthode',
  description:
    'Trois niveaux de maturité, trois méthodes pour remplir votre agenda.',
  url: 'https://challengerslab.fr/methode',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
}

export default function MethodeHubPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Notre m&eacute;thode
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Trois niveaux de maturit&eacute;. Trois m&eacute;thodes.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Chaque entreprise a un niveau de maturit&eacute; commerciale diff&eacute;rent.
                Notre approche s&apos;adapte &agrave; votre situation et construit le syst&egrave;me
                qui vous am&egrave;ne des RDV qualifi&eacute;s.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 3 offer cards */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <ScrollReveal key={offer.id} delay={i * 80}>
                <Link
                  href={offer.methodeLink}
                  className="group block rounded-xl border p-6 h-full transition-all duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: `${offer.color}33`,
                    background: `linear-gradient(135deg, ${offer.color}0F 0%, ${offer.color}05 100%)`,
                  }}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: offer.color }} />
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-widest"
                      style={{ color: offer.color }}
                    >
                      {offer.eyebrow}
                    </span>
                  </div>

                  {/* Situation */}
                  <h2 className="font-sans text-lg font-bold text-text-primary mb-2">
                    {offer.situation}
                  </h2>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {offer.description}
                  </p>

                  {/* Arrow */}
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                    style={{ color: offer.color }}
                  >
                    D&eacute;couvrir la m&eacute;thode
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Pr&ecirc;t &agrave; remplir votre agenda&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Quel que soit votre niveau de maturit&eacute;, les premiers RDV arrivent d&egrave;s la premi&egrave;re semaine.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
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

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add app/methode/page.tsx
git commit -m "refactor: transform /methode into hub page with 3 offer cards"
```

---

## Chunk 3: SEO + Structured Data

### Task 12: Update sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add 3 new routes after the existing `/methode` entry**

First, change the existing `/methode` entry priority from `0.9` to `0.8` (it is now a lightweight hub, not the content-heavy page). Then insert after it:
```typescript
    {
      url: 'https://challengerslab.fr/methode/setting-linkedin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://challengerslab.fr/methode/setting-telephonique',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://challengerslab.fr/methode/nurturing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
```

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "seo: add 3 methode sub-pages to sitemap"
```

---

### Task 13: Update JSON-LD OfferCatalog with URLs

**Files:**
- Modify: `app/layout.tsx:57-95`

- [ ] **Step 1: Add `url` to existing offers and add Setting telephonique offer**

In `app/layout.tsx`, within the `hasOfferCatalog.itemListElement` array:

1. Add `url` property to each existing offer:
   - First offer (Setting B2B — Lancement): add `url: 'https://challengerslab.fr/methode/setting-linkedin'`
   - Second offer (Setting B2B — Abonnement): add `url: 'https://challengerslab.fr/methode/setting-linkedin'`
   - Third offer (Setup Nurturing): add `url: 'https://challengerslab.fr/methode/nurturing'`

2. Add a new fourth offer entry for Setting téléphonique (insert after the Abonnement offer):
```json
{
  "@type": "Offer",
  "name": "Setting téléphonique — Qualification de leads",
  "description": "Qualification téléphonique de vos leads entrants : chaque lead est appelé, scoré et routé. Méthode Challenger Sale, zéro lead perdu.",
  "url": "https://challengerslab.fr/methode/setting-telephonique"
}
```
Note: no `priceSpecification` since this offer is "sur devis" (custom pricing).

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | tail -10`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "seo: add url to OfferCatalog JSON-LD entries"
```

---

### Task 14: Final verification

- [ ] **Step 1: Full build**

Run: `npx next build 2>&1 | tail -20`
Expected: All pages compile, no errors

- [ ] **Step 2: Verify all new routes exist**

Run: `ls -la .next/server/app/methode/`
Expected: See `setting-linkedin/`, `setting-telephonique/`, `nurturing/` directories plus the hub `page.html`

- [ ] **Step 3: Verify old components are gone**

Run: `ls components/MethodBlock.tsx components/PipelineSection.tsx components/PricingComparison.tsx 2>&1`
Expected: "No such file or directory" for all 3

- [ ] **Step 4: Verify no broken imports**

Run: `grep -r "MethodBlock\|PipelineSection\|PricingComparison" --include="*.tsx" --include="*.ts" -l | grep -v node_modules | grep -v .next | grep -v docs/`
Expected: No results
