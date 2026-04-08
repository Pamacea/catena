/**
 * Index des données de catéchisme
 * Système unifié utilisant CatechismMetadata
 */

import type { CatechismMetadata, CatechismArticle } from "../types/catechism";
import { laguerieCatechism } from "./laguerie";
import { laguerieIBPCatechism } from "./laguerie-ibp";
import { piusXCatechism } from "./pius-x";
import { cureDArsCatechism } from "./cure-d-ars";

/** Export des catéchismes individuels
 *
export { laguerieCatechism } from './laguerie'
export { laguerieIBPCatechism } from './laguerie-ibp'

/**
 * Collection des catéchismes avec leçons complètes
 */
export const catechismsWithLessons: CatechismMetadata[] = [
  laguerieCatechism,
  laguerieIBPCatechism,
  piusXCatechism,
  cureDArsCatechism,
];

/**
 * Récupérer un catéchisme par ID
 */
export const getCatechismWithLessonsById = (id: string): CatechismMetadata | undefined => {
  return catechismsWithLessons.find(c => c.id === id);
};

/**
 * Génère les params statiques pour les pages de leçons
 */
export const getCatechismIds = (): string[] => {
  return catechismsWithLessons.map(c => c.id);
};

/**
 * Récupérer toutes les parties d'un catéchisme
 */
export const getCatechismParts = (catechismId: string) => {
  const catechism = getCatechismWithLessonsById(catechismId);
  return catechism?.parts || [];
};

/**
 * Récupérer un article par son ID
 */
export const getArticleById = (articleId: string) => {
  for (const catechism of catechismsWithLessons) {
    for (const part of catechism.parts) {
      const article = part.articles.find(a => a.id === articleId);
      if (article) return { article, part, catechism };
    }
  }
  return null;
};

/**
 * Rechercher dans les leçons
 */
export const searchLessons = (query: string) => {
  const q = query.toLowerCase();
  const results: {
    catechism: CatechismMetadata;
    part: number;
    article: CatechismArticle;
    matchType: "title" | "content" | "question";
  }[] = [];

  for (const catechism of catechismsWithLessons) {
    for (const part of catechism.parts) {
      for (const article of part.articles) {
        if (article.title.toLowerCase().includes(q)) {
          results.push({ catechism, part: part.part, article, matchType: "title" });
        }
        if (article.content?.toLowerCase().includes(q)) {
          results.push({ catechism, part: part.part, article, matchType: "content" });
        }
        for (const question of article.questions || []) {
          if (
            question.question.toLowerCase().includes(q) ||
            question.reponse.toLowerCase().includes(q)
          ) {
            results.push({ catechism, part: part.part, article, matchType: "question" });
            break;
          }
        }
      }
    }
  }

  return results;
};
