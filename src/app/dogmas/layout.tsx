import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Dogmes et Vérités de Foi",
  description: "Les dogmes définis par l'Église catholique",
};

export default function DogmasLayout({ children }: { children: ReactNode }) {
  return (
    <SectionLayout
      title="Dogmes et Vérités de Foi"
      description="Les dogmes définis par l'Église catholique à travers les conciles œcuméniques, les bulles pontificales et les encycliques."
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Dogmes" }]}
    >
      {children}
    </SectionLayout>
  );
}
