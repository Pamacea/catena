/**
 * ESAIE - Grand prophete
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const isaiahSummary: BookSummary = {
  id: "isaiah",
  bookName: "Isaïe",
  frenchName: "Esaïe",
  abbreviation: "Es",
  testament: "OLD",
  genre: "PROPHETIC",
  section: "04-Grands-Prophetes",
  overview: "Le plus volumineux des prophetes. Trois parties : le Livre de l'Emmanuel (1-39) avec oracles contre Juda et les nations ; le Livre du Serviteur (40-55) avec les quatre Chants du Serviteur souffrant ; le Livre de la Gloire (56-66) promettant un ciel nouveau et une terre nouvelle. Isaïe est le prophète le plus cite dans le Nouveau Testament.",
  authorship: "Tradition : le prophète Isaïe (Yeshayahu). Critique : trois auteurs/periodes (Proto-Isaie VIIIe s., Deutero-Isaie VIe s., Trito-Isaie post-exilique).",
  date: "~740-700 av. J.-C. (ministere), avec parties exiliques et post-exiliques",
  keyThemes: [
    "La saintete de Dieu (Qadosh)",
    "L'Emmanuel, 'Dieu avec nous'",
    "Les quatre Chants du Serviteur souffrant",
    "Le salut universel offert a toutes les nations",
    "L'Esprit du Seigneur et ses sept dons",
    "Le ciel nouveau et la terre nouvelle",
  ],
  keyFigures: [
    "Isaie - Prophete de l'Emmanuel, fils d'Amots",
    "L'Emmanuel - Enfant signe messianique (Es 7:14)",
    "Le Serviteur souffrant - Quatre chants (Es 42, 49, 50, 52-53)",
    "Cyrus - Roi perse appele 'Oint' (Messie) de Yahve (Es 45:1)",
    "Le Rejeton de Jesse - Sur lui reposera l'Esprit (Es 11:2)",
  ],
  keyPassages: [
    "Es 6 - Vocation d'Isaie, Trisagion ('Saint, saint, saint')",
    "Es 7:14 - Emmanuel, signe messianique",
    "Es 9:5-6 - Enfant merveilleux, Prince de paix",
    "Es 11:1-9 - Rejeton de Jesse, sept dons de l'Esprit",
    "Es 40:1-11 - Consolation, voix dans le desert",
    "Es 42:1-4 - Premier chant du Serviteur",
    "Es 52:13-53:12 - Quatrieme chant du Serviteur souffrant",
    "Es 61:1-3 - L'Esprit du Seigneur, mission du Messie",
    "Es 65:17-25 - Cieux nouveaux et terre nouvelle",
  ],
  theologicalSignificance: "Isaie est le prophete messianique par excellence. L'Emmanuel (7:14), le Serviteur souffrant (52-53), et le ciel nouveau (65:17) trouvent leur accomplissement en Christ. Le plus cite dans le NT, Isaie prefigure Jean-Baptiste (40:3), la mission de Jesus (61:1-2, Lc 4:18-19), et la passion du Christ (53).",
  christologicalTypes: [
    "L'Emmanuel 'Dieu avec nous' (Es 7:14, Mt 1:23)",
    "Le Serviteur souffrant transperce pour nos crimes (Es 53:5, 1 P 2:24)",
    "L'Esprit du Seigneur sur le Messie (Es 61:1-2, Lc 4:18-19)",
    "La voix dans le desert (Es 40:3, Mt 3:3, Jn 1:23)",
    "Le Fils qui serait appele 'Dieu puissant' (Es 9:5)",
    "Le ciel nouveau et la terre nouvelle (Es 65:17, Ap 21:1)",
  ],
}

export const isaiahReadingNotes: BookReadingNotes = {
  bookId: "isaiah",
  bookName: "Isaïe",
  section: "04-Grands-Prophetes",
  number: 29,
  chapters: 66,
  summary: "Le prophete de l'Emmanuel et du Serviteur souffrant. Le plus volumineux et le plus cite des prophetes dans le Nouveau Testament.",
  keyThemes: [
    "Saintete de Dieu",
    "Emmanuel",
    "Serviteur souffrant",
    "Salut universel",
    "Esprit du Seigneur",
    "Ciel nouveau",
  ],
  introduction: "Trois parties : Livre de l'Emmanuel (1-39 : oracles, apocalypse d'Isaie 24-27, historique 36-39), Livre du Serviteur (40-55 : consolation, quatre chants), Livre de la Gloire (56-66 : salut universel, gloire de Sion).",
  sections: [
    {
      title: "Le Livre de l'Emmanuel (1-39)",
      content: "Oracles contre Juda et les nations. Vision de la saintete divine (ch. 6). Signe de l'Emmanuel (7:14). Enfant merveilleux (9:5-6). Rejeton de Jesse (11). Apocalypse d'Isaie (24-27). Historique (36-39).",
    },
    {
      title: "Le Livre du Serviteur (40-55)",
      content: "Consolation d'Israel : 'Consolez, consolez mon peuple' (40:1). Monothéisme exclusif. Cyrus comme instrument. Quatre Chants du Serviteur : choisi (42), forme des le sein (49), humilie (50), souffrant expiatoire (52:13-53:12). Salut universel (45:22).",
    },
    {
      title: "Le Livre de la Gloire (56-66)",
      content: "Salut offert a tous. Justice sociale. Cieux nouveaux et terre nouvelle (65:17). Jérusalem restaurée, gloire de Sion. Plus de larmes, plus de cris.",
    },
  ],
}
