import Link from "next/link";
import { getCatechismById, catechisms } from "@/data/catechisms";
import { getCatechismWithLessonsById } from "@/data/catechism";
import { notFound } from "next/navigation";

// Mapping entre les IDs des deux systèmes
const ID_MAPPING: Record<string, string> = {
  "laguerie-ibp": "laguerie-institut-bon-pasteur",
  tridentine: "laguerie-perseverance-grace",
  "pius-x": "pius-x",
  "cure-d-ars": "cure-d-ars",
};

interface CatechismPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: CatechismPageProps) {
  const { id } = await params;
  const catechism = getCatechismById(id);

  if (!catechism) {
    return {
      title: "Catéchisme non trouvé",
    };
  }

  return {
    title: catechism.name,
    description: catechism.description,
    openGraph: { title: catechism.name, description: catechism.description, type: "article" },
  };
}

export async function generateStaticParams() {
  return catechisms.map(catechism => ({
    id: catechism.id,
  }));
}

export default async function CatechismQuestionsPage({ params }: CatechismPageProps) {
  const { id } = await params;
  const catechism = getCatechismById(id);
  // Mapping ID pour trouver les leçons correspondantes
  const lessonsId = ID_MAPPING[id] || id;
  const catechismWithLessons = getCatechismWithLessonsById(lessonsId);

  if (!catechism) {
  mx-auto}

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/catechism" className="hover:underline">
          Catéchismes
        </Link>
        <span>/</span>
        <span className="text-ink-900">{catechism.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-gold-400/40">
        <h1 className="font-serif text-4xl font-bold text-ink-900 mb-3">
          {catechism.name}
        </h1>
        {catechism.nameLatin && (
          <p className="text-lg text-ink-600 italic mb-4">
            {catechism.nameLatin}
          </p>
        )}
        <p className="text-ink-700 mb-2">
          {catechism.author && <span>{catechism.author}, </span>}
          <span>{catechism.year}</span>
        </p>
        <p className="text-ink-600">{catechism.description}</p>
      </header>

      {/* Navigation vers les leçons si disponibles */}
      {catechismWithLessons && (
        <section className="mb-8">
          <Link
            href={`/catechism/${lessonsId}/lessons`}
            className="flex items-center justify-between p-6 rounded-xs border-2 border-amber-800 bg-amber-50 hover:bg-amber-100 transition-colors"
          >
            <div>
              <h2 className="font-serif text-xl font-semibold text-amber-900 mb-2">
                Leçons complètes du catéchisme
              </h2>
              <p className="text-sm text-amber-700">
                {catechismWithLessons.parts.length} parties •{" "}
                {catechismWithLessons.parts.reduce((sum, p) => sum + p.articles.length, 0)} leçons
              </p>
            </div>
            <span className="text-amber-600 text-2xl">→</span>
          </Link>
        </section>
      )}

      {/* Questions list */}
      <section className="space-y-4">
        {catechism.questions.map(question => (
          <Link
            key={question.id}
            href={`/catechism/${catechism.id}/${question.id}`}
            className="block group"
          >
            <article className="p-5 rounded-xs border border-gold-400/40 bg-parchment-50/30 hover:bg-parchment-100 transition-colors">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-xs bg-ink-200 text-ink-800 flex items-center justify-center text-sm font-semibold">
                  {question.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-ink-900 group-hover:text-ink-700">
                    {question.question.french}
                  </h3>
                  <p className="text-sm text-ink-600 mt-2 line-clamp-2">
                    {question.answer.french}
                  </p>
                </div>
                <span className="text-gold-600 group-hover:translate-x-1 transition-transform flex-shrink-0">
                  →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Footer navigation */}
      <footer className="mt-16 pt-8 border-t border-gold-400/40">
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
      </footer>
    </div>
  );
}
