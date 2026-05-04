/**
 *
 * Heresies Data - Hérésies chrétiennes et condamnations
 *
 * Classification des principales hérésies condamnées par l'Église,
 * avec leurs promoteurs, leurs enseignements erronés,
 * et les condamnations conciliaires ou pontificales.
 */

export enum HeresyCategory {
  CHRISTOLOGICAL = "CHRISTOLOGICAL", // Nature du Christ
  TRINITARIAN = "TRINITARIAN", // Trinité
  ANTHROPOLOGICAL = "ANTHROPOLOGICAL", // Nature de l'homme, grâce
  ECCLESIOLOGICAL = "ECCLESIOLOGICAL", // Église, sacrements
  ESCHATOLOGICAL = "ESCHATOLOGICAL", // Fin des temps
  SCRIPTURAL = "SCRIPTURAL", // Écriture sainte
  SACRAMENTAL = "SACRAMENTAL", // Sacrements
}

export enum CondemnationType {
  COUNCIL = "COUNCIL", // Concile œcuménique
  SYNOD = "SYNOD", // Concile local/synode
  PAPAL_BULL = "PAPAL_BULL", // Bulle pontificale
  ENCYCLICAL = "ENCYCLICAL", // Encyclique
}

export interface HeresyRefutation {
  source: string; // Citation des Pères, Concile, Pape
  latin?: string; // Citation en latin
}

export interface HeresyCondemnation {
  type: CondemnationType;
  authority: string; // Nom du concile, pape, etc.
  year: number;
  document?: string; // Nom du document (bulle, constitution, etc.)
  canons?: string[]; // Canons pertinents
}

export interface HeresyConnection {
  slug: string; // Slug de l'hérésie liée
  type: "preceded" | "succeeded" | "related" | "refuted";
}

export interface Backlink {
  source: string; // Slug de la page source
  type: "heresy" | "council" | "catechism" | "bible";
  context?: string; // Extrait du contexte
}

export interface ChurchFatherDetailed {
  name: string;
  work: string;
  contribution: string;
}

export interface Heresy {
  slug: string;
  name: string;
  nameLatin?: string;
  category: HeresyCategory;
  century: number; // Siècle d'apparition
  origin: string; // Région ou lieu d'origine
  promoter: string; // Principal promoteur de l'hérésie

  // Description
  description: string;
  error: string; // Résumé de l'erreur principale

  // Contexte et développement
  historicalContext?: string; // Contexte historique détaillé
  theologicalIssues?: string; // Enjeux théologiques précis
  development?: string; // Développement chronologique
  consequences?: string; // Conséquences pour l'Église

  // Réfutation
  refutations: HeresyRefutation[];

  // Pères de l'Église détaillés
  churchFathersDetailed?: ChurchFatherDetailed[];

  // Réponse en droit canonique
  canonicalResponse?: string;
  canonicalReferences?: string[]; // Références CIC

  // Condamnation officielle
  condemnations: HeresyCondemnation[];

  // Interconnexions
  connections?: HeresyConnection[];

  // Backlinks (sera rempli dynamiquement)
  backlinks?: Backlink[];

  // Mots-clés pour recherche
  keywords: string[];
}

/**
 *
 * Hérésies principales de l'histoire de l'Église
 */
export const heresies: Heresy[] = [
  // ===== HÉRÉSIES CHRISTOLOGIQUES =====
  {
    slug: "arianisme",
    name: "Arianisme",
    nameLatin: "Arianismus",
    category: HeresyCategory.CHRISTOLOGICAL,
    century: 4,
    origin: "Alexandrie, Égypte",
    promoter: "Arius (256-336)",

    description:
      "L'hérésie arienne nie la divinité du Fils, le considérant comme une créature parfaite mais non consubstantielle au Père. Pour Arius, « il y a eu un temps où le Fils n'était pas ».",
    error: "Le Fils est une créature, inférieure au Père, et non Dieu véritable.",

    historicalContext:
      "Au début du IVe siècle, l'Empire romain connaît une période de stabilisation sous Constantin. La théologie alexandrine est en pleine effervescence, avec des débats sur la nature du Logos. Arius, prêtre d'Alexandrie, populaire et éloquent, développe sa doctrine dans le contexte des écoles théologiques rivales d'Alexandrie. Son évêque Alexandre le condamne en 321, mais l'hérésie se propage rapidement en Orient, notamment en Syrie et en Asie Mineure, obligeant Constantin à convoquer le premier concile œcuménique.",
    theologicalIssues:
      "L'enjeu central est la nature du Fils de Dieu : est-il de la même substance (homoousios) que le Père, ou d'une substance inférieure ? Arius part d'une lecture subordinatianiste de la tradition, affirmant que seul le Père est Dieu au sens absolu. Le Fils, créé ex nihilo, est la première et plus parfaite des créatures, mais il n'a pas la nature divine. Cette position rend impossible le salut, car seul Dieu peut sauver.",
    development:
      "Vers 318-320, Arius commence à enseigner publiquement à Alexandrie. L'évêque Alexandre le condamne au synode de 321. Arius trouve des soutiens puissants : Eusèbe de Nicomédie, le théologien astucieux qui contrôle les réseaux ecclésiastiques orientaux. En 325, Constantin convoque le Concile de Nicée qui condamne Arius et adopte le terme homoousios. Mais l'arianisme survit : entre 330 et 360, les ariens dominent la politique ecclésiastique impériale. Saint Athanase, exilé cinq fois, mène le combat orthodoxe. Le Concile de Constantinople (381) achève la victoire de l'orthodoxie en confirmant la divinité du Saint-Esprit contre les macédoniens.",
    consequences:
      "L'arianisme a provoqué le premier concile œcuménique et a conduit à la formulation du Credo de Nicée-Constantinople, récitée encore aujourd'hui à chaque messe. Il a établi le vocabulaire dogmatique de la consubstantialité (homoousios) qui servira pour tous les débats christologiques ultérieurs. L'hérésie a aussi montré que l'Église peut résister à la pression impériale : malgré les empereurs ariens (Constance II, Valens), l'orthodoxie a triomphé par la force de la théologie patristique.",

    churchFathersDetailed: [
      { name: "Saint Athanase d'Alexandrie", work: "Discours contre les Ariens (Orationes contra Arianos)", contribution: "Défenseur principal de la consubstantialité. Démontre que si le Fils est une créature, le salut est impossible, car seul Dieu peut déifier l'homme. Exilé cinq fois par les empereurs ariens." },
      { name: "Saint Basile de Césarée", work: "Contre Eunome", contribution: "Réfutation systématique de l'arianisme sophistiqué d'Eunome. Développe la théologie de la distinction entre essence divine (inconnaissable) et énergées (accessibles)." },
      { name: "Saint Grégoire de Nazianze", work: "Discours théologiques 27-31", contribution: "Clarifie la doctrine trinitaire : une essence (ousia), trois personnes (hypostaseis). Montre que la génération du Fils est éternelle, non un acte temporel." },
      { name: "Saint Hilaire de Poitiers", work: "De Trinitate", contribution: "Principal défenseur de l'orthodoxie nicéenne en Occident. Traduit les débats grecs en termes latins et combat l'arianisme de la cour impériale." },
    ],

    canonicalResponse:
      "Le droit canonique a établi que tout clerc professant l'arianisme est déposé ipso facto. Le Concile de Nicée (Canon 1) prévoit l'excommunication pour les ariens récalcitrants. Le CIC 1364 §1 prévoit l'excommunication latae sententiae pour l'hérésie obstinée.",
    canonicalReferences: ["CIC 1364 §1 (excommunication pour hérésie)", "CIC 751 (définition de l'hérésie)", "Concile de Nicée I, Canon 1"],

    refutations: [
      {
        source: "Nicée I (325), Canon 1",
        latin:
          "Si quis dicit, quia Filius est ex his, quæ non sunt, aut quod alia fuit substantia, vel quod Filius Dei ex alia substantia sit: anathema sit.",
      },
      {
        source: "Saint Athanase, « Discours contre les Ariens »",
        latin:
          "Si Filius creatura est, Pater non est vere Pater. Filius enim habet esse a Patre, non per creationem, sed per generationem.",
      },
      {
        source: "Concile de Constantinople I (381)",
        latin: "Filius est Deus ex Deo, lumen de lumen, Deus verus de Deo vero.",
      },
    ],

    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Nicée I",
        year: 325,
        document: "Symbole de Nicée (Filioque non inclus à l'origine)",
        canons: [
          "Canon 1 : Anathème contre ceux qui disent que le Fils est une créature",
          "Canon 2-20 : Mesures disciplinaires contre les Ariens",
        ],
      },
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Constantinople I",
        year: 381,
        document: "Symbole de Nicée-Constantinople (Credo)",
      },
    ],

    connections: [
      { slug: "macedonianisme", type: "related" },
      { slug: "conile-constantinople-381", type: "refuted" },
    ],

    keywords: ["trinité", "fils", "incarnation", "consubstantiel", "arius"],
  },
  {
    slug: "apollinarisme",
    name: "Apollinarisme",
    nameLatin: "Apollinarismus",
    category: HeresyCategory.CHRISTOLOGICAL,
    century: 4,
    origin: "Laodicée, Syrie",
    promoter: "Apollinaire de Laodicée (310-390)",

    description:
      "Apollinaire enseignait que le Christ n'avait pas d'âme humaine, le Verbe tenant lieu d'âme intellectuelle. Le corps du Christ était animé par le Verbe lui-même.",
    error: "Le Christ n'a pas d'âme humaine, seulement un corps humain animé par le Verbe.",

    historicalContext:
      "Apollinaire de Laodicée, ami de Saint Athanase, cherche à défendre l'unité du Christ contre l'arianisme. Mais sa solution est excessive : pour garantir l'unité de la personne divine-humaine, il supprime l'âme humaine rationnelle du Christ, remplacée par le Verbe. Cette doctrine séduit par sa simplicité apparente mais ruine le mystère de l'Incarnation.",
    theologicalIssues:
      "Si le Christ n'a pas d'âme humaine rationnelle, il n'est pas pleinement homme, et donc il n'a pas sauvé l'homme tout entier. Le principe de Saint Grégoire de Nazianze s'applique : « Ce qui n'a pas été assumé n'a pas été guéri » (Quod non assumptum, non sanatum). De plus, si le Verbe remplace l'âme humaine, les actions du Christ (prière, souffrance, obéissance) ne sont pas véritablement humaines.",
    development:
      "Apollinaire commence à enseigner vers 360, trouvant des partisans à Antioche et à Rome. Ses écrits circulent sous des pseudonymes pour éviter la condamnation. Le Synode de Rome (377) le condamne, suivi du Concile de Constantinople (381) qui anathématise quiconque nie l'âme humaine du Christ.",
    consequences:
      "L'apollinarisme a provoqué la formulation du dogme des deux natures du Christ (humaine et divine, complètes), préparant le terrain pour le Concile de Chalcédoine (451). Le principe « Ce qui n'a pas été assumé n'a pas été guéri » devient un axiome christologique fondamental.",

    churchFathersDetailed: [
      { name: "Saint Grégoire de Nazianze", work: "Lettre à Cledonius (Ep. 101)", contribution: "Formule le principe décisif : « Ce qui n'a pas été assumé n'a pas été guéri. » Si le Verbe n'a pas pris une âme humaine, l'âme humaine n'est pas sauvée." },
      { name: "Saint Épiphane de Salamine", work: "Panarion (Adversus haereses)", contribution: "Catalogue l'apollinarisme parmi les 80 hérésies et réfute la doctrine en montrant que le Christ a prié, ce qui exige une âme rationnelle." },
    ],

    canonicalResponse:
      "Le droit canonique condamne toute négation de l'intégrité de la nature humaine du Christ. CIC 1364 §1 s'applique à l'hérésie christologique.",
    canonicalReferences: ["CIC 1364 §1", "Concile de Constantinople I, Canon 7"],

    refutations: [
      {
        source: "Saint Grégoire de Nazianze, « Lettres Théologiques »",
        latin: "Quod non assumptum, non sanatum. Si totum homo non assumpsit, non salvavit.",
      },
      {
        source: "Concile de Constantinople I (381)",
        latin:
          "Si quis animam humanam in Christo non admittit, sed Verbum pro anima fuisse: anathema sit.",
      },
    ],

    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Constantinople I",
        year: 381,
      },
      {
        type: CondemnationType.SYNOD,
        authority: "Synode de Rome",
        year: 377,
      },
    ],

    connections: [{ slug: "nestorianisme", type: "preceded" }],

    keywords: ["christ", "ame", "verbe", "incarnation", "hypostase"],
  },
  {
    slug: "nestorianisme",
    name: "Nestorianisme",
    nameLatin: "Nestorianismus",
    category: HeresyCategory.CHRISTOLOGICAL,
    century: 5,
    origin: "Constantinople",
    promoter: "Nestorius (381-451), patriarche de Constantinople",

    description:
      "Nestorius affirmait qu'il y a deux personnes dans le Christ : une personne divine (le Verbe) et une personne humaine (Jésus), unies seulement moralement. Il refusait le titre de « Théotokos » pour Marie.",
    error:
      "Le Christ est deux personnes unies moralement ; Marie n'est pas Mère de Dieu mais Mère de l'homme Jésus.",

    historicalContext:
      "Nestorius, moine syrien devenu patriarche de Constantinople en 428, prêche avec zèle contre les hérésies mais développe sa propre erreur. Influencé par l'école d'Antioche (Théodore de Mopsueste), il privilégie la distinction des natures au point de diviser la personne du Christ. Son refus du titre Théotokos pour Marie provoque une crise majeure.",
    theologicalIssues:
      "Si le Christ est deux personnes (divine et humaine), alors l'Incarnation est un rapprochement moral, non une union hypostatique. Les souffrances de la Croix ne sont pas celles de Dieu mais d'un homme, ce qui ruine la valeur rédemptrice du sacrifice. Le refus du Théotokos nie que Marie ait porté Dieu dans son sein, séparant artificiellement le Verbe de son humanité.",
    development:
      "En 428, Nestorius commence à condamner le titre Théotokos. Saint Cyrille d'Alexandrie lui écrit douze anathématismes. Le pape Célestine I condamne Nestorius au synode de Rome (430). Le Concile d'Éphèse (431), présidé par Cyrille en l'absence des évêques orientaux, condamne Nestorius. L'empereur Théodose II hésite, mais finalement Nestorius est exilé en 435 au désert d'Égypte où il meurt vers 451.",
    consequences:
      "Le nestorianisme a provoqué la première grande rupture de la chrétienté. Les Églises de Perse et d'Orient adoptent la doctrine nestorienne, formant l'Église nestorienne qui s'étend jusqu'en Chine. Le Concile d'Éphèse a aussi établi le dogme de l'union hypostatique (une personne, deux natures) et confirmé le titre Théotokos.",

    churchFathersDetailed: [
      { name: "Saint Cyrille d'Alexandrie", work: "Douze anathématismes contre Nestorius", contribution: "Définit l'union hypostatique : le Verbe s'est uni l'humanité dans une seule personne (hypostase), sans mélange ni confusion. Le Théotokos est le test décisif de l'orthodoxie." },
      { name: "Pape Célestine I", work: "Synode de Rome (430)", contribution: "Condamne Nestorius et autorise Cyrille à prononcer l'anathème si Nestorius ne se rétracte pas dans les 10 jours." },
    ],

    canonicalResponse:
      "Le Concile d'Éphèse dépose Nestorius de son siège patriarcal. Le droit canonique prévoit la déposition pour tout évêque professant l'hérésie. CIC 1364 §1 prévoit l'excommunication pour hérésie.",
    canonicalReferences: ["CIC 1364 §1", "CIC 1436 §1", "Concile d'Éphèse, Canon 1"],
    refutations: [
      {
        source: "Concile d'Éphèse (431), Canon 1",
        latin:
          "Si quis non confitit, quod Emmanuel vere Deus est, et propterea Sancta Deipara Virgo peperit secundum carnem Deum Verbum: anathema sit.",
      },
      {
        source: "Saint Cyrille d'Alexandrie, « Trois livres à Nestorius »",
        latin: "Una est persona Filii Dei incarnati, non duæ : quia Verbum caro factum est.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile d'Éphèse",
        year: 431,
        document: "Douze anathèmes de Cyrille contre Nestorius",
        canons: [
          "Canon 1-7 : Condamnation de Nestorius et de ses partisans",
          "Canon 8 : Condamnation de ceux qui refusent le titre Théotokos",
        ],
      },
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Chalcédoine",
        year: 451,
        document: "Définition de Chalcédoine",
      },
    ],
    connections: [
      { slug: "arianisme", type: "related" },
      { slug: "monophysisme", type: "succeeded" },
      { slug: "concile-ephese-431", type: "refuted" },
    ],
    keywords: ["theotokos", "marie", "hypostase", "personne", "nestorius"],
  },
  {
    slug: "monophysisme",
    name: "Monophysisme",
    nameLatin: "Mono physitismus",
    category: HeresyCategory.CHRISTOLOGICAL,
    century: 5,
    origin: "Égypte",
    promoter: "Eutychès (378-454), archimandrite de Constantinople",

    description:
      "Le monophysisme enseigne qu'il n'y a qu'une seule nature dans le Christ : la nature divine, la nature humaine ayant été comme absorbée par la nature divine. « Deux natures avant l'union, une seule après. »",
    error: "Le Christ n'a qu'une seule nature (la divine), la nature humaine ayant été absorbée.",

    historicalContext:
      "Réaction excessive contre le nestorianisme : si Nestorius divise le Christ en deux personnes, Eutychès (archimandrite de Constantinople) fusionne les deux natures en une seule. Le « Tome » du pape Léon I à Flavien (449) définit l'orthodoxie des deux natures. Le brigandage d'Éphèse (449) impose le monophysisme par la force impériale, mais le Concile de Chalcédoine (451) restaure l'orthodoxie.",
    theologicalIssues:
      "Si le Christ n'a qu'une nature divine, son humanité n'est pas réelle : il n'a pas véritablement souffert, n'a pas véritablement été tenté, n'a pas véritablement sauvé l'homme par son humanité. Le mystère de l'Incarnation exige que les deux natures restent « sans confusion, sans changement, sans division, sans séparation » (Définition de Chalcédoine).",
    development:
      "Eutychès enseigne le monophysisme vers 448. Le Synode de Constantinople le condamne, mais l'empereur Théodose II le réhabilite au brigandage d'Éphèse (449). Après la mort de Théodose, l'impératrice Pulchérie et le pape Léon convoquent le Concile de Chalcédoine (451) qui condamne Eutychès. Les monophysites forment des Églises séparées (coptes, syriennes, arméniennes) qui subsistent aujourd'hui.",
    consequences:
      "Le monophysisme a provoqué la deuxième grande rupture de la chrétienté. Les Églises coptes, syriaques et arméniennes (les « orientales orthodoxes ») refusent Chalcédoine et restent séparées. Le monothélisme sera une tentative ratée de réconciliation avec les monophysites au VIIe siècle.",

    churchFathersDetailed: [
      { name: "Pape Léon I le Grand", work: "Tome à Flavien (Ep. 28)", contribution: "Définit la doctrine des deux natures : « Chaque nature opère ce qui lui est propre en communion avec l'autre ». Le Tome est accepté par Chalcédoine comme expression de la foi de saint Pierre." },
      { name: "Saint Maxime le Confesseur", work: "Opuscules théologiques", contribution: "Défend l'orthodoxie chalcédonienne contre les monophysites et les monothélites. Démontre que deux volontés naturelles ne divisent pas la personne." },
    ],

    canonicalResponse:
      "Le Concile de Chalcédoine dépose Dioscore d'Alexandrie, chef des monophysites. CIC 1364 §1 et CIC 1436 §1 s'appliquent.",
    canonicalReferences: ["CIC 1364 §1", "CIC 1436 §1", "Concile de Chalcédoine, Canon 1"],
    refutations: [
      {
        source: "Concile de Chalcédoine (451), Définition",
        latin:
          "Confitemur unum eumdemque Christum Filium Dominum nostrum, in duabus naturis inconfuse, immutabiliter, indivise, inseparabiliter agnoscendum.",
      },
      {
        source: "Pape Léon I, « Tome à Flavien »",
        latin:
          "Agit enim in utroque forma : quia opera divinitatis sunt et opera humanitatis... Unus erga Deus et homo, idem Filius Dei et filius hominis.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Chalcédoine",
        year: 451,
        document: "Définition de foi",
        canons: [
          "Canon de foi : « Deux natures... inconfuse, immutabiliter, indivise, inseparabiliter »",
          "Canon 1-30 : Condamnation des monophysites",
        ],
      },
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Constantinople II",
        year: 553,
        document: "Trois Chapitres",
      },
    ],
    connections: [
      { slug: "nestorianisme", type: "related" },
      { slug: "monothélisme", type: "succeeded" },
    ],
    keywords: ["nature", "eutyches", "chalcedoine", "leon", "tome"],
  },
  {
    slug: "monothelisme",
    name: "Monothélisme",
    nameLatin: "Monotheletismus",
    category: HeresyCategory.CHRISTOLOGICAL,
    century: 7,
    origin: "Constantinople",
    promoter: "Serge, patriarche de Constantinople ; Pyrrhus",

    description:
      "Le monothélisme enseignait que le Christ n'avait qu'une seule volonté (la divine) ou une seule opération (théandrique). C'était une tentative de conciliation avec les monophysites.",
    error: "Le Christ n'a qu'une seule volonté (ou opération), la volonté humaine étant absorbée.",

    historicalContext:
      "Au VIIe siècle, l'empereur Héraclius cherche à réunifier l'Empire byzantin menacé par les Perses et les Arabes. Le patriarche Serge de Constantinople propose le monothélisme comme formule de compromis : le Christ a deux natures mais une seule volonté (théandrique). Cette formule séduit momentanément les monophysites.",
    theologicalIssues:
      "Si le Christ n'a qu'une volonté divine, son obéissance au Père (« Que ta volonté soit faite ») n'est pas réelle. L'agonie de Gethsémani perd son sens. La volonté humaine est essentielle au rachat : le Christ a dû librement vouloir souffrir et mourir, ce qui est impossible sans une volonté humaine.",
    development:
      "Serge propose le monothélisme vers 633. Le pape Honorius I approuve prudemment la doctrine d'une « seule volonté » (monothélisme). Saint Maxime le Confesseur résiste et est martyrisé (662). Le pape Agathon convoque le Concile de Constantinople III (680-681) qui condamne le monothélisme et, rétroactivement, Honorius I.",
    consequences:
      "Le Concile de Constantinople III complète la christologie : le Christ a deux volontés (divine et humaine), la volonté humaine obéissant librement à la volonté divine. L'affaire Honorius I pose la question des limites de l'infaillibilité papale : Honorius est condamné posthume pour avoir favorisé l'hérésie.",

    churchFathersDetailed: [
      { name: "Saint Maxime le Confesseur", work: "Dispute avec Pyrrhus", contribution: "Démontre que deux natures exigent deux volontés : la volonté est une propriété naturelle. Sans volonté humaine, le Christ ne serait pas véritablement homme. Martyrisé pour sa foi." },
      { name: "Pape Agathon", work: "Lettre au Concile de Constantinople III", contribution: "Définit la doctrine des deux volontés et présente la foi romaine comme norme d'orthodoxie." },
    ],

    canonicalResponse:
      "Le Concile de Constantinople III (Canon 18) condamne le monothélisme. Le pape Léon II confirme la condamnation, y compris celle d'Honorius I pour avoir « laissé souiller la foi apostolique ».",
    canonicalReferences: ["CIC 1364 §1", "Concile de Constantinople III, Canon 18"],
    refutations: [
      {
        source: "Concile de Constantinople III (680-681)",
        latin:
          "In Christo Domino nostro duo sunt naturæ, et secundum unam et alteram operationes naturales : divina scilicet et humana.",
      },
      {
        source: "Pape Agathon, « Lettre à l'empereur Constantin »",
        latin:
          "Duæ in Christo sunt voluntates, sicut duæ sunt naturæ : divina scilicet, et humana.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Constantinople III",
        year: 681,
        document: "Définition de foi sur les deux volontés",
      },
    ],
    connections: [{ slug: "monophysisme", type: "preceded" }],
    keywords: ["volonte", "operation", "energeia", "agathon"],
  },

  // ===== HÉRÉSIES TRINITAIRES =====
  {
    slug: "modalisme",
    name: "Modalisme (Sabellianisme)",
    nameLatin: "Modalismus, Sabellianismus",
    category: HeresyCategory.TRINITARIAN,
    century: 3,
    origin: "Rome",
    promoter: "Sabellius (IIIe siècle)",

    description:
      "Le modalisme enseigne que le Père, le Fils et le Saint-Esprit ne sont pas trois personnes distinctes, mais trois modes ou aspects d'une seule personne divine se révélant successivement.",
    error:
      "Père, Fils et Saint-Esprit sont trois modes d'un seul Dieu, non trois personnes distinctes.",

    historicalContext:
      "Le modalisme (ou sabellianisme) apparaît à Rome au début du IIIe siècle, dans un contexte où la théologie trinitaire n'est pas encore formalisée. Sabellius, prêtre romain, propose une solution « économique » au mystère trinitaire : Dieu se manifeste successivement comme Père (Création), Fils (Rédemption) et Saint-Esprit (Sanctification). Cette doctrine est populaire car elle préserve le monothéisme strict.",
    theologicalIssues:
      "Si les trois Personnes ne sont que des modes, alors le Père a souffert sur la Croix (patripassianisme), la prière du Christ au Père est une prière à soi-même, et le Saint-Esprit n'est pas une personne réelle mais une force. La vie intime de la Trinité — l'amour entre le Père et le Fils — n'existe pas.",
    development:
      "Noët de Smyrne et Praxéas enseignent des formes précoces de modalisme. Le pape Callixte I (217-222) semble avoir toléré Sabellius avant de le condamner. Tertullien réfute Praxéas. Le Synode de Rome (262) condamne formellement le sabellianisme. La doctrine réapparaît au IVe siècle chez Marcel d'Ancyre.",
    consequences:
      "Le modalisme a forcé l'Église à développer un vocabulaire précis pour parler de la Trinité : la distinction entre « personne » (prosopon/hypostase) et « substance » (ousia). La réponse au modalisme a contribué à la formulation du Credo de Nicée.",

    churchFathersDetailed: [
      { name: "Tertullien", work: "Contre Praxéas", contribution: "Premier à utiliser le vocabulaire de « substance » et « personne » pour la Trinité. « Trois personnes, une substance » (tres personae, una substantia). Réfute le patripassianisme." },
      { name: "Origène", work: "De Principiis", contribution: "Développe la distinction entre l'essence divine et les personnes, tout en maintenant la subordination du Fils (erreur qui sera corrigée par Nicée)." },
    ],

    canonicalResponse:
      "Le Synode de Rome (262) condamne le sabellianisme. CIC 1364 §1 s'applique à toute négation de la distinction des personnes trinitaires.",
    canonicalReferences: ["CIC 1364 §1", "CIC 751"],
    refutations: [
      {
        source: "Tertullien, « Contre Praxéas »",
        latin:
          "Ecce tres sunt, nec unius substantiæ tres potestates, sed unius substantiæ tres personæ : Pater, Filius, Spiritus Sanctus.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.SYNOD,
        authority: "Synode de Rome",
        year: 262,
      },
    ],
    connections: [{ slug: "trinite", type: "related" }],
    keywords: ["sabellius", "praxeas", "personne", "mode", "pater"],
  },
  {
    slug: "tritheisme",
    name: "Tritéisme",
    nameLatin: "Tritheismus",
    category: HeresyCategory.TRINITARIAN,
    century: 6,
    origin: "Alexandrie",
    promoter: "Jean Philopon (VIe siècle), philosophes alexandrins",

    description:
      "Le trithéisme enseigne qu'il y a trois Dieux, trois substances séparées, unies seulement par une volonté commune. C'est une réaction excessive contre le monophysisme.",
    error: "Il y a trois Dieux distincts, unis seulement par une volonté commune.",

    historicalContext:
      "Au VIe siècle, la crise monophysite ravive les débats trinitaires. Jean Philopon, philosophe alexandrin, réagit à la confusion monophysite en affirmant que les trois Personnes sont trois substances distinctes. Sa position est un contrepoids extrême au sabellianisme.",
    theologicalIssues:
      "Le trithéisme nie l'unité de Dieu en multipliant les divinités. Si les trois Personnes sont trois substances, il y a trois dieux, ce qui contredit le monothéisme révélé. La doctrine orthodoxe maintient : une substance (ousia), trois hypostases (personnes).",
    development:
      "Jean Philopon enseigne le trithéisme vers 550-570. Le patriarche d'Alexandrie Damien le condamne. Le Concile de Constantinople III (681) anathématise le trithéisme dans le contexte de la lutte contre le monothélisme.",
    consequences:
      "Le trithéisme a confirmé que la théologie trinitaire doit naviguer entre deux écueils : le modalisme (une personne) et le trithéisme (trois dieux). La formule orthodoxe « une substance, trois personnes » reste le cadre dogmatique.",

    churchFathersDetailed: [
      { name: "Saint Jean Damascène", work: "Exposé de la foi orthodoxe", contribution: "Synthèse définitive de la doctrine trinitaire : une essence, trois hypostases. Réfute le trithéisme sans retomber dans le modalisme." },
    ],

    canonicalResponse: "Concile de Constantinople III, condamnation du trithéisme.",
    canonicalReferences: ["CIC 1364 §1"],
    refutations: [
      {
        source: "Concile de Constantinople III (680-681)",
        latin: "Tres personæ, una substantia, non tres substantiæ.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Constantinople III",
        year: 681,
      },
    ],
    connections: [{ slug: "arianisme", type: "related" }],
    keywords: ["trois dieux", "substance", "philopon"],
  },
  {
    slug: "macedonianisme",
    name: "Macédonianisme (Pneumatomachie)",
    nameLatin: "Macedonianismus",
    category: HeresyCategory.TRINITARIAN,
    century: 4,
    origin: "Constantinople",
    promoter: "Macédonius, patriarche de Constantinople",

    description:
      "Les pneumatomaches (« combattants de l'Esprit ») niaient la divinité du Saint-Esprit, le considérant comme une créature inférieure au Père et au Fils, semblable aux anges.",
    error: "Le Saint-Esprit n'est pas Dieu, mais une créature servante.",

    historicalContext:
      "Après la victoire de l'orthodoxie sur l'arianisme au Concile de Nicée, les partisans d'Arius se replient sur une position de repli : admettre la divinité du Fils mais nier celle du Saint-Esprit. Macédonius, patriarche arien de Constantinople, devient le chef de file de ce mouvement.",
    theologicalIssues:
      "Si le Saint-Esprit est une créature, la Trinité est incomplète et le baptême au nom du Père, du Fils et du Saint-Esprit (Mt 28:19) associe une créature à Dieu. La sanctification des âmes par le Saint-Esprit ne serait pas une action divine.",
    development:
      "Macédonius est installé comme patriarche arien de Constantinople vers 342. Les pneumatomaques se développent dans les années 360. Saint Basile publie « Du Saint-Esprit » (375) pour défendre sa divinité. Le Concile de Constantinople (381) achève la condamnation en incluant la divinité du Saint-Esprit dans le Credo.",
    consequences:
      "Le Credo de Nicée-Constantinople affirme explicitement que le Saint-Esprit est « Seigneur et vivifiant, qui procède du Père (et du Fils), qui avec le Père et le Fils est adoré et glorifié ». La divinité du Saint-Esprit est un dogme de foi catholique.",

    churchFathersDetailed: [
      { name: "Saint Basile de Césarée", work: "Du Saint-Esprit (De Spiritu Sancto)", contribution: "Démontre par l'Écriture et la Tradition que le Saint-Esprit est adoré avec le Père et le Fils, ce qui implique sa divinité. Analyse la doxologie baptismale." },
      { name: "Saint Grégoire de Nazianze", work: "Cinquième Discours théologique", contribution: "Traite spécifiquement de la divinité du Saint-Esprit et de sa place dans la Trinité." },
    ],

    canonicalResponse:
      "Le Concile de Constantinople I (Canon 1) confirme la condamnation des ariens et de leurs alliés pneumatomaques.",
    canonicalReferences: ["CIC 1364 §1", "Concile de Constantinople I, Canon 1"],
    refutations: [
      {
        source: "Concile de Constantinople I (381)",
        latin:
          "Et in Spiritum Sanctum, Dominum et vivificantem : qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Constantinople I",
        year: 381,
      },
    ],
    connections: [{ slug: "arianisme", type: "related" }],
    keywords: ["esprit-saint", "pneumatomachiques", "creature", "adore"],
  },

  // ===== HÉRÉSIES ANTHROPOLOGIQUES (GRÂCE) =====
  {
    slug: "pelagianisme",
    name: "Pélagianisme",
    nameLatin: "Pelagianismus",
    category: HeresyCategory.ANTHROPOLOGICAL,
    century: 5,
    origin: "Rome, Afrique du Nord",
    promoter: "Pélage (354-420), Célestius",

    description:
      "Le pélagianisme nie la transmission du péché originel, affirme que l'homme peut observer la loi de Dieu sans la grâce, et que la grâce n'est pas nécessaire pour le salut.",
    error:
      "L'homme peut être sauvé par ses propres forces, sans la grâce divine ; le péché originel n'a pas d'effet.",

    historicalContext:
      "Pélage, moine breton ou irlandais, arrive à Rome vers 380. Choqué par la dépravation des chrétiens romains qui invoquent la faiblesse humaine comme excuse, il prêche la perfection morale par les seules forces humaines. Son disciple Célestius propage l'enseignement en Afrique du Nord, où il rencontre l'opposition de Saint Augustin.",
    theologicalIssues:
      "Le pélagianisme ruine tout l'édifice du salut : si l'homme peut se sauver lui-même, la grâce est inutile, la Rédemption est superflue, les sacrements sont de simples encouragements moraux. Le péché originel, dont le baptême efface la tache, n'existe pas. La justification n'est pas une transformation intérieure par la grâce mais un effort moral humain.",
    development:
      "Pélage arrive à Rome vers 380. Après le sac de Rome (410), il se réfugie en Afrique du Nord puis en Palestine. Célestius est condamné au synode de Carthage (411) pour ne pas vouloir condamner la négation du péché originel. Saint Augustin écrit une série d'ouvrages magistraux. Le pape Innocent I confirme la condamnation (417). Le pape Zosime semble d'abord réhabiliter Célestius mais se rétracte sous la pression des évêques africains. Le Concile de Carthage (418) et le Concile d'Éphèse (431) condamnent définitivement le pélagianisme.",
    consequences:
      "Le pélagianisme a provoqué les écrits les plus profonds de Saint Augustin sur la grâce et le péché originel. La doctrine augustinienne de la grâce prédestinante, élaborée contre Pélage, devient le fondement de la théologie catholique du salut. Le Concile d'Orange (529) définit la position orthodoxe sur la grâce.",

    churchFathersDetailed: [
      { name: "Saint Augustin d'Hippone", work: "De peccatorum meritis et remissione ; De gratia et libero arbitrio ; De dono perseverantiae", contribution: "Réfutation systématique du pélagianisme. Démontre que sans la grâce, l'homme ne peut ni vouloir ni faire le bien. Le péché originel est transmis par génération. La grâce est un don gratuit, non un salaire." },
      { name: "Saint Prosper d'Aquitaine", work: "De gratia Dei et libero arbitrio", contribution: "Défenseur de la doctrine augustinienne de la grâce contre les semi-pélagien de Marseille." },
      { name: "Pape Innocent I", work: "Lettre au Concile de Carthage", contribution: "Confirme la condamnation de Pélage et de Célestius, établissant que la grâce est nécessaire pour chaque acte bon." },
    ],

    canonicalResponse:
      "Le droit canonique condamne quiconque nie le péché originel ou affirme que l'homme peut être sauvé sans la grâce. CIC 1364 §1 s'applique. Le baptême des enfants confirme la doctrine du péché originel (CIC 867).",
    canonicalReferences: ["CIC 1364 §1", "CIC 867 (baptême des enfants)", "Concile de Carthage (418), Canons 1-9"],
    refutations: [
      {
        source: "Saint Augustin, « De peccatorum meritis et remissione »",
        latin:
          "Sine gratia Dei, non possumus velle nec facere quod bonum est. Gratis enim salvamur, non ex operibus.",
      },
      {
        source: "Concile de Carthage (418)",
        latin:
          "Si quis dicit, quod Adam peccando se tantum laesit, et non omne hominum genus : anathema sit.",
      },
      {
        source: "Pape Innocent I, « Lettre au Concile de Carthage »",
        latin: "Gratia Dei non sive libera est, quæ hominem praedicat, sed et necessaria.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.SYNOD,
        authority: "Concile de Carthage",
        year: 418,
        document: "Neuf canons contre les Pélagiens",
        canons: [
          "Canon 1 : Condamnation de « Adam n'a pas nui à ses descendants »",
          "Canon 2 : Condamnation de « Les nouveau-nés sont comme Adam avant la faute »",
          "Canon 3 : Condamnation de « La grâce facilite seulement »",
        ],
      },
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Zosime",
        year: 417,
        document: "« Epistola Tractoria »",
      },
    ],
    connections: [{ slug: "semipelagianisme", type: "succeeded" }],
    keywords: ["peche originel", "grace", "salautes", "augustin", "libre arbitre"],
  },
  {
    slug: "semipelagianisme",
    name: "Semi-Pélagianisme",
    nameLatin: "Semipelagianismus",
    category: HeresyCategory.ANTHROPOLOGICAL,
    century: 5,
    origin: "Marseille, Gaule",
    promoter: "Jean Cassien, Vincent de Lérins, Fauste de Riez",

    description:
      "Le semi-pélagianisme enseigne que l'homme peut prendre l'initiative de salut par son libre arbitre, et que la grâce de Dieu répond ensuite à cette initiative. « Les premières démarches vers Dieu viennent de l'homme. »",
    error:
      "L'homme peut commencer le salut par son libre arbitre, la grace venant ensuite recompenser cette initiative.",

    historicalContext:
      "Après la mort de Saint Augustin (430), des moines de Provence (Lérins, Marseille) réagissent contre ce qu'ils perçoivent comme un excès augustinien : la prédestination absolue. Jean Cassien, fondateur du monastère de Saint-Victor à Marseille, et Vincent de Lérins proposent une voie médiane : l'homme fait le premier pas vers Dieu, la grâce couronne l'effort humain.",
    theologicalIssues:
      "Si l'homme peut « commencer » la foi par ses propres forces, alors la grâce n'est pas toujours première (grâce prévenante). Le mérite humain devient la condition de la grâce, ce qui contredit le caractère gratuit de la justification. L'initiative du salut revient à l'homme plutôt qu'à Dieu.",
    development:
      "Jean Cassien publie ses « Conférences » (vers 420-430) avec des positions semi-pélagiennes implicites. Fauste de Riez (vers 475) systématise la doctrine. Saint Prosper d'Aquitaine alerte le pape Célestine I. Le Concile d'Orange II (529), présidé par Césaire d'Arles, condamne le semi-pélagianisme mais nuance la prédestination augustienne stricte : la grâce est nécessaire pour chaque acte bon, y compris l'initium fidei.",
    consequences:
      "Le Concile d'Orange a établi l'équilibre orthodoxe entre grâce et libre arbitre : la grâce est toujours première et nécessaire, mais l'homme coopère librement. Ce décret est approuvé par le pape Boniface II et devient la norme catholique. Il est cité par le Concile de Trente.",

    churchFathersDetailed: [
      { name: "Saint Prosper d'Aquitaine", work: "De gratia Dei et libero arbitrio ; Contre les Collateurs", contribution: "Réfute les positions de Cassien. Démontre que même l'initium fidei (début de la foi) est un don de la grâce, non un acte du libre arbitre." },
      { name: "Saint Césaire d'Arles", work: "Statuts du Concile d'Orange II (529)", contribution: "Préside le Concile d'Orange qui condamne le semi-pélagianisme. Établit que la grâce prévient et accompagne tout acte méritoire." },
    ],

    canonicalResponse:
      "Le Concile d'Orange II (529) est le document magistériel décisif. Ses 25 canons définissent la doctrine catholique sur la grâce. Le CIC 208 rappelle l'égalité fondamentale de tous les baptisés dans la dignité de la grâce.",
    canonicalReferences: ["CIC 208", "Concile d'Orange II, Canons 1-25", "Concile de Trente, Session VI"],
    refutations: [
      {
        source: "Concile d'Orange II (529), Canon 5",
        latin:
          "Si quis dicit, quod initium fidei, et ipsa credulitas, non gratis hominis donum est, sed ex natura nobis est : anathema sit.",
      },
      {
        source: "Saint Prosper d'Aquitaine, « De gratia Dei »",
        latin: "Non nos prævenimus gratia Dei, sed ipse nos prævenit ut velimus.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.SYNOD,
        authority: "Concile d'Orange II",
        year: 529,
        document: "25 canons sur la grâce",
        canons: [
          "Canon 1 : La foi est un don gratuit",
          "Canon 5 : L'homme ne peut pas croire sans la grace",
          "Canon 25 : L'amour de Dieu est aussi un don de la grace",
        ],
      },
    ],
    connections: [{ slug: "pelagianisme", type: "preceded" }],
    keywords: ["orange", "cassien", "initiative", "prevention", "grace"],
  },
  {
    slug: "baianisme",
    name: "Baianisme",
    nameLatin: "Baius (Michel de Bay)",
    category: HeresyCategory.ANTHROPOLOGICAL,
    century: 16,
    origin: "Louvain, Pays-Bas espagnols",
    promoter: "Michel de Bay, dit Baïus (1513-1589), professeur de théologie",

    description:
      "Le baïanisme enseigne une forme extrême de la prédestination : la volonté divine décrète absolument tout, y compris le péché. La nature humaine est corrompue au point que l'homme ne peut rien faire de bon sans la grâce. Baïus a été accusé de semi-pélagianisme.",
    error:
      "La grâce n'est pas vraiment surnaturelle ; la nature n'est pas vraiment corrompue par le péché.",

    historicalContext:
      "Michel de Bay (Baïus), professeur de théologie à l'Université de Louvain, publie dans les années 1560 des thèses qui nient la distinction entre nature et grâce. Il enseigne que l'homme avant la chute n'avait aucun droit aux dons surnaturels, et que tout don de Dieu est « dû » à la nature. Cette position ruine la gratuité de la grâce.",
    theologicalIssues:
      "Si la grâce n'est pas surnaturelle, elle n'est pas un don gratuit mais un dû. Si la nature est totalement corrompue (sans aucune bonté naturelle), même les vertus naturelles sont impossibles. Baïus mélange nature et surnaturel, ce qui conduit à un pessimisme radical sur l'homme.",
    development:
      "Baïus publie ses thèses dans les années 1560. Le pape Pie V condamne 79 propositions par la bulle « Ex omnibus » (1567). Baïus se soumet publiquement mais continue d'enseigner. Le pape Grégoire XIII confirme la condamnation (1570). Le baïanisme influence le jansénisme naissant.",
    consequences:
      "La condamnation du baïanisme a clarifié la distinction entre nature et grâce : la grâce est un don surnaturel, gratuit, qui perfectionne la nature sans la détruire. Cette distinction devient fondamentale pour la théologie moderne.",

    churchFathersDetailed: [
      { name: "Domingo de Soto", work: "De natura et gratia", contribution: "Théologien dominicain qui réfute les thèses de Baïus au Concile de Trente. Défend la distinction nature/grâce." },
    ],

    canonicalResponse:
      "Les bulles pontificales condamnant Baïus ont valeur de droit canonique. La distinction nature/grâce est un principe théologique fondamental.",
    canonicalReferences: ["CIC 1364 §1", "Bulle « Ex omnibus affectionibus » (1567)"],
    refutations: [
      {
        source: "Pape Pie V, Bulle « Ex omnibus affectionibus » (1567)",
        latin:
          "De opere justi operante, non sive ex natura, sed ex gratia gratuita homini collata.",
      },
      {
        source: "Pape Grégoire XIII, Bulle « Propter certas causas » (1570)",
        latin:
          "Quod lex naturalis nullum præscriptum continet de bonis operibus faciendis, sed tantum de malis vitandis.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Pie V",
        year: 1567,
        document: "Bulle « Ex omnibus affectionibus »",
        canons: [
          "Condamnation de 79 propositions de Baïus",
          "Notamment : « La nature n'est pas vraiment corrompue »",
        ],
      },
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Grégoire XIII",
        year: 1570,
        document: "Bulle « Propter certas causas »",
        canons: ["Condamnation de propositions supplémentaires"],
      },
    ],
    connections: [{ slug: "jansenisme", type: "preceded" }],
    keywords: ["louvan", "gratuite", "naturelle", "predestination"],
  },
  {
    slug: "jansenisme",
    name: "Jansénisme",
    nameLatin: "Jansenismus",
    category: HeresyCategory.ANTHROPOLOGICAL,
    century: 17,
    origin: "France, Pays-Bas",
    promoter: "Cornelius Jansen (1585-1638), évêque d'Ypres ; Saint-Cyran",

    description:
      "Le jansénisme, inspiré par l'Augustinus de Jansen, enseigne une doctrine rigoriste de la grâce et de la prédestination proche du calvinisme : la grâce n'est donnée qu'aux prédestinés, et les oeuvres des impies ne sont que des péchés.",
    error:
      "La grace n'est donnee qu'aux predestines ; les peches des impies sont des peches mortels.",

    historicalContext:
      "Cornelius Jansen (Jansénius), évêque d'Ypres, rédige l'Augustinus (publié posthume en 1640), une interprétation radicalisée de la théologie de la grâce de Saint Augustin. L'ouvrage est immédiatement populaire en France, notamment à Port-Royal dirigé par l'abbé de Saint-Cyran. Le jansénisme devient un mouvement ecclésial, politique et littéraire majeur.",
    theologicalIssues:
      "Le jansénisme, proche du calvinisme, enseigne : (1) que certains commandements de Dieu sont impossibles aux justes malgré leur volonté ; (2) que la grâce intérieure est irrésistible ; (3) que pour mériter ou démériter, il faut la liberté de nécessité (pas seulement de contrainte) ; (4) que les semi-pélagiens admettent que la volonté humaine peut résister à la grâce. Ces cinq propositions, extraites de l'Augustinus, sont condamnées.",
    development:
      "L'Augustinus est publié en 1640. Le pape Innocent X condamne les 5 propositions (1653). Les jansénistes arguent que les propositions ne sont pas dans le livre. Le pape Alexandre VII confirme la condamnation (1656). La paix de Clément IX (1668) est une trêve. Le pape Clément XI condamne 101 propositions du « Nouveau Testament de Mons » (1713). La bulle Unigenitus provoque une crise majeure en France.",
    consequences:
      "Le jansénisme a profondément marqué la France : Port-Royal, Pascal (Provinciales), Racine, la spiritualité rigoriste. Politiquement, il a divisé le clergé français entre jansénistes et anti-jansénistes jusqu'à la Révolution. Théologiquement, les condamnations ont précisé la doctrine catholique sur la grâce : la grâce est suffisante pour tous, efficace pour les élus.",

    churchFathersDetailed: [
      { name: "Blaise Pascal", work: "Les Provinciales (1656-1657)", contribution: "Défense brillante mais polémique des jansénistes contre les jésuites. Les Provinciales sont mises à l'Index pour leur attaque contre la casuistique." },
      { name: "Pape Clément XI", work: "Bulle Unigenitus (1713)", contribution: "Condamnation de 101 propositions de Quesnel, prolongeant la lutte contre le jansénisme. Provocation d'une crise constitutionnelle en France." },
    ],

    canonicalResponse:
      "CIC 1364 §1 s'applique. Les bulles « Cum occasione » (1653) et « Unigenitus » (1713) ont force de loi canonique. Les prêtres doivent souscrire aux condamnations.",
    canonicalReferences: ["CIC 1364 §1", "CIC 1324 §1", "Bulle « Cum occasione » (1653)", "Bulle « Unigenitus » (1713)", "Concile de Trente, Session VI"],
    refutations: [
      {
        source: "Pape Innocent X, Bulle « Cum occasione » (1653)",
        latin:
          "5. Si quis dicit, quod præceptum novissimi diei est impossibile bonis : anathema sit.",
      },
      {
        source: "Pape Alexandre VIII, Constitution « Cum ad plures » (1690)",
        latin:
          "Si quis dicit, quod peccata, quæ ex libero hominis arbitrio committuntur, non sunt poenæ merita : anathema sit.",
      },
      {
        source: "Pape Clément XI, Bulle « Unigenitus » (1713)",
        latin:
          "Si quis dicit, quod respiscendi a peccatis cupiditas non est gratia : anathema sit.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Innocent X",
        year: 1653,
        document: "Bulle « Cum occasione »",
        canons: ["Condamnation de 5 propositions extraites de l'Augustinus"],
      },
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Alexandre VIII",
        year: 1690,
        document: "Constitution « Cum ad plures »",
        canons: ["Condamnation de propositions sur la grâce et le péché"],
      },
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Clément XI",
        year: 1713,
        document: "Bulle « Unigenitus »",
        canons: ["Condamnation de 101 propositions extraites des « Réflexions morales »"],
      },
    ],
    connections: [{ slug: "baianisme", type: "succeeded" }],
    keywords: ["augustinus", "grace", "predestination", "port-royal", "innocent-x"],
  },

  // ===== HÉRÉSIES ECCLÉSIOLOGIQUES =====
  {
    slug: "donatisme",
    name: "Donatisme",
    nameLatin: "Donatismus",
    category: HeresyCategory.ECCLESIOLOGICAL,
    century: 4,
    origin: "Afrique du Nord (Carthage)",
    promoter: "Donat (éveque de Casae Nigrae)",

    description:
      "Les donatistes affirmaient que l'Église doit être pure, que les sacrements donnés par des prêtres indignes (traditeurs) sont invalides, et que l'Église ne peut pas pardonner certains péchés.",
    error:
      "Les sacrements donnes par des pretres indignes sont invalides ; l'Eglise ne doit pas tolerer les pecheurs.",

    historicalContext:
      "La persécution de Dioclétien (303-313) pose la question des « traditeurs » : les chrétiens qui ont livré les Écritures aux païens. Donat, élu évêque schismatique de Carthage, refuse de reconnaître les sacrements célébrés par ces prêtres indignes. Le schisme se transforme en hérésie quand les donatistes affirment que l'efficacité des sacrements dépend de la sainteté du ministre.",
    theologicalIssues:
      "Le donatisme confond la validité du sacrement avec la dignité du ministre. Or, les sacrements agissent ex opere operato (par l'efficacité de l'acte lui-même), non ex opere operantis (par la vertu de celui qui l'accomplit). Le baptême d'un prêtre indigne est valide car c'est le Christ qui baptise, pas le prêtre.",
    development:
      "En 311, Donat est élu évêque schismatique. L'empereur Constantin tente de régler le conflit par le jugement de Rome (313) puis d'Arles (314), en faveur des catholiques. Les donatistes refusent. Le Concile de Carthage (411) réunit 570 évêques catholiques et 284 donatistes : le donatisme est condamné. Saint Augustin mène la lutte théologique. Le donatisme décline au Ve siècle mais survit jusqu'à la conquête arabe (VIIe siècle).",
    consequences:
      "Le donatisme a provoqué les écrits les plus importants de Saint Augustin sur l'Église, les sacrements et la grâce. La doctrine « ex opere operato » devient un principe sacramentel fondamental. L'Église est définie comme un « corpus permixtum » (corps mélangé de bons et de mauvais), non une secte de purs.",

    churchFathersDetailed: [
      { name: "Saint Augustin d'Hippone", work: "De baptismo ; Contra litteras Petiliani ; De unico baptismo", contribution: "Réfutation systématique du donatisme. Démontre que les sacrements sont valides même par des indignes. Développe la doctrine de l'Église comme corps mélangé." },
      { name: "Saint Optat de Milève", work: "Contra Parmenianum", contribution: "Premier réfuteur du donatisme avant Augustin. Montre que le schisme de Donat est illégitime." },
    ],

    canonicalResponse:
      "Le Concile de Carthage (411) condamne le donatisme. CIC 1364 §2 condamne le schisme. CIC 900 §1 confirme la validité des sacrements ex opere operato.",
    canonicalReferences: ["CIC 1364 §2", "CIC 900 §1", "Concile de Carthage (411)"],
    refutations: [
      {
        source: "Saint Augustin, « De baptismo »",
        latin:
          "Non refert, quis det baptismum, sed quid det, quis accipiat. Donum Dei est, etiamsi per malum ministretur.",
      },
      {
        source: "Concile de Carthage (411)",
        latin:
          "Si quis dicit, quod baptisma, ab hæretico vel schismatico administratum, non sit baptismum : anathema sit.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.SYNOD,
        authority: "Concile de Carthage",
        year: 411,
        document: "Collatio de 411 (débat avec les Donatistes)",
      },
    ],
    connections: [{ slug: "cyprian", type: "preceded" }],
    keywords: ["sacrement", "purete", "traditeurs", "augustin"],
  },
  {
    slug: "gallicanisme",
    name: "Gallicanisme",
    nameLatin: "Gallicanismus",
    category: HeresyCategory.ECCLESIOLOGICAL,
    century: 17,
    origin: "France",
    promoter: "Clergé français, Parlement de Paris",

    description:
      "Le gallicanisme affirme la supériorité du concile sur le pape, les libertés de l'Église gallicane, et limite l'infaillibilité pontificale. Les « quatre articles » de 1682 en sont l'expression classique.",
    error: "Le concile est superieur au pape ; le pape n'est pas infaillible en matiere de foi.",

    historicalContext:
      "Le gallicanisme puise dans une longue tradition française de résistance à Rome, nourrie par les conflits entre la monarchie française et la papauté (Philippe le Bel vs Boniface VIII, le Grand Schisme d'Occident). Bossuet rédige les « quatre articles » de 1682, définissant les « libertés de l'Église gallicane ». Le gallicanisme est autant politique que théologique.",
    theologicalIssues:
      "Les quatre articles de 1682 affirment : (1) le pape n'a pas d'autorité directe en matière temporelle ; (2) le concile est supérieur au pape ; (3) les règles de l'Église gallicane sont intangibles ; (4) les décisions du pape en matière de foi ne sont irréformables qu'avec le consentement de l'Église universelle. Ces positions limitent le primat et l'infaillibilité du pape.",
    development:
      "L'Assemblée du clergé français de 1682 adopte les quatre articles. Le pape Alexandre VIII les condamne (1690). Louis XIV maintient les articles. Le pape Pie VI condamne le gallicanisme par « Auctorem fidei » (1794). Le Concile Vatican I (1870) définit l'infaillibilité pontificale, mettant fin au gallicanisme théologique.",
    consequences:
      "Le Concile Vatican I a définitivement condamné le gallicanisme en définissant le primat juridictionnel et l'infaillibilité du pape. Le gallicanisme politique a été balayé par la Révolution française.",

    churchFathersDetailed: [
      { name: "Bossuet", work: "Defensio declarationis cleri Gallicani (1682)", contribution: "Défense érudite mais erronée des libertés gallicanes. Son œuvre est condamnée par la papauté." },
      { name: "Pape Pie VI", work: "Auctorem fidei (1794)", contribution: "Condamne les propositions gallicanes comme schismatiques et hérétiques." },
    ],

    canonicalResponse:
      "Le Concile Vatican I (Pastor Æternus) définit l'infaillibilité pontificale et le primat de juridiction. CIC 331 affirme la primauté du pape. CIC 336 affirme l'infaillibilité.",
    canonicalReferences: ["CIC 331", "CIC 336", "Concile Vatican I, Pastor Æternus (1870)"],
    refutations: [
      {
        source: "Pape Pie VI, Constitution « Auctorem fidei » (1794)",
        latin:
          "Si quis dixerit, Romanum Pontificem non habere potestatem directam in omnem Ecclesiam : anathema sit.",
      },
      {
        source: "Vatican I, « Pastor Æternus » (1870)",
        latin:
          "Si quis dixerit, Romanum Pontificem primatum non habere immediate a Christo : anathema sit.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Pie VI",
        year: 1794,
        document: "Constitution « Auctorem fidei »",
      },
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile Vatican I",
        year: 1870,
        document: "Constitution « Pastor Æternus » sur l'infaillibilité",
      },
    ],
    connections: [],
    keywords: ["article 1682", "concile", "infaillibilite", "pasteur eternus"],
  },

  // ===== HÉRÉSIES SACRAMENTELLES =====
  {
    slug: "consubstantiation",
    name: "Consubstantiation (Luthérienne)",
    nameLatin: "Consubstantiatio",
    category: HeresyCategory.SACRAMENTAL,
    century: 16,
    origin: "Allemagne (Wittenberg)",
    promoter: "Martin Luther (1483-1546)",

    description:
      "La consubstantiation enseigne que le corps et le sang du Christ sont « en, avec et sous » les espèces du pain et du vin, mais sans changement de substance (contre la transsubstantiation catholique).",
    error: "Le pain et le vin restent du pain et du vin, avec le Christ « en, avec et sous ».",

    historicalContext:
      "Luther, en réformant l'Église, conserve la présence réelle du Christ dans l'Eucharistie contre Zwingli mais rejette la transsubstantiation comme « philosophie aristotélicienne ». Il propose la consubstantiation : le Christ est réellement présent mais la substance du pain et du vin subsiste. Cette position est un compromis entre Rome et Zurich.",
    theologicalIssues:
      "Si le pain et le vin subsistent, il n'y a pas de conversion substantielle, et donc le sacrifice de la Messe n'est pas le renouvellement du sacrifice de la Croix. Le Concile de Trente définit que la transsubstantiation est le seul terme correct : la substance entière du pain est convertie au corps du Christ.",
    development:
      "Luther développe la consubstantiation dans ses écrits eucharistiques de 1519-1534. Les Articles de Smalcalde (1537) la formalisent. Le Concile de Trente (Session 13, 1551) condamne la consubstantiation et définit la transsubstantiation. La Formule de Concorde (1577) fixe la doctrine luthérienne.",
    consequences:
      "La Réforme a divisé les chrétiens sur l'Eucharistie : transsubstantiation (catholiques), consubstantiation (luthériens), mémorial (zwingliens/calvinistes). Le Concile de Trente a réaffirmé avec force la doctrine de la présence réelle par transsubstantiation.",

    churchFathersDetailed: [
      { name: "Saint Thomas d'Aquin", work: "Somme Théologique III, q. 75-77", contribution: "Démonstration philosophique de la transsubstantiation : les accidents (goût, couleur) subsistent sans sujet, par la puissance de Dieu. Le terme « transsubstantiation » est utilisé au Concile de Latran IV (1215)." },
      { name: "Concile de Trente", work: "Session 13, Décret sur l'Eucharistie (1551)", contribution: "Définit dogmatiquement la transsubstantiation et condamne les alternatives luthériennes et calvinistes." },
    ],

    canonicalResponse:
      "Le Concile de Trente (Session 13, Canons 1-4) condamne la consubstantiation. CIC 897-900 définissent l'Eucharistie comme sacrement de la transsubstantiation.",
    canonicalReferences: ["CIC 897", "CIC 900 §1", "Concile de Trente, Session 13, Canons 1-4"],
    refutations: [
      {
        source: "Concile de Trente, Session 13 (1551), Canon 2",
        latin:
          "Si quis dixerit, in sanctissimo Eucharistiæ sacramento remanere substantiam panis et vini simul cum corpore et sanguine Domini : anathema sit.",
      },
      {
        source: "Thomas d'Aquin, Somme Théologique III, q. 75",
        latin:
          "In hoc sacramento non solum accidens, sed etiam substantia panis convertitur in corpus Christi.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Trente",
        year: 1551,
        document: "Session 13, Canons sur la Eucharistie",
      },
    ],
    connections: [],
    keywords: ["eucharistie", "luther", "transsubstantiation"],
  },
  {
    slug: "symbolisme",
    name: "Symbolisme (Zwinglienne/Calviniste)",
    nameLatin: "Symbolismus",
    category: HeresyCategory.SACRAMENTAL,
    century: 16,
    origin: "Suisse (Zurich, Genève)",
    promoter: "Ulrich Zwingli (1484-1531), Jean Calvin (1509-1564)",

    description:
      "Le symbolisme enseigne que le pain et le vin sont de simples symboles du corps et du sang du Christ, qui n'est présent que spirituellement, et non réellement dans l'Eucharistie.",
    error: "Le pain et le vin sont des symboles, le Christ n'est pas reellement present.",

    historicalContext:
      "Zwingli, réformateur de Zurich, interprète « Ceci est mon corps » (Hoc est corpus meum) comme « Ceci SIGNIFIE mon corps » (significat). La dispute de Marbourg (1529) entre Luther et Zwingli sur l'Eucharistie empêche l'unification des réformateurs. Calvin propose une position intermédiaire : présence « spirituelle » par la puissance du Saint-Esprit.",
    theologicalIssues:
      "Si l'Eucharistie est un simple symbole, le sacrifice de la Messe n'a aucune réalité objective. Les paroles de l'institution sont une métaphore, non une consécration. La communion est un acte de mémoire, non une réception réelle du Corps du Christ. Cela contredit directement Jean 6:53-56 (« Si vous ne mangez pas la chair du Fils de l'homme... »).",
    development:
      "Zwingli développe le symbolisme dès 1525. Luther le combat avec véhémence. Calvin développe la « présence spirituelle » (1541). Le Concile de Trente (1551) condamne les deux positions protestantes. Le symbole reste la doctrine dominante dans le protestantisme réformé et évangélique.",
    consequences:
      "La question eucharistique a été l'une des principales causes de division entre luthériens et réformés. Pour les catholiques, les canons de Trente sur l'Eucharistie sont un dogme de foi défini par un concile œcuménique.",

    churchFathersDetailed: [
      { name: "Saint Justin Martyr", work: "Première Apologie, 66", contribution: "Dès le IIe siècle, atteste que les chrétiens croient que l'Eucharistie est « la chair et le sang de Jésus incarné » et non un simple aliment." },
      { name: "Saint Irénée de Lyon", work: "Contre les Hérésies IV, 18", contribution: "Affirme que le pain consacré n'est plus un pain ordinaire mais le corps du Christ." },
    ],

    canonicalResponse:
      "Concile de Trente, Session 13, Canons 1 et 3. CIC 897-900 sur l'Eucharistie.",
    canonicalReferences: ["CIC 897", "CIC 900", "Concile de Trente, Session 13, Canon 1"],
    refutations: [
      {
        source: "Concile de Trente, Session 13 (1551), Canon 1",
        latin:
          "Si quis dixerit, in sanctissimo Eucharistiæ sacramento non esse veram, realem, et substantialem Christi corpus et sanguinem : anathema sit.",
      },
      {
        source: "Concile de Trente, Session 13 (1551), Canon 3",
        latin:
          "Si quis dixerit, Christum in Eucharistia offerri tantum modo signo, vel figura, vel virtute : anathema sit.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Trente",
        year: 1551,
        document: "Session 13, Canons 1-3 sur la présence réelle",
      },
    ],
    connections: [],
    keywords: ["eucharistie", "symbole", "zwingli", "calvin"],
  },
  {
    slug: "iconoclasme",
    name: "Iconoclasme",
    nameLatin: "Iconoclasmus",
    category: HeresyCategory.SACRAMENTAL,
    century: 8,
    origin: "Empire byzantin",
    promoter: "Empereur Léon III l'Isaurien (717-741)",

    description:
      "L'iconoclasme (« bris d'images ») rejette l'usage des images sacrées (icônes, statues) dans les églises, les considérant comme de l'idolâtrie.",
    error: "Les images sacrees sont des idoles ; il faut les detruire.",

    historicalContext:
      "L'empereur Léon III l'Isaurien, influencé par l'islam qui proscrit les images, lance une persécution iconoclaste en 726. Il est motivé par des considérations politiques (centralisation du pouvoir) et théologiques (proscrire l'idolâtrie perçue). La persécution dure jusqu'en 787 (Nicée II) puis reprend sous les iconoclastes de la fin (815-843).",
    theologicalIssues:
      "L'iconoclasme confond vénération (dulie/hyperdulie) et adoration (latrie). Les images ne sont pas adorées mais vénérées, la vénération remontant au prototype représenté. L'Incarnation légitime les images : le Verbe s'étant fait chair, il peut être représenté. Proscrire les images revient à nier l'Incarnation ou à adopter une position musulmane.",
    development:
      "Léon III interdit les images en 726. L'empereur Constantin V convoque le « concile iconoclaste » de Hiéreia (754). Saint Jean Damascène réfute les iconoclastes depuis le monastère de Saint-Sabas. L'impératrice Irène convoque le Concile de Nicée II (787), restaurateur des images. Nouvelle persécution iconoclaste (815-843). L'impératrice Théodora restaure définitivement les images en 843 (« Triomphe de l'Orthodoxie »).",
    consequences:
      "Le Concile de Nicée II (787) est le septième concile œcuménique. Il définit la vénération des saintes images comme un dogme. La fête du « Triomphe de l'Orthodoxie » (premier dimême du Carême) commémore la victoire sur l'iconoclasme. L'art sacré occidental et byzantin se développe légitimement.",

    churchFathersDetailed: [
      { name: "Saint Jean Damascène", work: "Trois Discours contre les calomniateurs des images", contribution: "Défense systématique des images sacrées : distinction entre latrie (adoration due à Dieu seul) et dulie (vénération des saints et de leurs images). L'image est un livre pour les illettrés." },
      { name: "Saint Théodore Stoudite", work: "Antirrheticus", contribution: "Défenseur des images sous la seconde persécution iconoclaste. Démontre que l'image est liée à l'Incarnation." },
    ],

    canonicalResponse:
      "Le Concile de Nicée II (septième concile œcuménique) définit la vénération des images. CIC 1186 encourage le culte des saints et de leurs images.",
    canonicalReferences: ["CIC 1186", "Concile de Nicée II (787)"],
    refutations: [
      {
        source: "Concile de Nicée II (787)",
        latin: "Si quis non confitetur, quod sanctæ imaginis veneratio debetur : anathema sit.",
      },
      {
        source: "Saint Jean Damascène, « Traité des saintes images »",
        latin:
          "Imago non est deus, sed ad Deum ducit. Honor non in ipsa imagine, sed in depicto per imaginationem.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Nicée II",
        year: 787,
        document: "Définition de foi sur les saintes images",
      },
    ],
    connections: [],
    keywords: ["icone", "idole", "nicée-ii", "damascene"],
  },

  // ===== HÉRÉSIES ESCHATOLOGIQUES =====
  {
    slug: "millenarisme",
    name: "Millénarisme (Chiliasme)",
    nameLatin: "Chiliasmus",
    category: HeresyCategory.ESCHATOLOGICAL,
    century: 2,
    origin: "Asie Mineure",
    promoter: "Cérinthe, Papias, Montanistes",

    description:
      "Le millénarisme enseigne un règne temporel du Christ sur terre pendant mille ans avant le jugement dernier, avec des jouissances sensuelles pour les justes.",
    error: "Le Christ regnera physiquement sur terre pendant 1000 ans avant le jugement.",

    historicalContext:
      "Le millénarisme (chiliasme) apparaît au IIe siècle, influencé par des interprétations littérales de l'Apocalypse 20. Cérinthe, Papias et certains Pères syriens (Papias) admettent un règne terrestre du Christ. Le montanisme propage cette attente eschatologique. Saint Justin et Saint Irénée tolèrent des positions millénaristes modérées avant que l'orthodoxie ne les condamne.",
    theologicalIssues:
      "Le millénarisme matérialise l'espérance chrétienne en un royaume terrestre de plaisirs sensuels. Il contredit l'enseignement du Christ « Mon royaume n'est pas de ce monde » (Jn 18:36). L'Apocalypse 20 doit être interprété spirituellement (l'Église militante) ou allégoriquement, non littéralement.",
    development:
      "Le millénarisme est toléré au IIe siècle. Saint Jérôme et Saint Augustin le combattent au IVe siècle. L'interprétation augustienne de l'Apocalypse (règne de 1000 ans = Église militante) devient l'orthodoxie. Le millénarisme réapparaît au XIXe siècle (dispensationalisme protestant). Le pape Pie XII condamne les formes modernes.",
    consequences:
      "L'Église a établi que l'espérance eschatologique est spirituelle (paradis céleste) et non terrestre. Les interprétations littérales de l'Apocalypse sont rejetées.",

    churchFathersDetailed: [
      { name: "Saint Augustin d'Hippone", work: "Cité de Dieu, Livre XX", contribution: "Interprétation définitive : les 1000 ans représentent l'Église militante depuis l'Incarnation jusqu'à la fin du monde. Le règne du Christ est spirituel, non temporel." },
      { name: "Pape Pie XII", work: "Humani generis (1950)", contribution: "Condamne les formes modernes de millénarisme (« restitutisme »)." },
    ],

    canonicalResponse:
      "Pie XII, Humani generis (1950). CIC 1364 §1.",
    canonicalReferences: ["CIC 1364 §1", "Humani generis (1950)"],
    refutations: [
      {
        source: "Saint Augustin, « Cité de Dieu », XX, 7",
        latin:
          "Ecclesia ipsum est regnum millium annorum, quod non est temporale, sed spiritaliter intelligendum.",
      },
      {
        source: "Pape Pie XII, Encyclique « Humani generis » (1950)",
        latin: "In re messianica temporalia, non restituta, Christi regnum iam in Ecclesia est.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Pie XII",
        year: 1950,
        document: "Encyclique « Humani generis »",
      },
    ],
    connections: [],
    keywords: ["mille ans", "apocalypse", "chiliasme", "augustin"],
  },

  // ===== HÉRÉSIES MODERNES (XIXe-XXe siècle) =====
  {
    slug: "modernisme",
    name: "Modernisme",
    nameLatin: "Modernismus",
    category: HeresyCategory.ECCLESIOLOGICAL,
    century: 20,
    origin: "Europe (France, Italie, Allemagne)",
    promoter: "Alfred Loisy, George Tyrrell, Friedrich von Hügel",

    description:
      "Le modernisme, qualifié de « synthèse de toutes les hérésies » par Pie X, enseigne que le dogme évolue avec les époques, que la foi est un sentiment intérieur et non un assentiment intellectuel à des vérités révélées, et que la critique historique peut rejeter les miracles et la résurrection. Il est la racine intellectuelle de toutes les erreurs de Vatican II.",
    error:
      "Le dogme évolue avec les époques ; la foi est un sentiment, non un assentiment intellectuel ; les vérités religieuses sont des symboles de l'expérience intérieure.",

    historicalContext:
      "À la fin du XIXe siècle, la confrontation entre la foi catholique et la pensée moderne (positivisme, évolutionnisme, criticisme kantien) provoque une crise intellectuelle. Alfred Loisy, exégète français, applique la méthode historico-critique aux Écritures. George Tyrrell, jésuite anglais, développe un modernisme théologique. Le pape Pie X qualifie le modernisme de « synthèse de toutes les hérésies ».",
    theologicalIssues:
      "Le modernisme réduit le dogme à une « formule » évolutive, la foi à un « sentiment » intérieur, et la Révélation à la « conscience » de sa relation avec Dieu. Il nie le surnaturel objectif (miracles, résurrection) et réinterprète les dogmes comme des symboles de l'expérience religieuse. La vérité n'est pas immuable mais évolue avec l'humanité.",
    development:
      "Loisy publie ses thèses dans les années 1890-1900. Le décret « Lamentabili » (1907) condamne 65 propositions. L'encyclique « Pascendi » (1907) réfute systématiquement le modernisme. Le serment antimoderniste (1910) est imposé à tous les clercs. Pie XII confirme les condamnations (Humani generis, 1950). Le serment est aboli en 1967.",
    consequences:
      "Le modernisme a profondément marqué la théologie catholique. La méthode historico-critique, condamnée sous sa forme radicale, a été réhabilitée par Vatican II (Dei Verbum). Le serment antimoderniste a été supprimé en 1967. Beaucoup considèrent que les erreurs modernistes ont triomphé au Concile Vatican II.",

    churchFathersDetailed: [
      { name: "Pape Pie X", work: "Pascendi Dominici Gregis (1907)", contribution: "Réfutation magistrale du modernisme : analyse de l'immanentisme religieux, de l'évolution du dogme, et de la critique historique rejetant le surnaturel." },
      { name: "Saint Pie X", work: "Lamentabili Sane Exitu (1907)", contribution: "Condamnation de 65 propositions modernistes sur les Écritures, les dogmes, les sacrements et l'Église." },
    ],

    canonicalResponse:
      "Le droit canonique de 1917 (CIC 1917, can. 1324, 1325, 2314) condamne le modernisme. Le serment antimoderniste est imposé. CIC 1364 §1 s'applique. Le CIC 750 §1 rappelle l'assentiment de foi aux vérités révélées.",
    canonicalReferences: ["CIC 750 §1", "CIC 1364 §1", "Pascendi Dominici Gregis (1907)", "Lamentabili Sane Exitu (1907)"],
    refutations: [
      {
        source: "Pape Pie X, Encyclique « Pascendi Dominici Gregis » (1907)",
        latin:
          "Modernismus est compendium omnium hæresium. Qui modernismum amplectitur, is omnia dogmata catholica destruit.",
      },
      {
        source: "Pape Pie X, « Lamentabili Sane Exitu » (1907)",
        latin:
          "Ecclesia non debet præcepta ferre quæ homines adstringunt, nisi sub gravi necessitate et in rebus fidei et morum.",
      },
      {
        source: "Pape Pie X, Motu Proprio « Sacrorum Antistitum » (1910)",
        latin:
          "Juro me modernismum, prout a Pio X damnatus est, omnino rejicere, et ad errores ejus non accedere.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Pie X",
        year: 1907,
        document: "Encyclique « Pascendi Dominici Gregis »",
        canons: [
          "Condamnation du modernisme comme « synthèse de toutes les hérésies »",
          "Condamnation de l'immanentisme religieux",
          "Condamnation de l'évolution du dogme",
          "Condamnation de la critique historique rejetant le surnaturel",
        ],
      },
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Pie X",
        year: 1907,
        document: "Décret « Lamentabili Sane Exitu »",
        canons: [
          "Condamnation de 65 propositions modernistes",
          "Prop. 20 : « La Révélation n'est rien d'autre que la conscience acquise par l'homme de sa relation avec Dieu » — Condamnée",
          "Prop. 22 : « Les dogmes que l'Église propose comme révélés ne sont pas des vérités tombées du ciel, mais une interprétation de faits religieux » — Condamnée",
          "Prop. 58 : « La vérité n'est pas plus immuable que l'homme lui-même » — Condamnée",
        ],
      },
      {
        type: CondemnationType.PAPAL_BULL,
        authority: "Pape Pie X",
        year: 1910,
        document: "Motu Proprio « Sacrorum Antistitum » (Serment antimoderniste)",
      },
    ],
    connections: [
      { slug: "liberalisme-catholique", type: "succeeded" },
      { slug: "indifferentisme", type: "related" },
    ],
    keywords: ["pascendi", "modernisme", "evolution dogme", "immanentisme", "loi-sy", "pie-x"],
  },
  {
    slug: "liberalisme-catholique",
    name: "Libéralisme catholique",
    nameLatin: "Liberalismus catholicus",
    category: HeresyCategory.ECCLESIOLOGICAL,
    century: 19,
    origin: "France, Europe",
    promoter: "Lamennais, Montalembert, Dupanloup, Lacordaire",

    description:
      "Le libéralisme catholique enseigne que la liberté de conscience et la séparation de l'Église et de l'État sont légitimes et même souhaitables. Il prétend que l'Église doit s'adapter aux idées modernes de liberté, démocratie et progrès. C'est le précurseur direct de la liberté religieuse de Vatican II (Dignitatis Humanae).",
    error:
      "La liberté de conscience est un droit ; l'Église doit s'allier aux idées modernes de liberté ; la séparation de l'Église et de l'État est légitime.",

    historicalContext:
      "Après la Révolution française, des catholiques cherchent un compromis avec les idées libérales. Lamennais, prêtre breton, publie « Paroles d'un croyant » (1834), un manifeste libéral mystique. Montalembert, Dupanloup et Lacordaire représentent le catholicisme libéral français. Le Syllabus de Pie IX (164) condamne les principes libéraux.",
    theologicalIssues:
      "La liberté de conscience comme « droit naturel » contredit l'obligation de professer la vraie religion. L'Église ne peut pas reconnaître un « droit à l'erreur ». La séparation de l'Église et de l'État prive la société de la lumière de la foi. Le libéralisme catholique contredit les encycliques « Mirari Vos », « Quanta Cura » et le Syllabus.",
    development:
      "Lamennais publie « Paroles d'un croyant » (1834) et est condamné par Grégoire XVI (Singulari Nos). Le Syllabus de Pie IX (1864) condamne 80 propositions libérales. Léon XIII cherche un compromis (ralliement) mais condamne le libéralisme doctrinal (Libertas, 1888). Le libéralisme catholique mène au modernisme.",
    consequences:
      "Le Syllabus de 1864 est devenu la référence antilibérale. La liberté religieuse de Vatican II (Dignitatis Humanae, 1965) est vue par les traditionalistes comme une adoption du libéralisme condamné.",

    churchFathersDetailed: [
      { name: "Pape Grégoire XVI", work: "Mirari Vos (1832)", contribution: "Condamne la liberté de conscience comme « délice » (delirium) et l'indifférentisme religieux." },
      { name: "Pape Pie IX", work: "Quanta Cura et Syllabus (1864)", contribution: "Condamnation systématique des erreurs modernes, y compris la liberté de conscience, la liberté de la presse, et le rationalisme." },
      { name: "Pape Léon XIII", work: "Libertas Praestantissimum (1888)", contribution: "Analyse la liberté humaine et distingue la liberté légitime (soumise à la vérité) de la liberté libérale (autonome)." },
    ],

    canonicalResponse:
      "CIC 748 §1 affirme l'obligation de professer la vraie religion. CIC 1364 §2 condamne le schisme. Les encycliques antilibérales ont force de magistère ordinaire.",
    canonicalReferences: ["CIC 748 §1", "CIC 1364 §2", "Mirari Vos (1832)", "Quanta Cura (1864)", "Syllabus Errorum (1864)"],
    refutations: [
      {
        source: "Pape Grégoire XVI, Encyclique « Mirari Vos » (1832)",
        latin:
          "Ex hac putidissima indifferentismi fonte, absurdum illud ac erroneum, seu potius delirium emanat, liberum cuique esse, religionem, qua rationis lumine quis ductus, veram putaverit, amplecti.",
      },
      {
        source: "Pape Pie IX, « Quanta Cura » et Syllabus (1864)",
        latin:
          "Si quis dixerit, hominem ad religionem amplectendam obligari, quæ rationis ductu verissima sit : anathema sit.",
      },
      {
        source: "Pape Léon XIII, « Libertas Praestantissimum » (1888)",
        latin:
          "Libertas, ut philosophi appellant et recentiores prædicant, est ea facultas qua quis potest, sine ullo externo impedimento, ad ea quæ velit, se convertere. Atqui hæc, si prave intelligatur, ut solet, est omnino perniciosa.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Grégoire XVI",
        year: 1832,
        document: "Encyclique « Mirari Vos »",
        canons: [
          "Condamnation de la liberté de conscience comme « délice » (delirium)",
          "Condamnation de l'indifférentisme religieux",
          "Condamnation de la liberté de la presse",
        ],
      },
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Pie IX",
        year: 1864,
        document: "Encyclique « Quanta Cura » et Syllabus Errorum",
        canons: [
          "Prop. 15 : « Tout homme est libre d'embrasser la religion que sa raison lui dicte » — Condamnée",
          "Prop. 77 : « De nos jours, il est plus utile de rechercher le concours de l'État pour la religion » — Condamnée",
          "Prop. 78 : « L'Église doit séparer l'État de la religion » — Condamnée",
          "Prop. 79 : « La liberté de conscience est un droit de tout homme » — Condamnée",
          "Prop. 80 : « Le pape doit se réconcilier avec le progrès, le libéralisme et la civilisation moderne » — Condamnée",
        ],
      },
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Léon XIII",
        year: 1888,
        document: "Encyclique « Libertas Praestantissimum »",
      },
    ],
    connections: [
      { slug: "modernisme", type: "preceded" },
      { slug: "indifferentisme", type: "related" },
    ],
    keywords: ["liberalisme", "liberte conscience", "mirari vos", "syllabus", "lamennais"],
  },
  {
    slug: "indifferentisme",
    name: "Indifférentisme religieux",
    nameLatin: "Indifferentismus religiosus",
    category: HeresyCategory.ECCLESIOLOGICAL,
    century: 19,
    origin: "France, Europe des Lumières",
    promoter: "Philosophes des Lumières, Voltaire, Condorcet",

    description:
      "L'indifférentisme religieux enseigne que toutes les religions se valent, qu'il n'y a pas de vraie religion objective, et que chaque homme est libre de choisir sa religion ou d'en changer selon sa convenance. C'est la source du faux œcuménisme de Vatican II et de la déclaration Nostra Aetate.",
    error:
      "Toutes les religions se valent ; le choix de la religion est une affaire de préférence personnelle ; l'Église catholique n'est pas la seule vraie religion.",

    historicalContext:
      "L'indifférentisme naît des Lumières européennes (XVIIIe siècle). Voltaire, Condorcet et les philosophes considèrent les religions comme des constructions humaines équivalentes. Ce rationalisme religieux s'oppose directement à la doctrine de l'Église comme seule voie de salut.",
    theologicalIssues:
      "Si toutes les religions se valent, la Révélation chrétienne n'a pas de valeur supérieure, l'Incarnation est un mythe parmi d'autres, et le sacrifice de la Croix est un événement sans importance universelle. L'indifférentisme nie la nature surnaturelle de la foi et la nécessité de l'Église pour le salut.",
    development:
      "Les philosophes des Lumières propagent l'indifférentisme au XVIIIe siècle. Le Concile de Florence (1442) avait déjà condamné l'idée que les non-catholiques puissent être sauvés. Grégoire XVI (Mirari Vos, 1832) et Pie IX (Syllabus, 1864) condamnent l'indifférentisme. Vatican II (Nostra Aetate, 1965) est accusé de verser dans l'indifférentisme en reconnaissant des « semences de vérité » dans les autres religions.",
    consequences:
      "La doctrine constante de l'Église affirme « Extra Ecclesiam nulla salus » (hors de l'Église, point de salut). Vatican II nuance cette formule mais ne la supprime pas. Les traditionalistes maintiennent que l'indifférentisme est incompatible avec la foi catholique.",

    churchFathersDetailed: [
      { name: "Concile de Florence", work: "Cantate Domino (1442)", contribution: "Décret dogmatique : « L'Église romaine croit fermement, professe et prêche que hors de l'Église catholique, non seulement les païens, mais aussi les juifs, les hérétiques et les schismatiques ne peuvent être sauvés. »" },
      { name: "Pape Grégoire XVI", work: "Mirari Vos (1832)", contribution: "Condamne l'indifférentisme comme source de « l'absurde et erronée folie » (delirium) de la liberté de conscience." },
      { name: "Pape Pie IX", work: "Syllabus, Propositions 15-18 (1864)", contribution: "Condamnation de l'indifférentisme sous toutes ses formes." },
    ],

    canonicalResponse:
      "CIC 748 §1 : « Nul ne peut être sauvé hors de l'Église catholique. » CIC 1364 §1 pour l'hérésie. Le décret de Florence est un dogme de foi.",
    canonicalReferences: ["CIC 748 §1", "CIC 1364 §1", "Cantate Domino (1442)", "Mirari Vos (1832)", "Syllabus (1864)"],
    refutations: [
      {
        source: "Concile de Florence, « Cantate Domino » (1442)",
        latin:
          "Sancta Romana Ecclesia firmiter credit, profitetur et prædicat, nullos extra catholicam Ecclesiam existentes, non solum paganos, sed nec Judæos aut hæreticos atque schismaticos, æternam vitam posse consequi.",
      },
      {
        source: "Pape Grégoire XVI, « Mirari Vos » (1832)",
        latin:
          "Ex hoc indifferentismi fonte, absurdum illud ac erroneum, seu potius delirium emanat.",
      },
      {
        source: "Pape Pie IX, Syllabus, Prop. 16 (1864)",
        latin:
          "Homines potuerunt, in diversis cultibus, quibus singuli informantur, æternam salutem consequi. — Damnata.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.COUNCIL,
        authority: "Concile de Florence",
        year: 1442,
        document: "Décret « Cantate Domino »",
        canons: [
          "Hors de l'Église catholique, personne — païens, juifs, hérétiques ou schismatiques — ne peut être sauvé",
        ],
      },
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Grégoire XVI",
        year: 1832,
        document: "Encyclique « Mirari Vos »",
      },
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Pie IX",
        year: 1864,
        document: "Syllabus Errorum, Prop. 15-18",
        canons: [
          "Prop. 15 : « Tout homme est libre de professer la religion qu'il juge vraie » — Condamnée",
          "Prop. 16 : « Les hommes peuvent être sauvés dans n'importe quel culte » — Condamnée",
          "Prop. 17 : « On peut au moins espérer la vie éternelle pour ceux qui ne vivent pas dans la vraie Église » — Condamnée",
          "Prop. 18 : « Le protestantisme n'est qu'une forme différente de la vraie religion » — Condamnée",
        ],
      },
    ],
    connections: [
      { slug: "liberalisme-catholique", type: "related" },
      { slug: "modernisme", type: "related" },
    ],
    keywords: ["indifferentisme", "tolerance", "toutes religions", "oecumenisme", "nostra aetate"],
  },
  {
    slug: "faux-oecumenisme",
    name: "Faux Œcuménisme",
    nameLatin: "Œcumenismus falsus",
    category: HeresyCategory.ECCLESIOLOGICAL,
    century: 20,
    origin: "Rome, Vatican II",
    promoter: "Concile Vatican II (Unitatis Redintegratio, Nostra Aetate), Conseil Œcuménique des Églises",

    description:
      "Le faux œcuménisme enseigne que l'unité des chrétiens se réalise par le dialogue entre égaux, que les communautés séparées (protestantes, orthodoxes) sont des « moyens de salut », et que l'Église catholique doit « rénover » et « réformer » pour s'approcher des autres confessions. C'est contraire à la doctrine constante que l'unité ne se réalise que par le retour des séparés à l'Église catholique.",
    error:
      "L'unité chrétienne par le dialogue entre égaux ; les communautés séparées sont des moyens de salut ; l'Église doit se réformer pour s'approcher des autres confessions.",

    historicalContext:
      "Au XXe siècle, le mouvement œcuménique protestant (Conseil Œcuménique des Églises, 1948) pousse l'Église catholique à participer au dialogue interconfessionnel. Vatican II adopte le langage œcuménique (Unitatis Redintegratio, 1964) et reconnaît des « éléments d'Église » dans les communautés séparées. Les traditionalistes considèrent que cette approche trahit la doctrine constante de « Extra Ecclesiam nulla salus ».",
    theologicalIssues:
      "Le vrai œcuménisme consiste dans le retour des séparés à l'Église catholique (Mortalium Animos, 1928). Le faux œcuménisme inverse le mouvement : l'Église catholique se « rapproche » des communautés séparées comme si elle avait quelque chose à « réformer ». Les communautés protestantes ne sont pas des « moyens de salut » car elles manquent de la hiérarchie, des sacrements et de la foi complète.",
    development:
      "Pie XI condamne les premières conférences œcuméniques (Mortalium Animos, 1928). Vatican II adopte le langage œcuménique (Unitatis Redintegratio, 1964). Les Assises de Bologne (1977) et les réunions interreligieuses de Jean-Paul II à Assise (1986, 2002) sont considérées comme des actes de faux œcuménisme par les traditionalistes.",
    consequences:
      "Le faux œcuménisme est considéré comme l'une des causes de la crise post-conciliaire : l'œcuménisme a conduit à l'indifférentisme, à la perte de la foi dans la primauté de l'Église catholique, et à la dégradation du culte pour « plaire » aux protestants.",

    churchFathersDetailed: [
      { name: "Pape Pie XI", work: "Mortalium Animos (1928)", contribution: "Condamnation définitive du faux œcuménisme : « Il n'est permis à personne de favoriser de tels rassemblements, car on favorise alors ceux qui s'éloignent de la vraie religion. »" },
      { name: "Pape Pie IX", work: "Syllabus, Proposition 18 (1864)", contribution: "Condamne la proposition : « Le protestantisme n'est qu'une forme différente de la vraie religion. »" },
    ],

    canonicalResponse:
      "CIC 751 définit le schisme comme le refus de la soumission au pape. CIC 1364 §2 condamne le schisme. La participation active aux cultes non-catholiques est interdite (CIC 844, 1365).",
    canonicalReferences: ["CIC 751", "CIC 1364 §2", "CIC 844", "CIC 1365", "Mortalium Animos (1928)"],
    refutations: [
      {
        source: "Pape Pie XI, Encyclique « Mortalium Animos » (1928)",
        latin:
          "Vix cuiquam licet favere tali conventiculorum congressui. Nam si facit, fovet eos qui a vera religione aberrant, fovet pessimam illam indifferentismi in rebus religionis opinionem.",
      },
      {
        source: "Concile de Florence, « Cantate Domino » (1442)",
        latin:
          "Nullus extra catholicam Ecclesiam, non solum paganos, sed nec Judæos aut hæreticos atque schismaticos, æternam vitam consequi.",
      },
      {
        source: "Pape Pie IX, Syllabus, Prop. 18 (1864)",
        latin:
          "Protestantismus non aliud est quam diversa verae religionis forma, in qua æque ac in Ecclesia catholica Deo placere datum est. — Damnata.",
      },
    ],
    condemnations: [
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Pie XI",
        year: 1928,
        document: "Encyclique « Mortalium Animos »",
        canons: [
          "Condamnation des réunions œcuméniques comme favorisant l'indifférentisme",
          "L'Église catholique ne peut pas participer à des « conférences » œcuméniques comme un parmi d'autres",
          "Le retour des séparés à l'Église catholique est la seule voie vers l'unité",
        ],
      },
      {
        type: CondemnationType.ENCYCLICAL,
        authority: "Pape Pie IX",
        year: 1864,
        document: "Syllabus Errorum, Prop. 18",
      },
    ],
    connections: [
      { slug: "indifferentisme", type: "succeeded" },
      { slug: "modernisme", type: "related" },
    ],
    keywords: ["oecumenisme", "unite chretienne", "mortalium animos", "dialogue", "nostra aetate", "unitatis redintegratio"],
  },
];

/**
 * Helpers
 */
export const getHeresyBySlug = (slug: string): Heresy | undefined =>
  heresies.find(h => h.slug === slug);

export const getHeresiesByCategory = (category: HeresyCategory): Heresy[] =>
  heresies.filter(h => h.category === category);

export const getHeresiesByCentury = (century: number): Heresy[] =>
  heresies.filter(h => h.century === century);

export const searchHeresies = (query: string): Heresy[] => {
  const q = query.toLowerCase();
  return heresies.filter(
    h =>
      h.name.toLowerCase().includes(q) ||
      h.nameLatin?.toLowerCase().includes(q) ||
      h.promoter.toLowerCase().includes(q) ||
      h.keywords.some(k => k.toLowerCase().includes(q))
  );
};
