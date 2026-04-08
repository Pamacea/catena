import Link from "next/link";
import { notFound } from "next/navigation";
import { prayers, getPrayerBySlug, PrayerCategory } from "@/data/prayers";
import { ParallelText } from "@/components/liturgy/BilingualText";

interface LiturgyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Configuration des catégories pour les badges
const categoryLabels: Record<PrayerCategory, string> = {
  [PrayerCategory.OUR_FATHER]: "Notre Père",
  [PrayerCategory.HAIL_MARY]: "Je vous salue Marie",
  [PrayerCategory.CREED]: "Symbole de foi",
  [PrayerCategory.ACTS]: "Acte",
  [PrayerCategory.LITANY]: "Litanies",
  [PrayerCategory.ROSARY]: "Rosaire",
  [PrayerCategory.LITURGICAL]: "Liturgique",
  [PrayerCategory.MARIAN]: "Mariane",
  [PrayerCategory.SAINT]: "Saint",
  [PrayerCategory.EUCHARISTIC]: "Eucharistique",
  [PrayerCategory.PENITENTIAL]: "Pénitentielle",
  [PrayerCategory.MORNING]: "Matin",
  [PrayerCategory.EVENING]: "Soir",
  [PrayerCategory.MEAL]: "Repas",
  [PrayerCategory.OTHER]: "Autre",
};

// Génère les routes statiques pour toutes les prières
export async function generateStaticParams() {
  return prayers.map(prayer => ({
    slug: prayer.slug,
  }));
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: LiturgyPageProps) {
  const { slug } = await params;
  const prayer = getPrayerBySlug(slug);

  if (!prayer) {
    return {
      title: "Prière non trouvée",
    };
  }

  const title = `${prayer.name} - Catena`;

  return {
    title,
    description: prayer.description,
    openGraph: { title, description: prayer.description, type: "article" },
  };
}

export default async function PrayerPage({ params }: LiturgyPageProps) {
  const { slug } = await params;
  const prayer = getPrayerBySlug(slug);

  if (!prayer) {
    notFound();
  }

  // Trouver les prières connexes (même catégorie)
  const relatedPrayers = prayers
    .filter(p => p.category === prayer.category && p.slug !== prayer.slug)
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400">
        <Link href="/liturgy" className="hover:underline">
          Prières
        </Link>
        <span>/</span>
        <span className="text-ink-900 dark:text-ink-200">{prayer.name}</span>
      </nav>

      {/* En-tête de la prière */}
      <header className="text-center space-y-4 pb-8 border-b border-gold-400/40 dark:border-gold-400/40">
        <span className="inline-block px-3 py-1 text-sm bg-gold-50 dark:bg-gold-50 text-ink-700 dark:text-gold-200 rounded-xs">
          {categoryLabels[prayer.category]}
        </span>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 dark:text-ink-100">
          {prayer.name}
        </h1>

        {prayer.nameLatin && (
          <p className="font-serif text-xl text-ink-700 dark:text-gold-200 italic">
            {prayer.nameLatin}
          </p>
        )}

        {prayer.description && (
          <p className="text-ink-600 dark:text-ink-400 max-w-2xl mx-auto">{prayer.description}</p>
        )}

        {/* Métadonnées */}
        <div className="flex items-center justify-center gap-4 text-sm text-gold-600 dark:text-gold-600">
          {prayer.source && <span>Source : {prayer.source}</span>}
          {prayer.author && <span>Auteur : {prayer.author}</span>}
          {prayer.origin && <span>Origine : {prayer.origin}</span>}
        </div>

        {/* Tags */}
        {prayer.tags && prayer.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            {prayer.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-gold-50 dark:bg-gold-50 text-ink-600 dark:text-ink-400 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Contenu bilingue de la prière */}
      <article className="space-y-8">
        {prayer.sections.map((section, sectionIndex) => {
          // Transformer les versets en format attendu par ParallelText
          const parallelSection = {
            title: section.title,
            latin: section.verses.map(v => v.latin),
            french: section.verses.map(v => v.french),
          };

          return (
            <section key={sectionIndex} className="space-y-4">
              {section.title && (
                <h3 className="font-serif text-xl font-semibold text-ink-900 dark:text-ink-100 text-center">
                  {section.title}
                </h3>
              )}
              <ParallelText sections={[parallelSection]} showLatin={true} />
            </section>
          );
        })}
      </article>

      {/* Prières connexes */}
      {relatedPrayers.length > 0 && (
        <aside className="pt-8 border-t border-gold-400/40 dark:border-gold-400/40">
          <h2 className="font-serif text-xl font-semibold text-ink-900 dark:text-ink-100 mb-4">
            Prières connexes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPrayers.map(related => (
              <Link
                key={related.slug}
                href={`/liturgy/${related.slug}`}
                className="block p-4 rounded-xs border border-gold-400/40 dark:border-gold-400/40 bg-gold-50/30 dark:bg-gold-50/30 hover:bg-parchment-100 dark:hover:bg-gold-50 transition-colors"
              >
                <p className="font-serif font-semibold text-ink-900 dark:text-ink-100">
                  {related.name}
                </p>
                {related.nameLatin && (
                  <p className="text-sm text-ink-600 dark:text-ink-400 italic truncate">
                    {related.nameLatin}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </aside>
      )}

      {/* Retour */}
      <div className="pt-4 border-t border-gold-400/40/50 dark:border-gold-400/40/50">
        <Link
          href="/liturgy"
          className="inline-flex items-center gap-2 text-ink-600 dark:text-ink-400 hover:text-ink-800 dark:hover:text-ink-200"
        >
          <span>←</span>
          <span>Retour aux prières</span>
        </Link>
      </div>
    </div>
  );
}
