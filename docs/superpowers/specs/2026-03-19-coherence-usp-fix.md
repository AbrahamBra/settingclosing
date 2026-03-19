# Spec — Correction de cohérence USP & proposition de valeur

**Date** : 2026-03-19
**Contexte** : Audit profond de la cohérence du site après le refocus "setting only". Le site présente des contradictions structurelles entre le positionnement setting-only (homepage) et les mentions closing persistantes (about, method, pricing, blog, team, ressources, glossaire). La timeline de résultats est mal racontée. Le pricing change de modèle.

**Décisions business validées** :
- Le closing sera vendu en upsell lors du call, pas sur le site
- Une LP dédiée closing viendra plus tard
- Résultats dès la semaine 1. Au mois 2, montée en puissance vers 10+ RDV/mois selon l'écosystème client
- Nouveau pricing : 500€ mois 1 (lancement) → 1 000€/mois + variable par RDV livré
- Garantie : < 5 RDV livrés → mois suivant offert (0€ fixe)

---

## 1. Purge closing — TOUS les fichiers du site

Le mot "closing" ne doit apparaître nulle part dans le contenu visible utilisateur sur les pages de service (homepage, pricing, about, team). Les pages de contenu SEO (ressources, glossaire, blog articles) sont traitées séparément en section 1g.

### 1a. TeamBanner (`components/TeamBanner.tsx`)

C'est le composant qui affiche l'équipe sur la homepage.

- Abdelhay : role "Closing & Performance" → "Stratégie commerciale"
- Abdelhay : desc "Negociation, closing, conversion. Il signe les deals." → "Stratégie commerciale et conversion. Il structure les deals."

### 1b. Page À propos (`app/a-propos/page.tsx`)

> **Note** : ce fichier existe dans le worktree `.claude/worktrees/gifted-ptolemy/`. Si non encore mergé dans main, ces changements s'appliqueront lors du merge.

**Titre page** : "Notre équipe setting et closing" → "Notre équipe"
**Meta description** : retirer "closing", reformuler autour du pipeline setting
**OG title/description** : aligner

**Abdelhay** : son rôle passe de "Performance commerciale & Closing" à "Stratégie commerciale". Sa bio reformulée sans le mot "closing" — il intervient sur la conversion et la stratégie commerciale.

**Section complémentarité** : le paragraphe décrivant le closing ("Le closing, c'est ce qui se passe une fois que le prospect est qualifié...") → reformuler en handoff : "Une fois le RDV qualifié posé dans votre agenda, vous prenez la main."

### 1c. MethodBlock (`components/MethodBlock.tsx`)

- **Feedback loop step 3** : "Validation, ton, closing" → "Validation, ton, ajustement"
- **Mois 3 description** : "Le setter se concentre sur le closing et les pivots stratégiques" → "Le setter se concentre sur l'optimisation et les pivots stratégiques"

### 1d. PricingComparison (`components/PricingComparison.tsx`)

Supprimer la footnote : "Besoin d'un accompagnement sur le closing ? On en parle en call."

### 1e. BlogTeaser (`components/BlogTeaser.tsx`)

L'article "Closer avec la méthode Challenger Sale" (catégorie "Closing") → remplacer par un article setting/prospection. Suggestion : "Comment qualifier un prospect LinkedIn en 3 messages" (catégorie "Setting").

### 1f. BlogContent (`components/BlogContent.tsx`) et pages ressources

Le composant BlogContent contient : une catégorie "Closing", un filtre pill, un pilier guide "Closing B2B", et 5+ articles catégorisés closing. Les pages individuelles closing existent aussi :
- `app/ressources/closing-b2b/page.tsx`
- `app/ressources/script-closing-b2b/page.tsx`
- `app/ressources/closer-b2b/page.tsx`
- `app/ressources/difference-setting-closing/page.tsx`
- `app/ressources/discovery-call-b2b/page.tsx`
- `app/ressources/gestion-objections-b2b/page.tsx`

**Décision** : ces pages sont des assets SEO qui génèrent du trafic organique. On ne les supprime pas. Mais on les isole du parcours de conversion :
- Retirer le filtre pill "Closing" de la page /ressources (le contenu reste accessible via URL directe et SEO)
- Retirer le pilier guide "Closing B2B" de la page /ressources
- Les articles individuels restent en ligne (SEO) mais ne sont plus mis en avant dans la navigation

### 1g. Glossaire (`app/glossaire/page.tsx`)

Le glossaire contient une entrée "Closing" et des mentions dans le titre/meta.
- **Titre page** : retirer "closing" du titre
- **Meta** : reformuler sans "closing"
- **Entrée glossaire "Closing"** : la garder (c'est du contenu éducatif), mais ne pas la mettre en avant. Si le glossaire a un ordre, placer "Setting" en premier.

### 1h. Scope du test de validation

`grep -ri "closing"` sera testé sur les fichiers suivants uniquement (pages de service + composants homepage) :
- `components/TeamBanner.tsx`
- `components/MethodBlock.tsx`
- `components/PricingComparison.tsx`
- `components/BlogTeaser.tsx`
- `components/Hero.tsx`
- `components/PipelineSection.tsx`
- `components/CTAFinale.tsx`
- `components/SocialProof.tsx`
- `app/page.tsx`
- `app/a-propos/page.tsx` (si mergé)

Les pages contenu SEO (ressources, glossaire, articles individuels) sont exclues du test car le closing y est un sujet éducatif légitime, pas un service vendu.

---

## 2. Correction timeline — "Résultats dès la semaine 1"

### 2a. MethodBlock : renommer les phases

**Nouvelle structure** :

| Phase | Ancien titre | Nouveau titre | Message clé |
|-------|-------------|---------------|-------------|
| Mois 1 | Calibrage | Lancement & premiers RDV | On démarre immédiatement. Premiers messages semaine 1, premiers RDV dans la foulée. En parallèle, on apprend votre marché. |
| Mois 2 | Accélération | Montée en puissance | Les patterns émergent. Le scoring se précise. Le volume de RDV augmente. |
| Mois 3+ | La machine tourne | Régime de croisière | Le pipeline est rodé. Volume stabilisé, le setter optimise en continu. |

**Détails Mois 1** :
- "Premiers messages envoyés dès la semaine 1"
- "Le setter apprend votre ICP en conditions réelles"
- "Chaque retour affine le ciblage pour la suite"

**Description Mois 1** : "On ne commence pas par un audit de 30 jours. Dès la première semaine, votre setter envoie des messages, génère des conversations et pose des RDV. En parallèle, chaque interaction enrichit la connaissance de votre marché."

### 2b. Meta descriptions et CTAs

**Layout meta** : "RDV qualifiés dès la première semaine" — vrai, garder.

**PipelineSection CTA** : "Ce pipeline se calibre en deux mois" → "Premiers RDV dès la première semaine. Au mois 2, le pipeline tourne à plein régime."

### 2c. Section headline MethodBlock

Actuel : "Chaque semaine, la machine s'affine."
Nouveau : "Résultats dès la semaine 1. Chaque semaine, ça s'accélère."

### 2d. Subheading MethodBlock

Actuel : "L'IA détecte, la méthode structure, l'humain décide. Chaque décision enrichit le tour suivant."
Nouveau : "L'IA détecte et prépare. L'humain valide et envoie. Chaque semaine, le système apprend de vos résultats."

Ceci résout aussi la tension machine/humain (ancien section 10) en une seule phrase.

---

## 3. Pricing — nouveau modèle

### 3a. Structure tarifaire

Refonte complète de `PricingComparison.tsx`. L'ancien modèle (500€/mois + variable vague) est remplacé par :

**Mois 1 — Lancement** :
- **500€** forfait
- Inclut : setter dédié, setup outils, ciblage, premiers messages, premiers RDV
- Pas de variable : le mois 1 est un forfait tout compris

**Mois 2+ — Abonnement** :
- **1 000€/mois** fixe
- **+ X-Y€ par RDV livré** (variable, fourchette à afficher)
- Le montant variable dépend de la complexité : outbound pur (fourchette haute) vs inbound+outbound (fourchette basse)

> **ACTION REQUISE Abraham** : fournir les montants exacts de la fourchette variable avant implémentation. En attendant, le composant affichera un placeholder "[montant défini ensemble selon votre situation]" qui sera remplacé dès que les chiffres sont validés.

### 3b. Garantie

Ancienne garantie ("si zéro RDV après 30j, on prolonge sans frais") → remplacée par :

**"Moins de 5 RDV qualifiés livrés dans le mois ? Le mois suivant est offert."**

- S'applique à partir du mois 2 (le mois 1 à 500€ est déjà le prix de lancement)
- "Offert" = 0€ de frais fixes, le service continue normalement
- C'est quantifié (5 RDV), pas subjectif ("satisfait")

### 3c. Engagement

"Sans engagement. Résiliable à tout moment." — pas de "zéro engagement long" (qui sous-entend qu'il y a un engagement court). Juste : sans engagement.

### 3d. Exemple ROI

Sous le pricing, ajouter un encadré :
> "Exemple : un consultant à 2 000€/mission qui close 1 prospect sur 5 RDV. Avec 5 RDV/mois dès le mois 1 → 1 nouveau client → 2 000€ de CA pour 500€ investis."

### 3e. Comparaison alternative

Ajouter une ligne de contexte :
> "Un commercial freelance coûte 2 000-3 000€/mois. Un setter interne, pareil + charges. Notre formule : résultats dès la semaine 1, sans recrutement."

### 3f. JSON-LD (`app/layout.tsx`)

Mettre à jour le structured data :
- Price : 500 EUR/MONTH → garder comme prix d'entrée (c'est le minimum)
- Ou ajouter deux offres : "Lancement" à 500€ et "Abonnement" à 1 000€

---

## 4. Preuve sociale — renforcer

### 4a. Chiffres plus précis

Actuel : "20+ entrepreneurs" / "400+ RDV" / "<7j"

Mettre les vrais chiffres si meilleurs (ex: "34 entrepreneurs", "487 RDV"). Sinon changer la métrique : "Taux de réponse moyen : 25%" / "3 RDV/semaine en moyenne" / "0 message envoyé sans validation humaine".

### 4b. Résultat "<7j"

Clarifier : "<7j avant votre premier RDV qualifié" (pas juste "résultats").

### 4c. Témoignages (hors scope implémentation)

Les témoignages sont le levier #1 manquant mais dépendent d'une collecte client. **Hors scope de cette spec.** Créer le composant testimonial sera une spec séparée une fois le contenu collecté.

---

## 5. Hero — version finale consolidée

Sections 5 (jargon), 6 (pour qui), 8 (équipe vs réalité) de l'ancienne spec touchaient toutes le Hero. Voici la version finale unique.

### 5a. Badge
Garder : "Setting commercial B2B" (positionnement expert)

### 5b. Headline
Garder : "Vous avez déjà l'offre. Nous avons la machine."

### 5c. Sub-hero
Actuel : "Votre équipe setting externalisée. Des RDV qualifiés dans votre agenda, chaque semaine."
Nouveau : "On prospecte sur LinkedIn pour vous. Premiers RDV dès la première semaine."

Pourquoi : pas de jargon ("setting externalisée"), pas de fausse promesse d'équipe, résultat concret et timeline claire.

### 5d. Personas tournants
Actuel : "Pour les [fondateurs/freelances/solopreneurs] qui veulent plus de clients."
Nouveau : "Pour les [consultants/fondateurs/indépendants B2B] qui ont une offre qui marche — et veulent remplir leur agenda."

"Qui ont une offre qui marche" qualifie le visiteur et exclut ceux qui n'ont pas encore de produit/service validé.

### 5e. CTAs
Garder : "Réserver un appel gratuit" + "Découvrir l'offre ↓"

---

## 6. FAQ — nouvelle section homepage

### 6a. Composant

Créer `components/FAQ.tsx`. Position dans `app/page.tsx` : après PricingComparison, avant CTAFinale.

Pattern visuel : accordion (click pour expand). Cohérent avec le design système existant (couleurs zinc/amber du site).

### 6b. Contenu

6 questions minimum :

1. **"Combien ça coûte au total ?"**
   → "500€ le premier mois, 1 000€/mois ensuite + une prime par RDV livré dont le montant est défini ensemble. Sans engagement."

2. **"Quand est-ce que je vois les premiers RDV ?"**
   → "Dès la première semaine. On ne commence pas par un audit de 30 jours. Votre setter envoie des messages dès le démarrage."

3. **"Est-ce que vous envoyez des messages sans mon accord ?"**
   → "Non. Chaque message est validé par un humain avant envoi. Aucune automatisation n'envoie de messages à votre place."

4. **"Et si ça ne marche pas ?"**
   → "Moins de 5 RDV qualifiés livrés dans le mois ? Le mois suivant est offert. On continue jusqu'à ce que le pipeline tourne."

5. **"C'est quoi la différence avec un freelance SDR ?"**
   → "Un freelance SDR envoie des messages. Nous, on combine un setter dédié, un système IA qui détecte les signaux d'achat, et une méthode qui s'affine chaque semaine. Même quota LinkedIn, résultats x10."

6. **"Mon offre n'est pas encore rodée, c'est pour moi ?"**
   → "On travaille mieux avec une offre validée. Mais le setting est aussi un excellent test de marché : en 4 semaines, vous saurez quels messages accrochent, quels profils répondent, et quels angles convertissent."

### 6c. JSON-LD FAQ

Ajouter le schema `FAQPage` dans `app/layout.tsx` pour le SEO (rich snippets Google).

---

## 7. Accélérateur inbound — clarifier

Dans `PipelineSection.tsx`, la section accélérateur parle d'inbound sans dire si c'est inclus.

Ajouter une mention claire : "Inclus dans votre abonnement. Quand l'outbound tourne, on active l'inbound ensemble."

---

## Hors scope

- Création de la LP closing (future)
- Refonte de la page /methode (asset SEO, pas prioritaire)
- Refonte visuelle / design
- Collecte et intégration des témoignages clients (spec séparée)
- Suppression des articles SEO closing (conservés pour le trafic organique)
- Page /methode : les mentions "closing" dans le contexte éducatif des 9 étapes restent (ex: "Humain : closing = 100% humain") car c'est du contenu pédagogique, pas du positionnement service

---

## Critères de validation

1. **Purge closing** : `grep -ri "closing"` sur les fichiers listés en 1h retourne 0 résultats
2. **Timeline** : MethodBlock Mois 1 commence par "Lancement" et mentionne "première semaine", pas "calibrage"
3. **Pricing** : PricingComparison affiche deux paliers (500€ / 1 000€), la garantie "< 5 RDV = mois offert", et "Sans engagement"
4. **FAQ** : section FAQ visible sur la homepage avec 6 questions minimum, schema FAQPage dans le JSON-LD
5. **Hero** : sub-hero dit "On prospecte sur LinkedIn pour vous. Premiers RDV dès la première semaine." — pas de jargon, pas d'"équipe"
6. **Meta** : les meta descriptions sont cohérentes avec le contenu réel
7. **TeamBanner** : Abdelhay n'a plus "Closing" dans son rôle/description
8. **Inbound** : section accélérateur mentionne "Inclus dans votre abonnement"
9. **BlogTeaser** : l'article closing est remplacé par un article setting
10. **BlogContent** : le filtre pill "Closing" et le pilier guide "Closing B2B" sont retirés de /ressources
