/*
 * Les douze petits prophètes
 * Fichier combiné pour les 12 prophètes mineurs de l'Ancien Testament
 */

import type {
  BookSummary,
  BookReadingNotes,
  ChapterOutline,
  KeyPassage
} from "../types/enriched"

/* =============================================================================
 *
 * OSÉE (HOSÉE) - 14 chapitres
 *
 * ============================================================================ */

export const hoseaSummary: BookSummary = {
  book: "Osée",
  testament: "OLD",
  category: "prophetic",
  author: "Osée",
  period: "VIIIe siècle av. J.-C. (c. 750-725)",
  theme: "L"amour fidèle de Dieu envers son peuple infidèle", outline: [ "1-3 : Le mariage d'Osée comme symbole de l"alliance", "4-6 : Accusations contre Israël et sa corruption",
    "7-9 : Châtiments promis et méchanceté d"Israël", "10-13 : Appels à la conversion et promesses de restauration"
  ]
}

export const hoseaReadingNotes: BookReadingNotes = {
  book: "Osée",
  context: "Osée prophétise dans le royaume du Nord (Israël) pendant une période de prospérité matérielle mais de déclin spirituel. Son mariage avec Gomer, une femme infidèle, sert de métaphore vivante de la relation entre Dieu et son peuple.",
  keyThemes: [
    {
      theme: "L"amour inébranlable de Dieu (hesed)", description: "Dieu continue d'aimer son peuple malgré son infidélité, comme Osée aime Gomer malgré ses adultères."
    },
    {
      theme: "L"alliance comme mariage", description: "La relation entre Dieu et Israël est présentée comme un mariage sacré betrayé par l'idolâtrie."
    },
    {
      theme: "La connaissance de Dieu",
      description: "Le problème fondamental d'Israël est le manque de connaissance de Dieu, pas simplement d'erreur intellectuelle mais de relation intime."
    },
    {
      theme: "La restauration finale",
      description: "Malgré le jugement, Dieu promet de guérir et de restaurer son peuple qui revient à lui."
    }
  ],
  theologicalSignificance: "Osée révèle le cœur de Dieu comme celui d'un époux blessé mais toujours amoureux. Ce livre préfigure la relation entre le Christ et l'Église (Éphésiens 5:22-33). Le thème du 'hesed' (amour loyal) sera pleinement révélé dans l'amour du Christ pour son Église jusqu"à la mort sur la croix.", christologicalTypes: [
    {
      type: "L"époux qui rachète", description: "Osée rachetant Gomer préfigure le Christ rachetant l'Église, son épouse infidèle, par son propre sang."
    },
    {
      type: "Le fils sorti d"Égypte", description: "Osée 11:1 ('J'ai appelé mon fils hors d'Égypte') est cité dans Matthieu 2:15 comme s'accomplissant en Jésus."
    },
    {
      type: "Celui qui guérit",
      description: "Osée 6:1 ('Il nous guérira') préfigure le ministère de guérison du Christ."
    }
  ]
}

export const hoseaChapterOutlines: ChapterOutline[] = Array.from({ length: 14 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Le commandement d'épouser une femme infidèle" :
        i === 1 ? "La famille d'Osée comme signe" :
        i === 2 ? "La restauration de Gomer" :
        i === 3 ? "L'accusation contre Israël" :
        i === 4 ? "Contre les prêtres et les chefs" :
        i === 5 ? "La corruption des chefs" :
        i === 6 ? "Le réveil tardif" :
        i === 7 ? "Les pièges d'Israël" :
        i === 8 ? "L'appel au souvenir" :
        i === 9 ? "L'exil promis" :
        i === 10 ? "Le péché comme une vigne" :
        i === 11 ? "L'amour éternel de Dieu" :
        i === 12 ? "Histoire d'infidélité" :
        i === 13 ? "La destruction promise" : "L"appel final à la conversion", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "Parole de l'Éternel qui fut adressée à Osée, fils de Beéri, au temps d'Ozias, de Jotham, d'Achaz et d'Ézéchias, rois de Juda, et au temps de Jéroboam, fils de Joas, roi d'Israël." :
             i === 10 ? "Israël est une vigne luxuriante, qui produit du fruit pour lui-même." : "Oracle sur Israël."
    }
  ]
}))

export const hoseaKeyPassages: KeyPassage[] = [
  {
    reference: "Osée 1:2",
    citation: "La première fois que l'Éternel parla par Osée, l'Éternel dit à Osée : Va, prends-toi une femme prostituée et des enfants de prostitution ; car le pays se prostitue, il abandonne l"Éternel !", commentary: "Ce commandement shockant est un acte prophétique vivant. Dieu demande au prophète de vivre la réalité douloureuse de sa relation avec Israël. Ce mariage symbolique révèle à quel point l'idolâtrie est vécue par Dieu comme un adultère."
  },
  {
    reference: "Osée 2:16-20",
    citation: "C"est pourquoi je vais la séduire, je la conduirai au désert, et je parlerai à son cœur.", citation2: "Et je fiancerai avec toi pour toujours ; je te fiancerai dans la justice et dans le droit, dans la bonté et dans la miséricorde, je te fiancerai dans la fidélité, et tu connaîtras l"Éternel.", commentary: "Au cœur du jugement, Dieu révèle son projet de séduction. Le désert est le lieu de la recontre intime, loin des idoles. Les fiançailles éternelles évoquent la nouvelle alliance en Christ, où Dieu s'unit à son peuple dans un amour indissoluble."
  },
  {
    reference: "Osée 6:6",
    citation: "Car j"aime la bonté, et non le sacrifice ; et la connaissance de Dieu, plus que les holocaustes.", commentary: "Cette citation, reprise par Jésus dans Matthieu 9:13, résume le message prophétique. Dieu ne cherche pas des rituels externes mais un cœur qui Le connaît et L'aime. La 'connaissance' biblique implique une relation intime, pas seulement intellectuelle."
  },
  {
    reference: "Osée 11:1",
    citation: "Quand Israël était jeune, je l'ai aimé, et j'ai appelé mon fils hors d"Égypte.", commentary: "Matthieu 2:15 voit dans ce verset une prophétie de l'Enfant-Jésus revenant d'Égypte. Le Christ est le véritable Fils de Dieu qui relève les échecs d'Israël et accomplit parfaitement sa vocation."
  },
  {
    reference: "Osée 14:2-4",
    citation: "Revenez, enfants d'Israël, à l"Éternel, ton Dieu ! Car tu es tombé par ton iniquité.", citation2: "Apportez avec vous des paroles et revenez à l"Éternel ; dites-lui : Pardonne toute iniquité, et agrée ce qui est bon !", commentary: "L'appel final à la conversion. Dieu ne demande pas de sacrifices mais des 'paroles' - un cœur repentant. La promesse de guérison anticipe la restauration en Christ qui guérit l'humanité de son péché."
  }
]

/* =============================================================================
 *
 * JOËL - 4 chapitres
 *
 * ============================================================================ */

export const joelSummary: BookSummary = {
  book: "Joël",
  testament: "OLD",
  category: "prophetic",
  author: "Joël ( fils de Petuel)",
  period: "Ve-IVe siècle av. J.-C.",
  theme: "Le jour de Yahvé et l'effusion de l"Esprit", outline: [ "1-2 : Le fléau des sauterelles comme avant-coureur du jour de Yahvé",
    "3 : Le jour de Yahvé et ses conséquences",
    "4 : Les promesses de restauration et d'effusion de l'Esprit"
  ]
}

export const joelReadingNotes: BookReadingNotes = {
  book: "Joël",
  context: "Joël prophétise probablement après l'exil, dans une Judah en reconstruction. Une invasion de sauterelles dévaste le pays, devenant le point de départ d'une méditation sur le 'jour de Yahvé" - le jour du jugement divin.", keyThemes: [
    {
      theme: "Le jour de Yahvé",
      description: "Un jour de ténèbres et de jugement, mais aussi de restauration pour ceux qui invoquent le nom du Seigneur."
    },
    {
      theme: "L'effusion de l"Esprit", description: "La promesse que Dieu répandra son Esprit sur toute chair, sans distinction d'âge, de sexe ou de statut social."
    },
    {
      theme: "Le repentir comme condition",
      description: "Le jeûne, les larmes et la contrition du cœur sont plus importants que les sacrifices externes."
    },
    {
      theme: "La restauration de la création",
      description: "Le déluge spirituel sera suivi d'une restauration universelle où la création elle-même sera renouvelée."
    }
  ],
  theologicalSignificance: "Joël est cité par Pierre à la Pentecôte (Actes 2) comme s'accomplissant dans l'effusion de l'Esprit Saint. Le livre préfigure la Pentecôte et le jugement dernier. Le 'jour de Yahvé' devient le 'jour du Seigneur" dans le Nouveau Testament.", christologicalTypes: [
    {
      type: "Celui qui baptise dans l"Esprit", description: "La promesse de l'effusion de l'Esprit s'accomplit en Christ qui envoie le Saint-Esprit à l'Église."
    },
    {
      type: "Le Juge du jour du Seigneur",
      description: "Le jour de Yahvé devient le jour du Christ juge, évoqué dans l'Apocalypse."
    },
    {
      type: "Le signe de Dieu",
      description: "Les prodiges dans le ciel annoncent la venue du Christ et la consommation des temps."
    }
  ]
}

export const joelChapterOutlines: ChapterOutline[] = Array.from({ length: 4 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Le fléau des sauterelles' :
        i === 1 ? "Le jour de l'Éternel approche' :
        i === 2 ? "Promesses de restauration' : 'L'effusion de l"Esprit et le jugement des nations", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "Parole de l'Éternel qui fut adressée à Joël, fils de Petuel.' :
             i === 3 ? "Après cela, je répandrai mon Esprit sur toute chair.' : 'Oracle de l'Éternel."
    }
  ]
}))

export const joelKeyPassages: KeyPassage[] = [
  {
    reference: "Joël 1:4",
    citation: "Ce qu'a laissé la sauterelle, le grillon l'a mangé ; ce qu'a laissé le grillon, le criquet l'a mangé ; et ce qu'a laissé le criquet, le ver l"a mangé.", commentary: "Cette image poétique d'une destruction totale introduit la méditation sur le jour de Yahvé. Les quatre espèces d'insectes représentent peut-être les quatre invasions successives ou les quatre phases d'un même jugement."
  },
  {
    reference: "Joël 2:12-13",
    citation: "Et maintenant, dit l"Éternel, revenez à moi de tout votre cœur, avec des jeûnes, avec des pleurs et des lamentations !", citation2: "Déchirez vos cœurs et non vos vêtements, et revenez à l'Éternel, votre Dieu ; car il est compatissant et miséricordieux, lent à la colère et riche en bonté, et il se repent des maux qu"il envoie.", commentary: "L'appel au repentir exprime que Dieu cherche une transformation intérieure ('déchirer le cœur') plutôt que des rituels externes. La description de Dieu comme 'compatissant et miséricordieux' reprend l'auto-révélation du Sinaï (Exode 34:6)."
  },
  {
    reference: "Joël 2:28-29",
    citation: "Après cela, je répandrai mon Esprit sur toute chair ; vos fils et vos filles prophétiseront, vos vieillards auront des songes, et vos jeunes gens des visions.",
    citation2: "Même sur les serviteurs et sur les servantes, dans ces jours-là, je répandrai mon Esprit.",
    commentary: "Ce texte fondamental est cité par Pierre à la Pentecôte (Actes 2:17-21). L'effusion de l'Esprit n'est plus réservée à quelques prophètes mais devient universelle, annonçant l'ère de l'Église où tous sont prophètes, prêtres et rois."
  },
  {
    reference: "Joël 3:1-2",
    citation: "Car voici, dans ces jours et à ce temps-là, quand je ramènerai les captifs de Juda et de Jérusalem, je rassemblerai toutes les nations, et je les ferai descendre dans la vallée de Josaphat ; là, j"entrerai en jugement avec elles.", commentary: "La 'vallée de Josaphat' ('Yahvé juge') devient le symbole du jugement dernier. Le jugement des nations s'effectue selon leur traitement du peuple de Dieu, anticipant la parabole des brebis et des boucs (Matthieu 25)."
  },
  {
    reference: "Joël 4:9-10",
    citation: "Proclamez ceci parmi les nations : Préparez la guerre ! Réveillez les héros ! Qu'ils s'approchent, qu"ils montent, tous les hommes de guerre !", citation2: "De vos hoyaux forgez des épées, et de vos serpes des lances ! Que le faible dise : Je suis fort !",
    commentary: "Ironie prophétique contre les nations qui se préparent à combattre Dieu. Cette image sera reprise dans l'Apocalypse pour décrire l'absurdité de s'opposer au règne du Christ."
  }
]

/* =============================================================================
 *
 * AMOS - 9 chapitres
 *
 * ============================================================================ */

export const amosSummary: BookSummary = {
  book: "Amos",
  testament: "OLD",
  category: "prophetic",
  author: "Amos",
  period: "VIIIe siècle av. J.-C. (c. 760-750)",
  theme: "La justice sociale et la pureté du culte",
  outline: [ "1-2 : Jugement contre les nations voisines et contre Israël",
    "3-6 : Prophéties de jugement avec des visions symboliques",
    "7-9 : Visions du jugement et promesses de restauration"
  ]
}

export const amosReadingNotes: BookReadingNotes = {
  book: "Amos",
  context: "Amos, berger de Tekoa dans le royaume du Sud, est appelé à prophétiser dans le royaume du Nord pendant le règne de Jéroboam II, période de prospérité économique mais d"injustice sociale flagrante.", keyThemes: [
    {
      theme: "La justice pour les opprimés",
      description: "Dieu exige la justice pour les pauvres, les veuves et les orphelins. Le culte sans justice est une abomination."
    },
    {
      theme: "L"élection comme responsabilité", description: "Israël est élu non pour des privilèges mais pour une plus grande responsabilité. 'À qui beaucoup a été donné, il sera beaucoup demandé."
    },
    {
      theme: "Le jour de Yahvé comme ténèbres",
      description: "Contrairement à l'attente populaire, le jour de Yahvé sera un jour de jugement pour ceux qui vivent dans l'injustice."
    },
    {
      theme: "Le reste fidèle",
      description: "Dieu préservera un reste qui portera le nom d'Israël et héritera des promesses."
    }
  ],
  theologicalSignificance: "Amos inaugure la tradition prophétique classique avec son insistance sur la justice sociale. Son influence se fait sentir dans Isaïe, Jérémie et Jésus lui-même. Le rappel que Dieu rejette le culte séparé de la justice est particulièrement pertinent pour l"Église de tous les temps.", christologicalTypes: [
    {
      type: "Le berger de Tekoa",
      description: "Amos comme berger préfigure le Bon Berger qui connaît ses brebis et se sacrifie pour elles."
    },
    {
      type: "Le plombeur de ligne",
      description: "Le seau mesurant la droiture préfigure le Christ comme critère du jugement."
    },
    {
      type: "Le reste restauré",
      description: "La promesse de restauration du reste s'accomplit dans l'Église, nouveau peuple de Dieu."
    }
  ]
}

export const amosChapterOutlines: ChapterOutline[] = Array.from({ length: 9 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Jugement contre les nations' :
        i === 1 ? "Contre Israël' :
        i === 2 ? "Refus d'écouter' :
        i === 3 ? "La vache de Bassan' :
        i === 4 ? "Contre les femmes de Samarie' :
        i === 5 ? "Le chant du deuil' :
        i === 6 ? "Cinq visions' :
        i === 7 ? "Vision du panier d'été' : 'Vision du Seigneur sur l"autel et promesse de restauration", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "Paroles d'Amos, qui était l'un des bergers de Tekoa. La révélation qu'il reçut concernant Israël, au temps d'Ozias, roi de Juda, et au temps de Jéroboam, fils de Joas, roi d'Israël, deux ans avant le tremblement de terre.' : 'Oracle sur Israël."
    }
  ]
}))

export const amosKeyPassages: KeyPassage[] = [
  {
    reference: "Amos 2:6-7",
    citation: "Ainsi parle l'Éternel : À cause des crimes d'Israël, je ne rétracte rien, parce qu'ils vendent le juste pour de l"argent et le pauvre pour une paire de sandales.", commentary: "Cette accusation cinglante dénonce l'exploitation économique des plus vulnérables. Les 'sandales' symbolisent les biens les plus élémentaires dont on prive les pauvres. La vente du 'juste' évoque probablement la corruption judiciaire."
  },
  {
    reference: "Amos 3:3",
    citation: "Deux hommes marcheront-ils ensemble sans s"être accordés ?", commentary: "Cette question rhétorique introduit la nécessité de l'accord avec Dieu pour marcher avec Lui. La marche ensemble nécessite une communion de volonté, anticipant la communion du chrétien avec le Christ."
  },
  {
    reference: "Amos 5:14",
    citation: "Recherchez le bien et non le mal, afin que vous viviez ; et ainsi l"Éternel, le Dieu des armées, sera avec vous, comme vous le dites.", commentary: "L'appel à rechercher activement le bien. La foi n'est pas dans les paroles ('comme vous le dites') mais dans l'action. Dieu sera avec ceux qui pratiquent la justice, pas seulement ceux qui l'invoquent."
  },
  {
    reference: "Amos 5:24",
    citation: "Que le droit coule comme de l"eau, et la justice comme un torrent qui ne tarit point.", commentary: "Cette image puissante de la justice comme un courant vibrant a inspiré le mouvement des droits civiques. La justice doit être continue, abondante et vitale comme l'eau qui coule. Martin Luther King Jr. a souvent cité ce verset dans ses sermons."
  },
  {
    reference: "Amos 9:11-12",
    citation: "En ce jour-là, je relèverai la hutte de David qui est tombée, je réparerai leurs brèches, je relèverai ses ruines, et je la rebâtirai comme elle était aux jours d"anciens temps.", citation2: "Afin qu'ils possèdent le reste d'Édom et toutes les nations sur lesquelles mon nom est invoqué, dit l"Éternel qui fera ces choses.", commentary: "Jacques cite ce passage au concile de Jérusalem (Actes 15:16-18) pour justifier l'ouverture de l'Église aux païens. La restauration de la 'hutte de David' s'accomplit dans l'Église qui rassemble toutes les nations."
  }
]

/* =============================================================================
 *
/* ABDIAS (ABDIAS) - 1 chapitre
 *
/* =============================================================================

export const obadiahSummary: BookSummary = {
  book: "Abdias",
  testament: "OLD",
  category: "prophetic",
  author: "Abdias",
  period: "VIe ou Ve siècle av. J.-C.",
  theme: "Le jugement d'Édom et la restauration d"Israël", outline: [ "1 : Jugement contre Édom pour son hostilité envers Juda, promesse de restauration pour le peuple de Dieu"
  ]
}

export const obadiahReadingNotes: BookReadingNotes = {
  book: "Abdias",
  context: "Le plus court livre de l'Ancien Testament. Il prophétise contre Édom (les descendants d'Ésaü) qui a profité de la chute de Jérusalem pour piller et capturer les Judéens en fuite. La haine séculaire entre Jacob et Ésaü s"exprime dans ce contexte historique.", keyThemes: [
    {
      theme: "L"orgueil avant la chute", description: "Édom, fier de sa position imprenable, sera abaissé. L'orgueil précède la chute."
    },
    {
      theme: "La violence contre le peuple de Dieu",
      description: ""Édom est jugé pour avoir aidé les ennemis de Juda et profité de sa détresse. "Tu ne devais pas...' },
    {
      theme: "Le jour de Yahvé",
      description: "Le jour où les nations seront jugées selon leur conduite envers le peuple de Dieu."
    },
    {
      theme: "La restauration du royaume",
      description: "Le royaume appartiendra à l'Éternel, et le peuple possédera son héritage."
    }
  ],
  theologicalSignificance: ""Ce livre, bien que bref, exprime des thèmes bibliques majeurs : l'orgueil puni, la solidarité avec le peuple de Dieu, et la restauration finale. Jésus reprendra le thème du jugement selon notre traitement des "plus petits" (Matthieu 25:40).", christologicalTypes: [
    {
      type: "Le libérateur sur la montagne sainte",
      description: "Le Sauveur qui montera sur la montagne de Sion pour délivrer son peuple préfigure le Christ vainqueur."
    },
    {
      type: "Le royaume qui appartient à l"Éternel", description: "La royauté ultime du Christ sur toutes les nations est annoncée dans cette finale."
    },
    {
      type: "Le juge des nations",
      description: "Le jugement d'Édom selon son traitement de Juda préfigure le jugement des nations (Matthieu 25)."
    }
  ]
}

export const obadiahChapterOutlines: ChapterOutline[] = [{
  chapter: 1,
  title: "Vision sur Édom",
  verses: [
    { reference: ""1:1", text: 'Vision d'Abdias. Ainsi parle le Seigneur l'Éternel sur Édom : Nous avons appris une nouvelle de la part de l'Éternel, et un messager a été envoyé parmi les nations : Levez-vous, marchons contre Édom pour le combattre !' },
    { reference: ""1:3", text: 'L'orgueil de ton cœur t'a égaré, toi qui habites le creux des rochers, qui te tiens sur la hauteur, et qui dis en toi-même : Qui me précipitera jusqu'à terre ?' },
    { reference: ""1:10", text: 'À cause de la violence faite à ton frère Jacob, la honte te couvrira, et tu seras exterminé pour toujours.' },
    { reference: ""1:15", text: 'Car le jour de l'Éternel est proche, pour toutes les nations ; il te sera fait comme tu as fait, ton œuvre retombera sur ta tête.' },
    { reference: ""1:17", text: 'Mais il y aura une délivrance sur la montagne de Sion, et elle sera sainte ; et la maison de Jacob reprendra ses possessions.' },
    { reference: ""1:21", text: 'Et des libérateurs monteront sur la montagne de Sion pour juger la montagne d'Ésaü ; et à l'Éternel appartiendra le règne.' }
  ]
}]

export const obadiahKeyPassages: KeyPassage[] = [
  {
    reference: "Abdias 1:3-4",
    citation: "L'orgueil de ton cœur t'a égaré, toi qui habites le creux des rochers, qui te te tiens sur la hauteur, et qui dis en toi-même : Qui me précipitera jusqu"à terre ?", citation2: "Quand tu placerais ton nid aussi haut que l'aigle, quand tu le mettrais parmi les étoiles, je te ferai descendre de là, dit l"Éternel.", commentary: "L'orgueil d'Édom repose sur sa position géographique imprenable. Mais aucune forteresse humaine ne résiste au jugement de Dieu. Cette image de l'aigle nidifiant parmi les étoiles exprime l'hubris qui précède invariablement la chute dans la Bible."
  },
  {
    reference: "Abdias 1:10-11",
    citation: "À cause de la violence faite à ton frère Jacob, la honte te couvrira, et tu seras exterminé pour toujours.",
    citation2: "Le jour où tu te tenais en face, quand on emportait ses biens, quand des étrangers entraient dans ses portes et jetaient le sort sur Jérusalem, toi aussi tu étais comme l'un d"eux.", commentary: ""Édom est coupable de ne pas être intervenu pour aider son "frère' Jacob. La passivité face à l'injustice peut être aussi coupable que l'injustice elle-même. Ce texte souligne la responsabilité de solidarité, particulièrement avec le peuple de Dieu."
  },
  {
    reference: "Abdias 1:15",
    citation: "Car le jour de l"Éternel est proche, pour toutes les nations ; il te sera fait comme tu as fait, ton œuvre retombera sur ta tête.", commentary: "Le principe de la réciprocité du jugement : chacun sera jugé selon sa conduite. Ce principe est repris dans le Nouveau Testament (Galates 6:7) et dans la parabole des brebis et des boucs (Matthieu 25)."
  },
  {
    reference: "Abdias 1:17",
    citation: "Mais il y aura une délivrance sur la montagne de Sion, et elle sera sainte ; et la maison de Jacob reprendra ses possessions.",
    commentary: ""La promesse de restauration contraste avec le jugement d'Édom. La "montagne de Sion' deviendra sainte, libérée de la souillure idolâtre. Cette restauration partielle anticipe la restauration universelle en Christ."
  },
  {
    reference: "Abdias 1:21",
    citation: "Et des libérateurs monteront sur la montagne de Sion pour juger la montagne d'Ésaü ; et à l"Éternel appartiendra le règne.", commentary: ""La finale du livre affirme la souveraineté ultime de Dieu. Les "libérateurs' jugeront la montagne d'Ésaü (les ennemis du peuple de Dieu). Le règne appartenant à l'Éternel anticipe la proclamation du Christ : '"Tout pouvoir m'a été donné dans le ciel et sur la terre.""
  }
]

/* =============================================================================
 *
/* JONAS (JONAS) - 4 chapitres
 *
/* =============================================================================

export const jonahSummary: BookSummary = {
  book: "Jonas",
  testament: "OLD",
  category: "prophetic",
  author: "Jonas",
  period: "VIIIe siècle av. J.-C.",
  theme: "La miséricorde de Dieu pour toutes les nations",
  outline: [ "1 : La fuite de Jonas devant l"appel de Dieu", "2 : La prière de Jonas dans le ventre du poisson",
    "3 : La prédication de Jonas à Ninive",
    "4 : Le mécontentement de Jonas et la leçon du ricin"
  ]
}

export const jonahReadingNotes: BookReadingNotes = {
  book: "Jonas",
  context: ""Jonas, fils d'Amittaï, prophète de Galgala (2 Rois 14:25), reçoit l'ordre de prophétiser contre Ninive, la grande ville païenne et ennemie d'Israël. Il refuse et tente de fuir "loin de la face de l'Éternel" vers Tarsis.", keyThemes: [
    {
      theme: "L"universalité du salut", description: "Dieu se soucie des païens et même des animaux. Son amour s'étend à toutes les nations, pas seulement à Israël."
    },
    {
      theme: "Le conflit entre justice et miséricorde",
      description: "Jonas veut la justice (le jugement de Ninive) mais Dieu privilégie la miséricorde lorsque les pécheurs se convertissent."
    },
    {
      theme: "L"obéissance prophétique", description: "Le prophète ne peut pas fuir sa mission. Dieu poursuit Jonas jusqu'au fond de la mer et des abîmes."
    },
    {
      theme: "La mort et la résurrection",
      description: "Le séjour de Jonas dans le ventre du poisson préfigure la mort et la résurrection du Christ."
    }
  ],
  theologicalSignificance: "Le livre de Jonas est unique par son humour et son ironie. Le prophète qui devrait annoncer la miséricorde de Dieu est en colère contre cette même miséricorde ! Jésus cite Jonas comme signe de sa propre mort et résurrection (Matthieu 12:39-41). Les Ninivites jugeront la génération de Jésus.",
  christologicalTypes: [
    {
      type: "Le signe de Jonas",
      description: "De même que Jonas fut trois jours dans le ventre du poisson, le Christ sera trois jours dans le sein de la terre avant de ressusciter."
    },
    {
      type: "Le prédicateur aux païens",
      description: "Jonas, réluctant prédicateur aux Ninivites, préfigure l'Église envoyée annoncer l'Évangile à toutes les nations."
    },
    {
      type: "Le Sauveur universel",
      description: "La conversion de Ninive annonce l'ouverture du salut aux païens, réalisée pleinement dans le Christ."
    }
  ]
}

export const jonahChapterOutlines: ChapterOutline[] = Array.from({ length: 4 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "La fuite de Jonas' :
        i === 1 ? "La prière dans le poisson' :
        i === 2 ? "La prédication à Ninive' : "Le mécontentement de Jonas", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "La parole de l'Éternel fut adressée à Jonas, fils d'Amitthaï, en ces termes : Lève-toi, va à Ninive, la grande ville, et crie contre elle ! Car sa méchanceté est montée jusqu'à moi.' :
             i === 2 ? "Jonas se leva pour s'enfuir à Tarsis, loin de la face de l'Éternel.' : 'Oracle sur Ninive."
    }
  ]
}))

export const jonahKeyPassages: KeyPassage[] = [
  {
    reference: "Jonas 1:3",
    citation: "Mais Jonas se leva pour s'enfuir à Tarsis, loin de la face de l'Éternel. Il descendit à Jaffa, où il trouva un navire qui allait à Tarsis ; il paya le prix du transport et s'embarqua pour aller avec eux à Tarsis, loin de la face de l"Éternel.", commentary: ""La fuite de Jonas est paradoxale : peut-on fuir la présence de Celui qui est partout ? Le texte souligne l'absurdité de la tentative avec la répétition "loin de la face de l'Éternel.' Tarsis représente l'extrémité occidentale du monde connu, l'opposé de Ninive à l'est."
  },
  {
    reference: "Jonas 1:17",
    citation: "L"Éternel fit venir un grand poisson pour engloutir Jonas, et Jonas demeura dans le ventre du poisson trois jours et trois nuits.", commentary: ""Ce verset est au centre du livre. Les "trois jours et trois nuits' deviendront un type de la mort et résurrection du Christ. Le poisson n'est pas punition mais instrument de salut : sans lui, Jonas meurt noyé. Le poisson est '"tombeau" et 'arche' à la fois."
  },
  {
    reference: "Jonas 2:3",
    citation: "Tu m'as jeté dans l'abîme, dans le cœur des mers, et les courants d'eau m"ont enveloppé ; toutes tes vagues et tes flots ont passé sur moi.", commentary: ""La prière de Jonas depuis les abîmes exprime la désolation totale mais aussi la confiance en Dieu. Le thème de "l'abîme' (tehom) évoque les eaux primordiales du chaos. Dieu peut sauver même du plus profond des abîmes."
  },
  {
    reference: "Jonas 3:4-5",
    citation: "Jonas commença à pénétrer dans la ville ; il fit une journée de marche, et il criait : Dans quarante jours, Ninive sera détruite !",
    citation2: "Les gens de Ninive crurent en Dieu ; ils publièrent un jeûne et se revêtirent de sacs, depuis les plus grands jusqu"aux plus petits.", commentary: "La prédication de Jonas est remarquablement brève (cinq mots en hébreu). La réponse de Ninive est immédiate et totale. Même les animaux sont couverts de sacs ! La conversion d'une ville païenne, sans aucun signe miraculeux, est l'un des plus grands miracles bibliques."
  },
  {
    reference: "Jonas 4:2-3",
    citation: "Ô Éternel, n'est-ce pas ce que je disais quand j'étais encore dans mon pays ? C"est ce que je voulais prévenir en fuyant à Tarsis. Car je savais que tu es un Dieu compatissant et miséricordieux, lent à la colère et riche en bonté, et qui te repens du mal.", citation2: "Et maintenant, Éternel, prends-moi donc la vie, car la mort m"est meilleure que la vie.", commentary: "La prière de Jonas révèle le problème central : il connaît trop bien la nature de Dieu ! Les mêmes attributs divins loués ailleurs (Exode 34:6) sont ici ressenties comme un problème. Jonas préfère la mort plutôt que de voir les ennemis d'Israël pardonnés. C'est le problème du particularisme étroit face à l'universalité de l'amour divin."
  },
  {
    reference: "Jonas 4:11",
    citation: "Et moi, je n"aurais pas pitié de Ninive, la grande ville, dans laquelle se trouvent plus de cent vingt mille hommes qui ne savent pas distinguer leur droite de leur gauche, et des animaux en grand nombre !", commentary: ""La question finale de Dieu à Jonas reste sans réponse, invitant le lecteur à répondre. L'insistance sur les animaux montre que la compassion de Dieu s'étend à toute création. Les "cent vingt mille' peuvent représenter les enfants incapables de discernement moral, soulignant l'innocence d'une partie de la population."
  }
]

/* =============================================================================
 *
/* MICHÉE - 7 chapitres
 *
/* =============================================================================

export const micahSummary: BookSummary = {
  book: "Michée",
  testament: "OLD",
  category: "prophetic",
  author: "Michée",
  period: "VIIIe siècle av. J.-C. (c. 725-700)",
  theme: "La justice, la miséricorde et la simplicité",
  outline: [ "1 : Le jugement de Samarie et de Jérusalem",
    "2-3 : Promesse du Messie et promesse de restauration",
    "4-5 : Le procès de Dieu contre son peuple et la promesse de paix",
    "6-7 : L'accusation du peuple et la prière de confiance"
  ]
}

export const micahReadingNotes: BookReadingNotes = {
  book: "Michée",
  context: "Michée de Moreseth-Gath prophétise en Judée pendant les règnes de Jotham, Achaz et Ézéchias. Contemporain d"Isaïe, il partage les mêmes thèmes mais avec une perspective plus rurale et axée sur la justice sociale.", keyThemes: [
    {
      theme: "La justice sociale",
      description: "Dieu dénonce l'exploitation des pauvres, la corruption des chefs et les faux prophètes qui prêchent pour de l'argent."
    },
    {
      theme: "Le lieu de naissance du Messie",
      description: "Bethléem, trop petite pour compter parmi les villes de Juda, sera le berceau du chef d'Israël."
    },
    {
      theme: "La religion authentique",
      description: "Dieu ne demande pas des sacrifices mais la pratique de la justice, de la miséricorde et de la marche humble avec Dieu."
    },
    {
      theme: "Le reste fidèle",
      description: "Dieu préservera un reste comme troupeau au milieu du pays, et le reste de Jacob sera au milieu de nombreuses nations."
    }
  ],
  theologicalSignificance: "Michée contient l'une des plus anciennes prophéties sur la naissance du Messie à Bethléem (5:1), citée par les mages dans Matthieu 2:6. Sa définition de la religion authentique (6:8) est l'un des textes les plus cités de l"Ancien Testament.", christologicalTypes: [
    {
      type: "Le chef né à Bethléem",
      description: "Le Messie naîtra dans la petite ville de Bethléem, comme David, pour mener le peuple avec la force de Dieu."
    },
    {
      type: "Le pasteur de l"reste", description: "Le Christ sera le berger qui rassemble le reste d'Israël et étend son règne à toutes les nations."
    },
    {
      type: "La paix universelle",
      description: "La promesse que tous peuples marcheront au nom de l'Éternel s'accomplit dans l'Église, peuple universel."
    }
  ]
}

export const micahChapterOutlines: ChapterOutline[] = Array.from({ length: 7 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Oracle sur Samarie et Jérusalem' :
        i === 1 ? "Le futur chef en Bethléem' :
        i === 2 ? "La montagne de la maison de l'Éternel' :
        i === 3 ? "Le règne de paix du Messie' :
        i === 4 ? "L'accusation du peuple' :
        i === 5 ? "La prière de Michée' : "Le Dieu qui pardonne", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "La parole de l'Éternel qui fut adressée à Michée, de Moreseth-Gath, au temps d'Ozias, de Jotham, d'Achaz et d'Ézéchias, rois de Juda, - révélation qu'il eut touchant Samarie et Jérusalem.' :
             i === 4 ? "Qui est semblable à l'Éternel notre Dieu ?' : 'Oracle sur Samarie et Jérusalem."
    }
  ]
}))

export const micahKeyPassages: KeyPassage[] = [
  {
    reference: "Michée 2:1-2",
    citation: "Malheur à ceux qui méditent l"iniquité et qui complotent le mal sur leurs lits ! Quand le matin paraît, ils le mettent à exécution, car leur pouvoir est entre leurs mains.", citation2: "Ils convoitent les champs et ils les s'emparent, les maisons et ils les prennent ; ils font violence à l'homme et à sa maison, à l"homme et à son héritage.", commentary: ""Cette dénonciation de l'exploitation foncière résonne particulièrement aujourd'hui. Les puissants utilisent leur position pour spolier les plus faibles de leur héritage. Le texte souligne que l'injustice commence dans le cœur ("méditent sur leurs lits") avant de s"exprimer en actions."
  },
  {
    reference: "Michée 4:1-3",
    citation: "Il arrivera, dans la suite des temps, que la montagne de la maison de l'Éternel sera fondée sur le sommet des montagnes, qu'elle s"élèvera au-dessus des collines, et que les peuples y afflueront.", citation2: "Des nations s'y rendront en foule, et diront : Venez, et montons à la montagne de l'Éternel, à la maison du Dieu de Jacob, afin qu'il nous enseigne ses voies, et que nous marchions dans ses sentiers. Car de Sion sortira la loi, et de Jérusalem la parole de l"Éternel.", citation3: "Il sera le juge d'un grand nombre de peuples, l'arbitre de nations puissantes et lointaines. De leurs épées ils forgeront des hoyaux, et de leurs lances des serpes ; un peuple ne tirera plus l'épée contre un autre, et l'on n"apprendra plus la guerre.", commentary: "Cette vision de paix universelle est partagée avec Isaïe 2:2-4. L'image des épées transformées en hoyaux est devenue l'un des symboles les plus puissants de la paix messianique. L'humanité n'aura plus besoin d'apprendre la guerre car le Messie enseignera ses voies à tous les peuples."
  },
  {
    reference: "Michée 5:1",
    citation: "Et toi, Bethléem Éphrata, petite entre les milliers de Juda, de toi sortira pour moi celui qui dominera sur Israël, et dont l'origine est ancienne, d"avant les siècles.", commentary: ""Cette prophétie précise le lieu de naissance du Messie. Matthieu 2:6 la cite devant Hérode. Bethléem est "trop petite' - insignifiante - mais Dieu choisit souvent ce qui est humble pour accomplir ses œuvres grandes. L'origine '"d'avant les siècles" affirme la préexistence du Messie."
  },
  {
    reference: "Michée 6:6-8",
    citation: "Avec quoi me présenterai-je à l'Éternel, pour m'incliner devant le Dieu des cieux ? Me présenterai-je avec des holocaustes, avec des veaux d"un an ?", citation2: "L'Éternel agréera-t-il des milliers de béliers, des myriades de torrents d"huile ? Donnerai-je mon premier-né pour mon crime, le fruit de mes entrailles pour le péché de mon âme ?", citation3: "On t'a fait connaître, ô homme, ce qui est bien ; et ce que l'Éternel demande de toi, c'est de pratiquer la justice, d"aimer la miséricorde, et de marcher humblement avec ton Dieu.", commentary: "L'un des textes majeurs de l'Ancien Testament sur la religion authentique. Michée rejette les sacrifices (y compris le sacrifice humain pratiqué par les voisins) au profit de trois exigences : justice sociale (mishpat), amour loyal (hesed), et humilité devant Dieu. Cette triade résume l'essentiel de la prophétie biblique."
  },
  {
    reference: "Michée 7:18-19",
    citation: "Quel Dieu est semblable à toi, qui pardonnes l"iniquité, qui oublies les péchés du reste de ton héritage ? Il ne garde pas sa colère à toujours, car il se plaît dans la miséricorde.", citation2: "Il aura encore compassion de nous, il mettra sous ses pieds nos iniquités. Tu jetteras au fond de la mer tous leurs péchés.",
    commentary: ""Cette confession de foi culmine le livre. Dieu est unique en sa capacité à pardonner. L'image de jeter les péchés "au fond de la mer' évoque une suppression irréversible. La réponse appropriée est la confiance dans le Dieu qui pardonne, anticipant le pardon en Christ."
  }
]

/* =============================================================================
 *
/* NAHUM - 3 chapitres
 *
/* =============================================================================

export const nahumSummary: BookSummary = {
  book: "Nahum",
  testament: "OLD",
  category: "prophetic",
  author: "Nahum (l"Elkoshite)", period: "VIIe siècle av. J.-C. (c. 650-620)",
  theme: "La chute de Ninive et le jugement de Dieu",
  outline: [ "1 : Dieu comme juge et vengeur",
    "2 : La chute de Ninive décrite en détail",
    "3 : Malheur sur la ville sanguinaire"
  ]
}

export const nahumReadingNotes: BookReadingNotes = {
  book: "Nahum",
  context: ""Nahum ("Console") prophétise probablement après la mort d"Assurbanipal (627 av. J.-C.), quand l'empire assyrien commence à s"effondrer. Ninive, la capitale sanguinaire qui a terrorisé le Proche-Orient pendant des siècles, va tomber.", keyThemes: [
    {
      theme: "Dieu comme vengeur",
      description: "L'Éternel est un Dieu jaloux qui se venge de ses ennemis. Ninive sera jugée pour sa violence extrême."
    },
    {
      theme: "La chute de l"oppresseur", description: "La grande ville qui pensait être imprenable sera réduite à néant. Dieu humilie les orgueilleux."
    },
    {
      theme: "La consolation pour Juda",
      description: "Le livre promet la paix à Juda qui souffrait sous la domination assyrienne. Dieu défend son peuple."
    },
    {
      theme: "La colère temporaire de Dieu",
      description: "Dieu est lent à la colère mais puissant dans sa colère. Il ne garde pas sa colère à toujours."
    }
  ],
  theologicalSignificance: "Nahum est le pendant de Jonas : là où Jonas annonçait la possibilité de repentir pour Ninive (VIIIe siècle), Nahum célèbre sa chute inévitable après des siècles de cruauté. Le livre affirme que la justice divine finit par triompher, même si elle tarde.",
  christologicalTypes: [
    {
      type: "Le Juge des nations",
      description: "Le Christ exécutera le jugement final sur les nations qui s'opposent à Dieu, comme Nahum l'annonçait pour Ninive."
    },
    {
      type: "Le libérateur de l"opprimé", description: "Dieu qui brise le joug de l'oppresseur préfigure le Christ qui libère de tout esclavage."
    },
    {
      type: "La paix pour le peuple de Dieu",
      description: "La promesse de paix pour Juda anticipe la paix du Christ pour son Église."
    }
  ]
}

export const nahumChapterOutlines: ChapterOutline[] = Array.from({ length: 3 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Dieu vengeur' :
        i === 1 ? "Le siège de Ninive' : "Malheur sur la ville sanguinaire", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "Oracle sur Ninive. Livre de la vision de Nahum, l'Elkoshite.' : 'Oracle sur Ninive."
    }
  ]
}))

export const nahumKeyPassages: KeyPassage[] = [
  {
    reference: "Nahum 1:2-3",
    citation: "L'Éternel est un Dieu jaloux et vengeur ; l'Éternel se venge, il est plein de fureur ; l"Éternel se venge de ses adversaires, et il garde sa colère contre ses ennemis.", citation2: "L'Éternel est lent à la colère, mais grand par sa force, et il ne laisse point impuni le coupable. L'Éternel marche dans la tempête, dans l"ouragan, et les nuées sont la poussière de ses pieds.", commentary: "L'ouverture du livre affirme le caractère de Dieu comme jaloux (qanna) et vengeur (naqam). Ces qualités ne sont pas contradictoires avec l'amour mais sont son revers : Dieu défend les siens et le projet de salut. La lenteur à la colère permet la repentance, mais la justice finit par s'accomplir."
  },
  {
    reference: "Nahum 1:7",
    citation: "L"Éternel est bon, il est un refuge au jour de la détresse ; il connaît ceux qui se confient en lui.", commentary: ""Au milieu des oracles de jugement, cette affirmation de la bonté divine offre un refuge. "Connaître' dans la Bible implique une relation intime et une protection active. Ceux qui se confient en Lui sont connus personnellement par Dieu."
  },
  {
    reference: "Nahum 2:7-8",
    citation: "La reine est mise à nu, elle est emmenée, ses suivantes font entendre un gémissement comme le cri des colombes, et elles frappent sur leur poitrine.",
    citation2: "Ninive est comme une mare dont les eaux fuient depuis longtemps. On fuit ! Arrêtez ! Arrêtez ! Mais personne ne se retourne.",
    commentary: ""La chute de Ninive est décrite avec des images vivantes. La "reine' personnifie la ville vaincue et humiliée. L'image de la mare dont les eaux s'évaporent évoque la disparition soudaine de la puissance assyrienne, qui semblait éternelle."
  },
  {
    reference: "Nahum 3:1",
    citation: "Malheur à la ville sanguinaire ! Elle est toute pleine de mensonge et de violence, et il ne cesse point de sortir d"elle des victimes.", commentary: "Ninive est caractérisée par trois maux : le sang, le mensonge et la violence continue. Ces trois traits caractérisent aussi les systèmes oppressifs de tous les temps. Dieu intervient pour arrêter la machine à tuer."
  },
  {
    reference: "Nahum 3:19",
    citation: "Il n'y a point de remède à ta blessure, ta plaie est grave ; tous ceux qui entendent les nouvelles de toi battent des mains sur ton sort, car sur qui ta méchanceté n"a-t-elle pas passé sans cesse ?", commentary: ""La chute de Ninive est si totale qu'il n'y a "point de remède.' Tous les peuples qu'elle a opprimés se réjouissent de sa chute ('"battent des mains"). Cette réaction négative souligne l'universalité de la cruauté assyrienne."
  }
]

/* =============================================================================
 *
/* HABACUC - 3 chapitres
 *
/* =============================================================================

export const habakkukSummary: BookSummary = {
  book: "Habacuc",
  testament: "OLD",
  category: "prophetic",
  author: "Habacuc",
  period: "VIIe siècle av. J.-C. (c. 610-600)",
  theme: "Le problème du mal et la confiance en Dieu",
  outline: [ "1 : Le dialogue entre Habacuc et Dieu sur le problème du mal",
    "2 : Les cinq malheurs sur Babylone et l"exaltation de la foi", "3 : La prière de confiance (psaume) et la joie en Dieu"
  ]
}

export const habakkukReadingNotes: BookReadingNotes = {
  book: "Habacuc",
  context: "Habacuc prophétise à la fin du VIIe siècle, probablement pendant la montée de Babylone comme puissance mondiale. Il est témoin de la corruption de Juda et s"interroge sur la permission divine du mal.", keyThemes: [
    {
      theme: "Le problème du mal",
      description: "Pourquoi Dieu permet-Il que les méchants prospèrent et oppriment les justes ? La question théologique par excellence."
    },
    {
      theme: "La foi comme confiance",
      description: "Le juste vivra par sa foi, pas par ce qu'il voit ou comprend. La confiance en Dieu dans l'obscurité."
    },
    {
      theme: "Le jugement de Babylone",
      description: "L'instrument du jugement de Dieu sera lui-même jugé pour sa violence et son idolâtrie."
    },
    {
      theme: "La joie indépendante des circonstances",
      description: "La véritable joie se trouve en Dieu, indépendamment des circonstances extérieures."
    }
  ],
  theologicalSignificance: ""Habacuc pose le problème théologique du mal de manière explicite. La réponse de Dieu n'est pas une explication complète mais un appel à la foi. Ce livre influence fortement Paul (Romains 1:17, Galates 3:11, Hébreux 10:38) et la Réforme ("le juste vivra par la foi").",
  christologicalTypes: [
    {
      type: "Le juste qui vit par la foi",
      description: "Christ est le parfait exemple de celui qui vit par la foi, confiant le Père même dans la souffrance."
    },
    {
      type: "Le juge des nations",
      description: "Le jugement de Babylone préfigure le jugement final que le Christ exercera sur toutes les nations."
    },
    {
      type: "La joie en Dieu seul",
      description: "La confiance d'Habacuc en Dieu anticipe la confiance du Christ au Père dans le Jardin des Oliviers."
    }
  ]
}

export const habakkukChapterOutlines: ChapterOutline[] = Array.from({ length: 3 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "La complainte d'Habacuc' :
        i === 1 ? "Les cinq malheaux' : "La prière de confiance", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "Oracle qu'eut le prophète Habacuc.' : 'Oracle d'Habacuc."
    }
  ]
}))

export const habakkukKeyPassages: KeyPassage[] = [
  {
    reference: "Habacuc 1:2-3",
    citation: "Jusques à quand, Éternel, crierai-je sans que tu m'entendes ? T"élèveras-tu ta voix pour crier au pillage, sans que je sois délivré ?", citation2: "Pourquoi me fais-tu voir l'iniquité, et me fais-tu regarder la misère ? J'ai devant moi des ravages et de la violence ; des querelles surgissent, et la sédition s"élève.", commentary: ""La prière d'Habacuc pose la question du mal sous forme de "jusqu'à quand ?' Cette question de l'apparente inaction de Dieu face au mal résonne à travers l'histoire biblique (Psaumes 13, 74) et chrétienne. Dieu ne répondra pas par une explication mais par une promesse."
  },
  {
    reference: "Habacuc 1:5",
    citation: "Regardez parmi les nations, et soyez étonnés ! Écarquillez les yeux ! Car je vais faire en vos jours une œuvre que vous ne croiriez pas si on la racontait.",
    commentary: "Dieu annonce qu'Il va faire une œuvre inouïe : l'instrument du jugement (Babylone) sera lui-même jugé. Ce verset est cité par Paul dans Actes 13:41 pour annoncer l'œuvre surprenante de Dieu dans le Christ."
  },
  {
    reference: "Habacuc 2:4",
    citation: "Voici, son âme s'enfle, elle n"est pas droite en lui ; mais le juste vivra par sa foi.", commentary: ""Ce verset est l'un des plus cités du Nouveau Testament (Romains 1:17, Galates 3:11, Hébreux 10:38). "Le juste vivra par sa foi' devient le principe central du salut chrétien. La foi n'est pas une option mais le mode de vie du juste."
  },
  {
    reference: "Habacuc 2:20",
    citation: "Mais l"Éternel est dans son saint temple. Que toute la terre se taise devant lui !", commentary: "Cette invitation au silence et à l'adoration conclut la section de jugement. Face à la majesté de Dieu et de ses jugements, seule attitude appropriée : le silence respectueux. Ce verset anticipe la vision apocalyptique du trône de Dieu."
  },
  {
    reference: "Habacuc 3:17-18",
    citation: "Car le figuier ne fleurira pas, la vigne ne produira rien, les fruits de l'olivier mentiront, les champs ne donneront pas de nourriture, les brebis seront retranchées du troupeau, et il n"y aura point de bœufs dans les étables.", citation2: "Toutefois, je me réjouirai dans l"Éternel, je tressaillirai de joie dans le Dieu de mon salut.", commentary: ""L'un des plus beaux textes sur la foi indépendante des circonstances. Même si tout s'effondre - famine, ruine économique - le croyant trouve sa joie en Dieu. Cette confiance anticipent celle du Christ au Gethsémani : "non ma volonté mais la tienne.' }
]

/* =============================================================================
 *
/* SOPHONIE - 3 chapitres
 *
/* =============================================================================

export const zephaniahSummary: BookSummary = {
  book: "Sophonie",
  testament: "OLD",
  category: "prophetic",
  author: "Sophonie",
  period: "VIIe siècle av. J.-C. (règne de Josias, c. 640-609)",
  theme: "Le jour de Yahvé et la restauration du reste humble",
  outline: [ "1 : Le jugement universel et contre Juda",
    "2 : Le jugement des nations",
    "3 : Le jugement de Jérusalem et la promesse de restauration"
  ]
}

export const zephaniahReadingNotes: BookReadingNotes = {
  book: "Sophonie",
  context: ""Sophonie, descendant du roi Ézéchias, prophétise pendant le règne de Josias, avant la réforme religieuse. Le peuple est mélange de syncrétisme religieux et d'apostasie. Le livre utilise le thème du "jour de Yahvé" de manière particulièrement développée.", keyThemes: [
    {
      theme: "Le jour de Yahvé",
      description: "Un jour proche, un jour de colère, de détresse et d'angoisse. Mais aussi un jour de joie pour le reste fidèle."
    },
    {
      theme: "Le reste humble",
      description: "Un reste d'Israël sera préservé et sera le peuple béni. Dieu est avec eux."
    },
    {
      theme: "L"idolâtrie comme adultère", description: "Juda est accusé de s'être prostitué à d'autres dieux. Le culte de Baal et des astres est fermement condamné."
    },
    {
      theme: "La joie en Dieu",
      description: "Le livre conclut avec une note de triomphe et de joie, Dieu Lui-même chantant pour son peuple."
    }
  ],
  theologicalSignificance: ""Sophonie contient l'une des plus riches descriptions du "jour de Yahvé' qui deviendra '"le jour du Seigneur" dans le Nouveau Testament. L"image extraordinaire de Dieu chantant pour son peuple (3:17) est unique dans la Bible.", christologicalTypes: [
    {
      type: "Le Roi d"Israël au milieu de son peuple", description: "Le Christ est l'accomplissement de cette promesse : Dieu lui-même au milieu de son peuple comme Roi et Sauveur."
    },
    {
      type: "Le juge du jour du Seigneur",
      description: "Le jour du Seigneur annoncé par Sophonie devient le jour du Christ juge, décrit dans l'Apocalypse."
    },
    {
      type: "Le berger qui rassemble",
      description: "Le reste ramené sera comme un troupeau paisible, anticipant le Bon Berger qui rassemble ses brebis."
    }
  ]
}

export const zephaniahChapterOutlines: ChapterOutline[] = Array.from({ length: 3 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Le jugement universel' :
        i === 1 ? "Contre les nations' : "Le jour de Yahvé et la restauration", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "La parole de l'Éternel qui fut adressée à Sophonie, fils de Cuschi, fils de Gedalia, fils d'Amaria, fils d'Ézéchias, au temps de Josias, fils d'Amon, roi de Juda.' : 'Oracle sur Juda."
    }
  ]
}))

export const zephaniahKeyPassages: KeyPassage[] = [
  {
    reference: "Sophonie 1:7",
    citation: "Silence devant le Seigneur l'Éternel ! Car le jour de l'Éternel est proche ; car l"Éternel a préparé le sacrifice, il a consacré ses conviés.", commentary: ""L'invitation au silence introduit le jour de Yahvé comme un sacrifice où les nations sont les victimes. L'image du banquet divin avec des "conviés' qui seront sacrifiés renverse l'image habituelle du banquet de fête. C'est un avertissement solennel."
  },
  {
    reference: "Sophonie 1:12",
    citation: "En ce temps-là, je fouillerai Jérusalem avec des lampes, et je châtierai les hommes qui tiennent sur leur garde (le qui s'endorment), et qui disent dans leur cœur : L"Éternel ne fait ni bien ni mal.", citation2: "Leur richesse sera au pillage, et leurs maisons seront dévastées ; ils auront bâti des maisons, mais ils ne les habiteront pas ; ils auront planté des vignes, mais ils n"en boiront pas le vin.", commentary: ""Dieu "fouille' avec des lampes ceux qui sont indifférents ('"qui s'endorment"). Les déistes qui croient que Dieu 'ne fait ni bien ni mal' sont particulièrement visés. L'indifférence religieuse est aussi grave que l'idolâtrie active."
  },
  {
    reference: "Sophonie 2:3",
    citation: "Cherchez l'Éternel, vous tous, humbles du pays, qui pratiquez ses ordonnances ! Cherchez la justice, cherchez l'humilité ! Peut-être serez-vous épargnés au jour de la colère de l"Éternel.", commentary: ""L'appel à chercher l'Éternel s'adresse spécifiquement aux "humbles du pays' (anawim), les pauvres et opprimés fidèles à Dieu. Ce groupe deviendra le '"reste" qui sera épargné. L'humilité (tsana) et la justice (mishpat) sont les qualités requises pour échapper au jugement."
  },
  {
    reference: "Sophonie 3:14-15",
    citation: "Pousse des cris de joie, fille de Sion ! Pousse des acclamations, Israël ! Réjouis-toi et sois dans l"allégresse de tout ton cœur, fille de Jérusalem !", citation2: "L'Éternel a éloigné tes jugements, il a chassé ton ennemi ; le roi d'Israël, l"Éternel, est au milieu de toi ; tu ne verras plus le malheur.", commentary: ""Le ton change dramatiquement du jugement à la joie. Le "roi d'Israël, l'Éternel' est au milieu de son peuple. Cette présence divine promise s'accomplit en Christ, Emmanuel ('"Dieu avec nous"). Le motif de joie n'est pas l'absence d'ennemis mais la présence de Dieu."
  },
  {
    reference: "Sophonie 3:17",
    citation: "L"Éternel, ton Dieu, est au milieu de toi, un héros qui sauve ; il fera de toi sa plus grande joie, il renouvlera son amour pour toi, il aura pour toi des cris de joie.", citation2: "Je rassemblerai ceux qui sont en deuil, qui étaient loin de l"assemblée, sur qui ton opprobre était tombé.", commentary: ""L'image étonnante de Dieu Lui-même chantant pour son peuple ("cris de joie") est unique dans la Bible. L"amour divin est comparé à celui d'un époux pour sa bien-aimée. Cette image culminera dans le Nouveau Testament avec le Christ comme époux de l'Église."
  }
]

/* =============================================================================
 *
> Agur - 2 chapitres
/* =============================================================================

export const haggaiSummary: BookSummary = {
  book: "Aggée",
  testament: "OLD",
  category: "prophetic",
  author: "Aggée",
  period: "520 av. J.-C.",
  theme: "La reconstruction du Temple et les priorités du peuple",
  outline: [ "1 : Appel à reconstruire le Temple",
    "2 : Promesses de bénédiction et de renouvellement"
  ]
}

export const haggaiReadingNotes: BookReadingNotes = {
  book: "Aggée",
  context: "Aggée prophétise en 520 av. J.-C., après le retour de l"exil. Le peuple a reconstruit ses maisons mais a négligé le Temple de Dieu. Le livre encourage la reprise de la construction du Temple et promet la présence divine.", keyThemes: [
    {
      theme: "Les priorités divines",
      description: "Le peuple construit de belles maisons pour eux-mêmes mais laisse le Temple en ruines. Dieu doit être prioritaire."
    },
    {
      theme: "La présence de Dieu",
      description: "La promesse que l'Esprit de Dieu reste au milieu du peuple. Le Temple sera plus glorieux que le premier."
    },
    {
      theme: "La bénédiction conditionnelle",
      description: "L'obéissance apporte la bénédiction, la désobéissance apporte la malédiction (dévastation des récoltes)."
    },
    {
      theme: "L"espérance messianique", description: ""Dieu ébranlera les nations et enverra le "Désiré de toutes les nations.' }
  ],
  theologicalSignificance: "Aggée est l'un des trois prophètes post-exiliques avec Zacharie et Malachie. Il encourage un peuple découragé à reprendre l'œuvre de Dieu. Les promesses de gloire future du Temple s"accomplissent dans le Christ qui est le véritable Temple (Jean 2:19-21).", christologicalTypes: [
    {
      type: "Le Désiré de toutes les nations",
      description: "Le Messie qui viendra remplir le Temple de sa gloire. Christ est celui vers qui convergent les désirs des nations."
    },
    {
      type: "Le Temple plus glorieux",
      description: "Le Temple reconstruit sera plus glorieux que le premier parce que le Christ le visitera et y enseignera."
    },
    {
      type: "Le Sceau de l"élection", description: "Zorobabel, le gouverneur, devient un sceau d'élection, préfigurant le Christ comme sceau parfait de l'élection divine."
    }
  ]
}

export const haggaiChapterOutlines: ChapterOutline[] = Array.from({ length: 2 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "La reconstruction du Temple' : 'Promesses pour l"avenir", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "La seconde année du roi Darius, le premier jour du sixième mois, la parole de l'Éternel fut adressée par le prophète Aggée à Zorobabel, fils de Shealthiel, gouverneur de Juda, et à Josué, fils de Jotsadak, le grand prêtre.' : 'La septième année du roi Darius..."
    }
  ]
}))

export const haggaiKeyPassages: KeyPassage[] = [
  {
    reference: "Aggée 1:4",
    citation: "Cette maison est-elle le temps pour vous d"habiter des maisons lambrissées, pendant que cette maison est détruite ?", commentary: ""Cette interrogation cinglante expose les priorités tordues du peuple. Ils ont le temps et les ressources pour leurs propres maisons "lambrissées' (richement décorées) mais laissent la maison de Dieu en ruines. La même question peut être posée à l'Église de tous les temps."
  },
  {
    reference: "Aggée 1:5-6",
    citation: "Et maintenant, ainsi parle l"Éternel des armées : Considérez attentivement vos voies !", citation2: "Vous avez semé beaucoup, et vous recueillez peu ; vous mangez, et vous n'êtes pas rassasiés ; vous buvez, et vous n'êtes pas désaltérés ; vous êtes vêtus, et vous n"avez pas chaud ; et le salarié gagne son salaire pour le mettre dans un sac percé.", commentary: ""Le "sac percé' devient une image puissante de l'activité humaine sans la bénédiction divine. Toute l'activité économique et même les besoins fondamentaux (manger, boire, se vêtir) restent insatisfaisants quand Dieu est négligé. La bénédiction dépend de l'obéissance."
  },
  {
    reference: "Aggée 1:13",
    citation: "Alors Aggée, le messager de l'Éternel, parla ainsi au peuple, conformément à l'ordre de l'Éternel : Je suis avec vous, dit l"Éternel.", commentary: ""Cette courte promesse ("Je suis avec vous") contient l"essentiel de l'alliance. La présence divine, compromise par le péché, est rétablie par l'obéissance. Cette promesse s'accomplit pleinement dans le Christ, '"Emmanuel, Dieu avec nous.""
  },
  {
    reference: "Aggée 2:6-7",
    citation: "Car ainsi parle l'Éternel des armées : Encore un peu de temps, et j"ébranlerai les cieux et la terre, la mer et le sec ;", citation2: "J'ébranlerai toutes les nations, et les trésors de toutes les nations afflueront, et je remplirai de gloire cette maison, dit l"Éternel des armées.", commentary: ""L'ébranlement des cieux et de la terre annonce les bouleversements eschatologiques qui accompagneront la venue du Messie. L'Apocalypse reprendra ce thème (Apocalypse 6:12-17). Les "trésors des nations' qui affluent peuvent évoquer l'université du salut en Christ."
  },
  {
    reference: "Aggée 2:9",
    citation: "La gloire de cette dernière maison sera plus grande que celle de la première, dit l'Éternel des armées, et c'est dans ce lieu que je donnerai la paix, dit l"Éternel des armées.", commentary: ""La promesse que le Temple reconstruit (plus humble que le Temple de Salomon) sera plus glorieux s'accomplit dans le Christ qui visite ce Temple et y accomplit son ministère. La "paix' donnée dans ce lieu n'est pas seulement l'absence de guerre mais la shalom complète qui vient de Dieu."
  },
  {
    reference: "Aggée 2:23",
    citation: "En ce jour-là, dit l'Éternel des armées, je te prendrai, Zorobabel, fils de Shealthiel, mon serviteur, dit l'Éternel, et je te ferai comme un sceau ; car je t'ai choisi, dit l"Éternel des armées.", commentary: ""Zorobabel devient un "sceau' - signe d'authenticité et d'autorité. Ce descendant de David représente l'espoir messianique. Le Christ est le véritable Sceau de Dieu, l'authentique Roi de la lignée de David."
  }
]

/* =============================================================================
 *
> ZACHARIE - 14 chapitres
/* =============================================================================

export const zechariahSummary: BookSummary = {
  book: "Zacharie",
  testament: "OLD",
  category: "prophetic",
  author: "Zacharie (fils de Béréchie, fils d"Iddo)", period: "520-518 av. J.-C.",
  theme: "Le Messie-Roi et la restauration d"Israël", outline: [ "1-6 : Huit visions nocturnes et le message de repentir",
    "7-8 : Questions sur le jeûne et promesses de restauration",
    "9-11 : Les deux oracles : le Roi humble et le bon pasteur",
    "12-14 : Le jour de l'Éternel et la venue du Roi-Messie"
  ]
}

export const zechariahReadingNotes: BookReadingNotes = {
  book: "Zacharie",
  context: "Zacharie, prêtre et prophète, commence son ministère deux mois après Aggée (520 av. J.-C.). Il encourage la reconstruction du Temple et annonce l"avenir glorieux du peuple de Dieu avec un fort accent messianique.", keyThemes: [
    {
      theme: "Le Messie-Roi",
      description: "Le Messie sera présenté comme un Roi humble monté sur un ânon, puis comme le Berger percé et le Roi qui vient."
    },
    {
      theme: "Les visions prophétiques",
      description: "Huit visions symboliques révèlent le plan de Dieu pour son peuple : les cavaliers, les cornes, le conducteur, le grand prêtre, etc."
    },
    {
      theme: "La restauration de Jérusalem",
      description: "Jérusalem sera reconstruite, peuplée, et deviendra une source de salut pour les nations."
    },
    {
      theme: "L"Esprit de Dieu", description: ""L'œuvre de Dieu s'accomplit "ni par la puissance ni par la force, mais par mon Esprit.' }
  ],
  theologicalSignificance: "Zacharie est le plus messianique des livres prophétiques. Il est cité fréquemment dans le Nouveau Testament, particulièrement dans la Passion du Christ (le sang répandu, les 30 pièces d'argent, le regard percé). Les visions de Zacharie structurent l"Apocalypse de Jean.", christologicalTypes: [
    {
      type: "Le Roi monté sur un ânon",
      description: "Zacharie 9:9 est cité dans les entrées triomphales de Jésus à Jérusalem. Le Messie-Roi humble et pacifique."
    },
    {
      type: "Le Berger percé",
      description: "Le Berger frappé et les brebis dispersées préfigurent la Passion du Christ et la fuite des disciples."
    },
    {
      type: "Celui qu"ils ont percé", description: ""Zacharie 12:10 ("ils regarderont vers moi qu'ils ont percé") est cité dans Jean 19:37 à la crucifixion."
    },
    {
      type: "Le Roi-Pasteur",
      description: "Le Messie qui rassemble les nations et règne sur toute la terre s'accomplit dans le Christ glorieux."
    }
  ]
}

export const zechariahChapterOutlines: ChapterOutline[] = Array.from({ length: 14 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "Appel à la conversion et première vision' :
        i === 1 ? "Vision des quatre cornes et des quatre ouvriers' :
        i === 2 ? "Vision de l'homme avec le cordeau' :
        i === 3 ? "Vision du grand prêtre Josué' :
        i === 4 ? "Vision du chandelier et des deux oliviers' :
        i === 5 ? "Vision du rouleau volant' :
        i === 6 ? "Vision de la femme dans l'épha' :
        i === 7 ? "Vision des quatre chars' :
        i === 8 ? "Le couronnement de Josué' :
        i === 9 ? "Question sur le jeûne' :
        i === 10 ? "L'oracle du roi' :
        i === 11 ? "Les deux bergers' :
        i === 12 ? "Le jour de l'Éternel' :
        i === 13 ? "La source ouverte et l'idole abolie' : 'Le jour où l"Éternel sera roi", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "La huitième année du règne de Darius, la parole de l'Éternel fut adressée à Zacharie, fils de Béréchie, fils d'Iddo, le prophète.' : 'Oracle de Zacharie."
    }
  ]
}))

export const zechariahKeyPassages: KeyPassage[] = [
  {
    reference: "Zacharie 1:3",
    citation: "Et dis-leur : Ainsi parle l'Éternel des armées : Revenez à moi, dit l'Éternel des armées, et je reviendrai à vous, dit l"Éternel des armées.", commentary: ""L'appel central de Zacharie : le retour à Dieu. La relation est réciproque : revenez à moi et je reviendrai à vous. Dieu ne force pas mais invite à la conversion. Cette invitation anticipent l'invitation du Christ : "Venez à moi...' },
  {
    reference: "Zacharie 3:8-9",
    citation: "Écoute bien, Josué, grand prêtre, toi et tes compagnons qui sont assis devant toi ! Car ce sont des hommes de signe : voici, je ferai venir mon serviteur, le Germe.",
    citation2: "Car voici la pierre que je pose devant Josué ; il y a sept yeux sur cette seule pierre ; je graverai moi-même ce qui doit être gravé, dit l'Éternel des armées, et j'ôterai l"iniquité de ce pays en un seul jour.", commentary: ""La "pierre avec sept yeux' symbolise la perfection divine. Le '"Germe" (tsemach) est un titre messianique qui désigne le descendant de David qui restaurera le royaume. 'J'ôterai l'iniquité en un seul jour' anticipe le sacrifice unique du Christ."
  },
  {
    reference: "Zacharie 4:6",
    citation: "Ce n'est ni par la puissance ni par la force, mais c'est par mon Esprit, dit l"Éternel des armées.", commentary: ""Ce verset célèbre résume la théologie biblique de l'action. L'œuvre de Dieu ne dépend pas des ressources humaines ("puissance' ou '"force") mais de son Esprit. Cette vérité encourage tous ceux qui servent Dieu avec des moyens limités."
  },
  {
    reference: "Zacharie 9:9",
    citation: "Sois transportée d'allégresse, fille de Sion ! Pousse des cris de joie, fille de Jérusalem ! Voici, ton roi vient à toi ; il est juste et victorieux, il est humble et monté sur un âne, sur un ânon, petit d"une ânesse.", commentary: ""Ce verset est cité dans les quatre évangiles lors de l'entrée triomphale de Jésus à Jérusalem. Le contraste est saisissant : le Roi "juste et victorieux' vient '"humble" sur un ânon, pas comme un conquérant guerrier. La royauté du Christ est d'une nature entièrement nouvelle."
  },
  {
    reference: "Zacharie 11:12-13",
    citation: "Et je leur dis : Si vous le trouvez bon, donnez-moi mon salaire ; sinon, ne le donnez pas. Ils pesèrent pour mon salaire trente pièces d"argent.", citation2: "Et l'Éternel me dit : Jette-le au potier, ce prix magnifique auquel ils m'ont estimé ! Et je pris les trente pièces d'argent, et je les jetai dans la maison de l"Éternel, pour le potier.", commentary: ""Les "trente pièces d'argent' deviennent le prix de la trahison de Judas. L'ironie '"ce prix magnifique" souligne combien peu ils apprécient la valeur du prophète (et de Dieu Matthieu 27:9-10 cite ce texte comme s'accomplissant dans le champ du potier)."
  },
  {
    reference: "Zacharie 12:10",
    citation: "Alors je répandrai sur la maison de David et sur les habitants de Jérusalem un esprit de grâce et de supplication, et ils tourneront les regards vers moi, celui qu"ils ont percé. Ils pleureront sur lui comme on pleure sur un fils unique, ils pleureront amèrement sur lui comme on pleure sur un premier-né.", commentary: ""Jean 19:37 cite ce texte au moment de la crucifixion. Le paradoxe est frappant : "ils tourneront les regards vers moi, celui qu'ils ont percé' - Dieu Lui-même est percé dans la personne du Christ. Les pleurs sur le '"fils unique" anticipent la compréhension post-Pentecôte du sacrifice du Christ."
  },
  {
    reference: "Zacharie 13:1",
    citation: "En ce jour-là, une source sera ouverte pour la maison de David et pour les habitants de Jérusalem, pour le péché et pour l"impureté.", commentary: ""La "source ouverte' pour le péché et l'impureté anticipe le sang et l'eau qui coulent du côté du Christ (Jean 19:34). L'image de la source évoque une purification continue et disponible, contrairement au système sacrificiel répétitif."
  },
  {
    reference: "Zacharie 14:9",
    citation: "L'Éternel sera roi sur toute la terre ; en ce jour-là, l"Éternel sera unique, et son nom unique.", commentary: ""La vision finale de Zacharie : l'Éternel sera reconnu comme unique Roi sur toute la terre. Cette souveraineté universelle de Dieu s'accomplit en Christ, "au nom de qui tout genou fléchit' (Philippiens 2:10)."
  }
]

/* =============================================================================
 *
> MALACHIE - 4 chapitres
/* =============================================================================

export const malachiSummary: BookSummary = {
  book: "Malachie",
  testament: "OLD",
  category: "prophetic",
  author: ""Malachie ("Mon messager")",
  period: "Ve siècle av. J.-C. (c. 460-450)",
  theme: "L'amour de Dieu et l"appel à la fidélité", outline: [ "1 : L"amour de Dieu pour Israël et les défauts du culte", "2 : Contre les prêtres infidèles et les mariages mixtes",
    "3 : La venue du Messie et le jour de son apparition",
    "4 : Le jour de l'Éternel et la distinction entre juste et méchant"
  ]
}

export const malachiReadingNotes: BookReadingNotes = {
  book: "Malachie",
  context: "Malachie, le dernier prophète de l'Ancien Testament, prophétise après la reconstruction du Temple. Le peuple est retombé dans l'indifférence religieuse et le doute de l"amour de Dieu. Le livre utilise le style du dialogue (questions et réponses).", keyThemes: [
    {
      theme: "Le doute de l"amour divin", description: ""Le peuple demande : "Dieu nous aime-t-il ?' Malachie répond par l'élection de Jacob et non d'Ésaü."
    },
    {
      theme: "Les défauts du culte",
      description: "Le peuple offre des animaux aveugles, boiteux ou malades. Dieu mérite le meilleur, pas les restes."
    },
    {
      theme: "La fidélité conjugale",
      description: "Le mariage est comparé à l'alliance avec Dieu. Les divorces et mariages mixtes sont condamnés."
    },
    {
      theme: "La venue du Messie",
      description: "Le Messie viendra avec son messager pour préparer son chemin. Il purifiera les lévites et jugera."
    }
  ],
  theologicalSignificance: ""Malachie conclut l'Ancien Testament avec la promesse de la venue d'Élie qui précèdera le "grand et terrible jour de l'Éternel." Jean-Baptiste accomplira ce rôle (Matthieu 11:14). Le livre prépare la venue du Christ.", christologicalTypes: [
    {
      type: "Le Messie du Temple",
      description: ""Le "Seigneur que vous cherquez' viendra soudainement dans son Temple. Christ est venu purifier le Temple."
    },
    {
      type: "Le Soleil de justice",
      description: "Le Messie sera comme le soleil qui se lève avec la guérison dans ses rayons pour ceux qui craignent Dieu."
    },
    {
      type: "L'Ange de l"alliance", description: ""Le Messie est appelé "l'Ange (messager) de l'alliance' qui viendra purifier le peuple."
    }
  ]
}

export const malachiChapterOutlines: ChapterOutline[] = Array.from({ length: 4 }, (_, i) => ({
  chapter: i + 1,
  title: i === 0 ? "L'amour de Dieu et le culte défectueux' :
        i === 1 ? "Contre les prêtres et les mariages mixtes' :
        i === 2 ? "La venue du Messie' : 'Le jour de l"Éternel", verses: [
    {
      reference: `${i + 1}:1`,
      text: i === 0 ? "Oracle, parole de l'Éternel à Israël, par Malachie.' : 'Oracle de l'Éternel."
    }
  ]
}))

export const malachiKeyPassages: KeyPassage[] = [
  {
    reference: "Malachie 1:2-3",
    citation: "Je vous ai aimés, dit l'Éternel. Mais vous dites : En quoi nous as-tu aimés ? Ésaü n'est-il pas frère de Jacob ? dit l'Éternel ; cependant j'ai aimé Jacob, et j"ai hai Ésaü.", citation2: "J'ai fait de ses montagnes une désolation, et j"ai livré son héritage aux chacals du désert.", commentary: "L'ouverture du livre abfronte directement le doute du peuple sur l'amour de Dieu. La réponse n'est pas philosophique mais historique : l'élection de Jacob et le rejet d'Ésaü. L'amour de Dieu est électif mais aussi historiquement démontré dans les événements."
  },
  {
    reference: "Malachie 1:6-8",
    citation: "Le fils honore son père, et le serviteur son maître. Si je suis père, où est l'honneur qui m'est dû ? Et si je suis maître, où est la crainte qu'on me doit ? dit l"Éternel des armées à vous, prêtres qui méprisez mon nom !", citation2: "Vous offrez sur mon autel du pain souillé. Et vous dites : En quoi t'avons-nous méprisé ? En ce que vous dites : La table de l"Éternel est méprisable !", citation3: "Quand vous présentez pour offrande un animal aveugle, qui n'est pas mauvais, ou un animal boiteux ou malade, n'est-ce pas mauvais ? Offre-le donc à ton gouverneur ! Ton gouverneur t'en saura-t-il gré, te favorisera-t-il, ou t'accueillera-t-il avec bienveillance ? dit l"Éternel des armées.", commentary: ""Malachie dénonce l'hypocrisie du culte : on offre les pires animaux à Dieu, ce qu'on n'oserait jamais donner à un gouverneur humain. Le mépris de la "table de l'Éternel' (l'autel) révèle un mépris de Dieu Lui-même. La même critique s'adresse à ceux qui donnent à Dieu les '"restes" de leur temps, énergie ou ressources."
  },
  {
    reference: "Malachie 2:13-14",
    citation: "Voici encore ce que vous faites : Vous couvrez de larmes l'autel de l'Éternel, de pleurs et de gémissements, en sorte qu'il ne prend plus plaisir aux offrandes et n"en reçoit rien de vos mains ;", citation2: "et vous dites : Pourquoi ? Parce que l'Éternel a été témoin entre toi et la femme de ta jeunesse, envers qui tu as été infidèle, bien qu"elle soit ta compagne et la femme de ton alliance.", commentary: "Le mariage est comparé à une alliance avec Dieu comme témoin. La trahison conjugale affecte directement la relation avec Dieu : les prières et les sacrifices ne sont pas acceptés. Ce texte fonde la vision chrétienne du mariage comme alliance sacrée."
  },
  {
    reference: "Malachie 2:16",
    citation: "Car je hais la répudiation, dit l'Éternel, le Dieu d'Israël, et celui qui couvre de violence son vêtement, dit l"Éternel des armées. Prenez donc garde à votre esprit, et ne soyez pas infidèles !", commentary: ""Ce texte, difficile dans l'hébreu, affirme clairement que Dieu "hait' la répudiation (divorce). La '"violence" qui couvre le 'vêtement' évoque peut-être les femmes maltraitées. Le mariage est à protéger comme une alliance sacrée."
  },
  {
    reference: "Malachie 3:1",
    citation: "Voici, je vais envoyer mon messager pour qu'il prépare le chemin devant moi ; et soudain entrera dans son temple le Seigneur que vous cherchez, et le messager de l'alliance que vous désirez. Voici, il vient, dit l"Éternel des armées.", commentary: ""Cette prophétie à double accomplissement : Jean-Baptiste comme "messager' qui prépare le chemin, et le Christ comme '"Seigneur" et 'messager de l'alliance' qui vient soudainement dans son Temple. Marc 1:2 cite ce texte pour introduire le ministère de Jean."
  },
  {
    reference: "Malachie 3:6-7",
    citation: "Car je suis l'Éternel, je ne change pas ; et vous, enfants de Jacob, vous n'avez pas été consumés. Depuis les jours de vos pères, vous vous êtes détournés de mes ordonnances, vous ne les avez pas observées. Revenez à moi, et je reviendrai à vous, dit l"Éternel des armées.", commentary: ""La fidélité de Dieu ("je ne change pas") contraste avec l"infidélité d'Israël. C'est cette constance divine qui a empêché la consommation totale du peuple. L'invitation '"revenez à moi, et je reviendrai à vous" réaffirme la relation d'alliance qui reste possible malgré les échecs."
  },
  {
    reference: "Malachie 3:8-10",
    citation: "Un homme trompe-t-il Dieu ? Car vous me trompez, et vous dites : En quoi t"avons-nous trompé ? Dans les dîmes et les offrandes.", citation2: "Vous êtes frappés de malédiction, et vous me trompez, la nation tout entière !",
    citation3: "Apportez toutes les dîmes à la maison du trésor, afin qu'il y ait de la nourriture dans ma maison ; mettez-moi de la sorte à l'épreuve, dit l'Éternel des armées, et vous verrez si je n"ouvre pas pour vous les écluses des cieux, si je ne répands pas sur vous la bénédiction en abondance.", commentary: ""Malachie accuse le peuple de "tromper' Dieu en retenant les dîmes. La promesse de bénédiction ('"je répandrai") est accompagnée de l'invitation unique dans la Bible à 'mettre Dieu à l'épreuve.' Cette promesse de bénédiction financière est souvent invoquée dans la théologie de la dîme."
  },
  {
    reference: "Malachie 3:16-17",
    citation: "Alors ceux qui craignent l'Éternel se parlèrent les uns aux autres ; l'Éternel prêta l'oreille, et il fut écrit devant lui un mémorial, pour ceux qui craignent l"Éternel et qui méditent sur son nom.", citation2: "Ils seront à moi, dit l'Éternel des armées, ils m"appartiendront, comme un homme qui a conservé son fils au jour de la détresse ; je les épargnerai comme un homme épargne son fils qui le sert.", commentary: ""Au milieu de l'infidélité générale, un "reste' craint l'Éternel et médite sur son nom. Dieu les reconnaît comme '"sien" et les épargnera. L'image du fils 'conservé au jour de la détresse' souligne la protection spéciale de Dieu envers les siens."
  },
  {
    reference: "Malachie 4:1-2",
    citation: "Car voici, le jour vient, ardent comme une fournaise. Tous les arrogants et tous les méchants seront comme du chaume ; le jour qui vient les embrasera, dit l"Éternel des armées, il ne leur laissera ni racine ni branche.", citation2: "Mais pour vous qui craignez mon nom, se lèvera le soleil de la justice, et la guérison sera dans ses rayons ; vous sortirez en bondissant comme les veaux d"une étable.", commentary: ""Le contraste entre le jugement des méchants ("chaume") et la délivrance des justes (""soleil de justice"). Le 'soleil'" est un titre messianique : le Messie sera la lumière qui apporte la guérison. L'image des "veaux bondissant' exprime la joie de la libération."
  },
  {
    reference: "Malachie 4:5-6",
    citation: "Voici, je vous enverrai Élie, le prophète, avant que le jour grand et terrible de l"Éternel arrive.", citation2: "Il ramènera le cœur des pères à leurs enfants, et le cœur des enfants à leurs pères, de peur que je ne vienne frapper le pays de malédiction.",
    commentary: ""La promesse de l'envoi d'Élie conclut l'Ancien Testament. Jean-Baptiste accomplira ce rôle (Matthieu 11:14, Luc 1:17). La réconciliation des familles ("cœur des pères à leurs enfants") est la condition pour éviter la ""malédiction." La réconciliation familiale et nationale est une préparation à la venue du Messie."
  }
]
