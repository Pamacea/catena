/**
 *
 * Councils Data - Conciles œcuméniques de l'Église Catholique
 *
 * Les 21 conciles œcuméniques reconnus par l'Église catholique,
 * avec leurs canons, décrets, et décisions doctrinales.
 */

export enum CouncilType {
  ECUMENICAL = "ECUMENICAL", // Concile œcuménique
  GENERAL = "GENERAL", // Concile général ( Western)
  LOCAL = "LOCAL", // Concile local/synode
  PAPAL = "PAPAL", // Concile convoqué par le pape
}

export enum CouncilStatus {
  RECOGNIZED = "RECOGNIZED", // Reconnu comme œcuménique
  DISPUTED = "DISPUTED", // Contesté (ex: Constantinople II, III)
  ROBBER = "ROBBER", // Concile brigand (Éphèse 449)
}

export interface CouncilCanon {
  number: number;
  title: string;
  content: string;
  anathema?: boolean;
}

export interface CouncilDecree {
  title: string;
  type: "dogmatic" | "disciplinary" | "pastoral";
  content: string;
  latin?: string;
}

export interface CouncilHeresyCondemned {
  heresySlug: string;
  heresyName: string;
  condemnation: string;
}

export interface CouncilPope {
  name: string;
  role: "convoker" | "approver" | "participant";
}

export interface Council {
  slug: string;
  name: string;
  nameLatin: string;
  number: number; // 1-21 pour les œcuméniques
  type: CouncilType;
  status: CouncilStatus;

  // Date et lieu
  year: number;
  yearEnd?: number; // Pour les conciles sur plusieurs années
  location: string;
  locationLatin?: string;

  // Convocation
  convokedBy: string; // Empereur, Pape, etc.
  convokedByRole: string;
  popes?: CouncilPope[];

  // Participants
  participants: number;
  patriarchates?: {
    rome?: number;
    constantinople?: number;
    alexandria?: number;
    antioch?: number;
    jerusalem?: number;
  };

  // Contenu
  description: string;
  topics: string[];
  canons?: CouncilCanon[];
  decrees?: CouncilDecree[];
  heresiesCondemned?: CouncilHeresyCondemned[];

  // Interconnexions
  relatedCouncils?: string[]; // Slugs des conciles liés
  relatedHeresies?: string[]; // Slugs des hérésies condamnées
  relatedBible?: string[]; // Références bibliques
}

/**
 *
 * Les 21 Conciles Œcuméniques reconnus par l'Église Catholique
 */
export const councils: Council[] = [
  // ===== CONCILES ANTIQUES (8) =====
  {
    slug: "nicee-i",
    name: "Concile de Nicée I",
    nameLatin: "Concilium Nicænum I",
    number: 1,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 325,
    location: "Nicée, Bithynie",
    locationLatin: "Nicæa, Bithynia",
    convokedBy: "Empereur Constantin I",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Sylvestre I",
        role: "approver",
      },
    ],
    participants: 318,
    description:
      "Le premier concile œcuménique, convoqué par Constantin I pour régler la controverse arienne sur la nature du Fils de Dieu. Il établit le Symbole de Nicée et fixa la date de Pâques.",
    topics: [
      "Nature du Fils (contre Arius)",
      "Date de Pâques",
      "Validité du baptême hérétique",
      "Organisation ecclésiastique",
    ],
    canons: [
      {
        number: 1,
        title: "Anathème contre l'arianisme",
        content:
          "Si quelqu'un dit que le Fils est une créature, ou qu'il y a eu un temps où il n'était pas : qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 2,
        title: "Organisation des diocèses",
        content:
          "Les évêques ne doivent pas empiéter sur les diocèses de leurs voisins, mais chacun doit se contenter de administrer son propre diocèse.",
      },
      {
        number: 7,
        title: "Suprématie de Rome, Alexandrie, Antioche",
        content:
          "Les évêques de Rome, Alexandrie et Antioche ont une primauté d'honneur dans leurs régions respectives.",
      },
      {
        number: 20,
        title: "Interdiction de se mettre à genoux le dimanche",
        content:
          "Pendant les 50 jours de Pentecôte, on ne doit pas jeûner ni se mettre à genoux pour prier, car c'est la période de la résurrection.",
      },
    ],
    decrees: [
      {
        title: "Symbole de Nicée",
        type: "dogmatic",
        content:
          "Nous croyons en un seul Dieu, le Père tout-puissant, créateur de toutes choses visibles et invisibles. Et en un seul Seigneur Jésus-Christ, Fils unique de Dieu, engendré du Père, c'est-à-dire de la substance du Père, Dieu de Dieu, lumière de lumière, vrai Dieu de vrai Dieu, engendré non fait, consubstantiel au Père...",
        latin:
          "Credimus in unum Deum, Patrem omnipotentem, factorem omnium visibilium et invisibilium. Et in unum Dominum Iesum Christum, Filium Dei unigenitum, ex Patre natum ante omnia sæcula... lumen de lumine, Deum verum de Deo vero, genitum non factum, consubstantialem Patri...",
      },
      {
        title: "Calcul de la date de Pâques",
        type: "disciplinary",
        content:
          "Pâques doit être célébré le même jour par tous les chrétiens, le premier dimanche après la pleine lune qui suit l'équinoxe de printemps.",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "arianisme",
        heresyName: "Arianisme",
        condemnation: "Arius et ses partisans sont condamnés et excommuniés",
      },
    ],
    relatedHeresies: ["arianisme"],
    relatedBible: ["Jean-1", "Colossiens-1"],
  },
  {
    slug: "constantinople-i",
    name: "Concile de Constantinople I",
    nameLatin: "Concilium Constantinopolitanum I",
    number: 2,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 381,
    location: "Constantinople",
    locationLatin: "Constantinopolis",
    convokedBy: "Empereur Théodose I",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Damase I",
        role: "approver",
      },
    ],
    participants: 150,
    description:
      "Ce concile a complété le Symbole de Nicée (d'où le Credo Nicéo-Constantinopolitain), a condamné le macédonianisme (contre l'Esprit Saint) et l'apollinarisme (contre l'âme humaine du Christ). Il a également établi la primauté de l'évêque de Constantinople.",
    topics: ["Divinité du Saint-Esprit", "Nature humaine du Christ", "Primauté de Constantinople"],
    canons: [
      {
        number: 1,
        title: "Divinité du Saint-Esprit",
        content:
          "Nous croyons aussi au Saint-Esprit, Seigneur qui donne la vie, qui procède du Père, qui avec le Père et le Fils est ensemble adoré et glorifié.",
        anathema: true,
      },
      {
        number: 2,
        title: "Condamnation des hérétiques",
        content:
          "Les évèques qui suivent l'hérésie eudoxéenne ou celle des pneumatomaques sont déposés.",
      },
      {
        number: 3,
        title: "Primauté de Constantinople",
        content:
          "L'évêque de Constantinople doit avoir la primauté d'honneur après l'évêque de Rome, parce que Constantinople est la Nouvelle Rome.",
      },
    ],
    decrees: [
      {
        title: "Symbole de Nicée-Constantinople",
        type: "dogmatic",
        content:
          "Et in Spiritum Sanctum, Dominum et vivificantem, qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur...",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "macedonianisme",
        heresyName: "Macédonianisme (Pneumatomachie)",
        condemnation: "Condamné pour avoir nié la divinité du Saint-Esprit",
      },
      {
        heresySlug: "apollinarisme",
        heresyName: "Apollinarisme",
        condemnation: "Condamné pour avoir nié l'âme humaine du Christ",
      },
    ],
    relatedHeresies: ["macedonianisme", "apollinarisme", "arianisme"],
  },
  {
    slug: "ephese-431",
    name: "Concile d'Éphèse",
    nameLatin: "Concilium Ephesinum",
    number: 3,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 431,
    location: "Éphèse, Asie Mineure",
    locationLatin: "Ephesus, Asia Minor",
    convokedBy: "Empereur Théodose II",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Célestin I",
        role: "convoker",
      },
    ],
    participants: 200,
    description:
      "Ce concile a condamné le nestorianisme de Nestorius, patriarche de Constantinople, et a proclamé Marie véritablement Mère de Dieu (Theotokos). Il a également condamné Pélasge pour avoir nié le péché originel.",
    topics: [
      "Théotokos (Marie Mère de Dieu)",
      "Condamnation du nestorianisme",
      "Condamnation du pélagianisme",
    ],
    canons: [
      {
        number: 1,
        title: "Condamnation de Nestorius",
        content:
          "Si quelqu'un ne confesse pas qu'Emmanuel est vraiment Dieu, et que par conséquent la Sainte Vierge a enfanté selon la chair le Dieu Verbe : qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 2,
        title: "Condamnation de ceux qui refusent Theotokos",
        content:
          "Si quelqu'un ne confesse pas que le Verbe de Dieu s'est uni à un corps animé par une âme rationnelle, et qu'il a fait sien les naissances charnelles : qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 7,
        title: "Condamnation de Pélage",
        content:
          "Si quelqu'un dit que le nouveau-né n'a pas besoin du baptême, ou qu'il ne contracte pas le péché originel : qu'il soit anathème.",
        anathema: true,
      },
    ],
    decrees: [
      {
        title: "Proclamation de Theotokos",
        type: "dogmatic",
        content:
          "Si quelqu'un ne confesse pas que la Sainte Vierge est Mère de Dieu (Theotokos), en ce sens qu'elle a enfanté selon la chair le Verbe de Dieu fait chair : qu'il soit anathème.",
        latin:
          "Si quis non confitetur, quod Sancta Deipara est Theotokos, id est, quod Deipara Virgo peperit secundum carnem Deum Verbum incarnatum : anathema sit.",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "nestorianisme",
        heresyName: "Nestorianisme",
        condemnation: "Nestorius déposé et condamné pour avoir nié l'unité de personne du Christ",
      },
      {
        heresySlug: "pelagianisme",
        heresyName: "Pélagianisme",
        condemnation: "Célestin I avait déjà condamné Pélage, le concile confirme la condamnation",
      },
    ],
    relatedHeresies: ["nestorianisme", "pelagianisme"],
  },
  {
    slug: "chalcedoine-451",
    name: "Concile de Chalcédoine",
    nameLatin: "Concilium Chalcedonense",
    number: 4,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 451,
    location: "Chalcédoine, Bithynie",
    locationLatin: "Chalcedon, Bithynia",
    convokedBy: "Empereur Marcien",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Léon I",
        role: "convoker",
      },
    ],
    participants: 600,
    description:
      "Ce concile a condamné le monophysisme (Eutychès) et défini la doctrine des deux natures du Christ : « une seule personne en deux natures, sans confusion, sans changement, sans division, sans séparation ». Il a proclamé la primauté de l'évêque de Rome.",
    topics: [
      "Définition des deux natures du Christ",
      "Condamnation du monophysisme",
      "Primauté de Rome",
      "28 canons disciplinaires",
    ],
    canons: [
      {
        number: 28,
        title: "Primauté de Constantinople",
        content:
          "Le Père des Pères (l'évêque de Constantinople) doit jouir des mêmes privilèges que l'évêque de Rome, car Constantinople est la Nouvelle Rome.",
      },
    ],
    decrees: [
      {
        title: "Définition de foi de Chalcédoine",
        type: "dogmatic",
        content:
          "Nous confessons un seul et même Christ, Fils, Seigneur, Fils unique, reconnu en deux natures, sans confusion, sans changement, sans division, sans séparation : la différence des natures n'étant nullement supprimée à cause de l'union, la propriété de chaque nature étant conservée et concourant à une seule personne et une seule hypostase.",
        latin:
          "Confitemur unum eumdemque Christum, Filium, Dominum, unigenitum, in duabus naturis inconfuse, immutabiliter, indivise, inseparabiliter agnoscendum : nativa differentia naturarum nullum minuit per unionem, sed magis proprietatem utriusque naturae conservans et in unam personam atque unam subsistentiam congregatam.",
      },
      {
        title: "Tome à Flavien (Léon I)",
        type: "dogmatic",
        content:
          "La forme de Dieu dans le Christ n'a pas supprimé la forme de serviteur, mais elle l'a assumée et élevée.",
        latin:
          "Agit enim in utroque forma : quia opera divinitatis sunt, et opera humanitatis... Unus ergo Deus et homo, idem Filius Dei et filius hominis.",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "monophysisme",
        heresyName: "Monophysisme",
        condemnation: "Eutychès condamné pour avoir nié la dualité des natures",
      },
      {
        heresySlug: "nestorianisme",
        heresyName: "Nestorianisme",
        condemnation: "La condamnation d'Éphèse est confirmée",
      },
    ],
    relatedHeresies: ["monophysisme", "nestorianisme"],
  },
  {
    slug: "constantinople-ii",
    name: "Concile de Constantinople II",
    nameLatin: "Concilium Constantinopolitanum II",
    number: 5,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 553,
    location: "Constantinople",
    locationLatin: "Constantinopolis",
    convokedBy: "Empereur Justinien I",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Vigile",
        role: "approver",
      },
    ],
    participants: 165,
    description:
      "Ce concile a condamné les « Trois Chapitres » (écrits de Théodore de Mopsueste, Théodoret de Cyr et Ibas d'Édesse) considérés comme nestoriens, et a réaffirmé la condamnation du monophysisme.",
    topics: [
      "Condamnation des Trois Chapitres",
      "Réaffirmation de Chalcédoine",
      "Condamnation d'Origène",
    ],
    decrees: [
      {
        title: "Anathèmes contre les Trois Chapitres",
        type: "dogmatic",
        content:
          "Nous condamnons les écrits de Théodore de Mopsueste, Théodoret de Cyr et la lettre d'Ibas comme étant nestoriens.",
      },
      {
        title: "Condamnation d'Origène",
        type: "dogmatic",
        content: "Celui qui dit que les âmes préexistent et que le monde est éternel est anathème.",
      },
    ],
    relatedHeresies: ["monophysisme", "nestorianisme"],
  },
  {
    slug: "constantinople-iii",
    name: "Concile de Constantinople III",
    nameLatin: "Concilium Constantinopolitanum III",
    number: 6,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 680,
    yearEnd: 681,
    location: "Constantinople",
    locationLatin: "Constantinopolis",
    convokedBy: "Empereur Constantin IV",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Agathon",
        role: "convoker",
      },
    ],
    participants: 170,
    description:
      "Ce concile a condamné le monothélisme, qui enseignait que le Christ n'avait qu'une seule volonté (la divine). Il a défini la doctrine des deux volontés (divine et humaine) dans le Christ.",
    topics: ["Condamnation du monothélisme", "Définition des deux volontés"],
    canons: [],
    decrees: [
      {
        title: "Définition sur les deux volontés",
        type: "dogmatic",
        content:
          "Dans le Christ Seigneur, il y a deux natures naturelles, et selon chacune d'elles, une opération naturelle : divine, c'est-à-dire, et humaine. Nous confessons donc deux volontés naturelles et deux opérations naturelles, sans séparation, sans changement, sans division, sans confusion.",
        latin:
          "In Christo Domino duæ sunt naturæ, et secundum unam et alteram operationes naturales : divina scilicet, et humana. Duæ ergo in eo voluntates naturales, et duæ operationes naturales, sine separatione, sine mutatione, sine divisione, sine confusione.",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "monothélisme",
        heresyName: "Monothélisme",
        condemnation: "Condamné pour avoir nié la volonté humaine du Christ",
      },
    ],
    relatedHeresies: ["monothélisme", "monophysisme"],
  },
  {
    slug: "nicee-ii",
    name: "Concile de Nicée II",
    nameLatin: "Concilium Nicænum II",
    number: 7,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 787,
    location: "Nicée, Bithynie",
    locationLatin: "Nicæa, Bithynia",
    convokedBy: "Impératrice Irène et Empereur Constantin VI",
    convokedByRole: "Empereur et Impératrice",
    popes: [
      {
        name: "Pape Adrien I",
        role: "approver",
      },
    ],
    participants: 350,
    description:
      "Ce concile a condamné l'iconoclasme et défini la légitimité de la vénération des images sacrées (icônes, statues, reliques). La vénération n'est pas adorée (latrie) mais honorée (doulie).",
    topics: ["Vénération des saintes images", "Condamnation de l'iconoclasme"],
    canons: [
      {
        number: 1,
        title: "Légitimité des images",
        content:
          "Nous définissons que les saintes icônes doivent être vénérées avec une vénération d'honneur (proskynesis), non pas une adoration véritable (latrie), qui n'est due qu'à Dieu seul.",
      },
      {
        number: 9,
        title: "Devoirs envers les prêtres",
        content:
          "Ceux qui refusent de se soumettre à leur évêque ou qui quittent leur propre église doivent être excommuniés.",
      },
    ],
    decrees: [
      {
        title: "Définition sur les images",
        type: "dogmatic",
        content:
          "Nous confessons que les saintes icônes, représentant le Christ, la Vierge, les anges et les saints, doivent être vénérées honorablement. L'honneur rendu à l'image passe à son prototype.",
        latin:
          "Sanctas imagines Christi, Deiparæ, angelorum, et sanctorum honorifice venerari debere. Honor imaginis transit ad prototypum.",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "iconoclasme",
        heresyName: "Iconoclasme",
        condemnation: "Condamné pour avoir rejeté la vénération des images",
      },
    ],
    relatedHeresies: ["iconoclasme"],
  },
  {
    slug: "constantinople-iv",
    name: "Concile de Constantinople IV",
    nameLatin: "Concilium Constantinopolitanum IV",
    number: 8,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 869,
    yearEnd: 870,
    location: "Constantinople",
    locationLatin: "Constantinopolis",
    convokedBy: "Empereur Basile I",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Nicolas I",
        role: "convoker",
      },
      {
        name: "Pape Hadrien II",
        role: "approver",
      },
    ],
    participants: 102,
    description:
      "Ce concile a condamné le patriarche Photius pour avoir usurpé le patriarcat de Constantinople et avoir accusé les Latins d'hérésie (notamment sur la procession du Saint-Esprit). Il a réaffirmé la primauté du pape.",
    topics: [
      "Condamnation de Photius",
      "Primauté du pape",
      "Procession du Saint-Esprit (Filioque)",
    ],
    canons: [
      {
        number: 1,
        title: "Condamnation de Photius",
        content:
          "Photius, qui s'est injustement emparé du patriarcat de Constantinople, est déposé et excommunié.",
      },
      {
        number: 21,
        title: "Primauté romaine",
        content:
          "Si quelqu'un ne reconnaît pas la primauté du Siège Apostolique (Rome), qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 22,
        title: "Filioque",
        content:
          "Le Saint-Esprit procède du Père et du Fils (Filioque), comme le Symbole de foi le professe.",
      },
    ],
    relatedHeresies: [],
  },

  // ===== CONCILES DU MOYEN ÂGE (9-12) =====
  {
    slug: "lateran-i",
    name: "Concile du Latran I",
    nameLatin: "Concilium Lateranense I",
    number: 9,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1123,
    location: "Rome, basilique du Latran",
    locationLatin: "Roma, Lateranense",
    convokedBy: "Pape Calixte II",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Calixte II",
        role: "convoker",
      },
    ],
    participants: 300,
    description:
      "Le premier concile œcuménique convoqué par un pape et tenu en Occident. Il a confirmé la Concordat de Worms (1122) qui a mis fin à la Querelle des Investitures entre le pape et l'empereur.",
    topics: ["Querelle des Investitures", "Concorde de Worms", "Réforme ecclésiastique"],
    canons: [
      {
        number: 1,
        title: "Concorde de Worms",
        content:
          "Les élections épiscopales doivent être libres, sans simonie ni investiture laïque.",
      },
      {
        number: 3,
        title: "Celibat sacerdotal",
        content: "Les prêtres, diacres et sous-diacres doivent observer le célibat.",
      },
      {
        number: 9,
        title: "Paix de Dieu",
        content: "La paix et la trêve de Dieu doivent être observées.",
      },
    ],
  },
  {
    slug: "lateran-ii",
    name: "Concile du Latran II",
    nameLatin: "Concilium Lateranense II",
    number: 10,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1139,
    location: "Rome, basilique du Latran",
    locationLatin: "Roma, Lateranense",
    convokedBy: "Pape Innocent II",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Innocent II",
        role: "convoker",
      },
    ],
    participants: 500,
    description:
      "Ce concile a condamné l'antipape Anaclet II et ses partisans (schisme d'Anaclet), a réglementé le mariage et a réformé le costume ecclésiastique.",
    topics: ["Fin du schisme d'Anaclet", "Mariage clandestin", "Costume ecclésiastique"],
    canons: [
      {
        number: 2,
        title: "Mariage clandestin",
        content:
          "Les mariages célébrés en secret, sans bénédiction publique, sont nuls. Ils doivent être annoncés à l'avance.",
      },
      {
        number: 7,
        title: "Costume ecclésiastique",
        content:
          "Les clercs doivent porter un costume modeste et ne pas porter de vêtements trop ornés ou trop courts.",
      },
      {
        number: 11,
        title: "Armes interdites aux clercs",
        content: "Les clercs ne doivent pas porter d'armes, ni assister à des exécutions.",
      },
    ],
  },
  {
    slug: "lateran-iii",
    name: "Concile du Latran III",
    nameLatin: "Concilium Lateranense III",
    number: 11,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1179,
    location: "Rome, basilique du Latran",
    locationLatin: "Roma, Lateranense",
    convokedBy: "Pape Alexandre III",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Alexandre III",
        role: "convoker",
      },
    ],
    participants: 302,
    description:
      "Ce concile a réformé la procédure d'élection papale (règle des deux tiers) et a condamné les Vaudois et les Cathares (hérésies du XIIe siècle).",
    topics: ["Élection papale", "Condamnation des Vaudois et Cathares", "Réforme ecclésiastique"],
    canons: [
      {
        number: 1,
        title: "Élection papale",
        content:
          "Le pape doit être élu par les deux tiers des cardinaux. Si un candidat obtient moins des deux tiers, il ne peut être considéré comme pape.",
      },
      {
        number: 27,
        title: "Condamnation des Vaudois",
        content:
          "Les Vaudois, qui prêchent sans autorisation et rejettent les sacrements, sont condamnés.",
      },
      {
        number: 11,
        title: "Usure",
        content:
          "Ceux qui prêtent à usure sont frappés d'anathème et ne peuvent recevoir de sépulture ecclésiastique.",
      },
    ],
  },
  {
    slug: "lateran-iv",
    name: "Concile du Latran IV",
    nameLatin: "Concilium Lateranense IV",
    number: 12,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1215,
    location: "Rome, basilique du Latran",
    locationLatin: "Roma, Lateranense",
    convokedBy: "Pape Innocent III",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Innocent III",
        role: "convoker",
      },
    ],
    participants: 400,
    description:
      "L'un des plus importants conciles du Moyen Âge. Il a défini la transsubstantiation, institué l'obligation de la confession et communion annuelles, ordonné la Croisade contre les Albigeois, et défini la doctrine de la résurrection de la chair.",
    topics: [
      "Transsubstantiation",
      "Confession et communion annuelles",
      "Croisade albigeoise",
      "Résurrection de la chair",
      "Livres hébraïques",
    ],
    canons: [
      {
        number: 1,
        title: "Foi catholique",
        content:
          "Il y a une seule Église universelle hors de laquelle personne n'est sauvé. Le pape en est le chef.",
      },
      {
        number: 2,
        title: "Condamnation des hérétiques",
        content:
          "Les hérétiques doivent être punis et leurs biens confisqués. Les évêques doivent visiter leur diocèse pour les rechercher.",
      },
      {
        number: 21,
        title: "Confession et communion annuelles",
        content:
          "Tout fidèle, ayant atteint l'âge de discrétion, doit confesser ses péchés au moins une fois par an et communier à Pâques.",
      },
      {
        number: 68,
        title: "Juifs et Sarrasins",
        content:
          "Les juifs et les sarrasins doivent se distinguer des chrétiens par leur vêtement et ne pas sortir en public pendant la semaine sainte.",
      },
    ],
    decrees: [
      {
        title: "Définition de la transsubstantiation",
        type: "dogmatic",
        content:
          "Le corps et le sang du Christ sont vraiment contenus dans le sacrement de l'autel sous les espèces du pain et du vin, le pain étant transsubstantié en corps et le vin en sang.",
        latin:
          "Corpus et sanguis Christi vere contineri in sacramento altaris sub speciebus panis et vini, panem transsubstantiari in corpus, et vinum in sanguinem.",
      },
    ],
    relatedHeresies: ["albigeois", "vaudois"],
  },
  {
    slug: "lyon-i",
    name: "Concile de Lyon I",
    nameLatin: "Concilium Lugdunense I",
    number: 13,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1245,
    location: "Lyon",
    locationLatin: "Lugdunum",
    convokedBy: "Pape Innocent IV",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Innocent IV",
        role: "convoker",
      },
    ],
    participants: 150,
    description:
      "Ce concile a déposé l'empereur Frédéric II pour félonie et hérésie, et a ordonné une nouvelle croisade.",
    topics: ["Déposition de Frédéric II", "Septième croisade"],
    canons: [
      {
        number: 1,
        title: "Déposition de Frédéric II",
        content:
          "Frédéric II, empereur romain, est déposé pour avoir violé ses serments, persécuté l'Église et scandalisé les fidèles.",
      },
      {
        number: 3,
        title: "Croisade",
        content: "Une croisade doit être prêchée pour la récupération de la Terre sainte.",
      },
    ],
  },
  {
    slug: "lyon-ii",
    name: "Concile de Lyon II",
    nameLatin: "Concilium Lugdunense II",
    number: 14,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1274,
    location: "Lyon",
    locationLatin: "Lugdunum",
    convokedBy: "Pape Grégoire X",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Grégoire X",
        role: "convoker",
      },
    ],
    participants: 500,
    description:
      "Ce concile a tenté la réunion avec l'Église orthodoxe (grecque) et a défini que le Saint-Esprit procède du Père et du Fils (Filioque). Il a également établi l'existence du purgatoire.",
    topics: ["Union avec les Grecs", "Filioque", "Purgatoire", "Conclave"],
    canons: [
      {
        number: 1,
        title: "Filioque",
        content:
          "Le Saint-Esprit procède éternellement du Père et du Fils, non comme de deux principes, mais comme d'un seul.",
      },
      {
        number: 2,
        title: "Purgatoire",
        content:
          "Les âmes des justes qui meurent en grâce mais encore imparfaitement purifiées sont purifiées dans le purgatoire par le feu purificateur.",
      },
      {
        number: 4,
        title: "Élection papale (Conclave)",
        content:
          "Les cardinaux doivent être enfermés dans une chambre close (cum clave) pour élire le pape, pour éviter les trop longs délais.",
      },
    ],
    relatedHeresies: [],
  },
  {
    slug: "vienne-1311",
    name: "Concile de Vienne",
    nameLatin: "Concilium Viennense",
    number: 15,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1311,
    yearEnd: 1312,
    location: "Vienne, Dauphiné",
    locationLatin: "Vienna, Delphinatus",
    convokedBy: "Pape Clément V",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Clément V",
        role: "convoker",
      },
    ],
    participants: 120,
    description:
      "Ce concile a supprimé l'ordre du Temple, condamné les Béguards et Béguines, et ordonné la réforme des ordres religieux.",
    topics: [
      "Suppression de l'Ordre du Temple",
      "Condamnation des Béguards",
      "Réforme des ordres religieux",
    ],
    canons: [
      {
        number: 1,
        title: "Suppression du Temple",
        content: "L'ordre du Temple est supprimé et ses biens transférés à l'Ordre de l'Hôpital.",
      },
      {
        number: 23,
        title: "Condamnation des Béguards",
        content:
          "Les Béguards et Béguines hérétiques, qui vivent en commun sans autorisation, sont condamnés.",
      },
    ],
    relatedHeresies: ["begards"],
  },

  // ===== CONCILES DE LA RENAISSANCE ET DE L'ÉPOQUE MODERNE (16-21) =====
  {
    slug: "constance-1414",
    name: "Concile de Constance",
    nameLatin: "Concilium Constantiense",
    number: 16,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1414,
    yearEnd: 1418,
    location: "Constance",
    locationLatin: "Constantia",
    convokedBy: "Empereur Sigismond",
    convokedByRole: "Empereur Romain",
    popes: [
      {
        name: "Pape Grégoire XII",
        role: "approver",
      },
      {
        name: "Pape Martin V",
        role: "approver",
      },
    ],
    participants: 600,
    description:
      "Ce concile a mis fin au Grand Schisme d'Occident (1378-1417) en déposant les antipapes et en élisant Martin V. Il a également condamné Jean Hus et Jérôme de Prague.",
    topics: ["Fin du Grand Schisme", "Condamnation de Jean Hus", "Conciliarisme"],
    canons: [
      {
        number: 1,
        title: "Conciliarisme",
        content:
          "Le concile tient son pouvoir immédiatement du Christ, et tout le monde, y compris le pape, est soumis à son autorité.",
      },
      {
        number: 2,
        title: "Condamnation de Hus",
        content:
          "Jean Hus, pour avoir enseigné des erreurs contre la foi, est condamné à être brûlé vif.",
      },
    ],
    relatedHeresies: ["hussite"],
  },
  {
    slug: "bale-1431",
    name: "Concile de Bâle",
    nameLatin: "Concilium Basilense",
    number: 17,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1431,
    yearEnd: 1449,
    location: "Bâle",
    locationLatin: "Basilea",
    convokedBy: "Pape Martin V",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Eugène IV",
        role: "approver",
      },
    ],
    participants: 200,
    description:
      "Ce concile, transféré à Ferrare puis à Florence, a réalisé une union temporaire avec les Grecs et d'autres Églises orientales. Il a défini la procession du Saint-Esprit (Filioque) et la primauté du pape.",
    topics: ["Union avec les Grecs", "Filioque", "Primauté du pape"],
    canons: [
      {
        number: 1,
        title: "Primauté du pape",
        content:
          "Le pontife romain est le vrai vicaire du Christ, le chef de toute l'Église, le père et le docteur de tous les chrétiens.",
      },
    ],
    decrees: [
      {
        title: "Laetentur Caeli (Union avec les Grecs)",
        type: "dogmatic",
        content:
          "Le Saint-Esprit procède du Père et du Fils (Filioque), non comme de deux principes, mais comme d'un seul.",
        latin:
          "Spiritus Sanctus ex Patre Filioque procedit, non tanquam ex duobus principiis, sed tanquam ex uno.",
      },
    ],
  },
  {
    slug: "lateran-v",
    name: "Concile du Latran V",
    nameLatin: "Concilium Lateranense V",
    number: 18,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1512,
    yearEnd: 1517,
    location: "Rome, basilique du Latran",
    locationLatin: "Roma, Lateranense",
    convokedBy: "Pape Jules II",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Jules II",
        role: "convoker",
      },
      {
        name: "Pape Léon X",
        role: "approver",
      },
    ],
    participants: 120,
    description:
      "Dernier concile avant la Réforme protestante. Il a condamné le conciliarisme, tenté une réforme de l'Église, et défini l'immortalité de l'âme.",
    topics: ["Condamnation du conciliarisme", "Réforme de l'Église", "Immortalité de l'âme"],
    canons: [
      {
        number: 1,
        title: "Contre le conciliarisme",
        content:
          "Le concile tire son pouvoir du pape, qui seul peut le convoquer et le transférer. Le concile ne peut juger le pape.",
      },
      {
        number: 3,
        title: "Immortalité de l'âme",
        content:
          "L'âme rationnelle est immortelle, perpétuelle, et ne peut ni mourir ni périr avec le corps.",
      },
    ],
  },
  {
    slug: "trente-1545-1563",
    name: "Concile de Trente",
    nameLatin: "Concilium Tridentinum",
    number: 19,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1545,
    yearEnd: 1563,
    location: "Trente",
    locationLatin: "Tridentum",
    convokedBy: "Pape Paul III",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Paul III",
        role: "convoker",
      },
      {
        name: "Pape Jules III",
        role: "participant",
      },
      {
        name: "Pape Pie IV",
        role: "approver",
      },
    ],
    participants: 255,
    description:
      "Le concile le plus important de l'histoire moderne, réponse de l'Église catholique à la Réforme protestante. Il a défini la doctrine sur la Révélation, le péché originel, la justification, les sacrements, la messe, le purgatoire, les indulgences, les saints et les images.",
    topics: [
      "Écriture et Tradition",
      "Péché originel",
      "Justification",
      "Sept sacrements",
      "Messe et transsubstantiation",
      "Purgatoire",
      "Indulgences",
      "Saints et images",
    ],
    canons: [
      {
        number: 1,
        title: "Révélation",
        content:
          "La Révélation est contenue dans les livres écrits (Écriture) et les traditions non écrites (Tradition), venues du Christ.",
      },
      {
        number: 2,
        title: "Péché originel",
        content:
          "Si quelqu'un ne confesse pas que le premier Adam a transgressé le commandement de Dieu... et qu'il a perdu la sainteté et la justice : qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 9,
        title: "Justification",
        content:
          "Si quelqu'un dit que les pécheurs sont justifiés par la seule foi : qu'il soit anathème.",
        anathema: true,
      },
    ],
    decrees: [
      {
        title: "Décret sur les sacrements",
        type: "dogmatic",
        content: "Les sacrements de la Nouvelle Loi sont sept, institués par le Christ.",
      },
      {
        title: "Décret sur la justification",
        type: "dogmatic",
        content:
          "La justification est le passage de l'état de péché à l'état de justice, par la grâce et les œuvres.",
      },
    ],
    heresiesCondemned: [
      {
        heresySlug: "lutheranisme",
        heresyName: "Luthéranisme",
        condemnation: "Condamné : sola scriptura, sola fide, deux sacrements seulement",
      },
      {
        heresySlug: "calvinisme",
        heresyName: "Calvinisme",
        condemnation: "Condamné : prédestination absolue, rejection du libre arbitre",
      },
    ],
    relatedHeresies: ["lutheranisme", "calvinisme", "zwinglianisme"],
  },
  {
    slug: "vatican-i",
    name: "Concile Vatican I",
    nameLatin: "Concilium Vaticanum I",
    number: 20,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1869,
    yearEnd: 1870,
    location: "Rome, Vatican",
    locationLatin: "Roma, Vaticanus",
    convokedBy: "Pape Pie IX",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Pie IX",
        role: "convoker",
      },
    ],
    participants: 700,
    description:
      "Ce concile a défini le dogme de l'infaillibilité pontificale et la primauté juridictionnelle du pape sur toute l'Église. Il a été interrompu par la prise de Rome en 1870.",
    topics: ["Primauté du pape", "Infaillibilité pontificale", "Foi et raison"],
    canons: [
      {
        number: 1,
        title: "Primauté du pape",
        content:
          "Si quelqu'un dit que le pontife romain n'a qu'une charge d'inspection ou de direction, et non le pouvoir plénier et suprême de juridiction sur toute l'Église : qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 2,
        title: "Primauté immédiate",
        content:
          "Si quelqu'un dit que le pouvoir du pontife romain n'est pas immédiat, tant pour les Églises particulières que pour tous les fidèles : qu'il soit anathème.",
        anathema: true,
      },
      {
        number: 3,
        title: "Infaillibilité",
        content:
          "Si quelqu'un dit qu'il n'appartient pas au pontife romain de définir les dogmes, ou que ses définitions peuvent être réformées : qu'il soit anathème.",
        anathema: true,
      },
    ],
    decrees: [
      {
        title: "Pastor Æternus (Primauté et Infaillibilité)",
        type: "dogmatic",
        content:
          "Le pontife romain, lorsqu'il parle ex cathedra, est infaillible dans les définitions concernant la foi et les mœurs.",
        latin:
          "Romanus Pontifex, cum ex cathedra loquitur, ea definire infallibilis est in fide et moribus.",
      },
      {
        title: "Dei Filius (Foi et Raison)",
        type: "dogmatic",
        content:
          "La foi et la raison ne peuvent jamais se contredire, car toutes deux viennent de Dieu.",
      },
    ],
    relatedHeresies: ["gallicanisme", "jansenisme"],
  },
  {
    slug: "vatican-ii",
    name: "Concile Vatican II",
    nameLatin: "Concilium Vaticanum II",
    number: 21,
    type: CouncilType.ECUMENICAL,
    status: CouncilStatus.RECOGNIZED,
    year: 1962,
    yearEnd: 1965,
    location: "Rome, Vatican",
    locationLatin: "Roma, Vaticanus",
    convokedBy: "Pape Jean XXIII",
    convokedByRole: "Pape",
    popes: [
      {
        name: "Pape Jean XXIII",
        role: "convoker",
      },
      {
        name: "Pape Paul VI",
        role: "approver",
      },
    ],
    participants: 2500,
    description:
      "Le concile le plus nombreux de l'histoire. Il a renouvelé la liturgie (messe en langue vernaculaire), défini l'œcuménisme, la liberté religieuse, la relation de l'Église avec le monde moderne, et réformé la Curie romaine.",
    topics: [
      "Liturgie",
      "Révélation",
      "Église",
      "Évêques",
      "Œcuménisme",
      "Églises orientales",
      "Liberté religieuse",
      "Église dans le monde moderne",
      "Prêtres",
      "Formation des prêtres",
      "Laïcs",
      "Missions",
    ],
    decrees: [
      {
        title: "Sacrosanctum Concilium (Constitution sur la liturgie)",
        type: "disciplinary",
        content:
          "La liturgie est l'œuvre du Christ et de l'Église. Les rites doivent être rénovés, les langues vivantes autorisées, et la participation active des fidèles favorisée.",
      },
      {
        title: "Dei Verbum (Constitution sur la Révélation)",
        type: "dogmatic",
        content:
          "La Révélation se réalise par les actions et les paroles de Dieu, intimement liées. L'Écriture et la Tradition forment un seul dépôt sacré.",
      },
      {
        title: "Lumen Gentium (Constitution sur l'Église)",
        type: "dogmatic",
        content:
          "L'Église est le peuple de Dieu, le corps du Christ. Tous les baptisés participent à sa mission, les évêques en collège avec le pape sont les successeurs des apôtres.",
      },
      {
        title: "Nostra Ætate (Déclaration sur les religions non chrétiennes)",
        type: "pastoral",
        content:
          "L'Église rejette toute discrimination religieuse. Elle a un lien particulier avec le peuple juif, et respecte les autres religions.",
      },
      {
        title: "Dignitatis Humanæ (Déclaration sur la liberté religieuse)",
        type: "pastoral",
        content:
          "Toute personne a droit à la liberté religieuse, en privé et en public. Personne ne doit être forcé d'agir contre sa conscience.",
      },
    ],
  },
];

/**
 * Helpers
 */
export const getCouncilBySlug = (slug: string): Council | undefined =>
  councils.find(c => c.slug === slug);

export const getCouncilByNumber = (number: number): Council | undefined =>
  councils.find(c => c.number === number);

export const getCouncilsByCentury = (century: number): Council[] =>
  councils.filter(c => Math.floor(c.year / 100) + 1 === century);

export const searchCouncils = (query: string): Council[] => {
  const q = query.toLowerCase();
  return councils.filter(
    c =>
      c.name.toLowerCase().includes(q) ||
      c.nameLatin.toLowerCase().includes(q) ||
      c.topics.some(t => t.toLowerCase().includes(q))
  );
};

export const getCouncilsByHeresy = (heresySlug: string): Council[] => {
  const result: Council[] = [];
  for (const council of councils) {
    if (council.relatedHeresies?.includes(heresySlug)) {
      result.push(council);
    }
    if (council.heresiesCondemned?.some(h => h.heresySlug === heresySlug)) {
      result.push(council);
    }
  }
  return result;
};
