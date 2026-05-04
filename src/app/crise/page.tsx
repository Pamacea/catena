import Link from "next/link";

const sections = [
  {
    title: "Vatican II",
    href: "/crise/vatican-ii",
    description:
      "Les erreurs doctrinales du concile, les preuves de leur contradiction avec le Magistère antérieur, et la démonstration que Vatican II ne peut être reçu comme concile œcuménique.",
    color: "border-red-400/40",
    badge: "bg-red-100 text-red-800",
  },
  {
    title: "Thèse de Cassiciacum",
    href: "/crise/cassiciacum",
    description:
      "L'explication thomiste de l'état actuel de l'autorité dans l'Église, par le Père Guérard des Lauriers O.P. Fondements doctrinaux, preuves et réponses aux objections.",
    color: "border-gold-400/40",
    badge: "bg-gold-100 text-gold-800",
  },
  {
    title: "Non Una Cum",
    href: "/crise/non-una-cum",
    description:
      "La question liturgique et théologique du Non Una Cum : pourquoi ne pas nommer le pape au Canon de la Messe, avec les arguments et les références.",
    color: "border-amber-400/40",
    badge: "bg-amber-100 text-amber-800",
  },
];

export const metadata = {
  title: "Crise de l'Église",
  description:
    "Études théologiques sur la crise post-conciliaire : Vatican II, la Thèse de Cassiciacum et le Non Una Cum.",
};

export default function CrisePage() {
  return (
    <>
      {/* Header */}
      <header className="mb-10 pb-6 border-b-2 border-gold-400/30 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-3">
          Crise de l&apos;Église
        </h1>
        <p className="text-lg text-ink-700 mx-auto">
          Études théologiques sur la crise ouverte par Vatican II, les
          fondements de la position Non Una Cum, et l&apos;analyse thomiste de
          l&apos;autorité dans l&apos;Église.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-10">
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Depuis le Concile Vatican II (1962–1965) et les réformes qui
            l&apos;ont suivi, l&apos;Église catholique traverse une crise sans
            précédent dans son histoire. Les catholiques fidèles à la Tradition
            sont confrontés à un dilemme de conscience : comment concilier
            l&apos;obéissance à l&apos;autorité ecclésiastique avec la
            nécessité de préserver la foi, le culte et la discipline
            traditionnels ?
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Les trois études présentées ici sont complémentaires : la première
            établit le <strong>constat</strong> des erreurs de Vatican II et
            démontre qu&apos;il ne peut être reçu comme concile œcuménique ; la
            deuxième propose une <strong>solution théologique</strong> au
            problème de l&apos;autorité ; la troisième en tire les{" "}
            <strong>conséquences pratiques</strong> dans la liturgie.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group block p-6 rounded-xs border ${s.color} bg-stone-50 hover:bg-parchment-50/50 hover:shadow-sm transition-all`}
            >
              <span
                className={`inline-block text-xs px-2 py-0.5 rounded-xs ${s.badge} font-medium mb-3`}
              >
                Étude
              </span>
              <h2 className="font-serif text-xl font-semibold text-ink-900 mb-2 group-hover:text-gold-700 transition-colors">
                {s.title}
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed">
                {s.description}
              </p>
              <span className="inline-block mt-4 text-sm text-gold-600 group-hover:text-gold-700 transition-colors">
                Lire →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
