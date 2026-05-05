import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Chronologie",
  description: "Chronologie de la foi : conciles, livres, personnages et événements majeurs",
};

export default function ChronologieLayout({ children }: { children: ReactNode }) {
  return (
    <SectionLayout
      title="Chronologie de la Foi"
      description="Conciles, livres bibliques, personnages et événements majeurs de l'histoire du salut"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Chronologie" }]}
    >
      {children}
    </SectionLayout>
  );
}
