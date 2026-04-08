/**
 * Page de recherche des versets essentiels
 * Recherche avancée avec filtres par thème, livre, importance
 */

"use client";

import { useState, useMemo } from "react";
import { essentialVerses, getVersesByTheme, getVersesByBook } from "@/data/verses/essential-verses";
import type { EssentialVerse, VerseTheme, VerseImportance } from "@/data/types/enriched";
import { bibleBooks } from "@/data/bible";
import { SearchBar } from "@/components/ui/SearchBar";
import { Badge } from "@/components/ui/Badge";

// Configuration des thèmes
const verseThemes: { value: VerseTheme; label: string; icon: string; color: string }[] = [
  {
    value: "salutation",
    label: "Salutation & Fondements",
    icon: "🙌",
    color: "bg-amber-100 text-amber-800",
  },
  { value: "amour-de-dieu", label: "Amour de Dieu", icon: "💖", color: "bg-red-100 text-red-800" },
  {
    value: "peche-et-chute",
    label: "Péché et Chute",
    icon: "😞",
    color: "bg-slate-100 text-slate-800",
  },
  {
    value: "grace-et-salut",
    label: "Grâce et Salut",
    icon: "✨",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    value: "foi-et-justification",
    label: "Foi et Justification",
    icon: "🛡️",
    color: "bg-blue-100 text-blue-800",
  },
  {
    value: "nouvelle-naissance",
    label: "Nouvelle Naissance",
    icon: "🔄",
    color: "bg-teal-100 text-teal-800",
  },
  {
    value: "parole-de-dieu",
    label: "Parole de Dieu",
    icon: "📖",
    color: "bg-purple-100 text-purple-800",
  },
  { value: "saint-esprit", label: "Saint-Esprit", icon: "🕊️", color: "bg-cyan-100 text-cyan-800" },
  { value: "priere", label: "Prière", icon: "🙏", color: "bg-indigo-100 text-indigo-800" },
  {
    value: "reconciliation",
    label: "Réconciliation",
    icon: "🤝",
    color: "bg-rose-100 text-rose-800",
  },
  {
    value: "force-et-courage",
    label: "Force et Courage",
    icon: "💪",
    color: "bg-orange-100 text-orange-800",
  },
  { value: "adoration", label: "Adoration", icon: "🛐", color: "bg-yellow-100 text-yellow-800" },
  {
    value: "evangelisation",
    label: "Évangélisation",
    icon: "🌍",
    color: "bg-green-100 text-green-800",
  },
  {
    value: "saintete",
    label: "Sainteté de Vie",
    icon: "🎯",
    color: "bg-violet-100 text-violet-800",
  },
  {
    value: "service-et-humilite",
    label: "Service et Humilité",
    icon: "🤲",
    color: "bg-pink-100 text-pink-800",
  },
  {
    value: "responsabilites-chretiennes",
    label: "Responsabilités",
    icon: "💼",
    color: "bg-gray-100 text-gray-800",
  },
  {
    value: "mariage-et-famille",
    label: "Mariage et Famille",
    icon: "🏡",
    color: "bg-lime-100 text-lime-800",
  },
  {
    value: "argent-et-possessions",
    label: "Argent et Possessions",
    icon: "💰",
    color: "bg-amber-100 text-amber-800",
  },
  {
    value: "confiance-en-dieu",
    label: "Confiance en Dieu",
    icon: "😌",
    color: "bg-sky-100 text-sky-800",
  },
  { value: "esperance", label: "Espérance", icon: "🌙", color: "bg-fuchsia-100 text-fuchsia-800" },
  {
    value: "jugement",
    label: "Jugement et Responsabilité",
    icon: "⚖️",
    color: "bg-zinc-100 text-zinc-800",
  },
  {
    value: "preuve-de-la-foi",
    label: "Preuve de la Foi",
    icon: "🎴",
    color: "bg-stone-100 text-stone-800",
  },
  {
    value: "epreuves",
    label: "Épreuves et Tentations",
    icon: "🧪",
    color: "bg-red-100 text-red-800",
  },
  {
    value: "paix-et-repos",
    label: "Paix et Repos",
    icon: "🌿",
    color: "bg-emerald-100 text-emerald-800",
  },
  { value: "sagesse", label: "Sagesse", icon: "📜", color: "bg-amber-100 text-amber-800" },
  {
    value: "sacrifice-de-christ",
    label: "Sacrifice de Christ",
    icon: "✝️",
    color: "bg-rose-100 text-rose-800",
  },
  {
    value: "renouvellement",
    label: "Renouvellement",
    icon: "🔄",
    color: "bg-teal-100 text-teal-800",
  },
  { value: "lumiere", label: "Lumière", icon: "🕯️", color: "bg-yellow-100 text-yellow-800" },
  {
    value: "prophetie-messianique",
    label: "Prophétie Messianique",
    icon: "🎺",
    color: "bg-purple-100 text-purple-800",
  },
  {
    value: "vie-eternelle",
    label: "Vie Éternelle",
    icon: "⏳",
    color: "bg-blue-100 text-blue-800",
  },
  { value: "trinite", label: "Trinité", icon: "🌟", color: "bg-indigo-100 text-indigo-800" },
  {
    value: "conseils-pratiques",
    label: "Conseils Pratiques",
    icon: "📌",
    color: "bg-slate-100 text-slate-800",
  },
  { value: "victoire", label: "Victoire", icon: "🏆", color: "bg-green-100 text-green-800" },
];

const importanceLevels: { value: VerseImportance; label: string; color: string }[] = [
  { value: "essential", label: "Essentiel", color: "bg-red-100 text-red-800 border-red-300" },
  { value: "important", label: "Important", color: "bg-amber-100 text-amber-800 border-amber-300" },
  { value: "notable", label: "Notable", color: "bg-blue-100 text-blue-800 border-blue-300" },
];

export default function VersesSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTheme, setSelectedTheme] = useState<VerseTheme | "all">("all");
  const [selectedBook, setSelectedBook] = useState<string>("all");
  const [selectedImportance, setSelectedImportance] = useState<VerseImportance | "all">("all");
  const [expandedVerses, setExpandedVerses] = useState<Set<string>>(new Set());

  // Filtrage des versets
  const filteredVerses = useMemo(() => {
    let results = essentialVerses;

    // Filtrage par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        v =>
          v.text.toLowerCase().includes(query) ||
          v.themeLabel.toLowerCase().includes(query) ||
          v.reference.toLowerCase().includes(query) ||
          v.tags.some(t => t.toLowerCase().includes(query)) ||
          (v.theologicalContext && v.theologicalContext.toLowerCase().includes(query))
      );
    }

    // Filtrage par thème
    if (selectedTheme !== "all") {
      results = results.filter(v => v.theme === selectedTheme);
    }

    // Filtrage par livre
    if (selectedBook !== "all") {
      results = results.filter(v => v.bookId === selectedBook);
    }

    // Filtrage par importance
    if (selectedImportance !== "all") {
      results = results.filter(v => v.importance === selectedImportance);
    }

    return results;
  }, [searchQuery, selectedTheme, selectedBook, selectedImportance]);

  // Stats
  const stats = useMemo(() => {
    return {
      total: essentialVerses.length,
      filtered: filteredVerses.length,
      themes: verseThemes.length,
      books: [...new Set(essentialVerses.map(v => v.bookId))].length,
    };
  }, [filteredVerses.length]);

  // Toggle expanded state
  const toggleExpanded = (id: string) => {
    setExpandedVerses(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Get theme config
  const getThemeConfig = (theme: VerseTheme) => {
    return verseThemes.find(t => t.value === theme) || verseThemes[0];
  };

  // Get importance config
  const getImportanceConfig = (importance: VerseImportance) => {
    return importanceLevels.find(i => i.value === importance) || importanceLevels[0];
  };

  // Get book name
  const getBookName = (bookId: string) => {
    const book = bibleBooks.find(b => b.id === bookId);
    return book?.name || bookId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-amber-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-amber-900 flex items-center gap-2">
                <span>📖</span>
                Versets Essentiels
              </h1>
              <p className="text-amber-700 mt-1">
                {stats.filtered} versets • {stats.themes} thèmes • {stats.books} livres
              </p>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="mb-4">
            <SearchBar
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Rechercher un verset, un thème, un mot-clé..."
              className="w-full"
            />
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-4">
            {/* Filtre par thème */}
            <select
              value={selectedTheme}
              onChange={e => setSelectedTheme(e.target.value as VerseTheme | "all")}
              className="px-4 py-2 rounded-lg border border-amber-200 bg-white text-amber-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">Tous les thèmes</option>
              {verseThemes.map(theme => (
                <option key={theme.value} value={theme.value}>
                  {theme.icon} {theme.label}
                </option>
              ))}
            </select>

            {/* Filtre par livre */}
            <select
              value={selectedBook}
              onChange={e => setSelectedBook(e.target.value)}
              className="px-4 py-2 rounded-lg border border-amber-200 bg-white text-amber-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">Tous les livres</option>
              {bibleBooks.map(book => (
                <option key={book.id} value={book.id}>
                  {book.name}
                </option>
              ))}
            </select>

            {/* Filtre par importance */}
            <select
              value={selectedImportance}
              onChange={e => setSelectedImportance(e.target.value as VerseImportance | "all")}
              className="px-4 py-2 rounded-lg border border-amber-200 bg-white text-amber-900 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">Tous les niveaux</option>
              {importanceLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>

            {/* Reset */}
            {(selectedTheme !== "all" ||
              selectedBook !== "all" ||
              selectedImportance !== "all") && (
              <button
                onClick={() => {
                  setSelectedTheme("all");
                  setSelectedBook("all");
                  setSelectedImportance("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Aperçu des thèmes si pas de filtre */}
        {selectedTheme === "all" && !searchQuery && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Explorer par thème</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {verseThemes.map(theme => {
                const count = getVersesByTheme(theme.value).length;
                return (
                  <button
                    key={theme.value}
                    onClick={() => setSelectedTheme(theme.value)}
                    className={`p-4 rounded-xl border-2 transition-all hover:shadow-lg ${theme.color} border-transparent hover:border-current`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{theme.icon}</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">{theme.label}</div>
                        <div className="text-sm opacity-75">
                          {count} verset{count > 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Résultats de la recherche */}
        <section>
          <h2 className="text-2xl font-bold text-amber-900 mb-6">
            {searchQuery ||
            selectedTheme !== "all" ||
            selectedBook !== "all" ||
            selectedImportance !== "all"
              ? `Résultats (${filteredVerses.length})`
              : "Tous les versets essentiels"}
          </h2>

          {filteredVerses.length === 0 ? (
            <div className="text-center py-12 bg-amber-50 rounded-xl">
              <span className="text-6xl mb-4 block">🔍</span>
              <p className="text-amber-700 text-lg">
                Aucun verset trouvé correspondant à votre recherche.
              </p>
              <p className="text-amber-600 mt-2">
                Essayez d\'ajuster vos filtres ou votre recherche.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredVerses.map(verse => {
                const themeConfig = getThemeConfig(verse.theme);
                const importanceConfig = getImportanceConfig(verse.importance);
                const isExpanded = expandedVerses.has(verse.id);

                return (
                  <article
                    key={verse.id}
                    className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      {/* En-tête du verset */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <span className="text-2xl">{themeConfig.icon}</span>
                            <h3 className="font-bold text-lg text-amber-900">{verse.reference}</h3>
                            <Badge className={themeConfig.color}>{themeConfig.label}</Badge>
                            <Badge className={importanceConfig.color}>
                              {importanceConfig.label}
                            </Badge>
                          </div>
                          <p className="text-gray-800 font-medium text-lg leading-relaxed">
                            "{verse.text}"
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {verse.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-amber-50 text-amber-700 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Contexte théologique (expandable) */}
                      {verse.theologicalContext && (
                        <div className="border-t border-amber-100 pt-4">
                          <button
                            onClick={() => toggleExpanded(verse.id)}
                            className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors w-full"
                          >
                            <span className="text-sm font-medium">
                              {isExpanded ? "Masquer" : "Afficher"} le contexte théologique
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          {isExpanded && (
                            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                              <h4 className="font-semibold text-amber-900 mb-2">
                                Contexte théologique
                              </h4>
                              <p className="text-amber-800">{verse.theologicalContext}</p>

                              {/* Références croisées */}
                              {verse.crossReferences && verse.crossReferences.length > 0 && (
                                <div className="mt-3">
                                  <h5 className="font-medium text-amber-900 mb-1">
                                    Références croisées
                                  </h5>
                                  <div className="flex flex-wrap gap-1">
                                    {verse.crossReferences.map(ref => (
                                      <span
                                        key={ref}
                                        className="text-xs bg-white px-2 py-1 rounded border border-amber-200 text-amber-700"
                                      >
                                        {ref}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-50 border-t border-amber-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-amber-700">
          <p className="mb-2">
            📖 <strong>{essentialVerses.length}</strong> versets essentiels pour la foi chrétienne
          </p>
          <p className="text-sm text-amber-600">
            Source: Bible de Jérusalem • Organisé par thèmes théologiques
          </p>
        </div>
      </footer>
    </div>
  );
}
