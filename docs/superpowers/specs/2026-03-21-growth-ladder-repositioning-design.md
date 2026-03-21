# Growth Ladder Repositioning — Design Spec

**Date:** 2026-03-21
**Scope:** Full site repositioning for solopreneur / small team / AI-first target
**Approach:** Growth Ladder (Approach A) — 3-phase journey replacing parallel offer tabs

---

## 1. Target Audience

- Solopreneurs with a validated offer, doing 5-15k/mo CA
- Small teams (2-5 people) without a dedicated SDR
- AI-first companies who understand and value AI methodology
- NOT traditional PMEs, NOT large companies shopping for agencies

## 2. Core Positioning Shift

**Before:** "Le setting, mais en mieux" — generic, compared to agencies (2-4k)
**After:** "Tu as une offre qui marche. Il te manque un pipeline." — speaks directly to solopreneurs, compared to doing it yourself

The real competitor is NOT agencies. It's the solopreneur doing prospection alone (0€ + 8h/week) or using an automation tool (100-200€/mo).

---

## 3. Homepage Changes

### 3.1 Hero

**Current:** "Le setting, mais en mieux"
**New:**
- Headline: "Tu as une offre qui marche. Il te manque un pipeline."
- Subheadline: "On genere tes RDV qualifies avec l'IA pour que tu te concentres sur ce que tu fais de mieux : closer."
- CTA: "Voir comment ca marche" → scroll to growth journey

### 3.2 SituationPicker → GrowthJourney

Replace the current `SituationPicker` (3 parallel situation cards) with a **3-phase visual journey**:

- **Phase 1 : Lancer** — "Tu as une offre mais zero pipeline" → Setting LinkedIn
- **Phase 2 : Qualifier** — "Tu as des leads mais pas le temps de qualifier" → Setting Telephone
- **Phase 3 : Scaler** — "Tu as une audience, transforme-la en clients" → Setting Newsletter

Each phase is a clickable card linking to the corresponding section on the tarifs page.
Visual treatment: horizontal steps connected by arrows/lines showing progression.

### 3.3 SocialProof

Stats reframed for solopreneurs:
- "20+ solopreneurs accompagnes" (was "entrepreneurs")
- "400+ RDV qualifies generes" (unchanged)
- "<7j avant ton premier RDV" (unchanged)

No fake testimonials. Real testimonials will be added when available.

### 3.4 TeamBanner

Unchanged.

### 3.5 FAQ (Homepage)

Rewritten — see Section 8 below.

---

## 4. Tarifs Page — Growth Ladder Structure

### 4.1 Overall Layout

**Current:** Tabbed interface (PricingPicker) with 3 equal-weight tabs + bundle tab.
**New:** Vertical scroll layout with 3 "steps" (marches), each progressively smaller in visual weight.

```
HERO: "Choisis ton niveau de croissance"

PHASE 1: LANCER (largest card, most visual weight)
  Badge: "La ou 80% de nos clients commencent"
  Setting LinkedIn | 790€/mo | Setup OFFERT
  [MiniSimulator] [CTA: Demarrer]

  ← transition arrow: "Quand tu recois des leads entrants"

PHASE 2: QUALIFIER (medium card)
  Tag: "Addon"
  Setting Telephone | 175€/demi-journee | A la carte
  [MiniSimulator] [CTA: Ajouter]
  "2-4 demi-journees/mois en moyenne"

  ← transition arrow: "Quand tu as une base a monetiser"

PHASE 3: SCALER (standard card)
  Tag: "Pour les bases 1000+ contacts"
  Setting Newsletter | 990€/mo | Setup en 3x
  [MiniSimulator] [CTA: Passer a l'echelle]

PACK CROISSANCE (optional bundle at bottom)
```

### 4.2 Price Restructure

| Offer | Before | After | Rationale |
|-------|--------|-------|-----------|
| LinkedIn setup | 490€ | **Offert** (absorbed into service) | Reduce day-1 friction from 1280€ to 790€ |
| LinkedIn monthly | 790€/mo | 790€/mo | Unchanged — right price point for target |
| Telephone | 350€/jour | **175€/demi-journee** | Reframe for occasional use (2-4 half-days/mo) |
| Telephone setup | 490€ | 490€ | Unchanged |
| Newsletter setup | 2490€ one-shot | **830€/mo x3** (integrated into subscription) | Remove cash-flow barrier for solopreneurs |
| Newsletter monthly | 990€/mo x3 | 990€/mo (starts month 4) | Clear transition after setup period |

**Day-1 cost for LinkedIn:** 1,280€ → **790€** (-38%)

### 4.3 Comparison Section

**Current:** Setting vs. Agence classique vs. SDR freelance
**New:** "Toi seul" vs. "Toi + un outil" vs. "Toi + SettingClosing"

| | Toi seul | Toi + outil (Lemlist...) | Toi + SettingClosing |
|---|---|---|---|
| Cout mensuel | 0-80€ | 100-200€ | 790€ |
| Temps/semaine | 8-10h | 4-6h | 0h |
| RDV generes | 1-2/sem | 2-3/sem | 3+/sem garanti |
| Personnalisation | Manuelle | Templates | IA + humain |
| Signaux d'achat | Non | Basiques | IA temps reel |
| Garantie RDV | Non | Non | Oui |
| Tu fais quoi | TOUT | Strategie + suivi | **Tu closes. C'est tout.** |

### 4.4 "Pourquoi ce prix" Section

Keep 3 DarkCards. Update content:
1. **"Un systeme qui s'ameliore"** — Base de connaissance dediee, feedback setter, expertise marche enrichie chaque semaine
2. **"IA + humain, pas IA toute seule"** — L'IA execute, ton setter pilote par la data
3. **"Zero engagement, zero risque"** — Garantie RDV, tu peux arreter a tout moment

---

## 5. Pipeline IA — Setter-Driven Visual

### 5.1 Concept

The setter is NOT at the end of the pipeline validating. The setter is ABOVE the pipeline, piloting the entire system.

### 5.2 Visual Layout

```
┌──────────────────────────────────────────────────────────────┐
│                    TON SETTER PILOTE                          │
│  Expertise marche · Data · Angles · Iteration                │
└──────────┬───────────────┬───────────────┬───────────────────┘
           ▼               ▼               ▼
     ┌──────────┐    ┌──────────┐    ┌──────────┐
     │ Signaux  │    │ Message  │    │  Envoi   │
     │ detectes │───▶│ IA perso │───▶│ qualifie │
     │ par IA   │    │ angle    │    │          │
     │          │    │ setter   │    │          │
     └──────────┘    └──────────┘    └──────────┘
           │               │               │
           └───────────────┴───────────────┘
                           ▼
                  ┌─────────────────┐
                  │ Base connaissance│
                  │ enrichie        │
                  │ chaque semaine  │
                  └─────────────────┘
```

### 5.3 Key Messages

**Setter role (above pipeline):**
- Tranche la pertinence des signaux
- Pilote par la data (taux de reponse, ajustements)
- Choisit les angles de message
- Enrichit l'expertise marche du client
- Iterate le systeme chaque semaine

**Tagline:** "L'IA execute. Ton setter pilote. Chaque semaine, l'expertise marche s'affine, les angles s'aiguisent, les resultats s'accelerent."

**Base de connaissance:** Feature highlighted in Phase 1 (LinkedIn) card:
"Base de connaissance dediee — l'IA apprend ton offre, ton marche, ton ton"

### 5.4 Expandable Detail

The current 9-step methodology stays accessible via a "En savoir plus" expandable section below the visual pipeline.

---

## 6. FAQ — Solopreneur Objections

7 questions, rewritten:

1. **"790€/mois c'est beaucoup pour un solopreneur, non ?"**
   → C'est 8-10h/semaine que tu recuperes. Si ton taux horaire depasse 80€, c'est rentable des le premier mois. Et avec la garantie 3 RDV/semaine, le risque est de notre cote.

2. **"Je peux le faire moi-meme avec Lemlist/LaGrowthMachine ?"**
   → Oui, si tu as 5-8h/semaine et l'expertise IA pour personnaliser chaque message. On combine detection de signaux + redaction IA + validation humaine. C'est ca qui fait la difference entre 2% et 8% de taux de reponse.

3. **"C'est quoi la difference avec une agence de prospection ?"**
   → Le prix (3-5x moins), l'engagement (aucun), et la methode (IA + humain vs. templates en masse). Et on est payes au resultat avec les bonuses RDV.

4. **"Combien de temps avant les premiers RDV ?"**
   → Moins de 7 jours. On commence par tes clients ideaux et on iterate chaque semaine.

5. **"Je n'ai pas de base email, je peux quand meme ?"**
   → La Phase 1 (LinkedIn) ne necessite aucune base. On cible directement les prospects via les signaux d'achat. La newsletter c'est pour plus tard.

6. **"Et si ca marche pas ?"**
   → Zero engagement. Tu peux arreter a tout moment. Et la garantie RDV couvre ton risque : si on ne delivre pas, on continue gratuitement.

7. **"C'est quoi les bonuses RDV ?"**
   → Un systeme de remuneration au resultat. Plus on genere de RDV, plus notre part variable augmente. Ca aligne nos interets : on gagne quand tu gagnes.

---

## 7. SEO & Metadata

### 7.1 Page Titles

| Page | Current | New |
|------|---------|-----|
| Homepage | "SettingClosing — Le setting, mais en mieux" | "SettingClosing — Prospection LinkedIn IA pour solopreneurs" |
| Tarifs | "Tarifs Setting & Closing" | "Tarifs — Prospection LinkedIn B2B a partir de 790€/mois" |

### 7.2 Meta Descriptions

Rewritten to target:
- "prospection LinkedIn" (search volume FR)
- "prise de RDV B2B" (search volume FR)
- "externaliser prospection" (commercial intent)
- Keep "setting" for AI-first audience who knows the term

### 7.3 Schema.org

Keep existing ProfessionalService + OfferCatalog structure. Update:
- Prices to match new structure (setup offert, demi-journees, 3x payment)
- Descriptions to match new positioning

---

## 8. Components Affected

### New Components
- `GrowthJourney` — 3-phase horizontal journey (replaces SituationPicker on homepage)
- `GrowthLadder` — Vertical 3-step pricing layout (replaces PricingPicker tabs on tarifs)
- `PipelineVisual` — Setter-driven pipeline diagram with feedback loop
- `PhaseTransition` — Arrow/connector between growth phases with transition text

### Modified Components
- `PricingComparison` — New columns (Toi seul / Outil / Nous), new content
- `SocialProof` — "solopreneurs" wording
- `SmartContactForm` — Updated offer dropdown to match phase names
- `MiniSimulator` — Updated for new prices (no setup LinkedIn, demi-journee telephone, 3x newsletter)

### Modified Data
- `lib/offers-data.ts` — New prices, new situations, phase labels
- `lib/simulator-configs.ts` — Updated calculations for new pricing

### Modified Pages
- `app/page.tsx` — New hero, GrowthJourney instead of SituationPicker, updated FAQ
- `app/tarifs/page.tsx` — GrowthLadder layout, updated hero, metadata, schema, DarkCards, FAQ

### Unchanged
- `Navbar`, `Footer`, `TeamBanner`, `CTAFinale`
- `ButtonGlow`, `DarkCard`, `ScrollReveal` (UI primitives)
- API routes, contact form logic

---

## 9. What This Design Does NOT Include

- Real testimonials (to be added when available — no placeholders)
- Visual/graphic design decisions (colors, animations, spacing — deferred to implementation with design skills)
- Mobile-specific layouts (deferred to implementation, existing responsive patterns apply)
- New pages (no about page changes, no blog, no new routes)
