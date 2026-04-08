/**
 * Main library exports for Catena
 */

export { cn, formatDate, formatYearRange, slugify, truncate, debounce } from "./utils";

export {
  QueryProviders,
  searchHeresies,
  getHeresyBySlug,
  getBibleChapter,
  getBibleBooks,
  getCatechismQuestions,
  getCatechisms,
  getBacklinks,
} from "./tanstack";

export {
  heresiesCollection,
  councilsCollection,
  catechismsCollection,
  transformWikiLinks,
  extractBacklinks,
} from "./contentlayer";

// Re-export types for convenience
export type {
  HeresyFilters,
  HeresyFiltersSchema,
  BibleChapterRequest,
  CatechismQuestionRequest,
  BacklinksRequest,
} from "./tanstack";
