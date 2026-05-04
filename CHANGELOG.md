# Changelog

## [0.2.6] — 2026-05-05

### Enrichissements

- **Hérésies** : `americanisme` et `sillon` enrichis — ajout de `development`, `consequences`, `canonicalResponse` (analyse historique, impact, réponse canonique)
- **Conciles** : 20/20 conciles ont maintenant les 4 champs optionnels (`heresiesCondemned`, `relatedCouncils`, `relatedBible`, `decrees`) — +12 `heresiesCondemned`, +12 `relatedCouncils`, +18 `relatedBible`, +5 `decrees`
- **Disputationes** : +13 nouvelles questions (40→53) — APOLOGETIQUE 1→6 (existence Dieu, miracles, vraie religion, Écriture, foi/raison), ECLESIOLOGIE 2→6 (unité, apostolicité, primauté papale, extra Ecclesiam), DISCIPLINE 2→6 (sépulture, jeûne, crémation, voeux religieux)
- **Catéchisme Laguerie IBP** : +5 questions (35→40) — transsubstantiation, sacrifice de la messe, contrition/attrition, obligation des commandements, suffrages pour les défunts

### Fichiers

- `src/data/heresies/index.ts` — americanisme + sillon enrichis
- `src/data/councils/index.ts` — 20 conciles enrichis (heresiesCondemned, relatedCouncils, relatedBible, decrees)
- `src/data/disputationes/index.ts` — +13 disputationes (APOLOGETIQUE, ECLESIOLOGIE, DISCIPLINE)
- `src/data/catechism/laguerie-ibp.ts` — +5 questions

## [0.2.5] — 2026-05-04

### Nouveautés

- **Catéchisme Pie X** : expansion de 19 à ~30 articles / 50+ questions — commandements, sacrements (Confirmation, Ordre, Mariage), vertus théologales & cardinales, péchés capitaux, 7 dons du Saint-Esprit, Église (4 notes), Purgatoire, Angelus, Rosaire, Chemin de Croix, glossaires
- **Catéchisme Curé d'Ars** : enrichi de 14 à 22 articles / 25 questions — ajout de 5 sacrements (Baptême, Confirmation, Extrême-Onction, Ordre, Mariage), commandements de Dieu et de l'Église, vertus théologales & cardinales, prières essentielles
- **Catéchisme Laguerie IBP** : enrichi de 15 à 21 articles / 21 questions — ajout de 3 sacrements (Confirmation, Extrême-Onction, Mariage), Décalogue complet, commandements de l'Église, 7 dons du Saint-Esprit, 7 péchés capitaux, moyens de persévérance
- **Prières** : +11 nouvelles prières (Signe de Croix, Sous votre protection, Angelus, Reine du Ciel, Magnificat, Nunc Dimittis, Tantum Ergo, O Salutaris, Adoro Te Devote, Requiem Æternam, De Profundis) — total 28
- **Dogmes** : 3 nouveaux dogmes (Providence divine, Infaillibilité pontificale, Primauté de saint Pierre)
- **Hérésies** : 6 nouvelles hérésies historiques (Conciliarisme, Febronianisme, Traditionalisme/Lamennais, Américanisme, Le Sillon)
- **Conciles** : enrichissement de 8 conciles — descriptions détaillées, décrets dogmatiques, connexions entre conciles (Lyon I-II, Vienne, Latran I-III-V, Constance)

### Corrections

- **Hérésies** : suppression de l'entrée dupliquée « gallicanisme » (clé dupliquée dans la chronologie)
- **Types** : ajout de `sacrement-confirmation` et `commandements` à `CatechismCategory`

### Fichiers

- `src/data/catechism/pius-x.ts` — expansion massive (~1100 → ~1800 lignes)
- `src/data/catechism/cure-d-ars.ts` — +395 lignes (sacrements, commandements, vertus)
- `src/data/catechism/laguerie-ibp.ts` — +344 lignes (sacrements, commandements, dons)
- `src/data/prayers/index.ts` — +806 lignes (11 nouvelles prières)
- `src/data/dogmas/index.ts` — +85 lignes (3 dogmes)
- `src/data/heresies/index.ts` — +253 lignes (6 hérésies, suppression doublon)
- `src/data/councils/index.ts` — +114 lignes (8 conciles enrichis)
- `src/data/types/catechism.ts` — +2 catégories

## [0.2.4] — 2026-05-04

### Nouveautés

- **Section Crise** : nouvelle section `/crise` regroupant les études sur la crise post-conciliaire (Vatican II, Thèse de Cassiciacum, Non Una Cum)
- **Page Vatican II** : analyse des erreurs doctrinales du concile, comparaison avec le Magistère antérieur, conditions de recevabilité, réponses aux objections
- **Page Thèse de Cassiciacum** : exposé complet de la thèse thomiste du P. Guérard des Lauriers O.P. — fondements (matière/forme), preuves (Saint Thomas, Bellarmin, Cajetan, Droit Canon), objections et réponses
- **Page Non Una Cum** : contenu théologique complet (transféré dans `/crise/non-una-cum`)
- **Page Crise index** : présentation des trois études avec cartes cliquables
- **Bouton remonter** : ajout d'un bouton « Remonter en haut » dans le panel de lecture Vault

### Modifications

- **Navigation** : liens « Non Una Cum » et « Cassiciacum » remplacés par un seul lien « Crise » dans la barre de navigation
- **Dogmas** : suppression des boutons « Dogmes (55) » et « Hérésies » de la page

### Fichiers

- `src/app/crise/page.tsx` — page index avec 3 cartes
- `src/app/crise/layout.tsx` — layout avec Header compact, Footer, breadcrumb
- `src/app/crise/vatican-ii/page.tsx` — erreurs doctrinales, tableau comparatif, objections
- `src/app/crise/cassiciacum/page.tsx` — thèse complète avec preuves et réponses
- `src/app/crise/non-una-cum/page.tsx` — contenu théologique et liturgique
- `src/components/layout/Header.tsx` — lien Crise unique dans la navbar
- `src/components/vault/VaultExplorer.tsx` — bouton remonter en haut
- `src/app/globals.css` — styles du bouton remonter

## [0.2.3] — 2026-05-03

### Nouveautés

- **Page Vault** : nouvelle section `/vault` avec explorateur de fichiers interactif (sidebar arborescente + lecteur de notes)
- **Vault Obsidian** : intégration du vault « Le Livre » (142 notes .md, 2 PDF) dans `public/vault/`
- **Parsing Obsidian** : support wiki-links `[[liens]]`, callouts `> [!type]`, suppression du frontmatter YAML
- **Lien Vault** ajouté à la barre de navigation

### Corrections

- **BASE_URL** : migration de `catena.vercel.app` vers `catena.oalacea.fr` (sitemap, robots, layout, JSON-LD)
- **Scroll** : réinitialisation du scroll lors du changement de note
- **Titre page** : correction du doublon « Vault | Catena | Catena »

### Fichiers

- `src/app/vault/page.tsx` — page server component (scan du vault)
- `src/app/vault/layout.tsx` — layout sans footer
- `src/components/vault/VaultExplorer.tsx` — explorateur client (tree + lecteur)
- `src/components/vault/VaultMarkdown.tsx` — rendu markdown custom
- `src/lib/vault/index.ts` — scan récursif du vault + parsing Obsidian
- `public/vault/` — contenu du vault (notes, prières, PDF)

## [0.2.2] — 2026-05-02

### Nouveautés

- **Page Disputationes** : nouvelle section `/disputationes` avec la méthode scolastique (objections, *sed contra*, *respondeo*, *ad argumenta*)
- **Filtres par catégorie** : Théologie Dogmatique, Théologie Morale, Ecclésiologie, Apologétique, Discipline, Crise Post-Conciliaire
- **Lien Disputationes** ajouté à la barre de navigation
- **Module Citations** : ~80 citations magistérielles organisées en 18 thématiques (Dieu, Trinité, Incarnation, Église, Sacrements, Crise, Droit Canonique...)
- **Module Crise Post-Conciliaire** : 4 positions face à la crise (Obéissance, Reconnaître/Résister, Sédévacantisme, Thèse de Cassiciacum), distinction sessio/missio, 7 incompatibilités de Vatican II, causes d'invalidité, sources magistérielles, lignée épiscopale
- **Module Disputationes** : questions disputées structurées avec types `Disputatio`, catégories, helpers de filtrage

### Données

- `src/data/citations/index.ts` — citations magistérielles (ST, Trente, Florence, Vatican I, Pascendi, Cum Ex Apostolatus...)
- `src/data/crise/index.ts` — analyse de la crise post-conciliaire selon la Thèse de Cassiciacum (P. Guérard des Lauriers O.P.)
- `src/data/disputationes/index.ts` — questions disputées au format scolastique
- `src/data/councils/index.ts` — Vatican II retiré de la liste des conciles légitimes (avec justification)
- `src/data/heresies/index.ts` — 4 nouvelles hérésies : Modernisme, Libéralisme catholique, Indifférentisme religieux, Faux Œcuménisme

### Pages

- `/disputationes` — layout + page server component avec filtres par catégorie

## [0.2.0] — 2026-04-08

### Nouveautés

- **Page Chronologie** : nouvelle section `/chronologie` avec frise verticale unifiée (~130+ événements)
- **Données bibliques** : 73 livres de la Bible avec dates de composition traditionnelles (érudition moderne)
- **Événements historiques** : ~25 événements majeurs de l'histoire du salut (Appel d'Abraham, Exode, Pentecôte, Édit de Milan, Grand Schisme...)
- **Filtres interactifs** : filtre par type (Conciles, Hérésies, Livres bibliques, Événements)
- **Groupement par ères** : Patriarches, Rois et Prophètes, Intertestamentaire, Temps du Christ, Église primitive, Moyen Âge, Époque moderne...
- **Barre de navigation** : ajout de "Conciles" et "Chronologie" dans la navbar