/**
 * ESTHER - Livre historique
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const estherSummary: BookSummary = {
  id: "esther",
  bookName: "Esther",
  frenchName: "Esther",
  abbreviation: "Est",
  testament: "OLD",
  genre: "HISTORICAL",
  section: "02-Livres-Historiques",
  overview: "Recit de la diaspora perse. Esther, juive devenue reine de Perse, sauve son peuple du genocide ourdi par Haman. Le livre celebre la providence divine sans mentionner Dieu explicitement. A l'origine de la fete de Pourim. Mordecai, son cousin, refuse de se prosterner devant Haman, declenchant le conflit.",
  authorship: "Inconnu. Juif de la diaspora perse. Redaction au Ve-IVe siecle av. J.-C.",
  date: "~480-460 av. J.-C. (regne de Xerxès Ier / Assuerus)",
  keyThemes: [
    "La providence divine cachee (Dieu n'est jamais nomme)",
    "Fidelite identitaire dans la diaspora",
    "Renversement du destin (Pourim)",
    "Courage face a l'autorite",
    "Justice et retribution",
  ],
  keyFigures: [
    "Esther (Hadassah) - Juive devenue reine de Perse, sauve son peuple",
    "Mordecai - Cousin d'Esther, refuse de se prosterner devant Haman",
    "Haman - Agagite, ennemi des Juifs, ourdit le genocide",
    "Assuerus (Xerxès Ier) - Roi de Perse",
    "Vasti - Premiere reine, deposee pour avoir refuse de comparaitre",
  ],
  keyPassages: [
    "Est 2:7 - Mordecai eleve Esther, sa cousine orpheline",
    "Est 3:1 - Haman promu, Mordecai refuse de se prosterner",
    "Est 4:14 - 'Qui sait si tu n'es pas arrivee a la royaute pour un moment comme celui-ci ?'",
    "Est 6:1 - Insomnie d'Assuerus, lecture des annales, honneur de Mordecai",
    "Est 9:22 - Institution de Pourim, conversion de la tristesse en joie",
  ],
  theologicalSignificance: "Esther illustre la providence divine dans l'histoire sans miracle visible. 'Qui sait si tu n'es pas arrivee a la royaute ?' (4:14) revele le plan cache de Dieu. Le renversement du destin prefigure la victoire finale du bien sur le mal. Mordecai qui refuse de se prosterner rappelle la fidelite au Dieu unique.",
  christologicalTypes: [
    "Le renversement du destin prefigure la victoire de la resurrection sur la mort",
    "Esther intercede devant le roi prefigure l'intercession de Christ (He 7:25)",
    "La deliverance de la mort prefigure le salut en Christ",
  ],
}

export const estherReadingNotes: BookReadingNotes = {
  bookId: "esther",
  bookName: "Esther",
  section: "02-Livres-Historiques",
  number: 19,
  chapters: 10,
  summary: "Recit de la deliverance des Juifs en Perse. Esther sauve son peuple du genocide. Providence divine cachee. Origine de la fete de Pourim.",
  keyThemes: [
    "Providence cachee",
    "Identite juive",
    "Pourim",
    "Renversement",
    "Fidelite",
  ],
  introduction: "Deux versions grecques (Septante) avec ajouts (prieres de Mordecai et Esther, lettre de mort). Canon hebreu : 10 chapitres sans mention de Dieu.",
  sections: [
    {
      title: "Montee de Haman (1-3)",
      content: "Festin d'Assuerus. Vasti deposee (ch. 1). Esther choisie comme reine (ch. 2). Mordecai refuse de se prosterner. Haman obtient le decret de genocide contre les Juifs (ch. 3).",
    },
    {
      title: "Renversement (4-7)",
      content: "Mordecai supplie Esther (4:14). Jeune et priere. Second festin d'Esther (ch. 5). Insomnie d'Assuerus, honneur de Mordecai (ch. 6). Haman pendu a sa propre potence (ch. 7).",
    },
    {
      title: "Deliverance et Pourim (8-10)",
      content: "Nouveau decret, droit de defense pour les Juifs (ch. 8). Victoire des Juifs. Institution de Pourim (ch. 9). Grandeur de Mordecai (ch. 10).",
    },
  ],
}
