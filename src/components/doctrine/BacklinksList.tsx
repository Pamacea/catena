/**
 * BacklinksList - Liste des notes qui pointent vers cette hérésie
 *
 * Style Obsidian : affiche les connexions entre les différentes
 * entrées (hérésies, conciles, catéchismes, passages bibliques).
 *
 * @example
 * ```tsx
 * <BacklinksList
 *   backlinks={[
 *     { source: 'nestorianisme', type: 'heresy', title: 'Nestorianisme', context: '...' },
 *     { source: 'ephese-431', type: 'council', title: "Concile d'Éphèse" }
 *   ]}
 *   variant="detailed"
 * />
 * ```
 */

import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Représente un backlink vers une entité.
 */
interface Backlink {
  /** Slug de la page source */
  source: string;
  /** Type de l'entité source */
  type: "heresy" | "council" | "catechism" | "bible";
  /** Titre de la source */
  title: string;
  /** Extrait du contexte autour de la référence */
  context?: string;
}

/**
 * Props pour le composant BacklinksList.
 */
interface BacklinksListProps {
  /** Liste des backlinks à afficher */
  backlinks: Backlink[];
  /** Titre de la section */
  title?: string;
  /** Variante visuelle */
  variant?: "default" | "compact" | "detailed";
}

const typeConfig = {
  heresy: {
    label: "Hérésie",
    color: "bg-red-100 text-red-700 border-red-200",
    href: (slug: string) => `/doctrine/${slug}`,
  },
  council: {
    label: "Concile",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    href: (slug: string) => `/councils/${slug}`,
  },
  catechism: {
    label: "Catéchisme",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    href: (slug: string) => `/catechism/${slug}`,
  },
  bible: {
    label: "Écriture",
    color: "bg-green-100 text-green-700 border-green-200",
    href: (slug: string) => `/bible/${slug}`,
  },
};

export function BacklinksList({
  backlinks,
  title = "Référencé dans",
  variant = "default",
}: BacklinksListProps) {
  if (backlinks.length === 0) {
    return null;
  }

  if (variant === "compact") {
    return (
      <div className="space-y-2">
        <p className="text-sm font-semibold text-ink-700">{title}</p>
        <ul className="flex flex-wrap gap-2">
          {backlinks.map(backlink => {
            const config = typeConfig[backlink.type];
            return (
              <li key={backlink.source}>
                <Link
                  href={config.href(backlink.source)}
                  className={cn(
                    "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border",
                    config.color,
                    "hover:opacity-80 transition-opacity"
                  )}
                >
                  <span>{config.label}</span>
                  <span>→</span>
                  <span className="font-medium">{backlink.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <section className="border border-parchment-200 rounded-lg overflow-hidden">
        <header className="bg-parchment-50 px-4 py-3 border-b border-parchment-200">
          <h3 className="font-semibold text-ink-800 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-ink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            {title} ({backlinks.length})
          </h3>
        </header>

        <ul className="divide-y divide-parchment-200">
          {backlinks.map(backlink => {
            const config = typeConfig[backlink.type];
            return (
              <li key={backlink.source} className="p-4 hover:bg-parchment-50 transition-colors">
                <Link href={config.href(backlink.source)} className="flex items-start gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border mt-0.5",
                      config.color
                    )}
                  >
                    {config.label}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-medium text-ink-800 hover:text-gold-700 transition-colors">
                      {backlink.title}
                    </h4>
                    {backlink.context && (
                      <p className="text-sm text-ink-600 mt-1 line-clamp-2">{backlink.context}</p>
                    )}
                  </div>
                  <svg
                    className="w-5 h-5 text-ink-400 mt-0.5"
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
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  // Variant 'default'
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider">{title}</h3>
      <ul className="space-y-2">
        {backlinks.map(backlink => {
          const config = typeConfig[backlink.type];
          return (
            <li key={backlink.source}>
              <Link
                href={config.href(backlink.source)}
                className="flex items-center gap-2 p-3 rounded-lg border border-parchment-200 bg-white hover:shadow-md transition-shadow group"
              >
                <span
                  className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border",
                    config.color
                  )}
                >
                  {config.label}
                </span>
                <span className="flex-1 font-medium text-ink-800 group-hover:text-gold-700 transition-colors">
                  {backlink.title}
                </span>
                <svg
                  className="w-4 h-4 text-ink-400 group-hover:text-gold-600"
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * BacklinkBadge - Badge unique pour sidebar
 */
interface BacklinkBadgeProps {
  count: number;
  type?: "all" | "heresy" | "council" | "catechism" | "bible";
}

export function BacklinkBadge({ count, type = "all" }: BacklinkBadgeProps) {
  if (count === 0) return null;

  const colors = {
    all: "bg-ink-100 text-ink-700",
    heresy: "bg-red-100 text-red-700",
    council: "bg-purple-100 text-purple-700",
    catechism: "bg-blue-100 text-blue-700",
    bible: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        colors[type]
      )}
    >
      {count}
    </span>
  );
}

/**
 * ConnectionGraph - Représentation visuelle des connexions
 */
interface Connection {
  slug: string;
  type: "preceded" | "succeeded" | "related" | "refuted";
  title: string;
}

interface ConnectionGraphProps {
  connections: Connection[];
  currentSlug: string;
}

export function ConnectionGraph({ connections, currentSlug }: ConnectionGraphProps) {
  const connectionLabels = {
    preceded: "Précédée par",
    succeeded: "Suivie par",
    related: "Liée à",
    refuted: "Condamnée par",
  };

  const connectionColors = {
    preceded: "border-l-amber-400",
    succeeded: "border-l-green-400",
    related: "border-l-blue-400",
    refuted: "border-l-red-400",
  };

  // Grouper par type
  const grouped: Record<string, Connection[]> = {};
  connections.forEach(c => {
    if (!grouped[c.type]) grouped[c.type] = [];
    grouped[c.type].push(c);
  });

  if (connections.length === 0) {
    return <p className="text-sm text-ink-500 italic">Aucune connexion documentée.</p>;
  }

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-ink-700">Connexions</h4>

      {Object.entries(grouped).map(([type, conns]) => (
        <div key={type} className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-ink-500">
            {connectionLabels[type as keyof typeof connectionLabels]}
          </p>
          <div className="space-y-1">
            {conns.map(conn => (
              <Link
                key={conn.slug}
                href={`/doctrine/${conn.slug}`}
                className={cn(
                  "block px-3 py-2 rounded border-l-2 bg-white hover:shadow transition-all",
                  connectionColors[conn.type as keyof typeof connectionColors]
                )}
              >
                <span className="text-sm text-ink-700">{conn.title}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
