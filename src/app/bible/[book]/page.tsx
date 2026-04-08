import Link from "next/link";
import { notFound } from "next/navigation";
import { bibleBooks, getBookById, Testament } from "@/data/bible/index";
import type { Metadata } from "next";

const testamentLabels = {
  [Testament.OLD]: "Ancien Testament",
  [Testament.NEW]: "Nouveau Testament",
};

interface BookPageProps {
  params: Promise<{ book: string }>;
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { book } = await params;
  const bookData = getBookById(book);

  if (!bookData) {
    return {
      title: "Livre non trouvé",
    };
  }

  const title = `${bookData.name} — Bible`;
  const description = `Lire ${bookData.name} (${bookData.nameLatin}) — ${testamentLabels[bookData.testament]}`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export async function generateStaticParams() {
  return bibleBooks.map(book => ({
    book: book.id,
  }));
}

export default async function BookPage({ params }: BookPageProps) {
  const { book } = await params;
  const bookData = getBookById(book);

  if (!bookData) {
    notFound();
  }

  // Livre précédent et suivant
  const bookIndex = bibleBooks.findIndex(b => b.id === book);
  const prevBook = bookIndex > 0 ? bibleBooks[bookIndex - 1] : null;
  const nextBook = bookIndex < bibleBooks.length - 1 ? bibleBooks[bookIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/bible" className="hover:underline">
          Bible
        </Link>
        <span>/</span>
        <span className="text-ink-900 font-medium">{bookData.name}</span>
      </nav>

      {/* En-tête du livre */}
      <header className="mb-8 pb-6 border-b border-gold-400/40">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="font-serif text-4xl font-bold text-ink-900 mb-2">{bookData.name}</h1>
            <p className="text-lg text-ink-600 italic">{bookData.nameLatin}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 text-sm font-medium text-parchment-50 bg-ink-900 rounded-xs">
              {bookData.abbreviation}
            </span>
            <p className="mt-2 text-sm text-ink-600">
              {bookData.chapters} chapitre{bookData.chapters > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-ink-600">{testamentLabels[bookData.testament]}</span>
          <span className="text-ink-400">•</span>
          <span className="text-sm text-parchment-700 font-medium">
            {bookData.genre.replace("_", " ").toLowerCase()}
          </span>
        </div>
      </header>

      {/* Navigation livres précédent/suivant */}
      {(prevBook || nextBook) && (
        <nav className="flex items-center justify-between mb-8 p-4 bg-parchment-50/50 border border-gold-400/40 rounded-xs">
          {prevBook ? (
            <Link
              href={`/bible/${prevBook.id}`}
              className="flex items-center gap-2 text-ink-700 hover:text-ink-900 group"
            >
              <svg
                className="h-5 w-5 text-ink-500 group-hover:text-ink-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                suppressHydrationWarning
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div className="text-left">
                <p className="text-xs text-ink-500">Précédent</p>
                <p className="font-serif font-medium">{prevBook.name}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextBook && (
            <Link
              href={`/bible/${nextBook.id}`}
              className="flex items-center gap-2 text-ink-700 hover:text-ink-900 group"
            >
              <div className="text-right">
                <p className="text-xs text-ink-500">Suivant</p>
                <p className="font-serif font-medium">{nextBook.name}</p>
              </div>
              <svg
                className="h-5 w-5 text-ink-500 group-hover:text-ink-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                suppressHydrationWarning
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </nav>
      )}

      {/* Liste des chapitres */}
      <section>
        <h2 className="text-lg font-semibold text-ink-900 mb-4">Chapitres</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {Array.from({ length: bookData.chapters }, (_, i) => i + 1).map(chapter => (
            <ChapterLink key={chapter} bookId={bookData.id} chapter={chapter} />
          ))}
        </div>
      </section>

      {/* Navigation rapide vers les passages clés */}
      {bookData.chapters > 20 && (
        <section className="mt-12 pt-8 border-t border-gold-400/40">
          <h2 className="text-lg font-semibold text-ink-900 mb-4">Navigation rapide</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/bible/${bookData.id}/1`}
              className="px-4 py-2 text-sm border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 transition-all"
            >
              Début
            </Link>
            <Link
              href={`/bible/${bookData.id}/${Math.floor(bookData.chapters / 2)}`}
              className="px-4 py-2 text-sm border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 transition-all"
            >
              Milieu
            </Link>
            <Link
              href={`/bible/${bookData.id}/${bookData.chapters}`}
              className="px-4 py-2 text-sm border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 transition-all"
            >
              Fin
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

function ChapterLink({ bookId, chapter }: { bookId: string; chapter: number }) {
  return (
    <Link
      href={`/bible/${bookId}/${chapter}`}
      className="flex items-center justify-center px-3 py-3 border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 transition-all font-serif text-ink-900 hover:text-ink-800"
    >
      {chapter}
    </Link>
  );
}
