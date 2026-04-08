/*
 * Catéchisme de Saint Pie X
 * Auteur: Saint Pie X (Giuseppe Sarto, 1835-1914)
 * Source: Catéchisme de la doctrine chrétienne (1910)
 */

import type {
  CatechismMetadata,
  CatechismPart,
  CatechismArticle,
  CatechismQuestion,
  CatechismReference,
  CatechismAuthor,
} from "@/data/types/catechism";

const author: CatechismAuthor = {
  name: "Saint Pie X",
  dates: "1835-1914",
  role: "Pape de 1903 à 1914",
};

export const piusXCatechism: CatechismMetadata = {
  id: "pius-x",
  title: "Catéchisme de Saint Pie X",
  titleShort: "Catéchisme de Saint Pie X",
  author: author,
  date: "1910",
  doctrine: "Doctrine catholique traditionnelle",
  description:
    "Le catéchisme de Saint Pie X, publié en 1910, est un catéchisme simple et clair destiné à être facilement mémorisé par les enfants. Il est divisé en trois parties principales : ce que nous devons croire (le Symbole des Apôtres), ce que nous devons faire (les Commandements et la prière), et ce que nous devons recevoir (les Sacrements).",
  context: `Saint Pie X (Giuseppe Sarto), pape de 1903 à 1914, est connu pour son engagement contre le modernisme et sa promotion de la piété eucharistique. Il a publié ce catéchisme pour donner aux prêtres un texte uniforme pour l'enseignement de la doctrine chrétienne.

Ce catéchisme se distingue par:
- Sa clarté et sa simplicité
- Son organisation en questions-réponses faciles à mémoriser
- Son insistance sur la nécessité des sacrements
- Sa fidélité à la doctrine traditionnelle de l'Église

Il a été le catéchisme officiel de l'Église catholique jusqu'à la parution du Catéchisme de l'Église Catholique en 1992.`,
  parts: [
    {
      id: "symbole-apotres",
      part: 1,
      title: "Le Symbole des Apôtres",
      description: "Les douze articles du Symbole des Apôtres et ce que nous devons croire.",
      articles: [
        {
          id: "px-dieu",
          part: 1,
          article: 1,
          title: "Dieu et le Créateur",
          titleShort: "Le Créateur",
          content: `Dieu est le Créateur du ciel et de la terre, de toutes les choses visibles et invisibles.

Qui est Dieu ?
- Dieu est l'Être suprême, éternel, infini et tout-puissant
- Il a créé toutes choses de rien
- Il conserve et gouverne tout ce qu'il a créé
- Il est infiniment parfait dans tous ses attributs

Dieu est un seul Dieu en trois personnes:
- Le Père n'est pas créé ni engendré
- Le Fils est engendré par le Père (éternellement)
- Le Saint-Esprit procède du Père et du Fils (éternellement)

Les trois personnes sont toutes trois égales et toutes trois Dieu: c'est le mystère de la Sainte Trinité.`,
          questions: [
            {
              id: "px-q1",
              question: "Qui est Dieu ?",
              reponse:
                "Dieu est lÊtre suprême, éternel, infini et tout-puissant, créateur du ciel et de la terre. Il est un seul Dieu en trois personnes: le Père, le Fils et le Saint-Esprit.",
              category: "foi",
              part: 1,
              article: 1,
            },
            {
              id: "px-q2",
              question: "Pourquoi Dieu nous a-t-il créés ?",
              reponse:
                "Dieu nous a créés pour le connaître, l'aimer et le servir dans cette vie, et pour être heureux avec lui pour toujours dans la vie éternelle.",
              category: "foi",
              part: 1,
              article: 1,
            },
          ],
        },
        {
          id: "px-creation",
          part: 1,
          article: 2,
          title: "La Création et les Anges",
          titleShort: "Anges et Création",
          content: `Dieu a créé le monde en six jours et s'est reposé le septième jour.

Les créatures invisibles:
- Les anges sont des esprits créés par Dieu pour le servir et l'adorer
- Ils n'ont pas de corps mais ont une intelligence et une volonté supérieures à la nôtre
- Certains anges se sont rebellés contre Dieu et sont devenus démons
- Lucifer (Satan) était le plus beau des anges avant sa chute
- Les mauvais anges tentent les hommes de les entraîner au péché

Les créatures visibles:
- Le ciel, la terre, la mer et tout ce qu'ils contiennent
- Les végétaux (plantes, arbres)
- Les animaux
- L'homme, créé à l'image de Dieu

L'homme est le sommet de la création car il possède une âme raisonnable, capable de connaître et d'aimer Dieu.`,
          questions: [
            {
              id: "px-q3",
              question: "Qu'est-ce qu'un ange ?",
              reponse:
                "Un ange est un esprit créé par Dieu, sans corps, doué d'intelligence et de volonté. Les anges bons sont au ciel pour servir Dieu. Les mauvais anges (démons) sont en enfer pour s'être rebellés contre Dieu.",
              category: "foi",
              part: 1,
              article: 2,
            },
            {
              id: "px-q4",
              question: "Qu'est-ce que l'homme ?",
              reponse:
                "L'homme est une créature composée d'un corps et d'une âme raisonnable. Il a été créé à l'image de Dieu et destiné à le connaître, l'aimer et le servir.",
              category: "foi",
              part: 1,
              article: 2,
            },
          ],
        },
        {
          id: "px-peche-originel",
          part: 1,
          article: 3,
          title: "Le Péché Originel",
          titleShort: "La Chute",
          content: `Adam et Ève, nos premiers parents, ont été créés dans un état de justice originelle. Ils possédaient la grâce sanctifiante et des dons préternaturels (impassibilité, immortalité, science, intégrité).

Le péché d'Adam:
- Ils ont désobéi à Dieu en mangeant le fruit défendu
- Ils ont perdu la grâce sanctifiante et les dons préternaturels
- Ils sont devenus sujets à la mort et à la souffrance
- Toute leur descendance a été privée de la grâce originelle

Conséquences pour nous:
- Nous naissons avec la nature blessée par le péché
- Nous n'avons pas la grâce à la naissance
- Nous sommes sujets à la mort et à la souffrance
- Nous avons une inclination au péché (concupiscence)

Seule la Très Sainte Vierge Marie a été préservée du péché originel par un privilège spécial: c'est l'Immaculée Conception.`,
          questions: [
            {
              id: "px-q5",
              question: "Qu'est-ce que le péché originel ?",
              reponse:
                "Le péché originel est le péché d'Adam et Ève qui a perdu pour eux et pour tous leurs descendants la grâce sanctifiante et les dons préternaturels. Nous naissons tous avec ce péché, sauf la Vierge Marie.",
              category: "peche-originel",
              part: 1,
              article: 3,
            },
          ],
        },
        {
          id: "px-incarnation",
          part: 1,
          article: 4,
          title: "L'Incarnation du Fils de Dieu",
          titleShort: "Jésus-Christ",
          content: `Le Fils de Dieu, la deuxième personne de la Trinité, s'est fait homme pour nous sauver.

Jésus-Christ:
- Vrai Dieu: il est le Fils éternel du Père, égal au Père en tout
- Vrai homme: il a pris un corps et une âme de la Vierge Marie
- Conçu du Saint-Esprit sans père humain (né de la Vierge Marie)
- Né à Bethléem dans la pauvreté

Pourquoi l'Incarnation ?
- Pour nous racheter du péché originel
- Pour nous mériter la grâce et le salut
- Pour nous montrer le chemin du ciel
- Pour nous donner l'exemple d'une vie sainte

Jésus est venu sur terre:
- Il a prêché le royaume de Dieu
- Il a fait des miracles
- Il a souffert sa passion
- Il est mort sur la croix pour nous
- Il est ressuscité le troisième jour
- Il est monté au ciel et siège à la droite du Père`,
          questions: [
            {
              id: "px-q6",
              question: "Qui est Jésus-Christ ?",
              reponse:
                "Jésus-Christ est vrai Dieu et vrai homme. Vrai Dieu, il est le Fils éternel du Père. Vrai homme, il a pris corps et âme de la Vierge Marie. Il est mort sur la croix pour nous sauver.",
              category: "foi",
              part: 1,
              article: 4,
            },
          ],
        },
        {
          id: "px-resurrection",
          part: 1,
          article: 5,
          title: "La Résurrection et la Vie Éternelle",
          titleShort: "Vie Éternelle",
          content: `Jésus-Christ est ressuscité le troisième jour après sa mort. Il est apparu à ses apôtres et à plusieurs disciples pendant quarante jours, puis il est monté au ciel.

Le jugement particulier:
- À la mort de chaque homme, Dieu juge immédiatement son âme
- Si l'âme est en état de grâce, elle va au ciel ou au purgatoire
- Si l'âme est en état de péché mortel, elle va en enfer

La résurrection de la chair:
- À la fin du monde, tous les morts ressusciteront
- Chacun retrouvera son corps, uni à son âme
- Tous comparaîtront devant Jésus-Christ pour le jugement dernier

Le ciel:
- Les bienheureux voient Dieu face à face
- Ils l'aiment parfaitement
- Ils sont heureux pour toujours

L'enfer:
- Les damnés sont séparés de Dieu pour toujours
- Ils souffrent la peine du dam (perte de Dieu) et la peine du sens
- Cette punition est éternelle`,
          questions: [
            {
              id: "px-q7",
              question: "Qu'est-ce que la résurrection de la chair ?",
              reponse:
                "La résurrection de la chair est le miracle par lequel, à la fin du monde, tous les morts ressusciteront avec leur corps pour être jugés par Jésus-Christ.",
              category: "eschatologie",
              part: 1,
              article: 5,
            },
          ],
        },
      ],
    },
    {
      id: "commandements",
      part: 2,
      title: "Les Commandements de Dieu",
      description: "Les Dix Commandements et les commandements de l'Église.",
      articles: [
        {
          id: "px-preceptes-loi-naturelle",
          part: 2,
          article: 1,
          title: `L'Amour de Dieu et du Prochain`,
          titleShort: "Loi Naturelle",
          content: `Les deux premiers commandements résument toute la loi de Dieu:

1. Tu aimeras le Seigneur ton Dieu de tout ton cœur, de toute ton âme, de toute ta force et de toute ta pensée.
2. Tu aimeras ton prochain comme toi-même.

Aimer Dieu signifie:
- Le reconnaître comme le Créateur et Maître de toutes choses
- L'adorer, le prier, lui offrir des sacrifices
- Le servir en observant ses commandements
- Mettre notre confiance en lui

Aimer le prochain signifie:
- Lui vouloir du bien et faire du bien
- Lui porter secours dans ses besoins
- Lui pardonner les offenses
- Prier pour lui, même pour nos ennemis

L'ordre de la charité:
1. Dieu avant tout (en première position)
2. Le prochain après Dieu
3. Nous-mêmes enfin (sans nous oublier, mais après les autres)`,
          questions: [
            {
              id: "px-q8",
              question: "Quels sont les deux plus grands commandements ?",
              reponse:
                "Les deux plus grands commandements sont: aimer Dieu de tout ton cœur, et aimer ton prochain comme toi-même. Toute la loi et les prophètes dépendent de ces deux commandements.",
              category: "vertus",
              part: 2,
              article: 1,
            },
          ],
        },
        {
          id: "px-sacrement",
          part: 2,
          article: 2,
          title: "Le Troisième Commandement",
          titleShort: "Sanctifier le Dimanche",
          content: `Le troisième commandement est: "Tu sanctifieras le jour du Seigneur."

Ce commandement nous ordonne:
- D'assister à la messe le dimanche et les jours de fête
- De nous abstenir de travaux serviles ces jours-là

Travaux serviles:
- Ce sont les travaux qui ont pour but notre gain matériel
- L'agriculture, le commerce, l'industrie, le commerce, etc.

Ouvrages de charité:
- S'occuper des malades
- Instruire les enfants dans la religion
- Visiter les pauvres et les prisonniers
- Ces œuvres sont permises et même recommandées le dimanche

La messe:
- C'est le sacrifice de Jésus-Christ sur la croix renouvelé sur l'autel
- C'est le plus grand acte de culte que nous puissions offrir à Dieu
- Nous y recevons le Corps du Christ dans la communion`,
          questions: [
            {
              id: "px-q9",
              question: "Que nous ordonne le troisième commandement ?",
              reponse:
                "Le troisième commandement nous ordonne de sanctifier le jour du Seigneur en assistant à la messe le dimanche et les fêtes, et en nous abstenant de travaux serviles.",
              category: "vertus",
              part: 2,
              article: 2,
            },
          ],
        },
        {
          id: "px-pere-nom-mere",
          part: 2,
          article: 3,
          title: "Le Quatrième Commandement",
          titleShort: "Honneur aux Parents",
          content: `Le quatrième commandement est: "Tu honoreras ton père et ta mère."

Ce commandement nous ordonne:
- D'aimer nos père et mère
- De leur obéir en tout ce qu'ils nous commandent de raisonnable
- De les respecter et de les assister dans leurs besoins
- De prier pour eux

Devoirs des enfants envers leurs parents:
- L'écouter et leur obéir
- Les respecter même quand ils sont âgés
- Les aider dans la maladie
- Prier pour eux, surtout à leur mort

Devoirs des parents envers leurs enfants:
- Les pourvoir à l'éducation
- Leur enseigner la religion
- Leur donner le bon exemple
- Les corriger quand c'est nécessaire
- Les marier convenablement

Ce commandement promet:
- Longue vie et prospérité à ceux qui l'observent`,
          questions: [
            {
              id: "px-q10",
              question: "Que nous ordonne le quatrième commandement ?",
              reponse:
                "Le quatrième commandement nous ordonne d'honneur notre père et notre mère: les aimer, leur obéir, les respecter, les assister dans leurs besoins, et prier pour eux.",
              category: "vertus",
              part: 2,
              article: 3,
            },
          ],
        },
        {
          id: "px-peche-mortel",
          part: 2,
          article: 4,
          title: "Le Péché Mortel",
          titleShort: "Mortel et Véniel",
          content: `Il y a deux sortes de péchés: le péché mortel et le péché véniel.

Le péché mortel:
- Est une désobéissance grave à la loi de Dieu
- Commis en pleine connaissance (on sait que c'est grave)
- Commis de plein gré (on choisit librement)
- Privation de la grâce sanctifiante
- Mérite l'enfer s'il n'est pas pardonné

Le péché véniel:
- Est une désobéissance légère à la loi de Dieu
- Ou une désobéissance grave sans pleine connaissance
- Ou une désobéissance grave sans plein consentement
- Affaiblit la charité mais ne la détruit pas
- Ne mérite pas l'enfer

Pour être pardonné:
- Le péché mortel doit être confessé dans le sacrement de pénitence
- Le péché véniel peut être pardonné par la prière, les œuvres bonnes, l'aumône`,
          questions: [
            {
              id: "px-q11",
              question: "Qu'est-ce qu'un péché mortel ?",
              reponse:
                "Un péché mortel est une désobéissance grave à la loi de Dieu, faite en pleine connaissance et de plein gré. Il nous prive de la grâce sanctifiante et nous mérite l'enfer si nous ne nous repentons pas.",
              category: "peche-mortel",
              part: 2,
              article: 4,
            },
          ],
        },
      ],
    },
    {
      id: "grace",
      part: 3,
      title: "La Grâce et les Sacrements",
      description: "La grâce sanctifiante et les sacrements qui nous la donnent.",
      articles: [
        {
          id: "px-grace-sanctifiante",
          part: 3,
          article: 1,
          title: "La Grâce Sanctifiante",
          titleShort: "La Grâce",
          content: `La grâce est un don surnaturel que Dieu nous fait gratuitement.

Grâce actuelle:
- Nous aide à faire une action bonne
- Ne nous rend pas saints
- Nous est donnée quand nous prions ou faisons une bonne œuvre

Grâce sanctifiante:
- Nous rend saints et justes aux yeux de Dieu
- Fait de nous des enfants de Dieu et héritiers du ciel
- Nous est donnée principalement par les sacrements
- Nous pouvons la perdre par le péché mortel
- Nous pouvons la recouvrer par la confession

Sans la grâce:
- Nous ne pouvons pas faire aucune œuvre bonne méritoire pour le ciel
- Nous ne pouvons pas entrer au ciel
- La foi sans la grâce est morte

La grâce est absolument nécessaire pour le salut.`,
          questions: [
            {
              id: "px-q12",
              question: "Qu'est-ce que la grâce sanctifiante ?",
              reponse:
                "La grâce sanctifiante est le don que Dieu nous fait gratuitement, qui nous rend saints et justes, enfants de Dieu et héritiers du ciel. Nous la recevons principalement par les sacrements.",
              category: "grace",
              part: 3,
              article: 1,
            },
          ],
        },
        {
          id: "px-bapteme",
          part: 3,
          article: 2,
          title: "Le Baptême",
          titleShort: "Porte des Sacrements",
          content: `Le baptême est le premier et le plus nécessaire des sacrements.

Effets du baptême:
- Efface le péché originel et tous les péchés actuels
- Donne la grâce sanctifiante
- Imprime le caractère chrétien (indélébile)
- Nous fait enfants de Dieu et membres de l'Église
- Nous ouvre la porte du ciel

Nécessité:
- Nécessaire de moyen pour le salut (sans baptême on ne peut être sauvé)
- Nécessaire de précepte si on peut être baptisé
- Les adultes doivent avoir la foi et l'intention de recevoir le baptême
- Les enfants sont baptisés dès que possible (dans les premières semaines)

Matière: eau naturelle
Forme: "Je te baptise au nom du Père, et du Fils, et du Saint-Esprit"
Ministre: prêtre (normalement), ou n'importe qui en cas de nécessité

Le baptême ne se réitère jamais.`,
          questions: [
            {
              id: "px-q13",
              question: "Qu'est-ce que le baptême ?",
              reponse:
                "Le baptême est le sacrement qui efface le péché originel, nous donne la grâce sanctifiante, nous fait enfants de Dieu et membres de l'Église. Il est nécessaire pour le salut.",
              category: "sacrement-bapteme",
              part: 3,
              article: 2,
            },
          ],
        },
        {
          id: "px-eucharistie",
          part: 3,
          article: 3,
          title: "L'Eucharistie",
          titleShort: "Saint Sacrement",
          content: `L'eucharistie est le sacrement du corps et du sang de Jésus-Christ sous les espèces du pain et du vin.

Présence réelle:
- Jésus-Christ est réellement présent: corps, âme, sang et divinité
- Pas seulement symboliquement ou figurément
- Présent dans chaque parcelle du pain consacré
- Présent tant que les espèces subsistent

Transsubstantiation:
- Changement miraculeux de toute la substance du pain en la substance du Corps du Christ
- Et de toute la substance du vin en la substance de son Sang
- Les espèces du pain et du vin demeurent (apparence, goût, etc.)

Pour recevoir la communion:
- Être à jeun (une heure avant)
- Être en état de grâce (pas de péché mortel non confessé)
- Avoir la foi en la présence réelle
- Avoir une dévotion et respect

Fréquence: les fidèles sont encouragés à communier souvent, au moins chaque dimanche.`,
          questions: [
            {
              id: "px-q14",
              question: "Qu'est-ce que l'Eucharistie ?",
              reponse:
                "L'Eucharistie est le sacrement du corps et du sang de Jésus-Christ sous les espèces du pain et du vin. Jésus y est réellement présent: corps, âme, sang et divinité.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 3,
            },
          ],
        },
        {
          id: "px-penitence",
          part: 3,
          article: 4,
          title: "Le Sacrement de Pénitence",
          titleShort: "La Confession",
          content: `Le sacrement de pénitence (confession) a été institué par Jésus-Christ pour remettre les péchés commis après le baptême.

Éléments nécessaires:
1. Examen de conscience: rechercher tous les péchés
2. Contrition: douleur d'avoir offensé Dieu
3. Confession: aveu des péchés au prêtre
4. Absolution: pardon donné par le prêtre au nom du Christ
5. Satisfaction: accomplir les pénitences données

Conditions pour une bonne confession:
- Confesser tous les péchés mortels en espèce et en nombre
- Avoir la résolution de ne plus pécher
- Accuser sincèrement sans rien cacher
- Faire les pénitences imposées

Fréquence: au moins une fois par an (précepte pascal), mais recommandé plus souvent (mois, trimestre).

Indulgences: remise de la peine temporelle due aux péchés pardonnés.`,
          questions: [
            {
              id: "px-q15",
              question: "Qu'est-ce que le sacrement de pénitence ?",
              reponse:
                "Le sacrement de pénitence a été institué par Jésus-Christ pour remettre les péchés commis après le baptême. Il faut: examiner sa conscience, être contrit, se confesser au prêtre, recevoir l'absolution, et accomplir la pénitence.",
              category: "sacrement-penitence",
              part: 3,
              article: 4,
            },
          ],
        },
        {
          id: "px-extreme-onction",
          part: 3,
          article: 5,
          title: `L'Onction des Malades`,
          titleShort: "Pour les Malades",
          content: `L'onction des malades (appelée autrefois extrême-onction) est le sacrement donné à ceux qui sont en danger de mort.

Effets:
- Fortifie l'âme du malade
- Lui donne la grâce de bien supporter la souffrance
- Lui aide à se repentir de ses péchés s'il ne l'a pas fait
- Parfois, si Dieu le veut, apporte la guérison du corps

Matière: huile bénite par l'évêque
Forme: prière prescrite par le prêtre
Ministre: prêtre
Sujet: baptisé en danger de mort (malade, âgé, opéré)

Il ne faut pas attendre le dernier moment pour recevoir ce sacrement. Il est bon de l'appeler dès que le danger apparaît.`,
          questions: [
            {
              id: "px-q16",
              question: "Qu'est-ce que l'onction des malades ?",
              reponse:
                "L'onction des malades est le sacrement donné à ceux qui sont en danger de mort. Il fortifie l'âme, aide à supporter la souffrance, et donne la grâce de se bien préparer pour la rencontre avec Dieu.",
              category: "sacrement-extreme-onction",
              part: 3,
              article: 5,
            },
          ],
        },
      ],
    },
    {
      id: "prière",
      part: 4,
      title: "La Prière",
      description: "Les prières essentielles que tout chrétien doit connaître.",
      articles: [
        {
          id: "px-notre-pere",
          part: 4,
          article: 1,
          title: "Le Notre Père",
          titleShort: "Prière du Seigneur",
          content: `Le Notre Père est la prière enseignée par Jésus-Christ lui-même à ses disciples. C'est la plus parfaite de toutes les prières.

Notre Père qui es aux cieux,
- que ton nom soit sanctifié,
- que ton règne vienne,
- que ta volonté soit faite sur la terre comme au ciel.
- Donne-nous aujourd'hui notre pain de ce jour.
- Pardonne-nous nos offenses,
- comme nous pardonnons à ceux qui nous ont offensés.
- Ne nous soumets pas à la tentation,
- mais délivre-nous du mal.

Cette prière contient:
- Les sept demandes de la prière chrétienne
- Tout ce que nous devons demander à Dieu
- L'exemple parfait de prière

Nous devons la prier:
- Avec attention et dévotion
- lentement, en méditant chaque parole
- Avec confiance en la bonté de notre Père du ciel`,
          questions: [
            {
              id: "px-q17",
              question: "Qu'est-ce que le Notre Père ?",
              reponse:
                "Le Notre Père est la prière enseignée par Jésus-Christ lui-même. Elle contient toutes les demandes nécessaires à notre vie spirituelle et nous montre comment prier avec confiance et dévotion.",
              category: "priere",
              part: 4,
              article: 1,
            },
          ],
        },
        {
          id: "px-je-vous-salue",
          part: 4,
          article: 2,
          title: "Le Je Vous Salue Marie",
          titleShort: "Prière à Marie",
          content: `Le Je vous salue Marie est la prière la plus excellente après le Notre Père.

Je vous salue, Marie,
- pleine de grâce,
- le Seigneur est avec vous,
- vous êtes bénie entre toutes les femmes,
- et Jésus, le fruit de vos entrailles, est béni.

Sainte Marie, Mère de Dieu,
- priez pour nous pauvres pécheurs,
- maintenant et à l'heure de notre mort.

Cette prière:
- Honore la Mère de Dieu
- Nous rappelle les mystères de l'Incarnation et de la Rédemption
- Nous obtient la protection de Marie
- Elle a été composée en partie par les paroles de l'archange Gabriel et d'Élisabeth

Il est recommandé de la réciter chaque jour, surtout le matin et le soir.`,
          questions: [
            {
              id: "px-q18",
              question: "Qu'est-ce que le Je vous salue Marie ?",
              reponse:
                "Le Je vous salue Marie est la prière à la Très Sainte Vierge Marie. Elle honore la Mère de Dieu, nous rappelle les mystères du salut, et nous obtient sa protection maternelle.",
              category: "priere",
              part: 4,
              article: 2,
            },
          ],
        },
        {
          id: "px-symbole-apotres",
          part: 4,
          article: 3,
          title: "Le Symbole des Apôtres",
          titleShort: "Credo",
          content: `Le Symbole des Apôtres est la profession de foi des apôtres, transmise par l'Église depuis le commencement.

Je crois en Dieu,
- le Père tout-puissant,
- créateur du ciel et de la terre.
- Et en Jésus-Christ, son Fils unique, notre Seigneur,
- qui a été conçu du Saint-Esprit, est né de la Vierge Marie,
- a souffert sous Ponce Pilate, a été crucifié, est mort et a été enseveli,
- est descendu aux enfers, est ressuscité le troisième jour,
- est monté aux cieux, est assis à la droite de Dieu le Père tout-puissant,
- d'où il viendra juger les vivants et les morts.
- Je crois en le Saint-Esprit,
- à la sainte Église catholique,
- à la communion des saints,
- à la rémission des péchés,
- à la résurrection de la chair,
- à la vie éternelle.

Ce symbole contient les douze articles de foi que tout chrétien doit connaître et croire.`,
          questions: [
            {
              id: "px-q19",
              question: "Qu'est-ce que le Symbole des Apôtres ?",
              reponse:
                "Le Symbole des Apôtres est la profession de foi des apôtres, contenant les douze articles de foi que tout chrétien doit connaître et croire: le Père, le Fils, le Saint-Esprit, l'Église, la résurrection, la vie éternelle.",
              category: "foi",
              part: 4,
              article: 3,
            },
          ],
        },
      ],
    },
  ],
  glossary: {
    "Sainte Trinité": "Un seul Dieu en trois personnes: Père, Fils et Saint-Esprit",
    "Péché originel": "Péché d'Adam qui perd la grâce pour tous ses descendants",
    "Grâce sanctifiante": "Don qui nous rend saints et justes aux yeux de Dieu",
    Transsubstantiation: "Changement du pain et du vin en Corps et Sang du Christ",
    "Péché mortel": "Désobéissance grave à Dieu en pleine connaissance et de plein gré",
    "Péché véniel": "Désobéissance légère ou grave sans pleine connaissance ou consentement",
    Eucharistie: "Sacrement du Corps et du Sang de Jésus-Christ",
    Infaillibilité:
      "Le pape ne peut errer en matière de foi et de mœurs quand il enseigne à toute l'Église",
  },
  references: [
    {
      type: "document",
      source: "Saint Pie X",
      citation: "Catéchisme de la doctrine chrétienne (1910)",
      url: "https://www.vatican.va/content/pius-x-fr",
    },
    {
      type: "theologique",
      source: "Concile du Vatican I",
      citation: "Dei Filius - Constitution sur la foi catholique (1870)",
      url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_council_18700424_constitutio-dei-filius_fr.html",
    },
  ],
};
