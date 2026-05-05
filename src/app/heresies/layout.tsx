import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Hérésies et condamnations",
  description: "Les principales hérésies condamnées par l'Église catholique",
};

export default function DoctrineLayout({ children }: { children: ReactNode }) {
  return (
    <SectionLayout
      title="Hérésies et condamnations"
      description="Les principales hérésies condamnées par l'Église catholique, avec leurs erreurs, leurs réfutations patristiques, et les condamnations conciliaires ou pontificales."
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Hérésies" }]}
    >
      {children}
    </SectionLayout>
  );
}
