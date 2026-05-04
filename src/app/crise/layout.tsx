import type { ReactNode } from "react";
import { Header, Footer } from "@/components/layout";

export default function CriseLayout({
  children,
}: {
  children: ReactNode;
}) {
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
            <a href="/crise" className="hover:text-gold-700 transition-colors">
              Crise
            </a>
          </nav>

          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
