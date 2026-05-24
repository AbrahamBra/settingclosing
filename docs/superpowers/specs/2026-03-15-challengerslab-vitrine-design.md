# ChallengersLab — Page vitrine : design spec

**Date :** 2026-03-15
**Statut :** Approuvé par le client
**Stack :** Next.js (App Router), Tailwind CSS, Framer Motion
**Langue :** Français uniquement

---

## Objectif

Générer des leads pour ChallengersLab via deux CTA : formulaire de contact et réservation Calendly. La page cible les solopreneurs et infopreneurs qui veulent déléguer leur prospection et/ou leur closing pour se concentrer sur leur expertise.

---

## Identité visuelle

### Palette

| Token | Valeur | Usage |
|-------|--------|-------|
| `--accent` | `#3B82F6` (electric blue) | CTAs, borders actives, highlights |
| `--accent-hover` | `#2563EB` | Hover states |
| `--accent-rgb` | `59, 130, 246` | Box-shadows glow |
| `--bg-primary` | `#0A0A0F` | Fond principal |
| `--bg-secondary` | `#111118` | Sections alternées |
| `--text-primary` | `#F8FAFC` | Titres et corps principal |
| `--text-muted` | `#64748B` | Textes secondaires, légendes |
| `--border` | `rgba(255,255,255,0.06)` | Bordures de cartes |

### Typographie

- **Titres :** Instrument Serif (Google Fonts) — sérieux, premium, humain
- **Corps :** IBM Plex Sans — lisible, technique, B2B
- **Scale :** display 4.5rem / H1 3.5rem / H2 2.5rem / H3 1.5rem / body 1rem
- **Line-height corps :** 1.7 — le texte doit respirer

**Chargement (`app/layout.tsx`) via `next/font/google` :**
```typescript
import { Instrument_Serif, IBM_Plex_Sans } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})
```

### Effets actifs

- Glassmorphism sur les cartes offres (border gradient via `mask-composite: exclude`)
- Button glow + `translateY(-3px)` sur les CTAs primaires
- Shine animation 8s sur les boutons principaux (subtil)
- Grain SVG `opacity: 0.015` en fixed overlay
- Cursor glow desktop uniquement (dual-layer : halo large + point bright), throttlé via RAF
- Scroll reveal IntersectionObserver (`threshold: 0.1`, `rootMargin: '-50px 0px 0px 0px'`) — fire once, s'applique uniquement au bord supérieur
- Lenis smooth scroll, désactivé sur mobile

---

## Architecture de la page

```
/
├── <Navbar>          logo + CTA Calendly (sticky, fond opaque au scroll)
├── <Hero>
├── <Probleme>
├── <Philosophie>
├── <SectionSetting>
├── <SectionClosing>
├── <Preuves>
└── <CTAFinale>
└── <Footer>
```

Un seul fichier de route : `app/page.tsx`. Chaque section = composant dans `components/`.

---

## Sections

### Navbar

- Logo ChallengersLab gauche
- Lien "Setting" et "Closing" (ancres vers les sections)
- CTA electric blue droite : "Réserver un appel"
- Fond transparent → fond `bg-primary/95 backdrop-blur` après 80px de scroll
- Mobile : hamburger → drawer (slide depuis la droite, fermeture au clic outside ou Escape, focus trap actif, mêmes liens que desktop)

---

### 1. Hero

**Headline :** "Vous avez une offre qui cartonne. Arrêtez de perdre du temps à la vendre."

**Sous-titre :** "ChallengersLab prend en charge votre setting et votre closing — avec les méthodes qui font la différence en B2B."

**Mot animé :** le mot "solopreneur" bascule toutes les 2.5s entre `solopreneur` / `infopreneur` via Framer Motion `AnimatePresence` (fade + slide up). "Creator" est exclu — le reste de la page parle en termes B2B, une troisième persona crée une dissonance.

**CTAs :**
- Primaire (electric blue, glow) : "Réserver un appel gratuit" → Calendly
- Secondaire (lien texte, muted) : "Découvrir l'offre ↓" → ancre `#setting`

**Fond :** `bg-primary`, grain overlay, pas d'image — le texte est le visuel.

**Layout :** centré, max-width 720px, padding top 160px / bottom 120px.

---

### 2. Le problème

**Titre :** "Ce que ça coûte de ne pas avoir de méthode"

**Layout :** 3 cartes glassmorphism côte à côte (grid-cols-3, gap-6). Sur mobile : stack vertical.

**Cartes :**

1. **"Vous prospectez dans le vide"**
   Pas de ciblage, pas de scoring, des messages centrés sur le produit plutôt que sur ce que le client gagne. Peu de réponses, beaucoup de temps perdu.

2. **"Vos appels ne convertissent pas"**
   Sans discovery solide et sans méthode pour augmenter la valeur perçue, vous baissez le prix ou vous perdez le deal.

3. **"Vous faites tout vous-même"**
   Pendant que vous prospectez et tentez de closer, votre vraie valeur ajoutée — la création, le coaching, l'expertise — attend.

**Fond :** `bg-secondary` pour différencier visuellement du hero.

---

### 3. La philosophie

**Titre :** "Les meilleures méthodes B2B, importées dans votre secteur"

**Corps (1 paragraphe) :** Le secteur des solopreneurs et infopreneurs évolue vite. La prospection et le closing restent souvent artisanaux. ChallengersLab applique ce qui fonctionne en B2B — scoring, niveaux de maturité, Challenger Sale — à ce marché.

**2 colonnes :**

| Setting piloté par la donnée | Closing structuré |
|------------------------------|-------------------|
| Ciblage, scoring, Sales Navigator, copywriting orienté bénéfice client | Discovery approfondie, valeur perçue, méthode Challenger Sale appliquée |

**Ton :** factuel, sans adjectifs superflus. Pas de "révolutionnaire" ni "groundbreaking" — les méthodes parlent d'elles-mêmes.

**Fond :** `bg-primary`.

---

### 4. Le Setting

**Ancre :** `id="setting"`

**Titre :** "5 rendez-vous qualifiés. Minimum. Garanti."

**Layout :** 2 colonnes égales. Gauche : méthode. Droite : carte offre (glassmorphism, border electric blue).

**Gauche — La méthode :**
- Base de connaissance construite avec l'IA — contexte client + best practices marketing/sales
- Segmentation par niveaux de maturité pour cibler au bon moment
- Système de scoring pour prioriser les bons prospects
- Listes sur-mesure via LinkedIn Sales Navigator
- Copywriting orienté bénéfice client, pas produit

**Droite — L'offre :**
- **À partir de 500 € fixe par client + variable**
- La part variable est définie en appel découverte selon le volume et le secteur — affichée sur la page comme "sur devis"
- Garantie : minimum 5 RDV qualifiés
- Ligne secondaire : "Vous déléguez plusieurs clients ? On s'adapte au volume."
- CTA (electric blue, pleine largeur sur mobile) : "Déléguer mon setting →" → ancre `#contact`

**Fond :** `bg-secondary`.

---

### 5. Le Closing

**Ancre :** `id="closing"`

**Titre :** "Apprenez à closer comme les meilleurs commerciaux B2B."

**Layout :** idem section Setting, colonnes inversées (offre à gauche, méthode à droite) pour casser la symétrie.

**Droite — La méthode :**
- Formé à la Challenger Sale — la méthode avec les meilleurs résultats sur les ventes complexes
- Discovery approfondie pour comprendre les vrais enjeux avant de parler prix
- Techniques pour augmenter la valeur perçue sans baisser le prix
- "Catch the cat" — reprendre le contrôle d'un deal qui part dans tous les sens

**Gauche — L'offre :**
- **1 000 € / mois**
- 2 heures de coaching par semaine :
  - 1h en visio — debriefs, stratégie, cas concrets
  - 1h en situation réelle — coaching en direct sur un appel prospect
- CTA : "Améliorer mon closing →" → ancre `#contact`

**Fond :** `bg-primary`.

---

### 6. Preuves sociales

**Titre :** "Ils nous ont fait confiance"

**Bloc 1 — Témoignages texte :**
Grille de cartes (3 colonnes desktop, 1 mobile). Minimum 3 cartes pour remplir une rangée.
Si plus de 5 : carrousel avec pagination dots.
Toutes les citations sont des placeholders — à remplacer par les vrais textes avant mise en ligne.

Interface TypeScript (`lib/testimonials.ts`) :
```typescript
interface Testimonial {
  id: string
  name: string
  company: string        // ex: "Ellipse"
  role?: string          // ex: "Fondateur"
  quote: string
  avatar?: string        // chemin image ou URL
  logo?: string          // logo entreprise
  type: 'text' | 'video'
}
```

**Bloc 2 — Témoignages vidéo :**
Provider : YouTube ou Vimeo (embed `<iframe>`). Grille 2-3 colonnes desktop.
Chaque item : thumbnail (image Next.js) + bouton play centré.
Au clic : modal avec embed `src="https://www.youtube.com/embed/{videoId}?autoplay=1"`.
`aria-label` sur chaque bouton play. Fermeture modale via Escape ou clic outside.

Interface vidéo (`lib/testimonials.ts`) :
```typescript
interface VideoTestimonial extends Testimonial {
  type: 'video'
  videoId: string        // YouTube ou Vimeo ID
  provider: 'youtube' | 'vimeo'
  thumbnailUrl: string   // URL thumbnail custom ou auto-générée
}
```

**Fond :** `bg-secondary`.

---

### 7. CTA finale

**Ancre :** `id="contact"`

**Titre :** "Prêt à déléguer ?"

**Layout :** 2 colonnes. Séparateur vertical en `border-r border-white/10`.

**Gauche — Formulaire :**

Champs et règles de validation :

| Champ | Requis | Règle |
|-------|--------|-------|
| Prénom | Oui | min 2 caractères |
| Email | Oui | format email valide |
| Téléphone | Non | format libre (international accepté) |
| Intérêt | Oui | radio : Setting / Closing / Les deux |
| Message | Non | max 1000 caractères |

- Bouton submit : "Envoyer ma demande"
- États : `idle` / `loading` (spinner, bouton désactivé) / `success` (message inline) / `error` (message inline, champs conservés)
- Pas de redirection — feedback inline uniquement

**API (`app/api/contact/route.ts`) :**
- Provider email : **Resend** (`npm install resend`)
- Variables d'environnement requises :
  - `RESEND_API_KEY` — clé API Resend
  - `CONTACT_EMAIL` — adresse de destination
- Réponse API :
  ```typescript
  // Succès : HTTP 200
  { success: true }
  // Erreur validation : HTTP 422
  { success: false, error: 'Champs invalides' }
  // Erreur serveur : HTTP 500
  { success: false, error: 'Erreur serveur' }
  ```
- Pas de copie envoyée au soumettant (à activer plus tard si besoin)

**GA4 event (après succès HTTP 200 uniquement) :**
```typescript
gtag('event', 'generate_lead', {
  event_category: 'contact',
  lead_type: formData.interest,   // 'setting' | 'closing' | 'les_deux'
  method: 'form',
})
```

**Droite — Calendly :**
- Titre : "Vous préférez en parler directement ?"
- Courte ligne : "Réservez un créneau de 30 minutes, sans engagement."
- Embed : `InlineWidget` depuis `react-calendly` (npm)
- Variable d'environnement : `NEXT_PUBLIC_CALENDLY_URL` (même URL pour Navbar et CTA finale)
- Pas de prefill depuis le formulaire (les deux colonnes sont indépendantes)

**Fond :** `bg-primary`.

---

### Footer

- Logo + tagline courte : "Les meilleures méthodes B2B, pour votre activité."
- Email de contact
- Liens LinkedIn (profils individuels ou page entreprise)
- Mentions légales / Politique de confidentialité (placeholders)
- Copyright ChallengersLab 2026

---

## SEO & données structurées

### Métadonnées (`app/layout.tsx`)
```typescript
export const metadata = {
  title: 'ChallengersLab — Setting & Closing pour solopreneurs',
  description: 'Déléguez votre prospection et votre closing à des experts formés aux meilleures méthodes B2B. Garantie 5 RDV minimum.',
  openGraph: { /* OG image + title + description */ },
}
```

### JSON-LD (`@graph`)
- `WebSite`
- `ProfessionalService` avec `hasOfferCatalog` :
  ```json
  {
    "@type": "OfferCatalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Setting",
        "description": "Prospection externalisée avec garantie 5 RDV minimum",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "500",
          "priceCurrency": "EUR",
          "valueAddedTaxIncluded": false
        }
      },
      {
        "@type": "Offer",
        "name": "Closing",
        "description": "Coaching closing 2h/semaine, méthode Challenger Sale",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1000",
          "priceCurrency": "EUR",
          "unitText": "MONTH",
          "valueAddedTaxIncluded": false
        }
      }
    ]
  }
  ```
- `aggregateRating` à renseigner quand les avis sont disponibles

### Fichiers SEO
- `app/sitemap.ts` — route `/`
- `public/robots.txt` — allow all
- Canonical sur la page

---

## Structure de fichiers

```
app/
  page.tsx                  ← page principale
  layout.tsx                ← metadata, fonts, JSON-LD
  api/
    contact/
      route.ts              ← endpoint formulaire
components/
  Navbar.tsx
  Hero.tsx
  Probleme.tsx
  Philosophie.tsx
  SectionSetting.tsx
  SectionClosing.tsx
  Preuves.tsx
  CTAFinale.tsx
  Footer.tsx
  ui/
    GlassCard.tsx           ← carte réutilisable glassmorphism
    ButtonGlow.tsx          ← CTA electric blue avec glow
    ScrollReveal.tsx        ← wrapper IntersectionObserver
    VideoModal.tsx          ← modal témoignage vidéo
    CursorGlow.tsx          ← glow curseur desktop only
lib/
  testimonials.ts           ← données placeholders témoignages
public/
  robots.txt
  grain.svg                 ← optionnel si SVG inline trop lourd
```

---

## Z-index

| Token | Valeur | Usage |
|-------|--------|-------|
| `--z-base` | `0` | Éléments normaux |
| `--z-card` | `10` | Cartes au hover |
| `--z-navbar` | `50` | Navbar sticky |
| `--z-modal-backdrop` | `80` | Overlay modal vidéo |
| `--z-modal` | `90` | Contenu modal |
| `--z-cursor` | `9999` | Cursor glow (au-dessus de tout) |
| `--z-grain` | `9998` | Grain overlay (juste sous cursor) |

---

## Accessibilité & performance

- Touch targets : 44px minimum
- `aria-label` sur tous les éléments interactifs (boutons play, modale, radio)
- `aria-hidden` sur les éléments décoratifs (grain, cursor glow)
- Focus visible avec ring electric blue
- Next.js Image pour toutes les images
- Dynamic import pour CursorGlow (desktop only, no SSR)
- Lenis désactivé sur mobile
- GA4 avec stratégie `lazyOnload`

---

## Contenu à fournir avant mise en ligne

- [ ] Citations / témoignages texte (99% done, Ellipse, KBDigit + autres)
- [ ] Thumbnails et URLs des vidéos témoignages
- [ ] Lien Calendly
- [ ] Email de destination pour le formulaire
- [ ] Logos des clients référencés
- [ ] Photos/avatars pour les cartes témoignages
- [ ] Liens LinkedIn (Abraham + associé)
- [ ] Mentions légales et politique de confidentialité
