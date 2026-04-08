"use client";

/**
 * LiturgyIndex - Index des prières par catégorie
 *
 * Navigation et filtrage des prières catholiques
 * organisées par catégorie liturgique.
 */

import { prayers, PrayerCategory, type Prayer } from "@/data/prayers";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface LiturgyIndexProps {
  initialCategory?: PrayerCategory | "all";
}

const categoryConfig: Record<
  PrayerCategory,
  { label: string; icon: string; description: string; color: string }
> = {
  [PrayerCategory.OUR_FATHER]: {
    label: "Notre Père",
    icon: "🙏",
    description: "La prière enseignée par Jésus-Christ",
    color: "blue",
  },
  [PrayerCategory.HAIL_MARY]: {
    label: "Je vous salue Marie",
    icon: "🌹",
    description: "Salutation angélique et demande d'intercession",
    color: "rose",
  },
  [PrayerCategory.CREED]: {
    label: "Symboles de foi",
    icon: "✝",
    description: "Profession de foi trinitaire",
    color: "violet",
  },
  [PrayerCategory.ACTS]: {
    label: "Actes de foi",
    icon: "💝",
    description: "Actes de foi, espérance et charité",
    color: "amber",
  },
  [PrayerCategory.LITANY]: {
    label: "Litanies",
    icon: "📿",
    description: "Prières de supplication",
    color: "purple",
  },
  [PrayerCategory.ROSARY]: {
    label: "Rosaire",
    icon: "📿",
    description: "Méditation des mystères de la vie du Christ",
    color: "pink",
  },
  [PrayerCategory.LITURGICAL]: {
    label: "Prières liturgiques",
    icon: "⛪",
    description: "Prières de la liturgie sacrée",
    color: "green",
  },
  [PrayerCategory.MARIAN]: {
    label: "Prières mariales",
    icon: "👑",
    description: "Dévotion à la Vierge Marie",
    color: "blue",
  },
  [PrayerCategory.SAINT]: {
    label: "Prières aux saints",
    icon: "🏆",
    description: "Intercession des saints et anges",
    color: "yellow",
  },
  [PrayerCategory.EUCHARISTIC]: {
    label: "Prières eucharistiques",
    icon: "🍞",
    description: "Adoration et communion",
    color: "amber",
  },
  [PrayerCategory.PENITENTIAL]: {
    label: "Prières de pénitence",
    icon: "😔",
    description: "Repentir et contrition",
    color: "gray",
  },
  [PrayerCategory.MORNING]: {
    label: "Prières du matin",
    icon: "🌅",
    description: "Offrande de la journée",
    color: "orange",
  },
  [PrayerCategory.EVENING]: {
    label: "Prières du soir",
    icon: "🌙",
    description: "Action de grâce et examen",
    color: "indigo",
  },
  [PrayerCategory.MEAL]: {
    label: "Prières des repas",
    icon: "🍽️",
    description: "Bénédicité et grâces",
    color: "green",
  },
  [PrayerCategory.OTHER]: {
    label: "Autres prières",
    icon: "📜",
    description: "Prières diverses",
    color: "slate",
  },
};

export function LiturgyIndex({ initialCategory = "all" }: LiturgyIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<PrayerCategory | "all">(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrage
  const filteredPrayers = prayers.filter(prayer => {
    if (selectedCategory !== "all" && prayer.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        prayer.name.toLowerCase().includes(query) ||
        prayer.nameLatin?.toLowerCase().includes(query) ||
        prayer.tags?.some(t => t.toLowerCase().includes(query))
      );
    }
    return true;
  });

  // Comptage par catégorie
  const categoryCounts: Record<PrayerCategory, number> = {
    [PrayerCategory.OUR_FATHER]: 0,
    [PrayerCategory.HAIL_MARY]: 0,
    [PrayerCategory.CREED]: 0,
    [PrayerCategory.ACTS]: 0,
    [PrayerCategory.LITANY]: 0,
    [PrayerCategory.ROSARY]: 0,
    [PrayerCategory.LITURGICAL]: 0,
    [PrayerCategory.MARIAN]: 0,
    [PrayerCategory.SAINT]: 0,
    [PrayerCategory.EUCHARISTIC]: 0,
    [PrayerCategory.PENITENTIAL]: 0,
    [PrayerCategory.MORNING]: 0,
    [PrayerCategory.EVENING]: 0,
    [PrayerCategory.MEAL]: 0,
    [PrayerCategory.OTHER]: 0,
  };

  prayers.forEach(p => {
    categoryCounts[p.category]++;
  });

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">
          Prières & Liturgie
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Collection de prières catholiques en latin et français pour la dévotion privée et la
          liturgie.
        </p>
      </header>

      {/* Recherche */}
      <div>
        <input
          type="text"
          placeholder="Rechercher une prière..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-parchment-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-lg"
        />
      </div>

      {/* Filtres par catégorie */}
      <div>
        <p className="text-sm font-semibold text-ink-700 mb-3">Par catégorie</p>
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
            Toutes ({prayers.length})
          </button>
          {Object.entries(categoryConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as PrayerCategory)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                selectedCategory === key
                  ? `bg-${config.color}-600 text-white`
                  : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
              )}
            >
              <span>{config.icon}</span>
              <span>{config.label}</span>
              <span className="text-xs opacity-75">({categoryCounts[key as PrayerCategory]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Résultats */}
      <div>
        <p className="text-sm text-ink-500 mb-4">
          {filteredPrayers.length} prière{filteredPrayers.length > 1 ? "s" : ""}
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrayers.map(prayer => (
            <PrayerListItem key={prayer.slug} prayer={prayer} />
          ))}
        </div>

        {filteredPrayers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-ink-600 font-serif text-lg">
              Aucune prière ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface PrayerListItemProps {
  prayer: Prayer;
}

function PrayerListItem({ prayer }: PrayerListItemProps) {
  const config = categoryConfig[prayer.category];
  const excerpt = prayer.sections[0]?.verses[0] || prayer.sections[0]?.verses[1];

  return (
    <Link
      href={`/liturgy/${prayer.slug}`}
      className="block p-4 rounded-lg border border-parchment-200 bg-white hover:shadow-lg transition-all group"
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{config.icon}</span>
        <div className="flex-1">
          <h3 className="font-serif font-bold text-ink-900 group-hover:text-gold-600 transition-colors">
            {prayer.name}
          </h3>
          {prayer.nameLatin && <p className="text-sm text-ink-500 italic">{prayer.nameLatin}</p>}
        </div>
      </div>

      {excerpt && (
        <div className="bg-parchment-50 rounded p-2 mb-2">
          <p className="text-sm text-ink-700 line-clamp-2">{excerpt.french}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-xs px-2 py-1 bg-parchment-100 text-ink-600 rounded-full">
          {config.label}
        </span>
        {prayer.tags && prayer.tags.length > 0 && (
          <div className="flex gap-1">
            {prayer.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs text-ink-500 bg-parchment-50 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

/**
 * CompactPrayerList - Liste compacte pour sidebar
 */
export function CompactPrayerList({
  category,
  limit = 10,
}: {
  category?: PrayerCategory;
  limit?: number;
}) {
  const filtered = category ? prayers.filter(p => p.category === category) : prayers;

  const displayed = filtered.slice(0, limit);

  return (
    <ul className="space-y-1">
      {displayed.map(prayer => (
        <li key={prayer.slug}>
          <Link
            href={`/liturgy/${prayer.slug}`}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-parchment-100 transition-colors group"
          >
            <span className="text-lg">{categoryConfig[prayer.category].icon}</span>
            <span className="text-sm text-ink-700 group-hover:text-gold-600">{prayer.name}</span>
          </Link>
        </li>
      ))}
      {limit < filtered.length && (
        <li>
          <Link
            href="/liturgy"
            className="block px-3 py-2 text-sm text-gold-600 hover:text-gold-700"
          >
            Voir toutes les prières →
          </Link>
        </li>
      )}
    </ul>
  );
}

/**
 * DailyPrayers - Prières quotidiennes (matin, soir, repas)
 */
export function DailyPrayers() {
  const dailyPrayers = prayers.filter(
    p =>
      p.category === PrayerCategory.MORNING ||
      p.category === PrayerCategory.EVENING ||
      p.category === PrayerCategory.MEAL
  );

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-serif font-bold text-ink-900">Prières quotidiennes</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {dailyPrayers.map(prayer => (
          <Link
            key={prayer.slug}
            href={`/liturgy/${prayer.slug}`}
            className="flex items-center gap-3 p-3 rounded-lg border border-parchment-200 bg-white hover:shadow-md transition-all"
          >
            <span className="text-xl">{categoryConfig[prayer.category].icon}</span>
            <span className="font-medium text-ink-800">{prayer.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * EssentialPrayers - Prières essentielles à connaître
 */
export function EssentialPrayers() {
  const essentialSlugs = [
    "pater-noster",
    "ave-maria",
    "gloria-patri",
    "symbole-des-apotres",
    "acte-contrition",
  ];

  const essentialPrayers = prayers.filter(p => essentialSlugs.includes(p.slug));

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-serif font-bold text-ink-900">Prières essentielles</h2>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {essentialPrayers.map(prayer => (
          <Link
            key={prayer.slug}
            href={`/liturgy/${prayer.slug}`}
            className="flex items-center gap-3 p-4 rounded-lg border-2 border-parchment-200 bg-white hover:border-gold-300 hover:shadow-md transition-all"
          >
            <span className="text-2xl">{categoryConfig[prayer.category].icon}</span>
            <div>
              <p className="font-medium text-ink-800">{prayer.name}</p>
              {prayer.nameLatin && (
                <p className="text-xs text-ink-500 italic truncate">{prayer.nameLatin}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
