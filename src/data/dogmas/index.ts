/**
 * Dogmas et Vérités de Foi
 * Les dogmes définis par l'Église catholique à travers les conciles œcuméniques,
 * les bulles pontificales et les encycliques.
 */

export enum DogmaCategory {
  TRINITARIAN = "TRINITARIAN",
  CHRISTOLOGICAL = "CHRISTOLOGICAL",
  MARIOLOGICAL = "MARIOLOGICAL",
  SOTERIOLOGICAL = "SOTERIOLOGICAL",
  ECCLESIOLOGICAL = "ECCLESIOLOGICAL",
  SACRAMENTAL = "SACRAMENTAL",
  ESCHATOLOGICAL = "ESCHATOLOGICAL",
  ANTHROPOLOGICAL = "ANTHROPOLOGICAL",
}

export interface DogmaSource {
  authority: string;
  document: string;
  year: number;
}

export interface CouncilDetail {
  council: string;
  session?: string;
  canon?: string;
  decree: string;
}

export interface Dogma {
  slug: string;
  name: string;
  nameLatin?: string;
  category: DogmaCategory;
  definition: string;
  explanation: string;
  sources: DogmaSource[];
  biblicalReferences: string[];
  keywords: string[];
  historicalContext?: string;
  theologicalBasis?: string;
  councilDetails?: CouncilDetail[];
  canonicalReferences?: string[];
  patristicFoundations?: string[];
  pastoralApplication?: string;
  relatedDogmas?: string[];
}

export const dogmaCategoryLabels: Record<DogmaCategory, { name: string; description: string }> = {
  [DogmaCategory.TRINITARIAN]: {
    name: "Trinitaires",
    description: "Dogmes relatifs au mystère de la Sainte Trinité",
  },
  [DogmaCategory.CHRISTOLOGICAL]: {
    name: "Christologiques",
    description: "Dogmes relatifs à la personne et à l'œuvre de Jésus-Christ",
  },
  [DogmaCategory.MARIOLOGICAL]: {
    name: "Mariologiques",
    description: "Dogmes relatifs à la Bienheureuse Vierge Marie",
  },
  [DogmaCategory.SOTERIOLOGICAL]: {
    name: "Sotériologiques",
    description: "Dogmes relatifs au salut, à la grâce et à la rédemption",
  },
  [DogmaCategory.ECCLESIOLOGICAL]: {
    name: "Ecclésiologiques",
    description: "Dogmes relatifs à la nature et à la constitution de l'Église",
  },
  [DogmaCategory.SACRAMENTAL]: {
    name: "Sacramentelles",
    description: "Dogmes relatifs aux saints sacrements",
  },
  [DogmaCategory.ESCHATOLOGICAL]: {
    name: "Eschatologiques",
    description: "Dogmes relatifs aux fins dernières et à la vie éternelle",
  },
  [DogmaCategory.ANTHROPOLOGICAL]: {
    name: "Anthropologiques",
    description: "Dogmes relatifs à la nature de l'homme et à la loi naturelle",
  },
};

export const dogmas: Dogma[] = [
  // ═══════════════════════════════════════════════
  // TRINITÉ
  // ═══════════════════════════════════════════════
  {
    slug: "sainte-trinite",
    name: "Sainte Trinité",
    nameLatin: "Sancta Trinitas",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Il n'y a qu'un seul Dieu, mais en trois personnes distinctes : le Père, le Fils et le Saint-Esprit, consubstantielles et coéternelles.",
    explanation:
      "Le mystère de la Trinité est le fondement de la foi chrétienne. Un seul Dieu en trois personnes, non pas trois dieux, mais un seul Dieu qui existe éternellement en trois relations subsistantes. Le Père est sans origine, le Fils est engendré par le Père, le Saint-Esprit procède du Père et du Fils. Chaque personne est pleinement Dieu, possédant la même nature divine, la même puissance et la même gloire.",
    sources: [
      { authority: "Concile de Nicée I", document: "Symbole de Nicée", year: 325 },
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
      {
        authority: "Concile de Latran IV",
        document: "Constitution Firmiter",
        year: 1215,
      },
    ],
    biblicalReferences: ["Mt 28:19", "2 Co 13:13", "Jn 1:1", "Gn 1:26", "Dt 6:4"],
    keywords: ["trinité", "trois personnes", "un seul dieu", "père", "fils", "saint-esprit"],
    historicalContext: "Le dogme de la Trinité s'est développé dans les premiers siècles de l'Église face aux hérésies ariennes et modalistes. Les premiers conciles œcuméniques (Nicée I en 325, Constantinople I en 381) ont formulé le credo trinitaire pour protéger la foi apostolique contre ceux qui niaient soit la divinité du Fils, soit la distinction des personnes.",
    theologicalBasis: "Le fondement théologique repose sur la Révélation divine : le Fils est engendré par le Père, le Saint-Esprit procède du Père et du Fils. La Trinité est un mystère inaccessible à la seule raison, mais rendu connaissable par la révélation du Christ. Les trois personnes sont distinctes par leurs relations d'origine (paternité, filiation, procession) mais unies en une seule nature divine.",
    councilDetails: [
      { council: "Concile de Nicée I", canon: "Symbole de Nicée", decree: "Le Fils est consubstantiel (homoousios) au Père, engendré non créé." },
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Le Saint-Esprit est Seigneur et donne la vie, il procède du Père." },
      { council: "Concile de Latran IV", canon: "Firmiter", decree: "Il n'y a qu'une seule vraie Dieu, éternel, immense, immuable, incompréhensible, Père et Fils et Saint-Esprit." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 204"],
    patristicFoundations: [
      "Saint Athanase, Orations against the Arians : « Le Père et le Fils sont un, non par confusion de personne, mais par unité de nature. »",
      "Saint Basile, De Spiritu Sancto : « L'Esprit est inséparablement uni au Père et au Fils dans la confession de foi. »",
      "Saint Augustin, De Trinitate : « Les trois personnes sont un seul Dieu, et ce n'est pas par la grandeur mais par la nature qu'ils sont égaux. »",
      "Saint Grégoire de Nazianze, Discours 31 : « Aucune des trois personnes n'est antérieure aux autres en gloire ni en éternité. »",
    ],
    pastoralApplication: "La foi trinitaire structure toute la vie chrétienne : le baptême est administré « au nom du Père, du Fils et du Saint-Esprit » (Mt 28:19). La prière chrétienne s'adresse au Père, par le Fils, dans l'Esprit. La liturgie est une action de la Trinité : le Père reçoit la louange, le Fils est offert en sacrifice, l'Esprit sanctifie les fidèles.",
    relatedDogmas: ["divinite-du-fils", "divinite-du-saint-esprit", "procession-du-fils", "procession-du-saint-esprit", "circumincession"],
  },
  {
    slug: "divinite-du-fils",
    name: "Divinité du Fils",
    nameLatin: "Divinitas Filii",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Le Fils (Verbe) est consubstantiel au Père (όμοούσιος τῷ Πατρί), vrai Dieu né du vrai Dieu, engendré non créé.",
    explanation:
      "Le Fils n'est pas une créature, ni inférieur au Père. Il est de même substance que le Père, engendré éternellement par le Père avant tous les siècles. « Dieu de Dieu, Lumière de Lumière, vrai Dieu de vrai Dieu ». Cette vérité fut définie au Concile de Nicée en 325 contre l'hérésie arienne qui niait la divinité du Fils.",
    sources: [
      { authority: "Concile de Nicée I", document: "Symbole de Nicée", year: 325 },
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
    ],
    biblicalReferences: ["Jn 1:1-3", "Jn 10:30", "Jn 14:9-11", "Col 1:15-17", "Hé 1:3"],
    keywords: ["consubstantiel", "fils", "verbe", "engendré", "divinité", "arius"],
    historicalContext: "L'arianisme, fondé par le prêtre Arius d'Alexandrie (vers 280-336), soutenait que le Fils était une créature, certes la plus noble, mais inférieure au Père et créée à partir de rien. Cette hérésie menaçait tout l'édifice chrétien : si le Fils n'est pas Dieu, alors la Rédemption n'a pas de valeur divine. Le Concile de Nicée fut convoqué spécifiquement pour condamner cette erreur.",
    theologicalBasis: "Le terme grec homoousios (consubstantiel) fut adopté à Nicée pour exprimer que le Fils est de même substance que le Père. Cela implique : égalité de nature (le Fils est Dieu autant que le Père), éternité de l'engendrement (le Fils n'a jamais « commencé » d'exister), et distinction personnelle (le Fils n'est pas le Père).",
    councilDetails: [
      { council: "Concile de Nicée I", session: "Session plénière", canon: "Symbole de Nicée", decree: "Dieu de Dieu, Lumière de Lumière, vrai Dieu de vrai Dieu, engendré non créé, consubstantiel au Père." },
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Confirmé et complété le symbole de Nicée contre les ariens résiduels et les pneumatomaques." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Athanase, De Incarnatione Verbi : « Le Verbe s'est fait homme pour que nous devenions dieux. »",
      "Saint Irénée de Lyon, Adversus Haereses : « Le Fils est coéternel au Père ; Il était au commencement avec Dieu. »",
      "Saint Hilaire de Poitiers, De Trinitate : « Le Fils est dans le Père et le Père est dans le Fils par la nature, non par une union de volonté. »",
    ],
    pastoralApplication: "La divinité du Fils garantit que le salut est véritablement divin : Dieu lui-même est venu sauver l'humanité. Chaque eucharistie actualise ce mystère : c'est le corps véritable du Dieu vivant qui est offert sur l'autel. La dévotion au Christ-Sauveur repose sur cette certitude de foi.",
    relatedDogmas: ["sainte-trinite", "incarnation", "union-hypostatique", "theotokos", "resurrection-du-christ"],
  },
  {
    slug: "divinite-du-saint-esprit",
    name: "Divinité du Saint-Esprit",
    nameLatin: "Divinitas Spiritus Sancti",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Le Saint-Esprit est Seigneur et qui donne la vie, il procède du Père et du Fils, il est adoré et glorifié avec le Père et le Fils.",
    explanation:
      "Le Saint-Esprit est pleinement Dieu, la troisième personne de la Trinité. Il n'est pas inférieur au Père ni au Fils. Il est celui qui sanctifie l'Église et les âmes, qui inspire les prophètes, et qui demeure dans le cœur des fidèles. Sa divinité fut confirmée au Concile de Constantinople I (381) contre les pneumatomaques qui le réduisaient à une créature.",
    sources: [
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
    ],
    biblicalReferences: ["Jn 14:26", "Jn 15:26", "Ac 5:3-4", "2 Co 3:17", "Rm 8:9-11"],
    keywords: ["saint-esprit", "donateur de vie", "sanctificateur", "procède", "divinité"],
    historicalContext: "Le pneumatomaquie (combatteurs de l'Esprit) menés par Macédonius, patriarche de Constantinople (vers 360), niaient la divinité du Saint-Esprit, le réduisant à une créature ou à une force impersonnelle. Le Concile de Constantinople I (381) condamna cette hérésie et compléta le symbole de Nicée en affirmant explicitement la divinité et la personne du Saint-Esprit.",
    theologicalBasis: "Le Saint-Esprit est la troisième personne de la Trinité, distincte du Père et du Fils par sa procession. Il est « Seigneur et donne la vie » — les attributs divins (seigneurie, vivification) lui sont pleinement reconnus. Il procède du Père (Jn 15:26) et du Fils (Filioque), et son action dans le monde est de sanctifier, d'inspirer et de conduire l'Église.",
    councilDetails: [
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Nous croyons en l'Esprit-Saint, Seigneur et vivifiant, qui procède du Père, qui avec le Père et le Fils est adoré et glorifié." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 849"],
    patristicFoundations: [
      "Saint Basile, De Spiritu Sancto : « L'Esprit est compté avec le Père et le Fils dans la profession de foi baptismale ; c'est pourquoi il est Dieu. »",
      "Saint Grégoire de Nazianze, Lettre 58 : « L'Esprit est Dieu, de même nature que le Père et le Fils. »",
      "Saint Cyrille de Jérusalem, Catéchèses : « L'Esprit-Saint sonde les profondeurs de Dieu, comme l'esprit de l'homme sonde les profondeurs de l'homme. »",
    ],
    pastoralApplication: "La confirmation sacramentelle actualise l'effusion du Saint-Esprit sur le fidèle. La prière « Venez Esprit-Saint » est une invocation constante dans la vie liturgique. Les charismes de l'Esprit (parole de sagesse, guérison, prophétie) sont des manifestations concrètes de sa présence agissante dans l'Église.",
    relatedDogmas: ["sainte-trinite", "procession-du-saint-esprit", "grace-actuelle", "grace-sanctifiante"],
  },
  {
    slug: "procession-du-fils",
    name: "Engendrement du Fils",
    nameLatin: "Generatio Filii",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Le Fils est engendré par le Père de toute éternité, par une génération intellectuelle, non par création.",
    explanation:
      "Le Fils tire son existence du Père non par un acte créateur, mais par une engendrement éternelle. Comme la pensée procède de l'esprit sans que l'esprit soit divisé, ainsi le Verbe est engendré par le Père. Cet engendrement est éternel : il n'y a jamais eu un temps où le Fils n'était pas. Le Fils est « lumière de lumière » — il reçoit tout du Père tout en étant Dieu parfait.",
    sources: [
      { authority: "Concile de Nicée I", document: "Symbole de Nicée", year: 325 },
      {
        authority: "IVe Concile du Latran",
        document: "Constitution Firmiter",
        year: 1215,
      },
    ],
    biblicalReferences: ["Jn 1:14", "Jn 1:18", "Ps 2:7", "Hé 1:5-6", "Col 1:15"],
    keywords: ["engendrement", "génération", "fils", "père", "éternel", "verbe"],
    historicalContext: "La question de l'engendrement du Fils est au cœur de la théologie trinitaire. Les Pères de l'Église ont dû clarifier que cet engendrement est éternel et intellectuel (non charnel), pour réfuter les accusations païennes d'anthropomorphisme et les hérésies ariennes qui prétendaient que le Fils avait eu un commencement.",
    theologicalBasis: "L'engendrement du Fils est une relation éternelle d'origine au sein de la Trinité. Le Fils tire son existence du Père, mais sans que cela implique un commencement temporel ni une infériorité de nature. La génération est intellectuelle : comme la pensée procède de l'esprit sans le diviser, ainsi le Verbe (Logos) est engendré par le Père. Le Fils reçoit tout du Père, mais il est coéternel et consubstantiel.",
    councilDetails: [
      { council: "Concile de Nicée I", canon: "Symbole de Nicée", decree: "Engendré du Père avant tous les siècles, Dieu de Dieu, Lumière de Lumière." },
      { council: "IVe Concile du Latran", canon: "Firmiter", decree: "Le Fils est engendré du Père seul, éternellement et sans commencement." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Jean Damascène, De Fide Orthodoxa : « L'engendrement est l'éternelle et constante volonté et action du Père par laquelle il produit le Verbe. »",
      "Saint Augustin, De Trinitate : « Le Fils est la connaissance que le Père a de lui-même, et cette connaissance est coéternelle au Père. »",
    ],
    pastoralApplication: "La méditation sur l'engendrement éternel du Fils invite à contempler l'amour trinitaire. Le Père qui engendre le Fils est le modèle de toute paternité (Ep 3:15). La générosité du Père envers le Fils est la source de la générosité divine envers les créatures.",
    relatedDogmas: ["sainte-trinite", "divinite-du-fils", "procession-du-saint-esprit"],
  },
  {
    slug: "procession-du-saint-esprit",
    name: "Procession du Saint-Esprit",
    nameLatin: "Processio Spiritus Sancti",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Le Saint-Esprit procède du Père et du Fils (Filioque) comme d'un seul principe.",
    explanation:
      "Le Saint-Esprit n'est pas engendré comme le Fils, mais il procède du Père et du Fils par voie d'amour. Le Père et le Fils s'aiment d'un amour éternel, et cet amour subsistant est le Saint-Esprit. Le terme « Filioque » (« et du Fils ») fut ajouté au Credo au Concile de Tolède III (589) et confirmé par le pape Benoît VIII en 1014. Ce dogme est rejeté par les Orthodoxes, ce qui constitue un des points de division majeurs.",
    sources: [
      { authority: "Concile de Tolède III", document: "Profession de foi", year: 589 },
      { authority: "Concile de Lyon II", document: "Constitution Ubi filius", year: 1274 },
      {
        authority: "Concile de Florence",
        document: "Décret pour les Grecs",
        year: 1439,
      },
    ],
    biblicalReferences: ["Jn 15:26", "Jn 16:7", "Jn 14:16-17", "Rm 8:9", "Ga 4:6"],
    keywords: ["filioque", "procession", "saint-esprit", "amour", "père", "fils"],
    historicalContext: "La question du Filioque est l'une des causes majeures du schisme de 1054 entre l'Église latine et l'Église byzantine. Les latins ajoutèrent « et du Fils » (Filioque) au symbole de Nicée-Constantinople, affirmant que l'Esprit procède du Père ET du Fils. Les orthodoxes maintiennent que l'Esprit procède du Père seul (monopatisme). Ce différend théologique a des implications profondes sur la compréhension des relations trinitaires.",
    theologicalBasis: "Le Filioque repose sur Jn 15:26 (« l'Esprit qui procède du Père ») et sur l'ensemble de l'Écriture qui montre l'Esprit comme « Esprit du Fils » (Ga 4:6) et « Esprit du Christ » (Rm 8:9). Si l'Esprit procédait du Père seul, la différence entre l'engendrement du Fils et la procession de l'Esprit serait inexplicable. Le Filioque manifeste que le Fils coopère avec le Père dans la procession de l'Esprit, sans être un « deuxième principe » indépendant.",
    councilDetails: [
      { council: "Concile de Tolède III", canon: "Profession de foi", decree: "L'Esprit procède du Père et du Fils (primum Filioque)." },
      { council: "Concile de Lyon II", canon: "Ubi filius", decree: "Le Saint-Esprit procède éternellement du Père et du Fils, non comme de deux principes, mais comme d'un seul." },
      { council: "Concile de Florence", canon: "Décret pour les Grecs", decree: "Le Saint-Esprit procède éternellement du Père et du Fils, et il tire son essence et son être subsistant en même temps du Père et du Fils." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Trinitate : « L'Esprit est aussi du Fils, car il est appelé Esprit de vérité, et le Fils dit : 'Je suis la vérité'. »",
      "Saint Fulgence de Ruspe, De Fide : « Le Saint-Esprit procède du Père et du Fils, et il est la substance de la charité des deux. »",
    ],
    pastoralApplication: "Le Filioque souligne que l'Esprit qui agit dans l'Église et dans les âmes est l'Esprit même du Christ ressuscité. Chaque grâce reçue vient du Père par le Fils dans l'Esprit Saint. La réconciliation avec les Orthodoxes sur ce point reste un enjeu œcuménique majeur.",
    relatedDogmas: ["sainte-trinite", "divinite-du-saint-esprit", "procession-du-fils", "circumincession"],
  },
  {
    slug: "circumincession",
    name: "Circumincession (Périchorèse)",
    nameLatin: "Circuminsessio",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Les trois personnes divines habitent l'une dans l'autre, chacune contenant et pénétrant les deux autres.",
    explanation:
      "La circumincession (ou périchorèse) exprime la communion intime des trois personnes divines. Chaque personne est en relation avec les deux autres, si bien que l'une est dans l'autre sans confusion. Le Père est tout entier dans le Fils et l'Esprit, le Fils tout entier dans le Père et l'Esprit, l'Esprit tout entier dans le Père et le Fils. Cette indwelling mutuelle est ce qui fonde l'unité de Dieu malgré la distinction des personnes.",
    sources: [
      {
        authority: "Concile de Constantinople II",
        document: "Définitions trinitaires",
        year: 553,
      },
    ],
    biblicalReferences: ["Jn 14:10-11", "Jn 10:38", "Jn 17:21"],
    keywords: ["circumincession", "périchorèse", "indwelling", "trinité", "relations"],
    historicalContext: "Le concept de circumincession (perichoresis en grec) fut développé par les Pères de l'Église pour exprimer la communion intime des trois personnes divines. Il fut systématisé par Jean Damascien au VIIIe siècle et repris par la théologie médiévale (saint Thomas d'Aquin) pour protéger l'unité de Dieu tout en maintenant la distinction des personnes.",
    theologicalBasis: "La circumincession signifie que chaque personne divine contient et pénètre les deux autres. Cela garantit l'unité de nature : les trois personnes ne sont pas « côte à côte » mais « l'une dans l'autre ». Le Père est tout entier dans le Fils et l'Esprit, le Fils tout entier dans le Père et l'Esprit, l'Esprit tout entier dans le Père et le Fils. Cette mutuelle indwelling est la forme la plus intime de communion possible.",
    councilDetails: [
      { council: "Concile de Constantinople II", canon: "Définitions trinitaires", decree: "Les trois personnes divines sont unies dans une communion substantielle et éternelle." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Jean Damascien, De Fide Orthodoxa : « Chaque personne divine contient les deux autres par la périchorèse, et les trois ne sont qu'un par la nature, la puissance et l'activité. »",
      "Saint Augustin, De Trinitate : « Ces trois sont un par l'essence, égaux par la co-éternité, et unis par une mutuelle communion. »",
    ],
    pastoralApplication: "La périchorèse trinitaire est le modèle de la communion ecclésiale et de la vie chrétienne. Comme les trois personnes s'aiment et se pénètrent mutuellement, les chrétiens sont appelés à vivre dans une communion d'amour. Le mystère de l'Eucharistie actualise cette communion : le Christ s'offre au Père dans l'Esprit, et nous sommes unis à cette offrande.",
    relatedDogmas: ["sainte-trinite", "divinite-du-fils", "divinite-du-saint-esprit", "procession-du-fils", "procession-du-saint-esprit"],
  },

  // ═══════════════════════════════════════════════
  // CHRISTOLOGIE
  // ═══════════════════════════════════════════════
  {
    slug: "incarnation",
    name: "Incarnation du Verbe",
    nameLatin: "Incarnatio Verbi",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Le Verbe éternel de Dieu s'est incarné en prenant une nature humaine dans le sein de la Vierge Marie, par l'opération du Saint-Esprit.",
    explanation:
      "Par amour pour l'humanité, la deuxième personne de la Trinité s'est faite homme sans cesser d'être Dieu. Jésus-Christ est véritablement Dieu et véritablement homme. Il a une nature divine et une nature humaine, unies en une seule personne divine (l'hypostase du Verbe). Ce mystère est au cœur de la foi chrétienne : « Dieu s'est fait homme pour que l'homme devienne Dieu » (Saint Athanase).",
    sources: [
      { authority: "Concile de Nicée I", document: "Symbole de Nicée", year: 325 },
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
      { authority: "Concile de Chalcédoine", document: "Définition de Chalcédoine", year: 451 },
    ],
    biblicalReferences: ["Jn 1:14", "Ph 2:5-8", "Hé 2:14", "1 Tm 3:16", "Ga 4:4"],
    keywords: ["incarnation", "verbe", "chair", "homme-dieu", "mystère"],
    historicalContext: "L'Incarnation du Verbe est au cœur de la foi chrétienne depuis les origines. Les premières controverses christologiques (docétisme, arianisme, nestorianisme, monophysisme) ont forcé l'Église à préciser le mystère de l'union de la nature divine et humaine en la personne du Christ. Les quatre grands conciles christologiques (Nicée, Constantinople, Éphèse, Chalcédoine) ont défini les contours orthodoxes de ce mystère.",
    theologicalBasis: "L'Incarnation est un mystère de la Trinité : c'est le Père qui envoie le Fils, le Fils qui s'incarne, et l'Esprit qui opère la conception. Le Verbe assume la nature humaine « pour nous les hommes et pour notre salut » (Symbole de Nicée). L'union hypostatique signifie que la nature humaine du Christ n'a pas de subsistance propre : elle subsiste dans la personne divine du Verbe.",
    councilDetails: [
      { council: "Concile de Nicée I", canon: "Symbole de Nicée", decree: "Pour nous les hommes et pour notre salut, il descendit du ciel ; par l'Esprit Saint, il a pris chair de la Vierge Marie et s'est fait homme." },
      { council: "Concile de Chalcédoine", canon: "Définition de Chalcédoine", decree: "Un seul et même Christ, Fils, Seigneur, l'unique, connu en deux natures, sans confusion, sans changement, sans division, sans séparation." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 204 §1", "CIC can. 879"],
    patristicFoundations: [
      "Saint Athanase, De Incarnatione Verbi : « Le Verbe s'est fait homme afin que nous devenions participants de la nature divine. »",
      "Saint Irénée de Lyon, Adversus Haereses : « Dieu s'est fait homme pour que l'homme soit uni à Dieu. »",
      "Saint Léon le Grand, Lettre à Flavien : « Chaque nature opère en communion avec l'autre ce qui lui est propre : le Verbe opérant ce qui est propre au Verbe, la chair accomplissant ce qui est propre à la chair. »",
    ],
    pastoralApplication: "L'Incarnation donne sens à la vie sacramentelle : le Dieu qui s'est fait chair continue de se donner sous les espèces du pain et du vin. La dignité de la personne humaine est fondée sur l'Incarnation : Dieu a tant aimé le monde qu'il a pris notre nature. La prière et la méditation de la vie du Christ sont rendues possibles parce que Dieu a vécu notre condition humaine.",
    relatedDogmas: ["sainte-trinite", "double-nature-du-christ", "union-hypostatique", "theotokos", "redemption"],
  },
  {
    slug: "double-nature-du-christ",
    name: "Double nature du Christ",
    nameLatin: "Duae naturae Christi",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Jésus-Christ possède deux natures parfaites — divine et humaine — sans confusion, sans changement, sans division, sans séparation.",
    explanation:
      "Les deux natures du Christ sont unies en une seule personne sans que l'une absorbe l'autre. Le Christ est vrai Dieu (nature divine) et vrai homme (nature humaine, avec un corps, une âme raisonnable, une volonté). Les quatre adverbes de Chalcédoine (sans confusion, sans changement, sans division, sans séparation) protègent ce mystère contre toute déformation : ni le mélange des natures (monophysisme), ni leur séparation (nestorianisme).",
    sources: [
      { authority: "Concile de Chalcédoine", document: "Définition de Chalcédoine", year: 451 },
      {
        authority: "Concile de Constantinople II",
        document: "Anathèmes contre les Trois Chapitres",
        year: 553,
      },
    ],
    biblicalReferences: ["Col 2:9", "Rm 9:5", "Jn 1:1-14", "1 Jn 4:2", "Ph 2:6-7"],
    keywords: ["deux natures", "chalcédoine", "vrai dieu", "vrai homme", "hypostase"],
    historicalContext: "La définition de Chalcédoine (451) fut nécessaire pour condamner simultanément deux erreurs opposées : le nestorianisme (qui séparait les deux natures en deux personnes) et le monophysisme (qui fusionnait les deux natures en une seule). Le concile forgea la formule des « quatre adverbes » pour exprimer le mystère sans le déformer.",
    theologicalBasis: "Les deux natures du Christ (divine et humaine) sont unies en une seule personne (hypostase) du Verbe. La nature humaine est complète (corps, âme raisonnable, volonté humaine), tout comme la nature divine est pleine. Les deux natures agissent conjointement dans la personne du Verbe : « l'une et l'autre nature opère ce qui lui est propre en communion avec l'autre » (Saint Léon le Grand).",
    councilDetails: [
      { council: "Concile de Chalcédoine", session: "Session V", canon: "Définition de Chalcédoine", decree: "Un seul et même Christ, Fils, Seigneur, l'unique, en deux natures sans confusion, sans changement, sans division, sans séparation." },
      { council: "Concile de Constantinople II", canon: "Anathèmes contre les Trois Chapitres", decree: "Il faut confesser un seul Christ en deux natures, sans mélange ni division." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Léon le Grand, Tome : « Chaque nature conserve ses propriétés sans aucun défaut, et comme la forme de l'esclave ne diminue pas la gloire de la forme divine, ainsi la forme divine n'ajoute rien à la forme de l'esclave. »",
      "Saint Cyrille d'Alexandrie, Deuxième lettre à Nestorius : « Le Verbe, hypostase unique, a uni à lui-même selon l'hypostase une chair animée d'une âme raisonnable. »",
    ],
    pastoralApplication: "La double nature du Christ permet aux fidèles de contempler en Jésus un Dieu qui connaît véritablement la souffrance, la joie, la fatigue et la mort humaines. La dévotion au Christ souffrant (via crucis) repose sur la certitude que c'est véritablement Dieu qui a souffert dans sa nature humaine.",
    relatedDogmas: ["incarnation", "union-hypostatique", "theotokos", "impeccabilite-du-christ"],
  },
  {
    slug: "union-hypostatique",
    name: "Union hypostatique",
    nameLatin: "Unio hypostatica",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Les deux natures du Christ sont unies en la seule personne (hypostase) du Verbe, sans former une troisième nature.",
    explanation:
      "L'union hypostatique signifie que la nature humaine du Christ n'a pas de subsistance propre : elle subsiste dans la personne divine du Verbe. C'est le Verbe qui est le sujet de tout ce que Jésus fait et souffre, tant dans ses actions divines que dans ses actions humaines. Marie est donc véritablement Mère de Dieu (Theotokos), car celui qu'elle a enfanté est Dieu.",
    sources: [
      { authority: "Concile d'Éphèse", document: "Anathèmes contre Nestorius", year: 431 },
      { authority: "Concile de Chalcédoine", document: "Définition de Chalcédoine", year: 451 },
    ],
    biblicalReferences: ["Jn 1:14", "Col 2:9", "Hé 2:11-14"],
    keywords: ["hypostase", "union", "personne", "verbe", "nature humaine"],
    historicalContext: "L'union hypostatique fut définie au Concile d'Éphèse (431) contre Nestorius, qui enseignait que le Christ était composé de deux personnes (une divine, une humaine) unies par une simple union morale. Le Concile de Chalcédoine (451) précisa que l'union se fait en la personne (hypostase) du Verbe, sans former une troisième nature (comme le prétendait Eutychès).",
    theologicalBasis: "L'union hypostatique est une union ontologique (d'être), non une union de volonté ou d'action. La nature humaine du Christ n'existe pas « en soi » mais « dans » la personne divine du Verbe. Cette union est éternelle : elle ne peut être dissoute. C'est pourquoi Marie est véritablement Theotokos (Mère de Dieu) : elle a enfanté non pas une personne humaine, mais la personne divine du Verbe incarné.",
    councilDetails: [
      { council: "Concile d'Éphèse", canon: "Anathèmes contre Nestorius", decree: "Si quelqu'un ne confesse pas que le Verbe est uni hypostatiquement à la chair, qu'il soit anathème." },
      { council: "Concile de Chalcédoine", canon: "Définition de Chalcédoine", decree: "L'union des deux natures s'est faite sans confusion, sans changement, sans division, sans séparation." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Cyrille d'Alexandrie, Troisième lettre à Nestorius : « L'union s'est faite selon l'hypostase, non selon une relation d'affection ou de disposition. »",
      "Saint Jean Damascien, De Fide Orthodoxa : « L'union hypostatique est l'union en une seule hypostase de ce qui préexistait en deux natures. »",
    ],
    pastoralApplication: "L'union hypostatique garantit que le Christ que nous rencontrons dans les sacrements est pleinement Dieu et pleinement homme. La dévotion au Sacré-Cœur honore le cœur physique de Jésus, qui est véritablement le cœur de Dieu fait homme. Chaque parole de Jésus dans l'Évangile est parole divine prononcée avec une bouche humaine.",
    relatedDogmas: ["incarnation", "double-nature-du-christ", "theotokos", "resurrection-du-christ"],
  },
  {
    slug: "theotokos",
    name: "Marie, Mère de Dieu (Theotokos)",
    nameLatin: "Theotokos",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "La Bienheureuse Vierge Marie est véritablement Mère de Dieu (Theotokos), car elle a conçu et enfanté Jésus-Christ, qui est Dieu.",
    explanation:
      "Le titre de Theotokos (Porte-Dieu / Mère de Dieu) ne signifie pas que Marie a créé la nature divine, mais qu'elle a enfanté la personne du Verbe incarné. Puisque Jésus est une seule personne — divine — tout ce qui appartient à ses deux natures peut être attribué à cette unique personne. Marie est donc mère de Dieu selon la chair. Ce dogme fut défini au Concile d'Éphèse (431) contre Nestorius qui voulait l'appeler seulement « Christotokos ».",
    sources: [
      { authority: "Concile d'Éphèse", document: "Anathèmes contre Nestorius", year: 431 },
      { authority: "Concile de Chalcédoine", document: "Définition de Chalcédoine", year: 451 },
    ],
    biblicalReferences: ["Lc 1:43", "Lc 1:35", "Lc 2:7", "Ga 4:4", "Mt 1:23"],
    keywords: ["theotokos", "mère de dieu", "marie", "éphèse", "nestorius"],
    historicalContext: "Le titre de Theotokos fut au cœur de la controverse nestorienne. Nestorius, patriarche de Constantinople (428-431), refusait ce titre, préférant « Christotokos » (Mère du Christ), car il pensait que Marie ne pouvait être mère de la nature divine. Le peuple chrétien de Constantinople protesta, et le Concile d'Éphèse (431) trancha en faveur de Theotokos.",
    theologicalBasis: "Le titre de Theotokos est un dogme christologique, pas seulement mariologique. Il affirme l'unité de la personne du Christ : puisque Jésus est une seule personne (divine), et que Marie est mère de cette personne, elle est mère de Dieu. Cela ne signifie pas qu'elle a créé la nature divine, mais qu'elle a enfanté la personne du Verbe incarné.",
    councilDetails: [
      { council: "Concile d'Éphèse", canon: "Anathèmes contre Nestorius", decree: "Marie est véritablement Mère de Dieu (Theotokos), car elle a conçu et enfanté le Verbe incarné." },
      { council: "Concile de Chalcédoine", canon: "Définition", decree: "Confirmation du titre de Theotokos." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 1186"],
    patristicFoundations: [
      "Saint Grégoire de Nazianze, Lettre 101 : « Si quelqu'un n'admet pas que la sainte Marie est Mère de Dieu, il est séparé de Dieu. »",
      "Saint Augustin, De Virginitate : « Marie est plus bienheureuse en ayant reçu la foi du Christ que d'avoir conçu la chair du Christ. »",
    ],
    pastoralApplication: "Le titre de Theotokos fonde la dévotion mariale dans l'Église catholique : Marie est honorée comme Mère de Dieu, mais aussi comme Mère de l'Église et Mère de chaque chrétien. La fête de Marie, Mère de Dieu (1er janvier) honore ce mystère. Le rosaire médite les mystères de la vie du Christ à travers le cœur de sa Mère.",
    relatedDogmas: ["incarnation", "union-hypostatique", "immaculee-conception", "assomption", "marie-mere-eglise"],
  },
  {
    slug: "resurrection-du-christ",
    name: "Résurrection corporelle du Christ",
    nameLatin: "Resurrectio corporalis Christi",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Jésus-Christ est ressuscité corporellement d'entre le morts le troisième jour, vainqueur de la mort et du péché.",
    explanation:
      "La résurrection du Christ n'est pas un simple « retour à la vie » comme les résurrections de Lazaire. C'est une entrée dans une vie nouvelle, glorieuse, incorruptible. Son corps ressuscité est le même corps qui a été crucifié, mais transfiguré : il n'est plus soumis aux limitations physiques (il traverse les portes fermés, apparaît et disparaît). La résurrection est le fondement de notre espérance : « Si le Christ n'est pas ressuscité, vaine est notre foi » (1 Co 15:14).",
    sources: [
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
      {
        authority: "Concile de Latran IV",
        document: "Profession de foi",
        year: 1215,
      },
    ],
    biblicalReferences: ["1 Co 15:3-8", "Mt 28:1-10", "Lc 24:1-12", "Jn 20:1-18", "Rm 1:4"],
    keywords: ["résurrection", "corps glorieux", "pâques", "victoire", "mort vaincue"],
    historicalContext: "La résurrection du Christ est l'événement fondateur de la foi chrétienne. Les apôtres, témoins directs de la résurrection, en ont fait le cœur de leur prédication (Ac 2:24-32). Les premières hérésies niant la résurrection corporelle (docètes, gnostiques) furent condamnées par les Pères de l'Église et par le symbole de Nicée-Constantinople.",
    theologicalBasis: "La résurrection n'est pas un simple retour à la vie terrestre (comme Lazare), mais une entrée dans un mode d'existence nouveau, glorieux et incorruptible. Le corps ressuscité est le même que celui crucifié, mais transfiguré : il n'est plus soumis aux lois physiques. La résurrection est la preuve de la divinité du Christ (Rm 1:4) et le fondement de notre propre espérance de résurrection (1 Co 15:20-23).",
    councilDetails: [
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Il est ressuscité le troisième jour, selon les Écritures." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Paul, 1 Corinthiens 15 : « Si le Christ n'est pas ressuscité, vaine est notre prédication, vaine aussi votre foi. »",
      "Saint Justin, Apologie : « Le Christ, par sa résurrection, a brisé la puissance de la mort et a ouvert à l'humanité la voie de la vie éternelle. »",
      "Saint Augustin, Sermon 261 : « La résurrection du Christ est le fondement de l'espérance chrétienne ; sans elle, nous serions encore dans nos péchés. »",
    ],
    pastoralApplication: "La résurrection du Christ est le fondement de la liturgie dominicale : chaque dimanche célèbre la Pâque du Seigneur. La veillée pascale est la nuit sainte par excellence. L'espérance de la résurrection des morts soutient les fidèles face à la mort et à la souffrance : « Je sais que mon Rédempteur est vivant » (Jb 19:25).",
    relatedDogmas: ["incarnation", "retour-glorieux", "resurrection-morts", "vision-beatifique"],
  },
  {
    slug: "ascension",
    name: "Ascension du Christ",
    nameLatin: "Ascensio Christi",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Jésus-Christ est monté au ciel en corps et en âme quarante jours après sa résurrection, et siège à la droite du Père.",
    explanation:
      "L'Ascension marque la fin des apparitions du Ressuscité et le début de sa glorification céleste. Le Christ, avec son corps ressuscité, est entré dans le sanctuaire du ciel pour y être notre avocat auprès du Père. Il règne en attendant de revenir juger les vivants et les morts. L'Ascension ouvre aussi le temps de l'Église et l'envoi du Saint-Esprit à la Pentecôte.",
    sources: [
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
    ],
    biblicalReferences: ["Ac 1:9-11", "Mc 16:19", "Lc 24:50-53", "Hé 9:24", "Ph 2:9"],
    keywords: ["ascension", "ciel", "droite du père", "glorification", "quarante jours"],
    historicalContext: "L'Ascension est mentionnée dans les Actes des Apôtres (1:9-11) et dans les évangiles (Mc 16:19, Lc 24:50-53). Elle marque la fin des apparitions du Ressuscité et le début de l'Église. Les Pères de l'Église y voient la glorification de l'humanité du Christ : en montant au ciel, le Christ emporte notre nature humaine dans la gloire divine.",
    theologicalBasis: "L'Ascension signifie que le Christ, avec son corps ressuscité, est entré dans le sanctuaire céleste pour y être notre avocat auprès du Père (1 Jn 2:1). Il siège à la droite du Père, expression biblique qui signifie la participation au pouvoir et à la gloire divins. Le Christ ne règne pas seulement « spirituellement » mais corporellement : son humanité glorifiée est le gage de notre propre glorification.",
    councilDetails: [
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Il est monté au ciel, est assis à la droite du Père." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Léon le Grand, Sermon 74 : « Ce qui était visible dans le Christ a été élevé dans la gloire ; désormais, il n'est plus possible de le chercher dans les lieux terrestres. »",
      "Saint Augustin, Traité sur l'Évangile de Jean : « En montant au ciel, le Christ n'a pas abandonné la terre : il est présent partout par sa divinité, et il demeure au ciel par sa chair. »",
    ],
    pastoralApplication: "L'Ascension ouvre le temps de l'Église et prépare la Pentecôte. La fête de l'Ascension (40 jours après Pâques) invite les chrétiens à « chercher les choses d'en haut » (Col 3:1-2) tout en vivant leur mission terrestre. Le Credo affirme notre foi en un Christ qui reviendra.",
    relatedDogmas: ["resurrection-du-christ", "retour-glorieux", "sainte-trinite"],
  },
  {
    slug: "retour-glorieux",
    name: "Retour glorieux du Christ (Parousie)",
    nameLatin: "Secundus adventus Domini",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Jésus-Christ reviendra dans la gloire pour juger les vivants et les morts, et son règne n'aura pas de fin.",
    explanation:
      "Le Credo affirme : « Il reviendra dans la gloire pour juger les vivants et les morts ». La Parousie (avènement définitif) est la venue finale du Christ à la fin des temps. Il se manifestera visiblement dans sa gloire, accompagné de tous les anges. Tous les morts ressusciteront et seront jugés. Ce jour est certain mais son heure est inconnue : « Veillez et priez, car vous ne savez ni le jour ni l'heure ».",
    sources: [
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
    ],
    biblicalReferences: ["Ac 1:11", "Mt 25:31-46", "1 Th 4:16-17", "Ap 1:7", "Mc 13:26-27"],
    keywords: ["parousie", "retour", "jugement", "fin des temps", "gloire"],
    historicalContext: "L'attente du retour glorieux du Christ est présente dès les origines du christianisme. Les premiers chrétiens croyaient que la Parousie était imminente (1 Th 4:15-17). Au fil des siècles, l'Église a précisé que le jour du Seigneur est inconnu (Ac 1:7) et que l'attente doit se vivre dans la vigilance et l'espérance, non dans l'angoisse.",
    theologicalBasis: "Le retour glorieux du Christ est un article du Credo : « Il reviendra dans la gloire pour juger les vivants et les morts ». Ce retour sera visible, universel et définitif. Le Christ se manifestera dans sa gloire, accompagné des anges. Tous les morts ressusciteront et seront jugés. Ce jugement définitif consommera l'histoire humaine et manifestera la victoire totale du bien sur le mal.",
    councilDetails: [
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Il reviendra dans la gloire pour juger les vivants et les morts, et son règne n'aura pas de fin." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Justin, Dialogue avec Tryphon : « Jésus-Christ, qui a souffert et est mort, reviendra du ciel dans la gloire avec son armée angélique. »",
      "Saint Irénée de Lyon, Adversus Haereses : « Le Seigneur viendra avec gloire pour rassembler les justes et les introduire dans le Royaume des cieux. »",
    ],
    pastoralApplication: "L'attente du retour du Christ inspire la vigilance évangélique : « Veillez, car vous ne savez ni le jour ni l'heure » (Mt 25:13). Cette espérance donne sens à la souffrance : tout sera restauré au dernier jour. L'Église prie « Maranatha » (Viens, Seigneur Jésus !) en attendant la Parousie.",
    relatedDogmas: ["resurrection-du-christ", "resurrection-morts", "jugement-dernier", "jugement-particulier"],
  },
  {
    slug: "connaissance-du-christ",
    name: "Connaissance humaine du Christ",
    nameLatin: "Scientia animae Christi",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "L'âme humaine du Christ jouit de la vision béatifique dès le premier instant de son existence.",
    explanation:
      "En tant qu'homme, le Christ possède une âme humaine avec un intellect créé. Mais cette âme, dès l'instant de l'Incarnation, voit Dieu face à face (vision béatifique). Cela lui donne une connaissance parfaite des réalités divines. Il possède aussi la science infuse (connaissance de toutes les choses créables) et la science expérimentale acquise par l'expérience humaine. Cette triple connaissance fait du Christ le « témoin fidèle ».",
    sources: [
      { authority: "Concile de Vienne", document: "Fidei catholicae", year: 1312 },
      {
        authority: "Pie XII",
        document: "Encyclique Mystici Corporis",
        year: 1943,
      },
    ],
    biblicalReferences: ["Jn 2:25", "Jn 6:61", "Jn 16:30", "Jn 18:4", "Col 2:3"],
    keywords: ["connaissance", "vision béatifique", "science", "âme du christ"],
    historicalContext: "La question de la connaissance du Christ a été débattue au Moyen Âge, notamment entre Thomas d'Aquin et les franciscains (Duns Scot, Bonaventure). Thomas enseignait la triple connaissance (béatifique, infuse, expérimentale). Le Concile de Vienne (1312) définit que l'âme du Christ jouit de la vision béatifique dès le premier instant de l'Incarnation.",
    theologicalBasis: "En tant qu'homme, le Christ possède une âme humaine avec un intellect créé. Mais cette âme, dès l'incarnation, voit Dieu face à face (vision béatifique). Cela lui donne une connaissance parfaite des réalités divines. Il possède aussi la science infuse (connaissance de toutes les choses créables) et la science expérimentale acquise par l'expérience humaine. Cette triple connaissance fait du Christ le « témoin fidèle » (Ap 3:14).",
    councilDetails: [
      { council: "Concile de Vienne", canon: "Fidei catholicae", decree: "L'âme du Christ, dès le premier instant de sa création et de son union au Verbe, a connu Dieu par la vision béatifique." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Thomas d'Aquin, Somme théologique III, q.9-12 : « Le Christ, en tant qu'homme, connaît toutes choses créées par la vision béatifique et la science infuse. »",
    ],
    pastoralApplication: "La connaissance du Christ garantit que Jésus, dans les Évangiles, enseigne avec une autorité divine tout en parlant un langage humain accessible. Chaque parole de Jésus est à la fois parfaitement vraie (science divine) et parfaitement adaptée à ses auditeurs (science humaine).",
    relatedDogmas: ["incarnation", "double-nature-du-christ", "union-hypostatique"],
  },
  {
    slug: "impeccabilite-du-christ",
    name: "Impeccabilité du Christ",
    nameLatin: "Impeccantia Christi",
    category: DogmaCategory.CHRISTOLOGICAL,
    definition:
      "Jésus-Christ, en tant que personne divine, ne pouvait pas pécher, bien qu'il ait pu souffrir et être tenté.",
    explanation:
      "Puisque le péché est un acte de la volonté contre la raison divine, et que la personne du Christ est le Verbe incréé, il est impossible que le Christ ait péché. Il a pu être tenté (Mt 4), car il possède une volonté humaine véritable, mais il n'a jamais consenti au mal. Ses tentations révèlent sa véritable humanité tout en manifestant sa victoire permanente sur le péché.",
    sources: [
      {
        authority: "Concile de Constantinople II",
        document: "Anathèmes christologiques",
        year: 553,
      },
    ],
    biblicalReferences: ["Hé 4:15", "Hé 7:26", "1 P 2:22", "2 Co 5:21", "1 Jn 3:5"],
    keywords: ["impeccabilité", "sans péché", "tenté", "victoire", "sainteté"],
    historicalContext: "La question de l'impeccabilité du Christ a été débattue dans la théologie médiévale. Le Concile de Constantinople II (553) avait déjà condamné ceux qui disaient que le Christ pouvait pécher. La tradition catholique distingue entre la possibilité abstraite de la tentation (le Christ a une volonté humaine véritable) et l'impossibilité réelle du péché (la personne du Christ est divine).",
    theologicalBasis: "Le Christ, en tant que personne divine (le Verbe), ne pouvait pas pécher. Le péché est un acte de la volonté contre la raison divine, et la personne du Christ étant le Verbe incréé, il lui est impossible de se détourner de Dieu. Cependant, le Christ possède une volonté humaine véritable (dyothélitisme), et cette volonté peut être « tentée » — elle peut éprouver la répulsion face à la souffrance (Gethsémani : « Que cette coupe passe loin de moi »). Mais elle s'unit toujours à la volonté divine.",
    councilDetails: [
      { council: "Concile de Constantinople II", canon: "Anathèmes christologiques", decree: "Le Christ a pu être tenté dans sa nature humaine, mais n'a jamais péché." },
    ],
    canonicalReferences: ["CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Augustin, De Peccatorum Meritis : « Le Christ a pu ne pas pécher, et il n'a pas pu péché — la première par sa nature humaine, la seconde par sa nature divine. »",
      "Saint Léon le Grand, Lettre à Flavien : « Chaque nature opère ce qui lui est propre avec la coopération de l'autre : le Verbe fait ce qui est propre au Verbe, la chair fait ce qui est propre à la chair. »",
    ],
    pastoralApplication: "L'impeccabilité du Christ garantit qu'il est l'Agneau sans tache, le sacrifice parfait offert pour les péchés du monde. Sa sainteté parfaite est le modèle et la source de la sainteté des chrétiens : « Soyez saints, comme votre Père céleste est saint » (Mt 5:48).",
    relatedDogmas: ["incarnation", "double-nature-du-christ", "peche-originel", "redemption"],
  },

  // ═══════════════════════════════════════════════
  // MARIOLOGIE
  // ═══════════════════════════════════════════════
  {
    slug: "immaculee-conception",
    name: "Immaculée Conception",
    nameLatin: "Immaculata Conceptio",
    category: DogmaCategory.MARIOLOGICAL,
    definition:
      "La Bienheureuse Vierge Marie, dès le premier instant de sa conception, a été, par une grâce singulière de Dieu et en vue des mérites de Jésus-Christ, préservée de toute tache de péché originel.",
    explanation:
      "Marie a été conçue comme tout être humain, par l'union de ses parents (Anne et Joachim, selon la tradition). Mais, par un privilège unique accordé en prévision des mérites du Christ, elle a été préservée du péché originel dès le premier instant de son existence. Ce n'est pas qu'elle n'ait pas eu besoin du Christ — au contraire, c'est par le Christ qu'elle a été rachetée de manière préventive. Le dogme fut proclamé par Pie IX le 8 décembre 1854.",
    sources: [
      {
        authority: "Pie IX",
        document: "Bulle Ineffabilis Deus",
        year: 1854,
      },
    ],
    biblicalReferences: ["Lc 1:28", "Lc 1:42", "Gn 3:15"],
    keywords: ["immaculée conception", "sans péché", "marie", "grâce", "privilège"],
    historicalContext: "La croyance en l'Immaculée Conception remonte aux Pères de l'Église, notamment Saint Éphrem et Saint Augustin. La controverse médiévale entre franciscains (favorables, dont Duns Scot) et dominicains (réticents, dont Thomas d'Aquin) se résolut par la bulle Ineffabilis Deus de Pie IX le 8 décembre 1854, qui définit solennellement le dogme.",
    theologicalBasis: "L'Immaculée Conception est un privilège unique accordé à Marie en prévision des mérites du Christ. Marie a été « rachetée de manière préventive » : au lieu d'être guérie du péché originel après l'avoir contracté, elle en a été préservée dès le premier instant de sa conception. Ce privilège est lié à sa maternité divine : celle qui porte le Fils de Dieu devait être digne de cette mission.",
    councilDetails: [
      { council: "Pie IX", canon: "Ineffabilis Deus", decree: "Marie, dès le premier instant de sa conception, a été, par une grâce singulière de Dieu et en vue des mérites de Jésus-Christ, préservée de toute tache de péché originel." },
    ],
    canonicalReferences: ["CIC can. 1186", "CIC can. 1246 §1"],
    patristicFoundations: [
      "Saint Éphrem, Hymnes : « Tu es tout entière pure, Seigneur, et en toi il n'y a nulle souillure, pas même la moindre tache. »",
      "Saint Augustin, De Natura et Gratia : « Pour l'honneur du Seigneur, je ne veux pas que l'on discute jamais la question du péché à propos de la sainte Vierge Marie. »",
      "Duns Scot, Opus Oxoniense : « Il fut plus parfait que Dieu ait préservé Marie du péché originel plutôt que de la guérir après. »",
    ],
    pastoralApplication: "La fête de l'Immaculée Conception (8 décembre) est d'obligation dans l'Église catholique. Marie Immaculée est invoquée comme patronne de la France (depuis 1638), des États-Unis (depuis 1846), et de de nombreuses nations. La médaille miraculeuse, révélée à Sainte Catherine Labouré en 1830, porte l'inscription « Ô Marie conçue sans péché, priez pour nous qui avons recours à vous ».",
    relatedDogmas: ["virginite-perpetuelle", "assomption", "marie-mere-eglise", "theotokos", "peche-originel"],
  },
  {
    slug: "virginite-perpetuelle",
    name: "Virginité perpétuelle de Marie",
    nameLatin: "Virginitas perpetua Mariae",
    category: DogmaCategory.MARIOLOGICAL,
    definition:
      "Marie est vierge avant, pendant et après l'enfantement de Jésus-Christ. Elle n'a eu aucun autre enfant.",
    explanation:
      "Marie est demeurée vierge toute sa vie. Avant l'enfantement : elle n'a connu aucun homme (conception virginale). Pendant l'enfantement : l'accouchement fut miraculeux, sans rupture de l'hymen (partus virginalis). Après l'enfantement : elle n'a jamais eu de relations conjugales avec Joseph. Les « frères du Seigneur » mentionnés dans l'Écriture sont des cousins ou des proches, selon la tradition catholique constante.",
    sources: [
      {
        authority: "Concile de Latran I",
        document: "Profession de foi",
        year: 649,
      },
      {
        authority: "Concile de Constantinople II",
        document: "Anathèmes",
        year: 553,
      },
    ],
    biblicalReferences: ["Lc 1:34", "Mt 1:25", "Ez 44:2", "Is 7:14"],
    keywords: ["virginité", "perpétuelle", "avant", "pendant", "après", "enfantement"],
    historicalContext: "La virginité perpétuelle de Marie fut affirmée dès les premiers siècles par les Pères de l'Église et les premiers conciles. Le Concile de Latran I (649) et le Concile de Constantinople II (553) la définirent explicitement contre les hérétiques qui, comme Helvidius au IVe siècle, prétendaient que Marie avait eu d'autres enfants après Jésus.",
    theologicalBasis: "La virginité de Marie est triple : ante partum (conception virginale par l'Esprit Saint), in partum (accouchement miraculeux sans rupture de l'hymen — partus virginalis), et post partum (aucune relation conjugale ultérieure). Les « frères du Seigneur » (Mc 6:3, Mt 13:55-56) sont des cousins ou proches parents, selon la constante tradition catholique.",
    councilDetails: [
      { council: "Concile de Latran I", canon: "Profession de foi", decree: "Marie est vierge avant, pendant et après l'enfantement de Jésus-Christ." },
      { council: "Concile de Constantinople II", canon: "Anathèmes", decree: "Si quelqu'un ne confesse pas que Marie est toujours vierge, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 1186"],
    patristicFoundations: [
      "Saint Jérôme, Contre Helvidius : « Marie est vierge avant l'enfantement, pendant l'enfantement et après l'enfantement. Je dirai plus : elle est vierge éternellement. »",
      "Saint Augustin, De Virginitate : « Marie a conçu par la foi sans connaître d'homme ; elle a enfanté sans corruption ; elle est demeurée vierge après l'enfantement. »",
    ],
    pastoralApplication: "La virginité perpétuelle de Marie est proclamée dans le Credo : « conçu par l'œuvre du Saint-Esprit, né de la Vierge Marie ». La dévotion à Marie Vierge inspire la vocation à la chasteté et à la pureté. La fête de la Nativité de Marie (8 septembre) honore sa naissance dans la pureté.",
    relatedDogmas: ["immaculee-conception", "theotokos", "assomption", "incarnation"],
  },
  {
    slug: "assomption",
    name: "Assomption de Marie",
    nameLatin: "Assumptio Beatae Mariae Virginis",
    category: DogmaCategory.MARIOLOGICAL,
    definition:
      "L'Immaculée Mère de Dieu, Marie, ayant terminé le cours de sa vie terrestre, a été élevée corps et âme à la gloire céleste.",
    explanation:
      "Marie n'a pas connu la corruption du tombeau. Son corps, qui avait porté le Verbe incarné, a été glorifié et uni à son âme dans la gloire du ciel. Ce dogme est la conséquence logique de l'Immaculée Conception : exempte du péché, Marie n'avait pas à subir sa conséquence qu'est la mort. Toutefois, elle a vécu l'expérience humaine de la mort (le « dormition ») avant d'être glorifiée. Le dogme fut proclamé par Pie XII le 1er novembre 1950.",
    sources: [
      {
        authority: "Pie XII",
        document: "Constitution apostolique Munificentissimus Deus",
        year: 1950,
      },
    ],
    biblicalReferences: ["Gn 3:15", "Lc 1:28", "Ap 12:1", "Ps 132:8"],
    keywords: ["assomption", "corps et âme", "gloire", "ciel", "glorification"],
    historicalContext: "La tradition de l'Assomption de Marie est très ancienne, attestée dès le Ve siècle par des apocryphes et des homélies patristiques. La fête de la Dormition (Assomption) fut célébrée en Orient dès le VIe siècle. Le dogme fut défini par Pie XII le 1er novembre 1950 par la constitution apostolique Munificentissimus Deus, répondant aux demandes de nombreux évêques et fidèles.",
    theologicalBasis: "L'Assomption est la conséquence logique de l'Immaculée Conception. Étant exempte du péché originel, Marie n'aurait pas dû subir la mort, conséquence du péché. Toutefois, pour imiter pleinement son Fils, elle a vécu l'expérience humaine de la mort (le « dormition ») avant d'être glorifiée. Son corps, ayant porté le Verbe incarné, ne pouvait pas connaître la corruption du tombeau.",
    councilDetails: [
      { council: "Pie XII", canon: "Munificentissimus Deus", decree: "L'Immaculée Mère de Dieu, Marie toujours Vierge, ayant terminé le cours de sa vie terrestre, a été élevée corps et âme à la gloire céleste." },
    ],
    canonicalReferences: ["CIC can. 1186", "CIC can. 1246 §1"],
    patristicFoundations: [
      "Saint Jean Damascène, Homélie sur la Dormition : « Il était juste que celle qui avait porté dans son sein le Créateur sous forme de bébé fût logée dans le tabernacle de Dieu. »",
      "Saint Grégoire de Tours, De gloria martyrum : « Le Seigneur a voulu que Marie quittât ce monde pour être transportée au ciel avec son corps. »",
    ],
    pastoralApplication: "La fête de l'Assomption (15 août) est la plus grande fête mariale et jour férié dans de nombreux pays. La méditation sur l'Assomption donne espérance : notre corps aussi sera glorifié au dernier jour. L'Assomption montre la destination de l'humanité : l'union de l'âme et du corps dans la gloire de Dieu.",
    relatedDogmas: ["immaculee-conception", "resurrection-morts", "vision-beatifique", "theotokos"],
  },
  {
    slug: "marie-mere-eglise",
    name: "Marie, Mère de l'Église",
    nameLatin: "Mater Ecclesiae",
    category: DogmaCategory.MARIOLOGICAL,
    definition:
      "Marie est Mère de l'Église, c'est-à-dire Mère de tous les membres du Corps du Christ, car elle a coopéré par sa charité à la naissance des fidèles dans la vie de grâce.",
    explanation:
      "Au pied de la Croix, Jésus a dit à Jean : « Voici ta mère » (Jn 19:27). Ce geste symbolise la maternité spirituelle de Marie sur tous les chrétiens. Marie a coopéré à l'œuvre de la Rédemption par son fiat, sa vie cachée, et sa compassion au Calvaire. Elle continue d'intercéder pour l'Église depuis le ciel. Ce titre fut confirmé par Paul VI en 1964 lors du Concile Vatican II.",
    sources: [
      {
        authority: "Concile Vatican II",
        document: "Lumen Gentium §56",
        year: 1964,
      },
    ],
    biblicalReferences: ["Jn 19:26-27", "Ap 12:1-17", "Ga 4:4-5", "Ac 1:14"],
    keywords: ["mère", "église", "intercession", "croix", "maternité spirituelle"],
    historicalContext: "Le titre de Mère de l'Église fut confirmé par Paul VI le 21 novembre 1964, lors de la clôture de la troisième session du Concile Vatican II, à la suite de la promulgation de la constitution Lumen Gentium qui consacre tout son chapitre VIII à la Vierge Marie. Ce titre exprime la maternité spirituelle de Marie sur tous les chrétiens, confirmée par la parole du Christ en croix : « Voici ta mère » (Jn 19:27).",
    theologicalBasis: "Marie est Mère de l'Église parce qu'elle a coopéré par sa charité à la naissance des fidèles dans la vie de grâce. Par son fiat, elle a accueilli le Verbe ; par sa vie cachée, elle a nourri le Sauveur ; par sa compassion au Calvaire, elle est devenue Mère spirituelle de tous les croyants. L'Église contemple en Marie le modèle de la foi, de l'espérance et de la charité.",
    councilDetails: [
      { council: "Concile Vatican II", canon: "Lumen Gentium §56", decree: "Marie est devenue notre Mère dans l'ordre de la grâce." },
    ],
    canonicalReferences: ["CIC can. 1186", "CIC can. 834 §2"],
    patristicFoundations: [
      "Saint Augustin, De Sancta Virginitate : « Marie est plus bienheureuse en ayant porté le Christ dans son cœur que dans sa chair. »",
      "Saint Ambroise, De Institutione Virginis : « Marie est le type de l'Église dans la virginité et la fécondité. »",
    ],
    pastoralApplication: "Le mémorial de Marie, Mère de l'Église (lundi après la Pentecôte) honore ce mystère. La prière du Rosaire est une méditation de la vie du Christ à travers le cœur de Marie. Les sanctuaires mariaux (Lourdes, Fatima, Notre-Dame de Paris) sont des lieux de pèlerinage où les fidèles invoquent Marie comme Mère.",
    relatedDogmas: ["theotokos", "immaculee-conception", "assomption", "sainte-trinite"],
  },

  // ═══════════════════════════════════════════════
  // SOTÉRIOLOGIE
  // ═══════════════════════════════════════════════
  {
    slug: "peche-originel",
    name: "Péché originel",
    nameLatin: "Peccatum originale",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "Par le péché d'Adam, tous les hommes naissent privés de la grâce sanctifiante et soumis à la mort et à l'ignorance. Ce péché se transmet par génération à toute l'humanité.",
    explanation:
      "Le péché originel n'est pas un péché personnel, mais un état de privation. Par la désobéissance d'Adam, toute l'humanité a perdu la grâce sanctifiante, l'amitié avec Dieu, et l'immortalité. Tous les hommes naissent dans cet état, sauf Marie (Immaculée Conception). Le baptême efface le péché originel et restaure la grâce, mais les conséquences (concupiscence, souffrance, mort) demeurent.",
    sources: [
      { authority: "Concile de Carthage", document: "Canons sur le péché originel", year: 418 },
      {
        authority: "Concile d'Orange",
        document: "Canons sur la grâce",
        year: 529,
      },
      {
        authority: "Concile de Trente",
        document: "Session V — Décret sur le péché originel",
        year: 1546,
      },
    ],
    biblicalReferences: ["Rm 5:12-19", "Gn 3:1-24", "Ps 51:7", "1 Co 15:21-22", "Ep 2:3"],
    keywords: ["péché originel", "adam", "chute", "grâce perdue", "concupiscence"],
    historicalContext: "La doctrine du péché originel fut développée par Saint Augustin dans sa lutte contre le pélagianisme (Ve siècle). Pélage niait la transmission du péché d'Adam, prétendant que chaque homme naît innocent et peut se sauver par ses propres forces. Le Concile de Carthage (418) et le Concile d'Orange (529) condamnèrent cette hérésie. Le Concile de Trente (1546) réaffirma le dogme face aux Réformateurs.",
    theologicalBasis: "Le péché originel n'est pas un péché personnel mais un état de privation de la grâce sanctifiante. Par la désobéissance d'Adam, toute l'humanité a perdu l'amitié avec Dieu, l'immortalité et l'harmonie intérieure. Le péché se transmet « par propagation, non par imitation » (Concile de Trente). Tous les hommes naissent dans cet état, sauf Marie (Immaculée Conception). Le baptême efface le péché originel.",
    councilDetails: [
      { council: "Concile de Carthage", canon: "Canons sur le péché originel", decree: "Le péché d'Adam se transmet à toute l'humanité par la génération." },
      { council: "Concile d'Orange", canon: "Canons sur la grâce", decree: "Après la chute, l'homme a besoin de la grâce pour faire le bien." },
      { council: "Concile de Trente", session: "Session V", canon: "Décret sur le péché originel", decree: "Le péché originel se transmet avec la nature humaine, non par imitation mais par propagation." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 849"],
    patristicFoundations: [
      "Saint Augustin, De Civitate Dei : « Par le péché d'un seul homme, la mort est entrée dans le monde, et tous ont péché en Adam. »",
      "Saint Paul, Romains 5:12 : « Par un seul homme le péché est entré dans le monde, et par le péché la mort. »",
    ],
    pastoralApplication: "Le baptême des enfants est la pratique universelle de l'Église pour effacer le péché originel dès le plus jeune âge. La concupiscence qui demeure après le baptême n'est pas un péché mais une inclination au mal que le chrétien doit combattre avec la grâce. La fête de l'Immaculée Conception (8 décembre) rappelle que Marie a été préservée de cette souillure.",
    relatedDogmas: ["redemption", "justification", "grace-sanctifiante", "necessite-grace", "immaculee-conception"],
  },
  {
    slug: "redemption",
    name: "Rédemption universelle",
    nameLatin: "Redemptio universalis",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "Jésus-Christ a racheté tous les hommes par sa mort sur la Croix, offrant à tous le salut, sans exception.",
    explanation:
      "Le sacrifice du Christ sur la Croix est un sacrifice de rédemption universelle. Le sang versé par Jésus suffit pour sauver tous les hommes de tous les temps. Cependant, chaque personne doit librement accepter ce salut par la foi, les sacrements et la vie de grâce. La Rédemption est objective (accomplie pour tous) mais son application est subjective (chaque homme doit y participer).",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VI — Décret sur la justification",
        year: 1547,
      },
      {
        authority: "Concile Vatican II",
        document: "Gaudium et Spes §22",
        year: 1965,
      },
    ],
    biblicalReferences: ["Rm 3:24-25", "1 Jn 2:2", "Ep 1:7", "Col 1:14", "Hé 9:12"],
    keywords: ["rédemption", "croix", "sang", "rachat", "sauveur"],
    historicalContext: "Le dogme de la Rédemption universelle fut précisé face aux hérésies qui limitaient le salut. Les calvinistes enseignaient la « double prédestination » (Dieu a choisi éternellement qui serait sauvé et qui serait damné). Le Concile de Trente réaffirma que le Christ est mort pour tous les hommes sans exception, et que chaque personne peut librement accepter ou refuser le salut.",
    theologicalBasis: "Le sacrifice du Christ sur la Croix est une satisfaction surabondante pour les péchés de tous les hommes. La valeur de cette rédemption est infinie car elle vient d'une personne divine. Cependant, l'application de la rédemption à chaque personne dépend de la liberté humaine : l'homme doit accepter le salut par la foi, les sacrements et la vie de grâce. La Rédemption est objective (accomplie pour tous) mais son application est subjective.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VI", canon: "Décret sur la justification", decree: "Jésus-Christ a racheté tous les hommes par sa mort sur la Croix." },
      { council: "Concile Vatican II", canon: "Gaudium et Spes §22", decree: "Le Christ est mort pour tous, et la vocation dernière de l'homme est réellement une, divine." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 849"],
    patristicFoundations: [
      "Saint Irénée de Lyon, Adversus Haereses : « Le Verbe s'est fait homme afin que nous puissions recevoir la adoption filiale. »",
      "Saint Athanase, De Incarnatione : « Le Verbe s'est incarné pour nous racheter de la mort et nous donner la vie incorruptible. »",
      "Saint Thomas d'Aquin, Somme théologique III, q.48 : « La passion du Christ suffit pour sauver tout le genre humain. »",
    ],
    pastoralApplication: "Le Vendredi Saint est le jour de la Rédemption : les fidèles jeûnent et pratiquent la pénitence en union avec le sacrifice du Christ. La dévotion au Précieux-Sang honore le sang versé par Jésus pour notre salut. Chaque messe actualise le sacrifice rédempteur de la Croix.",
    relatedDogmas: ["peche-originel", "justification", "satisfaction-christ", "incarnation"],
  },
  {
    slug: "justification",
    name: "Justification par la grâce",
    nameLatin: "Iustificatio per gratiam",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "La justification est une translation de l'état dans lequel l'homme naît fils du premier Adam, à l'état de grâce et d'adoption des fils de Dieu, par le second Adam, Jésus-Christ.",
    explanation:
      "La justification n'est pas un simple « déclaration légale » (comme le pensait Luther), mais une véritable transformation intérieure par la grâce. L'homme est « rendu juste » — non seulement déclaré juste, mais réellement sanctifié. Cette transformation commence par la foi, s'exprime par l'espérance et la charité, et se nourrit des sacrements. Les bonnes œuvres, faites en état de grâce, contribuent à accroître la justification.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VI — Décret sur la justification, canons 1-33",
        year: 1547,
      },
    ],
    biblicalReferences: ["Rm 3:28", "Rm 5:1", "Ga 2:16", "Jc 2:24", "Ep 2:8-10"],
    keywords: ["justification", "grâce", "foi", "œuvres", "transformation"],
    historicalContext: "Le débat sur la justification fut l'un des points centraux de la Réforme protestante. Luther enseignait la justification par la « foi seule » (sola fide), rejetant le rôle des œuvres. Le Concile de Trente (1547) consacra toute sa session VI à définir la doctrine catholique de la justification, réfutant point par point les thèses luthériennes.",
    theologicalBasis: "La justification est une transformation réelle de l'homme par la grâce, non une simple « déclaration légale ». L'homme est « rendu juste » — non seulement déclaré juste (imputation), mais réellement sanctifié (infusion). Cette transformation commence par la grâce prévenante, s'exprime par la foi, et s'accomplit par la charité. Les bonnes œuvres, faites en état de grâce, contribuent à accroître la justification.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VI", canon: "Décret sur la justification, canons 1-33", decree: "La justification n'est pas seulement la rémission des péchés, mais aussi la sanctification et le renouvellement de l'homme intérieur." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Spiritu et Littera : « La grâce de Dieu ne nous trouve pas justifiés, mais nous rend justes. »",
      "Saint Jacques, Épître 2:24 : « L'homme est justifié par les œuvres et non par la foi seule. »",
    ],
    pastoralApplication: "Le sacrement de pénitence est le moyen par excellence de recouvrer la justification perdue par le péché mortel. La vie chrétienne est un chemin de croissance dans la justification : par la prière, les sacrements, les bonnes œuvres et la charité, le fidèle s'enracine de plus en plus dans la grâce.",
    relatedDogmas: ["peche-originel", "grace-sanctifiante", "grace-actuelle", "merite-bonnes-oeuvres"],
  },
  {
    slug: "grace-sanctifiante",
    name: "Grâce sanctifiante",
    nameLatin: "Gratia sanctificans",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "La grâce sanctifiante est une qualité surnaturelle habituelle qui, inhérente à l'âme, la rend participante de la nature divine et agréable à Dieu.",
    explanation:
      "La grâce sanctifiante (ou habituelle) est le principe de la vie surnaturelle en nous. Elle transforme l'âme en la rendant « participante de la nature divine » (2 P 1:4). Elle est reçue au baptême, perdue par le péché mortel, et recouvrée par le sacrement de pénitence. Elle s'accroît par les bonnes œuvres et les sacrements. C'est cette grâce qui nous rend dignes de la vision béatifique au ciel.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VI — Canons sur la justification",
        year: 1547,
      },
    ],
    biblicalReferences: ["2 P 1:4", "Rm 5:5", "Ep 2:8", "Jn 15:5", "Rm 8:30"],
    keywords: ["grâce", "sanctifiante", "habituelle", "participation", "nature divine"],
    historicalContext: "La notion de grâce sanctifiante (ou habituelle) fut développée par les Pères grecs (notion de theosis) et les Pères latins (Augustin, Thomas d'Aquin). Le Concile de Trente la définit comme une « qualité habituelle » inhérente à l'âme, distincte des « grâces actuelles » qui sont passagères.",
    theologicalBasis: "La grâce sanctifiante est une qualité surnaturelle habituelle (stable et permanente) qui transforme l'âme en la rendant « participante de la nature divine » (2 P 1:4). Elle est reçue au baptême, perdue par le péché mortel, et recouvrée par le sacrement de pénitence. Elle s'accroît par les bonnes œuvres et les sacrements. C'est cette grâce qui rend l'âme digne de la vision béatifique.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VI", canon: "Canons sur la justification", decree: "La grâce sanctifiante est une qualité surnaturelle qui habite dans l'âme et la rend participante de la nature divine." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 915"],
    patristicFoundations: [
      "Saint Augustin, De Trinitate : « La grâce sanctifiante est la charité de Dieu répandue dans nos cœurs par le Saint-Esprit. »",
      "Saint Athanase, De Incarnatione : « Le Verbe s'est incarné pour que, par lui, nous soyons rendus participants de la nature divine. »",
    ],
    pastoralApplication: "La grâce sanctifiante est la « vie de l'âme ». Le sacrement de pénitence est le moyen de recouvrer cette grâce perdue par le péché mortel. La dévotion au Sacré-Cœur est une expression de la grâce sanctifiante : le cœur de Jésus est la source d'où coule la grâce pour les âmes.",
    relatedDogmas: ["grace-actuelle", "necessite-grace", "justification", "peche-originel"],
  },
  {
    slug: "grace-actuelle",
    name: "Grâce actuelle",
    nameLatin: "Gratia actualis",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "La grâce actuelle est un secours surnaturel transitoire qui illumine l'intellect et fortifie la volonté pour accomplir des actes salutaires.",
    explanation:
      "Contrairement à la grâce habituelle (qui demeure), la grâce actuelle est un secours ponctuel. Elle peut être une inspiration intérieure, une lumière de l'esprit, une force de la volonté. Elle précède et accompagne tout acte méritoire. Sans elle, l'homme pécheur ne peut ni croire, ni espérer, ni aimer Dieu véritablement. La grâce actuelle est le premier mouvement vers la conversion.",
    sources: [
      {
        authority: "Concile d'Orange",
        document: "Canons sur la grâce",
        year: 529,
      },
      {
        authority: "Concile de Trente",
        document: "Session VI — Décret sur la justification",
        year: 1547,
      },
    ],
    biblicalReferences: ["Jn 6:44", "Jn 15:5", "Ph 2:13", "2 Co 12:9", "1 Co 15:10"],
    keywords: ["grâce", "actuelle", "secours", "inspiration", "mouvement"],
    historicalContext: "La distinction entre grâce habituelle et grâce actuelle fut systématisée par la théologie scolastique (saint Thomas d'Aquin). Les controverses avec les jansénistes (XVIIe siècle) portèrent sur la question de la « grâce efficace par elle-même » : les jansénistes prétendaient que la grâce est toujours irrésistible, alors que l'Église enseigne que la grâce actuelle peut être acceptée ou refusée.",
    theologicalBasis: "La grâce actuelle est un secours surnaturel transitoire qui illumine l'intellect et fortifie la volonté. Elle peut être une inspiration intérieure, une lumière de l'esprit, une force de la volonté. Elle précède et accompagne tout acte méritoire. Sans elle, l'homme pécheur ne peut accomplir aucun acte méritoire pour la vie éternelle. La grâce actuelle peut être résistée (contrairement à la thèse janséniste).",
    councilDetails: [
      { council: "Concile d'Orange", canon: "Canons sur la grâce", decree: "La grâce précède la volonté humaine dans tout acte de conversion." },
      { council: "Concile de Trente", session: "Session VI", canon: "Décret sur la justification", decree: "La grâce excite et assiste l'homme, mais celui-ci peut coopérer ou résister." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Gratia et Libero Arbitrio : « La grâce de Dieu ne détruit pas la liberté humaine, mais la guérit et l'élève. »",
      "Saint Thomas d'Aquin, Somme théologique I-II, q.111 : « La grâce actuelle est un secours divin par lequel l'homme est mû vers le bien. »",
    ],
    pastoralApplication: "La grâce actuelle se manifeste dans les moments de conversion, d'inspiration spirituelle, de consolation dans la prière. L'Église recommande de prier pour obtenir la grâce actuelle : « Demandez et vous recevrez » (Mt 7:7). Les exercices spirituels de Saint Ignace sont un moyen de disposer à la grâce actuelle.",
    relatedDogmas: ["grace-sanctifiante", "necessite-grace", "justification", "liberte-humaine"],
  },
  {
    slug: "necessite-grace",
    name: "Nécessité de la grâce pour le salut",
    nameLatin: "Necessitas gratiae ad salutem",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "Sans la grâce de Dieu, l'homme ne peut ni croire, ni espérer, ni aimer Dieu, ni accomplir aucune œuvre méritoire pour la vie éternelle.",
    explanation:
      "Depuis la chute d'Adam, la nature humaine est blessée. Sans le secours de la grâce, l'homme ne peut atteindre le salut par ses seules forces. Ce n'est pas que tout acte naturel est impossible, mais que tout acte surnaturel — méritoire pour le ciel — exige la grâce. Ce dogme condamne le pélagianisme qui prétendait que l'homme peut se sauver par ses propres forces.",
    sources: [
      { authority: "Concile de Carthage", document: "Canons anti-pélagiens", year: 418 },
      { authority: "Concile d'Orange", document: "Canons 1-25", year: 529 },
      {
        authority: "Concile de Trente",
        document: "Session VI, Canon 1",
        year: 1547,
      },
    ],
    biblicalReferences: ["Jn 15:5", "Jn 6:44", "Ph 2:13", "Rm 8:26", "2 Co 3:5"],
    keywords: ["nécessité", "grâce", "salut", "pélagianisme", "secours"],
    historicalContext: "Le dogme de la nécessité de la grâce fut défini contre le pélagianisme. Pélage (vers 354-420) enseignait que l'homme naît innocent et peut faire le bien et se sauver par ses seules forces naturelles, sans la grâce. Saint Augustin lui opposa la doctrine de la grâce nécessaire. Le Concile de Carthage (418) et le Concile d'Orange (529) condamnèrent solennellement le pélagianisme et le semi-pélagianisme.",
    theologicalBasis: "Depuis la chute d'Adam, la nature humaine est blessée : l'intelligence est obscurcie, la volonté affaiblie, la concupiscence domine. Sans le secours de la grâce, l'homme ne peut accomplir aucun acte surnaturel méritoire pour la vie éternelle. Cela ne signifie pas que tout acte naturel est impossible, mais que tout acte salvifique exige la grâce. La grâce est toujours prévenante (elle précède l'acte humain) et nécessaire.",
    councilDetails: [
      { council: "Concile de Carthage", canon: "Canons anti-pélagiens", decree: "L'homme a besoin de la grâce pour croire, espérer et aimer." },
      { council: "Concile d'Orange", canon: "Canons 1-25", decree: "L'homme, même après le péché, peut croire, espérer et aimer par la grâce." },
      { council: "Concile de Trente", session: "Session VI", canon: "Canon 1", decree: "Si quelqu'un dit que l'homme peut être justifié par ses seules œuvres sans la grâce de Dieu par Jésus-Christ, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Gratia et Libero Arbitrio : « Sans la grâce de Dieu, les hommes ne peuvent rien faire de bien. »",
      "Saint Paul, Romains 8:26 : « L'Esprit vient au secours de notre faiblesse. »",
    ],
    pastoralApplication: "La conscience de la nécessité de la grâce doit inspirer l'humilité et la prière. Le chrétien ne se sauve pas lui-même : il coopère avec la grâce de Dieu. La prière quotidienne, les sacrements et la vie communautaire sont des occasions de recevoir la grâce actuelle nécessaire à la vie chrétienne.",
    relatedDogmas: ["peche-originel", "grace-sanctifiante", "grace-actuelle", "justification", "liberte-humaine"],
  },
  {
    slug: "merite-bonnes-oeuvres",
    name: "Mérite des bonnes œuvres",
    nameLatin: "Meritorium bonorum operum",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "Les bonnes œuvres accomplies en état de grâce, avec l'aide de la grâce divine, sont véritablement méritoires pour la vie éternelle.",
    explanation:
      "Contre la doctrine luthérienne de la « foi seule » (sola fide), l'Église enseigne que les bonnes œuvres, faites dans la charité et la grâce, contribuent à la croissance dans la vie divine et au mérite de la vie éternelle. Ces œuvres ne sont pas « mérites » au sens strict (l'homme ne peut rien exiger de Dieu), mais Dieu, dans sa bonté, a voulu que nos actes libres, unis aux mérites du Christ, soient récompensés.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VI, Canons 26-32",
        year: 1547,
      },
    ],
    biblicalReferences: ["Mt 16:27", "Rm 2:6", "1 Co 3:8", "Jc 2:24", "Mt 25:31-46"],
    keywords: ["mérite", "bonnes œuvres", "charité", "grâce", "récompense"],
    historicalContext: "La question du mérite des bonnes œuvres fut l'un des points centraux de la Réforme. Luther enseignait le « sola fide » (la foi seule sauve, sans les œuvres) et rejetait le mérite humain. Le Concile de Trente consacra de nombreux canons à défendre le mérite des œuvres accomplies en état de grâce, tout en rappelant que tout mérite vient ultimement de la grâce divine.",
    theologicalBasis: "Les bonnes œuvres accomplies en état de grâce, avec l'aide de la grâce divine, sont véritablement méritoires pour la vie éternelle. Cependant, le mot « mérite » ne signifie pas que l'homme peut « exiger » quelque chose de Dieu. C'est Dieu, dans sa bonté, qui a voulu que nos actes libres, unis aux mérites du Christ, soient récompensés. Le mérite est toujours un don de Dieu : nous « méritons » parce que Dieu a choisi de récompenser nos actes.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VI", canon: "Canons 26-32", decree: "Les bonnes œuvres faites en état de grâce sont véritablement méritoires pour la vie éternelle." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 210"],
    patristicFoundations: [
      "Saint Augustin, De Gratia et Libero Arbitrio : « Dieu, en couronnant nos mérites, ne couronne que ses propres dons. »",
      "Saint Paul, Romains 2:6 : « Dieu rendra à chacun selon ses œuvres. »",
    ],
    pastoralApplication: "La vie chrétienne est un chemin de croissance dans la charité. Chaque acte d'amour fait en état de grâce augmente la grâce sanctifiante et prépare la gloire du ciel. Les indulgences sont une application pratique du mérite : l'Église puise dans le trésor des mérites du Christ pour remettre les peines temporelles.",
    relatedDogmas: ["justification", "grace-sanctifiante", "indulgences", "satisfaction-christ"],
  },
  {
    slug: "satisfaction-christ",
    name: "Satisfaction du Christ",
    nameLatin: "Satisfactio Christi",
    category: DogmaCategory.SOTERIOLOGICAL,
    definition:
      "Jésus-Christ a offert au Père une satisfaction surabondante pour les péchés de tous les hommes par son sacrifice sur la Croix.",
    explanation:
      "Le sacrifice du Christ n'est pas seulement un signe d'amour, mais une véritable satisfaction pour l'offense faite à Dieu par le péché. La valeur de cette satisfaction est infinie car elle vient d'une personne divine. C'est pourquoi elle suffit pour tous les péchés de tous les hommes, de tous les temps. Les pécheurs participent à cette satisfaction par les sacrements et par les œuvres de pénitence.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session XIV — Sur le sacrement de pénitence",
        year: 1551,
      },
    ],
    biblicalReferences: ["Rm 5:10-11", "Col 1:20", "Ep 1:7", "Hé 2:17", "1 Jn 2:2"],
    keywords: ["satisfaction", "sacrifice", "croix", "pardon", "offense"],
    historicalContext: "La notion de satisfaction fut développée par Saint Anselme de Cantorbéry dans son Cur Deus Homo (1098). Anselme montra que le péché étant une offense infinie contre Dieu, seule une personne divine pouvait offrir une satisfaction adéquate. Cette théologie de la satisfaction fut reprise par les scolastiques et confirmée par le Concile de Trente.",
    theologicalBasis: "Le sacrifice du Christ sur la Croix est une satisfaction parfaite et surabondante pour les péchés de tous les hommes. La valeur infinie de cette satisfaction provient de la personne du Christ (Dieu fait homme). La Croix n'est pas un « châtiment substitutif » (comme dans certaines lectures protestantes), mais une offrande libre d'amour par laquelle le Christ rétablit l'honneur de Dieu et rachète l'humanité.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session XIV", canon: "Sur le sacrement de pénitence", decree: "Le Christ a satisfait pour nos péchés par sa passion et sa mort sur la Croix." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 959"],
    patristicFoundations: [
      "Saint Anselme, Cur Deus Homo : « Il fallait que la satisfaction fût faite par un homme-Dieu : par un homme pour la dette de l'humanité, par Dieu pour la valeur infinie. »",
      "Saint Thomas d'Aquin, Somme théologique III, q.48 : « La passion du Christ suffit pour sauver tout le genre humain. »",
    ],
    pastoralApplication: "Le sacrement de pénitence applique les mérites de la satisfaction du Christ à chaque pécheur repentant. Les indulgences et les œuvres de pénitence sont des moyens de participer à la satisfaction du Christ. La dévotion au Crucifix rappelle constamment le sacrifice rédempteur de la Croix.",
    relatedDogmas: ["redemption", "justification", "peche-originel", "merite-bonnes-oeuvres"],
  },

  // ═══════════════════════════════════════════════
  // ECCLÉSIOLOGIE
  // ═══════════════════════════════════════════════
  {
    slug: "infaillibilite-pontificale",
    name: "Infaillibilité pontificale",
    nameLatin: "Infallibilitas Pontificis",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "Le Pape, lorsqu'il parle ex cathedra, c'est-à-dire en tant que pasteur et docteur suprême de tous les chrétiens, est préservé de l'erreur par une assistance divine spéciale.",
    explanation:
      "L'infaillibilité ne signifie pas que le Pape est impeccable (sans péché) ni qu'il est infaillible en tout. Elle s'exerce seulement lorsque le Pape définit solennellement, comme docteur suprême, une doctrine de foi ou de morale à tenir par toute l'Église. Cette assistance divine garantit que la définition ne peut contenir d'erreur. Les conditions sont : parler ex cathedra, en vertu de sa suprême autorité apostolique, sur une matière de foi ou de morale, pour toute l'Église.",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Pastor Aeternus",
        year: 1870,
      },
    ],
    biblicalReferences: ["Lc 22:32", "Mt 16:18-19", "Mt 28:20", "Jn 21:15-17", "Jn 14:26"],
    keywords: ["infaillibilité", "pape", "ex cathedra", "vatican I", "pastor aeternus"],
    historicalContext: "Le dogme de l'infaillibilité pontificale fut défini lors du Concile Vatican I (1870), dans un contexte de tensions entre l'Église et les États modernes. De nombreux évêques (minorité) s'y opposèrent, craignant un « absolutisme romain ». Le concile fut interrompu par la guerre franco-prussienne avant de pouvoir achever ses travaux sur l'ecclésiologie.",
    theologicalBasis: "L'infaillibilité est une assistance spéciale du Saint-Esprit accordée au Pape lorsqu'il définit solennellement, ex cathedra, un point de foi ou de morale pour toute l'Église. Cette assistance garantit que la définition ne peut contenir d'erreur. Les conditions sont strictes : le Pape doit parler en tant que pasteur suprême, en vertu de son autorité apostolique, sur une matière de foi ou de morale, avec l'intention de lier tous les fidèles.",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Pastor Aeternus, chap. 4", decree: "Le Pontife romain, lorsqu'il parle ex cathedra, jouit, par l'assistance divine qui lui a été promise en la personne de saint Pierre, de cette infaillibilité dont le divin Rédempteur a voulu que fût pourvue son Église." },
    ],
    canonicalReferences: ["CIC can. 749 §1", "CIC can. 752"],
    patristicFoundations: [
      "Saint Irénée de Lyon, Adversus Haereses : « Avec cette Église [de Rome], en raison de son origine plus excellente, doit s'accorder toute Église. »",
      "Saint Augustin, Contre la Lettre de Mani : « Je n'aurais pas cru à l'Évangile si l'autorité de l'Église catholique ne m'y avait poussé. »",
    ],
    pastoralApplication: "Les définitions ex cathedra sont rares (depuis 1870, seules deux ont été prononcées : l'Immaculée Conception en 1854 et l'Assomption en 1950). Les enseignements non-infaillibles du Pape demandent un « assentiment religieux de la volonté et de l'intelligence » (CIC can. 752), mais pas une foi divine.",
    relatedDogmas: ["primauté-pape", "caractere-apostolique", "indefectibilite", "visibilite-eglise"],
  },
  {
    slug: "primauté-pape",
    name: "Primauté du Pape (succession de Pierre)",
    nameLatin: "Primatus Papae",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "Le Pape, Vicaire du Christ et successeur de Pierre, possède une juridiction suprême, pleine, immédiate et universelle sur toute l'Église.",
    explanation:
      "Jésus a conféré à Pierre la primauté sur les autres apôtres (Mt 16:18-19). Cette primauté se transmet à ses successeurs, les évêques de Rome. Le Pape n'est pas un « premier parmi ses égaux » : il possède une autorité réelle, pleine et suprême sur toute l'Église, tant en matière de doctrine que de discipline. Cette autorité est immédiate (il peut s'adresser directement à tout fidèle) et universelle (elle couvre toute l'Église).",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Pastor Aeternus",
        year: 1870,
      },
      {
        authority: "Concile de Florence",
        document: "Décret pour les Jacobites",
        year: 1439,
      },
    ],
    biblicalReferences: ["Mt 16:18-19", "Jn 21:15-17", "Lc 22:32", "Ac 15:7-12"],
    keywords: ["primauté", "pape", "pierre", "juridiction", "vicaire du christ"],
    historicalContext: "La primauté du Pape repose sur la parole du Christ à Pierre : « Tu es Pierre, et sur cette pierre je bâtirai mon Église » (Mt 16:18). Les premiers siècles ont vu l'autorité de Rome croître progressivement. Les conciles de Constantinople (381) et de Chalcédoine (451) reconnurent le « primat d'honneur » de Rome. Le schisme de 1054 fut en partie causé par le refus des Byzantins de reconnaître la juridiction universelle du Pape.",
    theologicalBasis: "Le Pape possède une juridiction suprême, pleine, immédiate et universelle sur toute l'Église. Cette primauté n'est pas un « premier parmi ses égaux » (primus inter pares) mais une autorité réelle de juridiction. Elle est : suprême (aucune autorité humaine ne la surpasse), pleine (elle couvre doctrine, discipline et gouvernement), immédiate (le Pape peut s'adresser directement à tout fidèle), et universelle (elle s'étend à toute l'Église).",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Pastor Aeternus", decree: "Le Pontife romain possède sur toute l'Église une juridiction ordinaire, immédiate, épiscopale, suprême." },
      { council: "Concile de Florence", canon: "Décret pour les Jacobites", decree: "Le Pontife romain est le vicaire du Christ, le chef de toute l'Église, le père et le docteur de tous les chrétiens." },
    ],
    canonicalReferences: ["CIC can. 331", "CIC can. 333", "CIC can. 749 §1"],
    patristicFoundations: [
      "Saint Léon le Grand, Sermon 3 : « La sollicitude de Pierre s'exerce en chaque pontife. Ce que l'on dit de Pierre, on le dit de ses successeurs. »",
      "Saint Cyprien, De Unitate Ecclesiae : « Le primat est donné à Pierre pour montrer que l'Église est une. »",
    ],
    pastoralApplication: "Le Pape est le garant de l'unité de la foi et de la communion ecclésiale. L'encyclique papale est un instrument de magistère ordinaire. Les pèlerinages au tombeau de Saint Pierre à Rome sont une expression de la communion avec le successeur de Pierre. Le Credo affirme « une, sainte, catholique et apostolique » — l'apostolicité inclut la succession pétrinienne.",
    relatedDogmas: ["infaillibilite-pontificale", "caractere-apostolique", "indefectibilite"],
  },
  {
    slug: "caractere-apostolique",
    name: "Caractère apostolique de l'Église",
    nameLatin: "Apostolicitas Ecclesiae",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "L'Église est apostolique en trois sens : elle est bâtie sur le fondement des apôtres, elle conserve la doctrine des apôtres, et elle est gouvernée par les successeurs des apôtres.",
    explanation:
      "L'apostolicité de l'Église se vérifie par trois critères : la succession apostolique (chaque évêque remonte par une chaîne ininterrompue aux apôtres), la fidélité à la doctrine apostolique (le dépôt de la foi), et la fondation par les apôtres eux-mêmes (Jésus a choisi les Douze comme fondements). Toute communauté qui ne remplit pas ces trois critères n'est pas l'Église du Christ.",
    sources: [
      {
        authority: "Concile Vatican II",
        document: "Lumen Gentium §20",
        year: 1964,
      },
    ],
    biblicalReferences: ["Ep 2:20", "Ac 1:8", "Ac 2:42", "2 Tm 1:13-14", "Tt 1:5"],
    keywords: ["apostolicité", "succession", "fondement", "doctrine", "douze apôtres"],
    historicalContext: "Le concept d'apostolicité de l'Église fut développé dès le IIe siècle par Saint Irénée de Lyon contre les gnostiques, qui prétendaient posséder une tradition « secrète » transmise hors de l'Église visible. Irénée montra que la vraie doctrine est celle qui remonte aux apôtres par la succession épiscopale publique et vérifiable.",
    theologicalBasis: "L'Église est apostolique en trois sens : (1) elle est bâtie sur le fondement des apôtres (Ep 2:20) ; (2) elle conserve et transmet fidèlement la doctrine des apôtres (le dépôt de la foi) ; (3) elle est gouvernée par les successeurs des apôtres (les évêques) dans une chaîne ininterrompue de succession apostolique. Toute communauté qui ne remplit pas ces trois critères ne peut prétendre être l'Église du Christ.",
    councilDetails: [
      { council: "Concile Vatican II", canon: "Lumen Gentium §20", decree: "Le collège des apôtres, avec Pierre comme chef, représente l'origine et le fondement perpétuel de l'unité de l'Église." },
    ],
    canonicalReferences: ["CIC can. 330", "CIC can. 375 §1"],
    patristicFoundations: [
      "Saint Irénée de Lyon, Adversus Haereses : « Nous pouvons énumérer les évêques qui ont été établis par les apôtres dans les Églises, et leurs successeurs jusqu'à nous. »",
      "Saint Cyprien, De Unitate : « L'Église est une, épandue en une multitude de fruits, comme un arbre dont les branches sont nombreuses mais dont le tronc est unique. »",
    ],
    pastoralApplication: "La succession apostolique garantit la validité des sacrements, en particulier l'ordre. Les fidèles peuvent vérifier l'apostolicité de leur Église par la chaîne des évêques. Le rite de l'ordination épiscopale transmet la plénitude du sacrement de l'ordre, perpétuant ainsi la mission des apôtres.",
    relatedDogmas: ["primauté-pape", "infaillibilite-pontificale", "indefectibilite", "visibilite-eglise"],
  },
  {
    slug: "indefectibilite",
    name: "Indéfectibilité de l'Église",
    nameLatin: "Indefectibilitas Ecclesiae",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "L'Église catholique, fondée par le Christ, ne périra jamais et persévérera jusqu'à la fin des temps dans la foi, le culte et la hiérarchie.",
    explanation:
      "Le Christ a promis que « les portes de l'enfer ne prévaudront point contre elle » (Mt 16:18). Cela signifie que l'Église ne disparaîtra jamais, ne sera jamais anéantie, et ne défaillira pas dans sa mission. Malgré les crises, les persécutions, les erreurs de ses membres, l'Église subsistera toujours dans sa substance. Cette promesse concerne l'Église comme institution divine, non chaque membre individuel.",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Pastor Aeternus",
        year: 1870,
      },
    ],
    biblicalReferences: ["Mt 16:18", "Mt 28:20", "Mt 13:47-50"],
    keywords: ["indéfectibilité", "permanence", "promesse", "portes de l'enfer"],
    historicalContext: "L'indéfectibilité de l'Église fut formulée face aux hérétiques qui prétendaient que l'Église avait « failli » et qu'une nouvelle révélation ou une nouvelle communauté devait la remplacer. Les cathares, les valdéens et plus tard les Réformateurs prétendaient que l'Église visible avait corrompu la foi originelle. Le Concile Vatican I réaffirma que l'Église du Christ subsiste dans l'Église catholique.",
    theologicalBasis: "Le Christ a promis que « les portes de l'enfer ne prévaudront point contre elle » (Mt 16:18) et « je suis avec vous tous les jours jusqu'à la fin du monde » (Mt 28:20). Ces promesses garantissent que l'Église, dans sa substance, ne périra jamais. L'indéfectibilité concerne l'institution divine (l'Église comme Corps du Christ), non chaque membre individuel. L'Église peut traverser des crises, mais elle ne disparaîtra jamais.",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Pastor Aeternus", decree: "L'Église, fondée sur Pierre, persévérera jusqu'à la fin des temps." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Civitate Dei : « L'Église ne peut pas être détruite, même si le monde entier s'élève contre elle. »",
      "Saint Jean Chrysostome, Homélie sur l'Évangile de Matthieu : « Le Christ a dit 'les portes de l'enfer', non 'les armées de l'enfer', pour montrer que tout l'effort du mal ne peut rien contre l'Église. »",
    ],
    pastoralApplication: "L'indéfectibilité de l'Église est source d'espérance : malgré les scandales, les crises et les persécutions, l'Église subsistera toujours. Les fidèles peuvent avoir confiance en la permanence de la foi et des sacrements. Cette certitude fonde la stabilité de la vie chrétienne : la foi que nous professons aujourd'hui est la même que celle des apôtres.",
    relatedDogmas: ["infaillibilite-pontificale", "caractere-apostolique", "primauté-pape", "visibilite-eglise"],
  },
  {
    slug: "visibilite-eglise",
    name: "Visibilité de l'Église",
    nameLatin: "Visibilitas Ecclesiae",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "L'Église du Christ est une société visible, avec une hiérarchie, un culte public et des signes extérieurs identifiables.",
    explanation:
      "L'Église n'est pas une simple communauté invisible de « vrais croyants » (comme le prétendaient les protestants). Elle est une société visible, constituée par le Christ lui-même, avec une structure hiérarchique (Pape, évêques, prêtres), des sacrements visibles, un culte public, et des membres identifiables. Certes, l'Église a aussi une dimension invisible (la grâce, la communion des saints), mais sa nature fondamentalement visible est un dogme de foi.",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Pastor Aeternus",
        year: 1870,
      },
    ],
    biblicalReferences: ["Mt 5:14", "Mt 16:18", "Ac 2:47", "1 Tm 3:15"],
    keywords: ["visibilité", "société", "hiérarchie", "signes", "extérieurs"],
    historicalContext: "La visibilité de l'Église fut affirmée contre la Réforme protestante qui enseignait que la véritable Église est invisible (communion des « vrais croyants » connus de Dieu seul). Le Concile Vatican I réaffirma que l'Église est une société visible, identifiable, avec une structure hiérarchique et des signes extérieurs.",
    theologicalBasis: "L'Église est une société visible, constituée par le Christ lui-même, avec une structure hiérarchique (Pape, évêques, prêtres, diacres), des sacrements visibles, un culte public et des membres identifiables. Cette nature visible ne nie pas la dimension invisible (la grâce, la communion des saints), mais l'Église est fondamentalement visible. Les signes de l'Église (unité, sainteté, catholicité, apostolicité) sont visibles.",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Pastor Aeternus", decree: "L'Église du Christ est une société visible, avec une hiérarchie divine." },
      { council: "Concile Vatican II", canon: "Lumen Gentium §8", decree: "Cette Église, dans ce monde, est constituée en société ordonnée, et subsiste dans l'Église catholique." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 208"],
    patristicFoundations: [
      "Saint Cyprien, De Unitate : « L'Église est une, visible, épandue sur toute la terre. On ne peut avoir Dieu pour Père sans avoir l'Église pour Mère. »",
    ],
    pastoralApplication: "La visibilité de l'Église implique que les fidèles participent activement à la vie communautaire : culte dominical, sacrements, charité fraternelle. L'Église n'est pas un « club privé » mais une société ouverte à tous. Les lieux de culte, les cérémonies liturgiques et les institutions ecclésiales sont des manifestations concrètes de cette visibilité.",
    relatedDogmas: ["infaillibilite-pontificale", "caractere-apostolique", "indefectibilite", "primauté-pape"],
  },

  // ═══════════════════════════════════════════════
  // SACREMENTS
  // ═══════════════════════════════════════════════
  {
    slug: "transsubstantiation",
    name: "Transsubstantiation",
    nameLatin: "Transsubstantiatio",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Par les paroles de la consécration, la substance du pain et du vin est convertie au corps et au sang du Christ, tandis que les apparences (accidents) demeurent.",
    explanation:
      "Dans la Sainte Messe, le pain et le vin ne sont plus du pain et du vin après la consécration, malgré les apparences. Le Christ est réellement, véritablement et substantiellement présent sous les espèces eucharistiques. C'est la présence la plus parfaite de Dieu parmi les hommes. Le terme « transsubstantiation » indique que c'est la substance (l'être profond) qui change, tandis que les accidents (couleur, forme, goût) restent inchangés.",
    sources: [
      {
        authority: "Concile de Latran IV",
        document: "Constitution Firmiter",
        year: 1215,
      },
      {
        authority: "Concile de Trente",
        document: "Session XIII — Sur la très sainte Eucharistie",
        year: 1551,
      },
    ],
    biblicalReferences: ["Mt 26:26-28", "Mc 14:22-24", "Lc 22:19-20", "Jn 6:51-58", "1 Co 11:23-29"],
    keywords: ["transsubstantiation", "eucharistie", "corps du christ", "sang du christ", "consécration"],
    historicalContext: "Le terme « transsubstantiation » fut utilisé pour la première fois par Hildebert de Lavardin (XIIe siècle) et devint le terme technique adopté par le Concile de Latran IV (1215). Le Concile de Trente (1551) le confirma solennellement contre les Réformateurs qui proposaient des interprétations alternatives (consubstantiation luthérienne, mémorial zwinglienne).",
    theologicalBasis: "La transsubstantiation est un changement ontologique : la substance du pain et du vin (leur être profond) est convertie au corps et au sang du Christ, tandis que les accidents (apparences sensibles : couleur, forme, goût, poids) demeurent inchangés. Le Christ est « réellement, véritablement et substantiellement » présent sous les espèces eucharistiques. Cette conversion est opérée par les paroles de la consécration prononcées par le prêtre « in persona Christi ».",
    councilDetails: [
      { council: "Concile de Latran IV", canon: "Firmiter", decree: "Le corps et le sang du Christ sont contenus véritablement dans le sacrement de l'autel sous les espèces du pain et du vin, le pain étant transsubstantié au corps et le vin au sang par la puissance divine." },
      { council: "Concile de Trente", session: "Session XIII", canon: "Sur la très sainte Eucharistie", decree: "Par la consécration du pain et du vin s'opère un changement de toute la substance du pain au corps du Christ notre Seigneur, et de toute la substance du vin en son sang." },
    ],
    canonicalReferences: ["CIC can. 897", "CIC can. 900 §1", "CIC can. 924 §1"],
    patristicFoundations: [
      "Saint Ambroise, De Sacramentis : « Avant la consécration c'est autre chose, après la consécration c'est le corps du Christ. Dis-moi, Seigneur, quel est le mot qui fait la différence ? Le mot du Christ, qui fait que ce qui était pain devienne corps. »",
      "Saint Jean Chrysostome, Homélie sur l'Évangile de Matthieu : « Ce n'est pas un homme qui fait que les offrandes deviennent corps et sang du Christ, mais le Christ lui-même qui a été crucifié pour nous. »",
    ],
    pastoralApplication: "L'adoration eucharistique (exposition du Saint-Sacrement, bénédiction, congrès eucharistiques) est une expression de la foi en la présence réelle. La communion est le moment où le fidèle reçoit véritablement le corps du Christ. La réserve eucharistique dans le tabernacule permet de « visiter » le Christ présent dans chaque église. La fête du Saint-Sacrement (Fête-Dieu) honore ce mystère.",
    relatedDogmas: ["efficacite-sacrements", "sept-sacrements", "caractere-sacramentel"],
  },
  {
    slug: "efficacite-sacrements",
    name: "Efficacité des sacrements ex opere operato",
    nameLatin: "Ex opere operato",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Les sacrements produisent la grâce par le fait même qu'ils sont accomplis avec les rites prescrits, indépendamment de la sainteté personnelle du ministre.",
    explanation:
      "La grâce des sacrements ne dépend pas de la « foi » ou de la vertu du prêtre qui les administre, mais de l'œuvre du Christ qui agit à travers eux. C'est le Christ lui-même qui est le ministre principal de chaque sacrement. Le prêtre est son instrument. Pourvu que la matière, la forme et l'intention soient présentes, le sacrement est valide et produit la grâce — à condition que le receveur n'y mette pas d'obstacle.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VII — Sur les sacrements en général",
        year: 1547,
      },
    ],
    biblicalReferences: ["Rm 6:3-4", "Tt 3:5", "Jn 3:5", "1 P 3:21", "Mc 16:16"],
    keywords: ["ex opere operato", "efficacité", "grâce", "sacrements", "instrument"],
    historicalContext: "La doctrine de l'efficacité ex opere operato fut définie au Concile de Trente contre les Réformateurs qui enseignaient que les sacrements ne sont efficaces que par la foi du receveur. Cette doctrine protège la gratuité de la grâce : le sacrement produit la grâce par la puissance du Christ, indépendamment de la sainteté ou de la foi du ministre.",
    theologicalBasis: "Les sacrements produisent la grâce « par le fait même qu'ils sont accomplis » (ex opere operato), à condition que la matière, la forme et l'intention soient présentes. Le ministre principal de chaque sacrement est le Christ lui-même : le prêtre n'est qu'un instrument. La grâce sacramentelle ne dépend donc pas de la vertu personnelle du prêtre, mais de l'œuvre du Christ. Le receveur doit néanmoins ne pas mettre d'obstacle à la grâce.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VII", canon: "Sur les sacrements en général", decree: "Les sacrements de la Nouvelle Alliance contiennent la grâce qu'ils signifient et la confèrent à ceux qui n'y mettent pas obstacle." },
    ],
    canonicalReferences: ["CIC can. 840", "CIC can. 849"],
    patristicFoundations: [
      "Saint Augustin, De Baptismo : « Judas baptisait, et c'était le Christ qui baptisait. Le baptême de Judas n'est pas inférieur à celui de Pierre, car c'est le Christ qui baptise dans les deux cas. »",
    ],
    pastoralApplication: "L'efficacité ex opere operato rassure les fidèles : la validité des sacrements ne dépend pas de la qualité du prêtre. Même un prêtre indigne peut administrer des sacrements valides. Le fidèle doit approcher les sacrements avec foi et disposition, mais peut avoir confiance dans l'action du Christ.",
    relatedDogmas: ["sept-sacrements", "caractere-sacramentel", "intention-sacramentelle", "transsubstantiation"],
  },
  {
    slug: "caractere-sacramentel",
    name: "Caractère sacramentel",
    nameLatin: "Character sacramentalis",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Les sacrements de Baptême, Confirmation et Ordre impriment dans l'âme un caractère spirituel indélébile qui demeure à jamais.",
    explanation:
      "Le caractère sacramentel est une marque spirituelle, invisible, imprimée dans l'âme par ces trois sacrements. Il ne peut être effacé ni par le péché ni par aucune autre cause. C'est pourquoi ces sacrements ne peuvent être reçus qu'une seule fois (ils ne sont pas réitérables). Le caractère est la disposition permanente à recevoir le culte divin et à le célébrer.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VII, Canon 9",
        year: 1547,
      },
    ],
    biblicalReferences: ["2 Co 1:21-22", "Ep 1:13", "Ep 4:30", "Rm 4:11"],
    keywords: ["caractère", "indélébile", "marque", "baptême", "confirmation", "ordre"],
    historicalContext: "La notion de caractère sacramentel fut développée par les théologiens médiévaux, notamment Pierre Lombard et saint Thomas d'Aquin. Le Concile de Trente la définit comme un dogme contre les Réformateurs qui rejetaient la distinction entre sacrements « réitérables » et « non-réitérables ».",
    theologicalBasis: "Le caractère sacramentel est une marque spirituelle, invisible et indélébile, imprimée dans l'âme par les sacrements de Baptême, Confirmation et Ordre. Il ne peut être effacé par aucune cause. C'est pourquoi ces sacrements ne peuvent être reçus qu'une seule fois (« non-réitérables »). Le caractère est la disposition permanente à recevoir ou à célébrer le culte divin.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VII", canon: "Canon 9", decree: "Si quelqu'un dit que dans les trois sacrements — baptême, confirmation et ordre — il n'est pas imprimé dans l'âme un caractère, c'est-à-dire un signe spirituel et indélébile, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 845 §1", "CIC can. 879"],
    patristicFoundations: [
      "Saint Augustin, De Baptismo : « Le caractère du Christ imprimé par le baptême est indélébile ; même le péché mortel ne l'efface pas. »",
    ],
    pastoralApplication: "Le caractère sacramentel explique pourquoi on ne peut être « rebaptisé » : même un apostat, s'il revient à la foi, est réconcilié par la pénitence, non par un nouveau baptême. Le caractère de l'ordre demeure même chez un prêtre qui a abandonné son ministère. Cette indélébilité est un signe de l'engagement irréversible de Dieu envers l'homme.",
    relatedDogmas: ["sept-sacrements", "efficacite-sacrements", "necessite-bapteme"],
  },
  {
    slug: "sept-sacrements",
    name: "Sept sacrements de la Nouvelle Alliance",
    nameLatin: "Septem sacramenta",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Le Christ a institué sept sacrements : Baptême, Confirmation, Eucharistie, Pénitence, Onction des malades, Ordre et Mariage.",
    explanation:
      "Contre les réformateurs qui réduisirent les sacrements à deux (baptême et cène), le Concile de Trente a confirmé le nombre sept comme étant d'institution divine. Chaque sacrement a été institué par le Christ (directement ou par l'intermédiaire des apôtres) et confère une grâce spécifique. Les sept sacrements couvrent toute la vie chrétienne : naissance (baptême), croissance (confirmation), nourriture (eucharistie), guérison (pénitence), force dans la maladie (onction), ministère (ordre), alliance (mariage).",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VII — Sur les sacrements",
        year: 1547,
      },
    ],
    biblicalReferences: [
      "Mt 28:19 (Baptême)",
      "Ac 8:14-17 (Confirmation)",
      "Mt 26:26-28 (Eucharistie)",
      "Jn 20:22-23 (Pénitence)",
      "Jc 5:14-15 (Onction)",
      "1 Tm 4:14 (Ordre)",
      "Mt 19:6 (Mariage)",
    ],
    keywords: ["sept sacrements", "institution divine", "baptême", "eucharistie", "pénitence"],
    historicalContext: "Le nombre sept des sacrements fut confirmé au Concile de Trente face aux Réformateurs qui n'en reconnaissaient que deux (baptême et cène). La tradition de sept sacrements remonte au Moyen Âge, systématisée par Pierre Lombard (XIIe siècle). Chaque sacrement a été institué par le Christ, directement ou par l'intermédiaire des apôtres.",
    theologicalBasis: "Les sept sacrements couvrent les étapes essentielles de la vie chrétienne : naissance spirituelle (baptême), croissance dans la foi (confirmation), nourriture spirituelle (eucharistie), guérison du péché (pénitence), force dans la maladie (onction des malades), ministère sacré (ordre), et alliance conjugale (mariage). Chaque sacrement confère une grâce spécifique et signifie ce qu'il produit.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VII", canon: "Sur les sacrements", decree: "Si quelqu'un dit que les sacrements de la Nouvelle Alliance ne sont pas tous institués par notre Seigneur Jésus-Christ, ou qu'il y en a plus ou moins de sept, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 840", "CIC can. 849"],
    patristicFoundations: [
      "Saint Thomas d'Aquin, Somme théologique III, q.65 : « Les sept sacrements correspondent aux besoins de la vie naturelle et spirituelle de l'homme. »",
    ],
    pastoralApplication: "La pastorale sacramentelle est le cœur de la vie paroissiale : baptêmes, confirmations, premières communions, confessions, mariages, ordinations et onctions des malades rythment la vie des fidèles. Chaque sacrement est un « rendez-vous » avec le Christ qui agit dans la personne du ministre.",
    relatedDogmas: ["transsubstantiation", "efficacite-sacrements", "caractere-sacramentel", "intention-sacramentelle"],
  },
  {
    slug: "intention-sacramentelle",
    name: "Intention requise pour les sacrements",
    nameLatin: "Intentio ministrorum",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Pour la validité des sacrements, le ministre doit avoir l'intention de faire ce que fait l'Église.",
    explanation:
      "Le ministre n'a pas besoin de « croire » personnellement dans le sacrement, mais il doit avoir l'intention objective de faire ce que l'Église fait. Un prêtre qui administrerait un sacrement comme pur « cérémonie sociale » sans aucune intention de faire un acte religieux le ferait invalidement. L'intention minimale suffit : vouloir accomplir le rite religieux. Cette intention peut être interne ou interprétative (l'intention habituelle d'agir selon les normes de l'Église).",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session VII, Canon 11",
        year: 1547,
      },
    ],
    biblicalReferences: ["Mt 28:19", "Mc 16:15-16"],
    keywords: ["intention", "ministre", "validité", "ce que fait l'Église"],
    historicalContext: "La question de l'intention sacramentelle fut posée dès les premiers siècles. Le Concile de Trente la définit comme condition de validité, répondant aux débats médiévaux sur les sacrements administrés par des ministres indignes ou hérétiques. L'Église a toujours considéré que le baptême des hérétiques est valide, pourvu que l'intention soit présente.",
    theologicalBasis: "Le ministre du sacrement doit avoir l'intention de « faire ce que fait l'Église ». Cette intention n'a pas besoin d'être une foi personnelle : un prêtre incroyant peut administrer des sacrements valides s'il a l'intention objective d'accomplir le rite chrétien. L'intention minimale suffit : vouloir accomplir le rite religieux. L'intention interprétative (l'intention habituelle d'agir selon les normes de l'Église) est également valide.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session VII", canon: "Canon 11", decree: "Si quelqu'un dit que, chez le ministre, en posant et en accomplissant le sacrement, l'intention n'est pas requise du moins d'accomplir ce que fait l'Église, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 845 §1"],
    patristicFoundations: [
      "Saint Augustin, Contra Cresconium : « Le baptême peut être donné par un méchant, pourvu qu'il ait l'intention de faire ce que fait l'Église. »",
    ],
    pastoralApplication: "L'intention sacramentelle garantit que les sacrements sont valides même dans des conditions imparfaites. Les fidèles peuvent avoir confiance dans la validité des sacrements reçus. Les doutes sur l'intention (cas rarissimes) sont résolus par le droit canonique qui présume la validité (CIC can. 845 §1).",
    relatedDogmas: ["efficacite-sacrements", "sept-sacrements", "caractere-sacramentel"],
  },
  {
    slug: "necessite-bapteme",
    name: "Nécessité du Baptême pour le salut",
    nameLatin: "Necessitas baptismatis",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Le Baptême d'eau est nécessaire au salut pour tous, selon la parole du Christ : « Nul, s'il ne renaît de l'eau et de l'Esprit, ne peut entrer dans le Royaume de Dieu ».",
    explanation:
      "Le Baptême est la porte de la vie chrétienne. Il efface le péché originel et les péchés personnels, fait de l'homme un enfant de Dieu et membre du Corps du Christ. L'Église reconnaît aussi le baptême de désir (vœu implicite de recevoir le sacrement) et le baptême de sang (martyr pour la foi), qui suppléent au baptême d'eau dans des cas exceptionnels.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session V — Sur le péché originel",
        year: 1546,
      },
      {
        authority: "Concile de Florence",
        document: "Décret pour les Jacobites",
        year: 1439,
      },
    ],
    biblicalReferences: ["Jn 3:5", "Mc 16:16", "Ac 2:38", "Mt 28:19", "1 P 3:21"],
    keywords: ["baptême", "nécessité", "eau", "renaissance", "salut"],
    historicalContext: "La nécessité du baptême fut affirmée dès les origines chrétiennes (Jn 3:5). Les Pères de l'Église ont développé les notions de baptême de désir et de baptême de sang pour résoudre le cas des catéchumènes morts avant le baptême et des martyrs non baptisés. Le Concile de Trente confirma que le baptême est la « porte des sacrements ».",
    theologicalBasis: "Le baptême d'eau est nécessaire de nécessité de moyen (non seulement de précepte) pour le salut. Cependant, l'Église reconnaît deux suppléances : le baptême de désir (le vœu implicite ou explicite de recevoir le sacrement, même si l'on n'a pas pu le recevoir) et le baptême de sang (le martyre pour la foi, qui confère la grâce baptismale). Ces suppléances ne diminuent pas la nécessité du baptême mais manifestent la miséricorde de Dieu.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session V", canon: "Sur le péché originel", decree: "Le baptême est nécessaire au salut." },
      { council: "Concile de Florence", canon: "Décret pour les Jacobites", decree: "Le baptême est la porte des sacrements : sans lui, nul ne peut entrer dans le Royaume de Dieu." },
    ],
    canonicalReferences: ["CIC can. 849", "CIC can. 864", "CIC can. 867"],
    patristicFoundations: [
      "Saint Ambroise, De obitu Valentiniani : « Je ne sais pas ce que je dois pleurer plus : sa mort ou le fait qu'il n'a pas reçu le baptême. Il avait le désir, du moins. Il avait l'intention de le recevoir. Dieu accepte le vœu. »",
      "Saint Augustin, De Baptismo : « Le martyre supplée au baptême d'eau, car l'amour parfait comble tout ce qui manque. »",
    ],
    pastoralApplication: "Le baptême des enfants est la pratique universelle : l'Église recommande de baptiser les enfants dans les premières semaines après la naissance. Les catéchuménat des adultes est un parcours de préparation au baptême. Le baptême est le premier des trois sacrements de l'initiation chrétienne (baptême, confirmation, eucharistie).",
    relatedDogmas: ["peche-originel", "caractere-sacramentel", "sept-sacrements", "efficacite-sacrements"],
  },
  {
    slug: "indissolubilite-mariage",
    name: "Indissolubilité du mariage",
    nameLatin: "Indissolubilitas matrimonii",
    category: DogmaCategory.SACRAMENTAL,
    definition:
      "Le mariage entre baptisés est absolument indissoluble ; aucun pouvoir humain ni aucune cause ne peut le dissoudre.",
    explanation:
      "Le Christ a élevé le mariage au rang de sacrement et a déclaré : « Ce que Dieu a uni, que l'homme ne le sépare pas » (Mt 19:6). Un mariage sacramentel consommé est absolument indissoluble. Même la séparation de corps (divorce civil) ne rompt pas le lien sacramentel. Un mariage sacramentel non consommé peut être dissous par le Pape par un privilège paulin (si un conjoint non baptisé refuse de vivre en paix).",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session XXIV — Sur le sacrement de mariage",
        year: 1563,
      },
    ],
    biblicalReferences: ["Mt 19:6", "Mt 19:9", "Mc 10:11-12", "Lc 16:18", "1 Co 7:10-11"],
    keywords: ["indissolubilité", "mariage", "sacrement", "lien", "union"],
    historicalContext: "L'indissolubilité du mariage fut affirmée par le Christ lui-même (Mt 19:6). Le Concile de Trente (1563) la réaffirma face aux Réformateurs qui autorisaient le divorce dans certains cas (adultère, abandon). La doctrine catholique distingue le mariage sacramentel consommé (absolument indissoluble) du mariage non consommé (dissoluble par le Pape) et du mariage entre non-baptisés (dissoluble par le privilège paulin).",
    theologicalBasis: "Le mariage entre baptisés est un sacrement qui signifie l'union du Christ et de son Église (Ep 5:25-32). Cette union est indissoluble parce que l'union du Christ avec l'Église est indissoluble. Le consentement mutuel des époux crée un lien que seul le Pape peut dissoudre dans des cas exceptionnels (mariage non consommé). L'indissolubilité protège la dignité des époux et le bien des enfants.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session XXIV", canon: "Sur le sacrement de mariage", decree: "Si quelqu'un dit que le lien du mariage peut être dissous par l'hérésie, la vie commune difficile ou l'absence volontaire d'un conjoint, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 1055 §1", "CIC can. 1056", "CIC can. 1141"],
    patristicFoundations: [
      "Saint Jean Chrysostome, Homélie sur le mariage : « Le mariage est un sacrement, une image de l'union du Christ avec l'Église. Celui qui brise cette union offense le Christ lui-même. »",
      "Saint Augustin, De Bono Conjugali : « Le bien du mariage demeure même chez les méchants, car le sacrement est indissoluble. »",
    ],
    pastoralApplication: "La pastorale matrimoniale accompagne les couples dans la préparation au mariage et la vie conjugale. Les procès en nullité matrimonia (CIC can. 1671-1707) examinent si le mariage était valide dès l'origine. L'accompagnement des couples en difficulté est un enjeu pastoral majeur (Familiaris Consortio, Amoris Laetitia).",
    relatedDogmas: ["sept-sacrements", "efficacite-sacrements", "redemption"],
  },

  // ═══════════════════════════════════════════════
  // ESCHATOLOGIE
  // ═══════════════════════════════════════════════
  {
    slug: "resurrection-morts",
    name: "Résurrection universelle des morts",
    nameLatin: "Resurrectio mortuorum",
    category: DogmaCategory.ESCHATOLOGICAL,
    definition:
      "À la fin du monde, tous les morts ressusciteront avec leurs corps, et chacun recevra selon ses œuvres.",
    explanation:
      "La résurrection des morts est un article du Credo. Au dernier jour, tous les hommes — bons et mauvais — ressusciteront avec leurs corps. Les corps des justes seront glorifiés, semblables au corps ressuscité du Christ. Les corps des damnés seront aussi ressuscités, mais pour la souffrance éternelle. Le corps ressuscité sera le même corps que celui qui a vécu sur terre, mais transformé.",
    sources: [
      {
        authority: "Concile de Constantinople I",
        document: "Symbole de Nicée-Constantinople",
        year: 381,
      },
      {
        authority: "Concile de Latran V",
        document: "Bulle Apostolici regiminis",
        year: 1513,
      },
    ],
    biblicalReferences: ["Jn 5:28-29", "Jn 6:39-40", "1 Co 15:12-58", "Dn 12:2", "Ap 20:12-13"],
    keywords: ["résurrection", "corps", "dernier jour", "mort", "glorification"],
    historicalContext: "La résurrection des morts est affirmée dès l'Ancien Testament (Dn 12:2, 2 M 7:9) et confirmée par le Christ (Jn 5:28-29). Les Sadducéens niaient la résurrection, mais Jésus leur répondit : « Vous errez, ne comprenant ni les Écritures ni la puissance de Dieu » (Mt 22:29). Saint Paul développa longuement cette doctrine en 1 Corinthiens 15.",
    theologicalBasis: "La résurrection des morts est un dogme de foi proclamé dans le Credo. Tous les hommes ressusciteront avec le même corps qu'ils avaient sur terre, mais transformé. Les corps des justes seront glorifiés, semblables au corps du Christ ressuscité (Ph 3:21). Les corps des damnés ressusciteront aussi, pour la souffrance. La résurrection est l'œuvre du Christ : « Je suis la résurrection et la vie » (Jn 11:25).",
    councilDetails: [
      { council: "Concile de Constantinople I", canon: "Symbole de Nicée-Constantinople", decree: "Nous attendons la résurrection des morts et la vie du siècle à venir." },
      { council: "Concile de Latran V", canon: "Apostolici regiminis", decree: "Tous les morts ressusciteront avec leurs corps, et chacun recevra selon ses œuvres." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 1176 §3"],
    patristicFoundations: [
      "Saint Paul, 1 Corinthiens 15:42-44 : « Semé corruptible, il ressuscitera incorruptible ; semé méprisable, il ressuscitera glorieux. »",
      "Saint Justin, Dialogue avec Tryphon : « Ceux qui aiment le Christ ressusciteront dans la gloire, mais ceux qui l'ont méprisé ressusciteront pour la punition. »",
      "Saint Augustin, De Civitate Dei : « Le corps ressuscité sera le même qui est mort, mais avec des qualités nouvelles et glorieuses. »",
    ],
    pastoralApplication: "La fête de la Commémoration des fidèles défunts (2 novembre) est l'occasion de prier pour les défunts en attendant la résurrection. La pratique chrétienne des funérailles est un acte de foi en la résurrection. Le corps du défunt est traité avec respect comme temple de l'Esprit et gage de la résurrection future.",
    relatedDogmas: ["resurrection-du-christ", "jugement-particulier", "jugement-dernier", "vision-beatifique", "enfer"],
  },
  {
    slug: "jugement-particulier",
    name: "Jugement particulier",
    nameLatin: "Iudicium particulare",
    category: DogmaCategory.ESCHATOLOGICAL,
    definition:
      "Au moment de la mort, chaque âme est jugée immédiatement par Dieu et envoyée au ciel, au purgatoire ou en enfer.",
    explanation:
      "Le jugement particulier a lieu immédiatement après la mort de chaque personne. Dieu évalue la vie de l'âme selon sa foi, ses œuvres, sa grâce. Trois destinations possibles : le ciel (si l'âme est en état de grâce et purifiée), le purgatoire (si l'âme est en état de grâce mais doit être purifiée), ou l'enfer (si l'âme est en état de péché mortel non repenti). Ce jugement est définitif et irréversible.",
    sources: [
      {
        authority: "Benoît XII",
        document: "Constitution Benedictus Deus",
        year: 1336,
      },
    ],
    biblicalReferences: ["Hé 9:27", "Lc 16:22-23", "Lc 23:43", "2 Co 5:8", "Ph 1:23"],
    keywords: ["jugement", "particulier", "mort", "ciel", "enfer", "purgatoire"],
    historicalContext: "Le jugement particulier (immédiatement après la mort) est distinct du jugement dernier (à la fin du monde). La doctrine fut développée par les Pères de l'Église et confirmée par Benoît XII en 1336, qui définit que les âmes des défunts jouissent ou souffrent immédiatement après la mort, sans attendre le jugement dernier.",
    theologicalBasis: "Au moment de la mort, l'âme est séparée du corps et comparaît devant Dieu. Le jugement est immédiat et définitif : l'âme est envoyée au ciel (si elle est en état de grâce et purifiée), au purgatoire (si elle est en état de grâce mais doit être purifiée), ou en enfer (si elle est en état de péché mortel non repenti). Ce jugement est irréversible.",
    councilDetails: [
      { council: "Benoît XII", canon: "Benedictus Deus", decree: "Les âmes des défunts, après la mort, jouissent de la vision béatifique ou souffrent dans l'enfer, immédiatement." },
    ],
    canonicalReferences: ["CIC can. 1176 §3"],
    patristicFoundations: [
      "Saint Paul, Hébreux 9:27 : « Il est réservé aux hommes de mourir une seule fois, après quoi vient le jugement. »",
      "Saint Augustin, De Civitate Dei : « Après la mort, l'âme reçoit immédiatement sa récompense ou sa peine, selon ce qu'elle a mérité. »",
    ],
    pastoralApplication: "Le jugement particulier donne un sens à chaque moment de la vie : chaque décision peut avoir une conséquence éternelle. Les prières pour les défunts sont une manifestation de la charité chrétienne : on peut aider les âmes du purgatoire par la prière, les messes et les indulgences. Le sacrement de l'onction des malades prépare l'âme au jugement particulier.",
    relatedDogmas: ["jugement-dernier", "enfer", "purgatoire", "vision-beatifique", "resurrection-morts"],
  },
  {
    slug: "jugement-dernier",
    name: "Jugement dernier",
    nameLatin: "Iudicium universale",
    category: DogmaCategory.ESCHATOLOGICAL,
    definition:
      "À la fin du monde, le Christ reviendra pour juger tous les hommes, et les morts ressusciteront pour être jugés publiquement.",
    explanation:
      "Le jugement dernier (ou universel) est distinct du jugement particulier. Il aura lieu au retour glorieux du Christ. Tous les hommes seront rassemblés et jugés publiquement. Les corps ressusciteront et seront réunis à leurs âmes. Ce jugement manifestera à tous la justice et la miséricorde de Dieu, et sera la consommation de l'histoire humaine.",
    sources: [
      {
        authority: "Concile Vatican II",
        document: "Gaudium et Spes §39",
        year: 1965,
      },
    ],
    biblicalReferences: ["Mt 25:31-46", "Ac 17:31", "Rm 14:10", "2 Co 5:10", "Ap 20:11-15"],
    keywords: ["jugement dernier", "universel", "fin du monde", "retour du christ"],
    historicalContext: "Le jugement dernier est distinct du jugement particulier. Alors que le jugement particulier juge chaque âme individuellement après la mort, le jugement dernier sera universel et public. Le Christ en parle dans l'Évangile (Mt 25:31-46) et Saint Paul le décrit en 2 Corinthiens 5:10. L'Église enseigne que ce jugement manifestera la justice de Dieu de manière publique.",
    theologicalBasis: "À la fin du monde, le Christ reviendra pour juger tous les hommes publiquement. Tous les morts ressusciteront et seront réunis à leurs corps. Le jugement dernier ne change pas la sentence du jugement particulier, mais la manifeste à tous. Il montrera à l'univers entier la justice et la miséricorde de Dieu, et sera la consommation de l'histoire humaine.",
    councilDetails: [
      { council: "Concile Vatican II", canon: "Gaudium et Spes §39", decree: "La terre elle-même, avec toutes ses créatures, sera transformée, car le Christ reviendra dans la gloire." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Civitate Dei : « Le jugement dernier est la manifestation de la justice divine devant tous les anges et tous les hommes. »",
      "Saint Grégoire le Grand, Morales sur Job : « Le jour du jugement sera un jour de joie pour les justes et de terreur pour les pécheurs. »",
    ],
    pastoralApplication: "Le jugement dernier inspire la responsabilité sociale : les œuvres de charité seront jugées (Mt 25:31-46 — « J'ai eu faim et vous m'avez donné à manger »). La prière « Viens, Seigneur Jésus » (Maranatha) exprime l'attente de la justice divine. Le dernier dimanche de l'année liturgique célèbre le Christ-Roi, qui reviendra juger le monde.",
    relatedDogmas: ["jugement-particulier", "resurrection-morts", "retour-glorieux", "enfer", "vision-beatifique"],
  },
  {
    slug: "enfer",
    name: "Existence et éternité de l'enfer",
    nameLatin: "Infernum",
    category: DogmaCategory.ESCHATOLOGICAL,
    definition:
      "L'enfer existe réellement. Les damnés y souffrent éternellement la peine du dam (privation de Dieu) et le feu. Leur souffrance est sans fin.",
    explanation:
      "L'enfer n'est pas une simple « métaphore ». C'est un état de peine éternelle pour ceux qui meurent en état de péché mortel. La peine principale est la privation de la vision de Dieu (peine du dam), qui est la plus grande souffrance possible. À cette peine s'ajoute la peine du sens (souffrances corporelles). Le dogme affirme que la peine de l'enfer est éternelle — il n'y a pas de « seconde chance » après la mort.",
    sources: [
      {
        authority: "Concile de Latran IV",
        document: "Profession de foi",
        year: 1215,
      },
      {
        authority: "Benoît XII",
        document: "Constitution Benedictus Deus",
        year: 1336,
      },
    ],
    biblicalReferences: ["Mt 25:41-46", "Mc 9:43-48", "Lc 16:19-31", "Ap 20:10", "2 Th 1:9"],
    keywords: ["enfer", "éternel", "damnation", "feu", "privation de dieu"],
    historicalContext: "L'existence de l'enfer est affirmée par le Christ lui-même à de multiples reprises dans l'Évangile (Mt 25:41, Mc 9:43). Le Concile de Latran IV (1215) et Benoît XII (1336) confirmèrent que l'enfer est un état réel de peine éternelle. Les théologiens ont débattu de la nature du « feu » de l'enfer (réel ou métaphorique), mais l'éternité de la peine est un dogme de foi.",
    theologicalBasis: "L'enfer est un état de peine éternelle pour ceux qui meurent en état de péché mortel. La peine principale est la privation de la vision de Dieu (peine du dam), qui est la plus grande souffrance possible car l'homme est créé pour voir Dieu. À cette peine s'ajoute la peine du sens (souffrances corporelles). La peine de l'enfer est éternelle : il n'y a pas de « seconde chance » après la mort. Le damné s'est librement éloigné de Dieu.",
    councilDetails: [
      { council: "Concile de Latran IV", canon: "Profession de foi", decree: "Les hommes ressusciteront avec leurs corps, et recevront selon leurs mérites, les bons dans la gloire, les méchants dans les peines éternelles." },
      { council: "Benoît XII", canon: "Benedictus Deus", decree: "Les âmes de ceux qui meurent en péché mortel descendent immédiatement en enfer, où elles souffrent les peines de l'enfer." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 1176 §3"],
    patristicFoundations: [
      "Saint Jean Chrysostome, Homélie sur Matthieu : « L'enfer n'est pas un châtiment arbitraire, mais la conséquence naturelle de s'être séparé de Dieu. »",
      "Saint Augustin, De Civitate Dei : « La peine la plus grande de l'enfer est la privation éternelle de la vision de Dieu, que l'homme désire par nature. »",
    ],
    pastoralApplication: "L'existence de l'enfer est proclamée pour réveiller les consciences, non pour semer la terreur. L'Église exhorte à la conversion et à la pénitence. Le sacrement de pénitence est le moyen de recouvrer la grâce et d'éviter l'enfer. La dévotion au Sacré-Cœur est une prière pour les pécheurs, afin qu'ils se convertissent avant la mort.",
    relatedDogmas: ["jugement-particulier", "jugement-dernier", "peche-originel", "purgatoire", "vision-beatifique"],
  },
  {
    slug: "purgatoire",
    name: "Purgatoire",
    nameLatin: "Purgatorium",
    category: DogmaCategory.ESCHATOLOGICAL,
    definition:
      "Les fidèles défunts qui meurent en état de grâce mais qui doivent être purifiés des péchés véniels ou des restes du péché, subissent une purification après la mort.",
    explanation:
      "Le purgatoire n'est ni le ciel ni l'enfer. C'est un état de purification temporaire pour les âmes qui sont sauvées (en état de grâce) mais qui ne sont pas encore assez pures pour voir Dieu face à face. Les souffrances du purgatoire sont réelles mais temporaires ; elles se terminent quand l'âme est purifiée. Les vivants peuvent aider ces âmes par la prière, les messes, les indulgences et les aumônes.",
    sources: [
      {
        authority: "Concile de Florence",
        document: "Décret pour les Grecs",
        year: 1439,
      },
      {
        authority: "Concile de Trente",
        document: "Session XXV — Décret sur le purgatoire",
        year: 1563,
      },
    ],
    biblicalReferences: ["2 M 12:46", "Mt 12:32", "1 Co 3:13-15", "Mt 5:25-26"],
    keywords: ["purgatoire", "purification", "souffrance", "temporaire", "prières pour les morts"],
    historicalContext: "Le dogme du purgatoire fut confirmé au Concile de Florence (1439) et au Concile de Trente (1563). La pratique de prier pour les morts est attestée dès l'Ancien Testament (2 M 12:46). Les Réformateurs rejetèrent le purgatoire, le considérant comme incompatible avec la suffisance de la rédemption du Christ. L'Église catholique maintint que le purgatoire est une expression de la miséricorde divine : les âmes sauvées mais impures y sont purifiées.",
    theologicalBasis: "Le purgatoire est un état de purification temporaire pour les âmes qui sont sauvées (en état de grâce) mais qui ne sont pas encore assez pures pour voir Dieu face à face. Les souffrances du purgatoire sont réelles mais temporaires. Elles consistent principalement en la privation temporaire de la vision de Dieu (peine du dam temporaire) et possiblement en souffrances expiatoires. Les vivants peuvent aider les âmes du purgatoire par la prière, les messes, les indulgences et les aumônes.",
    councilDetails: [
      { council: "Concile de Florence", canon: "Décret pour les Grecs", decree: "Les âmes qui, après avoir reçu la rémission de leurs péchés, meurent dans la charité, avant d'avoir satisfait par des fruits dignes de pénitence pour les péchés commis et omis, sont purifiées après la mort par des peines purgatoires." },
      { council: "Concile de Trente", session: "Session XXV", canon: "Décret sur le purgatoire", decree: "Il y a un purgatoire, et les âmes qui y sont retenues sont aidées par les suffrages des fidèles, et spécialement par le sacrifice acceptable de l'autel." },
    ],
    canonicalReferences: ["CIC can. 1176 §3", "CIC can. 901"],
    patristicFoundations: [
      "Saint Grégoire le Grand, Dialogues : « Je crois que le feu purificateur est très réel, et que l'âme est purifiée après la mort des fautes légères qui ne l'empêchent pas d'entrer au ciel. »",
      "Saint Augustin, De Civitate Dei : « Certaines peines après la mort ne sont ni si grandes qu'elles puissent être soulagées par les prières des vivants, ni si petites qu'elles n'aient pas besoin de ces prières. »",
    ],
    pastoralApplication: "Les défunts sont commémorés lors de la fête de la Commémoration de tous les fidèles défunts (2 novembre). Les messes pour les défunts, les indulgences plénières applicables aux défunts (1-8 novembre), et les prières du Rosaire sont des moyens d'aider les âmes du purgatoire. La charité envers les défunts est une œuvre de miséricorde spirituelle.",
    relatedDogmas: ["enfer", "vision-beatifique", "jugement-particulier", "indulgences"],
  },
  {
    slug: "vision-beatifique",
    name: "Vision béatifique",
    nameLatin: "Visio beatifica",
    category: DogmaCategory.ESCHATOLOGICAL,
    definition:
      "Les élus, dans la gloire du ciel, voient Dieu face à face (intuitu), tel qu'il est, et cette vision les comble de bonheur parfait et éternel.",
    explanation:
      "La vision béatifique est la récompense suprême des élus. Elle consiste à voir Dieu « tel qu'il est » (1 Jn 3:2), non par la foi ou les images, mais par une intuition directe de l'essence divine. Cette vision transforme l'homme : il participe à la nature divine, est rempli de charité, et jouit d'un bonheur parfait, sans mélange de souffrance. C'est la « vie éternelle » promise par le Christ.",
    sources: [
      {
        authority: "Benoît XII",
        document: "Constitution Benedictus Deus",
        year: 1336,
      },
      {
        authority: "Concile de Florence",
        document: "Décret pour les Jacobites",
        year: 1439,
      },
    ],
    biblicalReferences: ["1 Jn 3:2", "1 Co 13:12", "Mt 5:8", "Ap 22:4", "Jn 17:3"],
    keywords: ["vision béatifique", "ciel", "face à face", "bonheur", "gloire"],
    historicalContext: "La vision béatifique fut définie par Benoît XII en 1336, qui trancha le débat médiéval sur la question de savoir si les âmes des justes jouissent de la vision béatifique avant le jugement dernier. Les franciscains disaient oui (Benoît XII), les dominicains hésitaient. La bulle Benedictus Deus confirma que les âmes des justes voient la divine essence « face à face » immédiatement après la mort.",
    theologicalBasis: "La vision béatifique est la récompense suprême des élus. Elle consiste à voir Dieu « tel qu'il est » (1 Jn 3:2), non par la foi ou les images, mais par une intuition directe de l'essence divine. Cette vision transforme l'homme : il participe à la nature divine, est rempli de charité, et jouit d'un bonheur parfait. La vision béatifique est la « vie éternelle » promise par le Christ : « La vie éternelle, c'est qu'ils te connaissent, toi le seul vrai Dieu » (Jn 17:3).",
    councilDetails: [
      { council: "Benoît XII", canon: "Benedictus Deus", decree: "Les âmes des justes voient la divine essence par une vision intuitive, face à face, et jouissent de cette vision." },
      { council: "Concile de Florence", canon: "Décret pour les Jacobites", decree: "Les âmes des justes, après la mort et avant la résurrection, voient la divine essence par une vision intuitive face à face." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Trinitate : « Nous le verrons tel qu'il est. Cette vision est la vie éternelle, le repos parfait, le bonheur sans fin. »",
      "Saint Grégoire de Nysse, Vie de Moïse : « La vision de Dieu est un mouvement éternel vers toujours plus de plénitude, car Dieu est infini. »",
    ],
    pastoralApplication: "Le ciel est la destination ultime du chrétien : « Mon Père vous a préparé le Royaume depuis la fondation du monde » (Mt 25:34). La liturgie anticipe le ciel : l'eucharistie est « gage de la gloire future ». Les saints canonisés sont reconnus comme jouissant de la vision béatifique. La fête de la Toussaint (1er novembre) honore tous les saints au ciel.",
    relatedDogmas: ["jugement-particulier", "resurrection-morts", "purgatoire", "enfer", "sainte-trinite"],
  },

  // ═══════════════════════════════════════════════
  // ANTHROPOLOGIE
  // ═══════════════════════════════════════════════
  {
    slug: "existence-dieu",
    name: "Existence de Dieu",
    nameLatin: "Existentia Dei",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "Dieu, créateur de toutes choses visibles et invisibles, existe réellement. Son existence peut être connue par la raison naturelle à partir des créatures.",
    explanation:
      "L'existence de Dieu est un préambule de la foi. Elle peut être connue avec certitude par la lumière naturelle de la raison humaine, à partir des créatures (les « cinq voies » de Saint Thomas d'Aquin : mouvement, causalité, contingence, degrés de perfection, finalité). La révélation confirme ce que la raison peut atteindre, et révèle en plus les mystères de la vie intime de Dieu (Trinité, Incarnation).",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Dei Filius",
        year: 1870,
      },
    ],
    biblicalReferences: ["Rm 1:19-20", "Ps 19:1-4", "He 11:6", "Gn 1:1", "Ex 3:14"],
    keywords: ["existence", "dieu", "créateur", "raison", "preuves"],
    historicalContext: "L'existence de Dieu est un préambule de la foi : elle peut être connue avec certitude par la raison naturelle. Le Concile Vatican I (1870) définit que l'existence de Dieu est connaissable par les créatures à la lumière naturelle de la raison. Saint Thomas d'Aquin proposa les célèbres « cinq voies » (Quinque Viae) pour démontrer l'existence de Dieu par la raison.",
    theologicalBasis: "Dieu peut être connu avec certitude par la raison humaine à partir des créatures (Rm 1:19-20). Les cinq voies de Saint Thomas d'Aquin partent de l'expérience du monde : (1) le mouvement exige un premier moteur immobile ; (2) la causalité exige une première cause ; (3) la contingence exige un être nécessaire ; (4) les degrés de perfection supposent un être parfait ; (5) la finalité suppose une intelligence ordonnatrice. La révélation confirme ce que la raison atteint.",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Dei Filius", decree: "Si quelqu'un dit que le Dieu unique et vrai, notre Créateur et Seigneur, ne peut pas être connu avec certitude par la lumière naturelle de la raison humaine à partir des choses créées, qu'il soit anathème." },
    ],
    canonicalReferences: ["CIC can. 748 §1", "CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Paul, Romains 1:19-20 : « Ce qui est invisible en Dieu, sa puissance éternelle et sa divinité, se rend intelligible par ses œuvres depuis la création du monde. »",
      "Saint Thomas d'Aquin, Somme contre les Gentils : « La connaissance de Dieu que la raison peut acquérir est le prélude à la connaissance surnaturelle par la foi. »",
    ],
    pastoralApplication: "L'apologétique chrétienne utilise la raison pour montrer la crédibilité de la foi. Les arguments cosmologiques, téléologiques et moraux pour l'existence de Dieu sont des outils d'évangélisation. Le catéchisme de l'Église catholique (CEC 31-35) présente ces arguments de manière accessible.",
    relatedDogmas: ["creation", "providence", "sainte-trinite", "loi-naturelle"],
  },
  {
    slug: "creation",
    name: "Création ex nihilo",
    nameLatin: "Creatio ex nihilo",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "Dieu a créé toutes choses visibles et invisibles à partir de rien (ex nihilo), par un acte libre de sa volonté.",
    explanation:
      "Le monde n'est pas éternel, ni le produit du hasard. Il a été créé par Dieu « au commencement ». Créer, au sens strict, c'est faire exister quelque chose à partir de rien. Seul Dieu peut créer. La création est un acte libre : Dieu n'était pas « obligé » de créer. Il a créé pour manifester sa bonté et partager sa gloire. L'homme est le sommet de la création, créé à l'image de Dieu.",
    sources: [
      { authority: "Concile de Latran IV", document: "Constitution Firmiter", year: 1215 },
      {
        authority: "Concile Vatican I",
        document: "Constitution Dei Filius",
        year: 1870,
      },
    ],
    biblicalReferences: ["Gn 1:1", "2 M 7:28", "He 11:3", "Col 1:16", "Jn 1:3"],
    keywords: ["création", "ex nihilo", "à partir de rien", "commencement", "liberté"],
    historicalContext: "Le dogme de la création ex nihilo fut défini au Concile de Latran IV (1215) et réaffirmé au Concile Vatican I (1870). Il s'oppose à l'éternité du monde (Aristote, les Manichéens), au panthéisme (Dieu = monde), et au matérialisme (le monde existe par hasard). La création est un acte libre de Dieu, non une nécessité de sa nature.",
    theologicalBasis: "Dieu a créé toutes choses visibles et invisibles « à partir de rien » (ex nihilo), par un acte libre de sa volonté. Créer, au sens strict, c'est faire exister quelque chose à partir du néant. Seul Dieu peut créer. La création est un acte de la Trinité : « Par lui [le Verbe] tout a été fait » (Jn 1:3). Le monde a eu un commencement (Gn 1:1) et n'est pas éternel. L'homme est le sommet de la création, créé à l'image de Dieu (Gn 1:27).",
    councilDetails: [
      { council: "Concile de Latran IV", canon: "Firmiter", decree: "Dieu a créé de rien, en même temps, l'une et l'autre créature, spirituelle et corporelle, l'ange et le monde, et ensuite l'homme." },
      { council: "Concile Vatican I", canon: "Dei Filius", decree: "Dieu, par sa bonté et sa toute-puissance, a créé de rien le monde." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 748 §1"],
    patristicFoundations: [
      "Saint Augustin, Confessions : « Tu as fait le ciel et la terre, non de ta substance, car alors ils seraient égaux à ton Fils unique, mais à partir de rien. »",
      "Saint Basile, Hexaéméron : « Au commencement Dieu créa le ciel et la terre. Ne cherche pas ce qu'il y avait avant : le temps lui-même a été créé avec le monde. »",
    ],
    pastoralApplication: "Le respect de la création est une responsabilité chrétienne (encyclique Laudato Si' du Pape François). Le dimanche est le jour du repos : « Dieu se reposa au septième jour » (Gn 2:2). La création est « très bonne » (Gn 1:31) et doit être reçue comme un don de Dieu.",
    relatedDogmas: ["existence-dieu", "providence", "peche-originel", "sainte-trinite"],
  },
  {
    slug: "providence",
    name: "Providence divine",
    nameLatin: "Providentia Dei",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "Dieu gouverne le monde avec sagesse et amour, dirigeant toutes choses vers leur fin dernière, sans supprimer la liberté humaine.",
    explanation:
      "La Providence n'est pas le fatalisme : Dieu ne détruit pas la liberté de l'homme ni les causes secondes. Il dirige le monde avec sagesse, utilisant les causes naturelles et les libres décisions humaines pour accomplir son plan. La Providence est particulière (Dieu s'occupe de chaque créature) et universelle (Dieu gouverne l'histoire). Même le mal et la souffrance sont permis par Dieu en vue d'un plus grand bien.",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Dei Filius",
        year: 1870,
      },
    ],
    biblicalReferences: ["Mt 6:26-30", "Mt 10:29-31", "Rm 8:28", "Sg 8:1", "Pr 16:9"],
    keywords: ["providence", "gouvernement", "sagesse", "plan divin", "liberté"],
    historicalContext: "La Providence divine est enseignée par toute l'Écriture (Mt 6:26-30, Sg 8:1). Le Concile Vatican I (1870) la définit contre le déisme (Dieu ne s'occupe pas du monde) et le panthéisme (Dieu est tout). La Providence n'est pas le fatalisme : Dieu dirige le monde avec sagesse, sans supprimer la liberté humaine ni les causes secondes.",
    theologicalBasis: "La Providence est le gouvernement sage et aimant de Dieu sur le monde. Elle est particulière (Dieu s'occupe de chaque créature, même des moineaux — Mt 10:29) et universelle (Dieu gouverne l'histoire). Dieu utilise les causes naturelles et les libres décisions humaines pour accomplir son plan. Le mal et la souffrance sont permis par Dieu en vue d'un plus grand bien (Rm 8:28).",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Dei Filius", decree: "Tout ce que Dieu a créé, il le gouverne et le dirige par sa Providence, qui s'étend du ciel à la terre. »" },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Civitate Dei : « Rien n'arrive dans le monde que par la volonté ou la permission de Dieu. »",
      "Saint Thomas d'Aquin, Somme théologique I, q.22 : « La Providence divine ne détruit pas la contingence ni la liberté des créatures. »",
    ],
    pastoralApplication: "La confiance en la Providence est au cœur de la vie spirituelle : « Cherchez d'abord le Royaume de Dieu, et tout le reste vous sera donné par surcroît » (Mt 6:33). L'abandon à la Providence est l'attitude du chrétien face aux épreuves. La prière de demande est une expression de la confiance en la Providence.",
    relatedDogmas: ["existence-dieu", "creation", "liberte-humaine", "sainte-trinite"],
  },
  {
    slug: "liberte-humaine",
    name: "Liberté de la volonté humaine",
    nameLatin: "Libertas arbitrii",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "L'homme possède un véritable libre arbitre, blessé par le péché originel mais non détruit. La grâce ne supprime pas la liberté mais la guérit et l'élève.",
    explanation:
      "Le libre arbitre est un don de Dieu créé dans la nature humaine. La chute l'a blessé (concupiscence) mais ne l'a pas anéanti. L'homme peut encore connaître le bien et choisir librement, même si cela lui est plus difficile. La grâce divine ne supprime pas la liberté : elle la guérit, l'éclaire et la fortifie. La collaboration entre la grâce et la liberté est un mystère central de la vie chrétienne.",
    sources: [
      { authority: "Concile d'Orange", document: "Canons sur la grâce", year: 529 },
      {
        authority: "Concile de Trente",
        document: "Session VI — Décret sur la justification",
        year: 1547,
      },
    ],
    biblicalReferences: ["Dt 30:19", "Sir 15:14-17", "Mt 23:37", "Ga 5:13", "Ph 2:12-13"],
    keywords: ["liberté", "libre arbitre", "volonté", "grâce", "choix"],
    historicalContext: "Le libre arbitre fut affirmé contre le déterminisme stoïcien, le fatalisme manichéen, et le déterminisme luthérien/calviniste. Le Concile d'Orange (529) affirma que la liberté est blessée mais non détruite par le péché originel. Le Concile de Trente (1547) réaffirma la liberté de la volonté face à Luther qui niait le libre arbitre après la chute.",
    theologicalBasis: "L'homme possède un véritable libre arbitre : la faculté de choisir entre le bien et le mal. Ce don divin fut blessé par le péché originel (concupiscence) mais non détruit. L'homme peut encore connaître le bien et choisir librement, même si cela lui est plus difficile. La grâce ne supprime pas la liberté : elle la guérit, l'éclaire et la fortifie. La collaboration entre la grâce et la liberté est le mystère central de la vie chrétienne.",
    councilDetails: [
      { council: "Concile d'Orange", canon: "Canons sur la grâce", decree: "L'homme, même après le péché, possède le libre arbitre, bien qu'il soit blessé et affaibli." },
      { council: "Concile de Trente", session: "Session VI", canon: "Décret sur la justification", decree: "La liberté de l'homme n'est ni détruite ni abolie par la grâce." },
    ],
    canonicalReferences: ["CIC can. 204 §1", "CIC can. 1321 §1"],
    patristicFoundations: [
      "Saint Irénée de Lyon, Adversus Haereses : « Dieu a créé l'homme avec le libre arbitre, pour qu'il soit maître de ses actes. »",
      "Saint Augustin, De Gratia et Libero Arbitrio : « La grâce ne détruit pas la liberté, mais la guérit et l'élève. »",
    ],
    pastoralApplication: "La liberté humaine est le fondement de la responsabilité morale et de l'imputabilité des péchés (CIC can. 1321). Le sacrement de pénitence suppose la liberté : le pécheur doit librement se repentir et vouloir changer. La vie chrétienne est une coopération libre avec la grâce.",
    relatedDogmas: ["necessite-grace", "grace-actuelle", "peche-originel", "loi-naturelle"],
  },
  {
    slug: "immortalite-ame",
    name: "Immortalité de l'âme",
    nameLatin: "Immortalitas animae",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "L'âme humaine est spirituelle, immortelle et ne périt pas avec le corps. Elle subsiste après la mort et sera réunie à son corps au jour de la résurrection.",
    explanation:
      "L'âme est la forme substantielle du corps humain. En tant que spirituelle (immatérielle), elle ne peut pas se corrompre comme les êtres matériels. Après la mort du corps, l'âme continue d'exister et est soumise au jugement particulier. Au dernier jour, elle sera réunie à son corps ressuscité. L'immortalité de l'âme est un dogme de foi, distinct de la simple « survie » philosophique.",
    sources: [
      {
        authority: "Concile de Latran V",
        document: "Bulle Apostolici regiminis",
        year: 1513,
      },
    ],
    biblicalReferences: ["Mt 10:28", "Lc 16:19-31", "2 Co 5:1-10", "Ph 1:23", "Sg 3:1-4"],
    keywords: ["âme", "immortalité", "spirituelle", "subsiste après la mort"],
    historicalContext: "L'immortalité de l'âme fut affirmée par la philosophie platonicienne et confirmée par la révélation chrétienne. Le Concile de Latran V (1513) la définit contre les averroïstes qui niaient l'immortalité de l'âme individuelle. Le dogme chrétien va au-delà de la simple immortalité philosophique : l'âme sera réunie à son corps au jour de la résurrection.",
    theologicalBasis: "L'âme est la forme substantielle du corps humain. En tant que spirituelle (immatérielle), elle ne peut pas se corrompre comme les êtres matériels. Après la mort, l'âme continue d'exister et est soumise au jugement particulier. Au dernier jour, elle sera réunie à son corps ressuscité. L'immortalité de l'âme est distincte de la simple « survie » philosophique : c'est une immortalité personnelle confirmée par la résurrection.",
    councilDetails: [
      { council: "Concile de Latran V", canon: "Apostolici regiminis", decree: "L'âme humaine est immortelle, elle ne périt pas avec le corps." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Immortalitate Animae : « L'âme est immortelle parce qu'elle est spirituelle, et que l'esprit ne peut pas se corrompre. »",
      "Saint Thomas d'Aquin, Somme théologique I, q.75 : « L'âme humaine est incorruptible par nature, car elle est subsistante et forme substantielle. »",
    ],
    pastoralApplication: "L'immortalité de l'âme donne sens à la vie : chaque décision a une portée éternelle. Les funérailles chrétiennes proclament que la mort n'est pas la fin : « Je suis la résurrection et la vie » (Jn 11:25). La prière pour les défunts suppose l'immortalité : les âmes existent encore et peuvent bénéficier de nos prières.",
    relatedDogmas: ["spiritualite-ame", "jugement-particulier", "resurrection-morts", "vision-beatifique"],
  },
  {
    slug: "spiritualite-ame",
    name: "Spiritualité de l'âme",
    nameLatin: "Spiritualitas animae",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "L'âme humaine est une substance spirituelle, douée d'intellect et de volonté, et constitue le principe vital du corps.",
    explanation:
      "L'âme n'est pas un épiphénomène de la matière (matérialisme), ni un « fantôme » prisonnier du corps (gnosticisme). Elle est la forme substantielle du corps humain, son principe d'animation et de vie. En tant que spirituelle, elle possède des facultés non matérielles : l'intelligence (qui connaît les vérités universelles) et la volonté (qui aime le bien absolu). L'âme et le corps forment une unité substantielle : l'homme est un composé d'âme et de corps.",
    sources: [
      { authority: "Concile de Vienne", document: "Fidei catholicae", year: 1312 },
      {
        authority: "Concile de Latran V",
        document: "Bulle Apostolici regiminis",
        year: 1513,
      },
    ],
    biblicalReferences: ["Gn 2:7", "Mt 10:28", "Gn 1:27", "Wis 2:23"],
    keywords: ["âme", "spirituelle", "intellect", "volonté", "forme substantielle"],
    historicalContext: "La spiritualité de l'âme fut définie au Concile de Vienne (1312) contre les théologiens qui, sous l'influence d'Averroès, niaient que l'âme intellective soit la forme substantielle du corps. Le Concile déclara que l'âme est « forme substantielle du corps humain ».",
    theologicalBasis: "L'âme est une substance spirituelle douée d'intellect et de volonté. Elle n'est pas un épiphénomène de la matière (matérialisme), ni un « fantôme » prisonnier du corps (gnosticisme). Elle est la forme substantielle du corps humain, son principe d'animation. En tant que spirituelle, elle possède des facultés non matérielles : l'intelligence (qui connaît les vérités universelles) et la volonté (qui aime le bien absolu).",
    councilDetails: [
      { council: "Concile de Vienne", canon: "Fidei catholicae", decree: "L'âme intellective est véritablement, par elle-même et essentiellement, la forme du corps humain." },
      { council: "Concile de Latran V", canon: "Apostolici regiminis", decree: "L'âme est la forme substantielle du corps, principe par lequel le corps vit." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Thomas d'Aquin, Somme théologique I, q.76 : « L'âme est la forme du corps ; c'est par elle que l'homme est ce qu'il est : un être vivant, animal, raisonnable. »",
    ],
    pastoralApplication: "La spiritualité de l'âme fonde la dignité de la personne humaine : l'homme n'est pas qu'un corps matériel, mais un composé d'âme et de corps. La prière, la méditation et la vie spirituelle sont des activités de l'âme en relation avec Dieu. La formation de l'intelligence et de la volonté est une responsabilité chrétienne.",
    relatedDogmas: ["immortalite-ame", "existence-dieu", "liberte-humaine", "loi-naturelle"],
  },
  {
    slug: "loi-naturelle",
    name: "Loi naturelle",
    nameLatin: "Lex naturalis",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "Il existe dans le cœur de tout homme une loi naturelle, écrite par Dieu, qui lui fait connaître le bien et le mal et qui est universelle et immuable.",
    explanation:
      "La loi naturelle n'est pas une convention sociale, mais l'inscription dans la nature humaine de la loi éternelle de Dieu. Tout homme, par sa raison, peut connaître les principes fondamentaux de la morale : faire le bien, éviter le mal, ne pas tuer, ne pas mentir, etc. Cette loi est universelle (valable en tout temps et en tout lieu) et immuable dans ses principes. Elle peut être obscurcie par le péché, mais jamais entièrement effacée.",
    sources: [
      {
        authority: "Concile Vatican I",
        document: "Constitution Dei Filius",
        year: 1870,
      },
      {
        authority: "Concile de Trente",
        document: "Session VI — Décret sur la justification",
        year: 1547,
      },
    ],
    biblicalReferences: ["Rm 2:14-15", "Rm 1:19-20", "Mt 5:17", "Dt 30:15-16"],
    keywords: ["loi naturelle", "morale", "raison", "universelle", "immuable"],
    historicalContext: "La notion de loi naturelle remonte à la philosophie grecque (Aristote, stoïciens) et fut reprise par Saint Paul (Rm 2:14-15). Saint Thomas d'Aquin la systématisa. Le Concile Vatican I (1870) et le Concile de Trente (1547) confirmèrent que la loi naturelle est un don de Dieu inscrit dans le cœur de tout homme. La théologie morale moderne repose sur la loi naturelle (Veritatis Splendor).",
    theologicalBasis: "La loi naturelle est l'inscription dans la nature humaine de la loi éternelle de Dieu. Tout homme, par sa raison, peut connaître les principes fondamentaux de la morale : faire le bien, éviter le mal, ne pas tuer, ne pas mentir, respecter la dignité humaine. Cette loi est universelle (valable en tout temps et en tout lieu) et immuable dans ses principes. Elle peut être obscurcie par le péché, mais jamais entièrement effacée.",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Dei Filius", decree: "La loi morale naturelle est inscrite par Dieu dans le cœur de tout homme." },
      { council: "Concile de Trente", session: "Session VI", canon: "Décret sur la justification", decree: "La loi naturelle peut être connue par tous et oblige tous les hommes." },
    ],
    canonicalReferences: ["CIC can. 747 §2", "CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Paul, Romains 2:14-15 : « Quand les païens, qui n'ont pas la loi, font naturellement ce que prescrit la loi, ils sont une loi pour eux-mêmes, puisqu'ils montrent l'œuvre de la loi écrite dans leurs cœurs. »",
      "Saint Thomas d'Aquin, Somme théologique I-II, q.94 : « La loi naturelle n'est rien d'autre que la participation de la loi éternelle à la créature raisonnable. »",
    ],
    pastoralApplication: "La loi naturelle est le fondement du dialogue entre l'Église et le monde : elle est accessible à tout homme de bonne volonté, croyant ou non. L'enseignement social de l'Église repose sur la loi naturelle : dignité humaine, bien commun, subsidiarité, solidarité. Le magistère utilise la loi naturelle pour enseigner sur la bioéthique, le mariage et la sexualité.",
    relatedDogmas: ["existence-dieu", "liberte-humaine", "peche-originel", "creation"],
  },
  {
    slug: "culte-saints",
    name: "Culte des saints et invocation",
    nameLatin: "Cultus sanctorum",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "Il est juste et salutaire d'invoquer les saints au ciel et de demander leur intercession auprès de Dieu.",
    explanation:
      "Le culte des saints (dulie) est différent du culte rendu à Dieu (latrie). On ne « prie pas les saints » comme on prie Dieu : on leur demande d'intercéder pour nous, comme on demanderait à un ami de prier. Les saints au ciel, unis à Dieu dans la vision béatifique, peuvent nous aider par leur intercession. Le culte des saints est un témoignage de la communion des saints et de l'espérance de la résurrection.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session XXV — Décret sur le culte des saints",
        year: 1563,
      },
      {
        authority: "Concile Vatican II",
        document: "Lumen Gentium §50",
        year: 1964,
      },
    ],
    biblicalReferences: ["Ap 5:8", "Ap 8:3-4", "Jc 5:16-17", "2 M 15:14", "He 12:1"],
    keywords: ["saints", "intercession", "invocation", "dulie", "communion des saints"],
    historicalContext: "Le culte des saints remonte aux premiers siècles chrétiens : le martyre de Saint Polycarpe (155) mentionne déjà la vénération des reliques. Le culte des saints fut affirmé contre les iconoclastes (VIIIe siècle) et les Réformateurs (XVIe siècle) qui le rejetaient comme idolâtrie. Le Concile de Trente (1563) confirma que le culte des saints est légitime et salutaire.",
    theologicalBasis: "Le culte des saints (dulie) est différent du culte rendu à Dieu (latrie). On ne « prie pas les saints » comme on prie Dieu : on leur demande d'intercéder pour nous auprès de Dieu, comme on demanderait à un ami de prier pour nous. Les saints au ciel, unis à Dieu dans la vision béatifique, peuvent nous aider par leur intercession. Le culte des saints est un témoignage de la communion des saints et de l'espérance de la résurrection.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session XXV", canon: "Décret sur le culte des saints", decree: "Les saints qui règnent avec le Christ offrent leurs prières à Dieu pour les hommes. Il est bon et salutaire de les invoquer humblement." },
      { council: "Concile Vatican II", canon: "Lumen Gentium §50", decree: "L'Église a toujours cru que les apôtres et les martyrs du Christ, unis plus intimement à lui, nous aident par leur intercession." },
    ],
    canonicalReferences: ["CIC can. 1186", "CIC can. 1190"],
    patristicFoundations: [
      "Saint Jérôme, Contre Vigilance : « Si les apôtres et les martyrs, encore dans le corps, peuvent prier pour les autres, combien plus après avoir reçu la couronne ! »",
      "Saint Jean Damascène, De Fide Orthodoxa : « Nous vénérons les saints comme les amis de Dieu, et nous demandons leur intercession. »",
    ],
    pastoralApplication: "La fête de la Toussaint (1er novembre) honore tous les saints. Les saints patrons sont invoqués pour la protection des paroisses, des pays et des professions. Les reliques des saints sont conservées avec vénération dans les autels. La canonisation est le processus par lequel l'Église reconnaît qu'un fidèle est au ciel et peut être invoqué publiquement.",
    relatedDogmas: ["vision-beatifique", "culte-images", "sainte-trinite"],
  },
  {
    slug: "culte-images",
    name: "Culte des images sacrées",
    nameLatin: "Cultus imaginum",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "Il est légitime de rendre un culte d'honneur (vénération relative) aux images sacrées du Christ, de la Vierge et des saints, sans que l'adoration s'adresse à l'image elle-même.",
    explanation:
      "Les iconoclastes (briseurs d'images) prétendaient que toute image était une idolâtrie. Le IIe Concile de Nicée a défini que le culte des images est légitime, car « l'honneur rendu à l'image remonte au prototype ». On ne vénère pas le bois ou la peinture, mais la personne représentée. Cette vénération est relative (elle va à la personne, pas au support). L'adoration (latrie) est réservée à Dieu seul.",
    sources: [
      {
        authority: "IIe Concile de Nicée",
        document: "Définition sur les saintes icônes",
        year: 787,
      },
    ],
    biblicalReferences: ["Ex 25:18-22", "Nb 21:8-9", "1 R 6:23-28", "Hé 9:5"],
    keywords: ["images", "icônes", "vénération", "iconoclastes", "prototype"],
    historicalContext: "La crise iconoclaste (726-843) déchira l'Empire byzantin. L'empereur Léon III l'Isaurien ordonna la destruction des images, sous l'influence de l'islam qui interdit toute représentation. Le IIe Concile de Nicée (787) condamna l'iconoclasme et définit la légitimité du culte des images. Le Triomphe de l'Orthodoxie (843) marque la fin définitive de l'iconoclasme.",
    theologicalBasis: "Le culte des images (vénération relative) est légitime car « l'honneur rendu à l'image remonte au prototype » (Saint Jean Damascène). On ne vénère pas le bois ou la peinture (ce serait idolâtrie), mais la personne représentée (le Christ, la Vierge, les saints). Cette vénération est relative (elle va à la personne, pas au support). L'adoration (latrie) est réservée à Dieu seul. Les icônes sont des « fenêtres sur le ciel ».",
    councilDetails: [
      { council: "IIe Concile de Nicée", canon: "Définition sur les saintes icônes", decree: "Nous décrétions d'une manière ferme et inébranlable que les saintes icônes, tant celles faites de couleurs, de mosaïques ou de toute autre matière, doivent être exposées dans les saintes églises de Dieu, sur les objets et vêtements sacrés." },
    ],
    canonicalReferences: ["CIC can. 1186", "CIC can. 1188"],
    patristicFoundations: [
      "Saint Jean Damascène, Sur les Images sacrées : « Autrefois Dieu n'avait jamais été représenté en image, puisqu'il est invisible et sans forme. Mais maintenant que Dieu a été vu sur la terre et qu'il a vécu parmi les hommes, je représente ce qui est visible de Dieu. »",
      "Saint Théodore Stoudite, Antirrhetikoi : « L'icône du Christ ne représente pas la nature divine invisible, mais la nature humaine visible que le Verbe a assumée. »",
    ],
    pastoralApplication: "Les églises catholiques et orthodoxes sont remplies d'images sacrées : crucifix, statues, icônes, vitraux. Ces images sont des outils de prière et de catéchèse. Le signe de croix devant une icône est un acte de vénération. Les églises doivent être « ornées de saintes images » (Concile de Trente).",
    relatedDogmas: ["incarnation", "theotokos", "culte-saints"],
  },
  {
    slug: "indulgences",
    name: "Indulgences",
    nameLatin: "Indulgentiae",
    category: DogmaCategory.ANTHROPOLOGICAL,
    definition:
      "L'Église, usant du pouvoir des clés, peut accorder des indulgences, c'est-à-dire la remise devant Dieu de la peine temporelle due pour les péchés déjà pardonnés.",
    explanation:
      "L'indulgence ne pardonne pas le péché (c'est le rôle de la pénitence), mais remet la peine temporelle qui reste à expier après le pardon. Les indulgences sont puisées dans le « trésor de l'Église » (les mérites infinis du Christ, de la Vierge et des saints). Elles peuvent être partielles ou plénières, et obtenues pour soi-même ou pour les défunts. Le Concile de Trente a condamné les abus liés aux indulgences tout en confirmant leur légitimité.",
    sources: [
      {
        authority: "Concile de Trente",
        document: "Session XXV — Décret sur les indulgences",
        year: 1563,
      },
    ],
    biblicalReferences: ["Mt 16:19", "Mt 18:18", "Is 22:22", "2 M 12:46"],
    keywords: ["indulgences", "peine temporelle", "trésor", "clé", "rémission"],
    historicalContext: "Les indulgences furent à l'origine de la Réforme : la vente d'indulgences par le dominicain Johann Tetzel provoqua la révolte de Luther (thèses de 1517). Le Concile de Trente (1563) condamna les abus (vente, simonie) tout en confirmant la légitimité des indulgences. La constitution Indulgentiarum Doctrina de Paul VI (1967) réforma la pratique des indulgences.",
    theologicalBasis: "L'indulgence ne pardonne pas le péché (c'est le rôle de la pénitence), mais remet la peine temporelle due pour les péchés déjà pardonnés. Les indulgences sont puisées dans le « trésor de l'Église » : les mérites infinis du Christ, complétés par les mérites de la Vierge et des saints. L'Église, en vertu du pouvoir des clés (Mt 16:19), distribue ce trésor aux fidèles. Les indulgences peuvent être partielles ou plénières, et obtenues pour soi-même ou pour les défunts.",
    councilDetails: [
      { council: "Concile de Trente", session: "Session XXV", canon: "Décret sur les indulgences", decree: "L'usage des indulgences, très salutaire au peuple chrétien et approuvé par l'autorité des conciles sacrés, doit être conservé dans l'Église." },
    ],
    canonicalReferences: ["CIC can. 992", "CIC can. 993", "CIC can. 994"],
    patristicFoundations: [
      "Saint Thomas d'Aquin, Quodlibet : « L'indulgence a une valeur en raison du trésor de l'Église, qui est la communion des saints. »",
    ],
    pastoralApplication: "Les indulgences plénières peuvent être obtenues lors de certains moments : visite d'un cimetière (1-8 novembre pour les défunts), adoration eucharistique (au moins 30 minutes), lecture de la Sainte Écriture (au moins 30 minutes). Les conditions sont : confession sacramentelle, communion eucharistique, prière selon les intentions du Pape, et absence d'attachement au péché.",
    relatedDogmas: ["purgatoire", "satisfaction-christ", "merite-bonnes-oeuvres", "peche-originel"],
  },
  {
    slug: "providence-divine",
    name: "Providence divine",
    nameLatin: "Providentia Dei",
    category: DogmaCategory.TRINITARIAN,
    definition:
      "Dieu gouverne et conserve par sa Providence tout ce qu'il a créé, atteignant avec force d'une extrémité du monde à l'autre et disposant tout avec douceur.",
    explanation:
      "La Providence divine est le plan éternel par lequel Dieu conduit toutes les créatures vers leur fin dernière. Rien n'arrive en dehors de la volonté divine ou sans sa permission. Dieu permet le mal physique pour un plus grand bien, mais il ne cause jamais le mal moral. La Providence s'exerce universellement sur toutes les créatures, et particulièrement sur l'homme créé à son image.",
    sources: [
      { authority: "Concile Vatican I", document: "Dei Filius, ch. 1", year: 1870 },
      { authority: "Concile de Trente", document: "Session VI, ch. 1-2", year: 1547 },
    ],
    biblicalReferences: ["Sg 8:1", "Mt 6:26-30", "Mt 10:29-31", "Rm 8:28", "He 1:3"],
    keywords: ["providence", "gouvernement divin", "plan de Dieu", "volonté divine", "permissif"],
    historicalContext: "La doctrine de la Providence fut combattue par les épicuriens (Dieu indifférent), les manichéens (Dieu limité par le mal), et les déistes (Dieu absent). Le Concile Vatican I (1870) réaffirma solennellement que Dieu gouverne toutes choses par sa Providence, contre le naturalisme et le rationalisme.",
    theologicalBasis: "La Providence divine se distingue en Providence générale (gouvernement de toutes les créatures) et Providence spéciale (conduite de l'homme vers la fin surnaturelle). La volonté de Dieu se distingue en volonté antécédente (Dieu veut le salut de tous) et volonté conséquente (Dieu dispose selon la liberté humaine). Dieu permet le mal physique (il ne le cause pas) mais il ne permet jamais le mal moral sans raison suffisante.",
    councilDetails: [
      { council: "Concile Vatican I", canon: "Dei Filius, ch. 1", decree: "Tout ce que Dieu a créé, il le gouverne et le conserve par sa Providence, qui 'atteint avec force d'une extrémité du monde à l'autre et dispose tout avec douceur' (Sg 8:1)." },
    ],
    canonicalReferences: ["CIC can. 204 §1"],
    patristicFoundations: [
      "Saint Augustin, De Civitate Dei : « La Providence divine gouverne l'univers entier avec une sagesse et une bonté infinies, même quand elle permet le mal. »",
      "Saint Thomas d'Aquin, ST I, q. 22 : « Rien ne se produit en ce monde qui ne soit disposé par Dieu soit par action, soit par permission. »",
    ],
    pastoralApplication: "La confiance en la Providence est le fondement de l'espérance chrétienne. « Ne vous inquiétez pas pour demain » (Mt 6:34). Les épreuves de la vie sont permises par Dieu pour notre sanctification. La prière de demande exprime notre confiance filiale en la bonté du Père.",
    relatedDogmas: ["sainte-trinite", "creation", "grace-actuelle"],
  },
  {
    slug: "infaillibilite-pontificale",
    name: "Infaillibilité pontificale",
    nameLatin: "Infallibilitas Romani Pontificis",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "Le Pontife Romain, lorsqu'il parle ex cathedra, jouit, par l'assistance divine qui lui a été promise en la personne de saint Pierre, de cette infaillibilité dont le divin Rédempteur a voulu que son Église fût dotée.",
    explanation:
      "L'infaillibilité est le don par lequel le pape est préservé de l'erreur lorsqu'il définit solennellement une doctrine de foi ou de mœurs, en vertu de sa suprême autorité apostolique, pour toute l'Église. Cette infaillibilité ne s'étend pas aux opinions personnelles du pape, ni à ses déclarations pastorales, ni à ses actes de gouvernement. Elle est conditionnelle : le pape doit parler ex cathedra (depuis la chaire de Pierre).",
    sources: [
      { authority: "Concile Vatican I", document: "Pastor Æternus, ch. 4", year: 1870 },
    ],
    biblicalReferences: ["Mt 16:18-19", "Lc 22:32", "Jn 21:15-17", "Mt 28:20"],
    keywords: ["infaillibilité", "pape", "ex cathedra", "pierre", "vatican i"],
    historicalContext: "Le dogme de l'infaillibilité pontificale fut défini lors du Concile Vatican I (1870), sous le pontificat de Pie IX. Il fut combattu par les gallicans et les vieux-catholiques (qui formèrent la séparation de 1870). La définition fut le fruit d'un long débat théologique sur les limites de l'autorité papale. Elle fut réaffirmée par Vatican II (Lumen Gentium §25).",
    theologicalBasis: "L'infaillibilité pontificale repose sur la promesse du Christ à Pierre : « Tu es Pierre, et sur cette pierre je bâtirai mon Église » (Mt 16:18) et « J'ai prié pour toi, afin que ta foi ne défaille point » (Lc 22:32). L'infaillibilité n'est pas un attribut personnel du pape mais un charisme de l'Église dont le pape est l'instrument. Elle ne garantit pas la sainteté du pape, ni son impeccabilité, ni l'infaillibilité de ses opinions privées.",
    councilDetails: [
      { council: "Concile Vatican I", session: "Session IV (18 juillet 1870)", canon: "Pastor Æternus, ch. 4", decree: "Nous enseignons et définissons comme dogme divinement révélé que le Pontife Romain, lorsqu'il parle ex cathedra, c'est-à-dire lorsque, remplissant sa charge de pasteur et de docteur de tous les chrétiens, il définit, en vertu de sa suprême autorité apostolique, qu'une doctrine sur la foi ou les mœurs doit être tenue par toute l'Église, jouit, par l'assistance divine qui lui a été promise en la personne de la bienheureuse Pierre, de cette infaillibilité dont le divin Rédempteur a voulu que fût pourvue son Église." },
    ],
    canonicalReferences: ["CIC can. 331", "CIC can. 749 §1"],
    patristicFoundations: [
      "Saint Irénée de Lyon, Adversus Haereses : « Avec cette Église (de Rome), en raison de son origine plus excellente, doit s'accorder toute Église, c'est-à-dire les fidèles de partout. »",
      "Saint Augustin : « Rome a parlé, la cause est entendue (Roma locuta est, causa finita est). »",
    ],
    pastoralApplication: "Le fidèle catholique est tenu d'accepter avec un assentiment de foi les définitions ex cathedra du pape. Depuis 1870, un seul dogme a été défini ex cathedra de cette manière : l'Assomption de Marie (1950). L'infaillibilité est un rempart contre l'erreur doctrinale et un gage de l'unité de foi dans l'Église.",
    relatedDogmas: ["primauté-pierre", "eglise-catholique", "assomption"],
  },
  {
    slug: "primauté-pierre",
    name: "Primauté de saint Pierre",
    nameLatin: "Primatus Petri",
    category: DogmaCategory.ECCLESIOLOGICAL,
    definition:
      "Le bienheureux apôtre Pierre a reçu du Christ une primauté de juridiction véritable, propre, ordinaire et immédiate sur toute l'Église, primauté transmise à ses successeurs les évêques de Rome.",
    explanation:
      "Pierre fut choisi par le Christ comme chef visible des apôtres. Il reçut les clefs du Royaume (Mt 16:19), le pouvoir de paître le troupeau (Jn 21:15-17), et la charge de confirmer ses frères (Lc 22:32). Cette primauté est transmise par succession apostolique aux évêques de Rome. Le pape est donc le Vicaire du Christ, le Pasteur de toute l'Église, avec juridiction ordinaire, immédiate et suprême.",
    sources: [
      { authority: "Concile Vatican I", document: "Pastor Æternus, ch. 1-2", year: 1870 },
      { authority: "Concile de Florence", document: "Laetentur Cœli", year: 1439 },
      { authority: "Concile de Lyon II", document: "Profession de foi de Michel Paléologue", year: 1274 },
    ],
    biblicalReferences: ["Mt 16:18-19", "Jn 21:15-17", "Lc 22:32", "Ac 1:15-26", "Ac 15:7-12"],
    keywords: ["pierre", "primauté", "pape", "évêque de rome", "clefs", "juridiction"],
    historicalContext: "La primauté de Pierre fut reconnue dès les premiers siècles. Le Concile de Chalcédoine (451) salua le pape Léon Ier comme « Pierre qui parle par Léon ». Le schisme de 1054 opposa l'Église latine (reconnaissant la primauté papale) et l'Église byzantine (refusant cette primauté). Les conciles de Lyon II (1274) et de Florence (1439) tentèrent la réunion, mais sans succès durable.",
    theologicalBasis: "La primauté de Pierre repose sur trois textes évangéliques fondamentaux : Mt 16:18-19 (les clefs du Royaume), Jn 21:15-17 (« Pais mes agneaux, pais mes brebis ») et Lc 22:32 (« Confirme tes frères »). Cette primauté est : véritable (non honorifique), propre (attribuée à Pierre personnellement), ordinaire (exercée en permanence), immédiate (sans intermédiaire) et épiscopale (s'étendant sur toute l'Église).",
    councilDetails: [
      { council: "Concile Vatican I", session: "Session IV", canon: "Pastor Æternus, ch. 1-2", decree: "Si quelqu'un dit que le bienheureux apôtre Pierre n'a pas été établi par le Christ Seigneur prince de tous les apôtres et chef visible de toute l'Église militante, ou qu'il n'a reçu qu'une primauté d'honneur et non de juridiction véritable et propre, qu'il soit anathème." },
      { council: "Concile de Florence", canon: "Laetentur Cœli", decree: "Nous définissons que le Saint-Siège apostolique et le Pontife Romain ont la primauté sur le monde entier, et que le Pontife Romain est le successeur du bienheureux Pierre, prince des apôtres, et le vrai vicaire du Christ." },
    ],
    canonicalReferences: ["CIC can. 331", "CIC can. 332 §1"],
    patristicFoundations: [
      "Saint Léon Ier, Sermo 4 : « La dignité de Pierre ne disparaît pas dans son indignité. La fermeté de la foi, qui a été louée dans le prince des apôtres, ne cesse pas. »",
      "Saint Ambroise, Expositio in Lucam : « Là où est Pierre, là est l'Église. »",
    ],
    pastoralApplication: "L'unité de l'Église repose sur la communion avec le pape, successeur de Pierre. Le fidèle catholique est tenu d'être en communion avec l'évêque de Rome. Les encycliques papales engagent l'autorité du magistère ordinaire. Le pape est le garant de l'unité de foi et de communion ecclésiale.",
    relatedDogmas: ["infaillibilite-pontificale", "eglise-catholique", "sainte-trinite"],
  },
];

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════

export const getDogmaBySlug = (slug: string): Dogma | undefined =>
  dogmas.find(d => d.slug === slug);

export const getDogmasByCategory = (category: DogmaCategory): Dogma[] =>
  dogmas.filter(d => d.category === category);

export const searchDogmas = (query: string): Dogma[] => {
  const q = query.toLowerCase();
  return dogmas.filter(
    d =>
      d.name.toLowerCase().includes(q) ||
      d.nameLatin?.toLowerCase().includes(q) ||
      d.definition.toLowerCase().includes(q) ||
      d.keywords.some(k => k.toLowerCase().includes(q))
  );
};
