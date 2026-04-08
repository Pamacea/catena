import Link from "next/link";
import {
  heresies,
  HeresyCategory,
  getHeresiesByCategory,
  getHeresiesByCentury,
} from "@/data/heresies";

export const metadata = {
  title: "Doctrine - Hérésies et Condamnations",
  description: "Histoire des hérésies chrétiennes et leurs condamnations par l'Église",
};

// Labels pour les catégories
const categoryLabels: Record<HeresyCategory, { name: string; color: string }> = {
  [HeresyCategory.CHRISTOLOGICAL]: { name: "Christologiques", color: "liturgical-red" },
  [HeresyCategory.TRINITARIAN]: { name: "Trinitaires", color: "liturgical-blue" },
  [HeresyCategory.ANTHROPOLOGICAL]: { name: "Anthropologiques", color: "liturgical-green" },
  [HeresyCategory.ECCLESIOLOGICAL]: { name: "Ecclésiologiques", color: "liturgical-purple" },
  [HeresyCategory.ESCHATOLOGICAL]: { name: "Eschatologiques", color: "liturgical-purple" },
  [HeresyCategory.SACRAMENTAL]: { name: "Sacramentelles", color: "gold" },
  [HeresyCategory.SCRIPTURAL]: { name: "Scripturaires", color: "ink" },
};

// Siècles représentés
const centuries = Array.from(new Set(heresies.map(h => h.century))).sort((a, b) => a - b);

interface DoctrinePageProps {
  searchParams: Promise<{
    category?: string;
    century?: string;
  }>;
}

export default async function DoctrinePage({ searchParams }: DoctrinePageProps) {
  const params = await searchParams;
  const categoryParam = params.category;
  const centuryParam = params.century;

  // Filtrage des hérésies
  let filteredHeresies = heresies;
  let activeFilter = "";

  if (categoryParam) {
    filteredHeresies = getHeresiesByCategory(categoryParam as HeresyCategory);
    activeFilter = categoryLabels[categoryParam as HeresyCategory]?.name || categoryParam;
  } else if (centuryParam) {
    const centuryNum = parseInt(centuryParam);
    filteredHeresies = getHeresiesByCentury(centuryNum);
    activeFilter = `${centuryNum}${centuryNum === 1 ? "er" : "e"} siècle`;
  }
  return (
    <div>
      {/* Header */}
      <header className="mb-12">
        <h1 className="font-serif text-4xl font-bold text-ink-900 dark:text-ink-100 mb-4">
          Hérésies et Condamnations
        </h1>
        <p className="text-lg text-ink-700 dark:text-ink-300 max-w-3xl">
          Les principales hérésies condamnées par l'Église catholique, avec leurs erreurs, leurs
          réfutations patristiques, et les condamnations conciliaires ou pontificales.
        </p>
      </header>

      {/* Filtres par catégorie */}
      <section className="mb-8">
        <h2 className="font-serif text-lg font-semibold text-ink-900 dark:text-ink-100 mb-3">
          Par catégorie
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/doctrine"
            className={
              !categoryParam
                ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                : "px-4 py-2 rounded-xs bg-gold-50 text-ink-800 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
            }
          >
            Tous
          </Link>
          {Object.entries(categoryLabels).map(([key, { name }]) => (
            <Link
              key={key}
              href={`/doctrine?category=${key}`}
              className={
                categoryParam === key
                  ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                  : "px-4 py-2 rounded-xs bg-gold-50 text-ink-800 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
              }
            >
              {name}
              <span className="ml-2 opacity-60">
                ({getHeresiesByCategory(key as HeresyCategory).length})
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Filtres par siècle */}
      <section className="mb-10">
        <h2 className="font-serif text-lg font-semibold text-ink-900 dark:text-ink-100 mb-3">
          Par siècle
        </h2>
        <div className="flex flex-wrap gap-2">
          {centuries.map(century => (
            <Link
              key={century}
              href={`/doctrine?century=${century}`}
              className={
                centuryParam === String(century)
                  ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                  : "px-4 py-2 rounded-xs bg-gold-50 text-ink-700 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
              }
            >
              {century}
              {century === 1 ? "er" : "e"} siècle
              <span className="ml-2 opacity-60">({getHeresiesByCentury(century).length})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Liste complète - layout ligne par ligne */}
      <section>
        <h2 className="font-serif text-lg font-semibold text-ink-900 dark:text-ink-100 mb-4">
          {activeFilter ? (
            <span>
              <Link href="/doctrine" className="text-ink-600 hover:text-ink-900 mr-2">
                ← Retour
              </Link>
              {activeFilter} ({filteredHeresies.length})
            </span>
          ) : (
            <span>Toutes les hérésies ({heresies.length})</span>
          )}
        </h2>

        <div className="space-y-1">
          {filteredHeresies.map(heresy => {
            const cat = categoryLabels[heresy.category];
            return (
              <Link
                key={heresy.slug}
                href={`/doctrine/${heresy.slug}`}
                className="group flex items-center gap-4 p-3 rounded-xs border border-transparent hover:border-gold-400/40 dark:hover:border-gold-400/40 hover:bg-parchment-50/50 dark:hover:bg-amber-800/50 transition-all"
              >
                {/* Siècle */}
                <span className="text-xs text-ink-500 w-20 flex-shrink-0">
                  {heresy.century}
                  {heresy.century === 1 ? "er" : "e"} s.
                </span>

                {/* Nom */}
                <div className="flex-1 min-w-0">
                  <span className="font-serif text-ink-900 group-hover:underline">
                    {heresy.name}
                  </span>
                  {heresy.nameLatin && (
                    <span className="text-sm text-ink-500 ml-2 hidden sm:inline">
                      ({heresy.nameLatin})
                    </span>
                  )}
                </div>

                {/* Promoteur */}
                <span className="text-sm text-ink-600 truncate max-w-xs hidden lg:block">
                  {heresy.promoter}
                </span>

                {/* Flèche */}
                <span className="text-ink-600 dark:text-ink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Légende */}
      <section className="mt-12 pt-6 border-t border-gold-400/40">
        <h3 className="text-sm font-semibold text-ink-700 mb-3">Légende des catégories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {Object.entries(categoryLabels).map(([key, { name }]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-ink-700">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
