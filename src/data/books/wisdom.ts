/**
 * SAGESSE DE SALOMON - Livre deutérocanonique
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const wisdomSummary: BookSummary = {
  id: "wisdom",
  bookName: "Sagesse",
  frenchName: "Sagesse de Salomon",
  abbreviation: "Sg",
  testament: "OLD",
  genre: "WISDOM",
  section: "03-Poetiques-Sapientiaux",
  overview: "Ecrit deutérocanonique en grec, compose a Alexandrie (Egypte) au Ier siecle av. J.-C. par un juif de la diaspora. Attribue faussement a Salomon (pseudépigraphe). Affirme l'immortalite de l'ame, la providence divine, la justice de Dieu. Contient des meditations sur la Sagesse personnifiee, un midrash de l'Exode (Sg 10-19), et une critique de l'idolatrie.",
  authorship: "Inconnu (juif alexandrin de la diaspora). Attribution pseudonyme a Salomon.",
  date: "Ier siecle av. J.-C. (Alexandrie)",
  keyThemes: [
    "L'immortalite de l'ame",
    "La providence divine",
    "La Sagesse personnifiee comme esprit de Dieu",
    "La justice des justes et le chatiment des mechants",
    "Critique de l'idolatrie",
    "Midrash de l'Exode (Sg 10-19)",
  ],
  keyFigures: [
    "La Sagesse (Sophia) - Personnifiee comme un etre quasi-divin, esprit de Dieu",
    "Les justes persecutes - Modeles de fidelite",
    "Les mechants - Oppresseurs finalement punis",
    "Salomon - Auteur attribue (pseudonyme)",
  ],
  keyPassages: [
    "Sg 1:1 - 'Aimez la justice, vous qui gouvernez la terre'",
    "Sg 3:1-2 - 'Les ames des justes sont dans la main de Dieu'",
    "Sg 7:22-8:1 - La Sagesse, esprit qui penetre tout",
    "Sg 9:9 - La Sagesse presente a la creation",
    "Sg 11:23-26 - 'Tu as pitié de tous, parce que tu peux tout'",
  ],
  theologicalSignificance: "La Sagesse fait une avancee theologique majeure : la justice conduit a l'immortalite (vs retribution terrestre). La Sagesse personnifiee prefigure le Verbe de Jean 1. La critique de l'idolatrie est reprise par Paul (Rm 1:18-32). Le livre est cite dans les liturgies catholiques et orthodoxes.",
  christologicalTypes: [
    "La Sagesse prefigure le Christ, Sagesse incarnee (Jn 1:1, 1 Co 1:24, Col 2:3)",
    "Les justes persecutes prefigurent les martyrs chretiens",
    "La critique de l'idolatrie anticipe la mission paulinienne (Ac 17:22-31)",
  ],
}

export const wisdomReadingNotes: BookReadingNotes = {
  bookId: "wisdom",
  bookName: "Sagesse",
  section: "03-Poetiques-Sapientiaux",
  number: 27,
  chapters: 19,
  summary: "Meditation sur la Sagesse, l'immortalite de l'ame, et la providence divine. Critique de l'idolatrie et midrash de l'Exode.",
  keyThemes: [
    "Immortalite de l'ame",
    "Providence divine",
    "Sagesse personnifiee",
    "Justice divine",
    "Idolatrie",
  ],
  introduction: "Structure : exhortation a la justice (1:1-6:11), eloge de la Sagesse (6:12-9:18), midrash de l'Exode (10-19), critique de l'idolatrie (13-15).",
  sections: [
    {
      title: "Justice et immortalite (1:1-6:11)",
      content: "La justice conduit a l'immortalite. Les ames des justes sont dans la main de Dieu. Les mechants seront punis. L'epreuve purifie comme l'or au feu.",
    },
    {
      title: "Eloge de la Sagesse (6:12-9:18)",
      content: "La Sagesse est un esprit qui penetre tout (7:22-8:1). Elle etait presente a la creation (9:9). Elle est avec Dieu, maitresse de toutes choses.",
    },
    {
      title: "Midrash de l'Exode (10-19)",
      content: "La Sagesse guide l'histoire d'Israel : d'Adam a Moise. Protection dans le desert. Plaies d'Egypte. Contraste entre les justes et les idolatres.",
    },
  ],
}
