/**
 * VerseDisplay - Affichage d'un verset avec références
 *
 * Composant pour afficher un verset isolé avec ses références
 * et éventuellement des notes ou commentaires.
 *
 * @example
 * ```tsx
 * <VerseDisplay
 *   reference={{ bookId: "john", bookName: "Jean", chapter: 3, verse: 16 }}
 *   text="Car Dieu a tant aimé le monde..."
 *   latin="Tam enim dilexit Deus mundum..."
 *   highlightWords=["amour", "aimé"]}
 * />
 * ```
 */

import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Référence biblique complète.
 */
interface VerseRef {
  /** Identifiant du livre (ex: "john") */
  bookId: string;
  /** Nom du livre en français (ex: "Jean") */
  bookName: string;
  /** Numéro de chapitre */
  chapter: number;
  /** Numéro du verset */
  verse: number;
}

/**
 * Props pour le composant VerseDisplay.
 */
interface VerseDisplayProps {
  /** Référence biblique du verset */
  reference: VerseRef;
  /** Texte du verset en français */
  text: string;
  /** Texte en latin (Vulgate) */
  latin?: string;
  /** Versets précédents pour le contexte */
  contextBefore?: string[];
  /** Versets suivants pour le contexte */
  contextAfter?: string[];
  /** Notes explicatives sur le verset */
  notes?: string[];
  /** Mots-clés à surligner dans le texte */
  highlightWords?: string[];
}

export function VerseDisplay({
  reference,
  text,
  latin,
  contextBefore = [],
  contextAfter = [],
  notes = [],
  highlightWords = [],
}: VerseDisplayProps) {
  // Fonction pour mettre en évidence les mots-clés
  const highlightText = (content: string) => {
    if (highlightWords.length === 0) return content;

    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
    const parts = content.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-gold-200 text-ink-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <figure className="space-y-4">
      {/* Référence du verset */}
      <figcaption className="flex items-center gap-2 text-ink-600">
        <Link
          href={`/bible/${reference.bookId}/${reference.chapter}`}
          className="hover:text-gold-600 transition-colors"
        >
          {reference.bookName} {reference.chapter}:{reference.verse}
        </Link>
      </figcaption>

      {/* Verset principal */}
      <blockquote className="relative">
        <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gold-400 rounded-full" />

        <div className="pl-6 space-y-3">
          {latin && (
            <p className="text-ink-500 italic font-serif text-base leading-relaxed">
              {highlightText(latin)}
            </p>
          )}
          <p className="text-ink-900 font-serif text-lg leading-relaxed">{highlightText(text)}</p>
        </div>
      </blockquote>

      {/* Contexte avant */}
      {contextBefore.length > 0 && (
        <div className="pl-6 border-l-2 border-parchment-200">
          <p className="text-xs text-ink-400 uppercase tracking-wider mb-2">Contexte précédent</p>
          <div className="space-y-1">
            {contextBefore.map((line, i) => (
              <p key={i} className="text-ink-600 font-serif text-sm">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Contexte après */}
      {contextAfter.length > 0 && (
        <div className="pl-6 border-l-2 border-parchment-200">
          <p className="text-xs text-ink-400 uppercase tracking-wider mb-2">Contexte suivant</p>
          <div className="space-y-1">
            {contextAfter.map((line, i) => (
              <p key={i} className="text-ink-600 font-serif text-sm">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      {notes.length > 0 && (
        <div className="bg-parchment-50 rounded-lg p-4 border border-parchment-200">
          <h4 className="text-xs font-semibold text-ink-500 uppercase tracking-wider mb-2">
            Notes
          </h4>
          <ul className="space-y-2">
            {notes.map((note, i) => (
              <li key={i} className="text-ink-700 text-sm flex gap-2">
                <span className="text-gold-600 font-semibold">{i + 1}.</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </figure>
  );
}

/**
 * CompactVerse - Version compacte pour les listes et citations
 */
interface CompactVerseProps {
  reference: {
    bookName: string;
    chapter: number;
    verse: number;
  };
  text: string;
  latin?: string;
}

export function CompactVerse({ reference, text, latin }: CompactVerseProps) {
  return (
    <div className="flex gap-3 p-3 rounded-lg bg-parchment-50 border border-parchment-200">
      <span className="flex-shrink-0 text-ink-500 text-sm font-medium">
        {reference.bookName} {reference.chapter}:{reference.verse}
      </span>
      <p className="text-ink-700 font-serif text-sm leading-relaxed">{text}</p>
    </div>
  );
}

/**
 * VerseCard - Carte pour afficher une sélection de versets
 */
interface VerseCardProps {
  reference: {
    bookId: string;
    bookName: string;
    chapter: number;
    verse?: number;
  };
  text: string;
  latin?: string;
  theme?: "verse" | "psalm" | "proverb" | "gospel";
}

export function VerseCard({ reference, text, latin, theme = "verse" }: VerseCardProps) {
  const themeStyles = {
    verse: "border-l-gold-400",
    psalm: "border-l-liturgical-purple",
    proverb: "border-l-liturgical-green",
    gospel: "border-l-liturgical-red",
  };

  const verseText = reference.verse
    ? `${reference.chapter}:${reference.verse}`
    : `${reference.chapter}`;

  return (
    <Link
      href={`/bible/${reference.bookId}/${reference.chapter}${reference.verse ? `#v${reference.verse}` : ""}`}
      className={cn(
        "block p-6 rounded-lg border border-parchment-200 bg-white",
        "hover:shadow-lg transition-shadow",
        "border-l-4",
        themeStyles[theme]
      )}
    >
      <p className="text-xs text-ink-400 uppercase tracking-wider mb-2">
        {reference.bookName} {verseText}
      </p>
      {latin && <p className="text-ink-500 italic font-serif text-sm mb-2">{latin}</p>}
      <p className="text-ink-800 font-serif leading-relaxed">{text}</p>
    </Link>
  );
}
