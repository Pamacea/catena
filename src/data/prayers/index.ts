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

  tags: ["jesus", "enseignement", " modele", "evangile"],
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
      title: " Dieu le Père",
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

  tags: ["foi", "reve9lation", "église"],
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
          latin: "que vous me donnerez, par9 vos mérites,",
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
    "Acte par lequel on aime Dieu de tout son cœur et son prochain comme soi-mÄme pour l'amour de Dieu.",

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
          latin: "et digne d'1tre aimé.",
          french: "et digne d'1tre aimé.",
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

  description: "Antienne mariale trÁs ancienne, r9cit9e Á la fin du chapelet et dans les litanies.",

  sections: [
    {
      verses: [
        {
          latin: "Salve Regina, Mater misericordiæ,",
          french: "Salut, Reine, mÁre de mis9ricorde,",
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
          french: "tournez vers nous vos regards mis9ricordieux.",
        },
        {
          latin: "Et Jesum, benedictum fructum ventris tui,",
          french: "Et J9sus, le fruit b9ni de vos entrailles,",
        },
        {
          latin: "nobis post hoc exilium ostende.",
          french: "montrez-le nous aprÁs cet exil.",
        },
        {
          latin: "O clemens, o pia, o dulcis Virgo Maria.",
          french: "O cl9mente, o pieuse, o douce Vierge Marie.",
        },
      ],
    },
    {
      title: "Ajout (vers 1500)",
      verses: [
        {
          latin: "Ora pro nobis, sancta Dei Genetrix.",
          french: "Priez pour nous, sainte MÁre de Dieu.",
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
          french: "O Dieu, qui par l'Incarnation de votre Fils avez humili9 le monde...",
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

  description: "PriÁre Á la Vierge Marie lui demandant son secours, avec confiance en sa bont9.",

  sections: [
    {
      verses: [
        {
          latin: "Memorare, o piissima Virgo Maria,",
          french: "Souvenez-vous, 0 trÁs pieuse Vierge Marie,",
        },
        {
          latin: "non esse auditum a sæculo,",
          french: "qu'on n'a jamais entendu dire",
        },
        {
          latin: "quemquam ad tua currentem præsidia,",
          french: "qu'aucun de ceux qui ont eu recours Á votre protection,",
        },
        {
          latin: "tua imploratum auxilia,",
          french: "implor9 votre secours,",
        },
        {
          latin: "esse derelictum.",
          french: "ait 9t9 abandonn9.",
        },
        {
          latin: "Ego tali animatus confidentia,",
          french: "Anim9 d'une telle confiance,",
        },
        {
          latin: "ad te, o Virgo virginum, Mater, curro,",
          french: "je cours vers vous, 0 Vierge des vierges, 0 mÁre,",
        },
        {
          latin: "ad te venio,",
          french: "je viens Á vous,",
        },
        {
          latin: "coram te gemens peccator assisto.",
          french: "je me tiens devant vous, pécheur gémissant.",
        },
        {
          latin: "Noli, o Mater Verbi,",
          french: "Ne m9prisez pas, 0 MÁre du Verbe,",
        },
        {
          latin: "mea verba despicere,",
          french: "mes priÁres,",
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
  name: "PriÁre Á saint Michel",
  nameLatin: "Oratio ad Sanctum Michaelem",
  category: PrayerCategory.SAINT,
  origin: PrayerOrigin.MODERN,
  author: "Pape L9on XIII (1886)",

  description:
    "PriÁre compos9e par le pape L9on XIII aprÁs une vision de la bataille eschatologique entre saint Michel et Satan.",

  sections: [
    {
      verses: [
        {
          latin: "Sancte Michael Archangele,",
          french: "Saint Michel archange,",
        },
        {
          latin: "defende nos in prælio,",
          french: "d9fendez-nous dans le combat,",
        },
        {
          latin: "contra nequitiam et insidias diaboli esto præsidium.",
          french: "soyez notre protection contre la m9chancet9 et les piÁges du d9mon.",
        },
        {
          latin: "Imperet ei Deus, supplices deprecamur,",
          french: "Que Dieu lui commande, nous le supplions,",
        },
        {
          latin: "tuque, Princeps militiae cælestis,",
          french: "et vous, prince de la milice c9leste,",
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

  tags: ["ange", "michel", "d9mon", "combat", "leon-xiii"],
};

export const animaChristi: Prayer = {
  slug: "anima-christi",
  name: "0me du Christ (Anima Christi)",
  nameLatin: "Anima Christi",
  category: PrayerCategory.EUCHARISTIC,
  origin: PrayerOrigin.MEDIEVAL,
  author: "Attribu9 Á saint Ignace de Loyola (popularisation)",

  description:
    "PriÁre trÁs ancienne, r9cit9e aprÁs la communion, demandant la protection du Christ.",

  sections: [
    {
      verses: [
        {
          latin: "Anima Christi, sanctifica me.",
          french: "0me du Christ, sanctifiez-moi.",
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
          french: "Eau du c09t9 du Christ, lavez-moi.",
        },
        {
          latin: "Passio Christi, conforta me.",
          french: "Passion du Christ, fortifiez-moi.",
        },
        {
          latin: "O bone Iesu, exaudi me.",
          french: "0 bon J9sus, exaucez-moi.",
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
          french: "Á l'heure de ma mort, appelez-moi.",
        },
        {
          latin: "Et iube me venire ad te,",
          french: "et ordonnez-moi de venir Á vous,",
        },
        {
          latin: "ut cum Sanctis tuis laudem te",
          french: "pour qu'avec vos saints je vous loue",
        },
        {
          latin: "in sæcula sæculorum.",
          french: "dans tous les siÁcles des siÁcles.",
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

  description: "PriÁre pour offrir sa journ9e Á Dieu, r9cit9e le matin au r9veil.",

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
  name: "PriÁre du soir",
  nameLatin: "Oratio vespertina",
  category: PrayerCategory.EVENING,
  origin: PrayerOrigin.MEDIEVAL,

  description: "PriÁre pour remercier Dieu de la journ9e et demander pardon pour les péch9s.",

  sections: [
    {
      verses: [
        {
          latin: "Mon Dieu, je vous remercie",
          french: "Mon Dieu, je vous remercie",
        },
        {
          latin: "de toutes les gr0ces",
          french: "de toutes les gr0ces",
        },
        {
          latin: "que vous m'avez accord9es aujourd'hui.",
          french: "que vous m'avez accord9es aujourd'hui.",
        },
        {
          latin: "Je suis désol9 de mes péch9s,",
          french: "Je suis désol9 de mes péch9s,",
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
  name: "Gr0ce avant les repas",
  nameLatin: "Gratia ante cibum",
  category: PrayerCategory.MEAL,
  origin: PrayerOrigin.MEDIEVAL,

  description: "PriÁre bénisant les alim et remerciant Dieu pour sa providence.",

  sections: [
    {
      verses: [
        {
          latin: "B9nisse-nous, Seigneur,",
          french: "B9nisse-nous, Seigneur,",
        },
        {
          latin: "bénise ces alim",
          french: "bénise ces alim",
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

export const prayers: Prayer[] = [
  ourFather,
  hailMary,
  gloryBe,
  apostlesCreed,
  niceneCreed,
  actOfContrition,
  actOfFaith,
  actOfHope,
  actOfCharity,
  hailHolyQueen,
  memorare,
  saintMichaelPrayer,
  animaChristi,
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
