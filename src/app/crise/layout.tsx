import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export default function CriseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SectionLayout
      title="Crise dans l'Église"
      description=""
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Crise" }]}
      hideHeader
    >
      {children}
    </SectionLayout>
  );
}
