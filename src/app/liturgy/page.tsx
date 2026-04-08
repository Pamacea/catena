import Link from "next/link";
import { prayers, PrayerCategory } from "@/data/prayers";

// Configuration des catégories
const categoryConfig: Record<PrayerCategory, { label: string; description: string }> = {
  [PrayerCategory.OUR_FATHER]: {
    label: "Notre Père",
    description: "La prière enseignée par Jésus-Christ",
  },
  [PrayerCategory.HAIL_MARY]: {
    label: "Je vous salue Marie",
    description: "Salutation angélique et demande d'intercession",
  },
  [PrayerCategory.CREED]: {
    label: "Symboles de foi",
    description: "Profession de foi trinitaire",
  },
  [PrayerCategory.ACTS]: {
    label: "Actes de foi",
    description: "Actes de foi, espérance et charité",
  },
  [PrayerCategory.LITANY]: {
    label: "Litanies",
    description: "Prières de supplication",
  },
  [PrayerCategory.ROSARY]: {
    label: "Rosaire",
    description: "Méditation des mystères de la vie du Christ",
  },
  [PrayerCategory.LITURGICAL]: {
    label: "Prières liturgiques",
    description: "Prières de la liturgie sacrée",
  },
  [PrayerCategory.MARIAN]: {
    label: "Prières mariales",
    description: "Dévotion à la Vierge Marie",
  },
  [PrayerCategory.SAINT]: {
    label: "Prières aux saints",
    description: "Intercession des saints et anges",
  },
  [PrayerCategory.EUCHARISTIC]: {
    label: "Prières eucharistiques",
    description: "Adoration et communion",
  },
  [PrayerCategory.PENITENTIAL]: {
    label: "Prières de pénitence",
    description: "Repentir et contrition",
  },
  [PrayerCategory.MORNING]: {
    label: "Prières du matin",
    description: "Offrande de la journée",
  },
  [PrayerCategory.EVENING]: {
    label: "Prières du soir",
    description: "Action de grâce et examen",
  },
  [PrayerCategory.MEAL]: {
    label: "Prières des repas",
    description: "Bénédicité et grâces",
  },
  [PrayerCategory.OTHER]: {
    label: "Autres prières",
    description: "Prières diverses",
  },
};

// Prières essentielles à connaître
const essentialSlugs = [
  "pater-noster",
  "ave-maria",
  "gloria-patri",
  "symbole-des-apotres",
  "acte-contrition",
];

export default function LiturgyPage() {
  // Prières essentielles
  const essentialPrayers = prayers.filter(p => essentialSlugs.includes(p.slug));

  // Prières quotidiennes (matin, soir, repas)
  const dailyPrayers = prayers.filter(
    p =>
      p.category === PrayerCategory.MORNING ||
      p.category === PrayerCategory.EVENING ||
      p.category === PrayerCategory.MEAL
  );

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Prières essentielles */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-ink-900">Prières essentielles</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {essentialPrayers.map(prayer => (
            <PrayerLink key={prayer.slug} prayer={prayer} />
          ))}
        </div>
      </section>

      {/* Prières quotidiennes */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-ink-900">Prières quotidiennes</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {dailyPrayers.map(prayer => (
            <PrayerLink key={prayer.slug} prayer={prayer} />
          ))}
        </div>
      </section>

      {/* Toutes les prières par catégorie */}
      <section className="space-y-8">
        <h2 className="font-serif text-2xl font-bold text-ink-900">Toutes les prières</h2>

        <div className="space-y-6">
          {Object.entries(categoryConfig).map(([key, config]) => {
            const categoryPrayers = prayers.filter(p => p.category === key);
            if (categoryPrayers.length === 0) return null;

            return (
              <div key={key} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink-900">
                      {config.label}
                    </h3>
                    <p className="text-sm text-ink-600">{config.description}</p>
                  </div>
                  <span className="ml-auto text-sm text-gold-600">{categoryPrayers.length}</span>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {categoryPrayers.map(prayer => (
                    <PrayerLink key={prayer.slug} prayer={prayer} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// Composant pour un lien vers une prière
function PrayerLink({ prayer }: { prayer: (typeof prayers)[0] }) {
  const config = categoryConfig[prayer.category];
  const excerpt = prayer.sections[0]?.verses[0];

  return (
    <Link
      href={`/liturgy/${prayer.slug}`}
      className="block p-4 border-l-2 border-gold-400/40 hover:border-gold-400/40 hover:bg-parchment-100 transition-all group"
    >
      <div className="flex-1 min-w-0">
        <h4 className="font-serif font-semibold text-ink-900 group-hover:text-ink-700 transition-colors">
          {prayer.name}
        </h4>
        {prayer.nameLatin && (
          <p className="text-sm text-ink-600 italic truncate">{prayer.nameLatin}</p>
        )}
        {excerpt && <p className="text-sm text-ink-700 line-clamp-2 mt-2">{excerpt.french}</p>}
      </div>
    </Link>
  );
}
