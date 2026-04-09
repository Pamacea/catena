/**
 * ESDRAS-NEHEMIE - Livres historiques (post-exiliques)
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const ezraNehemiahSummary: BookSummary = {
  id: "ezra-nehemiah",
  bookName: "Esdras-Nehemie",
  frenchName: "Esdras et Nehemie",
  abbreviation: "Es-Ne",
  testament: "OLD",
  genre: "HISTORICAL",
  section: "02-Livres-Historiques",
  overview: "Recit de la restauration post-exilique. Esdras : retour des exiles sous Zorobabel, reconstruction du Temple (538-516 av. J.-C.), puis retour d'Esdras, scribe et docteur de la Loi, avec reforme des mariages mixtes. Nehemie : gouverneur perse, reconstruction des murailles de Jerusalem, reformes cultuelles et sociales. La Loi de Moise est au centre de la nouvelle communaute.",
  authorship: "Memoires d'Esdras et Nehemie, compiles par un editeur post-exilique. Le 'Memoire d'Esdras' (Esdras 7-10, Neh 8-9) et le 'Memoire de Nehemie' (Neh 1-7, 11-13) sont des sources primaires.",
  date: "~450-400 av. J.-C. (periode perse)",
  keyThemes: [
    "La restauration apres l'exil (retour et reconstruction)",
    "Le Temple comme centre de la communaute restaurée",
    "La Loi de Moise comme constitution de la nouvelle communaute",
    "La reforme des mariages mixtes et de la purete cultuelle",
    "L'edification des murailles et la protection de la communaute",
  ],
  keyFigures: [
    "Esdras - Scribe et docteur de la Loi, reformateur religieux",
    "Nehemie - Gouverneur perse, reconstruit les murailles de Jerusalem",
    "Zorobabel - Gouverneur, descendant de David, conduit le premier retour",
    "Jeshua (Josue) - Grand pretre lors du premier retour",
    "Cyrus - Roi perse qui decrete le retour des exiles (538 av. J.-C.)",
  ],
  keyPassages: [
    "Es 1:1-4 - Decret de Cyrus : retour des exiles",
    "Es 3:10-13 - Dedication des fondements du nouveau Temple (joie et larmes)",
    "Es 7:10 - 'Esdras avait prepare son coeur a rechercher la Loi de Yahve'",
    "Ne 2:17 - 'Venez, rebatissons la muraille de Jerusalem'",
    "Ne 8:1-12 - Lecture publique de la Loi par Esdras, joie dans la force de Yahve",
    "Ne 9 - Grande priere confessionnelle",
  ],
  theologicalSignificance: "Esdras et Nehemie revelent la fidelite de Dieu a ses promesses malgre l'exil. Le decret de Cyrus accomplit la prophetie de Jeremie (2 Ch 36:22). La Loi comme centre de la communaute prefigure l'importance de la Parole. Esdras scribe prefigure les docteurs de la Loi. La lecture publique de la Loi (Ne 8) annonce la synagogue et la liturgie chretienne de la Parole.",
  christologicalTypes: [
    "La restauration prefigure la restauration en Christ (2 Co 5:17)",
    "Le Temple reconstruit prefigure le corps ressuscite de Christ (Jn 2:19-21)",
    "La Loi ecrite dans les coeurs (Neh 8) prefigure la Nouvelle Alliance (Jr 31:31-34)",
    "Esdras scribe prefigure Christ qui accomplit la Loi (Mt 5:17)",
  ],
}

export const ezraNehemiahReadingNotes: BookReadingNotes = {
  bookId: "ezra-nehemiah",
  bookName: "Esdras-Nehemie",
  section: "02-Livres-Historiques",
  number: 18,
  chapters: 23,
  summary: "Restauration post-exilique. Retour des exiles, reconstruction du Temple et des murailles. La Loi comme constitution de la communaute.",
  keyThemes: [
    "Restauration",
    "Temple",
    "Loi de Moise",
    "Reforme cultuelle",
    "Murailles",
  ],
  introduction: "A l'origine un seul livre (Esdras-Nehemie). Esdras 1-6 : premier retour sous Zorobabel et reconstruction du Temple. Esdras 7-10 : retour d'Esdras et reforme des mariages. Nehemie 1-7 : murailles de Jerusalem. Nehemie 8-10 : lecture de la Loi. Nehemie 11-13 : reformes et distributions.",
  sections: [
    {
      title: "Premier retour et Temple (Es 1-6)",
      content: "Decret de Cyrus (ch. 1). Retour des exiles, autel et fondements du Temple (ch. 2-3). Opposition des Samaritains, arret des travaux (ch. 4). Reprise et achevement du Temple sous Darius (ch. 5-6).",
    },
    {
      title: "Retour d'Esdras et reforme (Es 7-10)",
      content: "Esdras scribe arrive a Jerusalem (ch. 7). Liste des exiles (ch. 8). Confession des mariages mixtes (ch. 9). Reforme : divorce collectif des femmes etrangeres (ch. 10).",
    },
    {
      title: "Nehemie et les murailles (Ne 1-7)",
      content: "Nehemie apprend la detresse de Jerusalem, prie et obtient la permission du roi (ch. 1-2). Reconstruction des murailles malgre l'opposition (ch. 3-6). Peuplement de Jerusalem, liste des exiles (ch. 7).",
    },
    {
      title: "Loi et reformes (Ne 8-13)",
      content: "Lecture publique de la Loi par Esdras, joie dans la force de Yahve (ch. 8). Grande priere confessionnelle (ch. 9). Signature de l'alliance (ch. 10). Listes et distributions (ch. 11-12). Reformes finales de Nehemie (ch. 13).",
    },
  ],
}
