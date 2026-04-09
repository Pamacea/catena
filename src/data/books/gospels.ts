/**
 * EVANGILES - Synopse des quatre Evangiles
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const gospelsSummary: BookSummary = {
  id: "gospels",
  bookName: "Evangiles",
  frenchName: "Les Evangiles",
  abbreviation: "Mt-Mc-Lc-Jn",
  testament: "NEW",
  genre: "GOSPEL",
  section: "06-Evangiles",
  overview: "Les quatre Evangiles sont le coeur du Nouveau Testament. Matthieu presente Jesus comme Messie d'Israel, Marc comme Serviteur souffrant, Luc comme Fils de l'homme sauveur universel, et Jean comme Fils de Dieu incarne. Ensemble ils forment un portrait a quatre dimensions de la personne et de l'oeuvre de Christ. Les trois premiers (synoptiques) partagent un fonds commun ; le quatrieme (Jean) offre une perspective theologique distincte.",
  authorship: "Matthieu (Levi), apotred et collecteur d'impots. Marc, compagnon de Pierre. Luc, medecin et compagnon de Paul. Jean, apotre et fils de Zebedee.",
  date: "~50-100 av. J.-C. (Marc ~65, Matthieu ~80-85, Luc ~80-85, Jean ~90-100)",
  keyThemes: [
    "Le Royaume de Dieu (present et a venir)",
    "Jesus comme Messie, Serviteur, Fils de l'homme, Fils de Dieu",
    "La passion, mort et resurrection de Jesus",
    "La grace et le salut pour tous (juifs et païens)",
    "L'accomplissement des Ecritures",
    "Le discipulat et le suivi de Jesus",
  ],
  keyFigures: [
    "Jesus de Nazareth - Fils de Dieu, centre des quatre Evangiles",
    "Jean-Baptiste - Precurseur, baptise Jesus",
    "Les Douze Apotres - Pierre, Jacques, Jean en tete",
    "Marie - Mere de Jesus",
    "Les pharisiens et les sadduceens - Opposants religieux",
    "Pilate - Prefet romain, condamne Jesus",
  ],
  keyPassages: [
    "Mt 1-2 - Genealogie et naissance, Emmanuel 'Dieu avec nous'",
    "Mc 1:1 - 'Commencement de la bonne nouvelle de Jesus Christ'",
    "Lc 2 - Naissance a Bethleem, annonce aux bergers, cantique de Simeon",
    "Lc 4:16-30 - Jesus a Nazareth, mission universelle (lecture d'Is 61)",
    "Jn 1:1-14 - Prologue : le Verbe etait Dieu, le Verbe s'est fait chair",
    "Jn 3:16 - 'Dieu a tellement aime le monde...'",
    "Jn 19-20 - Passion, mort et resurrection",
  ],
  theologicalSignificance: "Les Evangiles sont la source premiere de la revelation chretienne. Le prologue de Jean (1:1-14) est la clee de voûte theologique : le Verbe etait Dieu, il s'est fait chair. Les paraboles revelent les mysteres du Royaume. La mort et la resurrection de Jesus sont le centre de l'histoire du salut. Chaque Evangile offre un angle unique : messianique (Mt), christique (Mc), soteriologique (Lc), theologique (Jn).",
  christologicalTypes: [
    "Jesus comme Messie d'Israel (Mt), accomplissement de la Loi et des prophetes",
    "Jesus comme Serviteur souffrant (Mc, Is 53)",
    "Jesus comme Sauveur universel (Lc), ami des pecheurs et des païens",
    "Jesus comme Fils de Dieu incarne (Jn), Verbe fait chair",
  ],
}

export const gospelsReadingNotes: BookReadingNotes = {
  bookId: "gospels",
  bookName: "Evangiles",
  section: "06-Evangiles",
  number: 46,
  chapters: 89,
  summary: "Portrait a quatre dimensions de Jesus-Christ : Messie (Mt), Serviteur (Mc), Fils de l'homme (Lc), Fils de Dieu (Jn). Coeur du Nouveau Testament.",
  keyThemes: [
    "Royaume de Dieu",
    "Messie",
    "Passion et resurrection",
    "Grace universelle",
    "Discipulat",
  ],
  introduction: "Synopse : Matthieu, Marc, Luc (fonds commun de recits, 'sources Q et M'). Jean : perspective theologique distincte, sept signes, discours longs, discours d'adieu. Les Evangiles sont des theologies narratives, pas de simples biographies.",
  sections: [
    {
      title: "Matthieu - Le Messie d'Israel",
      content: "Genealogie davidique (ch. 1). Sermon sur la montagne (ch. 5-7). Paraboles du Royaume (ch. 13). Eglise et discipulat (ch. 18). Discours eschatologique (ch. 24-25). Passion et resurrection (ch. 26-28). Jesus comme accomplissement de la Loi et des prophetes.",
    },
    {
      title: "Marc - Le Serviteur qui agit",
      content: "Bapteme et commencement du ministere (ch. 1). Miracles en serie ('aussitot'). Secret messianique. Chemin de croix. Passion et resurrection (ch. 14-16). Le plus court et le plus dynamique des Evangiles.",
    },
    {
      title: "Luc - Le Sauveur universel",
      content: "Recit de l'enfance (ch. 1-2). Mission universelle annoncee a Nazareth (ch. 4). Paraboles uniques : fils prodigue (ch. 15), pharisien et publicain (ch. 18). Voyage vers Jerusalem (ch. 9-19). Passion et resurrection (ch. 22-24). Sequel : Actes des Apotres.",
    },
    {
      title: "Jean - Le Fils de Dieu",
      content: "Prologue : Verbe fait chair (ch. 1). Sept signes (eau en vin, multiplication, guerison, marche sur l'eau, guerison de l'aveugle, Lazare). Discours d'adieu (ch. 13-17). Passion, resurrection, apparitions (ch. 18-21). 'Afin que vous croyiez que Jesus est le Christ, le Fils de Dieu' (20:31).",
    },
  ],
}
