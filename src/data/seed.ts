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
export * from "./books";
export * from "./verses";
export * from "./theological";

import { bibleBooks } from "./bible";
import { heresies } from "./heresies";
import { catechisms } from "./catechisms";
import { councils } from "./councils";
import { prayers } from "./prayers";
import { bookSummaries } from "./books";
import { essentialVerses } from "./verses";
import { hebrewTerms, greekTerms, theologicalConcepts } from "./theological";

/**
 * Seed principale - exporte toutes les données
 */
export const seed = {
  bible: {
    books: bibleBooks,
    summaries: bookSummaries,
    verses: essentialVerses,
  },
  doctrine: {
    heresies,
  },
  catechisms,
  councils,
  prayers,
  dictionary: {
    hebrewTerms,
    greekTerms,
    theologicalConcepts,
  },
} as const;

export type CatenaSeed = typeof seed;
