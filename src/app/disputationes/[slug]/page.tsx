import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allDisputationes,
  getDisputatioBySlug,
  DisputatioCategory,
} from "@/data/disputationes";

interface DisputatioDetailProps {
  params: Promise<{ slug: string }>;
}

const categoryLabels: Record<DisputatioCategory, { name: string }> = {
  [DisputatioCategory.THEOLOGIE_DOGMATIQUE]: { name: "Théologie Dogmatique" },
  [DisputatioCategory.THEOLOGIE_MORALE]: { name: "Théologie Morale" },
  [DisputatioCategory.ECLESIOLOGIE]: { name: "Ecclésiologie" },
  [DisputatioCategory.APOLOGETIQUE]: { name: "Apologétique" },
  [DisputatioCategory.DISCIPLINE]: { name: "Discipline" },
  [DisputatioCategory.CRISE]: { name: "Crise Post-Conciliaire" },
};

export async function generateStaticParams() {
  return allDisputationes.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: DisputatioDetailProps) {
  const { slug } = await params;
  const d = getDisputatioBySlug(slug);
  if (!d) return { title: "Question non trouvée" };
  return {
    title: `${d.questionFr} | Disputationes`,
    description: d.respondeo.slice(0, 160),
  };
}

export default async function DisputatioDetailPage({
  params,
}: DisputatioDetailProps) {
  const { slug } = await params;
  const d = getDisputatioBySlug(slug);

  if (!d) notFound();

  const cat = categoryLabels[d.category];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/" className="hover:text-gold-700 transition-colors">
          Accueil
        </Link>
        <span className="text-gold-500">/</span>
        <Link
          href="/disputationes"
          className="hover:text-gold-700 transition-colors"
        >
          Disputationes
        </Link>
        <span className="text-gold-500">/</span>
        <span className="text-ink-900 truncate">{d.questionFr}</span>
      </nav>

      {/* En-tête */}
      <header className="mb-10 pb-8 border-b-2 border-gold-400/30">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-xs bg-red-100 text-red-800 text-sm font-medium">
            {cat.name}
          </span>
          <span className="text-xs text-ink-500">{d.source}</span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 mb-2">
          <em>{d.question}</em>
        </h1>
        <p className="text-lg text-ink-600">« {d.questionFr} »</p>
      </header>

      {/* Objections */}
      <section className="mb-8">
        <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4 flex items-center gap-2">
          <span className="text-red-600">I.</span> Objectiones
        </h2>
        <div className="space-y-3">
          {d.objections.map((obj, i) => (
            <div
              key={i}
              className="p-4 rounded-xs border border-red-200/60 bg-red-50/30"
            >
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">
                  {i + 1}.{" "}
                </span>
                {obj}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sed contra */}
      <section className="mb-8">
        <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4 flex items-center gap-2">
          <span className="text-gold-600">II.</span> Sed contra
        </h2>
        <div className="p-5 rounded-xs border-l-4 border-gold-500 bg-parchment-100/50">
          <p className="text-ink-800 italic leading-relaxed">{d.sedContra}</p>
        </div>
      </section>

      {/* Respondeo */}
      <section className="mb-8">
        <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4 flex items-center gap-2">
          <span className="text-green-700">III.</span> Respondeo
        </h2>
        <div className="p-5 rounded-xs bg-stone-50 border border-gold-400/20">
          <p className="text-ink-800 leading-relaxed">{d.respondeo}</p>
        </div>
      </section>

      {/* Ad argumenta */}
      {d.adArguments.length > 0 && (
        <section className="mb-8">
          <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4 flex items-center gap-2">
            <span className="text-blue-700">IV.</span> Ad argumenta
          </h2>
          <div className="space-y-3">
            {d.adArguments.map((ad, i) => (
              <div
                key={i}
                className="p-4 rounded-xs border border-blue-200/40 bg-blue-50/20"
              >
                <p className="text-sm text-ink-800">
                  <span className="font-semibold text-blue-700 capitalize">
                    Ad {ad.type}:{" "}
                  </span>
                  {ad.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Références */}
      {d.references.length > 0 && (
        <section className="mt-10 pt-6 border-t border-gold-400/30">
          <h3 className="text-sm font-semibold text-ink-600 mb-3 uppercase tracking-wider">
            Références
          </h3>
          <div className="flex flex-wrap gap-2">
            {d.references.map((ref, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-xs bg-parchment-200 text-ink-700"
              >
                {ref}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="mt-12 pt-6 border-t border-gold-400/30">
        <Link
          href="/disputationes"
          className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 transition-colors text-sm font-medium"
        >
          ← Retour aux Disputationes
        </Link>
      </div>
    </>
  );
}
