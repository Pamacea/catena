/**
 * PSAUMES - Livre poetique et liturgique
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const psalmsSummary: BookSummary = {
  id: "psalms",
  bookName: "Psaumes",
  frenchName: "Psaumes",
  abbreviation: "Ps",
  testament: "OLD",
  genre: "WISDOM",
  section: "03-Poetiques-Sapientiaux",
  overview: "Collection de 150 prieres et poetes liturgiques, rediges sur plusieurs siecles (Xe au IIIe siecle av. J.-C.). Attribues traditionnellement au roi David (73 psaumes), avec des auteurs varies : Salomon, Asaph, les fils de Core, Moise. Les psaumes expriment toute la gamme de l'experience religieuse : louange, lamentation, confiance, action de grace, sagesse. Livre le plus cite du Nouveau Testament.",
  authorship: "Multiples auteurs : David (73), Asaph (12), fils de Core (11), Salomon (2), Moise (1), anon. (51)",
  date: "Xe-IIIe siecle av. J.-C. (redaction etalee)",
  keyThemes: [
    "La royaute de Dieu sur toute la creation",
    "La creation et la gloire de Dieu",
    "La Loi (Torah) et la meditation",
    "La souffrance et la delivrance",
    "Le Messie et l'onction divine",
    "La louange et l'action de grace",
    "La priere de lamentation et de confession",
  ],
  keyFigures: [
    "David - Roi et musicien, principal auteur des Psaumes",
    "Asaph - Chef des musiciens de David, auteur de 12 psaumes",
    "Fils de Core - Levites musiciens, auteurs de 11 psaumes",
    "Salomon - Auteur de 2 psaumes",
    "Moise - Auteur du Psaume 90",
  ],
  keyPassages: [
    "Ps 1 - Les deux voies (juste comme arbre, mechant comme balle)",
    "Ps 22 - 'Mon Dieu, mon Dieu, pourquoi m'as-tu abandonne ?' (cite sur la croix)",
    "Ps 23 - 'Le Seigneur est mon berger'",
    "Ps 51 - Miserere (confession de David)",
    "Ps 110 - 'Le Seigneur a dit a mon Seigneur' (princier messianique)",
    "Ps 119 - Le plus long psaume, meditation sur la Loi",
    "Ps 137 - 'Sur les fleuves de Babylone' (exil et nostalgie)",
    "Ps 150 - Doxologie finale, louange universelle",
  ],
  theologicalSignificance: "Les Psaumes sont le coeur de la priere juive et chretienne. Ils expriment toute l'experience humaine devant Dieu. Les psaumes messianiques (2, 16, 22, 40, 45, 72, 89, 110, 118) annoncent le Christ. Jesus prie avec les Psaumes, notamment sur la croix (Ps 22, 31). Les Psaumes sont divises en 5 livres, chacun se terminant par une doxologie.",
  christologicalTypes: [
    "Ps 2:7 - 'Tu es mon fils' cite en Ac 13:33, He 1:5",
    "Ps 22 - Psaume de la croix, cite par Jesus (Mt 27:46)",
    "Ps 110:1 - 'Mon Seigneur' cite par Jesus (Mt 22:44)",
    "Ps 110:4 - 'Pretre selon l'ordre de Melchisedek' (He 5:6, 7:17)",
    "Ps 118:22 - 'La pierre rejetee' (Mt 21:42, Ac 4:11)",
  ],
}

export const psalmsReadingNotes: BookReadingNotes = {
  bookId: "psalms",
  bookName: "Psaumes",
  section: "03-Poetiques-Sapientiaux",
  number: 23,
  chapters: 150,
  summary: "Le livre de priere du peuple de Dieu. 150 psaumes exprimant louange, lamentation, confiance, action de grace et sagesse.",
  keyThemes: [
    "Louange et adoration",
    "Lamentation individuelle et communautaire",
    "Confiance en Dieu",
    "Royaute de Dieu",
    "Messie et onction",
    "Loi et meditation",
  ],
  introduction: "Les Psaumes sont divises en 5 livres. Genres litteraires : louange, lamentation, confiance, action de grace, psaumes royaux, psaumes de sagesse, psaumes de pelerinage (Cantiques des montees, Ps 120-134).",
  sections: [
    {
      title: "Livre I (Ps 1-41)",
      content: "Principalement David. Psaumes de louange et de lamentation. Ps 1 (les deux voies), Ps 22 (psaume de la croix), Ps 23 (le berger), Ps 51 (Miserere).",
    },
    {
      title: "Livre II (Ps 42-72)",
      content: "David et les fils de Core. Psaumes de confiance. Ps 46 (Dieu notre refuge), Ps 51 (apres l'adultere avec Bethsabee).",
    },
    {
      title: "Livre III (Ps 73-89)",
      content: "Asaph et les fils de Core. Psaumes communautaires. Ps 73 (pourquoi les mechants prosperent), Ps 89 (alliance davidique).",
    },
    {
      title: "Livre IV (Ps 90-106)",
      content: "Psaumes anonymes et de Moise. Psaumes royaux. Ps 90 (priere de Moise), Ps 93-99 (Dieu roi), Ps 103 (bonte de Dieu).",
    },
    {
      title: "Livre V (Ps 107-150)",
      content: "Psaumes de louange, Hallel. Ps 110 (princier messianique), Ps 119 (meditation sur la Loi), Ps 137 (exil a Babylone), Ps 146-150 (Hallel final).",
    },
  ],
}
