/**
 *
 * Disputationes — Forme scolastique de la théologie catholique
 *
 * Disputatio = méthode dialectique héritée de saint Thomas d'Aquin :
 * Objections → Sed contra → Respondeo → Ad primum/secundum/tertium
 *
 * Sources : Notes du vault « Le Livre » (Dogme, Crise, Discipline)
 */

// ===== TYPES & ENUMS =====

export enum DisputatioCategory {
  THEOLOGIE_DOGMATIQUE = "THEOLOGIE_DOGMATIQUE",
  THEOLOGIE_MORALE = "THEOLOGIE_MORALE",
  ECLESIOLOGIE = "ECLESIOLOGIE",
  APOLOGETIQUE = "APOLOGETIQUE",
  DISCIPLINE = "DISCIPLINE",
  CRISE = "CRISE",
}

export interface AdArgument {
  type: "primum" | "secundum" | "tertium" | "quartum";
  content: string;
}

export interface Disputatio {
  slug: string;
  question: string;
  category: DisputatioCategory;
  source: string;
  objections: string[];
  sedContra: string;
  respondeo: string;
  adArguments: AdArgument[];
  references: string[];
}

// ===== THÉOLOGIE DOGMATIQUE =====

export const disputationesDogmatique: Disputatio[] = [
  {
    slug: "angeli-substantiae-imateriales",
    question:
      "Utrum angeli sint substantiae immateriales ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Anges",
    objections: [
      "Il semble que les anges ne soient pas de substances immatérielles, car l'Écriture leur attribue des formes visibles (apparition à Abraham en Gn 18, ange avec une épée en Nb 22, 23).",
      "De plus, toute créature est composée de matière et de forme (hylémorphisme) ; donc les anges aussi doivent avoir une matière.",
    ],
    sedContra:
      "Le Christ dit : « Esprits et chairs n'ont pas d'os comme vous voyez que j'en ai » (Lc 24, 39), ce qui distingue les esprits des corps. Le Concile de Latran IV (1215) enseigne que Dieu a créé « simultanément au commencement du temps, de rien, l'une et l'autre créature, la spirituelle et la corporelle, c'est-à-dire l'angélique et le mondaine ».",
    respondeo:
      "Saint Thomas enseigne (Ia, q. 50, a. 2) que les anges sont de pures substances spirituelles, sans aucune matière. Contrairement à l'homme (composé d'âme et de corps), l'ange n'a pas de corps qui lui soit uni par nature. Il est une forme subsistante, c'est-à-dire une intelligence qui existe sans support matériel. Les apparitions angéliques dans l'Écriture ne sont pas la manifestation de leur nature propre, mais des corps assumés temporairement pour se rendre visibles aux hommes, par condescendance divine.",
    adArguments: [
      {
        type: "primum",
        content:
          "Les anges assument temporairement des corps aériens pour se manifester aux sens humains, mais ces corps ne leur sont pas unis substantiellement. L'Écriture parle par accommodation à notre mode de perception.",
      },
      {
        type: "secundum",
        content:
          "L'hylémorphisme (composition matière/forme) s'applique aux êtres matériels. Les anges, étant des formes pures sans matière, n'entrent pas dans ce schéma. C'est pourquoi saint Thomas enseigne (Ia, q. 50, a. 2, ad 1) que chaque ange est sa propre espèce : n'ayant pas de matière individuante, la forme angélique suffit à déterminer l'espèce.",
      },
    ],
    references: [
      "Lc 24, 39",
      "Latran IV (1215)",
      "ST Ia, q. 50, a. 2",
    ],
  },
  {
    slug: "angeli-cognoscant-per-speciem-innatam",
    question:
      "Utrum angeli cognoscant per speciem innatam ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Anges",
    objections: [
      "Il semble que les anges ne connaissent pas par des espèces innates, car ils apprennent des choses nouvelles (par exemple, les mystères du salut), ce qui suppose un processus discursif.",
      "De plus, si les anges connaissent tout dès leur création, ils n'auraient rien à découvrir, ce qui semble contraire à la perfection de la connaissance.",
    ],
    sedContra:
      "Saint Thomas enseigne (Ia, q. 55, a. 2) que les anges connaissent par des espèces intelligibles infuses (idées reçues de Dieu à la création), non par abstraction à partir des sens comme les hommes.",
    respondeo:
      "Le mode de connaissance angélique diffère radicalement du nôtre : l'homme connaît discursivement (il passe du connu à l'inconnu par le raisonnement), l'ange connaît intuitivement (il saisit la vérité d'un seul regard, sans raisonnement). Les espèces intelligibles des anges leur sont données par Dieu proportionnellement à leur nature. Plus un ange est élevé dans la hiérarchie, plus ses espèces sont universelles et riches. Quant aux mystères surnaturels (Trinité, Incarnation), les anges ne les connaissent pas naturellement : ils doivent être révélés par Dieu.",
    adArguments: [
      {
        type: "primum",
        content:
          "Ce que les anges « apprennent » n'est pas acquis par raisonnement, mais par une nouvelle illumination divine. Ce n'est pas de la discursion, mais un enrichissement de leurs espèces par révélation.",
      },
      {
        type: "secundum",
        content:
          "La connaissance angélique, quoique reçue dès la création, est toujours finie face à l'infini de Dieu. Les anges ne cessent jamais de contempler Dieu, et cette contemplation produit une joie et une profondeur croissantes sans jamais atteindre de limite.",
      },
    ],
    references: [
      "ST Ia, q. 55, a. 2",
    ],
  },
  {
    slug: "daemones-possint-hominem-tentare",
    question:
      "Utrum daemones possint hominem tentare ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Anges",
    objections: [
      "Il semble que les démons ne puissent pas tenter l'homme, car Dieu étant tout-puissant, il ne permettrait pas au mal d'approcher ses créatures.",
      "De plus, si le démon peut tenter, l'homme est privé de son libre arbitre, ce qui contredit la création à l'image de Dieu.",
    ],
    sedContra:
      "Saint Pierre écrit : « Soyez sobres, veillez. Votre adversaire, le diable, comme un lion rugissant, rôde autour de vous, cherchant qui dévorer » (1 P 5, 8). Le Livre de Job montre Dieu permettant à Satan de tenter Job (Jb 1, 12 ; 2, 6).",
    respondeo:
      "Saint Thomas distingue trois modes d'action des démons (Ia, q. 114) : 1) Tentation proprement dite : Le démon suggère le mal à l'imagination et aux sens, mais ne peut jamais contraindre la volonté. 2) Infestation : Action sur les choses extérieures, permise par Dieu pour l'éprouvement ou la purification. 3) Possession : Prise de contrôle du corps (jamais de l'âme), toujours permise par un jugement divin mystérieux. Dieu permet la tentation pour que la vertu soit éprouvée : « Dieu est fidèle, et il ne permettra pas que vous soyez tentés au-dessus de vos forces » (1 Co 10, 13).",
    adArguments: [
      {
        type: "primum",
        content:
          "Dieu permet le mal physique et moral pour un bien plus grand. La tentation est permise comme l'épreuve est permise : pour fortifier la vertu, manifester la grâce, et glorifier Dieu par la victoire de ses saints.",
      },
      {
        type: "secundum",
        content:
          "Le démon ne détruit jamais le libre arbitre. Il peut obscurcir l'imagination, émouvoir les passions, mais la décision finale appartient toujours à la volonté humaine. « Résistez au diable, et il s'enfuira de vous » (Jc 4, 7).",
      },
    ],
    references: [
      "1 P 5, 8",
      "Jb 1, 12 ; 2, 6",
      "1 Co 10, 13",
      "Jc 4, 7",
      "ST Ia, q. 114",
    ],
  },
  {
    slug: "mundus-sit-creatus-ex-nihilo",
    question:
      "Utrum mundus sit creatus ex nihilo ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "La Création",
    objections: [
      "Il semble que le monde ne soit pas créé de rien, car « rien ne vient de rien » (ex nihilo nihil fit — principe philosophique). Si ce principe est vrai, la création ex nihilo est impossible.",
      "De plus, la science montre que l'univers est éternel (Big Bang comme processus naturel, pas création).",
    ],
    sedContra:
      "Le Livre de la Sagesse dit : « Dieu a créé l'univers de rien » (Sg 11, 18). Le Concile de Latran IV (1215) définit : « Dieu [...] a créé de rien l'une et l'autre créature, spirituelle et corporelle. »",
    respondeo:
      "Saint Thomas enseigne (Ia, q. 44-46 ; Ia, q. 65, a. 1) que la création ex nihilo est un acte de la Toute-Puissance de Dieu : 1) Le principe « rien ne vient de rien » s'applique aux causes secondes, mais pas à la Cause Première. Dieu, étant Être pur, peut donner l'être à ce qui n'est pas. 2) La création n'est pas un changement : c'est la production de l'être à partir du néant. 3) Le monde a eu un commencement : la raison ne peut pas le démontrer, mais la foi l'affirme (Gn 1, 1). Le Big Bang ne prouve ni ne contredit la création : la science étudie les causes secondes, pas la Cause Première.",
    adArguments: [
      {
        type: "primum",
        content:
          "« Rien ne vient de rien » est vrai pour les causes secondes. Mais Dieu n'est pas une cause seconde : il est la Cause Première, l'Être nécessaire. La création ex nihilo est un acte de la Toute-Puissance divine, non un processus naturel.",
      },
      {
        type: "secundum",
        content:
          "La science ne peut pas trancher la question de l'origine de l'univers, car elle étudie les phénomènes naturels et ne peut pas atteindre le « pourquoi » métaphysique. Le Big Bang décrit un processus cosmologique, pas un acte de création.",
      },
    ],
    references: [
      "Sg 11, 18",
      "2 Macc 7, 28",
      "Gn 1, 1",
      "Latran IV (1215)",
      "Dei Filius (1870)",
      "ST Ia, q. 44-46",
    ],
  },
  {
    slug: "anima-sit-substantia-spiritualis",
    question:
      "Utrum anima sit substantia spiritualis ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Homme — Âme et Corps",
    objections: [
      "Il semble que l'âme ne soit pas une substance spirituelle, car elle est la forme du corps (Aristote, De Anima), et la forme en tant que telle n'existe pas séparément de la matière.",
      "De plus, si l'âme est spirituelle et le corps matériel, leur union est inexplicable : comment l'immatériel peut-il mouvoir le matériel ?",
    ],
    sedContra:
      "Le Concile de Vienne (1312, constitution Fidei catholicae) définit que l'âme est « véritablement, par essence et en soi, forme du corps humain ». Le Concile de Latran V (1513) enseigne que l'âme est « immortelle et selon son essence intellective ».",
    respondeo:
      "Saint Thomas distingue deux questions (Ia, q. 75, a. 2) : 1) L'âme est subsistante : elle opère sans le corps (comprendre des universaux, aimer le bien en soi). Donc elle peut exister sans le corps. Donc elle est une substance spirituelle. 2) L'âme est forme du corps : elle donne au corps son être d'homme vivant. L'union âme-corps est substantielle, non accidentelle. L'originalité de saint Thomas est d'affirmer simultanément ces deux vérités, contre le matérialisme (l'âme n'est pas réductible à la matière) et le platonisme (l'âme n'est pas un prisonnier dans le corps).",
    adArguments: [
      {
        type: "primum",
        content:
          "L'âme est la forme du corps, mais une forme subsistante — capable d'exister sans matière. C'est un cas unique dans la nature : la forme la plus élevée de la matière organisée est précisément celle qui peut se passer de la matière.",
      },
      {
        type: "secundum",
        content:
          "L'union âme-corps est substantielle, non accidentelle. L'âme meut le corps comme sa forme, non comme un pilote meut un navire (image platonicienne). L'homme est un composé unifié, non un duo.",
      },
    ],
    references: [
      "Gn 2, 7",
      "Vienne (1312)",
      "Latran V (1513)",
      "ST Ia, q. 75, a. 2",
    ],
  },
  {
    slug: "intellectus-et-voluntas-facultates-distinctae",
    question:
      "Utrum intellectus et voluntas sint facultates distinctae ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Homme — Âme et Corps",
    objections: [
      "Il semble que l'intelligence et la volonté ne soient qu'une seule faculté, car connaître le bien et vouloir le bien semblent être un seul et même acte.",
      "De plus, si l'intelligence connaît le bien et que la volonté est attirée par le bien connu, la volonté semble dépendre entièrement de l'intelligence, et n'être qu'un aspect de celle-ci.",
    ],
    sedContra:
      "Saint Thomas enseigne (Ia, q. 79, a. 1 et a. 2) que l'intelligence (intellect) et la volonté sont deux puissances distinctes de l'âme rationnelle, ayant des objets formels différents.",
    respondeo:
      "L'intelligence et la volonté sont réellement distinctes, mais profondément liées : l'intelligence a pour objet le vrai (verum), la volonté a pour objet le bien (bonum). La distinction est réelle : on peut connaître un bien sans le vouloir, et vouloir quelque chose qu'on ne connaît pas parfaitement. Mais elles sont ordonnées l'une à l'autre : « Rien n'est voulu si ce n'est sous l'espèce du bien ».",
    adArguments: [
      {
        type: "primum",
        content:
          "Connaître le bien et vouloir le bien ne sont pas le même acte. Connaître, c'est recevoir l'être dans l'intelligence ; vouloir, c'est tendre vers l'être comme fin. L'un est acte de connaissance, l'autre acte d'appétition.",
      },
      {
        type: "secundum",
        content:
          "La volonté dépend de l'intelligence pour la présentation de l'objet, mais elle est libre dans son assentiment. Présenté un même bien, la volonté peut consentir ou refuser — c'est le mystère de la liberté.",
      },
    ],
    references: [
      "ST Ia, q. 79, a. 1-2",
    ],
  },
  {
    slug: "anima-separata-intelligere-sine-corpore",
    question:
      "Utrum anima separata possit intelligere sine corpore ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Homme — Âme et Corps",
    objections: [
      "Il semble que l'âme séparée ne puisse pas comprendre sans le corps, car la connaissance intellectuelle commence par les sens (nihil in intellectu quod non prius in sensu), et l'âme séparée n'a plus de sens.",
      "De plus, saint Thomas enseigne que l'âme est la forme du corps ; séparée du corps, elle est dans un état contre nature, et donc ne peut pas opérer normalement.",
    ],
    sedContra:
      "Le Christ dit au bon larron : « Aujourd'hui tu seras avec moi dans le Paradis » (Lc 23, 43). Or, le Paradis implique la béatitude, qui est la vision de Dieu. Donc l'âme séparée peut connaître.",
    respondeo:
      "Saint Thomas enseigne (Ia, q. 89, a. 1) que l'âme séparée connaît d'un mode qui lui est propre, mais inférieur à celui de l'homme complet : 1) Par les espèces intelligibles reçues pendant la vie. 2) Par illumination divine. 3) Au Purgatoire et en Enfer : l'âme souffre, ce qui suppose une connaissance de sa privation. 4) Au Ciel : l'âme possède la vision béatifique par le lumen gloriae.",
    adArguments: [
      {
        type: "primum",
        content:
          "L'âme séparée ne connaît plus par les sens, mais elle peut connaître par les espèces qu'elle a acquises et par la lumière divine. La connaissance sensible est le chemin ordinaire de la connaissance, mais pas le seul.",
      },
      {
        type: "secundum",
        content:
          "L'âme séparée est dans un état imparfait et transitoire, d'où l'importance de la résurrection des corps. Elle peut opérer, mais pas avec la plénitude qui sera celle de l'homme ressuscité.",
      },
    ],
    references: [
      "Lc 23, 43",
      "ST Ia, q. 89, a. 1",
    ],
  },
  {
    slug: "statim-post-mortem-sit-judicium-particulare",
    question:
      "Utrum statim post mortem sit judicium particulare ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Fins Dernières",
    objections: [
      "Il semble qu'il n'y ait pas de jugement particulier immédiatement après la mort, car l'Écriture parle principalement du jugement général (Mt 25), qui est à la fin des temps.",
      "De plus, si le jugement est immédiat, que deviennent les âmes entre la mort et la résurrection ? L'Écriture parle du « sommeil des morts » (1 Th 4, 13).",
    ],
    sedContra:
      "Le Christ dit au bon larron : « Aujourd'hui tu seras avec moi dans le Paradis » (Lc 23, 43). L'Épître aux Hébreux dit : « Il est réservé aux hommes de mourir une seule fois, après quoi vient le jugement » (Hé 9, 27).",
    respondeo:
      "Saint Thomas enseigne (Suppl., q. 69, a. 2) que le jugement particulier est immédiat après la mort pour une raison métaphysique : dès que l'âme est séparée du corps, elle est fixée dans son orientation définitive. Pendant la vie terrestre, l'homme peut changer ; après la mort, la volonté est irrévocablement orientée vers Dieu ou contre Dieu. Le jugement particulier consiste en la manifestation à l'âme de son propre état devant Dieu.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le jugement général diffère du jugement particulier par son objet et sa finalité. Le jugement particulier concerne l'âme individuelle ; le jugement général concerne l'humanité entière et manifeste publiquement la justice de Dieu.",
      },
      {
        type: "secundum",
        content:
          "Le « sommeil des morts » est une métaphore biblique signifiant que les morts ne participent plus à la vie du monde visible. L'âme reste consciente : le Christ promet au larron la présence au Paradis « aujourd'hui », non dans un état d'inconscience.",
      },
    ],
    references: [
      "Lc 23, 43",
      "Hé 9, 27",
      "Mt 25",
      "Suppl., q. 69, a. 2",
    ],
  },
  {
    slug: "purgatorium-sit-possibile",
    question:
      "Utrum purgatorium sit possibile ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Fins Dernières",
    objections: [
      "Il semble que le purgatoire ne soit pas possible, car après la mort, le jugement est définitif. Or, si le Purgatoire est un état intermédiaire, il nie la définitivité du jugement.",
      "De plus, si Dieu est miséricordieux, pourquoi ne pardonne-t-il pas directement toutes les peines temporelles au moment de la mort ?",
    ],
    sedContra:
      "Le Concile de Lyon II (1274) et le Concile de Florence (1439) enseignent l'existence du Purgatoire. Le Concile de Trente (sess. XXV) confirme que « les âmes des défunts qui sont retenues en Purgatoire sont aidées par les suffrages des fidèles ». Saint Paul écrit : « Si quelqu'un bâtit sur ce fondement avec de l'or, de l'argent, des pierres précieuses, du bois, du foin, de la paille, l'œuvre de chacun sera manifestée ; le jour du Seigneur la fera connaître, parce qu'elle se révélera dans le feu » (1 Co 3, 12-13).",
    respondeo:
      "Le Purgatoire est requis par la justice et la miséricorde réunies de Dieu : 1) « Rien de souillé n'entrera dans le Ciel » (Ap 21, 27). Des âmes sont en état de grâce mais portent encore les restes de péchés. 2) Après la mort, l'âme ne peut plus acquérir de mérite par ses propres actes. 3) Dieu, étant justice, ne peut admettre dans sa présence immédiate une âme encore souillée. Dieu, étant miséricorde, ne la condamne pas à l'Enfer.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le jugement particulier est définitif quant à la destination (Ciel), mais pas quant au moment d'y parvenir. Le Purgatoire n'est pas un doute sur la destination, mais un délai de purification. L'âme du Purgatoire est certaine d'être sauvée.",
      },
      {
        type: "secundum",
        content:
          "La peine temporelle est la conséquence du désordre causé par le péché, distincte de la culpabilité. Le sacrement de réconciliation absout la culpabilité, mais la peine temporelle peut demeurer. Dieu exige cette purification par justice restauratrice.",
      },
    ],
    references: [
      "1 Co 3, 12-13",
      "Ap 21, 27",
      "2 Macc 12, 46",
      "Lyon II (1274)",
      "Florence (1439)",
      "Trente, sess. XXV",
    ],
  },
  {
    slug: "infernus-sit-aeternus",
    question:
      "Utrum infernus sit aeternus ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Fins Dernières",
    objections: [
      "Il semble que l'enfer ne soit pas éternel, car un Dieu infiniment bon ne peut pas infliger une peine éternelle pour des péchés finis. La disproportion entre la faute (temporelle) et la peine (éternelle) est une injustice.",
      "De plus, si Dieu veut que tous les hommes soient sauvés (1 Tm 2, 4), comment permettrait-il qu'un seul aille en Enfer pour toujours ?",
    ],
    sedContra:
      "Le Christ dit : « Ceux-ci iront au châtiment éternel, et les justes à la vie éternelle » (Mt 25, 46). Le IVe Concile du Latran (1215) enseigne que « ceux qui auront fait le mal iront au feu éternel ».",
    respondeo:
      "Saint Thomas démontre (Ia-IIae, q. 87, a. 3 ; Suppl., q. 99) que l'éternité de l'Enfer est requise par : 1) La nature du péché mortel : rejet définitif de Dieu. Après la mort, la volonté est irrévocable. 2) La gravité infinie de l'offense : le péché mortel offense Dieu, Bien infini. La peine doit être proportionnée à la dignité de l'offensé. 3) La justice divine : Dieu est justice parfaite. L'éternité de l'Enfer manifeste la gravité réelle du péché.",
    adArguments: [
      {
        type: "primum",
        content:
          "La disproportion apparente vient d'une erreur de perspective : on mesure la faute à l'acte extérieur (qui est temporel), alors qu'elle doit se mesurer à la volonté délibérée de rejeter le Bien infini. Le damné ne souffre pas « pour un péché commis en une heure », mais pour le rejet permanent et irrévocable de Dieu.",
      },
      {
        type: "secundum",
        content:
          "Dieu veut le salut de tous antécédemment (1 Tm 2, 4), mais il respecte la liberté humaine. La volonté salvifique universelle de Dieu n'est pas une nécessité de fait : Dieu offre sa grâce à tous, mais certains la refusent librement et définitivement.",
      },
    ],
    references: [
      "Mt 25, 46",
      "1 Tm 2, 4",
      "Latran IV (1215)",
      "ST Ia-IIae, q. 87, a. 3",
      "Suppl., q. 99",
    ],
  },
  {
    slug: "gratia-sit-necessaria-ad-salutem",
    question:
      "Utrum gratia sit necessaria ad salutem ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "La Grâce",
    objections: [
      "Il semble que la grâce ne soit pas nécessaire au salut, car l'homme a le libre arbitre et peut connaître Dieu par la raison naturelle (les 5 Voies).",
      "De plus, si la grâce est nécessaire, alors les païens qui ne la connaissent pas ne peuvent pas être sauvés — ce qui semble injuste.",
    ],
    sedContra:
      "Le Christ dit : « Sans moi, vous ne pouvez rien faire » (Jn 15, 5). Le Concile de Trente (sess. VI, ch. V) enseigne que le libre arbitre, mû et excité par Dieu, coopère en consentant à Dieu qui l'appelle.",
    respondeo:
      "Saint Thomas enseigne (Ia-IIae, q. 109, a. 1-10 ; q. 110, a. 1) que la grâce est nécessaire de double nécessité : 1) Nécessité de moyen : la grâce sanctifiante est nécessaire pour tout acte surnaturel (foi, espérance, charité). 2) Nécessité de précepte : Dieu a commandé de croire et d'observer ses commandements, ce qui exige sa grâce. Trente enseigne : « Dieu ne commande pas l'impossible, mais en commandant, il t'avertit de faire ce que tu peux et de demander ce que tu ne peux pas, et il t'aide afin que tu le puisses. »",
    adArguments: [
      {
        type: "primum",
        content:
          "La raison peut connaître l'existence de Dieu (préambules de la foi), mais elle ne peut pas atteindre l'ordre surnaturel. Le libre arbitre peut vouloir le bien naturel, mais il ne peut pas accomplir des actes méritoires de la vie éternelle sans la grâce. Le péché originel a affaibli le libre arbitre.",
      },
      {
        type: "secundum",
        content:
          "Dieu offre la grâce suffisante à tous les hommes, y compris les païens. Ceux qui, sans leur faute, ne connaissent pas le Christ peuvent être sauvés par le baptême de désir (ignorance invincible). Mais cette grâce est toujours nécessaire.",
      },
    ],
    references: [
      "Jn 15, 5",
      "Trente, sess. VI",
      "ST Ia-IIae, q. 109-111",
    ],
  },
  {
    slug: "baptismus-sit-necessarius-ad-salutem",
    question:
      "Utrum baptismus sit necessarius ad salutem ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Le Baptême",
    objections: [
      "Il semble que le baptême ne soit pas nécessaire au salut, car Dieu veut le salut de tous les hommes (1 Tm 2, 4), et des millions d'hommes sont morts sans baptême.",
      "De plus, le bon larron a été sauvé sans baptême (Lc 23, 43), ce qui prouve que le salut est possible sans ce sacrement.",
    ],
    sedContra:
      "Le Christ dit : « Nul, s'il ne renaît de l'eau et de l'Esprit, ne peut entrer dans le Royaume de Dieu » (Jn 3, 5). Le Concile de Trente (sess. VII, can. 5) enseigne : « Si quelqu'un dit que le baptême est libre, c'est-à-dire non nécessaire au salut, qu'il soit anathème. »",
    respondeo:
      "Saint Thomas enseigne (IIIa, q. 68, a. 1) que le baptême est nécessaire de nécessité de moyen au salut, mais cette nécessité s'entend de trois manières : 1) Baptême d'eau (baptismus aquae) : le sacrement lui-même. 2) Baptême de désir (baptismus flaminis) : l'acte de charité parfaite ou le désir explicite du baptême. 3) Baptême de sang (baptismus sanguinis) : le martyre pour le Christ.",
    adArguments: [
      {
        type: "primum",
        content:
          "Dieu veut le salut de tous, et il offre à tous les moyens nécessaires — soit par le sacrement, soit par le désir, soit par le martyre. Aucun homme n'est privé de la possibilité du salut par une cause qui ne dépende pas de lui.",
      },
      {
        type: "secundum",
        content:
          "Le bon larron a été sauvé par le baptême de désir : son acte de foi, d'espérance et de charité sur la croix a suppléé au baptême d'eau qu'il ne pouvait plus recevoir.",
      },
    ],
    references: [
      "Jn 3, 5",
      "Lc 23, 43",
      "Mt 28, 19",
      "Trente, sess. VII, can. 5",
      "ST IIIa, q. 68, a. 1",
    ],
  },
  {
    slug: "septem-sacramenta-sufficienter-numerentur",
    question:
      "Utrum septem sacramenta sufficienter numerentur ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Sacrements",
    objections: [
      "Il semble que les sacrements soient trop peu nombreux, car l'Église possède d'autres rites sacrés (bénédiction, consécration, scapulaire) qui semblent aussi transmettre la grâce.",
      "De plus, les protestants n'ont gardé que deux « sacrements » (baptême et cène), ce qui semble suffire pour le salut.",
    ],
    sedContra:
      "Le Concile de Trente (sess. VII, can. 1) définit qu'il y a exactement sept sacrements de la Nouvelle Loi : baptême, confirmation, eucharistie, pénitence, onction des malades, ordre et mariage.",
    respondeo:
      "Saint Thomas enseigne (IIIa, q. 65, a. 1) que le nombre des sacrements est proportionné aux besoins de la vie spirituelle : il faut naître (baptême), croître (confirmation), se nourrir (eucharistie), guérir (pénitence, onction), se reproduire spirituellement (ordre, mariage). Les sacramentaux disposent à la grâce mais ne l'opèrent pas ex opere operato.",
    adArguments: [
      {
        type: "primum",
        content:
          "Les sacramentaux disposent à la grâce mais ne la confèrent pas par eux-mêmes. La distinction est entre ce qui opère ex opere operato (les sacrements) et ce qui opère ex opere operantis (les sacramentaux).",
      },
      {
        type: "secundum",
        content:
          "Les protestants ont perdu la matière, la forme, le ministre légitime et l'intention de l'Église pour cinq des sept sacrements. Le baptême reste valide s'il est conféré correctement.",
      },
    ],
    references: [
      "Trente, sess. VII, can. 1",
      "ST IIIa, q. 65, a. 1",
    ],
  },
  {
    slug: "sacramenta-conferant-gratiam-ex-opere-operato",
    question:
      "Utrum sacramenta conferant gratiam ex opere operato ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Les Sacrements",
    objections: [
      "Il semble que les sacrements ne confèrent pas la grâce ex opere operato, car la grâce vient de Dieu seul, et un signe matériel ne peut pas produire un effet spirituel.",
      "De plus, si les sacrements opèrent ex opere operato, alors la dévotion du ministre ou du sujet serait inutile.",
    ],
    sedContra:
      "Le Concile de Trente (sess. VII, can. 6) définit : « Si quelqu'un dit que les sacrements de la Nouvelle Loi ne contiennent pas la grâce qu'ils signifient, ou qu'ils ne confèrent pas la grâce à ceux qui ne mettent pas obstacle [...] qu'il soit anathème. »",
    respondeo:
      "Saint Thomas enseigne (IIIa, q. 62, a. 1-5) que les sacrements confèrent la grâce ex opere operato pour trois raisons : 1) Institution divine : le Christ a attaché la grâce au rite sacramentel. 2) Causalité instrumentale : le sacrement est une cause instrumentale de la grâce, comme le marteau cause la forme du lit. 3) Vertu du signe : le sacrement ne se contente pas de signifier la grâce, il la produit. L'effet peut être empêché par le manque d'intention, un obstacle du sujet, ou un défaut de matière/forme.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le signe matériel ne produit pas la grâce par sa propre vertu, mais comme instrument du Christ. C'est le Christ qui opère à travers le sacrement.",
      },
      {
        type: "secundum",
        content:
          "La dévotion du sujet n'est pas inutile : elle augmente la réceptivité de l'âme à la grâce reçue. Mais la grâce est conférée dans les deux cas, pourvu qu'il n'y ait pas d'obstacle positif.",
      },
    ],
    references: [
      "Trente, sess. VII, can. 6-8",
      "ST IIIa, q. 62, a. 1-5",
    ],
  },
  {
    slug: "in-eucharistia-sit-vera-praesentia-christi",
    question:
      "Utrum in Eucharistia sit vera et realis praesentia Christi ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Eucharistie et la Transsubstantiation",
    objections: [
      "Il semble que le Christ ne soit pas réellement présent dans l'Eucharistie, car les accidents (apparence, goût, poids) restent ceux du pain et du vin. Si le corps du Christ était là, on le verrait.",
      "De plus, le Christ est au ciel (Ac 1, 9) et ne peut pas être en plusieurs endroits à la fois.",
      "De plus, si le pain « devient » le Corps du Christ, c'est une forme de magie.",
    ],
    sedContra:
      "Le Christ dit : « Ceci est mon corps » (Mt 26, 26) et « Ma chair est vraiment une nourriture, et mon sang est vraiment un breuvage » (Jn 6, 56). Le Concile de Trente (sess. XIII, can. 1) anathématise quiconque nie la présence véritable, réelle et substantielle du Corps, Sang, Âme et Divinité du Christ.",
    respondeo:
      "Saint Thomas enseigne (IIIa, q. 75-77) que la transsubstantiation est le changement de toute la substance du pain en la substance du Corps du Christ : 1) Changement de substance, non d'accidents : les accidents subsistent sans sujet (miracle continu). 2) Présence sacramentelle : le Christ est présent « sous les espèces », selon le mode du sacrement. 3) Vertu des paroles du Christ : ce sont les paroles de la consécration qui opèrent la transsubstantiation.",
    adArguments: [
      {
        type: "primum",
        content:
          "Les accidents subsistent sans sujet — c'est un miracle continu voulu par Dieu. Si on voyait le Corps du Christ, ce ne serait plus un sacrement (un sacrement est un signe). La foi est nécessaire pour adorer le Christ sous les espèces.",
      },
      {
        type: "secundum",
        content:
          "Le Christ est au ciel selon son mode naturel de présence (local), mais il est présent dans l'Eucharistie selon le mode sacramentel (substantiel). La présence sacramentelle n'est pas une présence « locale » mais « substantielle ».",
      },
      {
        type: "tertium",
        content:
          "La transsubstantiation n'est pas de la magie : c'est un acte de Dieu Tout-Puissant, opéré par les paroles du Christ lui-même. Le prêtre n'est qu'un instrument ; c'est le Christ qui consacre à travers le prêtre.",
      },
    ],
    references: [
      "Mt 26, 26-28",
      "Jn 6, 51-58",
      "1 Co 11, 23-29",
      "Trente, sess. XIII",
      "ST IIIa, q. 75-77",
    ],
  },
  {
    slug: "maria-sit-vere-mater-dei",
    question:
      "Utrum Maria sit vere mater Dei ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Marie — Mère de Dieu",
    objections: [
      "Il semble que Marie ne soit pas véritablement Mère de Dieu, car elle n'a engendré que la nature humaine du Christ, et non sa nature divine qui est incréée et éternelle.",
      "De plus, si Marie est Mère de Dieu, cela signifie qu'elle est antérieure à Dieu, ce qui est absurde.",
    ],
    sedContra:
      "Le Concile d'Éphèse (431) définit dogmatiquement que Marie est Théotokos. Le Concile de Chalcédoine (451) confesse que le Christ est « engendré du Père avant les siècles selon la divinité, et que le même, dans les derniers temps, est né de la Vierge Marie, Mère de Dieu, selon l'humanité ».",
    respondeo:
      "Saint Thomas enseigne (IIIa, q. 35, a. 1-5) que Marie est Mère de Dieu au sens strict : 1) Maternité réelle : Marie a véritablement conçu, porté et mis au monde Jésus-Christ. 2) Maternité de la Personne : la maternité se dit de la Personne, non de la nature. 3) Pas de maternité de la divinité : Marie n'a pas engendré la nature divine.",
    adArguments: [
      {
        type: "primum",
        content:
          "La maternité ne se dit pas de la nature, mais de la Personne. Marie est Mère de Jésus-Christ, qui est une seule Personne divine subsistant en deux natures.",
      },
      {
        type: "secundum",
        content:
          "Marie n'est pas « antérieure » à Dieu, mais « antérieure » à l'Incarnation. Le Verbe existe de toute éternité, mais l'humanité du Christ a un commencement dans le temps.",
      },
    ],
    references: [
      "Éphèse (431)",
      "Chalcédoine (451)",
      "ST IIIa, q. 35, a. 1-5",
    ],
  },
  {
    slug: "maria-fuerit-immacule-concepta",
    question:
      "Utrum Maria fuerit immaculate concepta ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Marie — Mère de Dieu",
    objections: [
      "Il semble que Marie n'ait pas été immaculée conçue, car tous les hommes sont conçus dans le péché originel (Rm 5, 12). Si Marie est exempte, elle n'est pas véritablement rachetée par le Christ.",
      "De plus, le dogme de l'Immaculée Conception n'a été défini qu'en 1854 (Pie IX), ce qui suggère qu'il n'était pas connu de l'Église primitive.",
    ],
    sedContra:
      "Le Pape Pie IX, dans la bulle Ineffabilis Deus (1854), définit dogmatiquement que « la bienheureuse Vierge Marie a été, au premier instant de sa conception, par une grâce et un privilège singulier du Dieu tout-puissant, en vue des mérites de Jésus-Christ, préservée intacte de toute tache du péché originel. » L'Ange Gabriel dit : « Je vous salue, pleine de grâce » (Lc 1, 28).",
    respondeo:
      "Saint Thomas (IIIa, q. 27, a. 2) enseigne que l'Immaculée Conception est un privilège exceptionnel accordé à Marie : 1) Préservation, non guérison : Marie a été préservée du péché originel. 2) Rédemption préservatrice : Marie est rachetée par le Christ, mais d'une manière plus parfaite (préservée plutôt que guérie). 3) Convenance théologique : il convenait que la Mère de Dieu soit parfaitement sainte.",
    adArguments: [
      {
        type: "primum",
        content:
          "Rm 5, 12 s'applique à la transmission universelle du péché originel, mais ne supprime pas la possibilité d'un privilège divin exceptionnel. Marie est pleinement rachetée par le Christ, mais d'une manière « préservatrice ».",
      },
      {
        type: "secundum",
        content:
          "La définition dogmatique de 1854 ne signifie pas que la croyance était absente avant. La Tradition contient de nombreux indices : la fête de la Conception de Marie (Ve siècle), les écrits de saint Éphrem, saint Anselme, Duns Scot.",
      },
    ],
    references: [
      "Ineffabilis Deus (1854)",
      "Lc 1, 28",
      "Rm 5, 12",
      "ST IIIa, q. 27, a. 2",
    ],
  },
];

// ===== CHRISTOLOGIE (cL'Incarnation) =====

export const disputationesChristologie: Disputatio[] = [
  {
    slug: "christus-assumpserit-omnes-defectus",
    question:
      "Utrum Christus debuerit omnes defectus humanos assumere ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Incarnation",
    objections: [
      "Il semble que le Christ aurait dû assumer tous les défauts de la nature humaine, car « en tout il a été semblable à nous, excepté le péché » (Hé 4, 15). S'il ne les a pas tous pris, il n'est pas pleinement homme.",
      "De plus, si le Christ n'a pas assumé la souffrance complète de la condition humaine, sa solidarité avec l'humanité est incomplète.",
    ],
    sedContra:
      "Saint Thomas enseigne (IIIa, q. 14, a. 1-4) que le Christ a assumé les défauts qui sont conséquences de la nature corporelle (faim, soif, fatigue, douleur, mort) mais non ceux qui sont des déficiences de la nature humaine en tant que telle (ignorance, concupiscence, maladie de l'âme).",
    respondeo:
      "Le Christ a assumé les défauts qui ne sont pas contraires à la perfection de la nature humaine, mais qui accompagnent la nature corporelle. Il n'a pas assumé les défauts qui impliquent un désordre dans la nature humaine (ignorance, péché, concupiscence). Le Christ pouvait souffrir dans son corps, mais sa volonté était toujours parfaitement ordonnée à Dieu.",
    adArguments: [
      {
        type: "primum",
        content:
          "Hé 4, 15 signifie que le Christ a connu toutes les tentations qui viennent de l'extérieur (faim, douleur, peur), mais sans jamais y consentir intérieurement. La « ressemblance » est dans l'expérience de la faiblesse corporelle, non dans le péché.",
      },
      {
        type: "secundum",
        content:
          "La solidarité du Christ avec l'humanité est parfaite dans sa nature, car il a partagé tout ce qui appartient à la condition de créature (corps mortel, passions sensibles). Les défauts qu'il n'a pas assumés (ignorance, péché) ne sont pas des éléments essentiels de la nature humaine.",
      },
    ],
    references: [
      "Hé 4, 15",
      "ST IIIa, q. 14",
    ],
  },
  {
    slug: "unio-hypostatica-fuerit-possibilis",
    question:
      "Utrum unio hypostatica fuerit possibilis ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Incarnation",
    objections: [
      "Il semble que l'union hypostatique soit impossible, car l'infini (nature divine) ne peut pas s'unir au fini (nature humaine) sans être diminué ou détruit.",
      "De plus, si deux natures parfaites coexistent dans une seule Personne, comment éviter une division ou une confusion ?",
    ],
    sedContra:
      "Le Concile de Chalcédoine (451) définit que le Christ est « en deux natures, sans confusion, sans changement, sans division, sans séparation ». Le symbole dit que « la distinction des natures n'est nullement supprimée par l'union ».",
    respondeo:
      "L'union hypostatique est possible par la Toute-Puissance de Dieu. Saint Thomas enseigne (IIIa, q. 2, a. 1) que cette union n'est ni naturelle (car elle unit des natures différentes) ni accidentelle (car elle constitue une seule Personne), mais substantielle : la nature humaine est assumée par la Personne divine. Les quatre adverbes de Chalcédoine (sans confusion, sans changement, sans division, sans séparation) protègent les deux natures tout en affirmant l'unité de la Personne.",
    adArguments: [
      {
        type: "primum",
        content:
          "L'infini ne peut pas être diminué par l'union avec le fini, car l'infini par définition ne peut pas être diminué. La nature divine reste parfaite dans l'union avec l'humanité.",
      },
      {
        type: "secundum",
        content:
          "Les quatre adverbes de Chalcédoine garantissent l'intégrité : sans confusion (les natures ne se mélangent pas), sans changement (ni la nature divine ni la nature humaine n'est altérée), sans division (il n'y a pas deux Christs), sans séparation (les deux natures sont inséparablement unies dans une seule Personne).",
      },
    ],
    references: [
      "Chalcédoine (451)",
      "ST IIIa, q. 2",
    ],
  },
  {
    slug: "christus-per-passionem-redemerit",
    question:
      "Utrum Christus per suam passionem et mortem genus humanum redemerit ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "L'Incarnation",
    objections: [
      "Il semble que le Christ n'ait pas racheté l'humanité par sa Passion, car si Dieu est tout-puissant et miséricordieux, il aurait pu sauver les hommes sans la souffrance de son Fils.",
      "De plus, si le Christ est Dieu, sa souffrance est-elle réelle ? Un Dieu qui souffre ne serait-il pas contradictoire ?",
    ],
    sedContra:
      "Saint Paul écrit : « Nous avons la rédemption par son sang, la rémission des péchés » (Col 1, 14). Le Concile de Trente (sess. VI, ch. 7) enseigne que la « mérite » du Christ sur la croix est la cause de notre justification.",
    respondeo:
      "Saint Thomas enseigne (IIIa, q. 46-49) que la Passion du Christ était le moyen le plus convenable de la Rédemption, bien que non absolument nécessaire (Dieu aurait pu sauver autrement) : 1) Satisfaction : le Christ, en tant qu'homme, a satisfait pour le péché d'Adam et de tous les hommes. 2) Mérite : le Christ a mérité la grâce de la justification pour tous les hommes. 3) Sacrifice : le Christ s'est offert volontairement comme victime, réconciliant l'homme avec Dieu. 4) Ransom : le Christ a « racheté » l'humanité de la servitude du péché et du démon.",
    adArguments: [
      {
        type: "primum",
        content:
          "Dieu aurait pu sauver autrement, mais la Passion était le moyen le plus convenable car elle manifeste simultanément la justice de Dieu (le péché est puni) et sa miséricorde (Dieu lui-même porte la peine).",
      },
      {
        type: "secundum",
        content:
          "La souffrance du Christ est réelle selon sa nature humaine. Le Verbe ne souffre pas dans sa nature divine (qui est impassible), mais il souffre dans l'humanité qu'il a assumée. La Personne qui souffre est divine, mais la souffrance est humaine.",
      },
    ],
    references: [
      "Col 1, 14",
      "Rm 5, 8-10",
      "Trente, sess. VI, ch. 7",
      "ST IIIa, q. 46-49",
    ],
  },
];

// ===== PÉCHÉ ORIGINEL =====

export const disputationesPecheOriginel: Disputatio[] = [
  {
    slug: "peccatum-originale-transmittatur",
    question:
      "Utrum peccatum originale per generationem transmittatur ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Le Péché Originel",
    objections: [
      "Il semble que le péché originel ne soit pas transmis par génération, car le péché est un acte personnel de la volonté. On ne peut pas pécher par un acte qu'on n'a pas posé.",
      "De plus, si le péché est transmis, Dieu est injuste en punissant les descendants pour la faute de leur ancêtre.",
    ],
    sedContra:
      "Saint Paul écrit : « Par un seul homme le péché est entré dans le monde, et par le péché la mort » (Rm 5, 12). Le Concile de Trente (sess. V, can. 1-2) définit que le péché originel est transmis par propagation, non par imitation.",
    respondeo:
      "Saint Thomas enseigne (Ia-IIae, q. 81, a. 1) que le péché originel est transmis par génération de la manière suivante : Adam, par son péché, a perdu la grâce sanctifiante et les dons surnaturels pour lui-même et pour toute sa descendance. L'humanité forme un tout solidaire en Adam (nature humaine). Le péché originel n'est pas un acte personnel de chaque homme, mais la privation de la grâce sanctifiante dans la nature humaine, conséquence du péché d'Adam.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le péché originel n'est pas un acte personnel (chaque homme ne « pèche » pas personnellement en naissant), mais la privation de la grâce sanctifiante qui aurait dû être transmise par génération. C'est un péché de nature, non de personne.",
      },
      {
        type: "secundum",
        content:
          "Dieu ne punit pas les descendants pour la faute d'Adam, mais les descendants héritent d'une nature blessée, privée des dons surnaturels. La peine du péché originel (privation de la grâce) est la conséquence naturelle de la solidarité humaine en Adam.",
      },
    ],
    references: [
      "Rm 5, 12",
      "Trente, sess. V",
      "ST Ia-IIae, q. 81",
    ],
  },
  {
    slug: "peccatum-mortale-sit-grave",
    question:
      "Utrum peccatum mortale sit gravissimum ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Péché Originel",
    objections: [
      "Il semble que le péché mortel ne soit pas si grave, car l'homme est faible et sujet à la tentation. Comment un acte momentané peut-il avoir des conséquences éternelles ?",
      "De plus, si Dieu est miséricordieux, il pardonne toujours — le péché mortel ne peut pas être irréparable.",
    ],
    sedContra:
      "Saint Jean écrit : « Il y a un péché qui conduit à la mort » (1 Jn 5, 16). Le Concile de Trente (sess. VI, can. 23) enseigne que le péché mortel détruit la grâce sanctifiante dans l'âme.",
    respondeo:
      "Saint Thomas enseigne (Ia-IIae, q. 72, a. 5 ; q. 87, a. 3) que le péché mortel est « mortel » car il détruit la vie surnaturelle de l'âme : 1) Il est dirigé contre un bien qui est la fin dernière (Dieu). 2) Il détruit la charité (amour de Dieu) dans l'âme. 3) Il mérite la peine éternelle (enfer), car il offense Dieu, Bien infini. La gravité du péché mortel ne vient pas de la durée de l'acte, mais de l'objet offensé (Dieu) et de la volonté délibérée de rejeter Dieu.",
    adArguments: [
      {
        type: "primum",
        content:
          "La faiblesse humaine n'excuse pas le péché mortel, car le péché mortel suppose un consentement délibéré de la volonté. La tentation n'est pas le péché ; le péché commence avec le consentement.",
      },
      {
        type: "secundum",
        content:
          "Dieu pardonne toujours à celui qui se repent. Le péché mortel est « irréparable » par les seules forces humaines, mais il est pardonné par la contrition parfaite et le sacrement de pénitence. La miséricorde de Dieu ne nie pas la gravité du péché.",
      },
    ],
    references: [
      "1 Jn 5, 16",
      "Trente, sess. VI, can. 23",
      "ST Ia-IIae, q. 72, a. 5",
    ],
  },
  {
    slug: "baptismus-tollat-peccatum-originale",
    question:
      "Utrum baptismus tollat peccatum originale ?",
    category: DisputatioCategory.THEOLOGIE_DOGMATIQUE,
    source: "Le Péché Originel",
    objections: [
      "Il semble que le baptême ne puisse pas effacer le péché originel, car un rite extérieur (eau, paroles) ne peut pas opérer un changement intérieur dans l'âme.",
      "De plus, si le péché originel est transmis par génération, comment un acte sacramentel peut-il interrompre cette transmission ?",
    ],
    sedContra:
      "Le Concile de Trente (sess. V, can. 5) définit : « Si quelqu'un nie que, par la grâce de Notre-Seigneur Jésus-Christ, conférée dans le baptême, la culpabilité du péché originel soit remise [...] qu'il soit anathème. » Saint Paul écrit : « Nous avons été ensevelis avec lui par le baptême dans la mort » (Rm 6, 4).",
    respondeo:
      "Le baptême efface le péché originel par la grâce sanctifiante qui est infusée dans l'âme. Le sacrement est cause instrumentale de la grâce : l'eau signifie la purification et la produit réellement par la vertu du Christ. Le baptême ne supprime pas la concupiscence (tendance au péché), mais la culpabilité originelle est entièrement remise.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le rite extérieur n'opère pas par sa propre vertu, mais comme instrument du Christ. C'est le Christ qui, par le sacrement, purifie l'âme.",
      },
      {
        type: "secundum",
        content:
          "Le baptême interrompt la transmission de la culpabilité originelle pour les générations futures nées de parents baptisés, car le baptême restaure la grâce sanctifiante dans la nature humaine.",
      },
    ],
    references: [
      "Rm 6, 4",
      "Trente, sess. V, can. 5",
      "ST IIIa, q. 69",
    ],
  },
];

// ===== ECCLÉSIOLOGIE =====

export const disputationesEcclesiologie: Disputatio[] = [
  {
    slug: "ecclesia-sit-necessaria-ad-salutem",
    question:
      "Utrum Ecclesia catholica sit necessaria ad salutem ?",
    category: DisputatioCategory.ECLESIOLOGIE,
    source: "L'Église",
    objections: [
      "Il semble que l'Église catholique ne soit pas nécessaire au salut, car Dieu veut sauver tous les hommes, et la majorité de l'humanité n'a jamais été catholique.",
      "De plus, les protestants et les orthodoxes croient au Christ sans être dans l'Église catholique. S'ils ont la foi, ne suffit-elle pas ?",
    ],
    sedContra:
      "Le Concile de Florence (Cantate Domino, 1442) enseigne : « La sainte Église romaine croit fermement, professe et prêche qu'aucun de ceux qui se trouvent en dehors de l'Église catholique [...] ne peuvent participer à la vie éternelle. » Le Concile Vatican I (Pastor Æternus) confirme la primauté et l'unicité de l'Église.",
    respondeo:
      "L'Église catholique est nécessaire au salut de nécessité de moyen, de trois manières : 1) Nécessité de précepte : le Christ a ordonné d'entrer dans l'Église. 2) Nécessité de moyen : les sacrements, canaux ordinaires de la grâce, sont dans l'Église. 3) Nécessité de fin : l'Église est le Corps mystique du Christ, en dehors duquel il n'y a pas de salut. Cependant, ceux qui, par ignorance invincible, ne connaissent pas l'Église mais cherchent Dieu sincèrement, peuvent être sauvés par le baptême de désir — mais ce salut extraordinaire passe toujours par le Christ et son Église.",
    adArguments: [
      {
        type: "primum",
        content:
          "Dieu veut sauver tous les hommes, mais par les moyens qu'il a établis : l'Église et ses sacrements. L'ignorance invincible est une exception, non une norme. L'Église a le devoir de prêcher à tous les peuples (Mt 28, 19).",
      },
      {
        type: "secundum",
        content:
          "La foi seule ne suffit pas : la foi sans les œuvres est morte (Jc 2, 26). Les protestants et orthodoxes ont des éléments de la vérité, mais la plénitude de la Révélation et les sacrements valides sont dans l'Église catholique.",
      },
    ],
    references: [
      "Florence, Cantate Domino (1442)",
      "Mt 28, 19",
      "Jc 2, 26",
      "Pastor Æternus (1870)",
    ],
  },
  {
    slug: "ecclesia-sit-visibilis",
    question:
      "Utrum Ecclesia sit visibilis et manifesta ?",
    category: DisputatioCategory.ECLESIOLOGIE,
    source: "L'Église",
    objections: [
      "Il semble que l'Église soit invisible, car l'Église véritable est le Corps mystique du Christ, qui est spirituel. Les structures visibles (pape, évêques, paroisses) ne sont que l'aspect extérieur.",
      "De plus, si l'Église est visible, pourquoi tant de divisions et de scandales dans l'Église historique ?",
    ],
    sedContra:
      "Le Christ dit : « Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée » (Mt 5, 14). Saint Robert Bellarmin définit l'Église comme « la communauté des hommes professant la foi chrétienne et la vraie religion, unis par la communion des sacrements, sous le gouvernement des pasteurs légitimes, et spécialement du Pontife Romain ».",
    respondeo:
      "L'Église est à la fois visible et invisible : visible dans ses structures (hiérarchie, sacrements, profession de foi), invisible dans sa vie intérieure (grâce, charité, Corps mystique). Les quatre notes (une, sainte, catholique, apostolique) visibles permettent de reconnaître l'Église du Christ. Les scandales et divisions ne suppriment pas la visibilité de l'Église ; ils sont les conséquences du péché dans les membres de l'Église.",
    adArguments: [
      {
        type: "primum",
        content:
          "L'Église est visible par nature, car elle est une société parfaite. Le Christ l'a fondée comme institution visible avec un chef visible (Pierre), des lois visibles (les sacrements), et une mission visible (prêcher toutes les nations).",
      },
      {
        type: "secundum",
        content:
          "Les scandales et divisions sont les conséquences du péché dans les membres de l'Église, non dans l'Église elle-même. L'Église est sainte dans sa tête (le Christ) et dans ses moyens (les sacrements), même si ses membres pèchent.",
      },
    ],
    references: [
      "Mt 5, 14",
      "Bellarmin, De Notis Ecclesiae",
    ],
  },
];

// ===== APOLOGETIQUE =====

export const disputationesApologetique: Disputatio[] = [
  {
    slug: "deus-sit-demonstrabilis",
    question:
      "Utrum Dei demonstrabilis sit per vias rationis ?",
    category: DisputatioCategory.APOLOGETIQUE,
    source: "Dieu — Existence et Attributs",
    objections: [
      "Il semble que l'existence de Dieu ne soit pas démontrable, car Kant a prouvé que les preuves métaphysiques de l'existence de Dieu sont invalides (critique de l'argument ontologique, cosmologique et téléologique).",
      "De plus, si l'existence de Dieu était démontrable, la foi serait inutile : croire, ce serait simplement constater un fait.",
    ],
    sedContra:
      "Le Concile Vatican I (Dei Filius, 1870) définit : « Dieu, principe et fin de toutes choses, peut être connu avec certitude par la lumière naturelle de la raison humaine, à partir des choses créées. » Saint Paul écrit : « Les perfections invisibles de Dieu, sa puissance éternelle et sa divinité, se voient comme à l'œil nu, depuis la création du monde, quand on les considère dans ses ouvrages » (Rm 1, 20).",
    respondeo:
      "Saint Thomas démontre l'existence de Dieu par cinq voies (Ia, q. 2, a. 3) : 1) Du mouvement : tout ce qui meut est mû par un autre → Premier Moteur immobile. 2) De la causalité efficiente : toute cause est causée par une autre → Cause Première. 3) Du contingent et du nécessaire : les êtres contingents exigent un Être Nécessaire. 4) Des degrés de perfection : les degrés de bien, de vrai, de beau exigent un maximum. 5) De la finalité : les êtres sans intelligence agissent en vue d'une fin → Intelligence ordonnatrice.",
    adArguments: [
      {
        type: "primum",
        content:
          "Kant a critiqué l'argument ontologique (l'existence est un prédicat réel), mais les cinq Voies de saint Thomas sont des arguments cosmologiques, non ontologiques. Elles partent de l'expérience (le mouvement, la causalité) et remontent à une cause nécessaire.",
      },
      {
        type: "secundum",
        content:
          "La démonstration philosophique de l'existence de Dieu ne supprime pas la foi : elle en est le préambule. La raison prouve que Dieu existe ; la foi nous dit qui il est (Trinité, Incarnation). La raison et la foi ne s'opposent pas, mais se complètent.",
      },
    ],
    references: [
      "Rm 1, 20",
      "Dei Filius (1870)",
      "ST Ia, q. 2, a. 3",
    ],
  },
];

// ===== ÉSCHATOLOGIE & MORALE =====

export const disputationesMorale: Disputatio[] = [
  {
    slug: "actum-intrinsece-malum-aliquando-permitti",
    question:
      "Utrum actus intrinsece malus aliquando permitti possit propter bonum maius ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Relativisme",
    objections: [
      "Il semble qu'un acte intrinsèquement mauvais puisse être permis pour un bien plus grand, car la doctrine du double effet permet de causer un mal en vue d'un bien.",
      "De plus, le réalisme politique exige parfois de choisir le « moindre mal ».",
      "De plus, certains théologiens proportionnalistes soutiennent qu'on peut évaluer la moralité en pesant les conséquences.",
    ],
    sedContra:
      "Saint Paul écrit : « Ne faisons pas le mal pour qu'il en arrive du bien » (Rm 3, 8). Le Concile de Trente (sess. VI, can. 21) condamne quiconque dit qu'il est permis de faire un acte intrinsèquement mauvais pour un bien.",
    respondeo:
      "Saint Thomas enseigne (Ia-IIae, q. 18, a. 2 ; q. 19, a. 5-6) que la moralité d'un acte dépend de trois éléments : l'objet, la fin et les circonstances. Un acte est intrinsèquement mauvais quand son objet est contraire à la loi naturelle. Pour ces actes, aucune fin bonne ne peut les rendre légitimes. La doctrine du double effet ne s'applique jamais aux actes intrinsèquement mauvais.",
    adArguments: [
      {
        type: "primum",
        content:
          "La doctrine du double effet est correcte, mais elle ne s'applique pas aux actes intrinsèquement mauvais. Elle permet seulement de causer un mal indirectement (collatéral), quand l'acte est bon en soi.",
      },
      {
        type: "secundum",
        content:
          "Le « moindre mal » n'est jamais un principe moral acceptable. On ne peut jamais choisir le mal volontairement. Ce qu'on peut faire, c'est supporter un mal qu'on ne peut pas empêcher.",
      },
      {
        type: "tertium",
        content:
          "Le proportionnalisme est une erreur, car il fait de la morale un calcul de conséquences, ce qui nie la nature intrinsèquement bonne ou mauvaise des actes.",
      },
    ],
    references: [
      "Rm 3, 8",
      "Trente, sess. VI, can. 21",
      "ST Ia-IIae, q. 18, a. 2",
    ],
  },
  {
    slug: "veritas-moralis-sit-obiectiva",
    question:
      "Utrum veritas moralis sit obiectiva et universalis ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Relativisme",
    objections: [
      "Il semble que la vérité morale ne soit pas objective, car les cultures diffèrent sur ce qui est bien et mal.",
      "De plus, les neurosciences montrent que nos jugements moraux sont le produit de mécanismes biologiques, pas de vérités objectives.",
      "De plus, Kant a montré que la morale est une construction de la raison autonome, sans besoin de Dieu.",
    ],
    sedContra:
      "Saint Paul écrit : « Quand les païens, qui n'ont pas la loi, font naturellement ce que prescrit la loi, ils montrent que l'œuvre de la loi est écrite dans leurs cœurs » (Rm 2, 14-15). Le Concile Vatican I (Dei Filius) enseigne que Dieu peut être connu avec certitude par la lumière naturelle de la raison.",
    respondeo:
      "Saint Thomas enseigne (Ia-IIae, q. 91, a. 2 ; q. 94, a. 4) que la loi naturelle est universelle, immuable et inscrite dans le cœur de tout homme. L'universalité de la loi naturelle se constate dans le fait que toutes les cultures reconnaissent certains interdits fondamentaux. Le relativiste confond la connaissance de la vérité (qui peut être obscure) et la réalité de la vérité (qui est objective).",
    adArguments: [
      {
        type: "primum",
        content:
          "Les différences culturelles portent sur l'application, non sur les principes. Toutes les cultures interdisent le meurtre innocent ; elles diffèrent sur qui est « innocent ». La loi naturelle peut être obscurcie par les passions, mais elle n'est pas détruite.",
      },
      {
        type: "secundum",
        content:
          "Les neurosciences décrivent le mécanisme biologique, pas la cause finale. Le fait que la morale ait un substrat neurologique ne signifie pas qu'elle est réductible à de la biologie.",
      },
      {
        type: "tertium",
        content:
          "Kant a eu raison de reconnaître l'universalité de la morale, mais il a eu tort de la détacher de Dieu. La loi naturelle n'est intelligible que si elle a un législateur (la loi éternelle, c'est-à-dire Dieu).",
      },
    ],
    references: [
      "Rm 2, 14-15",
      "Dei Filius (1870)",
      "ST Ia-IIae, q. 94",
    ],
  },
  {
    slug: "conscientia-sit-lex-suprema-morum",
    question:
      "Utrum conscientia sit lex suprema morum ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Relativisme",
    objections: [
      "Il semble que la conscience soit la norme suprême de la morale, car « il faut toujours suivre sa conscience ».",
      "De plus, le Concile Vatican II (Dignitatis Humanae §2) enseigne que « la personne humaine a le droit à la liberté religieuse ».",
      "De plus, les cas de conscience erronée montrent que l'obligation morale vient de la conscience elle-même.",
    ],
    sedContra:
      "Saint Thomas enseigne (Ia-IIae, q. 19, a. 5) : « La conscience n'est pas une loi, mais elle est l'application de la loi à un acte particulier. »",
    respondeo:
      "La conscience est le jugement pratique par lequel la personne détermine si un acte concret est bon ou mauvais. Elle est : 1) Le témoin intérieur de la loi naturelle, non la source de la morale. 2) Obligatoire : on doit suivre sa conscience, même erronée. 3) Faillible : la conscience peut être ignorante, endurcie ou faussée. La conscience est une norme subjective de moralité, mais elle n'est pas la source de la loi morale. Confondre les deux, c'est faire de l'homme le créateur de sa propre morale.",
    adArguments: [
      {
        type: "primum",
        content:
          "« Suivre sa conscience » est un devoir moral, mais cela ne signifie pas que la conscience est infaillible. On doit suivre sa conscience et la former selon la vérité objective.",
      },
      {
        type: "secundum",
        content:
          "La liberté de conscience, au sens vrai, signifie que la conscience est le témoin intérieur de la loi naturelle. Mais elle ne signifie pas que la conscience est indépendante de la vérité objective. Léon XIII enseigne que la vraie liberté est la « liberté de ne faire que ce qui est juste ».",
      },
      {
        type: "tertium",
        content:
          "Le fait que la conscience erronée oblige formellement ne prouve pas qu'elle est la source de la morale. C'est la loi naturelle qui oblige matériellement ; la conscience l'applique.",
      },
    ],
    references: [
      "ST Ia-IIae, q. 19, a. 5",
      "Libertas Praestantissimum (Léon XIII)",
    ],
  },
  {
    slug: "matrimonium-sit-vere-sacramentum",
    question:
      "Utrum matrimonium sit vere sacramentum Novae Legis ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Mariage",
    objections: [
      "Il semble que le mariage ne soit pas un véritable sacrement, car il est d'abord une institution naturelle (Gn 1-2), antérieure à tout sacrement.",
      "De plus, les non-baptisés peuvent se marier validement, mais ils ne reçoivent pas de sacrement.",
      "De plus, les protestants rejettent le mariage comme sacrement.",
    ],
    sedContra:
      "Saint Paul écrit : « Ce mystère est grand ; je dis cela en relation avec le Christ et avec l'Église » (Ép 5, 32). Le Concile de Trente (sess. XXIV, can. 1) définit que le mariage est véritablement un des sept sacrements de la loi évangélique.",
    respondeo:
      "Saint Thomas enseigne (Suppl., q. 42, a. 1-3) que le mariage est un véritable sacrement : 1) Institution divine : le Christ a élevé le mariage naturel à la dignité de sacrement. 2) Signe efficace : le mariage signifie et communique la grâce. Le mariage des non-baptisés est un contrat naturel légitime mais non un sacrement.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le mariage naturel existait avant le Christ, mais celui-ci l'a élevé à la dignité de sacrement, comme le baptême existait sous forme de rites avant de devenir sacrement.",
      },
      {
        type: "secundum",
        content:
          "Le mariage des non-baptisés est valide mais non sacramental. Le sacrement suppose la foi et la grâce sanctifiante.",
      },
    ],
    references: [
      "Ép 5, 32",
      "Trente, sess. XXIV, can. 1",
      "Suppl., q. 42",
    ],
  },
  {
    slug: "matrimonium-dissolvi-possit",
    question:
      "Utrum matrimonium dissolvi possit ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Mariage",
    objections: [
      "Il semble que le mariage puisse être dissous, car Moïse a autorisé le divorce (Dt 24, 1-4).",
      "De plus, dans de nombreux cas, le mariage est devenu une source de souffrance (violence, adultère).",
      "De plus, les lois civiles modernes autorisent le divorce.",
    ],
    sedContra:
      "Le Christ dit : « Ce que Dieu a uni, que l'homme ne le sépare pas » (Mt 19, 6). Le Concile de Trente (sess. XXIV, can. 5-7) condamne quiconque dit que le mariage consommé entre baptisés peut être dissous.",
    respondeo:
      "Le mariage est indissoluble de trois manières : 1) Par droit naturel : le lien conjugal ne peut être détruit par la volonté humaine. 2) Par droit divin : le Christ a élevé le mariage à l'indissolubilité absolue. 3) Par droit ecclésiastique : l'Église peut déclarer la nullité (si le consentement était invalide), mais pas dissoudre un mariage valide. La séparation de corps est légitime pour de graves motifs, mais le lien demeure.",
    adArguments: [
      {
        type: "primum",
        content:
          "La permission de Moïse était une concession à la dureté de cœur (Mt 19, 8), non un idéal divin. Le Christ restaure l'indissolubilité originelle.",
      },
      {
        type: "secundum",
        content:
          "L'indissolubilité ne signifie pas que les époux doivent supporter la violence. La séparation de corps est légitime en cas de danger grave. Mais la séparation ne dissout pas le lien.",
      },
      {
        type: "tertium",
        content:
          "L'Église ne peut pas s'adapter à une loi civile qui contredit la loi divine. Le divorce civil est une injustice.",
      },
    ],
    references: [
      "Mt 19, 6-9",
      "Trente, sess. XXIV, can. 5-7",
      "Suppl., q. 67",
    ],
  },
  {
    slug: "contraceptio-sit-intrinsece-mala",
    question:
      "Utrum usus contraceptivus inter coniuges sit intrinsece malus ?",
    category: DisputatioCategory.THEOLOGIE_MORALE,
    source: "Le Mariage",
    objections: [
      "Il semble que la contraception ne soit pas intrinsèquement mauvaise, car les couples ont le droit de planifier leur famille.",
      "De plus, la surpopulation est un réel problème.",
      "De plus, la pilule contraceptive est simplement un moyen de réguler la fertilité.",
    ],
    sedContra:
      "Pie XI enseigne (Casti Connubii, 1930) : « Tout usage du mariage, dans lequel l'acte est délibérément frustré de sa puissance naturelle et de sa fin procréatrice, viole la loi de Dieu et la loi naturelle. »",
    respondeo:
      "Saint Thomas enseigne (IIa-IIae, q. 154, a. 2-12) que : 1) La sexualité a deux significations inséparables : unitive et procreative. 2) La contraception est intrinsèquement mauvaise car elle rend délibérément stérile un acte naturellement procréatif. 3) La régulation naturelle des naissances est légitime, car elle respecte la nature de l'acte conjugal.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le droit de planifier la famille est légitime, mais doit être exercé selon la loi naturelle. La raison peut maîtriser les passions, mais pas dénaturer les actes.",
      },
      {
        type: "secundum",
        content:
          "Les problèmes démographiques sont réels, mais la solution passe par la justice sociale, non par la contraception.",
      },
      {
        type: "tertium",
        content:
          "La pilule contraceptive agit parfois comme abortif (empêchant la nidation). Même sans effet abortif, elle reste intrinsèquement mauvaise car elle rend délibérément stérile un acte naturellement procréatif.",
      },
    ],
    references: [
      "Casti Connubii (1930)",
      "Trente, sess. XXIV, can. 10",
      "ST IIa-IIae, q. 154",
    ],
  },
];

// ===== CRISE POST-CONCILIAIRE =====

export const disputationesCrise: Disputatio[] = [
  {
    slug: "sedevacantismus-classicus-possibilis",
    question:
      "Utrum sedevacantismus classicus sit possibilis et cohaerens ?",
    category: DisputatioCategory.CRISE,
    source: "Le Sédévacantisme",
    objections: [
      "Il semble que le sédévacantisme classique soit incohérent, car l'Église doit être visible (note de catholicité). Si le siège est vacant depuis 65+ ans sans structure visible, l'Église a cessé d'être visible.",
      "De plus, si le siège est vacant, qui peut élire le prochain pape ? Le collège des cardinaux a été nommé par des « faux papes ».",
      "De plus, le sédévacantisme « totaliste » nie toute autorité dans l'Église, ce qui est contraire à la promesse du Christ (Mt 16, 18).",
    ],
    sedContra:
      "Le Canon 188 du CIC 1917 enseigne que les offices deviennent vacants ipso facto « par perte encourue pour hérésie, schisme, apostasie ». Le Canon 188 s'applique aussi au Pontife Romain.",
    respondeo:
      "Le sédévacantisme classique est logiquement possible mais pose un problème majeur d'indéfectibilité de la succession : 1) Sauvegarde l'indéfectibilité de la foi en n'attribuant pas les erreurs de V2 à l'autorité de l'Église. 2) Mais sacrifie l'indéfectibilité de la succession : siège vacant sans structure visible depuis 65+ ans. 3) Confond l'ordre réel et l'ordre juridique : déclare la nullité juridique sans jugement compétent. 4) Ne peut expliquer comment l'Église retrouvera un pape légitime.",
    adArguments: [
      {
        type: "primum",
        content:
          "L'indéfectibilité de la succession n'exige pas que le siège soit toujours occupé, mais qu'il puisse être occupé. La vacance prolongée est possible historiquement (Grand Schisme d'Occident : 37 ans).",
      },
      {
        type: "secundum",
        content:
          "Le problème du collège cardinalice est réel : si tous les cardinaux ont été nommés par de faux papes, ils n'ont pas le droit d'élire. La solution canonique est l'élection par les évêques légitimes restants ou par le peuple chrétien.",
      },
    ],
    references: [
      "CIC 1917, can. 188",
      "Mt 16, 18",
      "Pastor Æternus (1870)",
    ],
  },
  {
    slug: "fsspx-recognoscere-resistere-cohaerens",
    question:
      "Utrum positio FSSPX (recognoscere et resistere) sit cohaerens ?",
    category: DisputatioCategory.CRISE,
    source: "FSSPX — Reconnaître et Résister",
    objections: [
      "Il semble que la position FSSPX soit cohérente, car saint Thomas enseigne qu'on peut résister à un supérieur en certaines circonstances (IIa-IIae, q. 33, a. 4).",
      "De plus, la FSSPX sauvegarde la succession apostolique visible et maintient la messe traditionnelle.",
      "De plus, les grands saints ont parfois résisté aux papes (saint Paul résistant à saint Pierre).",
    ],
    sedContra:
      "Pie XII enseigne (Mystici Corporis, 1943) que « ceux qui sont unis au Vicaire du Christ par des liens de juridiction forment un seul Corps ». Le Canon 2316 du CIC 1917 excommunie ceux qui assistent un hérétique dans la propagation de son hérésie.",
    respondeo:
      "La position « Reconnaître et Résister » de la FSSPX comporte cinq erreurs fondamentales : 1) Reconnaît l'autorité mais refuse l'obéissance — attitude schismatique. 2) Attribue les erreurs de V2 à l'autorité légitime — sacrifice de l'indéfectibilité de la foi. 3) Être « una cum » au Canon tout en résistant est contradictoire. 4) Le « droit de résistance » de saint Thomas s'applique à un cas de danger public, mais pas à l'obéissance systématique désobéissance systématique. 5) La FSSPX accepte le CIC 1983 et le Novus Ordo comme légitimes, tout en les refusant pratiquement.",
    adArguments: [
      {
        type: "primum",
        content:
          "La résistance de saint Paul à saint Pierre (Ga 2, 11) était un acte public de charité, pas un refus systématique d'obéissance. Pierre n'enseignait pas l'erreur, il agissait par hypocrisie personnelle. La résistance à un pape qui enseigne l'hérésie dans un concile est une situation fondamentalement différente.",
      },
      {
        type: "secundum",
        content:
          "Sauvegarder la messe traditionnelle est bon, mais ne suffit pas si on reconnaît simultanément l'autorité qui l'a abolie. C'est un compromis qui attribue l'erreur à l'Église.",
      },
    ],
    references: [
      "Ga 2, 11",
      "ST IIa-IIae, q. 33, a. 4",
      "CIC 1917, can. 2316",
      "Mystici Corporis (1943)",
    ],
  },
  {
    slug: "sessio-sine-missio-possibilis",
    question:
      "Utrum sessio sine missio sit possibilis et cohaerens ?",
    category: DisputatioCategory.CRISE,
    source: "Sessio et Missio",
    objections: [
      "Il semble que la sessio sans missio soit impossible, car la désignation canonique (sessio) et l'autorité du Christ (missio) sont inséparables. Si un sujet est canoniquement désigné, il a nécessairement l'autorité.",
      "De plus, si un sujet a la sessio mais pas la missio, est-il pape ou non ? La distinction semble être un artifice pour éviter le sédévacantisme.",
      "De plus, la sessio sans missio est une invention moderne — on ne la trouve pas dans la théologie classique.",
    ],
    sedContra:
      "Saint Thomas distingue (IIa-IIae, q. 39, a. 4) entre l'office extérieur (qui peut être possédé par un hérétique) et la grâce intérieure (qui est perdue par l'hérésie). Le Canon 188 du CIC 1917 prévoit la perte d'office ipso facto pour hérésie, ce qui suppose que l'office peut être possédé sans la grâce.",
    respondeo:
      "La Thèse de Cassiciacum (P. Guérard des Lauriers O.P.) distingue : 1) Sessio (possessio sedis) : désignation canonique, acte humain (élection), relevant du droit humain (CIC). 2) Missio (auctoritas divina) : autorité de gouverner l'Église, reçue du Christ seul (Lc 10, 16), relevant du droit divin (jus divinum). Un sujet peut avoir la sessio sans la missio si un empêchement (hérésie formelle) empêche de recevoir la missio. La nullité est réelle (de facto) mais pas encore juridiquement établie (de jure), car personne n'a l'autorité pour juger le pape.",
    adArguments: [
      {
        type: "primum",
        content:
          "Juridiquement désigné mais théologiquement inhabilité : pas pape au sens plein. Le sujet conserve la sessio (désignation canonique) tant qu'un jugement compétent ne l'a pas vidée. Mais la missio fait défaut en raison de l'hérésie formelle.",
      },
      {
        type: "secundum",
        content:
          "L'analogie sacramentelle : un sacrement peut être validement conféré mais ne pas produire son effet (ex : communion sacrilège). De même, la sessio peut être canoniquement valide sans produire la missio.",
      },
      {
        type: "tertium",
        content:
          "La distinction n'est pas une invention moderne : elle repose sur la distinction thomiste entre l'office (qui relève du droit humain) et la grâce (qui relève du droit divin). Saint Thomas distingue l'office extérieur et la grâce intérieure.",
      },
    ],
    references: [
      "Lc 10, 16",
      "CIC 1917, can. 188",
      "ST IIa-IIae, q. 39, a. 4",
      "Cahiers de Cassiciacum (1979-1982)",
    ],
  },
  {
    slug: "modernismus-sit-compendium-haeresium",
    question:
      "Utrum modernismus sit compendium omnium hæresium ?",
    category: DisputatioCategory.CRISE,
    source: "Le Modernisme",
    objections: [
      "Il semble que le modernisme ne soit pas une hérésie, car il cherche à « adapter » la foi aux temps modernes, ce qui est légitime. L'Église a toujours évolué dans son expression de la foi.",
      "De plus, les modernistes (Loisy, Tyrrell) étaient des savants sincères qui cherchaient à défendre la foi face à la critique historique.",
      "De plus, traiter le modernisme de « synthèse de toutes les hérésies » semble excessif et peu charitable.",
    ],
    sedContra:
      "Saint Pie X, dans l'encyclique Pascendi Dominici Gregis (1907), définit : « Le modernisme est la synthèse de toutes les hérésies » (Modernismus est compendium omnium hæresium). Le décret Lamentabili (1907) condamne 65 propositions modernistes. Le motu proprio Sacrorum Antistitum (1910) impose le serment anti-moderniste.",
    respondeo:
      "Le modernisme est la synthèse de toutes les hérésies car il attaque les fondements mêmes de la foi : 1) Sur le dogme : le modernisme enseigne que le dogme évolue (évolution des dogmes), ce qui nie l'immuabilité de la Révélation. 2) Sur la foi : le modernisme fait de la foi un sentiment intérieur (immanentisme), non une adhésion de l'intelligence à des vérités révélées. 3) Sur l'Église : le modernisme fait de l'Église une démocratie (collegialité), non une monarchie divinement instituée. 4) Sur les sacrements : le modernisme fait des sacrements des signes de sentiments, non des causes efficaces de la grâce. 5) Sur l'Écriture : le modernisme applique le criticisme rationaliste à la Bible, niant l'inspiration divine.",
    adArguments: [
      {
        type: "primum",
        content:
          "L'expression de la foi peut évoluer (développement doctrinal), mais le contenu de la foi est immuable. Le dogme ne « progresse » pas en changeant de sens, mais en étant mieux compris. Le modernisme confond développement et évolution.",
      },
      {
        type: "secundum",
        content:
          "La sincérité des modernistes ne change rien à l'erreur. On peut être sincère et hérétique. Le Magistère juge la doctrine, pas les intentions.",
      },
    ],
    references: [
      "Pascendi (1907)",
      "Lamentabili (1907)",
      "Sacrorum Antistitum (1910)",
    ],
  },
  {
    slug: "liberalismus-catholicus-cohaerens",
    question:
      "Utrum liberalismus catholicus sit cohaerens ?",
    category: DisputatioCategory.CRISE,
    source: "Le Libéralisme Catholique",
    objections: [
      "Il semble que le libéralisme catholique soit cohérent, car l'Église peut « dialoguer avec le monde moderne » sans trahir la foi.",
      "De plus, la liberté de conscience est un droit fondamental reconnu par l'Église moderne (Dignitatis Humanae).",
      "De plus, les libéraux catholiques (Lamennais, Montalembert) étaient des hommes de bonne volonté qui voulaient défendre l'Église.",
    ],
    sedContra:
      "Le Pape Grégoire XVI condamne (Mirari Vos, 1832) : « De cette fontaine empoisonnée de l'indifférentisme découle cette maxime absurbe et erronée, ou plutôt ce délire, qu'il faut assurer et garantir à chacun la liberté de conscience. » Le Syllabus (1864) condamne (prop. 15) que « tout homme est libre d'embrasser et de professer la religion qu'il aura réputée vraie selon la lumière de la raison ».",
    respondeo:
      "Le libéralisme catholique est incohérent car il tente de concilier deux principes contradictoires : 1) La souveraineté de la vérité (foi catholique) et la souveraineté de la liberté individuelle (libéralisme). 2) Léon XIII (Libertas Praestantissimum, 1888) enseigne que « l'erreur n'a aucun droit ». La liberté de conscience au sens libéral (droit de choisir sa religion) est contraire à la doctrine catholique.",
    adArguments: [
      {
        type: "primum",
        content:
          "Le dialogue avec le monde moderne est légitime s'il cherche à convertir le monde à la vérité. Mais le libéralisme catholique « dialogue » en acceptant les principes du monde (liberté, égalité, démocratie) comme des absolus, ce qui est une trahison.",
      },
      {
        type: "secundum",
        content:
          "La liberté de conscience, au sens catholique, signifie que la conscience est le témoin intérieur de la loi naturelle. Mais elle ne signifie pas que chaque homme a le droit de choisir sa religion. Léon XIII enseigne que la vraie liberté est la « liberté de ne faire que ce qui est juste ».",
      },
    ],
    references: [
      "Mirari Vos (1832)",
      "Quanta Cura (1864)",
      "Syllabus, prop. 15, 77-80",
      "Libertas Praestantissimum (1888)",
    ],
  },
  {
    slug: "indifferentismus-religiosus-cohaerens",
    question:
      "Utrum indifferentismus religiosus sit cohaerens ?",
    category: DisputatioCategory.CRISE,
    source: "L'Indifférentisme Religieux",
    objections: [
      "Il semble que l'indifférentisme soit cohérent, car « Dieu veut que tous les hommes soient sauvés » (1 Tm 2, 4). Si Dieu veut sauver tous, toutes les religions doivent mener à lui.",
      "De plus, les religions non-chrétiennes contiennent des éléments de vérité (loi naturelle, prière). Si elles contiennent de la vérité, elles ne sont pas totalement fausses.",
      "De plus, l'indifférentisme respecte la liberté humaine et la dignité de chaque croyant.",
    ],
    sedContra:
      "Le Concile de Florence (Cantate Domino, 1442) enseigne : « La sainte Église romaine croit fermement, professe et prêche qu'aucun de ceux qui se trouvent en dehors de l'Église catholique [...] ne peuvent participer à la vie éternelle. » Le Syllabus (1864) condamne (prop. 16-18) que les hommes peuvent trouver le salut dans n'importe quelle religion.",
    respondeo:
      "L'indifférentisme est incohérent pour trois raisons : 1) Logiquement : si une religion est vraie, les autres sont fausses (principe de non-contradiction). On ne peut pas dire que le catholicisme est vrai et que l'islam l'est aussi, car ils se contredisent. 2) Théologiquement : le Christ a dit : « Je suis le chemin, la vérité et la vie ; nul ne vient au Père que par moi » (Jn 14, 6). Le salut passe par le Christ et son Église. 3) Moralement : l'indifférentisme est une forme de paresse intellectuelle et spirituelle : refuser de chercher la vérité parmi les religions est un péché contre la vertu de foi.",
    adArguments: [
      {
        type: "primum",
        content:
          "Dieu veut sauver tous les hommes, mais par les moyens qu'il a établis : l'Église et ses sacrements. Les éléments de vérité dans les autres religions sont des préparations à l'Évangile, non des voies de salut autonomes.",
      },
      {
        type: "secundum",
        content:
          "Les éléments de vérité dans les autres religions sont incomplets et mélangés à des erreurs. Un rayon de vérité n'est pas la pleine lumière de la Révélation. L'Église catholique est l'unique Église du Christ.",
      },
    ],
    references: [
      "Florence, Cantate Domino (1442)",
      "Jn 14, 6",
      "1 Tm 2, 4",
      "Syllabus, prop. 16-18 (1864)",
    ],
  },
  {
    slug: "lex-ieiunii-post-vaticanum-ii-obligare-pergat",
    question:
      "Utrum lex ieiunii et abstinentiae post Vaticanum II obligare pergat ?",
    category: DisputatioCategory.DISCIPLINE,
    source: "Jeûne et Abstinence",
    objections: [
      "Il semble que la loi du jeûne n'oblige plus, car les évêques post-conciliaires ont aboli la plupart des jours de jeûne et d'abstinence, et la coutume universelle semble confirmer cette abolition.",
      "De plus, l'épikie permet de suivre l'esprit de la loi plutôt que sa lettre.",
    ],
    sedContra:
      "La loi ecclésiastique du jeûne et de l'abstinence, promulguée par des autorités légitimes, ne peut être abolie que par une autorité de rang égal ou supérieur. Or, si les « autorités » post-conciliaires n'exercent pas légitimement l'autorité de l'Église (cf. Thèse de Cassiciacum), leurs abolitions n'ont pas force de loi.",
    respondeo:
      "La question est double : 1) En droit : la loi traditionnelle du jeûne et de l'abstinence, promulguée par des papes légitimes, reste en vigueur tant qu'elle n'est pas légitimement abrogée. 2) En fait : les dispenses accordées avant V2 étaient des mesures temporaires (guerre), non une abrogation. L'épikie ne peut être invoquée que si le législateur dispenserait. Or, le législateur légitime a certainement voulu que les fidèles jeûnent.",
    adArguments: [
      {
        type: "primum",
        content:
          "La coutume universelle contre la loi ne peut abroger une loi divine ou ecclésiastique que si le législateur consent. Or, le silence des « autorités » post-conciliaires n'est pas un consentement légitime.",
      },
      {
        type: "secundum",
        content:
          "L'épikie est une interprétation bénigne de la loi en cas d'absence du législateur. Mais il est plus conforme à l'esprit du législateur de jeûner que de ne pas jeûner, car la pénitence est d'obligation perpétuelle.",
      },
    ],
    references: [
      "Thèse de Cassiciacum",
      "Notre-Dame des Dons — Règles du jeûne",
    ],
  },
  {
    slug: "praeceptum-modestiae-externae-necessarium",
    question:
      "Utrum praeceptum modestiae externae sit necessarium ad salutem ?",
    category: DisputatioCategory.DISCIPLINE,
    source: "Règles de Modestie",
    objections: [
      "Il semble que la modestie extérieure ne soit pas nécessaire au salut, car Dieu regarde le cœur et non l'apparence (1 S 16, 7). La tenue vestimentaire est une question d'indifférence morale.",
      "De plus, imposer des règles de tenue vestimentaire est un retour au légalisme pharisaïque que le Christ a condamné.",
    ],
    sedContra:
      "Saint Paul enseigne : « Les femmes vêtues d'une manière convenable, avec pudeur et modestie » (1 Tm 2, 9). Le Seigneur dit : « Quiconque regarde une femme pour la convoiter a déjà commis l'adultère dans son cœur » (Mt 5, 28).",
    respondeo:
      "La modestie extérieure est nécessaire au salut pour deux raisons : 1) Justice envers Dieu : le corps est temple du Saint-Esprit (1 Co 6, 19). 2) Charité envers le prochain : l'immodestie peut être une occasion de péché pour autrui. La modestie n'est pas légalisme : c'est une vertu intérieure qui s'exprime dans l'extérieur.",
    adArguments: [
      {
        type: "primum",
        content:
          "Dieu regarde le cœur, mais le corps est l'expression visible du cœur. Un cœur vraiment modeste cherche à se manifester par une tenue décente.",
      },
      {
        type: "secundum",
        content:
          "Le Christ a condamné le formalisme sans cœur des pharisiens, non l'obligation de la décence extérieure. Lui-même a ordonné de ne pas « scandaliser les petits » (Mt 18, 6).",
      },
    ],
    references: [
      "1 Tm 2, 9",
      "Mt 5, 28",
      "1 Co 6, 19",
      "ST IIa-IIae, q. 160",
    ],
  },
];

// ===== COLLECTION TOTALE =====

export const allDisputationes: Disputatio[] = [
  ...disputationesDogmatique,
  ...disputationesChristologie,
  ...disputationesPecheOriginel,
  ...disputationesEcclesiologie,
  ...disputationesApologetique,
  ...disputationesMorale,
  ...disputationesCrise,
];

// ===== HELPERS =====

export const getDisputatioBySlug = (
  slug: string
): Disputatio | undefined =>
  allDisputationes.find((d) => d.slug === slug);

export const getDisputationesByCategory = (
  category: DisputatioCategory
): Disputatio[] =>
  allDisputationes.filter((d) => d.category === category);

export const getDisputationesBySource = (
  source: string
): Disputatio[] =>
  allDisputationes.filter((d) => d.source === source);

export const getDisputatioCategories = (): DisputatioCategory[] =>
  Object.values(DisputatioCategory);
