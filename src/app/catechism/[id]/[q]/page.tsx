import Link from "next/link";
import { getCatechismById, getQuestionById, catechisms } from "@/data/catechisms";
import { notFound } from "next/navigation";

interface QuestionPageProps {
  params: Promise<{
    id: string;
    q: string;
  }>;
}

export async function generateMetadata({ params }: QuestionPageProps) {
  const { id, q } = await params;
  const catechism = getCatechismById(id);
  const question = getQuestionById(q);

  if (!catechism || !question) {
    return {
      title: "Question non trouvée",
    };
  }

  const title = `Q${question.number} - ${question.question.french.slice(0, 50)}...`;
  const description = question.answer.french.slice(0, 150);

  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export async function generateStaticParams() {
  const params: { id: string; q: string }[] = [];

  for (const catechism of catechisms) {
    for (const question of catechism.questions) {
      params.push({
        id: catechism.id,
        q: question.id,
      });
    }
  }

  return params;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { id, q } = await params;
  const catechism = getCatechismById(id);
  const question = getQuestionById(q);

  if (!catechism || !question) {
    notFound();
  }

  // Find current index and adjacent questions
  const currentIndex = catechism.questions.findIndex(q => q.id === question.id);
  const prevQuestion = currentIndex > 0 ? catechism.questions[currentIndex - 1] : null;
  const nextQuestion =
    currentIndex < catechism.questions.length - 1 ? catechism.questions[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400 mb-6">
        <Link href="/catechism" className="hover:underline">
          Catéchismes
        </Link>
        <span>/</span>
        <Link href={`/catechism/${id}`} className="hover:underline">
          {catechism.name}
        </Link>
        <span>/</span>
        <span className="text-ink-900 dark:text-ink-200">Q{question.number}</span>
      </nav>

      {/* Question navigation */}
      <nav className="flex items-center justify-between mb-8">
        {prevQuestion ? (
          <Link
            href={`/catechism/${id}/${prevQuestion.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xs border border-gold-400/40 dark:border-gold-400/40 bg-parchment-50/50 dark:bg-stone-800/50 text-ink-700 dark:text-ink-300 hover:bg-parchment-100 dark:hover:bg-stone-700 transition-colors"
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
            <span className="hidden sm:inline">Q{prevQuestion.number}</span>
            <span className="sm:hidden">Préc.</span>
          </Link>
        ) : (
          <div />
        )}

        <span className="text-ink-700 dark:text-ink-300 font-medium">
          Question {question.number} / {catechism.questions.length}
        </span>

        {nextQuestion ? (
          <Link
            href={`/catechism/${id}/${nextQuestion.id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xs border border-gold-400/40 dark:border-gold-400/40 bg-parchment-50/50 dark:bg-stone-800/50 text-ink-700 dark:text-ink-300 hover:bg-parchment-100 dark:hover:bg-stone-700 transition-colors"
          >
            <span className="hidden sm:inline">Q{nextQuestion.number}</span>
            <span className="sm:hidden">Suiv.</span>
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
        ) : (
          <div />
        )}
      </nav>

      {/* Main Q/R Accordion */}
      <article className="mb-12">
        <details open className="group/details">
          <summary className="cursor-pointer p-6 rounded-xs border-2 border-gold-400/40 dark:border-gold-400/40 bg-parchment-100/50 dark:bg-ink-900/30 hover:bg-ink-200/50 dark:hover:bg-ink-900/50 transition-colors list-none">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-xs bg-ink-300 dark:bg-ink-700 text-ink-900 dark:text-parchment-100 flex items-center justify-center text-lg font-bold">
                {question.number}
              </span>
              <div className="flex-1">
                <span className="text-sm text-ink-600 dark:text-ink-400 font-medium uppercase tracking-wide">
                  Question
                </span>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-ink-900 dark:text-parchment-100 mt-1">
                  {question.question.french}
                </h2>
                {question.question.latin && (
                  <p className="mt-3 text-ink-700 dark:text-ink-300 italic text-sm md:text-base">
                    {question.question.latin}
                  </p>
                )}
              </div>
            </div>
          </summary>

          <div className="mt-4 p-6 rounded-xs border border-gold-400/40 dark:border-gold-400/40 bg-white dark:bg-stone-800">
            <span className="text-sm text-green-600 dark:text-green-400 font-medium uppercase tracking-wide">
              Réponse
            </span>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-ink-900 dark:text-parchment-100 mt-2">
              {question.answer.french}
            </p>
            {question.answer.latin && (
              <p className="mt-4 text-ink-700 dark:text-ink-300 italic text-sm md:text-base border-l-4 border-gold-400/40 dark:border-gold-400/40 pl-4">
                {question.answer.latin}
              </p>
            )}
          </div>
        </details>
      </article>

      {/* References */}
      {question.references && question.references.length > 0 && (
        <section className="mb-12 p-6 rounded-xs border border-gold-400/40 dark:border-gold-400/40 bg-parchment-50/30 dark:bg-stone-800/30">
          <h3 className="font-serif text-lg font-semibold text-ink-900 dark:text-parchment-100 mb-4">
            Références
          </h3>
          <ul className="space-y-3">
            {question.references.map((ref, index) => (
              <li key={index} className="text-ink-700 dark:text-ink-300">
                <span className="font-medium">{ref.source}</span>
                {ref.citation && (
                  <span className="block text-sm text-ink-600 dark:text-ink-400 italic mt-1">
                    "{ref.citation}"
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Related questions */}
      {question.relatedQuestions && question.relatedQuestions.length > 0 && (
        <section className="mb-12">
          <h3 className="font-serif text-lg font-semibold text-ink-900 dark:text-parchment-100 mb-4">
            Questions connexes
          </h3>
          <div className="flex flex-wrap gap-2">
            {question.relatedQuestions.map(relatedId => {
              const relatedQ = getQuestionById(relatedId);
              if (!relatedQ) return null;
              return (
                <Link
                  key={relatedId}
                  href={`/catechism/${id}/${relatedId}`}
                  className="px-4 py-2 rounded-xs border border-gold-400/40 dark:border-gold-400/40 bg-parchment-50/50 dark:bg-stone-800/50 text-ink-700 dark:text-ink-300 hover:bg-parchment-100 dark:hover:bg-stone-700 transition-colors"
                >
                  Q{relatedQ.number}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Related councils */}
      {question.relatedCouncils && question.relatedCouncils.length > 0 && (
        <section className="mb-12">
          <h3 className="font-serif text-lg font-semibold text-ink-900 dark:text-parchment-100 mb-4">
            Conciles connexes
          </h3>
          <div className="flex flex-wrap gap-2">
            {question.relatedCouncils.map(councilId => (
              <Link
                key={councilId}
                href={`/doctrine/${councilId}`}
                className="px-4 py-2 rounded-xs border border-amber-200 dark:border-gold-400/40 bg-amber-50/50 dark:bg-stone-800/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors"
              >
                {councilId.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer navigation */}
      <footer className="flex items-center justify-between pt-8 border-t border-gold-400/40/50">
        <Link
          href={`/catechism/${id}`}
          className="inline-flex items-center gap-2 text-ink-600 dark:text-ink-400 hover:underline"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voir toutes les questions
        </Link>
      </footer>
    </div>
  );
}
