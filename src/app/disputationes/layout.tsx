import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Disputationes",
  description: "Questions disputées selon la méthode scolastique de saint Thomas d'Aquin",
};

export default function DisputationesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SectionLayout
      title="Disputationes"
      description="Questions disputées selon la méthode scolastique : objections, sed contra, respondeo, ad argumenta"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Disputationes" }]}
    >
      {children}
    </SectionLayout>
  );
}
