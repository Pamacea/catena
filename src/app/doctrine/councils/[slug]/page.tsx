import Link from "next/link";
import { notFound } from "next/navigation";
import { councils, getCouncilBySlug, Council, CouncilType, CouncilStatus } from "@/data/councils";

interface CouncilPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CouncilPageProps) {
  const { slug } = await params;
  const council = getCouncilBySlug(slug);

  if (!council) {
    return {
      title: "Concile non trouvé",
    };
  }

  const title = `${council.name} | Catena`;

  return {
    title,
    description: council.description,
    openGraph: { title, description: council.description, type: "article" },
  };
}

export async function generateStaticParams() {
  return councils.map(council => ({
    slug: council.slug,
  }));
}

// Labels pour les types
const typeLabels: Record<CouncilType, string> = {
  [CouncilType.ECUMENICAL]: "Œcuménique",
  [CouncilType.GENERAL]: "Général",
  [CouncilType.LOCAL]: "Local",
  [CouncilType.PAPAL]: "Pontifical",
};

// Labels pour les statuts
const statusLabels: Record<CouncilStatus, { name: string; color: string }> = {
  [CouncilStatus.RECOGNIZED]: { name: "Reconnu", color: "bg-emerald-100 text-emerald-800" },
  [CouncilStatus.DISPUTED]: { name: "Contesté", color: "bg-amber-100 text-amber-800" },
  [CouncilStatus.ROBBER]: { name: "Concile brigand", color: "bg-red-100 text-red-800" },
};

// Labels pour les types de décrets
const decreeTypeLabels: Record<string, string> = {
  dogmatic: "Dogmatique",
  disciplinary: "Disciplinaire",
  pastoral: "Pastoral",
};

export default async function CouncilPage({ params }: CouncilPageProps) {
  const { slug } = await params;
  const council = getCouncilBySlug(slug);

  if (!council) {
    notFound();
  }

  const status = statusLabels[council.status];

  return (
    <div className="min-h-screen bg-parchment-50">
      {/* Header */}
      <header className="border-b border-gold-400/40 px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-ink-900 mb-4"
          >
            <span>←</span>
            <span>Retour à la timeline</span>
          </Link>

          {/* En-tête du concile */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-xs text-sm font-medium ${status.color}`}
            >
              #{council.number} • {typeLabels[council.type]}
            </span>
            <span className="px-3 py-1 rounded-xs bg-parchment-200 text-ink-700 text-sm font-medium">
              {council.year}
              {council.yearEnd && ` - ${council.yearEnd}`}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-ink-900 mb-2">{council.name}</h1>
          {council.nameLatin && (
            <p className="font-serif text-xl text-ink-600 italic mb-4">{council.nameLatin}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-600">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {council.location}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {council.participants} participants
            </span>
          </div>
        </div>
      </header>

      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Description */}
          <section className="mb-12">
            <p className="font-serif text-lg text-ink-700 leading-relaxed">{council.description}</p>
          </section>

          {/* Informations de convocation */}
          <section className="mb-12 p-6 rounded-xs border border-gold-400/40 bg-parchment-100">
            <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">Convocation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-ink-500 mb-1">Convoqué par</p>
                <p className="text-ink-900 font-medium">{council.convokedBy}</p>
                <p className="text-sm text-ink-600">{council.convokedByRole}</p>
              </div>
              {council.popes && council.popes.length > 0 && (
                <div>
                  <p className="text-sm text-ink-500 mb-1">Pape(s)</p>
                  {council.popes.map((pope, idx) => (
                    <p key={idx} className="text-ink-900 font-medium">
                      {pope.name}
                      <span className="text-sm text-ink-600 font-normal ml-2">
                        ({pope.role === "convoker" ? "convocateur" : "approbateur"})
                      </span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Thèmes abordés */}
          {council.topics && council.topics.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">Thèmes abordés</h2>
              <div className="flex flex-wrap gap-2">
                {council.topics.map(topic => (
                  <span
                    key={topic}
                    className="px-4 py-2 rounded-xs border border-gold-400/40 bg-parchment-50 text-ink-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Décrets */}
          {council.decrees && council.decrees.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">
                Décrets et définitions
              </h2>
              <div className="space-y-4">
                {council.decrees.map((decree, idx) => (
                  <article
                    key={idx}
                    className="p-6 rounded-xs border border-gold-400/40 bg-parchment-50"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-serif text-lg font-semibold text-ink-900">
                        {decree.title}
                      </h3>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-liturgical-purple text-white">
                        {decreeTypeLabels[decree.type]}
                      </span>
                    </div>
                    <p className="text-ink-700 leading-relaxed">{decree.content}</p>
                    {decree.latin && (
                      <p className="mt-4 pt-4 border-t border-gold-400/40 font-serif text-ink-600 italic">
                        {decree.latin}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Canons notables */}
          {council.canons && council.canons.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">
                Canons notables
              </h2>
              <div className="space-y-4">
                {council.canons.map(canon => (
                  <article
                    key={canon.number}
                    className="p-5 rounded-xs border-l-4 border-liturgical-gold-600 bg-parchment-100"
                  >
                    <div className="flex items-start gap-3">
                      {canon.anathema && (
                        <span
                          className="text-xs font-medium text-red-600 mt-1 px-2 py-0.5 rounded-xs bg-red-100"
                          title="Anathème"
                        >
                          Anathème
                        </span>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-ink-500">
                            Canon {canon.number}
                          </span>
                          {canon.anathema && (
                            <span className="px-2 py-0.5 rounded text-xs bg-red-100 text-red-800">
                              Anathème
                            </span>
                          )}
                        </div>
                        <h4 className="font-medium text-ink-900 mb-2">{canon.title}</h4>
                        <p className="text-ink-700 text-sm">{canon.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Hérésies condamnées */}
          {council.heresiesCondemned && council.heresiesCondemned.length > 0 && (
            <section className="mb-12">
              <h2 className="font-serif text-xl font-semibold text-ink-900 mb-4">
                Hérésies condamnées
              </h2>
              <div className="space-y-3">
                {council.heresiesCondemned.map(heresy => (
                  <div
                    key={heresy.heresySlug}
                    className="p-5 rounded-xs border border-red-200 bg-red-50"
                  >
                    <h4 className="font-serif font-semibold text-red-900 mb-1">
                      {heresy.heresyName}
                    </h4>
                    <p className="text-red-800 text-sm">{heresy.condemnation}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Navigation entre conciles */}
          <section className="pt-8 border-t border-gold-400/40">
            <div className="flex justify-between items-center">
              {council.number > 1 ? (
                <Link
                  href={`/doctrine/councils/${councils.find(c => c.number === council.number - 1)?.slug}`}
                  className="flex items-center gap-2 text-ink-600 hover:text-ink-900"
                >
                  <span>←</span>
                  <span className="font-serif">
                    {councils.find(c => c.number === council.number - 1)?.name}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {council.number < councils.length ? (
                <Link
                  href={`/doctrine/councils/${councils.find(c => c.number === council.number + 1)?.slug}`}
                  className="flex items-center gap-2 text-ink-600 hover:text-ink-900"
                >
                  <span className="font-serif">
                    {councils.find(c => c.number === council.number + 1)?.name}
                  </span>
                  <span>→</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold-400/40 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-ink-500">
          <p>Catena — Chaîne de la Tradition © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
