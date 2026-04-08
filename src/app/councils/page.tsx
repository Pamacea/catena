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
    <div className="min-h-screen">
      <main className="px-6 py-12">
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          {/* Era navigation */}
          <nav className="flex flex-wrap gap-2 mb-12 justify-center items-center">
            <Link
              href="/councils"
              className="px-4 py-2 rounded-xs bg-ink-900 text-white text-sm font-medium transition-all hover:bg-ink-800"
            >
              Tous
            </Link>
            {eras.map(era => (
              <Link
                key={era.id}
                href={`#era-${era.id}`}
                className="px-4 py-2 rounded-xs bg-parchment-100 text-ink-700 text-sm font-medium transition-all hover:bg-parchment-200 border border-gold-400/30"
              >
                {era.name}
              </Link>
            ))}
          </nav>

          {/* Timeline */}
          <div>
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
                  </div>

                  {/* Councils */}
                  <div className="space-y-12">
                    {eraCouncils.map(council => (
                      <CouncilItem
                        key={council.slug}
                        council={council}
                        eraColor={era.color}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

        </div>
      </main>

    </div>
  );
}

// Council item component
function CouncilItem({
  council,
  eraColor,
}: {
  council: (typeof councils)[0];
  eraColor: string;
}) {
  return (
    <Link
      href={`/doctrine/councils/${council.slug}`}
      className="group block border border-gold-400/30 rounded-xs bg-stone-50 p-6 hover:border-gold-500/50 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xs text-white text-sm font-bold ${eraColor}`}>
          {council.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-semibold text-ink-900 group-hover:text-gold-700 transition-colors">
            {council.name}
          </h3>
          <p className="text-sm text-ink-500 italic mb-2">{council.nameLatin}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-600 mb-3">
            <span>{council.year}{council.yearEnd && ` — ${council.yearEnd}`}</span>
            <span>·</span>
            <span>{council.location}</span>
          </div>
          <p className="text-ink-700 leading-relaxed">{council.description}</p>
          {council.topics && council.topics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {council.topics.slice(0, 3).map(topic => (
                <span key={topic} className="text-xs px-2 py-1 rounded-xs bg-parchment-200 text-ink-700">
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
