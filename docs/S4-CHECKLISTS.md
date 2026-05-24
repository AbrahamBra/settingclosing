# S4 — Templates & checklists (actions hors-code)

> Livrables pour exécuter les actions S4 du plan SEO/GEO 1 mois. Tout est prêt à copier-coller — il te reste à exécuter et à coller les URLs publiques générées dans `app/page.tsx` (sameAs) + `public/llms.txt` une fois les profils créés.

---

## 1. LinkedIn — Rebrand de la page entreprise

### Action immédiate

- Aller sur `linkedin.com/company/challengerslab/admin/settings/`
- Page name : `ChallengersLab` → **`Setting`**
- Public URL (vanity URL) : `/company/challengerslab` → **`/company/setting-agency`** (le slug `setting` seul est probablement déjà pris — `setting-agency`, `setting-b2b` ou `settinglive` sont des plans B)
- Tagline : **`Prospection LinkedIn B2B externalisée · Setter dédié · 2 à 4 RDV qualifiés/semaine`**
- Industry : `Sales & Business Development`
- Company size : `2-10 employees`
- Website : `https://www.setting.live`
- HQ : `Lyon, France`

### About — texte prêt à coller

```
Setting est une agence de prospection LinkedIn B2B basée à Lyon. Setter dédié par client, méthode signal-based (détection de signaux d'achat en temps réel), IA co-rédactrice et validation humaine de chaque message avant envoi.

Pour qui :
• Fondateurs de startups early-stage avec une offre B2B ≥ 2 000 €
• Freelances et consultants B2B
• Solopreneurs qui ont un closeur mais pas de setter

Résultats 2026 sur 20+ clients accompagnés :
• 2-4 RDV qualifiés par semaine en régime de croisière
• 20-35 % de taux de réponse (vs 2-5 % en prospection classique)
• Premiers RDV en moins de 7 jours

Tarif : 790 €/mois HT, setup offert, sans engagement. Garantie RDV : < 5 RDV qualifiés/mois = mois suivant offert.

Fondée en 2024 par Abraham Brakha.
→ www.setting.live
```

### Logo / cover

- Logo : reprendre `public/icon.png` du repo
- Cover : créer 1584×396 px (Canva template "LinkedIn Cover"). Texte suggéré : **"Le pipeline LinkedIn B2B des solopreneurs qui veulent vendre."** + logo + URL.

### Une fois fait

1. Récupérer la nouvelle URL `linkedin.com/company/setting-agency` (ou variante choisie)
2. Mettre à jour `app/page.tsx` sameAs ligne 77 (premier item)
3. Mettre à jour `app/a-propos/page.tsx` sameAs ligne 69
4. Mettre à jour `public/llms.txt` ligne LinkedIn entreprise
5. Mettre à jour `public/llms-full.txt` ligne LinkedIn entreprise
6. Mettre à jour `components/Footer.tsx` ligne 32

### Plan de posts 3×/semaine (mois 1)

| Jour | Format | Sujet |
|---|---|---|
| Lundi | Carrousel | "5 signaux d'achat LinkedIn qu'on ignore tous" |
| Mercredi | Post texte | Cas client court (problème → méthode → résultat chiffré) |
| Vendredi | Post personnel d'Abraham | Coulisses / contrarian take sur la prospection |

---

## 2. Inscriptions annuaires — 5 listings prioritaires

> Objectif : 5 backlinks dofollow + 5 mentions scrappées par les LLMs pour résoudre l'identité d'entité.

### Données communes à coller partout

```
Nom commercial : Setting
Entité juridique : Abraham Brakha (EI)
SIRET : 902 889 385 00016
TVA : FR09902889385
Code APE : 70.22Z
Adresse : 50B rue Salomon Reinach, 69007 Lyon
Année de création : 2024
Effectif : 3
Site : https://www.setting.live
Email : a.brakha@challengerslab.com
Téléphone : [à compléter]
Secteur : Services B2B / Prospection commerciale
Catégorie : Agence de prospection LinkedIn / SDR externalisé / Setting B2B
```

### Description courte (≤ 160 caractères)

```
Agence de prospection LinkedIn B2B. Setter dédié, méthode signal-based, IA + humain. 2 à 4 RDV qualifiés/semaine. 790 €/mois sans engagement.
```

### Description longue (≤ 600 caractères)

```
Setting est une agence française de prospection LinkedIn B2B externalisée pour solopreneurs, fondateurs et consultants. Notre méthode signal-based combine la détection IA des signaux d'achat (likes, commentaires, changements de poste) avec une co-rédaction humaine des messages. Résultats 2026 sur 20+ clients : 20-35 % de taux de réponse, 2 à 4 RDV qualifiés par semaine, premiers RDV en moins de 7 jours. À partir de 790 €/mois HT, setup offert, sans engagement. Basée à Lyon, France.
```

### Tags / mots-clés (où demandé)

`prospection LinkedIn, setting B2B, SDR externalisé, agence prospection, setter LinkedIn, lead generation B2B, sales development, IA prospection`

### 5 plateformes à viser dans l'ordre

1. **Sortlist** — `sortlist.fr/sign-up`
   - Catégorie : "Lead Generation" + "Inside Sales"
   - Localisation : Lyon
   - Délai : 24-48h validation manuelle
   - Bénéfice : trafic qualifié + backlink dofollow

2. **SalesDorado** — contacter via `salesdorado.com/contact` pour intégration dans leur annuaire d'agences de prospection
   - Demander spécifiquement : "annuaire des agences de prospection LinkedIn B2B"
   - Argument : 20+ clients, méthode signal-based unique

3. **Welcome to the Jungle** — `welcometothejungle.com/fr/companies/new` (page entreprise gratuite)
   - Plus orienté employer branding mais bon signal d'entité
   - Photos d'équipe + culture obligatoires

4. **Bpifrance Hub** — `bpifrance-hub.fr` (annuaire des startups françaises)
   - Inscription gratuite
   - Critère : société immatriculée en France ✓

5. **Frenchweb / Maddyness annuaires** — `annuaire.frenchweb.fr` + `maddyness.com/startups`
   - Bénéfice : sources scrapées par les LLMs sur l'écosystème startup FR

### Une fois fait

Pour chaque URL publique récupérée, ajouter à `app/page.tsx` sameAs.

---

## 3. YouTube — Channel "Setting" + 3 premières vidéos

### Channel branding

- **Nom** : `Setting`
- **Handle** : `@setting-b2b` (ou `@settinglinkedin` selon dispo)
- **Description** :
```
Setting — l'agence de prospection LinkedIn B2B pour les solopreneurs.
Méthode signal-based, IA + humain, 2 à 4 RDV qualifiés par semaine.
Tutos, cas clients, contrarian takes sur la prospection B2B.

→ www.setting.live
→ Réserver un appel : [calendly]
```
- **Cover** : 2560×1440 (Canva template). Reprend visuels Setting.
- **Lien channel** : à coller dans `sameAs` une fois créé.

### Vidéo #1 — "C'est quoi le setting ? Définition en 3 minutes"

**Cibles SEO** : "c'est quoi le setting" (23 imp/mois en GSC), "qu'est ce que le setting" (11 imp).

**Hook (0:00-0:15)** : "Si tu cherches 'c'est quoi le setting' sur Google, la moitié des résultats sont à côté du sujet. Voici la définition en 3 phrases."

**Structure (script court)** :
1. Définition (30s) : "Le setting, c'est la phase commerciale qui précède le closing. Un setter détecte les prospects, les contacte, qualifie, et passe le RDV au closer. Il ne signe pas."
2. Setter vs closer (45s) : Tableau visuel des 2 rôles
3. Pourquoi c'est différent de la prospection classique (45s) : "On contacte ceux qui ont déjà levé la main"
4. Exemple concret (45s) : un signal d'achat → message → RDV
5. CTA (15s) : "Guide complet : setting.live/ressources/setting-definition"

**Description YouTube** :
```
Le setting est la phase commerciale qui précède le closing : un setter détecte des prospects qualifiés, les contacte, qualifie l'intérêt et passe les RDV à un closer.

🕐 Chapitres
00:00 Définition du setting
00:30 Setter vs closer
01:15 Pourquoi c'est différent du cold outreach
02:00 Exemple concret B2B
02:45 Pour aller plus loin

📚 Guide complet : https://www.setting.live/ressources/setting-definition
📚 Méthode complète : https://www.setting.live/ressources/setting-commercial-b2b

🎯 Setting — l'agence de prospection LinkedIn B2B
www.setting.live

#setting #prospectionb2b #salesb2b #linkedinb2b
```

### Vidéo #2 — "Setting LinkedIn vs Lemlist/Waalaxy : 2% vs 25% de réponse"

**Cibles SEO** : "automatisation prospection linkedin", "outil prospection linkedin b2b".

**Hook** : "Lemlist, c'est 2-5% de taux de réponse. Notre méthode hybride, c'est 20-35%. Voici exactement ce qui fait la différence."

**Description** :
```
Comparaison chiffrée 2026 : automatisation pure (Lemlist, Waalaxy) vs setting hybride IA + humain. Taux de réponse, coût réel, scalabilité.

🕐 Chapitres
00:00 Le constat : 2% vs 25%
01:00 Pourquoi l'auto pure ne marche plus
02:00 La méthode signal-based + IA + humain
03:30 Coût comparé sur 12 mois
04:30 Quand choisir quoi

📚 Méthode complète : https://www.setting.live/methode/setting-linkedin
📚 Comparatif : https://www.setting.live/externaliser-prospection-linkedin

#prospectionlinkedin #lemlist #waalaxy #salesb2b
```

### Vidéo #3 — "ROI d'une prospection LinkedIn externalisée : le calcul réel"

**Cibles SEO** : "externaliser prospection commerciale", "sdr externalisé", "agence prospection b2b".

**Hook** : "Externaliser à 790€/mois ou recruter un SDR à 50k€/an ? On fait le calcul ligne par ligne."

**Description** :
```
ROI chiffré d'une prospection LinkedIn externalisée vs SDR interne vs DIY. Tableau comparatif sur 12 mois, avec hypothèses de ticket moyen.

🕐 Chapitres
00:00 Les 3 options en B2B
00:45 Option 1 : faire soi-même (coût caché du temps)
02:00 Option 2 : recruter un SDR
03:30 Option 3 : externalisé
04:30 Le tableau de bord ROI

📚 Comparatif chiffré : https://www.setting.live/externaliser-prospection-linkedin
📚 Tarifs : https://www.setting.live/tarifs

#sdr #prospectionb2b #externalisation #salesops
```

### Une fois publiées

Mettre à jour `app/page.tsx` sameAs avec l'URL channel + ajouter une `VideoObject` schema sur les pages de ressources concernées (setting-definition, externaliser-prospection-linkedin, etc.).

---

## 4. Baromètre "Setting B2B 2026" — préparation du sondage

> Objectif : créer un asset citable par la presse + backlinks autoritaires. Sortie cible M+2 (mois 7), préparation maintenant.

### Cible répondants

- 200 setters, closers et fondateurs B2B en France
- Diffusion : LinkedIn organique (Abraham + équipe), groupes Slack/Discord (Indie Hackers FR, SaaS FR, French Tech), partenaires (SalesDorado, Closing Mastery, etc.)
- Incentif : "Étude complète envoyée en avant-première aux répondants + leur entreprise mentionnée si volontaire"

### Questionnaire (10 questions max)

#### Identification (3)
1. Quel est ton rôle principal ?
   - [ ] Setter / SDR
   - [ ] Closer / Account Executive
   - [ ] Fondateur ou solopreneur B2B
   - [ ] Manager commercial
   - [ ] Autre : ___
2. Taille de l'équipe commerciale dans ton entreprise ?
   - [ ] 1 (solo)  [ ] 2-5  [ ] 6-15  [ ] 16-50  [ ] 50+
3. Ticket moyen B2B vendu ?
   - [ ] < 2k€  [ ] 2-10k€  [ ] 10-50k€  [ ] 50k€+

#### Pratiques (4)
4. Combien de RDV qualifiés génères-tu par semaine en moyenne ? (champ libre nombre)
5. Quel est ton taux de réponse moyen sur LinkedIn ? (champ libre %)
6. Quels outils utilises-tu pour prospecter ? (cases à cocher : Sales Navigator, Lemlist, Waalaxy, LaGrowthMachine, ChatGPT, Claude, Reactin, Spyer, Autre)
7. Quelle part de tes messages est rédigée avec une IA ?
   - [ ] 0% (100% manuel)  [ ] 1-25%  [ ] 26-50%  [ ] 51-75%  [ ] 76-100%

#### Économie (3)
8. Quel est le coût annuel total de ta prospection (outils + temps + éventuels prestataires) ? (champ libre €)
9. Si tu externalises (ou as externalisé), à quel tarif mensuel ? (champ libre € — N/A si jamais externalisé)
10. Sur les 12 prochains mois, ton budget prospection va...
    - [ ] Baisser  [ ] Rester stable  [ ] Augmenter de 10-30%  [ ] Augmenter de 30%+

### Plan de production de l'étude

| Semaine | Action |
|---|---|
| S1 (cette semaine S4) | Finaliser le questionnaire, choisir l'outil (Typeform ou Tally — Tally est gratuit + intégrations) |
| S2 | Diffusion intense : 5 posts LinkedIn Abraham, 2 posts page Setting, outreach 30 partenaires |
| S3-S4 | Relances + atteinte 200 répondants |
| S5-S6 (M+2 sem 1-2) | Analyse, rédaction, mise en forme |
| S7 (M+2 sem 3) | Sortie : article pilier `/ressources/barometre-setting-b2b-2026` + PDF téléchargeable + pitch presse (BFM Business, Maddyness, Frenchweb, Sortlist Blog) |

### Pitch presse (mail à envoyer en S7)

**Objet** : `Étude inédite : la prospection B2B française en 2026 (200 répondants)`

```
Bonjour [nom du journaliste],

Setting vient de publier le premier Baromètre français du setting B2B 2026, basé sur 200 répondants (setters, closers, fondateurs B2B).

Quelques chiffres saillants :
• [chiffre #1 sur taux de réponse moyen 2026]
• [chiffre #2 sur l'adoption de l'IA]
• [chiffre #3 sur le coût moyen prospection]

L'étude complète (PDF) est attachée. Je suis disponible pour interview ou pour fournir d'autres datapoints si utile à votre angle.

[signature Abraham + lien étude]
```

Destinataires : journalistes B2B/SaaS de BFM Business, Maddyness, Frenchweb, Les Echos Entrepreneurs, JDN.

---

## 5. Mesure J+28 — checklist GSC

À faire **fin juin 2026** (28 jours après les changements Phase 0-3).

### Export GSC

1. `search.google.com/search-console` → propriété `https://www.setting.live`
2. **Performance → Search results** → période **28 derniers jours**
3. Export ZIP (7 onglets : Graphique, Pays, Appareils, Pages, Requêtes, Apparence, Filtres)

### KPIs à comparer vs baseline (25/04→22/05)

| KPI | Baseline mai 2026 | Cible M+1 | Réel à venir |
|---|---|---|---|
| Clics 28j | 24 | 50+ | ? |
| Impressions 28j | 1 233 | 2 000+ | ? |
| CTR moyen | 1,95 % | 3 %+ | ? |
| Position moyenne | 14 | 11 | ? |
| Top 3 keywords | 3 | 5+ | ? |
| Pays avec clics | 6 | 8+ | ? |

### Nouvelles requêtes à surveiller spécifiquement

- "c'est quoi le setting" → doit grimper vers top 10 (nouvelle page `/setting-definition`)
- "script linkedin" → doit grimper vers top 15 (nouvelle page `/script-linkedin-prospection`)
- "sdr externalisé" → doit grimper vers top 15 (FAQ ajoutée sur `/externaliser-prospection-linkedin`)
- "comment faire du setting" → doit grimper vers top 10 (HowTo schema + FAQ exact-match sur `/setting-commercial-b2b`)
- "prospection linkedin b2b" → doit gagner 3-5 positions

### Output attendu

Mettre à jour `SEO-DASHBOARD.md` avec un nouveau bloc "Cycle mai 2026 — mesure J+28" et chiffrer le delta.
