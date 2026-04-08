/**
 * TOBIE (TOBIT) - Livre deutérocanonique
 */

import type { BookSummary, BookReadingNotes, ChapterOutline, KeyPassage } from "../types/enriched";

export const tobiasSummary: BookSummary = {
  book: "Tobie",
  testament: "OLD",
  category: "historical",
  author: "Inconnu (attribué à Tobie ou à un auteur juif de la Diaspora)",
  period: "IIIe ou IIe siècle av. J.-C.",
  theme: "La Providence divine qui guide les justes à travers les épreuves",
  outline: [
    "1 : La piété de Tobie et son épreuve",
    "2 : La cécité de Tobie et la mission de Tobie junior",
    "3 : Le voyage de Tobie avec l'ange Raphaël",
    "4 : Le mariage avec Sara et la guérison du père",
    "5 : La guérison de Tobie senior et actions de grâce",
    "6 : Prières de Tobie et de Sara,Action de grâce finale",
    "7 : Conclusion et mort de Tobie",
  ],
};

export const tobiasReadingNotes: BookReadingNotes = {
  book: "Tobie",
  context:
    "Récit de la Diaspora juive, probablement composé en Égypte ou en Mésopotamie. Tobie, un Juif pieux de la tribu de Nephtali déporté à Ninive, reste fidèle à la Loi malgré l'exil et l'épreuve de la cécité.",
  keyThemes: [
    {
      theme: "La Providence divine",
      description:
        "Dieu guide et protège les justes même (et surtout) à travers les épreuves. L'ange Raphaël (Dieu guérit) accompagne invisiblement.",
    },
    {
      theme: "L'aumône comme justice",
      description:
        "Tobie est loué pour avoir enterré les morts et donné l'aumône aux pauvres. Ces œuvres de justice le protègent dans l'adversité.",
    },
    {
      theme: "La prière",
      description:
        "Les prières de Tobie et de Sara, exprimant leur désir de mort, sont exaucées par Dieu qui les unit dans le mariage.",
    },
    {
      theme: "Le mariage",
      description:
        "Le mariage comme alliance sainte, avec des rituels de prière et de chasteté. La libération du démon Asmodée.",
    },
    {
      theme: "La fidélité dans la Diaspora",
      description:
        "Tobie reste fidèle à la Loi même en terre païenne, enterrant les morts contre la coutume locale.",
    },
  ],
  theologicalSignificance:
    "Tobie enseigne que la justice consiste à pratiquer l'aumône et à enterrer les morts (œuvres de miséricorde). Le livre affirme que Dieu exauce les prières et envoie des anges pour assister les justes. L'ange Raphaël révèle que l'offrande de prière et d'aumône monte devant Dieu comme un encens.",
  christologicalTypes: [
    {
      type: "L'ange Raphaël",
      description:
        "L'ange qui guérit préfigure le Christ, l'ange de Dieu qui guérit l'humanité. Le nom signifie Dieu guérit." },
    {
      type: "Le libérateur du démon",
      description:
        "Raphaël lie le démon Asmodée, comme le Christ chasse les démons et libère les possédés.",
    },
    {
      type: "L'offrande qui monte",
      description:
        "L'aumône et la prière qui montent comme un encens préfigurent le sacrifice du Christ, unique offrande agréable à Dieu.",
    },
    {
      type: "La guérison de la cécité",
      description:
        "La guérison de Tobie préfigure les guérisons du Christ, particulièrement celle de l'aveugle-né.",
    },
  ],
};

export const tobiasChapterOutlines: ChapterOutline[] = [
  {
    chapter: 1,
    title: "La piété de Tobie et son épreuve",
    verses: [
      {
        reference: "1:1-2",
        text: "Livre des paroles de Tobie. Tobie, fils de Tobiel, fils d'Ananiel, fils d'Adouel, fils de Gabaël, de la lignée de Thiél, de la tribu de Nephtali, fut emmené captif au temps d'Enemessar, roi d'Assyrie, de Thisbeth, qui est dans la haute Galilée, au-dessus de Nasher, derrière le grand chemin de l'Occident, dans la province de Ninive.",
      },
      {
        reference: "1:3",
        text: "Je marchai dans la voie de la vérité et de justice tous les jours de ma vie, et je donnai beaucoup d'aumônes à mes frères et à ceux de ma nation qui avaient été emmenés captifs avec moi au pays des Assyriens, à Ninive.",
      },
      {
        reference: "1:16-17",
        text: "Quand je rentrai chez moi, je donnai mon dîner aux pauvres avec tristesse. Puis, le jour suivant, je pris le corps de Judas et je le cachai dans une de mes fosses, jusqu'au coucher du soleil. Puis je l'ensevelis. Or on me rapporta qu'on cherchait à me tuer pour cela, et je m'enfuis de peur.",
      },
    ],
  },
  {
    chapter: 2,
    title: "La cécité de Tobie et le rappel de l'argent",
    verses: [
      {
        reference: "2:1-2",
        text: "Or il arriva qu'étant tombé de dessus son lit sur la face close de ses yeux, il fut atteint de cécité. Les médecins qu'il employa ne le guérirent point. Et sa cécité dura quatre ans.",
      },
      {
        reference: "2:11",
        text: "Et elle n'était point d'accord avec lui ; mais elle lui disait : Est-ce que nos enfants sont encore en vie, avant qu'ils soient devenus la proie de la terre ?",
      },
      {
        reference: "2:14",
        text: "Mais ne crains point, mon fils. Nous vivons pauvrement, mais nous serons riches, si nous craignons Dieu et si nous nous détournons de tout péché et faisons bien.",
      },
    ],
  },
  {
    chapter: 3,
    title: "Le voyage de Tobie avec Raphaël",
    verses: [
      {
        reference: "3:1",
        text: "Alors Tobie soupira et commença à prier avec larmes, disant : Seigneur, tu es juste, et tous tes jugements sont justes, et toutes tes voies sont miséricorde et vérité, et tu juges le monde avec justice.",
      },
      {
        reference: "3:7",
        text: "Et il arriva ce jour-là que Sara, fille de Raguel, à Ecbatane en Médie, fut aussi reprochée par une de ses servantes, parce qu'elle avait été donnée à sept maris, et qu'Asmodée, le mauvais esprit, les tuait, dès qu'ils entraient auprès d'elle.",
      },
      {
        reference: "3:16-17",
        text: "Mais la prière de l'un et de l'autre fut exaucée devant la gloire du Roi du siècle. Et le saint ange du Seigneur fut envoyé pour les guérir tous deux, Tobie et Sara.",
      },
    ],
  },
  {
    chapter: 4,
    title: "Conseils de Tobie à son fils",
    verses: [
      {
        reference: "4:5",
        text: "Mon fils, souviens-toi du Seigneur tous les jours, et ne veux point pécher, ni transgresser ses commandements. Fais la justice tous les jours de ta vie, et ne marche point dans les voies de l'iniquité.",
      },
      {
        reference: "4:7",
        text: "Donne l'aumône de tes biens à tout homme qui vit avec justice. Si tes biens sont peu nombreux, donne selon ce que tu as, mais garde-toi de ne donner point avec regret.",
      },
      {
        reference: "4:15",
        text: "Ce qui est détestable devant le Seigneur et devant les hommes, c'est l'adultère. Garde-toi donc de la fornication, et ne laisse point ta fille se prostituer. Fais en sorte, mon fils, que ton cœur ne se laisse pas entraîner par les pensées d'elle.",
      },
    ],
  },
  {
    chapter: 5,
    title: "Rencontre avec Raphaël et le départ",
    verses: [
      {
        reference: "5:4-5",
        text: "Tobie donc alla chercher un homme qui pût aller avec lui en Médie, et il trouva Azarias, fils d'Ananiel le grand. Et il le prit avec lui. Et l'ange lui dit : Je m'en irai avec toi, et je te ramènerai sain et sauf.",
      },
      {
        reference: "5:10",
        text: "Et Tobie lui dit : Demeure avec nous, et je te donnerai ce que tu mérites. Et il lui dit : Je ne demeurerai point, et je ne te mangerai point, jusqu'à ce que tu aies dit ces paroles.",
      },
    ],
  },
  {
    chapter: 6,
    title: "Le poisson, le démon et le mariage",
    verses: [
      {
        reference: "6:2-3",
        text: "Et le jeune homme lui dit : Seigneur, je ne l'ai point vu. Et l'ange lui dit : Retire-le. Et le jeune homme retira le poisson sur la terre. Et l'ange lui dit : Ouvre-le, et prends le fiel, le cœur et le foie, et garde-les, et jette les entrailles.",
      },
      {
        reference: "6:8-9",
        text: "Quant au cœur et au foie, si tu en mets sur des charbons ardents, il s'en fait une fumée qui chasse toute espèce de démons, soit d'homme, soit de femme, de sorte qu'ils ne peuvent plus approcher d'eux. Quant au fiel, il sert à oindre les yeux d'un homme qui a une taie sur l'œil, et il le guérit.",
      },
      {
        reference: "6:18-19",
        text: "Mais toi, quand tu entreras dans ta chambre, vis avec elle trois jours dans la pureté de ta virginité, et tu ne songeras point à autre chose qu'à prier le Seigneur avec elle. Le troisième jour, tu consommeras l'œuvre de la justice.",
      },
    ],
  },
  {
    chapter: 7,
    title: "Arrivée chez Raguel et le mariage",
    verses: [
      {
        reference: "7:9-10",
        text: "Et après avoir entendu Tobie dire Azarias, Raguel commença à trembler, et il fut effrayé. Mais quand il eut pris son sang-froid, il dit : Sois le bienvenu, mon fils, et que Dieu te garde, mon fils. Il ajouta : Mais pourquoi m'as-tu fait venir ? Et Tobie répondit : J'ai voulu prendre Sara ta fille pour femme.",
      },
      {
        reference: "7:11",
        text: "Alors Raguel dit : Tu ne l'aura pas, mon fils, car je connais la vérité sur elle, et j'ai donné sept maris à ma fille Sara, et ils sont tous morts.",
      },
    ],
  },
  {
    chapter: 8,
    title: "La nuit de noces et la délivrance",
    verses: [
      {
        reference: "8:2-3",
        text: "Et Tobie se souvint de la parole de Raphaël, et il prit le foie et le cœur du poisson, et il les mit sur les charbons. Et la puanteur du poisson chassa le mauvais esprit, et il s'enfuit aux extrémités de l'Égypte. Et l'ange le lia là.",
      },
      {
        reference: "8:5",
        text: "Alors Tobie bénit le Seigneur du ciel et de la terre, et il dit : Tu es béni, ô notre Dieu, et ta race l'est d'âge en âge. Tu es béni dans le ciel et sur la terre, parce que tu as béni Adam et Ève.",
      },
      {
        reference: "8:10",
        text: "Et quand ils eurent dit : Amen, ils se couchèrent dans la chambre. Mais Raguel ordonna à ses serviteurs de creuser une tombe secrètement, avant le jour.",
      },
    ],
  },
  {
    chapter: 9,
    title: "Le retour et la guérison de Tobie",
    verses: [
      {
        reference: "9:5",
        text: "Alors l'ange lui dit : Emporte avec toi une partie du foie et du fiel du poisson. Et il prit le fiel et le foie du poisson, et les emporta.",
      },
      {
        reference: "9:6",
        text: "Et Raguel dit : Je te donne ma fille Sara comme épouse, et je te donne la moitié de mes biens. Viens, conduis-moi à ton père avant que je meure.",
      },
    ],
  },
  {
    chapter: 10,
    title: "Les parents attendent",
    verses: [
      {
        reference: "10:1",
        text: "Alors Tobie s'en alla de retour, et il loua le Seigneur du ciel et de la terre, à cause de tout ce qu'il avait fait pour lui, parce qu'il l'avait conduit en prospérité.",
      },
      {
        reference: "10:4",
        text: "Et Tobit disait : Que mon fils est-il arrivé là où il était ? Ou peut-être a-t-il été retenu ? Et il commençait à s'affliger.",
      },
    ],
  },
  {
    chapter: 11,
    title: "La guérison de Tobie senior",
    verses: [
      {
        reference: "11:7-8",
        text: "Et il lui dit : Père, j'ai rapporté l'argent que Gabaël me devait. Et j'ai aussi apporté Sara, ma femme. Et il dit : Béni soit le Dieu du ciel, qui a fait le ciel et la terre, parce qu'il a chassé le mauvais esprit de ma fille.",
      },
      {
        reference: "11:10-11",
        text: "Et Tobie dit à Sara : Lève-toi, ma sœur, et allons trouver ton père et ma mère. Et elle se leva et alla avec lui, et ils se mirent à bénir le Seigneur du ciel et de la terre. Et ils se dirent tous ensemble : Tu es béni, Seigneur, parce que tu as béni Adam et Ève.",
      },
      {
        reference: "11:13-14",
        text: "Et il lui mit du fiel sur les yeux, et il le tint. Et il commença à gratter les taies avec ses deux mains, et elles tombèrent de ses yeux. Et quand il eut ouvert les yeux, il vit son fils, et il tomba sur son cou.",
      },
    ],
  },
  {
    chapter: 12,
    title: "La révélation de l'ange Raphaël",
    verses: [
      {
        reference: "12:6",
        text: "Alors l'ange leur dit : Bénissez le Seigneur, et célébrez-le devant tous les vivants, pour le bien qu'il vous a fait. Bénissez et chantez son nom. Annoncez à tous les hommes les actions de Dieu, et qu'ils vous honorent dignement.",
      },
      {
        reference: "12:8-9",
        text: "Il est bon de cacher le secret du roi, mais il est honorable de révéler et de publier les œuvres de Dieu. La prière avec le jeûne et l'aumône avec justice est meilleure que les trésors d'or.",
      },
      {
        reference: "12:12",
        text: "Quand tu priais avec larmes, et que tu ensevelissais les morts, et que tu quittais ton repas pour les cacher dans ta maison le jour, et la nuit tu les ensevelissais, je t'offrais au Seigneur.",
      },
      {
        reference: "12:15",
        text: "Je suis Raphaël, l'un des sept saints anges qui présentent les prières des saints et qui montent devant la gloire du Saint des saints.",
      },
    ],
  },
  {
    chapter: 13,
    title: "Action de grâce de Tobie",
    verses: [
      {
        reference: "13:1-2",
        text: "Alors Tobie répondit et dit : Béni soit Dieu qui vit éternellement, et que son règne dure dans tous les siècles, parce qu'il châtie et qu'il a pitié, qu'il fait descendre aux enfers, et qu'il en retire, et il n'y a personne qui échappe à sa main.",
      },
      {
        reference: "13:6",
        text: "Vous qui craignez le Seigneur, louez-le, et confessez-le, et vous serez dans la vérité, et la paix de justice viendra à vous. Que soient bénis ceux qui vous aiment, et qu'ils se réjouissent dans votre paix.",
      },
      {
        reference: "13:10-11",
        text: "Chassez loin de vous toute hypocrisie, et ne vous livrez point à de faux raisonnements. Rapportez-vous au Seigneur, et ne faites point violence à la parole de Dieu. Il y aura un temps où tout sera découvert, et où tous se prosterneront devant Dieu.",
      },
    ],
  },
  {
    chapter: 14,
    title: "Conclusion et mort de Tobie",
    verses: [
      {
        reference: "14:3-4",
        text: "Et Tobie dit à son fils : Prends avec toi des hommes, et va à la Médie, et ramène ton beau-frère Gabaël. Et j'habiterai ici, et je mourai chez toi et chez ta belle-mère. Ne crains point, mon fils, car nous avons vendu la maison.",
      },
      {
        reference: "14:8-9",
        text: "Et il mourut âgé de cent cinquante-huit ans, et il fut enterré honorablement à Ninive. Et il avait cinquante ans quand il perdit la vue, et après avoir recouvré la vue, il vécut encore cent huit ans, et il mourut dans la joie.",
      },
      {
        reference: "14:15",
        text: "Or, avant qu'il mourût, il apprit Tobie et ses sept fils, et il leur dit : Voici, je m'en vais, mon fils. Enterre-moi honorablement, et bénis le Seigneur ton Dieu.",
      },
    ],
  },
];

export const tobiasKeyPassages: KeyPassage[] = [
  {
    reference: "Tobie 1:3",
    citation:
      "Je marchai dans la voie de la vérité et de justice tous les jours de ma vie, et je donnai beaucoup d'aumônes à mes frères et à ceux de ma nation qui avaient été emmenés captifs avec moi au pays des Assyriens, à Ninive.",
    commentary:
      "La justice de Tobie se manifeste dans la pratique de l'aumône même en exil. Le livre enseigne que la piété se mesure non par des rituels mais par la charité envers les plus vulnérables. Tobie enterrant les morts est l'un des plus beaux exemples des œuvres de miséricorde.",
  },
  {
    reference: "Tobie 3:2",
    citation:
      "Seigneur, tu es juste, et tous tes jugements sont justes, et toutes tes voies sont miséricorde et vérité, et tu juges le monde avec justice.",
    commentary:
      "La prière de Tobie au milieu de son épreuve affirme la justice de Dieu même quand elle semble incompréhensible. Cette confidence en la bonté divine malgré la souffrance est l'essentiel de la foi biblique. Le Pourquoi de la souffrance n'est pas résolu par une explication mais par la confiance.",
  },
  {
    reference: "Tobie 3:16-17",
    citation:
      "Mais la prière de l'un et de l'autre fut exaucée devant la gloire du Roi du siècle. Et le saint ange du Seigneur fut envoyé pour les guérir tous deux, Tobie et Sara.",
    commentary:
      "La prière simultanée de Tobie et de Sara, tous deux désirant la mort, est exaucée par leur union matrimoniale. Dieu répond par la vie et l'amour là où l'être humain ne voit que la mort. L'ange Raphaël accomplit la réponse divine.",
  },
  {
    reference: "Tobie 4:7",
    citation:
      "Donne l'aumône de tes biens à tout homme qui vit avec justice. Si tes biens sont peu nombreux, donne selon ce que tu as, mais garde-toi de ne donner point avec regret.",
    commentary:
      "L'enseignement central de Tobie sur l'aumône. Il ne s'agit pas de la quantité mais de la qualité du don. Donner avec regret annule la valeur du don. L'aumône n'est pas une perte mais un investissement dans la justice divine.",
  },
  {
    reference: "Tobie 4:15",
    citation:
      "Ce qui est détestable devant le Seigneur et devant les hommes, c'est l'adultère. Garde-toi donc de la fornication, et ne laisse point ta fille se prostituer.",
    commentary:
      "Le livre de Tobie préserve la sainteté du mariage comme valeur fondamentale. Le mariage n'est pas un contrat humain mais une alliance sainte qui reflète l'alliance de Dieu avec son peuple. La fidélité conjugale est un témoignage de foi.",
  },
  {
    reference: "Tobie 6:8-9",
    citation:
      "Quant au cœur et au foie, si tu en mets sur des charbons ardents, il s'en fait une fumée qui chasse toute espèce de démons, soit d'homme, soit de femme, de sorte qu'ils ne peuvent plus approcher d'eux. Quant au fiel, il sert à oindre les yeux d'un homme qui a une taie sur l'œil, et il le guérit.",
    commentary:
      "Raphaël enseigne à Tobie les propriétés du poisson. Le cœur et le foie chassent les démons, le fiel guérit la cécité. Ces éléments naturels deviennent des instruments de la puissance divine. La guérison vient par des moyens créés par Dieu, pas par la magie.",
  },
  {
    reference: "Tobie 8:5",
    citation:
      "Alors Tobie bénit le Seigneur du ciel et de la terre, et il dit : Tu es béni, ô notre Dieu, et ta race l'est d'âge en âge. Tu es béni dans le ciel et sur la terre, parce que tu as béni Adam et Ève.",
    commentary:
      "La bénédiction nuptiale de Tobie est l'une des plus anciennes prières de mariage. Elle lie le mariage humain au plan originel de Dieu pour Adam et Ève. La bénédiction de Dieu \"d'âge en âge\" montre la continuité de l'alliance à travers les générations.",
  },
  {
    reference: "Tobie 12:8-9",
    citation:
      "Il est bon de cacher le secret du roi, mais il est honorable de révéler et de publier les œuvres de Dieu. La prière avec le jeûne et l'aumône avec justice est meilleure que les trésors d'or.",
    commentary:
      "Raphaël révèle que la prière, le jeûne et l'aumône sont supérieurs aux richesses matérielles. Ces trois pratiques - les trois piliers du judaïsme - seront reprises par Jésus (Matthieu 6:1-18). L'aumône avec justice est le trésor qui compte devant Dieu.",
  },
  {
    reference: "Tobie 12:15",
    citation:
      "Je suis Raphaël, l'un des sept saints anges qui présentent les prières des saints et qui montent devant la gloire du Saint des saints.",
    commentary:
      "L'autorévélation de Raphaël comme l'un des sept anges qui se tiennent devant Dieu est unique dans la Bible. Ces sept anges (mentionnés aussi dans Apocalypse 8:2) sont les intermédiaires entre Dieu et les humains. Raphaël signifie Dieu guérit." },
  {
    reference: "Tobie 12:19",
    citation:
      "La prière du jeûne est bonne, et l'aumône est meilleure que les trésors d'or. Car l'aumône délivre de la mort, et c'est elle qui efface les péchés, et qui fait trouver miséricorde et vie éternelle.",
    commentary:
      "L'aumône délivre de la mort et efface les péchés. Cette affirmation audacieuse fait de l'aumône non pas une option mais un moyen de salut. L'Église catholique a développé cette théologie des œuvres de miséricorde comme participation à la justice divine.",
  },
  {
    reference: "Tobie 13:2",
    citation:
      "Béni soit Dieu qui vit éternellement, et que son règne dure dans tous les siècles, parce qu'il châtie et qu'il a pitié, qu'il fait descendre aux enfers, et qu'il en retire, et il n'y a personne qui échappe à sa main.",
    commentary:
      "Le cantique de Tobie est l'un des plus beaux hymnes de louange de l'Ancien Testament. Il affirme la souveraineté totale de Dieu sur la vie et la mort, sur l'enfer et le ciel. Dieu n'est pas seulement juste mais compatissant, et sa main atteint tous.",
  },
  {
    reference: "Tobie 13:6",
    citation:
      "Vous qui craignez le Seigneur, louez-le, et confessez-le, et vous serez dans la vérité, et la paix de justice viendra à vous.",
    commentary:
      "La crainte de Dieu est la source de la louange, qui conduit à la vérité et à la paix. La \"paix de justice\" n'est pas simplement l'absence de conflit mais l'harmonie qui résulte de la vie juste. La louange n'est pas seulement un acte de culte mais un mode de vie.",
  },
  {
    reference: "Tobie 14:10-11",
    citation:
      "Et Tobie mourut en paix, âgé de cent dix-sept ans, et il fut enterré honorablement à Ninive. Il avait soixante-dix ans quand il perdit la vue, et après avoir recouvré la vue, il vécut encore quarante-sept ans, et il mourut dans la joie.",
    commentary:
      "La mort de Tobie \"dans la joie\" est le fruit d'une vie de fidélité et de confiance en Dieu. Les chiffres (117 ans) soulignent la bénédiction de longévité comme récompense de la justice. La mort du juste n'est pas une tragédie mais une entrée dans la paix.",
  },
];
