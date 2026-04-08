/**
 * Catechisms Data - Catéchismes de l'Église Catholique
 *
 * Collection des principaux catéchismes traditionnels :
 * - Catéchisme du Concile de Trente (Catéchisme Romain)
 * - Catéchisme de Saint Pie X
 * - Catéchisme de l'Église Catholique (1992)
 * - Catéchisme du Curé d'Ars
 * - Catéchisme de l'Institut du Bon Pasteur (IBP)
 */

export enum CatechismType {
  CATECHISM_OF_THE_COUNCIL_OF_TRENT = "CATECHISM_OF_THE_COUNCIL_OF_TRENT", // Catéchisme Romain (1566)
  CATECHISM_OF_ST_PIUS_X = "CATECHISM_OF_ST_PIUS_X", // 1908
  CATECHISM_OF_THE_CATHOLIC_CHURCH = "CATECHISM_OF_THE_CATHOLIC_CHURCH", // 1992
  CATECHISM_OF_THE_CURE_D_ARS = "CATECHISM_OF_THE_CURE_D_ARS", // Jean-Marie Vianney
  BALTIMORE_CATECHISM = "BALTIMORE_CATECHISM", // 1885 (USA)
  CATECHISM_IBP = "CATECHISM_IBP", // Institut du Bon Pasteur (2022)
}

export enum QuestionCategory {
  APOSTLES_CREED = "APOSTLES_CREED", // Symbole des Apôtres
  NICENE_CREED = "NICENE_CREED", // Symbole de Nicée
  COMMANDMENTS = "COMMANDMENTS", // Les Dix Commandements
  SACRAMENTS = "SACRAMENTS", // Les Sept Sacrements
  PRAYER = "PRAYER", // Le Notre Père
  GRACE = "GRACE", // La grâce et les vertus
  SIN = "SIN", // Le péché
  LAST_THINGS = "LAST_THINGS", // Les fins dernières
  LITURGY = "LITURGY", // Liturgie et prières
}

export interface QuestionReference {
  source: string; // Référence biblique ou patristique
  citation?: string;
}

export interface CatechismQuestion {
  id: string;
  number: number; // Numéro dans le catéchisme
  category: QuestionCategory;

  question: {
    french: string;
    latin?: string;
  };

  answer: {
    french: string;
    latin?: string;
  };

  references?: QuestionReference[];

  // Interconnexions
  relatedQuestions?: string[]; // IDs des questions liées
  relatedBible?: string[]; // Références bibliques (livre:chapitre:verset)
  relatedCouncils?: string[]; // Conciles liés
}

export interface Catechism {
  id: string;
  type: CatechismType;
  name: string;
  nameLatin?: string;
  author?: string;
  year: number;
  description: string;
  questions: CatechismQuestion[];
}

/**
 * Catéchisme du Concile de Trente (Catéchisme Romain)
 * Publié en 1566 par ordre de Saint Pie V
 */
export const catechismOfTrent: Catechism = {
  id: "tridentine",
  type: CatechismType.CATECHISM_OF_THE_COUNCIL_OF_TRENT,
  name: "Catéchisme du Concile de Trente",
  nameLatin: "Catechismus Concilii Tridentini",
  author: "Commission théologique du Concile de Trente",
  year: 1566,
  description:
    "Le Catéchisme Romain, publié par ordre de Saint Pie V en 1566, est le catéchisme officiel de l'Église catholique issu du Concile de Trente. Il est organisé en quatre parties : le Symbole des Apôtres, les Sacrements, le Décalogue, et le Notre Père.",
  questions: [
    // ==== PARTIE I : LE SYMBOLE DES APÔTRES ====
    {
      id: "tridentine-1",
      number: 1,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Que nous apprend le Symbole des Apôtres ?",
        latin: "Quid nos Apostolorum Symbolum docet?",
      },
      answer: {
        french:
          "Le Symbole des Apôtres nous enseigne les principaux articles de notre foi, c'est-à-dire les vérités que nous devons croire pour être sauvés.",
        latin:
          "Apostolorum Symbolum nobis docet praecipua fidei nostrae capita, id est, veritates quas credere debemus ut salvemur.",
      },
      references: [
        {
          source: "Concile de Trente, Session IV",
          citation: "Le Symbole contient la règle de foi",
        },
      ],
    },
    {
      id: "tridentine-2",
      number: 2,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Que signifie : « Je crois en Dieu, le Père tout-puissant » ?",
        latin: "Quid significat: Credo in Deum, Patrem omnipotentem?",
      },
      answer: {
        french:
          "Ces mots signifient que nous croyons en un seul Dieu, qui est le Père éternel, créateur de toutes choses, tout-puissant dans son essence, sa sagesse et sa volonté.",
        latin:
          "Hæc verba significant quod credimus in unum Deum, qui est Pater æternus, creator omnium, omnipotens in essentia, sapientia, et voluntate sua.",
      },
      references: [
        { source: "Genèse 1:1", citation: "In principio creavit Deus cælum et terram" },
        { source: "Isaïe 45:5", citation: "Ego Dominus, et non est alius" },
      ],
    },
    {
      id: "tridentine-3",
      number: 3,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qu'est-ce que le Père a créé ?",
        latin: "Quid creavit Pater?",
      },
      answer: {
        french:
          "Le Père a créé toutes choses, visibles et invisibles : le ciel et la terre, les anges et les hommes, et tout ce qu'ils contiennent.",
        latin:
          "Pater creavit omnia, visibilia et invisibilia: cælum et terram, angelos et homines, et omnia quæ continent.",
      },
      references: [
        { source: "Colossiens 1:16", citation: "Omnia per ipsum et in ipsum creata sunt" },
      ],
    },
    {
      id: "tridentine-4",
      number: 4,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qui est Jésus-Christ ?",
        latin: "Quis est Iesus Christus?",
      },
      answer: {
        french:
          "Jésus-Christ est le Fils unique de Dieu, notre Seigneur, qui pour nous sauver a pris notre nature humaine, est mort, et est ressuscité.",
        latin:
          "Iesus Christus est unigenitus Dei Filius, Dominus noster, qui pro nostra salute humanam naturam assumpsit, mortuus est, et resurrexit.",
      },
      references: [
        {
          source: "Jean 3:16",
          citation: "Sic enim Deus dilexit mundum, ut Filium unigenitum daret",
        },
        { source: "Philippiens 2:7-8", citation: "Semetipsum exinanivit, formam servi accipiens" },
      ],
    },
    {
      id: "tridentine-5",
      number: 5,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qu'entendons-nous par : « conçu du Saint-Esprit, né de la Vierge Marie » ?",
        latin: "Quid intelligimus per: Spiritu Sancto conceptus, natus ex Maria Virgine?",
      },
      answer: {
        french:
          "Nous entendons que le Fils de Dieu a pris corps et âme dans le chaste sein de la Vierge Marie, par l'opération du Saint-Esprit, sans perdre sa nature divine.",
        latin:
          "Intelligimus quod Dei Filius corpus et animam accepit in casto Virginis Mariæ utero, per operationem Spiritus Sancti, sine naturæ divinæ detrimentum.",
      },
      references: [
        {
          source: "Luc 1:35",
          citation: "Spiritus Sanctus superveniet in te, et virtus Altissimi obumbrabit tibi",
        },
        { source: "Matthieu 1:20", citation: "Quod enim in ea natum est, de Spiritu Sancto est" },
        {
          source: "Concile de Chalcédoine, 451",
          citation: "Deux natures... inconfuse, immutabiliter",
        },
      ],
      relatedCouncils: ["chalcedoine-451", "constantinople-iii-681"],
    },
    {
      id: "tridentine-6",
      number: 6,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Pourquoi Jésus-Christ est-il mort ?",
        latin: "Cur mortuus est Iesus Christus?",
      },
      answer: {
        french:
          "Jésus-Christ est mort pour nous racheter du péché et de la mort éternelle, et pour nous ouvrir les portes du ciel.",
        latin:
          "Iesus Christus mortuus est ut nos redimeret a peccato et morte æterna, et ut nobis cæli portas aperiret.",
      },
      references: [
        { source: "1 Timothée 2:6", citation: "Qui dedit redemptionem semetipsum pro omnibus" },
        { source: "Hébreux 9:15", citation: "Mors interveniat in redemptionem" },
      ],
    },
    {
      id: "tridentine-7",
      number: 7,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qu'est-ce que la résurrection de la chair ?",
        latin: "Quid est resurrectio carnis?",
      },
      answer: {
        french:
          "La résurrection de la chair est le miracle par lequel, au dernier jour, tous les morts ressusciteront avec leurs corps, pour le jugement.",
        latin:
          "Resurrectio carnis est miraculum quo, in die novissimo, omnes mortui cum corporibus resurgent, ad iudicium.",
      },
      references: [
        {
          source: "Jean 5:28-29",
          citation: "Venit hora in qua omnes qui in monumentis sunt audient vocem Filii",
        },
        {
          source: "1 Corinthiens 15:42",
          citation: "Seminatur in corruptione, surgit in incorruptione",
        },
        { source: "Concile de Latran IV, 1215", citation: "Tous ressusciteront avec leurs corps" },
      ],
    },

    // ==== PARTIE II : LES SACREMENTS ====
    {
      id: "tridentine-8",
      number: 8,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce qu'un sacrement ?",
        latin: "Quid est sacramentum?",
      },
      answer: {
        french:
          "Un sacrement est un signe visible institué par Jésus-Christ pour nous donner la grâce invisible.",
        latin:
          "Sacramentum est signum visibile a Iesu Christo institutum, ut nobis gratiam invisibilem conferat.",
      },
      references: [
        {
          source: "Concile de Trente, Session VII",
          citation: "Si quis dixerit sacramenta non esse gratiae causa : anathema sit",
        },
      ],
    },
    {
      id: "tridentine-9",
      number: 9,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Combien y a-t-il de sacrements ?",
        latin: "Quot sunt sacramenta?",
      },
      answer: {
        french:
          "Il y a sept sacrements : le Baptême, la Confirmation, l'Eucharistie, la Pénitence, l'Onction des malades, l'Ordre et le Mariage.",
        latin:
          "Septem sunt sacramenta: Baptismus, Confirmatio, Eucharistia, Pœnitentia, Unctio infirmorum, Ordo, et Matrimonium.",
      },
      references: [
        {
          source: "Concile de Trente, Session VII",
          citation: "Les sacrements de la Nouvelle Loi sont sept",
        },
      ],
    },
    {
      id: "tridentine-10",
      number: 10,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que le Baptême ?",
        latin: "Quid est Baptismus?",
      },
      answer: {
        french:
          "Le Baptême est le sacrement qui nous fait chrétiens, nous purifie du péché originel et de tous les péchés actuels, et nous rend enfants de Dieu et membres de l'Église.",
        latin:
          "Baptismus est sacramentum quod nos christianos facit, a peccato originali et omnibus actualibus purgat, et filios Dei et Ecclesiæ membras reddit.",
      },
      references: [
        {
          source: "Jean 3:5",
          citation:
            "Nisi quis renatus fuerit ex aqua et Spiritu Sancto, non potest introire in regnum Dei",
        },
        {
          source: "Matthieu 28:19",
          citation: "Baptizantes eos in nomine Patris, et Filii, et Spiritus Sancti",
        },
        { source: "Concile de Trente, Session V", citation: "Le Baptême est nécessaire au salut" },
      ],
    },
    {
      id: "tridentine-11",
      number: 11,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que l'Eucharistie ?",
        latin: "Quid est Eucharistia?",
      },
      answer: {
        french:
          "L'Eucharistie est le sacrement où Jésus-Christ est réellement présent : son corps, son sang, son âme et sa divinité, sous les espèces du pain et du vin.",
        latin:
          "Eucharistia est sacramentum ubi Iesus Christus vere adest: corpus, sanguis, anima, et divinitas, sub speciebus panis et vini.",
      },
      references: [
        {
          source: "Jean 6:55",
          citation: "Caro mea vere est cibus, et sanguis meus vere est potus",
        },
        { source: "Matthieu 26:26-28", citation: "Hoc est corpus meum... Hic est sanguis meus" },
        {
          source: "Concile de Trente, Session XIII",
          citation: "Si quis dixerit Christum non esse vere in sacramento : anathema sit",
        },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
    {
      id: "tridentine-12",
      number: 12,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la transsubstantiation ?",
        latin: "Quid est transsubstantiatio?",
      },
      answer: {
        french:
          "La transsubstantiation est le changement miraculeux par lequel toute la substance du pain est changée en la substance du Corps du Christ, et toute la substance du vin en la substance de son Sang, les espèces (apparences) du pain et du vin demeurant.",
        latin:
          "Transsubstantiatio est mirabilis conversio qua tota substantia panis convertitur in substantiam Corporis Christi, et tota substantia vini in substantiam Sanguinis eius, speciebus panis et vini manentibus.",
      },
      references: [
        {
          source: "Concile de Trente, Session XIII",
          citation: "Si quis dixerit panis et vini manere substantiam : anathema sit",
        },
        {
          source: "Thomas d'Aquin, Somme Théologique III, q. 75",
          citation: "Tota substantia panis convertitur",
        },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
    {
      id: "tridentine-13",
      number: 13,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la Confirmation ?",
        latin: "Quid est Confirmatio?",
      },
      answer: {
        french:
          "La Confirmation est le sacrement par lequel nous recevons l'Esprit Saint avec ses sept dons, pour nous rendre forts et courageux témoins du Christ.",
        latin:
          "Confirmatio est sacramentum quo Spiritum Sanctum cum septem donis accipimus, ut fortes et audaces Christi testes efficiamur.",
      },
      references: [
        {
          source: "Actes 8:17",
          citation: "Imponebant autem manus super eos, et recipiebant Spiritum Sanctum",
        },
        {
          source: "Actes 1:8",
          citation: "Accepti estis virtutem venientis Spiritus Sancti super vos",
        },
      ],
    },
    {
      id: "tridentine-14",
      number: 14,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la Pénitence ?",
        latin: "Quid est Pœnitentia?",
      },
      answer: {
        french:
          "La Pénitence est le sacrement institué par Jésus-Christ pour remettre les péchés commis après le Baptême, par la contrition du cœur, la confession de la bouche et la satisfaction par les œuvres.",
        latin:
          "Pœnitentia est sacramentum a Iesu Christo institutum ad remittenda peccata post Baptismum commissa, per cordis contritionem, oris confessionem, et operationis satisfactionem.",
      },
      references: [
        { source: "Jean 20:22-23", citation: "Quorum remiseritis peccata, remittuntur eis" },
        { source: "Jacques 5:16", citation: "Confitemini alterutrum peccata vestra" },
        {
          source: "Concile de Trente, Session XIV",
          citation: "La Pénitence est nécessaire au salut",
        },
      ],
    },
    {
      id: "tridentine-15",
      number: 15,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que l'Onction des malades ?",
        latin: "Quid est Unctio infirmorum?",
      },
      answer: {
        french:
          "L'Onction des malades est le sacrement qui, par l'onction avec l'huile bénite et la prière du prêtre, fortifie et soulage les malades en danger de mort.",
        latin:
          "Unctio infirmorum est sacramentum quod, per unctionem olei benedicti et sacerdotis orationem, infirmos in mortis periculo confortat et relevat.",
      },
      references: [
        {
          source: "Jacques 5:14-15",
          citation:
            "Infirmatur quis in vobis? Adducat presbyteros ecclesiæ, et orent super eum ungentes eum oleo",
        },
        { source: "Concile de Trente, Session XIV", citation: "L'Onction est un vrai sacrement" },
      ],
    },
    {
      id: "tridentine-16",
      number: 16,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que l'Ordre ?",
        latin: "Quid est Ordo?",
      },
      answer: {
        french:
          "L'Ordre est le sacrement qui donne le pouvoir d'exercer les fonctions sacrées : offrir le sacrifice, administrer les sacrements, prêcher et gouverner l'Église.",
        latin:
          "Ordo est sacramentum quod dat potestatem exercendi sacras functiones: offerre sacrificium, administrare sacramenta, prædicare, et regere Ecclesiam.",
      },
      references: [
        { source: "Luc 22:19", citation: "Hoc facite in meam commemorationem" },
        {
          source: "2 Timothée 1:6",
          citation: "Resuscita donum Dei, quod est in te per impositionem manuum mearum",
        },
        {
          source: "Concile de Trente, Session XXIII",
          citation: "L'Ordre a été institué par le Christ",
        },
      ],
    },
    {
      id: "tridentine-17",
      number: 17,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que le Mariage ?",
        latin: "Quid est Matrimonium?",
      },
      answer: {
        french:
          "Le Mariage est le sacrement qui unit un homme et une femme pour toute la vie, et leur donne la grâce de s'aimer et d'élever chrétiennement leurs enfants.",
        latin:
          "Matrimonium est sacramentum quod virum et mulierem in totam vitam unit, et eis dat gratia amandi et christiane educandos liberos.",
      },
      references: [
        { source: "Matthieu 19:6", citation: "Quos ergo Deus coniunxit, homo non separet" },
        {
          source: "Éphésiens 5:31-32",
          citation: "Erunt duo in carne una. Sacramentum hoc magnum est",
        },
        { source: "Concile de Trente, Session XXIV", citation: "Le Mariage est un sacrement" },
      ],
    },

    // ==== PARTIE III : LE DÉCALOGUE ====
    {
      id: "tridentine-18",
      number: 18,
      category: QuestionCategory.COMMANDMENTS,
      question: {
        french: "Qu'est-ce que le Décalogue ?",
        latin: "Quid est Decalogus?",
      },
      answer: {
        french:
          "Le Décalogue est les dix commandements donnés par Dieu à Moïse sur le mont Sinaï, qui contiennent toute la loi morale naturelle.",
        latin:
          "Decalogus est decem præcepta a Deo Moysi in monte Sina data, quae totam legem moralem naturalem continent.",
      },
      references: [
        { source: "Exode 20:2-17", citation: "Les dix paroles" },
        { source: "Deutéronome 5:6-21", citation: "Répétition du Décalogue" },
      ],
    },
    {
      id: "tridentine-19",
      number: 19,
      category: QuestionCategory.COMMANDMENTS,
      question: {
        french: "Quel est le premier commandement ?",
        latin: "Quod est primum præceptum?",
      },
      answer: {
        french:
          "Tu aimeras le Seigneur ton Dieu de tout ton cœur, de toute ton âme, de toute ta force et de tout ton esprit.",
        latin:
          "Diliges Dominum Deum tuum ex toto corde tuo, et ex tota anima tua, et ex tota fortitudine tua, et ex tota mente tua.",
      },
      references: [
        { source: "Deutéronome 6:5", citation: "Diliges Dominum Deum tuum" },
        { source: "Matthieu 22:37", citation: "Hoc est maximum et primum mandatum" },
      ],
    },
    {
      id: "tridentine-20",
      number: 20,
      category: QuestionCategory.COMMANDMENTS,
      question: {
        french: "Quel est le second commandement ?",
        latin: "Quod est secundum præceptum?",
      },
      answer: {
        french: "Tu aimeras ton prochain comme toi-même.",
        latin: "Diliges proximum tuum sicut teipsum.",
      },
      references: [
        { source: "Lévitique 19:18", citation: "Diliges proximum tuum sicut teipsum" },
        { source: "Matthieu 22:39", citation: "Simile est huic secundum" },
      ],
    },
    {
      id: "tridentine-21",
      number: 21,
      category: QuestionCategory.COMMANDMENTS,
      question: {
        french: "Que nous ordonne le troisième commandement ?",
        latin: "Quid nobis præcipit tertium præceptum?",
      },
      answer: {
        french:
          "Le troisième commandement nous ordonne de sanctifier le jour du Seigneur en assistant à la messe et en nous abstenant de travaux serviles.",
        latin:
          "Tertium præceptum nobis præcipit diem Domini sanctificandum per Missæ auditionem et a servilibus operibus abstinendum.",
      },
      references: [
        { source: "Exode 20:8", citation: "Memento ut diem Sabbati sanctifices" },
        { source: "Concile de Trente, Session XXIV", citation: "L'obligation d'entendre la messe" },
      ],
    },

    // ==== PARTIE IV : LE NOTRE PÈRE ====
    {
      id: "tridentine-22",
      number: 22,
      category: QuestionCategory.PRAYER,
      question: {
        french: "Qu'est-ce que le Notre Père ?",
        latin: "Quid est Pater Noster?",
      },
      answer: {
        french:
          "Le Notre Père est la prière enseignée par Jésus-Christ lui-même à ses disciples, qui contient toutes les demandes nécessaires à notre vie spirituelle.",
        latin:
          "Pater Noster est oratio a Iesu Christo ipso discipulis tradita, quæ omnes preces ad vitam spiritualem necessarias continet.",
      },
      references: [
        { source: "Matthieu 6:9-13", citation: "Pater noster, qui es in cælis" },
        { source: "Luc 11:2-4", citation: "Cum oratis, dicite: Pater" },
      ],
    },
    {
      id: "tridentine-23",
      number: 23,
      category: QuestionCategory.PRAYER,
      question: {
        french: "Que demandons-nous en disant : « Notre Père, qui es aux cieux » ?",
        latin: "Quid petimus dicentes: Pater noster, qui es in cælis?",
      },
      answer: {
        french:
          "En disant « Notre Père », nous demandons la grâce de regarder Dieu comme notre Père, de lui être soumis comme des enfants, et de vivre comme des citoyens du ciel.",
        latin:
          "Dicendo « Pater noster », petimus gratiam Deum ut Patrem considerandi, ei ut filii subdiendi, et ut cælum incolendi.",
      },
      references: [
        {
          source: "Romains 8:15-16",
          citation: "Accepistis Spiritum adoptionis filiorum, in quo clamamus: Abba, Pater",
        },
        { source: "Philippiens 3:20", citation: "Nostra autem conversatio in cælis est" },
      ],
    },
    {
      id: "tridentine-24",
      number: 24,
      category: QuestionCategory.PRAYER,
      question: {
        french:
          "Que demandons-nous en disant : « Que ta volonté soit faite sur la terre comme au ciel » ?",
        latin: "Quid petimus dicentes: Fiat voluntas tua sicut in cælo et in terra?",
      },
      answer: {
        french:
          "Nous demandons que la volonté de Dieu soit parfaitement accomplie par les anges et les bienheureux au ciel, et par nous sur la terre, comme elle s'accomplit dans le ciel.",
        latin:
          "Petimus ut Dei voluntas perfecte impleatur per angelos et beatos in cælo, et per nos in terra, sicut in cælo impletur.",
      },
      references: [
        {
          source: "Psaume 102:21",
          citation:
            "Benedicite Dominum, omnes virtutes eius, ministri eius, qui facitis voluntatem eius",
        },
        {
          source: "Matthieu 7:21",
          citation:
            "Non omnis qui dicit mihi: Domine, Domine, intrabit in regnum cælorum, sed qui facit voluntatem Patris mei",
        },
      ],
    },
    {
      id: "tridentine-25",
      number: 25,
      category: QuestionCategory.PRAYER,
      question: {
        french: "Que demandons-nous en disant : « Donne-nous aujourd'hui notre pain de ce jour » ?",
        latin: "Quid petimus dicentes: Panem nostrum quotidianum da nobis hodie?",
      },
      answer: {
        french:
          "Nous demandons à Dieu de nous donner ce qui nous est nécessaire chaque jour, tant pour le corps que pour l'âme, et particulièrement la nourriture de l'Eucharistie.",
        latin:
          "Petimus a Deo ut nobis det quod quotidie necessarium est, tam corpori quam animæ, et præcipue Eucharistiæ alimentum.",
      },
      references: [
        {
          source: "Proverbes 30:8",
          citation:
            "Paupertaem et divitias ne dederis mihi, sed tantum victum quo nunquam deficiar",
        },
        { source: "Jean 6:35", citation: "Ego sum panis vitæ" },
      ],
    },
    {
      id: "tridentine-26",
      number: 26,
      category: QuestionCategory.PRAYER,
      question: {
        french:
          "Que demandons-nous en disant : « Pardonne-nous nos offenses, comme nous pardonnons à ceux qui nous ont offensés » ?",
        latin:
          "Quid petimus dicentes: Dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris?",
      },
      answer: {
        french:
          "Nous demandons à Dieu de nous pardonner nos péchés, avec la promesse que nous pardonnerons nous-mêmes à ceux qui nous ont offensés.",
        latin:
          "Petimus a Deo ut nobis peccata dimittat, cum promissione quia et ipsi dimittimus qui nobis offendiderunt.",
      },
      references: [
        {
          source: "Matthieu 6:14-15",
          citation:
            "Si remiseritis hominibus peccata eorum, remittet et vobis Pater vester cælestis peccata vestra",
        },
        {
          source: "Marc 11:25",
          citation: "Si autem statueritis aliquid in corde vestro, dimittite",
        },
        {
          source: "Éphésiens 4:32",
          citation:
            "Estote autem invicem benigni, misericordes, compatientes invicem, donantes veniam",
        },
      ],
    },
    {
      id: "tridentine-27",
      number: 27,
      category: QuestionCategory.PRAYER,
      question: {
        french:
          "Que demandons-nous en disant : « Ne nous soumets pas à la tentation, mais délivre-nous du mal » ?",
        latin: "Quid petimus dicentes: Ne nos inducas in tentationem, sed libera nos a malo?",
      },
      answer: {
        french:
          "Nous demandons à Dieu de ne pas nous permettre de succomber à la tentation, et de nous délivrer du mal présent et du mal éternel.",
        latin:
          "Petimus a Deo ut nos non permittat succumbere tentationi, et ut liberet nos a malo praesenti et a malo æterno.",
      },
      references: [
        {
          source: "Matthieu 26:41",
          citation: "Vigilate et orate, ut non introiatis in tentationem",
        },
        {
          source: "1 Corinthiens 10:13",
          citation: "Fidelis autem Deus est, qui non patietur vos tentari supra id quod potestis",
        },
        { source: "2 Timothée 4:18", citation: "Dominus me liberabit ab omni opere malo" },
      ],
    },
  ],
};

/**
 * Catéchisme de Saint Pie X (1908)
 * Un catéchisme concis et clair pour enfants
 */
export const catechismOfStPiusX: Catechism = {
  id: "pius-x",
  type: CatechismType.CATECHISM_OF_ST_PIUS_X,
  name: "Catéchisme de Saint Pie X",
  nameLatin: "Catechismus Sancti Pii X",
  author: "Pape Saint Pie X (Giuseppe Sarto)",
  year: 1908,
  description:
    "Le Catéchisme de Saint Pie X, publié en 1908, est un catéchisme simple et clair, conçu pour être facilement mémorisé par les enfants. Il est divisé en trois parties principales : ce que nous devons croire, ce que nous devons faire, et ce que nous devons recevoir.",
  questions: [
    {
      id: "pius-x-1",
      number: 1,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Pourquoi Dieu nous a-t-il créés ?",
      },
      answer: {
        french:
          "Dieu nous a créés pour le connaître, l'aimer et le servir dans cette vie, et pour être heureux avec lui dans l'éternité.",
      },
      references: [
        { source: "Catéchisme du Concile de Trente", citation: "Finis hominis est Deus" },
        { source: "Concile de Latran IV, 1215", citation: "Créés pour voir Dieu" },
      ],
    },
    {
      id: "pius-x-2",
      number: 2,
      category: QuestionCategory.SIN,
      question: {
        french: "Qu'est-ce que le péché originel ?",
      },
      answer: {
        french:
          "Le péché originel est le péché commis par Adam et Ève en désobéissant à Dieu dans le paradis terrestre. Par ce péché, ils ont perdu la sainteté et la justice originales, et nous tous leurs descendants naissons avec la nature corrompue.",
      },
      references: [
        { source: "Genèse 3", citation: "La chute" },
        { source: "Romains 5:12", citation: "Per unum hominem peccatum in mundum intravit" },
        { source: "Concile de Trente, Session V", citation: "Décret sur le péché originel" },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
    {
      id: "pius-x-3",
      number: 3,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la grâce sanctifiante ?",
      },
      answer: {
        french:
          "La grâce sanctifiante est le don surnaturel par lequel Dieu nous fait saints et justes, enfants de Dieu et héritiers du ciel. Elle nous est donnée principalement par le Baptême et les autres sacrements.",
      },
      references: [
        { source: "Concile de Trente, Session VI", citation: "De justifificatione" },
        { source: "Jean 1:12", citation: "Dedit eis potestatem filios Dei fieri" },
      ],
    },
    {
      id: "pius-x-4",
      number: 4,
      category: QuestionCategory.GRACE,
      question: {
        french: "La foi suffit-elle pour être sauvé ?",
      },
      answer: {
        french:
          "Non, la foi ne suffit pas. Il est nécessaire de faire les œuvres bonnes commandées par Dieu, de persévérer jusqu'à la mort dans sa grâce, et de recevoir les sacrements.",
      },
      references: [
        { source: "Jacques 2:17", citation: "Fides sine operibus mortua est" },
        {
          source: "Matthieu 7:21",
          citation: "Non omnis qui dicit mihi: Domine, Domine, intrabit in regnum cælorum",
        },
        {
          source: "Concile de Trente, Session VI",
          citation: "Si quis dixerit sola fide justificari : anathema sit",
        },
      ],
    },
    {
      id: "pius-x-5",
      number: 5,
      category: QuestionCategory.PRAYER,
      question: {
        french: "Quelles sont les principales prières que tout chrétien doit connaître ?",
      },
      answer: {
        french:
          "Les principales prières sont : le Notre Père, le Je vous salue Marie, le Je crois en Dieu (Symbole des Apôtres), le Confiteor, l'Acte de contrition, et les prières avant et après les repas.",
      },
      references: [],
    },
    {
      id: "pius-x-6",
      number: 6,
      category: QuestionCategory.LITURGY,
      question: {
        french: "Qu'est-ce que la Messe ?",
      },
      answer: {
        french:
          "La Messe est le sacrifice du Corps et du Sang de Jésus-Christ, offert sur l'autel sous les espèces du pain et du vin, en mémoire du sacrifice de la Croix.",
      },
      references: [
        {
          source: "Concile de Trente, Session XXII",
          citation: "La Messe est le même sacrifice que celui de la Croix",
        },
        {
          source: "Hébreux 13:10",
          citation:
            "Altare habemus, de quo edere non habent potestatem qui in tabernaculo deserviunt",
        },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
    {
      id: "pius-x-7",
      number: 7,
      category: QuestionCategory.LAST_THINGS,
      question: {
        french: "Qu'est-ce que l'enfer ?",
      },
      answer: {
        french:
          "L'enfer est l'état de those qui meurent en état de péché mortel, séparés de Dieu pour toujours. Ils souffrent la peine du dam (privation de la vue de Dieu) et la peine du sens (feu éternel).",
      },
      references: [
        {
          source: "Matthieu 13:42",
          citation: "Iicient eos in caminum ignis : ibi erit fletus et stridor dentium",
        },
        { source: "Apocalypse 21:8", citation: "Portio eorum in stagno ignis ardentis sulphure" },
        { source: "Concile de Latran IV, 1215", citation: "L'enfer existe et est éternel" },
      ],
    },
    {
      id: "pius-x-8",
      number: 8,
      category: QuestionCategory.LAST_THINGS,
      question: {
        french: "Qu'est-ce que le purgatoire ?",
      },
      answer: {
        french:
          "Le purgatoire est l'état où les âmes des justes qui meurent en grâce mais encore imparfaitement purifiées souffrent temporairement pour être complètement purifiées avant d'entrer au ciel.",
      },
      references: [
        { source: "2 Maccabées 12:46", citation: "Oratio pro mortuis ad purgationem" },
        { source: "Matthieu 12:32", citation: "Nec in hoc sæculo, nec in futuro" },
        { source: "Concile de Trente, Session XXV", citation: "Le purgatoire existe" },
      ],
      relatedCouncils: ["trente-1545-1563", "lyon-ii-1274", "florence-1439"],
    },
    {
      id: "pius-x-9",
      number: 9,
      category: QuestionCategory.LAST_THINGS,
      question: {
        french: "Qu'est-ce que le paradis ?",
      },
      answer: {
        french:
          "Le paradis est l'état de those qui meurent en état de grâce et sont parfaitement purifiés. Ils voient Dieu face à face, l'aiment parfaitement, et sont heureux pour toujours dans sa compagnie.",
      },
      references: [
        { source: "Matthieu 5:8", citation: "Beati mundo corde, quoniam ipsi Deum videbunt" },
        {
          source: "1 Corinthiens 13:12",
          citation: "Videmus nunc per speculum in ænigamate : tunc autem facie ad faciem",
        },
        { source: "Apocalypse 21:4", citation: "Et absterget Deus omnem lacrimam ab oculis eorum" },
      ],
    },
    {
      id: "pius-x-10",
      number: 10,
      category: QuestionCategory.COMMANDMENTS,
      question: {
        french: "Quels sont les principaux commandements de l'Église ?",
      },
      answer: {
        french:
          "Les principaux commandements de l'Église sont : 1) Entendre la messe le dimanche et les fêtes ; 2) Jeûner pendant le Carême et aux vigiles ; 3) Se confesser au moins une fois par an ; 4) Communier au moins à Pâques ; 5) Payer la dîme (autrefois) ; 6) Ne pas assister à des offices non catholiques.",
      },
      references: [
        {
          source: "Concile de Trente, Session XXIV",
          citation: "Obligation de la messe dominicale",
        },
        {
          source: "Concile de Trente, Session XXV",
          citation: "Obligation de la confession et communion pascales",
        },
      ],
    },
  ],
};

/**
 * Catéchisme du Curé d'Ars
 * Un catéchisme populaire par saint Jean-Marie Vianney
 */
export const catechismOfCureDArs: Catechism = {
  id: "cure-d-ars",
  type: CatechismType.CATECHISM_OF_THE_CURE_D_ARS,
  name: "Catéchisme du Curé d'Ars",
  nameLatin: "Catechismus Curiati de Ars",
  author: "Saint Jean-Marie Vianney (Curé d'Ars)",
  year: 1860,
  description:
    "Un catéchisme simple et profond composé par saint Jean-Marie Vianney, le saint curé d'Ars, connu pour son zèle pastoral et ses enseignements clairs sur la foi catholique.",
  questions: [
    {
      id: "cure-d-ars-1",
      number: 1,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qu'est-ce que la foi ?",
      },
      answer: {
        french:
          "La foi est une lumière surnaturelle qui nous fait connaître Dieu et tout ce qu'il a révélé. C'est un don gratuit de Dieu, que nous recevons dans le baptême.",
      },
      references: [
        {
          source: "Hébreux 11:1",
          citation: "Est autem fides substantia sperandarum rerum, argumentum non apparentium",
        },
        { source: "Concile de Trente, Session VI", citation: "La foi est un don gratuit" },
      ],
    },
    {
      id: "cure-d-ars-2",
      number: 2,
      category: QuestionCategory.GRACE,
      question: {
        french: "Qu'est-ce que la grâce ?",
      },
      answer: {
        french:
          "La grâce est un don que Dieu nous fait gratuitement, pour nous aider à faire le bien et à éviter le mal. Sans la grâce, nous ne pouvons ni prier, ni faire aucune œuvre bonne.",
      },
      references: [
        { source: "Jean 15:5", citation: "Sine me nihil potestis facere" },
        { source: "Concile de Trente, Session VI", citation: "La grâce est nécessaire" },
      ],
    },
    {
      id: "cure-d-ars-3",
      number: 3,
      category: QuestionCategory.PRAYER,
      question: {
        french: "Qu'est-ce que la prière ?",
      },
      answer: {
        french:
          "La prière est l'élévation de l'âme vers Dieu, pour le louer, le remercier, lui demander pardon, ou lui prier des grâces. La prière est la respiration de l'âme.",
      },
      references: [
        {
          source: "Jean 4:24",
          citation:
            "Spiritus est Deus, et eos qui adorant eum, in spiritu et veritate oportet adorare",
        },
        { source: "1 Thessaloniciens 5:17", citation: "Sine intermissione orate" },
      ],
    },
    {
      id: "cure-d-ars-4",
      number: 4,
      category: QuestionCategory.SIN,
      question: {
        french: "Qu'est-ce qu'un péché mortel ?",
      },
      answer: {
        french:
          "Un péché mortel est une désobéissance grave à la loi de Dieu, faite en pleine connaissance et de plein gré. Le péché mortel nous prive de la grâce sanctifiante et nous mérite l'enfer.",
      },
      references: [
        { source: "1 Jean 5:16-17", citation: "Mors est peccatum ad mortem" },
        { source: "Concile de Trente, Session VI", citation: "Le péché mortel prive de la grâce" },
      ],
    },
    {
      id: "cure-d-ars-5",
      number: 5,
      category: QuestionCategory.SIN,
      question: {
        french: "Qu'est-ce qu'un péché véniel ?",
      },
      answer: {
        french:
          "Un péché véniel est une désobéissance légère à la loi de Dieu, ou une désobéissance grave sans pleine connaissance ou sans plein consentement. Le péché véniel affaiblit la charité mais ne la détruit pas.",
      },
      references: [
        { source: "Jacques 5:16", citation: "Confitemini alterutrum peccata vestra" },
        {
          source: "1 Jean 1:8-9",
          citation: "Si dixerimus quia peccatum non habemus, ipsi nos decipimus",
        },
      ],
    },
    {
      id: "cure-d-ars-6",
      number: 6,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la confession ?",
      },
      answer: {
        french:
          "La confession est l'aveu de ses péchés à un prêtre, qui a reçu le pouvoir de les pardonner de la part de Jésus-Christ. Pour être bien confessé, il faut faire un examen de conscience, être contrit, avoir la résolution de ne plus pécher, et accomplir la pénitence.",
      },
      references: [
        { source: "Jean 20:22-23", citation: "Quorum remiseritis peccata, remittuntur eis" },
        { source: "Concile de Trente, Session XIV", citation: "La confession est nécessaire" },
      ],
    },
    {
      id: "cure-d-ars-7",
      number: 7,
      category: QuestionCategory.LAST_THINGS,
      question: {
        french: "Qu'est-ce que le jugement particulier ?",
      },
      answer: {
        french:
          "Le jugement particulier est le jugement que Dieu fait de chaque âme immédiatement après la mort. Si l'âme est en état de grâce, elle va au ciel ou au purgatoire ; si elle est en état de péché mortel, elle va en enfer.",
      },
      references: [
        {
          source: "Hébreux 9:27",
          citation: "Statutum est hominibus semel mori, post hoc autem iudicium",
        },
        {
          source: "2 Corinthiens 5:10",
          citation: "Oportet nos omnes manifestari ante tribunal Christi",
        },
      ],
    },
    {
      id: "cure-d-ars-8",
      number: 8,
      category: QuestionCategory.LAST_THINGS,
      question: {
        french: "Qu'est-ce que le jugement dernier ?",
      },
      answer: {
        french:
          "Le jugement dernier est le jugement universel que Jésus-Christ fera de tous les hommes à la fin du monde, quand il reviendra dans la gloire. Alors tous connaîtront le bien et le mal que chacun a fait, et recevront leur récompense ou leur châtiment éternel.",
      },
      references: [
        {
          source: "Matthieu 25:31-46",
          citation:
            "Cum venerit Filius hominis in maiestate sua... separabit eos ab invicem sicut pastor separat oves a hædis",
        },
        {
          source: "Apocalypse 20:12",
          citation:
            "Et iudicati sunt mortui ex his quæ scripta erant in libris secundum opera ipsorum",
        },
      ],
    },
  ],
};

/**
 * Catéchisme de l'Institut du Bon Pasteur (IBP)
 * Abbé Philippe Laguerie - Institut du Bon Pasteur (2006-2022)
 */
export const catechismOfIBP: Catechism = {
  id: "laguerie-ibp",
  type: CatechismType.CATECHISM_IBP,
  name: "Catéchisme du Bon Pasteur",
  nameLatin: "Catechismus Boni Pastoris",
  author: "Abbé Philippe Laguerie",
  year: 2006,
  description:
    "Enseignement catéchétique de l'Institut du Bon Pasteur, fondé par l'Abbé Philippe Laguerie en 2006 et érigé canoniquement en 2022. Formation à la foi catholique traditionnelle selon la forme extraordinaire du rite romain.",
  questions: [
    {
      id: "ibp-1",
      number: 1,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qui est Dieu ?",
      },
      answer: {
        french:
          "Dieu est l'Être suprême, éternel, infini et tout-puissant, créateur du ciel et de la terre. Il est un seul Dieu en trois Personnes divines: le Père, le Fils et le Saint-Esprit. Ce mystère de la Sainte Trinité est le fondement de notre foi.",
      },
      references: [
        {
          source: "Deutéronome 6:4",
          citation: "Écoute, Israël: l'Éternel, notre Dieu, est le seul Éternel",
        },
        {
          source: "Matthieu 28:19",
          citation: "Baptisez-les au nom du Père, du Fils et du Saint-Esprit",
        },
      ],
    },
    {
      id: "ibp-2",
      number: 2,
      category: QuestionCategory.APOSTLES_CREED,
      question: {
        french: "Qui est Jésus-Christ ?",
      },
      answer: {
        french:
          "Jésus-Christ est le Fils de Dieu fait homme, vrai Dieu et vrai homme. Il est né de la Vierge Marie par l'opération du Saint-Esprit, a souffert sous Ponce Pilate, est mort et a été enseveli, est ressuscité le troisième jour, est monté aux cieux, et viendra juger les vivants et les morts.",
      },
      references: [
        {
          source: "Jean 1:14",
          citation: "Et la Parole a été faite chair, et elle a habité parmi nous",
        },
        {
          source: "Philippiens 2:6-7",
          citation:
            "Lui, qui est de condition divine, n'a pas regardé comme une proie à arracher d'être égal avec Dieu",
        },
        {
          source: "Concile de Chalcédoine, 451",
          citation: "Décret sur les deux natures du Christ",
        },
      ],
      relatedCouncils: ["chalcedoine-451"],
    },
    {
      id: "ibp-3",
      number: 3,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la Messe de toujours ?",
      },
      answer: {
        french:
          'La forme extraordinaire du rite romain, appelée "messe de Saint Pie V", est la liturgie latine traditionnelle codifiée par le Concile de Trente et promulguée en 1570. Elle exprime la foi catholique avec une beauté, une sacralité et une continuité ininterrompue depuis les premiers siècles de l\'Église.',
      },
      references: [
        { source: "Saint Pie V", citation: "Bulle Quo Primum (1570)" },
        { source: "Benoît XVI", citation: "Summorum Pontificum (2007)" },
      ],
    },
    {
      id: "ibp-4",
      number: 4,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la transsubstantiation ?",
      },
      answer: {
        french:
          "La transsubstantiation est le changement miraculeux par lequel, durant la consécration, toute la substance du pain est changée en la substance du Corps du Christ, et toute la substance du vin en la substance de son Sang, les espèces du pain et du vin demeurant. Le Christ est réellement présent: corps, âme, sang et divinité.",
      },
      references: [
        {
          source: "Concile de Trente, Session XIII",
          citation: "Si quis dixerit... panem et vinum... remanere in sacramento: anathema sit",
        },
        { source: "Thomas d'Aquin", citation: "Somme Théologique III, q. 75" },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
    {
      id: "ibp-5",
      number: 5,
      category: QuestionCategory.COMMANDMENTS,
      question: {
        french: "Quel est le fondement de la loi morale ?",
      },
      answer: {
        french:
          "Le fondement de la loi morale est la loi naturelle inscrite par Dieu dans le cœur de tout homme, et pleinement révélée dans les Dix Commandements. La loi morale nous ordonne de faire le bien et d'éviter le mal, de chercher notre fin dernière qui est Dieu, et de l'aimer par-dessus tout.",
      },
      references: [
        {
          source: "Romains 2:14-15",
          citation:
            "Quand les païens, qui n'ont point la loi, font naturellement ce que prescrit la loi...",
        },
        {
          source: "Matthieu 22:37-40",
          citation: "Tu aimeras le Seigneur ton Dieu de tout ton cœur...",
        },
      ],
    },
    {
      id: "ibp-6",
      number: 6,
      category: QuestionCategory.PRAYER,
      question: {
        french: "Quelle est la place de la prière dans la vie chrétienne ?",
      },
      answer: {
        french:
          "La prière est l'élévation de l'âme vers Dieu pour l'adorer, le remercier, lui demander pardon ou le supplier. Le chrétien doit prier sans cesse, commencer et terminer chaque action par une prière, et participer assidûment à la prière liturgique de l'Église, particulièrement la sainte messe.",
      },
      references: [
        { source: "1 Thessaloniciens 5:17", citation: "Priez sans cesse" },
        { source: "Luc 18:1", citation: "Il faut toujours prier, et ne point se relâcher" },
        { source: "Saint Pie V", citation: "Bulle Quo Primum sur la prière liturgique" },
      ],
    },
    {
      id: "ibp-7",
      number: 7,
      category: QuestionCategory.GRACE,
      question: {
        french: "Qu'est-ce que la grâce sanctifiante ?",
      },
      answer: {
        french:
          "La grâce sanctifiante est le don surnaturel que Dieu accorde à l'âme, la rendant sainte et agréable à ses yeux. Elle nous fait enfants de Dieu et héritiers du ciel. Nous recevons la principalement par le baptême, et nous la perdons par le péché mortel, mais nous pouvons la recouvrer par le sacrement de pénitence.",
      },
      references: [
        {
          source: "2 Pierre 1:4",
          citation:
            "Par lesquelles nous sont promises les plus grandes et les plus précieuses promesses, afin que par elles vous deveniez participants de la nature divine",
        },
        { source: "Concile de Trente, Session VI", citation: "Décret sur la justification" },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
    {
      id: "ibp-8",
      number: 8,
      category: QuestionCategory.LAST_THINGS,
      question: {
        french: "Qu'est-ce que les fins dernières ?",
      },
      answer: {
        french:
          'Les fins dernières, appelées "novissima", sont ce que chaque âme rencontrera après la mort: le jugement particulier, suivi du paradis pour les justes en état de grâce, de l\'enfer pour ceux qui meurent en état de péché mortel sans repentir, ou du purgatoire pour ceux qui meurent en grâce mais imparfaitement purifiés. À la fin des temps viendra le jugement universel.',
      },
      references: [
        {
          source: "Hébreux 9:27",
          citation:
            "Il est réservé aux hommes de mourir une seule fois, après quoi vient le jugement",
        },
        { source: "Matthieu 25:31-46", citation: "Le jugement dernier" },
        { source: "Concile de Trente, Session XXV", citation: "Décret sur le purgatoire" },
      ],
      relatedCouncils: ["trente-1545-1563", "lyon-ii-1274"],
    },
    {
      id: "ibp-9",
      number: 9,
      category: QuestionCategory.LITURGY,
      question: {
        french: "Quelle place a la Vierge Marie dans la foi catholique ?",
      },
      answer: {
        french:
          "Marie est la Mère de Dieu (Théotokos), conçue sans péché (Immaculée Conception), toujours vierge, et assumée corps et âme au ciel. Elle est la Mère de tous les chrétiens, notre avocate auprès de son Fils, et le modèle de toutes les vertus. Nous l'honorons d'un culte spécial d'hyperdulie, supérieur à celui des anges et des saints.",
      },
      references: [
        { source: "Luc 1:28", citation: "Je te salue, pleine de grâce, le Seigneur est avec toi" },
        {
          source: "Luc 1:42",
          citation: "Bénie es-tu entre les femmes, et béni est le fruit de ton sein",
        },
        { source: "Concile d'Éphèse, 431", citation: "Décret proclamant Marie Theotokos" },
        { source: "Pie IX", citation: "Ineffabilis Deus (1854) - Immaculée Conception" },
        { source: "Pie XII", citation: "Munificentissimus Deus (1950) - Assomption" },
      ],
      relatedCouncils: ["ephese-431"],
    },
    {
      id: "ibp-10",
      number: 10,
      category: QuestionCategory.SACRAMENTS,
      question: {
        french: "Qu'est-ce que la grâce d'état ?",
      },
      answer: {
        french:
          "La grâce d'état est un don spécial accordé par Dieu à ceux qui sont appelés à servir l'Église dans les ordres sacrés. Elle donne la force d'accomplir les devoirs de l'état ecclésiastique, de prêcher la parole de Dieu, d'administrer les sacrements, et de conduire les âmes au salut.",
      },
      references: [
        {
          source: "2 Timothée 1:6",
          citation: "Réveille le don de grâce qui est en toi par l'imposition de mes mains",
        },
        {
          source: "Concile de Trente, Session XXIII",
          citation: "Décret sur le sacrement de l'Ordre",
        },
      ],
      relatedCouncils: ["trente-1545-1563"],
    },
  ],
};

/**
 * Export de tous les catéchismes
 */
export const catechisms: Catechism[] = [
  catechismOfTrent,
  catechismOfStPiusX,
  catechismOfCureDArs,
  catechismOfIBP,
];

/**
 * Helpers
 */
export const getCatechismById = (id: string): Catechism | undefined =>
  catechisms.find(c => c.id === id);

export const getCatechismByType = (type: CatechismType): Catechism | undefined =>
  catechisms.find(c => c.type === type);

export const getQuestionById = (id: string): CatechismQuestion | undefined => {
  for (const catechism of catechisms) {
    const question = catechism.questions.find(q => q.id === id);
    if (question) return question;
  }
  return undefined;
};

export const getQuestionsByCategory = (category: QuestionCategory): CatechismQuestion[] => {
  const result: CatechismQuestion[] = [];
  for (const catechism of catechisms) {
    result.push(...catechism.questions.filter(q => q.category === category));
  }
  return result;
};

export const searchCatechisms = (query: string): CatechismQuestion[] => {
  const q = query.toLowerCase();
  const result: CatechismQuestion[] = [];
  for (const catechism of catechisms) {
    result.push(
      ...catechism.questions.filter(
        question =>
          question.question.french.toLowerCase().includes(q) ||
          question.answer.french.toLowerCase().includes(q) ||
          question.question.french.toLowerCase().includes(q)
      )
    );
  }
  return result;
};
