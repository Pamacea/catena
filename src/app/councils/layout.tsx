import type { ReactNode } from "react";
import { SectionLayout } from "@/components/layout";

export const metadata = {
  title: "Conciles",
  description: "Conciles œcuméniques de l'Église",
};

export default function TimelineLayout({ children }: { children: ReactNode }) {
  return (
    <SectionLayout
      title="Conciles Œcuméniques"
      description="Les 21 conciles reconnus par l'Église catholique"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Conciles" }]}
    >
      {children}
    </SectionLayout>
  );
}
