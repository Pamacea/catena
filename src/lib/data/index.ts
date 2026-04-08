/**
 * Data Loader Centralisé pour Catena
 *
 * Ce fichier centralise l'accès à toutes les données statiques du projet:
 * - Hérésies
 * - Conciles
 * - Catéchismes
 * - Bible (métadonnées)
 * - Prières liturgiques
 *
 * Utilise un pattern singleton pour optimiser les performances.
 */

import {
  heresies,
  searchHeresies as searchHeresiesData,
  getHeresyBySlug,
  getHeresiesByCategory,
  getHeresiesByCentury,
  type Heresy,
  type HeresyCategory,
} from "@/data/heresies";

import {
  councils,
  getCouncilBySlug,
  getCouncilByNumber,
  getCouncilsByCentury,
  searchCouncils as searchCouncilsData,
  getCouncilsByHeresy,
  type Council,
  type CouncilType,
} from "@/data/councils";

import {
  catechisms,
  getCatechismById,
  getQuestionById,
  getQuestionsByCategory,
  searchCatechisms as searchCatechismsData,
  type Catechism,
  type CatechismType,
  type CatechismQuestion,
  type QuestionCategory,
} from "@/data/catechisms";

import {
  bibleBooks,
  getBookById,
  getBooksByTestament,
  getBooksByGenre,
  type BibleBook,
  type Testament,
  type Genre,
} from "@/data/bible";

import {
  prayers,
  getPrayerBySlug,
  getPrayersByCategory,
  searchPrayers as searchPrayersData,
  type Prayer,
  type PrayerCategory,
} from "@/data/prayers";

// ============================================================================
// TYPES EXPORTÉS
// ============================================================================

export type {
  Heresy,
  HeresyCategory,
  Council,
  CouncilType,
  Catechism,
  CatechismType,
  CatechismQuestion,
  QuestionCategory,
  BibleBook,
  Testament,
  Genre,
  Prayer,
  PrayerCategory,
};

// ============================================================================
// RECHERCHE GLOBALE
// ============================================================================

export type SearchScope = "bible" | "doctrine" | "catechism" | "all";
export type SearchResult =
  | { type: "heresy"; data: Heresy }
  | { type: "council"; data: Council }
  | { type: "catechism"; data: CatechismQuestion }
  | { type: "bible"; data: BibleBook };

/**
 * Recherche globale dans toutes les données
 */
export function globalSearch(query: string, scope: SearchScope = "all"): SearchResult[] {
  const results: SearchResult[] = [];

  if (scope === "all" || scope === "doctrine") {
    // Recherche dans les hérésies
    const heresyResults = searchHeresiesData(query);
    for (const heresy of heresyResults) {
      results.push({ type: "heresy", data: heresy });
    }

    // Recherche dans les conciles
    const councilResults = searchCouncilsData(query);
    for (const council of councilResults) {
      results.push({ type: "council", data: council });
    }
  }

  if (scope === "all" || scope === "catechism") {
    // Recherche dans les catéchismes
    const catechismResults = searchCatechismsData(query);
    for (const question of catechismResults) {
      results.push({ type: "catechism", data: question });
    }
  }

  if (scope === "all" || scope === "bible") {
    // Recherche dans la Bible (livres)
    const q = query.toLowerCase();
    const bibleResults = bibleBooks.filter(
      book =>
        book.name.toLowerCase().includes(q) ||
        book.nameLatin.toLowerCase().includes(q) ||
        book.abbreviation.toLowerCase().includes(q)
    );
    for (const book of bibleResults) {
      results.push({ type: "bible", data: book });
    }
  }

  return results;
}

// ============================================================================
// HÉRÉSIES
// ============================================================================

export { heresies };

export const heresiesData = {
  getAll: () => heresies,
  getBySlug: (slug: string) => getHeresyBySlug(slug),
  getByCategory: (category: HeresyCategory) => getHeresiesByCategory(category),
  getByCentury: (century: number) => getHeresiesByCentury(century),
  search: (query: string) => searchHeresiesData(query),
};

// ============================================================================
// CONCILES
// ============================================================================

export { councils };

export const councilsData = {
  getAll: () => councils,
  getBySlug: (slug: string) => getCouncilBySlug(slug),
  getByNumber: (number: number) => getCouncilByNumber(number),
  getByCentury: (century: number) => getCouncilsByCentury(century),
  getByHeresy: (heresySlug: string) => getCouncilsByHeresy(heresySlug),
  search: (query: string) => searchCouncilsData(query),
};

// ============================================================================
// CATÉCHISMES
// ============================================================================

export { catechisms };

export const catechismsData = {
  getAll: () => catechisms,
  getById: (id: string) => getCatechismById(id),
  getByType: (type: CatechismType) => catechisms.find(c => c.type === type),
  getQuestion: (id: string) => getQuestionById(id),
  getQuestionsByCategory: (category: QuestionCategory) => getQuestionsByCategory(category),
  search: (query: string) => searchCatechismsData(query),
};

// ============================================================================
// BIBLE
// ============================================================================

export { bibleBooks };

export const bibleData = {
  getAllBooks: () => bibleBooks,
  getBook: (id: string) => getBookById(id),
  getByTestament: (testament: Testament) => getBooksByTestament(testament),
  getByGenre: (genre: Genre) => getBooksByGenre(genre),
};

// ============================================================================
// PRIÈRES
// ============================================================================

export { prayers };

export const prayersData = {
  getAll: () => prayers,
  getBySlug: (slug: string) => getPrayerBySlug(slug),
  getByCategory: (category: PrayerCategory) => getPrayersByCategory(category),
  search: (query: string) => searchPrayersData(query),
};

// ============================================================================
// STATISTIQUES
// ============================================================================

export interface DataStats {
  heresies: number;
  councils: number;
  catechisms: number;
  questions: number;
  bibleBooks: number;
  prayers: number;
}

/**
 * Retourne des statistiques sur les données disponibles
 */
export function getDataStats(): DataStats {
  return {
    heresies: heresies.length,
    councils: councils.length,
    catechisms: catechisms.length,
    questions: catechisms.reduce((sum, c) => sum + c.questions.length, 0),
    bibleBooks: bibleBooks.length,
    prayers: prayers.length,
  };
}

// ============================================================================
// UTILITAIRES
// ============================================================================

/**
 * Vérifie si un slug existe dans les données
 */
export function slugExists(slug: string): boolean {
  return (
    getHeresyBySlug(slug) !== undefined ||
    getCouncilBySlug(slug) !== undefined ||
    getCatechismById(slug) !== undefined ||
    getBookById(slug) !== undefined ||
    getPrayerBySlug(slug) !== undefined
  );
}

/**
 * Résout un slug vers son type d'entité
 */
export function resolveSlugType(
  slug: string
): "heresy" | "council" | "catechism" | "bible" | "prayer" | null {
  if (getHeresyBySlug(slug)) return "heresy";
  if (getCouncilBySlug(slug)) return "council";
  if (getCatechismById(slug)) return "catechism";
  if (getBookById(slug)) return "bible";
  if (getPrayerBySlug(slug)) return "prayer";
  return null;
}

/**
 * Obtient les suggestions de complétion pour une recherche
 */
export function getCompletions(partial: string, limit = 10): string[] {
  const suggestions = new Set<string>();
  const p = partial.toLowerCase();

  // Hérésies
  for (const heresy of heresies) {
    if (heresy.name.toLowerCase().startsWith(p)) {
      suggestions.add(heresy.slug);
    }
  }

  // Conciles
  for (const council of councils) {
    if (council.name.toLowerCase().startsWith(p)) {
      suggestions.add(council.slug);
    }
  }

  // Catéchismes
  for (const catechism of catechisms) {
    if (catechism.name.toLowerCase().startsWith(p)) {
      suggestions.add(catechism.id);
    }
  }

  // Bible
  for (const book of bibleBooks) {
    if (book.name.toLowerCase().startsWith(p)) {
      suggestions.add(book.id);
    }
  }

  return Array.from(suggestions).slice(0, limit);
}
