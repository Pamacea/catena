"use client";

import { useState } from "react";
import {
  type ChronologyEvent,
  ChronologyEventType,
  getEras,
  formatYear,
} from "@/data/chronology";
import { ChronologyEventCard } from "./ChronologyEventCard";

interface ChronologyTimelineProps {
  events: ChronologyEvent[];
}

const filterConfig: { type: ChronologyEventType; label: string; color: string }[] = [
  { type: ChronologyEventType.COUNCIL, label: "Conciles", color: "bg-gold-500" },
  { type: ChronologyEventType.HERESY, label: "Hérésies", color: "bg-liturgical-red" },
  { type: ChronologyEventType.BIBLE_BOOK, label: "Livres bibliques", color: "bg-liturgical-blue" },
  { type: ChronologyEventType.HISTORICAL, label: "Événements", color: "bg-liturgical-green" },
];

export function ChronologyTimeline({ events }: ChronologyTimelineProps) {
  const [activeFilters, setActiveFilters] = useState<Set<ChronologyEventType>>(
    new Set([
      ChronologyEventType.COUNCIL,
      ChronologyEventType.HERESY,
      ChronologyEventType.BIBLE_BOOK,
      ChronologyEventType.HISTORICAL,
    ])
  );

  const toggleFilter = (type: ChronologyEventType) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const selectAll = () => {
    setActiveFilters(
      new Set([
        ChronologyEventType.COUNCIL,
        ChronologyEventType.HERESY,
        ChronologyEventType.BIBLE_BOOK,
        ChronologyEventType.HISTORICAL,
      ])
    );
  };

  const filteredEvents = events.filter(e => activeFilters.has(e.type));
  const eras = getEras();

  // Group events by era
  const eventsByEra = eras
    .map(era => ({
      ...era,
      events: filteredEvents.filter(
        e => e.year >= era.startYear && e.year < era.endYear
      ),
    }))
    .filter(era => era.events.length > 0);

  const allActive = activeFilters.size === 4;

  return (
    <div className="space-y-8">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={selectAll}
          className={`px-4 py-2 rounded-xs text-sm font-medium transition-all ${
            allActive
              ? "bg-ink-900 text-white"
              : "bg-parchment-100 text-ink-700 hover:bg-parchment-200 border border-gold-400/30"
          }`}
        >
          Tous ({events.length})
        </button>
        {filterConfig.map(f => {
          const isActive = activeFilters.has(f.type);
          const count = events.filter(e => e.type === f.type).length;
          return (
            <button
              key={f.type}
              onClick={() => toggleFilter(f.type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xs text-sm font-medium transition-all ${
                isActive
                  ? "bg-parchment-200 text-ink-900 border border-gold-400/50"
                  : "bg-parchment-100/50 text-ink-500 hover:bg-parchment-100 border border-gold-400/20"
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-xs ${f.color}`} />
              {f.label}
              <span className="text-xs text-ink-500">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-parchment-300" />

        <div className="space-y-12">
          {eventsByEra.map(era => (
            <section key={era.label} className="relative">
              {/* Era marker */}
              <div className="absolute left-0 md:left-4 -translate-x-1/2 flex flex-col items-center z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-xs shadow-lg text-center leading-tight">
                  {era.startYear <= 0
                    ? `${Math.abs(era.startYear - 1)}`
                    : `${era.startYear}`}
                </div>
              </div>

              {/* Era content */}
              <div className="ml-12 md:ml-20 space-y-4">
                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold text-ink-900">
                    {era.label}
                  </h3>
                  <p className="text-sm text-ink-500">
                    {formatYear(era.startYear)} — {formatYear(era.endYear)}
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {era.events.map(event => (
                    <ChronologyEventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-parchment-50 rounded-xs p-4 border border-gold-400/20">
        <h3 className="text-sm font-semibold text-ink-700 mb-2">Légende</h3>
        <div className="flex flex-wrap gap-4 text-xs">
          {filterConfig.map(f => (
            <div key={f.type} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-xs ${f.color}`} />
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
