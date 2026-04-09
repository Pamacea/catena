/**
 * JEREMIE - Grand prophete
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const jeremiahSummary: BookSummary = {
  id: "jeremiah",
  bookName: "Jérémie",
  frenchName: "Jérémie",
  abbreviation: "Jr",
  testament: "OLD",
  genre: "PROPHETIC",
  section: "04-Grands-Prophetes",
  overview: "Le prophete de la Nouvelle Alliance. Jeremie exerce son ministere pendant les derniers jours du royaume de Juda, sous Josias, Joiakim et Sedecias, jusqu'a la chute de Jerusalem en 587 av. J.-C. Il annonce la Nouvelle Alliance (Jr 31:31-34) : loi ecrite dans les coeurs, connaissance directe de Dieu, pardon total. Ses confessions revelent la souffrance du prophete rejeté.",
  authorship: "Jeremie (Yirmeyahu) avec son secretaire Baruch.",
  date: "~626-587 av. J.-C.",
  keyThemes: [
    "La Nouvelle Alliance (loi dans les coeurs, pardon total)",
    "Le prophete souffrant (confessions de Jeremie)",
    "Le potier et l'argile (Dieu peut remodeler)",
    "Le fiance trahi (Israel epouse infidele)",
    "Promesses de restauration (Jr 29:11)",
    "La chute inevitable de Jerusalem",
  ],
  keyFigures: [
    "Jeremie - Prophete de la Nouvelle Alliance",
    "Baruch - Secretaire de Jeremie, redacteur des oracles",
    "Josias - Roi reformateur sous lequel Jeremie commence",
    "Sedecias - Dernier roi de Juda, temoin de la chute",
    "Hanania - Faux prophete qui annonce la paix",
  ],
  keyPassages: [
    "Jr 1:4-10 - Vocation de Jeremie, prophete des nations",
    "Jr 7 - Discours du Temple (religion vs reforme)",
    "Jr 18:6 - Le potier et l'argile",
    "Jr 20:7-9 - Confession du prophete souffrant",
    "Jr 29:11 - 'Projets de paix et non de malheur'",
    "Jr 31:31-34 - La Nouvelle Alliance",
    "Jr 32 - Achat du champ pendant le siege",
  ],
  theologicalSignificance: "Jeremie annonce la Nouvelle Alliance accomplie par Jesus a la Cene : 'Cette coupe est la nouvelle alliance en mon sang' (Lc 22:20). Le prophete souffrant prefigure le Christ. 'Rachel pleure ses fils' (Jr 31:15) est cite en Mt 2:18. Jeremie achete un champ pendant le siege comme acte de foi dans la restauration future.",
  christologicalTypes: [
    "La Nouvelle Alliance accomplie par Christ (Lc 22:20, He 8:8-12)",
    "Jeremie prophete souffrant prefigure le Christ rejeté",
    "Rachel pleurant ses fils (Jr 31:15, Mt 2:18)",
    "Le Germe de Justice (Jr 23:5-6) annonce le Messie roi davidique",
  ],
}

export const jeremiahReadingNotes: BookReadingNotes = {
  bookId: "jeremiah",
  bookName: "Jérémie",
  section: "04-Grands-Prophetes",
  number: 30,
  chapters: 52,
  summary: "Prophete de la Nouvelle Alliance, temoin de la chute de Jerusalem. Ses confessions revelent la souffrance de celui qui parle verite au pouvoir.",
  keyThemes: [
    "Nouvelle Alliance",
    "Prophete souffrant",
    "Potier et argile",
    "Restauration",
    "Chute de Jerusalem",
  ],
  introduction: "Structure : appel et ministere (1-25), oracles contre les nations (46-51), appendices historiques (52 : chute de Jerusalem, liberation de Joiachin).",
  sections: [
    {
      title: "Appel et ministere (1-25)",
      content: "Vocation de Jeremie comme prophete des nations. Discours du Temple (ch. 7). Alliance brisee (ch. 11). Confessions du prophete (11:18-12:6, 15:10-21, 17:14-18, 18:18-23, 20:7-18). Le potier (ch. 18). Conflit avec les faux prophetes.",
    },
    {
      title: "Oracles contre les nations (46-51)",
      content: "Egypte, Philistins, Moab, Ammon, Edom, Damas, Elam, Babylone. Dieu juge les nations.",
    },
    {
      title: "Appendices historiques (52)",
      content: "Chute de Jerusalem en 587 (parallel a 2 Rois 24-25). Liberation de Joiachin en prison : espoir pour la dynastie davidique.",
    },
  ],
}
