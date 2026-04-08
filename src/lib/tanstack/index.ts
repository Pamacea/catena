/**
 * TanStack Library Exports
 */

export { QueryProviders } from "./query-client";
export type { QueryClient } from "@tanstack/react-query";

export {
  searchHeresies,
  getHeresyBySlug,
  getBibleChapter,
  getBibleBooks,
  getCatechismQuestions,
  getCatechisms,
  getBacklinks,
} from "./server-actions";

// Re-export types from schemas
export type {
  HeresyFilters,
  BibleChapterRequest,
  CatechismQuestionRequest,
  BacklinksRequest,
} from "@/lib/schemas/search";

// Re-export Zod schemas
export {
  HeresyFiltersSchema,
  BibleChapterSchema,
  CatechismQuestionSchema,
  BacklinksSchema,
} from "@/lib/schemas/search";
