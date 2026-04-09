/**
 * DANIEL - Grand prophete (apocalyptique)
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const danielSummary: BookSummary = {
  id: "daniel",
  bookName: "Daniel",
  frenchName: "Daniel",
  abbreviation: "Dn",
  testament: "OLD",
  genre: "PROPHETIC",
  section: "04-Grands-Prophetes",
  overview: "Daniel ('Dieu est mon juge') est un livre en deux parties : recits de la diaspora (1-6) et visions apocalyptiques (7-12). Daniel et ses compagnons demeurent fideles a Dieu a la cour babylonienne. Les visions revelent la souverainete de Dieu sur les empires et annoncent le Fils d'homme, la resurrection, et l'abomination de la desolation.",
  authorship: "Attribue a Daniel, jeune deporté a Babylone en 605 av. J.-C.",
  date: "~605-530 av. J.-C. (periode babylonienne et perse). Redaction debattue (VIe ou IIe siecle).",
  keyThemes: [
    "Souverainete de Dieu sur les empires",
    "Fidelite dans la diaspora (non-violence, integrite)",
    "Jugement et responsabilite",
    "Persécution et resurrection (Dn 12:2-3)",
    "L'abomination de la desolation",
    "Le Fils d'homme (Dn 7:13-14)",
  ],
  keyFigures: [
    "Daniel - Jeune deporté, fidele a Dieu a la cour babylonienne",
    "Hanania, Mishael, Azaria (Shadrak, Meshak, Abed-Nego) - Compagnons de Daniel",
    "Nabuchodonosor - Roi de Babylone, reve des quatre empires",
    "Belschatsar - Dernier roi babylonien, festin profane",
    "Daire le Mede - Roi perse apres la chute de Babylone",
  ],
  keyPassages: [
    "Dn 1 - Refus de la nourriture du roi, sagesse de Daniel",
    "Dn 2 - Reve de la statue (quatre empires + royaume de Dieu)",
    "Dn 3 - Fournaise ardente, quatrieme personne 'comme un fils de dieu'",
    "Dn 5 - Ecriture sur le mur, chute de Babylone",
    "Dn 6 - Fosse aux lions, priere perseverante",
    "Dn 7 - Quatre betes, Fils d'homme, l'Ancien des jours",
    "Dn 9 - Soixante-dix semaines (490 ans)",
    "Dn 12:2-3 - Resurrection individuelle",
  ],
  theologicalSignificance: "Daniel revele la souverainete absolue de Dieu sur l'histoire. Le Fils d'homme (7:13-14) est le titre prefere de Jesus (80x dans les Evangiles). La resurrection individuelle (12:2-3) est une innovation theologique. L'abomination de la desolation est citee par Jesus (Mt 24:15). Daniel prefigure la fidelite chretienne dans la persecution.",
  christologicalTypes: [
    "Le Fils d'homme venant sur les nuées (Dn 7:13-14, Mt 8:20, 26:64)",
    "La quatrieme personne dans la fournaise prefigure la presence de Christ",
    "L'abomination de la desolation (Dn 9:27, Mt 24:15, Ap 13)",
    "La resurrection (Dn 12:2-3, Jn 5:28-29, Ap 20:11-15)",
  ],
}

export const danielReadingNotes: BookReadingNotes = {
  bookId: "daniel",
  bookName: "Daniel",
  section: "04-Grands-Prophetes",
  number: 34,
  chapters: 12,
  summary: "Livre en deux parties : recits de la diaspora (fidelite a Dieu a la cour babylonienne) et visions apocalyptiques (souverainete de Dieu sur les empires).",
  keyThemes: [
    "Souverainete divine",
    "Fidelite dans l'exil",
    "Apocalyptique",
    "Resurrection",
    "Fils d'homme",
  ],
  introduction: "Recits hagiographiques (1-6) + apocalyptique (7-12). Langues : hebreu (1, 8-12) et araméen (2-7). Canon : dans les Ecrits (hebreu) ou Prophetes (Septante/Vulgate).",
  sections: [
    {
      title: "Recits de la diaspora (1-6)",
      content: "Daniel et compagnons a la cour babylonienne. Reve de la statue (ch. 2). Fournaise ardente (ch. 3). Folie de Nabuchodonosor (ch. 4). Ecriture sur le mur (ch. 5). Fosse aux lions (ch. 6). Modeles de fidelite non-violente.",
    },
    {
      title: "Visions apocalyptiques (7-12)",
      content: "Quatre betes et le Fils d'homme (ch. 7). Belier et bouc, Antiochos IV (ch. 8). Soixante-dix semaines (ch. 9). Prince de Perse et de Grece (ch. 10-11). Abomination de la desolation. Resurrection et fin des temps (ch. 12).",
    },
  ],
}
