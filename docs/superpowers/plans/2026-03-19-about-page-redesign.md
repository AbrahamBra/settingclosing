# About page redesign -- implementation plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current about page with a focused team page: 3 founder profiles with guided placeholder bios + a complementarity text block. Remove all homepage-duplicated sections.

**Architecture:** Single-file rewrite of `app/a-propos/page.tsx`. No new components or data files. Same imports (NavbarBlog, Footer, ButtonGlow). Server component.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 3, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-19-about-page-redesign.md`

---

## File structure

| Action | File | Responsibility |
|--------|------|----------------|
| Rewrite | `app/a-propos/page.tsx` | Entire about page (metadata, structured data, JSX) |

Single file. No decomposition needed.

---

## Chunk 1: Rewrite about page

### Task 1: Update metadata and structured data

**Files:**
- Modify: `app/a-propos/page.tsx:1-72`

- [ ] **Step 1: Update SEO metadata**

Replace the `metadata` export (lines 6-20) with updated copy that matches the new page focus:

```tsx
export const metadata: Metadata = {
  title: 'À propos de ChallengersLab | Setting, closing et automatisation B2B',
  description:
    "Trois expertises, un pipeline. Abdelhay (closing), Brahim (setting), Abraham (automatisation & IA). Comment ChallengersLab structure la prospection B2B autour de trois métiers distincts.",
  openGraph: {
    title: 'À propos de ChallengersLab',
    description:
      "Trois expertises, un pipeline. Comment ChallengersLab structure la prospection B2B autour de trois métiers distincts.",
    locale: 'fr_FR',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/a-propos',
  },
}
```

- [ ] **Step 2: Replace structured data schemas**

Replace `personSchema` (lines 24-42) with an array of 3 persons. Replace `orgSchema` founder entries with roles. Keep `breadcrumbSchema` as-is.

```tsx
const foundersSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdelhay',
    jobTitle: 'Performance commerciale & Closing, ChallengersLab',
    url: 'https://challengerslab.fr/a-propos',
    worksFor: { '@type': 'Organization', name: 'ChallengersLab', url: 'https://challengerslab.fr' },
    knowsAbout: ['Closing B2B', 'Négociation commerciale', 'Performance commerciale'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brahim',
    jobTitle: 'Setting, ChallengersLab',
    url: 'https://challengerslab.fr/a-propos',
    worksFor: { '@type': 'Organization', name: 'ChallengersLab', url: 'https://challengerslab.fr' },
    knowsAbout: ['Setting commercial B2B', 'Prospection LinkedIn', 'Signaux d\'achat LinkedIn'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abraham',
    jobTitle: 'Automatisation & IA, ChallengersLab',
    url: 'https://challengerslab.fr/a-propos',
    worksFor: { '@type': 'Organization', name: 'ChallengersLab', url: 'https://challengerslab.fr' },
    knowsAbout: ['Automatisation B2B', 'IA pour la prospection', 'Systèmes de setting', 'Prospection LinkedIn'],
  },
]
```

Keep `orgSchema` as-is (already has all 3 founders). Keep `breadcrumbSchema` as-is.

- [ ] **Step 3: Update JSON-LD injection**

Replace the `dangerouslySetInnerHTML` line to use `foundersSchema` instead of `personSchema`:

```tsx
__html: JSON.stringify([...foundersSchema, orgSchema, breadcrumbSchema]),
```

- [ ] **Step 4: Build and verify no errors**

Run: `npx next build 2>&1 | head -20`
Expected: Build succeeds, no TypeScript errors

---

### Task 2: Rewrite page JSX -- header and profiles

**Files:**
- Modify: `app/a-propos/page.tsx:76-177` (the `AProposPage` function body)

- [ ] **Step 5: Define founders data array**

Add above the component function:

```tsx
const founders = [
  {
    initials: 'AH',
    name: 'Abdelhay',
    role: 'Performance commerciale & Closing',
    bio: "Abdelhay gère le closing. Son parcours, ce qui l'a amené là, comment il aborde un deal — c'est lui qui complète cette partie. En attendant, ce qu'il faut savoir\u00a0: c'est le dernier maillon avant la signature.",
  },
  {
    initials: 'B',
    name: 'Brahim',
    role: 'Setting',
    bio: "Brahim fait le setting. Comment il détecte les bons signaux, pourquoi il contacte ces gens-là et pas d'autres, sa logique de qualification — à lui de raconter. Ce qu'on peut dire\u00a0: aucun message ne part sans son regard.",
  },
  {
    initials: 'A',
    name: 'Abraham',
    role: 'Automatisation & IA',
    bio: "Abraham construit le système. Les outils, les automatisations, l'IA qui trie et priorise — il branche tout ça ensemble. Son parcours et sa vision, il les posera ici. En attendant\u00a0: c'est lui qui fait tourner la machine.",
  },
]
```

- [ ] **Step 6: Replace header section**

Replace the current `<header>` block (lines 99-111) with:

```tsx
{/* Header */}
<header className="mb-14">
  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
    ChallengersLab
  </p>
  <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
    Trois expertises, un pipeline
  </h1>
  <p className="font-sans text-text-muted text-lg leading-relaxed">
    Un setter qui ouvre les portes, un closer qui signe, un système qui fait
    tourner le tout. C&apos;est comme ça qu&apos;on remplit des agendas.
  </p>
</header>
```

- [ ] **Step 7: Replace founders section with cards + guided bios**

Replace the entire `{/* Fondateurs */}` section (lines 113-177) with:

```tsx
{/* Fondateurs */}
<section className="mb-16">
  <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-8">
    L&apos;équipe
  </h2>

  <div className="grid sm:grid-cols-3 gap-6">
    {founders.map(({ initials, name, role, bio }) => (
      <div key={name} className="bg-bg-secondary rounded-2xl p-6 border border-white/[0.06]">
        <div className="flex flex-col items-center text-center gap-3 mb-5">
          <div className="shrink-0 w-16 h-16 rounded-xl bg-bg-primary border border-accent/20 flex items-center justify-center">
            <span className="font-sans font-extrabold text-2xl text-accent">{initials}</span>
          </div>
          <div>
            <h3 className="font-sans font-extrabold text-lg text-text-primary">{name}</h3>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
              {role}
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-dashed border-accent/30 bg-bg-primary p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent text-sm">&#9998;</span>
            <span className="font-sans text-xs font-semibold text-accent">À compléter</span>
          </div>
          <p className="font-sans text-text-muted text-sm leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 8: Build and verify**

Run: `npx next build 2>&1 | head -20`
Expected: Build succeeds

---

### Task 3: Add complementarity block, CTA, remove old sections

**Files:**
- Modify: `app/a-propos/page.tsx:179-361` (everything after founders section)

- [ ] **Step 9: Remove old sections, add complementarity block**

Delete everything between `{/* Fondateurs */}` closing and `{/* CTA */}` -- that's the Resultats, Methode, Pour qui, and Ressources sections (lines 179-337).

Replace with the complementarity block:

```tsx
{/* Complémentarité */}
<section className="mb-16">
  <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
      Pourquoi nous trois
    </p>
    <div className="space-y-4 font-sans text-text-muted text-sm leading-relaxed">
      <p>
        En B2B, la prospection ça se fait encore souvent au feeling. Un fondateur
        qui envoie des messages quand il a le temps, un CRM à moitié rempli, des
        relances qui partent quand on y pense.
      </p>
      <p>
        Ça marchait il y a cinq ans. Aujourd&apos;hui les boîtes d&apos;arrivée
        sont saturées. Les gens ignorent les messages génériques. Et les signaux
        d&apos;achat &mdash; un changement de poste, une interaction avec un post,
        une levée de fonds &mdash; passent sous le radar parce que personne ne
        les surveille.
      </p>
      <p>
        C&apos;est pour ça qu&apos;on a structuré ChallengersLab autour de trois
        métiers distincts.
      </p>
      <p>
        Le setting, c&apos;est le travail en amont&nbsp;: repérer les bons
        signaux, contacter les bonnes personnes au bon moment, qualifier avant de
        passer la main. Pas de volume pour le volume. Chaque message est ancré
        sur un fait précis.
      </p>
      <p>
        Le closing, c&apos;est ce qui se passe une fois que le prospect est
        qualifié. Un appel, un contexte complet sur ce qui a été dit, ce qui a
        intéressé, ce qui a coincé. Le closer ne découvre pas le lead à froid.
      </p>
      <p>
        Et entre les deux, l&apos;automatisation et l&apos;IA. Pas pour remplacer
        le setter ou le closer &mdash; pour leur donner les bons inputs au bon
        moment. Trier les signaux, prioriser les profils, proposer des drafts de
        messages que l&apos;humain valide avant envoi.
      </p>
      <p className="text-text-primary font-semibold">
        Trois rôles, un pipeline. Chacun fait ce qu&apos;il sait faire. Le
        système tourne parce que les pièces s&apos;emboîtent, pas parce
        qu&apos;une seule personne essaie de tout gérer.
      </p>
    </div>
  </div>
</section>
```

- [ ] **Step 10: Keep CTA section as-is**

The existing CTA block (lines 339-354) stays unchanged. Same label, title, text, and ButtonGlow link.

- [ ] **Step 11: Final build**

Run: `npx next build 2>&1 | head -20`
Expected: Build succeeds, no errors

- [ ] **Step 12: Visual verification**

Start dev server, open `/a-propos`, verify:
- Breadcrumb renders
- Header shows new title and subtitle
- 3 profile cards in a row on desktop, stacked on mobile
- Each card has initials badge, name, role, dashed bio placeholder
- Complementarity block renders with full text
- CTA button works (links to /#contact)

- [ ] **Step 13: Commit**

```bash
git add app/a-propos/page.tsx
git commit -m "feat: redesign about page -- team profiles + complementarity text

Remove duplicated sections (method, results, target audience, resources).
Add guided placeholder bios for colleagues to complete.
Add complementarity text explaining the 3-role pipeline approach.
Update structured data with all 3 founders and correct roles."
```
