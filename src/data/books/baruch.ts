/**
 * BARUCH - Livre deutérocanonique
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const baruchSummary: BookSummary = {
  id: "baruch",
  bookName: "Baruch",
  frenchName: "Baruch",
  abbreviation: "Ba",
  testament: "OLD",
  genre: "PROPHETIC",
  section: "04-Grands-Prophetes",
  overview: "Livre attribué à Baruch, secrétaire de Jérémie, composé pendant l'exil babylonien (entre 587 et 538 av. J.-C.). Il se divise en trois parties : une confession collective des péchés du peuple exilé, un éloge de la Sagesse identifiée à la Torah, et un poème de consolation promettant la restauration de Jérusalem.",
  authorship: "Attribué à Baruch, secrétaire de Jérémie. Probablement composite, avec des parties rédigées en hébreu/araméen (1:1-3:8) et en grec (3:9-5:9).",
  date: "Entre 587 et 538 av. J.-C. (exil babylonien) avec additions post-exiliques",
  keyThemes: [
    "Confession et repentir collectif",
    "La Loi comme Sagesse (identification unique Torah = Sagesse)",
    "Personnification de Sion et espérance de restauration",
    "Promesse du retour des exilés",
    "La Sagesse incarnée (prefiguration de Jean 1:14)",
  ],
  keyFigures: [
    "Baruch - Secrétaire de Jérémie, auteur attribué",
    "Jérémie - Prophète dont Baruch transmet les oracles",
    "La Sagesse (Sophia) - Personnifiée, identifiée à la Loi",
  ],
  keyPassages: [
    "Ba 1:15-2:10 - Confession de péché du peuple exilé",
    "Ba 2:11-3:8 - Supplication pour le retour",
    "Ba 3:9-15 - Appel des nations, sagesse inconnue",
    "Ba 3:36-4:1 - La Sagesse apparue sur terre, identifiée à la Loi",
    "Ba 4:5-5:9 - Poème de consolation, espérance pour la diaspora",
    "Ba 4:30-37 - Vision de restauration, retour des fils",
  ],
  theologicalSignificance: "Baruch enseigne que la Sagesse divine n'est pas cachée mais accessible dans la Loi de Moïse. L'innovation majeure est l'identification Sagesse = Torah, et l'affirmation que la Sagesse 'est apparue sur terre et a vécu parmi les hommes' (Ba 3:37), préfigurant l'incarnation du Verbe (Jean 1:14).",
  christologicalTypes: [
    "La Sagesse apparue sur terre préfigure le Verbe incarné (Jean 1:14)",
    "Le poème de la restauration annonce la Nouvelle Jérusalem (Apocalypse 21)",
    "La confession collective préfigure le sacrement de réconciliation",
  ],
}

export const baruchReadingNotes: BookReadingNotes = {
  bookId: "baruch",
  bookName: "Baruch",
  section: "04-Grands-Prophetes",
  summary: "Livre de confession, de sagesse et d'espérance, composé pendant l'exil babylonien. Le peuple reconnaît ses péchés, découvre la Sagesse dans la Loi, et espère la restauration de Jérusalem.",
  keyThemes: [
    "Confession et repentir",
    "Loi comme Sagesse",
    "Restauration de Sion",
    "Sagesse personnifiée",
    "Diaspora et identité",
  ],
  introduction: "Baruch est un livre deutérocanonique qui exprime la foi de la communauté exilée. Trois parties : confession (1:15-3:8), éloge de la Sagesse (3:9-4:4), et poème de consolation (4:5-5:9).",
  sections: [
    {
      title: "Confession et prière (1:15-3:8)",
      content: "Le peuple reconnaît sa désobéissance aux commandements de Dieu. L'exil est la conséquence de l'infidélité. La prière de supplication demande la restauration.",
    },
    {
      title: "Éloge de la Sagesse (3:9-4:4)",
      content: "La Sagesse est identifiée à la Torah. Innovation théologique unique : la Sagesse 'est apparue sur la terre et a vécu parmi les hommes' (3:37). Personne ne la connaît sauf Dieu, qui l'a révélée à Israël.",
    },
    {
      title: "Poème de consolation (4:5-5:9)",
      content: "Encouragement aux exilés. Jérusalem personnifiée comme mère de la diaspora. Vision de restauration où les fils dispersés reviennent portés par les rois et les nations.",
    },
  ],
}
