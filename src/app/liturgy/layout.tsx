import type { ReactNode } from "react";
import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "Liturgie",
  description: "Prière sacramentelle et liturgique",
};

export default function LiturgyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-200">
      <Header compact />
      <main className="flex-1 px-6 py-8">
        <div className="max-w-2/3 mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
