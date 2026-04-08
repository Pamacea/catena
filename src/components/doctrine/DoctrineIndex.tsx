/**
 * DoctrineIndex - Index des hérésies par catégorie/siècle
 *
 * Navigation et filtrage des hérésies condamnées par l'Église,
 * organisées par catégorie doctrinale et siècle.
 */

import { heresies, HeresyCategory, type Heresy } from "@/data/seed";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface DoctrineIndexProps {
  initialCategory?: HeresyCategory | "all";
  initialCentury?: number | "all";
}

const categoryConfig: Record<
  HeresyCategory,
  { label: string; color: string; description: string }
> = {
  [HeresyCategory.CHRISTOLOGICAL]: {
    label: "Christologiques",
    color: "rose",
    description: "Hérésies concernant la nature du Christ",
  },
  [HeresyCategory.TRINITARIAN]: {
    label: "Trinitaires",
    color: "violet",
    description: "Hérésies concernant la Trinité",
  },
  [HeresyCategory.ANTHROPOLOGICAL]: {
    label: "Anthropologiques",
    color: "amber",
    description: "Hérésies concernant la grâce, le péché, et le libre arbitre",
  },
  [HeresyCategory.ECCLESIOLOGICAL]: {
    label: "Ecclésiologiques",
    color: "emerald",
    description: "Hérésies concernant l'Église et les sacrements",
  },
  [HeresyCategory.ESCHATOLOGICAL]: {
    label: "Eschatologiques",
    color: "slate",
    description: "Hérésies concernant la fin des temps",
  },
  [HeresyCategory.SCRIPTURAL]: {
    label: "Scripturaires",
    color: "cyan",
    description: "Hérésies concernant l'Écriture sainte",
  },
  [HeresyCategory.SACRAMENTAL]: {
    label: "Sacramentelles",
    color: "orange",
    description: "Hérésies concernant les sacrements",
  },
};

const centuries = Array.from(new Set(heresies.map(h => h.century))).sort((a, b) => a - b);

export function DoctrineIndex({
  initialCategory = "all",
  initialCentury = "all",
}: DoctrineIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<HeresyCategory | "all">(initialCategory);
  const [selectedCentury, setSelectedCentury] = useState<number | "all">(initialCentury);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrage
  const filteredHeresies = heresies.filter(heresy => {
    if (selectedCategory !== "all" && heresy.category !== selectedCategory) {
      return false;
    }
    if (selectedCentury !== "all" && heresy.century !== selectedCentury) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        heresy.name.toLowerCase().includes(query) ||
        heresy.nameLatin?.toLowerCase().includes(query) ||
        heresy.promoter.toLowerCase().includes(query) ||
        heresy.keywords.some(k => k.toLowerCase().includes(query))
      );
    }
    return true;
  });

  // Comptage par catégorie
  const categoryCounts: Record<HeresyCategory, number> = {
    [HeresyCategory.CHRISTOLOGICAL]: 0,
    [HeresyCategory.TRINITARIAN]: 0,
    [HeresyCategory.ANTHROPOLOGICAL]: 0,
    [HeresyCategory.ECCLESIOLOGICAL]: 0,
    [HeresyCategory.ESCHATOLOGICAL]: 0,
    [HeresyCategory.SCRIPTURAL]: 0,
    [HeresyCategory.SACRAMENTAL]: 0,
  };

  heresies.forEach(h => {
    categoryCounts[h.category]++;
  });

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">
          Hérésies & Condamnations
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Index des principales hérésies condamnées par l'Église catholique, avec leurs promoteurs,
          leurs erreurs, et les condamnations conciliaires.
        </p>
      </header>

      {/* Filtres */}
      <div className="space-y-4">
        {/* Recherche */}
        <div>
          <input
            type="text"
            placeholder="Rechercher une hérésie, un promoteur..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-parchment-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none"
          />
        </div>

        {/* Filtres par catégorie */}
        <div>
          <p className="text-sm font-semibold text-ink-700 mb-2">Par catégorie doctrinale</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-4 py-2 rounded-lg transition-colors",
                selectedCategory === "all"
                  ? "bg-gold-500 text-white"
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              )}
            >
              Toutes ({heresies.length})
            </button>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as HeresyCategory)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-colors",
                  selectedCategory === key
                    ? `bg-${config.color}-600 text-white`
                    : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
                )}
              >
                {config.label} ({categoryCounts[key as HeresyCategory]})
              </button>
            ))}
          </div>
        </div>

        {/* Filtre par siècle */}
        <div>
          <p className="text-sm font-semibold text-ink-700 mb-2">Par siècle d'apparition</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCentury("all")}
              className={cn(
                "px-3 py-1 rounded-full text-sm transition-colors",
                selectedCentury === "all"
                  ? "bg-gold-500 text-white"
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              )}
            >
              Tous les siècles
            </button>
            {centuries.map(century => (
              <button
                key={century}
                onClick={() => setSelectedCentury(century)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm transition-colors",
                  selectedCentury === century
                    ? "bg-gold-500 text-white"
                    : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
                )}
              >
                {century}
                <sup>e</sup> s.
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div>
        <p className="text-sm text-ink-500 mb-4">
          {filteredHeresies.length} hérésie{filteredHeresies.length > 1 ? "s" : ""}
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredHeresies.map(heresy => (
            <HeresyListItem key={heresy.slug} heresy={heresy} />
          ))}
        </div>

        {filteredHeresies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ink-600 font-serif">Aucune hérésie ne correspond à vos critères.</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface HeresyListItemProps {
  heresy: Heresy;
}

function HeresyListItem({ heresy }: HeresyListItemProps) {
  const config = categoryConfig[heresy.category];

  return (
    <Link
      href={`/doctrine/${heresy.slug}`}
      className="block p-4 rounded-lg border border-parchment-200 bg-white hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-serif font-bold text-ink-900">{heresy.name}</h3>
        <span
          className={cn(
            "text-xs px-2 py-0.5 rounded-full bg-{}-100 text-{}-700",
            `bg-${config.color}-100`,
            `text-${config.color}-700`
          )}
        >
          {config.label}
        </span>
      </div>

      <p className="text-sm text-ink-600 mb-2">{heresy.promoter}</p>

      <div className="flex items-center gap-3 text-xs text-ink-500">
        <span>
          {heresy.century}
          <sup>e</sup> siècle
        </span>
        <span>•</span>
        <span>{heresy.origin}</span>
      </div>
    </Link>
  );
}

/**
 * CompactHeresyList - Liste compacte pour sidebar
 */
export function CompactHeresyList({
  category,
  limit = 10,
}: {
  category?: HeresyCategory;
  limit?: number;
}) {
  const filtered = category ? heresies.filter(h => h.category === category) : heresies;

  const displayed = filtered.slice(0, limit);

  return (
    <ul className="space-y-1">
      {displayed.map(heresy => (
        <li key={heresy.slug}>
          <Link
            href={`/doctrine/${heresy.slug}`}
            className="block px-3 py-2 rounded hover:bg-parchment-100 transition-colors group"
          >
            <p className="text-sm font-medium text-ink-800 group-hover:text-gold-700">
              {heresy.name}
            </p>
            <p className="text-xs text-ink-500">
              {heresy.century}
              <sup>e</sup> s. • {heresy.promoter}
            </p>
          </Link>
        </li>
      ))}
      {limit < filtered.length && (
        <li>
          <Link
            href="/doctrine"
            className="block px-3 py-2 text-sm text-gold-600 hover:text-gold-700"
          >
            Voir toutes les hérésies →
          </Link>
        </li>
      )}
    </ul>
  );
}

/**
 * CategoryCard - Carte de catégorie pour page d'accueil
 */
interface CategoryCardProps {
  category: HeresyCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const config = categoryConfig[category];
  const count = heresies.filter(h => h.category === category).length;

  return (
    <Link
      href={`/doctrine?category=${category}`}
      className="block p-6 rounded-lg border-2 border-parchment-200 bg-white hover:border-gold-300 hover:shadow-lg transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-serif font-bold text-ink-900">{config.label}</h3>
        <span className="text-2xl font-bold text-gold-500">{count}</span>
      </div>
      <p className="text-sm text-ink-600">{config.description}</p>
    </Link>
  );
}
