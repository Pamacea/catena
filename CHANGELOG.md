# Changelog

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

### Corrections

- **Liens cassés** : le lien `/timeline` (404) dans Header et homepage remplacé par `/chronologie` et `/councils`
- **Barrel export** : `export * from "./councils"` corrigé (dossier inexistant) → `./timeline` + `./chronology`
- **Dates bibliques** : dates de composition corrigées selon l'érudition moderne (Pentateuque post-exilique, etc.)

### Données

- `src/data/chronology/index.ts` — module unifié avec types `ChronologyEvent`, adapters conciles/hérésies, dates bibliques, événements historiques
- Interface `ChronologyEvent` : `type` (COUNCIL/HERESY/BIBLE_BOOK/HISTORICAL), `year`, `href`, `tags`, `location`
- Helpers : `getAllChronologyEvents()`, `formatYear()`, `getEraLabel()`, `getEras()`

### Composants

- `ChronologyTimeline` — frise verticale avec filtres et groupement par ères
- `ChronologyEventCard` — carte d'événement colorée par type

### Pages

- `/chronologie` — layout + page server component

## [0.1.1] — 2026-04-08

### Fixes

- **Text colors**: Fix invisible text (white/beige/gray) on light backgrounds across liturgy, catechism, and doctrine pages
- **Dark mode**: Add missing `dark:` variants to all section layouts and components (20 files)
- **Ink palette**: Warm up ink colors from cold gray to warm brown for better contrast on parchment backgrounds
- **DoctrineIndex**: Fix broken dynamic Tailwind class interpolation (`bg-{}-100`)
- **BilingualText**: Redesign grid layout with LATIN/FR badge labels and synchronized scroll
- **Search inputs**: Add explicit `text-ink-800` and `placeholder:text-ink-400` classes

### Files Modified

`tailwind.config.ts`, layouts (liturgy, doctrine, catechism), Header, Footer, BilingualText, LiturgyIndex, PrayerCard, DoctrineIndex, HeresyCard, Card, CatechismIndex, CatechismNode, QuestionAccordion, page files

## [0.1.0] — 2026-04-08

### SEO
- `sitemap.ts` dynamique couvrant toutes les routes (bible, doctrine, catechism, liturgy)
- `robots.ts` avec référence au sitemap
- `metadataBase`, OpenGraph, Twitter Cards sur le layout racine
- OpenGraph `type: article` sur les 8 pages dynamiques
- Helpers JSON-LD (`BreadcrumbList`, `Book`, `Article`) dans `src/lib/seo/json-ld.ts`

### Sécurité
- `middleware.ts` avec headers HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Cache headers dans `next.config.js` (assets immutables, security headers en backup)
- `try/catch` sur tous les Server Actions (`search.ts`, `server-actions.ts`)
- `global-error.tsx` — error boundary avec thème Catena
- `not-found.tsx` — page 404 avec navigation vers les sections

### Optimisation
- Correction `parchemin` → `parchment` (103 occurrences, 31 fichiers) — les couleurs Tailwind cassées
- Dark mode fonctionnel : `darkMode: 'class'` dans Tailwind, détection système via script inline
- `SearchBar` : fuite mémoire debounce corrigée (`useRef` au lieu de `window`), bug CSS `border-gold-400/40/20`
- Menu mobile fonctionnel dans `Header.tsx` avec toggle et panneau de navigation
- Suppression des fichiers `nul` (artefacts Windows) et `CouncilCard.tsx` vide

### Infrastructure
- Build Next.js 16.2.2 avec Turbopack — OK
- 386 tests Vitest — OK
- Vercel Analytics intégré
