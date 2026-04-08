/**
 * Données enrichies pour le livre de l'Exode
 * Livre II de la Bible - 40 chapitres - Pentateuque
 *
 * Contient:
 * - Résumé complet du livre
 * - Notes de lecture détaillées
 * - Plans des 40 chapitres
 * - Passages clés avec commentaires
 */

import type { BookSummary, BookReadingNotes, ChapterOutline, KeyPassage } from "@/data/types/enriched"

/* ============================================================================
 *
 * RÉSUMÉ DU LIVRE
 *
 * ============================================================================ */

export const exodusSummary: BookSummary = {
  id: "exodus",
  name: "Exode",
  frenchName: "Exode",
  abbreviation: "Ex",
  testament: "OLD",
  section: "01-Pentateuque",
  genre: "pentateuch",
  chapters: 40,

  overview: `Le livre de l'Exode raconte la libération miraculeuse des Hébreux de l'esclavage égyptien et l'établissement de l'alliance du Sinaï. C'est le livre de la rédemption divine, de la révélation de la sainteté de Dieu, et de la constitution d'Israël comme peuple saint.

Le mot "Exode" signifie "sortie" ou "départ" en grec, faisant référence à la sortie d'Égypte. Ce livre marque le passage de la famille de soixante-dix personnes (Gn 46:27) à une nation de plusieurs millions, organisée sous la loi de Dieu.

L'Exode peut être divisé en deux parties principales:
1. La rédemption d'Égypte (chapitres 1-18): l'oppression, l'appel de Moïse, les plaies, la Pâque, la traversée de la Mer Rouge
2. La révélation au Sinaï (chapitres 19-40): l'alliance, la loi, le tabernacle, le veau d'or, la gloire de Dieu`,

  authorship: {
    author: "Moïse",
    traditionalView: "La tradition juive et chrétienne attribue unanimement ce livre à Moïse, qui en est le protagoniste principal.",
    evidence: ["Le livre lui-même affirme que «Moïse écrivit tous les paroles de l'Éternel» (Ex 24:4)",
      "Le Nouveau Testament confirme l'auteur de Moïse (Mc 12:26 ; Lc 20:37 ; Ac 3:22 ; 7:37)", "Connaissance détaillée des coutumes égyptiennes et géographie du désert",
      "Style narratif et légal cohérent avec l'ensemble du Pentateuque"
    ],
    date: "Vers 1446 av. J.-C. (date précoce) ou 1260 av. J.-C. (date tardive)",
    circumstances: "Moïse a probablement écrit l'Exode pendant les quarante années dans le désert, compilant les traditions orales et les documents existants."
  },

  historicalContext: {
    period: "Vers 1446-1406 av. J.-C. (date précoce) ou XIIIe siècle av. J.-C. (date tardive)",
    egyptianContext: "Période du Nouvel Empire égyptien. Pharaon de l'oppression probablement Amenhotep II ou Ramsès II.", culturalSetting: "Israël était un peuple esclave en Égypte, soumis à durs travaux. Dieu les délivre pour en faire une nation sainte.",
    geopoliticalSituation: "L'Égypte était une superpuissance. Le Canaan était sous influence égyptienne, divisé en cités-États."
  },

  keyThemes: [
    {
      theme: "Rédemption divine",
      explanation: "L'Exode est le premier grand acte de rédemption dans la Bible, préfigurant le salut en Christ. Dieu libère son peuple par grâce, non par mérite."
    },
    {
      theme: "Alliance",
      explanation: "L'alliance du Sinaï établit Israël comme peuple de l'alliance, avec obligations mutuelles entre Dieu et son peuple."
    },
    {
      theme: "Sainteté de Dieu",
      explanation: "La loi révèle la sainteté absolue de Dieu et exige la séparation d'avec le péché. «Vous serez saints, car je suis saint.»"
    },
    {
      theme: "Présence de Dieu",
      explanation: "Le tabernacle manifeste la présence de Dieu au milieu de son peuple. La gloire divine remplit la tente."
    },
    {
      theme: "Providence",
      explanation: "Dieu pourvoit aux besoins de son peuple dans le désert (manne, eau, cailles) et le protège de ses ennemis."
    },
    {
      theme: "Obéissance",
      explanation: "La bénédiction dépend de l'obéissance à la loi de Dieu. Le veau d'or montre les conséquences de la désobéissance."
    }
  ],

  keyFigures: [
    {
      name: "Moïse",
      role: "Libérateur, prophète, médiateur de l'alliance, législateur", significance: "Type du Christ prophète, médiateur et libérateur. Il voit Dieu face à face et parle avec lui comme un ami."
    },
    {
      name: "Aaron",
      role: "Frère de Moïse, premier souverain sacrificateur",
      significance: "Médiateur du culte, mais aussi faible (veau d'or). Type du Christ comme souverain sacrificateur."
    },
    {
      name: "Pharaon",
      role: "Roi d'Égypte, adversaire de Dieu", significance: "Représente la résistance du monde à Dieu. Son cœur endurci montre le jugement divin."
    },
    {
      name: "Miriam",
      role: "Sœur de Moïse et d'Aaron, prophétesse", significance: "Première femme appelée prophétesse dans l'Écriture. Chante le cantique de la Mer Rouge."
    },
    {
      name: "Josué",
      role: "Assistant de Moïse, successeur désigné",
      significance: "Chef militaire fidèle, type de Christ qui conduit dans la terre promise."
    },
    {
      name: "Betsaleel",
      role: "Artisan divinement inspiré",
      significance: "Rempli de l'Esprit pour construire le tabernacle. Type de l'Église enrichie de dons spirituels."
    }
  ],

  keyPassages: [
    { reference: "Exode 3:14", description: "La révélation du nom de Yahvé: «Je suis celui qui suis.»" },
    { reference: "Exode 12:1-28", description: "Institution de la Pâque, type du sacrifice de Christ" },
    { reference: "Exode 14", description: "Traversée de la Mer Rouge, baptême de la mer" },
    { reference: "Exode 19:5-6", description: "Israël constitué royaume de sacrificateurs et nation sainte" },
    { reference: "Exode 20:1-17", description: "Les Dix Commandements, fondement de la loi morale" },
    { reference: "Exode 33:18-23", description: "Moïse demande de voir la gloire de Dieu" },
    { reference: "Exode 34:6-7", description: "Révélation des attributs de Dieu: miséricorde, fidélité, justice" },
    { reference: "Exode 40:34-38", description: "La gloire de Dieu remplit le tabernacle" }
  ],

  theologicalSignificance: `Le livre de l'Exode est fondateur pour la théologie biblique:

1. Doctrine de Dieu: Yahvé se révèle comme le Dieu qui libère, qui est saint, qui pardonne, qui habite au milieu de son peuple.

2. Doctrine du salut: L'Exode est le paradigme du salut dans toute l'Écriture: oppression → appel → libération → consécration.

3. Doctrine de l'alliance: L'alliance du Sinaï établit Israël comme peuple de Dieu avec obligations et promesses.

4. Doctrine du culte: Le tabernacle enseigne la nécessité d'un médiateur et d'un sacrifice pour approcher Dieu.

5. Christologie: Moïse, l'Agneau pascal, la manne, l'eau du rocher, le souverain sacrificateur sont des types de Christ.

6. Ecclesiologie: Israël comme "royaume de sacrificateurs" préfigure l'Église (1 Pi 2:9).

L'Exode révèle que Dieu est saint et juste, mais aussi miséricordieux et patient. Sa sainteté exige le jugement du péché, mais sa grâce pourvoit à un moyen de réconciliation.`,

  christologicalTypes: [
    {
      type: "Moïse",
      antitype: "Jésus-Christ",
      parallels: ["Enfant sauvé d'un massacre (Ex 1-2 ; Mt 2:13-18)", "Médiateur entre Dieu et le peuple (Ex 20:19 ; 1 Tm 2:5)",
        "Prophète comme Moïse (Dt 18:15 ; Ac 3:22)",
        "Berger du peuple (Ex 3:1 ; Jn 10:11)",
        "Jeûne 40 jours dans le désert (Ex 34:28 ; Mt 4:2)"
      ],
      ntReferences: ["Actes 3:22-23", "Hébreux 3:1-6, Jean 5:46, 2 Corinthiens 3:7-18"]
    },
    {
      type: "L'Agneau pascal", antitype: "Jésus-Christ",
      parallels: ["Agneau sans défaut (Ex 12:5 ; 1 Pi 1:19)",
        "Sang porté sur les linteaux (Ex 12:7)",
        "Mort à la place du fils aîné (Ex 12:12-13)",
        "Ossements non brisés (Ex 12:46 ; Jn 19:33-36)",
        "Mémorial perpétuel (Ex 12:14 ; Lc 22:19-20)"
      ],
      ntReferences: ["Jean 1:29", "1 Corinthiens 5:7, 1 Pierre 1:18-19, Apocalypse 5:6-14"]
    },
    {
      type: "La manne",
      antitype: "Jésus-Christ",
      parallels: ["Pain descendu du ciel (Ex 16:4 ; Jn 6:32-33)",
        "Nourriture quotidienne (Ex 16:16-21 ; Mt 6:11)",
        "Suffisante pour tous (Ex 16:18 ; 2 Co 8:15)",
        "Gardée dans l'arche (Ex 16:33-34 ; Hé 9:4)"
      ],
      ntReferences: ["Jean 6:31-35, 48-51", "1 Corinthiens 10:3-4, Apocalypse 2:17"]
    },
    {
      type: "Le Rocher dans le désert",
      antitype: "Jésus-Christ",
      parallels: ["Frappe pour donner l'eau (Ex 17:6 ; 1 Co 10:4)", "Accompagne le peuple (1 Co 10:4)",
        "Source d'eau vive (Ex 17:6 ; Jn 4:10-14 ; 7:37-39)"
      ],
      ntReferences: ["1 Corinthiens 10:4", "Jean 4:10-14, Jean 7:37-39"]
    },
    {
      type: "Le souverain sacrificateur",
      antitype: "Jésus-Christ",
      parallels: ["Vêtements sacrés (Ex 28)",
        "Médiation pour le peuple (Ex 28:12, 29-30)",
        "Entrée dans la présence de Dieu",
        "Sacrifice d'expiation (Lé 16, préfiguré en Ex 29)"
      ],
      ntReferences: ["Hébreux 4:14-16", "Hébreux 7:23-28, Hébreux 9:11-15, Hébreux 10:19-22"]
    }
  ],

  literaryStructure: {
    outline: [
      { section: "L'oppression en Égypte", chapters:"1:1-7"},
      { section: "La naissance et l'appel de Moïse", chapters:"2:1-7:7"},
      { section: "Les plaies d'Égypte", chapters:"7:8-12:36"},
      { section: "La Pâque et la sortie d'Égypte", chapters:"12:37-15:21"},
      { section: "Le voyage vers le Sinaï", chapters:"15:22-18:27"},
      { section: "L'alliance du Sinaï", chapters:"19:1-24:18"},
      { section: "Le tabernacle et le culte", chapters:"25:1-31:18"},
      { section: "Le veau d'or et le renouvellement", chapters:"31:19-34:35"},
      { section: "La construction du tabernacle", chapters:"35:1-40:33"},
      { section: "La gloire de Dieu", chapters:"40:34-38"}
    ]
  },

  readingTime: "Environ 3 heures pour une lecture normale, beaucoup plus pour une étude approfondie des lois et rituels."
}

/* ============================================================================
 *
 * NOTES DE LECTURE
 *
 * ============================================================================ */

export const exodusReadingNotes: BookReadingNotes = {
  bookId: "exodus",
  introduction: `L'Exode est le livre central du Pentateuque, reliant les promesses faites aux patriarches (Genèse) à la conquête de la terre promise (Josué). Il raconte la naissance d'Israël comme nation.

Ce livre doit son nom à la Septante (traduction grecque) qui l'appelle "Exodos", signifiant "sortie' ou "départ", se référant à la sortie d'Égypte. En hébreu, il est intitulé "Elle Shemoth' ('Voici les noms') d'après ses premiers mots.

L'Exode répond à la crise créée par la fin de la Genèse: le peuple élu est en Égypte, loin de la terre promise. Comment Dieu accomplira-t-il ses promesses? La réponse passe par la rédemption, la révélation et la consécration.`,

  sections: [
    {
      title: "L'oppression en Égypte (1:1-22)", summary: "Les Israélites se multiplient en Égypte, mais un nouveau pharaon qui ne connaissait pas Joseph les réduit en esclavage.",
      keyQuotes: ["Mais le peuple d'Israël se multipliait et se fortifiait; il devint très puissant, et le pays en fut rempli. (1:7)", "Le roi d'Égypte dit aux sages-femmes hébreues... «Si c'est un fils, vous le ferez mourir; si c'est une fille, elle vivra.» (1:15-16)",
        "Les sages-femmes craignirent Dieu... Dieu fit du bien aux sages-femmes. (1:17, 20-21)"
      ],
      concepts: [
        { term: "Providence", explanation: "Dieu pourvoit à la croissance d'Israël malgré l'oppression. La crainte de Dieu prime sur la peur de l'homme."},
        { term: "Désobéissance civile", explanation: "Les sages-femmes désobéissent à Pharaon pour obéir à Dieu. Premier exemple de résistance à l'injustice."}
      ],
      theologicalNotes: "La croissance d'Israël accomplit la promesse à Abraham (Gn 12:2; 15:5). L'oppression est le contexte dans lequel Dieu va se révéler comme Libérateur. La crainte de Dieu est le début de la sagesse et de la résistance au mal."
    },
    {
      title: "La naissance et la vocation de Moïse (2:1-7:7)",
      summary: "Moïse naît, est sauvé des eaux, élevé à la cour d'Égypte, fuit au désert, et est appelé par Dieu au buisson ardent.", keyQuotes: ["La femme conçut et enfanta un fils... elle le cacha trois mois. (2:2)",
        "L'Éternel dit: «J'ai vu la misère de mon peuple... Je suis descendu pour le délivrer.» (3:7-8)",
        "Je suis celui qui suis. (3:14)",
        "Va, et je serai avec ta bouche. (4:12)",
        "Israël, mon fils premier-né... Laisse partir mon fils. (4:22-23)"
      ],
      concepts: [
        { term: "Buisson ardent", explanation: "Théophanie où Dieu se révèle à Moïse. Le buisson qui brûle sans se consumer symbolise Dieu qui se consume sans s'épuiser, et Israël qui subsiste dans l'épreuve."},
        { term: "Nom de Yahvé", explanation: "YHWH (יְהוָה) signifie «Je suis» ou "Je serai". Nom covenantel de Dieu, lié à sa présence fidèle et à son action.' },
        { term: "Médiateur", explanation:"Moïse comme intermédiaire entre Dieu et le peuple, type de Christ."}
      ],
      theologicalNotes: "L'appel de Moïse révèle Dieu comme celui qui voit, entend, connaît et descend vers les opprimés. Le nom YHWH exprime sa présence constante et sa fidélité à ses promesses. La résistance de Moïse (4:10-17) contraste avec la puissance de Dieu qui travaille à travers la faiblesse humaine."
    },
    {
      title: "Les plaies d'Égypte (7:8-12:36)", summary: "Dieu envoie dix plaies sur l'Égypte pour contraindre Pharaon à libérer Israël, manifestant sa puissance sur les dieux égyptiens.", keyQuotes: ["Je ferai la distinction entre mon peuple et ton peuple. (8:22-23)",
        "Il y aura de la grêle dans tout le pays d'Égypte... seulement sur les serviteurs de Pharaon. (9:24-26)", "L'Éternel donna la grâce au peuple en faveur des Égyptiens. (11:3)", "Contre tous les dieux de l'Égypte, j'exercerai des jugements. (12:12)"
      ],
      concepts: [
        { term: "Plaies comme jugement", explanation:"Chaque plaie attaque une divinité égyptienne ou une ressource vitale, montrant la supériorité de Yahvé."},
        { term: "Cœur endurci", explanation: "Pharaon endurcit son cœur (7:13-14, 22; 8:15, 19, 32) ou Dieu l'endurcit (4:21; 7:3; 9:12; 10:1, 20, 27; 11:10; 14:4, 8, 17). Tension entre souveraineté divine et responsabilité humaine."},
        { term: "Distinction", explanation: "Dieu distingue entre son peuple et l'Égypte, montrant son élection protectrice."}
      ],
      theologicalNotes: "Les plaies sont un jugement contre les dieux égyptiens (Ex 12:12; Nb 33:4). Le Nil (Hapi), le soleil (Râ), les grenouilles (Héqet), etc., sont impuissants devant Yahvé. Le cœur de Pharaon montre comment le péché rend insensible à l'appel de Dieu, jusqu'à la destruction. L'endurcissement est à la fois jugement (résultat du péché) et instrument de Dieu pour manifester sa gloire (Rm 9:17-18)."
    },
    {
      title: "La Pâque (12:1-36)",
      summary: "Institution de la Pâque: l'agneau est sacrifié, son sang sur les portes protège du destructeur, et le repas commémore la délivrance.", keyQuotes: ["Ce mois sera pour vous le commencement des mois. (12:2)",
        "On prendra un agneau... sans défaut, mâle d'un an. (12:3-5)", "Le sang vous servira de signe... et je verrai le sang. (12:13)",
        "Vous le mangerez à la hâte... c'est la Pâque de l'Éternel. (12:11)", "Quand vos enfants vous diront: «Qu'est-ce que ce service pour vous?»... vous direz: «C'est le sacrifice de la Pâque.» (12:26-27)"
      ],
      concepts: [
        { term: "Agneau pascal", explanation: "Type du Christ, "l'Agneau de Dieu qui ôte le péché du monde" (Jn 1:29). Sans défaut (1 Pi 1:19), ossements non brisés (Jn 19:33-36).' },
        { term: "Sang sur les linteaux", explanation: "Symbole de protection par l'exécution substitutive. Le sang est la preuve que la mort a déjà frappé."},
        { term: "Mémorial perpétuel", explanation:"La Pâque devient fête commémorative, préfigurant la Cène (Lc 22:19-20; 1 Co 5:7-8)."}
      ],
      theologicalNotes: "La Pâque est l'événement fondateur de l'identité d'Israël. Elle enseigne la rédemption par substitution: l'agneau meurt à la place du fils aîné. Le sang est le signe visible d'une réalité invisible (la protection divine). Cette nuit marque le début du calendrier religieux d'Israël. Le Christ est notre Pâque sacrifié (1 Co 5:7), nous délivrant de l'esclavage du péché."
    },
    {
      title: "La traversée de la Mer Rouge (13:17-15:21)",
      summary: "Dieu ouvre la Mer Rouge devant Israël et la referme sur l'armée égyptienne. Le peuple chante la victoire.", keyQuotes: [ "L'Éternel allait devant eux, le jour dans une colonne de nuée pour les guider... et la nuit dans une colonne de feu pour les éclairer. (13:21),
        "Ne craignez point, tenez bon, et vous verrez la délivrance de l'Éternel. (14:13)", "L'Éternel combattra pour vous, et vous demeurerez tranquilles. (14:14)", "Les eaux se fendirent... Les enfants d'Israël entrèrent au milieu de la mer à sec. (14:21-22)", "Je chanterai à l'Éternel, car il a fait éclater sa gloire. (15:1)"
      ],
      concepts: [
        { term: "Colonne de nuée et de feu", explanation: "Présence protectrice et directrice de Dieu. Préfigure le Saint-Esprit qui guide l'Église."},
        { term: "Baptême de la mer", explanation: "Paul voit la traversée comme un baptême (1 Co 10:1-2). Passage de l'esclavage à la liberté."},
        { term: "Cantique de Moïse", explanation: "Premier chant de louange biblique. Exprime la victoire de Dieu sur les ennemis. Refait dans l'Apocalypse (15:3)."}
      ],
      theologicalNotes: "La traversée de la Mer Rouge est le miracle central de l'Ancien Testament. Il montre que Dieu délivre son peuple par des moyens impossibles aux humains. La mer est un symbole du chaos et de la mort; Dieu la maîtrise comme lors de la création. Ce passage est vu comme baptême (1 Co 10:2) et résurrection (Rm 6:4): mort à l'ancienne vie, naissance à la nouvelle. Le cantique de Marie (15:21) montre l'importance des femmes dans la louange."
    },
    {
      title: "Le désert jusqu'au Sinaï (15:22-18:27)", summary: "Dieu pourvoit aux besoins du peuple (eau, manne, cailles) et lui donne la victoire sur Amalek. Jéthro conseille de déléguer.",
      keyQuotes: [ "L'Éternel est mon guérisseur. (15:26),
        "Je ferai pleuvoir du pain pour vous... et vous saurez que je suis l'Éternel, votre Dieu. (16:12)", "Voici, je vais faire pleuvoir du ciel du pain... Le peuple mangea la manne. (16:4, 31)",
        "L'Éternel combattra pour vous contre Amalek. (17:16)", "Tu ne pourvais pas le faire seul... écoute maintenant ma voix. (18:18-19)"
      ],
      concepts: [
        { term: "Manne", explanation: "Type du Christ comme «pain de vie» (Jn 6:32-35, 48-51). Nourriture quotidienne, préfiguration du Notre Père ("donne-nous aujourd'hui notre pain quotidien").' },
        { term: "Eau du rocher", explanation: "Christ comme rocher frappé (1 Co 10:4). Eau vive de l'Esprit (Jn 4:10-14; 7:37-39)."},
        { term: "Jéthro et la délégation", explanation: "Sagesse pratique: le leadership doit être partagé. Modèle d'organisation ecclésiale."}
      ],
      theologicalNotes: "Le désert est lieu de testing et de formation. Dieu pourvoit aux besoins physiques (manne, eau, cailles) et spirituels (Sabbat, loi). La manne enseigne la dépendance quotidienne («donne-nous aujourd'hui»). Elle ne peut être stockée sauf pour le Sabbat. Le rocher qui suit les Israélites (1 Co 10:4) est identifié à Christ. La bataille contre Amalek (17:8-16) montre la victoire par la prière (Moïse lève les mains) et l'action combinée (Josué combat)."
    },
    {
      title: "L'alliance du Sinaï (19:1-24:18)", summary: "Dieu fait alliance avec Israël, donne les Dix Commandements et le Livre de l'Alliance. Le peuple accepte: «Nous ferons tout ce que l'Éternel a dit.»",
      keyQuotes: ["Vous avez vu ce que j'ai fait à l'Égypte... et je vous ai portés sur des ailes d'aigle. (19:4)", "Vous serez pour moi un royaume de sacrificateurs et une nation sainte. (19:6)",
        "Je suis l'Éternel, ton Dieu... Tu n'auras pas d'autres dieux devant ma face. (20:2-3)", "Tu ne feras aucune image taillée. (20:4)",
        "Tu ne prendras point le nom de l'Éternel, ton Dieu, en vain. (20:7)", "Souviens-toi du jour du repos, pour le sanctifier. (20:8)",
        "Honore ton père et ta mère. (20:12)",
        "Tu ne commettras point d'assassinat. Tu ne commettras point d'adultère. Tu ne commettras point de vol. (20:13-15)", "Tu ne porteras point de faux témoignage... Tu ne convoiteras point. (20:16-17)",
        "Nous ferons tout ce que l'Éternel a dit. (24:3, 7)"
      ],
      concepts: [
        { term: "Royaume de sacrificateurs", explanation: "Vocation d'Israël à être médiateur entre Dieu et les nations. Préfigure l'Église (1 Pi 2:9; Ap 1:6; 5:10)."},
        { term: "Dix Commandements", explanation: "Loi morale universelle, résumée dans l'amour de Dieu et du prochain (Mt 22:37-40). Base de la justice humaine."},
        { term: "Alliance conditionnelle", explanation: "Les bénédictions dépendent de l'obéissance (19:5; 23:20-33). "Si vous écoutez ma voix." Contrairement à l'alliance abrahamique inconditionnelle.' }
      ],
      theologicalNotes: "L'alliance du Sinaï constitue Israël comme nation sainte, séparée pour Dieu. Les Dix Commandements (Décalogue) sont le cœur de la loi morale de Dieu, applicable à tous les temps. Ils expriment la justice de Dieu et le chemin de la vie. Le Décalogue est divisé: commandements 1-4 (amour de Dieu), 5-10 (amour du prochain). Jésus les résume dans l'amour (Mt 22:37-40) et les approfondit (Mt 5:21-48). L'alliance sinaïtique est conditionnelle à l'obéissance, ce qui mènera à la rupture et à la nécessité d'une nouvelle alliance (Jr 31:31-34; Hé 8)."
    },
    {
      title: "Le tabernacle (25:1-31:18)",
      summary: "Dieu donne les instructions détaillées pour construire le tabernacle, sa cour, ses meubles, les vêtements sacerdotaux, et les sacrifices.",
      keyQuotes: ["Ils me feront un sanctuaire, et j'habiterai au milieu d'eux. (25:8)", "Tu feras tout d'après le modèle qui t'est montré sur la montagne. (25:40)", "Le chandelier... sera fait d'or battu. (25:31)", "L'arche... tu mettras le témoignage que je te donnerai. (25:16, 21)", "L'expiation... le sang... pour faire propitiation. (30:10)", "J'ai rempli de l'Esprit de Dieu... Betsaleel. (31:3)"
      ],
      concepts: [
        { term: "Tabernacle", explanation: "Tente de la rencontre, symbolisant la présence de Dieu au milieu de son peuple. Type de l'Incarnation (Jn 1:14) et de l'Église comme temple du Saint-Esprit (1 Co 3:16; Ép 2:19-22)."},
        { term: "Arche de l'alliance", explanation:"Trône de Dieu sur terre, contenant les tables de la loi. Lieu de propitiation (kapporet). Type du Christ où Dieu se révèle et pardonne."},
        { term: "Propitiation", explanation:"Kippour (כפור) signifie couvrir, expier. Le sang sur le propitiatoire apaise la colère de Dieu."}
      ],
      theologicalNotes: "Le tabernacle est le centre de la vie d'Israël, signe que Dieu habite au milieu de son peuple. Ses meubles symbolisent le Christ et le salut: l'arche (présence de Dieu), le propitiatoire (expiation), la table (nourriture), le chandelier (lumière), l'autel des parfums (prières), l'autel des holocaustes (sacrifice). Les vêtements du souverain sacrificateur (ch. 28) révèlent sa fonction de médiateur. Le tabernacle terrestre est copie du céleste (Hé 8:5; 9:11, 23-24)."
    },
    {
      title: "Le veau d'or et le renouvellement (32:1-34:35)", summary: "Pendant que Moïse est sur la montagne, le peuple fait un veau d'or. Moïse intercède, et Dieu renouvelle l'alliance.", keyQuotes: [ "Fais-nous un dieu... car ce Moïse... nous ne savons pas ce qui lui est arrivé. (32:1),
        "Voici ton dieu, Israël, qui t'a fait sortir du pays d'Égypte. (32:4)", "L'Éternel dit à Moïse: «Va, descends; car ton peuple... s'est corrompu.» (32:7)",
        "Laisse ma colère s'enflammer contre eux... et je ferai de toi une grande nation. (32:10)", "Pourquoi, ô Éternel, ta colère s'enflammerait-elle contre ton peuple? (32:11)", "Maintenant, si tu pardonnes leur péché... sinon, efface-moi de ton livre. (32:32)",
        "Je ferai passer toute ma bonté devant ta face. (33:19)",
        "L'Éternel, l'Éternel, Dieu miséricordieux et compatissant, lent à la colère, riche en bonté et en fidélité. (34:6)"
      ],
      concepts: [
        { term: "Idolâtrie", explanation: "Le veau d'or représente une fausse représentation de Dieu. L'idolâtrie substitue une créature au Créateur."},
        { term: "Intercession", explanation:"Moïse intercède pour le peuple, type de Christ qui intercède pour les siens (Hé 7:25; Rm 8:34; 1 Jn 2:1)."},
        { term: "Bonté de Dieu", explanation: "Auto-révélation de Dieu en 34:6-7, récitée dans tout l'AT (Nb 14:18; Né 9:17; Ps 86:15; 103:8; 145:8; Jr 32:18; Jl 2:13; Jn 4:2)."}
      ],
      theologicalNotes: "L'épisode du veau d'or montre la rapidité avec laquelle le peuple tombe dans l'idolâtrie. Alors même que Dieu donne les instructions du tabernacle, le peuple désobéit. L'intercession de Moïse est un modèle de prière: il plaide la grâce de Dieu, l'honneur de son nom parmi les nations, et s'offre lui-même en substitution. Dieu révèle son essence en 34:6-7: miséricordieux mais juste, pardonnant mais ne tenant point le coupable innocent. Cette auto-révélation devient la formule standard de la grâce dans l'AT."
    },
    {
      title: "La construction du tabernacle (35:1-40:33)",
      summary: "Le peuple construit le tabernacle selon les instructions divines. Les artisans remplis de l'Esprit travaillent avec générosité.", keyQuotes: ["Tout homme dont le cœur est bien disposé... apportera une offrande. (35:5)",
        "Les enfants d'Israël apportèrent des offrandes volontaires... (35:21, 29)", "L'œuvre suffisait... et il y en avait trop. (36:5, 7)", "Betsaleel... et Oholiab... et tout homme habile... firent tout ce que l'Éternel avait ordonné. (36:1)", "On fit l'arche... la table... le chandelier... l'autel... la cuve. (37-38)", "Voici, je l'ai fait selon ce que tu m'as ordonné. (39:43)"
      ],
      concepts: [
        { term: "Offrande volontaire", explanation:"Le tabernacle est financé par des dons libres. Dieu aime un donneur joyeux (2 Co 9:7)."},
        { term: "Sagesse artisanale", explanation: "Le travail manuel est rempli de l'Esprit (31:3; 35:31). Tous les talents sont spirituels."},
        { term: "Obéissance exacte", explanation: "Le tabernacle est fait "selon tout ce que l'Éternel avait commandé" (39:32, 42, 43; 40:16, 19, 21, 23, 25, 26, 27, 29, 32). L'obéissance n'est pas approximative.' }
      ],
      theologicalNotes: "La construction du tabernacle est une œuvre collective impliquant tout le peuple. Les offrandes sont volontaires et généreuses, au point qu'il faut les arrêter (36:5-7). Les artisans sont «remplis de l'Esprit de Dieu» (31:3; 35:31), montrant que les compétences artistiques et techniques sont des dons spirituels. La répétition de «selon tout ce que l'Éternel avait commandé» souligne l'importance de l'obéissance exacte dans le culte. Cette obéissance conduit à la bénédiction finale: la gloire de Dieu remplit le tabernacle."
    },
    {
      title: "La gloire de Dieu (40:34-38)",
      summary: "La gloire de Dieu remplit le tabernacle et guide le peuple dans sa marche.",
      keyQuotes: ["La gloire de l'Éternel remplit le tabernacle. (40:34)", "Moïse ne pouvait pas entrer dans la tente d'assignation... car la gloire de l'Éternel remplissait le tabernacle. (40:35)", "La nuée couvrait la tente d'assignation, et la gloire de l'Éternel remplissait le tabernacle. (40:34)", "Quand la nuée s'élevait au-dessus du tabernacle, les enfants d'Israël partaient... Et si la nuée ne s'élevait pas, ils ne partaient pas. (40:36-37)", "La nuée de l'Éternel était sur le tabernacle le jour, et le feu y était la nuit. (40:38)"
      ],
      concepts: [
        { term: "Gloire (Kavod)", explanation:"Présence visible et manifeste de Dieu. La kavod remplit le sanctuaire et devient signe de sa présence permanente."},
        { term: "Nuée et feu", explanation: "Guides divins. Type du Saint-Esprit qui conduit l'Église (Ac 2:1-4)."}
      ],
      theologicalNotes: "Le livre se termine par la gloire de Dieu remplissant le tabernacle. C'est l'accomplissement du but de Dieu: habiter au milieu de son peuple. La gloire interdit l'entrée à Moïse, montrant la sainteté de Dieu et la nécessité d'un médiateur. La nuée guide les pérégrinations d'Israël, montrant que Dieu dirige son peuple. La gloire au tabernacle préfigure la gloire du Temple (1 R 8:10-11), de l'Incarnation (Jn 1:14), et de l'Église (Ép 2:19-22). L'Exode commence en esclavage et finit avec Dieu habitant parmi son peuple—un paradigme du salut."
    }
  ]
}

/* ============================================================================
 *
 * PLANS DES CHAPITRES
 *
 * ============================================================================ */

export const exodusChapterOutlines: ChapterOutline[] = [
  {
    chapter: 1,
    title: "La multiplication d'Israël et l'oppression", summary: "Les Israélites se multiplient en Égypte. Un nouveau pharaon qui ne connaissait pas Joseph les réduit en esclavage et ordonne de tuer les fils nouveau-nés.",
    keyEvents: ["Multiplication des Israélites en Égypte", "Nouveau pharaon ne connaissant pas Joseph, ", "Réduction en esclavage avec travaux durs", "Ordre de tuer les fils nouveau-nés hébreux", "Désobéissance des sages-femmes qui craignent Dieu", "Bénédiction de Dieu sur les sages-femmes", "Ordre de jeter les fils dans le Nil"],
    keyVerses: ["1:7", "1:15-17, ", "1:20-21"],
    theologicalNotes: "La croissance d'Israël accomplit la promesse à Abraham (Gn 12:2; 15:5). La crainte de Dieu prime sur la peur de l'homme. La désobéissance civile à l'injustice est justifiée. Dieu bénit ceux qui le craignent."
  },
  {
    chapter: 2,
    title: "La naissance de Moïse",
    summary: "Naissance et sauvetage de Moïse, son meurtre de l'Égyptien, sa fuite à Madian, et son mariage.", keyEvents: ["\Naissance d'un fils lévite", "Caché trois mois puis placé dans un panier sur le Nil", "Découvert par la fille de Pharaon", "Maman nourrice", "puis élevé à la cour", "Meurtre d'un Égyptien frappant un Hébreu", "Fuite vers Madian", "Sauve des filles de Jéthro auprès du puits", "Épouse Séphora", "fils Gershom"],
    keyVerses: ["\2:2-3", "2:10, ", "2:11-14", "2:15, ", "2:23-25"],
    theologicalNotes: "Moïse est sauvé des eaux comme Noah, préfigurant le salut. Son identité hébraïque est préservée malgré son éducation égyptienne. La tentative de délivrance par la force échoue; la vraie délivrance vient de Dieu. Le nom Gershom signifie "étranger là-bas", exprimant l'exil."
  },
  {
    chapter: 3,
    title: "Le buisson ardent",
    summary: "Dieu appelle Moïse depuis un buisson qui brûle sans se consumer et l'envoie délivrer Israël.", keyEvents: ["\Moïse paît le troupeau vers Horeb", "Buisson qui brûle sans se consumer", "Dieu appelle du milieu du buisson", "Je suis le Dieu de ton père", "\Je suis celui qui suis", ", 'Mission: délivrer Israël d'Égypte, ", "Je serai avec toi", "Nom de Yahvé révélé"],
    keyVerses: ["\3:2", "3:6, ", "3:14", "3:15, ", "3:18", "3:22"],
    theologicalNotes: "Théophanie au buisson ardent. Dieu se révèle comme le Dieu des pères, fidèle à ses alliances. Le nom YHWH exprime sa présence constante ("Je suis'). La mission de Moïse est impossible humainement mais possible avec Dieu."
  },
  {
    chapter: 4,
    title: "Les signes de Moïse",
    summary: "Dieu donne des signes à Moïse, qui objecte. Aaron devient son porte-parole. Moïse retourne en Égypte.",
    keyEvents: ["\Objections de Moïse", "Trois signes: bâton-serpent", "main lépreuse", "eau变成 sang", "Moïse objecte son manque d'éloquence", "Colère de Dieu contre Moïse, ", "Aaron comme porte-parole", "Zippora circoncit son fils", "Moïse et Aaron rencontrent les anciens"],
    keyVerses: ["\4:2-9", "4:10-17, ", "4:21", "4:24-26, ", "4:31"],
    theologicalNotes: "Les signes authentifient la mission divine. La faiblesse de Moïse est l'occasion de la puissance de Dieu. La circoncision de son fils est cruciale pour entrer dans le ministère. Le peuple croit et adore quand il entend que Dieu a visité son peuple."
  },
  {
    chapter: 5,
    title: "Première confrontation avec Pharaon",
    summary: "Moïse et Aaron demandent à Pharaon de laisser partir Israël. Pharaon refuse et augmente la charge de travail.",
    keyEvents: ["\Demande: ", "Laisse aller mon peuple", "Pharaon refuse: Qui est l'Éternel?", "Augmentation de la charge: paille non fournie", "Israélites blâment Moïse", "Moïse se plaint à Dieu"],
    keyVerses: ["\5:1-2", "5:4-18", "5:22-23"],
    theologicalNotes: "La libération commence par l'oppression accrue. "Qui est l'Éternel?' montre l'ignorance de Pharaon et le défi à l'autorité de Dieu. La foi est testée quand les choses empirent avant de s'améliorer."
  },
  {
    chapter: 6,
    title: "Réaffirmation de l'alliance", summary: "Dieu réaffirme son alliance et promet la délivrance. Généalogie de Lévi. Moïse objecte encore.",
    keyEvents: [ "\Promesse de délivrance\", ''Je vous ferai sortir... je vous prendrai pour mon peuple"", "Révélation du nom YHWH, 'Généalogie de Ruben, Siméon, Lévi, 'Moïse objecte: \les Israélites ne m'écouteront pas' },
    keyVerses: ["\6:2-3", "6:6-8", "6:12, ", "6:28-30"],
    theologicalNotes: "Le nom YHWH, révélé à Abraham, Isaac et Jacob, est maintenant connu dans son accomplissement: Dieu délivre son peuple. Les sept \"je' de 6:6-8 expriment la rédemption complète. Le doute de Moïse contraste avec la certitude de Dieu."
  },
  {
    chapter: 7,
    title: "Début des plaies: bâton et sang",
    summary: "Dieu envoie Moïse et Aaron à Pharaon. Le bâton d'Aaron devient serpent. La première plaie: les eaux deviennent sang.", keyEvents: ["\Moïse a 80 ans, Aaron 83", "Bâton d'Aaron devient serpent", "dévore les serpents des magiciens", "Première plaie: les eaux变成 sang", "Les magiciens reproduisent le signe", "Le sang dure 7 jours"],
    keyVerses: ["\7:1-2", "7:10-12", "7:20-21, ", "7:24-25"],
    theologicalNotes: "La victoire du bâton d'Aaron sur les serpents égyptiens montre la supériorité de Yahvé. Le sang comme première plaie est un jugement sur le Nil (dieu Hapi). Le cœur de Pharaon s'endurcit."
  },
  {
    chapter: 8,
    title: "Grenouilles, poux et mouches",
    summary: "Deuxième, troisième et quatrième plaies. Pharaon promet de laisser partir le peuple puis recule.",
    keyEvents: ["\2e plaie: grenouilles", "Pharaon demande qu'on prie pour lui", "3e plaie: poux (non reproduits par les magiciens), 'Magiciens: \C'est le doigt de Dieu", ", ", "4e plaie: mouches venimeuses", "Distinction entre Gosen et l'Égypte"],
    keyVerses: ["\8:8-10", "8:18-19", "8:22-24"],
    theologicalNotes: "Les magiciens reconnaissent leur impuissance: \"C'est le doigt de Dieu.' La distinction entre Gosen (terre de Goshen) et l'Égypte montre la protection de son peuple. Pharaon promet mais ne tient pas parole."
  },
  {
    chapter: 9,
    title: "Mortalité du bétail, ulcères et grêle",
    summary: "Cinquième, sixième et septième plaies. Certains Égyptiens craignent Dieu. Pharaon endure encore son cœur.",
    keyEvents: ["\5e plaie: mortalité du bétail", "Distinction entre le bétail d'Israël et d'Égypte", "6e plaie: ulcères", ", ", "7e plaie: grêle avec feu", "Avertissement: ceux qui craignent Dieu", "Pharaon reconnaît sa faute mais endurcit son cœur"],
    keyVerses: ["\9:4", "9:20-21", "9:27, ", "9:34-35"],
    theologicalNotes: "La distinction entre Israël et l'Égypte continue. Certains Égyptiens commencent à craindre Dieu. Pharaon reconnaît sa faute mais ne se repent pas vraiment (9:27, 34-35). La grêle avec feu est un phénomène surnaturel terrifiant."
  },
  {
    chapter: 10,
    title: "Sauterelles et ténèbres",
    summary: "Huitième et neuvième plaies. Les serviteurs de Pharaon l'exhortent à laisser partir Israël. Pharaon veut retenir le bétail.", keyEvents: ["\8e plaie: sauterelles", "Serviteurs: Laisse aller les hommes", "Sauterelles détruisent tout", "9e plaie: ténèbres épaisses", "Pharaon offre de laisser aller le peuple mais pas le bétail", "", "Ton peuple ira... mais pas une bête", "Moïse refuse: 'Nous offrirons les sacrifices à l'Éternel", ", ", "Pharaon chasse Moïse: "\Ne reparaís plus devant ma face"],
    keyVerses: ["\10:7", "10:24-26", "10:28"],
    theologicalNotes: "Les serviteurs de Pharaon reconnaissent que l'Égypte est ruinée. Pharaon veut garder le bétail pour assurer le retour des Israélites. Moïse refuse de compromettre: tout doit être consacré à Dieu. La rupture avec Pharaon est complète."
  },
  {
    chapter: 11,
    title: "Annonce de la dixième plaie",
    summary: "Dieu annonce la mort des premiers-nés. Le peuple trouvera faveur aux yeux des Égyptiens.",
    keyEvents: ["\Dernière plaie annoncée", "Tous les premiers-nés mourront", "Distinction entre l'Égypte et Israël", "Prophétie: le peuple partira avec des richesses, 'Faveur des Égyptiens"],
    keyVerses: ["\11:2-3", "11:5", "11:7"],
    theologicalNotes: "La dixième plaie est le jugement ultime. La distinction finale entre Israël et l'Égypte est absolue. Les Égyptiens, ennemis hier, donnent leurs richesses demain—renversement complet de situation."
  },
  {
    chapter: 12,
    title: "La Pâque",
    summary: "Institution de la Pâque: l'agneau est sacrifié, son sang sur les portes protège. Les premiers-nés égyptiens meurent. Israël part.", keyEvents: ["\Calendrier: Nisan est le premier mois", "Choix de l'agneau sans défaut", "Sang sur les linteaux", "Manger rôti avec des herbes amères", "Manger à la hâte", "Destruction des premiers-nés à minuit", ", 'Cri en Égypte, ", "Pharaon appelle Moïse la nuit", "Depart d'Égypte"],
    keyVerses: ["\12:2-3", "12:5-7, ", "12:11-13", "12:29-30, ", "12:37", "12:42"],
    theologicalNotes: "La Pâque est la fête de la rédemption par substitution. L'agneau meurt à la place du fils aîné. Le sang est le signe visible de la protection divine. Cette nuit marque le début de l'histoire d'Israël comme nation libre. Le Christ est notre Pâque (1 Co 5:7)."
  },
  {
    chapter: 13,
    title: "Consécration des premiers-nés et départ",
    summary: "Consécration des premiers-nés. Fête des pains sans levain. Colonne de nuée et de feu.",
    keyEvents: ["\Consécration des premiers-nés à Dieu", "Pasque de pain sans levain 7 jours", "Récit aux enfants", ", 'Détour par le désert pour éviter la guerre, 'Colonne de nuée le jour, feu la nuit"],
    keyVerses: ["\13:2", "13:8-9", "13:17-18, ", "13:21-22"],
    theologicalNotes: "Les premiers-nés appartiennent à Dieu car il a épargné les leurs. Le levain symbolise le péché qui doit être purifié. La colonne guide et protège, signe de la présence constante de Dieu."
  },
  {
    chapter: 14,
    title: "Traversée de la Mer Rouge",
    summary: "Pharaon poursuit Israël. Dieu ouvre la Mer Rouge. L'armée égyptienne est détruite.", keyEvents: ["\Pharaon poursuit avec 600 chars", "Le peuple craint et se plaint", "Moïse: ", "Ne craignez point... l'Éternel combattra pour vous", "Dieu sépare les eaux", "Traversée à sec", "L'armée égyptienne entre dans la mer", "Les eaux reviennent, l'armée est détruite", "Israël voit les cadavres sur le rivage et croit"],
    keyVerses: ["\14:13-14", "14:21-22", "14:28-31"],
    theologicalNotes: "La traversée est le miracle central de l'AT. Dieu combat pour son peuple. La mer, symbole du chaos et de la mort, est maîtrisée. La foi d'Israël naît de la délivrance. Paul voit ce baptême dans la mer (1 Co 10:2)."
  },
  {
    chapter: 15,
    title: "Cantique de Moïse et de Marie",
    summary: "Cantique de victoire après la traversée. Eau amère变成 douce. Premier camp à Élim.",
    keyEvents: ["\Cantique de Moïse: \", "Je chanterai à l'Éternel", "Miriam et les femmes dansent, 'Eaux amères à Mara, ", "Promesse: "Je suis l'Éternel qui te guérit\", "Camp à Élim avec 12 sources et 70 palmiers"],
    keyVerses: ["\15:2", "15:11, ", "15:13", "15:18, ", "15:26"],
    theologicalNotes: "Le cantique de Moïse est le premier chant de louange biblique. Il célèbre la victoire de Dieu sur les ennemis. Marie (Miriam) prophétesse conduit les femmes dans la louange. À Mara, l'obéissance à la parole de Dieu transforme l'amertume en douceur. Élim est un lieu de rafraîchissement avant les épreuves."
  },
  {
    chapter: 16,
    title: "La manne et les cailles",
    summary: "Le peuple murmure contre la faim. Dieu envoie la manne et les cailles. Institution du Sabbat.",
    keyEvents: ["\Murmures dans le désert de Sin", "Souvenir de la viande et du pain en Égypte", "Dieu promet pain et viande", "Cailles le soir", "La manne le matin", "Chacun ramasse selon ses besoins", "Double portion le sixième jour", "Le Sabbat: pas de manne", "Pot de manne gardé pour les générations"],
    keyVerses: ["\16:4", "16:11-12, ", "16:15", "16:19-20, ", "16:23", "16:31, ", "16:35"],
    theologicalNotes: "La manne est le "pain du ciel' (Ps 78:24; 105:40), type du Christ (Jn 6:31-35, 48-51). Elle enseigne la dépendance quotidienne («donne-nous aujourd'hui»). Le Sabbat est testé: la manne pour deux jours le sixième jour. Le pot de manne est un témoignage pour les générations futures."
  },
  {
    chapter: 17,
    title: "Eau du rocher et Amalek",
    summary: "Eau jaillit du rocher frappé. Josué combat Amalek pendant que Moïse prie.",
    keyEvents: ["\Le peuple soiffe, murmure contre Moïse", "Dieu dit de frapper le rocher", "L'eau jaillit", "Amalek attaque à Rephidim, 'Josué combat, Moïse prie, ", "Mains levées: victoire", " mains baissées: défaite, 'Aaron et Hur soutiennent les mains de Moïse, 'Victoire, autel l'Éternel est mon bannière\", ""],
    keyVerses: ["\17:6", "17:11", "17:15"],
    theologicalNotes: "Le rocher qui suit Israël est Christ (1 Co 10:4). L'eau qui jaillit est l'Esprit (Jn 4:10-14; 7:37-39). La bataille contre Amalek combine l'action (Josué) et la prière (Moïse). Le nom 'Jéhovah-Nissi' (l'Éternel est mon bannière) proclame que Dieu donne la victoire."
  },
  {
    chapter: 18,
    title: "Jéthro et la délégation",
    summary: "Jéthro visite Moïse, apprend ce que Dieu a fait, et conseille de déléguer le jugement.",
    keyEvents: ["\Jéthro vient avec Séphora et les fils", "Moïse raconte les œuvres de Dieu", "Jéthro bénit Dieu", "Moïse juge seul le peuple de matin au soir", "Jéthro conseille de déléguer", "Choix d'hommes capables", "Structure: milliers, centaines, cinquantaines, dizaines", "Moïse juge les cas difficiles"],
    keyVerses: ["\18:9-11", "18:17-23", "18:24-26"],
    theologicalNotes: "Jéthro, païen, reconnaît le Dieu d'Israël comme suprême. La délégation est un principe de sagesse: un seul ne peut tout faire. Cette structure devient modèle pour l'organisation d'Israël. Le leadership partagé évite l'épuisement et améliore la justice."
  },
  {
    chapter: 19,
    title: "Arrivée au Sinaï et préparation",
    summary: "Israël arrive au Sinaï. Dieu propose une alliance. Le peuple est préparé pour la théophanie.",
    keyEvents: ["\Arrivée au désert de Sinaï", "Moïse monte vers Dieu", "Promesse: ", "Vous serez un royaume de sacrificateurs", "Le peuple accepte l'alliance", "Consécration du peuple: laver les vêtements", "Limites autour de la montagne", "Le troisième jour: tonnerre", "éclairs", "nuée épaisse", "Sonnette de trompette", "La montagne tremble"],
    keyVerses: ["\19:4-6", "19:8", "19:10-13, ", "19:16-19"],
    theologicalNotes: "L'alliance est proposée comme 'si vous écoutez ma voix.' La vocation d'Israël est d'être 'royaume de sacrificateurs et nation sainte,' titre appliqué à l'Église (1 Pi 2:9). La théophanie manifeste la sainteté terrifiante de Dieu. Le peuple doit être sanctifié pour approcher."
  },
  {
    chapter: 20,
    title: "Les Dix Commandements",
    summary: "Dieu prononce les Dix Commandements. Le peuple demande que Moïse soit médiateur.",
    keyEvents: ["\Les Dix Commandements prononcés", "1. Pas d'autres dieux, ", "2. Pas d'images taillées", "3. Ne pas prendre le nom en vain, ", "4. Le Sabbat", "5. Honorer père et mère", "6. Pas d'assassinat", "7. Pas d'adultère", "8. Pas de vol", ", ", "9. Pas de faux témoignage", "10. Pas de convoitise, 'Le peuple effrayé demande un médiateur, 'Moïse s'approche de la nuée épaisse"],
    keyVerses: ["\20:2-17", "20:18-19", "20:20-21"],
    theologicalNotes: "Les Dix Commandements sont la loi morale éternelle de Dieu. Ils résument l'amour de Dieu (1-4) et du prochain (5-10). Jésus les résume dans l'amour (Mt 22:37-40) et les approfondit (Mt 5:21-48). La crainte de Dieu conduit à la demande d'un médiateur, type de Christ."
  },
  {
    chapter: 21,
    title: "Lois sur l'esclavage et la violence", summary: "Lois sur les serviteurs hébreux, la violence, les blessures et les dommages.",
    keyEvents: ["\Serviteur hébreu: 6 ans puis liberté", "Épouse et enfants donnés par le maître", "Serviteur qui aime sa maîtresse", "Vente d'une fille comme servante", "Punition pour meurtre: mort", "Ville de refuge pour homicide involontaire", "Violence contre parents: mort", "Blessures", "dommages", "compensation"],
    keyVerses: ["\21:2-6", "21:12-14", "21:23-25, ", "21:26-27"],
    theologicalNotes: "La loi réglemente l'esclavage hébreu pour le rendre plus humain. La liberté est le but: six ans puis libération. Le talion (\"œil pour œil') est une limitation de la vengeance, non son encouragement. Les serviteurs ont des droits humains."
  },
  {
    chapter: 22,
    title: "Lois sur la propriété et la justice sociale",
    summary: "Lois sur le vol, les dommages, les prêts, et la protection des plus vulnérables.",
    keyEvents: ["\Voleur: restitution double, quadruple ou tué", "Dommages aux cultures ou bétail", "Responsabilité pour les emprunts", ", 'Séduire une vierge, 'Sorcellerie: interdite, 'Bestialité: interdite, 'Sacrifice à d'autres dieux: interdit", "Protection de l'étranger", "veuve", "orphelin", "Prêts sans intérêt", "Premiers-nés à Dieu"],
    keyVerses: ["\22:21-24", "22:25-27"],
    theologicalNotes: "La loi protège les vulnérables: étranger, veuve, orphelin. Dieu est leur défenseur. Les prêts sans intérêt empêchent l'exploitation. Le respect pour les premier-nés continue. La justice sociale est au cœur de la loi."
  },
  {
    chapter: 23,
    title: "Lois sur la justice et les fêtes",
    summary: "Lois sur les témoins, les fêtes annuelles, et les promesses de conquête.",
    keyEvents: ["\Pas de faux rapports", "Ne pas suivre la multitude", "Justice pour le pauvre comme le riche", "Aider l'ennemi en difficulté", "Juges intègres", "Année sabbatique", "Sabbat: repos pour les animaux", "Trois fêtes annuelles", "Promesses de conquête", "Angel de Dieu devant vous"],
    keyVerses: ["\23:6-8", "23:10-11", "23:14-17, ", "23:20-23"],
    theologicalNotes: "La justice ne doit pas dépendre du statut social. Le Sabbat s'étend aux animaux et à la terre. Les trois fêtes (Pâque, Pentecôte, Tabernacles) commémorent la délivrance. L'ange de Dieu est une promesse de protection pour la conquête."
  },
  {
    chapter: 24,
    title: "Confirmation de l'alliance", summary: "Le peuple accepte l'alliance. Moïse monte sur la montagne et voit Dieu.", keyEvents: ["\Moïse rapporte les paroles et les ordonnances", "Le peuple promet obéissance", "Alliance scellée par le sang", "Moïse, Aaron, et les anciens montent", "Ils voient Dieu et mangent", "Moïse monte pour recevoir les tables", "Nuée couvre la montagne six jours", "Appel de Dieu au septième jour", "Moïse reste 40 jours et nuits"],
    keyVerses: ["\24:3", "24:7, ", "24:8", "24:12, ", "24:18"],
    theologicalNotes: "L'alliance est scellée par le sang, préfigurant la nouvelle alliance (Lc 22:20). Le repas avec Dieu est une communion rare. Moïse voit une manifestation de Dieu mais pas son essence (33:20). Les 40 jours préparent la révélation du tabernacle."
  },
  {
    chapter: 25,
    title: "L'offrande et l'arche", summary: "Instructions pour l'offrande du tabernacle et la construction de l'arche.", keyEvents: ["\Offrande volontaire: or, argent, bronze, tissus", "Ils me feront un sanctuaire", "Arche: bois recouvert d'or", "Propitiatoire en or, 'Chérubins en or, ", "Témoignage dans l'arche"],
    keyVerses: ["\25:2", "25:8", "25:10-22"],
    theologicalNotes: "Dieu veut habiter au milieu de son peuple. Le tabernacle est un signe de sa présence. L'arche est le trône de Dieu sur terre, le lieu de l'expiation (propitiatoire). Les chérubins gardiens rappellent le jardin d'Éden. Le modèle doit être suivi exactement."
  },
  {
    chapter: 26,
    title: "Le tabernacle et le voile",
    summary: "Instructions pour les tentures, les planches, les voiles, et le voile intérieur.",
    keyEvents: ["\Tentures de fin lin avec chérubins", "Tentures de poils de chèvre", "Couvertures de peaux", "Planches et bases", "Voile intérieur séparant le lieu saint du très saint", "Rideau à l'entrée"],
    keyVerses: ["\26:31-33", "26:36-37"],
    theologicalNotes: "Le voile sépare la sainte présence de Dieu du peuple accessible au souverain sacrificateur une fois par an. Ce voile sera déchiré à la mort du Christ (Mt 27:51), ouvrant l'accès à Dieu. Les couleurs (bleu, pourpre, cramoisi) ont une signification symbolique."
  },
  {
    chapter: 27,
    title: "L'autel des holocaustes et la cour", summary: "Instructions pour l'autel des holocaustes, la cour, et l'huile pour le chandelier.", keyEvents: ["\Autel des holocaustes: bois recouvert de bronze", "Cornes aux quatre coins", "Outils: cendriers, pelles, bassins", ", 'Cour du tabernacle, 'Huile pure pour le chandelier, 'Perpétuité de la lampe"],
    keyVerses: ["\27:1-8", "27:9-19", "27:20-21"],
    theologicalNotes: "L'autel des holocaustes est le lieu du sacrifice, préfigurant le sacrifice de Christ. Les cornes symbolisent la puissance et la protection. La cour sépare le sacré du profane. La lampe perpétuelle représente la présence constante de Dieu."
  },
  {
    chapter: 28,
    title: "Les vêtements des sacrificateurs",
    summary: "Instructions détaillées pour les vêtements du souverain sacrificateur et des sacrificateurs.",
    keyEvents: ["\Sacrificateurs: saints vêtements", "Éphod: or", "bleu", "pourpre", "cramoisi", "Pectoral avec 12 pierres", ", ", "Ourim et Thoummim", "Robe de l'éphod", "Lame d'or sur la tiare: 'Saint à l'Éternel\", ", ", "Caleçon", "ceinture", "tunique"],
    keyVerses: ["\28:2", "28:6, ", "28:15-21", "28:29-30, ", "28:36", "28:42-43"],
    theologicalNotes: \"Les vêtres du souverain sacrificateur montrent sa fonction de médiateur. L'éphod représente le service. Le pectoral avec les 12 pierres porte les noms des tribus sur son cœur. Ourim et Thoummim sont les moyens de connaître la volonté de Dieu. La lame 'Saint à l'Éternel' consacre le peuple."
  },
  {
    chapter: 29,
    title: "Consécration des sacrificateurs",
    summary: "Cérémonie de consécration d'Aaron et de ses fils comme sacrificateurs.", keyEvents: ["\Sacrifice d'un jeune taureau", "Sacrifice d'un bélier, ", "Sacrifice d'un second bélier", "Application du sang, 'Onction d'huile, ", "Offrandes", "Sept jours de consécration", "Autel expié", "sanctifié"],
    keyVerses: ["\29:1", "29:5-9, ", "29:20-21", "29:36-37, ", "29:45-46"],
    theologicalNotes: "La consécration implique sacrifice, onction, et sept jours de rites. Le sang est appliqué sur l'oreille (écoute), le pouce (action), et le gros orteil (marche). L'onction consacre à Dieu. Le but final: "Je ferai ma demeure au milieu des fils d'Israël... Je serai leur Dieu.' },
  {
    chapter: 30,
    title: "L'autel des parfums et la taxe", summary: "Instructions pour l'autel des parfums, le lavabo, l'huile d'onction, l'encens, et la taxe du recensement.", keyEvents: ["\Autel des parfums devant le voile", "Encens aromatique chaque matin et soir", "Lavabo de bronze pour les ablutions", ", 'Huile d'onction sainte, 'Encens spécial, ", "Taxe du recensement: demi-sicle", "Cuve d'airain pour les ablutions"],
    keyVerses: ["\30:1-10", "30:17-21, ", "30:22-33", "30:34-38, ", "30:11-16"],
    theologicalNotes: "L'autel des parfums représente les prières des saints (Ap 5:8; 8:3-4). Les ablutions sont nécessaires pour approcher Dieu (symbolisant la purification). L'huile d'onction consacre les objets et les personnes. L'encens doit être pur, sans ajout (mélange profane). La taxe du recensement assure l'expiation pour chacun, riche ou pauvre."
  },
  {
    chapter: 31,
    title: "Betsaleel et Oholiab",
    summary: "Dieu choisit Betsaleel et Oholiab pour construire le tabernacle. Rappel du Sabbat.",
    keyEvents: ["\Betsaleel: rempli de l'Esprit de Dieu", "Sagesse, intelligence, connaissance, 'Oholiab: enseigne, artisan habile, 'Rappel du Sabbat: signe d'alliance, ", "Mort pour qui profane le Sabbat", "Deux tables de pierre écrites du doigt de Dieu"],
    keyVerses: ["\31:2-6", "31:12-14", "31:18"],
    theologicalNotes: "Les artisans sont remplis de l'Esprit. Le travail manuel est un ministère spirituel. Le Sabbat est signe perpétuel de l'alliance, rappelant la création et la rédemption. Les tables sont écrites du doigt de Dieu, montrant leur origine divine."
  },
  {
    chapter: 32,
    title: "Le veau d'or", summary: "Pendant l'absence de Moïse, le peuple fait un veau d'or. Moïse intercède et brise les tables.", keyEvents: ["\Retard de Moïse: 40 jours", "Le peuple demande des dieux", "Aaron fait un veau d'or", "Le peuple dit: \Voici tes dieux", ", 'Dieu veut détruire le peuple, 'Moïse intercède, ", "Moïse descend", "brise les tables", "Le veau brûlé", "broyé", "jeté dans l'eau", "Lévi se range du côté de Moïse"],
    keyVerses: ["\32:1-4", "32:7-10, ", "32:11-14", "32:15-20, ", "32:25-29"],
    theologicalNotes: "L'idolâtrie survient rapidement malgré les miracles récents. Aaron échoue comme leader. L'intercession de Moïse sauve le peuple et plaide pour la gloire de Dieu parmi les nations. Les tables brisées symbolisent l'alliance rompue. Les Lévites se distinguent par leur fidélité."
  },
  {
    chapter: 33,
    title: "La tente d'assignation et la gloire de Dieu", summary: "Dieu refuse d'aller avec le peuple. Moïse insiste pour voir la gloire de Dieu.", keyEvents: ["\Dieu envoie un ange", "Moïse déplace sa tente hors du camp", "L'Éternel parlait avec Moïse face à face", "Moïse demande de connaître les voies de Dieu, 'Promesse: Ma présence ira avec toi", ", ", "Moïse demande de voir la gloire de Dieu", "Dieu promet de passer et de proclamer son nom"],
    keyVerses: ["\33:11", "33:12-16", "33:18-19, ", "33:20-23"],
    theologicalNotes: "Moïse refuse d'aller sans la présence de Dieu. Sa demande (\«Fais-moi voir ta gloire») exprime le désir ultime de connaître Dieu. Dieu accorde une vision partielle, car personne ne peut le voir et vivre. La fente du rocher abrite Moïse tandis que la gloire passe."
  },
  {
    chapter: 34,
    title: "Renouvellement de l'alliance", summary: "Dieu renouvelle l'alliance, révèle son nom, et donne de nouvelles tables.", keyEvents: ["\Nouvelles tables de pierre", "Dieu passe devant Moïse", "Proclamation du nom de l'Éternel", "Miséricorde, grâce, patience, fidélité, ", "Alliance renouvelée", "Avertissements contre les Cananéens", "Moïse avec le visage rayonnant"],
    keyVerses: ["\34:1", "34:5-7, ", "34:10", "34:27-28, ", "34:29-30", "34:33-35"],
    theologicalNotes: "La révélation de 34:6-7 devient la formule standard de la grâce dans l'AT. Dieu est miséricordieux mais juste, pardonnant mais innocent. L'alliance est renouvelée après la rupture. Le visage rayonnant de Moïse montre qu'il a parlé avec Dieu, mais doit être voilé car la gloire est trop grande."
  },
  {
    chapter: 35,
    title: "Appel aux offrandes",
    summary: "Moïse appelle le peuple à apporter des offrandes pour le tabernacle.",
    keyEvents: ["\Sabbat réaffirmé", "Appel aux offrandes volontaires", "Cœur bien disposé", "Matériaux: or, argent, bronze, tissus, bois", "Habileté artistique requise", "Hommes et femmes apportent"],
    keyVerses: ["\35:5", "35:10", "35:21-22, ", "35:25-26"],
    theologicalNotes: "Le Sabbat est prioritaire même pour le travail du tabernacle. Les offrandes sont volontaires, venant de cœurs bien disposés. Les hommes et les femmes contribuent tous. Les compétences artisanales sont des dons de Dieu."
  },
  {
    chapter: 36,
    title: "Construction des tentures et planches",
    summary: "Betsaleel et Oholiab dirigent la construction. Le peuple donne généreusement.",
    keyEvents: ["\Offrandes suffisantes et même trop", "Construction des tentures", "Construction des planches", ", 'Construction des voiles et rideaux, 'Selon tout ce que l'Éternel avait commandé"],
    keyVerses: ["\36:3-7", "36:8-38"],
    theologicalNotes: "La générosité du peuple est telle qu'il faut arrêter les offrandes. Les artisans construisent selon les instructions exactes de Dieu. L'obéissance dans les détails est cruciale."
  },
  {
    chapter: 37,
    title: "Construction des meubles",
    summary: "Betsaleel construit l'arche, la table, le chandelier et l'autel des parfums.", keyEvents: ["\Arche de l'alliance", "Propitiatoire, 'Table des pains de proposition, 'Chandelier d'or pur, 'Autel des parfums"],
    keyVerses: ["\37:1-9", "37:10-16", "37:17-24, ", "37:25-28"],
    theologicalNotes: "Betsaleel construit chaque meuble selon les instructions divines. La répétition de \«selon ce que l'Éternel avait commandé» montre l'importance de l'obéissance exacte."
  },
  {
    chapter: 38,
    title: "Autel des holocaustes, cuve et courtines",
    summary: "Construction de l'autel des holocaustes, de la cuve, et de la cour. Inventaire des matériaux.", keyEvents: ["\Autel des holocaustes", "Cuve d'airain avec miroirs", "Parvis avec courtines", "Inventaire: or", "argent", "bronze"],
    keyVerses: ["\38:1-7", "38:8", "38:9-20, ", "38:21-31"],
    theologicalNotes: "La cuve est faite avec les miroirs des femmes, montrant que tout peut être consacré à Dieu. L'inventaire montre la transparence financière. L'or, l'argent et le bronze sont comptés et utilisés fidèlement."
  },
  {
    chapter: 39,
    title: "Vêtements sacerdotaux",
    summary: "Construction des vêtements des sacrificateurs. Inspection et approbation par Moïse.",
    keyEvents: ["\Vêtements saints pour Aaron", "Éphod avec pierres", "Pectoral avec ourim et thoummim", ", 'Robe de l'éphod, 'Lame sainte, ", "Tunique", "ceinture", "calotte", "Vêtements pour les fils d'Aaron", "Inspection: tout selon le commandement", "Moïse les bénit"],
    keyVerses: ["\39:1", "39:2-7, ", "39:8-21", "39:22-26, ", "39:30-31", "39:32, 42-43"],
    theologicalNotes: "Les vêtres sont faits selon les instructions précises. L'éphod et le pectoral portent les noms des tribus, montrant que le sacrificateur représente le peuple devant Dieu. L'inspection finale confirme l'obéissance exacte."
  },
  {
    chapter: 40,
    title: "Érection du tabernacle et gloire de Dieu",
    summary: "Le tabernacle est érigé le premier jour de la première année. La gloire de Dieu le remplit.",
    keyEvents: ["\Tabernacle érigé le 1er jour du 1er mois", "Placement des meubles", "Moïse oint et sanctifié", "Aaron et ses fils consacrés", "Nuée sur la tente", "Gloire de l'Éternel remplit le tabernacle", "Moïse ne peut entrer", "Nuée et feu guident le peuple"],
    keyVerses: ["\40:2", "40:9-15, ", "40:17", "40:34-35, ", "40:36-38"],
    theologicalNotes: "L'Exode se termine par la gloire de Dieu habitant parmi son peuple. C'est l'accomplissement du but de la délivrance: Dieu avec son peuple. La gloire interdit l'entrée à Moïse, montrant la sainteté de Dieu. La nuée et le feu guident les pérégrinations. Le tabernacle est la preuve visible que Dieu est avec Israël."
  }
]

/* ============================================================================
 *
 * PASSAGES CLÉS
 *
 * ============================================================================ */

export const exodusKeyPassages: KeyPassage[] = [
  {
    reference: "Exode 3:1-15",
    title: "Le buisson ardent et la révélation du nom divin",
    text: "Moïse faisait paître le troupeau de Jéthro, son beau-père... Un ange de l'Éternel lui apparut dans une flamme de feu, au milieu d'un buisson... Le buisson n'était point consumé... Dieu l'appela du milieu du buisson... "Je suis le Dieu de ton père'... Moïse dit: "Qui suis-je pour aller vers Pharaon?"... 'Je serai avec toi"... Dieu dit à Moïse: "Je suis celui qui suis."...", commentary: `Ce passage est l'une des plus grandes théophanies de l'AT. Le buisson qui brûle sans se consumer symbolise Dieu qui se consume sans s'épuiser, et Israël qui subsiste dans l'épreuve.

La révélation du nom YHWH (יְהוָה) est capitale. Le sens exact est débattu:
- "Je suis celui qui suis' - essence et existence de Dieu
- "Je serai celui que je serai' - fidélité dans l'avenir
- "Il fait être' - Dieu comme Créateur

Ce nom lie Dieu à la présence active avec son peuple. Contrairement aux dieux égyptiens lointains, Yahvé est là, agissant, délivrant.

La mission de Moïse semble impossible: qui est-il pour affronter Pharaon? La réponse n'est pas dans les capacités de Moïse mais dans la promesse: "Je serai avec toi.' C'est le paradigme de toute mission divine.

Les versets 13-15 montrent que ce nom est le mémorial de Dieu pour toutes les générations. Il est le Dieu des pères, fidèle à ses alliances, qui agit maintenant pour délivrer.`,
    crossReferences: [ "Genèse 15:7-8 (Je suis l'Éternel),
      "Jean 8:58 (Avant qu'Abraham fût, je suis)", "Matthieu 28:20 (Je suis avec vous),
      "Actes 7:30-34 (Récit d'Étienne)"
    ],
    theologicalThemes: ["\Nom de Dieu", "Théophanie", "Vocation", "Présence", "Alliance"]
  },
  {
    reference: "Exode 12:1-28",
    title: "La Pâque",
    text: "L'Éternel dit à Moïse et à Aaron... 'Ce mois sera pour vous le commencement des mois'... 'Qu'ils prennent un agneau pour chaque famille"... 'un agneau sans défaut, mâle d'un an'... 'Ils prendront de son sang, et le mettront sur les deux poteaux et sur le linteau de la porte'... 'Le sang vous servira de signe... et je verrai le sang'... 'Vous mangerez la chair cette nuit, rôtie au feu'... 'C'est la Pâque de l'Éternel.", commentary: `La Pâque est l'événement fondateur de l'identité d'Israël. Elle établit le calendrier religieux (Nisan comme premier mois) et commémore la naissance de la nation.

La Pâque enseigne plusieurs vérités fondamentales:

1. Substitution: L'agneau meurt à la place du fils aîné. Le sang est la preuve que la mort a déjà frappé.

2. Protection par le sang: Le sang n'est pas magique; il est le signe obéissant de la confiance en la parole de Dieu. Dieu "passe par-dessus' les maisons marquées.

3. Commémoration: "Quand vos enfants vous diront...' L'enseignement de la rédemption aux générations futures est essentiel.

4. Hâte: Manger à la hâte, sandales aux pieds, bâton à la main—exprime l'urgence de la délivrance et l'état de transition.

Le NT identifie Christ comme notre Pâque (1 Co 5:7). Comme l'agneau pascal, il est sans défaut (1 Pi 1:19), ses os ne sont pas brisés (Jn 19:33-36), et son sang nous protège du jugement. La Cène est le nouveau mémorial de cette délivrance (Lc 22:19-20).`,
    crossReferences: [ "Jean 1:29 (Voici l'Agneau de Dieu),
      "1 Corinthiens 5:7 (Christ notre Pâque)",
      "1 Pierre 1:18-19 (Rachetés par le sang de Christ)",
      "Apocalypse 5:6-14 (L'Agneau immolé)"
    ],
    theologicalThemes: ["\Rédemption", "Sacrifice", "Substitution", "Mémorial", "Christologie"]
  },
  {
    reference: "Exode 14",
    title: "La traversée de la Mer Rouge",
    text: "Les Égyptiens poursuivirent le peuple... Les enfants d'Israël levèrent les yeux, et voici, les Égyptiens étaient en marche derrière eux... Moïse dit au peuple: "Ne craignez point, tenez bon, et vous verrez la délivrance de l'Éternel'... L'Éternel dit à Moïse: 'Pourquoi ces cris? Dis aux enfants d'Israël de marcher"... Moïse étendit sa main sur la mer... Les eaux se fendirent... Les enfants d'Israël entrèrent au milieu de la mer à sec... L'Éternel défit l'armée égyptienne dans la mer... Les eaux revinrent et couvrirent les chars et les cavaliers.", commentary: `La traversée de la Mer Rouge est le miracle central de l'AT et l'un des événements les plus cités dans la Bible.

Les leçons théologiques sont nombreuses:

1. Dieu combat pour son peuple: "L'Éternel combattra pour vous, et vous demeurerez tranquilles' (v. 14). La victoire vient de Dieu, pas de la force humaine.

2. La foi à l'épreuve: Le peuple est pris entre l'armée égyptienne et la mer—situation impossible. C'est dans l'impossible que Dieu opère.

3. L'obéissance dans la crise: Dieu dit 'Marche!' avant que la mer ne s'ouvre. La foi obéit avant de voir le résultat.

4. Le jugement de Dieu: La mer qui sauve Israël devient la tombe de l'armée égyptienne. La même manifestation de Dieu est salut pour les uns, jugement pour les autres.

Paul voit cette traversée comme un baptême (1 Co 10:2): mort à la vie d'esclavage, naissance à la liberté. C'est aussi un type de la résurrection: Dieu triomphe de la mort en ouvrant une voie là où il n'y en a pas.

La Mer Rouge est aussi appelée la mer des Roseaux (yam suph), soulignant peut-être que Dieu se sert de l'humilité de la création pour manifester sa gloire.`,
    crossReferences: [ "1 Corinthiens 10:1-4 (Baptisé dans la mer),
      "Hébreux 11:29 (Ils traversèrent la Mer Rouge par la foi)",
      "Psaume 106:9-11 (Il menaça la mer et elle fut sèche)",
      "Ésaïe 11:15 (Il frappera la mer des Roseaux)"
    ],
    theologicalThemes: ["\Délivrance", "Miracle", "Jugement", ", 'Foi, 'Baptême"]
  },
  {
    reference: "Exode 19:5-6",
    title: "Vocation d'Israël", text: "Maintenant, si vous écoutez ma voix, et si vous gardez mon alliance, vous m'appartiendrez entre tous les peuples... Vous serez pour moi un royaume de sacrificateurs et une nation sainte.", commentary: `Ce verset exprime la vocation unique d'Israël et devient une référence clé pour comprendre son identité.

Trois éléments sont cruciaux:

1. Appartenance exclusive: "Vous m'appartiendrez entre tous les peuples.' Israël est le peuple particulier de Dieu, choisi par grâce, non par mérite (Dt 7:7-8).

2. Royaume de sacrificateurs: Non seulement Israël a des sacrificateurs, mais le peuple entier est un royaume de sacrificateurs. Cela signifie qu'il sert de médiateur entre Dieu et les nations, représentant Dieu devant les nations et les nations devant Dieu.

3. Nation sainte: Saint (qadosh) signifie "séparé, mis à part.' Israël est séparé pour Dieu, distinct des autres nations par son culte, sa loi, son caractère.

Le NT applique ces titres à l'Église (1 Pi 2:9; Ap 1:6; 5:10), montrant que l'Église est le nouveau peuple de l'alliance, héritier de la vocation d'Israël. La promesse conditionnelle ("si vous écoutez") contraste avec l'alliance abrahamique inconditionnelle, soulignant la responsabilité d'Israël.

Cette vocation est à la fois privilège (être choisi) et responsabilité (être médiateur et saint).`,
    crossReferences: [ "Deutéronome 7:6 (Peuple saint de l'Éternel),
      "1 Pierre 2:9 (Race élue, sacerdoce royal)",
      "Apocalypse 1:6 (Royaume et sacrificateurs)",
      "Tite 2:14 (Peuple qui lui appartient)"
    ],
    theologicalThemes: ["\Élection", "Sainteté", "Sacerdoce", "Alliance", "Vocation"]
  },
  {
    reference: "Exode 20:1-17",
    title: "Les Dix Commandements",
    text: "Alors Dieu prononça toutes ces paroles, en disant: "Je suis l'Éternel, ton Dieu... 1. Tu n'auras pas d'autres dieux devant ma face. 2. Tu ne feras aucune image taillée... 3. Tu ne prendras point le nom de l'Éternel, ton Dieu, en vain. 4. Souviens-toi du jour du repos, pour le sanctifier. 5. Honore ton père et ta mère. 6. Tu ne commettras point d'assassinat. 7. Tu ne commettras point d'adultère. 8. Tu ne commettras point de vol. 9. Tu ne porteras point de faux témoignage... 10. Tu ne convoiteras point...", commentary: `Les Dix Commandements (Décalogue) sont le cœur de la loi morale de Dieu et la plus célèbre expression de la volonté divine.

Structure et signification:

1. Préambule (v. 2): "Je suis l'Éternel, ton Dieu, qui t'ai fait sortir du pays d'Égypte.' La loi est donnée par le Rédempteur, pas par un tyran.

2. Deux tables:
   - Table 1 (1-4): Amour de Dieu
   - Table 2 (5-10): Amour du prochain

3. Commandements 1-4 (Relation à Dieu):
   - v. 3: Monothéisme exclusif
   - v. 4-6: Interdiction des idoles
   - v. 7: Sainteté du nom de Dieu
   - v. 8-11: Sabbat comme mémorial de la création

4. Commandements 5-10 (Relation au prochain):
   - v. 12: Autorité parentale
   - v. 13: Respect de la vie
   - v. 14: Fidélité conjugale
   - v. 15: Respect de la propriété
   - v. 16: Vérité dans les relations
   - v. 17: Contentement

Jésus résume le Décalogue dans l'amour (Mt 22:37-40) et l'approfondit (Mt 5:21-48). L'Esprit écrit la loi sur les cœurs (Jr 31:33; Hé 8:10; 2 Co 3:3). Les Dix Commandements demeurent comme norme morale universelle, exprimant la justice de Dieu et le chemin de la vie.`,
    crossReferences: [ "Deutéronome 5:6-21 (Répétition du Décalogue),
      "Matthieu 22:37-40 (Le plus grand commandement)",
      "Romains 13:8-10 (L'amour accomplit la loi)", "Jacques 2:10-11 (La loi est un tout)"
    ],
    theologicalThemes: ["\Loi morale", "Sainteté", "Amour", "Justice", "Commandement"]
  },
  {
    reference: Exodus 25:8-9, 40",
    title: "Le tabernacle",
    text: "Ils me feront un sanctuaire, et j'habiterai au milieu d'eux. Tu feras le tabernacle et tous ses ustensiles d'après le modèle que je te montrerai... Regarde, et fais d'après le modèle qui t'est montré sur la montagne.", commentary: `Le tabernacle (mishkan, "demeure) est le signe tangible que Dieu habite au milieu de son peuple. Il est la réponse à la crise de l'Exode: comment le Dieu saint peut-il demeurer avec un peuple pécheur?

Le tabernacle comme signe théologique:

1. Initiative divine: C'est Dieu qui veut habiter parmi son peuple. L'initiative de la communion vient de Dieu, non de l'homme.

2. Modèle céleste: Le tabernacle terrestre est copie du céleste (Hé 8:5; 9:11-12, 23-24). La réalité céleste précède et transcende la terrestre.

3. Médiation: Le tabernacle enseigne la nécessité d'un médiateur. Seuls les sacrificateurs peuvent entrer, et le souverain sacrificateur seul dans le très saint.

4. Sacrifice: L'autel des holocaustes est le premier meuble rencontré. On ne peut approcher Dieu sans sacrifice.

Les meubles symbolisent Christ:
- Arche: Trône de grâce (Hé 4:16)
- Propitiatoire: Expiation (Rm 3:25)
- Table: Pain de vie (Jn 6:35)
- Chandelier: Lumière du monde (Jn 8:12)
- Autel des parfums: Intercession (Hé 7:25)

Le NT identifie le tabernacle avec l'Incarnation ("la Parole a été faite chair et a habité parmi nous,' Jn 1:14) et l'Église comme temple du Saint-Esprit (1 Co 3:16; Ép 2:19-22).`,
    crossReferences: [ "Jean 1:14 (La Parole a habité parmi nous),
      "1 Corinthiens 3:16 (Vous êtes le temple de Dieu)",
      "Hébreux 8:5 (Copie et ombre des choses célestes)",
      "Apocalypse 21:3 (La demeure de Dieu avec les hommes)"
    ],
    theologicalThemes: ["\Présence", "Sanctuaire", "Médiation", "Sacrifice", "Incarnation"]
  },
  {
    reference: "Exode 33:18-23; 34:5-7",
    title: "La révélation de la gloire et du nom de Dieu",
    text: "Moïse dit: "Fais-moi voir ta gloire!"... L'Éternel répondit: 'Je ferai passer toute ma bonté devant ta face, et je proclamerai le nom de l'Éternel devant toi\"... L'Éternel descendit dans une nuée, se tint là auprès de lui, et proclama le nom de l'Éternel. L'Éternel passa devant lui, et s'écria: 'L'Éternel, l'Éternel, Dieu miséricordieux et compatissant, lent à la colère, riche en bonté et en fidélité...", commentary: `Cette scène est l'une des plus hautes révélations de Dieu dans l'AT. Moïse demande l'impossible—voir la gloire de Dieu—et Dieu accorde une manifestation partielle.

L'auto-révélation de 34:6-7 devient la formule standard de la grâce divine, récité tout au long de l'AT (Nb 14:18; Né 9:17; Ps 86:15; 103:8; 145:8; Jr 32:18; Jl 2:13; Jn 4:2).

Les attributs révélés:

1. YHWH, YHWH: La répétition du nom souligne sa permanence et sa fidélité.

2. El rahoum véhannoun: Dieu compatissant et faisant grâce. La compassion de Dieu est profonde et active.

3. Erek appayim: Lent à la colère, patient. Il ne condamne pas immédiatement mais donne le temps de se repentir.

4. Rav hesed vèemet: Riche en bonté et en fidélité. Hésed est l'amour loyal, fidélité dans la relation.

5. Notser hesed la-alafim: Il conserve sa bonté jusqu'à mille générations. La grâce de Dieu s'étend aux descendants.

6. Noseh avon vaphesha: Il pardonne l'iniquité, la rébellion et le péché. Trois mots hébreux pour exprimer la totalité du pardon.

7. Vennaqeh lo yenaqeh: Il ne tient point le coupable innocent. Dieu est juste aussi; le péché a des conséquences.

Cette révélation équilibre grâce et justice, miséricorde et sainteté. Le pardon est disponible mais la responsabilité demeure.`,
    crossReferences: [ "Nombres 14:18 (Pardon jusqu'à la 3e et 4e génération),
      "Psaume 86:15 (Toi, Seigneur, tu es compatissant)",
      "Psaume 103:8-13 (Comme un père a compassion de ses enfants)",
      "Jacques 4:6 (Dieu résiste aux orgueilleux, fait grâce aux humbles)"
    ],
    theologicalThemes: ["\Gloire", "Grâce", "Justice", "Pardon", "Attributs divins"]
  },
  {
    reference: Exode 34:29-35",
    title: "Le visage rayonnant de Moïse",
    text: "Moïse descendit de la montagne... il ne savait pas que la peau de son visage rayonnait... Aaron et tous les enfants d'Israël virent Moïse, et voici la peau de son visage rayonnait... Moïse mit un voile sur son visage... Il mettait le voile sur son visage, jusqu'à ce qu'il entrât pour parler avec l'Éternel.", commentary: `Le visage rayonnant de Moïse est le signe visible de sa rencontre avec Dieu. La gloire de Dieu, même indirecte, transforme.

Leçons théologiques:

1. Transformation par la présence de Dieu: La communion avec Dieu transforme. Ceux qui ont été avec Dieu reflètent sa gloire (2 Co 3:18).

2. Médiation nécessaire: Le voile protège le peuple de la gloire directe. La sainteté de Dieu est terrifiante pour les pécheurs.

3. Contraste avec Jésus: Paul contraste Moïse voilé avec la liberté chrétienne (2 Co 3:7-18). En Christ, le voile est ôté. Nous contemplons la gloire du Seigneur sans voile et sommes transformés.

4. Révélation progressive: Moïse voit Dieu partiellement (33:18-23; 34:5-7). La pleine révélation vient en Christ (Col 2:9; Hé 1:1-3).

Le voile de Moïse symbolise aussi l'incapacité d'Israël à comprendre la loi (2 Co 3:14-15). C'est en Christ que le voile est ôté et que le sens de la loi est révélé: la justice de Dieu par la foi (Rm 10:4).

Le rayonnement (qaran) peut aussi signifier "cornes' (d'où la représentation médiévale de Moïse cornu), mais le sens de rayonnement est préféré par les traductions modernes.`,
    crossReferences: [ "2 Corinthiens 3:7-18 (Le voile ôté en Christ),
      "Matthieu 17:2 (Jésus transfiguré, visage brillant comme le soleil)",
      "Actes 6:15 (Étienne, visage comme d'un ange)", "1 Jean 3:2 (Nous serons semblables à lui)"
    ],
    theologicalThemes: ["\Gloire", "Transfiguration", "Médiation, 'Révélation progressive"]
  },
  {
    reference: "Exode 40:34-38",
    title: "La gloire remplit le tabernacle",
    text: "La nuée couvrit la tente d'assignation, et la gloire de l'Éternel remplit le tabernacle. Moïse ne pouvait pas entrer dans la tente d'assignation, car la nuée restait dessus, et la gloire de l'Éternel remplissait le tabernacle. Quand la nuée s'élevait au-dessus du tabernacle, les enfants d'Israël partaient... Et si la nuée ne s'élevait pas, ils ne partaient pas. La nuée de l'Éternel était sur le tabernacle le jour, et le feu y était la nuit, aux yeux de toute la maison d'Israël...", commentary: `L'Exode se termine par la gloire de Dieu remplissant le tabernacle. C'est l'accomplissement du but de la délivrance: Dieu habite au milieu de son peuple.

Signification théologique:

1. Kavod (כבוד): La gloire de Dieu est sa présence visible et manifeste. Elle remplit le sanctuaire, signifiant que Dieu prend possession de sa demeure.

2. Impossible d'entrer: Moïse, qui a parlé face à face avec Dieu, ne peut entrer. La sainteté de Dieu est telle que même le médiateur est exclu. Cela souligne la nécessité d'une meilleure médiation (Hé 9-10).

3. Nuée et feu: La présence de Dieu est aussi protection et guidance. La nuée le jour et le feu la nuit sont le signe constant que Dieu est avec son peuple dans toutes les circonstances.

4. Obéissance bénie: Le peuple a obéi les instructions de Dieu (35-39). Le résultat est la présence glorieuse de Dieu. L'obéissance conduit à la bénédiction.

Climax et début: L'Exode commence avec Israël esclave en Égypte, loin de la présence de Dieu. Il finit avec Dieu habitant au milieu de son peuple, le guidant dans sa marche. C'est le paradigme du salut: rédemption → révélation → consécration → communion.

Le tabernacle préfigure:
- L'Incarnation (Jn 1:14)
- L'Église (Ép 2:19-22)
- La Nouvelle Jérusalem (Ap 21:3)`,
    crossReferences: [ "1 Rois 8:10-11 (La gloire remplit le Temple),
      "Ézéchiel 1:28 (La gloire de Dieu sur le trône)",
      "Jean 1:14 (La Parole a habité parmi nous)",
      "Apocalypse 21:3 (La demeure de Dieu avec les hommes)"
    ],
    theologicalThemes: ["\Gloire", "Présence", "Tabernacle", "Bénédiction", "Communion"]
  }
]

