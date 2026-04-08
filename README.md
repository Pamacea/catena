# Catena — Chaîne de la Tradition

Encyclopédie théologique catholique bilingue (latin/français) naviguant à travers deux millénaires de tradition.

## Couverture

- **Bible** — 73 livres (46 AT + 27 NT), chapitre par chapitre
- **Doctrine** — Hérésies condamnées, conciles, réfutations patristiques
- **Catéchisme** — Catéchismes historiques (Tridentin, Saint Pie X, Curé d'Ars)
- **Liturgie** — Prières bilingues latin/français
- **Chronologie** — Timeline des conciles de l'Église

## Stack

Next.js 16 · React 19 · TypeScript strict · TanStack Query · Tailwind CSS · Zod · Vitest

## Architecture

Données statiques TypeScript (pas de base de données), recherche globale via Server Actions, WikiLinks pour le cross-référencement, SSG avec `generateStaticParams`.