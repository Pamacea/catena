/**
 * Types pour les leçons de catéchisme
 */

export interface CatechismLesson {
  id: string;
  lessonNumber: number;
  title: string;
  titleShort?: string;
  part: number;
  article: number;
  category: LessonCategory;
  content: string;
  question: string;
  answer: string;
  references: LessonReference[];
  keyPoints?: string[];
}

export type LessonCategory =
  | "foi"
  | "grace"
  | "peche-originel"
  | "justification"
  | "perseverance"
  | "sacrements"
  | "priere"
  | "vertus-theologales"
  | "vertus-cardinales"
  | "dons-saint-esprit"
  | "peches"
  | "mort"
  | "jugement"
  | "enfer"
  | "purgatoire"
  | "ciel";

export interface LessonReference {
  type: "biblique" | "theologique" | "document";
  source: string;
  citation: string;
  url?: string;
}

export interface CatechismLecons {
  catechismId: string;
  title: string;
  author: string;
  description: string;
  lessons: CatechismLesson[];
  parts: {
    id: string;
    title: string;
    articles: number;
  }[];
}
