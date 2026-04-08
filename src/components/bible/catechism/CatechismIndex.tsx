/**
 * CatechismIndex - Index des catéchismes
 *
 * Page principale de navigation entre les différents
 * catéchismes et leurs parties.
 */

import { catechisms, type Catechism } from "@/data/seed";
import { cn } from "@/lib/utils";
import Link from "next/link";

const catechismDescriptions: Record<string, { icon: string; color: string }> = {
  tridentine: { icon: "⛪", color: "purple" },
  "pius-x": { icon: "👶", color: "blue" },
  "cure-d-ars": { icon: "👨‍🌾", color: "green" },
};

export function CatechismIndex() {
  return (
    <div className="space-y-8">
      {/* En-tête */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-ink-900">Catéchismes</h1>
        <p className="text-ink-600 max-w-2xl">
          Les principaux catéchismes de la tradition catholique pour l'instruction fidèle et la
          formation doctrinale.
        </p>
      </header>

      {/* Grille des catéchismes */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {catechisms.map(catechism => (
          <CatechismCard key={catechism.id} catechism={catechism} />
        ))}
      </div>

      {/* Statistiques globales */}
      <section className="bg-parchment-50 rounded-lg p-6 border border-parchment-200">
        <h2 className="font-serif font-bold text-xl text-ink-900 mb-4">En bref</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard number={catechisms.length} label="Catéchismes" icon="📖" />
          <StatCard
            number={catechisms.reduce((sum, c) => sum + c.questions.length, 0)}
            label="Questions total"
            icon="❓"
          />
          <StatCard
            number={new Set(catechisms.flatMap(c => c.questions.map(q => q.category))).size}
            label="Catégories"
            icon="📋"
          />
        </div>
      </section>

      {/* Recherche rapide */}
      <section>
        <h2 className="font-serif font-bold text-xl text-ink-900 mb-4">Recherche rapide</h2>
        <QuickSearch catechisms={catechisms} />
      </section>
    </div>
  );
}

interface CatechismCardProps {
  catechism: Catechism;
}

function CatechismCard({ catechism }: CatechismCardProps) {
  const config = catechismDescriptions[catechism.id] || { icon: "📖", color: "gray" };

  return (
    <Link
      href={`/catechism/${catechism.id}`}
      className="block p-6 rounded-lg border-2 border-parchment-200 bg-white hover:border-gold-300 hover:shadow-lg transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{config.icon}</span>
        <span className="text-sm text-ink-500">{catechism.year}</span>
      </div>

      <h3 className="text-xl font-serif font-bold text-ink-900 mb-1 group-hover:text-gold-600 transition-colors">
        {catechism.name}
      </h3>
      {catechism.nameLatin && (
        <p className="text-sm text-ink-500 italic mb-3">{catechism.nameLatin}</p>
      )}

      <p className="text-sm text-ink-600 mb-4 line-clamp-2">{catechism.description}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-ink-500">{catechism.questions.length} questions</span>
        {catechism.author && <span className="text-ink-600">{catechism.author}</span>}
      </div>
    </Link>
  );
}

interface StatCardProps {
  number: number;
  label: string;
  icon: string;
}

function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="text-2xl font-bold text-ink-900">{number}</p>
        <p className="text-sm text-ink-600">{label}</p>
      </div>
    </div>
  );
}

interface QuickSearchProps {
  catechisms: Catechism[];
}

function QuickSearch({ catechisms }: QuickSearchProps) {
  // Extraire quelques questions populaires
  const popularQuestions = catechisms.flatMap(c =>
    c.questions.slice(0, 3).map(q => ({ ...q, catechism: c }))
  );

  return (
    <div className="bg-white rounded-lg border border-parchment-200 overflow-hidden">
      <div className="p-4 border-b border-parchment-200">
        <input
          type="text"
          placeholder="Rechercher une question ou un sujet..."
          className="w-full px-4 py-2 rounded-lg border border-parchment-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none"
        />
      </div>

      <div className="p-4">
        <p className="text-sm text-ink-500 mb-3">Questions populaires</p>
        <div className="space-y-2">
          {popularQuestions.slice(0, 6).map(q => (
            <Link
              key={q.id}
              href={`/catechism/${q.catechism.id}/${q.number}`}
              className="block px-3 py-2 rounded hover:bg-parchment-100 transition-colors"
            >
              <p className="text-sm font-medium text-ink-800">{q.question.french}</p>
              <p className="text-xs text-ink-500">
                {q.catechism.name} • Q{q.number}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * CompactCatechismNav - Navigation compacte pour sidebar
 */
interface CompactCatechismNavProps {
  currentCatechismId?: string;
}

export function CompactCatechismNav({ currentCatechismId }: CompactCatechismNavProps) {
  return (
    <nav className="space-y-4">
      <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider">Catéchismes</h3>
      <ul className="space-y-1">
        {catechisms.map(c => (
          <li key={c.id}>
            <Link
              href={`/catechism/${c.id}`}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded transition-colors",
                currentCatechismId === c.id
                  ? "bg-gold-100 text-gold-800 font-medium"
                  : "hover:bg-parchment-100 text-ink-700"
              )}
            >
              <span className="text-lg">{catechismDescriptions[c.id]?.icon || "📖"}</span>
              <span className="text-sm">{c.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * CategoryList - Liste des catégories de questions
 */
interface CategoryListProps {
  catechismId: string;
  categories: Array<{
    id: string;
    label: string;
    icon: string;
    count: number;
  }>;
}

export function CategoryList({ catechismId, categories }: CategoryListProps) {
  return (
    <nav className="space-y-2">
      {categories.map(cat => (
        <Link
          key={cat.id}
          href={`/catechism/${catechismId}?category=${cat.id}`}
          className="flex items-center justify-between p-3 rounded-lg border border-parchment-200 bg-white hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{cat.icon}</span>
            <span className="font-medium text-ink-800 group-hover:text-gold-600">{cat.label}</span>
          </div>
          <span className="text-sm text-ink-500 bg-parchment-100 px-2 py-1 rounded-full">
            {cat.count}
          </span>
        </Link>
      ))}
    </nav>
  );
}
