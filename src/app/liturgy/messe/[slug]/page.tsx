import Link from "next/link";
import { notFound } from "next/navigation";
import { masses, getMassBySlug } from "@/data/masses";
import { ParallelText } from "@/components/liturgy/BilingualText";

interface MassPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return masses.map(mass => ({
    slug: mass.slug,
  }));
}

export async function generateMetadata({ params }: MassPageProps) {
  const { slug } = await params;
  const mass = getMassBySlug(slug);

  if (!mass) {
    return { title: "Messe non trouvee" };
  }

  const title = `${mass.name} - Catena`;
  return {
    title,
    description: mass.description,
    openGraph: { title, description: mass.description, type: "article" },
  };
}

export default async function MassPage({ params }: MassPageProps) {
  const { slug } = await params;
  const mass = getMassBySlug(slug);

  if (!mass) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600">
        <Link href="/liturgy" className="hover:underline">
          Liturgie
        </Link>
        <span className="text-gold-500">/</span>
        <span className="text-ink-900">{mass.name}</span>
      </nav>

      {/* En-tete */}
      <header className="text-center space-y-4 pb-8 border-b border-gold-400/40">
        <div className="flex items-center justify-center gap-3">
          <span className="inline-block px-3 py-1 text-sm bg-gold-50 text-ink-700 rounded-xs">
            {mass.rite}
          </span>
          <span className="inline-block px-3 py-1 text-sm bg-stone-100 text-stone-700 rounded-xs">
            {mass.period}
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink-900">
          {mass.name}
        </h1>

        <p className="font-serif text-xl text-ink-700 italic">
          {mass.nameLatin}
        </p>

        <p className="text-ink-600 mx-auto">{mass.description}</p>

        {/* Contexte historique */}
        <details className="text-left mx-auto">
          <summary className="text-sm font-medium text-gold-600 cursor-pointer hover:text-gold-700">
            Contexte historique
          </summary>
          <p className="text-sm text-ink-600 mt-2 pl-4 border-l-2 border-gold-400/40">
            {mass.historicalContext}
          </p>
        </details>

        {/* Tags */}
        {mass.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {mass.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gold-50 text-ink-600 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Ordinaire de la messe */}
      <article className="space-y-8">
        <h2 className="font-serif text-2xl font-bold text-ink-900 text-center">
          Ordinaire de la Messe
        </h2>

        {mass.order.map((section, sectionIndex) => {
          const parallelSection = {
            title: section.name,
            latin: section.text.map(v => v.latin),
            french: section.text.map(v => v.french),
          };

          return (
            <section key={sectionIndex} className="space-y-3">
              <div className="text-center">
                <h3 className="font-serif text-xl font-semibold text-ink-900">
                  {section.name}
                </h3>
                <p className="text-sm text-ink-600 italic">{section.nameLatin}</p>
                {section.rubrics && (
                  <p className="text-xs text-gold-600 mt-1 italic">
                    {section.rubrics}
                  </p>
                )}
              </div>
              <ParallelText sections={[parallelSection]} showLatin={true} />
            </section>
          );
        })}
      </article>

      {/* Retour */}
      <div className="pt-4 border-t border-gold-400/40">
        <Link
          href="/liturgy"
          className="inline-flex items-center gap-2 text-ink-600 hover:text-ink-800"
        >
          <span>&#8592;</span>
          <span>Retour a la liturgie</span>
        </Link>
      </div>
    </div>
  );
}
