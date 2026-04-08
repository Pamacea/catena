import Link from "next/link";
import { notFound } from "next/navigation";
import { bibleBooks, getBookById } from "@/data/bible/index";
import type { Metadata } from "next";

interface ChapterPageProps {
  params: Promise<{ book: string; chapter: string }>;
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { book, chapter } = await params;
  const bookData = getBookById(book);

  if (!bookData) {
    return {
      title: "Chapitre non trouvé",
    };
  }

  const title = `${bookData.name} ${chapter} — Bible`;
  const description = `Lire ${bookData.name} chapitre ${chapter}`;

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export async function generateStaticParams() {
  const params: { book: string; chapter: string }[] = [];

  for (const book of bibleBooks) {
    for (let chapter = 1; chapter <= book.chapters; chapter++) {
      params.push({
        book: book.id,
        chapter: chapter.toString(),
      });
    }
  }

  return params;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { book, chapter } = await params;
  const bookData = getBookById(book);
  const chapterNum = parseInt(chapter, 10);

  if (!bookData || chapterNum < 1 || chapterNum > bookData.chapters) {
    notFound();
  }

  const hasPrevChapter = chapterNum > 1;
  const hasNextChapter = chapterNum < bookData.chapters;

  // Livre précédent et suivant
  const bookIndex = bibleBooks.findIndex(b => b.id === book);
  const prevBook = hasPrevChapter ? null : bookIndex > 0 ? bibleBooks[bookIndex - 1] : null;
  const nextBook = hasNextChapter
    ? null
    : bookIndex < bibleBooks.length - 1
      ? bibleBooks[bookIndex + 1]
      : null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/bible" className="hover:underline">
          Bible
        </Link>
        <span>/</span>
        <Link href={`/bible/${book}`} className="hover:underline">
          {bookData.name}
        </Link>
        <span>/</span>
        <span className="text-ink-900 font-medium">Chapitre {chapter}</span>
      </nav>

      {/* En-tête du chapitre */}
      <header className="mb-8 pb-6 border-b border-gold-400/40">
        <h1 className="font-serif text-4xl font-bold text-ink-900 mb-2">{bookData.name}</h1>
        <p className="text-xl text-ink-600">Chapitre {chapter}</p>
      </header>

      {/* Navigation chapitres */}
      <nav className="flex items-center justify-between mb-8 p-4 bg-parchment-50/50 border border-gold-400/40 rounded-xs">
        <div className="flex items-center gap-2">
          {(hasPrevChapter || prevBook) && (
            <Link
              href={
                hasPrevChapter
                  ? `/bible/${book}/${chapterNum - 1}`
                  : `/bible/${prevBook!.id}/${prevBook!.chapters}`
              }
              className="flex items-center gap-2 px-4 py-2 border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 transition-all text-ink-700 hover:text-ink-900"
            >
              <svg
                className="h-5 w-5"
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
              <span>
                {hasPrevChapter
                  ? `Chapitre ${chapterNum - 1}`
                  : `${prevBook!.name} ${prevBook!.chapters}`}
              </span>
            </Link>
          )}
        </div>
        <Link href={`/bible/${book}`} className="text-sm text-ink-600 hover:text-ink-900 underline">
          Voir tous les chapitres
        </Link>
        <div className="flex items-center gap-2">
          {(hasNextChapter || nextBook) && (
            <Link
              href={
                hasNextChapter ? `/bible/${book}/${chapterNum + 1}` : `/bible/${nextBook!.id}/1`
              }
              className="flex items-center gap-2 px-4 py-2 border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 transition-all text-ink-700 hover:text-ink-900"
            >
              <span>{hasNextChapter ? `Chapitre ${chapterNum + 1}` : `${nextBook!.name} 1`}</span>
              <svg
                className="h-5 w-5"
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
        </div>
      </nav>

      {/* Contenu du chapitre */}
      <article className="font-serif text-lg leading-relaxed text-ink-900 mb-12">
        <div className="text-center text-ink-500 italic py-12 border-l-2 border-gold-400/40">
          <p>Le contenu de ce chapitre sera chargé depuis la base de données.</p>
          <p className="mt-2 text-sm">
            {bookData.name} — Chapitre {chapter} ({bookData.chapters} chapitre
            {bookData.chapters > 1 ? "s" : ""} au total)
          </p>
        </div>

        {/* Structure exemple pour les versets (à remplacer avec les vraies données) */}
        <div className="space-y-4">
          {[
            { number: 1, text: "Premier verset du chapitre..." },
            { number: 2, text: "Deuxième verset du chapitre..." },
            { number: 3, text: "Troisième verset du chapitre..." },
          ].map(verse => (
            <div key={verse.number} className="flex gap-4 group">
              <span className="flex-shrink-0 w-8 text-right text-ink-500 font-sans text-base pt-1">
                {verse.number}
              </span>
              <p className="flex-1">{verse.text}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Sélecteur de chapitres */}
      <nav className="pt-8 border-t border-gold-400/40">
        <h3 className="text-sm font-medium text-ink-700 mb-4">
          Autres chapitres de {bookData.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: bookData.chapters }, (_, i) => i + 1).map(ch => (
            <ChapterNumberLink key={ch} bookId={book} chapter={ch} isCurrent={ch === chapterNum} />
          ))}
        </div>
      </nav>
    </div>
  );
}

function ChapterNumberLink({
  bookId,
  chapter,
  isCurrent,
}: {
  bookId: string;
  chapter: number;
  isCurrent: boolean;
}) {
  return (
    <Link
      href={`/bible/${bookId}/${chapter}`}
      className={`px-3 py-2 text-sm border-l-2 transition-all ${
        isCurrent
          ? "border-gold-400/40 bg-ink-900 text-parchment-50"
          : "border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100/50 text-ink-700"
      }`}
    >
      {chapter}
    </Link>
  );
}
