import Link from "next/link";
import { bibleBooks, Testament, Genre } from "@/data/bible/index";
import { SearchBar } from "@/components/ui/SearchBar";

// Groupement des livres par testament et genre
const testamentLabels = {
  [Testament.OLD]: "Ancien Testament",
  [Testament.NEW]: "Nouveau Testament",
};

const genreLabels = {
  [Genre.PENTATEUCH]: "Pentateuque",
  [Genre.HISTORICAL]: "Livres historiques",
  [Genre.WISDOM]: "Livres sapientiaux",
  [Genre.PROPHETIC]: "Livres prophétiques",
  [Genre.GOSPEL]: "Évangiles",
  [Genre.ACTS]: "Actes des Apôtres",
  [Genre.EPISTLE]: "Épîtres",
  [Genre.APOCALYPTIC]: "Apocalypse",
};

// Ordre des genres pour l'affichage
const genreOrder: Genre[] = [
  Genre.PENTATEUCH,
  Genre.HISTORICAL,
  Genre.WISDOM,
  Genre.PROPHETIC,
  Genre.GOSPEL,
  Genre.ACTS,
  Genre.EPISTLE,
  Genre.APOCALYPTIC,
];

function groupBooksByGenre(books: typeof bibleBooks) {
  const grouped = new Map<Genre, typeof bibleBooks>();

  for (const genre of genreOrder) {
    grouped.set(
      genre,
      books.filter(book => book.genre === genre)
    );
  }

  return grouped;
}

export default function BiblePage() {
  const oldTestamentBooks = bibleBooks.filter(book => book.testament === Testament.OLD);
  const newTestamentBooks = bibleBooks.filter(book => book.testament === Testament.NEW);

  const oldTestamentGroups = groupBooksByGenre(oldTestamentBooks);
  const newTestamentGroups = groupBooksByGenre(newTestamentBooks);

  return (
    <div className="space-y-12">
      {/* Recherche */}
      <section className="mb-10">
        <div className="mx-auto">
          <SearchBar
            placeholder="Rechercher un passage, un livre..."
            variant="parchment"
            icon="book"
          />
        </div>
      </section>

      {/* Ancien Testament */}
      <section>
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-6 pb-2 border-b-2 border-gold-400/50">
          {testamentLabels[Testament.OLD]}
        </h2>

        <div className="space-y-8">
          {Array.from(oldTestamentGroups.entries())
            .filter(([_, books]) => books.length > 0)
            .map(([genre, books]) => (
              <div key={genre}>
                <h3 className="text-sm font-medium text-ink-600 uppercase tracking-wide mb-3">
                  {genreLabels[genre]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  {books.map(book => (
                    <BookLink key={book.id} book={book} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Nouveau Testament */}
      <section>
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-6 pb-2 border-b-2 border-gold-400/50">
          {testamentLabels[Testament.NEW]}
        </h2>

        <div className="space-y-8">
          {Array.from(newTestamentGroups.entries())
            .filter(([_, books]) => books.length > 0)
            .map(([genre, books]) => (
              <div key={genre}>
                <h3 className="text-sm font-medium text-ink-600 uppercase tracking-wide mb-3">
                  {genreLabels[genre]}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  {books.map(book => (
                    <BookLink key={book.id} book={book} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Featured passages */}
      <section className="pt-8 border-t border-gold-400/30">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-6">Passages populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeaturedPassageLink
            book="jean"
            chapter={3}
            title="Jean 3"
            excerpt="« Car Dieu a tant aimé le monde... »"
          />
          <FeaturedPassageLink
            book="psalms"
            chapter={23}
            title="Psaumes 23"
            excerpt="« L'Éternel est mon berger... »"
          />
          <FeaturedPassageLink
            book="romains"
            chapter={8}
            title="Romains 8"
            excerpt="« Plus rien ne peut nous séparer... »"
          />
          <FeaturedPassageLink
            book="genesis"
            chapter={1}
            title="Genèse 1"
            excerpt="« Au commencement, Dieu créa... »"
          />
        </div>
      </section>
    </div>
  );
}

function BookLink({ book }: { book: (typeof bibleBooks)[number] }) {
  return (
    <Link
      href={`/bible/${book.id}`}
      className="group flex items-center gap-3 px-4 py-3 border-l-2 border-gold-300 hover:border-gold-600 hover:bg-stone-50 transition-all"
    >
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium text-stone-50 bg-gold-600 group-hover:bg-gold-700 transition-colors">
        {book.abbreviation}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-serif text-ink-900 group-hover:text-gold-700 truncate">{book.name}</p>
        <p className="text-xs text-ink-600">
          {book.chapters} chapitre{book.chapters > 1 ? "s" : ""}
        </p>
      </div>
    </Link>
  );
}

function FeaturedPassageLink({
  book,
  chapter,
  title,
  excerpt,
}: {
  book: string;
  chapter: number;
  title: string;
  excerpt: string;
}) {
  return (
    <Link
      href={`/bible/${book}/${chapter}`}
      className="group block p-6 border-l-2 border-gold-300 hover:border-gold-600 hover:bg-stone-50/50 transition-all"
    >
      <p className="font-serif text-lg text-ink-900 group-hover:text-gold-700 mb-2">{title}</p>
      <p className="text-sm text-ink-600 italic">{excerpt}</p>
    </Link>
  );
}
