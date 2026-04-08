/**
 * ACTES DES APÔTRES + ÉPÎTRES
 */

import type { BookSummary, BookReadingNotes, ChapterOutline, KeyPassage } from "../types/enriched";

/* ============================================================================
 *
 * ACTES DES APÔTRES
 *
 * ============================================================================ */

export const actsSummary: BookSummary = {
  book: "Actes des Apôtres",
  testament: "NEW",
  category: "history",
  author: "Luc, médecin, compagnon de Paul",
  period: "Vers 80-90 apr. J.-C.",
  theme: "L'expansion de l'Église de Jérusalem à Rome par la puissance de l'Esprit Saint",
  outline: [
    "1-5 : Église de Jérusalem (Ascension, Pentecôte, communauté primitive, arrestation des apôtres, Étienne)",
    "6-9 : Diffusion hors de Jérusalem (Philippe en Samarie, conversion de Saul, Pierre à Césarée, Cornélius)",
    "10-12 : Ouverture aux païens (conversion de Corneille, Église d'Antioche, mort de Jacques, libération de Pierre)",
    "13-14 : Premier voyage missionnaire de Paul (Chypre, Asie Mineure, concile de Jérusalem)",
    "15 : Concile de Jérusalem (question de la circoncision et de la Loi)",
    "16-18 : Deuxième voyage (Macédoine, Grèce, Athènes, Corinthe, retour à Antioche)",
    "19-20 : Troisième voyage (Éphèse, troublés à Éphèse, voyage vers Jérusalem, arrêt de Paul)",
    "21-26 : Voyage de Paul à Rome (procès, voyage, naufrage, arrivée à Rome)",
  ],
};

export const actsReadingNotes: BookReadingNotes = {
  book: "Actes des Apôtres",
  context:
    "Deuxième volume de l'œuvre de Luc (avec l'évangile). Actes raconte l'expansion de l'Église de Jérusalem (juive) à Rome (païenne) en une trentaine d'années. Le thème central est l'action de l'Esprit Saint qui guide l'Église dans sa mission. Le personnage principal change après le chapitre 9 : de Pierre à Paul.",
  keyThemes: [
    {
      theme: "L'Esprit Saint",
      description:
        "L'Esprit est le protagoniste d'Actes : Pentecôte, guidant la mission, donnant courage pour le témoignage, ouvrant les portes aux païens.",
    },
    {
      theme: "L'universalité de l'Évangile",
      description:
        "L'Évangile passe des Juifs aux Samaritains, puis aux païens (Corneille). Le concile de Jérusalem officialise cette ouverture.",
    },
    {
      theme: "Le témoignage et la persécution",
      description:
        "L'Église grandit amid la persécution. Les martyrs (Étienne, Jacques) sont les premiers témoins.",
    },
    {
      theme: "La communauté",
      description:
        "La première communauté de Jérusalem modèle l'Église : mise en commun, prière, fraction du pain, persévérance.",
    },
    {
      theme: "Le voyage vers Rome",
      description:
        "Paul se dirige inéluctablement vers Rome, centre de l'empire, pour témoigner du Christ jusqu'aux extrémités de la terre.",
    },
  ],
  theologicalSignificance:
    "Actes est le livre de l'Esprit et de la mission. Il montre comment l'Église, guidée par l'Esprit, surmonte les obstacles (persécution, divisions, questions culturelles) pour accomplir sa mission. Les discours de Pierre (pentecôte, Corneille) et de Paul (Aréopage, Milet) résument le kérygme chrétien. Actes fonde l'ecclésiologie (communauté, ministères, concile) et la mission (envoi, adaptation culturelle).",
  christologicalTypes: [
    {
      type: "Le Seigneur glorifié",
      description:
        "Jésus ressuscité et exalté à la droite de Dieu continue d'agir par son Esprit. Paul rencontre le Christ glorifié sur le chemin de Damas.",
    },
    {
      type: "Le Témoin fidèle",
      description:
        "Les martyrs (Étienne, Jacques, plus tard Paul et Pierre) témoignent du Christ par leur sang, participant à son témoignage.",
    },
    {
      type: "Le Sauveur universel",
      description:
        "Le salut est pour tous : Juifs, Samaritains, païens. Le concile de Jérusalem reconnaît que Dieu a donné aux païens l'Esprit sans distinction.",
    },
    {
      type: "Le Juge vivant",
      description:
        "La prédication apostolique annonce que Jésus, ressuscité, est le juge des vivants et des morts (Actes 10:42).",
    },
  ],
};

export const actsKeyPassages: KeyPassage[] = [
  {
    reference: "Actes 1:6-11",
    citation:
      "Eux donc, étant réunis, lui demandèrent : Seigneur, est-ce en ce temps que tu rétabliras le royaume d'Israël ?",
    citation2:
      "Il leur répondit : Ce n'est pas à vous de connaître les temps et les moments que le Père a fixés de sa propre autorité.",
    citation3:
      "Mais vous recevrez une puissance, celle du Saint-Esprit qui sur vous viendra ; et vous serez mes témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre.",
    citation4:
      "Après avoir dit ces paroles, il fut élevé pendant qu'ils le regardaient, et une nuée le déroba à leurs yeux.",
    citation5:
      "Et comme ils avaient les regards fixés vers le ciel pendant qu'il s'en allait, voici, deux hommes vêtus de blanc se trouvèrent à côté d'eux, et dirent : Hommes Galiléens, pourquoi vous arrêtez-vous à regarder au ciel ?",
    citation6:
      "Ce Jésus, qui a été enlevé au ciel du milieu de vous, viendra de la même manière que vous l'avez vu allant au ciel.",
    commentary: `L'Ascension et la promesse de l'Esprit. "Est-ce en ce temps que tu rétabliras le royaume d'Israël ?" - les disciples pensent encore au royaume politique. Jésus répond : ce n'est pas à connaître les temps, mais à être témoins. "Vous recevrez une puissance, celle du Saint-Esprit" - la mission est don de l'Esprit, pas effort humain. "Témoins à Jérusalem, dans toute la Judée, dans la Samarie, et jusqu'aux extrémités de la terre" - le programme géographique d'Actes. L'Ascension exprime le passage du Christ à la gloire. "Ce Jésus... viendra de la même manière" - la promesse du retour.`,
  },
  {
    reference: "Actes 2:1-4",
    citation: "Le jour de la Pentecôte, ils étaient tous ensemble dans le même lieu.",
    citation2:
      "Tout à coup il vint du ciel un bruit comme celui d'un vent impétueux, et il remplit toute la maison où ils étaient assis.",
    citation3:
      "Des langues, semblables à des langues de feu, leur apparurent, séparées les unes des autres, et se posèrent sur chacun d'eux.",
    citation4:
      "Et ils furent tous remplis du Saint-Esprit, et se mirent à parler en d'autres langues, selon que l'Esprit leur donnait de s'exprimer.",
    commentary: `La Pentecôte est la naissance publique de l'Église. Cinquante jours après Pâque, les disciples sont réunis. Le bruit comme un vent, les langues de feu, le parler en langues sont signes de la présence de l'Esprit. Le vent (ruah) en hébreu est aussi Esprit. Les langues de feu évoquent la purification et la prophétie. Le parler en langues permet la communication aux Juifs de toutes les nations présents. La Pentecôte juif célébrait le don de la Loi au Sinaï ; la Pentecôte chrétienne célèbre le don de l'Esprit qui écrit la Loi dans les cœurs. L'Église nait de l'Esprit.`,
  },
  {
    reference: "Actes 2:42-47",
    citation:
      "Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain, et dans les prières.",
    citation2:
      "La crainte s'emparait de tous les âmes, et beaucoup de prodiges et de miracles se faisaient par les apôtres.",
    citation3: "Tous ceux qui croyaient étaient dans le même lieu, et ils avaient tout en commun.",
    citation4:
      "Ils vendaient leurs propriétés et leurs biens, et ils en partageaient le produit entre tous, selon les besoins de chacun.",
    citation5:
      "Ils étaient chaque jour tous ensemble assidus au temple, ils rompaient le pain dans les maisons, et prenaient leur nourriture avec joie et simplicité de cœur,",
    citation6:
      "Louant Dieu, et trouvant grâce auprès de tout le peuple. Et le Seigneur ajoutait chaque jour à l'Église ceux qui étaient sauvés.",
    commentary: `La première communauté chrétienne de Jérusalem modèle l'Église idéale. Quatre piliers : enseignement des apôtres, communion fraternelle, fraction du pain (Eucharistie), prières. "Ils avaient tout en commun" - la mise en commun exprime l'unité et la charité. "Ils vendaient leurs propriétés... selon les besoins de chacun" - le souci des pauvres. "Assidus au temple... rompaient le pain dans les maisons" - l'Église est fidèle à sa racine juive mais développe sa propre liturgie domestique. "Joie et simplicité de cœur" - la qualité de vie communautaire. "Le Seigneur ajoutait chaque jour à l'Église ceux qui étaient sauvés" - la croissance de l'Église est œuvre du Seigneur.`,
  },
];

/* ============================================================================
 *
 * ÉPÎTRES DE PAUL
 *
 * ============================================================================ */

export const romansSummary: BookSummary = {
  book: "Romains",
  testament: "NEW",
  category: "epistle",
  author: "Paul, apôtre",
  period: "Vers 57-58 apr. J.-C.",
  theme: "L'Évangile : la justice de Dieu révélée par la foi, de la condamnation à la gloire",
  outline: [
    "1-4 : L'Évangile et la justification par la foi (condamnation universelle, justification, exemple d'Abraham, espérance)",
    "5-8 : La vie dans l'Esprit (paix avec Dieu, mort au péché, vie dans l'Esprit, relation à la Loi, gloire à venir)",
    "9-11 : Israël et le plan de Dieu (élection d'Israël, rejet provisoire, salut final d'Israël)",
    "12-16 : Exhortations éthiques (sacrifice vivant, autorités, amour, unité, mission de Paul)",
    "16 : Salutations, doxologie",
  ],
};

export const romansReadingNotes: BookReadingNotes = {
  book: "Romains",
  context:
    "Épître aux Romains, la plus complète de Paul, écrite avant son voyage à Rome. Paul n'a pas fondé l'Église de Rome, mais il leur écrit pour présenter son Évangile et solliciter leur soutien pour sa mission en Espagne. Romains est le traité le plus systématique sur la justification par la foi.",
  keyThemes: [
    {
      theme: "La justice de Dieu",
      description:
        "La justice de Dieu est révélée dans l'Évangile : elle justifie le pécheur par la foi, indépendamment des œuvres de la Loi.",
    },
    {
      theme: "La justification par la foi",
      description:
        "L'homme est justifié par la foi, sans œuvres de la Loi. La foi d'Abraham est modèle : il crut à la promesse de Dieu.",
    },
    {
      theme: "La vie dans l'Esprit",
      description:
        "Le chrétien, libéré du péché, vit dans l'Esprit. L'Esprit sanctifie, rend capable d'aimer, et garantit la gloire à venir.",
    },
    {
      theme: "Israël et les païens",
      description:
        "Dieu n'a pas rejeté Israël. L'endurcissement d'Israël est provisoire, pour le salut des païens. Israël sera sauvé.",
    },
    {
      theme: "L'éthique chrétienne",
      description:
        "Le chrétien est un 'sacrifice vivant'. L'amour remplit la Loi. La soumission aux autorités, l'accueil des faibles, l'unité.",
    },
  ],
  theologicalSignificance:
    "Romains est la cathédrale théologique de Paul. Il développe la doctrine du péché (tous sont sous le péché), la justification (justifiés par la foi, gratuitement), la sanctification (vivants dans l'Esprit), l'espérance (la gloire à venir), et le destin d'Israël. Romains 8 est le sommet : \"Rien ne nous séparera de l'amour de Dieu\". Les chapitres 9-11 expriment le mystère d'Israël dans le plan du salut.",
  christologicalTypes: [
    {
      type: "Le Nouvel Adam",
      description:
        "Christ est le nouvel Adam qui, par son obéissance, répare la désobéissance du premier Adam. La grâce abonde là où le péché a abondé.",
    },
    {
      type: "Le Sacrifice d'expiation",
      description: `Dieu a présenté Christ comme sacrifice d'expiation par la foi en son sang. La justice de Dieu est manifestée dans la croix.`,
    },
    {
      type: "Le Vivant",
      description: `Christ est ressuscité pour notre justification. Il siège à la droite de Dieu et intercède pour nous. L'Esprit qui l'a ressuscité habite en nous.`,
    },
    {
      type: "Le Seigneur des vivants et des morts",
      description:
        "Christ est le Seigneur des morts et des vivants. Nous appartenons au Christ, vivants ou morts. Le jugement est par le Christ.",
    },
  ],
};

export const romansKeyPassages: KeyPassage[] = [
  {
    reference: "Romains 1:16-17",
    citation:
      "Car je n'ai point honte de l'Évangile : c'est une puissance de Dieu pour le salut de quiconque croit, du Juif d'abord, puis du Grec.",
    citation2:
      "Car en lui la justice de Dieu est révélée par la foi et pour la foi, selon qu'il est écrit : Le juste vivra par la foi.",
    commentary: `La thèse de Romains. "Je n'ai point honte de l'Évangile" - Paul affirme sa fierté dans l'Évangile, alors que certains le considèrent comme folie (1 Corinthiens 1:23). "Puissance de Dieu pour le salut" - l'Évangile n'est pas seulement message, mais puissance de salut pour qui croit. "Du Juif d'abord, puis du Grec" - l'Évangile est pour tous, mais avec un ordre : le salut vient des Juifs aux païens. "La justice de Dieu est révélée par la foi" - la justice de Dieu est don qui justifie, pas qualité humaine. "Le juste vivra par la foi" - citation d'Habakuk 2:4, devenue slogan de la Réforme. La foi est le moyen de la justice.`,
  },
  {
    reference: "Romains 3:21-26",
    citation:
      "Mais maintenant, sans la loi, la justice de Dieu a été manifestée, témoin la loi et les prophètes.",
    citation2:
      "Justice de Dieu par la foi en Jésus-Christ pour tous ceux qui croient. Il n'y a point de distinction.",
    citation3: "Car tous ont péché et sont privés de la gloire de Dieu",
    citation4:
      "Et ils sont justifiés gratuitement par sa grâce, par le moyen de la rédemption qui est en Jésus-Christ.",
    citation5:
      "C'est lui que Dieu a destiné, par son sang, à être, pour ceux qui croiraient, victime propitiatoire, afin de montrer sa justice, parce qu'il avait laissé impunis les péchés commis auparavant,",
    citation6:
      "Durant le temps de sa patience, afin de montrer sa justice dans le temps présent, en sorte qu'il est juste, et qu'il justifie celui qui a la foi en Jésus.",
    commentary: `Le cœur de la doctrine de la justification. "Sans la loi, la justice de Dieu a été manifestée" - la justice n'est pas par la Loi, mais par la foi. "Tous ont péché et sont privés de la gloire de Dieu" - l'universalité du péché et de la privation de la gloire divine. "Justifiés gratuitement par sa grâce" - la justification est don gratuit, pas mérite. "Victime propitiatoire" (hilastérion) - Christ est le sacrifice d'expiation qui apaise la colère de Dieu. "Il est juste, et qu'il justifie celui qui a la foi en Jésus" - Dieu peut justifier les pécheurs parce que Christ a porté la peine. La justice de Dieu est à la fois justice contre le péché et justification du pécheur.`,
  },
];

/* ============================================================================
 *
 * 1 CORINTHIENS
 *
 * ============================================================================ */

export const firstCorinthiansSummary: BookSummary = {
  book: "1 Corinthiens",
  testament: "NEW",
  category: "epistle",
  author: "Paul, apôtre",
  period: "Vers 53-55 apr. J.-C.",
  theme: "L'unité de l'Église amid les divisions, la sagesse de la croix, la vie chrétienne",
  outline: [
    "1-4 : Divisions et sagesse (divisions de l'Église, sagesse de la croix, fondement apostolique, jugement des ministères)",
    "5-6 : Problèmes moraux (immoralité, procès, pureté sexuelle)",
    "7 : Mariage et célibat",
    "8-10 : Viandes sacrifiées aux idoles, liberté et conscience, participation au repas du Seigneur",
    "11 : Couverture et Cène",
    "12-14 : Charismes et amour (diversité des dons, l'amour, prophétie et langues, résurrection)",
    "15-16 : Résurrection, collecte, salutations",
  ],
};

export const firstCorinthiansReadingNotes: BookReadingNotes = {
  book: "1 Corinthiens",
  context:
    "Paul écrit à l'Église de Corinthe qu'il a fondée, confrontée à de nombreux problèmes : divisions, immoralité, questions sur le mariage, les viandes sacrifiées, les dons spirituels, la résurrection. Corinthe est une ville grecque cosmopolite, l'Église composée majoritairement de païens convertis.",
  keyThemes: [
    {
      theme: "La sagesse de la croix",
      description:
        "La sagesse humaine est folie, la folie de la croix est sagesse. Christ crucifié est puissance et sagesse de Dieu.",
    },
    {
      theme: "L'unité de l'Église",
      description:
        "Les divisions autour des leaders (Paul, Apollos, Pierre) sont contraires à l'unité du corps du Christ.",
    },
    {
      theme: "La liberté et la charité",
      description:
        "Le chrétien est libre (viandes sacrifiées) mais doit limiter sa liberté par la charité pour ne pas scandaliser.",
    },
    {
      theme: "Les dons spirituels",
      description:
        "Diversité des dons mais unité de l'Esprit. L'amour est supérieur à tous les dons. Le don doit édifier.",
    },
    {
      theme: "La résurrection",
      description:
        "La résurrection du Christ est fondement de la foi chrétienne. La résurrection des morts est certaine et corps spirituel.",
    },
  ],
  theologicalSignificance:
    "1 Corinthiens contient certains des textes les plus importants du Nouveau Testament : l'hymne à la charité (ch. 13), la description de l'Eucharistie (ch. 11), le chapitre sur la résurrection (ch. 15). Paul corrige les abus (divisions, immoralité, abus des dons) en rappelant la sagesse de la croix et la suprématie de l'amour.",
  christologicalTypes: [
    {
      type: "Le Christ crucifié",
      description: `Christ crucifié, folie pour les Juifs (scandale) et folie pour les Grecs (stupidité), mais pour ceux qui sont appelés, Christ est puissance et sagesse de Dieu.`,
    },
    {
      type: "Le Fondement",
      description:
        "Personne ne peut poser d'autre fondement que celui qui a été posé, Jésus-Christ. L'Église est bâtie sur ce fondement.",
    },
    {
      type: "Le Chef du corps",
      description:
        "L'Église est le corps du Christ. Les membres sont divers mais un seul corps. Christ est la tête.",
    },
    {
      type: "Le Premier-né d'entre les morts",
      description:
        "Christ est ressuscité, prémices de ceux qui se sont endormis. Sa résurrection garantit la nôtre.",
    },
  ],
};

export const firstCorinthiansKeyPassages: KeyPassage[] = [
  {
    reference: "1 Corinthiens 1:10-17",
    citation:
      "Je vous exhorte donc, frères, par le nom de notre Seigneur Jésus-Christ, à tenir tous un même langage, et à ne point avoir de divisions parmi vous, mais à être parfaitement unis dans un même esprit et dans un même sentiment.",
    citation2:
      "Car, mes frères, j'ai appris, par ceux de la maison de Chloé, qu'il y a des disputes parmi vous.",
    citation3:
      "Je parle à ceci, que chacun de vous dit : Moi, je suis de Paul ! et moi, d'Apollos ! et moi, de Céphas ! et moi, de Christ !",
    citation4:
      "Christ est-il divisé ? Paul a-t-il été crucifié pour vous ? Est-ce au nom de Paul que vous avez été baptisés ?",
    commentary: `Paul s'attaque aux divisions de Corinthe. Les Corinthiens se réclament de différents leaders : Paul, Apollos, Céphas (Pierre), Christ. "Christ est-il divisé ?" - les divisions dans l'Église sont contradiction du corps du Christ. "Paul a-t-il été crucifié pour vous ?" - Paul n'est pas le sauveur, Christ seul. "Est-ce au nom de Paul que vous avez été baptisés ?" - le baptême est au nom du Christ, pas des apôtres. Paul se réjouit de n'avoir baptisé que quelques-uns pour éviter que quiconque se réclame de lui. "Christ ne m'a pas envoyé pour baptiser, mais pour annoncer l'Évangile" - la priorité de Paul est la prédication. "Non pas avec la sagesse de la parole, afin que la croix de Christ ne soit pas rendue vaine" - la prédication de Paul est simple (croix) pour que la puissance de Dieu soit manifeste, pas l'éloquence humaine.`,
  },
  {
    reference: "1 Corinthiens 13:1-13",
    citation:
      "Quand je parlerais les langues des hommes et des anges, si je n'ai pas la charité, je suis un airain qui résonne ou une cymbale qui retentit.",
    citation2:
      "Quand j'aurais le don de prophétie, la science de tous les mystères et toute la connaissance, quand j'aurais même toute la foi jusqu'à transporter les montagnes, si je n'ai pas la charité, je ne suis rien.",
    citation3:
      "Quand je distribuerais tous mes biens pour la nourriture des pauvres, quand je livrerais même mon corps pour être brûlé, si je n'ai pas la charité, cela ne me sert de rien.",
    citation4:
      "La charité est patiente, elle est pleine de bonté ; la charité n'est point envieuse, la charité ne se vante point, elle ne s'enfle pas d'orgueil,",
    citation5:
      "Elle ne fait rien de malhonnête, elle ne cherche point son intérêt, elle ne s'irrite point, elle ne médite pas le mal,",
    citation6: "Elle ne se réjouit point de l'injustice, mais elle se réjouit de la vérité,",
    citation7: "Elle excuse tout, elle croit tout, elle espère tout, elle supporte tout.",
    citation8:
      "La charité ne périt jamais. Les prophéties prendront fin, les langues cesseront, la connaissance disparaîtra.",
    citation9: "Car nous connaissons en partie, et nous prophétisons en partie,",
    citation10: "Mais quand ce qui est parfait sera venu, ce qui est partiel disparaîtra.",
    citation11:
      "Lorsque j'étais enfant, je parlais comme un enfant, je pensais comme un enfant, je raisonnais comme un enfant ; lorsque je suis devenu homme, j'ai fait disparaître ce qui était de l'enfant.",
    citation12:
      "Aujourd'hui nous voyons au moyen d'un miroir, d'une manière obscure, mais alors nous verrons face à face ; aujourd'hui je connais en partie, mais alors je connaîtrai comme j'ai été connu.",
    citation13:
      "Maintenant donc ces trois choses demeurent : la foi, l'espérance, la charité ; mais la plus grande des trois, c'est la charité.",
    commentary: `L'hymne à la charité (agapè) est l'un des textes les plus connus du Nouveau Testament. "Quand je parlerais les langues... si je n'ai pas la charité, je suis un airain qui résonne" - les dons spirituels sans charité sont vains. "La charité est patiente, pleine de bonté" - les qualités positives de la charité. "La charité n'est point envieuse, ne se vante point, ne s'enfle pas d'orgueil" - les négations (ce que la charité n'est pas). "Elle ne cherche point son intérêt, elle ne s'irrite point, elle ne médite pas le mal" - la charité est désintéressée, sans colère, sans rancune. "Elle excuse tout, croit tout, espère tout, supporte tout" - la charité croit, espère et endure tout. "La charité ne périt jamais" - la charité est éternelle, contrairement aux dons temporaires (prophéties, langues, connaissance). "Maintenant donc ces trois choses demeurent : la foi, l'espérance, la charité ; mais la plus grande des trois, c'est la charité" - la foi et l'espérance cesseront (quand nous verrons face à face), mais la charité demeure éternellement.`,
  },
  {
    reference: "1 Corinthiens 15:1-4",
    citation:
      "Je vous rappelle, frères, l'Évangile que je vous ai annoncé, que vous avez reçu, dans lequel vous avez persévéré,",
    citation2:
      "Et par lequel vous êtes sauvés, si vous le retenez tel que je vous l'ai annoncé ; autrement, vous auriez cru en vain.",
    citation3:
      "Je vous ai transmis, avant tout, ce que j'ai aussi reçu : Christ est mort pour nos péchés, selon les Écritures ;",
    citation4: "Il a été enseveli, et il est ressuscité le troisième jour, selon les Écritures.",
    commentary: `Paul rappelle le kérygme (annonce) de l'Évangile qu'il a transmis aux Corinthiens. "L'Évangile... que vous avez reçu, dans lequel vous avez persévéré" - la foi est réception et persévérance dans l'Évangile. "Par lequel vous êtes sauvés, si vous le retenez" - le salut est par l'Évangile, à condition de le retenir. "Christ est mort pour nos péchés, selon les Écritures" - la mort de Christ est expiation, accomplissement des Écritures (Ésaïe 53, Psaume 22). "Il a été enseveli, et il est ressuscité le troisième jour, selon les Écritures" - l'ensevelissement confirme la mort réelle ; la résurrection le troisième jour est selon les Écritures (Osée 6:2, Jonas). Ce kérygme quadriparti (mort, ensevelissement, résurrection, selon les Écritures) est le fondement de la foi chrétienne. "Autrement, vous auriez cru en vain" - la foi en ce kérygme est essentielle ; sans lui, la foi est vaine.`,
  },
];
