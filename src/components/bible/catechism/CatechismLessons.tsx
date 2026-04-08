/**
 * Composant d'affichage des leçons d'un catéchisme
 * Basé sur la structure des données CatechismMetadata (laguerie.ts)
 */

"use client";

import { useState } from "react";
import type {
  CatechismMetadata,
  CatechismPart,
  CatechismArticle,
  CatechismQuestion,
} from "@/data/types/catechism";

interface CatechismLessonsProps {
  catechism: CatechismMetadata;
}

export function CatechismLessons({ catechism }: CatechismLessonsProps) {
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [expandedArticles, setExpandedArticles] = useState<Set<string>>(new Set());

  const toggleArticle = (articleId: string) => {
    const newExpanded = new Set(expandedArticles);
    if (newExpanded.has(articleId)) {
      newExpanded.delete(articleId);
    } else {
      newExpanded.add(articleId);
    }
    setExpandedArticles(newExpanded);
  };

  const totalArticles = catechism.parts.reduce((sum, part) => sum + part.articles.length, 0);

  return (
    <div className="max-w-5xl mx-auto">
      {/* En-tête des leçons */}
      <header className="mb-10 pb-6 border-b border-gold-400/40">
        <h2 className="font-serif text-3xl font-bold text-ink-900 mb-3">Leçons du Catéchisme</h2>
        <p className="text-ink-600 mb-4">
          {totalArticles} leçons organisées en {catechism.parts.length} parties
        </p>

        {/* Filtre par partie */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedPart(null)}
            className={`px-4 py-2 rounded-xs text-sm font-medium transition-colors ${
              selectedPart === null
                ? "bg-amber-800 text-white"
                : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
            }`}
          >
            Toutes les leçons
          </button>
          {catechism.parts.map(part => (
            <button
              key={part.id}
              onClick={() => setSelectedPart(part.part)}
              className={`px-4 py-2 rounded-xs text-sm font-medium transition-colors ${
                selectedPart === part.part
                  ? "bg-amber-800 text-white"
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              }`}
            >
              Partie {part.part}
            </button>
          ))}
        </div>
      </header>

      {/* Liste des leçons */}
      <div className="space-y-8">
        {catechism.parts
          .filter(part => selectedPart === null || part.part === selectedPart)
          .map(part => (
            <PartSection
              key={part.id}
              part={part}
              expandedArticles={expandedArticles}
              onToggleArticle={toggleArticle}
            />
          ))}
      </div>
    </div>
  );
}

interface PartSectionProps {
  part: CatechismPart;
  expandedArticles: Set<string>;
  onToggleArticle: (articleId: string) => void;
}

function PartSection({ part, expandedArticles, onToggleArticle }: PartSectionProps) {
  return (
    <section className="border border-gold-400/40 rounded-xs overflow-hidden">
      {/* En-tête de la partie */}
      <div className="bg-parchment-100 px-6 py-4 border-b border-gold-400/40">
        <h3 className="font-serif text-xl font-semibold text-ink-900">
          Partie {part.part} — {part.title}
        </h3>
        <p className="text-sm text-ink-600 mt-1">{part.description}</p>
        <p className="text-xs text-ink-500 mt-2">
          {part.articles.length} leçon{part.articles.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Articles de la partie */}
      <div className="divide-y divide-gold-400/20">
        {part.articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
            isExpanded={expandedArticles.has(article.id)}
            onToggle={() => onToggleArticle(article.id)}
          />
        ))}
      </div>
    </section>
  );
}

interface ArticleCardProps {
  article: CatechismArticle;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ArticleCard({ article, index, isExpanded, onToggle }: ArticleCardProps) {
  return (
    <div className="bg-white">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-start gap-4 hover:bg-parchment-50 transition-colors text-left"
      >
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-semibold">
          {article.article}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h4 className="font-serif text-lg font-semibold text-ink-900">{article.title}</h4>
            {article.titleShort && (
              <span className="text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-xs">
                {article.titleShort}
              </span>
            )}
          </div>
          {isExpanded && article.content && (
            <div className="mt-4 prose prose-stone max-w-none">
              <div className="text-ink-700 whitespace-pre-line">{article.content}</div>
            </div>
          )}
          {isExpanded && article.questions && article.questions.length > 0 && (
            <div className="mt-6 space-y-4">
              <h5 className="font-semibold text-ink-900 text-sm uppercase tracking-wide">
                Questions à mémoriser
              </h5>
              {article.questions.map(question => (
                <QuestionItem key={question.id} question={question} />
              ))}
            </div>
          )}
        </div>
        <span className={`text-ink-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
    </div>
  );
}

function QuestionItem({ question }: { question: CatechismQuestion }) {
  return (
    <div className="bg-parchment-50 rounded-xs p-4">
      <p className="font-semibold text-ink-900 mb-2">Q: {question.question}</p>
      <p className="text-ink-700">
        <span className="font-semibold">R:</span> {question.reponse}
      </p>
      {question.references && question.references.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gold-400/20">
          <p className="text-xs text-ink-500 mb-1">Références:</p>
          <div className="flex flex-wrap gap-2">
            {question.references.map((ref, idx: number) => (
              <span
                key={idx}
                className={`text-xs px-2 py-1 rounded-xs ${
                  ref.type === "biblique"
                    ? "bg-blue-100 text-blue-700"
                    : ref.type === "theologique"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-100 text-gray-700"
                }`}
              >
                {ref.source}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
