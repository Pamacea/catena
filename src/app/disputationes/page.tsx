import Link from "next/link";
import {
  allDisputationes,
  DisputatioCategory,
  getDisputationesByCategory,
  getDisputatioCategories,
} from "@/data/disputationes";

const categoryLabels: Record<DisputatioCategory, { name: string; color: string }> = {
  [DisputatioCategory.THEOLOGIE_DOGMATIQUE]: {
    name: "Théologie Dogmatique",
    color: "liturgical-red",
  },
  [DisputatioCategory.THEOLOGIE_MORALE]: {
    name: "Théologie Morale",
    color: "liturgical-green",
  },
  [DisputatioCategory.ECLESIOLOGIE]: {
    name: "Ecclésiologie",
    color: "liturgical-blue",
  },
  [DisputatioCategory.APOLOGETIQUE]: {
    name: "Apologétique",
    color: "liturgical-purple",
  },
  [DisputatioCategory.DISCIPLINE]: {
    name: "Discipline",
    color: "gold",
  },
  [DisputatioCategory.CRISE]: {
    name: "Crise Post-Conciliaire",
    color: "liturgical-red",
  },
};

const categories = getDisputatioCategories();

interface DisputationesPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function DisputationesPage({
  searchParams,
}: DisputationesPageProps) {
  const params = await searchParams;
  const categoryParam = params.category;

  let filtered = allDisputationes;
  let activeFilter = "";

  if (categoryParam) {
    filtered = getDisputationesByCategory(categoryParam as DisputatioCategory);
    activeFilter = categoryLabels[categoryParam as DisputatioCategory]?.name || categoryParam;
  }

  return (
    <>
      {/* Filtres par catégorie */}
      <section className="mb-10 max-w-2/3">
        <h2 className="font-serif text-lg font-semibold text-ink-900 mb-3">
          Par catégorie
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/disputationes"
            className={
              !categoryParam
                ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                : "px-4 py-2 rounded-xs bg-gold-50 text-ink-800 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
            }
          >
            Tous
            <span className="ml-2 opacity-60">({allDisputationes.length})</span>
          </Link>
          {categories.map(cat => {
            const label = categoryLabels[cat];
            const count = getDisputationesByCategory(cat).length;
            return (
              <Link
                key={cat}
                href={`/disputationes?category=${cat}`}
                className={
                  categoryParam === cat
                    ? "px-4 py-2 rounded-xs bg-amber-800 text-white border border-gold-400/40 transition-colors text-sm font-medium"
                    : "px-4 py-2 rounded-xs bg-gold-50 text-ink-800 hover:bg-gold-100 border border-gold-400/40 transition-colors text-sm font-medium"
                }
              >
                {label.name}
                <span className="ml-2 opacity-60">({count})</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Liste des disputationes */}
      <section>
        <h2 className="font-serif text-lg font-semibold text-ink-900 mb-4">
          {activeFilter ? (
            <span>
              <Link
                href="/disputationes"
                className="text-ink-600 hover:text-ink-900 mr-2"
              >
                ← Retour
              </Link>
              {activeFilter} ({filtered.length})
            </span>
          ) : (
            <span>Toutes les questions ({allDisputationes.length})</span>
          )}
        </h2>

        <div className="space-y-6">
          {filtered.map(d => {
            const cat = categoryLabels[d.category];
            return (
              <article
                key={d.slug}
                className="group border border-gold-400/30 rounded-xs bg-stone-50 p-6 hover:border-gold-500/50 hover:shadow-sm transition-all"
              >
                {/* Catégorie + Source */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-xs bg-${cat.color}/10 text-${cat.color} font-medium`}
                  >
                    {cat.name}
                  </span>
                  <span className="text-xs text-ink-500">{d.source}</span>
                </div>

                {/* Question */}
                <h3 className="font-serif text-lg font-semibold text-ink-900 mb-3">
                  <em>Utrum {d.question}</em>
                </h3>

                {/* Objections */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">
                    Objectiones
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-ink-700">
                    {d.objections.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ol>
                </div>

                {/* Sed contra */}
                <div className="mb-3 p-3 bg-parchment-100 rounded-xs border-l-2 border-gold-500">
                  <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">
                    Sed contra
                  </p>
                  <p className="text-sm text-ink-800 italic">{d.sedContra}</p>
                </div>

                {/* Respondeo */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">
                    Respondeo
                  </p>
                  <p className="text-sm text-ink-700 leading-relaxed">
                    {d.respondeo}
                  </p>
                </div>

                {/* Ad argumenta */}
                {d.adArguments.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-ink-600 uppercase tracking-wider mb-1">
                      Ad argumenta
                    </p>
                    <div className="space-y-2">
                      {d.adArguments.map((ad, i) => (
                        <p key={i} className="text-sm text-ink-600">
                          <span className="font-medium text-ink-700">
                            Ad {ad.type} :
                          </span>{" "}
                          {ad.content}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Références */}
                {d.references.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gold-400/20">
                    <div className="flex flex-wrap gap-2">
                      {d.references.map((ref, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-xs bg-parchment-200 text-ink-600"
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
