import Link from "next/link";
import {
  CrossGothic,
  BookBible,
  Scroll,
  Candle,
  Church,
  CrossPatee,
  OrnamentLeft,
  OrnamentRight,
  SeparatorCross,
} from "@/components/ui/Icons";
import { Header, Footer } from "@/components/layout";

const sections = [
  {
    name: "Bible",
    href: "/bible",
    description: "Parole de Dieu — Ancien et Nouveau Testament",
  },
  {
    name: "Hérésies",
    href: "/heresies",
    description: "Hérésies condamnées et dogmes de la foi catholique",
  },
  {
    name: "Catéchisme",
    href: "/catechism",
    description: "Enseignement de la foi chrétienne",
  },
  {
    name: "Liturgie",
    href: "/liturgy",
    description: "Prière sacramentelle et liturgique",
  },
];

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Bible: BookBible,
  Hérésies: Scroll,
  Catéchisme: Candle,
  Liturgie: Church,
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-300">
      <Header />

      {/* Contenu principal - Hero majestueux */}
      <main className="flex-1 px-6 py-16 max-w-2/3 mx-auto stagger">
          {/* Hero section avec titre majestueux */}
          <section className="mb-20 text-center relative">
            {/* Vignettes d'angle gothiques — hidden on small screens */}
            <div className="hidden sm:block absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500" />
            <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-500" />
            <div className="hidden sm:block absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-500" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500" />

            <div className="py-16 px-4 sm:px-8 stagger">
              <p className="text-xs uppercase tracking-[0.4em] text-gold-600 mb-6 font-semibold">
                In Nomine Patris
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ink-900 mb-8 leading-tight">
                La Tradition
                <span className="block text-gold-600 mt-2">chrétienne</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-ink-700 mx-auto leading-relaxed font-light">
                Exploration de la tradition sacrée à travers la Bible, la doctrine, le catéchisme et
                la liturgie.
              </p>
            </div>
          </section>

          {/* Navigation - Enluminures gothiques */}
          <section>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-ink-500 mb-4 flex items-center justify-center gap-4">
                <OrnamentLeft className="w-6 h-6 text-gold-500" />
                <span>Via Sacra</span>
                <OrnamentRight className="w-6 h-6 text-gold-500" />
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px bg-gold-400 w-16" />
                <SeparatorCross className="w-16 h-3 text-gold-500" />
                <div className="h-px bg-gold-400 w-16" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto stagger">
              {sections.map(section => {
                const Icon = sectionIcons[section.name];
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group relative bg-stone-50 border-2 border-gold-400 p-8 hover:border-gold-600 card-lift btn-press"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  >
                    {/* Ornement coin */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500" />

                    {/* Icône enluminure */}
                    <div className="text-gold-600 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <Icon className="w-12 h-12" />
                    </div>

                    {/* Titre */}
                    <h3 className="font-serif text-2xl text-ink-900 mb-3 group-hover:text-gold-700 transition-colors text-center">
                      {section.name}
                    </h3>

                    {/* Description */}
                    <p className="text-ink-600 text-sm leading-relaxed text-center">
                      {section.description}
                    </p>

                    {/* Lien subtil */}
                    <div className="mt-4 flex items-center text-gold-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity justify-center">
                      <span>Explorer</span>
                      <CrossPatee className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Accès chronologie - Style parchment */}
          <section className="mt-20 text-center">
            <Link
              href="/chronologie"
              className="inline-flex items-center gap-4 text-ink-700 hover:text-gold-700 group border-2 border-gold-400 px-8 py-4 hover:border-gold-600 hover:bg-stone-50 card-lift btn-press"
            >
              <CrossPatee className="w-6 h-6 text-gold-600 group-hover:translate-x-1 transition-transform" />
              <span className="font-serif text-lg">Explorer la chronologie</span>
            </Link>
          </section>
      </main>

      <Footer />
    </div>
  );
}
