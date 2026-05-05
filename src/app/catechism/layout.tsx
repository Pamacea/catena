import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Catéchisme",
  description: "Enseignement de la foi chrétienne",
};

export default function CatechismLayout({ children }: { children: ReactNode }) {
  return (
    <SectionLayout
      title="Catéchisme de l'Église Catholique"
      description="Enseignement de la foi chrétienne"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Catéchisme" }]}
    >
      {children}
    </SectionLayout>
  );
}
