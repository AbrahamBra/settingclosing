# Restructuration setting.live — LinkedIn Hero + Services complémentaires

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformer setting.live d'un site "3 offres égales en escalier" vers un site mono-produit focalisé sur le Setting (LinkedIn + Téléphonique), avec renvoi vers challengerslab pour les services complémentaires. Newsletter retirée (dilue le message).

**Architecture:** Restructuration du data model (additive, backward-compatible), remplacement du GrowthJourney par une section LinkedIn-focused, update du pipeline visual (outbound/inbound), section ChallengersLab en bas (pain points delivery), page méthode unique LinkedIn+Téléphonique, tarifs avec simulateur ROI intégré.

**Tech Stack:** Next.js 14 App Router, React, TypeScript, Tailwind CSS, Framer Motion, Resend API

**Décisions clés:**
- Setting LinkedIn = LE produit principal
- Setting Téléphonique = intégré dans la même page méthode (pas une offre séparée, c'est la suite du pipeline)
- Newsletter = RETIRÉE du site (dilue le message). Page noindexée en attendant suppression.
- Encodage expertise, Closing = services ChallengersLab (angle pain point "libérer du temps / déléguer la delivery")
- /methode = UNE grosse page LinkedIn + Téléphonique combinée
- Tarifs = pricing LinkedIn avec simulateur ROI intégré (comme le MiniSimulator actuel)
- Cards bas de page = renvoi vers challengerslab.com (pas des offres setting.live)

**Reference files (read before starting any task):**
- `lib/offers-data.ts` — Offer interface, offers array (source de vérité)
- `lib/simulator-configs.ts` — configs simulateur ROI
- `components/GrowthJourney.tsx` — composant à remplacer
- `components/PipelineVisual.tsx` — pipeline à enrichir
- `components/SmartContactForm.tsx` — formulaire à simplifier
- `app/page.tsx` — homepage composition + schemas
- `app/tarifs/page.tsx` — page tarifs à simplifier
- `app/methode/page.tsx` — hub méthode à rediriger
- `app/api/contact/route.ts` — API validation

---

## Chunk 1: Data Model (fondation — tout dépend de ça)

### Task 1: Ajouter les exports complémentaires à offers-data.ts

**Files:**
- Modify: `lib/offers-data.ts`

- [ ] **Step 1: Ajouter le type ComplementaryService**

Après l'interface `Offer`, ajouter :

```typescript
export interface ComplementaryService {
  id: string
  slug: string
  title: string
  oneLiner: string
  color: string
  icon: string  // emoji ou icône
  status: 'available' | 'coming-soon'
  methodeLink?: string
  pipelineContext?: string  // comment ça s'insère dans le pipeline
}
```

- [ ] **Step 2: Exporter mainOffer**

Après le `offers` array :

```typescript
export const mainOffer = offers[0]  // setting-linkedin
```

- [ ] **Step 3: Exporter complementaryServices**

```typescript
export const complementaryServices: ComplementaryService[] = [
  {
    id: 'setting-telephonique',
    slug: 'setting-telephonique',
    title: 'Setting Téléphonique',
    oneLiner: 'Qualification des leads entrants — chaque lead est appelé, scoré et routé.',
    color: '#FBBF24',
    icon: '📞',
    status: 'available',
    methodeLink: '/methode/setting-telephonique',
    pipelineContext: 'Inbound → qualification téléphonique',
  },
  {
    id: 'setting-newsletter',
    slug: 'setting-newsletter',
    title: 'Setting Newsletter',
    oneLiner: 'Newsletter thought leadership opérée par IA — scoring, segmentation, routing automatique.',
    color: '#C87533',
    icon: '📧',
    status: 'available',
    methodeLink: '/methode/setting-newsletter',
    pipelineContext: 'Lead tiède → nurturing newsletter',
  },
  {
    id: 'encodage-expertise',
    slug: 'encodage-expertise',
    title: 'Encodage de l\'expertise',
    oneLiner: 'On encode ton savoir-faire dans un système IA sur-mesure.',
    color: '#34D399',
    icon: '🧠',
    status: 'coming-soon',
  },
  {
    id: 'closing',
    slug: 'closing',
    title: 'Closing',
    oneLiner: 'Coaching closing 2h/semaine + vidéo — tu apprends à closer les RDV qu\'on te génère.',
    color: '#F87171',
    icon: '🎯',
    status: 'coming-soon',
  },
]
```

**Ne pas modifier** le `offers` array existant ni l'interface `Offer` — les pages méthode les utilisent encore.

---

## Chunk 2: Homepage — Remplacement GrowthJourney

### Task 2: Créer le composant LinkedInValueProp

**Files:**
- Create: `components/LinkedInValueProp.tsx`

- [ ] **Step 1: Créer le composant**

Ce composant remplace GrowthJourney. Structure :

```
Section id="linkedin-offer"
├── Eyebrow: "SETTING LINKEDIN"
├── Headline: "Un pipeline LinkedIn qui se remplit sans toi"
├── Subheadline: "Ton setter prospecte, l'IA personnalise, tu closes."
├── 3 value pillars (grid 1→3 cols)
│   ├── "Ciblage signal-based" — "On ne contacte que les profils qui montrent des signaux d'achat."
│   ├── "IA + validation humaine" — "L'IA propose, ton setter valide. Aucun message ne part sans relecture."
│   └── "1 à 4 RDV/semaine" — "Garanti. Si on ne délivre pas, le mois suivant est offert."
├── Pricing snapshot: "790 €/mois — Setup offert — Sans engagement"
├── CTA ButtonGlow → Calendly
└── Lien secondaire: "Voir la méthode en 9 étapes →" → /methode/setting-linkedin
```

Design tokens existants : bg-bg-primary, bg-bg-secondary, text-text-primary, text-text-secondary, text-accent, border-white/[0.06]. Couleur accent LinkedIn : #A78BFA.

Utiliser ScrollReveal + Framer Motion (motion.div avec variants staggerées comme dans GrowthJourney actuel).

Les cards pillars utilisent le pattern DarkCard existant ou des div avec `bg-bg-secondary rounded-2xl border border-white/[0.06] p-6`.

---

### Task 3: Créer le composant ComplementaryServices

**Files:**
- Create: `components/ComplementaryServices.tsx`

- [ ] **Step 1: Créer le composant**

```
Section id="services-complementaires"
├── Eyebrow: "ALLER PLUS LOIN"
├── Headline: "Des services pour chaque étape de ton pipeline"
├── Grid 2→4 cols de cards minimales
│   └── Pour chaque complementaryService:
│       ├── Border-left color = service.color
│       ├── Icon + Title (bold)
│       ├── One-liner description
│       ├── Si 'available': "En savoir plus →" (lien methodeLink)
│       └── Si 'coming-soon': Badge muted "Bientôt"
```

Import `complementaryServices` depuis `lib/offers-data`. Utiliser ScrollReveal. Cards avec `bg-bg-secondary rounded-xl border border-white/[0.06] p-5 border-l-4` et `style={{ borderLeftColor: service.color }}`.

---

### Task 4: Mettre à jour la composition de la homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Remplacer les imports**

```typescript
// Supprimer:
import { GrowthJourney } from '@/components/GrowthJourney'
// Ajouter:
import { LinkedInValueProp } from '@/components/LinkedInValueProp'
import { ComplementaryServices } from '@/components/ComplementaryServices'
```

- [ ] **Step 2: Mettre à jour la composition dans `Home()`**

Nouvel ordre :
```tsx
<Hero />
<LinkedInValueProp />         {/* remplace GrowthJourney */}
<PipelineVisual variant="homepage" />
<OnboardingTimeline />
<SocialProof />
<TeamBanner />
<ComplementaryServices />     {/* NOUVEAU */}
<FAQ />
{/* Bandeau rareté */}
<CTAFinale />
```

- [ ] **Step 3: Simplifier le schema hasOfferCatalog**

Dans `globalSchema`, remplacer les 3 offres du `hasOfferCatalog.itemListElement` par uniquement l'offre Setting LinkedIn. Supprimer les entrées téléphonique et newsletter.

- [ ] **Step 4: Mettre à jour homeFaqSchema**

Question "Je n'ai pas de base email" — remplacer "La Phase 1 (LinkedIn) ne nécessite aucune base" par "Le Setting LinkedIn ne nécessite aucune base email. On cible directement les prospects via les signaux d'achat sur LinkedIn."

---

### Task 5: Mettre à jour le Hero anchor

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Changer l'anchor du CTA secondaire**

Remplacer `href="#growth-journey"` par `href="#linkedin-offer"` (l'id de la nouvelle section LinkedInValueProp).

---

## Chunk 3: Pipeline Visual — Outbound/Inbound avec services complémentaires

### Task 6: Enrichir le pipeline homepage

**Files:**
- Modify: `components/PipelineVisual.tsx`

- [ ] **Step 1: Redesigner le variant homepage**

Le variant `homepage` actuel a 3 steps génériques (cible, contacte, qualifie). Le remplacer par une version à 2 voies :

**Structure :**
```
OUTBOUND (LinkedIn Setting — #A78BFA)
├── "On cible tes prospects" → "Messages personnalisés" → "Validation humaine"
└── Tag: "Setting LinkedIn" — le cœur du service

INBOUND (Sources entrantes — #FBBF24)
├── Sources: "DMs, Lead magnets, Formulaires, Contenu"
├── "Qualification LinkedIn" (par le setter)
├── "Qualification téléphonique" → tag discret "Setting Téléphonique"
└── Routing: "Chaud → RDV" / "Tiède → Newsletter" → tag discret "Setting Newsletter"

CONVERGENCE
└── "RDV qualifié dans ton agenda"
```

Sur mobile : les 2 voies s'empilent verticalement (outbound d'abord, inbound ensuite).
Sur desktop : 2 colonnes côte à côte qui convergent vers le RDV final.

Les tags "Setting Téléphonique" et "Setting Newsletter" sont discrets (text-xs, opacity-60, avec un petit lien si `methodeLink` existe). Ils ne doivent pas distraire du flux principal.

**Ne pas toucher** au variant `full` — il est utilisé sur /methode/setting-linkedin et /tarifs.

---

## Chunk 4: Tarifs — Simplification LinkedIn-only

### Task 7: Simplifier la page tarifs

**Files:**
- Modify: `app/tarifs/page.tsx`

- [ ] **Step 1: Mettre à jour le hero**

Titre : "Setting LinkedIn — Tarifs" ou "Un pipeline LinkedIn à 790 €/mois"
Supprimer la référence à "Choisis ton niveau de croissance" ou tout langage 3-phases.

- [ ] **Step 2: Remplacer GrowthLadder par un pricing card unique**

Au lieu d'importer GrowthLadder avec les 3 phases, créer un bloc pricing LinkedIn standalone :
- Reprise du PhaseCard pour setting-linkedin uniquement (pricing, features, guarantee, MiniSimulator, CTA)
- Supprimer les cards téléphonique et newsletter
- Supprimer le composant PackCroissance

Option : créer un composant `LinkedInPricingCard.tsx` dédié, ou inline directement dans la page.

- [ ] **Step 3: Ajouter une mention complémentaires**

Après le pricing card, ajouter un petit bloc :
```
"Tu as aussi besoin de qualification téléphonique ou de newsletter ?
Contacte-nous pour un devis sur mesure." → lien #contact
```

- [ ] **Step 4: Mettre à jour le schema structuré**

`webPageSchema.mainEntity` ItemList : garder uniquement Setting LinkedIn. Supprimer téléphonique et newsletter.

- [ ] **Step 5: Nettoyer le FAQ tarifs**

Supprimer les questions spécifiques au téléphonique et newsletter. Mettre à jour les questions qui mentionnent "phases" ou "niveaux".

---

### Task 8: Simplifier SmartContactForm

**Files:**
- Modify: `components/SmartContactForm.tsx`

- [ ] **Step 1: Simplifier offreOptions**

Remplacer les 5 options par :
```typescript
const offreOptions = [
  { value: '', label: 'Je ne sais pas encore' },
  { value: 'setting-linkedin', label: 'Setting LinkedIn' },
  { value: 'autre', label: 'Autre besoin (téléphonique, newsletter...)' },
]
```

- [ ] **Step 2: Mettre à jour les placeholders**

Garder le placeholder pour `setting-linkedin`. Ajouter un placeholder pour `autre` :
```typescript
'autre': "Décris ton besoin (qualification leads entrants, newsletter, coaching closing...)."
```

---

### Task 9: Mettre à jour l'API contact

**Files:**
- Modify: `app/api/contact/route.ts`

- [ ] **Step 1: Ajouter 'autre' aux options valides**

```typescript
const VALID_OFFRES = ['setting-linkedin', 'setting-telephonique', 'setting-newsletter', 'bundle', 'autre'] as const

const offreLabels: Record<string, string> = {
  'setting-linkedin': 'Setting LinkedIn',
  'setting-telephonique': 'Setting téléphonique',
  'setting-newsletter': 'Setting Newsletter',
  'bundle': 'Offre combinée',
  'autre': 'Autre besoin',
}
```

Les anciennes valeurs restent valides (backward-compatible pour les éventuels liens en circulation).

---

## Chunk 5: Navigation et Méthode

### Task 10: Rediriger /methode vers /methode/setting-linkedin

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Ajouter la redirect**

Dans `redirects()`, ajouter :
```typescript
{
  source: '/methode',
  destination: '/methode/setting-linkedin',
  permanent: false,  // 302 d'abord, on passera en 301 après validation
},
```

### Task 11: Mettre à jour la navigation

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Changer le lien Méthode**

```typescript
{ label: 'Méthode', href: '/methode/setting-linkedin' },
```

Ça évite le hop de redirect côté client.

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 2: Idem dans le footer**

Mettre à jour le lien méthode du footer vers `/methode/setting-linkedin`.

### Task 12: Noindexer les pages méthode secondaires

**Files:**
- Modify: `app/methode/setting-telephonique/page.tsx`
- Modify: `app/methode/setting-newsletter/page.tsx`

- [ ] **Step 1: Ajouter robots noindex aux metadata**

Dans chaque fichier, ajouter à l'export `metadata` :
```typescript
robots: { index: false, follow: true },
```

`follow: true` = les liens internes passent encore le link equity.

---

## Chunk 6: SEO Migration

### Task 13: Nettoyer le sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Supprimer les entrées redondantes**

Supprimer :
- `/methode` (redirige maintenant)
- `/methode/setting-telephonique` (noindex)
- `/methode/setting-newsletter` (noindex)

Monter la priorité de `/methode/setting-linkedin` de 0.8 à 0.9.

### Task 14: Mettre à jour le FAQ

**Files:**
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Retirer le langage "Phase 1/2/3"**

Parcourir toutes les questions/réponses et remplacer toute mention de "Phase 1", "Phase 2", "Phase 3" ou "trois niveaux" par des formulations directes (ex: "le Setting LinkedIn", "les services complémentaires").

---

## Chunk 7: Cleanup

### Task 15: Archiver les composants obsolètes

- [ ] **Step 1: Vérifier que GrowthJourney n'est plus importé nulle part**

Grep pour `GrowthJourney` dans tout le projet. Si plus aucun import, supprimer le fichier.

- [ ] **Step 2: Vérifier GrowthLadder**

Si plus utilisé sur /tarifs, supprimer ou garder pour référence. Idem pour OfferLadder.

- [ ] **Step 3: Garder les simulator configs**

`lib/simulator-configs.ts` reste intact — les pages méthode noindexées utilisent encore leurs simulateurs.

- [ ] **Step 4: Garder lib/methode-telephonique-data.ts et lib/methode-newsletter-data.ts**

Ces fichiers sont utilisés par les pages méthode qui existent encore (noindexées mais accessibles).

---

## Graphe de dépendances

```
Chunk 1 (Data Model)
    │
    ├──→ Chunk 2 (Homepage: LinkedInValueProp + ComplementaryServices + composition)
    │         dépend de: mainOffer, complementaryServices
    │
    ├──→ Chunk 3 (Pipeline homepage variant)
    │         indépendant du data model mais conceptuellement lié
    │
    ├──→ Chunk 4 (Tarifs + Contact form + API)
    │         dépend de: mainOffer pour le pricing card
    │
    ├──→ Chunk 5 (Nav + Méthode redirect + noindex)
    │         indépendant du data model
    │
    ├──→ Chunk 6 (SEO: sitemap + FAQ)
    │         dépend de: Chunk 5 (redirect doit exister avant de retirer du sitemap)
    │
    └──→ Chunk 7 (Cleanup)
              dépend de: tout le reste terminé

Parallélisable: Chunks 2, 3, 4, 5 peuvent être travaillés en parallèle après Chunk 1.
```

---

## Fichiers impactés (résumé)

| Fichier | Action | Risque |
|---------|--------|--------|
| `lib/offers-data.ts` | Additive (nouveaux exports) | Bas |
| **NEW** `components/LinkedInValueProp.tsx` | Création | Moyen |
| **NEW** `components/ComplementaryServices.tsx` | Création | Bas |
| `components/GrowthJourney.tsx` | Suppression (après migration) | Bas |
| `components/PipelineVisual.tsx` | Réécriture variant homepage | Moyen |
| `components/Hero.tsx` | 1 ligne (anchor) | Bas |
| `app/page.tsx` | Composition + schemas | Moyen |
| `app/tarifs/page.tsx` | Simplification significative | Moyen |
| `components/SmartContactForm.tsx` | Simplification options | Bas |
| `app/api/contact/route.ts` | 2 lignes | Bas |
| `next.config.ts` | 1 redirect | Bas |
| `components/Navbar.tsx` | 1 ligne | Bas |
| `components/Footer.tsx` | 1 ligne | Bas |
| `app/methode/setting-telephonique/page.tsx` | 1 ligne (robots) | Bas |
| `app/methode/setting-newsletter/page.tsx` | 1 ligne (robots) | Bas |
| `app/sitemap.ts` | Suppression 3 entrées | Bas |
| `components/FAQ.tsx` | Wording updates | Bas |
