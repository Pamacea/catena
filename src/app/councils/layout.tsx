import type { ReactNode } from "react";
import { Header, Footer } from "@/components/layout";
import { Hourglass } from "@/components/ui/Icons";

export const metadata = {
  title: "Conciles",
  description: "Conciles œcuméniques de l'Église",
};

export default function TimelineLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-200">
      <Header compact />
      <main className="flex-1 px-6 py-8">
        <div className="max-w-2/3 mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-ink-600 mb-6">
            <a href="/" className="hover:text-gold-700 transition-colors">
              Accueil
            </a>
            <span className="text-gold-500">/</span>
            <span className="text-ink-900">Conciles</span>
          </nav>

          {/* Section header */}
          <header className="mb-10 pb-6 border-b-2 border-gold-400/30 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-3">
              Conciles Œcuméniques
            </h1>
            <p className="text-lg text-ink-700 mx-auto">Les 21 conciles reconnus par l'Église catholique</p>
          </header>

          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
