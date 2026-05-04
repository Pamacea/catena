import { DisputatioCardGrid } from "@/components/disputationes/DisputatioCardGrid";

export const metadata = {
  title: "Disputationes",
  description:
    "Questions disputées selon la méthode scolastique de saint Thomas d'Aquin",
};

export default function DisputationesPage() {
  return <DisputatioCardGrid />;
}
