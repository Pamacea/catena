/**
 * CouncilTimeline - Frise chronologique des conciles
 *
 * Visualisation temporelle des 21 conciles œcuméniques
 * avec possibilité de filtrer par siècle ou période.
 */

import { councils, type Council } from "@/data/seed";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface CouncilTimelineProps {
  filter?: "all" | "ancient" | "medieval" | "modern";
  initialCentury?: number;
}

const periodLabels = {
  ancient: "Antiquité (Ier - VIIIe s.)",
  medieval: "Moyen Âge (IXe - XVe s.)",
  modern: "Époque moderne (XVIe - XXe s.)",
};

export function CouncilTimeline({ filter = "all", initialCentury }: CouncilTimelineProps) {
  const [selectedCouncil, setSelectedCouncil] = useState<string | null>(null);
  const [hoveredCouncil, setHoveredCouncil] = useState<string | null>(null);

  // Organiser par siècle
  const councilsByCentury: Record<number, Council[]> = {};
  councils.forEach(council => {
    const century = Math.floor(council.year / 100) + 1;
    if (!councilsByCentury[century]) {
      councilsByCentury[century] = [];
    }
    councilsByCentury[century].push(council);
  });

  const centuries = Object.keys(councilsByCentury)
    .map(Number)
    .sort((a, b) => a - b);

  // Filtrer par période
  let filteredCenturies = centuries;
  if (filter === "ancient") {
    filteredCenturies = centuries.filter(c => c <= 8);
  } else if (filter === "medieval") {
    filteredCenturies = centuries.filter(c => c >= 9 && c <= 15);
  } else if (filter === "modern") {
    filteredCenturies = centuries.filter(c => c >= 16);
  }

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">
          Conciles Œcuméniques
        </h1>
        <p className="text-ink-600 max-w-2xl">
          Les 21 conciles œcuméniques reconnus par l'Église catholique, de Nicée I (325) à Vatican
          II (1965).
        </p>
      </header>

      {/* Filtres de période */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => (window.location.href = "/timeline")}
          className={cn(
            "px-4 py-2 rounded-lg transition-colors",
            filter === "all"
              ? "bg-gold-500 text-white"
              : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
          )}
        >
          Tous les siècles
        </button>
        <button
          onClick={() => (window.location.href = "/timeline?period=ancient")}
          className={cn(
            "px-4 py-2 rounded-lg transition-colors",
            filter === "ancient"
              ? "bg-liturgical-purple text-white"
              : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
          )}
        >
          Antiquité
        </button>
        <button
          onClick={() => (window.location.href = "/timeline?period=medieval")}
          className={cn(
            "px-4 py-2 rounded-lg transition-colors",
            filter === "medieval"
              ? "bg-liturgical-green text-white"
              : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
          )}
        >
          Moyen Âge
        </button>
        <button
          onClick={() => (window.location.href = "/timeline?period=modern")}
          className={cn(
            "px-4 py-2 rounded-lg transition-colors",
            filter === "modern"
              ? "bg-liturgical-red text-white"
              : "bg-parchment-100 text-ink-700 hover:bg-parchment-200"
          )}
        >
          Époque moderne
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-parchment-300" />

        <div className="space-y-12">
          {filteredCenturies.map(century => (
            <CenturySection
              key={century}
              century={century}
              councils={councilsByCentury[century]!}
              selectedCouncil={selectedCouncil}
              setSelectedCouncil={setSelectedCouncil}
              hoveredCouncil={hoveredCouncil}
              setHoveredCouncil={setHoveredCouncil}
            />
          ))}
        </div>
      </div>

      {/* Légende */}
      <div className="bg-parchment-50 rounded-lg p-4 border border-parchment-200">
        <h3 className="text-sm font-semibold text-ink-700 mb-2">Légende</h3>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gold-400" />
            <span>Concile dogmatique</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400" />
            <span>Réforme disciplinaire</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span>Union avec les Orientaux</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CenturySectionProps {
  century: number;
  councils: Council[];
  selectedCouncil: string | null;
  setSelectedCouncil: (slug: string | null) => void;
  hoveredCouncil: string | null;
  setHoveredCouncil: (slug: string | null) => void;
}

function CenturySection({
  century,
  councils,
  selectedCouncil,
  setSelectedCouncil,
  hoveredCouncil,
  setHoveredCouncil,
}: CenturySectionProps) {
  return (
    <div className="relative">
      {/* Indicateur de siècle */}
      <div className="absolute left-0 md:left-6 -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
          {century}
        </div>
        <span className="text-xs text-ink-500 mt-1">e siècle</span>
      </div>

      {/* Contenu */}
      <div className="ml-12 md:ml-16 space-y-3">
        <h3 className="text-lg font-serif font-bold text-ink-800">
          {century}
          <sup>e</sup> siècle
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {councils.map(council => (
            <TimelineCouncil
              key={council.slug}
              council={council}
              isSelected={selectedCouncil === council.slug}
              isHovered={hoveredCouncil === council.slug}
              onSelect={() =>
                setSelectedCouncil(selectedCouncil === council.slug ? null : council.slug)
              }
              onHover={() => setHoveredCouncil(council.slug)}
              onLeave={() => setHoveredCouncil(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineCouncilProps {
  council: Council;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHover: () => void;
  onLeave: () => void;
}

function TimelineCouncil({
  council,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  onLeave,
}: TimelineCouncilProps) {
  const hasHeresyCondemnations = council.heresiesCondemned && council.heresiesCondemned.length > 0;

  return (
    <Link
      href={`/timeline/${council.slug}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "block p-4 rounded-lg border transition-all",
        "bg-white",
        isSelected || isHovered
          ? "border-gold-400 shadow-lg"
          : "border-parchment-200 hover:shadow-md"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Numéro du concile */}
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-parchment-100 text-ink-700 rounded-full font-bold text-sm">
          {council.number}
        </span>

        <div className="flex-1 min-w-0">
          {/* Nom du concile */}
          <h4 className="font-serif font-bold text-ink-900">{council.name}</h4>
          <p className="text-sm text-ink-500 italic">{council.nameLatin}</p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-ink-600">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {council.year}
              {council.yearEnd && ` - ${council.yearEnd}`}
            </span>
            <span>•</span>
            <span>{council.location}</span>
            <span>•</span>
            <span>{council.participants} pères</span>
          </div>

          {/* Topics principaux */}
          <div className="flex flex-wrap gap-1 mt-2">
            {council.topics.slice(0, 3).map(topic => (
              <span
                key={topic}
                className="text-xs bg-parchment-100 text-ink-600 px-2 py-0.5 rounded"
              >
                {topic}
              </span>
            ))}
            {council.topics.length > 3 && (
              <span className="text-xs text-ink-500">+{council.topics.length - 3}</span>
            )}
          </div>

          {/* Hérésies condamnées */}
          {hasHeresyCondemnations && (
            <div className="mt-2 pt-2 border-t border-parchment-100">
              <p className="text-xs text-red-600 font-medium">
                ✝ {council.heresiesCondemned!.length} hérésie
                {council.heresiesCondemned!.length > 1 ? "s" : ""} condamnée
                {council.heresiesCondemned!.length > 1 ? "s" : ""}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

/**
 * CompactTimeline - Timeline horizontale compacte
 */
interface CompactTimelineProps {
  councilSlug?: string;
}

export function CompactTimeline({ councilSlug }: CompactTimelineProps) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="flex gap-1 min-w-max">
        {councils.map(council => (
          <Link
            key={council.slug}
            href={`/timeline/${council.slug}`}
            className={cn(
              "flex flex-col items-center gap-1 px-2 py-1 rounded transition-colors",
              councilSlug === council.slug
                ? "bg-gold-100 text-gold-800"
                : "hover:bg-parchment-100 text-ink-600"
            )}
          >
            <span className="text-lg font-bold">{council.number}</span>
            <span className="text-xs">{council.year}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * CenturyNavigation - Navigation par siècle
 */
interface CenturyNavigationProps {
  currentCentury?: number;
}

export function CenturyNavigation({ currentCentury }: CenturyNavigationProps) {
  const centuries = Array.from(new Set(councils.map(c => Math.floor(c.year / 100) + 1))).sort(
    (a, b) => a - b
  );

  return (
    <nav className="space-y-4">
      <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider">Par siècle</h3>
      <ul className="space-y-1">
        {centuries.map(century => {
          const centuryCouncils = councils.filter(c => Math.floor(c.year / 100) + 1 === century);
          return (
            <li key={century}>
              <Link
                href={`/timeline?century=${century}`}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded transition-colors",
                  currentCentury === century
                    ? "bg-gold-100 text-gold-800 font-medium"
                    : "hover:bg-parchment-100 text-ink-700"
                )}
              >
                <span>
                  {century}
                  <sup>e</sup> siècle
                </span>
                <span className="text-xs text-ink-500">
                  {centuryCouncils.length} concile
                  {centuryCouncils.length > 1 ? "s" : ""}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
