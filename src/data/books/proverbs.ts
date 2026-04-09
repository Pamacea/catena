/**
 * PROVERBES - Livre sapiential
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const proverbsSummary: BookSummary = {
  id: "proverbs",
  bookName: "Proverbes",
  frenchName: "Proverbes",
  abbreviation: "Pr",
  testament: "OLD",
  genre: "WISDOM",
  section: "03-Poetiques-Sapientiaux",
  overview: "Collection de sentences sapientiales attribuees principalement au roi Salomon (Xe siecle av. J.-C.), avec des ajouts d'Agur (Pr 30) et du roi Lemuel (Pr 31). Il enseigne la sagesse pratique pour vivre selon la volonte de Dieu : crainte du Seigneur, discipline morale, parole, travail, famille, richesse. Structure en 10 parties contrastant la voie des sages (vie, benediction) avec celle des insenses (mort, malediction).",
  authorship: "Principalement Salomon. Ajouts d'Agur (Pr 30) et du roi Lemuel (Pr 31). Proverbes copies par les sages d'Ezechias (Pr 25-29).",
  date: "Xe siecle av. J.-C. (Salomon) avec additions jusqu'au VIIe siecle",
  keyThemes: [
    "La crainte du Seigneur comme fondement de la sagesse",
    "La voie des sages vs la voie des insenses",
    "La discipline et la correction comme signes d'amour",
    "La parole et le silence",
    "Le travail et la paresse",
    "La famille et les relations",
    "La Sagesse personnifiee (Hokhmah)",
  ],
  keyFigures: [
    "Salomon - Roi d'Israel, principal auteur",
    "La Sagesse (Hokhmah) - Personnifiee comme une femme qui crie dans les rues",
    "L'Insense (Kesil) - Celui qui rejette la correction",
    "Agur - Auteur de Pr 30",
    "Le roi Lemuel - Auteur de Pr 31",
  ],
  keyPassages: [
    "Pr 1:7 - 'La crainte du Seigneur est le commencement de la connaissance'",
    "Pr 3:5-6 - 'Confie-toi de tout ton coeur au Seigneur'",
    "Pr 4:23 - 'Plus que tout, garde ton coeur'",
    "Pr 8:22-31 - La Sagesse etablie avant la creation",
    "Pr 9:10 - 'La crainte du Seigneur est le commencement de la sagesse'",
    "Pr 31:10-31 - La femme forte (Eshet Hayil)",
  ],
  theologicalSignificance: "Les Proverbes presentent la Sagesse comme etant aupres de Dieu a la creation (Pr 8:22-31), prefigurant le Christ, 'la sagesse de Dieu' (1 Co 1:24, Col 2:3). La femme forte (Pr 31) est interpretee comme la Sagesse incarnee, prefigurant Marie. La crainte du Seigneur comme fondement de toute connaissance est un theme central de la theologie biblique.",
  christologicalTypes: [
    "La Sagesse personnifiee prefigure le Christ (1 Co 1:24, Col 2:3)",
    "La Sagesse aupres de Dieu a la creation prefigure le Verbe preexistant (Jn 1:1)",
    "La femme forte (Eshet Hayil) prefigure Marie, mere de la Sagesse incarnee",
  ],
}

export const proverbsReadingNotes: BookReadingNotes = {
  bookId: "proverbs",
  bookName: "Proverbes",
  section: "03-Poetiques-Sapientiaux",
  number: 24,
  chapters: 31,
  summary: "Sagesse pratique pour la vie quotidienne. Contraste entre la voie de la sagesse (vie, benediction) et celle de la folie (mort, malediction).",
  keyThemes: [
    "Crainte du Seigneur",
    "Discipline et correction",
    "Parole et silence",
    "Travail et paresse",
    "Famille",
    "Sagesse personnifiee",
  ],
  introduction: "Les Proverbes sont structures en 10 parties : prologue (1:1-7), discours de la Sagesse (1:8-9:18), proverbes de Salomon I (10:1-22:16), paroles des sages (22:17-24:22), additions (24:23-34), proverbes de Salomon II copiees par les sages d'Ezechias (25-29), paroles d'Agur (30), paroles du roi Lemuel (31:1-9), louange de la femme forte (31:10-31).",
  sections: [
    {
      title: "Discours de la Sagesse (1:8-9:18)",
      content: "La Sagesse personnifiee appelle a la conversion. Elle crie dans les rues (1:20-33). Etablie avant la creation (8:22-31). Invitation a entrer dans sa maison. Contraste avec la Folie personnifiee.",
    },
    {
      title: "Proverbes de Salomon (10:1-29:27)",
      content: "Sentences sapientiales en distiques. Themes : sagesse, parole, travail, famille, richesse, justice, orgueil, humilite. Les proverbes antithetiques contrastent le juste et le mechant.",
    },
    {
      title: "La femme forte (31:10-31)",
      content: "Poeme alphabetique (22 versets). Eshet Hayil : travailleuse, sage, charitable, craignant le Seigneur. Interpretation : epouse ideale, Sagesse personnifiee, ou peuple de Dieu.",
    },
  ],
}
