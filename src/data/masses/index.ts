/**
 * Messes Traditionnelles - Ordinaires de la Messe
 *
 * Textes bilingues latin-francais des messes traditionnelles catholiques.
 * Exclut les formes heretiques (Novus Ordo Missae).
 */

export interface MassSection {
  name: string;
  nameLatin: string;
  rubrics?: string;
  text: { latin: string; french: string }[];
  response?: boolean;
}

export interface MassType {
  slug: string;
  name: string;
  nameLatin: string;
  rite: string;
  period: string;
  description: string;
  historicalContext: string;
  order: MassSection[];
  tags: string[];
}

// ═══════════════════════════════════════════════
// ORDINAIRE COMMUN (base partagee)
// ═══════════════════════════════════════════════

const commonOrdinary: MassSection[] = [
  {
    name: "Kyrie eleison",
    nameLatin: "Kyrie eleison",
    text: [
      { latin: "Kyrie eleison.", french: "Seigneur, ayez pitie." },
      { latin: "Kyrie eleison.", french: "Seigneur, ayez pitie." },
      { latin: "Kyrie eleison.", french: "Seigneur, ayez pitie." },
      { latin: "Christe eleison.", french: "Christ, ayez pitie." },
      { latin: "Christe eleison.", french: "Christ, ayez pitie." },
      { latin: "Christe eleison.", french: "Christ, ayez pitie." },
      { latin: "Kyrie eleison.", french: "Seigneur, ayez pitie." },
      { latin: "Kyrie eleison.", french: "Seigneur, ayez pitie." },
      { latin: "Kyrie eleison.", french: "Seigneur, ayez pitie." },
    ],
    response: true,
  },
  {
    name: "Gloria in excelsis",
    nameLatin: "Gloria in excelsis Deo",
    rubrics: "Le Gloria n'est pas dit pendant l'Avent et le Careme, ni aux messes des defunts.",
    text: [
      { latin: "Gloria in excelsis Deo,", french: "Gloire a Dieu au plus haut des cieux," },
      { latin: "et in terra pax hominibus bonae voluntatis.", french: "et paix sur la terre aux hommes de bonne volonte." },
      { latin: "Laudamus te,", french: "Nous vous louons," },
      { latin: "benedicimus te,", french: "nous vous benissons," },
      { latin: "adoramus te,", french: "nous vous adorons," },
      { latin: "glorificamus te.", french: "nous vous glorifions." },
      { latin: "Gratias agimus tibi propter magnam gloriam tuam,", french: "Nous vous rendons grace pour votre immense gloire," },
      { latin: "Domine Deus, Rex caelestis,", french: "Seigneur Dieu, Roi du ciel," },
      { latin: "Deus Pater omnipotens.", french: "Dieu le Pere tout-puissant." },
      { latin: "Domine Fili unigenite, Iesu Christe,", french: "Seigneur, Fils unique, Jesus-Christ," },
      { latin: "Domine Deus, Agnus Dei, Filius Patris,", french: "Seigneur Dieu, Agneau de Dieu, le Fils du Pere," },
      { latin: "qui tollis peccata mundi, miserere nobis;", french: "vous qui otiez le peche du monde, ayez pitie de nous;" },
      { latin: "qui tollis peccata mundi, suscipe deprecationem nostram;", french: "vous qui otiez le peche du monde, recevez notre priere;" },
      { latin: "qui sedes ad dexteram Patris, miserere nobis.", french: "vous qui etes assis a la droite du Pere, ayez pitie de nous." },
      { latin: "Quoniam tu solus Sanctus,", french: "Car vous seul etes Saint," },
      { latin: "tu solus Dominus,", french: "vous seul etes Seigneur," },
      { latin: "tu solus Altissimus, Iesu Christe,", french: "vous seul etes Tres-Haut, Jesus-Christ," },
      { latin: "cum Sancto Spiritu, in gloria Dei Patris. Amen.", french: "avec le Saint-Esprit, dans la gloire de Dieu le Pere. Amen." },
    ],
  },
  {
    name: "Credo",
    nameLatin: "Symbolum Nicaenum",
    rubrics: "Le Credo est dit le dimanche et aux fetes solennelles.",
    text: [
      { latin: "Credo in unum Deum,", french: "Je crois en un seul Dieu," },
      { latin: "Patrem omnipotentem,", french: "le Pere tout-puissant," },
      { latin: "factorem caeli et terrae,", french: "createur du ciel et de la terre," },
      { latin: "visibilium omnium et invisibilium.", french: "de l'univers visible et invisible." },
      { latin: "Et in unum Dominum Iesum Christum,", french: "Et en un seul Seigneur Jesus-Christ," },
      { latin: "Filium Dei unigenitum,", french: "le Fils unique de Dieu," },
      { latin: "et ex Patre natum ante omnia saecula.", french: "ne du Pere avant tous les siecles." },
      { latin: "Deum de Deo, lumen de lumine,", french: "Dieu de Dieu, lumiere de lumiere," },
      { latin: "Deum verum de Deo vero,", french: "vrai Dieu de vrai Dieu," },
      { latin: "genitum, non factum, consubstantialem Patri;", french: "engendre, non cree, de meme nature que le Pere;" },
      { latin: "per quem omnia facta sunt.", french: "par qui tout a ete fait." },
      { latin: "Qui propter nos homines et propter nostram salutem", french: "Qui est descendu du ciel pour nous les hommes" },
      { latin: "descendit de caelis.", french: "et pour notre salut." },
      { latin: "Et incarnatus est de Spiritu Sancto", french: "Il s'est incarne par l'Esprit Saint" },
      { latin: "ex Maria Virgine,", french: "de la Vierge Marie," },
      { latin: "ET HOMO FACTUS EST.", french: "ET IL S'EST FAIT HOMME." },
      { latin: "Crucifixus etiam pro nobis;", french: "Il a aussi ete crucifie pour nous;" },
      { latin: "sub Pontio Pilato passus et sepultus est.", french: "il a souffert sous Ponce Pilate et a ete enseveli." },
      { latin: "Et resurrexit tertia die,", french: "Il est ressuscite le troisime jour," },
      { latin: "secundum Scripturas.", french: "conformement aux Ecritures." },
      { latin: "Et ascendit in caelum,", french: "Il est monte aux cieux," },
      { latin: "sedet ad dexteram Patris.", french: "il est assis a la droite du Pere." },
      { latin: "Et iterum venturus est cum gloria,", french: "Il reviendra dans la gloire," },
      { latin: "iudicare vivos et mortuos,", french: "pour juger les vivants et les morts;" },
      { latin: "cuius regni non erit finis.", french: "et son regne n'aura pas de fin." },
      { latin: "Et in Spiritum Sanctum, Dominum et vivificantem,", french: "Je crois en l'Esprit Saint, qui est Seigneur et qui donne la vie," },
      { latin: "qui ex Patre Filioque procedit.", french: "qui procede du Pere et du Fils." },
      { latin: "Qui cum Patre et Filio simul adoratur", french: "Avec le Pere et le Fils, il recu a meme adoration" },
      { latin: "et conglorificatur;", french: "et meme gloire;" },
      { latin: "qui locutus est per Prophetas.", french: "il a parle par les prophetes." },
      { latin: "Et unam, sanctam, catholicam et apostolicam Ecclesiam.", french: "Je confesse un seul bapteme pour la remission des peches." },
      { latin: "Confiteor unum baptisma", french: "J'attends la resurrection des morts" },
      { latin: "in remissionem peccatorum.", french: "et la vie du siecle a venir. Amen." },
      { latin: "Et exspecto resurrectionem mortuorum,", french: "" },
      { latin: "et vitam venturi saeculi. Amen.", french: "" },
    ],
  },
  {
    name: "Sanctus",
    nameLatin: "Sanctus",
    rubrics: "Chante ou recite apres la Preface.",
    text: [
      { latin: "Sanctus, Sanctus, Sanctus", french: "Saint, Saint, Saint" },
      { latin: "Dominus Deus Sabaoth.", french: "le Seigneur Dieu de l'univers." },
      { latin: "Pleni sunt caeli et terra gloria tua.", french: "Le ciel et la terre sont remplis de votre gloire." },
      { latin: "Hosanna in excelsis.", french: "Hosanna au plus haut des cieux." },
      { latin: "Benedictus qui venit in nomine Domini.", french: "Beni soit celui qui vient au nom du Seigneur." },
      { latin: "Hosanna in excelsis.", french: "Hosanna au plus haut des cieux." },
    ],
    response: true,
  },
  {
    name: "Agnus Dei",
    nameLatin: "Agnus Dei",
    text: [
      { latin: "Agnus Dei, qui tollis peccata mundi:", french: "Agneau de Dieu, qui otiez le peche du monde:" },
      { latin: "miserere nobis.", french: "ayez pitie de nous." },
      { latin: "Agnus Dei, qui tollis peccata mundi:", french: "Agneau de Dieu, qui otiez le peche du monde:" },
      { latin: "miserere nobis.", french: "ayez pitie de nous." },
      { latin: "Agnus Dei, qui tollis peccata mundi:", french: "Agneau de Dieu, qui otiez le peche du monde:" },
      { latin: "dona nobis pacem.", french: "donnez-nous la paix." },
    ],
    response: true,
  },
  {
    name: "Ite, missa est",
    nameLatin: "Ite, missa est",
    rubrics: "Repons par le choeur. Aux messes de penitence, on dit Benedicamus Domino.",
    text: [
      { latin: "Ite, missa est.", french: "Allez, la messe est dite." },
      { latin: "Deo gratias.", french: "Rendons grace a Dieu." },
    ],
    response: true,
  },
];

// ═══════════════════════════════════════════════
// MESSE TRIDENTINE (Missale Romanum 1570/1962)
// ═══════════════════════════════════════════════

export const messeTridentine: MassType = {
  slug: "messe-tridentine",
  name: "Messe Tridentine",
  nameLatin: "Missa Tridentina",
  rite: "Romain",
  period: "1570-1962",
  description:
    "La forme extraordinaire du rite romain, telle qu'elle a ete codifiee par saint Pie V apres le Concile de Trente, puis revisee par saint Jean XXIII en 1962.",
  historicalContext:
    "Apres le Concile de Trente (1545-1563), le pape Pie V publia en 1570 le Missale Romanum, unifiant la liturgie romaine. Cette messe, aussi appelee forme extraordinaire du rite romain, fut la norme pendant pres de quatre siecles.",
  order: [
    {
      name: "Preparations a l'autel",
      nameLatin: "Preparatio ad Altare",
      rubrics: "Le pretre monte a l'autel et recite les psaumes preparatoires.",
      text: [
        { latin: "Introibo ad altare Dei.", french: "Je m'avancerai vers l'autel de Dieu." },
        { latin: "Ad Deum qui laetificat iuventutem meam.", french: "Vers Dieu qui rejouit ma jeunesse." },
        { latin: "Iudica me, Deus, et discerne causam meam de gente non sancta:", french: "Jugez-moi, o Dieu, et defendez ma cause contre une nation sans piete:" },
        { latin: "ab homine iniquo et doloso erue me.", french: "delivrez-moi de l'homme injuste et trompeur." },
        { latin: "Quia tu es, Deus, fortitudo mea:", french: "Car vous etes, o Dieu, ma force:" },
        { latin: "quare me repulisti?", french: "pourquoi m'avez-vous repousse?" },
        { latin: "quare tristis incedo,", french: "pourquoi marche-je dans la tristesse," },
        { latin: "dum affligit me inimicus?", french: "tandis que l'ennemi m'accable?" },
        { latin: "Emitte lucem tuam et veritatem tuam:", french: "Envoyez votre lumiere et votre verite:" },
        { latin: "ipsa me deduxerunt et adduxerunt", french: "elles m'ont guide et m'ont conduit" },
        { latin: "in montem sanctum tuum et in tabernacula tua.", french: "vers votre montagne sainte et vers vos tabernacles." },
        { latin: "Et introibo ad altare Dei:", french: "J'entrerai vers l'autel de Dieu:" },
        { latin: "ad Deum qui laetificat iuventutem meam.", french: "vers Dieu qui rejouit ma jeunesse." },
        { latin: "Confiteor Deo omnipotenti...", french: "Je confesse a Dieu tout-puissant..." },
      ],
    },
    {
      name: "Asperges me",
      nameLatin: "Asperges me",
      rubrics: "Rite d'aspersion le dimanche, remplacee par le Vidi aquam au temps paschal.",
      text: [
        { latin: "Asperges me, Domine, hyssopo, et mundabor;", french: "Aspergez-moi, Seigneur, avec l'hysope, et je serai purifie;" },
        { latin: "lavabis me, et super nivem dealbabor.", french: "vous me laverez, et je deviendrai plus blanc que la neige." },
        { latin: "Miserere mei, Deus, secundum magnam misericordiam tuam.", french: "Ayez pitie de moi, mon Dieu, dans votre grande misericorde." },
      ],
      response: true,
    },
    {
      name: "Introit",
      nameLatin: "Introitus",
      rubrics: "Antienne d'entree propre au jour, chantee pendant que le pretre se rend a l'autel.",
      text: [
        { latin: "[Propre du jour]", french: "[Propre du jour]" },
      ],
    },
    {
      name: "Kyrie eleison",
      nameLatin: "Kyrie eleison",
      text: commonOrdinary[0].text,
      response: true,
    },
    {
      name: "Gloria in excelsis",
      nameLatin: "Gloria in excelsis Deo",
      rubrics: commonOrdinary[1].rubrics,
      text: commonOrdinary[1].text,
    },
    {
      name: "Oraison du jour",
      nameLatin: "Oratio",
      rubrics: "Le pretre dit l'oraison propre au jour liturgique.",
      text: [
        { latin: "[Oraison propre]", french: "[Oraison propre]" },
      ],
    },
    {
      name: "Epitre",
      nameLatin: "Epistola",
      rubrics: "Lecture de l'Epitre du jour, lue par le pretre a voix basse puis a haute voix.",
      text: [
        { latin: "[Epitre du jour]", french: "[Epitre du jour]" },
      ],
    },
    {
      name: "Graduel et Alleluia",
      nameLatin: "Graduale et Alleluia",
      rubrics: "Chants entre l'Epitre et l'Evangile. Pendant le Careme, l'Alleluia est remplace par le Trait.",
      text: [
        { latin: "[Graduel propre]", french: "[Graduel propre]" },
      ],
      response: true,
    },
    {
      name: "Evangile",
      nameLatin: "Evangelium",
      rubrics: "Le pretre se rend au cote droit de l'autel pour lire l'Evangile.",
      text: [
        { latin: "Dominus vobiscum.", french: "Le Seigneur soit avec vous." },
        { latin: "Et cum spiritu tuo.", french: "Et avec votre esprit." },
        { latin: "Sequentia sancti Evangelii secundum N.", french: "Suite du saint Evangile selon N." },
        { latin: "Gloria tibi, Domine.", french: "Gloire a vous, Seigneur." },
        { latin: "[Evangile du jour]", french: "[Evangile du jour]" },
        { latin: "Laus tibi, Christe.", french: "Louange a vous, o Christ." },
      ],
      response: true,
    },
    {
      name: "Credo",
      nameLatin: "Symbolum Nicaenum",
      rubrics: commonOrdinary[2].rubrics,
      text: commonOrdinary[2].text,
    },
    {
      name: "Offertoire",
      nameLatin: "Offertorium",
      rubrics: "Le pretre offre le pain et le vin.",
      text: [
        { latin: "Suscipe, Sancte Pater, omnipotens aeterne Deus,", french: "Recevez, o Saint Pere, Dieu tout-puissant et eternel," },
        { latin: "hanc immaculatam hostiam,", french: "cette hostie sans tache," },
        { latin: "quam ego indignus famulus tuus", french: "que moi, votre indigne serviteur," },
        { latin: "offero tibi Deo meo vivo et vero,", french: "je vous offre a vous, mon Dieu vivant et veritable," },
        { latin: "pro innumerabilibus peccatis et offensionibus et negligentiis meis,", french: "pour mes peches innombrables, mes offenses et mes negligences," },
        { latin: "et pro omnibus circumstantibus,", french: "et pour tous les assistants," },
        { latin: "sed et pro omnibus fidelibus christianis", french: "mais aussi pour tous les fideles chretiens" },
        { latin: "vivis atque defunctis:", french: "vivants et defunts:" },
        { latin: "ut mihi et illis proficiat ad salutem in vitam aeternam. Amen.", french: "afin que cette offrande leur profite, a eux et a moi, pour le salut eternel. Amen." },
      ],
    },
    {
      name: "Secrete",
      nameLatin: "Secreta",
      rubrics: "Oraison dite a voix basse sur les offrandes.",
      text: [
        { latin: "[Secrete propre]", french: "[Secrete propre]" },
      ],
    },
    {
      name: "Preface",
      nameLatin: "Praefatio",
      rubrics: "Introduction a la priere eucharistique, variable selon le temps liturgique.",
      text: [
        { latin: "Dominus vobiscum.", french: "Le Seigneur soit avec vous." },
        { latin: "Et cum spiritu tuo.", french: "Et avec votre esprit." },
        { latin: "Sursum corda.", french: "Haut les coeurs." },
        { latin: "Habemus ad Dominum.", french: "Nous les tournons vers le Seigneur." },
        { latin: "Gratias agamus Domino Deo nostro.", french: "Rendons grace au Seigneur notre Dieu." },
        { latin: "Dignum et iustum est.", french: "Il est juste et bon." },
        { latin: "[Preface propre]", french: "[Preface propre]" },
      ],
      response: true,
    },
    {
      name: "Canon Romain",
      nameLatin: "Canon Missae",
      rubrics: "Le coeur de la messe, dit a voix basse par le pretre.",
      text: [
        { latin: "Te igitur, clementissime Pater,", french: "O vous donc, Pere tres clement," },
        { latin: "per Iesum Christum, Filium tuum, Dominum nostrum,", french: "par Jesus-Christ, votre Fils, notre Seigneur," },
        { latin: "suplices rogamus ac petimus,", french: "nous vous supplions et nous vous demandons," },
        { latin: "uti accepta habeas et benedicas,", french: "de vouloir bien accepter et benir," },
        { latin: "haec dona, haec munera, haec sancta sacrificia illibata,", french: "ces dons, ces offrandes, ces saints sacrifices purs," },
        { latin: "in primis quae tibi offerimus", french: "tout d'abord ceux que nous vous offrons" },
        { latin: "pro Ecclesia tua sancta catholica:", french: "pour votre Eglise sainte et catholique:" },
        { latin: "quam pacificare, custodire, adunare,", french: "daignez lui accorder la paix, la garder, l'unir," },
        { latin: "et regere digneris toto orbe terrarum,", french: "et la gouverner sur toute la terre," },
        { latin: "una cum famulo tuo Papa nostro N.", french: "avec votre serviteur notre pape N." },
        { latin: "et Antistite nostro N.", french: "et notre eveque N." },
      ],
    },
    {
      name: "Memento des vivants",
      nameLatin: "Memento vivorum",
      text: [
        { latin: "Memento, Domine, famulorum famularumque tuarum N. et N.", french: "Souvenez-vous, Seigneur, de vos serviteurs et servantes N. et N." },
      ],
    },
    {
      name: "Hanc igitur",
      nameLatin: "Hanc igitur",
      text: [
        { latin: "Hanc igitur oblationem servitutis nostrae,", french: "C'est pourquoi nous vous offrons cette offrande de notre service," },
        { latin: "sed et cunctae familiae tuae,", french: "ainsi que de toute votre famille," },
        { latin: "quaesumus, Domine, ut placatus accipias:", french: "nous vous prions, Seigneur, de l'agreer avec bienveillance:" },
        { latin: "diesque nostros in tua pace disponas,", french: "disposez nos jours dans votre paix," },
        { latin: "et ab aeterna damnatione nos eripi,", french: "et nous arrachez a la damnation eternelle," },
        { latin: "et in electorum tuorum iubeas grege numerari.", french: "et ordonnez que nous soyons comptes au nombre de vos elus." },
      ],
    },
    {
      name: "Consecration",
      nameLatin: "Consecratio",
      rubrics: "Les paroles de la consecration, prononcees par le pretre en union avec le Christ.",
      text: [
        { latin: "Qui pridie quam pateretur,", french: "La veille de sa passion," },
        { latin: "accepit panem in sanctas ac venerabiles manus suas,", french: "il prit le pain entre ses mains saintes et venerables," },
        { latin: "et elevatis oculis in caelum", french: "et, levant les yeux au ciel" },
        { latin: "ad te Deum Patrem suum omnipotentem,", french: "vers vous, son Dieu et Pere tout-puissant," },
        { latin: "tibi gratias agens,", french: "il vous rendit grace," },
        { latin: "benedixit, fregit, deditque discipulis suis, dicens:", french: "le benit, le rompit, et le donna a ses disciples en disant:" },
        { latin: "ACCIPITE, ET MANDUCATE EX HOC OMNES:", french: "PRENEZ ET MANGEZ-EN TOUS:" },
        { latin: "HOC EST ENIM CORPUS MEUM.", french: "CECI EST MON CORPS." },
      ],
    },
    {
      name: "Consecration du vin",
      nameLatin: "Consecratio vini",
      text: [
        { latin: "Simili modo postquam coenatum est,", french: "De meme, apres la Cene," },
        { latin: "accipiens et hunc praeclarum Calicem", french: "prenant aussi ce precieux Calice" },
        { latin: "in sanctas ac venerabiles manus suas:", french: "entre ses mains saintes et venerables:" },
        { latin: "item tibi gratias agens,", french: "il vous rendit grace de nouveau," },
        { latin: "benedixit, deditque discipulis suis, dicens:", french: "le benit, et le donna a ses disciples en disant:" },
        { latin: "ACCIPITE ET BIBITE EX EO OMNES:", french: "PRENEZ ET BUVEZ-EN TOUS:" },
        { latin: "HIC EST ENIM CALIX SANGUINIS MEI,", french: "CAR CECI EST LE CALICE DE MON SANG," },
        { latin: "NOVI ET AETERNI TESTAMENTI:", french: "LE SANG DE L'ALLIANCE NOUVELLE ET ETERNELLE:" },
        { latin: "MYSTERIUM FIDEI:", french: "MYSTERE DE LA FOI:" },
        { latin: "QUI PRO VOBIS ET PRO MULTIS EFFUNDETUR", french: "QUI SERA REPANDU POUR VOUS" },
        { latin: "IN REMISSIONEM PECCATORUM.", french: "ET POUR LA MULTIPOUR LA REMISSION DES PECHS." },
        { latin: "Haec quotiescumque feceritis,", french: "Toutes les fois que vous ferez cela," },
        { latin: "in mei memoriam facietis.", french: "vous le ferez en memoire de moi." },
      ],
    },
    {
      name: "Memento des defunts",
      nameLatin: "Memento defunctorum",
      text: [
        { latin: "Memento etiam, Domine, famulorum famularumque tuarum N. et N.", french: "Souvenez-vous aussi, Seigneur, de vos serviteurs et servantes N. et N." },
        { latin: "qui nos praecesserunt cum signo fidei,", french: "qui nous ont precedes avec le signe de la foi," },
        { latin: "et dormiunt in somno pacis.", french: "et qui dorment dans le sommeil de la paix." },
      ],
    },
    {
      name: "Nobis quoque peccatoribus",
      nameLatin: "Nobis quoque",
      text: [
        { latin: "Nobis quoque peccatoribus,", french: "A nous aussi, pecheurs," },
        { latin: "famulis tuis, de multitudine miserationum tuarum", french: "vos serviteurs, qui esperons dans la multitude" },
        { latin: "sperantibus,", french: "de vos misericordes," },
        { latin: "partem aliquam et societatem", french: "daignez accorder une part" },
        { latin: "donare digneris", french: "et la societe" },
        { latin: "cum tuis sanctis Apostolis et Martyribus:", french: "avec vos saints Apotres et Martyrs:" },
      ],
    },
    {
      name: "Pater noster",
      nameLatin: "Pater noster",
      rubrics: "Priere du Seigneur, recitee par le pretre et le choeur.",
      text: [
        { latin: "Pater noster, qui es in caelis,", french: "Notre Pere, qui etes aux cieux," },
        { latin: "sanctificetur nomen tuum.", french: "que votre nom soit sanctifie." },
        { latin: "Adveniat regnum tuum.", french: "Que votre regne vienne." },
        { latin: "Fiat voluntas tua, sicut in caelo et in terra.", french: "Que votre volonte soit faite sur la terre comme au ciel." },
        { latin: "Panem nostrum quotidianum da nobis hodie.", french: "Donnez-nous aujourd'hui notre pain de chaque jour." },
        { latin: "Et dimitte nobis debita nostra,", french: "Pardonnez-nous nos offenses," },
        { latin: "sicut et nos dimittimus debitoribus nostris.", french: "comme nous pardonnons aussi a ceux qui nous ont offenses." },
        { latin: "Et ne nos inducas in tentationem.", french: "Ne nous laissez pas entrer en tentation." },
        { latin: "Sed libera nos a malo. Amen.", french: "Mais delivrez-nous du mal. Amen." },
      ],
    },
    {
      name: "Agnus Dei",
      nameLatin: "Agnus Dei",
      text: commonOrdinary[4].text,
      response: true,
    },
    {
      name: "Communion",
      nameLatin: "Communio",
      rubrics: "Antienne de communion propre, chantee pendant la communion du pretre et des fideles.",
      text: [
        { latin: "[Communion propre]", french: "[Communion propre]" },
      ],
    },
    {
      name: "Postcommunion",
      nameLatin: "Postcommunio",
      rubrics: "Oraison apres la communion.",
      text: [
        { latin: "Oremus.", french: "Prions." },
        { latin: "[Postcommunion propre]", french: "[Postcommunion propre]" },
      ],
    },
    {
      name: "Ite, missa est",
      nameLatin: "Ite, missa est",
      text: commonOrdinary[5].text,
      response: true,
    },
    {
      name: "Dernier Evangile",
      nameLatin: "Ultimum Evangelium",
      rubrics: "Prologue de l'Evangile selon saint Jean, recite apres la benediction finale.",
      text: [
        { latin: "Initium sancti Evangelii secundum Ioannem.", french: "Debut du saint Evangile selon saint Jean." },
        { latin: "Gloria tibi, Domine.", french: "Gloire a vous, Seigneur." },
        { latin: "In principio erat Verbum,", french: "Au commencement etait le Verbe," },
        { latin: "et Verbum erat apud Deum,", french: "et le Verbe etait aupres de Dieu," },
        { latin: "et Deus erat Verbum.", french: "et le Verbe etait Dieu." },
        { latin: "Hoc erat in principio apud Deum.", french: "Il etait au commencement aupres de Dieu." },
        { latin: "Omnia per ipsum facta sunt:", french: "Tout a ete fait par lui:" },
        { latin: "et sine ipso factum est nihil quod factum est.", french: "et sans lui rien n'a ete fait de ce qui a ete fait." },
        { latin: "In ipso vita erat,", french: "En lui etait la vie," },
        { latin: "et vita erat lux hominum:", french: "et la vie etait la lumiere des hommes:" },
        { latin: "et lux in tenebris lucet,", french: "et la lumiere luit dans les tenebres," },
        { latin: "et tenebrae eam non comprehenderunt.", french: "et les tenebres ne l'ont pas saisie." },
        { latin: "Fuit homo missus a Deo,", french: "Il y eut un homme envoye de Dieu," },
        { latin: "cui nomen erat Ioannes.", french: "qui s'appelait Jean." },
        { latin: "Hic venit in testimonium", french: "Il vint comme temoin" },
        { latin: "ut testimonium perhiberet de lumine,", french: "pour rendre temoignage a la lumiere," },
        { latin: "ut omnes crederent per illum.", french: "afin que tous crussent par lui." },
        { latin: "Non erat ille lux,", french: "Il n'etait pas la lumiere," },
        { latin: "sed ut testimonium perhiberet de lumine.", french: "mais il venait rendre temoignage a la lumiere." },
        { latin: "Erat lux vera,", french: "La lumiere etait la veritable lumiere," },
        { latin: "quae illuminat omnem hominem", french: "qui eclaire tout homme" },
        { latin: "venientem in hunc mundum.", french: "venant en ce monde." },
        { latin: "In mundo erat,", french: "Il etait dans le monde," },
        { latin: "et mundus per ipsum factus est,", french: "et le monde a ete fait par lui," },
        { latin: "et mundus eum non cognovit.", french: "et le monde ne l'a pas reconnu." },
        { latin: "In sua venit,", french: "Il est venu chez les siens," },
        { latin: "et sui eum non receperunt.", french: "et les siens ne l'ont pas recu." },
        { latin: "Quotquot autem receperunt eum,", french: "Mais a tous ceux qui l'ont recu," },
        { latin: "dedit eis potestatem filios Dei fieri,", french: "il a donne pouvoir de devenir enfants de Dieu," },
        { latin: "his qui credunt in nomine eius:", french: "a ceux qui croient en son nom:" },
        { latin: "qui non ex sanguinibus,", french: "qui ne sont pas nes du sang," },
        { latin: "neque ex voluntate carnis,", french: "ni de la volonte de la chair," },
        { latin: "neque ex voluntate viri,", french: "ni de la volonte de l'homme," },
        { latin: "sed ex Deo nati sunt.", french: "mais qui sont nes de Dieu." },
        { latin: "ET VERBUM CARO FACTUM EST,", french: "ET LE VERBE S'EST FAIT CHAIR," },
        { latin: "et habitavit in nobis:", french: "et il a habite parmi nous:" },
        { latin: "et vidimus gloriam eius,", french: "et nous avons vu sa gloire," },
        { latin: "gloriam quasi Unigeniti a Patre,", french: "sa gloire de Fils unique du Pere," },
        { latin: "plenum gratiae et veritatis.", french: "plein de grace et de verite." },
        { latin: "Deo gratias.", french: "Rendons grace a Dieu." },
      ],
    },
  ],
  tags: ["tridentine", "romain", "1570", "1962", "forme-extraordinaire"],
};

// ═══════════════════════════════════════════════
// MESSE DE SAINT PIE V
// ═══════════════════════════════════════════════

export const messeSaintPieV: MassType = {
  slug: "messe-saint-pie-v",
  name: "Messe de Saint Pie V",
  nameLatin: "Missa Sancti Pii Quinti",
  rite: "Romain",
  period: "1570",
  description:
    "Le rite romain tel qu'il fut promulgue par la bulle Quo primum tempore du pape saint Pie V le 14 juillet 1570.",
  historicalContext:
    "Le Concile de Trente (1545-1563) demanda au pape de reformer les livres liturgiques. Saint Pie V publia le Missale Romanum en 1570, etablit un rite unifie pour toute l'Eglise latine, sauf les rites ayant plus de deux cents ans d'anciennete.",
  order: messeTridentine.order,
  tags: ["pie-v", "1570", "quo-primum", "tridentine"],
};

// ═══════════════════════════════════════════════
// MESSE DE SAINT PIE X
// ═══════════════════════════════════════════════

export const messeSaintPieX: MassType = {
  slug: "messe-saint-pie-x",
  name: "Messe de Saint Pie X",
  nameLatin: "Missa Sancti Pii Decimi",
  rite: "Romain (restauration)",
  period: "1903-1914",
  description:
    "La restauration liturgique du pape saint Pie X, avec l'accent sur le chant gregorien et la participation active des fideles.",
  historicalContext:
    "Saint Pie X, pape de 1903 a 1914, promut la restauration de la liturgie et du chant gregorien. Son motu proprio Inter sollicitudines (1903) fit du chant sacre une priorite. Il encouragea la communion frequente et la premiere communion des enfants.",
  order: [
    ...messeTridentine.order.slice(0, 1),
    {
      name: "Introit",
      nameLatin: "Introitus",
      rubrics: "Saint Pie X insista pour que l'Introit soit chante integralement par le choeur.",
      text: [
        { latin: "[Propre du jour]", french: "[Propre du jour]" },
      ],
    },
    ...messeTridentine.order.slice(2),
  ],
  tags: ["pie-x", "1903", "gregorien", "restauration"],
};

// ═══════════════════════════════════════════════
// RITE DOMINICAIN
// ═══════════════════════════════════════════════

export const riteDominicain: MassType = {
  slug: "rite-dominicain",
  name: "Rite Dominicain",
  nameLatin: "Ritus Dominicanus",
  rite: "Dominicain",
  period: "depuis 1234",
  description:
    "Le rite de l'Ordre des Precheurs, conserve depuis le Moyen Age et distinct du rite romain par ses particularites liturgiques.",
  historicalContext:
    "Le rite dominicain fut etabli par saint Dominique lui-meme au debut du XIIIe siecle. Il fut codifie en 1234 et resta en usage dans l'Ordre jusqu'au milieu du XXe siecle. Il presente des differences notables avec le rite romain, notamment dans l'ordre de la messe et les ceremonies.",
  order: [
    {
      name: "Confiteor dominicain",
      nameLatin: "Confiteor",
      rubrics: "Le Confiteor dominicain a une forme differente du romain.",
      text: [
        { latin: "Confiteor Deo omnipotenti,", french: "Je confesse a Dieu tout-puissant," },
        { latin: "beatae Mariae semper Virgini,", french: "a la bienheureuse Marie toujours Vierge," },
        { latin: "beato Ioanni Baptistae,", french: "au bienheureux Jean-Baptiste," },
        { latin: "sanctis Apostolis Petro et Paulo,", french: "aux saints Apotres Pierre et Paul," },
        { latin: "et omnibus Sanctis,", french: "et a tous les Saints," },
        { latin: "quia peccavi nimis,", french: "car j'ai peche enormement," },
        { latin: "cogitatione, verbo et opere:", french: "par pensee, parole et action:" },
        { latin: "mea culpa, mea culpa, mea maxima culpa.", french: "ma faute, ma faute, ma tres grande faute." },
        { latin: "Ideo precor beatam Mariam semper Virginem,", french: "C'est pourquoi je prie la bienheureuse Marie toujours Vierge," },
        { latin: "beatum Ioannem Baptistam,", french: "le bienheureux Jean-Baptiste," },
        { latin: "sanctos Apostolos Petrum et Paulum,", french: "les saints Apotres Pierre et Paul," },
        { latin: "et omnes Sanctos,", french: "et tous les Saints," },
        { latin: "orare pro me ad Dominum Deum nostrum.", french: "de prier pour moi le Seigneur notre Dieu." },
      ],
    },
    ...commonOrdinary.slice(0, 1),
    ...commonOrdinary.slice(1, 3),
    {
      name: "Offertoire dominicain",
      nameLatin: "Offertorium",
      rubrics: "L'Offertoire dominicain a des prieres differentes du romain.",
      text: [
        { latin: "Suscipe, sancta Trinitas,", french: "Recevez, o Sainte Trinite," },
        { latin: "hanc oblationem,", french: "cette offrande," },
        { latin: "quam tibi offerimus", french: "que nous vous offrons" },
        { latin: "in memoriam passionis,", french: "en memoire de la passion," },
        { latin: "resurrectionis,", french: "de la resurrection," },
        { latin: "et ascensionis Domini nostri Iesu Christi.", french: "et de l'ascension de notre Seigneur Jesus-Christ." },
      ],
    },
    ...commonOrdinary.slice(3),
  ],
  tags: ["dominicain", "ordre-des-precheurs", "medieval", "1234"],
};

// ═══════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════

export const masses: MassType[] = [
  messeTridentine,
  messeSaintPieV,
  messeSaintPieX,
  riteDominicain,
];

export const getMassBySlug = (slug: string): MassType | undefined =>
  masses.find(m => m.slug === slug);

export const getMassesByRite = (rite: string): MassType[] =>
  masses.filter(m => m.rite.toLowerCase().includes(rite.toLowerCase()));
