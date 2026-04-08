/**
 * Catena - Data Seed
 *
 * Point d'entrée unique pour charger toutes les données théologiques.
 * Les données sont en dur (.ts) et typées avec TypeScript strict.
 */

export * from "./bible";
export * from "./heresies";
export * from "./catechisms";
export * from "./councils";
export * from "./prayers";

import { bibleBooks } from "./bible";
import { heresies } from "./heresies";
import { catechisms } from "./catechisms";
import { councils } from "./councils";
import { prayers } from "./prayers";

/**
 * Seed principale - exporte toutes les données
 */
export const seed = {
  bible: {
    books: bibleBooks,
  },
  doctrine: {
    heresies,
  },
  catechisms,
  councils,
  prayers,
} as const;

export type CatenaSeed = typeof seed;
