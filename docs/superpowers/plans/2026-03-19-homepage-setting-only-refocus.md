# Homepage Setting-Only Refocus — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove closing from the homepage to focus purely on setting (RDV booking), clarify pricing, and fix USP coherence.

**Architecture:** Copy-level refocus across 7 files. No new components. The closing content remains on /methode (SEO) but disappears from the homepage flow. The API route must drop the `interest` field in sync with the frontend.

**Tech Stack:** Next.js 14, React, Tailwind CSS, Vitest, Resend (email API)

**Spec:** `docs/superpowers/specs/2026-03-19-homepage-setting-only-refocus.md`

---

## Chunk 1: Backend — API route & tests

### Task 1: Update API route to remove interest field

**Files:**
- Modify: `app/api/contact/route.ts`

- [ ] **Step 1: Remove `interest` from `ContactPayload` interface**

In `app/api/contact/route.ts`, replace the interface (lines 4-10):

```typescript
interface ContactPayload {
  firstName: string
  email: string
  phone?: string
  interest: 'setting' | 'closing' | 'les_deux'
  message?: string
}
```

with:

```typescript
interface ContactPayload {
  firstName: string
  email: string
  phone?: string
  message?: string
}
```

- [ ] **Step 2: Remove `interest` validation from `validate()`**

In the same file, remove line 23 entirely:

```typescript
  if (!data.interest || !['setting', 'closing', 'les_deux'].includes(data.interest)) {
    return 'Veuillez sélectionner un service'
  }
```

- [ ] **Step 3: Hard-code `setting` in email subject and body**

Replace line 53:
```typescript
      subject: `Nouvelle demande — ${payload.interest} — ${payload.firstName}`,
```
with:
```typescript
      subject: `Nouvelle demande — setting — ${payload.firstName}`,
```

Replace line 58:
```typescript
        `Service : ${payload.interest}`,
```
with:
```typescript
        `Service : setting`,
```

- [ ] **Step 4: Run tests to verify they need updating**

Run: `npx vitest run tests/api/contact.test.ts`

Expected: tests pass (the route is now MORE permissive — it no longer rejects missing `interest`), but test payloads still send `interest` which is dead code.

### Task 2: Update contact tests

**Files:**
- Modify: `tests/api/contact.test.ts`

- [ ] **Step 1: Remove `interest` from test payloads**

In `tests/api/contact.test.ts`, replace the "returns 200 on valid submission" test body (lines 35-39):

```typescript
    const res = await callRoute({
      firstName: 'Jean',
      email: 'jean@example.com',
      interest: 'setting',
    })
```

with:

```typescript
    const res = await callRoute({
      firstName: 'Jean',
      email: 'jean@example.com',
    })
```

Replace the "returns 422 for invalid email format" test body (lines 46-50):

```typescript
    const res = await callRoute({
      firstName: 'Jean',
      email: 'not-an-email',
      interest: 'setting',
    })
```

with:

```typescript
    const res = await callRoute({
      firstName: 'Jean',
      email: 'not-an-email',
    })
```

- [ ] **Step 2: Run tests to verify all pass**

Run: `npx vitest run tests/api/contact.test.ts`

Expected: all 3 tests PASS.

- [ ] **Step 3: Commit**

```bash
git add app/api/contact/route.ts tests/api/contact.test.ts
git commit -m "refactor(api): remove interest field from contact route — setting-only focus"
```

---

## Chunk 2: Homepage components

### Task 3: Update Hero copy

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Change eyebrow badge**

Replace line 40:
```tsx
          Setting &amp; Closing B2B
```
with:
```tsx
          Setting commercial B2B
```

- [ ] **Step 2: Change sub-hero text**

Replace line 60:
```tsx
          Votre équipe sales externalisée. Du premier message au deal signé.
```
with:
```tsx
          Votre équipe setting externalisée. Des RDV qualifiés dans votre agenda, chaque semaine.
```

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "copy(hero): recentrer sur setting — retirer mention closing"
```

### Task 4: Strip closing from PipelineSection

**Files:**
- Modify: `components/PipelineSection.tsx`

- [ ] **Step 1: Remove `closingTiers` import**

Replace line 4:
```typescript
import { closingTiers } from '@/lib/pipeline-data'
```
with nothing (delete the line).

- [ ] **Step 2: Update Accélérateur title**

Replace line 139 content:
```tsx
                Et si on n&apos;attendait plus les invitations LinkedIn&nbsp;?
```
with:
```tsx
                Quand l&apos;outbound tourne, on ouvre l&apos;inbound.
```

- [ ] **Step 3: Update Accélérateur paragraph**

Replace lines 143-146 content:
```tsx
                L&apos;outbound plafonne à 100 invitations par semaine. Pour dépasser cette limite, on active l&apos;inbound&nbsp;: posts LinkedIn, lead magnets, formulaire de scoring.
                On conseille sur les sujets et les formats de lead magnet. On travaille avec des clients qui ont déjà une stratégie de contenu active — et on a des partenaires pour ceux qui démarrent.
                Résultat&nbsp;: les leads chauds arrivent en setting adapté — message LinkedIn, appel, ou les deux — sans passer par l&apos;invitation.
```
with:
```tsx
                L&apos;outbound plafonne à 100 invitations par semaine. Une fois le pipeline calibré, on vous aide à attirer des leads qui viennent à vous&nbsp;: conseil sur les sujets de posts et formats de lead magnet, scoring des leads entrants, setting direct sans passer par l&apos;invitation.
```

- [ ] **Step 4: Delete entire closing bloc (Bloc 4 + Encodage + Bloc 5 CTA)**

Delete from `{/* ── Bloc 4 : Closing ── */}` (line 209) through the end of the `{/* ── Bloc 5 : CTA unifié ── */}` ScrollReveal closing tag (line 312). This removes:
- Pipeline Closing badge
- "Sans méthode de closing" card
- closingTiers.map grid
- "Encodage de la compétence en skill" block
- Old CTA "Ce pipeline se calibre en deux mois. Après : vous closez, on prospecte."

- [ ] **Step 5: Add new CTA block in place of deleted content**

Insert before the closing `</div>` and `</section>` (where the deleted bloc was):

```tsx
        {/* ── CTA unifié ── */}
        <ScrollReveal delay={100}>
          <div className="text-center mt-16">
            <p className="text-text-secondary text-sm mb-6 max-w-xl mx-auto">
              Ce pipeline se calibre en deux mois. Après, les RDV arrivent chaque semaine.
            </p>
            <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Réserver un appel découverte
            </ButtonGlow>
          </div>
        </ScrollReveal>
```

- [ ] **Step 6: Verify build**

Run: `npx next build 2>&1 | head -30`

Expected: no TypeScript errors, no unused import warnings.

- [ ] **Step 7: Commit**

```bash
git add components/PipelineSection.tsx
git commit -m "refactor(pipeline): remove closing bloc, reposition accélérateur as evolution phase"
```

### Task 5: Rewrite PricingComparison as single Setting card

**Files:**
- Modify: `components/PricingComparison.tsx`

- [ ] **Step 1: Replace the entire component**

Replace the full content of `components/PricingComparison.tsx` with:

```tsx
import { DarkCard } from './ui/DarkCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

export function PricingComparison() {
  return (
    <section id="pricing" className="section-padding bg-bg-secondary">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Tarifs
          </p>
          <h2 className="font-sans text-h2 text-text-primary mb-4">
            Notre offre. Zéro engagement long.
          </h2>
        </div>

        {/* Single Setting card */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <DarkCard className="p-0">
              <div className="h-1 bg-[#A78BFA]" />

              <div className="p-8 flex flex-col gap-6">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#A78BFA' }}>
                    Setting
                  </p>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
                    Des RDV qualifiés dans votre agenda, chaque semaine.
                  </h3>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Fixe mensuel</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">500&nbsp;€</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Votre setter dédié&nbsp;: listes de prospection, setup outils, rédaction des messages, invitations, suivi jusqu&apos;au RDV.
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Prime à la performance</p>
                    <p className="font-sans text-lg text-text-primary font-bold">Variable par RDV livré</p>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Le montant dépend de la complexité du setting&nbsp;:
                    </p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex gap-2 font-sans text-text-secondary text-xs">
                        <span style={{ color: '#A78BFA' }} className="shrink-0">→</span>
                        <span><span className="text-text-primary font-medium">Outbound pur</span> (pas de contenu, pas de lead magnet)&nbsp;: fourchette haute</span>
                      </div>
                      <div className="flex gap-2 font-sans text-text-secondary text-xs">
                        <span style={{ color: '#A78BFA' }} className="shrink-0">→</span>
                        <span><span className="text-text-primary font-medium">Inbound + outbound</span> (lead magnets actifs, audience existante)&nbsp;: fourchette basse</span>
                      </div>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-2 italic">
                      On calibre le montant exact ensemble, selon votre situation.
                    </p>
                  </div>
                </div>

                {/* Livrables */}
                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Inclus</p>
                  {[
                    'Setter dédié sur votre compte LinkedIn',
                    'Ciblage par signaux d\u2019achat (pas de cold spray)',
                    'Skill IA calibré sur votre marché (objections, jargon, formulations testées)',
                    'Reporting hebdomadaire',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                      <p className="font-sans text-text-primary text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Engagement */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Engagement premier mois&nbsp;:</span> si zéro RDV qualifié livré après 30 jours de collaboration active, on prolonge la phase de calibration sans frais fixes.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Déléguer mon setting →
                  </ButtonGlow>
                </div>
              </div>
            </DarkCard>
          </ScrollReveal>
        </div>

        {/* Closing mention */}
        <p className="text-center text-text-muted text-sm mt-8">
          Besoin d&apos;un accompagnement sur le closing&nbsp;? On en parle en call.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | head -30`

Expected: build succeeds, no errors.

- [ ] **Step 3: Commit**

```bash
git add components/PricingComparison.tsx
git commit -m "refactor(pricing): single setting card with livrables, engagement, closing sur devis"
```

### Task 6: Simplify CTAFinale form

**Files:**
- Modify: `components/CTAFinale.tsx`

- [ ] **Step 1: Remove Interest type, simplify FormData**

Replace lines 7-24:

```typescript
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
```

with:

```typescript
type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  firstName: string
  email: string
  phone: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  email: '',
  phone: '',
  message: '',
}
```

- [ ] **Step 2: Remove `handleInterest` function**

Delete lines 63-65:

```typescript
  const handleInterest = (value: Interest) => {
    setForm((prev) => ({ ...prev, interest: value }))
  }
```

- [ ] **Step 3: Fix GA4 event**

Replace line 92:
```typescript
          lead_type: form.interest,
```
with:
```typescript
          lead_type: 'setting',
```

- [ ] **Step 4: Remove the interest radiogroup from the form JSX**

Delete the entire block from `<div>` containing "Ce qui vous intéresse *" through its closing `</div>` (lines 173-200):

```tsx
                  <div>
                    <p className="font-sans text-sm text-text-muted mb-3">Ce qui vous intéresse *</p>
                    <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Service souhaité">
                      {(['setting', 'closing', 'les_deux'] as Interest[]).map((value) => {
                        const labels: Record<Interest, string> = {
                          setting: 'Setting',
                          closing: 'Closing',
                          les_deux: 'Les deux',
                        }
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
                                : 'border-white/[0.06] text-text-muted hover:border-white/[0.12]'
                            }`}
                          >
                            {labels[value]}
                          </button>
                        )
                      })}
                    </div>
                  </div>
```

- [ ] **Step 5: Verify build**

Run: `npx next build 2>&1 | head -30`

Expected: no TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add components/CTAFinale.tsx
git commit -m "refactor(cta): remove interest selector — setting-only contact form"
```

### Task 7: Clean up JSON-LD in layout.tsx

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update ProfessionalService description**

Replace line 56:
```typescript
      description: 'Setting et closing LinkedIn externalisés pour fondateurs, freelances et solopreneurs.',
```
with:
```typescript
      description: 'Setting LinkedIn externalisé pour fondateurs, freelances et solopreneurs.',
```

- [ ] **Step 2: Remove closing Offer and update Setting priceSpecification**

Replace the entire `itemListElement` array (lines 59-86):

```typescript
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B',
            description: 'Setting externalisé : setter dédié, méthode LinkedIn signal-based, RDV qualifiés dès la première semaine',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 2000,
              maxPrice: 5000,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Coaching Closing B2B',
            description: 'Coaching closing 2h/semaine, méthode Challenger Sale, pour fondateurs, freelances et solopreneurs B2B',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 1500,
              maxPrice: 3000,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
        ],
```

with:

```typescript
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B',
            description: 'Setting externalisé : setter dédié, méthode LinkedIn signal-based, RDV qualifiés dès la première semaine',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 500,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
        ],
```

- [ ] **Step 3: Verify build**

Run: `npx next build 2>&1 | head -30`

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "seo(jsonld): remove closing offer, update setting pricing to 500€/mois"
```

### Task 8: Final verification

- [ ] **Step 1: Run all tests**

Run: `npx vitest run`

Expected: all tests pass.

- [ ] **Step 2: Run full build**

Run: `npx next build`

Expected: build succeeds with no errors or warnings about unused imports/types.

- [ ] **Step 3: Verify no leftover closing references on homepage components**

Search for closing-related strings in homepage components:

```bash
grep -i "closing\|closer\|les_deux" components/Hero.tsx components/PipelineSection.tsx components/PricingComparison.tsx components/CTAFinale.tsx
```

Expected: no matches (closing only remains in /methode page and /ressources articles).
