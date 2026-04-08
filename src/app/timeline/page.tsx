import Link from "next/link";
import { councils } from "@/data/councils";

// Groupement des conciles par ère historique
const eras = [
  {
    id: "antiquity",
    name: "Antiquité",
    period: "Ier - VIIIe siècle",
    color: "bg-liturgical-red",
    startYear: 325,
    endYear: 869,
    description:
      "Les huit premiers conciles œcuméniques, principalement en Orient, qui ont défini les dogmes fondamentaux du christianisme : Trinité, Christologie, Saint-Esprit et images sacrées.",
  },
  {
    id: "middle-ages",
    name: "Moyen Âge",
    period: "XIe - XVe siècle",
    color: "bg-liturgical-blue",
    startYear: 1123,
    endYear: 1517,
    description:
      "Conciles de réforme ecclésiale, de croisades et de résolution des schismes. Le conciliarisme et les relations entre papauté et empire sont au cœur des débats.",
  },
  {
    id: "modern",
    name: "Époque moderne",
    period: "XVIe - XXe siècle",
    color: "bg-liturgical-purple",
    startYear: 1545,
    endYear: 1965,
    description:
      "Réponse catholique à la Réforme (Trente), définition de l'infaillibilité pontificale (Vatican I) et renouveau liturgique et œcuménique (Vatican II).",
  },
];

// Fonction pour filtrer les conciles par ère
function getCouncilsByEra(eraId: string) {
  switch (eraId) {
    case "antiquity":
      return councils.filter(c => c.number >= 1 && c.number <= 8);
    case "middle-ages":
      return councils.filter(c => c.number >= 9 && c.number <= 15);
    case "modern":
      return councils.filter(c => c.number >= 16 && c.number <= 21);
    default:
      return councils;
  }
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-parchment-50">
      {/* Header */}
      <header className="border-b border-gold-400/40 px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink-600 hover:text-ink-900 mb-4"
          >
            <span>←</span>
            <span>Retour</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-ink-900 mb-2">
            Conciles Œcuméniques
          </h1>
          <p className="text-ink-600 max-w-2xl">
            Les 21 conciles œcuméniques reconnus par l'Église Catholique, de Nicée I (325) à Vatican
            II (1965).
          </p>
        </div>
      </header>

      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Era filter */}
          <section className="mb-16 sticky top-0 z-10 bg-parchment-50/95 backdrop-blur-sm py-4 -mx-6 px-6 border-b border-gold-400/40">
            <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
              <Link
                href="/timeline"
                className="px-5 py-2.5 rounded-xs bg-ink-900 text-white font-medium transition-all hover:bg-ink-800"
              >
                Tous
              </Link>
              {eras.map(era => (
                <Link
                  key={era.id}
                  href={`#era-${era.id}`}
                  className="px-5 py-2.5 rounded-xs bg-parchment-100 text-ink-700 font-medium transition-all hover:bg-parchment-200 border border-gold-400/40"
                >
                  {era.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-parchment-300 -translate-x-1/2" />

            {eras.map(era => {
              const eraCouncils = getCouncilsByEra(era.id);
              return (
                <section key={era.id} id={`era-${era.id}`} className="mb-20 scroll-mt-28">
                  {/* Era header */}
                  <div className="flex items-center gap-4 mb-10 md:justify-center">
                    <div className={`h-3 w-3 rounded-xs ${era.color} shadow-sm`} />
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-ink-900">{era.name}</h2>
                      <p className="text-sm text-ink-500">{era.period}</p>
                    </div>
                    <div className={`h-3 w-3 rounded-xs ${era.color} shadow-sm`} />
                  </div>

                  {/* Era description */}
                  <p className="text-ink-600 max-w-2xl mb-10 mx-auto text-center leading-relaxed">
                    {era.description}
                  </p>

                  {/* Councils */}
                  <div className="space-y-12">
                    {eraCouncils.map((council, index) => (
                      <CouncilItem
                        key={council.slug}
                        council={council}
                        eraColor={era.color}
                        index={index}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Legend */}
          <section className="mt-20 pt-8 border-t border-gold-400/40">
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-xs bg-liturgical-red mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-ink-900">Antiquité (325-869)</p>
                  <p className="text-ink-600">
                    Définition des dogmes trinitaires et christologiques
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-xs bg-liturgical-blue mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-ink-900">Moyen Âge (1123-1517)</p>
                  <p className="text-ink-600">Réforme de l'Église et résolution des schismes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-xs bg-liturgical-purple mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-ink-900">Époque moderne (1545-1965)</p>
                  <p className="text-ink-600">Réponse à la Réforme et renouveau du XXe siècle</p>
                </div>
              </div>
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

// Council item component
function CouncilItem({
  council,
  eraColor,
  index,
}: {
  council: (typeof councils)[0];
  eraColor: string;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Desktop content */}
      <div className={`hidden md:block w-5/12 ${isLeft ? "text-right pr-12" : "text-left pl-12"}`}>
        <Link
          href={`/doctrine/councils/${council.slug}`}
          className="group inline-block text-left hover:opacity-80 transition-opacity"
        >
          <span
            className={`inline-block px-3 py-1 rounded-xs text-xs font-semibold text-white mb-3 ${eraColor}`}
          >
            Concile #{council.number}
          </span>
          <h3 className="font-serif text-xl font-semibold text-ink-900 mb-2 group-hover:text-ink-700">
            {council.name}
          </h3>
          <p className="text-sm text-ink-500 italic mb-3">{council.nameLatin}</p>
          <div className="flex items-center gap-4 text-sm text-ink-600 mb-3">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {council.year}
              {council.yearEnd && ` - ${council.yearEnd}`}
            </span>
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
          </div>
          <p className="text-ink-700 line-clamp-3">{council.description}</p>
          {council.topics && council.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {council.topics.slice(0, 3).map(topic => (
                <span
                  key={topic}
                  className="text-xs px-2 py-1 rounded bg-parchment-200 text-ink-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </Link>
      </div>

      {/* Center dot */}
      <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10">
        <div className={`h-5 w-5 rounded-xs border-4 border-gold-400/40 ${eraColor} shadow-sm`} />
      </div>

      {/* Mobile content */}
      <div className="flex-1 md:hidden pl-12">
        <span
          className={`inline-block px-3 py-1 rounded-xs text-xs font-semibold text-white mb-3 ${eraColor}`}
        >
          #{council.number}
        </span>
        <h3 className="font-serif text-lg font-semibold text-ink-900 mb-1">{council.name}</h3>
        <p className="text-xs text-ink-500 italic mb-2">{council.nameLatin}</p>
        <div className="flex items-center gap-3 text-sm text-ink-600 mb-2">
          <span>{council.year}</span>
          <span>·</span>
          <span>{council.location}</span>
        </div>
        <p className="text-ink-700 text-sm line-clamp-2">{council.description}</p>
      </div>

      {/* Desktop spacer */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
}
