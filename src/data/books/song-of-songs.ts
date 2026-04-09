/**
 * CANTIQUE DES CANTIQUES - Livre poetique
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const songOfSongsSummary: BookSummary = {
  id: "song-of-songs",
  bookName: "Cantique des Cantiques",
  frenchName: "Cantique des Cantiques",
  abbreviation: "Ct",
  testament: "OLD",
  genre: "WISDOM",
  section: "03-Poetiques-Sapientiaux",
  overview: "Poeme d'amour entre un bien-aime et une bien-aimee, traditionnellement attribue a Salomon (Xe siecle av. J.-C.). Il celebre l'amour conjugal, le desir, la beaute et la joie de l'union sexuelle. Interprete allegoriquement par les juifs (amour Dieu-Israel) et les chretiens (amour Christ-Eglise), il affirme avant tout la bonte de la sexualite humaine creee par Dieu.",
  authorship: "Attribue a Salomon (tradition). Date exacte debattue.",
  date: "Xe ou IIIe siecle av. J.-C.",
  keyThemes: [
    "La bonte de l'amour conjugal et de la sexualite",
    "L'amour comme image de Dieu",
    "La beaute et le desir",
    "La fidelite et l'exclusivite",
    "L'alliance : amour Dieu-Israel / Christ-Eglise",
  ],
  keyFigures: [
    "La Sulamite - La bien-aimee, 'celle de Shunem'",
    "Le Bien-aime - Identifie a Salomon ou a un berger",
    "Les filles de Jerusalem - Choeur qui commente l'histoire",
  ],
  keyPassages: [
    "Ct 1:2 - 'Qu'il m'embrasse des baisers de sa bouche'",
    "Ct 2:16 - 'Mon bien-aime est a moi, et moi je suis a lui'",
    "Ct 4:12 - 'Jardin clos, source scellee'",
    "Ct 5:16 - 'Il est tout entier desirable'",
    "Ct 8:6-7 - 'L'amour est fort comme la mort'",
  ],
  theologicalSignificance: "Le Cantique affirme la bonte de la sexualite creee par Dieu. L'amour conjugal comme reflet de l'amour divin. Les juifs y voient l'amour Dieu-Israel ; les chretiens y voient l'amour Christ-Eglise (Ep 5:25-32). 'Jardin clos' est traditionnellement applique a la virginite de Marie.",
  christologicalTypes: [
    "Le bien-aime prefigure le Christ aimant son Eglise (Ep 5:25-32)",
    "La bien-aimee prefigure l'Eglise, epouse du Christ (Ap 19:7-9, 21:2-9)",
    "L'amour conjugal prefigure l'Eucharistie (don total)",
    "Le jardin clos prefigure la virginite de Marie",
  ],
}

export const songOfSongsReadingNotes: BookReadingNotes = {
  bookId: "song-of-songs",
  bookName: "Cantique des Cantiques",
  section: "03-Poetiques-Sapientiaux",
  number: 26,
  chapters: 8,
  summary: "Poeme d'amour celebrant la beaute, le desir et la fidelite de l'amour conjugal. Interpretations allegorique (Dieu-Israel, Christ-Eglise) et litterale (celebration de la sexualite).",
  keyThemes: [
    "Amour conjugal",
    "Desir et beaute",
    "Fidelite",
    "Sexualite sacree",
    "Alliance",
  ],
  introduction: "Le livre est divise en 5 chants poetiques. Personnages : la Sulamite (bien-aimee), le bien-aime, les filles de Jerusalem (choeur). Interpretations : allegorique (juive et chretienne), litterale (moderne), dramatique (piece de theatre).",
  sections: [
    {
      title: "Chant I (1:2-2:7)",
      content: "Premier echange de compliments. La Sulamite decrit sa beaute, le bien-aime sa splendeur. 'Mon bien-aime est a moi, et moi je suis a lui.'",
    },
    {
      title: "Chant II-III (2:8-5:1)",
      content: "Le bien-aime vient chercher sa bien-aimee. Nuit de noces. La beaute du corps celebree. 'Jardin clos, source scellee' (4:12).",
    },
    {
      title: "Chant IV-V (5:2-8:14)",
      content: "Recherche du bien-aime. Nouveaux compliments. Desir d'union. Conclusion : 'L'amour est fort comme la mort' (8:6). La fidelite absolue.",
    },
  ],
}
