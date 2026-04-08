import Link from "next/link";
import { catechisms } from "@/data/catechisms";

export const metadata = {
  title: "Catéchismes de l'Église Catholique",
  description: "Collection des principaux catéchismes traditionnels",
};

export default function CatechismsPage() {
  return (
    <div className="mx-auto" style={{ maxWidth: "64rem" }}>
      {/* Catechisms grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {catechisms.map(catechism => (
          <Link
            key={catechism.id}
            href={`/catechism/${catechism.id}`}
            className="group block p-6 border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100 transition-all rounded-xs"
          >
            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-gold-600">Catéchisme</span>
            </div>
            <h2 className="font-serif text-xl font-semibold text-ink-900 mb-2">{catechism.name}</h2>
            {catechism.nameLatin && (
              <p className="text-sm text-ink-600 italic mb-3">{catechism.nameLatin}</p>
            )}
            <p className="text-sm text-ink-700 mb-3">
              {catechism.author && <span>{catechism.author}, </span>}
              <span>{catechism.year}</span>
            </p>
            <p className="text-sm text-ink-600 mb-4 line-clamp-3">{catechism.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-600">{catechism.questions.length} questions</span>
              <span className="text-gold-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
