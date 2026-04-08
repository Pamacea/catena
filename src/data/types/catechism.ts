/**
 * Types pour les données de catéchisme
 */

export interface CatechismQuestion {
  id: string;
  question: string;
  reponse: string;
  references?: CatechismReference[];
  category: CatechismCategory;
  part: number;
  article: number;
}

export interface CatechismReference {
  type: "biblique" | "theologique" | "document";
  source: string;
  citation: string;
  url?: string;
}

export interface CatechismArticle {
  id: string;
  part: number;
  article: number;
  title: string;
  titleShort: string;
  content: string;
  questions: CatechismQuestion[];
  references?: CatechismReference[];
}

export interface CatechismPart {
  id: string;
  part: number;
  title: string;
  description: string;
  articles: CatechismArticle[];
}

export type CatechismCategory =
  | "foi"
  | "grace"
  | "peche-originel"
  | "justification"
  | "merites"
  | "perseverance"
  | "sacrements"
  | "priere"
  | "vertus-theologales"
  | "vertus-cardinales"
  | "peches"
  | "dernieres-choses"
  | "eschatologie"
  | "sacrement-bapteme"
  | "sacrement-eucharistie"
  | "sacrement-penitence"
  | "sacrement-extreme-onction"
  | "sacrement-ordre"
  | "sacrement-mariage"
  | "vertus"
  | "peche-mortel"
  | "peche-veniel"
  | "peche-esprit"
  | "mort"
  | "jugement"
  | "enfer"
  | "purgatoire"
  | "ciel";

export interface CatechismAuthor {
  name: string;
  dates: string; // "1656-1734"
  role: string;
}

export interface CatechismMetadata {
  id: string;
  title: string;
  titleShort: string;
  author: CatechismAuthor;
  date: string; // année de publication
  doctrine: string;
  description: string;
  context?: string;
  parts: CatechismPart[];
  glossary?: Record<string, string>;
  references?: CatechismReference[];
}
