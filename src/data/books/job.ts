/**
 * JOB - Livre poétique et sapiential
 */

import type { BookSummary, BookReadingNotes } from "../types/enriched"

export const jobSummary: BookSummary = {
  id: "job",
  bookName: "Job",
  frenchName: "Job",
  abbreviation: "Jb",
  testament: "OLD",
  genre: "WISDOM",
  section: "03-Poetiques-Sapientiaux",
  overview: "Le livre de Job explore le probleme de la souffrance et de la justice divine a travers l'histoire de Job, un homme 'integre et droit' qui perd tout (biens, enfants, sant?) mais reste fidele a Dieu. Dialogue entre Job et ses trois amis (Eliphaz, Bildad, Tsophar), puis intervention d'Elihu et enfin de Dieu lui-meme dans la tempete. Le livre ne repond pas directement au 'pourquoi' de la souffrance mais revele la souverainete de Dieu.",
  authorship: "Inconnu. Tradition attribue a Moise. Redaction probable entre le VIIe et le IVe siecle av. J.-C.",
  date: "VIe-IVe siecle av. J.-C. (debats)",
  keyThemes: [
    "La theodicee : pourquoi les justes souffrent-ils ?",
    "La souffrance du juste innocent",
    "Critique de la theologie de la retribution",
    "La souverainete transcendante de Dieu",
    "La foi dans l'epreuve : confiance malgre l'incomprehension",
    "La responsabilite individuelle",
  ],
  keyFigures: [
    "Job - Homme integre et droit, eprouve par Satan",
    "Eliphaz le Themanite - Ami de Job, represente la sagesse traditionnelle",
    "Bildad le Shuhite - Ami de Job, defenseur de la theologie de la retribution",
    "Tsophar le Naamathite - Ami de Job, insiste sur la culpabilite de Job",
    "Elihu le Buzite - Jeune homme qui intervient apres les trois amis",
    "Satan - L'accusateur, qui met en doute la fidelite de Job",
  ],
  keyPassages: [
    "Jb 1:1 - 'Cet homme etait integre et droit'",
    "Jb 1:21 - 'Le Seigneur a donne, le Seigneur a ote'",
    "Jb 2:10 - 'Nous acceptons le bonheur de la main de Dieu, et nous n'accepterions pas le malheur'",
    "Jb 19:25 - 'Je sais que mon Redempteur est vivant'",
    "Jb 38:1-4 - Dieu repond dans la tempete",
    "Jb 42:5 - 'Je te connaissais par ouï-dire, mais maintenant mes yeux t'ont vu'",
  ],
  theologicalSignificance: "Job remet en question la theologie simpliste de la retribution (les justes prosperent, les mechants souffrent). Dieu ne justifie pas la souffrance de Job, mais revele sa grandeur. La souffrance reste un mystere, mais Job fait confiance a Dieu. Le livre ouvre la voie a une comprehension plus profonde de la souffrance innocent, prefigurant le Christ souffrant.",
  christologicalTypes: [
    "Job innocent qui souffre prefigure le Christ souffrant (Is 53)",
    "Le Redempteur vivant (Jb 19:25) annonce le Christ ressuscite",
    "Dieu qui repond dans la tempete anticipe la revelation pleniere en Christ",
  ],
}

export const jobReadingNotes: BookReadingNotes = {
  bookId: "job",
  bookName: "Job",
  section: "03-Poetiques-Sapientiaux",
  number: 22,
  chapters: 42,
  summary: "Reflexion philosophique sur la souffrance et la justice divine. Job, homme juste, perd tout mais reste fidele. Dieu revele sa souverainete sans resoudre le mystere de la souffrance.",
  keyThemes: [
    "Theodicee",
    "Souffrance du juste",
    "Souverainete divine",
    "Foi dans l'epreuve",
    "Limite de la sagesse humaine",
  ],
  introduction: "Le livre de Job est compose de trois parties : recit en prose (ch. 1-2), dialogues poetiques (ch. 3-42:6), et epilogue (42:7-17). Les dialogues opposent Job a ses trois amis puis a Elihu, avant l'intervention divine.",
  sections: [
    {
      title: "Le defi de Satan (ch. 1-2)",
      content: "Job est un homme integre. Satan met en doute sa fidelite : 'Est-ce pour rien que Job craint Dieu ?' Dieu permet l'epreuve. Job perd biens, enfants, sante, mais ne maudit pas Dieu.",
    },
    {
      title: "Les dialogues (ch. 3-37)",
      content: "Trois cycles de discours entre Job et ses amis. Les amis defendent la theologie de la retribution : si tu souffres, c'est que tu as peche. Job rejette cette logique et proteste son innocence. Elihu intervient ensuite, affirmant que Dieu parle par la souffrance.",
    },
    {
      title: "Reponse de Dieu dans la tempete (ch. 38-41)",
      content: "Dieu ne repond pas 'pourquoi' mais revele sa puissance a travers la creation. Questions rhetoriques : 'Ou etais-tu quand je fondais la terre ?' Description de Behemoth et Leviathan. Dieu revele sa souverainete absolue.",
    },
    {
      title: "Repentir et restauration (ch. 42)",
      content: "Job se repent dans la poussiere : 'Je te connaissais par ouï-dire, mais maintenant mes yeux t'ont vu.' Dieu critique les amis de Job. Job est restaure au double de ses biens.",
    },
  ],
}
