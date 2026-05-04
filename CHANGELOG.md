# Changelog

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