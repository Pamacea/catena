/**
 * JUDITH - Livre deutérocanonique
 */

import type {
  BookSummary,
  BookReadingNotes,
  ChapterOutline,
  KeyPassage
} from "../types/enriched"

export const judithSummary: BookSummary = {
  book: "Judith",
  testament: "OLD",
  category: "historical",
  author: "Inconnu (peut-être un Juif palestinien de l'époque hasmonéenne)",
  period: "IIe ou Ier siècle av. J.-C.",
  theme: "La délivrance d'Israël par la main d'une femme fidèle",
  outline: [ "1 : Introduction et situation désastreuse d'Israël",
    "2 : Les campagnes victorieuses de Nabuchodonosor",
    "3 : La mobilisation d'Holopherne et la terreur en Israël",
    "4 : Joakim prépare la défense de Béthulie",
    "5 : Le siège de Béthulie et la désolation",
    "6 : Le discours d'Achior sur l'inviolabilité d'Israël",
    "7 : La vengeance d'Holopherne contre Achior",
    "8 : Le projet de Judith et sa prière",
    "9 : Judith se rend au camp ennemi",
    "10 : La rencontre avec Holopherne",
    "11 : Les mensonges de Judith et son séjour dans le camp",
    "12 : Le banquet d'Holopherne et la tentative de séduction",
    "13 : La décapitation d'Holopherne",
    "14 : La victoire d'Israël et les actions de grâce",
    "15 : Le cantique de Judith et conclusion"
  ]
}

export const judithReadingNotes: BookReadingNotes = {
  book: "Judith",
  context: "Récit de délivrance nationale, probablement composé pendant la période hasmonéenne. Judith, veuve pieuse de Béthulie, délivre son peuple en décapitant le général assyrien Holopherne. Le livre illustre la foi en un Dieu qui défend son peuple par des moyens humbles.",
  keyThemes: [
    {
      theme: "La puissance de Dieu dans la faiblesse",
      description: "Dieu sauve son peuple par une veuve sans défense, humiliant les puissants. La force s'accomplit dans la faiblesse." },
    {
      theme: "Le courage de la foi",
      description: "Judith affronte l'ennemi avec confiance en Dieu. Elle utilise sa beauté et son intelligence comme instruments de la délivrance divine."
    },
    {
      theme: "La prière comme arme",
      description: "Judith prie avant d'agir. Sa prière invoque Dieu comme celui qui brise les guerriers et les armées."
    },
    {
      theme: "La protection divine",
      description: "Achior affirme que Dieu protège Israël tant qu'il ne pèche pas. Le péché est la seule cause de défaite."
    },
    {
      theme: "Le rôle des femmes",
      description: "Une femme sauve ce que les hommes ne pouvaient pas. Renversement des rôles traditionnels."
    }
  ],
  theologicalSignificance: "Judith est un récit de délivrance qui affirme la souveraineté de Dieu sur l'histoire. Les nations puissantes sont brisées, les petits sont élevés. Judith est un type de Marie, celle qui écrase la tête du serpent, et de l'Église vainqueur par la faiblesse apparente.",
  christologicalTypes: [
    {
      type: "La veuve victorieuse",
      description: "Judith qui vainc l'ennemi par sa faiblesse apparente préfigure l'Église qui triomphe par la croix, folie pour les hommes." },
    {
      type: "La décapitation de l'ennemi",
      description: "Judith décapitant Holopherne préfigure le Christ qui détruit la mort par sa mort, écrasant la tête du serpent."
    },
    {
      type: "La femme qui sauve",
      description: "Judith préfigure Marie, la nouvelle Ève qui par son obéissance répare la désobéissance d'Ève et sauve l'humanité."
    },
    {
      type: "La confiance en Dieu seul",
      description: "La foi de Judith qui affronte l'ennemi sans armes anticipe la confiance du Christ au Père."
    }
  ]
}

export const judithChapterOutlines: ChapterOutline[] = [
  {
    chapter: 1,
    title: "Introduction et campagnes de Nabuchodonosor",
    verses: [
      {
        reference: "1:1",
        text: "Arphaxad, roi des Médes, avait réuni beaucoup de nations en une armée, et il avait fortifié Ecbatane."
      },
      {
        reference: "1:11-12",
        text: "Tous les rois des nations, les princes des provinces, les chefs des satrapies, et les gouverneurs du pays du roi Nabuchodonosor se rassemblèrent autour de lui, et ils combattirent contre ses ennemis."
      }
    ]
  },
  {
    chapter: 2,
    title: "La campagne contre l'Ouest",
    verses: [
      {
        reference: "2:4-5",
        text: "Il appela Holopherne, chef de son armée, et il lui dit : Va, et prends avec toi des hommes qui craignent Dieu, et va combattre contre les enfants d'Israël."
      },
      {
        reference: "2:28",
        text: "Car il est bon que nous les châtions. Et si nous les épargnons, ils se révolteront contre nous, et ils nous feront la guerre."
      }
    ]
  },
  {
    chapter: 3,
    title: "La terreur en Israël",
    verses: [
      {
        reference: "3:1-2",
        text: "Ils envoyèrent des messagers à Holopherne, et ils lui dirent : Viens, et nous te livrerons le pays."
      },
      {
        reference: "3:8",
        text: "Et ils se jetèrent devant l'autel, et ils répandirent de la cendre sur leurs têtes, et ils étendirent leurs vêtements devant le Seigneur."
      }
    ]
  },
  {
    chapter: 4,
    title: "La préparation de Béthulie",
    verses: [
      {
        reference: "4:6",
        text: "Joakim, qui était prêtre du grand prêtre, habitait à Béthulie. Il appela tous les anciens du peuple, et ils tinrent conseil."
      },
      {
        reference: "4:11-12",
        text: "Et ils firent jeûner tous leurs enfants, et ils se prosternèrent devant le Seigneur, et ils prièrent le Seigneur de leur peuple, disant : Ne livrez pas votre héritage au pillage, et ne rendez pas votre héritage en opprobre aux nations."
      }
    ]
  },
  {
    chapter: 5,
    title: "Le siège de Béthulie",
    verses: [
      {
        reference: "5:5-6",
        text: "Et Achior répondit, et il dit : Si tu veux, seigneur, écouter ta servante, je te dirai la vérité dans ton cœur au sujet de ce peuple qui habite cette montagne, et tu ne leur feras point de tort."
      },
      {
        reference: "5:18",
        text: "Mais s'ils ont péché, ils s'éloigneront de leur Dieu, et ils seront livrés entre tes mains, et tu les vaincras."
      }
    ]
  },
  {
    chapter: 6,
    title: "Achior livré aux Israélites",
    verses: [
      {
        reference: "6:2-4",
        text: "Alors Holopherne entra en fureur, et il appela les enfants d'Ammon, et il leur dit : Allez, et livrez Achior entre les mains d'Israël, afin qu'il périsse avec eux."
      },
      {
        reference: "6:19-21",
        text: "Et Ozias prit la parole d'Achior, et il le rapporta à toute la ville, et ils furent remplis de joie. Et ils firent sortir Achior, et ils le conduisirent au milieu de la ville, et ils l'assemblèrent."
      }
    ]
  },
  {
    chapter: 7,
    title: "La situation critique",
    verses: [
      {
        reference: "7:4",
        text: "Et tous les hommes d'Israël crièrent vers Dieu, et ils se jetèrent de tout leur cœur devant lui, et ils couvrirent leurs têtes de cendre."
      },
      {
        reference: "7:19-20",
        text: "Nous vous appelons à témoin aujourd'hui dans le ciel et sur la terre, et devant le Dieu de nos pères, qui punit selon nos œuvres et nos desseins. Il n'a point retiré sa miséricorde de nous, mais il a châtié nos pères avec des fléaux."
      }
    ]
  },
  {
    chapter: 8,
    title: "Le projet de Judith",
    verses: [
      {
        reference: "8:4",
        text: "Judith donc, qui était sa femme, était une femme belle et sage, et elle craignait Dieu."
      },
      {
        reference: "8:9-10",
        text: "Et elle les vit être dans le désespoir, et elle leur dit : Écoutez-moi, je vous prie, et je ferai ce que j'ai à faire devant le Seigneur. Et Ozias lui dit : Parle, et le Seigneur te favorisera."
      },
      {
        reference: "8:13-14",
        text: "Car si nous ne sommes pas châtiés, le Seigneur nous fera grâce, et il ne nous abandonnera point. Mais si nous tombons entre leurs mains, nous mourrons, et nous serons captifs."
      }
    ]
  },
  {
    chapter: 9,
    title: "La prière de Judith",
    verses: [
      {
        reference: "9:4",
        text: "Et vous avez fait ce qui vous a plu, et il n'y a personne qui résiste à votre volonté. Vous avez choisi le peuple d'Israël pour être votre peuple."
      },
      {
        reference: "9:9",
        text: "Regardez leur orgueil, et envoyez votre force sur leur tête, et donnez-moi, veuve, la force par laquelle je ferai ce que j'ai à faire."
      },
      {
        reference: "9:14",
        text: "Car votre force ne dépend point du nombre, ni votre puissance des forts. Mais vous êtes le Dieu des humbles, le secours des petits, le protecteur des faibles, le défenseur de ceux qui sont dans le désespoir."
      }
    ]
  },
  {
    chapter: 10,
    title: "Judith se rend au camp",
    verses: [
      {
        reference: "10:2",
        text: "Et elle se leva, et elle se prépara, et elle prit sa servante, et elle descendit dans la vallée, et elle passa par les portes de la ville."
      },
      {
        reference: "10:5-6",
        text: "Et ils la virent, et ils furent étonnés de sa beauté, et ils la laissèrent passer. Et ils lui dirent : Sois la bienvenue, reviens en paix dans notre pays."
      },
      {
        reference: "10:11",
        text: "Et ils la conduisirent au camp, et ils la présentèrent devant Holopherne."
      }
    ]
  },
  {
    chapter: 11,
    title: "Judith devant Holopherne",
    verses: [
      {
        reference: "11:7",
        text: "Et Holopherne dit à Judith : Sois la bienvenue, et ne crains point ton cœur. Je n'ai jamais fait de mal à personne qui était disposé à servir Nabuchodonosor, le roi de toute la terre."
      },
      {
        reference: "11:10-11",
        text: "Et Judith lui dit : Je sais que tu feras ce que j'ai dit. Car ton serviteur est sage, et il n'y a personne qui soit sage comme toi."
      },
      {
        reference: "11:17-19",
        text: "Car Dieu m'a envoyé pour faire avec toi des choses qui seront étonnantes, et qui seront annoncées dans le monde entier."
      }
    ]
  },
  {
    chapter: 12,
    title: "Judith dans le camp",
    verses: [
      {
        reference: "12:2",
        text: "Et Holopherne dit à Judith : Mange maintenant, et bois avec nous, et sois en joie avec nous."
      },
      {
        reference: "12:7-8",
        text: "Et Judith sortit du camp, et elle retourna dans sa chambre. Et elle mangea et but ce qu'on lui avait donné."
      },
      {
        reference: "12:18",
        text: "Et Holopherne vit Judith, et il fut étonné de sa beauté, et il désira de coucher avec elle."
      }
    ]
  },
  {
    chapter: 13,
    title: "La décapitation d'Holopherne",
    verses: [
      {
        reference: "13:2-3",
        text: "Et Judith était seule dans la tente. Et Holopherne gisait sur son lit, car il était enivré. Et Judith lui dit : Seigneur, Dieu de toute puissance, regarde en ce temps, et aide-moi."
      },
      {
        reference: "13:6-7",
        text: "Et elle prit la tête d'Holopherne, et elle la donna à sa servante. Et elle mit la tête dans le sac de nourriture."
      },
      {
        reference: "13:10",
        text: "Et elle sortit, et elle dit à ceux qui gardaient la porte : Ouvrez, ouvrez la porte, car le Seigneur notre Dieu est avec nous."
      }
    ]
  },
  {
    chapter: 14,
    title: "La victoire",
    verses: [
      {
        reference: "14:1-2",
        text: "Et Judith dit : Taisez-vous, et ne craignez point. Je suis Judith, votre servante. J'ai prié le Seigneur, et il m'a envoyé pour faire ce que vous avez vu."
      },
      {
        reference: "14:7",
        text: "Et ils allèrent à la tente d'Holopherne, et ils virent Holopherne gisant mort, et sa tête coupée."
      },
      {
        reference: "14:11-12",
        text: "Et ils poursuivirent les Assyriens, et ils les tuèrent tous. Et ils prirent leur butin, et ils revinrent à Béthulie."
      }
    ]
  },
  {
    chapter: 15,
    title: "Le cantique de Judith",
    verses: [
      {
        reference: "15:9-10",
        text: "Et Judith dit : Commencez à chanter à mon Dieu avec des tambours, chantez le Seigneur avec des cymbales, chantez-le avec des psaltérions et des harpes."
      },
      {
        reference: "15:14",
        text: "Que toute créature serve le Seigneur, car il a commandé, et ils ont été créés. Il a envoyé son esprit, et il les a formés."
      },
      {
        reference: "15:16",
        text: "C'est le Dieu qui a brisé les guerriers, et qui a délivré son peuple de la main des ennemis."
      }
    ]
  },
  {
    chapter: 16,
    title: "Le cantique de Judith (suite) et conclusion",
    verses: [
      {
        reference: "16:1",
        text: "Chantez le Seigneur mon Dieu avec des tambours, chantez le Seigneur avec des cymballes, chantez-le avec des psaltérions et des harpes."
      },
      {
        reference: "16:2",
        text: "Je chanterai le Seigneur mon Dieu, car il a exalté son peuple, et il a délivré les élus, et il a tué l'ennemi par ma main."
      },
      {
        reference: "16:13",
        text: "Je chanterai le Seigneur mon Dieu, car il a exalté son peuple, et il a délivré les élus, et il a tué l'ennemi par ma main."
      },
      {
        reference: "16:23",
        text: "Et Judith resta dans sa maison, et elle vécut dans le temps de sa vie cent cinq ans. Et elle affranchit sa servante, et elle mourut, et elle fut enterrée avec son mari dans la grotte de son père."
      }
    ]
  }
]

export const judithKeyPassages: KeyPassage[] = [
  {
    reference: "Judith 6:19",
    citation: "Achior fut alors converti au judaïsme, et il fut circoncis, et il fut appelé du nom des frères du peuple d'Israël.",
    commentary: "Achior devient un prosélyte, préfigurant l'admission des païens dans le peuple de Dieu. Son authenticité reconnue par les Juifs montre que la foi n'est pas une question de naissance mais de confiance en Dieu."
  },
  {
    reference: "Judith 8:9",
    citation: "Et elle les vit être dans le désespoir, et elle leur dit : Écoutez-moi, je vous prie, et je ferai ce que j'ai à faire devant le Seigneur.",
    commentary: "Judith prend l'initiative quand les hommes sont dans le désespoir. La foi ne se décourage pas mais trouve des solutions inattendues. Ce que j'ai à faire devant le Seigneur montre que son action sera accomplie devant Dieu, pour Lui."
  },
  {
    reference: "Judith 8:17-18",
    citation: "Car nous n'avons point péché, et vous serez délivrés, si vous espérez en Dieu. Et si nous mourons, nous mourrons comme des martyrs, et nous ne serons point opprimés.",
    commentary: "La confiance de Judith dans la justice de Dieu. Si le peuple a péché, il doit se repentir ; sinon, Dieu le délivrera. Le martyre n'est pas une défaite mais une victoire, mourir comme des martyrs."
  },
  {
    reference: "Judith 9:4",
    citation: "Et vous avez fait ce qui vous a plu, et il n'y a personne qui résiste à votre volonté. Vous avez choisi le peuple d'Israël pour être votre peuple.",
    commentary: "La prière de Judith affirme la souveraineté absolue de Dieu. Il fait ce qui Lui plaît, et personne ne résiste à Sa volonté. Cette souveraineté n'est pas arbitraire mais fidèle à Son alliance avec Israël."
  },
  {
    reference: "Judith 9:14",
    citation: "Car votre force ne dépend point du nombre, ni votre puissance des forts. Mais vous êtes le Dieu des humbles, le secours des petits, le protecteur des faibles, le défenseur de ceux qui sont dans le désespoir.",
    commentary: "Thème central du livre : Dieu n'agit pas par la force humaine mais par la faiblesse apparente. Le Dieu des humbles préfigure les béatitudes du Christ. La force divine se manifeste dans la faiblesse humaine."
  },
  {
    reference: "Judith 13:4-5",
    citation: "Et elle approcha sa main vers le clou qui était à la tête du lit, et elle prit l'épée d'Holopherne, et elle étendit sa main, et elle frappa son cou deux fois, et elle coupa sa tête.",
    commentary: "La décapitation d'Holopherne est le moment culminant du livre. Judith utilise l'épée de l'ennemi contre lui-même. Ironie suprême : l'arme du puissant devient l'instrument de sa chute. Préfigure la croix : l'instrument de mort devient instrument de vie."
  },
  {
    reference: "Judith 13:20",
    citation: "Dieu est grand, et il est admirable dans ses œuvres. Il n'y a personne qui puisse résister à sa volonté. Il a frappé les nations, et il les a tuées, et il les a livrées entre nos mains.",
    commentary: "Le cantique de louange après la victoire. La grandeur de Dieu se manifeste dans ses œuvres merveilleuses. La victoire d'Israël n'est pas due à sa force mais à l'action de Dieu qui frappe les nations." },
  {
    reference: "Judith 16:2",
    citation: "Je chanterai le Seigneur mon Dieu, car il a exalté son peuple, et il a délivré les élus, et il a tué l'ennemi par ma main.",
    commentary: "Judith célèbre Dieu comme l'auteur de la délivrance. Elle est l'instrument mais Dieu est l'auteur. Par ma main n'est pas une revendication de gloire humaine mais l'affirmation que Dieu peut utiliser n'importe qui."
  },
  {
    reference: "Judith 16:13",
    text: "C'est le Dieu qui a brisé les guerriers, et qui a délivré son peuple de la main des ennemis.",
    citation: "Résumé théologique du livre : Dieu brise les guerriers (les puissants) et délivre son peuple. Le renversement des valeurs : les humbles sont exaltés, les puissants sont abaissés. Préfigure le Magnificat de Marie."
  },
  {
    reference: "Judith 16:21-23",
    citation: "Et tout le peuple était dans la joie, et les femmes d'Israël bénissaient Judith, et elles dansaient avec elle. Et Judith chanta le cantique de thanksgiving. Et elle fut honorée par tout le peuple, et elle fut louée dans tout Israël.",
    commentary: "La place d'honneur accordée à Judith est significative. Les femmes dansent avec elle, l'honnorent. Le livre consacre la dignité des femmes dans le peuple de Dieu. Judith devient un modèle de foi et de courage pour toutes les générations."
  }
]
