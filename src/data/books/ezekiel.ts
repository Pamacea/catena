/**
 * EZECHIEL - Grand prophete
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const ezekielSummary: BookSummary = {
  id: "ezekiel",
  bookName: "Ézéchiel",
  frenchName: "Ézéchiel",
  abbreviation: "Ez",
  testament: "OLD",
  genre: "PROPHETIC",
  section: "04-Grands-Prophetes",
  overview: "Le prophete de la gloire de Dieu. Pretre et prophete exilé a Tel-Abib, pres de Babylone (593-571 av. J.-C.). Quatre parties : jugements contre Israel (1-24), oracles contre les nations (25-32), promesses de restauration (33-39 avec les ossements desséches et le Bon Berger), et vision du Temple restaure (40-48 avec le fleuve de vie).",
  authorship: "Ezechiel (Yehezq'el), fils de Buzi, pretre (cohen).",
  date: "~593-571 av. J.-C. (22 ans de ministere)",
  keyThemes: [
    "La gloire de Yahve (Kabod) et ses theophanies",
    "La responsabilite individuelle (ch. 18)",
    "Le nouveau coeur et le nouvel esprit (36:26-27)",
    "Les ossements desséches : resurrection de la nation (ch. 37)",
    "Le Bon Berger (ch. 34)",
    "Le Temple comme centre : fleuve de vie (ch. 47)",
  ],
  keyFigures: [
    "Ezechiel - Pretre et prophete, fils de Buzi",
    "Le Bon Berger - Yahve qui cherche et guerit ses brebis (ch. 34)",
    "Gog de Magog - Forces du mal attaquant Israel (ch. 38-39)",
  ],
  keyPassages: [
    "Ez 1 - Vision du trone-char, les quatre vivants",
    "Ez 18:4 - 'L'homme qui peche, c'est lui qui mourra' (responsabilite individuelle)",
    "Ez 34:11-12 - Yahve comme Bon Berger",
    "Ez 36:26-27 - Nouveau coeur, nouvel esprit",
    "Ez 37:1-14 - Les ossements desséches",
    "Ez 47:1-12 - Le fleuve de vie sortant du Temple",
    "Ez 48:35 - 'Yahve est la' (Yahve Shammah)",
  ],
  theologicalSignificance: "Ezechiel fait une avancee theologique majeure sur la responsabilite individuelle : 'Les peres ont mange des raisins verts, et les dents des enfants sont agacées' est rejeté (18:2). Le nouveau coeur et le nouvel esprit (36:26-27) anticipent la transformation par l'Esprit Saint (Ac 2, Rm 8). Les ossements desséches prefigurent la resurrection. Le Bon Berger est accompli en Christ (Jn 10).",
  christologicalTypes: [
    "Le Bon Berger (Ez 34) accompli en Jésus (Jn 10)",
    "Le nouveau coeur par l'Esprit (Ez 36, Rm 8, Ac 2)",
    "Les ossements desséches prefigurent la resurrection (1 Th 4, Ap 20)",
    "Le fleuve de vie (Ez 47) prefigure l'eau vive de Jésus (Jn 4:14, 7:38)",
    "Le Temple restaure prefigure l'Eglise (1 Co 3:16, Ep 2:19-22)",
  ],
}

export const ezekielReadingNotes: BookReadingNotes = {
  bookId: "ezekiel",
  bookName: "Ézéchiel",
  section: "04-Grands-Prophetes",
  number: 33,
  chapters: 48,
  summary: "Le prophete visionnaire de l'exil babylonien. Themes majeurs : gloire de Dieu, responsabilite individuelle, ossements desséches, Bon Berger, Temple restaure.",
  keyThemes: [
    "Gloire de Dieu",
    "Responsabilite individuelle",
    "Nouveau coeur",
    "Resurrection",
    "Bon Berger",
    "Temple restaure",
  ],
  introduction: "Quatre parties : jugements contre Israel (1-24), oracles contre nations (25-32), restauration (33-39), Temple (40-48).",
  sections: [
    {
      title: "Jugements contre Israel (1-24)",
      content: "Vision du trone-char (ch. 1). Appel comme sentinelle (ch. 2-3). Actions symboliques prophétiques (ch. 4-7). Abominations du Temple, gloire quitte le Temple (ch. 8-11). Allegories d'Israel (ch. 12-24).",
    },
    {
      title: "Oracles contre les nations (25-32)",
      content: "Ammonites, Moab, Edom, Philistins, Tyr (orgueil : 'Je suis dieu'), Sidon, Egypte. Tyr et Egypte jugés pour leur orgueil.",
    },
    {
      title: "Promesses de restauration (33-39)",
      content: "Sentinelle (ch. 33). Contre les faux bergers, Yahve comme Bon Berger (ch. 34). Nouveau coeur et nouvel esprit (36:26-27). Ossements desséches (ch. 37). Gog de Magog (ch. 38-39).",
    },
    {
      title: "Vision du Temple restaure (40-48)",
      content: "Architecture detaillee du nouveau Temple. Retour de la gloire (43:1-5). Fleuve de vie sortant du Temple (ch. 47). Territoires des tribus. Nom de la ville : 'Yahve est la' (48:35).",
    },
  ],
}
