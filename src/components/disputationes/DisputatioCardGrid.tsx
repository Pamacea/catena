"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  allDisputationes,
  DisputatioCategory,
  getDisputationesByCategory,
  getDisputatioCategories,
  type Disputatio,
} from "@/data/disputationes";

const categoryLabels: Record<DisputatioCategory, { name: string; color: string }> = {
  [DisputatioCategory.THEOLOGIE_DOGMATIQUE]: {
    name: "Théologie Dogmatique",
    color: "bg-red-100 text-red-800",
  },
  [DisputatioCategory.THEOLOGIE_MORALE]: {
    name: "Théologie Morale",
    color: "bg-green-100 text-green-800",
  },
  [DisputatioCategory.ECLESIOLOGIE]: {
    name: "Ecclésiologie",
    color: "bg-blue-100 text-blue-800",
  },
  [DisputatioCategory.APOLOGETIQUE]: {
    name: "Apologétique",
    color: "bg-purple-100 text-purple-800",
  },
  [DisputatioCategory.DISCIPLINE]: {
    name: "Discipline",
    color: "bg-amber-100 text-amber-800",
  },
  [DisputatioCategory.CRISE]: {
    name: "Crise Post-Conciliaire",
    color: "bg-orange-100 text-orange-800",
  },
};

const categories = getDisputatioCategories();

export function DisputatioCardGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<DisputatioCategory | "">("");

  const filtered = useMemo(() => {
    let result = activeCategory
      ? getDisputationesByCategory(activeCategory)
      : allDisputationes;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (d) =>
          d.question.toLowerCase().includes(q) ||
          d.questionFr.toLowerCase().includes(q) ||
          d.source.toLowerCase().includes(q) ||
          d.objections.some((o) => o.toLowerCase().includes(q)) ||
          d.respondeo.toLowerCase().includes(q)
      );
    }

    return result;
  }, [search, activeCategory]);

  return (
    <>
      {/* Barre de recherche */}
      <div className="mb-8">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une question (latin ou français)..."
            className="w-full pl-10 pr-4 py-3 rounded-xs border border-gold-400/40 bg-parchment-50 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
          />
        </div>
      </div>

      {/* Filtres par catégorie */}
      <section className="mb-10">
        <h2 className="font-serif text-lg font-semibold text-ink-900 mb-3">
          Par catégorie
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("")}
            className={`px-4 py-2 rounded-xs border border-gold-400/40 transition-colors text-sm font-medium ${
              !activeCategory
                ? "bg-amber-800 text-white"
                : "bg-gold-50 text-ink-800 hover:bg-gold-100"
            }`}
          >
            Tous
            <span className="ml-2 opacity-60">({allDisputationes.length})</span>
          </button>
          {categories.map((cat) => {
            const label = categoryLabels[cat];
            const count = getDisputationesByCategory(cat).length;
            return (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? "" : cat)
                }
                className={`px-4 py-2 rounded-xs border border-gold-400/40 transition-colors text-sm font-medium ${
                  activeCategory === cat
                    ? "bg-amber-800 text-white"
                    : "bg-gold-50 text-ink-800 hover:bg-gold-100"
                }`}
              >
                {label.name}
                <span className="ml-2 opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Résultats */}
      <section>
        <p className="text-sm text-ink-600 mb-4">
          {filtered.length} question{filtered.length !== 1 ? "s" : ""}
          {search && ` pour « ${search} »`}
          {activeCategory &&
            ` dans « ${categoryLabels[activeCategory].name} »`}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-ink-500 text-lg">
              Aucune question trouvée.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("");
              }}
              className="mt-4 text-gold-600 hover:text-gold-700 text-sm underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((d) => {
              const cat = categoryLabels[d.category];
              return (
                <Link
                  key={d.slug}
                  href={`/disputationes/${d.slug}`}
                  className="group block p-5 rounded-xs border border-gold-400/30 bg-stone-50 hover:border-gold-500/50 hover:shadow-md hover:bg-parchment-50/50 transition-all"
                >
                  {/* Catégorie */}
                  <span
                    className={`inline-block text-xs px-2 py-0.5 rounded-xs font-medium mb-3 ${cat.color}`}
                  >
                    {cat.name}
                  </span>

                  {/* Question latin */}
                  <h3 className="font-serif text-base font-semibold text-ink-900 mb-1 leading-snug">
                    <em>{d.question}</em>
                  </h3>

                  {/* Question français */}
                  <p className="text-sm text-ink-600 mb-3">
                    « {d.questionFr} »
                  </p>

                  {/* Source + flèche */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-500">{d.source}</span>
                    <span className="text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                      Lire →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
