# Refonte page "A propos" -- spec

## Contexte

La page actuelle (`app/a-propos/page.tsx`) duplique la homepage : methode en 4 etapes, resultats chiffres, "pour qui / pas pour qui", ressources. Les bios des 3 fondateurs sont des placeholders vides. Aucune personnalite.

## Decision

Page epuree : profils + complementarite. Rien d'autre. La homepage fait le reste.

## Structure finale

```
NavbarBlog (existant)
Breadcrumb (Accueil > A propos)
Header (titre + accroche)
3 cartes profils (grille 3 col desktop, 1 col mobile)
Bloc complementarite (texte conversationnel pleine largeur)
CTA (appel gratuit)
Footer (existant)
```

## Sections

### 1. Header

- Label accent : "ChallengersLab"
- Titre h1 : "Trois expertises, un pipeline"
- Sous-titre : "Un setter qui ouvre les portes, un closer qui signe, un systeme qui fait tourner le tout. C'est comme ca qu'on remplit des agendas."

### 2. Cartes profils

Grille `sm:grid-cols-3`, meme style que les cartes existantes (`bg-bg-secondary`, `border border-white/[0.06]`, `rounded-2xl`).

Chaque carte :
- Badge initiales (carré arrondi, fond `bg-bg-primary`, bordure `accent/20`)
- Prenom en `text-text-primary font-extrabold`
- Role en `text-accent uppercase tracking-widest text-xs`
- Zone bio placeholder : bloc avec `border border-dashed border-accent/30`, icone crayon, texte guide

**Profils :**

| Prenom | Initiales | Role |
|--------|-----------|------|
| Abdelhay | AH | Performance commerciale & Closing |
| Brahim | B | Setting |
| Abraham | A | Automatisation & IA |

**Texte guide des bios (dans chaque carte) :**

Abdelhay :
> Abdelhay gere le closing. Son parcours, ce qui l'a amene la, comment il aborde un deal -- c'est lui qui complete cette partie. En attendant, ce qu'il faut savoir : c'est le dernier maillon avant la signature.

Brahim :
> Brahim fait le setting. Comment il detecte les bons signaux, pourquoi il contacte ces gens-la et pas d'autres, sa logique de qualification -- a lui de raconter. Ce qu'on peut dire : aucun message ne part sans son regard.

Abraham :
> Abraham construit le systeme. Les outils, les automatisations, l'IA qui trie et priorise -- il branche tout ca ensemble. Son parcours et sa vision, il les posera ici. En attendant : c'est lui qui fait tourner la machine.

### 3. Bloc complementarite

Style : `bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]`

Petit label accent au-dessus : "Pourquoi nous trois"

**Texte :**

> En B2B, la prospection ca se fait encore souvent au feeling. Un fondateur qui envoie des messages quand il a le temps, un CRM a moitie rempli, des relances qui partent quand on y pense.
>
> Ca marchait il y a cinq ans. Aujourd'hui les boites d'arrivee sont saturees. Les gens ignorent les messages generiques. Et les signaux d'achat -- un changement de poste, une interaction avec un post, une levee de fonds -- passent sous le radar parce que personne ne les surveille.
>
> C'est pour ca qu'on a structure ChallengersLab autour de trois metiers distincts.
>
> Le setting, c'est le travail en amont : reperer les bons signaux, contacter les bonnes personnes au bon moment, qualifier avant de passer la main. Pas de volume pour le volume. Chaque message est ancre sur un fait precis.
>
> Le closing, c'est ce qui se passe une fois que le prospect est qualifie. Un appel, un contexte complet sur ce qui a ete dit, ce qui a interesse, ce qui a coince. Le closer ne decouvre pas le lead a froid.
>
> Et entre les deux, l'automatisation et l'IA. Pas pour remplacer le setter ou le closer -- pour leur donner les bons inputs au bon moment. Trier les signaux, prioriser les profils, proposer des drafts de messages que l'humain valide avant envoi.
>
> Trois roles, un pipeline. Chacun fait ce qu'il sait faire. Le systeme tourne parce que les pieces s'emboitent, pas parce qu'une seule personne essaie de tout gerer.

### 4. CTA

Meme pattern que l'actuel :
- Label accent : "ChallengersLab"
- Titre h3 : "Vous voulez voir si c'est fait pour vous ?"
- Texte : "Un appel de 30 minutes pour comprendre votre marche, votre offre et ce que le programme pourrait donner dans votre cas. Gratuit. Sans engagement."
- ButtonGlow vers `/#contact`

## Structured data

Mettre a jour :
- `personSchema` : ajouter les 3 fondateurs (pas seulement Abraham)
- `orgSchema.founder` : garder les 3, roles mis a jour
- Abraham `jobTitle` : "Automatisation & IA, ChallengersLab" (plus "Fondateur")
- `knowsAbout` : ajouter automatisation, IA

## Ce qui est supprime

- Section "Ce que ca donne en pratique" (resultats/stats)
- Section "La methode, concretement" (4 etapes)
- Section "Pour qui / pas pour qui"
- Section "Ressources"

Tout ca est deja sur la homepage ou le blog. Zero doublon.

## Contraintes techniques

- Composant serveur (pas de `"use client"`). `ButtonGlow` reste un composant client importe normalement -- les composants serveur peuvent rendre des composants client enfants.
- Meme design system : couleurs CSS variables, Tailwind, font-sans Inter
- Container : `container-max max-w-3xl px-6 md:px-8` (meme que la page actuelle)
- Mobile first : cartes en 1 colonne, puis 3 colonnes a `sm:`
- SEO : metadata et structured data mises a jour
