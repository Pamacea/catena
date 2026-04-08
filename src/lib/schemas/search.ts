/**
 * Zod Schemas for validation
 *
 * These schemas are used for input validation across the app.
 * They are in a separate file to avoid "use server" export restrictions.
 */

import { z } from "zod";

/**
 * Schema pour la recherche globale
 */
export const SearchSchema = z.object({
  query: z.string().min(1, "La requête ne peut pas être vide"),
  scope: z.enum(["bible", "doctrine", "catechism", "all"]).default("all"),
  limit: z.number().int().positive().max(100).default(20),
});

export type SearchRequest = z.infer<typeof SearchSchema>;

/**
 * Schema pour les autocomplétions
 */
export const CompletionsSchema = z.object({
  partial: z.string().min(1),
  limit: z.number().int().positive().max(20).default(10),
});

export type CompletionsRequest = z.infer<typeof CompletionsSchema>;

/**
 * Schema for heresy search filters
 */
export const HeresyFiltersSchema = z.object({
  query: z.string().optional(),
  category: z
    .enum([
      "CHRISTOLOGICAL",
      "TRINITARIAN",
      "ANTHROPOLOGICAL",
      "ECCLESIOLOGICAL",
      "ESCHATOLOGICAL",
      "SCRIPTURAL",
      "SACRAMENTAL",
    ])
    .optional(),
  century: z.number().int().positive().optional(),
});

export type HeresyFilters = z.infer<typeof HeresyFiltersSchema>;

/**
 * Schema for Bible chapter request
 */
export const BibleChapterSchema = z.object({
  bookId: z.string().min(1),
  chapter: z.number().int().positive().max(150),
});

export type BibleChapterRequest = z.infer<typeof BibleChapterSchema>;

/**
 * Schema for catechism question request
 */
export const CatechismQuestionSchema = z.object({
  id: z.string().min(1).optional(),
  category: z
    .enum([
      "APOSTLES_CREED",
      "NICENE_CREED",
      "COMMANDMENTS",
      "SACRAMENTS",
      "PRAYER",
      "GRACE",
      "SIN",
      "LAST_THINGS",
      "LITURGY",
    ])
    .optional(),
  catechismId: z.string().min(1).optional(),
});

export type CatechismQuestionRequest = z.infer<typeof CatechismQuestionSchema>;

/**
 * Schema for backlinks request
 */
export const BacklinksSchema = z.object({
  slug: z.string().min(1),
  type: z.enum(["heresy", "council", "catechism", "bible"]).optional(),
});

export type BacklinksRequest = z.infer<typeof BacklinksSchema>;

/**
 * Search scope type
 */
export type SearchScope = "bible" | "doctrine" | "catechism" | "all";
