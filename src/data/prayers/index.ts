/**
 *
 * Prayers Data - Prières catholiques traditionnelles
 *
 * Collection de prières en latin et français,
 * avec mise en page bilingue pour la récitation.
 */

export enum PrayerCategory {
  OUR_FATHER = "OUR_FATHER", // Pater Noster
  HAIL_MARY = "HAIL_MARY", // Ave Maria
  CREED = "CREED", // Symboles de foi
  ACTS = "ACTS", // Actes de foi, espérance, charité
  LITANY = "LITANY", // Litanies
  ROSARY = "ROSARY", // Mystères du Rosaire
  LITURGICAL = "LITURGICAL", // Prières liturgiques
  MARIAN = "MARIAN", // Prières mariales
  SAINT = "SAINT", // Prières à des saints
  EUCHARISTIC = "EUCHARISTIC", // Prières eucharistiques
  PENITENTIAL = "PENITENTIAL", // Prières de pénitence
  MORNING = "MORNING", // Prières du matin
  EVENING = "EVENING", // Prières du soir
  MEAL = "MEAL", // Prières avant/après les repas
  OTHER = "OTHER", // Autres prières
}

export enum PrayerOrigin {
  BIBLICAL = "BIBLICAL", // Prière biblique
  APOSTOLIC = "APOSTOLIC", // Prière des Apôtres
  PATRISTIC = "PATRISTIC", // Père de l'Église
  MEDIEVAL = "MEDIEVAL", // Moyen Âge
  MODERN = "MODERN", // Époque moderne
}

export interface PrayerVerse {
  latin: string;
  french: string;
}

export interface PrayerSection {
  title?: string;
  verses: PrayerVerse[];
}

export interface Prayer {
  slug: string;
  name: string;
  nameLatin?: string;
  category: PrayerCategory;
  origin?: PrayerOrigin;
  author?: string; // Auteur attribué
  source?: string; // Référence biblique ou historique

  description?: string;

  // Structure de la prière
  sections: PrayerSection[];

  // Métadonnées
  tags?: string[];
  relatedPrayers?: string[];
}

/**
 *
 * Prières Fondamentales
 */
export const ourFather: Prayer = {
  slug: "pater-noster",
  name: "Notre Père",
  nameLatin: "Pater Noster",
  category: PrayerCategory.OUR_FATHER,
  origin: PrayerOrigin.BIBLICAL,
  source: "Matthieu 6:9-13",

  description:
    "La prière enseignée par Jésus-Christ lui-même à ses disciples. C'est la plus parfaite de toutes les prières, modèle de toute prière chrétienne.",

  sections: [
    {
      verses: [
        {
          latin: "Pater noster, qui es in cælis,",
          french: "Notre Père, qui es aux cieux,",
        },
        {
          latin: "sanctificetur nomen tuum.",
          french: "que ton nom soit sanctifié,",
        },
        {
          latin: "Adveniat regnum tuum.",
          french: "que ton règne vienne,",
        },
        {
          latin: "Fiat voluntas tua, sicut in cælo, et in terra.",
          french: "que ta volonté soit faite sur la terre comme au ciel.",
        },
        {
          latin: "Panem nostrum quotidianum da nobis hodie.",
          french: "Donne-nous aujourd'hui notre pain de ce jour.",
        },
        {
          latin: "Et dimitte nobis debita nostra,",
          french: "Pardonne-nous nos offenses,",
        },
        {
          latin: "sicut et nos dimittimus debitoribus nostris.",
          french: "comme nous pardonnons aussi à ceux qui nous ont offensés.",
        },
        {
          latin: "Et ne nos inducas in tentationem,",
          french: "Et ne nous soumets pas à la tentation,",
        },
        {
          latin: "sed libera nos a malo.",
          french: "mais délivre-nous du mal.",
        },
      ],
    },
    {
      title: "Doxologie (ajoutée par l'Église)",
      verses: [
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["jesus", "enseignement", "modele", "evangile"],
};

export const hailMary: Prayer = {
  slug: "ave-maria",
  name: "Je vous salue Marie",
  nameLatin: "Ave Maria",
  category: PrayerCategory.HAIL_MARY,
  origin: PrayerOrigin.BIBLICAL,

  description:
    "Composition de la salutation de l'archange Gabriel (Luc 1:28) et d'Élisabeth (Luc 1:42), avec une demande d'intercession ajoutée par l'Église.",

  sections: [
    {
      title: "Salutation angélique",
      verses: [
        {
          latin: "Ave Maria, gratia plena,",
          french: "Je vous salue, Marie, pleine de grâce,",
        },
        {
          latin: "Dominus tecum;",
          french: "le Seigneur est avec vous ;",
        },
        {
          latin: "benedicta tu in mulieribus,",
          french: "vous êtes bénie entre toutes les femmes,",
        },
        {
          latin: "et benedictus fructus ventris tui, Jesus.",
          french: "et Jésus, le fruit de vos entrailles, est béni.",
        },
      ],
    },
    {
      title: "Demande d'intercession (ajoutée vers le XVe siècle)",
      verses: [
        {
          latin: "Sancta Maria, Mater Dei,",
          french: "Sainte Marie, Mère de Dieu,",
        },
        {
          latin: "ora pro nobis peccatoribus,",
          french: "priez pour nous, pauvres pécheurs,",
        },
        {
          latin: "nunc, et in hora mortis nostræ.",
          french: "maintenant et à l'heure de notre mort.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["marie", "ange", "elisabeth", "jesus"],
};

export const gloryBe: Prayer = {
  slug: "gloria-patri",
  name: "Gloire au Père",
  nameLatin: "Gloria Patri",
  category: PrayerCategory.ACTS,
  origin: PrayerOrigin.APOSTOLIC,

  description:
    "Doxologie trinitaire, récitée à la fin de chaque dizaine du chapelet et de nombreux psaumes.",

  sections: [
    {
      verses: [
        {
          latin: "Gloria Patri, et Filio, et Spiritui Sancto.",
          french: "Gloire au Père, au Fils, et au Saint-Esprit,",
        },
        {
          latin: "Sicut erat in principio, et nunc, et semper,",
          french: "Comme il était au commencement, maintenant et toujours,",
        },
        {
          latin: "et in sæcula sæculorum.",
          french: "dans tous les siècles des siècles.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["trinite", "doxologie", "chapelet"],
};

export const apostlesCreed: Prayer = {
  slug: "symbole-des-apotres",
  name: "Je crois en Dieu (Symbole des Apôtres)",
  nameLatin: "Credo in Deum (Symbolum Apostolorum)",
  category: PrayerCategory.CREED,
  origin: PrayerOrigin.APOSTOLIC,
  source: "Tradition apostolique (IIe siècle)",

  description:
    "Le plus ancien symbole de foi chrétienne, résumé de la foi apostolique. Il est divisé en 12 articles, correspondant aux 12 apôtres.",

  sections: [
    {
      title: "Dieu le Père",
      verses: [
        {
          latin: "Credo in Deum, Patrem omnipotentem,",
          french: "Je crois en Dieu, le Père tout-puissant,",
        },
        {
          latin: "Creatorem cæli et terræ.",
          french: "créateur du ciel et de la terre.",
        },
      ],
    },
    {
      title: "Jésus-Christ",
      verses: [
        {
          latin: "Et in Iesum Christum, Filium eius unicum, Dominum nostrum,",
          french: "Et en Jésus-Christ, son Fils unique, notre Seigneur,",
        },
        {
          latin: "qui conceptus est de Spiritu Sancto,",
          french: "qui a été conçu du Saint-Esprit,",
        },
        {
          latin: "natus ex Maria Virgine,",
          french: "né de la Vierge Marie,",
        },
        {
          latin: "passus sub Pontio Pilato,",
          french: "a souffert sous Ponce Pilate,",
        },
        {
          latin: "crucifixus, mortuus, et sepultus,",
          french: "a été crucifié, est mort et a été enseveli,",
        },
        {
          latin: "descendit ad inferos,",
          french: "est descendu aux enfers,",
        },
        {
          latin: "tertia die resurrexit a mortuis,",
          french: "le troisième jour est ressuscité des morts,",
        },
        {
          latin: "ascendit ad cælos,",
          french: "est monté aux cieux,",
        },
        {
          latin: "sedet ad dexteram Dei Patris omnipotentis,",
          french: "est assis à la droite de Dieu le Père tout-puissant,",
        },
        {
          latin: "inde venturus est iudicare vivos et mortuos.",
          french: "d'où il viendra juger les vivants et les morts.",
        },
      ],
    },
    {
      title: "Saint-Esprit et l'Église",
      verses: [
        {
          latin: "Credo in Spiritum Sanctum,",
          french: "Je crois en le Saint-Esprit,",
        },
        {
          latin: "sanctam Ecclesiam catholicam,",
          french: "la sainte Église catholique,",
        },
        {
          latin: "sanctorum communionem,",
          french: "la communion des saints,",
        },
        {
          latin: "remissionem peccatorum,",
          french: "la rémission des péchés,",
        },
        {
          latin: "carnis resurrectionem,",
          french: "la résurrection de la chair,",
        },
        {
          latin: "vitam æternam.",
          french: "la vie éternelle.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["credo", "foi", "apôtres", "baptême"],
};

export const niceneCreed: Prayer = {
  slug: "symbole-de-nicee",
  name: "Je crois en Dieu (Credo de Nicée-Constantinople)",
  nameLatin: "Credo (Symbolum Nicænum-Constantinopolitanum)",
  category: PrayerCategory.CREED,
  origin: PrayerOrigin.PATRISTIC,
  source: "Conciles de Nicée (325) et Constantinople (381)",

  description:
    "Le symbole de foi utilisé dans la liturgie, formulé lors des deux premiers conciles œcuméniques. Il contient la doctrine sur la Trinité et l'Incarnation.",

  sections: [
    {
      verses: [
        {
          latin: "Credo in unum Deum,",
          french: "Je crois en un seul Dieu,",
        },
        {
          latin: "Patrem omnipotentem,",
          french: "le Père tout-puissant,",
        },
        {
          latin: "factorem cæli et terræ,",
          french: "créateur du ciel et de la terre,",
        },
        {
          latin: "visibilium omnium et invisibilium.",
          french: "de toutes choses visibles et invisibles.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Credo in unum Dominum Iesum Christum,",
          french: "Je crois en un seul Seigneur Jésus-Christ,",
        },
        {
          latin: "Filium Dei unigenitum,",
          french: "le Fils unique de Dieu,",
        },
        {
          latin: "ex Patre natum ante omnia sæcula.",
          french: "né du Père avant tous les siècles,",
        },
        {
          latin: "Deum de Deo, lumen de lumine, Deum verum de Deo vero,",
          french: "Dieu né de Dieu, lumière née de la lumière, vrai Dieu né du vrai Dieu,",
        },
        {
          latin: "genitum, non factum, consubstantialem Patri:",
          french: "engendré, non créé, consubstantiel au Père ;",
        },
        {
          latin: "per quem omnia facta sunt.",
          french: "par lui tout a été fait.",
        },
        {
          latin: "Qui propter nos homines, et propter nostram salutem",
          french: "Pour nous les hommes, et pour notre salut,",
        },
        {
          latin: "descendit de cælis.",
          french: "il descendit du ciel,",
        },
        {
          latin: "Et incarnatus est de Spiritu Sancto",
          french: "Par l'Esprit Saint, il a pris chair",
        },
        {
          latin: "ex Maria Virgine: ET HOMO FACTUS EST.",
          french: "de la Vierge Marie, ET S'EST FAIT HOMME.",
        },
        {
          latin: "Crucifixus etiam pro nobis,",
          french: "Il a été crucifié pour nous,",
        },
        {
          latin: "sub Pontio Pilato passus, et sepultus est.",
          french: "a souffert sous Ponce Pilate, a été enseveli,",
        },
        {
          latin: "Et resurrexit tertia die, secundum Scripturas.",
          french: "est ressuscité le troisième jour, selon les Écritures,",
        },
        {
          latin: "Et ascendit in cælum:",
          french: "est monté au ciel,",
        },
        {
          latin: "sedet ad dexteram Patris.",
          french: "est assis à la droite du Père,",
        },
        {
          latin: "Et iterum venturus est cum gloria,",
          french: "et il reviendra dans la gloire,",
        },
        {
          latin: "iudicare vivos et mortuos:",
          french: "pour juger les vivants et les morts ;",
        },
        {
          latin: "cuius regni non erit finis.",
          french: "son règne n'aura pas de fin.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Credo in Spiritum Sanctum, Dominum et vivificantem:",
          french: "Je crois en l'Esprit Saint, qui est Seigneur et qui donne la vie ;",
        },
        {
          latin: "qui ex Patre Filioque procedit.",
          french: "il procède du Père et du Fils ;",
        },
        {
          latin: "Qui cum Patre et Filio simul adoratur et conglorificatur:",
          french: "avec le Père et le Fils, il reçoit même adoration et même gloire ;",
        },
        {
          latin: "qui locutus est per prophetas.",
          french: "il a parlé par les prophètes.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Credo in unam, sanctam, catholicam et apostolicam Ecclesiam.",
          french: "Je crois en l'Église, une, sainte, catholique et apostolique.",
        },
        {
          latin: "Confiteor unum baptisma in remissionem peccatorum.",
          french: "Je reconnais un seul baptême pour le pardon des péchés.",
        },
        {
          latin: "Et expecto resurrectionem mortuorum,",
          french: "J'attends la résurrection des morts,",
        },
        {
          latin: "et vitam venturi sæculi.",
          french: "et la vie du monde à venir.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["credo", "liturgie", "nicée", "constantinople", "trinite"],
};

export const actOfContrition: Prayer = {
  slug: "acte-contrition",
  name: "Acte de contrition",
  nameLatin: "Actus Contritionis",
  category: PrayerCategory.PENITENTIAL,
  origin: PrayerOrigin.MEDIEVAL,

  description:
    "Prière de repentir pour les péchés, récitée dans le sacrement de pénitence et à la fin de la journée.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, j'ai un très grand regret",
          french: "Mon Dieu, j'ai un très grand regret",
        },
        {
          latin: "de vous avoir offensé,",
          french: "de vous avoir offensé,",
        },
        {
          latin: "parce que vous êtes infiniment bon,",
          french: "parce que vous êtes infiniment bon,",
        },
        {
          latin: "et que le péché vous déplaît.",
          french: "et que le péché vous déplaît.",
        },
        {
          latin: "Je prends la ferme résolution,",
          french: "Je prends la ferme résolution,",
        },
        {
          latin: "avec le secours de votre sainte grâce,",
          french: "avec le secours de votre sainte grâce,",
        },
        {
          latin: "de ne plus vous offenser",
          french: "de ne plus vous offenser",
        },
        {
          latin: "et de faire pénitence.",
          french: "et de faire pénitence.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["pénitence", "confession", "pardon", "péché"],
};

export const actOfFaith: Prayer = {
  slug: "acte-foi",
  name: "Acte de foi",
  nameLatin: "Actus Fidei",
  category: PrayerCategory.ACTS,
  origin: PrayerOrigin.MEDIEVAL,

  description: "Acte par lequel on renouvelle sa foi en Dieu et en tout ce qu'il a révélé.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, je crois fermement",
          french: "Mon Dieu, je crois fermement",
        },
        {
          latin: "toutes les vérités que vous avez révélées",
          french: "toutes les vérités que vous avez révélées",
        },
        {
          latin: "et que vous enseignez",
          french: "et que vous enseignez",
        },
        {
          latin: "par votre sainte Église catholique,",
          french: "par votre sainte Église catholique,",
        },
        {
          latin: "parce que vous ne pouvez ni vous tromper ni nous tromper.",
          french: "parce que vous ne pouvez ni vous tromper ni nous tromper.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["foi", "révélation", "église"],
};

export const actOfHope: Prayer = {
  slug: "acte-esperance",
  name: "Acte d'espérance",
  nameLatin: "Actus Spei",
  category: PrayerCategory.ACTS,
  origin: PrayerOrigin.MEDIEVAL,

  description: "Acte par lequel on désire ardemment le ciel que Dieu a promis à ceux qui l'aiment.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, j'espère,",
          french: "Mon Dieu, j'espère avec une ferme confiance,",
        },
        {
          latin: "avec une ferme confiance,",
          french: "que vous me donnerez,",
        },
        {
          latin: "que vous me donnerez, paré vos mérites,",
          french: "par vos mérites, la vie éternelle",
        },
        {
          latin: "la vie éternelle et les grâces nécessaires",
          french: "et les grâces nécessaires pour l'obtenir,",
        },
        {
          latin: "pour l'obtenir, parce que vous le avez promis.",
          french: "parce que vous le avez promis.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["esperance", "ciel", "grace"],
};

export const actOfCharity: Prayer = {
  slug: "acte-charite",
  name: "Acte de charité",
  nameLatin: "Actus Caritatis",
  category: PrayerCategory.ACTS,
  origin: PrayerOrigin.MEDIEVAL,

  description:
    "Acte par lequel on aime Dieu de tout son cœur et son prochain comme soi-même pour l'amour de Dieu.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, je vous aime de tout mon cœur,",
          french: "Mon Dieu, je vous aime de tout mon cœur,",
        },
        {
          latin: "et par-dessus toutes choses,",
          french: "et par-dessus toutes choses,",
        },
        {
          latin: "parce que vous êtes infiniment bon,",
          french: "parce que vous êtes infiniment bon,",
        },
        {
          latin: "et digne d'être aimé.",
          french: "et digne d'être aimé.",
        },
        {
          latin: "Je désire aimer mon prochain",
          french: "Je désire aimer mon prochain",
        },
        {
          latin: "comme moi-même,",
          french: "comme moi-même,",
        },
        {
          latin: "par amour pour vous.",
          french: "par amour pour vous.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["charite", "amour", "prochain"],
};

export const hailHolyQueen: Prayer = {
  slug: "salve-regina",
  name: "Salut, Reine (Salve Regina)",
  nameLatin: "Salve Regina",
  category: PrayerCategory.MARIAN,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Attribué à Hermann le Reclus (XIe siècle)",

  description: "Antienne mariale très ancienne, récitée à la fin du chapelet et dans les litanies.",

  sections: [
    {
      verses: [
        {
          latin: "Salve Regina, Mater misericordiæ,",
          french: "Salut, Reine, mère de miséricorde,",
        },
        {
          latin: "vita, dulcedo, et spes nostra, salve.",
          french: "vie, douceur, et notre espérance, salut !",
        },
        {
          latin: "Ad te clamamus, exsules filii Evæ.",
          french: "Enfants d'Ève, nous crions vers vous",
        },
        {
          latin: "Ad te suspiramus, gementes et flentes",
          french: "Vers vous nous soupirons, gémissant et pleurant",
        },
        {
          latin: "in hac lacrimarum valle.",
          french: "dans cette vallée de larmes.",
        },
        {
          latin: "Eia ergo, Advocata nostra,",
          french: "O donc, notre avocate,",
        },
        {
          latin: "illos tuos misericordes oculos ad nos converte.",
          french: "tournez vers nous vos regards miséricordieux.",
        },
        {
          latin: "Et Jesum, benedictum fructum ventris tui,",
          french: "Et Jésus, le fruit béni de vos entrailles,",
        },
        {
          latin: "nobis post hoc exilium ostende.",
          french: "montrez-le nous après cet exil.",
        },
        {
          latin: "O clemens, o pia, o dulcis Virgo Maria.",
          french: "O clémente, o pieuse, o douce Vierge Marie.",
        },
      ],
    },
    {
      title: "Ajout (vers 1500)",
      verses: [
        {
          latin: "Ora pro nobis, sancta Dei Genetrix.",
          french: "Priez pour nous, sainte Mère de Dieu.",
        },
        {
          latin: "Ut digni efficiamur promissionibus Christi.",
          french: "Afin que nous soyons rendus dignes des promesses du Christ.",
        },
        {
          latin: "Oremus.",
          french: "Prions.",
        },
        {
          latin: "Deus, qui per Incarnationem Filii tui...",
          french: "O Dieu, qui par l'Incarnation de votre Fils avez humilié le monde...",
        },
      ],
    },
  ],

  tags: ["marie", "reine", "avocate", "exil"],
};

export const memorare: Prayer = {
  slug: "memorare",
  name: "Souvenez-vous (Memorare)",
  nameLatin: "Memorare",
  category: PrayerCategory.MARIAN,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Saint Bernard de Clairvaux (attribué)",

  description: "Prière à la Vierge Marie lui demandant son secours, avec confiance en sa bonté.",

  sections: [
    {
      verses: [
        {
          latin: "Memorare, o piissima Virgo Maria,",
          french: "Souvenez-vous, ô très pieuse Vierge Marie,",
        },
        {
          latin: "non esse auditum a sæculo,",
          french: "qu'on n'a jamais entendu dire",
        },
        {
          latin: "quemquam ad tua currentem præsidia,",
          french: "qu'aucun de ceux qui ont eu recours à votre protection,",
        },
        {
          latin: "tua imploratum auxilia,",
          french: "imploré votre secours,",
        },
        {
          latin: "esse derelictum.",
          french: "ait été abandonné.",
        },
        {
          latin: "Ego tali animatus confidentia,",
          french: "Animé d'une telle confiance,",
        },
        {
          latin: "ad te, o Virgo virginum, Mater, curro,",
          french: "je cours vers vous, ô Vierge des vierges, ô mère,",
        },
        {
          latin: "ad te venio,",
          french: "je viens à vous,",
        },
        {
          latin: "coram te gemens peccator assisto.",
          french: "je me tiens devant vous, pécheur gémissant.",
        },
        {
          latin: "Noli, o Mater Verbi,",
          french: "Ne méprisez pas, ô Mère du Verbe,",
        },
        {
          latin: "mea verba despicere,",
          french: "mes prières,",
        },
        {
          latin: "sed audi propitia",
          french: "mais écoutez-les favorablement",
        },
        {
          latin: "et exaudi.",
          french: "et exaucez-les.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["marie", "secours", "confiance", "bernard"],
};

export const saintMichaelPrayer: Prayer = {
  slug: "saint-michel",
  name: "Prière à saint Michel",
  nameLatin: "Oratio ad Sanctum Michaelem",
  category: PrayerCategory.SAINT,
  origin: PrayerOrigin.MODERN,
  author: "Pape Léon XIII (1886)",

  description:
    "Prière composée par le pape Léon XIII après une vision de la bataille eschatologique entre saint Michel et Satan.",

  sections: [
    {
      verses: [
        {
          latin: "Sancte Michael Archangele,",
          french: "Saint Michel archange,",
        },
        {
          latin: "defende nos in prælio,",
          french: "défendez-nous dans le combat,",
        },
        {
          latin: "contra nequitiam et insidias diaboli esto præsidium.",
          french: "soyez notre protection contre la méchanceté et les pièges du démon.",
        },
        {
          latin: "Imperet ei Deus, supplices deprecamur,",
          french: "Que Dieu lui commande, nous le supplions,",
        },
        {
          latin: "tuque, Princeps militiae cælestis,",
          french: "et vous, prince de la milice céleste,",
        },
        {
          latin: "Satanam aliosque spiritus malignos,",
          french: "repoussez en enfer Satan et les autres esprits mauvais",
        },
        {
          latin: "qui ad perditionem animarum pervagantur in mundum,",
          french: "qui errent dans le monde pour la perte des âmes,",
        },
        {
          latin: "divina virtude, in infernum detrude.",
          french: "par la puissance divine, rejetez en enfer.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["ange", "michel", "démon", "combat", "leon-xiii"],
};

export const animaChristi: Prayer = {
  slug: "anima-christi",
  name: "Âme du Christ (Anima Christi)",
  nameLatin: "Anima Christi",
  category: PrayerCategory.EUCHARISTIC,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Attribué à saint Ignace de Loyola (popularisation)",

  description:
    "Prière très ancienne, récitée après la communion, demandant la protection du Christ.",

  sections: [
    {
      verses: [
        {
          latin: "Anima Christi, sanctifica me.",
          french: "Âme du Christ, sanctifiez-moi.",
        },
        {
          latin: "Corpus Christi, salva me.",
          french: "Corps du Christ, sauvez-moi.",
        },
        {
          latin: "Sanguis Christi, inebria me.",
          french: "Sang du Christ, enivrez-moi.",
        },
        {
          latin: "Aqua lateris Christi, lava me.",
          french: "Eau du côté du Christ, lavez-moi.",
        },
        {
          latin: "Passio Christi, conforta me.",
          french: "Passion du Christ, fortifiez-moi.",
        },
        {
          latin: "O bone Iesu, exaudi me.",
          french: "Ô bon Jésus, exaucez-moi.",
        },
        {
          latin: "Intra tua vulnera abconde me.",
          french: "Cachez-moi dans vos plaies.",
        },
        {
          latin: "Ne me permittas separari a te.",
          french: "Ne me permettez pas d'être séparé de vous.",
        },
        {
          latin: "Ab hoste maligno defende me.",
          french: "Défendez-moi de l'ennemi malin.",
        },
        {
          latin: "In hora mortis meæ voca me.",
          french: "À l'heure de ma mort, appelez-moi.",
        },
        {
          latin: "Et iube me venire ad te,",
          french: "et ordonnez-moi de venir à vous,",
        },
        {
          latin: "ut cum Sanctis tuis laudem te",
          french: "pour qu'avec vos saints je vous loue",
        },
        {
          latin: "in sæcula sæculorum.",
          french: "dans tous les siècles des siècles.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["communion", "sang", "passion", "jesus"],
};

export const morningOffering: Prayer = {
  slug: "offrande-du-matin",
  name: "Offrande du matin",
  nameLatin: "Oblatio matutina",
  category: PrayerCategory.MORNING,
  origin: PrayerOrigin.MODERN,

  description: "Prière pour offrir sa journée à Dieu, récitée le matin au réveil.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, je vous offre",
          french: "Mon Dieu, je vous offre",
        },
        {
          latin: "toutes mes actions de ce jour,",
          french: "toutes mes actions de ce jour,",
        },
        {
          latin: "en union avec le Sacrifice de la Messe,",
          french: "en union avec le Sacrifice de la Messe,",
        },
        {
          latin: "pour la gloire de Dieu",
          french: "pour la gloire de Dieu",
        },
        {
          latin: "et le salut des âmes.",
          french: "et le salut des âmes.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["matin", "offrande", "journee"],
};

export const eveningPrayer: Prayer = {
  slug: "priere-du-soir",
  name: "Prière du soir",
  nameLatin: "Oratio vespertina",
  category: PrayerCategory.EVENING,
  origin: PrayerOrigin.MEDIEVAL,

  description: "Prière pour remercier Dieu de la journée et demander pardon pour les péchés.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, je vous remercie",
          french: "Mon Dieu, je vous remercie",
        },
        {
          latin: "de toutes les grâces",
          french: "de toutes les grâces",
        },
        {
          latin: "que vous m'avez accordées aujourd'hui.",
          french: "que vous m'avez accordées aujourd'hui.",
        },
        {
          latin: "Je suis désolé de mes péchés,",
          french: "Je suis désolé de mes péchés,",
        },
        {
          latin: "je vous demande pardon,",
          french: "je vous demande pardon,",
        },
        {
          latin: "et je vous confie mon sommeil.",
          french: "et je vous confie mon sommeil.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["soir", "sommeil", "pardon"],
};

export const graceBeforeMeals: Prayer = {
  slug: "grace-repas",
  name: "Grâce avant les repas",
  nameLatin: "Gratia ante cibum",
  category: PrayerCategory.MEAL,
  origin: PrayerOrigin.MEDIEVAL,

  description: "Prière bénissant les aliments et remerciant Dieu pour sa providence.",

  sections: [
    {
      verses: [
        {
          latin: "Bénissez-nous, Seigneur,",
          french: "Bénissez-nous, Seigneur,",
        },
        {
          latin: "bénissez ces aliments",
          french: "bénissez ces aliments",
        },
        {
          latin: "que nous allons prendre,",
          french: "que nous allons prendre,",
        },
        {
          latin: "pour votre amour.",
          french: "pour votre amour.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["repas", "nourriture", "providence"],
};

export const signOfTheCross: Prayer = {
  slug: "signe-de-croix",
  name: "Signe de Croix",
  nameLatin: "Signum Crucis",
  category: PrayerCategory.ACTS,
  origin: PrayerOrigin.APOSTOLIC,

  description:
    "Acte de profession de foi trinitaire, premier geste de tout chrétien. Il nous rappelle la Rédemption par la croix du Christ.",

  sections: [
    {
      verses: [
        {
          latin: "In nomine Patris, et Filii, et Spiritus Sancti.",
          french: "Au nom du Père, et du Fils, et du Saint-Esprit.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["trinite", "croix", "profession", "foi"],
};

export const subTuumPraesidium: Prayer = {
  slug: "sub-tuum",
  name: "Sous votre protection (Sub Tuum)",
  nameLatin: "Sub tuum præsidium",
  category: PrayerCategory.MARIAN,
  origin: PrayerOrigin.PATRISTIC,
  source: "Papyrus Rylands 470 (IIIe siècle), plus ancienne prière mariale connue",

  description:
    "La plus ancienne prière mariale connue, retrouvée sur un papyrus égyptien du IIIe siècle. Elle exprime la confiance du fidèle en la protection de la Mère de Dieu.",

  sections: [
    {
      verses: [
        {
          latin: "Sub tuum præsidium confugimus,",
          french: "Nous nous réfugions sous votre protection,",
        },
        {
          latin: "sancta Dei Genetrix.",
          french: "sainte Mère de Dieu.",
        },
        {
          latin: "Nostras deprecationes ne despicias in necessitatibus,",
          french: "Ne méprisez pas nos prières dans nos nécessités,",
        },
        {
          latin: "sed a periculis cunctis",
          french: "mais de tous les dangers",
        },
        {
          latin: "libera nos semper,",
          french: "délivrez-nous toujours,",
        },
        {
          latin: "Virgo gloriosa et benedicta.",
          french: "Vierge glorieuse et bénie.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["marie", "protection", "patristique", "papyrus"],
};

export const angelus: Prayer = {
  slug: "angelus",
  name: "L'Angelus",
  nameLatin: "Angelus",
  category: PrayerCategory.MARIAN,
  origin: PrayerOrigin.MEDIEVAL,
  source: "Institué au XIVe siècle, sonné trois fois par jour",

  description:
    "Prière rappelant le mystère de l'Incarnation. Récitée le matin, à midi et le soir. Pendant le Temps pascal, on lui substitue le Regina Cæli.",

  sections: [
    {
      title: "Première strophe",
      verses: [
        {
          latin: "V/: Angelus Domini nuntiavit Mariæ.",
          french: "V/: L'ange du Seigneur annonça à Marie.",
        },
        {
          latin: "R/: Et concepit de Spiritu Sancto.",
          french: "R/: Et elle conçut du Saint-Esprit.",
        },
        {
          latin: "Ave Maria...",
          french: "Je vous salue, Marie...",
        },
      ],
    },
    {
      title: "Deuxième strophe",
      verses: [
        {
          latin: "V/: Ecce ancilla Domini.",
          french: "V/: Voici la servante du Seigneur.",
        },
        {
          latin: "R/: Fiat mihi secundum verbum tuum.",
          french: "R/: Qu'il me soit fait selon votre parole.",
        },
        {
          latin: "Ave Maria...",
          french: "Je vous salue, Marie...",
        },
      ],
    },
    {
      title: "Troisième strophe",
      verses: [
        {
          latin: "V/: Et Verbum caro factum est.",
          french: "V/: Et le Verbe s'est fait chair.",
        },
        {
          latin: "R/: Et habitavit in nobis.",
          french: "R/: Et il a habité parmi nous.",
        },
        {
          latin: "Ave Maria...",
          french: "Je vous salue, Marie...",
        },
      ],
    },
    {
      title: "Oraison",
      verses: [
        {
          latin: "V/: Ora pro nobis, sancta Dei Genetrix.",
          french: "V/: Priez pour nous, sainte Mère de Dieu.",
        },
        {
          latin: "R/: Ut digni efficiamur promissionibus Christi.",
          french: "R/: Afin que nous soyons rendus dignes des promesses du Christ.",
        },
        {
          latin: "Oremus: Gratiam tuam, quæsumus, Domine, mentibus nostris infunde: ut qui, Angelo nuntiante, Christi Filii tui Incarnationem cognovimus, per Passionem eius et crucem ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum.",
          french: "Prions: Que ta miséricorde, Seigneur, se répande dans nos cœurs: nous qui, par l'ange, avons connu l'Incarnation de ton Fils, conduis-nous par sa Passion et par sa croix jusqu'à la gloire de la Résurrection. Par le même Jésus-Christ, notre Seigneur.",
        },
        {
          latin: "R/: Amen.",
          french: "R/: Amen.",
        },
      ],
    },
  ],

  tags: ["incarnation", "ange", "marie", "midi", "matin", "soir"],
};

export const reginaCaeli: Prayer = {
  slug: "regina-caeli",
  name: "Reine du Ciel (Regina Cæli)",
  nameLatin: "Regina Cæli",
  category: PrayerCategory.MARIAN,
  origin: PrayerOrigin.MEDIEVAL,
  source: "Antienne mariale du Temps pascal, remplace l'Angelus",

  description:
    "Prière mariale joyeuse récitée pendant le Temps pascal à la place de l'Angelus. Elle chante la joie de la Résurrection.",

  sections: [
    {
      verses: [
        {
          latin: "Regina cæli, lætare, alleluia,",
          french: "Reine du ciel, réjouissez-vous, alléluia,",
        },
        {
          latin: "quia quem meruisti portare, alleluia,",
          french: "car celui que vous avez mérité de porter, alléluia,",
        },
        {
          latin: "resurrexit, sicut dixit, alleluia.",
          french: "est ressuscité, comme il l'avait dit, alléluia.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Ora pro nobis Deum, alleluia.",
          french: "Priez Dieu pour nous, alléluia.",
        },
      ],
    },
    {
      title: "Oraison",
      verses: [
        {
          latin: "Oremus: Deus, qui per resurrectionem Filii tui Domini nostri Iesu Christi mundum lætificare dignatus es: præsta, quæsumus, ut per eius Genetricem Virginem Mariam, perpetuæ capiamus gaudia vitæ. Per eundem Christum Dominum nostrum.",
          french: "Prions: Dieu, qui par la résurrection de votre Fils, notre Seigneur Jésus-Christ, avez daigné réjouir le monde, faites, nous vous en prions, que par sa Mère, la Vierge Marie, nous parvenions aux joies de la vie éternelle. Par le même Christ, notre Seigneur.",
        },
      ],
    },
  ],

  tags: ["paques", "resurrection", "joie", "alleluia", "marie"],
};

export const magnificat: Prayer = {
  slug: "magnificat",
  name: "Magnificat",
  nameLatin: "Magnificat",
  category: PrayerCategory.LITURGICAL,
  origin: PrayerOrigin.BIBLICAL,
  source: "Luc 1:46-55, cantique de la Vierge Marie lors de la Visitation",

  description:
    "Cantique de la Vierge Marie lors de la Visitation à sainte Élisabeth. C'est le plus beau cantique de louange de l'Écriture, récité quotidiennement dans les Vêpres.",

  sections: [
    {
      verses: [
        {
          latin: "Magnificat anima mea Dominum,",
          french: "Mon âme exalte le Seigneur,",
        },
        {
          latin: "et exsultavit spiritus meus in Deo salutari meo,",
          french: "et mon esprit exulte en Dieu, mon Sauveur,",
        },
        {
          latin: "quia respexit humilitatem ancillæ suæ.",
          french: "parce qu'il a regardé la bassesse de sa servante.",
        },
        {
          latin: "Ecce enim ex hoc beatam me dicent omnes generationes,",
          french: "Oui, désormais toutes les générations me diront bienheureuse,",
        },
        {
          latin: "quia fecit mihi magna qui potens est,",
          french: "car le Tout-Puissant a fait pour moi de grandes choses,",
        },
        {
          latin: "et sanctum nomen eius.",
          french: "et son nom est saint.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Et misericordia eius a progenie in progenies",
          french: "Sa miséricorde s'étend de génération en génération",
        },
        {
          latin: "timentibus eum.",
          french: "sur ceux qui le craignent.",
        },
        {
          latin: "Fecit potentiam in brachio suo,",
          french: "Il a fait preuve de puissance de son bras,",
        },
        {
          latin: "dispersit superbos mente cordis sui.",
          french: "il a dispersé les hommes au cœur orgueilleux.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Deposuit potentes de sede,",
          french: "Il a renversé les puissants de leurs trônes,",
        },
        {
          latin: "et exaltavit humiles.",
          french: "et il a élevé les humbles.",
        },
        {
          latin: "Esurientes implevit bonis,",
          french: "Il a rassasié de biens les affamés,",
        },
        {
          latin: "et divites dimisit inanes.",
          french: "et il a renvoyé les riches les mains vides.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Suscepit Israel puerum suum,",
          french: "Il a pris sous sa protection Israël, son serviteur,",
        },
        {
          latin: "recordatus misericordiæ suæ,",
          french: "se souvenant de sa miséricorde,",
        },
        {
          latin: "sicut locutus est ad patres nostros,",
          french: "comme il l'avait promis à nos pères,",
        },
        {
          latin: "Abraham et semini eius in sæcula.",
          french: "en faveur d'Abraham et de sa descendance pour toujours.",
        },
        {
          latin: "Gloria Patri, et Filio, et Spiritui Sancto.",
          french: "Gloire au Père, au Fils, et au Saint-Esprit.",
        },
        {
          latin: "Sicut erat in principio, et nunc, et semper, et in sæcula sæculorum. Amen.",
          french: "Comme il était au commencement, maintenant et toujours, et dans les siècles des siècles. Amen.",
        },
      ],
    },
  ],

  tags: ["marie", "louange", "visitation", "vepres", "cantique"],
};

export const nuncDimittis: Prayer = {
  slug: "nunc-dimittis",
  name: "Maintenant, Seigneur (Nunc Dimittis)",
  nameLatin: "Nunc Dimittis",
  category: PrayerCategory.LITURGICAL,
  origin: PrayerOrigin.BIBLICAL,
  source: "Luc 2:29-32, cantique de Syméon au Temple",

  description:
    "Cantique du vieillard Syméon lors de la Présentation de Jésus au Temple. Récité quotidiennement dans les Complies (prière du soir).",

  sections: [
    {
      verses: [
        {
          latin: "Nunc dimittis servum tuum, Domine,",
          french: "Maintenant, Maître, tu peux laisser ton serviteur s'en aller",
        },
        {
          latin: "secundum verbum tuum in pace,",
          french: "en paix, selon ta parole.",
        },
        {
          latin: "quia viderunt oculi mei salutare tuum,",
          french: "Car mes yeux ont vu ton salut",
        },
        {
          latin: "quod parasti ante faciem omnium populorum,",
          french: "que tu as préparé face à tous les peuples,",
        },
        {
          latin: "lumen ad revelationem gentium,",
          french: "lumière pour éclairer les nations",
        },
        {
          latin: "et gloriam plebis tuæ Israel.",
          french: "et gloire de ton peuple Israël.",
        },
        {
          latin: "Gloria Patri...",
          french: "Gloire au Père...",
        },
      ],
    },
  ],

  tags: ["symeon", "temple", "complies", "lumiere", "salut"],
};

export const tantumErgo: Prayer = {
  slug: "tantum-ergo",
  name: "Tantum Ergo",
  nameLatin: "Tantum ergo Sacramentum",
  category: PrayerCategory.EUCHARISTIC,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Saint Thomas d'Aquin (1225-1274)",
  source: "Hymne Pange Lingua, strophes 5-6",

  description:
    "Dernières strophes de l'hymne Pange Lingua composée par saint Thomas d'Aquin. Récitée lors de l'exposition et de la bénédiction du Saint-Sacrement.",

  sections: [
    {
      verses: [
        {
          latin: "Tantum ergo Sacramentum",
          french: "Devant ce Sacrement auguste",
        },
        {
          latin: "veneremur cernui:",
          french: "prosternons-nous dans l'adoration:",
        },
        {
          latin: "et antiquum documentum",
          french: "que l'ancienne figure",
        },
        {
          latin: "novo cedat ritui:",
          french: "cède au rite nouveau:",
        },
        {
          latin: "præstet fides supplementum",
          french: "que la foi supplée",
        },
        {
          latin: "sensuum defectui.",
          french: "à l'insuffisance de nos sens.",
        },
      ],
    },
    {
      title: "Doxologie",
      verses: [
        {
          latin: "Genitori, Genitoque,",
          french: "Au Père et au Fils engendré,",
        },
        {
          latin: "laus et iubilatio,",
          french: "louange et jubilation,",
        },
        {
          latin: "salus, honor, virtus quoque",
          french: "salut, honneur, et puissance",
        },
        {
          latin: "sit et benedictio:",
          french: "et bénédiction:",
        },
        {
          latin: "procedenti ab utroque",
          french: "à celui qui procède de l'un et de l'autre",
        },
        {
          latin: "compar sit laudatio. Amen.",
          french: "soit une louange égale. Amen.",
        },
      ],
    },
    {
      title: "Oraison",
      verses: [
        {
          latin: "V/: Panem de cælo præstitisti eis.",
          french: "V/: Vous leur avez donné un pain venu du ciel.",
        },
        {
          latin: "R/: Omne delectamentum in se habentem.",
          french: "R/: Qui contenait toute douceur.",
        },
        {
          latin: "Oremus: Deus, qui nobis sub Sacramento mirabili passionis tuæ memoriam reliquisti: tribue, quæsumus, ita corporis et sanguinis tui sacra mysteria venerari, ut redemptionis tuæ fructum in nobis iugiter sentiamus.",
          french: "Prions: O Dieu, qui nous avez laissé sous ce sacrement admirable le mémorial de votre Passion, accordez-nous, nous vous en prions, de vénérer si saintement les mystères de votre Corps et de votre Sang, que nous ressentions toujours en nous le fruit de votre Rédemption.",
        },
      ],
    },
  ],

  tags: ["eucharistie", "adoration", "thomas", "pange-lingua", "sacrement"],
};

export const oSalutaris: Prayer = {
  slug: "o-salutaris",
  name: "Ô Hostie salutaire (O Salutaris)",
  nameLatin: "O Salutaris Hostia",
  category: PrayerCategory.EUCHARISTIC,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Saint Thomas d'Aquin (1225-1274)",
  source: "Hymne Verbum Supernum, strophes 5-6",

  description:
    "Dernières strophes de l'hymne Verbum Supernum de saint Thomas d'Aquin. Récitée lors de l'exposition du Saint-Sacrement.",

  sections: [
    {
      verses: [
        {
          latin: "O salutaris Hostia,",
          french: "Ô Hostie salutaire,",
        },
        {
          latin: "quæ cæli pandis ostium:",
          french: "qui ouvres la porte du ciel:",
        },
        {
          latin: "bella premunt hostilia,",
          french: "les guerres ennemies nous pressent,",
        },
        {
          latin: "da robur, fer auxilium.",
          french: "donne la force, porte secours.",
        },
      ],
    },
    {
      title: "Doxologie",
      verses: [
        {
          latin: "Uni trinoque Domino",
          french: "Au Seigneur Un et Trine",
        },
        {
          latin: "sit sempiterna gloria,",
          french: "gloire éternelle,",
        },
        {
          latin: "qui vitam sine termino",
          french: "qui nous donne la vie sans fin",
        },
        {
          latin: "nobis donet in patria.",
          french: "dans la patrie céleste.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["eucharistie", "hostie", "thomas", "adoration"],
};

export const adoroTeDevote: Prayer = {
  slug: "adoro-te-devote",
  name: "Je vous adore avec dévotion (Adoro Te Devote)",
  nameLatin: "Adoro te devote",
  category: PrayerCategory.EUCHARISTIC,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Saint Thomas d'Aquin (1225-1274)",

  description:
    "Prière eucharistique attribuée à saint Thomas d'Aquin, exprimant l'adoration de la présence réelle du Christ dans l'Eucharistie.",

  sections: [
    {
      verses: [
        {
          latin: "Adoro te devote, latens Deitas,",
          french: "Je vous adore avec dévotion, Divinité cachée,",
        },
        {
          latin: "quæ sub his figuris vere latitas;",
          french: "qui êtes vraiment cachée sous ces apparences;",
        },
        {
          latin: "tibi se cor meum totum subiicit,",
          french: "à vous mon cœur se soumet tout entier,",
        },
        {
          latin: "quia te contemplans totum deficit.",
          french: "car en vous contemplant il défaille tout entier.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Visus, tactus, gustus in te fallitur,",
          french: "La vue, le toucher, le goût en vous se trompent,",
        },
        {
          latin: "sed auditu solo tuto creditur.",
          french: "mais par l'ouïe seulement on croit avec certitude.",
        },
        {
          latin: "Credo quidquid dixit Dei Filius:",
          french: "Je crois tout ce qu'a dit le Fils de Dieu:",
        },
        {
          latin: "nil hoc verbo Veritatis verius.",
          french: "rien n'est plus vrai que cette parole de Vérité.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "In cruce latebat sola Deitas,",
          french: "Sur la croix était cachée la seule Divinité,",
        },
        {
          latin: "at hic latet simul et humanitas;",
          french: "mais ici se cache aussi l'humanité;",
        },
        {
          latin: "ambo tamen credens atque confitens,",
          french: "cependant je crois l'une et l'autre, et je confesse",
        },
        {
          latin: "peto quod petivit latro pœnitens.",
          french: "je demande ce qu'a demandé le larron repentant.",
        },
      ],
    },
    {
      verses: [
        {
          latin: "Plagas, sicut Thomas, non intueor:",
          french: "Les plaies, comme Thomas, je ne les vois pas,",
        },
        {
          latin: "Deum tamen meum te confiteor.",
          french: "mais je vous confesse pour mon Dieu.",
        },
        {
          latin: "Fac me tibi semper magis credere,",
          french: "Faites-moi croire toujours davantage en vous,",
        },
        {
          latin: "in te spem habere, te diligere.",
          french: "avoir en vous mon espérance, vous aimer.",
        },
      ],
    },
    {
      title: "Oraison",
      verses: [
        {
          latin: "O memorial mortis Domini,",
          french: "Ô mémorial de la mort du Seigneur,",
        },
        {
          latin: "panis vivus, vitam præstans homini,",
          french: "pain vivant donnant la vie à l'homme,",
        },
        {
          latin: "præsta meæ menti de te vivere,",
          french: "accordez à mon âme de vivre de vous,",
        },
        {
          latin: "et te illi semper dulce sapere.",
          french: "et qu'elle goûte toujours votre douceur.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["eucharistie", "adoration", "thomas", "presence-reelle"],
};

export const requiemAeternam: Prayer = {
  slug: "requiem-aeternam",
  name: "Donnez-leur le repos éternel (Requiem Æternam)",
  nameLatin: "Requiem æternam dona eis, Domine",
  category: PrayerCategory.OTHER,
  origin: PrayerOrigin.MEDIEVAL,
  source: "Liturgie des défunts",

  description:
    "Prière pour les défunts, demandant à Dieu de leur accorder le repos éternel et la lumière. Récitée pour les âmes du purgatoire.",

  sections: [
    {
      verses: [
        {
          latin: "Requiem æternam dona eis, Domine,",
          french: "Donnez-leur le repos éternel, Seigneur,",
        },
        {
          latin: "et lux perpetua luceat eis.",
          french: "et que la lumière sans fin les illumine.",
        },
        {
          latin: "Requiescant in pace.",
          french: "Qu'ils reposent en paix.",
        },
        {
          latin: "Amen.",
          french: "Ainsi soit-il.",
        },
      ],
    },
  ],

  tags: ["morts", "purgatoire", "defunts", "repos", "lumiere"],
};

export const deProfundis: Prayer = {
  slug: "de-profundis",
  name: "Des profondeurs (De Profundis)",
  nameLatin: "De Profundis (Psalmus 129)",
  category: PrayerCategory.OTHER,
  origin: PrayerOrigin.BIBLICAL,
  source: "Psaume 129 (130)",

  description:
    "Psaume pénitentiel très récité pour les défunts. Il exprime l'espérance dans la miséricorde divine.",

  sections: [
    {
      verses: [
        {
          latin: "De profundis clamavi ad te, Domine:",
          french: "Du fond de l'abîme je crie vers vous, Seigneur:",
        },
        {
          latin: "Domine, exaudi vocem meam.",
          french: "Seigneur, écoutez ma voix.",
        },
        {
          latin: "Fiant aures tuæ intendentes",
          french: "Que vos oreilles soient attentives",
        },
        {
          latin: "in vocem deprecationis meæ.",
          french: "à la voix de ma supplication.",
        },
        {
          latin: "Si iniquitates observaveris, Domine:",
          french: "Si vous observez les iniquités, Seigneur:",
        },
        {
          latin: "Domine, quis sustinebit?",
          french: "Seigneur, qui subsistera?",
        },
        {
          latin: "Quia apud te propitiatio est:",
          french: "Car près de vous est la miséricorde:",
        },
        {
          latin: "et propter legem tuam sustinui te, Domine.",
          french: "et c'est en vue de votre loi que je vous attends, Seigneur.",
        },
        {
          latin: "Sustinuit anima mea in verbo eius:",
          french: "Mon âme a mis son espérance dans sa parole:",
        },
        {
          latin: "speravit anima mea in Domino.",
          french: "mon âme a espéré dans le Seigneur.",
        },
        {
          latin: "A custodia matutina usque ad noctem:",
          french: "Depuis la veille du matin jusqu'à la nuit:",
        },
        {
          latin: "speret Israel in Domino.",
          french: "qu'Israël espère dans le Seigneur.",
        },
      ],
    },
    {
      title: "Gloire au Père",
      verses: [
        {
          latin: "Gloria Patri, et Filio, et Spiritui Sancto.",
          french: "Gloire au Père, au Fils, et au Saint-Esprit.",
        },
        {
          latin: "Sicut erat in principio, et nunc, et semper, et in sæcula sæculorum. Amen.",
          french: "Comme il était au commencement, maintenant et toujours, et dans les siècles des siècles. Amen.",
        },
      ],
    },
    {
      title: "Oraison pour les défunts",
      verses: [
        {
          latin: "V/: Requiem æternam dona eis, Domine.",
          french: "V/: Donnez-leur le repos éternel, Seigneur.",
        },
        {
          latin: "R/: Et lux perpetua luceat eis.",
          french: "R/: Et que la lumière sans fin les illumine.",
        },
        {
          latin: "V/: Requiescant in pace.",
          french: "V/: Qu'ils reposent en paix.",
        },
        {
          latin: "R/: Amen.",
          french: "R/: Amen.",
        },
      ],
    },
  ],

  tags: ["defunts", "purgatoire", "psaume", "penitence", "misericorde"],
};

export const prayers: Prayer[] = [
  ourFather,
  hailMary,
  gloryBe,
  signOfTheCross,
  apostlesCreed,
  niceneCreed,
  actOfContrition,
  actOfFaith,
  actOfHope,
  actOfCharity,
  hailHolyQueen,
  memorare,
  subTuumPraesidium,
  angelus,
  reginaCaeli,
  saintMichaelPrayer,
  animaChristi,
  tantumErgo,
  oSalutaris,
  adoroTeDevote,
  magnificat,
  nuncDimittis,
  requiemAeternam,
  deProfundis,
  morningOffering,
  eveningPrayer,
  graceBeforeMeals,
];

/**
 * Helpers
 */
export const getPrayerBySlug = (slug: string): Prayer | undefined =>
  prayers.find(p => p.slug === slug);

export const getPrayersByCategory = (category: PrayerCategory): Prayer[] =>
  prayers.filter(p => p.category === category);

export const searchPrayers = (query: string): Prayer[] => {
  const q = query.toLowerCase();
  return prayers.filter(
    p =>
      p.name.toLowerCase().includes(q) ||
      p.nameLatin?.toLowerCase().includes(q) ||
      p.tags?.some(t => t.toLowerCase().includes(q))
  );
};
