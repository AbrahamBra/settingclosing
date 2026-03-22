# LP Homepage Redesign — Refonte chirurgicale

**Date:** 2026-03-22
**Approche:** Refonte chirurgicale — modifier les composants existants un par un, sans changer l'ordre des sections.

## Contexte

La LP actuelle a une structure logiquement solide (Hero → Journey → Pipeline → Proof → FAQ → CTA) mais souffre de :
- Cards GrowthJourney trop courtes (1 phrase + nom d'offre, rien d'éducatif)
- PipelineVisual trop technique (~20 éléments, jargon interne)
- Monotonie visuelle (tout dark, pas de respiration)
- Un seul élément tu/vous incohérent restant (`CTAFinale` h3 "Contactez-nous")
- Accents manquants dans le PipelineVisual
- Liens méthode/tarifs qui ne s'ouvrent pas dans de nouveaux onglets
- Pas de notion de rareté/capacité malgré une limite réelle de 5 clients/mois

**Référence d'inspiration :** ColdIQ (coldiq.com) — alternance fond blanc/dark, timeline d'onboarding claire, sections aérées.

**Note :** PricingComparison n'est PAS sur la homepage (seulement /tarifs). La FAQ existante utilise déjà "tu" partout. Le CTAFinale est déjà majoritairement en "tu" — seul le h3 "Contactez-nous" reste en vous.

## Décisions

| Sujet | Décision |
|-------|----------|
| Ton | Tout en "tu" — unifié sur toute la LP |
| Fond | Respiration unique — 1 section warm white (#F5F2ED) au milieu, reste dark |
| 3 niveaux | Cards enrichies (situation → ce qu'on fait → résultat + liens) |
| Prix sur homepage | Non — éduquer le prospect, pas vendre un tarif |
| Pipeline | Simplifié à 3 étapes, détail technique migré sur /methode |
| Timeline | Nouveau composant OnboardingTimeline en complément du pipeline |
| Liens | Méthode et tarifs ouvrent dans de nouveaux onglets (target="_blank") |
| Rareté | Bandeau discret avant CTA + nouvelle question FAQ |

## Structure finale de la LP

```
DARK   │ Navbar (inchangé)
DARK   │ Hero (inchangé)
DARK   │ GrowthJourney (cards enrichies)
       │
WHITE  │ ── hard cut vers fond warm white #F5F2ED (pas de gradient) ──
WHITE  │ PipelineVisual simplifié (3 étapes)
WHITE  │ OnboardingTimeline (nouveau composant)
WHITE  │ SocialProof (existant, déplacé en zone white)
WHITE  │ ── hard cut retour dark ──
       │
DARK   │ TeamBanner (inchangé)
DARK   │ FAQ (+ question rareté, déjà en "tu")
DARK   │ Bandeau rareté (nouveau)
DARK   │ CTAFinale (h3 "Contactez-nous" → "Écris-nous")
DARK   │ Footer (inchangé)
```

## Composants modifiés

### 1. GrowthJourney — Cards enrichies

**Fichier :** `components/GrowthJourney.tsx`

Chaque card passe de 2 lignes à un bloc éducatif complet.

**Changement structurel important :** Les cards actuelles sont wrappées dans un `<Link>` vers `/tarifs#phase-{label}`. Ce `<Link>` wrapper doit être **supprimé** car on ajoute 2 liens internes dans la card — des `<a>` imbriqués dans un `<Link>` créent une violation HTML/accessibilité. La card entière n'est plus cliquable ; les 2 liens en bas remplacent cette navigation.

**L'eyebrow existant** (ex: "SETTING LINKEDIN") est **supprimé** — remplacé par les bullets qui sont plus informatifs.

**Structure par card :**
- Phase badge (existant — numéro + couleur)
- Label (existant — "Lancer", "Qualifier", "Scaler")
- Situation (existant — 1 phrase)
- **NOUVEAU : 3 bullets "ce qu'on fait"** — concrets, orientés action
- **NOUVEAU : Résultat attendu** — 1 ligne en couleur de la phase, le "so what"
- **NOUVEAU : 2 liens** en bas de card :
  - "Comprendre la méthode →" → `/methode` (`target="_blank"`, `rel="noopener noreferrer"`)
  - "Voir l'offre →" → `/tarifs#phase-{label}` (`target="_blank"`, `rel="noopener noreferrer"`)

**Contenu des 3 cards :**

Card 1 — **Lancer** (violet #A78BFA)
- Situation : "Tu as une offre mais zéro pipeline"
- Bullets :
  - Ton setter contacte 200+ profils/semaine
  - Ciblage par signaux d'achat IA
  - Messages personnalisés, pas des templates
- Résultat : "3+ RDV qualifiés par semaine"

Card 2 — **Qualifier** (jaune #FBBF24)
- Situation : "Tu as des leads mais pas le temps de qualifier"
- Bullets :
  - Ton setter rappelle chaque lead en moins de 24h
  - Qualification par téléphone ou DM LinkedIn
  - Tri automatique : chaud → RDV, tiède → relance
- Résultat : "Zéro lead perdu, que des RDV prêts à closer"

Card 3 — **Scaler** (orange #C87533)
- Situation : "Tu as une audience, transforme-la en clients"
- Bullets :
  - On réactive ta base dormante avec du contenu ciblé
  - Scoring IA pour identifier les contacts les plus chauds
  - Séquences automatisées de nurturing
- Résultat : "Pipeline continu sans prospecter activement"

**Connecteurs entre cards** : inchangés ("Quand tu reçois des leads entrants", "Quand tu as une base à monétiser").

### 2. PipelineVisual — Version homepage simplifiée

**Fichier :** `components/PipelineVisual.tsx`

**Approche :** Ajouter une prop `variant: 'full' | 'homepage'` (défaut `'full'`). Quand `variant="homepage"`, le composant rend la version simplifiée. La prop existante `compact` reste inchangée pour les usages actuels sur /methode et /tarifs — pas de breaking change.

**Version homepage — 3 étapes en langage humain :**

```
 🎯 On cible          →    ✍️ On contacte       →    ✅ On qualifie

 Ton setter identifie      Messages perso,           Les intéressés sont
 tes prospects idéaux      adaptés à chaque          qualifiés et tu reçois
 grâce aux signaux         prospect — rien ne        un RDV prêt à closer
 d'achat                   part sans validation
```

- 3 cards horizontales (desktop, `md:flex-row`) / verticales (mobile, `flex-col`)
- Connecteurs : flèche "→" entre chaque card (desktop) / flèche "↓" (mobile)
- Titre de section : "TON PIPELINE" (eyebrow) + "Comment on remplit ton agenda" (h2)
- Lien en bas : "En savoir plus sur la méthode →" → `/methode` (`target="_blank"`, `rel="noopener noreferrer"`)
- **Fond :** transparent — hérite du warm white de la section parente
- Textes en `text-[#1A1816]` (dark on light) au lieu de `text-text-primary`

### 3. OnboardingTimeline — Nouveau composant

**Fichier :** `components/OnboardingTimeline.tsx` (nouveau)

Timeline horizontale (desktop) / verticale (mobile) montrant les 4 phases d'onboarding.

**Titre de section :** "COMMENT ÇA SE PASSE" (eyebrow, pas de h2)

**Contenu des 4 étapes :**

| Étape | Titre | Description |
|-------|-------|-------------|
| 1 | Semaine 1 | On comprend ton offre, ton client idéal, tes angles |
| 2 | Semaine 2 | Premiers messages envoyés — ton setter est opérationnel |
| 3 | Semaine 3 | Premiers RDV qualifiés dans ton agenda |
| 4 | Mois 2+ | Optimisation continue — chaque semaine on affine avec tes retours |

**Specs techniques :**
- 4 étapes avec point (●) et ligne connectrice horizontale (desktop) / verticale (mobile)
- Chaque étape : titre en `font-semibold` + description en `text-sm text-[#6B6560]`
- Points 1-3 : `bg-[#A8A090]` (text-secondary)
- Point 4 (Mois 2+) : `bg-accent` (#C87533) — signale que ça continue
- Ligne connectrice : `bg-[#D4CFC7]` (léger, warm grey sur fond warm white)
- **Fond :** transparent — hérite du warm white
- Textes en `text-[#1A1816]` (titres) et `text-[#6B6560]` (descriptions)
- Responsive : `md:flex-row` → `flex-col` sous md breakpoint
- Animation : `ScrollReveal` par étape, direction="up", `delay={i * 100}` (0, 100, 200, 300ms)

### 4. SocialProof — Adapté au fond clair

**Fichier :** `components/SocialProof.tsx`

**Approche :** Ajouter une prop `variant: 'dark' | 'light'` (défaut `'dark'`). Quand `variant="light"` :
- La `<section>` perd `bg-bg-secondary` → `bg-transparent`
- Les valeurs (chiffres) restent en `text-accent` (#C87533 — lisible sur clair et dark)
- Les labels passent de `text-text-muted` → `text-[#6B6560]` (warm grey, lisible sur fond clair)
- Le `text-text-primary` éventuel passe à `text-[#1A1816]`

Quand aucune variant n'est passée ou `variant="dark"`, le comportement actuel est inchangé.

### 5. Bandeau rareté — Nouveau

**Emplacement :** entre FAQ et CTAFinale dans `app/page.tsx`

**Pas un composant séparé** — un simple `<div>` inline dans page.tsx.

**Design :**
- Fond : `bg-accent/5` avec bordure `border border-accent/20`
- Coins : `rounded-xl`
- Padding : `px-6 py-4` (mobile) / inchangé desktop (le contenu est court)
- Centré : `max-w-2xl mx-auto text-center`
- Texte : `text-text-secondary text-sm`
- Le nombre de places en **bold** `font-semibold text-accent`

**Contenu :**
```
On accompagne 5 clients max par mois. **2 places disponibles en avril.**
```

**Mise à jour :** Le chiffre "2" et le mois "avril" sont codés en dur dans le JSX. Mise à jour manuelle lors des changements de capacité (fréquence : mensuelle). Pas besoin d'env var pour un changement si rare.

### 6. FAQ — Nouvelle question

**Fichier :** `components/FAQ.tsx`

La FAQ existante utilise déjà "tu" partout — aucune modification de ton nécessaire.

**Nouvelle question ajoutée (position 6, index 5, avant "Et si ça marche pas ?") :**
- Q : "Combien de clients tu prends par mois ?"
- R : "5 max. Chaque client a un setter dédié — on ne dilue pas la qualité. C'est pour ça qu'on peut garantir les résultats."

**Mise à jour du schema FAQ** dans `app/page.tsx` : Ajouter cette question dans le `homeFaqSchema` JSON-LD pour le SEO.

### 7. CTAFinale — Correction du dernier "vous"

**Fichier :** `components/CTAFinale.tsx`

Après vérification du code actuel, la plupart du composant est déjà en "tu". **Seule modification :**

| Élément | Avant (code actuel) | Après |
|---------|---------------------|-------|
| Form heading (h3, ligne 112) | "Contactez-nous" | "Écris-nous" |

Tout le reste est déjà en "tu" (heading "ton agenda", Calendly "Tu préfères", success "On te répond").

### 8. PipelineVisual — Correction accents

**Fichier :** `components/PipelineVisual.tsx` (affecte la version complète utilisée sur /methode et /tarifs)

Corrections orthographiques :
- "systeme" → "système"
- "marche" → "marché"
- "accroche" → "accroché"
- "depend" → "dépend"
- "ideal" → "idéal"

## Section warm white — Implémentation technique

Dans `app/page.tsx`, wrapper les 3 composants dans une div avec transition hard cut (pas de gradient, pas d'animation) :

```tsx
{/* — Respiration warm white — */}
<div className="bg-[#F5F2ED]">
  <PipelineVisual variant="homepage" />
  <OnboardingTimeline />
  <SocialProof variant="light" />
</div>
```

La transition dark → white est un hard cut CSS (changement de background-color net entre sections). Pas de gradient de transition ni d'animation au scroll — le contraste brut est plus impactant et plus simple à implémenter.

## Composants inchangés

- **Hero** : copy, structure, animations — tout est bon
- **TeamBanner** : structure et contenu OK
- **Navbar** : liens internes restent dans le même onglet (navigation du site)
- **Footer** : inchangé
- **CursorGlowClient** : inchangé

## Hors scope

- Vidéo / témoignages vidéo (pas de contenu disponible)
- Case studies (pas encore de data)
- Logos partenaires/clients
- PricingComparison (n'est pas sur la homepage — seulement /tarifs)
- Modifications de /methode ou /tarifs (sauf correction d'accents dans PipelineVisual)
- Refonte du design system (couleurs, typo, spacing)
