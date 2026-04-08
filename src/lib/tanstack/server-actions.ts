"use server";

/**
 * TanStack Query Server Actions for Catena
 *
 * Server Actions for fetching data from the static data directories.
 * These actions are marked with "use server" and can be called from Client Components.
 * All inputs are validated using Zod schemas.
 */

import {
  heresies,
  type Heresy,
  type HeresyCategory,
  searchHeresies as searchHeresiesData,
  getHeresiesByCategory,
  getHeresiesByCentury,
} from "@/data/heresies";
import { bibleBooks, type BibleBook, getBookById } from "@/data/bible";
import {
  catechisms,
  type Catechism,
  type QuestionCategory,
  getCatechismById,
  getQuestionById,
  getQuestionsByCategory,
  searchCatechisms as searchCatechismsData,
} from "@/data/catechisms";
import { councils, type Council, searchCouncils as searchCouncilsData } from "@/data/councils";
import {
  HeresyFiltersSchema,
  HeresyFilters,
  BibleChapterSchema,
  BibleChapterRequest,
  CatechismQuestionSchema,
  CatechismQuestionRequest,
  BacklinksSchema,
  BacklinksRequest,
} from "@/lib/schemas/search";

// ============================================================================
// Server Actions
// ============================================================================

/**
 * Search and filter heresies
 */
export async function searchHeresies(filters: HeresyFilters) {
  try {
    const validated = HeresyFiltersSchema.parse(filters);

    let results: Heresy[] = heresies;

    // Filter by query
    if (validated.query) {
      results = searchHeresiesData(validated.query);
    }

    // Filter by category
    if (validated.category) {
      const categoryResults = getHeresiesByCategory(validated.category as HeresyCategory);
      results = results.filter(h => categoryResults.some(cr => cr.slug === h.slug));
    }

    // Filter by century
    if (validated.century) {
      const centuryResults = getHeresiesByCentury(validated.century);
      results = results.filter(h => centuryResults.some(cr => cr.slug === h.slug));
    }

    return results;
  } catch {
    return [] as Heresy[];
  }
}

/**
 * Get a single heresy by slug
 */
export async function getHeresyBySlug(slug: string) {
  try {
    if (!slug) {
      return null;
    }

    const heresy = heresies.find(h => h.slug === slug);

    if (!heresy) {
      return null;
    }

    // Attach backlinks dynamically
    const backlinks = await getBacklinksForHeresy(heresy.slug);
    return { ...heresy, backlinks };
  } catch {
    return null;
  }
}

/**
 * Get Bible chapter (placeholder for future API integration)
 */
export async function getBibleChapter(request: BibleChapterRequest) {
  try {
    const validated = BibleChapterSchema.parse(request);

    const book = getBookById(validated.bookId);

    if (!book) {
      return null;
    }

    return {
      book,
      chapter: validated.chapter,
    };
  } catch {
    return null;
  }
}

/**
 * Get all Bible books
 */
export async function getBibleBooks() {
  return bibleBooks;
}

/**
 * Get catechism questions
 */
export async function getCatechismQuestions(request: CatechismQuestionRequest) {
  try {
    const validated = CatechismQuestionSchema.parse(request);

    if (validated.id) {
      const question = getQuestionById(validated.id);
      return question ? [question] : [];
    }

    if (validated.category) {
      return getQuestionsByCategory(validated.category as QuestionCategory);
    }

    if (validated.catechismId) {
      const catechism = getCatechismById(validated.catechismId);
      return catechism?.questions ?? [];
    }

    return catechisms.flatMap(c => c.questions);
  } catch {
    return [];
  }
}

/**
 * Get all catechisms
 */
export async function getCatechisms() {
  return catechisms;
}

/**
 * Get backlinks for a given slug
 *
 * This finds all pages that reference the given entity.
 * For now, this is a simplified implementation that will be expanded
 * when the full content system is in place.
 */
export async function getBacklinks(request: BacklinksRequest) {
  try {
    const validated = BacklinksSchema.parse(request);

    return getBacklinksForSlug(validated.slug, validated.type);
  } catch {
    return [];
  }
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get backlinks for a heresy
 */
async function getBacklinksForHeresy(slug: string) {
  const backlinks: Array<{ source: string; type: string; context?: string }> = [];

  // Check councils that condemned this heresy
  for (const council of councils) {
    // Check heresiesCondemned array
    for (const condemned of council.heresiesCondemned ?? []) {
      if (condemned.heresySlug === slug) {
        backlinks.push({
          source: council.slug,
          type: "council",
          context: `Condamné par ${council.name}`,
        });
      }
    }

    // Check relatedHeresies array
    if (council.relatedHeresies?.includes(slug)) {
      backlinks.push({
        source: council.slug,
        type: "council",
        context: `Condamné par ${council.name}`,
      });
    }
  }

  // Check catechisms that reference this heresy
  for (const catechism of catechisms) {
    for (const question of catechism.questions) {
      if (question.relatedCouncils) {
        // Indirect relation via councils
        for (const councilSlug of question.relatedCouncils) {
          const council = councils.find(c => c.slug === councilSlug);
          if (
            council?.heresiesCondemned?.some(h => h.heresySlug === slug) ||
            council?.relatedHeresies?.includes(slug)
          ) {
            backlinks.push({
              source: `${catechism.id}/${question.id}`,
              type: "catechism",
              context: `Question ${question.number}`,
            });
          }
        }
      }
    }
  }

  return backlinks;
}

/**
 * Get backlinks for any entity
 */
async function getBacklinksForSlug(
  slug: string,
  type?: "heresy" | "council" | "catechism" | "bible"
) {
  if (type === "heresy") {
    return getBacklinksForHeresy(slug);
  }

  // TODO: Implement backlinks for other entity types
  return [];
}
