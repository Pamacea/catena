import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Bible",
  description: "Parole de Dieu — Ancien et Nouveau Testament",
};

export default function BibleLayout({ children }: { children: ReactNode }) {
  return (
    <SectionLayout
      title="La Sainte Bible"
      description="Parole de Dieu — Ancien et Nouveau Testament"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Bible" }]}
    >
      {children}
    </SectionLayout>
  );
}
