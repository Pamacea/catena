/**
 * QuestionAccordion - Accordéon Q/R avec latin/français
 *
 * Affichage d'une question de catéchisme avec sa réponse,
      optionnellement en latin et français, style accordéon.
 */

"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface QuestionReference {
  source: string;
  citation?: string;
}

interface QuestionAccordionProps {
  id: string;
  number: number;
  category?: string;
  question: {
    french: string;
    latin?: string;
  };
  answer: {
    french: string;
    latin?: string;
  };
  references?: QuestionReference[];
  relatedQuestions?: Array<{
    id: string;
    number: number;
    french: string;
  }>;
  defaultOpen?: boolean;
  showNavigation?: boolean;
  catechismId: string;
  totalQuestions?: number;
}

export function QuestionAccordion({
  id,
  number,
  category,
  question,
  answer,
  references = [],
  relatedQuestions = [],
  defaultOpen = false,
  showNavigation = true,
  catechismId,
  totalQuestions,
}: QuestionAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [showLatin, setShowLatin] = useState(false);

  return (
    <article className="border border-parchment-200 rounded-lg bg-white overflow-hidden">
      {/* En-tête de la question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-start gap-4 hover:bg-parchment-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gold-100 text-gold-700 rounded-full font-bold">
          {number}
        </span>

        <div className="flex-1 min-w-0">
          <p className="font-serif font-bold text-lg text-ink-900">{question.french}</p>
          {question.latin && <p className="text-sm text-ink-500 italic mt-1">{question.latin}</p>}
        </div>

        <svg
          className={cn(
            "w-6 h-6 text-ink-400 transition-transform flex-shrink-0 mt-1",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Contenu de la réponse */}
      {isOpen && (
        <div className="px-6 pb-6 border-t border-parchment-200">
          {/* Toggle Latin */}
          {(answer.latin || question.latin) && (
            <div className="flex items-center gap-4 py-3 border-b border-parchment-100">
              <button
                onClick={() => setShowLatin(!showLatin)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1 rounded-full text-sm transition-colors",
                  showLatin
                    ? "bg-liturgical-purple text-white"
                    : "bg-parchment-100 text-ink-600 hover:bg-parchment-200"
                )}
              >
                <span>🇻🇦</span>
                <span>Latinum</span>
              </button>
              <span className="text-sm text-ink-500">
                {showLatin ? "Français + Latin" : "Français seulement"}
              </span>
            </div>
          )}

          {/* Réponse */}
          <div className="py-4 space-y-3">
            {answer.latin && showLatin && (
              <p className="text-ink-700 italic font-serif text-lg leading-relaxed">
                {answer.latin}
              </p>
            )}
            <p className="text-ink-900 font-serif text-lg leading-relaxed">{answer.french}</p>
          </div>

          {/* Références */}
          {references.length > 0 && (
            <div className="bg-parchment-50 rounded-lg p-4 mt-4">
              <h4 className="text-sm font-semibold text-ink-700 mb-2 flex items-center gap-2">
                <span>📚</span>
                Références
              </h4>
              <ul className="space-y-1 text-sm">
                {references.map((ref, i) => (
                  <li key={i} className="text-ink-600">
                    <span className="font-medium">{ref.source}</span>
                    {ref.citation && (
                      <>
                        : <span className="italic">{ref.citation}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Questions liées */}
          {relatedQuestions.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-ink-700 mb-2">Questions connexes</h4>
              <div className="flex flex-wrap gap-2">
                {relatedQuestions.map(q => (
                  <Link
                    key={q.id}
                    href={`/catechism/${catechismId}/${q.number}`}
                    className="px-3 py-1 bg-parchment-100 rounded-full text-sm text-ink-700 hover:bg-parchment-200 transition-colors"
                  >
                    Q{q.number}: {q.french}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          {showNavigation && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-parchment-200">
              {number > 1 ? (
                <Link
                  href={`/catechism/${catechismId}/${number - 1}`}
                  className="flex items-center gap-2 text-ink-600 hover:text-gold-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Question {number - 1}</span>
                </Link>
              ) : (
                <div />
              )}

              {totalQuestions && (
                <span className="text-sm text-ink-500">
                  {number} / {totalQuestions}
                </span>
              )}

              {totalQuestions && number < totalQuestions ? (
                <Link
                  href={`/catechism/${catechismId}/${number + 1}`}
                  className="flex items-center gap-2 text-ink-600 hover:text-gold-600 transition-colors"
                >
                  <span>Question {number + 1}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

/**
 * QuestionGrid - Grille de questions pour vue d'ensemble
 */
interface QuestionGridProps {
  questions: Array<{
    id: string;
    number: number;
    question: { french: string; latin?: string };
    answer: { french: string; latin?: string };
  }>;
  catechismId: string;
}

export function QuestionGrid({ questions, catechismId }: QuestionGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {questions.map(q => (
        <Link
          key={q.id}
          href={`/catechism/${catechismId}/${q.number}`}
          className="p-4 rounded-lg border border-parchment-200 bg-white hover:shadow-md hover:border-gold-300 transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 flex items-center justify-center bg-gold-100 text-gold-700 rounded-full text-sm font-bold">
              {q.number}
            </span>
            <h3 className="font-medium text-ink-800 text-sm line-clamp-2">{q.question.french}</h3>
          </div>
          <p className="text-xs text-ink-500 line-clamp-2">{q.answer.french}</p>
        </Link>
      ))}
    </div>
  );
}

/**
 * CategorySection - Section par catégorie avec accordéons
 */
interface CategorySectionProps {
  title: string;
  icon: string;
  questions: Array<{
    id: string;
    number: number;
    category: string;
    question: { french: string; latin?: string };
    answer: { french: string; latin?: string };
    references?: QuestionReference[];
  }>;
  catechismId: string;
}

export function CategorySection({ title, icon, questions, catechismId }: CategorySectionProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="space-y-4">
      <h2 className="flex items-center gap-3 text-xl font-serif font-bold text-ink-900 border-b border-parchment-300 pb-2">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>

      <div className="space-y-3">
        {questions.map(q => (
          <QuestionAccordion
            key={q.id}
            {...q}
            catechismId={catechismId}
            defaultOpen={openQuestion === q.id}
            showNavigation={false}
          />
        ))}
      </div>
    </section>
  );
}
