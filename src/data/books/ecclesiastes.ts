/**
 * ECCLESIASTE (QOHELETH) - Livre sapiential
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const ecclesiastesSummary: BookSummary = {
  id: "ecclesiastes",
  bookName: "Ecclesiaste",
  frenchName: "Ecclesiaste (Qoheleth)",
  abbreviation: "Qo",
  testament: "OLD",
  genre: "WISDOM",
  section: "03-Poetiques-Sapientiaux",
  overview: "L'Ecclesiaste (en hebreu Qoheleth = 'celui qui parle dans l'assemblee') est une reflexion philosophique sur le sens de la vie. Attribue traditionnellement a Salomon (Xe siecle av. J.-C.), il a probablement ete ecrit au IIIe siecle av. J.-C. Le livre explore la vanite (hevel = 'souffle, vapeur') de toutes choses : richesse, plaisir, travail, sagesse, mort. Conclut que la seule veritable sagesse est de craindre Dieu et d'observer ses commandements.",
  authorship: "Attribue a Salomon (tradition). Redaction probable au IIIe siecle av. J.-C.",
  date: "IIIe siecle av. J.-C. (debats sur la date exacte)",
  keyThemes: [
    "La vanite (hevel) de toutes choses terrestres",
    "Le sens de la vie et la realite de la mort",
    "Le temps pour tout (Qo 3:1-8)",
    "L'injustice et les limites de la sagesse humaine",
    "La joie simple comme sagesse pratique",
    "La crainte de Dieu comme conclusion de tout",
  ],
  keyFigures: [
    "Qoheleth (Le Predicateur) - Sage qui explore la vanite de tout",
    "Le juste et le mechant - Meme sort (la mort)",
  ],
  keyPassages: [
    "Qo 1:2 - 'Vanite des vanites, tout est vanite'",
    "Qo 3:1-8 - 'Il y a un temps pour tout'",
    "Qo 3:11 - 'Dieu fait tout beau en son temps'",
    "Qo 7:20 - 'Il n'y a pas d'homme juste sur terre' (cf. Rm 3:10)",
    "Qo 12:7 - 'La poussiere retourne a la terre, l'esprit remonte a Dieu'",
    "Qo 12:13-14 - 'Crains Dieu et observe ses commandements'",
  ],
  theologicalSignificance: "Qoheleth remet en question l'optimisme de la theologie de la retribution. La mort est l'egalisateur ultime. Le livre pousse a ne pas s'attacher aux biens terrestres mais a chercher Dieu. Le chrétien complete cette vision : 'tout est vanite' mais 'tout est grace' (cf. 1 Jn 2:17).",
  christologicalTypes: [
    "La vanite du monde present anticipe l'appel a chercher les choses d'en haut (Col 3:1-2)",
    "La crainte de Dieu resume la Loi, comme le grand commandement (Mt 22:37-40)",
    "L'esprit qui remonte a Dieu (Qo 12:7) anticipe la resurrection",
  ],
}

export const ecclesiastesReadingNotes: BookReadingNotes = {
  bookId: "ecclesiastes",
  bookName: "Ecclesiaste",
  section: "03-Poetiques-Sapientiaux",
  number: 25,
  chapters: 12,
  summary: "Reflexion philosophique sur la vanite de tout ce qui est terrestre. Conclusion : crains Dieu et observe ses commandements.",
  keyThemes: [
    "Vanite (hevel)",
    "Temps et saisons",
    "Mortalite",
    "Sagesse et limites",
    "Joie simple",
    "Crainte de Dieu",
  ],
  introduction: "Structure : prologue (1:1-11), experiences de Qoheleth (1:12-2:26), observations sur la vie (3:1-11:6), epilogue (12:9-14).",
  sections: [
    {
      title: "La vanite de tout (1:1-2:26)",
      content: "Tout est vanite (hevel = souffle, vapeur). Richesse, plaisir, sagesse : tout passe. Qoheleth a tout experimente et tout est ephémere.",
    },
    {
      title: "Le temps et les observations (3:1-11:6)",
      content: "Le temps pour tout (3:1-8). L'injustice de la vie. Travail et richesse. Sagesse et folie. 'Dieu fait tout beau en son temps' et 'a mis l'eternite dans le coeur de l'homme' (3:11).",
    },
    {
      title: "Conclusion (11:7-12:14)",
      content: "Jouis de la vie dans la jeunesse, mais souviens-toi du Createur. La vieillesse et la mort. Conclusion : 'Crains Dieu et observe ses commandements, car la est tout le devoir de l'homme' (12:13).",
    },
  ],
}
