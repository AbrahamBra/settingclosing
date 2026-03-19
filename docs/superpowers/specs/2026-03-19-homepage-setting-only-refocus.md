# Homepage Setting-Only Refocus

**Date** : 2026-03-19
**Statut** : Validé en conversation
**Contexte** : Audit de cohérence USP qui a révélé que mixer setting (service externalisé) et closing (coaching) sur la même page crée une confusion de proposition de valeur.

## Décision stratégique

Retirer le closing de la homepage. La page principale vend une seule chose : **des RDV qualifiés dans votre agenda, chaque semaine.** Le closing devient une conversation en call, pas une offre publique détaillée.

## Problèmes résolus

| # | Problème | Résolution |
|---|----------|------------|
| 1 | Hero "du deal signé" survend le scope | Hero recentré sur setting |
| 2 | Deux offres incompatibles côte à côte | Une seule offre visible |
| 3 | Tiers closing sans pricing clair | Plus sur la page |
| 4 | Pricing illisible (2 cards, 2 modèles) | 1 card, 1 logique |
| 5 | Garantie fragile | Reformulée pour le setting seul |
| 6 | Accélérateur inbound vague | Repositionné en phase d'évolution |
| 7 | Skill maison = feature fantôme | Remonté dans les livrables setting |

## Changements par composant

### 1. Hero.tsx — Sub-hero rewriting

**Avant** :
```
Votre équipe sales externalisée. Du premier message au deal signé.
```

**Après** :
```
Votre équipe setting externalisée. Des RDV qualifiés dans votre agenda, chaque semaine.
```

Le h1 "Vous avez déjà l'offre. Nous avons la machine." reste inchangé — il fonctionne pour le setting seul.

Le texte rotatif "Pour les fondateurs / freelances / solopreneurs qui veulent plus de clients." reste inchangé.

L'eyebrow badge passe de "Setting & Closing B2B" à "Setting commercial B2B".

### 2. PipelineSection.tsx — Suppression du bloc Closing

**Supprimer** (lignes 209-312) :
- Bloc 4 entier : badge "Pipeline Closing", card "Sans méthode de closing", les 3 tiers closing (closingTiers.map), le bloc "Encodage de la compétence en skill"
- Bloc 5 CTA : "Ce pipeline se calibre en deux mois. Après : vous closez, on prospecte."

**Remplacer le CTA (bloc 5)** par :
```
Ce pipeline se calibre en deux mois. Après, les RDV arrivent chaque semaine.
```

**Conserver** :
- Bloc 1 (section header) : "On combine IA, méthode structurée et validation humaine."
- Bloc 2 (before/after setting) : intact
- Bloc 2b (Accélérateur) : repositionné (voir section 6)
- Bloc 3 (légende 3 couches + lien /methode) : intact

Pas de mention closing dans PipelineSection — la mention unique est sous la card pricing (voir section 11).

### 3. PricingComparison.tsx — Card unique Setting

**Supprimer** : la card Closing entière (lignes 79-132).

**Élargir** la card Setting pour occuper la largeur complète (max-w-2xl centré au lieu de grid 2 colonnes).

**Restructurer la card Setting** :

```
[Eyebrow] Setting

[H3] Des RDV qualifiés dans votre agenda, chaque semaine.

[Pricing]
Fixe mensuel : 500 €/mois
Votre setter dédié : listes de prospection, setup outils, rédaction des
messages, invitations, suivi jusqu'au RDV.

Prime à la performance : variable par RDV livré
Le montant dépend de la complexité du setting :
→ Outbound pur (pas de contenu, pas de lead magnet) : fourchette haute
→ Inbound + outbound (leads magnets actifs, audience existante) : fourchette basse
On calibre le montant exact ensemble, selon votre situation.

[Livrables — nouvelle section]
✓ Setter dédié sur votre compte LinkedIn
✓ Ciblage par signaux d'achat (pas de cold spray)
✓ Skill IA calibré sur votre marché (objections, jargon, formulations testées)
✓ Reporting hebdomadaire

[Engagement]
Engagement premier mois : si zéro RDV qualifié livré après 30 jours de
collaboration active, on prolonge la phase de calibration sans frais fixes.

[CTA] Déléguer mon setting →
```

**Sous la card**, ajouter une ligne :
```
Besoin d'un accompagnement sur le closing ? On en parle en call.
```

### 4. CTAFinale.tsx — Simplification du formulaire

**Supprimer** le sélecteur "Setting / Closing / Les deux" (radiogroup).

Le formulaire contacte pour du setting. Si le prospect veut du closing, ça se discute en call.

**Simplifier le type** :
- Supprimer `Interest` type et le champ `interest` du `FormData`
- Supprimer `handleInterest`
- Retirer `interest` de `initialForm` et du payload `JSON.stringify(form)`

**GA4 event** (ligne 92) : remplacer `lead_type: form.interest` par `lead_type: 'setting'` pour garder un tracking propre.

### 4b. app/api/contact/route.ts — Adapter à la suppression du champ interest

**Avant** : le `ContactPayload` requiert `interest: 'setting' | 'closing' | 'les_deux'`, la validation rejette si absent, le mail l'inclut dans le sujet et le body.

**Après** :
- Retirer `interest` de l'interface `ContactPayload`
- Retirer la validation `interest` dans `validate()` (ligne 23)
- Sujet email : `Nouvelle demande — setting — ${payload.firstName}` (hard-codé)
- Body email : retirer la ligne `Service : ${payload.interest}` ou la remplacer par `Service : setting`

Sans ce changement, **toute soumission du formulaire retournera une erreur 422** car le champ `interest` ne sera plus envoyé par le frontend.

### 4c. tests/api/contact.test.ts — Mettre à jour les tests

- Test "returns 200 on valid submission" : retirer `interest: 'setting'` du body
- Test "returns 422 for invalid email format" : retirer `interest: 'setting'` du body
- Test "returns 422 when required fields are missing" : vérifie que la validation passe sans `interest`

### 5. Accélérateur — Repositionnement

**Avant** : "Et si on n'attendait plus les invitations LinkedIn ?" — sonne comme une offre séparée.

**Après** : Reframer en phase d'évolution du pipeline setting.

```
[Titre] Quand l'outbound tourne, on ouvre l'inbound.

[Texte] L'outbound plafonne à 100 invitations par semaine. Une fois
le pipeline calibré, on vous aide à attirer des leads qui viennent à
vous : conseil sur les sujets de posts et formats de lead magnet,
scoring des leads entrants, setting direct sans passer par l'invitation.

→ Déjà une stratégie de contenu ? On intègre les leads inbound dans
  le pipeline.
→ Pas encore de contenu ? On a des partenaires pour lancer.
```

**Avant** (titre, ligne 139) :
```
Et si on n'attendait plus les invitations LinkedIn ?
```

**Après** (titre) :
```
Quand l'outbound tourne, on ouvre l'inbound.
```

**Avant** (paragraphe, lignes 143-146) :
```
L'outbound plafonne à 100 invitations par semaine. Pour dépasser cette limite,
on active l'inbound : posts LinkedIn, lead magnets, formulaire de scoring.
On conseille sur les sujets et les formats de lead magnet. On travaille avec
des clients qui ont déjà une stratégie de contenu active — et on a des
partenaires pour ceux qui démarrent.
Résultat : les leads chauds arrivent en setting adapté — message LinkedIn,
appel, ou les deux — sans passer par l'invitation.
```

**Après** (paragraphe) :
```
L'outbound plafonne à 100 invitations par semaine. Une fois le pipeline
calibré, on vous aide à attirer des leads qui viennent à vous : conseil sur
les sujets de posts et formats de lead magnet, scoring des leads entrants,
setting direct sans passer par l'invitation.
```

La structure 3 colonnes en dessous reste inchangée (Conseil lead magnet, Scoring intégré, Setting direct).

Les deux items dans les colonnes changent :
- Colonne 1 "Conseil lead magnet" description : inchangée
- Colonne 2 "Scoring intégré" description : inchangée
- Colonne 3 "Setting direct" description : inchangée

### 6. Skill maison — Intégration dans les livrables

Le skill IA est surfacé dans la card pricing Setting (voir section 3, ligne livrables) :

```
✓ Skill IA calibré sur votre marché (objections, jargon, formulations testées)
```

Plus besoin d'un bloc séparé "Encodage de la compétence en skill" — il est supprimé avec le bloc closing.

### 7. app/layout.tsx — JSON-LD structured data

**Avant** : le `jsonLd` contient un `OfferCatalog` avec deux items : "Setting commercial B2B" et "Coaching Closing B2B". La description dit "Setting et closing LinkedIn externalisés".

**Après** :
- Retirer l'objet `Offer` "Coaching Closing B2B" du `hasOfferCatalog.itemListElement`
- Mettre à jour la description du `ProfessionalService` : "Setting LinkedIn externalisé pour fondateurs, freelances et solopreneurs."
- Garder uniquement l'offre Setting dans le catalog
- Mettre à jour le `priceSpecification` du Setting pour refléter le nouveau pricing : `minPrice: 500` (fixe mensuel), retirer `maxPrice` ou le remplacer par un commentaire indiquant que le variable est calibré en call

### 8. PricingComparison.tsx — Header section

**Avant** :
```
Deux offres. Zéro engagement long.
```

**Après** :
```
Notre offre. Zéro engagement long.
```

### 9. PipelineSection.tsx — Import cleanup

Retirer l'import `closingTiers` (ligne 4) qui devient unused après suppression du bloc closing.

### 10. PricingComparison.tsx — Garantie avant/après explicite

**Avant** (ligne 64) :
```
Garantie : minimum 5 RDV qualifiés / mois
```

**Après** :
```
Engagement premier mois : si zéro RDV qualifié livré après 30 jours de
collaboration active, on prolonge la phase de calibration sans frais fixes.
```

### 11. Mention closing unique

La ligne "Besoin d'un accompagnement sur le closing ? On en parle en call." apparaît **uniquement** sous la card pricing. Pas dans PipelineSection — une seule occurrence suffit.

### 12. Metadata — app/page.tsx

**Avant** :
```
title: 'Setting commercial LinkedIn externalisé | ChallengersLab'
```
→ Reste inchangé (déjà correct).

**Avant** :
```
description: 'ChallengersLab gère votre setting commercial LinkedIn : setter dédié,
méthode signal-based, RDV qualifiés dès la première semaine. Pour fondateurs,
freelances et solopreneurs.'
```
→ Reste inchangé (ne mentionne pas le closing, déjà correct).

## Ce qui ne change PAS

- **Page /methode** : garde les closing tiers pour le SEO et la pédagogie
- **Articles /ressources** sur le closing : restent (Challenger Sale, discovery call, etc.)
- **lib/pipeline-data.ts** : `closingTiers` reste exporté (utilisé par /methode)
- **Page /a-propos** : inchangée
- **Composants SocialProof, BlogTeaser, Footer, Navbar** : inchangés

## Flow homepage résultant

```
Hero → "Vous avez déjà l'offre. Nous avons la machine."
       "Votre équipe setting externalisée."
  ↓
SocialProof → 20+ entrepreneurs, 400+ RDV, <7j
  ↓
Pipeline Setting → before/after + accélérateur repositionné + légende 3 couches
  ↓
Pricing → 1 card setting (détaillée, livrables, engagement conditionnel)
          + ligne unique "closing ? on en parle en call"
  ↓
CTA → formulaire simplifié (sans sélecteur) + Calendly
  ↓
Blog teaser
```
