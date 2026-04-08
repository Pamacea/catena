# Changelog

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
