# Pipeline 3 Phases — Homepage + Page /methode

## Contexte

La section Pipeline sur la homepage affiche 9 étapes verticales (PipelineStep) + 3 tiers closing. C'est trop long à scroller et le visiteur se perd avant d'arriver au CTA. La richesse d'info est là mais le format ne sert pas la conversion.

## Décision

- **Homepage** : condenser les 9 étapes en 3 phases (Détection, Qualification, Conversion)
- **Page /methode** : nouvelle page narrative avec le détail complet des 9 étapes

Les 3 phases sur la homepage deviennent le teaser. La page /methode est la version longue pour les prospects curieux.

## Conventions

- Utiliser les tokens sémantiques Tailwind partout où possible (`text-semantic-ia`, `border-semantic-ia/20`, `bg-semantic-methode/10`, etc.)
- Utiliser les hex bruts uniquement là où Tailwind l'exige (gradients avec opacité arbitraire : `from-[#818CF8]/[0.02]`)
- Les deux pages (PipelineSection refactorisée et /methode) restent des server components. L'interactivité est déléguée à ScrollReveal (client component) comme dans le pattern existant.

---

## Partie 1 — Homepage : PipelineSection refactorisée

### Structure

Remplacer le mapping de 9 `PipelineStep` par 3 cards de phase. Le bloc "Pipeline Closing" (3 tiers) reste inchangé.

### Interface TypeScript

```ts
interface PhaseCard {
  phase: number          // 1, 2, 3
  label: string          // "PHASE 1"
  title: string          // "Détection"
  subtitle: string       // Résumé one-liner
  steps: string[]        // ["01 Stratégie & ciblage", "02 Signaux inbound", ...]
  summary: string        // Résumé avec punchlines intégrées
  tools: string[]        // Outils agrégés de la phase
  layers: readonly ('ia' | 'methode' | 'hybrid' | 'humain')[]  // Tags représentatifs
  accentToken: string    // "semantic-ia" | "semantic-methode" | "semantic-humain"
}
```

### Données par phase

**Phase 1 — Détection** (token : semantic-ia)
- Layers affichés : `['ia', 'hybrid']` (les étapes sont hybrid, ia, ia — on montre les deux tags pertinents)
- Étapes : 01 Stratégie & ciblage · 02 Signaux inbound · 03 Signaux outbound
- Résumé : L'IA et Sales Navigator repèrent les signaux d'achat — inbound (réactions à vos posts et ceux des concurrents) et outbound (changements de poste, prises de fonction). L'humain valide les cibles : c'est la fondation du reste.
- Outils : Sales Navigator, Reactin, Spyer, ICP, Lead magnets, Scoring

**Phase 2 — Qualification** (token : semantic-methode)
- Layers affichés : `['hybrid', 'methode']` (les étapes sont hybrid, methode, hybrid)
- Étapes : 04 Profil analysé · 05 Scoring & ajustement · 06 Skill maison
- Résumé : Claude analyse chaque profil (titre, bio, posts récents). 5 niveaux de maturité d'achat scorés. L'œil humain recalibre en continu. Pour les clients qui le souhaitent : un skill Claude encodé sur leur expertise — jargon métier, objections connues, messages qui ont marché.
- Outils : Claude, Google Sheet, Scoring, Feedback loop, Claude Skill, Journal de bord

**Phase 3 — Conversion** (token : semantic-humain)
- Layers affichés : `['hybrid', 'humain']` (les étapes sont hybrid, humain, humain)
- Étapes : 07 Message co-rédigé · 08 Validé et envoyé · 09 RDV qualifié
- Résumé : Claude propose un draft ancré dans le skill. 5 phrases max, jamais de pitch dans le premier DM. Test du téléphone appliqué : si ça ne sonne pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine. Le setter convertit la conversation en RDV.
- Outils : Claude, Règles méthode, Validation humaine, Setter, Nurturing

### Layout des cards

3 cards en grille `grid-cols-1 md:grid-cols-3` (même layout que les closingTiers existants). Chaque card :

```
┌─────────────────────────────────┐
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ │  ← accent bar couleur phase
│ PHASE 1         01 · 02 · 03   │  ← label + numéros
│ Détection                       │  ← titre phase h3
│ [IA] [IA + Méthode]            │  ← layer tags
│                                 │
│ L'IA et Sales Navigator         │
│ repèrent les signaux d'achat... │  ← résumé avec punchlines
│                                 │
│ [Sales Nav] [Reactin] [Spyer]   │  ← tool pills
└─────────────────────────────────┘
```

- Barre d'accent en haut (couleur du token sémantique de la phase)
- Label "PHASE N" en petites caps tracking-widest + noms d'étapes à droite en text-xs
- Titre de la phase en h3 blanc
- Layer tags (réutilisant le layerConfig existant de PipelineStep.tsx)
- Résumé en text-text-secondary text-sm leading-relaxed
- Tool pills en bas, couleur du token de la phase

### Lien vers /methode

Sous les 3 cards, avant le bloc closing. Espacement : `mt-8 mb-4` pour ne pas se perdre sur mobile.

```html
<p class="text-center text-sm text-text-muted hover:text-accent transition-colors">
  <a href="/methode">Découvrir les 9 étapes en détail →</a>
</p>
```

### Navbar

L'entrée `{ label: 'Methode', href: '#pipeline' }` existante dans Navbar.tsx est **remplacée** par `{ label: 'Méthode', href: '/methode' }`. Ce n'est plus un lien ancre vers la homepage — c'est un lien vers la nouvelle page dédiée.

### Composants impactés

- `components/PipelineSection.tsx` — refactoriser : remplacer settingSteps par settingPhases, nouveau rendu en cards
- `components/PipelineStep.tsx` — n'est plus importé par PipelineSection (conservé pour /methode)

---

## Partie 2 — Page /methode : Landing narrative

### Route

`app/methode/page.tsx` — server component (pas de `'use client'`).

### Structure de la page

1. **Hero méthode**
   - H1 : "9 étapes. 3 couches. Zéro message sans validation humaine."
   - Sous-titre : explication du système IA + Méthode + Humain
   - Légende des 4 layer tags (IA, Méthode, IA + Méthode, Humain) avec leurs couleurs pour que le visiteur comprenne le code couleur avant de scroller

2. **Section Phase 1 — Détection** (accent semantic-ia)
   - Fond : bg-bg-secondary + `bg-gradient-to-b from-[#818CF8]/[0.02] to-transparent`
   - H2 : "PHASE 1 — DÉTECTION"
   - 3 étapes (01, 02, 03) affichées avec le composant PipelineStep existant
   - `isLast={true}` sur l'étape 03 pour masquer la flèche connecteur en bas de phase

3. **Section Phase 2 — Qualification** (accent semantic-methode)
   - Fond : bg-bg-primary (alternance avec Phase 1)
   - H2 : "PHASE 2 — QUALIFICATION"
   - 3 étapes (04, 05, 06) avec PipelineStep
   - `isLast={true}` sur l'étape 06

4. **Section Phase 3 — Conversion** (accent semantic-humain)
   - Fond : bg-bg-secondary
   - H2 : "PHASE 3 — CONVERSION"
   - 3 étapes (07, 08, 09) avec PipelineStep
   - `isLast={true}` sur l'étape 09

5. **Bloc Closing**
   - Inclus sur /methode : la méthode est complète setting + closing, ça n'a pas de sens de couper.
   - Réutiliser le même rendu que dans PipelineSection (3 tiers en grille). Extraire les données `closingTiers` dans un fichier partagé ou les dupliquer dans /methode.

6. **CTA final**
   - Version simplifiée : un ButtonGlow "Réserver un appel découverte" qui ouvre le lien Calendly en nouvel onglet.
   - Pas le formulaire complet CTAFinale — la page /methode est une page de conviction, le formulaire est sur la homepage. On veut que le prospect prenne directement RDV.

### Traitement visuel par phase

Chaque section pleine largeur utilise le token sémantique de sa phase pour :
- La barre d'accent (top border ou left border)
- Le label de phase (H2)
- Les numéros d'étape dans PipelineStep (hérité du layer)
- Un subtle gradient de fond avec opacité arbitraire

L'alternance de fond entre sections (bg-primary / bg-secondary) crée le rythme de scroll.

### Navigation

- Réutiliser le Navbar existant (pas NavbarBlog)
- Le lien "Méthode" dans la nav pointe maintenant vers /methode (cf. changement Navbar partie 1)

### SEO

- Title : "Notre méthode de prospection LinkedIn en 9 étapes | ChallengersLab"
- Meta description : "Découvrez notre pipeline de prospection LinkedIn : 9 étapes, de la détection des signaux d'achat au RDV qualifié. IA, méthode et validation humaine."
- H1 = titre hero, H2 = chaque phase, H3 = chaque étape
- JSON-LD : schema `WebPage` avec `name`, `description`, `url` et `isPartOf` pointant vers le site. Suivre le pattern existant dans les autres pages secondaires.

### Maillage

- Homepage pipeline → lien "Découvrir les 9 étapes" → /methode
- Articles blog pertinents → liens vers /methode
- /methode → CTA Calendly

---

## Composants — Résumé

| Composant | Action | Détail |
|-----------|--------|--------|
| PipelineSection.tsx | Refactoriser | 3 phase cards, données settingPhases, lien /methode |
| PipelineStep.tsx | Conserver | Réutilisé sur /methode avec `isLast` prop |
| app/methode/page.tsx | Créer | Landing narrative, 3 sections de phase, closing, CTA simplifié |
| Navbar.tsx | Modifier | Remplacer `#pipeline` par `/methode` |

## Ce qui ne change pas

- Le bloc closing (3 tiers) sur la homepage — inchangé
- Le composant PipelineStep.tsx — conservé, inchangé
- Le reste de la homepage (Hero, ProofGrid, PricingComparison, BlogTeaser, CTAFinale)
