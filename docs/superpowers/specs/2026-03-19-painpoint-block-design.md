# Bloc PainPoint — Design Spec

## Contexte

Nouveau bloc à insérer sur la homepage entre SocialProof et PipelineSection. Son rôle : poser le vrai problème du prospect (arbitrer entre IA et humain) avant de présenter la méthode.

## Position dans la page

```
Hero → SocialProof → **PainPoint** → PipelineSection → PricingComparison → CTAFinale → BlogTeaser
```

## Cible

Le prospect direct (fondateur, freelance, solopreneur) — pas le marché en général.

## Ton

Empathique-lucide. On reconnaît que le prospect est submergé d'outils et de promesses IA, et on nomme le vrai problème sans culpabiliser.

## Arc narratif

**Constat → Question → Promesse** : on pose le constat (trop d'outils, trop de bruit), on formule la vraie question (qu'est-ce qui doit rester humain ?), on donne la réponse de ChallengersLab en une ligne qui lance vers la méthode.

## Fichier

`components/PainPoint.tsx` — composant serveur (utilise uniquement `ScrollReveal`, pas de Framer Motion directe)

## Structure

```
<section> (section-padding py-20 text-center)
  └─ <div> (container-max max-w-2xl mx-auto)
      ├─ Eyebrow: "Le vrai problème"
      │   Style: font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4
      │
      ├─ H2: "L'IA fait le volume. Mais qui arbitre ?"
      │   Style: font-sans text-h2 text-text-primary mb-4
      │
      ├─ Sous-texte:
      │   "Vous avez les outils. Tout le monde les a. Le vrai avantage,
      │    c'est de savoir quand l'IA suffit, quand elle doit être
      │    entraînée — et quand seul un humain peut débloquer le deal."
      │   Style: font-sans text-text-secondary text-base leading-relaxed max-w-xl mx-auto
      │
      └─ Pills (flex justify-center gap-3 flex-wrap mt-8)
          ├─ "IA suffit"               → semantic-ia (#A78BFA)
          ├─ "IA à entraîner"          → semantic-methode (#FBBF24)
          └─ "L'humain doit décider"   → semantic-humain (#34D399)
```

### Style des pills

Chaque pill :
```
inline-flex items-center gap-1.5
px-3 py-1.5 rounded-full
border border-{color}/20
bg-{color}/10
font-sans text-xs font-semibold
text-{color}
```

Avec un dot (span w-1.5 h-1.5 rounded-full bg-{color}) devant le texte.

## Animation

- Eyebrow, H2, et sous-texte wrappés dans un `ScrollReveal` (pattern existant du projet)
- Chaque pill wrappée dans son propre `ScrollReveal` avec delay staggeré :
  - Pill 1 : `delay={100}`
  - Pill 2 : `delay={300}`
  - Pill 3 : `delay={500}`
- Ce pattern est déjà utilisé dans PipelineSection (ex: `<ScrollReveal delay={100}>`)
- Pas de `whileInView` Framer Motion — on reste sur le seul système d'animation scroll du projet

## Background

Pas de background spécial. Le bloc garde le fond de page (`bg-bg-primary` implicite). SocialProof au-dessus a `bg-bg-secondary` — le contraste entre sections est déjà naturel.

## Intégration dans page.tsx

```tsx
import { PainPoint } from '@/components/PainPoint'

// Dans le JSX :
<Hero />
<SocialProof />
<PainPoint />
<PipelineSection />
```

## Approche choisie

Composant standalone avec animation séquentielle des pills (Approche 3). Le stagger renforce la narration des 3 temps : IA suffit → IA à entraîner → l'humain doit décider.

## Décisions de design

- **Pas de lien/CTA dans ce bloc** : son rôle est de poser la question, pas de renvoyer quelque part. La PipelineSection juste en dessous est la réponse.
- **max-w-2xl** (pas 3xl) : bloc plus étroit que la PipelineSection pour un effet de focalisation.
- **Les pills reprennent le système de couleurs IA/Méthode/Humain** déjà utilisé dans la légende 3 couches de PipelineSection, ce qui crée un lien visuel anticipé.
