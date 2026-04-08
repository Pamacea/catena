/**
 * Types pour les données enrichies de la Bible
 * Notes de lecture, résumés, versets, dictionnaire théologique
 */

/** ===== TYPES DE BASE ===== */

export type Testament = 'OLD' | 'NEW'
export type Genre =
  | 'PENTATEUCH'
  | 'HISTORICAL'
  | 'WISDOM'
  | 'PROPHETIC'
  | 'GOSPEL'
  | 'ACTS'
  | 'EPISTLE'
  | 'APOCALYPTIC'

export type Section =
  | '01-Pentateuque'
  | '02-Livres-Historiques'
  | '03-Poetiques-Sapientiaux'
  | '04-Grands-Prophetes'
  | '05-Petits-Prophetes'
  | '06-Evangiles'
  | '07-Actes'
  | '08-Epitres-Pauliniennes'
  | '09-Epitres-Catholiques'
  | '10-Apocalypse'

/** ===== NOTES DE LECTURE ===== */

export interface BibleQuote {
  reference: string
  text: string
  note?: string
}

export interface ConceptNote {
  title: string
  description: string
  verses?: string[]
  theology?: string
}

export interface BookSection {
  title: string
  content: string
  quotes?: BibleQuote[]
  concepts?: ConceptNote[]
}

export interface BookReadingNotes {
  bookId?: string
  bookName?: string
  section?: Section
  number?: number // Position dans la Bible (1-73)
  chapters?: number
  summary?: string
  keyThemes?: string[]
  introduction?: string
  sections?: BookSection[]
  createdAt?: string
  updatedAt?: string
}

/** ===== RÉSUMÉS DE LIVRES ===== */

export interface AuthorshipDetail {
  author: string
  period?: string
  context?: string
}

export interface OverviewDetail {
  summary: string
  keyThemes?: string[]
}

export interface BookSummary {
  id?: string
  title?: string
  titleLatin?: string
  category?: string
  bookId?: string
  bookName?: string
  testament?: Testament
  genre?: Genre
  section?: Section
  overview?: string | OverviewDetail
  authorship?: string | AuthorshipDetail
  date?: string
  keyThemes?: string[]
  keyFigures?: string[]
  keyPassages?: string[]
  outline?: ChapterOutline[]
  theologicalSignificance?: string
  christologicalTypes?: string[] | {title: string; types: string[]} // Figures du Christ dans l'AT
  historicalContext?: {
    setting?: string
    culturalBackground?: string
    archaeologicalNotes?: string
  }
}

export type ChapterOutline = {
  chapter: number
  title: string
  summary?: string
  keyEvents?: string[]
  keyVerses?: string[]
  verses?: (string | {verse: string; text?: string})[] // Permet les structures personnalisées
} | string // Permet aussi les chaînes simples

export interface KeyPassage {
  reference?: string
  citation?: string
  citation2?: string
  commentary?: string
  [key: string]: string | number | boolean | undefined // Permet les champs additionnels
}

/** ===== VERSETS ===== */

export type VerseTheme =
  | 'salutation'
  | 'amour-de-dieu'
  | 'peche-et-chute'
  | 'grace-et-salut'
  | 'foi-et-justification'
  | 'nouvelle-naissance'
  | 'parole-de-dieu'
  | 'saint-esprit'
  | 'priere'
  | 'reconciliation'
  | 'force-et-courage'
  | 'adoration'
  | 'evangelisation'
  | 'saintete'
  | 'service-et-humilite'
  | 'responsabilites-chretiennes'
  | 'mariage-et-famille'
  | 'argent-et-possessions'
  | 'confiance-en-dieu'
  | 'esperance'
  | 'jugement'
  | 'preuve-de-la-foi'
  | 'epreuves'
  | 'paix-et-repos'
  | 'sagesse'
  | 'colere-de-dieu'
  | 'protection'
  | 'sacrifice-de-christ'
  | 'renouvellement'
  | 'lumiere'
  | 'prophetie-messianique'
  | 'vie-eternelle'
  | 'trinite'
  | 'conseils-pratiques'
  | 'victoire'

export type VerseImportance = 'essential' | 'important' | 'notable'

export interface EssentialVerse {
  id: string
  reference: string // Format: "Jean 3:16"
  bookId: string
  chapter: number
  verse: number | string // Peut être "8-9" pour une plage
  text: string
  theme: VerseTheme
  themeLabel: string
  importance: VerseImportance
  theologicalContext?: string
  crossReferences?: string[]
  tags: string[]
}

export interface VerseCollection {
  id: string
  name: string
  description: string
  verses: EssentialVerse[]
  theme?: VerseTheme
}

/** ===== DICTIONNAIRE THÉOLOGIQUE ===== */

export interface DictionaryEntry {
  id: string
  term: string
  originalLanguage?: {
    hebrew?: string
    greek?: string
    aramaic?: string
    transliteration?: string
  }
  definition: string
  theologicalMeaning?: string
  biblicalReferences: string[]
  seeAlso?: string[]
  category: 'concept' | 'person' | 'place' | 'event' | 'practice' | 'title'
  relatedTerms?: string[]
}

export interface TheologicalConcept extends DictionaryEntry {
  oldTestament?: string
  newTestament?: string
  catholicTeaching?: string
  dogmas?: string[]
}

export interface GreekTerm extends DictionaryEntry {
  greek: string
  transliteration: string
  definition: string
  ntUsage: string
  theologicalSignificance: string
}

export interface HebrewTerm extends DictionaryEntry {
  hebrew: string
  transliteration: string
  definition: string
  otUsage: string
  theologicalSignificance: string
}

/** ===== RESSOURCES APOLOGÉTIQUES ===== */

export interface Heresy {
  id: string
  name: string
  origin: string
  keyTeachings: string[]
  refutations: string[]
  biblicalAnswers: { reference: string; argument: string }[]
  councilCondemnation?: string
}

export interface ApologeticResponse {
  id: string
  objection: string
  category: string
  response: string
  biblicalEvidence: string[]
  patristicEvidence?: string[]
  theologicalReasoning?: string
}

/** ===== THÈMES TRANSVERSAUX ===== */

export interface BiblicalTheme {
  id: string
  name: string
  description: string
  oldTestamentReferences: string[]
  newTestamentReferences: string[]
  development: string
  theologicalSignificance: string
  subThemes?: string[]
}

/** ===== MÉTADONNÉES ===== */

export interface DataMetadata {
  version: string
  lastUpdated: string
  source: string
  totalBooks: number
  totalVerses: number
  totalDictionaryEntries: number
}

/** ===== RECHERCHE ===== */

export interface SearchFilters {
  testament?: Testament
  genre?: Genre
  section?: Section
  theme?: VerseTheme
  importance?: VerseImportance
  bookId?: string
  tags?: string[]
}

export interface SearchResult {
  type: 'verse' | 'book' | 'concept' | 'theme'
  id: string
  title: string
  excerpt: string
  relevance: number
  url: string
}

/** ===== EXPORTS ===== */

export type {
  BookReadingNotes,
  BookSummary,
  ChapterOutline,
  KeyPassage,
  EssentialVerse,
  VerseCollection,
  DictionaryEntry,
  TheologicalConcept,
  GreekTerm,
  HebrewTerm,
  Heresy,
  ApologeticResponse,
  BiblicalTheme,
  DataMetadata,
  SearchFilters,
  SearchResult,
}
