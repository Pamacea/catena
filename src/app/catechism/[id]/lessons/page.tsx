import Link from "next/link";
import { getCatechismWithLessonsById, getCatechismIds } from "@/data/catechism";
import { CatechismLessons } from "@/components/bible/catechism/CatechismLessons";
import { notFound } from "next/navigation";

// Mapping inverse pour les liens de retour
const REVERSE_ID_MAPPING: Record<string, string> = {
  "laguerie-institut-bon-pasteur": "laguerie-ibp",
  "laguerie-perseverance-grace": "tridentine",
  "pius-x": "pius-x",
  "cure-d-ars": "cure-d-ars",
};

interface CatechismLessonsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return getCatechismIds().map(id => ({ id }));
}

export async function generateMetadata({ params }: CatechismLessonsPageProps) {
  const { id } = await params;
  const catechism = getCatechismWithLessonsById(id);

  if (!catechism) {
    return {
      title: "Catéchisme non trouvé",
    };
  }

  const title = `Leçons - ${catechism.title}`;

  return {
    title,
    description: catechism.description,
    openGraph: { title, description: catechism.description, type: "article" },
  };
}

export default async function CatechismLessonsPage({ params }: CatechismLessonsPageProps) {
  const { id } = await params;
  const catechism = getCatechismWithLessonsById(id);

  if (!catechism) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/catechism" className="hover:underline">
          Catéchismes
        </Link>
        <span>/</span>
        <Link href={`/catechism/${id}`} className="hover:underline">
          {catechism.titleShort}
        </Link>
        <span>/</span>
        <span className="text-ink-900">Leçons</span>
      </nav>

      {/* Header du catéchisme */}
      <header className="mb-10 pb-6 border-b border-gold-400/40">
        <div className="flex items-center gap-3 text-sm text-gold-700 mb-3">
          <span className="font-semibold">CATÉCHISME</span>
          <span>•</span>
          <span>{catechism.date}</span>
          <span>•</span>
          <span>{catechism.author.dates}</span>
        </div>
        <h1 className="font-serif text-4xl font-bold text-ink-900 mb-3">{catechism.title}</h1>
        <p className="text-ink-700 mb-2">
          par <span className="font-semibold">{catechism.author.name}</span>
        </p>
        <p className="text-ink-600 italic">{catechism.author.role}</p>
      </header>

      {/* Composant des leçons */}
      <CatechismLessons catechism={catechism} />

      {/* Description doctrinale */}
      {catechism.context && (
        <section className="mt-12 p-6 bg-parchment-100 rounded-xs border border-gold-400/40">
          <h3 className="font-serif text-xl font-semibold text-ink-900 mb-3">
            Contexte historique et doctrinal
          </h3>
          <p className="text-ink-700 whitespace-pre-line">{catechism.context}</p>
        </section>
      )}

      {/* Glossaire */}
      {catechism.glossary && Object.keys(catechism.glossary).length > 0 && (
        <section className="mt-12">
          <h3 className="font-serif text-xl font-semibold text-ink-900 mb-4">Glossaire</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(catechism.glossary).map(([term, definition]) => (
              <div key={term} className="p-4 bg-parchment-50 rounded-xs border border-gold-400/20">
                <dt className="font-semibold text-ink-900">{term}</dt>
                <dd className="text-sm text-ink-600 mt-1">{definition}</dd>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <footer className="mt-16 pt-8 border-t border-gold-400/40 flex items-center justify-between">
        <Link
          href="/catechism"
          className="inline-flex items-center gap-2 text-ink-600 hover:underline"
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
          Retour aux catéchismes
        </Link>
        <Link
          href={`/catechism/${REVERSE_ID_MAPPING[id] || id}`}
          className="inline-flex items-center gap-2 text-ink-600 hover:underline"
        >
          Questions
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            suppressHydrationWarning
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </footer>
    </div>
  );
}
