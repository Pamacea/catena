/**
 * HeresyCard - Carte résumant une hérésie
 *
 * Affichage compact d'une hérésie avec son nom, promoteur,
 * condamnation, et lien vers la page détaillée.
 *
 * @example
 * ```tsx
 * <HeresyCard
 *   slug="arianisme"
 *   name="Arianisme"
 *   nameLatin="Arianismus"
 *   category={HeresyCategory.CHRISTOLOGICAL}
 *   century={4}
 *   origin="Alexandrie"
 *   promoter="Arius"
 *   description="Niant la divinité du Christ..."
 *   error="Le Fils est une créature..."
 *   condemnations={[...]}
 * />
 * ```
 */

import { cn } from "@/lib/utils";
import Link from "next/link";
import { HeresyCategory, CondemnationType } from "@/data/seed";

/**
 * Props pour le composant HeresyCard.
 */
interface HeresyCardProps {
  /** Slug unique de l'hérésie */
  slug: string;
  /** Nom de l'hérésie */
  name: string;
  /** Nom en latin */
  nameLatin?: string;
  /** Catégorie doctrinale de l'hérésie */
  category: HeresyCategory;
  /** Siècle d'apparition */
  century: number;
  /** Lieu d'origine */
  origin: string;
  /** Promoteur principal de l'hérésie */
  promoter: string;
  /** Description de l'hérésie */
  description: string;
  /** Erreur principale condamnée */
  error: string;
  /** Condamnations officielles */
  condemnations: Array<{
    type: CondemnationType;
    authority: string;
    year: number;
  }>;
  /** Variante visuelle de la carte */
  variant?: "default" | "compact" | "detailed";
}

const categoryColors: Record<HeresyCategory, string> = {
  [HeresyCategory.CHRISTOLOGICAL]: "border-l-rose-600 bg-rose-50",
  [HeresyCategory.TRINITARIAN]: "border-l-violet-600 bg-violet-50",
  [HeresyCategory.ANTHROPOLOGICAL]: "border-l-amber-600 bg-amber-50",
  [HeresyCategory.ECCLESIOLOGICAL]: "border-l-emerald-600 bg-emerald-50",
  [HeresyCategory.ESCHATOLOGICAL]: "border-l-slate-600 bg-slate-50",
  [HeresyCategory.SCRIPTURAL]: "border-l-cyan-600 bg-cyan-50",
  [HeresyCategory.SACRAMENTAL]: "border-l-orange-600 bg-orange-50",
};

const categoryLabels: Record<HeresyCategory, string> = {
  [HeresyCategory.CHRISTOLOGICAL]: "Christologique",
  [HeresyCategory.TRINITARIAN]: "Trinitaire",
  [HeresyCategory.ANTHROPOLOGICAL]: "Anthropologique",
  [HeresyCategory.ECCLESIOLOGICAL]: "Ecclésiologique",
  [HeresyCategory.ESCHATOLOGICAL]: "Eschatologique",
  [HeresyCategory.SCRIPTURAL]: "Scripturaire",
  [HeresyCategory.SACRAMENTAL]: "Sacramentel",
};

const condemnationTypeLabels: Record<CondemnationType, string> = {
  [CondemnationType.COUNCIL]: "Concile",
  [CondemnationType.SYNOD]: "Synode",
  [CondemnationType.PAPAL_BULL]: "Bulle pontificale",
  [CondemnationType.ENCYCLICAL]: "Encyclique",
};

export function HeresyCard({
  slug,
  name,
  nameLatin,
  category,
  century,
  origin,
  promoter,
  description,
  error,
  condemnations,
  variant = "default",
}: HeresyCardProps) {
  const cardClass = categoryColors[category];

  if (variant === "compact") {
    return (
      <Link
        href={`/doctrine/${slug}`}
        className={cn(
          "block p-4 rounded-lg border border-parchment-200 bg-white",
          "hover:shadow-md transition-shadow",
          "border-l-4",
          category
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-bold text-ink-900">{name}</h3>
            <p className="text-sm text-ink-500">
              {century}
              <sup>e</sup> siècle • {promoter}
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-parchment-100 text-ink-600 whitespace-nowrap">
            {categoryLabels[category]}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-parchment-200 bg-white",
        "hover:shadow-lg transition-shadow",
        "border-l-4",
        cardClass
      )}
    >
      <Link href={`/doctrine/${slug}`} className="block p-6 space-y-4">
        {/* En-tête */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-serif font-bold text-ink-900">{name}</h3>
            {nameLatin && <p className="text-sm text-ink-500 italic mt-1">{nameLatin}</p>}
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-white border border-parchment-300 text-ink-700 whitespace-nowrap">
            {categoryLabels[category]}
          </span>
        </div>

        {/* Métadonnées */}
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="flex items-center gap-1 text-ink-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {century}
            <sup>e</sup> siècle
          </span>
          <span className="flex items-center gap-1 text-ink-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {origin}
          </span>
          <span className="flex items-center gap-1 text-ink-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {promoter}
          </span>
        </div>

        {/* Description */}
        <p className="text-ink-700 leading-relaxed">{description}</p>

        {/* Erreur principale */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-red-800 mb-1">Erreur condamnée</p>
          <p className="text-red-700">{error}</p>
        </div>

        {/* Condamnations */}
        {variant === "detailed" && condemnations.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-ink-700">Condamnations :</p>
            <ul className="space-y-1">
              {condemnations.map((c, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-ink-600">
                  <span className="text-red-500">✝</span>
                  <span>
                    {condemnationTypeLabels[c.type]} de {c.authority} ({c.year})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Link>
    </article>
  );
}

/**
 * HeresySummary - Version encore plus compacte pour les listes
 */
interface HeresySummaryProps {
  slug: string;
  name: string;
  category: HeresyCategory;
  century: number;
  promoter: string;
}

export function HeresySummary({ slug, name, category, century, promoter }: HeresySummaryProps) {
  return (
    <Link
      href={`/doctrine/${slug}`}
      className="flex items-center gap-3 px-3 py-2 rounded hover:bg-parchment-100 transition-colors group"
    >
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          category === HeresyCategory.CHRISTOLOGICAL && "bg-rose-500",
          category === HeresyCategory.TRINITARIAN && "bg-violet-500",
          category === HeresyCategory.ANTHROPOLOGICAL && "bg-amber-500",
          category === HeresyCategory.ECCLESIOLOGICAL && "bg-emerald-500",
          category === HeresyCategory.ESCHATOLOGICAL && "bg-slate-500",
          category === HeresyCategory.SCRIPTURAL && "bg-cyan-500",
          category === HeresyCategory.SACRAMENTAL && "bg-orange-500"
        )}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-ink-800 group-hover:text-gold-700 transition-colors">
          {name}
        </p>
        <p className="text-xs text-ink-500">
          {century}
          <sup>e</sup> s. • {promoter}
        </p>
      </div>
    </Link>
  );
}
