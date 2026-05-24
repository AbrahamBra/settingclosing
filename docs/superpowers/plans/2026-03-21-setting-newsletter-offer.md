# Setting Newsletter Offer Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing "Setup Nurturing" offer (#3) with the new "Setting Newsletter" offer across the entire Setting.live website.

**Architecture:** Data-first approach — update the shared data layer first (offers-data, methode-data), then update all consuming pages (tarifs, homepage, method pages), then update SEO/LLM files, then add the redirect. Each task is independently deployable.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion

**Spec:** `docs/superpowers/specs/2026-03-21-setting-newsletter-offer-design.md`

---

## Chunk 1: Data Layer

### Task 1: Update offers-data.ts

**Files:**
- Modify: `lib/offers-data.ts:79-101`

- [ ] **Step 1: Replace the nurturing offer entry**

Replace the entire third offer object (lines 79-100) with:

```typescript
  {
    id: 'setting-newsletter',
    slug: 'setting-newsletter',
    eyebrow: 'Setting Newsletter',
    color: '#C87533',
    situation: 'J\u2019ai une grosse base, z\u00e9ro revenu dessus',
    description:
      'Des milliers de contacts qui ne rapportent rien. On op\u00e8re votre newsletter d\u2019expert \u2014 contenu segment\u00e9 par maturit\u00e9, scoring comportemental, routing automatique des leads chauds vers un appel.',
    features: [
      { title: 'Newsletter thought leadership', detail: '2 \u00e9ditions/mois en votre nom, dans votre voix. Vous ne r\u00e9digez rien.' },
      { title: '4 contenus par cycle', detail: 'G\u00e9n\u00e9rale + TOFU + MOFU + BOFU\u00a0: chaque lecteur re\u00e7oit ce qui correspond \u00e0 sa maturit\u00e9' },
      { title: 'Scoring & routing automatique', detail: 'Lead chaud d\u00e9tect\u00e9 \u2192 alerte dans l\u2019agenda, pr\u00eat \u00e0 closer' },
    ],
    methodeLink: '/methode/setting-newsletter',
    pricing: {
      type: 'fixed',
      setup: { amount: 2490, label: 'Construction', detail: 'Interview voix, Skill IA sur-mesure, ligne \u00e9ditoriale, scoring, config outil. ~2\u00a0semaines.' },
      subscription: { amount: 990, period: '/ mois \u00d7 3', detail: '4 contenus segment\u00e9s toutes les 2 semaines. Autonomie ou poursuite apr\u00e8s M3.' },
      bonus: 'Prime par RDV\u00a0: 50\u00a0\u20ac (ticket\u00a0<\u00a05k), 150\u00a0\u20ac (5\u201315k), 250\u00a0\u20ac (>\u00a015k)',
    },
    guarantee: 'Garantie proportionnelle \u00e0 la base\u00a0: 3 RDV (1-3k contacts), 5 RDV (3-7k), 10 RDV (7k+) en 3 mois \u2014 sinon M4 offert.',
    noCommitment: false,
    cta: { label: 'Lancer ma newsletter\u00a0\u2192', href: '#contact' },
  },
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | head -20`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add lib/offers-data.ts
git commit -m "data: replace nurturing offer with setting-newsletter in offers-data"
```

---

### Task 2: Create newsletter method data file

**Files:**
- Create: `lib/methode-newsletter-data.ts`

- [ ] **Step 1: Create the newsletter steps data file**

Create `lib/methode-newsletter-data.ts` following the exact same interface as `lib/methode-nurturing-data.ts` (imports `LayerKey` from `pipeline-data`). Export `newsletterSteps` with the 7 steps from the spec (Section 4):

```typescript
import type { LayerKey } from './pipeline-data'

export const newsletterSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
  pedagogy?: { mistake: string; arbitrage: string }
}[] = [
  {
    num: '01',
    label: 'Interview voix & Skill IA sur-mesure',
    layers: ['hybrid'] as const,
    desc: "Tout commence par une interview du dirigeant — celui qui \"signe\" la newsletter. En 1h30 à 2h de visio enregistrée, on extrait sa voix\u00a0: vocabulaire, ton, convictions, exemples concrets, sujets piliers. La transcription est transformée en Skill IA structuré qui encode trois dimensions\u00a0: la voix (mots récurrents, interdits, niveau de formalité), l'expertise (thèse marché, prises de position, erreurs classiques des prospects), et l'audience (ICP, douleurs, langage de la cible). Ce Skill est le fondement de tout ce qui suit — sans lui, l'IA écrit du contenu générique.",
    tools: ['Interview visio', 'Transcription IA', 'Skill Claude'],
    pedagogy: {
      mistake: "Demander à une IA de \"rédiger comme un expert cybersécurité\". L'IA invente un jargon plausible mais faux\u00a0: elle ne sait pas que vos prospects disent \"stack\" et pas \"infrastructure\", qu'ils parlent de \"dette technique\" et pas de \"complexité opérationnelle\". Le prospect du métier repère l'imposture en 3 secondes. Et le dirigeant qui valide sans lire — parce que \"ça a l'air bien\" — laisse passer un contenu qui détruit sa crédibilité.",
      arbitrage: "Le Skill se construit sur la vraie voix du dirigeant — ses mots, ses convictions, ses exemples. Pas un persona inventé. Si le dirigeant dit \"pipe\" et pas \"pipeline\", le Skill utilise \"pipe\". Si le dirigeant déteste le mot \"synergie\", le Skill l'interdit. Après l'interview, on rédige un premier draft test et on le soumet au dirigeant pour calibrage. Le Skill s'affine à chaque cycle de validation.",
    },
  },
  {
    num: '02',
    label: 'Nettoyage & scoring de la base',
    layers: ['ia'] as const,
    desc: "On importe la base du client, on déduplique (un même contact avec 3 emails = 1 fiche), on enrichit les données manquantes (poste actuel, taille d'entreprise, secteur), et on supprime les adresses invalides. Un email envoyé à une adresse morte fait baisser le score d'expéditeur — et tous les prochains emails arrivent en spam. Le scoring initial combine deux dimensions\u00a0: démographique (poste, entreprise, secteur — 30\u00a0% du score) et comportemental (historique d'interactions, ouvertures passées — 70\u00a0%). Le comportemental pèse plus parce qu'il mesure ce que les gens font, pas ce qu'ils sont sur le papier.",
    tools: ['Import CRM', 'Déduplication', 'Enrichissement', 'Scoring composite'],
    pedagogy: {
      mistake: "Importer sa base brute de 10\u00a0000 contacts dans un outil d'emailing et lancer une campagne. Résultat\u00a0: 15\u00a0% de bounces (adresses invalides), 2\u00a0% d'ouverture, et votre domaine flaggé comme spammeur. Reconstruire une réputation d'expéditeur prend 2 à 3 mois. Pendant ce temps, même vos emails légitimes arrivent en spam.",
      arbitrage: "On nettoie avant d'envoyer. La base passe de 10\u00a0000 à 6\u00a0500 contacts valides, et c'est tant mieux. 6\u00a0500 contacts qui reçoivent vos emails valent plus qu'une base gonflée qui détruit votre délivrabilité. L'enrichissement ajoute les données manquantes pour segmenter\u00a0: sans connaître le poste ou le secteur, impossible d'envoyer du contenu pertinent.",
    },
  },
  {
    num: '03',
    label: 'Ligne éditoriale & segmentation',
    layers: ['methode'] as const,
    desc: "On définit les thèmes piliers (les 5 sujets sur lesquels le dirigeant a une expertise), le format (court/punchy ou long/profond), et le rythme (bimensuel). Puis on construit la segmentation TOFU/MOFU/BOFU avec des seuils calibrés. TOFU (0-25 pts)\u00a0: le contact découvre son problème, contenu éducatif. MOFU (25-50 pts)\u00a0: il évalue les solutions, cas clients et comparatifs. BOFU (50+ pts)\u00a0: il est prêt à décider, témoignages et CTA direct. Chaque cycle produit 4 contenus\u00a0: une newsletter générale pour toute la base + une édition spécifique par segment. Chaque abonné reçoit 2 emails par mois\u00a0: la générale + celle de son niveau.",
    tools: ['Calendrier éditorial', 'Segmentation', 'Seuils scoring'],
    pedagogy: {
      mistake: "Envoyer la même newsletter mensuelle à toute la base. Le contact TOFU reçoit un cas client détaillé qu'il ne comprend pas — il ne sait même pas qu'il a un problème. Le contact BOFU reçoit un article de blog générique alors qu'il est prêt à acheter. Tout le monde se désinscrit parce que le contenu n'est jamais pertinent.",
      arbitrage: "4 contenus par cycle. Chaque segment reçoit ce qui correspond à là où il en est. En TOFU, on envoie \"5 signes que votre prospection LinkedIn ne fonctionne pas\" pour aider à nommer le problème. En MOFU, \"Externaliser sa prospection vs recruter un SDR\u00a0: le comparatif chiffré\". En BOFU, des résultats clients concrets parce qu'il manque la dernière preuve. La newsletter générale maintient le lien avec tous — thought leadership, tendances marché, prises de position du dirigeant.",
    },
  },
  {
    num: '04',
    label: 'Rédaction IA & validation dirigeant',
    layers: ['hybrid'] as const,
    desc: "Le Skill IA rédige les 4 newsletters du cycle. Ce n'est pas un premier jet qu'on peaufine — c'est un contenu calibré sur la voix, les convictions et l'audience du dirigeant. Le dirigeant reçoit les drafts et valide en 10-15 minutes. S'il corrige, les corrections sont intégrées au Skill pour affiner les prochains cycles. Le Skill apprend en continu\u00a0: après 2 mois, il connaît les sujets qui résonnent, les tournures qui plaisent, et les angles qui tombent à plat.",
    tools: ['Skill Claude', 'Scheduled Tasks Cowork', 'Validation humaine'],
    pedagogy: {
      mistake: "L'IA rédige un contenu correct mais générique. Ça se lit comme du blog HubSpot — propre, inoffensif, oubliable. Aucune prise de position, aucun exemple concret, aucune voix reconnaissable. Le dirigeant valide sans lire parce que \"ça a l'air bien\". Résultat\u00a0: une newsletter que personne ne distingue des 15 autres dans sa boîte.",
      arbitrage: "Le Skill produit du contenu avec les convictions du dirigeant, pas du contenu neutre. Si le draft ne contient pas au moins une prise de position qui ferait réagir, il est réécrit. La validation n'est pas un tampon — c'est un check éditorial. \"Est-ce que je dirais ça à voix haute devant un client\u00a0?\" Si non, on réécrit.",
    },
  },
  {
    num: '05',
    label: 'Envoi segmenté & triggers comportementaux',
    layers: ['ia'] as const,
    desc: "L'envoi bimensuel part segmenté\u00a0: chaque abonné reçoit la newsletter générale + celle de son segment. Au-delà des envois planifiés, le système réagit en temps réel. Un abonné visite la page tarifs\u00a0? Il reçoit un cas client de son secteur dans l'heure. Un ancien contact reclique après 3 mois de silence\u00a0? Son score est recalculé et il réintègre la séquence active. Quatre emails ouverts d'affilée sans un seul clic\u00a0? On passe à un format différent. Le système s'adapte à l'outil du client — Brevo, HubSpot, Mailchimp ou autre.",
    tools: ['Outil email du client', 'Triggers automatisés', 'Workflows conditionnels'],
    pedagogy: {
      mistake: "Programmer une séquence linéaire\u00a0: Email 1 à J+0, Email 2 à J+14, indépendamment de ce que fait le contact. Il a visité la page tarifs hier\u00a0? Il reçoit quand même le contenu TOFU prévu au calendrier. Il n'a rien ouvert depuis 2 mois\u00a0? Il reçoit quand même le contenu MOFU prévu. La séquence vit sa vie, déconnectée du comportement réel.",
      arbitrage: "Les triggers remplacent le calendrier par l'intention. Visite tarifs\u00a0? Email BOFU, pas le suivant de la séquence. 3 mois de silence\u00a0? Séquence de réactivation, pas un email de plus dans le vide. Certains contacts passent de TOFU à BOFU en 2 semaines, d'autres en 6 mois. Le système respecte le rythme de chacun.",
    },
  },
  {
    num: '06',
    label: 'Routing leads chauds & qualification',
    layers: ['humain'] as const,
    desc: "Quand le score franchit le seuil BOFU, une alerte arrive dans l'agenda du commercial — ou du setter téléphonique si le client combine les deux offres. L'appelant a sous les yeux tout l'historique\u00a0: contenus lus, visites site, score actuel, durée dans le funnel. L'appel reprend là où la newsletter s'est arrêtée. Si l'appel ne convertit pas, le contact ne retombe pas dans le vide. Re-scoré, repositionné en MOFU avec une séquence adaptée à l'objection identifiée\u00a0: budget → contenu ROI, timing → relance calibrée sur son prochain trimestre.",
    tools: ['Alerte scoring', 'Fiche contact enrichie', 'Agenda commercial', 'Rebouclage MOFU'],
    pedagogy: {
      mistake: "Deux erreurs symétriques. Ne jamais router vers un appel\u00a0: la newsletter tourne en boucle infinie, personne ne propose l'étape suivante. Ou router trop tôt, avant que le contact ne soit mûr. Le commercial appelle un lead à 30 points qui n'est pas prêt, essuie un refus, et le lead est \"grillé\" — il n'ouvrira plus vos emails.",
      arbitrage: "Le seuil de routing est calibré sur les données réelles. On analyse les leads qui ont converti\u00a0: quel score avaient-ils au moment du premier appel\u00a0? Ce profil de conversion définit le seuil. Après un appel non converti, le contact est re-segmenté — pas abandonné. La boucle le reprend avec un contenu adapté à l'objection identifiée pendant l'appel.",
    },
  },
  {
    num: '07',
    label: 'Optimisation & recalibrage',
    layers: ['hybrid'] as const,
    desc: "Chaque semaine, on regarde ce qui a marché et ce qui n'a pas marché. Quels contenus ont le meilleur taux d'ouverture\u00a0? Quels segments progressent\u00a0? Quels leads stagnent\u00a0? Les seuils de scoring bougent de 3 à 5 points par mois en moyenne jusqu'à stabilisation. Le Skill IA s'enrichit à chaque cycle\u00a0: nouveaux sujets qui résonnent, tournures qui marchent, angles qui tombent à plat. Après 3 mois, le système est calibré et le client peut choisir\u00a0: autonomie avec les Skills transférés, ou on continue à opérer.",
    tools: ['Analytics', 'A/B testing', 'Recalibrage scoring', 'Ajustement Skill'],
    pedagogy: {
      mistake: "Lancer le système, vérifier les stats une fois, et ne plus y toucher. 6 mois plus tard, les taux d'ouverture sont passés de 35\u00a0% à 12\u00a0%. Les contenus sont datés, les seuils laissent passer des leads trop froids, et la newsletter est devenue du bruit — elle dégrade l'image du dirigeant au lieu de la construire.",
      arbitrage: "L'optimisation hebdomadaire est non négociable. On regarde quels emails ont performé et quels segments stagnent. Si le taux d'ouverture baisse en TOFU, on teste un nouvel angle. Si le routing augmente en MOFU, le scoring fonctionne et on n'y touche pas. Les seuils bougent de 3 à 5 points par mois en moyenne jusqu'à stabilisation.",
    },
  },
] as const
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit lib/methode-newsletter-data.ts 2>&1 | head -10`

- [ ] **Step 3: Commit**

```bash
git add lib/methode-newsletter-data.ts
git commit -m "data: add newsletter method 7-step data file"
```

---

## Chunk 2: Method Page

### Task 3: Create the Setting Newsletter method page

**Files:**
- Create: `app/methode/setting-newsletter/page.tsx`
- Reference: `app/methode/setting-telephonique/page.tsx` (simpler pattern — no phases, just flat steps like telephonique)

- [ ] **Step 1: Create the page**

Use the **Setting Téléphonique** method page as the template (flat list of steps, not phased like LinkedIn). Key differences:
- Import `newsletterSteps` from `lib/methode-newsletter-data`
- Title: "Setting Newsletter B2B — Contenu expert segmenté & scoring | Setting"
- H1: "7 étapes pour transformer votre base en pipeline de RDV."
- Subtitle: "L'IA rédige dans la voix du dirigeant. Le scoring détecte les leads chauds. Un humain valide chaque envoi."
- Use metadata from spec Section 7 (SEO metadata block)
- HowTo schema with 7 steps from `newsletterSteps`
- FAQ schema with 5 questions about the newsletter method:
  1. "Comment fonctionne le Setting Newsletter ?" — 7 étapes, interview voix à optimisation
  2. "Qu'est-ce que l'interview voix ?" — 1h30-2h visio, extraction de la voix du dirigeant
  3. "Combien de newsletters sont produites par cycle ?" — 4 contenus (générale + TOFU/MOFU/BOFU)
  4. "Comment fonctionne le scoring comportemental ?" — démographique 30% + comportemental 70%
  5. "Peut-on combiner avec le Setting Téléphonique ?" — oui, full délégation
- Breadcrumb: Accueil > Méthode > Setting Newsletter
- "Voir aussi" section: links to `/methode/setting-linkedin`, `/methode/setting-telephonique`, `/tarifs`
- CTA: "Prêt à réveiller votre base ?" / "Réserver un appel découverte"

- [ ] **Step 2: Verify the page builds**

Run: `npx next build 2>&1 | tail -20`

- [ ] **Step 3: Commit**

```bash
git add app/methode/setting-newsletter/
git commit -m "feat: add Setting Newsletter method page (7 steps)"
```

---

## Chunk 3: Tarifs Page Updates

### Task 4: Update the tarifs page

**Files:**
- Modify: `app/tarifs/page.tsx`

This file has **its own local data** (not imported from `offers-data.ts`). All nurturing references must be updated in 7 locations:

- [ ] **Step 1: Update metadata description (line 15)**

Replace:
```
'Prix du setting commercial externalisé : LinkedIn 490 € + 790 €/mois, téléphonique 490 € + 350 €/jour, Nurturing 2 490 € + 590 €/mois ×3. Sans engagement.'
```
With:
```
'Prix du setting commercial externalisé : LinkedIn 490 € + 790 €/mois, téléphonique 490 € + 350 €/jour, Newsletter 2 490 € + 990 €/mois ×3.'
```

- [ ] **Step 2: Update schema.org structured data (lines 37-38, 98-118)**

Replace `webPageSchema.description` (line 37-38) nurturing reference.

Replace the third offer in `mainEntity.itemListElement` (lines 98-118):
- `name`: "Setup Nurturing" → "Setting Newsletter"
- `description`: update to newsletter description
- `priceSpecification[1].price`: "590" → "990"
- `priceSpecification[1].description`: update to newsletter subscription description

- [ ] **Step 3: Update FAQ schema (lines 152-157)**

Replace the "Comment fonctionne le Setup Nurturing ?" FAQ:
- Question: "Comment fonctionne le Setting Newsletter ?"
- Answer: "2 490 € pour construire le système (interview voix, Skill IA, scoring, segmentation), puis 990 €/mois pendant 3 mois d'opération. 4 contenus segmentés toutes les 2 semaines, dans la voix du dirigeant. Prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €). Garantie proportionnelle à la taille de base."

- [ ] **Step 4: Update local offers data (lines 232-253)**

Replace the `setup-nurturing` offer object:
- `id`: 'setting-newsletter'
- `eyebrow`: 'Setting Newsletter'
- `headline`: 'Votre base transformée en pipeline de RDV.'
- `pricingPhases`: Construction 2 490 € + Opération 990 €/mois × 3
- `features`: update to newsletter features
- `guarantee`: 'Garantie proportionnelle à la base : 3 RDV (1-3k), 5 RDV (3-7k), 10 RDV (7k+) en 3 mois — sinon M4 offert.'
- `cta`: 'Lancer ma newsletter'

- [ ] **Step 5: Update local FAQ data (lines 270-273)**

Replace the "Comment fonctionne le Setup Nurturing ?" FAQ entry with newsletter version.

- [ ] **Step 6: Update the "Puis-je combiner" FAQ (line 284)**

Replace "puis activent le Nurturing pour leur base existante" with "puis activent le Setting Newsletter pour leur base existante. La newsletter peut aussi se combiner directement avec le Setting téléphonique pour une délégation complète."

- [ ] **Step 7: Verify build**

Run: `npx next build 2>&1 | tail -10`

- [ ] **Step 8: Commit**

```bash
git add app/tarifs/page.tsx
git commit -m "tarifs: replace Setup Nurturing with Setting Newsletter across all data"
```

---

## Chunk 4: Cross-References & Internal Links

### Task 5: Update SituationPicker icon

**Files:**
- Modify: `components/SituationPicker.tsx:29-36`

- [ ] **Step 1: Replace the database icon with a newsletter/envelope icon**

Replace the third icon (lines 29-36, the `database` SVG) with an envelope icon:

```tsx
  // Newsletter (setting newsletter)
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" key="newsletter">
      <rect x="6" y="12" width="36" height="24" rx="4" stroke="#34D399" strokeWidth="2.5" />
      <path d="M6 16l18 12 18-12" stroke="#34D399" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  ),
```

- [ ] **Step 2: Commit**

```bash
git add components/SituationPicker.tsx
git commit -m "ui: replace database icon with envelope for newsletter offer"
```

### Task 6: Update "Voir aussi" cross-links

**Files:**
- Modify: `app/methode/setting-linkedin/page.tsx:319-322`
- Modify: `app/methode/setting-telephonique/page.tsx:331-334`

- [ ] **Step 1: Update Setting LinkedIn "Voir aussi" (line 319-322)**

Replace:
```tsx
<a href="/methode/nurturing" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setup Nurturing</p>
  <p className="font-sans text-sm text-text-muted">Scoring, séquences et routing pour votre base existante.</p>
</a>
```
With:
```tsx
<a href="/methode/setting-newsletter" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting Newsletter</p>
  <p className="font-sans text-sm text-text-muted">Newsletter thought leadership segmentée pour votre base existante.</p>
</a>
```

- [ ] **Step 2: Update Setting Téléphonique "Voir aussi" (line 331-334)**

Same replacement: `/methode/nurturing` → `/methode/setting-newsletter`, "Setup Nurturing" → "Setting Newsletter"

- [ ] **Step 3: Update pipeline-data.ts step 09 reference (line 105)**

In `lib/pipeline-data.ts`, the last step says "rentrent en nurturing vers la newsletter". Update to: "rentrent dans le Setting Newsletter."

- [ ] **Step 4: Commit**

```bash
git add app/methode/setting-linkedin/page.tsx app/methode/setting-telephonique/page.tsx lib/pipeline-data.ts
git commit -m "links: update all nurturing cross-references to setting-newsletter"
```

---

## Chunk 5: SEO, LLM Files & Redirect

### Task 7: Update llms.txt

**Files:**
- Modify: `public/llms.txt:13`

- [ ] **Step 1: Replace the nurturing service description (line 13)**

Replace:
```
- **Setup Nurturing** : Scoring comportemental, séquences personnalisées, workflows automatisés. 2 490 € setup + 590 €/mois × 3 mois d'optimisation. Prime par RDV : 50 € (ticket < 5k), 150 € (5-15k), 250 € (> 15k).
```
With:
```
- **Setting Newsletter** : Newsletter thought leadership opérée par IA — 4 contenus segmentés par maturité toutes les 2 semaines, scoring comportemental, routing automatique des leads chauds. 2 490 € setup + 990 €/mois × 3 mois. Prime par RDV : 50 € (ticket < 5k), 150 € (5-15k), 250 € (> 15k). Garantie proportionnelle à la taille de base.
```

- [ ] **Step 2: Commit**

```bash
git add public/llms.txt
git commit -m "seo: update llms.txt with Setting Newsletter offer"
```

### Task 8: Update llms-full.txt

**Files:**
- Modify: `public/llms-full.txt` (Service 3 section)

- [ ] **Step 1: Replace the entire "Service 3" section**

Find the "## Service 3 : Setup Nurturing" section and replace with:

```markdown
## Service 3 : Setting Newsletter

### Définition
Newsletter thought leadership opérée par IA pour le compte du dirigeant. Le système produit 4 contenus segmentés par maturité toutes les 2 semaines, dans la voix du dirigeant. Un scoring comportemental détecte les leads chauds et les route automatiquement vers un appel.

### Ce qui est inclus
- Interview voix du dirigeant + Skill IA sur-mesure
- 4 contenus par cycle : générale + TOFU + MOFU + BOFU
- Scoring comportemental (démographique 30% + comportemental 70%)
- Routing automatique des leads chauds vers appel ou setter téléphonique
- Reporting mensuel : ouvertures, clics, leads générés, RDV bookés
- Le dirigeant valide en 10-15 min par cycle

### Tarification
- Construction : 2 490 € (interview voix, Skill IA, ligne éditoriale, scoring, config outil — ~2 semaines)
- Opération : 990 €/mois × 3 mois minimum
- Prime par RDV : 50 € (ticket < 5k), 150 € (5-15k), 250 € (> 15k)
- Garantie proportionnelle : 3 RDV (1-3k contacts), 5 RDV (3-7k), 10 RDV (7k+) en 3 mois — sinon M4 offert
- Après M3 : autonomie avec Skills transférés ou opération continue

### Méthode en 7 étapes
1. Interview voix & Skill IA sur-mesure
2. Nettoyage & scoring de la base
3. Ligne éditoriale & segmentation
4. Rédaction IA & validation dirigeant
5. Envoi segmenté & triggers comportementaux
6. Routing leads chauds & qualification
7. Optimisation & recalibrage

### Combinaison avec Setting Téléphonique
Le client qui veut tout déléguer combine Newsletter + Téléphonique : la newsletter détecte les leads chauds, le setter appelle et qualifie, le client ne fait que closer.
```

- [ ] **Step 2: Commit**

```bash
git add public/llms-full.txt
git commit -m "seo: update llms-full.txt with Setting Newsletter details"
```

### Task 9: Add 301 redirect

**Files:**
- Modify: `next.config.ts:5-21`

- [ ] **Step 1: Add the nurturing redirect**

Add to the `redirects()` array:

```typescript
      {
        source: '/methode/nurturing',
        destination: '/methode/setting-newsletter',
        permanent: true,
      },
```

- [ ] **Step 2: Verify build**

Run: `npx next build 2>&1 | tail -10`

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "seo: add 301 redirect /methode/nurturing → /methode/setting-newsletter"
```

---

## Chunk 6: Cleanup & Verification

### Task 10: Remove old nurturing data file

**Files:**
- Delete: `lib/methode-nurturing-data.ts`
- Modify: `app/methode/nurturing/page.tsx` (make it redirect or delete)

- [ ] **Step 1: Check if any file still imports nurturingSteps**

Run: `grep -r "nurturingSteps\|methode-nurturing-data" --include="*.ts" --include="*.tsx" lib/ app/ components/`

If the old nurturing page imports it, either delete the page (redirect handles it) or rewrite to import from the new file.

- [ ] **Step 2: Delete the old nurturing method page if redirect handles it**

Since `next.config.ts` redirect will catch `/methode/nurturing`, the old page at `app/methode/nurturing/page.tsx` can be deleted. Next.js redirects in config run before page routing.

- [ ] **Step 3: Delete old data file**

```bash
git rm lib/methode-nurturing-data.ts
git rm -r app/methode/nurturing/
```

- [ ] **Step 4: Verify build clean**

Run: `npx next build 2>&1 | tail -20`
Expected: No errors, no missing imports

- [ ] **Step 5: Commit**

```bash
git commit -m "cleanup: remove old nurturing data file and method page"
```

### Task 11: Final verification

- [ ] **Step 1: Run full build**

Run: `npx next build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Verify all pages render**

Run dev server and check:
- `/methode/setting-newsletter` — new method page with 7 steps
- `/tarifs` — updated pricing card with newsletter offer
- `/methode/setting-linkedin` — "Voir aussi" shows Setting Newsletter
- `/methode/setting-telephonique` — "Voir aussi" shows Setting Newsletter
- `/` — SituationPicker shows envelope icon + newsletter offer
- `/methode/nurturing` — redirects to `/methode/setting-newsletter`

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final adjustments for Setting Newsletter rollout"
```
