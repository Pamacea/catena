/**
 *
 * Citations Magistérielles — Extraits des notes du vault
 *
 * Citations clés du Magistère, des Pères de l'Église et de saint Thomas,
 * organisées par thème théologique.
 * Sources : Dogme, Discipline, Droit Canonique, Cheat-Sheets.
 */

// ===== TYPES =====

export enum CitationTheme {
  DIEU = "DIEU",
  TRINITE = "TRINITE",
  INCARNATION = "INCARNATION",
  CREATION = "CREATION",
  ANGES = "ANGES",
  HOMME = "HOMME",
  PECHÉ_ORIGINAL = "PECHÉ_ORIGINAL",
  GRÂCE = "GRÂCE",
  EGLISE = "EGLISE",
  SACREMENTS = "SACREMENTS",
  EUCHARISTIE = "EUCHARISTIE",
  PÉNITENCE = "PÉNITENCE",
  MARIAGE = "MARIAGE",
  FINS_DERNIÈRES = "FINS_DERNIÈRES",
  MORALE = "MORALE",
  ŒCUMÉNISME = "ŒCUMÉNISME",
  CRISE = "CRISE",
  DROIT_CANONIQUE = "DROIT_CANONIQUE",
}

export enum CitationSource {
  CONCILE = "CONCILE",
  PAPE = "PAPE",
  PERE_EGLISE = "PERE_EGLISE",
  SAINT_THOMAS = "SAINT_THOMAS",
  ECRITURE = "ECRITURE",
  CATECHISME = "CATECHISME",
}

export interface Citation {
  slug: string;
  auteur: string;
  document: string;
  annee: number;
  type: CitationSource;
  theme: CitationTheme;
  contenu: string;
  latin?: string;
  reference?: string; // Référence ST, concile, etc.
  application?: string; // Application pratique ou théologique
}

// ===== DIEU — Existence et Attributs =====

export const citationsDieu: Citation[] = [
  {
    slug: "dei-filius-raison",
    auteur: "Concile Vatican I",
    document: "Dei Filius",
    annee: 1870,
    type: CitationSource.CONCILE,
    theme: CitationTheme.DIEU,
    contenu:
      "La raison peut connaître Dieu avec certitude par les choses créées, grâce à la lumière naturelle de l'intelligence.",
    latin:
      "Deus... rerum omnium creator et dominus... ratione naturalis lumine e rebus creatis certo cognosci potest.",
    application:
      "Les 5 Voies de saint Thomas démontrent philosophiquement l'existence de Dieu — c'est un préambule de la foi.",
  },
  {
    slug: "ex-3-14",
    auteur: "Écriture Sainte",
    document: "Exode 3, 14",
    annee: -1250,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.DIEU,
    contenu: "Dieu dit à Moïse : « Je suis Celui qui suis. »",
    latin: "Ego sum qui sum.",
    reference: "ST Ia, q. 13, a. 11",
    application:
      "Le nom divin révèle l'Être nécessaire — Dieu est l'Être dont l'essence est d'exister.",
  },
  {
    slug: "latran-iv-dieu",
    auteur: "Concile de Latran IV",
    document: "Firmiter",
    annee: 1215,
    type: CitationSource.CONCILE,
    theme: CitationTheme.DIEU,
    contenu:
      "Dieu est l'être unique, universel, parfait, immuable, éternel, tout-puissant. Son essence est d'exister.",
    latin:
      "Deus... una est... universa perfecta, immutabilis, illimitata, infinita, omnipotens. Cuius essentia est esse.",
    reference: "ST Ia, q. 3-13",
  },
  {
    slug: "i-tm-3-15",
    auteur: "Écriture Sainte",
    document: "1 Timothée 3, 15",
    annee: 65,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.DIEU,
    contenu:
      "La maison de Dieu, qui est l'Église du Dieu vivant, la colonne et le soutien de la vérité.",
    application:
      "L'Église est le pilier de la vérité — elle ne peut enseigner l'erreur.",
  },
];

// ===== TRINITÉ =====

export const citationsTrinite: Citation[] = [
  {
    slug: "nicée-consubstantiel",
    auteur: "Concile de Nicée I",
    document: "Symbole de Nicée",
    annee: 325,
    type: CitationSource.CONCILE,
    theme: CitationTheme.TRINITE,
    contenu:
      "Nous croyons en un seul Seigneur Jésus-Christ, Fils unique de Dieu, engendré du Père, c'est-à-dire de la substance du Père, Dieu de Dieu, lumière de lumière, vrai Dieu de vrai Dieu, engendré non fait, consubstantiel au Père.",
    latin:
      "Deum verum de Deo vero, genitum non factum, consubstantialem Patri.",
    application:
      "Le Fils est consubstantiel au Père — il est Dieu véritable, non une créature.",
  },
  {
    slug: "constantinople-i-esprit",
    auteur: "Concile de Constantinople I",
    document: "Symbole de Nicée-Constantinople",
    annee: 381,
    type: CitationSource.CONCILE,
    theme: CitationTheme.TRINITE,
    contenu:
      "Nous croyons aussi au Saint-Esprit, Seigneur qui donne la vie, qui procède du Père, qui avec le Père et le Fils est ensemble adoré et glorifié.",
    latin:
      "Et in Spiritum Sanctum, Dominum et vivificantem: qui ex Patre procedit. Qui cum Patre et Filio simul adoratur et conglorificatur.",
  },
  {
    slug: "quicumque-personnes",
    auteur: "Symbole Quicumque (Athanasien)",
    document: "Quicumque",
    annee: 500,
    type: CitationSource.CONCILE,
    theme: CitationTheme.TRINITE,
    contenu:
      "Sans confondre les Personnes, sans séparer la substance. Car autre est la Personne du Père, autre celle du Fils, autre celle du Saint-Esprit.",
    latin:
      "Alia est enim persona Patris, alia Filii, alia Spiritus Sancti. Sed Patris et Filii et Spiritus Sancti una est divinitas.",
  },
];

// ===== INCARNATION =====

export const citationsIncarnation: Citation[] = [
  {
    slug: "jn-1-14",
    auteur: "Écriture Sainte",
    document: "Jean 1, 14",
    annee: 100,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.INCARNATION,
    contenu: "Le Verbe s'est fait chair, et il a habité parmi nous.",
    latin: "Et Verbum caro factum est, et habitavit in nobis.",
  },
  {
    slug: "ephese-theotokos",
    auteur: "Concile d'Éphèse",
    document: "Canon 1",
    annee: 431,
    type: CitationSource.CONCILE,
    theme: CitationTheme.INCARNATION,
    contenu:
      "Si quelqu'un ne confesse pas qu'Emmanuel est vraiment Dieu, et que par conséquent la Sainte Vierge a enfanté selon la chair le Dieu Verbe : qu'il soit anathème.",
    latin:
      "Si quis non confitetur, quod Emmanuel vere Deus est, et propterea Sancta Deipara Virgo peperit secundum carnem Deum Verbum: anathema sit.",
  },
  {
    slug: "chalcedoine-deux-natures",
    auteur: "Concile de Chalcédoine",
    document: "Définition de foi",
    annee: 451,
    type: CitationSource.CONCILE,
    theme: CitationTheme.INCARNATION,
    contenu:
      "Nous confessons un seul et même Christ, Fils, Seigneur, reconnu en deux natures, sans confusion, sans changement, sans division, sans séparation.",
    latin:
      "Confitemur unum eumdemque Christum, Filium, Dominum, in duabus naturis inconfuse, immutabiliter, indivise, inseparabiliter agnoscendum.",
  },
  {
    slug: "constantinople-iii-deux-volontes",
    auteur: "Concile de Constantinople III",
    document: "Définition sur les deux volontés",
    annee: 681,
    type: CitationSource.CONCILE,
    theme: CitationTheme.INCARNATION,
    contenu:
      "Nous confessons deux volontés naturelles et deux opérations naturelles dans le Christ, sans séparation, sans changement, sans division, sans confusion.",
    latin:
      "Duæ ergo in eo voluntates naturales, et duæ operationes naturales, sine separatione, sine mutatione, sine divisione, sine confusione.",
  },
  {
    slug: "leon-i-tome",
    auteur: "Pape Léon I",
    document: "Tome à Flavien",
    annee: 449,
    type: CitationSource.PAPE,
    theme: CitationTheme.INCARNATION,
    contenu:
      "La forme de Dieu n'a pas supprimé la forme de serviteur, mais elle l'a assumée et élevée. Chaque nature opère ce qui lui est propre, en communion avec l'autre.",
    latin:
      "Agit enim in utroque forma cum alterius communione, quod proprium est: Verbo scilicet operante quod Verbi est, et carne exsequente quod carnis est.",
  },
];

// ===== CRÉATION =====

export const citationsCreation: Citation[] = [
  {
    slug: "latran-iv-creation",
    auteur: "Concile de Latran IV",
    document: "Firmiter",
    annee: 1215,
    type: CitationSource.CONCILE,
    theme: CitationTheme.CREATION,
    contenu:
      "Dieu a créé de rien l'une et l'autre créature, spirituelle et corporelle : les anges et le monde, puis l'homme composé d'âme et de corps.",
    latin:
      "Deus... creator omnium visibilium et invisibilium, spiritualium et corporalium: qui sua omnipotenti virtute simul ab initio temporis utramque de nihilo condidit creaturam, spiritualem et corporalem, angelicam videlicet et mundanam.",
  },
  {
    slug: "dei-filius-commencement",
    auteur: "Concile Vatican I",
    document: "Dei Filius",
    annee: 1870,
    type: CitationSource.CONCILE,
    theme: CitationTheme.CREATION,
    contenu:
      "Le monde a eu un commencement. Dieu a créé toutes choses de rien, par un acte libre de sa volonté.",
    application:
      "Le monde n'est ni éternel ni nécessaire — il existe par la libre volonté de Dieu.",
  },
  {
    slug: "heb-1-3",
    auteur: "Écriture Sainte",
    document: "Hébreux 1, 3",
    annee: 65,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.CREATION,
    contenu:
      "Il soutient tout par sa parole puissante. Après avoir opéré la purification des péchés, il s'est assis à la droite de la Majesté dans les hauteurs.",
    application:
      "La Providence divine maintient l'univers dans l'être à chaque instant.",
  },
];

// ===== ANGES =====

export const citationsAnges: Citation[] = [
  {
    slug: "st-anges-nature",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.ANGES,
    contenu:
      "Les anges sont des substances intellectuelles séparées de la matière. Chaque ange est une espèce à lui seul.",
    latin:
      "Angelus est substantia intellectualis separata a materia. Quilibet angelus est species per se.",
    reference: "ST Ia, q. 50, a. 2-4",
  },
  {
    slug: "st-anges-peche",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.ANGES,
    contenu:
      "Le péché des démons ne peut être pardonné, parce que leur nature ne comporte ni repentir, ni conversion.",
    latin:
      "Peccatum dæmonum non potest remitti, quia eorum natura non habet pœnitentiam nec conversionem.",
    reference: "ST Ia, q. 64, a. 2",
  },
  {
    slug: "mt-18-10",
    auteur: "Écriture Sainte",
    document: "Matthieu 18, 10",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.ANGES,
    contenu:
      "Leurs anges voient toujours la face de mon Père qui est dans les cieux.",
    application:
      "Chaque homme a un ange gardien — dogme de foi.",
  },
];

// ===== HOMME — Âme et Corps =====

export const citationsHomme: Citation[] = [
  {
    slug: "viennne-ame-forme",
    auteur: "Concile de Vienne",
    document: "Fidei Catholicae",
    annee: 1312,
    type: CitationSource.CONCILE,
    theme: CitationTheme.HOMME,
    contenu:
      "L'âme rationnelle est véritablement, par elle-même et essentiellement, la forme du corps.",
    latin:
      "Anima rationalis... est vere et per se et essentialiter corporis humani forma.",
    reference: "ST Ia, q. 76, a. 1",
  },
  {
    slug: "latran-v-ame-mortelle",
    auteur: "Concile du Latran V",
    document: "Bulle Apostolici Regiminis",
    annee: 1513,
    type: CitationSource.CONCILE,
    theme: CitationTheme.HOMME,
    contenu:
      "L'âme rationnelle est immortelle, perpétuelle, et ne peut ni mourir ni périr avec le corps. Chaque âme humaine est créée directement par Dieu.",
    latin:
      "Anima rationalis est immortalis, perpetua, neque cum corpore moritur aut perit.",
  },
  {
    slug: "st-image-dei",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.HOMME,
    contenu:
      "L'homme est à l'image de Dieu par son intelligence et sa volonté. L'image de Dieu est dans l'âme selon l'acte, non seulement selon la puissance.",
    reference: "ST Ia, q. 93, a. 4",
  },
];

// ===== PÉCHÉ ORIGINEL =====

export const citationsPecheOriginel: Citation[] = [
  {
    slug: "trente-peche-originel",
    auteur: "Concile de Trente",
    document: "Session V, Décret sur le péché originel",
    annee: 1546,
    type: CitationSource.CONCILE,
    theme: CitationTheme.PECHÉ_ORIGINAL,
    contenu:
      "Si quelqu'un ne confesse pas que le premier Adam a transgressé le commandement de Dieu au Paradis et qu'il a perdu la sainteté et la justice dans laquelle il avait été établi : qu'il soit anathème.",
    latin:
      "Si quis non confitetur, primum Adam praeceptum Dei in paradiso transgressisse, sanctitatem et justitiam in qua constitutus fuerat perdidisse: anathema sit.",
  },
  {
    slug: "trente-transmission",
    auteur: "Concile de Trente",
    document: "Session V, Canon 2",
    annee: 1546,
    type: CitationSource.CONCILE,
    theme: CitationTheme.PECHÉ_ORIGINAL,
    contenu:
      "Si quelqu'un dit que la prévarication d'Adam a nui à lui seul et non à sa postérité, ou que la mort et les peines du corps sont seulement les conséquences du péché et non le péché lui-même : qu'il soit anathème.",
    latin:
      "Si quis dicit, Adæ prævaricationem sibi soli et non ejus posteritati nocuisse; aut mortem et pœnas corporales non ex peccato sed ex natura esse: anathema sit.",
  },
  {
    slug: "rm-5-12",
    auteur: "Écriture Sainte",
    document: "Romains 5, 12",
    annee: 58,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.PECHÉ_ORIGINAL,
    contenu:
      "Par un seul homme le péché est entré dans le monde, et par le péché la mort, et ainsi la mort a passé sur tous les hommes, parce que tous ont péché.",
  },
  {
    slug: "orange-original",
    auteur: "Concile d'Orange II",
    document: "Canon 2",
    annee: 529,
    type: CitationSource.CONCILE,
    theme: CitationTheme.PECHÉ_ORIGINAL,
    contenu:
      "Le péché du premier homme a tellement blessé la nature que nul n'est exempté de la concupiscence de la chair.",
    latin:
      "Peccatum primi hominis ita naturam vulneravit ut nemo a concupiscentia carnis excipiatur.",
    application:
      "Le péché originel a blessé la nature humaine : ignorance, concupiscence, souffrance, mort.",
  },
];

// ===== GRÂCE =====

export const citationsGrace: Citation[] = [
  {
    slug: "jn-15-5",
    auteur: "Écriture Sainte",
    document: "Jean 15, 5",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.GRÂCE,
    contenu: "Sans moi, vous ne pouvez rien faire.",
    application:
      "La grâce est nécessaire de nécessité de moyen pour tout acte surnaturel.",
  },
  {
    slug: "trente-justification",
    auteur: "Concile de Trente",
    document: "Session VI, Chapitre VII",
    annee: 1547,
    type: CitationSource.CONCILE,
    theme: CitationTheme.GRÂCE,
    contenu:
      "La justification n'est pas seulement la rémission des péchés, mais aussi la sanctification et le renouvellement de l'homme intérieur par la grâce.",
    latin:
      "Justificatio non est sola peccatorum remissio, sed et sanctificatio et renovatio hominis interioris per voluntariam susceptionem gratiæ.",
  },
  {
    slug: "trente-grace-opere-operato",
    auteur: "Concile de Trente",
    document: "Session VII, Canon 8",
    annee: 1547,
    type: CitationSource.CONCILE,
    theme: CitationTheme.GRÂCE,
    contenu:
      "Si quelqu'un dit que par les sacrements de la Nouvelle Loi la grâce n'est pas conférée ex opere operato, mais que la seule foi en la promesse divine suffit : qu'il soit anathème.",
    latin:
      "Si quis dixerit, per ipsa novæ legis sacramenta ex opere operato non conferri gratiam, sed solam fidem divinæ promissionis ad gratiam consequendam sufficere: anathema sit.",
    reference: "ST IIIa, q. 62, a. 1",
  },
  {
    slug: "trente-libre-arbitre",
    auteur: "Concile de Trente",
    document: "Session VI, Chapitre V",
    annee: 1547,
    type: CitationSource.CONCILE,
    theme: CitationTheme.GRÂCE,
    contenu:
      "Si quelqu'un dit que le libre arbitre, mû et excité par Dieu, ne coopère en rien en consentant à Dieu qui l'excite et l'appelle : qu'il soit anathème.",
    latin:
      "Si quis dixerit, liberum hominis arbitrium a Deo motum et excitatum nihil cooperari assentiendo Deo excitanti atque vocanti: anathema sit.",
  },
  {
    slug: "2-p-1-4",
    auteur: "Écriture Sainte",
    document: "2 Pierre 1, 4",
    annee: 65,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.GRÂCE,
    contenu:
      "Devenez participants de la nature divine.",
    application:
      "La grâce sanctifiante divinise l'âme — elle est un habitus surnaturel.",
  },
  {
    slug: "orange-grace-initium",
    auteur: "Concile d'Orange II",
    document: "Canon 5",
    annee: 529,
    type: CitationSource.CONCILE,
    theme: CitationTheme.GRÂCE,
    contenu:
      "Si quelqu'un dit que l'initium fidei, et la foi elle-même, n'est pas un don gratuit de Dieu mais vient de notre nature : qu'il soit anathème.",
    latin:
      "Si quis dicit, quod initium fidei, et ipsa credulitas, non gratis hominis donum est, sed ex natura nobis est: anathema sit.",
    application:
      "Contre le semi-pélagianisme — même l'initium fidei vient de la grâce.",
  },
];

// ===== ÉGLISE =====

export const citationsEglise: Citation[] = [
  {
    slug: "mt-16-18",
    auteur: "Écriture Sainte",
    document: "Matthieu 16, 18",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.EGLISE,
    contenu:
      "Tu es Pierre, et sur cette pierre je bâtirai mon Église, et les portes de l'enfer ne prévaudront point contre elle.",
    application:
      "L'Église est fondée sur Pierre — elle est indéfectible.",
  },
  {
    slug: "pastor-aeternus-primatie",
    auteur: "Concile Vatican I",
    document: "Pastor Æternus",
    annee: 1870,
    type: CitationSource.CONCILE,
    theme: CitationTheme.EGLISE,
    contenu:
      "Le Pontife Romain possède la primauté de juridiction sur toute l'Église, non seulement dans les choses qui concernent la foi et les mœurs, mais aussi dans la discipline et le gouvernement de l'Église.",
    latin:
      "Romanum Pontifex primatum jurisdictionis in universam Ecclesiam habet... tam in rebus quae ad fidem et mores, quam in iis quae ad disciplinam et regimen Ecclesiae pertinent.",
  },
  {
    slug: "pastor-aeternus-infaillibilite",
    auteur: "Concile Vatican I",
    document: "Pastor Æternus",
    annee: 1870,
    type: CitationSource.CONCILE,
    theme: CitationTheme.EGLISE,
    contenu:
      "Le Pontife Romain, lorsqu'il parle ex cathedra, jouit de cette infaillibilité dont le divin Rédempteur a voulu que fût pourvue son Église.",
    latin:
      "Romanus Pontifex, cum ex cathedra loquitur, ea definire infallibilis est in fide et moribus.",
  },
  {
    slug: "satis-cognitum-unite",
    auteur: "Pape Léon XIII",
    document: "Satis Cognitum",
    annee: 1896,
    type: CitationSource.PAPE,
    theme: CitationTheme.EGLISE,
    contenu:
      "L'unité de l'Église est nécessaire et absolue. Celui qui n'est pas avec l'Église est contre le Christ.",
    application:
      "L'unité de l'Église ne peut être réalisée que par le retour des séparés à l'Église catholique.",
  },
  {
    slug: "mystici-corporis",
    auteur: "Pape Pie XII",
    document: "Mystici Corporis",
    annee: 1943,
    type: CitationSource.PAPE,
    theme: CitationTheme.EGLISE,
    contenu:
      "L'Église catholique est le Corps mystique du Christ. Le Corps mystique et l'Église catholique sont une seule et même chose.",
    application:
      "L'Église visible est le Corps mystique — il n'y a pas de séparation entre les deux.",
  },
];

// ===== SACREMENTS =====

export const citationsSacrements: Citation[] = [
  {
    slug: "trente-sept-sacrements",
    auteur: "Concile de Trente",
    document: "Session VII, Canon 1",
    annee: 1547,
    type: CitationSource.CONCILE,
    theme: CitationTheme.SACREMENTS,
    contenu:
      "Si quelqu'un dit que les sacrements de la Nouvelle Loi ne sont pas tous institués par Notre-Seigneur Jésus-Christ, ou qu'il y en a plus ou moins que sept : qu'il soit anathème.",
    latin:
      "Si quis dixerit, sacramenta novæ legis non omnia a Christo Domino nostro instituta; aut esse plura vel pauciora quam septem: anathema sit.",
  },
  {
    slug: "trente-sacrements-grace",
    auteur: "Concile de Trente",
    document: "Session VII, Canon 6",
    annee: 1547,
    type: CitationSource.CONCILE,
    theme: CitationTheme.SACREMENTS,
    contenu:
      "Si quelqu'un dit que les sacrements de la Nouvelle Loi ne contiennent pas la grâce qu'ils signifient, ou qu'ils ne confèrent pas la grâce à ceux qui ne mettent pas obstacle : qu'il soit anathème.",
    latin:
      "Si quis dixerit, sacramenta novæ legis non continere gratiam, quam significant; aut non conferre illam ipsam his, qui non ponant obicem: anathema sit.",
    reference: "ST IIIa, q. 62, a. 1",
  },
  {
    slug: "florence-sacrements",
    auteur: "Concile de Florence",
    document: "Decretum pro Armenis",
    annee: 1439,
    type: CitationSource.CONCILE,
    theme: CitationTheme.SACREMENTS,
    contenu:
      "Les sacrements de l'Église sont sept : baptême, confirmation, eucharistie, pénitence, onction des malades, ordre et mariage.",
    application:
      "Liste définitive des sept sacrements — confirmée par Trente.",
  },
  {
    slug: "st-causalite-instrumentale",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.SACREMENTS,
    contenu:
      "Les sacrements sont des causes instrumentales de la grâce. L'instrument produit un effet qui dépasse sa propre nature, sous l'impulsion de la cause principale (le Christ).",
    reference: "ST IIIa, q. 62, a. 1-5",
    application:
      "Le sacrement opère ex opere operato — par le fait même de l'accomplissement du rite, non par la dévotion du ministre ou du sujet.",
  },
];

// ===== EUCHARISTIE =====

export const citationsEucharistie: Citation[] = [
  {
    slug: "trente-transsubstantiation",
    auteur: "Concile de Trente",
    document: "Session XIII, Chapitre IV",
    annee: 1551,
    type: CitationSource.CONCILE,
    theme: CitationTheme.EUCHARISTIE,
    contenu:
      "Par la consécration du pain et du vin, il s'opère un changement de toute la substance du pain en la substance du corps du Christ, et de toute la substance du vin en la substance de son sang. Ce changement a été convenablement appelé transsubstantiation.",
    latin:
      "Per consecrationem panis et vini, fit conversio totius substantiæ panis in corpus Christi, et totius substantiæ vini in sanguinem. Quæ conversio convenienter et proprie a sancta catholica ecclesia transsubstantiatio appellatur.",
  },
  {
    slug: "trente-presence-reelle",
    auteur: "Concile de Trente",
    document: "Session XIII, Canon 1",
    annee: 1551,
    type: CitationSource.CONCILE,
    theme: CitationTheme.EUCHARISTIE,
    contenu:
      "Si quelqu'un dit que dans le très saint sacrement de l'Eucharistie il n'y a pas le vrai, réel et substantiel corps et sang du Christ : qu'il soit anathème.",
    latin:
      "Si quis dixerit, in sanctissimo Eucharistiæ sacramento non esse veram, realem, et substantialem corporis et sanguinis Domini nostri: anathema sit.",
  },
  {
    slug: "jn-6-55",
    auteur: "Écriture Sainte",
    document: "Jean 6, 55",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.EUCHARISTIE,
    contenu: "Ma chair est vraiment une nourriture, et mon sang est vraiment un breuvage.",
  },
  {
    slug: "trente-sacrifice-messe",
    auteur: "Concile de Trente",
    document: "Session XXII, Chapitre II",
    annee: 1562,
    type: CitationSource.CONCILE,
    theme: CitationTheme.EUCHARISTIE,
    contenu:
      "La Messe est un véritable sacrifice propitiatoire, non une simple commémoration du sacrifice de la Croix.",
    latin:
      "Missæ sacrificium est vere propitiatorium, non sola commemoratio sacrificii crucis.",
  },
];

// ===== PÉNITENCE =====

export const citationsPenitence: Citation[] = [
  {
    slug: "jn-20-23",
    auteur: "Écriture Sainte",
    document: "Jean 20, 23",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.PÉNITENCE,
    contenu:
      "Ceux à qui vous remettrez les péchés, ils leur seront remis ; et ceux à qui vous les retiendrez, ils leur seront retenus.",
  },
  {
    slug: "trente-contrition",
    auteur: "Concile de Trente",
    document: "Session XIV, Chapitre IV",
    annee: 1551,
    type: CitationSource.CONCILE,
    theme: CitationTheme.PÉNITENCE,
    contenu:
      "La contrition, qui est le premier acte du pénitent, est une douleur de l'âme et une détestation du péché commis, avec le propos de ne plus pécher à l'avenir.",
    latin:
      "Contritio, quæ est prior pœnitentis actus, dolor animi et detestatio est de peccato commisso, cum proposito non peccandi de cetero.",
  },
  {
    slug: "trente-confession",
    auteur: "Concile de Trente",
    document: "Session XIV, Canon 6",
    annee: 1551,
    type: CitationSource.CONCILE,
    theme: CitationTheme.PÉNITENCE,
    contenu:
      "Si quelqu'un dit que la confession sacramentelle n'est ni nécessaire ni instituée de droit divin : qu'il soit anathème.",
    latin:
      "Si quis dixerit, confessionem sacramentalem vel non esse jure divino institutam, vel non esse ad salutem necessariam: anathema sit.",
  },
];

// ===== MARIAGE =====

export const citationsMariage: Citation[] = [
  {
    slug: "casti-connubii",
    auteur: "Pape Pie XI",
    document: "Casti Connubii",
    annee: 1930,
    type: CitationSource.PAPE,
    theme: CitationTheme.MARIAGE,
    contenu:
      "Le mariage est une institution divine, établie par Dieu dès le commencement. Il est le fondement de la famille et de la société.",
    application:
      "L'indissolubilité du mariage est de droit divin — aucun pouvoir humain ne peut la dissoudre.",
  },
  {
    slug: "trente-mariage-sacrement",
    auteur: "Concile de Trente",
    document: "Session XXIV, Canon 1",
    annee: 1563,
    type: CitationSource.CONCILE,
    theme: CitationTheme.MARIAGE,
    contenu:
      "Si quelqu'un dit que le mariage n'est pas véritablement et proprement un des sept sacrements de la loi évangélique, institué par le Christ : qu'il soit anathème.",
    latin:
      "Si quis dixerit, matrimonium non esse vere et proprie unum ex septem legis evangelicæ sacramentis, a Christo institutum: anathema sit.",
  },
  {
    slug: "trente-contraception",
    auteur: "Concile de Trente",
    document: "Session XXIV, Canon 10",
    annee: 1563,
    type: CitationSource.CONCILE,
    theme: CitationTheme.MARIAGE,
    contenu:
      "Si quelqu'un dit que l'état conjugal est préférable à l'état de virginité ou de célibat : qu'il soit anathème.",
    latin:
      "Si quis dixerit, statum conjugalem anteponendum esse statui virginitatis vel cælibatus: anathema sit.",
  },
  {
    slug: "mt-19-6",
    auteur: "Écriture Sainte",
    document: "Matthieu 19, 6",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.MARIAGE,
    contenu:
      "Ce que Dieu a uni, que l'homme ne le sépare pas.",
    application:
      "L'indissolubilité du mariage est enseignée par le Christ lui-même.",
  },
];

// ===== FINS DERNIÈRES =====

export const citationsFinsDernieres: Citation[] = [
  {
    slug: "mt-25-46",
    auteur: "Écriture Sainte",
    document: "Matthieu 25, 46",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.FINS_DERNIÈRES,
    contenu:
      "Ceux-ci iront au châtiment éternel, et les justes à la vie éternelle.",
    application:
      "L'enfer est éternel — il n'y a pas de sortie possible.",
  },
  {
    slug: "mt-7-13",
    auteur: "Écriture Sainte",
    document: "Matthieu 7, 13-14",
    annee: 30,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.FINS_DERNIÈRES,
    contenu:
      "Entrez par la porte étroite ; car large est la porte et spacieux est le chemin qui mènent à la perdition, et il y en a beaucoup qui entrent par là. Combien étroite est la porte et resserré le chemin qui mènent à la vie, et il y en a peu qui le trouvent !",
  },
  {
    slug: "hb-9-27",
    auteur: "Écriture Sainte",
    document: "Hébreux 9, 27",
    annee: 65,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.FINS_DERNIÈRES,
    contenu:
      "Il est réservé aux hommes de mourir une seule fois, après quoi vient le jugement.",
    application:
      "Contre la réincarnation — un seul passage terrestre, puis le jugement.",
  },
  {
    slug: "florence-purgatoire",
    auteur: "Concile de Florence",
    document: "Décret pour les Grecs",
    annee: 1439,
    type: CitationSource.CONCILE,
    theme: CitationTheme.FINS_DERNIÈRES,
    contenu:
      "Les âmes qui, après le baptême, n'ont encouru aucune souillure de péché, et celles qui, après avoir contracté une souillure, ont été purifiées, sont immédiatement reçues dans le ciel. Celles qui meurent en état de péché véniel descendent au purgatoire.",
    application:
      "Dogme du purgatoire — confirmé aussi par Trente (sess. XXV).",
  },
  {
    slug: "co-15-42",
    auteur: "Écriture Sainte",
    document: "1 Corinthiens 15, 42-44",
    annee: 55,
    type: CitationSource.ECRITURE,
    theme: CitationTheme.FINS_DERNIÈRES,
    contenu:
      "Semé corruptible, ressuscité incorruptible ; semé méprisable, ressuscité glorieux ; semé infirme, ressuscité plein de force ; semé corps animal, ressuscité corps spirituel.",
    application:
      "La résurrection des corps — les 4 propriétés du corps glorifié.",
  },
];

// ===== MORALE =====

export const citationsMorale: Citation[] = [
  {
    slug: "st-loi-naturelle",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.MORALE,
    contenu:
      "La loi naturelle est la participation de la loi éternelle à la créature rationnelle. Ses préceptes premiers sont évidents et immuables.",
    latin:
      "Lex naturalis nihil aliud est quam participatio legis æternæ in rationali creatura. Ejus prima præcepta sunt per se nota et immutabilia.",
    reference: "ST Ia-IIae, q. 94, a. 2",
  },
  {
    slug: "st-conscience",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.MORALE,
    contenu:
      "La conscience est le jugement pratique par lequel l'homme juge qu'un acte est bon ou mauvais. Elle n'est pas une loi, mais l'application d'une loi.",
    reference: "ST Ia-IIae, q. 19, a. 5",
    application:
      "La conscience n'est pas la loi suprême — elle doit être formée selon la loi naturelle et divine.",
  },
  {
    slug: "st-actes-intrinsequement-mauvais",
    auteur: "Saint Thomas d'Aquin",
    document: "Somme Théologique",
    annee: 1265,
    type: CitationSource.SAINT_THOMAS,
    theme: CitationTheme.MORALE,
    contenu:
      "Certains actes sont intrinsèquement mauvais par leur objet, indépendamment des circonstances ou des intentions : l'adultère, le meurtre de l'innocent, le parjure.",
    reference: "ST Ia-IIae, q. 18, a. 2",
    latin:
      "Actus aliqui ex suo genere sunt mali, independenter a circumstantiis vel intentione.",
  },
  {
    slug: "casti-connubii-contraception",
    auteur: "Pape Pie XI",
    document: "Casti Connubii",
    annee: 1930,
    type: CitationSource.PAPE,
    theme: CitationTheme.MORALE,
    contenu:
      "Aucune raison, si grave soit-elle, ne peut faire que ce qui est intrinsèquement contre la nature devienne conforme à la nature et moralement bon. L'usage du mariage, de propos délibéré frustré de sa puissance et de sa vertu naturelle, offense la loi de Dieu et la loi naturelle.",
    application:
      "La contraception est intrinsèquement mauvaise — aucun cas ne peut la justifier.",
  },
];

// ===== ŒCUMÉNISME =====

export const citationsOecumenisme: Citation[] = [
  {
    slug: "mortalium-animos",
    auteur: "Pape Pie XI",
    document: "Mortalium Animos",
    annee: 1928,
    type: CitationSource.PAPE,
    theme: CitationTheme.ŒCUMÉNISME,
    contenu:
      "Il est interdit aux catholiques de participer à des réunions œcuméniques, car cela favorise l'indifférentisme religieux. L'unité ne se réalise que par le retour des séparés à l'Église catholique.",
    latin:
      "Vix cuiquam licet favere tali conventiculorum congressui. Nam si facit, fovet eos qui a vera religione aberrant, fovet pessimam illam indifferentismi in rebus religionis opinionem.",
  },
  {
    slug: "florence-cantate-domino",
    auteur: "Concile de Florence",
    document: "Cantate Domino",
    annee: 1442,
    type: CitationSource.CONCILE,
    theme: CitationTheme.ŒCUMÉNISME,
    contenu:
      "L'Église romaine croit fermement, professe et prêche qu'aucun de ceux qui se trouvent hors de l'Église catholique — non seulement païens, mais encore juifs, hérétiques et schismatiques — ne peut obtenir la vie éternelle.",
    latin:
      "Sancta Romana Ecclesia firmiter credit, profitetur et prædicat, nullos extra catholicam Ecclesiam existentes, non solum paganos, sed nec Judæos aut hæreticos atque schismaticos, æternam vitam posse consequi.",
  },
  {
    slug: "syllabus-protestantisme",
    auteur: "Pape Pie IX",
    document: "Syllabus Errorum, Proposition 18",
    annee: 1864,
    type: CitationSource.PAPE,
    theme: CitationTheme.ŒCUMÉNISME,
    contenu:
      "« Le protestantisme n'est qu'une forme différente de la vraie religion chrétienne, dans laquelle il est aussi possible de plaire à Dieu que dans l'Église catholique. » — Condamnée.",
    latin:
      "Protestantismus non aliud est quam diversa verae religionis forma, in qua æque ac in Ecclesia catholica Deo placere datum est. — Damnata.",
  },
];

// ===== CRISE =====

export const citationsCrise: Citation[] = [
  {
    slug: "pascendi-modernisme",
    auteur: "Pape Pie X",
    document: "Pascendi Dominici Gregis",
    annee: 1907,
    type: CitationSource.PAPE,
    theme: CitationTheme.CRISE,
    contenu:
      "Le modernisme est la synthèse de toutes les hérésies. Celui qui embrasse le modernisme détruit tous les dogmes catholiques.",
    latin:
      "Modernismus est compendium omnium hæresium. Qui modernismum amplectitur, is omnia dogmata catholica destruit.",
    application:
      "Les papes post-V2 sont des modernistes — ils n'ont pas la missio.",
  },
  {
    slug: "cum-ex-apostolatus",
    auteur: "Pape Paul IV",
    document: "Cum Ex Apostolatus Officio",
    annee: 1559,
    type: CitationSource.PAPE,
    theme: CitationTheme.CRISE,
    contenu:
      "Si jamais un évêque, cardinal ou le Pontife Romain lui-même avait dévié de la foi catholique avant son élévation, sa promotion est nulle, invalide et vaine.",
    application:
      "Si le sujet était hérétique avant son élection, l'élection est nulle.",
  },
  {
    slug: "vacantis-apostolicae-sedis",
    auteur: "Pape Pie XII",
    document: "Vacantis Apostolicae Sedis",
    annee: 1945,
    type: CitationSource.PAPE,
    theme: CitationTheme.CRISE,
    contenu:
      "Si un élu au Pontificat accepte l'élection contre la liberté canonique, ou si l'élection est entachée de simonie, l'élection est nulle et sans effet.",
    application:
      "Une élection viciée est nulle — à plus forte raison si le sujet est hérétique.",
  },
  {
    slug: "syllabus-liberte-religieuse",
    auteur: "Pape Pie IX",
    document: "Syllabus Errorum, Proposition 15",
    annee: 1864,
    type: CitationSource.PAPE,
    theme: CitationTheme.CRISE,
    contenu:
      "« Tout homme est libre d'embrasser et de professer la religion que, guidé par la lumière de la raison, il aura considérée comme vraie. » — Condamnée.",
    latin:
      "Liberum cuique esse, religionem, qua rationis lumine quis ductus, veram putaverit, amplecti. — Damnata.",
    application:
      "La liberté religieuse de Dignitatis Humanae est contraire au Syllabus.",
  },
  {
    slug: "mirari-vos",
    auteur: "Pape Grégoire XVI",
    document: "Mirari Vos",
    annee: 1832,
    type: CitationSource.PAPE,
    theme: CitationTheme.CRISE,
    contenu:
      "De cette source pestilentielle de l'indifférentisme découle cette absurdité, erreur, ou plutôt ce délire : que chacun est libre d'embrasser et de professer la religion que sa raison lui dicte.",
    latin:
      "Ex hac putidissima indifferentismi fonte, absurdum illud ac erroneum, seu potius delirium emanat, liberum cuique esse, religionem, qua rationis lumine quis ductus, veram putaverit, amplecti.",
  },
  {
    slug: "quo-primum",
    auteur: "Pape Pie V",
    document: "Quo Primum",
    annee: 1570,
    type: CitationSource.PAPE,
    theme: CitationTheme.CRISE,
    contenu:
      "Le Missel Romain est perpétuel. Personne ne peut être forcé de célébrer autrement que selon ce Missel. Aucune autorité ne peut abroger cette bulle.",
    application:
      "Le Novus Ordo (1969) ne peut pas légitimement remplacer le Missel de Pie V.",
  },
];

// ===== DROIT CANONIQUE =====

export const citationsDroitCanonique: Citation[] = [
  {
    slug: "canon-188",
    auteur: "Code de Droit Canonique (CIC 1917)",
    document: "Canon 188 §4",
    annee: 1917,
    type: CitationSource.CONCILE,
    theme: CitationTheme.DROIT_CANONIQUE,
    contenu:
      "Tout office ecclésiastique est perdu par démission, transfert, révocation, privation, ou perte de la condition requise. L'hérésie pubque est une cause de perte tacite de l'office.",
    application:
      "Canon 188 : un hérétique perd ipso facto son office ecclésiastique.",
  },
  {
    slug: "canon-2200",
    auteur: "Code de Droit Canonique (CIC 1917)",
    document: "Canon 2200 §2",
    annee: 1917,
    type: CitationSource.CONCILE,
    theme: CitationTheme.DROIT_CANONIQUE,
    contenu:
      "Lorsqu'il est établi qu'un sujet a extériorisé l'hérésie, la bonne foi est présumée jusqu'à preuve du contraire ; mais la mala fides (mauvaise foi) est présumée dès que l'hérésie est prouvée.",
    application:
      "L'hérésie publique est présumée formelle jusqu'à preuve de bonne foi — ce qui est difficile à établir chez un sujet instruit.",
  },
  {
    slug: "canon-2314",
    auteur: "Code de Droit Canonique (CIC 1917)",
    document: "Canon 2314 §1",
    annee: 1917,
    type: CitationSource.CONCILE,
    theme: CitationTheme.DROIT_CANONIQUE,
    contenu:
      "Tous les apôtats de la foi chrétienne, tous les hérétiques et schismatiques, et chacun d'entre eux, encourent de plein droit l'excommunication.",
    application:
      "L'excommunication pour hérésie est encourue ipso facto — elle ne nécessite pas de déclaration.",
  },
  {
    slug: "ad-apostolorum-principis",
    auteur: "Pape Pie XII",
    document: "Ad Apostolorum Principis",
    annee: 1958,
    type: CitationSource.PAPE,
    theme: CitationTheme.DROIT_CANONIQUE,
    contenu:
      "L'épiscopat ne peut pas se passer de l'autorisation du Pape. Les évêques ne peuvent pas agir indépendamment du Siège Apostolique.",
    application:
      "La hiérarchie ne peut pas fonctionner sans un pape légitime ayant la missio.",
  },
];

// ===== AGGRÉGATION =====

export const allCitations: Citation[] = [
  ...citationsDieu,
  ...citationsTrinite,
  ...citationsIncarnation,
  ...citationsCreation,
  ...citationsAnges,
  ...citationsHomme,
  ...citationsPecheOriginel,
  ...citationsGrace,
  ...citationsEglise,
  ...citationsSacrements,
  ...citationsEucharistie,
  ...citationsPenitence,
  ...citationsMariage,
  ...citationsFinsDernieres,
  ...citationsMorale,
  ...citationsOecumenisme,
  ...citationsCrise,
  ...citationsDroitCanonique,
];

// ===== HELPERS =====

export const getCitationBySlug = (slug: string): Citation | undefined =>
  allCitations.find(c => c.slug === slug);

export const getCitationsByTheme = (theme: CitationTheme): Citation[] =>
  allCitations.filter(c => c.theme === theme);

export const getCitationsByType = (type: CitationSource): Citation[] =>
  allCitations.filter(c => c.type === type);

export const getCitationThemes = (): CitationTheme[] =>
  [...new Set(allCitations.map(c => c.theme))];

export const getCitationSources = (): CitationSource[] =>
  [...new Set(allCitations.map(c => c.type))];

export const searchCitations = (query: string): Citation[] => {
  const q = query.toLowerCase();
  return allCitations.filter(
    c =>
      c.auteur.toLowerCase().includes(q) ||
      c.document.toLowerCase().includes(q) ||
      c.contenu.toLowerCase().includes(q) ||
      c.latin?.toLowerCase().includes(q)
  );
};
