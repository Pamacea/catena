import Link from "next/link";
import { notFound } from "next/navigation";
import { heresies, getHeresyBySlug, HeresyCategory, CondemnationType } from "@/data/heresies";
import { getBacklinks } from "@/lib/backlinks";

interface DoctrinePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: DoctrinePageProps) {
  const { slug } = await params;
  const heresy = getHeresyBySlug(slug);

  if (!heresy) {
    return {
      title: "Hérésie non trouvée",
    };
  }

  const title = `${heresy.name} - Doctrine`;

  return {
    title,
    description: heresy.description,
    openGraph: { title, description: heresy.description, type: "article" },
  };
}

export async function generateStaticParams() {
  return heresies.map(heresy => ({
    slug: heresy.slug,
  }));
}

// Labels pour les catégories
const categoryLabels: Record<HeresyCategory, { name: string }> = {
  [HeresyCategory.CHRISTOLOGICAL]: { name: "Christologique" },
  [HeresyCategory.TRINITARIAN]: { name: "Trinitaire" },
  [HeresyCategory.ANTHROPOLOGICAL]: { name: "Anthropologique" },
  [HeresyCategory.ECCLESIOLOGICAL]: { name: "Ecclésiologique" },
  [HeresyCategory.ESCHATOLOGICAL]: { name: "Eschatologique" },
  [HeresyCategory.SACRAMENTAL]: { name: "Sacramentelle" },
  [HeresyCategory.SCRIPTURAL]: { name: "Scripturaire" },
};

// Labels pour les types de condamnation
const condemnationLabels: Record<CondemnationType, string> = {
  [CondemnationType.COUNCIL]: "Concile",
  [CondemnationType.SYNOD]: "Synode",
  [CondemnationType.PAPAL_BULL]: "Bulle pontificale",
  [CondemnationType.ENCYCLICAL]: "Encyclique",
};

export default async function HeresyPage({ params }: DoctrinePageProps) {
  const { slug } = await params;
  const heresy = getHeresyBySlug(slug);

  if (!heresy) {
    notFound();
  }

  const category = categoryLabels[heresy.category];
  const backlinks = getBacklinks(slug);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/doctrine" className="hover:underline">
          Doctrine
        </Link>
        <span>/</span>
        <Link href="/doctrine" className="hover:underline">
          Hérésies
        </Link>
        <span>/</span>
        <span className="text-ink-900">{heresy.name}</span>
      </nav>

      {/* En-tête */}
      <header className="mb-10 pb-8 border-b border-gold-400/40/50">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-xs bg-ink-100 text-ink-800 text-sm font-medium">
            {category.name}
          </span>
          <span className="px-3 py-1 rounded-xs bg-stone-100 text-stone-700 text-sm">
            {heresy.century}
            {heresy.century === 1 ? "er" : "e"} siècle
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold text-ink-900 mb-2">
          {heresy.name}
        </h1>
        {heresy.nameLatin && (
          <p className="font-serif text-lg text-stone-600 italic mb-4">
            {heresy.nameLatin}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-stone-600">
          <span>Origine : {heresy.origin}</span>
          <span>Promoteur : {heresy.promoter}</span>
        </div>
      </header>

      {/* Description */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Description
        </h2>
        <p className="font-serif text-lg leading-relaxed text-ink-900">
          {heresy.description}
        </p>
      </section>

      {/* Erreur principale */}
      <section className="mb-10 p-6 rounded-xs bg-red-50 border border-red-200">
        <h2 className="font-serif text-xl font-semibold text-red-900 mb-3">
          Erreur condamnée
        </h2>
        <p className="text-red-800 font-medium">{heresy.error}</p>
      </section>

      {/* Réfutations patristiques */}
      {heresy.refutations.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Réfutations patristiques
          </h2>
          <div className="space-y-4">
            {heresy.refutations.map((refutation, index) => (
              <blockquote
                key={index}
                className="p-5 rounded-xs border-l-4 border-gold-400/40 bg-ink-50/50"
              >
                <p className="font-serif text-lg text-ink-900 mb-3">
                  {refutation.source}
                </p>
                {refutation.latin && (
                  <p className="font-serif text-base text-stone-700 italic border-t border-gold-400/40 pt-3">
                    {refutation.latin}
                  </p>
                )}
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Condamnations officielles */}
      {heresy.condemnations.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Condamnations officielles
          </h2>
          <div className="space-y-4">
            {heresy.condemnations.map((condemnation, index) => (
              <div
                key={index}
                className="p-5 rounded-xs border border-gold-400/40 bg-stone-50/50"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-stone-600">
                      {condemnationLabels[condemnation.type]}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-ink-900">
                      {condemnation.authority}
                    </h3>
                  </div>
                  <span className="text-sm text-stone-500">
                    {condemnation.year}
                  </span>
                </div>
                {condemnation.document && (
                  <p className="text-stone-700 mb-2">
                    <em>{condemnation.document}</em>
                  </p>
                )}
                {condemnation.canons && (
                  <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                    {condemnation.canons.map((canon, i) => (
                      <li key={i}>{canon}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Connexions */}
      {heresy.connections && heresy.connections.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Hérésies connexes
          </h2>
          <div className="flex flex-wrap gap-2">
            {heresy.connections.map(connection => {
              const linkedHeresy = getHeresyBySlug(connection.slug);
              if (!linkedHeresy) return null;

              const connectionLabels: Record<string, string> = {
                preceded: "→ a précédé",
                succeeded: "← a succédé",
                related: "≈ liée à",
                refuted: "réfutée par",
              };

              return (
                <Link
                  key={connection.slug}
                  href={`/doctrine/${connection.slug}`}
                  className="px-4 py-2 rounded-xs border border-gold-400/40 bg-ink-50/50 hover:bg-ink-100 transition-colors"
                >
                  <span className="font-serif text-ink-900">
                    {linkedHeresy.name}
                  </span>
                  <span className="text-xs text-stone-500 ml-2">
                    {connectionLabels[connection.type]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Backlinks */}
      {backlinks.length > 0 && (
        <section className="mb-10 pt-8 border-t border-gold-400/40/50">
          <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">
            Référencé dans ({backlinks.length})
          </h2>
          <div className="space-y-2">
            {backlinks.map((backlink, index) => {
              const sourceHeresy = getHeresyBySlug(backlink.source);
              return (
                <Link
                  key={index}
                  href={`/doctrine/${backlink.source}`}
                  className="block p-3 rounded-xs border border-transparent hover:border-gold-400/40 hover:bg-ink-50/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-ink-600">→</span>
                    <span className="font-serif text-ink-900">
                      {sourceHeresy?.name || backlink.source}
                    </span>
                    <span className="text-xs text-stone-500 ml-auto">
                      {backlink.context}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Mots-clés */}
      {heresy.keywords.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-stone-600 mb-3">
            Mots-clés
          </h2>
          <div className="flex flex-wrap gap-2">
            {heresy.keywords.map(keyword => (
              <span
                key={keyword}
                className="px-3 py-1 rounded-xs bg-stone-100 text-stone-700 text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
