import Link from "next/link";
import {
  dogmas,
  DogmaCategory,
  dogmaCategoryLabels,
  getDogmasByCategory,
} from "@/data/dogmas";

export const metadata = {
  title: "Dogmes et Vérités de Foi",
  description:
    "Les dogmes définis par l'Église catholique à travers les conciles œcuméniques, les bulles pontificales et les encycliques.",
};

interface DogmasPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function DogmasPage({ searchParams }: DogmasPageProps) {
  const params = await searchParams;
  const categoryParam = params.category;

  let filteredDogmas = dogmas;
  let activeFilter = "";

  if (categoryParam) {
    filteredDogmas = getDogmasByCategory(categoryParam as DogmaCategory);
    activeFilter = dogmaCategoryLabels[categoryParam as DogmaCategory]?.name || categoryParam;
  }

  return (
    <>
      {/* Filtres par catégorie */}
      <section className="mb-10">
        <h2 className="font-serif text-lg font-semibold text-ink-900 mb-3">
          Par catégorie
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/dogmas"
            className={
              !categoryParam
                ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                : "px-4 py-2 rounded-xs bg-gold-50 text-ink-800 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
            }
          >
            Tous
          </Link>
          {Object.entries(dogmaCategoryLabels).map(([key, { name }]) => (
            <Link
              key={key}
              href={`/dogmas?category=${key}`}
              className={
                categoryParam === key
                  ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                  : "px-4 py-2 rounded-xs bg-gold-50 text-ink-800 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
              }
            >
              {name}
              <span className="ml-2 opacity-60">
                ({getDogmasByCategory(key as DogmaCategory).length})
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Liste des dogmes */}
      <section>
        <h2 className="font-serif text-lg font-semibold text-ink-900 mb-4">
          {activeFilter ? (
            <span>
              <Link href="/dogmas" className="text-ink-600 hover:text-ink-900 mr-2">
                ← Retour
              </Link>
              {activeFilter} ({filteredDogmas.length})
            </span>
          ) : (
            <span>Tous les dogmes ({dogmas.length})</span>
          )}
        </h2>

        <div className="space-y-1">
          {filteredDogmas.map(dogma => {
            const cat = dogmaCategoryLabels[dogma.category];
            return (
              <Link
                key={dogma.slug}
                href={`/dogmas/${dogma.slug}`}
                className="group flex items-start gap-4 p-4 rounded-xs border border-transparent hover:border-gold-400/40 hover:bg-parchment-50/50 transition-all"
              >
                {/* Catégorie */}
                <span className="text-xs text-ink-500 w-28 flex-shrink-0 pt-1">
                  {cat.name}
                </span>

                {/* Nom et définition */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-ink-900 group-hover:underline font-medium">
                      {dogma.name}
                    </span>
                    {dogma.nameLatin && (
                      <span className="text-sm text-ink-500 italic hidden sm:inline">
                        ({dogma.nameLatin})
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-600 mt-1 line-clamp-2">
                    {dogma.definition}
                  </p>
                </div>

                {/* Source */}
                {dogma.sources[0] && (
                  <span className="text-xs text-stone-500 flex-shrink-0 hidden lg:block pt-1">
                    {dogma.sources[0].authority} ({dogma.sources[0].year})
                  </span>
                )}

                {/* Flèche */}
                <span className="text-ink-600 opacity-0 group-hover:opacity-100 transition-opacity pt-1">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Légende */}
      <section className="mt-12 pt-6 border-t border-gold-400/40">
        <h3 className="text-sm font-semibold text-ink-700 mb-3">
          Catégories de dogmes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(dogmaCategoryLabels).map(([key, { name, description }]) => (
            <div key={key} className="text-sm">
              <span className="font-medium text-ink-700">{name}</span>
              <p className="text-ink-500 text-xs mt-0.5">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
