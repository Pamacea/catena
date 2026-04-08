/**
 * BibleChapter - Affichage d'un chapitre biblique avec versets
 *
 * Composant Server Component pour afficher un chapitre complet
 * avec navigation vers les chapitres précédents/suivants.
 *
 * @example
 * ```tsx
 * <BibleChapter
 *   bookId="genesis"
 *   chapter={1}
 *   verses={[
 *     { number: 1, text: "Au commencement...", latin: "In principio..." }
 *   ]}
 * />
 * ```
 */

import { bibleBooks, type BibleBook } from "@/data/seed";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Props pour le composant BibleChapter.
 */
interface BibleChapterProps {
  /** Identifiant du livre biblique (ex: "genesis", "matthew") */
  bookId: string;
  /** Numéro du chapitre */
  chapter: number;
  /** Tableau des versets avec texte en français et optionnellement en latin */
  verses?: Array<{
    /** Numéro du verset */
    number: number;
    /** Texte en français */
    text: string;
    /** Texte en latin (Vulgate) - optionnel */
    latin?: string;
  }>;
}

/**
 * Props pour le composant Verse interne.
 * @internal
 */
interface VerseProps {
  /** Numéro du verset */
  number: number;
  /** Texte en français */
  text: string;
  /** Texte en latin */
  latin?: string;
  /** Si true, surligne le verset en jaune pâle */
  highlight?: boolean;
}

/**
 * Composant interne pour afficher un verset individuel.
 * @internal
 */
function Verse({ number, text, latin, highlight = false }: VerseProps) {
  return (
    <div
      id={`v${number}`}
      className={cn(
        "group flex gap-3 py-3 border-b border-parchment-200 last:border-0",
        "hover:bg-parchment-50 transition-colors",
        highlight && "bg-gold-50/50"
      )}
    >
      {/* Numéro de verset */}
      <span
        className={cn(
          "flex-shrink-0 w-8 h-8 flex items-center justify-center",
          "text-sm font-semibold rounded-full",
          "bg-parchment-200 text-ink-700",
          "group-hover:bg-gold-500 group-hover:text-white",
          "transition-colors"
        )}
      >
        {number}
      </span>

      {/* Contenu du verset */}
      <div className="flex-1 space-y-1">
        {latin && <p className="text-ink-600 italic font-serif text-sm leading-relaxed">{latin}</p>}
        <p className="text-ink-900 font-serif leading-relaxed">{text}</p>
      </div>

      {/* Lien d'ancrage */}
      <a
        href={`#v${number}`}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Ancre verset ${number}`}
      >
        <svg className="w-4 h-4 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </a>
    </div>
  );
}

export function BibleChapter({ bookId, chapter, verses = [] }: BibleChapterProps) {
  const book = bibleBooks.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-600 font-serif">Livre non trouvé</p>
      </div>
    );
  }

  const hasPrev = chapter > 1;
  const hasNext = chapter < book.chapters;

  return (
    <article className="space-y-8">
      {/* En-tête du chapitre */}
      <header className="space-y-4 border-b-2 border-parchment-300 pb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-ink-500 uppercase tracking-wider">
            {book.testament === "OLD" ? "Ancien Testament" : "Nouveau Testament"}
          </span>
          <span className="text-sm text-ink-500">{book.abbreviation}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">{book.name}</h1>

        <p className="text-lg text-ink-600 font-serif italic">{book.nameLatin}</p>

        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-parchment-200 text-ink-700 rounded-full text-sm font-medium">
            Chapitre {chapter}
          </span>
          <span className="text-ink-500 text-sm">
            {verses.length > 0 ? `${verses.length} versets` : `${book.chapters} chapitres`}
          </span>
        </div>
      </header>

      {/* Navigation chapitres */}
      <nav className="flex items-center justify-between" aria-label="Navigation des chapitres">
        {hasPrev ? (
          <Link
            href={`/bible/${bookId}/${chapter - 1}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-parchment-100 hover:bg-parchment-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Chapitre {chapter - 1}</span>
          </Link>
        ) : (
          <div />
        )}

        <span className="text-ink-500 font-serif">
          {chapter} / {book.chapters}
        </span>

        {hasNext ? (
          <Link
            href={`/bible/${bookId}/${chapter + 1}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-parchment-100 hover:bg-parchment-200 transition-colors"
          >
            <span className="font-medium">Chapitre {chapter + 1}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </nav>

      {/* Versets */}
      {verses.length > 0 ? (
        <div className="bg-white rounded-lg border border-parchment-200 overflow-hidden">
          {verses.map(verse => (
            <Verse key={verse.number} {...verse} />
          ))}
        </div>
      ) : (
        <div className="bg-parchment-50 rounded-lg border-2 border-dashed border-parchment-300 p-12 text-center">
          <p className="text-ink-600 font-serif text-lg">
            Le texte de ce chapitre sera ajouté prochainement.
          </p>
          <p className="text-ink-500 mt-2">
            Chapitre {chapter} de {book.nameLatin}
          </p>
        </div>
      )}
    </article>
  );
}
