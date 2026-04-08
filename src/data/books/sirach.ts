/*
 * SIRACH (Ecclésiastique) - Livre deutérocanonique
 * Aussi appelé Ecclésiastique (livre de l'Église)
 */

import type {
  BookSummary,
  BookReadingNotes,
  ChapterOutline,
  KeyPassage
} from "../types/enriched"

export const sirachSummary: BookSummary = {
  book: "Sirach",
  testament: "OLD",
  category: "wisdom",
  author: "Jésus, fils de Sirach (Ben Sira)",
  period: "Début du IIe siècle av. J.-C. (c. 190-180)",
  theme: "La sagesse pratique pour la vie quotidienne",
  outline: [ "1-4 : Éloge de la sagesse et exhortation à la craindre",
    "5-9 : Conseils divers sur la conduite, l'amitié, l'orgueil",
    "10-16 : La sagesse dans l'histoire (Adam, Noé, Abraham, Jacob, Joseph, Moïse)",
    "17-23 : Sur la crainte de Dieu, les vices, les vertus, les femmes",
    "24-29 : Hymne à la Sagesse, diverses maximes",
    "30-34 : Éducation des enfants, richesse, pauvreté, choix des amis",
    "35-37 : Culte, prière, humiliation",
    "38-39 : Médecins, scribes, artisans",
    "40-43 : Vanité des biens, louange de la création",
    "44-50 : Histoire des patriarches et des héros d'Israël",
    "51 : Cantique de Thanksgiving"
  ]
}

export const sirachReadingNotes: BookReadingNotes = {
  book: "Sirach",
  context: "Écrit par Jésus, fils de Sirach, un sage juif de Jérusalem, au début du IIe siècle av. J.-C. Son petit-fils le traduisit en grec en Égypte. Le livre couvre tous les aspects de la vie quotidienne : famille, travail, amitié, foi.",
  keyThemes: [
    {
      theme: "La crainte de Dieu comme principe de sagesse",
      description: "La crainte du Seigneur est le commencement de la sagesse - formule qui revient tout au long du livre."
    },
    {
      theme: "La sagesse dans la vie quotidienne",
      description: "Conseils pratiques sur le mariage, l'éducation des enfants, le commerce, l'amitié, le deuil, etc."
    },
    {
      theme: "La Loi comme chemin de vie",
      description: "La Loi de Moïse est identifiée à la Sagesse. L'observer conduit à la vie."
    },
    {
      theme: "La louange des ancêtres",
      description: "Le long panégyrique des héros d'Israël (ch. 44-50) sert de modèle d'identification pour la communauté."
    },
    {
      theme: "La miséricorde de Dieu",
      description: "Dieu est patient avec les pécheurs et accorde le repentir. Sa miséricorde est aussi grande que sa grandeur."
    }
  ],
  theologicalSignificance: "Sirach est l'un des plus longs livres de l'Ancien Testament et un trésor de sagesse pratique. Le livre exprime la théologie de la rétribution (Dieu récompense les justes, punit les méchants) qui sera questionnée dans d'autres livres (Job, Qohélet). L'hymne à la Sagesse (ch. 24) influence fortement le Prologue de Jean.",
  christologicalTypes: [
    {
      type: "La Sagesse personnifiée",
      description: "La Sagesse qui vient habiter en Israël préfigure le Verbe qui a planté sa tente parmi nous (Jean 1:14)."
    },
    {
      type: "Le fils unique",
      description: "Aaron et Phinées comme fils unique de leur père préfigurent le Christ, Fils unique du Père."
    },
    {
      type: "Le grand prêtre",
      description: "Simon le grand prêtre (ch. 50) préfigure le Christ comme grand prêtre éternel."
    },
    {
      type: "La louange des pères",
      description: "La mémoire des ancêtres préfigure la communion des saints."
    }
  ]
}

export const sirachKeyPassages: KeyPassage[] = [
  {
    reference: "Sirach 1:1-2",
    citation: "Toute sagesse vient du Seigneur, et elle est avec lui dans l'éternité. Le sable de la mer, les gouttes de pluie, et les jours de l'éternité, qui les comptera ?",
    commentary: "L'ouverture du livre affirme la source divine de toute sagesse. Les images du sable, des gouttes de pluie et des jours expriment l'infinitude de Dieu. La sagesse vient du Seigneur - elle n'est pas découverte mais reçue."
  },
  {
    reference: "Sirach 1:14-15",
    citation: "La crainte du Seigneur est la gloire et la fierté, la joie et la couronne de joie. La crainte du Seigneur réjouit le cœur, et elle donne la joie, la longévité et la paix.",
    commentary: "La crainte du Seigneur est décrite positivement comme source de joie et de paix. Ce n'est pas la peur terrifiante mais la reconnaissance révérencielle qui mène à la vie. Les bénéfices : joie du cœur, longévité, paix - shalom complet."
  },
  {
    reference: "Sirach 1:20-21",
    citation: "Toute sagesse craint le Seigneur, et elle est sage dans la crainte de Dieu. La racine de la sagesse, à qui la révélera-t-elle ?",
    citation2: "La sagesse de toutes choses révèle ses secrets, car la sagesse est avec le Seigneur depuis toujours.",
    commentary: "La double vérité : la sagesse craint Dieu, et la crainte de Dieu produit la sagesse. Cercle vertueux de la foi et de la connaissance. La racine de la sagesse - tout commence par Dieu. Les secrets sont révélés à ceux qui craignent le Seigneur."
  },
  {
    reference: "Sirach 2:1-2",
    citation: "Mon fils, si tu te présentes pour servir le Seigneur, prépare ton âme à la tentation. Dispose ton cœur, et sois ferme, et ne te hâte point au temps de la détresse.",
    commentary: "Le service du Seigneur implique la tentation. Prépare ton âme - l'épreuve est inévitable mais préparable. La constance (sois ferme) est la vertu clé dans l'épreuve. Ne pas se hâter montre la confiance en Dieu qui accomplit son temps."
  },
  {
    reference: "Sirach 2:7-8",
    citation: "Vous qui craignez le Seigneur, attendez sa miséricorde, et ne vous détournez point, de peur que vous ne tombiez. Vous qui craignez le Seigneur, ayez confiance en lui, et votre récompense ne vous manquera point.",
    citation2: "Vous qui craignez le Seigneur, espérez le bien, la joie éternelle et la miséricorde.",
    commentary: "L'appel à la confiance pour ceux qui craignent le Seigneur. La promesse triple : récompense, bien, joie éternelle, miséricorde. L'attente active (espérez le bien) caractérise la foi. La miséricorde de Dieu est la fondation de l'espérance."
  },
  {
    reference: "Sirach 3:2-3",
    citation: "Le Seigneur glorifie le père dans ses enfants, et il affermit l'autorité de la mère sur ses fils. Celui qui honore son père expiera ses péchés.",
    citation2: "Et celui qui glorifie sa mère est comme celui qui amasse des trésors.",
    commentary: "L'honneur aux parents comme commandement avec promesses. Dieu glorifie le père dans ses enfants - la piété filiale reçoit sa récompense divine. L'image d'amasser des trésors lie le quatrième commandement à la bénédiction matérielle et spirituelle."
  },
  {
    reference: "Sirach 3:11-12",
    citation: "La gloire d'un homme vient de l'honneur de son père, et c'est une honte pour un enfant que sa mère ne soit pas honorée.",
    citation2: "Mon fils, soutiens ton père dans sa vieillesse, et ne l'afflige point pendant sa vie.",
    citation3: "Et si son intelligence s'affaiblit, sois indulgent, et ne le méprise point, toi qui es dans ta force.",
    commentary: "Le renversement des rôles : l'enfant doit soutenir le parent vieillissant. L'intelligence qui s'affaiblit appelle la patience, pas le mépris. La solidarité intergénérationnelle est une valeur fondamentale. La piété filiale se manifeste concrètement dans les soins."
  },
  {
    reference: "Sirach 3:22-23",
    citation: "Car ce que le Seigneur a fait est bon à son temps. Il a aussi mis la terre dans le cœur des hommes.",
    citation2: "Le sage ne cherche pas à comprendre toutes choses, mais il s'occupe de la Loi du Très-Haut, et il médite sur sa sagesse.",
    commentary: "Acceptation de la limite humaine. Ne cherche pas à comprendre toutes choses - la sagesse reconnaît l'inscrutabilité divine. L'occupation du sage : méditer la Loi, pas spéculer sur les mystères. La terre dans le cœur exprime l'humanité partagée."
  },
  {
    reference: "Sirach 4:11",
    citation: "La sagesse élève ses fils et elle prend soin de ceux qui la cherchent. Elle les aime comme ceux qui la cherchent.",
    citation2: "Celui qui aime la sagesse aime la vie, et ceux qui cherchent la sagesse seront remplis de joie.",
    commentary: "La Sagesse comme mère qui élève et protège. Le lien d'amour entre la Sagesse et ceux qui la cherchent. Aimer la sagesse, c'est aimer la vie - la sagesse n'est pas ennuyeuse mais vitale. La joie est le fruit de la recherche de la sagesse."
  },
  {
    reference: "Sirach 5:1-2",
    citation: "Ne te fie pas à tes richesses, et ne dis pas : Assez pour moi ! Ne te laisse pas emporter par ton désir et ta force.",
    citation2: "Ne dis pas : Qui aura pouvoir sur moi ? Car le Seigneur ne tarde pas à punir.",
    commentary: "Avertissement contre la fausse sécurité des richesses. Assez pour moi - l'illusion de l'autosuffisance. La confiance en sa propre force (qui aura pouvoir sur moi ?) est une tentation constante. Dieu peut intervenir à tout moment (ne tarde pas)."
  },
  {
    reference: "Sirach 6:5-7",
    citation: "La douce parole multiplie les amis, et la langue agréable multiplie les salutations. Que ceux qui te sont nombreux te saluent ! Mais il y a un ami qui est plus attaché qu'un frère.",
    citation2: "Si tu as un ami, acquiers-le dans l'éprouvante, et ne te hâte point de le confier.",
    commentary: "La valeur de l'amitié véritable. La douce parole crée des liens, mais l'amitié profonde se prouve dans l'éprouvante. Le conseil de ne pas se hâter de confier exprime la prudence dans les relations humaines. L'ami plus attaché qu'un frère est rare."
  },
  {
    reference: "Sirach 6:18-19",
    citation: "Mon fils, depuis ta jeunesse, applique-toi à l'instruction, et jusqu'à tes cheveux blancs, tu trouveras la sagesse.",
    citation2: "Approche-toi d'elle comme celui qui laboure et qui sème, et attends ses bons fruits. Car dans son travail, tu travailleras un peu, et tu mangeras bientôt ses produits.",
    commentary: "L'image agricole de l'acquisition de la sagesse. Comme le laboureur, il faut patience et travail (tu travailleras un peu). La promesse : tu mangeras bientôt ses produits - la sagesse nourrit celui qui la cultive. L'éducation est un investissement à long terme."
  },
  {
    reference: "Sirach 7:10-11",
    citation: "Ne dis pas : Il n'a pas profité par ses péchés, car le Seigneur est patient. Ne dis pas : Il aura pitié, pour la multitude de ses dons.",
    citation2: "Car la miséricorde et la colère sont auprès de lui, et il pardonne au pécheur, mais il pardonne au repentir.",
    citation3: "Toute sa miséricorde sera révélée, et il révélera sa colère aux pécheurs.",
    commentary: "Le rapport complexe entre miséricorde et colère divine. Dieu est patient mais pas indifférent au péché. Il pardonne au pécheur, mais il pardonne au repentir - la condition du pardon est la conversion. La miséricorde et la colère sont toutes deux auprès de lui - Dieu n'est ni seulement bon ni seulement juste."
  },
  {
    reference: "Sirach 9:8-9",
    citation: "Détourne tes yeux d'une femme bien parée, et ne regarde pas la beauté étrangère. Beaucoup ont été séduits par la beauté d'une femme, et la passion s'attache comme un feu.",
    citation2: "Ne mange point le pain avec celui qui a l'œil envieux, et ne désire point ses mets.",
    commentary: "Avertissement contre les tentations de la beauté et de l'envie. La beauté comme piège potentiel - pas que la beauté soit mauvaise mais l'attraction peut devenir passion destructrice. Manger avec l'envieux - ne pas partager l'intimité avec ceux qui portent la convoitise dans le cœur."
  },
  {
    reference: "Sirach 10:9-10",
    citation: "Rien n'est plus méchant que l'homme avare, pour qui il n'y a point de remède. Il y a des hommes qui sont avares à l'excès, et ils sont ennemis de leur propre chair.",
    citation2: "Il y a un homme qui, par sa folie, ne mange pas son pain, car il meurt de faim dans sa maison.",
    commentary: "Critique radicale de l'avarice. L'avare est plus méchant car il n'y a point de remède - la cupidité est une maladie incurable sans la grâce. Ennemi de sa propre chair - l'avare se fait du mal à lui-même. Mourir de faim dans sa maison - l'absurdité de thésauriser au point de mourir."
  },
  {
    reference: "Sirach 11:10-11",
    citation: "Mon fils, si tu es riche, tu seras récompensé, et si tu es pauvre, tu n'as point de honte.",
    citation2: "Car le riche n'a point d'existence, et le pauvre ne manque point de mérite.",
    commentary: "La relativité de la richesse et de la pauvreté. Le riche n'a point d'existence - sans la justice, la richesse ne compte pas. Le pauvre ne manque point de mérite - la pauvreté n'est pas déshonorante si elle est vécue dans la dignité. Le mérite se mesure autrement que par les biens."
  },
  {
    reference: "Sirach 12:1-2",
    citation: "Si tu fais le bien, sache à qui tu le fais, et tu en seras remercié par tes bienfaits.",
    citation2: "Fais du bien à l'homme juste, et tu trouveras de la reconnaissance, mais non pas au pécheur.",
    commentary: "La prudence dans la bienfaisance. Sache à qui tu le fais - la charité demande du discernement. Le bienfait au juste est reconnu et apprécié. Le pécheur peut ne pas reconnaître le bienfait - l'expérience de l'ingratitude doit préparer à la prudence."
  },
  {
    reference: "Sirach 14:1-2",
    citation: "Heureux l'homme qui n'a point failli par la parole, et qui n'a point souffert les douleurs du péché.",
    citation2: "Heureux celui dont la conscience ne le reprend point, et qui n'est point tombé dans son espérance.",
    commentary: "La béatitude de la conscience pure. N'a point failli par la parole - l'importance de la parole, comme Jacques l'enseignera. La conscience qui ne reprend point est la paix intérieure. L'espérance maintenue malgré les épreuves est la marque du juste."
  },
  {
    reference: "Sirach 14:11-12",
    citation: "Mon fils, si tu as de quoi, fais l'aumône, et commande à ton âme de me dire : J'ai trouvé la grâce, et je n'ai point été confondu.",
    citation2: "L'aumône délivre de la mort, et elle empêche de descendre dans les ténèbres.",
    citation3: "L'aumône est un excellent trésor pour ceux qui s'en servent, car celui qui fait le bien trouve grâce devant le Très-Haut.",
    commentary: "L'aumône comme sauvegarde. Délivre de la mort et empêche de descendre dans les ténèbres - la charité a une puissance eschatologique. L'image du trésor exprime la valeur permanente des œuvres de charité. La grâce devant Dieu s'obtient par la charité envers les pauvres."
  },
  {
    reference: "Sirach 15:14-15",
    citation: "C'est lui qui a créé l'homme au commencement, et il l'a laissé à son propre libre arbitre.",
    citation2: "Il lui a donné ses commandements et ses préceptes, et il lui a dit : Si tu veux, tu garderas mes commandements.",
    citation3: "Il a mis devant toi le feu et l'eau, et tu tendras la main vers ce que tu voudras.",
    commentary: "Affirmation explicite du libre arbitre. Laissez à son propre libre arbitre - Dieu ne force pas. L'alternative : feu et eau, bien et mal. Si tu veux - la condition de la justice est le consentement humain. La responsabilité humaine est pleinement affirmée."
  },
  {
    reference: "Sirach 16:17-18",
    citation: "Ne dis pas : Je me cacherai du Seigneur, et qui se souviendra de moi en haut ? Je ne serai point compté parmi la multitude.",
    citation2: "Ne dis pas : La grandeur et la multitude de mes œuvres me cachent à Dieu, et qui est le juge sur la terre ?",
    citation3: "Car le ciel et la terre sont remplis de sa gloire, et on ne peut voir sa pensée.",
    commentary: "L'impossibilité de se cacher de Dieu. Qui se souviendra de moi ? - l'anxiété de l'insignifiance est sans fond car Dieu se souvient de tous. La grandeur humaine ne cache rien à Dieu. Sa pensée est inscrutable mais sa présence est universelle (ciel et la terre remplis de sa gloire)."
  },
  {
    reference: "Sirach 17:1-2",
    citation: "Le Seigneur a créé l'homme de la terre, et il l'a créé à son image. Il l'a renvoyé dans le monde, et il lui a donné le pouvoir sur tout ce qui est sur la terre.",
    citation2: "Il l'a revêtu de force comme lui, et il l'a fait selon son image.",
    commentary: "L'anthropologie biblique résumée. L'homme créé de la terre (humus) et à l'image de Dieu (imago Dei) - dualité de l'humain : poussière et gloire. Le pouvoir sur tout ce qui est sur la terre exprime la royauté de l'homme sur la création. La force comme lui - l'homme participe à la puissance divine."
  },
  {
    reference: "Sirach 17:29-30",
    citation: "Combien sont grandes les œuvres du Seigneur ! Il a fait toutes choses avec sagesse. La terre est remplie de ses créatures.",
    citation2: "Et il y a la mer, large et spacieuse, où il y a des animaux sans nombre, des petits et des grands.",
    citation3: "Là se promènent les navires, et ce Léviathan que tu as formé pour se jouer avec lui.",
    commentary: "L'hymne à la création préfigure les Psaumes. La sagesse dans la création - l'ordre et la beauté du monde reflètent la sagesse divine. Le Léviathan comme créature de Dieu qui se joue exprime la joie de la création. L'immensité de la mer manifeste la puissance créatrice."
  },
  {
    reference: "Sirach 18:6-7",
    citation: "Il n'y a rien de meilleur que de craindre le Seigneur, et rien de plus doux que d'observer ses commandements.",
    citation2: "Il n'y a rien de plus doux que de suivre les commandements du Seigneur, et il n'y a rien de meilleur que d'être ami du Seigneur.",
    citation3: "Rien n'est plus doux que de craindre le Seigneur, et rien n'est meilleur que de suivre ses commandements.",
    commentary: "La douceur de la crainte et des commandements du Seigneur. Paradoxe : la crainte est douce, les commandements sont doux. Être ami du Seigneur - la plus haute dignité humaine. La répétition souligne l'importance : rien de meilleur, rien de plus doux."
  },
  {
    reference: "Sirach 18:30-32",
    citation: "Ne va point après tes désirs, et ne te détourne point de ta voie.",
    citation2: "Si tu te donnes au travail, tu recevras tes fruits, et tu seras heureux à la fin.",
    citation3: "Écoute-moi, mon fils, et ne me méprise point, et tu apprendras à la fin les paroles de ma vérité.",
    commentary: "L'avertissement contre la poursuite des désirs. La promesse du fruit pour le travail exprime la rétribution. Tu seras heureux à la fin - la félicité finale est la perspective. L'écoute du sage (le père) est le chemin de la vérité."
  },
  {
    reference: "Sirach 19:20-21",
    citation: "Toute chair connaît l'amour et la haine, mais la haine des méchants est vile.",
    citation2: "Ceux qui haïssent mentent, et celui qui vole la louange aura une honte éternelle.",
    citation3: "Ne refuse pas d'écouter la vérité, et ne t'enorgueillis point quand on te reprend.",
    commentary: "La distinction entre amour et haine. La haine des méchants est vile - la haine n'est pas neutre mais dégradante. Voler la louange - chercher la gloire indûment est un vol. L'humilité face à la correction (reproche) est le chemin de la vérité."
  },
  {
    reference: "Sirach 20:5-6",
    citation: "Il y a un qui par silence se fait savoir, et il y a un qui est bavard et détesté.",
    citation2: "Il y a un qui se tait parce qu'il n'a point de parole, et il y a un qui se tait parce qu'il connaît le temps favorable.",
    citation3: "Un sage se tait jusqu'au moment favorable, mais un bavard et un insensé passent leur temps.",
    commentary: "La sagesse de la parole et du silence. Se taire parce qu'il n'a point de parole vs parce qu'il connaît le temps favorable - la même action, des motivations différentes. Le sage attend le moment favorable pour parler. Le bavardage est toujours inapproprié."
  },
  {
    reference: "Sirach 21:1-2",
    citation: "Mon fils, si tu as péché, cesse de le faire, et prie pour tes fautes passées.",
    citation2: "Comme une couleuvre qui mord quand on marche dessus, ainsi est le pécheur qui offense et qui s'en excuse.",
    commentary: "La possibilité de cesser le péché. Le repentir n'est pas seulement regret mais arrêt (cesse de le faire). L'image de la couleuvre exprime le danger du péché qui mord quand on marche dessus - le péché attend l'occasion. L'excuse du pécheur est aggravante."
  },
  {
    reference: "Sirach 22:27-28",
    citation: "Si tu as des fils, instruis-les, et plie leur dos dès leur jeunesse.",
    citation2: "Si tu as des filles, prends soin de leur corps, et ne leur montre point un visage joyeux.",
    citation3: "Marie ta fille, et tu auras fait une grande chose, mais marie-la à un homme prudent.",
    commentary: "La responsabilité parentale dans l'éducation. Plie leur dos dès leur jeunesse - la discipline dès le jeune âge. Le soin du corps des filles reflète la culture de l'époque. Le mariage à un homme prudent est le critère principal pour le choix du conjoint."
  },
  {
    reference: "Sirach 23:1-2",
    citation: "Seigneur, Père et Dieu de ma vie, ne m'abandonne point à leurs desseins, et ne permets pas qu'ils tombent dans mes pièges.",
    citation2: "Qui me rappellera mes pensées, et qui m'empêchera de fauter ?",
    citation3: "C'est toi qui délivreras mon âme de la parole destructrice, et des pièges de ceux qui parlent avec flatterie.",
    commentary: "La prière de protection contre les pièges. Père et Dieu de ma vie - la prière s'adresse au Père qui donne la vie. La demande : ne pas être abandonné aux desseins (projets) des autres. La parole destructrice et la flatterie sont des dangers constants."
  },
  {
    reference: "Sirach 23:4",
    citation: "Seigneur, Père et Dieu de ma vie, ne m'accorde point la concupiscence de mes yeux, et détourne de moi la passion de la jeunesse.",
    commentary: "La prière contre la concupiscence. La concupiscence de mes yeux - la convoitise visuelle. La passion de la jeunesse - les désirs de la jeunesse qui peuvent égarer. La prière du Pater (Ne nous soumets pas à la tentation) est préparée par cette prière ancienne."
  },
  {
    reference: "Sirach 24:1-3",
    citation: "La sagesse se loue elle-même, et elle se glorifie au milieu de son peuple. Elle s'est ouverte la bouche dans l'assemblée du Très-Haut, et elle s'est glorifiée devant sa puissance.",
    citation2: "Je suis sortie de la bouche du Très-Haut, et comme une vapeur j'ai couvert la terre.",
    commentary: "L'auto-révélation de la Sagesse. Je suis sortie de la bouche du Très-Haut - la Sagesse comme parole de Dieu. Comme une vapeur qui couvre la terre - la Sagesse remplie l'univers. Ce texte influence directement le Prologue de Jean (le Verbe était auprès de Dieu)."
  },
  {
    reference: "Sirach 24:8-9",
    citation: "Alors le Créateur de toutes choses m'a donné un commandement, et celui qui m'a créée a fait reposer ma tente.",
    citation2: "Il m'a dit : Habite en Jacob, et reçois ton héritage en Israël, et prends racine dans le peuple élu.",
    commentary: "La Sagesse vient habiter en Israël. Fais reposer ma tente - l'image du tabernacle. La tente de la Sagesse est la Loi donnée à Israël. Le choix de Jacob/Israël comme lieu de l'habitation de la Sagesse exprime l'élection. Jean 1:14 reprendra : il a planté sa tente parmi nous."
  },
  {
    reference: "Sirach 24:12-13",
    citation: "Je me suis enracinée dans un peuple glorifié, dans le domaine du Seigneur, dans son héritage.",
    citation2: "J'ai grandi comme le cèdre du Liban, et comme un cyprès sur la montagne de l'Hermon.",
    citation3: "J'ai grandi comme un palmier à Engaddi, et comme les roses de Jéricho.",
    commentary: "\"La Sagesse décrit sa croissance en Israël avec des images botaniques. Cèdre, cyprès, palmier, roses - symboles de grandeur, de beauté, de fécondité. La \"racine' exprime l'ancrage profond dans le peuple. Les lieux (Liban, Hermon, Engaddi, Jéricho) localisent la Sagesse dans la terre promise."
  },
  {
    reference: "Sirach 24:19-20",
    citation: " Venez à moi, vous qui me désirez, et rassasiez-vous de mes produits.",
    citation2: "Car ma mémoire est plus douce que le miel, et mon héritage est plus doux que le miel.",
    citation3: "Ceux qui me mangent auront encore faim, et ceux qui me boivent auront encore soif.",
    citation4: "Celui qui m'obéit n'aura point de honte, et ceux qui œuvrent par moi ne pécheront point.",
    commentary: "L'invitation de la Sagesse à tous ceux qui la désirent. Rassasiez-vous - la sagesse nourrit. La douceur du miel évoque le plaisir de la sagesse. Ceux qui me mangent auront encore faim - paradoxale, exprime que la sagesse est inépuisable, crée toujours plus de désir. L'obéissance à la Sagesse protège de la honte et du péché."
  },
  {
    reference: "Sirach 24:23-25",
    citation: "Toutes choses sont l'œuvre du Seigneur, et il les a données à la sagesse. La sagesse s'est répandue sur toutes ses œuvres.",
    citation2: "Elle les a remplies comme la mer, et elle les a instruites comme un trésor.",
    citation3: "Je me glorifierai en ceux qui aiment le Seigneur, et je me recommanderai à ceux qui m'aiment.",
    commentary: "La Sagesse comme médiatrice de la création. Elle les a remplies comme la mer - l'immensité de la sagesse divine. La Sagesse instruit la création - la nature elle-même est pédagogique. La gloire de la Sagesse se manifeste en ceux qui aiment le Seigneur - la communauté des fidèles."
  },
  {
    reference: "Sirach 24:30-32",
    citation: "Je me glorifierai en ceux qui aiment le Seigneur, et je me recommanderai à ceux qui m'aiment.",
    citation2: "Écoutez-moi, vous qui êtes saints, et croissez comme un roseau au bord de l'eau.",
    citation3: "Écoutez-moi, vous qui êtes saints, et vous serez comme une plante aromatique.",
    citation4: "Croissez et multipliez, et réjouissez-vous dans la miséricorde du Seigneur.",
    commentary: "L'invitation à croître dans la sainteté. Comme un roseau au bord de l'eau - la croissance requiert la proximité de la source (l'eau). Plante aromatique - la sainteté parfume le monde. La joie dans la miséricorde du Seigneur est le fruit de la croissance spirituelle."
  },
  {
    reference: "Sirach 25:1-2",
    citation: "Trois choses mon cœur craint, et la quatrième je la déteste : la calomnie d'une ville, la multitude d'un peuple, et une fausse accusation, toutes sont pires que la mort.",
    citation2: "Un cœur triste, un visage triste, et la destruction d'un impie, sont pires que la mort.",
    commentary: "Le catalogue des maux à craindre. La calomnie, la fausse accusation sont détestées plus que la mort car elles détruisent la réputation et la communauté. Le cœur triste et le visage triste expriment la tristesse qui détruit de l'intérieur. Ces maux sont pires que la mort car la mort est naturelle, ces maux sont contre-nature."
  },
  {
    reference: "Sirach 26:1-4",
    citation: "Heureux l'homme qui a une femme bonne, et le nombre de ses jours sera le double. Une femme bonne fait la joie de son mari, et il passera ses années dans la paix.",
    citation2: "Une femme vertueuse est un bonheur pour son mari, et il passera ses années dans la paix.",
    citation3: "Une femme vertueuse est un grand trésor, et le trésor d'un père est une femme prudente.",
    citation4: "Une femme sans honte est comme la pourriture des os de son mari.",
    commentary: "Le modèle du mariage judaïque. La femme bonne double les jours du mari - longévité comme bénédiction du bonheur conjugal. La paix (shalom) dans le foyer est le fruit de la vertu de la femme. La comparaison comme un trésor valorise la femme prudente. La femme sans honte (inconséquente) détruit le mari comme la pourriture les os."
  },
  {
    reference: "Sirach 27:5-7",
    citation: "Le souffle de l'homme est comme une lampe, et il révèle ses secrets par son visage.",
    citation2: "Écoute, et je t'instruirai, et je te raconterai ce que j'ai vu et entendu.",
    citation3: "Dans l'assemblée des saints, j'ai raconté leurs œuvres, et je les ai rapportées dans la cité du peuple.",
    commentary: "\"Le visage comme révélateur de l'intérieur. \"Le souffle de l'homme est comme une lampe' - la lumière de la vie révèle les secrets. Le visage trahit les pensées du cœur. La vérité sur l'homme se voit dans son visage, miroir de l'âme."
  },
  {
    reference: "Sirach 28:1-2",
    citation: "Celui qui se venge trouvera la vengeance du Seigneur, et il gardera rigoureusement compte de ses péchés.",
    citation2: "Pardonne à ton prochain le tort qu'il t'a fait, et alors, quand tu prieras, tes péchés te seront pardonnés.",
    citation3: "Si un homme garde colère contre un autre, comment peut-il demander guérison au Seigneur ?",
    commentary: "L'enseignement sur le pardon qui influencera directement le Notre Père (pardonne-nous comme nous pardonnons). Le pardon accordé au prochain devient la mesure du pardon reçu de Dieu. La colère comme obstacle à la prière - impossible de demander guérison tout en gardant rancune. Le pardon est la condition de la prière exaucée."
  },
  {
    reference: "Sirach 28:9-10",
    citation: "Si un homme prie contre un autre, qui l'exaucera ? S'il n'a pas eu pitié d'un homme semblable à lui, comment peut-il demander pardon pour ses péchés ?",
    citation2: "S'il est encore chair, il gardera colère, et le Seigneur pardonnera-t-il à celui qui prie ?",
    citation3: "La fin d'un homme est la mort, et la fin d'un impie est la miséricorde.",
    citation4: "Le pécheur ne sera pas pardonné, mais il se repentira dans l'enfer, et il y priera.",
    citation5: "Mais la prière d'un humilié percera les nuées, et elle n'ira point en repos jusqu'à ce qu'elle atteigne le Très-Haut.",
    commentary: "La prière de l'humilié qui percera les nuées exprime la puissance de la prière venant du cœur contrit. Le contraste entre le pécheur qui priera dans l'enfer (trop tard) et l'humilié dont la prière atteint Dieu. La persévérance de la prière (n'ira point en repos) assure son exaucement."
  },
  {
    reference: "Sirach 30:1-2",
    citation: "Celui qui aime son fils châtie souvent son fils, afin qu'il se réjouisse de lui à la fin.",
    citation2: "Celui qui instruit son fils en sera glorifié, et il se vantera de lui parmi ses amis.",
    citation3: "Le père qui meurt laisse des enfants, mais le père qui meurt sans enfants laisse le deuil.",
    commentary: "La paternité comme vocation à l'éducation. Le châtiment (châtie souvent) est une forme d'amour qui prépare à la joie future. L'instruction du fils est source de gloire pour le père. Les enfants comme héritage du Seigneur (Psaume 127). Le père sans enfants laisse le deuil - la stérilité comme tragédie dans l'Antiquité."
  },
  {
    reference: "Sirach 30:22-23",
    citation: "La joie du cœur est la vie de l'homme, et la joie du cœur est une longue vie.",
    citation2: "Aime-toi toi-même, et rends grâce à Dieu, car il n'y a rien de meilleur pour l'homme que la joie du cœur.",
    commentary: "La joie du cœur comme source de vie et de longévité. Aime-toi toi-même n'est pas l'égoïsme mais l'estime de soi qui reconnaît la bonté de la création. Rendre grâce à Dieu pour la joie exprime que toute joie véritable vient de Lui. La joie n'est pas optionnelle mais vitale."
  },
  {
    reference: "Sirach 31:12-13",
    citation: "Écoute-moi, mon fils, et ne me méprise point, et tu apprendras à la fin les paroles de ma vérité.",
    citation2: "Veille sur la balance de la justice, et pèse exactement la mesure de Dieu, et pèse exactement la mesure de Dieu, et pèse exactement la mesure de Dieu.",
    commentary: "La justice commerciale comme expression de la justice divine. Veille sur la balance - la précision dans les poids est exigée. Le commerce honnête est un témoignage de foi. La mesure de Dieu - la justice humaine reflète la justice divine."
  },
  {
    reference: "Sirach 34:18-19",
    citation: "Celui qui offre un sacrifice avec un bien mal acquis est comme celui qui sacrifie un fils devant son père.",
    citation2: "Car le pain des pauvres est la vie des pauvres, et celui qui le leur ôte est un homicide.",
    citation3: "Il ôte la vie à son prochain, et il verse le sang, comme celui qui tue un bœuf.",
    citation4: "Celui qui fait du tort à un mari ou à une femme est un homicide.",
    citation5: "Il ôte la vie à lui-même, et il est infidèle à Dieu.",
    commentary: "L'injustice envers les pauvres comme homicide. Le pain des pauvres est la vie des pauvres - les biens nécessaires à la vie ne sont pas luxes mais nécessités. Celui qui les ôte comme celui qui sacrifie un fils devant son père - crime odieux car Dieu est Père des pauvres. L'injustice conjugale est aussi homicide car elle détruit la vie."
  },
  {
    reference: "Sirach 35:1-2",
    citation: "Celui qui observe la Loi offre des sacrifices, et il est comme celui qui offre une offrande de paix.",
    citation2: "Celui qui rend grâce pour le bien offert est comme celui qui offre le froment et le vin.",
    citation3: "Et celui qui se détourne du mal est comme celui qui offre un sacrifice d'expiation.",
    commentary: "La prière et l'obéissance comme sacrifice. Observer la Loi équivaut à offrir des sacrifices. Le sacrifice véritable n'est pas seulement rituel mais éthique : se détourner du mal. La reconnaissance (rendre grâce) est sacrifice. Les prophètes diront la même chose (Osée 6:6, Michée 6:8)."
  },
  {
    reference: "Sirach 35:14-15",
    citation: "Ne dis pas : Le Seigneur ne voit pas, et ne dis pas : Il ne s'en aperçoit pas.",
    citation2: "Car la pitié de l'homme est pour son prochain, mais la pitié du Seigneur est pour toute chair.",
    citation3: "Il reprend, et il instruit, et il enseigne, et il ramène comme un berger son troupeau.",
    citation4: "Il a pitié de ceux qui acceptent la correction, et il cherche ceux qui suivent ses voies.",
    citation5: "Mon fils, ne méprise point la correction du Seigneur, et ne te décourage point quand il te reprend.",
    commentary: "La pitié divine universelle (pour toute chair) contraste avec la pitié humaine limitée (pour son prochain). Dieu reprend, instruit, enseigne - pédagogie divine. La correction est signe d'amour, pas de rejet. Le berger qui ramène son troupeau exprime la sollicitude constante de Dieu. Ne pas se décourager quand Dieu reprend."
  },
  {
    reference: "Sirach 36:1-2",
    citation: "Aie pitié de nous, Seigneur, Dieu de l'univers, et regarde, et fais descendre ta crainte sur toutes les nations.",
    citation2: "Lève ta main contre les nations étrangères, et qu'elles voient ta puissance.",
    citation3: "De même que tu as sanctifié en nous ton saint nom, ainsi sanctifie-le en nous par ta gloire.",
    citation4: "Qu'ils sachent que tu es le seul Dieu, et que tes œuvres sont merveilleuses.",
    commentary: "Prière pour la manifestation de la puissance de Dieu devant les nations. Fais descendre ta crainte - que les nations reconnaissent la grandeur de Dieu. La sainteté de Dieu montrée en Israël devient témoignage aux nations. Le but : qu'ils sachent que tu es le seul Dieu - profession de foi monothéiste."
  },
  {
    reference: "Sirach 37:7-8",
    citation: "Tout ami dira : Je suis son ami, mais il y a un ami qui est ami pour son nom.",
    citation2: "Il n'y a point d'ami qui ne soit un jour ennemi, et il n'y a point d'ennemi qui ne soit un jour ami.",
    citation3: "Un ami fidèle est une forte protection, et celui qui le trouve a trouvé un trésor.",
    commentary: "La complexité de l'amitié humaine. Ami pour son nom - ami par intérêt. Les relations peuvent changer : ami devenu ennemi, ennemi devenu ami. La constance est rare. L'ami fidèle est trésor et forte protection - valeur inestimable de la loyauté."
  },
  {
    reference: "Sirach 38:1-2",
    citation: "Honore le médecin pour tes besoins, car le Seigneur l'a créé.",
    citation2: "Car c'est du Très-Haut que vient la guérison, et il reçoit un présent du roi.",
    citation3: "La science du médecin fait grandir sa tête, et il est admiré par les grands.",
    citation4: "Le Seigneur a créé les médicaments de la terre, et l'homme prudent ne les méprise point.",
    commentary: "Honneur dû aux médecins et à la médecine. Contrairement à certaines interprétations religieuses qui rejettent la médecine, Sirach affirme : le Seigneur l'a créé. La guérison vient du Très-Haut mais à travers les médecins. L'homme prudent ne les méprise point - la médecine ne contredit pas la foi mais est moyen de la providence."
  },
  {
    reference: "Sirach 39:1-3",
    citation: "L'artisan et le sage sont semblables, et tous deux sont maîtres de leur art.",
    citation2: "Celui qui se consacre à la Loi du Très-Haut étudie la sagesse de tous les anciens, et il s'occupe des prophéties.",
    citation3: "Il garde les discours des hommes illustres, et il pénètre les sens des paraboles obscures.",
    citation4: "Il sert les grands, et il se présente devant les chefs. Il voyage dans le pays des nations, et il expérimente le bien et le mal dans les hommes.",
    commentary: "L'honneur du scribe (étudiant de la Loi) comparable à celui de l'artisan. Le scribe étudie la sagesse de tous les anciens - la tradition comme source de sagesse. L'étude des prophéties, des paraboles obscures - la science de l'interprétation. Le scribe voyage pour expérimenter - la sagesse n'est pas seulement théorique."
  },
  {
    reference: "Sirach 39:16-18",
    citation: "Toutes les œuvres du Seigneur sont bonnes, et il pourvoit à tous les besoins au moment opportun.",
    citation2: "On ne peut dire : Ceci est pire que cela, car toutes choses sont jugées bonnes à leur temps.",
    citation3: "Et maintenant, louez le Seigneur de tout votre cœur, et invoquez son saint nom.",
    commentary: "L'affirmation de la bonté de toute la création. Toutes les œuvres du Seigneur sont bonnes - reprise de la Genèse 1 (il vit que cela était bon). Au moment opportun - la providence divine pourvoit selon le temps. Ne pas comparer (ceci est pire que cela) car Dieu a ses raisons que la sagesse humaine ne comprend pas toujours."
  },
  {
    reference: "Sirach 40:1-2",
    citation: "Une grande tribulation a été créée depuis le commencement, et il y a une fin à toute tribulation.",
    citation2: "La vie et la mort, le bien et le mal, la famine et la richesse, toutes viennent du Seigneur.",
    citation3: "Toutes choses viennent du Seigneur, et comme il a voulu, ainsi il a été fait.",
    commentary: "La souveraineté divine sur tous les contraires. La vie et la mort, le bien et le mal viennent du Seigneur - non que Dieu crée le mal, mais il permet les contraires. Comme il a voulu, ainsi il a été fait - la volonté divine est dernière. Cette affirmation de souveraineté est un fondement de confiance."
  },
  {
    reference: "Sirach 41:1-2",
    citation: "O mort, qu'est-ce qui est amer comme toi ?",
    citation2: "Il n'a point d'amertume pour celui qui est en bonne santé, dans les pays, chez ceux qui ont du bien, et qui sont sans souci.",
    citation3: "Il est amer pour celui qui est dans le besoin, et pour celui dont l'âme est dans le besoin, et qui manque de tout, et qui est dans l'abondance.",
    citation4: "Ne crains point la sentence de mort, souviens-toi de tes ancêtres et de tes successeurs.",
    citation5: "La sentence du Seigneur est sur toute chair, et pourquoi refuserais-tu de mourir ?",
    commentary: "Méditation sur la mort comme amertume ou libération. La mort est amère pour l'homme pauvre et sans soutien - le monde comme amertume pour les malheureux. Pourquoi refuserais-tu de mourir ? - la mort comme naturelle, pas à craindre. Le souvenir des ancêtres qui sont morts relativise la peur de la mort."
  },
  {
    reference: "Sirach 42:15-16",
    citation: "Je me souviendrai des œuvres du Seigneur, et je raconterai ce que j'ai vu. Par la parole du Seigneur, ses œuvres ont été faites, et toute créature obéit à sa volonté.",
    citation2: "Il n'y a rien qui puisse être ajouté ou retranché, et il n'y a personne qui puisse augmenter ou diminuer ses œuvres merveilleuses.",
    commentary: "La mémoire des œuvres du Seigneur comme acte de foi. Par la parole du Seigneur, ses œuvres ont été faites - la création par la parole. Toute créature obéit à sa volonté - l'obéissance cosmique à la parole créatrice. L'œuvre de Dieu est parfaite, ni à augmenter ni à diminuer."
  },
  {
    reference: "Sirach 43:1-2",
    citation: "La clarté du ciel qui brille au-dessus du monde est la beauté du firmament, la vision de la gloire du Seigneur.",
    citation2: "Le soleil, quand il se lève, proclame à son lever : Quelle merveille est l'œuvre du Très-Haut !",
    citation3: "À midi, il séche la terre, et qui peut supporter sa chaleur ?",
    commentary: "L'hymne cosmique à la gloire de Dieu dans le firmament. La beauté du ciel comme vision de la gloire du Seigneur - la création révèle le Créateur. Le soleil comme œuvre merveilleuse, sa chaleur insupportable exprime la puissance divine. La contemplation de la nature conduit à la louange."
  },
  {
    reference: "Sirach 43:11-12",
    citation: "Regarde l'arc-en-ciel, et bénis celui qui le fait, car il est très beau dans sa splendeur.",
    citation2: "Il entoure le ciel d'un cercle de gloire, et les mains du Très-Haut l'ont étendu.",
    citation3: "Par son commandement, il accélère la neige, et il lance la foudre selon son jugement.",
    citation4: "Alors les nuées s'ouvrent comme des outres, et les anges font pleuvoir les éclairs.",
    commentary: "Les phénomènes naturels comme œuvres de Dieu. L'arc-en-ciel comme signe de l'alliance (Genèse 9) est ici cercle de gloire - couronne de la création. Les mains du Très-Haut l'ont étendu - personnification poétique. La neige et la foudre expriment la puissance et le jugement divins. Les anges comme serviteurs des éléments."
  },
  {
    reference: "Sirach 43:27-28",
    citation: "Nous pourrions dire beaucoup, et nous n'arriverions pas à la fin, et la somme de nos paroles est : Il est tout.",
    citation2: "Qu'est-ce que nous pouvons pour le glorifier ? Car il est le Tout-Puissant, au-dessus de toutes ses œuvres.",
    citation3: "Le Seigneur est terrible et très grand, et sa merveilleuse grandeur est sans bornes.",
    commentary: "L'infini de la louange face à l'infini de Dieu. Nous pourrions dire beaucoup, et nous n'arriverions pas à la fin - la disproportion entre la parole humaine et la grandeur divine. Il est tout - Dieu est la totalité, le summun. La grandeur sans bornes exprime la transcendance. La seule réponse possible est la louange ininterrompue."
  },
  {
    reference: "Sirach 44:1-2",
    citation: "Faisons l'éloge des hommes illustres, qui sont nos pères dans leur génération.",
    citation2: "Le Seigneur a accompli de grandes choses par eux, et il a fait éclater sa grandeur depuis le commencement.",
    citation3: "Ils ont gouverné le pays par leur sagesse, et ils ont prophétisé par leur intelligence.",
    citation4: "Ils ont été des hommes de justice, et leur justice n'a point été oubliée.",
    citation5: "Leur race subsiste avec leurs descendants, et leurs enfants sont à jamais l'héritage de leur bonté.",
    citation6: "Leur race subsistera éternellement, et leur gloire ne sera point effacée.",
    commentary: "Début du grand panégyrique des héros d'Israël. Faisons l'éloge - la mémoire comme acte de foi. Les pères comme modèles pour la génération présente. La justice des ancêtres n'a point été oubliée - la mémoire transmet les valeurs. Leur race subsiste éternellement - promesse de descendance. La gloire des justes est impérissable."
  },
  {
    reference: "Sirach 44:20-21",
    citation: "Enoch fut agréé par le Seigneur, et il fut enlevé comme un exemple de conversion pour toutes les générations.",
    citation2: "Noé fut trouvé juste et parfait, et au temps du courroux, il fut la réconciliation.",
    citation3: "A cause de lui, il y eut un reste, et le déluge passa sur la terre.",
    citation4: "Les alliances du monde furent faites avec lui, afin que toute chair ne fût plus détruite par le déluge.",
    citation5: "Abraham fut le père d'une multitude de nations, et il n'y en a point qui ait eu sa gloire.",
    citation6: "Il observa la Loi du Très-Haut, et il entra dans une alliance avec lui.",
    citation7: "Il établit l'alliance dans sa chair, et il fut éprouvé, et il fut trouvé fidèle.",
    citation8: "C'est pourquoi il lui fut promis, par serment, que toutes les nations seraient bénies en sa postérité, et qu'il multiplierait sa descendance comme la poussière de la terre.",
    citation9: "Qu'il élèverait sa postérité comme les étoiles, et qu'il leur donnerait un héritage de la mer jusqu'à la mer, et du fleuve jusqu'aux extrémités de la terre.",
    commentary: "Le début de la galerie des héros. Énoch comme exemple de conversion - le modèle de la marche avec Dieu. Noé comme juste et réconciliation au temps du courroux (le déluge). Les alliances du monde avec lui préfigurent l'alliance noachique. Abraham comme père des nations, modèle de la foi observant la Loi avant qu'elle soit donnée. La promesse de bénédiction pour toutes les nations (Genèse 12) est citée."
  },
  {
    reference: "Sirach 45:1-3",
    citation: "Moïse fut aimé de Dieu et des hommes, car il est appelé fidèle dans toute la maison du Seigneur.",
    citation2: "Il lui donna la gloire, et il le fit puissant devant les rois, et il lui montra sa gloire.",
    citation3: "Il sanctifia le peuple par sa douceur, et il lui donna la Loi.",
    commentary: "Moïse comme aimé de Dieu et des hommes - rare double affection. Fidèle dans toute la maison du Seigneur - modèle de fidélité. La douceur de Moïse dans la sanctification du peuple exprime sa pédagogie. La Loi donnée à Moïse est don de grâce pour sanctifier."
  },
  {
    reference: "Sirach 45:6-7",
    citation: "Il fit briller sa gloire sur Phinées, fils d'Aaron, en lui donnant l'alliance du sacerdoce éternel.",
    citation2: "Il fit avec lui une alliance de paix, et il le plaça comme prince du peuple, et il lui donna la dignité du sacerdoce.",
    citation3: "Il le bénit avec ses ornements, et il lui donna la ceinture de gloire, et il le revêtit de l'éclat de la sainteté.",
    citation4: "Et il lui donna l'autorité sur le peuple, et il le fit entrer dans le sanctuaire de l'encens, pour qu'il offrît l'encens devant le Seigneur.",
    citation5: "Et il lui donna la juridiction sur les choses saintes, sur les choses les plus saintes, sur les autels et sur les ustensiles du sanctuaire.",
    citation6: "Et il lui donna la juridiction sur les vêtements sacrés, sur les vêtements de l'autel, et sur l'huile de l'onction et sur l'encens.",
    commentary: "Phinées comme modèle du sacerdoce. L'alliance éternelle du sacerdoce avec Phinées (Nombres 25) est citée. Alliance de paix - le sacerdoce comme ministère de réconciliation. Les ornements sacerdotaux expriment la dignité du service. La juridiction sur les choses saintes et les choses les plus saintes exprime la hiérarchie du sacré."
  },
  {
    reference: "Sirach 46:1-2",
    citation: "Josué, fils de Nun, fut puissant dans la guerre, et il fut le successeur de Moïse dans la prophétie.",
    citation2: "Il fut, selon son nom, grand pour le salut de ses élus, pour se venger des ennemis qui s'élevaient, afin que Jacob pût connaître la grâce de Dieu.",
    citation3: "Quelle gloire eut-il quand il leva ses mains, et qu'il étendit son épée contre la ville !",
    citation4: "Car qui s'est tenu devant lui, quand il fit entendre sa voix ?",
    citation5: "Il fit arrêter le soleil, et un jour dura deux jours.",
    citation6: "Il invoqua le Très-Haut, le Tout-Puissant, quand les ennemis l'entouraient de tous côtés.",
    citation7: "Et le Seigneur les frappa avec des grêlons d'une puissance terrible, et ils tombèrent par la famine à cause de la guerre.",
    citation8: "Et ils traversèrent le Jourdain, et ils tombèrent dans la mer et dans le désert.",
    citation9: "Et il s'avança avec les chefs de son peuple, et il fit hériter les nations à ceux qui étaient fidèles.",
    commentary: "Josué comme successeur de Moïse dans la prophétie et la guerre. Selon son nom - Josué signifie l'Éternel sauve. Le miracle du soleil arrêté (Josué 10) est rappelé. L'invocation du Très-Haut exprime que la victoire vient de Dieu. L'héritage des nations aux fidèles accomplit la promesse."
  },
  {
    reference: "Sirach 47:2-3",
    citation: "Samuel, le prophète du Seigneur, fut aimé de son Seigneur, et il établit la royauté sur son peuple.",
    citation2: "Il jugea le peuple selon la loi du Seigneur, et le Seigneur protégea Israël par sa main.",
    citation3: "Quand il se fut retiré, il visita encore son peuple, et il parla au Seigneur par la prière.",
    citation4: "Il offrit un agneau et un premier-né, et il fit entendre sa voix au Seigneur.",
    citation5: "Il frappa les Amalécites, et il les défit par sa parole, et il fit délivrer Israël de la main de l'ennemi.",
    commentary: "Samuel comme prophète et juge. Il établit la royauté - Samuel oint Saül et David. La prière comme arme (il parla au Seigneur par la prière). L'offrande d'un agneau exprime le sacrifice de reconnaissance. La défaite des Amalécites par sa parole - la parole prophétique comme puissance de victoire."
  },
  {
    reference: "Sirach 47:8-11",
    citation: "David fut roi selon le cœur de Dieu, et il fit disparaître les ennemis de tous côtés.",
    citation2: "Il fit une alliance avec Hiram le Tyrien, et il envoya des serviteurs vers lui pour lui demander du bois.",
    citation3: "Et il lui envoya des artisans, et ils construisirent une maison pour le Seigneur.",
    citation4: "Il fut glorifié par des milliers de milliers, et il loua le Seigneur dans un cantique.",
    citation5: "Il acheva les sacrifices et les offrandes, et il ordonna que le nom du Seigneur fût béni à jamais.",
    citation6: "Il fit briller sa sagesse devant le roi, et il fit la louange du Seigneur dans le cantique.",
    citation7: "Il disposa les Lévites dans leurs ordres, et ils furent établis dans leurs fonctions.",
    citation8: "Et ils bénirent le nom du Seigneur, et ils firent entendre leur voix dans le sanctuaire, dès le matin, et ils lui offrirent des louanges.",
    citation9: "Et le prêtre sonnait de la trompette, et il fit entendre sa voix devant l'arche de l'alliance du Seigneur.",
    citation10: "Et il se leva dans son jugement, et il fit connaître sa justice, et il fit entendre sa voix devant l'autel du Seigneur.",
    commentary: "David comme roi selon le cœur de Dieu. Les œuvres de David : victoires sur les ennemis, alliance avec Hiram (1 Rois 5), préparation du Temple. Il fit briller sa sagesse - David comme sage (pas seulement guerrier). Les cantiques de David (psaumes) comme louange permanente. L'organisation des Lévites exprime le culte ordonné."
  },
  {
    reference: "Sirach 48:1-2",
    citation: "Alors se leva Élie, le prophète, comme un feu, et sa parole brûlait comme une torche.",
    citation2: "Il fit venir la famine sur eux, et par son zèle, il les diminua.",
    citation3: "Par la parole du Seigneur, il ferma le ciel, et il fit descendre le feu trois fois.",
    citation4: "Élie fut enlevé au ciel dans un tourbillon, et Élisée fut rempli de son esprit.",
    citation5: "Il fit des prodiges dans sa vie, et dans sa mort, il fut admirable.",
    commentary: "Élie comme feu et torche - image de la parole prophétique qui brûle et illumine. Les miracles d'Élie rappelés : famine (3 ans), feu du ciel (Mont Carmel), fermeture du ciel. L'enlèvement au ciel (2 Rois 2) exprime la faveur divine. Élisée comme héritier de l'esprit d'Élie."
  },
  {
    reference: "Sirach 48:10-11",
    citation: "Élisée fut rempli de son esprit, et il ne fut point troublé par aucun prince, et personne ne put le vaincre.",
    citation2: "Il fit des choses merveilleuses, et les morts se levèrent et entendirent sa voix.",
    citation3: "Dans sa vie, il ne fit rien qui fût injuste, et ses œuvres étaient puissantes.",
    citation4: "Son corps fut honoré après sa mort, et ses prophéties se confirmèrent.",
    citation5: "Il fit des prodiges de son vivant, et après sa mort, ses œuvres furent merveilleuses.",
    commentary: "Élisée comme successeur d'Élie. Aucun prince ne le troubla, et personne ne put le vaincre - la prophétie plus forte que le pouvoir politique. Les miracles : résurrections (le fils de la Sunamite, 2 Rois 4). Ses œuvres après sa mort (contact avec ses os, 2 Rois 13) montrent que la puissance de Dieu dépasse la mort du prophète."
  },
  {
    reference: "Sirach 49:8-9",
    citation: "Il fut trouvé fidèle dans les jours de sa jeunesse, et il marcha avec le Seigneur dans la simplicité de cœur.",
    citation2: "Il garda les commandements du Seigneur, et il ne fut point séparé de lui.",
    citation3: "C'est pourquoi le Seigneur le confirma par une alliance, et lui fit connaître sa gloire.",
    citation4: "Il lui fit entendre sa voix, et il le plaça dans le trésor de sa sagesse.",
    citation5: "Il lui fit connaître ses secrets, et il lui donna le commandement sur les nations.",
    citation6: "Et il lui fit connaître la loi de vie et de mort, et il lui révéla ses secrets.",
    citation7: "Et il lui fit connaître la loi de vie et de mort, et il lui révéla ses secrets."
  },
  {
    reference: "Sirach 50:1-2",
    citation: "Le grand prêtre Simon, fils d'Onias, qui, de son vivant, répara la maison du Seigneur, et dans ses jours, fortifia le temple.",
    citation2: "Par lui, le temple fut fondé, et dans les jours de Simon, le temple fut élevé.",
    citation3: "Il éleva la maison du sanctuaire, et il fit monter les murs du temple.",
    citation4: "De son temps, le réservoir fut creusé, une piscine grande comme la mer de bronze.",
    citation5: "Et il entoura le temple d'une muraille, comme la mer de bronze.",
    citation6: "Et il protégea le peuple des ennemis, et il le fortifia contre les assiégeants.",
    citation7: "Le temple fut orné de pierres précieuses, et le peuple chantait les louanges de Dieu.",
    citation8: "Simon offrait les sacrifices, et il faisait fumer l'encens, et il présentait l'offrande de la farine et de l'huile.",
    citation9: "Et il tenait l'encensoir entre ses mains, et il offrait l'encens sur l'autel.",
    citation10: "Et il tenait le vase de l'encens, et il le tenait entre ses mains."
  },
  {
    reference: "Sirach 50:17-18",
    citation: "Alors tout le peuple ensemble se hâta de tomber sur leurs faces, pour adorer le Seigneur leur Dieu, et pour prier devant le Très-Haut.",
    citation2: "Et les chantres le louaient, et ils faisaient entendre leur voix dans un cantique suave.",
    citation3: "Et le peuple suppliait le Seigneur Très-Haut, et ils priaient devant le Miséricordieux, jusqu'à ce que le culte du Seigneur fût accompli, et qu'ils eussent terminé son service.",
    citation4: "Alors il descendit, et il éleva ses mains sur toute l'assemblée des enfants d'Israël, pour donner la bénédiction du Seigneur de sa lèvres, et à se glorifier dans son nom.",
    citation5: "Et ils s'inclinaient pour adorer le Seigneur, et ils recevaient la bénédiction du Seigneur.",
    commentary: "La liturgie du Temple comme modèle de prière. Le peuple tombe sur leurs faces - posture d'adoration. Les chantres louent avec cantique suave. La bénédiction finale du grand prêtre exprime la médiation sacerdotale. Le peuple recevait la bénédiction - la grâce transmise par les mains du prêtre."
  },
  {
    reference: "Sirach 51:1-2",
    citation: "Je te louerai, Seigneur mon Dieu, et je te glorifierai, ô mon Dieu, et je chanterai ton nom, car tu m'as délivré de la mort.",
    citation2: "Et tu as délivré mon corps de la destruction, et tu as arraché mon âme de la fosse.",
    citation3: "Car tu as délivré mon âme de la mort, et tu as arraché mes pieds de la chute.",
    citation4: "Je marcherai devant le Seigneur dans le pays des vivants.",
    commentary: "Cantique de Thanksgiving de Sirach. La délivrance de la mort est le motif de louange. Corps de la destruction - la préservation du corps comme œuvre de Dieu. Puits de la fosse - l'enfer ou la mort. La promesse : je marcherai devant le Seigneur dans le pays des vivants - la vie comme présence à Dieu."
  },
  {
    reference: "Sirach 51:12-13",
    citation: "Je te louerai, Seigneur, car tu m'as exaucé, et tu es devenu mon salut.",
    citation2: "Tu m'as sauvé de la corruption, et je me suis confié en toi, et tu m'as délivré.",
    citation3: "C'est pourquoi je te louerai et je te glorifierai, et je chanterai ton nom, car tu m'as délivré de la mort.",
    citation4: "Car ma gratitude est pour le Seigneur, et elle n'est point cachée.",
    citation5: "Et ma louange n'est point cachée, car j'ai annoncé tes œuvres, et je n'ai point caché ta vérité.",
    commentary: "La reconnaissance publique comme témoignage. Ma gratitude n'est point cachée - la foi se dit, se proclame. Annoncer les œuvres de Dieu est partie de la louange. Je n'ai point caché ta vérité - la vérité de Dieu doit être manifestée, pas cachée."
  },
  {
    reference: "Sirach 51:26-27",
    citation: "Tournez-vous vers moi, vous qui êtes sans instruction, et demeurez dans ma maison d'instruction.",
    citation2: "Pourquoi êtes-vous pauvres, vous qui avez besoin de nourriture, et pourquoi êtes-vous dans le besoin, vous qui n'avez point de sagesse ?",
    citation3: "Car j'ouvrirai ma bouche, et je vous parlerai. Prêtez-moi l'oreille, et je vous enseignerai la sagesse.",
    commentary: "L'invitation finale à la maison d'instruction. Pourquoi êtes-vous pauvres... sans sagesse ? - la pauvreté spirituelle comme manque de sagesse. L'offre d'enseignement est ouverte à tous : je vous enseignerai la sagesse. La sagesse comme nourriture pour l'âme affamée."
  }
]

/* Note: Les outlines détaillés des 51 chapitres ne sont pas inclus ici pour des raisons de longueur.
 *
 * La structure du livre suit le plan énuméré dans le summary.
 */
