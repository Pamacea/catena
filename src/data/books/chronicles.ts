/**
 * CHRONIQUES (1 et 2) - Livres historiques
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const chroniclesSummary: BookSummary = {
  id: "chronicles",
  bookName: "Chroniques",
  frenchName: "Les Chroniques",
  abbreviation: "1-2 Ch",
  testament: "OLD",
  genre: "HISTORICAL",
  section: "02-Livres-Historiques",
  overview: "Relecture cultuelle de l'histoire d'Israel, de la creation a la chute de Jerusalem (1 Chroniques : genealogies et regne de David ; 2 Chroniques : regne de Salomon jusqu'a l'exil). Perspective sacerdotale : le Temple, le culte et la liturgie sont au centre de l'histoire. David est idealise comme fondateur du culte. Les Chroniques insistent sur la theologie de la retribution.",
  authorship: "Attribue traditionnellement a Esdras. Auteur inconnu (Ve siecle, peut-etre le 'Chroniste').",
  date: "~450-400 av. J.-C. (periode perse, apres l'exil)",
  keyThemes: [
    "Le Temple et le culte comme centre de l'histoire d'Israel",
    "La theologie de la retribution (fidelite = benediction, infidelite = chatiment)",
    "David comme fondateur ideal du culte levitique",
    "Les genealogies comme lien entre creation et promesse",
    "L'espoir de restauration apres l'exil",
  ],
  keyFigures: [
    "David - Roi idealise, organisateur du culte et des levites",
    "Salomon - Constructeur du Temple (parallele a 1 Rois)",
    "Josias - Reforme cultuelle majeure (2 Ch 34-35)",
    "Le Chroniste - Auteur/editeur, perspective sacerdotale",
  ],
  keyPassages: [
    "1 Ch 1-9 - Genealogies d'Adam aux familles post-exiliques",
    "1 Ch 17 - Alliance davidique : dynastie eternelle",
    "1 Ch 22-29 - Preparation du Temple, organisation des levites",
    "2 Ch 7:14 - 'Si mon peuple... s'humilie, prie... je guerirai leur pays'",
    "2 Ch 36:22-23 - Decret de Cyrus (fin ouverte, espoir de restauration)",
  ],
  theologicalSignificance: "Les Chroniques reecrivent l'histoire d'Israel pour la communaute post-exilique. La fin ouverte (decret de Cyrus) montre que l'histoire de Dieu avec son peuple continue. L'accent sur le culte et la priere (2 Ch 7:14) oriente vers la spiritualite de la priere et de la penitence. Les genealogies relient la communaute restituee a toute l'histoire du salut.",
  christologicalTypes: [
    "L'alliance davidique eternelle (1 Ch 17) accomplie en Christ (Lc 1:32-33)",
    "Le Temple comme centre prefigure le corps de Christ (Jn 2:19-21)",
    "Le decret de Cyrus prefigure la liberte en Christ",
  ],
}

export const chroniclesReadingNotes: BookReadingNotes = {
  bookId: "chronicles",
  bookName: "Chroniques",
  section: "02-Livres-Historiques",
  number: 17,
  chapters: 65,
  summary: "Relecture cultuelle de l'histoire d'Israel. Perspective sacerdotale avec le Temple au centre. Fin ouverte avec le decret de Cyrus.",
  keyThemes: [
    "Temple et culte",
    "Retribution",
    "Genealogies",
    "Restauration",
    "Priere",
  ],
  introduction: "1 Chroniques : genealogies (1-9), royaume de David (10-29). 2 Chroniques : Salomon et le Temple (1-9), royaume de Juda (10-36). En parallele avec 2 Samuel et 1-2 Rois mais avec perspective cultuelle.",
  sections: [
    {
      title: "Genealogies et David (1 Ch 1-29)",
      content: "Genealogies d'Adam aux post-exiliques (ch. 1-9). Mort de Saul (ch. 10). Regne de David : conquetes, alliance davidique (ch. 17), peche du recensement, organisation des levites, preparation du Temple (ch. 22-29).",
    },
    {
      title: "Salomon et le Temple (2 Ch 1-9)",
      content: "Sagesse de Salomon (ch. 1). Construction et dedication du Temple (ch. 2-7). Gloire de Salomon, alliances commerciales (ch. 8-9).",
    },
    {
      title: "Royaume de Juda et chute (2 Ch 10-36)",
      content: "Schisme : Roboam et Jeroboam (ch. 10-12). Rois de Juda avec evaluations cultuelles. Reforme de Josias (ch. 34-35). Chute de Jerusalem (ch. 36). Decret de Cyrus : fin ouverte et espoir (36:22-23).",
    },
  ],
}
