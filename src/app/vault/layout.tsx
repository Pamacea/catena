import type { ReactNode } from "react";
import { Header } from "@/components/layout";

export const metadata = {
  title: "Vault",
  description: "Notes d'étude et ressources du vault Obsidian",
};

export default function VaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-200">
      <Header compact />
      <main className="flex-1 p-4 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
