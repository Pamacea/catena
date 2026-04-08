"use server";

/**
 * Search Server Actions pour Catena
 *
 * Server Actions pour la recherche globale dans toutes les données:
 * - Hérésies (doctrine)
 * - Conciles (timeline)
 * - Catéchismes
 * - Bible
 *
 * Toutes les entrées sont validées avec Zod.
 */

import { globalSearch, getDataStats, getCompletions } from "@/lib/data";
import {
  SearchSchema,
  SearchRequest,
  CompletionsSchema,
  CompletionsRequest,
  type SearchScope,
} from "@/lib/schemas/search";

// ============================================================================
// SERVER ACTIONS
// ============================================================================

/**
 * Recherche globale dans toutes les données
 *
 * @example
 * ```tsx
 * 'use client'
 * import { useActionState } from 'react'
 * import { searchAction } from '@/app/actions/search'
 *
 * export function SearchForm() {
 *   const [state, formAction, isPending] = useActionState(searchAction, null)
 *   ...
 * }
 * ```
 */
export async function searchAction(request: SearchRequest) {
  try {
    const validated = SearchSchema.parse(request);

    const results = globalSearch(validated.query, validated.scope);

    // Limiter les résultats
    const limitedResults = results.slice(0, validated.limit);

    return {
      results: limitedResults,
      total: results.length,
      query: validated.query,
      scope: validated.scope,
    };
  } catch {
    return { results: [], total: 0, query: "", scope: "all" as const };
  }
}

/**
 * Récupère les suggestions de complétion pour une recherche
 */
export async function getCompletionsAction(request: CompletionsRequest) {
  try {
    const validated = CompletionsSchema.parse(request);

    const completions = getCompletions(validated.partial, validated.limit);

    return {
      completions,
      query: validated.partial,
    };
  } catch {
    return { completions: [], query: "" };
  }
}

/**
 * Récupère les statistiques sur les données disponibles
 */
export async function getDataStatsAction() {
  return getDataStats();
}

/**
 * Recherche rapide (pour les suggestions instantanées)
 */
export async function quickSearchAction(query: string) {
  try {
    if (!query || query.length < 2) {
      return { results: [], query };
    }

    const results = globalSearch(query, "all").slice(0, 5);

    return {
      results: results.map(r => ({
        type: r.type,
        title: getTitleFromResult(r),
        slug: getSlugFromResult(r),
      })),
      query,
    };
  } catch {
    return { results: [], query: "" };
  }
}

// ============================================================================
// HELPERS
// ============================================================================

function getTitleFromResult(result: ReturnType<typeof globalSearch>[number]): string {
  switch (result.type) {
    case "heresy":
      return result.data.name;
    case "council":
      return result.data.name;
    case "catechism":
      return result.data.question.french;
    case "bible":
      return result.data.name;
  }
}

function getSlugFromResult(result: ReturnType<typeof globalSearch>[number]): string {
  switch (result.type) {
    case "heresy":
      return result.data.slug;
    case "council":
      return result.data.slug;
    case "catechism":
      return result.data.id;
    case "bible":
      return result.data.id;
  }
}

// ============================================================================
// TYPES EXPORTÉS
// ============================================================================

export type SearchResultItem = {
  type: "heresy" | "council" | "catechism" | "bible";
  title: string;
  slug: string;
};

export type SearchResponse = {
  results: Array<{
    type: "heresy" | "council" | "catechism" | "bible";
    data: unknown;
  }>;
  total: number;
  query: string;
  scope: SearchScope;
};
