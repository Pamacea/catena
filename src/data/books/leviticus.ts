/*
 * Données enrichies pour le livre du Lévitique
 * Livre III de la Bible - 27 chapitres - Pentateuque
 *
 * Contient:
 * - Résumé complet du livre
 * - Notes de lecture détaillées
 * - Plans des 27 chapitres
 * - Passages clés avec commentaires
 */

import type { BookSummary, BookReadingNotes, ChapterOutline, KeyPassage } from "@/data/types/enriched"

/* ============================================================================
 *
 * RÉSUMÉ DU LIVRE
 *
 * ============================================================================ */

export const leviticusSummary: BookSummary = {
  id: "leviticus",
  name: "Lévitique",
  frenchName: "Lévitique",
  abbreviation: "Lé",
  testament: "OLD",
  section: "01-Pentateuque",
  genre: "PENTATEUCH",
  chapters: 27,

  overview: `Le Lévitique est le livre de la sainteté de Dieu et du moyen d'approcher sa présence. Il contient les lois données à Israël au Sinaï concernant le culte, les sacrifices, la pureté rituelle, et la vie sainte.

Le titre "Lévitique« vient de la Vulgate latine (Liber Leviticus, »livre des Lévites«), mais ce titre est trompeur: le livre s'adresse à tout Israël, pas seulement aux sacrificateurs. En hébreu, il est intitulé »Vayikra« ('Et il appela'), d'après son premier mot.

Le Lévitique peut être divisé en plusieurs sections principales:
1. Lois sur les sacrifices (chapitres 1-7): les cinq types d'offrandes
2. Consécration des sacrificateurs (chapitres 8-10)
3. Lois sur la pureté (chapitres 11-15): animaux purs/impurs, purification
4. Jour des expiations (chapitre 16): le rituel du Yom Kippour
5. Code de sainteté (chapitres 17-27): lois pour une vie sainte`,

  authorship: {
    author: "Moïse",
    traditionalView: "La tradition attribue unanimement le Lévitique à Moïse. Le livre lui-même affirme «L'Éternel parla à Moïse» (1:1; 4:1; 5:14; etc.).",
    evidence: ["Le livre prétend être les paroles de l’Éternel à Moïse", "Le Nouveau Testament confirme l’auteur de Moïse (Lc 24:44; Jn 1:17; Ac 3:22)", "Connaissance détaillée des rites et coutumes",
      "Style cohérent avec le reste du Pentateuque"
    ],
    date: "Vers 1446-1406 av. J.-C.",
    circumstances: "Écrit pendant les pérégrinations dans le désert, probablement compilé à différentes étapes."
  },

  historicalContext: {
    period: "Pérégrinations dans le désert, après l'établissement de l’alliance au Sinaï", setting: "Israël campe au pied du Sinaï. Le tabernacle est construit, et les lois du culte doivent être établies.",
    culturalBackground: "Les peuples voisins ont des pratiques sacrificielles. Le Lévitique distingue le culte de Yahvé des cultes cananéens."
  },

  keyThemes: [
    {
      theme: "Sainteté",
      explanation: "Vous serez saints, car je suis saint« (19:2; 20:26; 11:44). La sainteté de Dieu est le thème central, et Israël est appelé à refléter cette sainteté."
    },
    {
      theme: "Sacrifice et expiation",
      explanation: "Le système sacrificiel enseigne que le péché a un coût et que l'approche de Dieu nécessite un substitut. Ces sacrifices préfigurent Christ."
    },
    {
      theme: "Pureté rituelle",
      explanation: "Les lois de pureté séparent le saint du profane, le pur de l'impur. Elles enseignent que Dieu est saint et que le péché contamine."
    },
    {
      theme: "Jour des expiations",
      explanation: "Le Yom Kippour (chapitre 16) est le jour le plus saint du calendrier juif, où le souverain sacrificateur entre dans le très saint pour faire expiation."
    },
    {
      theme: "Code de sainteté",
      explanation: "Les chapitres 17-27 contiennent des lois pour une vie sainte dans tous les domaines: relations sociales, économiques, sexuelles, cultuelles."
    },
    {
      theme: "Sabbat et fêtes",
      explanation: "Le Sabbat hebdomadaire et les fêtes annuelles (chapitre 23) rythment la vie d'Israël et commémorent les œuvres de Dieu."
    }
  ],

  keyFigures: [
    {
      name: "Moïse",
      role: "Médiateur de la loi, porte-parole de Dieu",
      significance: "Reçoit la loi de Dieu et la transmet au peuple et aux sacrificateurs."
    },
    {
      name: "Aaron",
      role: "Premier souverain sacrificateur",
      significance: "Consacré avec ses fils pour le service sacerdotal. Type du Christ comme souverain sacrificateur."
    },
    {
      name: "Nadab et Abihu",
      role: "Fils d’Aaron", significance: "Offrent un feu étranger et sont consumés par le feu de Dieu. Leur mort illustre la sainteté de Dieu."
    },
    {
      name: "Éléazar et Ithamar",
      role: "Fils d’Aaron qui restent fidèles", significance: "Continuent le service sacerdotal après la mort de leurs frères."
    }
  ],

  keyPassages: [
    { reference: "Lévitique 1-7", description: "Les cinq offrandes: holocauste, gâteau, pacifique, pour le péché, pour le délit" },
    { reference: "Lévitique 11", description: "Animaux purs et impurs: lois alimentaires" },
    { reference: "Lévitique 16", description: "Jour des expiations: le grand rituel d'expiation" },
    { reference: "Lévitique 17:11", description: "La vie est dans le sang: principe du sacrifice" },
    { reference: "Lévitique 18-20", description: "Lois morales et sexuelles" },
    { reference: "Lévitique 19:18", description: "Tu aimeras ton prochain comme toi-même" },
    { reference: "Lévitique 23", description: "Les fêtes de l'Éternel: calendrier religieux" },
    { reference: "Lévitique 25", description: "Année sabbatique et jubilé" },
    { reference: "Lévitique 26", description: "Bénédictions et malédictions de l'alliance" }
  ],

  theologicalSignificance: `Le Lévitique est un livre crucial pour comprendre la doctrine du salut dans toute la Bible:

1. Doctrine de Dieu: Dieu est saint (qadosh), absolument séparé du péché. Sa sainteté exige la mort du pécheur ou d'un substitut.

2. Doctrine du sacrifice: Le système sacrificiel enseigne que le péché a un coût et que l'approche de Dieu nécessite la mort d'un substitut innocent. Ces sacrifices sont insuffisants en eux-mêmes (Hé 10:4) mais pointent vers le sacrifice parfait de Christ.

3. Doctrine de l'expiation: Le mot kippour (כפור) signifie "couvrir« ou »expiation«. Le Jour des expiations (chapitre 16) préfigure l'œuvre de Christ (Hé 9-10).

4. Doctrine de la sainteté: L'appel à la sainteté (19:2) n'est pas seulement rituel mais moral. Israël doit être saint comme Dieu est saint.

5. Christologie: Chaque sacrifice, chaque rituel, chaque fête préfigure Christ. Il est notre sacrifice (Hé 10:5-14), notre souverain sacrificateur (Hé 4:14-16), notre expiation (Rm 3:25), notre Sabbat (Mt 11:28), notre Pâque (1 Co 5:7).

6. Éthique: Le Code de sainteté (17-27) contient des principes éthiques éternels: justice sociale, protection des faibles, honnêteté, amour du prochain.

Le Lévitique montre que le Dieu saint ne peut pas ignorer le péché, mais pourvoit à un moyen de réconciliation. La sainteté de Dieu est la mesure de sa justice, et le sacrifice est la manifestation de sa grâce.`,

  christologicalTypes: [
    {
      type: "Les cinq sacrifices",
      antitype: "Jésus-Christ",
      parallels: [ "Holocauste (1-4): Christ s’offrant totalement à Dieu (Hé 10:5-7)", "Gâteau (2): Christ comme pain de vie sans levain (Jn 6:35)",
        "Pacifique (3): Christ notre paix (Ép 2:14)",
        "Pour le péché (4): Christ portant notre péché (2 Co 5:21)",
        "Pour le délit (5): Christ payant notre dette (Col 2:14)"
      ],
      ntReferences: ["Hébreux 10:1-18", "Hébreux 13:10-16", "1 Corinthiens 5:7", "Éphésiens 5:2"]
    },
    {
      type: "Le souverain sacrificateur",
      antitype: "Jésus-Christ",
      parallels: [ "Oint et consacre (8:12)",
        "Entre dans le très saint (16)",
        "Fait expiation pour le péché (16:15-16)",
        "Sort vivant du sanctuaire (16:17)",
        "Porte les noms du peuple (8:9)"
      ],
      ntReferences: ["Hébreux 4:14-16", "Hébreux 7:23-28", "Hébreux 9:11-15", "Hébreux 10:19-22"]
    },
    {
      type: "Le bouc émissaire",
      antitype: "Jésus-Christ",
      parallels: [ "Porte les iniquités du peuple (16:21-22)",
        "Envoyé dans le désert (16:22)",
        "Deux boucs: un sacrifié, un envoyé",
        "Expiation complète par les deux"
      ],
      ntReferences: ["Hébreux 13:11-13", "Jean 1:29", "1 Pierre 2:24", "Ésaïe 53:6"]
    },
    {
      type: "Les fêtes",
      antitype: "Jésus-Christ",
      parallels: [ "Pâque: Christ notre Pâque sacrifié (1 Co 5:7)",
        "Pentecôte: Esprit donné (Ac 2)",
        "Tabernacles: Incarnation (Jn 1:14)",
        "Yom Kippour: Expiation en Christ (Hé 9-10)",
        "Jour des trompettes: Retour du Christ (1 Th 4:16)"
      ],
      ntReferences: ["1 Corinthiens 5:7-8", "Jean 7:37-39", "Apocalypse 19:7-9", "1 Thessaloniciens 4:16-17"]
    }
  ],

  literaryStructure: {
    outline: [
      { section: "Les sacrifices", chapters: "1-7" },
      { section: "Les sacrificateurs", chapters: "8-10" },
      { section: "La pureté", chapters: "11-15" },
      { section: "Le Jour des expiations", chapters: "16" },
      { section: "Code de sainteté", chapters: "17-27" }
    ]
  },

  readingTime: "Environ 2 heures pour une lecture normale, mais demande une étude approfondie pour comprendre les rituels."
}

/* ============================================================================
 *
 * NOTES DE LECTURE
 *
 * ============================================================================ */

export const leviticusReadingNotes: BookReadingNotes = {
  bookId: "leviticus",
  introduction: `Le Lévitique est souvent considéré comme le livre le plus difficile de la Bible, avec ses lois rituelles, ses sacrifices et ses codes de pureté. Mais il est aussi un des plus théologiquement riches.

Le message central du Lévitique est: la sainteté de Dieu exige un peuple saint. Comment le Dieu saint peut-il demeurer avec un peuple pécheur? La réponse est: par le sacrifice, par la médiation sacerdotale, par la pureté rituelle et morale.

Le Lévitique nous enseigne que Dieu est saint et que le péché est grave. Le péché contamine et exige la mort. Mais Dieu pourvoit à un moyen de réconciliation: le sacrifice d'un substitut innocent. Ce système sacrificiel est l'évangile dans l'Ancien Testament: Dieu pourvoit au salut par grâce, par le sang d'un autre.

Chaque sacrifice, chaque rituel, chaque fête pointe vers Christ. Il est notre sacrifice, notre sacrificateur, notre expiation, notre Sabbat, notre Pâque. Le Lévitique est l'ombre dont Christ est la réalité (Col 2:16-17; Hé 10:1).`,

  sections: [
    {
      title: "Les cinq offrandes (1:1-7:38)",
      summary: "Les cinq types d'offrandes: l'holocauste, l’offrande de gâteau, le sacrifice pacifique, le sacrifice pour le péché, et le sacrifice pour le délit.", keyQuotes: [ "Si quelqu’un offre un holocauste... il offrira un mâle sans défaut. (1:3)", "Quand quelqu'un offrira à l’Éternel une offrande de gâteau... (2:1)", "Si son offrande est un sacrifice pacifique... (3:1)",
        "Si quelqu’un pèche involontairement... il offrira un bouc sans défaut. (4:22-24)", "Lorsque quelqu'un commettra une infidélité... il offrira un bélier sans défaut. (5:15)"
      ],
      concepts: [
        { term: "Holocauste (Olah)", explanation: "Sacrifice consumé entièrement par le feu (olah = «ce qui monte»). Exprime la consécration totale à Dieu. Type de Christ qui s'offre totalement (Hé 10:5-7)." },
        { term: "Offrande de gâteau (Minha)", explanation: "Offrande de farine et d'huile, sans sang. Exprime la consécration du travail et des biens à Dieu. Type de Christ comme pain de vie (Jn 6:35)." },
        { term: "Sacrifice pacifique (Shelamim)", explanation: "Sacrifice de communion. Le sacrifiant mange une partie avec les sacrificateurs. Exprime la paix avec Dieu et la communion. Type de Christ notre paix (Ép 2:14)." },
        { term: "Sacrifice pour le péché (Hattat)", explanation: "Sacrifice pour expier le péché involontaire. Le sang est porté dans le lieu saint. Type de Christ portant notre péché (2 Co 5:21)." },
        { term: "Sacrifice pour le délit (Asham)", explanation: "Sacrifice pour la violation d'un droit. Inclut la restitution. Type de Christ payant notre dette (Col 2:14)." }
      ],
      theologicalNotes: "Les cinq sacrifices couvrent tous les aspects de la relation avec Dieu: consécration (holocauste), gratitude (gâteau), communion (pacifique), expiation (péché), restitution (délit). Ils montrent que Dieu pourvoit pour chaque besoin spirituel. Ces sacrifices sont insuffisants en eux-mêmes (Hé 10:4) mais préfigurent le sacrifice parfait de Christ, qui s'offre une fois pour toutes (Hé 10:10-14)."
    },
    {
      title: "Consécration des sacrificateurs (8:1-10:20)",
      summary: "Aaron et ses fils sont consacrés comme sacrificateurs. Nadab et Abihu offrent un feu étranger et sont consumés.",
      keyQuotes: [ "'L’Éternel parla à Moïse: Prends Aaron et ses fils... (8:1-2)", "Moïse fit approcher Aaron et ses fils, et les lava avec de l’eau. (8:6)", "Il répandit l'huile d'onction sur la tête d'Aaron, et l’oignit pour le consacrer. (8:12)", "Le feu sortit de devant l’Éternel, et consuma... Nadab et Abihu. (10:2)", "C'est à cause de ceux qui s'approchent de l'Éternel que je me sanctifierai. (10:3)"
      ],
      concepts: [
        { term: "Onction", explanation: "L'huile d'onction consacre les personnes et les objets à Dieu. Type de l'Esprit (1 S 16:13; Ac 10:38). Christ est l'Oint (Messie) par excellence." },
        { term: "Sacrificateur", explanation: "Médiateur entre Dieu et le peuple. Type de Christ comme souverain sacrificateur (Hé 4:14-16; 7:23-28)." },
        { term: "Feu étranger", explanation: "Feu non pris de l'autel. Symbole de fausse adoration ou d'approche présomptueuse de Dieu. La sainteté de Dieu ne permet pas de compromis." }
      ],
      theologicalNotes: "La consécration des sacrificateurs implique lavage, onction, sacrifice, et repas. Le lavage symbolise la purification (1 Co 6:11). L'onction consacre à Dieu. Le sacrifice expie le péché. Le repas exprime la communion. La mort de Nadab et Abihu illustre la sainteté de Dieu: on ne peut s'approcher de Dieu de n'importe quelle manière. C'est un avertissement solennel: le culte doit être offert selon les instructions de Dieu, non selon les préférences humaines."
    },
    {
      title: "Lois sur la pureté (11:1-15:33)",
      summary: "Distinction entre animaux purs et impurs, purification après l’accouchement, lèpre, et écoulements. Le Jour des expiations.", keyQuotes: [ "Voici les animaux que vous mangerez... (11:2)",
        "Vous serez saints, car je suis saint. (11:44-45)",
        "Lorsqu’un homme aura... une tumeur... (13:2)", "Le sacrificateur fera l’examen... (13:3)", "C'est ici une ordonnance perpétuelle pour vous... le dixième jour du septième mois, vous affligerez vos âmes. (16:29)"
      ],
      concepts: [
        { term: "Pur et impur", explanation: "La pureté rituelle est nécessaire pour approcher le sanctuaire. L'impureté transmet, comme une maladie contagieuse. Certains animaux sont impurs, symbolisant la séparation d'avec les nations." },
        { term: "Lèpre (Tsara’at)", explanation: "Maladie de peau symbolisant le péché. Le lépreux est exclu du camp, comme le pécheur est séparé de Dieu. La guérison exige examen et sacrifice." },
        { term: "Jour des expiations (Yom Kippour)", explanation: "Le jour le plus saint de l'année. Le souverain sacrificateur entre dans le très saint pour faire expiation. Préfigure l'œuvre de Christ (Hé 9-10)." }
      ],
      theologicalNotes: "Les lois de pureté enseignent que Dieu est saint et que le péché contamine. La sainteté de Dieu exige la séparation du péché. L'impureté n'est pas nécessairement un péché (accouchement, maladie), mais elle empêche l'approche de Dieu. Le Jour des expiations est le grand jour où toute impureté est purifiée. Le souverain sacrificateur offre deux boucs: un sacrifié (mort substitutive), un envoyé dans le désert (enlèvement du péché). Ensemble, ils accomplissent l'expiation complète. Christ accomplit ces deux fonctions: il meurt et enlève le péché (Jn 1:29)."
    },
    {
      title: "Code de sainteté (17:1-27:34)",
      summary: "Lois pour une vie sainte dans tous les domaines: alimentation, relations sexuelles, commerce, justice, fêtes, Sabbat, Jubilé.",
      keyQuotes: [ "Si un homme de la maison d'Israël... offre un holocauste ou un sacrifice, et ne l'amène pas à l'entrée de la tente d’assignation... il sera retranché du milieu de son peuple. (17:3-4)", "Car l'âme de la chair est dans le sang. Je vous l'ai donné sur l'autel, pour faire l’expiation pour vos âmes. (17:11)", "Vous serez saints, car je suis saint. (19:2)",
        "Tu aimeras ton prochain comme toi-même. (19:18)",
        "Vous ne déterrerez point un homme... (19:...)",
        "Vous observerez mes sabbats. (19:3, 30)",
        "Voici les fêtes de l’Éternel... (23:2)", "Vous ferez le jubilé... (25:10)",
        "Si vous marchez dans mes statuts... je vous donnerai mes bénédictions. (26:3-13)"
      ],
      concepts: [
        { term: "Sang", explanation: "La vie est dans le sang (17:11). Le sang fait expiation car il contient la vie. Le sang ne doit pas être mangé. Principe fondamental du sacrifice." },
        { term: "Sainteté (Qodesh)", explanation: "Séparé, mis à part pour Dieu. La sainteté n'est pas seulement rituelle mais morale. 'Vous serez saints, car je suis saint' est le thème central du livre." },
        { term: "Sabbat", explanation: "Repos le septième jour. Mémorial de la création et signe de l'alliance (Ex 31:13). Préfigure le repos en Christ (Hé 4; Mt 11:28)." },
        { term: "Jubilé", explanation: "Année après sept cycles sabbatiques (49e année). Les esclaves sont libérés, les terres restituées. Préfigure la libération en Christ (Lc 4:18-19)." }
      ],
      theologicalNotes: "Le Code de sainteté contient des lois pour tous les aspects de la vie. La sainteté n'est pas seulement religieuse mais concerne toute l'existence. Les lois sexuelles (ch. 18) protègent la famille et la dignité humaine. Les lois sociales (ch. 19) protègent les pauvres, les étrangers, les faibles. 'Tu aimeras ton prochain comme toi-même' (19:18) est résumé par Jésus comme le second grand commandement (Mt 22:39). Les fêtes (ch. 23) commémorent les œuvres de Dieu: délivrance (Pâque), moisson (Pentecôte), pèlerinage (Tabernacles). L'année sabbatique et le jubilé (ch. 25) libèrent et restituent, montrant que Dieu est le propriétaire ultime de toute la terre. Le chapitre 26 contient des bénédictions pour l'obéissance et des malédictions pour la désobéissance—le principe de l'alliance."
    }
  ]
}

/* ============================================================================
 *
 * PLANS DES CHAPITRES
 *
 * ============================================================================ */

export const leviticusChapterOutlines: ChapterOutline[] = [
  {
    chapter: 1,
    title: "L’holocauste", summary: "Lois sur l’holocauste (olah), sacrifice consumé entièrement par le feu.", keyEvents: ["Holocauste de troupeau", "Holocauste de petit bétail", "Holocauste d’oiseaux", "Le feu consume tout"],
    keyVerses: ["1:3", "1:9", "1:14"],
    theologicalNotes: "L'holocauste exprime la consécration totale à Dieu. Tout est consumé par le feu, exprimant l'offrande complète. Type de Christ qui s'offre totalement à Dieu (Hé 10:5-7)."
  },
  {
    chapter: 2,
    title: "L’offrande de gâteau", summary: "Lois sur l’offrande de gâteau (minha), offrande de farine sans sang.", keyEvents: ["Farine fine, huile, encens", "Pas de levain ni de miel", "Sel de l’alliance", "Portion pour les sacrificateurs"],
    keyVerses: ["2:1", "2:11", "2:13"],
    theologicalNotes: "L'offrande de gâteau exprime la gratitude et la consécration des biens à Dieu. Le levain (péché) et le miel (fermentation) sont exclus. Le sel symbolise la permanence de l'alliance."
  },
  {
    chapter: 3,
    title: "Le sacrifice pacifique",
    summary: "Lois sur le sacrifice pacifique (shelamim), sacrifice de communion.",
    keyEvents: ["Du troupeau ou du petit bétail", "Sang sur l’autel", "Graisse brûlée", "Viande mangée par le sacrifiant"],
    keyVerses: ["3:1", "3:5", "3:17"],
    theologicalNotes: "Le sacrifice pacifique est un repas de communion avec Dieu. Le sacrifiant mange une partie de la victime, exprimant la paix et la réconciliation. Type de Christ notre paix (Ép 2:14)."
  },
  {
    chapter: 4,
    title: "Le sacrifice pour le péché",
    summary: "Lois sur le sacrifice pour le péché (hattat) pour les péchés involontaires.",
    keyEvents: ["Sacrifice pour le sacrificateur", "Sacrifice pour la congrégation", "Sacrifice pour le chef", "Sacrifice pour un simple particulier", "Sang porté dans le sanctuaire"],
    keyVerses: ["4:2", "4:3", "4:13-14", "4:22", "4:27"],
    theologicalNotes: "Le sacrifice pour le péché couvre les péchés involontaires, montrant que même le péché non intentionnel contamine. Le sang est porté dans le lieu saint pour faire expiation. Type de Christ portant notre péché (2 Co 5:21)."
  },
  {
    chapter: 5,
    title: "Le sacrifice pour le délit",
    summary: "Lois sur le sacrifice pour le délit (asham) pour les violations de droits.",
    keyEvents: ["Infidélité et parjure", "Contact avec une impureté", "Serment sans réflexion", "Restitution requise", "Bélier comme sacrifice"],
    keyVerses: ["5:1", "5:15-16", "5:17-19"],
    theologicalNotes: "Le sacrifice pour le délit couvre les violations des droits d'autrui. La restitution est requise en plus du sacrifice. Type de Christ payant notre dette (Col 2:14)."
  },
  {
    chapter: 6,
    title: "Lois pour les sacrificateurs (1)",
    summary: "Responsabilités des sacrificateurs pour les holocaustes, offrandes de gâteau, et sacrifices pour le péché.",
    keyEvents: ["Le feu doit rester allumé", "Sacrificateur mange l’offrande de gâteau", "Sang porté dans le sanctuaire", "Sainteté des sacrifices"],
    keyVerses: ["6:9", "6:13", "6:25-27"],
    theologicalNotes: "Les sacrificateurs sont responsables de maintenir le feu et de traiter les sacrifices saints. L'holocauste est consumé entièrement; le gâteau est mangé par le sacrificateur. Ce qui touche les sacrifices devient saint."
  },
  {
    chapter: 7,
    title: "Lois pour les sacrificateurs (2)",
    summary: "Lois sur le sacrifice pacifique, la consommation des offrandes, et les animaux impurs.",
    keyEvents: ["Sacrifice pacifique: repas de communion", "Interdiction de manger la graisse et le sang", "Portion pour les sacrificateurs", "Bénédictions sacerdotales"],
    keyVerses: ["7:11-15", "7:22-27", "7:28-34"],
    theologicalNotes: "Le sacrifice pacifique est un repas avec Dieu. La graisse et le sang appartiennent à Dieu. Les sacrificateurs reçoivent une portion pour vivre. Les bénédictions de Dieu reposent sur l'obéissance."
  },
  {
    chapter: 8,
    title: "Consécration d’Aaron et de ses fils", summary: "Cérémonie de consécration d’Aaron et de ses fils comme sacrificateurs.", keyEvents: ["Lavage avec de l’eau", "Vêtements sacerdotaux", "Onction d’huile", "Sacrifices", "Application du sang", "Sept jours de consécration"],
    keyVerses: ["8:6", "8:12", "8:23-24", "8:30", "8:33-36"],
    theologicalNotes: "La consécration implique lavage (purification), onction (consécration), et sacrifice (expiation). Le sang sur l'oreille, le pouce et l'orteil consacre l'écoute, l'action et la marche. L'onction consacre à un service saint."
  },
  {
    chapter: 9,
    title: "Service inaugural",
    summary: "Aaron offre les premiers sacrifices. La gloire de l’Éternel apparaît.", keyEvents: ["Holocauste pour Aaron et le peuple", "Sacrifice pour le péché", "Sacrifice pacifique", "Bénédiction du peuple", "Feu de l'Éternel consume l'offrande"],
    keyVerses: ["9:4", "9:6", "9:22-24"],
    theologicalNotes: "Aaron commence son service avec des sacrifices pour lui-même et le peuple. La gloire de Dieu apparaît et consume l'offrande, signifiant son acceptation. Le feu divin sera maintenu perpétuellement (6:13)."
  },
  {
    chapter: 10,
    title: "La mort de Nadab et Abihu",
    summary: "Nadab et Abihu offrent un feu étranger et sont consumés. Lois pour les sacrificateurs.",
    keyEvents: ["Nadab et Abihu offrent un feu étranger", "Le feu de l’Éternel les consume", "Interdiction de boire dans le sanctuaire", "Distinction entre pur et impur", "Portion des sacrificateurs"],
    keyVerses: ["10:1-2", "10:3", "10:8-11", "10:10"],
    theologicalNotes: "La mort de Nadab et Abihu illustre la sainteté de Dieu. On ne peut s'approcher de Dieu de n'importe quelle manière. Le culte doit être offert selon ses instructions. Le feu étranger représente la fausse adoration ou l'approche présomptueuse."
  },
  {
    chapter: 11,
    title: "Animaux purs et impurs",
    summary: "Distinction entre animaux purs et impurs pour l’alimentation.", keyEvents: ["Animaux terrestres: rumination + sabot divisé", "Poissons: nageoires + écailles", "Oiseaux: liste d’oiseaux impurs", "Insectes: sauteurs purs", "Contact avec les cadavres rend impur"],
    keyVerses: ["11:3", "11:9", "11:20", "11:44-45", "11:46-47"],
    theologicalNotes: "Les critères de pureté séparent Israël des nations. Les animaux purs ruminent (méditent la Parole) et ont le sabot divisé (marche séparée). Ces lois enseignent la distinction entre le saint et le profane. 'Vous serez saints, car je suis saint' est le thème central."
  },
  {
    chapter: 12,
    title: "Purification après l’accouchement", summary: "Lois sur la purification de la femme après l’accouchement.", keyEvents: ["Impureté pendant 7 jours (garçon) ou 14 jours (fille)", "Purification pendant 33 ou 66 jours", "Holocauste et sacrifice pour le péché"],
    keyVerses: ["12:2-5", "12:6-8"],
    theologicalNotes: "L'accouchement rend impur, non parce que la procréation est mauvaise, mais parce que la vie implique la perte de sang (impureté). Les périodes différentes pour garçons et filles reflètent peut-être la structure patriarcale, mais ne signifient pas l'infériorité. Marie observe cette loi (Lc 2:22-24)."
  },
  {
    chapter: 13,
    title: "La lèpre",
    summary: "Diagnostic de la lèpre (tsara’at) par les sacrificateurs.", keyEvents: ["Tumeur, dartre, tache brillante", "Examen par le sacrificateur", "Isolement pendant 7 jours", "Lèpre prononcée: cheveux blancs, chair vive", "Lépreux déchirera ses vêtements",
      "Crie: Impur! Impur!", "Habit isolé hors du camp"],
    keyVerses: ["13:2-3", "13:45-46"],
    theologicalNotes: "La lèpre symbolise le péché. Elle isole le lépreux de la communauté, comme le péché sépare de Dieu. Le diagnostic est donné par le sacrificateur, pas par le médecin. La guérison exige examen et sacrifice (ch. 14). Type du péché qui contamine et sépare."
  },
  {
    chapter: 14,
    title: "Purification du lépreux",
    summary: "Cérémonie de purification pour le lépreux guéri.",
    keyEvents: ["Examen par le sacrificateur", "Deux oiseaux: un sacrifié, un relâché", "Lavage et rasage", "Sang sur le lépreux", "Holocauste et sacrifice pour le péché", "Lèpre de la maison"],
    keyVerses: ["14:2-7", "14:14", "14:33-53"],
    theologicalNotes: "La purification du lépreux implique sacrifice, lavage, et onction d'huile. Les deux oiseaux symbolisent la mort et la vie: l'un sacrifié, l'autre relâché. Le sang est appliqué sur le lépreux, comme sur les maisons touchées par la lèpre. Type de la guérison spirituelle par Christ."
  },
  {
    chapter: 15,
    title: "Écoulements et impureté",
    summary: "Lois sur les écoulements masculins et féminins.",
    keyEvents: ["Écoulement de l’homme: impurité", "Écoulement de sperme: baignade et lavage", "Règles de la femme: impureté 7 jours", "Relations pendant les règles: impureté", "Purification par sacrifice"],
    keyVerses: ["15:2", "15:16", "15:19", "15:29-30"],
    theologicalNotes: "Les écoulements naturels rendent impur, non parce qu'ils sont mauvais, mais parce que la perte de sang ou de fluide vital est un rappel de la mortalité. La pureté rituelle est nécessaire pour approcher le sanctuaire. Ces lois distinguent Israël des cultes de fertilité cananéens."
  },
  {
    chapter: 16,
    title: "Le Jour des expiations",
    summary: "Cérémonie du Yom Kippour, jour le plus saint de l’année.", keyEvents: ["Aaron ne peut entrer à tout moment", "Sacrifice pour Aaron et sa maison", "Bouc pour l’Éternel et bouc émissaire", "Sang porté dans le très saint", "Confession sur le bouc émissaire", "Bouc envoyé dans le désert", "Jeûne et repos obligatoires"],
    keyVerses: ["16:2", "16:7-10", "16:15-16", "16:20-22", "16:29-30", "16:34"],
    theologicalNotes: "Le Yom Kippour est le jour de l'expiation nationale. Le souverain sacrificateur entre dans le très saint, seul jour de l'année. Les deux boucs représentent deux aspects de l'expiation: mort (sacrifice) et enlèvement (bouc émissaire). Type de l'œuvre de Christ (Hé 9-10)."
  },
  {
    chapter: 17,
    title: "Sanctité du sang",
    summary: "Lois sur l'abattage des animaux et l’interdiction de manger le sang.", keyEvents: ["Sacrifice seulement à la tente d’assignation", "Interdiction de manger le sang", "La vie est dans le sang", "Le sang fait expiation"],
    keyVerses: ["17:3-4", "17:10-12", "17:11"],
    theologicalNotes: "Le sang contient la vie (17:11). Il est donné pour faire expiation. Manger le sang, c'est chercher la vie en dehors de Dieu. Ce principe fonde tout le système sacrificiel. Le sang de Christ est le 'sang de l'alliance' (Mt 26:28)."
  },
  {
    chapter: 18,
    title: "Lois sexuelles",
    summary: "Interdiction des pratiques sexuelles cananéennes.",
    keyEvents: ["Inceste avec père, mère, belle-mère", "Relations avec sœur, petite-fille", "Relations pendant les règles", "Adultère", "Sacrifice d’enfants à Moloc", "Homosexualité", "Bestialité", "Le pays va être vomi"],
    keyVerses: ["18:6-18", "18:22", "18:24-25"],
    theologicalNotes: "Ces lois protègent la famille et la dignité humaine. Elles interdisent les pratiques cananéennes (inceste, homosexualité, bestialité, sacrifice d'enfants). Le pays «vomit» ses habitants à cause de ces abominations. Israël doit être distinct. Le NT maintient l'interdiction de plusieurs de ces pratiques."
  },
  {
    chapter: 19,
    title: "Code de sainteté",
    summary: "Diverses lois pour une vie sainte.",
    keyEvents: ["Vous serez saints, car je suis saint", "Révérence pour père et mère", "Sabbat", "Pas d’idoles", "Sacrifice pacifique", "Glaneurs pour le pauvre et l’étranger", "Pas de vol, mensonge, parjure", "Pas d’oppression", "Pas de calomnie", "Aime ton prochain comme toi-même, ‘Pas de mélange d’espèces’", "Pas de sorcellerie", "Respect pour l’étranger", "Juges justes"],
    keyVerses: ["19:2", "19:9-10", "19:11", "19:15", "19:18", "19:33-34"],
    theologicalNotes: "Le Code de sainteté contient des lois pour tous les aspects de la vie. 'Aime ton prochain comme toi-même' (19:18) est résumé par Jésus comme le second grand commandement. La sainteté n'est pas seulement rituelle mais morale: justice sociale, honnêteté, respect."
  },
  {
    chapter: 20,
    title: "Pénalités",
    summary: "Pénalités pour les violations de la loi.",
    keyEvents: ["Mort pour sacrifice à Moloc", "Mort pour sorcellerie", "Mort pour incestes divers", "Mort pour adultère", "Mort pour homosexualité", "Mort pour bestialité", "Séparation sainte"],
    keyVerses: ["20:2", "20:6", "20:10", "20:13", "20:26"],
    theologicalNotes: "Les pénalités pour les violations graves montrent la gravité du péché. La mort pour certaines offenses souligne que le péché détruit la communauté. La séparation d'avec les nations impures est essentielle pour maintenir la sainteté."
  },
  {
    chapter: 21,
    title: "Sainteté des sacrificateurs",
    summary: "Lois pour les sacrificateurs et le souverain sacrificateur.",
    keyEvents: ["Sacrificateurs ne se rendront pas impurs", "Ne se rasent pas la tête", "Pas de femmes déshonorées", "Ne se marieront qu’avec vierge", "Souverain sacrificateur: restrictions supplémentaires", "Parfaits physiquement"],
    keyVerses: ["21:1-6", "21:10-15", "21:16-23"],
    theologicalNotes: "Les sacrificateurs doivent être saints car ils représentent Dieu. Le souverain sacrificateur a des restrictions plus sévères. Les défauts physiques empêchent le service car le sacrificateur doit être sans défaut, préfigurant Christ sans défaut (1 Pi 1:19)."
  },
  {
    chapter: 22,
    title: "Sainteté des offrandes",
    summary: "Lois sur qui peut manger les offrandes et les animaux acceptables.",
    keyEvents: ["Sacrificateurs et leur famille mangent les offrandes", "Profane ou impur ne mangera pas", "Animaux sans défaut", "Agneau de moins de 8 jours", "Mère et petit le même jour"],
    keyVerses: ["22:3", "22:17-21", "22:27-28", "22:31-33"],
    theologicalNotes: "Les offrandes doivent être sans défaut, car le meilleur appartient à Dieu. Seuls les sacrificateurs purs peuvent manger les offrandes saintes. Ces lois honnent Dieu comme saint et digne du meilleur."
  },
  {
    chapter: 23,
    title: "Les fêtes de l’Éternel", summary: "Calendrier des fêtes annuelles.",
    keyEvents: [ "Sabbat hebdomadaire", "Pâque (14 Nisan)", "Pains sans levain (15-21 Nisan)", "Prémices (lendemain du Sabbat)", "Pentecôte (50 jours après)", "Fête des trompettes (1 Tishri)", "Yom Kippour (10 Tishri)", "Tabernacles (15-22 Tishri)"],
    keyVerses: [ "23:2-3", "23:4-8", "23:9-14", "23:15-22", "23:23-25", "23:26-32", "23:33-44"],
    theologicalNotes: "Les fêtes commémorent les œuvres de Dieu: délivrance (Pâque), résurrection (Prémices), don de la loi (Pentecôte), création/jugement (Trompettes), expiation (Yom Kippour), pèlerinage/protection (Tabernacles). Toutes préfigurent Christ: notre Pâque (1 Co 5:7), notre résurrection (1 Co 15:20), notre Pentecôte (Ac 2)."
  },
  {
    chapter: 24,
    title: "Lampes, pains, blasphème",
    summary: "Lampes du chandelier, pains de proposition, châtiment du blasphémateur.",
    keyEvents: ["Chandelier: lampes always brûlent", "Douze pains sur la table", "Hébreu blasphème le nom", "Châtiment: mort par lapidation", "Œil pour œil, dent pour dent"],
    keyVerses: ["24:2-4", "24:5-9", "24:11-16", "24:17-23"],
    theologicalNotes: "Les lampes et les pains sont des symboles de la présence et de la provision de Dieu. Le blasphème est puni de mort car le nom de Dieu est saint. La loi du talion limite la vengeance: la punition doit être proportionnelle à l'offense."
  },
  {
    chapter: 25,
    title: "Année sabbatique et Jubilé",
    summary: "Lois sur l’année sabbatique (tous les 7 ans) et le Jubilé (tous les 50 ans).", keyEvents: [ "Sabbat de la terre tous les 7 ans", "Jubilé la 50e année", "Liberté pour tous les habitants", "Retour à sa propriété", "Vente en fonction des années jusqu’au Jubilé", "Pas d’usure", "Délivrance des esclaves hébreux"],
    keyVerses: [ "25:4", "25:10", "25:23", "25:35-37"],
    theologicalNotes: "'L'année sabbatique libère la terre et les humains. Le Jubilé est la 'super-sabbat«: liberté totale, restitution des terres, libération des esclaves. Ces lois affirment que Dieu est le propriétaire ultime de toute la terre (25:23). Type de la libération en Christ (Lc 4:18-19)."
  },
  {
    chapter: 26,
    title: "Bénédictions et malédictions",
    summary: "Bénédictions pour l’obéissance, malédictions pour la désobéissance.", keyEvents: ["Bénédictions: pluie, paix, victoire, présence", "Malédictions: maladie, défaite, famine, exil", "Confession et repentir",
      "Dieu n'oubliera pas l'alliance"],
    keyVerses: ["26:3-13", "26:14-39", "26:40-45"],
    theologicalNotes: "Ce chapitre énonce le principe de l'alliance: obéissance = bénédiction, désobéissance = malédiction. Les bénédictions incluent la pluie, la paix, la victoire, la présence. Les malédictions incluent la maladie, la défaite, la famine, l'exil. Dieu reste fidèle à son alliance même dans le jugement."
  },
  {
    chapter: 27,
    title: "Vœux et dîmes",
    summary: "Lois sur les vœux, les dîmes, et les dédicaces.",
    keyEvents: [ "Vœux de personnes ou animaux", "Dédicace de maison ou champ", "Vœux impurs: rachat nécessaire", "Dîme de la terre", "Dîme du troupeau", "Premiers-nés consacrés"],
    keyVerses: [ "27:2-8", "27:9-25", "27:30-33"],
    theologicalNotes: "Les vœux sont des promesses à Dieu. Ils sont obligatoires mais peuvent être rachetés. La dîme (10%) appartient à Dieu. Les premiers-nés lui sont consacrés. Ces lois reconnaissent que tout vient de Dieu et lui appartient."
  }
]

/* ============================================================================
 *
 * PASSAGES CLÉS
 *
 * ============================================================================ */

export const leviticusKeyPassages: KeyPassage[] = [
  {
    reference: "Lévitique 1:1-17; 3; 4; 5:14-19",
    title: "Les cinq offrandes",
    text: "L’Éternel appela Moïse... «Si quelqu'un offre un holocauste... il offrira un mâle sans défaut'... ''Si son offrande est un sacrifice pacifique'... 'Si quelqu'un pèche involontairement... il offrira un bouc'\\'... \"Lorsque quelqu'un commettra une infidélité... il offrira un bélier»...", commentary: `Les cinq sacrifices couvrent tous les aspects de la relation avec Dieu:

1. Holocauste (Olah, ch. 1): Tout est consumé par le feu. Exprime la consécration totale. Type de Christ s"offrant totalement (Hé 10:5-7; Ép 5:2).

2. Gâteau (Minha, ch. 2): Offrande de farine, sans sang. Exprime la gratitude et la consécration des biens. Type de Christ comme pain de vie (Jn 6:35).

3. Pacifique (Shelamim, ch. 3): Repas de communion. Le sacrifiant mange avec Dieu. Type de Christ notre paix (Ép 2:14; Col 1:20).

4. Pour le péché (Hattat, ch. 4): Expiation pour les péchés involontaires. Le sang est porté dans le lieu saint. Type de Christ portant notre péché (2 Co 5:21; Hé 9:28).

5. Pour le délit (Asham, 5:14-19): Expiation pour les violations de droits. Inclut la restitution. Type de Christ payant notre dette (Col 2:14; 1 Pi 2:24).

Hébreux 10:1-4 déclare que ces sacrifices sont "'une ombre des biens à venir, et non l'image exacte des choses.\\' Ils ne peuvent pas rendre parfait ceux qui les offrent. Ils sont répétés continuellement, montrant leur insuffisance. Christ est 'venu pour faire la volonté de Dieu'\\' et «a ôté le premier pour établir le second' (Hé 10:9). Son sacrifice unique est suffisant pour toujours.

Cependant, les sacrifices enseignent des vérités essentielles:
- Le péché a un coût (la mort)
- L"approche de Dieu nécessite un substitut
- La gratitude doit être exprimée
- La communion avec Dieu est possible
- La restitution est nécessaire quand on a lésé quelqu"un

Christ accomplit tous ces types: il est notre holocauste (consécration totale), notre gâteau (pain de vie), notre paix (pacifique), notre sacrifice pour le péché (expiation), et notre paiement pour le délit (restitution).`,
    crossReferences: [ "Hébreux 9:22 (Sans effusion de sang, pas de pardon)",
      "Hébreux 10:1-18 (Sacrifice de Christ parfait)",
      "Éphésiens 5:2 (Christ s’est offert)", "1 Corinthiens 5:7 (Christ notre Pâque)"
    ],
    theologicalThemes: [ "Sacrifice", "Expiation", "Christologie", "Substitution", "Grâce"]
  },
  {
    reference: "Lévitique 16",
    title: "Le Jour des expiations",
    text: "L’Éternel parla à Moïse... «Aaron ne pourra entrer à tout moment dans le sanctuaire... Le dixième jour de ce septième mois, vous affligerez vos âmes'... Il prendra deux boucs... Il tirera un sort pour l'Éternel, et l’autre pour le bouc émissaire... Il fera expiation pour le sanctuaire... Il confessera sur lui toutes les iniquités... Il enverra le bouc dans le désert... Ce sera pour vous un statut perpétuel...", commentary: `Le Yom Kippour (Jour des expiations) est le jour le plus saint du calendrier juif. C"est le seul jour où le souverain sacrificateur entre dans le très saint.

Le rituel implique:
1. Sacrifice pour Aaron: Un taureau est offert pour expier les péchés du souverain sacrificateur et de sa maison.
2. Deux boucs: Deux boucs sont choisis. Le sort désigne l"un pour l'Éternel, l'autre comme bouc émissaire (azazel).
3. Bouc pour l"Éternel: Sacrifié, et son sang est porté dans le très saint et aspergé sur le propitiatoire.
4. Bouc émissaire: Aaron impose les mains sur lui, confesse les péchés d"Israël, et l'envoie dans le désert.
5. Expiation pour le sanctuaire: Le sang purifie le tabernacle contaminé par les péchés du peuple.

Le symbolisme est riche:
- Les deux boucs représentent deux aspects de l"expiation: la mort substitutive et l'enlèvement du péché.
- Le très saint est le lieu de la présence de Dieu, inaccessible aux pécheurs.
- Le sang sur le propitiatoire apaise la colère de Dieu et couvre le péché.
- Le bouc émissaire porte les péchés loin dans le désert, où ils ne sont plus jamais vus.

Hébreux 9-10 applique ce rituel à Christ:
- Il est entré dans le très saint céleste, non avec le sang d"animaux mais avec son propre sang (Hé 9:12).
- Il a obtenu une rédemption éternelle, non temporaire (Hé 9:12).
- Son sang purifie notre conscience des œuvres mortes (Hé 9:14).
- Il s"est offert une fois pour toutes, portant les péchés de beaucoup (Hé 9:28).
- Il n"a pas besoin de se répéter comme les souverains sacrificateurs (Hé 10:11-14).

Le Yom Kippour préfigure l"accomplissement final en Christ: l'expiation complète, permanente, efficace. Il enseigne que le péché est grave, qu'il contamine tout ce qu'il touche, et que seul le sang peut l'expié.`,
    crossReferences: [ "Hébreux 9:1-14 (Christ dans le sanctuaire céleste)",
      "Hébreux 9:23-28 (Christ offert une fois pour toutes)",
      "Hébreux 10:1-4 (Loi: ombre des biens à venir)",
      "Romains 3:25 (Christ propitiatoire par la foi en son sang)"
    ],
    theologicalThemes: [ "Expiation", "Souverain sacrificateur", "Sang«", "Très saint", "Christologie"]
  },
  {
    reference: "Lévitique 17:11",
    title: "La vie est dans le sang",
    text: "Car l'âme de la chair est dans le sang. Je vous l'ai donné sur l'autel, pour faire l'expiation pour vos âmes; c'est le sang qui fait l'expiation, à cause de l’âme.", commentary: `Ce verset est le principe fondamental de tout le système sacrificiel. Il explique pourquoi le sang, et non autre chose, fait expiation.

Trois vérités essentielles:

1. La vie est dans le sang: Le sang est le siège de la vie. Le sang qui coule, c"est la vie qui se perd. La science moderne confirme que le sang transporte l'oxygène et les nutriments essentiels à la vie.

2. Le sang est donné sur l"autel: Le sang est versé sur l'autel de Dieu, signifiant que la vie appartient à Dieu. Le don de la vie accepte la mort de l'animal à la place du pécheur.

3. Le sang fait l"expiation: Le mot '«expiation\\' (kippour) signifie »couvrir«\\' ou \"apaiser.' Le sang couvre le péché et apaise la colère de Dieu.

Ce principe fonde:
- L"interdiction de manger le sang (Gn 9:4; Dt 12:23; Ac 15:20)
- La nécessité du sang pour le pardon (Hé 9:22)
- Le sacrifice de Christ (Mt 26:28; Hé 9:22; 1 Pi 1:18-19)

Le NT affirme que "'tout est purifié avec du sang' (Hé 9:22) et que 'sans effusion de sang, il n'y a pas de pardon'\\' (Hé 9:22). Le sang de Christ est le «sang de l’alliance» (Mt 26:28; Mc 14:24; Lc 22:20; 1 Co 11:25), le ''sang de la rédemption' (Ép 1:7; Col 1:14), le 'sang de l'aspersion' (Hé 12:24; 1 Pi 1:2).

Ce verset enseigne que le pardon n"est pas gratuit: il y a un coût. Le péché a un prix, et le prix est la vie. Soit le pécheur paie (mort éternelle), soit un substitut paie (mort de Christ). Le sang de Christ est la preuve que le péché est grave et que la grâce est coûteuse.`,
    crossReferences: [ "Genèse 9:4 (Ne pas manger le sang)",
      "Deutéronome 12:23 (Le sang est l’âme)", "Hébreux 9:22 (Sans sang pas de pardon)",
      "1 Pierre 1:18-19 (Rachetés par le sang précieux)"
    ],
    theologicalThemes: [ "Sang", "Expiation", "Vie\"", "Sacrifice", "Rédemption"]
  },
  {
    reference: "Lévitique 19:2, 18",
    title: "Sainteté et amour",
    text: "Vous serez saints, car je suis saint, moi, l'Éternel, votre Dieu... Tu aimeras ton prochain comme toi-même. Je suis l’Éternel.", commentary: `Ce verset contient deux des plus grandes citations de l"AT dans le NT:

1. "Vous serez saints, car je suis saint«:
   - Cité 1 Pi 1:15-16 comme norme de vie chrétienne
   - Résume tout le message du Lévitique
   - La sainteté de Dieu est la mesure pour son peuple
   - Saint (qadosh) signifie "séparé, mis à part"

2. "Tu aimeras ton prochain comme toi-mêm'e:
   - Cité par Jésus comme second grand commandement (Mt 22:39)
   - Le premier: "Tu aimeras le Seigneur ton Dieu' (Dt 6:5)
   - "De ces deux commandements dépendent toute la loi et les prophètes' (Mt 22:40)
   - Paul le cite comme "la règle royale' (Ga 5:14; Rm 13:9)
   - Jacques l"appelle 'la loi royale' (Jc 2:8)

Le contexte de 19:18 inclut:
- Ne pas opprimer le étranger (19:33-34)
- Ne pas faire de tort au salarié (19:13)
- Ne pas maudire le sourd ou mettre d"obstacle devant l'aveugle (19:14)
- Ne pas pervertir le droit (19:15)
- Ne pas répandre des calomnies (19:16)
- Ne pas haïr ton frère (19:17)

L"amour du prochain n'est pas un sentiment mais une obligation: justice sociale, honnêteté, respect. Le «prochain» inclut l'étranger (19:34), montrant que l'amour dépasse les frontières ethniques.

Jésus approfondit ce commandement en identifiant le "prochain« avec celui qui a besoin de miséricorde (Lc 10:25-37, le Bon Samaritain). L’amour du prochain est la preuve de l'amour de Dieu (1 Jn 4:20-21).`,
    crossReferences: [ "Matthieu 22:37-40 (Le plus grand commandement)",
      "Marc 12:29-31 (Le second est semblable)",
      "Luc 10:25-37 (Qui est mon prochain?)",
      "1 Pierre 1:15-16 (Soyez saints dans toute votre conduite)"
    ],
    theologicalThemes: [ "Sainteté", "Amour", "Commandement\"", "Éthique", "Prochain"]
  },
  {
    reference: "Lévitique 23",
    title: "Les fêtes de l’Éternel", text: "L’Éternel parla à Moïse: «Parle aux enfants d'Israël, et dis-leur: Les fêtes de l’Éternel, que vous publierez, seront de saintes convocations. Voici mes fêtes...", commentary: `Le calendrier religieux d"Israël (ch. 23) rythme la vie du peuple et commémore les œuvres de Dieu. Ces fêtes sont des «ombres» (Col 2:16-17) qui trouvent leur accomplissement en Christ.

Fêtes annuelles:

1. Pâque (Pesah, 14 Nisan): Commémore la délivrance d"Égypte. Type de Christ, notre Pâque sacrifié (1 Co 5:7).

2. Pains sans levain (13-21 Nisan): Suite de la Pâque. Le levain symbolise le péché. Type de la vie sans péché de Christ (1 Pi 2:22) et de la pureté de l"Église (1 Co 5:8).

3. Prémices (lendemain du Sabbat après Pâque): Première récolte de l"orge. Type de Christ comme 'premices de ceux qui sont morts' (1 Co 15:20-23).

4. Pentecôte (Chavouoth, 50 jours après): Récolte du blé. Type du don de l"Esprit le jour de la Pentecôte (Ac 2).

5. Fête des trompettes (Roch Hachana, 1 Tishri): Sonneries des trompettes. Type du rassemblement des élus et de la venue du Christ (1 Th 4:16-17; Ap 8-9; 11:15-19).

6. Yom Kippour (10 Tishri): Jour des expiations. Type de l"œuvre de Christ (Hé 9-10).

7. Tabernacles (Souccoth, 15-22 Tishri): Tentes pour commémorer le désert. Type de l"Incarnation ('il a dressé sa tente parmi nous,' Jn 1:14) et de la protection divine (Ap 7:15-17; 21:3).

Les fêtes enseignent que la foi doit être célébrée et commémorée. Elles rythment le temps selon les œuvres de Dieu: délivrance, résurrection, don de l"Esprit, jugement, exécution, habitation. En Christ, toutes ces fêtes sont accomplies, mais l'Église célèbre encore le mémorial: la Cène (1 Co 11:23-26).`,
    crossReferences: [ "Colossiens 2:16-17 (Ombre des choses à venir)",
      "1 Corinthiens 5:7-8 (Christ notre Pâque)",
      "Actes 2:1-4 (Pentecôte accomplie)",
      "Apocalypse 7:9-17 (Multitude devant le trône)"
    ],
    theologicalThemes: [ "Fêtes", "Calendrier", "Mémorial«", "Christologie", "Sabbat"]
  },
  {
    reference: "Lévitique 25",
    title: "Année sabbatique et Jubilé",
    text: "L’Éternel parla à Moïse sur la montagne de Sinaï... «Les champs ne seront pas semés, et les vignes ne seront pas taillées'... '»Vous sonnerez de la trompette... le dixième jour du septième mois; le jour des expiations, vous sonnerez de la trompette dans tout votre pays... Et vous sanctifierez la cinquantième année... C’est le jubilé...", commentary: `Le Lévitique 25 contient deux institutions sociales uniques dans l"histoire:

Année sabbatique (tous les 7 ans):
- La terre se repose: pas de semailles, ni récolte
- Les pauvres peuvent manger ce qui pousse spontanément
- Remise des dettes (Dt 15:1-11)
- Libération des esclaves hébreux (Dt 15:12-18)

Jubilé (50e année):
- "Liberté proclamée pour tous les habitants"
- Retour à sa propriété d"origine
- Libération de tous les esclaves hébreux
- L"année sabbatique qui suit est le 49e; le Jubilé est la 50e

Le principe théologique: "La terre est à moi; vous n'êtes que des étrangers et des hôtes' (25:23). Dieu est le propriétaire ultime de toute la terre. Les humains sont gérants, pas propriétaires absolus.

Jésus s"identifie au Jubilé dans Luc 4:18-19: «L’Esprit du Seigneur est sur moi... il m'a oint pour annoncer une bonne nouvelle aux pauvres... pour publier l'année de grâce du Seigneur.' Il cite Ésaïe 61:1-2, qui évoque le Jubilé. Christ inaugure le Jubilé eschatologique: libération du péché, restauration de l'image de Dieu, retour à l'héritage perdu.

Le Jubilé enseigne:
- Dieu est le propriétaire de toute la terre
- La propriété est un don, pas un droit absolu
- La libération est au cœur de la volonté de Dieu
- Le pardon des dettes reflète le pardon divin
- La justice sociale est une obligation spirituelle

Ces lois n"ont pas été parfaitement observées dans l'histoire d'Israël, mais elles demeurent un idéal prophétique de justice et de libération.`,
    crossReferences: [ "Luc 4:16-21 (Jésus inaugure l’année de grâce)", "Ésaïe 61:1-3 (Liberté, restauration)",
      "Deutéronome 15:1-18 (Année sabbatique)",
      "Néhémie 10:31 (Observation de l'année sabbatique)"
    ],
    theologicalThemes: [ "Jubilé", "Année sabbatique", "Liberté«", "Justice sociale", "Propriété"]
  },
  {
    reference: "Lévitique 26",
    title: "Bénédictions et malédictions de l’alliance", text: "Vous ne ferez point d'idoles... Si vous marchez dans mes lois... je vous donnerai vos pluies en leur temps... je mettrai la paix dans le pays... je marcherai au milieu de vous, je serai votre Dieu, et vous serez mon peuple... Mais si vous ne m’écoutez pas... je vous.visiterai... vous serez frappés... je marcherai contre vous en colère...", commentary: `Lévitique 26 est le chapitre de l"alliance: bénédictions pour l'obéissance, malédictions pour la désobéissance. C'est un modèle pour d'autres alliances (Dt 28; Jos 8; 1 R 9).

Bénédictions (vv. 3-13):
- Pluie en temps voulu
- Abondance de récoltes
- Sécurité et paix
- Victoire sur les ennemis
- Présence de Dieu: "Je marcherai au milieu de vous"
- Relation d"alliance: 'Je serai votre Dieu, et vous serez mon peuple"

Malédictions (vv. 14-39):
- Maladies, terreur, défaite
- Sécheresse et famine
- Bêtes sauvages
- Épée, peste, siège
- Exil: "Je vous disperserai parmi les nations"

Restauration (vv. 40-45):
- Confession et repentir
- Rappel de l"alliance avec Abraham, Isaac et Jacob
- Dieu n"oubliera pas l'alliance

Ce chapitre illustre le principe de l"alliance conditionnelle: obéissance = bénédiction, désobéissance = malédiction. Contrairement à l'alliance abrahamique inconditionnelle, l'alliance du Sinaï dépend de l'obéissance d'Israël.

L"histoire d'Israël confirme ces malédictions: les rois apostats (Jéroboam, Achab, Manassé) ont amené le jugement. L'exil à Babylone est l'accomplissement de ces menaces. Mais la promesse de restauration s'accomplit aussi: le retour, le Temple, la venue du Messie.

Pour le chrétien, ces bénédictions et malédictions sont transposées spirituellement (Hé 12). Dieu discipline ses enfants (Hé 12:5-11), mais la bénédiction ultime est spirituelle: la paix avec Dieu, la présence du Saint-Esprit, la vie éternelle en Christ. Les malédictions ont été portées par Christ (Ga 3:13-14).`,
    crossReferences: [ "Deutéronome 28 (Bénédictions et malédictions détaillées)",
      "Josué 8:30-35 (Renouvellement de l’alliance)", "1 Rois 9:4-9 (Alliance avec Salomon)",
      "Galates 3:13-14 (Christ nous a rachetés de la malédiction)"
    ],
    theologicalThemes: [ "Alliance", "Bénédiction", "Malédiction\"", "Obéissance", "Discipline"]
  }
]

