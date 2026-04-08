import Link from "next/link";
import {
  type ChronologyEvent,
  ChronologyEventType,
  formatYear,
} from "@/data/chronology";

interface ChronologyEventCardProps {
  event: ChronologyEvent;
}

const typeConfig: Record<
  ChronologyEventType,
  { color: string; bgColor: string; label: string }
> = {
  [ChronologyEventType.COUNCIL]: {
    color: "bg-gold-500",
    bgColor: "bg-gold-50 border-gold-400/30",
    label: "Concile",
  },
  [ChronologyEventType.HERESY]: {
    color: "bg-liturgical-red",
    bgColor: "bg-red-50 border-liturgical-red/30",
    label: "Hérésie",
  },
  [ChronologyEventType.BIBLE_BOOK]: {
    color: "bg-liturgical-blue",
    bgColor: "bg-blue-50 border-liturgical-blue/30",
    label: "Livre biblique",
  },
  [ChronologyEventType.HISTORICAL]: {
    color: "bg-liturgical-green",
    bgColor: "bg-green-50 border-liturgical-green/30",
    label: "Événement",
  },
};

export function ChronologyEventCard({ event }: ChronologyEventCardProps) {
  const config = typeConfig[event.type];
  const dateStr = event.yearEnd
    ? `${formatYear(event.year)} — ${formatYear(event.yearEnd)}`
    : formatYear(event.year);

  const content = (
    <div
      className={`group flex items-start gap-3 p-4 rounded-xs border transition-all ${config.bgColor} hover:shadow-md`}
    >
      {/* Dot indicator */}
      <span
        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xs text-white text-xs font-bold ${config.color} mt-0.5`}
      >
        {event.type === ChronologyEventType.COUNCIL ? (
          event.name.match(/\d+/)?.[0] || "†"
        ) : event.type === ChronologyEventType.BIBLE_BOOK ? (
          "📖"
        ) : event.type === ChronologyEventType.HERESY ? (
          "✝"
        ) : (
          "◆"
        )}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-xs px-2 py-0.5 rounded-xs bg-parchment-200 text-ink-600 font-medium">
            {config.label}
          </span>
          <span className="text-xs text-ink-500">{dateStr}</span>
          {event.location && (
            <span className="text-xs text-ink-500">
              · {event.location}
            </span>
          )}
        </div>
        <h4 className="font-serif font-semibold text-ink-900 group-hover:text-gold-700 transition-colors">
          {event.name}
        </h4>
        <p className="text-sm text-ink-700 leading-relaxed mt-1 line-clamp-2">
          {event.description}
        </p>
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {event.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs px-1.5 py-0.5 rounded-xs bg-parchment-200/70 text-ink-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (event.href) {
    return (
      <Link href={event.href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
