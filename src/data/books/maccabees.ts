/*
 * 1 et 2 MACCABÉES - Livres deutérocanoniques historiques
 * La révolte des Maccabées contre l'hellénisation forcée
 */

import type {
  BookSummary,
  BookReadingNotes,
  ChapterOutline,
  KeyPassage
} from "../types/enriched"

/* =============================================================================
 *
 * 1 MACCABÉES
 *
 * ============================================================================ */

export const firstMaccabeesSummary: BookSummary = {
  book: "1 Maccabées",
  testament: "OLD",
  category: "historical",
  author: "Inconnu (un Juif palestinien, peut-être un contemporain des événements)",
  period: "Vers 100 av. J.-C. (les événements couvrent 175-135 av. J.-C.)",
  theme: "La fidélité à la Loi face à la persécution et la lutte pour l'indépendance",
  outline: [ "1-2 : Alexandre et les successeurs, persécution d'Antiochus Épiphane",
    "3-4 : Révolte de Mattathias et début de la guerre",
    "5-8 : Guerres de Judas Maccabée",
    "9-12 : Les successeurs de Judas et consolidation de l'indépendance",
    "13-16 : Règne de Jonathan et d'Simon, fin de la persécution"
  ]
}

export const firstMaccabeesReadingNotes: BookReadingNotes = {
  book: "1 Maccabées",
  context: "Récit historique de la révolte des Maccabées contre la dynastie séleucide qui tentait d'helléniser de force la Judée. Mattathias et ses fils (Judas, Jonathan, Simon, Jean, Éléazar) mènent la guérilla pour la foi et l'indépendance nationale.",
  keyThemes: [
    {
      theme: "La fidélité à la Loi",
      description: "Les martyrs préfèrent la mort plutôt que d'abandonner la Loi. Mieux vaut mourir honorablement que vivre honteusement."
    },
    {
      theme: "Le courage de la foi",
      description: "Judas et ses frères combattent avec foi en Dieu, souvent inférieurs en nombre mais victorieux."
    },
    {
      theme: "La guerre sainte",
      description: "Le combat pour la défense de la foi est légitime. Dieu accorde la victoire à ceux qui Lui font confiance."
    },
    {
      theme: "La purification du Temple",
      description: "La restauration du culte pur après sa profanation. Hanoucca commémore cette dédicace."
    },
    {
      theme: "L'alliance avec Rome",
      description: "La recherche d'alliés politiques pour garantir l'indépendance religieuse."
    }
  ],
  theologicalSignificance: "1 Maccabées est le récit historique de la lutte pour la fidélité religieuse face à la persécution. Le thème du martyre (mieux vaut mourir) influence la pensée chrétienne sur le témoignage jusqu'à la mort. Hanoucca devient le modèle de la dédicace du Temple.",
  christologicalTypes: [
    {
      type: "Le témoin fidèle",
      description: "Les martyrs maccabéens qui préfèrent la mort à l'apostasie préfigurent les martyrs chrétiens et le Christ lui-même."
    },
    {
      type: "Le restaurateur du Temple",
      description: "Judas qui purifie le Temple préfigure le Christ qui chasse les marchands du Temple."
    },
    {
      type: "Le libérateur",
      description: "Judas Maccabée (le marteau) libérateur de son peuple préfigure le Christ libérateur de l'humanité."
    },
    {
      type: "La lumière qui brille dans les ténèbres",
      description: "Le miracle de Hanoucca (l'huile qui dure 8 jours) préfigure le Christ comme lumière du monde."
    }
  ]
}

export const firstMaccabeesChapterOutlines: ChapterOutline[] = [
  {
    chapter: 1,
    title: "Alexandre et la persécution d'Antiochus",
    verses: [
      {
        reference: "1:1",
        text: "Et il advint, après qu'Alexandre, fils de Philippe, le Macédonien, qui était sorti du pays de Kittim, eut battu Darius, roi des Perses et des Mèdes, il régna à sa place."
      },
      {
        reference: "1:11-15",
        text: "Alors ils bâtirent un gymnase à Jérusalem, selon les coutumes des nations. Ils se firent des prépuces, et ils s'écartèrent de l'alliance sainte."
      },
      {
        reference: "1:41-42",
        text: "Et le roi écrivit à tout son royaume que tous ne fassent qu'un seul peuple, et que chacun abandonne sa religion. Et tous les païens acceptèrent la parole du roi."
      },
      {
        reference: "1:62-64",
        text: "Mais plusieurs en Israël demeurèrent fermes, et ils furent forts à ne point manger les choses impures, et ils choisirent de mourir plutôt que d'être souillés par les viandes, et de profaner l'alliance sainte."
      }
    ]
  },
  {
    chapter: 2,
    title: "Mattathias et le début de la révolte",
    verses: [
      {
        reference: "2:1-2",
        text: "En ce temps-là, Mattathias, fils de Jean, fils de Siméon, prêtre de la lignée de Joarib, quitta Jérusalem et s'en alla habiter à Modîn."
      },
      {
        reference: "2:19-22",
        text: "Et Mattathias répondit d'une voix forte : Quand même toutes les nations qui sont dans le royaume du roi lui obéiraient, chacun abandonnant la religion de ses pères, moi et mes fils, nous garderons l'alliance de nos pères."
      },
      {
        reference: "2:27-28",
        text: "Et Mattathias cria dans la ville d'une voix forte, disant : Quiconque est zélé pour la Loi et maintient l'alliance, qu'il me suive ! Et il s'enfuit, lui et ses fils, dans les montagnes."
      }
    ]
  },
  {
    chapter: 3,
    title: "Guerres de Judas Maccabée",
    verses: [
      {
        reference: "3:1-2",
        text: "Et son fils Judas, appelé Maccabée, se leva à sa place. Et tous ses frères l'aidèrent, ainsi que tous ceux qui s'étaient joints à son père, et ils combattirent avec joie les combats d'Israël."
      },
      {
        reference: "3:17-19",
        text: "Et Judas dit : Il est facile pour un grand nombre de tomber entre les mains d'un petit nombre, et il n'y a point de différence aux yeux du Ciel de sauver par beaucoup ou par peu."
      },
      {
        reference: "3:44-45",
        text: "Et ils s'assemblèrent et vinrent à Mitspa, vis-à-vis de Jérusalem. Car Mitspa était un lieu de prière en Israël."
      }
    ]
  },
  {
    chapter: 4,
    title: "Victoires et purification du Temple",
    verses: [
      {
        reference: "4:36-37",
        text: "Et il dit : Voyez comment nos ennemis sont tombés, et allons purifier le sanctuaire et le consacrer. Et il entra dans le sanctuaire avec toute l'assemblée."
      },
      {
        reference: "4:52-53",
        text: "Et ils se levèrent le matin du vingt-cinquième jour du neuvième mois, qui est le mois de Chislev, et ils offrirent un sacrifice selon la Loi, sur l'autel des holocaustes qui avait été profané."
      },
      {
        reference: "4:59",
        text: "Et Judas, ses frères, et toute l'assemblée d'Israël statuèrent que les jours de la dédicace seraient célébrés chaque année, avec joie et allégresse, pendant huit jours, à partir du vingt-cinquième jour du mois de Chislev."
      }
    ]
  },
  {
    chapter: 5,
    title: "Contre les nations voisines",
    verses: [
      {
        reference: "5:3-4",
        text: "Et Judas attaqua les fils d'Esau dans le pays d'Édom, et il frappa une grande défaite à leurs troupes, et il soumit leurs forces."
      },
      {
        reference: "5:62-64",
        text: "Et Judas descendit à la ville de Bethsour, et il la fortifia. Et il y laissa une garnison. Et il partit avec ses frères."
      }
    ]
  },
  {
    chapter: 6,
    title: "Batailles contre Antiochus et Nicanor",
    verses: [
      {
        reference: "6:1-3",
        text: "Le roi Antiochus parcourait les provinces supérieures, et il apprit qu'en Perse il y avait une ville appelée Elymaïs, riche en argent et en or."
      },
      {
        reference: "6:8-9",
        text: "Et le roi choisit Bacchidès, un de ses amis, et il le fit gouverneur de la province occidentale, et il lui confia son armée."
      },
      {
        reference: "6:18-19",
        text: "Et Éléazar, appelé Avaran, vit un des éléphants couvert d'armures royales, et il était plus grand que tous les autres, et il semblait que le roi était sur lui."
      }
    ]
  },
  {
    chapter: 7,
    title: "La mort d'Antiochus et traité de paix",
    verses: [
      {
        reference: "7:5-6",
        text: "Et le Seigneur le frappa d'une maladie incurable, et il ne put plus supporter la odeur. Et on portait son corps dans un chariot, car il était tombé de haut."
      },
      {
        reference: "7:41-42",
        text: "Et il scella avec eux un traité, et ils partirent vers son royaume. Et Judas envoya des ambassadeurs à Rome."
      }
    ]
  },
  {
    chapter: 8,
    title: "Batailles de Judas et sa mort",
    verses: [
      {
        reference: "8:1-2",
        text: "Or Judas apprit que les Romains étaient puissants, et agréables à tous ceux qui se joignaient à eux, et qu'ils offraient de l'alliance à ceux qui s'approchaient d'eux."
      },
      {
        reference: "8:9-10",
        text: "Et Bacchidès retourna de Jérusalem vers le roi, et les Juifs eurent la paix dans leur pays."
      },
      {
        reference: "8:16-17",
        text: "Et Judas apprit que les Syriens se préparaient à la guerre. Et il eut peur, et il voulut implorer le Seigneur, afin qu'il fût avec lui."
      }
    ]
  },
  {
    chapter: 9,
    title: "Mort de Judas et Jonathan",
    verses: [
      {
        reference: "9:21-22",
        text: "Et les troupes de Judas furent mises en fuite, et Judas tomba, et les autres s'enfuirent. Et Judas tomba, et tous les gens pleurèrent sur lui."
      },
      {
        reference: "9:28-29",
        text: "Et Jonathan fut choisi à la place de son frère Judas. Et Simon fut choisi comme son second."
      }
    ]
  },
  {
    chapter: 10,
    title: "Règne de Jonathan",
    verses: [
      {
        reference: "10:1-2",
        text: "Et Alexandre apprit que Démétrius avait envoyé une armée contre Jonathan. Et il fut effrayé, et il envoya des lettres à Jonathan."
      },
      {
        reference: "10:20-21",
        text: "Et Jonathan fit la paix avec lui, et il fut nommé grand prêtre."
      }
    ]
  },
  {
    chapter: 11,
    title: "Conflits et alliances",
    verses: [
      {
        reference: "11:1-2",
        text: "Et le roi d'Égypte rassembla une armée comme le sable qui est au bord de la mer, et beaucoup de vaisseaux."
      },
      {
        reference: "11:25-26",
        text: "Et Démétrius envoya des lettres à Jonathan, disant : Je te ferai grand prêtre."
      }
    ]
  },
  {
    chapter: 12,
    title: "Alliances et conflits",
    verses: [
      {
        reference: "12:6-7",
        text: "Et Jonathan envoya des ambassadeurs à Rome, et il renouvela l'alliance avec eux."
      },
      {
        reference: "12:43-45",
        text: "Et Jonathan vit que le temps était favorable, et il choisit des hommes, et les envoya à Rome pour confirmer l'alliance."
      }
    ]
  },
  {
    chapter: 13,
    title: "Trahison et mort de Jonathan",
    verses: [
      {
        reference: "13:1-2",
        text: "Et Tryphon prit Jonathan, et il le fit prisonnier. Et il fit venir des hommes, et il les fit mettre à mort."
      },
      {
        reference: "13:23-24",
        text: "Et Simon fut informé que Tryphon avait rassemblé une grande armée pour envahir la Judée. Et il fut effrayé."
      }
    ]
  },
  {
    chapter: 14,
    title: "Règne de Simon et consolidation",
    verses: [
      {
        reference: "14:4-5",
        text: "Et toute la terre fut en repos pendant les jours de Simon. Et il chercha le bien de son peuple."
      },
      {
        reference: "14:10-11",
        text: "Et il mit des prêtres dans le Temple, et il restaura les murailles de Jérusalem."
      }
    ]
  },
  {
    chapter: 15,
    title: "Alliances et confirmation",
    verses: [
      {
        reference: "15:1-2",
        text: "Et Antiochus, fils du roi Démétrius, envoya des lettres à Simon, disant : Je te ferai grand prêtre."
      },
      {
        reference: "15:15-16",
        text: "Et le peuple approuva Simon, et ils le firent chef et grand prêtre."
      }
    ]
  },
  {
    chapter: 16,
    title: "Mort de Simon et fin",
    verses: [
      {
        reference: "16:3-4",
        text: "Et Simon marcha, et il combattit contre ses ennemis, et il les mit en fuite. Et il fut tué, lui et ses deux fils."
      },
      {
        reference: "16:23-24",
        text: "Et le reste des actes de Simon, et ses guerres, et les choses glorieuses qu'il fit, et la construction des murailles qu'il fit, ne sont-elles pas écrites au livre des chroniques des jours des grands prêtres ?"
      }
    ]
  }
]

export const firstMaccabeesKeyPassages: KeyPassage[] = [
  {
    reference: "1 Maccabées 1:11-15",
    citation: "Alors ils bâtirent un gymnase à Jérusalem, selon les coutumes des nations. Ils se firent des prépuces, et ils s'écartèrent de l'alliance sainte.",
    citation2: "Ils s'unirent aux nations, et ils vendirent leur âme pour faire le mal.",
    commentary: "L'apostasie d'une partie du judaïsme qui adopte les coutumes païennes. Le gymnase devient le symbole de l'hellénisation - lieu de nudité et de culture grecque opposé à la Loi. Se faire des prépuces (inverser la circoncision) montre le désir radical de s'assimiler. Ce texte avertit contre la compromission avec la culture païenne."
  },
  {
    reference: "1 Maccabées 1:62-64",
    citation: "Mais plusieurs en Israël demeurèrent fermes, et ils furent forts à ne point manger les choses impures, et ils choisirent de mourir plutôt que d'être souillés par les viandes, et de profaner l'alliance sainte. Et ils moururent.",
    commentary: "Le premier témoignage explicite du martyre dans la Bible. Choisir de mourir plutôt que de profaner l'alliance devient le modèle du martyr chrétien. La fidélité à la Loi vaut plus que la vie elle-même. Ce texte influence la compréhension chrétienne du témoignage jusqu'à la mort."
  },
  {
    reference: "1 Maccabées 2:19-22",
    citation: "Et Mattathias répondit d'une voix forte : Quand même toutes les nations qui sont dans le royaume du roi lui obéiraient, chacun abandonnant la religion de ses pères, moi et mes fils, nous garderons l'alliance de nos pères.",
    citation2: "Nous n'écouterons point les paroles du roi, pour nous détourner de notre religion, soit à droite, soit à gauche.",
    commentary: "La déclaration de Mattathias est l'acte fondateur de la résistance. Quand même toutes les nations... - la fidélité ne dépend pas de la majorité. L'alliance des pères est plus forte que l'ordre du roi. Le refus de se détourner ni à droite ni à gauche exprime une fidélité sans compromis."
  },
  {
    reference: "1 Maccabées 2:50-51",
    citation: "Maintenant donc, mes fils, ayez du zèle pour la Loi, et donnez vos âmes pour l'alliance de nos pères.",
    citation2: "Souvenez-vous des œuvres de nos pères, qu'ils ont faites en leur temps, et vous recevrez une grande gloire et un nom éternel.",
    commentary: "L'exhortation de Mattathias à ses fils avant sa mort. Ayez du zèle pour la Loi - le zèle (qin'ah) est la passion pour Dieu qui mène à l'action. Donnez vos âmes évoque le martyre. La mémoire des pères nourrit la fidélité présente."
  },
  {
    reference: "1 Maccabées 2:64",
    citation: "Vous, maintenant, mes fils, soyez forts, et montrez-vous vaillants pour la Loi, car en elle vous obtiendrez la gloire.",
    commentary: "La force spirituelle (soyez forts) est liée à la fidélité à la Loi. La gloire promise n'est pas terrestre mais divine. Ce verset préfigure les exhortations pauliniennes à être forts dans le Seigneur."
  },
  {
    reference: "1 Maccabées 3:17-19",
    citation: "Et Judas dit : Il est facile pour un grand nombre de tomber entre les mains d'un petit nombre, et il n'y a point de différence aux yeux du Ciel de sauver par beaucoup ou par peu.",
    citation2: "Car la victoire dans la guerre ne dépend point du nombre des armées, mais la force vient du Ciel.",
    commentary: "Théologie de la guerre sainte : Dieu peut sauver par peu comme par beaucoup. La victoire ne dépend pas de la force humaine mais de l'intervention divine. Ce principe se retrouvera dans Gédéon (Juges 7) et David contre Goliath."
  },
  {
    reference: "1 Maccabées 4:59",
    citation: "Et Judas, ses frères, et toute l'assemblée d'Israël statuèrent que les jours de la dédicace seraient célébrés chaque année, avec joie et allégresse, pendant huit jours, à partir du vingt-cinquième jour du mois de Chislev.",
    commentary: "L'institution de Hanoucca (fête de la Dédicace). La commémoration de la purification du Temple devient une fête perpétuelle. La joie et l'allégresse marquent la célébration de la délivrance. Jean 10:22 mentionne que Jésus était à Jérusalem lors de la fête de la Dédicace."
  },
  {
    reference: "1 Maccabées 6:8-11",
    citation: "Et le roi choisit Bacchidès, un de ses amis, et il le fit gouverneur de la province occidentale, et il lui confia son armée.",
    citation2: "Et ils allèrent en Galilée, et ils firent beaucoup de tués, et ils rassemblèrent toutes les choses qu'ils pouvaient.",
    commentary: "Les persécutions continuent même après la purification du Temple. La lutte pour la fidélité n'est pas un événement unique mais un combat continu. Le texte préfigure la réalité chrétienne de la lutte spirituelle permanente. L'histoire de la résistance continue à inspirer la foi aujourd'hui."
  },
  {
    reference: "1 Maccabées 9:21-22",
    citation: "Et les troupes de Judas furent mises en fuite, et Judas tomba, et les autres s'enfuirent. Et Judas tomba, et tous les gens pleurèrent sur lui.",
    commentary: "La mort du héros Judas Maccabée (le marteau). Même les plus grands chefs tombent dans la lutte. La mort du juste n'est pas un échec mais un témoignage. Les pleurs de tout le peuple montrent l'impact de son leadership."
  },
  {
    reference: "1 Maccabées 14:4-5",
    citation: "Et toute la terre fut en repos pendant les jours de Simon. Et il cultivait la justice, et il aimait son peuple. Et il était aimé de tous.",
    citation2: "Et sa gloire fut honorée dans tous les pays, parce qu'il fit la paix dans le pays.",
    commentary: "Le règne de Simon est décrit comme une période de paix et de justice. Cultivait la justice (tsedaqah) est une image agricole - la justice comme plante à cultiver. La paix véritable repose sur la justice et l'amour du peuple. Un modèle de leadership servant."
  },
  {
    reference: "1 Maccabées 16:23-24",
    citation: "Et le reste des actes de Simon, et ses guerres, et les choses glorieuses qu'il fit, et la construction des murailles qu'il fit, ne sont-elles pas écrites au livre des chroniques des jours des grands prêtres ?",
    commentary: "La conclusion du livre suit le style des livres historiques bibliques (le reste des actes...). L'histoire de Simon est enregistrée pour mémoire. La tradition écrite préserve la mémoire de la fidélité pour les générations futures."
  }
]

/* =============================================================================
 *
 * 2 MACCABÉES
 *
 * ============================================================================ */

export const secondMaccabeesSummary: BookSummary = {
  book: "2 Maccabées",
  testament: "OLD",
  category: "historical",
  author: "Jason de Cyrène (résumé par un épitomateur inconnu)",
  period: "Vers 100 av. J.-C. (couvre 176-161 av. J.-C.)",
  theme: "La fidélité jusqu'à la mort et la résurrection des martyrs",
  outline: [ "1-2 : Lettres aux Juifs d'Égypte, histoire des persécutions",
    "3 : Hélène et le Temple, vol des trésors",
    "4-7 : Persécution d'Antiochus et martyrs d'Éléazar",
    "8-10 : Victoires de Judas Maccabée",
    "11-15 : Purification du Temple et autres batailles",
    "A-J : Appendices sur les martyrs et les frères"
  ]
}

export const secondMaccabeesReadingNotes: BookReadingNotes = {
  book: "2 Maccabées",
  context: "Récit parallèle à 1 Maccabées, se concentrant sur les persécutions religieuses et les martyres. Le livre développe une théologie de la résurrection et de l'efficacité de la prière pour les morts.",
  keyThemes: [
    {
      theme: "Le martyre comme témoignage",
      description: "Les sept frères et leur mère meurent plutôt que d'abandonner la Loi. Leurs tourments préfigurent les souffrances du Christ."
    },
    {
      theme: "La résurrection des morts",
      description: "Le martyr affirme sa foi en la résurrection. Dieu ressuscitera ceux qui meurent pour Lui."
    },
    {
      theme: "La prière pour les morts",
      description: "Judas offre un sacrifice pour les soldats morts, affirmant la possibilité de prier pour les défunts."
    },
    {
      theme: "Le châtiment après la mort",
      description: "Les fils de Saul meurent à cause du péché de leur père. La responsabilité collective."
    },
    {
      theme: "L'intercession des saints",
      description: "Jérémie prie pour le peuple avant le jugement. Les saints du ciel intercèdent pour nous."
    }
  ],
  theologicalSignificance: "2 Maccabées est le livre du Nouveau Testament le plus cité pour la doctrine de la résurrection et de la prière pour les morts. Le récit des sept frères martyrs influence la pensée chrétienne sur le martyre. La prière de Judas pour les morts fonde la pratique catholique de suffrages pour les défunts.",
  christologicalTypes: [
    {
      type: "Les sept frères martyrs",
      description: "Les sept fils qui meurent pour la foi préfigurent les martyrs chrétiens et le Christ lui qui donne sa vie pour la vérité."
    },
    {
      type: "La mère courageuse",
      description: "La mère qui encourage ses fils à mourir pour la foi préfigure Marie au pied de la croix."
    },
    {
      type: "Le grand prêtre qui intercède",
      description: "Jérémie et Onias qui intercèdent pour le peuple préfigurent le Christ unique grand prêtre."
    },
    {
      type: "Le sacrifice pour les péchés",
      description: "Le sacrifice offert par Judas pour les morts préfigure le sacrifice du Christ pour les péchés du monde."
    }
  ]
}

export const secondMaccabeesKeyPassages: KeyPassage[] = [
  {
    reference: "2 Maccabées 6:18-21",
    citation: "Éléazar était l'un des principaux docteurs de la Loi, homme avancé en âge et de belle apparence. On lui fit manger de la chair de porc, et on le contraignit à la manger.",
    citation2: "Mais il, préférant une mort glorieuse à une vie honteuse, marcha de lui-même au supplice.",
    commentary: "Éléazar, âgé, choisit le martyre plutôt que de donner un mauvais exemple aux jeunes. Mieux vaut mourir honorablement que vivre honteusement devient le modèle du martyre chrétien. Le souci du témoignage (ne pas scandaliser les jeunes) montre que le martyre n'est pas individuel mais communautaire."
  },
  {
    reference: "2 Maccabées 7:1-2",
    citation: "Il arriva aussi que sept frères furent arrêtés avec leur mère. Le roi voulut les contraindre à manger de la chair de porc.",
    citation2: "Mais l'un d'eux, prenant la parole, dit : Que cherches-tu à savoir de nous ? Nous sommes prêts à mourir plutôt que de transgresser la Loi de nos pères.",
    commentary: "Les sept frères et leur mère sont le modèle du martyre familial. Nous sommes prêts à mourir - la foi comme choix conscient. Le témoignage collectif de la famille est plus puissant que celui d'un individu seul. Ce récit inspire la vénération des martyrs."
  },
  {
    reference: "2 Maccabées 7:9",
    citation: "Et comme il était aux derniers soupirs, il dit : Tu nous ôtes la vie présente, mais le Roi du monde nous ressuscitera pour une vie éternelle, quand nous mourrons pour sa Loi.",
    commentary: "Affirmation explicite de la résurrection des morts. Le Roi du monde nous ressuscitera - la foi en la résurrection comme réponse au martyre. La mort n'est pas la fin mais le passage à la vie éternelle. Ce texte fonde la espérance chrétienne en la résurrection."
  },
  {
    reference: "2 Maccabées 7:14",
    citation: "Et quand il fut près de mourir, il dit : Il est bon de mourir pour nos pères, par ambition de la vie éternelle que Dieu nous donnera après la résurrection.",
    commentary: "Le martyr comme ambition - non pas orgueil mais désir de la vie éternelle. Mourir pour la foi n'est pas une perte mais un gain. La résurrection future donne sens au sacrifice présent. L'espérance transforme la mort en passage."
  },
  {
    reference: "2 Maccabées 7:20-21",
    citation: "La mère était admirable d'ailleurs, et digne d'une illustre mémoire. Elle voyait périr ses sept fils dans l'espace d'un seul jour, et elle le supportait avec courage, dans l'espérance qu'elle avait en Dieu.",
    citation2: "Elle les exhortait à la vertu, fille de la foi, par la langue et par la langue, et elle leur disait : Je ne sais comment vous êtes formés dans mon sein.",
    commentary: "La mère des sept frères est un modèle de foi maternelle. Elle supportait avec courage la perte de tous ses fils. L'espérance en la résurrection lui donne cette force. Elle encourage ses fils jusqu'à la fin, comme Marie au pied de la croix. La foi maternelle devient témoignage pour les générations futures."
  },
  {
    reference: "2 Maccabees 7:29",
    citation: "Ne crains point ce bourreau, mais montre-toi digne de tes frères, et accepte la mort, afin que je te retrouve avec tes frères dans la miséricorde.",
    commentary: "La mère encourage le dernier fils à accepter le martyre. Accepte la mort - la mort comme choix libre et courageux. La promesse de revoir ses fils dans la miséricorde montre la foi en la communion des saints au-delà de la mort."
  },
  {
    reference: "2 Maccabées 7:36",
    citation: "Car nos frères, après avoir souffert un peu de temps, ont reçu de Dieu une mort glorieuse, et l'espérance de l'immortalité.",
    commentary: "La souffrance des martyrs est un peu de temps comparée à la gloire éternelle. L'immortalité promise transforme la perspective sur la souffrance présente. Ce thème sera développé par Paul (2 Corinthiens 4:17)."
  },
  {
    reference: "2 Maccabées 8:3-4",
    citation: "Et ils jeûnèrent ce jour-là, et ils se couvrirent de sacs, et ils mirent de la cendre sur leurs têtes, et ils déchirèrent leurs vêtements.",
    citation2: "Et ils se prosternèrent devant l'autel, et ils supplièrent le Seigneur de les délivrer des mains des méchants, et de rétablir le peuple.",
    commentary: "La préparation spirituelle à la bataille : jeûne, sacs, cendre, prière. La victoire dépend d'abord de la conversion du cœur. Les armes spirituelles (jeûne, prière) précèdent les armes temporelles. Ce modèle sera suivi par l'Église face aux persécutions."
  },
  {
    reference: "2 Maccabées 12:44-45",
    citation: "Car s'il n'avait pas espéré que ceux qui étaient tombés ressusciteraient, il était superflu et vain de prier pour les morts.",
    citation2: "Mais parce qu'il considérait qu'une très belle récompense est réservée à ceux qui meurent pieusement, c'était une pensée sainte et pieuse. C'est pourquoi il fit prier pour les morts, afin qu'ils soient délivrés de leurs péchés.",
    commentary: "Le texte biblique fondamental pour la prière pour les défunts. Judas offre un sacrifice pour les soldats morts en état de péché. Une très belle récompense est réservée aux justes. La prière pour les morts exprime la communion entre vivants et défunts et la possibilité de purification après la mort."
  },
  {
    reference: "2 Maccabées 14:37-38",
    citation: "Et Razis, un des anciens de Jérusalem, fut appelé par les Grecs. Et il se précipita sur son épée, et il choisit de mourir noblement plutôt que de tomber entre les mains des méchants.",
    commentary: "Razis choisit le suicide plutôt que la capture et la torture possible. Ce choix controversé est présenté comme noble dans le contexte de la fidélité à la foi. Le texte reconnaît la complexité éthique des situations extrêmes de persécution."
  },
  {
    reference: "2 Maccabées 15:12-14",
    citation: "Et ils virent un homme vêtu de blanc, armé d'armes d'or, et il leur fit voir des armures d'or. Et ils bénirent le Seigneur, et ils furent fortifiés.",
    citation2: "Et ils se mirent en prière, et ils demandèrent que le Seigneur leur serait propice.",
    commentary: "La vision angélique qui fortifie les combattants. L'homme vêtu de blanc avec des armes d'or est probablement l'archange Michel ou un autre ange protecteur. Les visions angéliques dans la Bible fortifient toujours pour l'action, pas pour la passivité."
  },
  {
    reference: "2 Maccabees 15:14-16",
    citation: "Et le saint prophète Jérémie fut élevé par la main de l'ange, et il se tint au-dessus d'eux, et il priait pour le peuple.",
    citation2: "Et Jérémie tendit la main droite, et il donna à Judas une épée d'or, et il lui dit : Prends cette épée sainte, que Dieu te donne.",
    commentary: "Jérémie, mort depuis longtemps, intercède pour le peuple. Ce texte fonde la doctrine de l'intercession des saints. L'épée d'or donnée à Judas symbolise la puissance divine qui accorde la victoire. Les saints du ciel ne sont pas inactifs mais prient pour nous."
  }
]
