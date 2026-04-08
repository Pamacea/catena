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

  // Réfutation
  refutations: HeresyRefutation[];

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
