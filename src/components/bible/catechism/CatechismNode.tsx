/**
 * CatechismNode - Nœud hiérarchique pour naviguer les catéchismes
 *
 * Composant pour afficher la structure arborescente des catéchismes,
 * organisés par catégories (Symbole, Sacrements, Décalogue, Notre Père).
 */

import { Catechism, CatechismType, QuestionCategory } from "@/data/seed";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface CatechismNodeProps {
  catechism: Catechism;
  expandedCategories?: QuestionCategory[];
  onCategoryToggle?: (category: QuestionCategory) => void;
  variant?: "tree" | "cards" | "list";
}

const categoryConfig: Record<QuestionCategory, { label: string; icon: string; color: string }> = {
  [QuestionCategory.APOSTLES_CREED]: {
    label: "Symbole des Apôtres",
    icon: "☩",
    color: "purple",
  },
  [QuestionCategory.NICENE_CREED]: {
    label: "Symbole de Nicée",
    icon: "✝",
    color: "violet",
  },
  [QuestionCategory.COMMANDMENTS]: {
    label: "Les Dix Commandements",
    icon: "⑩",
    color: "amber",
  },
  [QuestionCategory.SACRAMENTS]: {
    label: "Les Sept Sacrements",
    icon: "⑦",
    color: "blue",
  },
  [QuestionCategory.PRAYER]: {
    label: "Le Notre Père",
    icon: "🙏",
    color: "green",
  },
  [QuestionCategory.GRACE]: {
    label: "La Grâce",
    icon: "✨",
    color: "yellow",
  },
  [QuestionCategory.SIN]: {
    label: "Le Péché",
    icon: "⚠",
    color: "red",
  },
  [QuestionCategory.LAST_THINGS]: {
    label: "Les Fins Dernières",
    icon: "⏰",
    color: "slate",
  },
  [QuestionCategory.LITURGY]: {
    label: "Liturgie",
    icon: "⛪",
    color: "emerald",
  },
};

const catechismTypeLabels: Record<CatechismType, string> = {
  [CatechismType.CATECHISM_OF_THE_COUNCIL_OF_TRENT]: "Catéchisme du Concile de Trente",
  [CatechismType.CATECHISM_OF_ST_PIUS_X]: "Catéchisme de Saint Pie X",
  [CatechismType.CATECHISM_OF_THE_CATHOLIC_CHURCH]: "Catéchisme de l'Église Catholique",
  [CatechismType.CATECHISM_OF_THE_CURE_D_ARS]: "Catéchisme du Curé d'Ars",
  [CatechismType.BALTIMORE_CATECHISM]: "Catéchisme de Baltimore",
  [CatechismType.CATECHISM_IBP]: "Catéchisme de l'IBP",
};

export function CatechismNode({
  catechism,
  expandedCategories = [],
  onCategoryToggle,
  variant = "tree",
}: CatechismNodeProps) {
  const [localExpanded, setLocalExpanded] = useState<Set<QuestionCategory>>(
    new Set(expandedCategories)
  );

  const isExpanded = (category: QuestionCategory) => localExpanded.has(category);

  const toggleCategory = (category: QuestionCategory) => {
    const newExpanded = new Set(localExpanded);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setLocalExpanded(newExpanded);
    onCategoryToggle?.(category);
  };

  // Grouper les questions par catégorie
  const questionsByCategory: Partial<Record<QuestionCategory, typeof catechism.questions>> = {};
  catechism.questions.forEach(q => {
    if (!questionsByCategory[q.category]) {
      questionsByCategory[q.category] = [];
    }
    questionsByCategory[q.category]!.push(q);
  });

  if (variant === "cards") {
    return (
      <div className="space-y-6">
        {/* En-tête du catéchisme */}
        <div className="bg-parchment-50 rounded-lg p-6 border border-parchment-200">
          <h2 className="text-2xl font-serif font-bold text-ink-900">{catechism.name}</h2>
          {catechism.nameLatin && <p className="text-ink-600 italic mt-1">{catechism.nameLatin}</p>}
          <p className="text-sm text-ink-500 mt-2">
            {catechism.author} • {catechism.year}
          </p>
          <p className="text-ink-700 mt-3">{catechism.description}</p>
        </div>

        {/* Cartes par catégorie */}
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(questionsByCategory).map(([category, questions]) => {
            const config = categoryConfig[category as QuestionCategory];
            return (
              <Link
                key={category}
                href={`/catechism/${catechism.id}?category=${category}`}
                className={cn(
                  "block p-5 rounded-lg border-2 border-parchment-200 bg-white",
                  "hover:border-gold-300 hover:shadow-md transition-all"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{config.icon}</span>
                  <span className="text-sm text-ink-500">{questions.length} questions</span>
                </div>
                <h3 className="font-semibold text-ink-800">{config.label}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="space-y-2">
        {catechism.questions.map(question => (
          <Link
            key={question.id}
            href={`/catechism/${catechism.id}/${question.number}`}
            className="block px-4 py-3 rounded-lg hover:bg-parchment-100 transition-colors border border-transparent hover:border-parchment-200"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                {question.number}
              </span>
              <div>
                <p className="font-medium text-ink-800 text-sm">{question.question.french}</p>
                {question.question.latin && (
                  <p className="text-xs text-ink-500 italic mt-1">{question.question.latin}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // Variant 'tree' (défaut)
  return (
    <div className="space-y-4">
      {/* En-tête du catéchisme */}
      <div className="flex items-center gap-3 pb-3 border-b border-parchment-200">
        <span className="text-2xl">📖</span>
        <div>
          <h3 className="font-serif font-bold text-ink-900">{catechism.name}</h3>
          <p className="text-xs text-ink-500">{catechism.questions.length} questions</p>
        </div>
      </div>

      {/* Arborescence par catégorie */}
      <div className="space-y-1">
        {Object.entries(questionsByCategory).map(([category, questions]) => {
          const config = categoryConfig[category as QuestionCategory];
          const expanded = isExpanded(category as QuestionCategory);

          return (
            <div key={category}>
              <button
                onClick={() => toggleCategory(category as QuestionCategory)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-parchment-100 transition-colors text-left"
              >
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform text-ink-400",
                    expanded && "rotate-90"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>{config.icon}</span>
                <span className="flex-1 font-medium text-ink-800 text-sm">{config.label}</span>
                <span className="text-xs text-ink-500">{questions.length}</span>
              </button>

              {expanded && (
                <div className="ml-6 mt-1 space-y-1">
                  {questions.map(question => (
                    <Link
                      key={question.id}
                      href={`/catechism/${catechism.id}/${question.number}`}
                      className="block px-3 py-2 rounded hover:bg-parchment-50 transition-colors text-sm text-ink-700"
                    >
                      <span className="font-medium text-gold-600">Q{question.number}</span>{" "}
                      {question.question.french}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * BreadcrumbCat - Fil d'Ariane pour navigation dans catéchisme
 */
interface BreadcrumbCatProps {
  catechism: Catechism;
  category?: QuestionCategory;
  questionNumber?: number;
}

export function BreadcrumbCat({ catechism, category, questionNumber }: BreadcrumbCatProps) {
  const crumbs = [
    { label: "Catéchismes", href: "/catechism" },
    { label: catechism.name, href: `/catechism/${catechism.id}` },
  ];

  if (category) {
    const config = categoryConfig[category];
    crumbs.push({
      label: config.label,
      href: `/catechism/${catechism.id}?category=${category}`,
    });
  }

  if (questionNumber) {
    crumbs.push({
      label: `Question ${questionNumber}`,
      href: `/catechism/${catechism.id}/${questionNumber}`,
    });
  }

  return (
    <nav className="flex items-center gap-2 text-sm overflow-x-auto" aria-label="Fil d'ariane">
      {crumbs.map((crumb, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && (
            <svg
              className="w-4 h-4 text-ink-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          <Link
            href={crumb.href}
            className={cn(
              "hover:text-gold-600 transition-colors",
              i === crumbs.length - 1 ? "text-ink-900 font-medium" : "text-ink-600"
            )}
          >
            {crumb.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}

/**
 * CompactCatechismList - Liste compacte des catéchismes
 */
interface CompactCatechismListProps {
  catechisms: Catechism[];
}

export function CompactCatechismList({ catechisms }: CompactCatechismListProps) {
  return (
    <ul className="space-y-2">
      {catechisms.map(c => (
        <li key={c.id}>
          <Link
            href={`/catechism/${c.id}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-parchment-100 transition-colors border border-transparent hover:border-parchment-200"
          >
            <span className="text-xl">📖</span>
            <div className="flex-1">
              <p className="font-medium text-ink-800">{c.name}</p>
              <p className="text-xs text-ink-500">
                {c.year} • {c.questions.length} questions
              </p>
            </div>
            <svg
              className="w-5 h-5 text-ink-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}
