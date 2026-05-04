import Link from "next/link";
import { notFound } from "next/navigation";
import {
  dogmas,
  getDogmaBySlug,
  DogmaCategory,
  dogmaCategoryLabels,
} from "@/data/dogmas";
import { getBacklinks } from "@/lib/backlinks";

interface DogmaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: DogmaPageProps) {
  const { slug } = await params;
  const dogma = getDogmaBySlug(slug);

  if (!dogma) {
    return { title: "Dogme non trouvé" };
  }

  const title = `${dogma.name} - Dogmes`;
  return {
    title,
    description: dogma.definition,
    openGraph: { title, description: dogma.definition, type: "article" },
  };
}

export async function generateStaticParams() {
  return dogmas.map(dogma => ({
    slug: dogma.slug,
  }));
}

export default async function DogmaDetailPage({ params }: DogmaPageProps) {
  const { slug } = await params;
  const dogma = getDogmaBySlug(slug);

  if (!dogma) {
    notFound();
  }

  const category = dogmaCategoryLabels[dogma.category];
  const backlinks = await getBacklinks(slug);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
        <Link href="/dogmas" className="hover:underline">
          Dogmes
        </Link>
        <span>/</span>
        <Link
          href={`/dogmas?category=${dogma.category}`}
          className="hover:underline"
        >
          {category.name}
        </Link>
        <span>/</span>
        <span className="text-ink-900">{dogma.name}</span>
      </nav>

      {/* En-tête */}
      <header className="mb-10 pb-8 border-b border-gold-400/40">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-xs bg-ink-100 text-ink-800 text-sm font-medium">
            {category.name}
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold text-ink-900 mb-2">
          {dogma.name}
        </h1>
        {dogma.nameLatin && (
          <p className="font-serif text-lg text-stone-600 italic mb-4">
            {dogma.nameLatin}
          </p>
        )}
      </header>

      {/* Définition dogmatique */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Définition dogmatique
        </h2>
        <blockquote className="p-6 rounded-xs border-l-4 border-gold-400 bg-ink-50/50">
          <p className="font-serif text-lg leading-relaxed text-ink-900">
            {dogma.definition}
          </p>
        </blockquote>
      </section>

      {/* Explication */}
      <section className="mb-10">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Explication
        </h2>
        <p className="font-serif text-lg leading-relaxed text-ink-900">
          {dogma.explanation}
        </p>
      </section>

      {/* Contexte historique */}
      {dogma.historicalContext && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Contexte historique
          </h2>
          <p className="text-ink-700 leading-relaxed">{dogma.historicalContext}</p>
        </section>
      )}

      {/* Fondements théologiques */}
      {dogma.theologicalBasis && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Fondements théologiques
          </h2>
          <p className="text-ink-700 leading-relaxed">{dogma.theologicalBasis}</p>
        </section>
      )}

      {/* Sources officielles */}
      {dogma.sources.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Sources officielles
          </h2>
          <div className="space-y-4">
            {dogma.sources.map((source, index) => (
              <div
                key={index}
                className="p-5 rounded-xs border border-gold-400/40 bg-stone-50/50"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-stone-600">
                      {source.authority}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-ink-900">
                      {source.document}
                    </h3>
                  </div>
                  <span className="text-sm text-stone-500">{source.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Références bibliques */}
      {dogma.biblicalReferences.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Références bibliques
          </h2>
          <div className="flex flex-wrap gap-2">
            {dogma.biblicalReferences.map(ref => (
              <span
                key={ref}
                className="px-3 py-1 rounded-xs bg-gold-50 text-ink-800 text-sm font-mono border border-gold-400/40"
              >
                {ref}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Détails conciliaires */}
      {dogma.councilDetails && dogma.councilDetails.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Définitions conciliaires
          </h2>
          <div className="space-y-4">
            {dogma.councilDetails.map((detail, index) => (
              <div key={index} className="p-5 rounded-xs border border-gold-400/40 bg-stone-50/50">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg font-semibold text-ink-900">
                    {detail.council}
                  </h3>
                  {detail.canon && (
                    <span className="text-sm text-stone-500 font-mono">{detail.canon}</span>
                  )}
                </div>
                {detail.session && (
                  <p className="text-sm text-stone-600 mb-2">Session : {detail.session}</p>
                )}
                <p className="text-ink-700">{detail.decree}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Références canoniques (CIC) */}
      {dogma.canonicalReferences && dogma.canonicalReferences.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Références canoniques
          </h2>
          <div className="flex flex-wrap gap-2">
            {dogma.canonicalReferences.map(ref => (
              <span
                key={ref}
                className="px-3 py-1 rounded-xs bg-stone-100 text-stone-700 text-sm font-mono"
              >
                {ref}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Fondements patristiques */}
      {dogma.patristicFoundations && dogma.patristicFoundations.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Fondements patristiques
          </h2>
          <div className="space-y-3">
            {dogma.patristicFoundations.map((foundation, index) => (
              <blockquote key={index} className="p-4 rounded-xs border-l-4 border-gold-400/40 bg-ink-50/50">
                <p className="font-serif text-ink-900">{foundation}</p>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Application pastorale */}
      {dogma.pastoralApplication && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Application pastorale
          </h2>
          <p className="text-ink-700 leading-relaxed">{dogma.pastoralApplication}</p>
        </section>
      )}

      {/* Dogmes liés */}
      {dogma.relatedDogmas && dogma.relatedDogmas.length > 0 && (
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
            Dogmes liés
          </h2>
          <div className="flex flex-wrap gap-2">
            {dogma.relatedDogmas.map(slug => {
              const related = dogmas.find(d => d.slug === slug);
              if (!related) return null;
              return (
                <Link
                  key={slug}
                  href={`/dogmas/${slug}`}
                  className="px-4 py-2 rounded-xs border border-gold-400/40 bg-ink-50/50 hover:bg-ink-100 transition-colors"
                >
                  <span className="font-serif text-ink-900">{related.name}</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Backlinks */}
      {backlinks.length > 0 && (
        <section className="mb-10 pt-8 border-t border-gold-400/40">
          <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">
            Référencé dans ({backlinks.length})
          </h2>
          <div className="space-y-2">
            {backlinks.map((backlink, index) => (
              <Link
                key={index}
                href={`/${backlink.type === "dogma" ? "dogmas" : "heresies"}/${backlink.source}`}
                className="block p-3 rounded-xs border border-transparent hover:border-gold-400/40 hover:bg-ink-50/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-ink-600">→</span>
                  <span className="font-serif text-ink-900">
                    {backlink.source}
                  </span>
                  <span className="text-xs text-stone-500 ml-auto">
                    {backlink.context}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Mots-clés */}
      {dogma.keywords.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-stone-600 mb-3">
            Mots-clés
          </h2>
          <div className="flex flex-wrap gap-2">
            {dogma.keywords.map(keyword => (
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
    </>
  );
}
