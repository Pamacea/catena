/**
 * BibleIndex - Index des livres bibliques
 *
 * Affichage navigable des 73 livres de la Bible (Vulgate),
 * organisés par testament et genre littéraire.
 */

import { bibleBooks, Testament, Genre, type BibleBook } from "@/data/seed";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface BibleIndexProps {
  filter?: "all" | Testament;
  selectedGenre?: Genre | "all";
}

const genreLabels: Record<Genre, string> = {
  [Genre.PENTATEUCH]: "Pentateuque",
  [Genre.HISTORICAL]: "Livres historiques",
  [Genre.WISDOM]: "Livres sapientiels",
  [Genre.PROPHETIC]: "Livres prophétiques",
  [Genre.GOSPEL]: "Évangiles",
  [Genre.ACTS]: "Actes des Apôtres",
  [Genre.EPISTLE]: "Épîtres",
  [Genre.APOCALYPTIC]: "Apocalypse",
};

const testamentColors: Record<Testament, string> = {
  [Testament.OLD]: "bg-liturgical-purple/10 border-liturgical-purple",
  [Testament.NEW]: "bg-liturgical-red/10 border-liturgical-red",
};

export function BibleIndex({ filter = "all", selectedGenre = "all" }: BibleIndexProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrage des livres
  const filteredBooks = bibleBooks.filter(book => {
    // Filtre par testament
    if (filter !== "all" && book.testament !== filter) return false;

    // Filtre par genre
    if (selectedGenre !== "all" && book.genre !== selectedGenre) return false;

    // Recherche textuelle
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        book.name.toLowerCase().includes(query) ||
        book.nameLatin.toLowerCase().includes(query) ||
        book.abbreviation.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Regroupement par testament et genre
  const groupedBooks: Record<Testament, Partial<Record<Genre, BibleBook[]>>> = {
    [Testament.OLD]: {},
    [Testament.NEW]: {},
  };

  filteredBooks.forEach(book => {
    if (!groupedBooks[book.testament][book.genre]) {
      groupedBooks[book.testament][book.genre] = [];
    }
    groupedBooks[book.testament][book.genre]!.push(book);
  });

  const testamentNames: Record<Testament, string> = {
    [Testament.OLD]: "Ancien Testament",
    [Testament.NEW]: "Nouveau Testament",
  };

  return (
    <div className="space-y-8">
      {/* En-tête avec recherche */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">Index Biblique</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Recherche */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher un livre..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-parchment-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none transition-colors"
            />
          </div>

          {/* Filtres */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => (window.location.href = "/bible")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                filter === "all"
                  ? "bg-gold-500 text-white"
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              )}
            >
              Tous
            </button>
            <button
              onClick={() => (window.location.href = "/bible?testament=OLD")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                filter === Testament.OLD
                  ? "bg-liturgical-purple text-white"
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              )}
            >
              A.T.
            </button>
            <button
              onClick={() => (window.location.href = "/bible?testament=NEW")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                filter === Testament.NEW
                  ? "bg-liturgical-red text-white"
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              )}
            >
              N.T.
            </button>
          </div>
        </div>

        {/* Légende des genres */}
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="text-ink-500">Genres :</span>
          {Object.entries(genreLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => (window.location.href = `/bible?genre=${key}`)}
              className={cn(
                "px-2 py-1 rounded transition-colors",
                selectedGenre === key
                  ? "bg-gold-500 text-white"
                  : "bg-parchment-100 text-ink-600 hover:bg-parchment-200"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Compteur */}
      <p className="text-ink-600">
        {filteredBooks.length} / {bibleBooks.length} livres
      </p>

      {/* Liste des livres par testament */}
      <div className="space-y-8">
        {Object.entries(groupedBooks).map(
          ([testament, genres]) =>
            Object.keys(genres).length > 0 && (
              <section key={testament} className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-ink-800 border-b-2 border-parchment-300 pb-2">
                  {testamentNames[testament as Testament]}
                </h2>

                <div className="grid gap-6">
                  {Object.entries(genres).map(([genre, books]) => (
                    <div key={genre} className="space-y-2">
                      <h3 className="text-sm font-semibold text-ink-500 uppercase tracking-wider">
                        {genreLabels[genre as Genre]}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {books.map(book => (
                          <BookLink key={book.id} book={book} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
        )}
      </div>

      {/* Message si aucun résultat */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-ink-600 font-serif text-lg">
            Aucun livre ne correspond à votre recherche.
          </p>
        </div>
      )}
    </div>
  );
}

interface BookLinkProps {
  book: BibleBook;
}

function BookLink({ book }: BookLinkProps) {
  return (
    <Link
      href={`/bible/${book.id}/1`}
      className={cn(
        "flex items-center justify-between p-3 rounded-lg border transition-all",
        "hover:shadow-md hover:-translate-y-0.5",
        testamentColors[book.testament]
      )}
    >
      <div>
        <p className="font-medium text-ink-900">{book.name}</p>
        <p className="text-sm text-ink-600 italic">{book.nameLatin}</p>
      </div>
      <div className="text-right text-sm text-ink-500">
        <p>{book.chapters} ch.</p>
        <p className="text-xs">{book.abbreviation}</p>
      </div>
    </Link>
  );
}

/**
 * CompactBookList - Version compacte pour les sidebars
 */
interface CompactBookListProps {
  testament?: Testament;
  limit?: number;
}

export function CompactBookList({ testament, limit }: CompactBookListProps) {
  const books = testament ? bibleBooks.filter(b => b.testament === testament) : bibleBooks;

  const displayedBooks = limit ? books.slice(0, limit) : books;

  return (
    <ul className="space-y-1">
      {displayedBooks.map(book => (
        <li key={book.id}>
          <Link
            href={`/bible/${book.id}/1`}
            className="flex items-center justify-between px-3 py-2 rounded hover:bg-parchment-100 transition-colors text-sm"
          >
            <span className="text-ink-700">{book.name}</span>
            <span className="text-ink-400 text-xs">{book.abbreviation}</span>
          </Link>
        </li>
      ))}
      {limit && limit < books.length && (
        <li>
          <Link
            href="/bible"
            className="block px-3 py-2 text-center text-gold-600 hover:text-gold-700 text-sm font-medium"
          >
            Voir tous les livres →
          </Link>
        </li>
      )}
    </ul>
  );
}
