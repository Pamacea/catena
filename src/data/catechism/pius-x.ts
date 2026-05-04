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
    "Le catéchisme de Saint Pie X, publié en 1910, est un catéchisme simple et clair destiné à être facilement mémorisé par les enfants. Il est divisé en quatre parties : ce que nous devons croire (le Symbole des Apôtres), ce que nous devons faire (les Commandements), ce que nous devons recevoir (les Sacrements), et la Prière.",
  context: `Saint Pie X (Giuseppe Sarto), pape de 1903 à 1914, est connu pour son engagement contre le modernisme et sa promotion de la piété eucharistique. Il a publié ce catéchisme pour donner aux prêtres un texte uniforme pour l'enseignement de la doctrine chrétienne.

Ce catéchisme se distingue par:
- Sa clarté et sa simplicité
- Son organisation en questions-réponses faciles à mémoriser
- Son insistance sur la nécessité des sacrements
- Sa fidélité à la doctrine traditionnelle de l'Église

Il a été le catéchisme officiel de l'Église catholique jusqu'à la parution du Catéchisme de l'Église Catholique en 1992.`,
  parts: [
    // ═══════════════════════════════════════════════
    // PARTIE I — LE SYMBOLE DES APÔTRES
    // ═══════════════════════════════════════════════
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
                "Dieu est l'Être suprême, éternel, infini et tout-puissant, créateur du ciel et de la terre. Il est un seul Dieu en trois personnes: le Père, le Fils et le Saint-Esprit.",
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
            {
              id: "px-q2b",
              question: "Combien y a-t-il de personnes en Dieu ?",
              reponse:
                "Il y a trois personnes en Dieu: le Père, le Fils et le Saint-Esprit. Ces trois personnes ne font qu'un seul Dieu, parce qu'elles n'ont qu'une seule et même nature divine.",
              category: "foi",
              part: 1,
              article: 1,
            },
            {
              id: "px-q2c",
              question: "Quelles sont les œuvres de Dieu ?",
              reponse:
                "Les œuvres de Dieu sont: la création, la conservation et le gouvernement de toutes choses.",
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
            {
              id: "px-q4b",
              question: "Comment Dieu a-t-il créé le monde ?",
              reponse:
                "Dieu a créé le monde de rien, par sa toute-puissance, en six jours. Il a créé les anges, le ciel, la terre, les plantes, les animaux, et enfin l'homme.",
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
            {
              id: "px-q5b",
              question: "Quels sont les effets du péché originel ?",
              reponse:
                "Les effets du péché originel sont: la privation de la grâce, l'obscurcissement de l'intelligence, la faiblesse de la volonté, la concupiscence, la souffrance et la mort.",
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

La Passion et la Mort:
- Jésus a souffert sa Passion pendant toute sa vie, surtout dans les dernières heures
- Il a été trahi par Judas, renié par Pierre, jugé par Pilate
- Il a été flagellé, couronné d'épines, crucifié entre deux larrons
- Il est mort sur la croix le vendredi saint
- Son sacrifice a racheté tous les péchés du monde

La Résurrection:
- Jésus est ressuscité le troisième jour par sa propre puissance
- Il est apparu à ses apôtres et à plusieurs disciples pendant quarante jours
- Il est monté au ciel et siège à la droite du Père
- Il reviendra à la fin des temps pour juger les vivants et les morts`,
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
            {
              id: "px-q6b",
              question: "Pourquoi le Fils de Dieu s'est-il fait homme ?",
              reponse:
                "Le Fils de Dieu s'est fait homme pour nous racheter du péché originel, nous mériter la grâce et le salut, nous montrer le chemin du ciel, et nous donner l'exemple d'une vie sainte.",
              category: "foi",
              part: 1,
              article: 4,
            },
            {
              id: "px-q6c",
              question: "Comment Jésus-Christ est-il né ?",
              reponse:
                "Jésus-Christ a été conçu du Saint-Esprit et est né de la Vierge Marie à Bethléem. Il n'a pas de père humain; Marie est restée vierge avant, pendant et après l'enfantement.",
              category: "foi",
              part: 1,
              article: 4,
            },
          ],
        },
        {
          id: "px-esprit-saint",
          part: 1,
          article: 5,
          title: "Le Saint-Esprit",
          titleShort: "Le Saint-Esprit",
          content: `Le Saint-Esprit est la troisième personne de la Trinité. Il procède du Père et du Fils.

Le Saint-Esprit:
- Est Dieu, égal au Père et au Fils
- Procède éternellement du Père et du Fils (Filioque)
- Est l'Esprit d'amour et de sanctification
- Habite dans les âmes en état de grâce
- Éclaire, fortifie et dirige l'Église

Les dons du Saint-Esprit:
1. Sagesse: goûter les choses de Dieu
2. Intelligence: comprendre les vérités de la foi
3. Conseil: discerner la bonne voie dans les situations difficiles
4. Force: résister aux tentations et souffrir pour Dieu
5. Science: juger droitement des créatures
6. Piété: aimer Dieu et le servir avec dévotion
7. Crainte de Dieu: craindre d'offenser Dieu

Les fruits du Saint-Esprit:
Charité, joie, paix, patience, longanimité, bonté, mansuétude, foi, modestie, continence, chasteté.

Les Saintes Personnes agissent toujours ensemble, mais on attribue au Père la création, au Fils la rédemption, et au Saint-Esprit la sanctification.`,
          questions: [
            {
              id: "px-q6d",
              question: "Qui est le Saint-Esprit ?",
              reponse:
                "Le Saint-Esprit est la troisième personne de la Sainte Trinité. Il procède du Père et du Fils. Il est l'Esprit d'amour qui sanctifie nos âmes et dirige l'Église.",
              category: "foi",
              part: 1,
              article: 5,
            },
            {
              id: "px-q6e",
              question: "Quels sont les sept dons du Saint-Esprit ?",
              reponse:
                "Les sept dons du Saint-Esprit sont: sagesse, intelligence, conseil, force, science, piété et crainte de Dieu. Ces dons perfectionnent en nous les vertus et nous disposent à suivre les inspirations divines.",
              category: "foi",
              part: 1,
              article: 5,
            },
          ],
        },
        {
          id: "px-eglise",
          part: 1,
          article: 6,
          title: "La Sainte Église Catholique",
          titleShort: "L'Église",
          content: `L'Église catholique est la société fondée par Jésus-Christ pour continuer son œuvre de salut jusqu'à la fin des temps.

Fondation:
- Jésus-Christ a fondé l'Église sur l'apôtre Pierre
- Il lui a dit: « Tu es Pierre, et sur cette pierre je bâtirai mon Église » (Mt 16, 18)
- Il lui a donné les clefs du Royaume des cieux
- Pierre est le premier pape

Les quatre notes de l'Église:
1. Une: une seule foi, un seul baptême, un seul chef visible (le pape)
2. Sainte: fondée par Dieu, enseigne la sainteté, produit des saints
3. Catholique: universelle, pour tous les hommes, en tous les temps
4. Apostolique: fondée sur les apôtres, transmise par succession apostolique

La hiérarchie:
- Le Pape: vicaire de Jésus-Christ, chef visible de l'Église
- Les évêques: successeurs des apôtres
- Les prêtres: collaborateurs des évêques
- Les diacres: assistants des prêtres

L'Église enseigne, sanctifie et gouverne les fidèles.

Les deux puissances de l'Église:
- Puissance spirituelle: enseigner, sanctifier, gouverner les âmes
- Puissance temporelle (indirecte): juger de la licéité morale des actes civils

Le devoir de tout catholique:
- Appartenir à l'Église catholique
- Obéir au pape et aux évêques en communion avec lui
- Contribuer à l'extension du Royaume de Dieu`,
          questions: [
            {
              id: "px-q6f",
              question: "Qu'est-ce que l'Église ?",
              reponse:
                "L'Église est la société des fidèles fondée par Jésus-Christ, répandue sur toute la terre, sous l'autorité d'un chef visible, le pape, pour enseigner, sanctifier et gouverner les âmes en vue du salut éternel.",
              category: "foi",
              part: 1,
              article: 6,
            },
            {
              id: "px-q6g",
              question: "Quelles sont les quatre notes de l'Église ?",
              reponse:
                "Les quatre notes de l'Église sont: elle est une, sainte, catholique et apostolique.",
              category: "foi",
              part: 1,
              article: 6,
            },
          ],
        },
        {
          id: "px-communion-saints",
          part: 1,
          article: 7,
          title: "La Communion des Saints",
          titleShort: "Communion des Saints",
          content: `La communion des saints est la communication des biens spirituels entre les membres de l'Église.

Les trois parties de l'Église:
1. L'Église triomphante: les saints au ciel, qui voient Dieu
2. L'Église souffrante: les âmes du purgatoire, qui se purifient
3. L'Église militante: les fidèles sur la terre, qui combattent le péché

La communication des biens:
- Les prières et les mérites des vivants peuvent aider les morts (purgatoire)
- Les prières des saints au ciel aident les vivants (intercession)
- Les mérites de Jésus-Christ et de la Vierge Marie sont le trésor de l'Église
- Les indulgences tirent de ce trésor pour remettre les peines dues aux péchés

La communion des saints nous enseigne que:
- Nous ne sommes pas seuls dans notre vie spirituelle
- Nous pouvons prier les uns pour les autres
- Nous devons prier pour les défunts
- Les saints peuvent intercéder pour nous auprès de Dieu`,
          questions: [
            {
              id: "px-q6h",
              question: "Qu'est-ce que la communion des saints ?",
              reponse:
                "La communion des saints est la communication des biens spirituels entre les membres de l'Église triomphante (le ciel), souffrante (le purgatoire) et militante (la terre). Les prières et mérites des uns profitent aux autres.",
              category: "foi",
              part: 1,
              article: 7,
            },
          ],
        },
        {
          id: "px-purgatoire",
          part: 1,
          article: 8,
          title: "Le Purgatoire",
          titleShort: "Le Purgatoire",
          content: `Le purgatoire est le lieu où les âmes des justes achèvent de se purifier avant d'entrer au ciel.

Qui va au purgatoire?
- Les âmes qui meurent en état de grâce
- Mais qui ont encore des péchés véniels non expiés
- Ou qui n'ont pas accompli la pénitence due à leurs péchés pardonnés

Les peines du purgatoire:
- La peine du dam: retard de la vision béatifique (ne pas encore voir Dieu)
- La peine du sens: souffrance réelle, mais temporaire
- La durée varie selon les dettes à expier

Nous pouvons aider les âmes du purgatoire par:
- La sainte messe (le moyen le plus efficace)
- La prière (le chapelet, l'aumône)
- Les indulgences
- Le jeûne et les mortifications
- Les bonnes œuvres offertes pour les défunts

Le culte des morts est un devoir de charité. Le jour des Morts (2 novembre) leur est spécialement consacré.`,
          questions: [
            {
              id: "px-q6i",
              question: "Qu'est-ce que le purgatoire ?",
              reponse:
                "Le purgatoire est le lieu où les âmes des justes qui meurent en état de grâce, mais avec des péchés non entièrement expiés, se purifient avant d'entrer au ciel.",
              category: "purgatoire",
              part: 1,
              article: 8,
            },
          ],
        },
        {
          id: "px-resurrection",
          part: 1,
          article: 9,
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
- Les bienheureux voient Dieu face à face (vision béatifique)
- Ils l'aiment parfaitement
- Ils sont heureux pour toujours
- Ils reçoivent la récompense éternelle

L'enfer:
- Les damnés sont séparés de Dieu pour toujours
- Ils souffrent la peine du dam (perte de Dieu) et la peine du sens
- Cette punition est éternelle
- Le démon les tourmente

Le paradis est la fin pour laquelle nous avons été créés. Toute notre vie doit tendre vers cette fin.`,
          questions: [
            {
              id: "px-q7",
              question: "Qu'est-ce que la résurrection de la chair ?",
              reponse:
                "La résurrection de la chair est le miracle par lequel, à la fin du monde, tous les morts ressusciteront avec leur corps pour être jugés par Jésus-Christ.",
              category: "eschatologie",
              part: 1,
              article: 9,
            },
            {
              id: "px-q7b",
              question: "Qu'est-ce que le jugement particulier ?",
              reponse:
                "Le jugement particulier est celui que Dieu fait de chaque âme au moment de la mort. Selon l'état de l'âme, elle va au ciel, au purgatoire ou en enfer.",
              category: "eschatologie",
              part: 1,
              article: 9,
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════
    // PARTIE II — LES COMMANDEMENTS
    // ═══════════════════════════════════════════════
    {
      id: "commandements",
      part: 2,
      title: "Les Commandements de Dieu et de l'Église",
      description: "Les Dix Commandements, les commandements de l'Église, les péchés et les vertus.",
      articles: [
        {
          id: "px-preceptes-loi-naturelle",
          part: 2,
          article: 1,
          title: "L'Amour de Dieu et du Prochain",
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
3. Nous-mêmes enfin (sans nous oublier, mais après les autres)

La charité est la plus grande des vertus théologales. Sans la charité, on ne peut plaire à Dieu.`,
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
- L'agriculture, le commerce, l'industrie, etc.

Ouvrages de charité:
- S'occuper des malades
- Instruire les enfants dans la religion
- Visiter les pauvres et les prisonniers
- Ces œuvres sont permises et même recommandées le dimanche

La messe:
- C'est le sacrifice de Jésus-Christ sur la croix renouvelé sur l'autel
- C'est le plus grand acte de culte que nous puissions offrir à Dieu
- Nous y recevons le Corps du Christ dans la communion

Les fêtes d'obligation:
- Noël, l'Ascension, l'Assomption, la Toussaint, l'Immaculée Conception, le Saint-Sacrement`,
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
- Les écouter et leur obéir
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
                "Le quatrième commandement nous ordonne d'honorer notre père et notre mère: les aimer, leur obéir, les respecter, les assister dans leurs besoins, et prier pour eux.",
              category: "vertus",
              part: 2,
              article: 3,
            },
          ],
        },
        {
          id: "px-5e-commandement",
          part: 2,
          article: 4,
          title: "Le Cinquième Commandement",
          titleShort: "Ne pas tuer",
          content: `Le cinquième commandement est: "Tu ne tueras pas."

Ce commandement défend:
- De tuer soi-même ou par autrui
- De se suicider
- De blesser grièvement quelqu'un
- De haïr son prochain
- De lui vouloir du mal
- De donner le scandale (causer le péché chez autrui)
- L'ivrognerie et l'usage des drogues

Ce commandement ordonne:
- De respecter la vie humaine, depuis la conception jusqu'à la mort
- D'aimer son prochain même ennemi
- De pratiquer la miséricorde envers les malades et les mourants
- De secourir les affamés et les malheureux

L'avortement est un crime contre la vie humaine. L'euthanasie est également interdite.

La guerre juste est permise sous certaines conditions strictes (légitime défense, autorité légitime, juste cause, dernière extrémité).`,
          questions: [
            {
              id: "px-q11",
              question: "Que défend le cinquième commandement ?",
              reponse:
                "Le cinquième commandement défend de tuer, de blesser, de haïr son prochain, de lui vouloir du mal, et de donner le scandale. Il ordonne de respecter la vie humaine et d'aimer même nos ennemis.",
              category: "vertus",
              part: 2,
              article: 4,
            },
          ],
        },
        {
          id: "px-6e-9e-commandement",
          part: 2,
          article: 5,
          title: "Le Sixième et le Neuvième Commandement",
          titleShort: "Pureté",
          content: `Le sixième commandement est: "Tu ne commettras point d'adultère."
Le neuvième commandement est: "Tu ne convoiteras point la femme de ton prochain."

Ces deux commandements défendent:
- Tout acte impur, soit intérieur soit extérieur
- Toute pensée et tout désir impur
- Toute parole et tout regard impudiques
- La lecture et la vision de choses impures
- Les fréquentations dangereuses

Le sixième commandement exige la chasteté, c'est-à-dire la vertu qui modère les appétits de la chair selon la raison et la foi.

La chasteté varie selon les états de vie:
- Célibataires et jeunes: chasteté dans la continence
- Mariés: chasteté dans le mariage (fidélité conjugale)
- Consacrés: chasteté dans la virginité ou le célibat pour le Royaume des cieux

Pour conserver la chasteté:
- Fuir les occasions prochaines de péché
- Prier et recevoir les sacrements
- Être modeste dans les vêtements et les regards
- Garder les sens, surtout la vue et l'ouïe
- Dévotion à la Très Sainte Vierge Marie`,
          questions: [
            {
              id: "px-q12",
              question: "Que défendent le sixième et le neuvième commandement ?",
              reponse:
                "Le sixième et le neuvième commandement défendent les pensées, désirs, paroles et actes contraires à la chasteté. Ils nous ordonnent la pureté du cœur et du corps.",
              category: "vertus",
              part: 2,
              article: 5,
            },
          ],
        },
        {
          id: "px-7e-10e-commandement",
          part: 2,
          article: 6,
          title: "Le Septième et le Dixième Commandement",
          titleShort: "Ne pas voler",
          content: `Le septième commandement est: "Tu ne déroberas point."
Le dixième commandement est: "Tu ne convoiteras point le bien d'autrui."

Ces deux commandements défendent:
- Le vol: prendre le bien d'autrui sans permission
- La rapine: prendre par violence
- La fraude: tromper dans les contrats, les affaires
- L'usure: prêter à intérêt excessif
- Le refus de rendre ce qui est dû
- Le désir de posséder injustement le bien d'autrui

Ces commandements ordonnent:
- De respecter la propriété d'autrui
- De restituer les biens pris injustement
- De payer les dettes
- De donner aux pauvres par charité
- De travailler honnêtement pour gagner sa vie

La restitution est obligatoire: si on a pris le bien d'autrui, on doit le rendre ou le rembourser, autant qu'on le peut.`,
          questions: [
            {
              id: "px-q13",
              question: "Que défendent le septième et le dixième commandement ?",
              reponse:
                "Le septième et le dixième commandement défendent de prendre ou de convoiter le bien d'autrui. Ils nous ordonnent de respecter la propriété d'autrui et de restituer ce qui a été pris injustement.",
              category: "vertus",
              part: 2,
              article: 6,
            },
          ],
        },
        {
          id: "px-8e-commandement",
          part: 2,
          article: 7,
          title: "Le Huitième Commandement",
          titleShort: "Ne pas mentir",
          content: `Le huitième commandement est: "Tu ne porteras point de faux témoignage contre ton prochain."

Ce commandement défend:
- Le mensonge: dire ce qu'on sait être faux
- Le faux témoignage: mentir sous serment ou devant la justice
- La médisance: révéler les défauts d'autrui sans nécessité
- La calomnie: accuser faussement quelqu'un
- Le jugement téméraire: juger sans preuve
- La dérision: se moquer du prochain
- La flatterie: louer quelqu'un pour l'induire en erreur

Ce commandement ordonne:
- De dire toujours la vérité
- De défendre la réputation du prochain
- De corriger ceux qui mentent ou médisent
- De garder les secrets légitimes
- D'être sincère dans toutes ses paroles

Le secret de la confession est absolu: le prêtre ne peut jamais révéler ce qu'il a entendu en confession, même sous peine de mort.`,
          questions: [
            {
              id: "px-q14",
              question: "Que défend le huitième commandement ?",
              reponse:
                "Le huitième commandement défend le mensonge, le faux témoignage, la médisance, la calomnie, le jugement téméraire et la moquerie. Il nous ordonne de dire la vérité et de défendre la réputation d'autrui.",
              category: "vertus",
              part: 2,
              article: 7,
            },
          ],
        },
        {
          id: "px-commandements-eglise",
          part: 2,
          article: 8,
          title: "Les Commandements de l'Église",
          titleShort: "Loi de l'Église",
          content: `L'Église a établi six commandements pour aider les fidèles à observer les commandements de Dieu et à vivre chrétiennement.

Les six commandements de l'Église:
1. Assister à la messe entière le dimanche et les fêtes d'obligation
2. Confesser ses péchés au moins une fois par an
3. Communier au moins à Pâques
4. Jeûner et s'abstenir de viande aux jours ordonnés
5. Ne pas célébrer de noces en temps défendu
6. Ne pas contribuer à l'entretien d'une secte ou d'une école mauvaise

Le jeûne:
- Ne faire qu'un seul repas par jour (jour de jeûne)
- Les jours de jeûne: Carême, Quatre-Temps, vigiles
- Exempts: malades, femmes enceintes, personnes âgées, enfants

L'abstinence:
- S'abstenir de viande et de mets gras
- Les jours d'abstinence: vendredis toute l'année, Carême
- Exempts: malades, enfants en bas âge

Le précepte pascal:
- Se confesser et communier au moins une fois par an
- De préférence à Pâques
- C'est un minimum; il est recommandé de communier plus souvent

Ces commandements ont pour but notre bien spirituel. Les enfreindre est péché.`,
          questions: [
            {
              id: "px-q15",
              question: "Quels sont les commandements de l'Église ?",
              reponse:
                "Les commandements de l'Église sont: assister à la messe le dimanche et les fêtes, se confesser au moins une fois l'an, communier au moins à Pâques, jeûner et s'abstenir de viande aux jours prescrits, ne pas célébrer de noces en temps défendu, et ne pas contribuer à une secte.",
              category: "vertus",
              part: 2,
              article: 8,
            },
          ],
        },
        {
          id: "px-peche-mortel",
          part: 2,
          article: 9,
          title: "Le Péché Mortel et le Péché Véniel",
          titleShort: "Mortel et Véniel",
          content: `Il y a deux sortes de péchés: le péché mortel et le péché véniel.

Le péché mortel:
- Est une désobéissance grave à la loi de Dieu
- Commis en pleine connaissance (on sait que c'est grave)
- Commis de plein gré (on choisit librement)
- Privation de la grâce sanctifiante
- Mérite l'enfer s'il n'est pas pardonné
- Fait perdre les mérites acquis
- Rend l'âme ennemie de Dieu

Les sept péchés capitaux:
1. Orgueil: s'estimer au-dessus des autres
2. Avarice: attachement désordonné aux biens
3. Luxure: plaisir charnel désordonné
4. Envie: tristesse du bien d'autrui
5. Gourmandise: excès dans le boire et le manger
6. Colère: désir de vengeance
7. Paresse: négligence dans le service de Dieu

Les six péchés contre le Saint-Esprit:
1. Désespérer de son salut
2. Présomption de se sauver sans mérite
3. Résister à la vérité connue
4. Envier la grâce d'autrui
5. Obstination dans le péché
6. Impénitence finale

Les quatre péchés qui crient vengeance au ciel:
1. Le meurtre volontaire (sang d'Abel)
2. Le péché de Sodome
3. L'oppression des pauvres
4. La privation du salaire de l'ouvrier

Le péché véniel:
- Est une désobéissance légère à la loi de Dieu
- Ou une désobéissance grave sans pleine connaissance
- Ou une désobéissance grave sans plein consentement
- Affaiblit la charité mais ne la détruit pas
- Ne mérite pas l'enfer
- Se multiplie facilement et dispose au péché mortel

Pour être pardonné:
- Le péché mortel doit être confessé dans le sacrement de pénitence
- Le péché véniel peut être pardonné par la prière, les œuvres bonnes, l'aumône`,
          questions: [
            {
              id: "px-q16",
              question: "Qu'est-ce qu'un péché mortel ?",
              reponse:
                "Un péché mortel est une désobéissance grave à la loi de Dieu, faite en pleine connaissance et de plein gré. Il nous prive de la grâce sanctifiante et nous mérite l'enfer si nous ne nous repentons pas.",
              category: "peche-mortel",
              part: 2,
              article: 9,
            },
            {
              id: "px-q16b",
              question: "Quels sont les sept péchés capitaux ?",
              reponse:
                "Les sept péchés capitaux sont: l'orgueil, l'avarice, la luxure, l'envie, la gourmandise, la colère et la paresse. On les appelle capitaux parce qu'ils sont la source de beaucoup d'autres péchés.",
              category: "peche-mortel",
              part: 2,
              article: 9,
            },
          ],
        },
        {
          id: "px-vertus",
          part: 2,
          article: 10,
          title: "Les Vertus",
          titleShort: "Les Vertus",
          content: `Les vertus sont des habitudes bonnes qui nous font agir facilement, promptement et joyeusement dans le bien.

Les vertus théologales:
1. Foi: croire fermement tout ce que Dieu a révélé et l'Église nous propose à croire
2. Espérance: attendre avec confiance la vie éternelle et les grâces nécessaires pour y arriver
3. Charité: aimer Dieu par-dessus tout et le prochain comme soi-même pour l'amour de Dieu

Les vertus cardinales:
1. Prudence: discerner en toute chose le vrai bien et les moyens de l'accomplir
2. Justice: rendre à chacun ce qui lui appartient
3. Force: ne pas se laisser abattre devant les difficultés pour le bien
4. Tempérance: modérer l'usage des biens terrestres

Les vertus morales:
- Les vertus qui règlent nos mœurs et nos actions
- Elles se rapportent aux quatre vertus cardinales
- Parmi les principales: l'humilité, la douceur, la chasteté, la patience, l'obéissance

Les vertus et les vices sont contraires: la vertu est l'habitude du bien, le vice est l'habitude du mal.`,
          questions: [
            {
              id: "px-q17",
              question: "Quelles sont les trois vertus théologales ?",
              reponse:
                "Les trois vertus théologales sont: la foi, qui nous fait croire les vérités révélées par Dieu; l'espérance, qui nous fait attendre la vie éternelle; et la charité, qui nous fait aimer Dieu par-dessus tout et le prochain pour l'amour de Dieu.",
              category: "vertus-theologales",
              part: 2,
              article: 10,
            },
            {
              id: "px-q17b",
              question: "Quelles sont les quatre vertus cardinales ?",
              reponse:
                "Les quatre vertus cardinales sont: la prudence, la justice, la force et la tempérance.",
              category: "vertus-cardinales",
              part: 2,
              article: 10,
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════
    // PARTIE III — LES SACREMENTS
    // ═══════════════════════════════════════════════
    {
      id: "sacrements",
      part: 3,
      title: "La Grâce et les Sacrements",
      description: "La grâce sanctifiante et les sept sacrements institués par Jésus-Christ.",
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
- Précède et accompagne nos actes

Grâce sanctifiante:
- Nous rend saints et justes aux yeux de Dieu
- Fait de nous des enfants de Dieu et héritiers du ciel
- Nous est donnée principalement par les sacrements
- Nous pouvons la perdre par le péché mortel
- Nous pouvons la recouvrer par la confession

Les mérites:
- Les bonnes œuvres faites en état de grâce méritent la vie éternelle
- Elles augmentent la grâce sanctifiante
- Elles augmentent la gloire au ciel
- Sans la grâce, nos œuvres ne méritent rien pour le ciel

Sans la grâce:
- Nous ne pouvons pas faire aucune œuvre bonne méritoire pour le ciel
- Nous ne pouvons pas entrer au ciel
- La foi sans la grâce est morte

La grâce est absolument nécessaire pour le salut. On ne peut se sauver par ses propres forces.`,
          questions: [
            {
              id: "px-q18",
              question: "Qu'est-ce que la grâce sanctifiante ?",
              reponse:
                "La grâce sanctifiante est le don que Dieu nous fait gratuitement, qui nous rend saints et justes, enfants de Dieu et héritiers du ciel. Nous la recevons principalement par les sacrements.",
              category: "grace",
              part: 3,
              article: 1,
            },
            {
              id: "px-q18b",
              question: "Qu'est-ce que la grâce actuelle ?",
              reponse:
                "La grâce actuelle est le secours que Dieu nous donne au moment de l'action, pour nous aider à faire le bien et éviter le mal. Elle précède et accompagne nos actes.",
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
- Nous fait héritiers du paradis

Nécessité:
- Nécessaire de moyen pour le salut (sans baptême on ne peut être sauvé)
- Nécessaire de précepte si on peut être baptisé
- Les adultes doivent avoir la foi et l'intention de recevoir le baptême
- Les enfants sont baptisés dès que possible (dans les premières semaines)

Matière: eau naturelle
Forme: "Je te baptise au nom du Père, et du Fils, et du Saint-Esprit"
Ministre: prêtre (normalement), ou n'importe qui en cas de nécessité

Le baptême ne se réitère jamais. On ne peut être baptisé qu'une seule fois.

Le parrain et la marraine:
- Doivent être catholiques confirmés
- Ont le devoir d'aider l'enfant dans sa vie chrétienne
- Doivent donner l'exemple`,
          questions: [
            {
              id: "px-q19",
              question: "Qu'est-ce que le baptême ?",
              reponse:
                "Le baptême est le sacrement qui efface le péché originel, nous donne la grâce sanctifiante, nous fait enfants de Dieu et membres de l'Église. Il est nécessaire pour le salut.",
              category: "sacrement-bapteme",
              part: 3,
              article: 2,
            },
            {
              id: "px-q19b",
              question: "Comment administrer le baptême ?",
              reponse:
                "Le baptême s'administre en versant de l'eau sur la tête du baptisé (ou en l'immergeant) et en disant: 'Je te baptise au nom du Père, et du Fils, et du Saint-Esprit'.",
              category: "sacrement-bapteme",
              part: 3,
              article: 2,
            },
          ],
        },
        {
          id: "px-confirmation",
          part: 3,
          article: 3,
          title: "La Confirmation",
          titleShort: "Don du Saint-Esprit",
          content: `La confirmation est le sacrement qui nous donne le Saint-Esprit dans toute sa plénitude.

Effets de la confirmation:
- Donne les sept dons du Saint-Esprit
- Augmente et fortifie la grâce sanctifiante
- Imprime le caractère de soldat du Christ
- Nous rend parfaits chrétiens
- Nous fait membres actifs de l'Église

Matière: saint chrême (huile mêlée de baume, consacrée par l'évêque)
Forme: "Je te marque du signe de la croix et je te confirme avec le chrême du salut, au nom du Père, et du Fils, et du Saint-Esprit"
Ministre: l'évêque (normalement), ou un prêtre délégué

Conditions pour recevoir la confirmation:
- Être baptisé
- Être en état de grâce
- Avoir reçu suffisamment d'instruction religieuse
- Avoir un parrain ou une marraine

La confirmation ne se reçoit qu'une seule fois. Elle complète et perfectionne le baptême.

Le parrain ou la marraine de confirmation:
- Doit être confirmé
- Doit être catholique
- A le devoir d'aider le confirmé dans sa vie chrétienne`,
          questions: [
            {
              id: "px-q20",
              question: "Qu'est-ce que la confirmation ?",
              reponse:
                "La confirmation est le sacrement qui nous donne le Saint-Esprit, augmente la grâce sanctifiante, et nous rend parfaits chrétiens et soldats du Christ. Elle est administrée par l'évêque.",
              category: "sacrement-bapteme",
              part: 3,
              article: 3,
            },
          ],
        },
        {
          id: "px-eucharistie",
          part: 3,
          article: 4,
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
- C'est un mystère que la raison ne peut expliquer

La messe:
- C'est le sacrifice du Corps et du Sang de Jésus-Christ
- Renouvelé sur l'autel par le ministère du prêtre
- C'est le même sacrifice que celui de la croix
- Les fruits de la messe sont infinis
- On peut appliquer les fruits de la messe aux vivants et aux défunts

Pour recevoir la communion:
- Être à jeun (une heure avant)
- Être en état de grâce (pas de péché mortel non confessé)
- Avoir la foi en la présence réelle
- Avoir une dévotion et un respect convenables

Fréquence: les fidèles sont encouragés à communier souvent, au moins chaque dimanche. Saint Pie X a encouragé la communion fréquente et quotidienne.

L'adoration du Saint-Sacrement:
- Le tabernacle contient toujours des hosties consacrées
- L'ostensoir est utilisé pour l'exposition solennelle
- Les fidèles doivent s'agenouiller devant le Saint-Sacrement
- Le Tantum Ergo est chanté lors de l'exposition`,
          questions: [
            {
              id: "px-q21",
              question: "Qu'est-ce que l'Eucharistie ?",
              reponse:
                "L'Eucharistie est le sacrement du corps et du sang de Jésus-Christ sous les espèces du pain et du vin. Jésus y est réellement présent: corps, âme, sang et divinité.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 4,
            },
            {
              id: "px-q21b",
              question: "Qu'est-ce que la transsubstantiation ?",
              reponse:
                "La transsubstantiation est le changement miraculeux de toute la substance du pain en la substance du Corps du Christ, et de toute la substance du vin en la substance de son Sang, les espèces du pain et du vin demeurant.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 4,
            },
            {
              id: "px-q21c",
              question: "Comment se préparer à la communion ?",
              reponse:
                "Pour recevoir dignement la communion, il faut: être à jeun depuis une heure, être en état de grâce (sans péché mortel), avoir la foi en la présence réelle, et avoir le respect et la dévotion convenables.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 4,
            },
          ],
        },
        {
          id: "px-penitence",
          part: 3,
          article: 5,
          title: "Le Sacrement de Pénitence",
          titleShort: "La Confession",
          content: `Le sacrement de pénitence (confession) a été institué par Jésus-Christ pour remettre les péchés commis après le baptême.

Éléments nécessaires:
1. Examen de conscience: rechercher tous les péchés
2. Contrition: douleur d'avoir offensé Dieu
3. Confession: aveu des péchés au prêtre
4. Absolution: pardon donné par le prêtre au nom du Christ
5. Satisfaction: accomplir les pénitences données

La contrition:
- Contrition parfaite: douleur d'avoir offensé Dieu parce qu'il est infiniment bon (meilleure)
- Contrition imparfaite: douleur par crainte de l'enfer (suffisante pour le sacrement)

Conditions pour une bonne confession:
- Confesser tous les péchés mortels en espèce et en nombre
- Avoir la résolution de ne plus pécher
- Accuser sincèrement sans rien cacher
- Faire les pénitences imposées

Fréquence: au moins une fois par an (précepte pascal), mais recommandé plus souvent (mois, trimestre).

Le prêtre est tenu au sceau de la confession: il ne peut jamais révéler les péchés entendus en confession, même sous peine de mort.

Indulgences: remise de la peine temporelle due aux péchés pardonnés.
- Indulgence plénière: remise complète
- Indulgence partielle: remise partielle
- Il faut être en état de grâce et remplir les conditions prescrites`,
          questions: [
            {
              id: "px-q22",
              question: "Qu'est-ce que le sacrement de pénitence ?",
              reponse:
                "Le sacrement de pénitence a été institué par Jésus-Christ pour remettre les péchés commis après le baptême. Il faut: examiner sa conscience, être contrit, se confesser au prêtre, recevoir l'absolution, et accomplir la pénitence.",
              category: "sacrement-penitence",
              part: 3,
              article: 5,
            },
            {
              id: "px-q22b",
              question: "Qu'est-ce que la contrition ?",
              reponse:
                "La contrition est la douleur d'avoir offensé Dieu et la résolution de ne plus pécher. La contrition parfaite naît de l'amour de Dieu; la contrition imparfaite naît de la crainte des peines de l'enfer.",
              category: "sacrement-penitence",
              part: 3,
              article: 5,
            },
          ],
        },
        {
          id: "px-extreme-onction",
          part: 3,
          article: 6,
          title: "L'Onction des Malades",
          titleShort: "Pour les Malades",
          content: `L'onction des malades (appelée autrefois extrême-onction) est le sacrement donné à ceux qui sont en danger de mort.

Effets:
- Fortifie l'âme du malade
- Lui donne la grâce de bien supporter la souffrance
- Lui aide à se repentir de ses péchés s'il ne l'a pas fait
- Parfois, si Dieu le veut, apporte la guérison du corps
- Prépare l'âme à la rencontre avec Dieu

Matière: huile bénite par l'évêque (sainte huile des malades)
Forme: prière prescrite par le rite romain
Ministre: prêtre
Sujet: baptisé en danger de mort (malade, âgé, opéré)

Il ne faut pas attendre le dernier moment pour recevoir ce sacrement. Il est bon de l'appeler dès que le danger apparaît.

La Communion des malades (viatique):
- Le malade reçoit l'Eucharistie pour son dernier voyage
- C'est le sacrement le plus important avant la mort
- On peut le donner en même temps que l'onction

La bénédiction apostolique (indulgence plénière in articulo mortis):
- Le prêtre donne l'indulgence plénière à l'article de la mort
- Elle remet toutes les peines dues aux péchés
- Le malade doit être contrit et accepter la mort avec résignation`,
          questions: [
            {
              id: "px-q23",
              question: "Qu'est-ce que l'onction des malades ?",
              reponse:
                "L'onction des malades est le sacrement donné à ceux qui sont en danger de mort. Il fortifie l'âme, aide à supporter la souffrance, et donne la grâce de se bien préparer pour la rencontre avec Dieu.",
              category: "sacrement-extreme-onction",
              part: 3,
              article: 6,
            },
          ],
        },
        {
          id: "px-ordre",
          part: 3,
          article: 7,
          title: "Le Sacrement de l'Ordre",
          titleShort: "L'Ordre",
          content: `Le sacrement de l'Ordre confère le pouvoir d'accomplir les fonctions sacrées au service de l'Église.

Les trois degrés de l'ordre sacré:
1. L'épiscopat: plénitude du sacerdoce, pouvoir de confirmer et d'ordonner
2. Le presbyérat: pouvoir de consacrer l'Eucharistie, de remettre les péchés, d'administrer les sacrements
3. Le diaconat: pouvoir de prêcher, de baptiser et d'assister au mariage

Le prêtre:
- Reçoit le pouvoir de consacrer le Corps et le Sang du Christ
- Peut remettre les péchés au nom de Dieu
- Peut administrer tous les sacrements sauf la confirmation et l'ordre
- Est tenu au célibat ecclésiastique (dans le rite latin)
- A le devoir de prier, de prêcher et de sanctifier les fidèles

L'évêque:
- Est le successeur des apôtres
- A le pouvoir de confirmer et d'ordonner
- Gouverne son diocèse
- Est uni au pape dans la communion ecclésiale

Le pape:
- Est l'évêque de Rome
- Successeur de saint Pierre
- Chef visible de toute l'Église
- A la primauté de juridiction sur toute l'Église
- A le pouvoir d'infaillibilité en matière de foi et de mœurs

La vocation:
- Dieu appelle certains hommes au sacerdoce
- La vocation est un don gratuit de Dieu
- Elle exige: droiture d'intention, science suffisante, piété, chasteté
- Les fidèles doivent prier pour les vocations`,
          questions: [
            {
              id: "px-q24",
              question: "Qu'est-ce que le sacrement de l'Ordre ?",
              reponse:
                "Le sacrement de l'Ordre confère le pouvoir d'accomplir les fonctions sacrées. L'évêque reçoit la plénitude du sacerdoce, le prêtre le pouvoir de consacrer et d'absoudre, le diacre le pouvoir de prêcher et de baptiser.",
              category: "sacrement-ordre",
              part: 3,
              article: 7,
            },
            {
              id: "px-q24b",
              question: "Quel est le pouvoir du prêtre ?",
              reponse:
                "Le prêtre a le pouvoir de consacrer le Corps et le Sang de Jésus-Christ à la messe, de remettre les péchés au nom de Dieu, et d'administrer les sacrements aux fidèles.",
              category: "sacrement-ordre",
              part: 3,
              article: 7,
            },
          ],
        },
        {
          id: "px-mariage",
          part: 3,
          article: 8,
          title: "Le Sacrement de Mariage",
          titleShort: "Le Mariage",
          content: `Le mariage est le sacrement qui sanctifie l'union de l'homme et de la femme pour fonder une famille chrétienne.

Nature du mariage:
- Institution divine, établie dès le paradis terrestre
- Élevé à la dignité de sacrement par Jésus-Christ
- Union d'un homme et d'une femme
- Unique et indissoluble (« l'homme ne sépare pas ce que Dieu a uni »)
- Ouvert à la procréation et à l'éducation des enfants

Les fins du mariage:
1. Fin primaire: la procréation et l'éducation des enfants
2. Fin secondaire: l'aide mutuelle entre les époux, le remède à la concupiscence

Les effets du mariage:
- La grâce sanctifiante pour les époux
- La grâce d'état pour remplir leurs devoirs
- Le droit aux grâces nécessaires pour élever chrétiennement les enfants

Conditions pour un mariage valide:
- Consentement libre et mutuel des époux
- Pas d'empêchement dirimant (consanguinité, lien antérieur, vœu de chasteté, etc.)
- La forme prescrite par l'Église (devant le prêtre et deux témoins)

Les devoirs des époux:
- Fidélité mutuelle
- Aide et assistance réciproque
- Éducation chrétienne des enfants
- Vie de prière en commun

Le divorce est impossible entre chrétiens mariés sacramentellement. La séparation de corps peut être permise dans certains cas, mais le lien demeure.`,
          questions: [
            {
              id: "px-q25",
              question: "Qu'est-ce que le sacrement de mariage ?",
              reponse:
                "Le mariage est le sacrement qui sanctifie l'union d'un homme et d'une femme pour fonder une famille chrétienne. Il est unique, indissoluble et ouvert à la procréation des enfants.",
              category: "sacrement-mariage",
              part: 3,
              article: 8,
            },
          ],
        },
      ],
    },
    // ═══════════════════════════════════════════════
    // PARTIE IV — LA PRIÈRE
    // ═══════════════════════════════════════════════
    {
      id: "prière",
      part: 4,
      title: "La Prière",
      description: "Les prières essentielles et la vie de prière du chrétien.",
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

Les sept demandes:
1. Que votre nom soit sanctifié: honorer Dieu
2. Que votre règne vienne: le Royaume de Dieu
3. Que votre volonté soit faite: soumission à Dieu
4. Donnez-nous notre pain: nos besoins
5. Pardonnez-nous nos offenses: le pardon
6. Ne nous induisez pas en tentation: la force contre le mal
7. Délivrez-nous du mal: la protection

Nous devons la prier:
- Avec attention et dévotion
- Lentement, en méditant chaque parole
- Avec confiance en la bonté de notre Père du ciel`,
          questions: [
            {
              id: "px-q26",
              question: "Qu'est-ce que le Notre Père ?",
              reponse:
                "Le Notre Père est la prière enseignée par Jésus-Christ lui-même. Elle contient sept demandes qui résument tout ce que nous devons demander à Dieu.",
              category: "priere",
              part: 4,
              article: 1,
            },
            {
              id: "px-q26b",
              question: "Quelles sont les sept demandes du Notre Père ?",
              reponse:
                "Les sept demandes du Notre Père sont: que votre nom soit sanctifié, que votre règne vienne, que votre volonté soit faite, donnez-nous notre pain, pardonnez-nous nos offenses, ne nous induisez pas en tentation, délivrez-nous du mal.",
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

Il est recommandé de la réciter chaque jour, surtout le matin et le soir. Le chapelet est la récitation de 50 Je vous salue Marie avec 5 mystères à méditer.`,
          questions: [
            {
              id: "px-q27",
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
              id: "px-q28",
              question: "Qu'est-ce que le Symbole des Apôtres ?",
              reponse:
                "Le Symbole des Apôtres est la profession de foi des apôtres, contenant les douze articles de foi que tout chrétien doit connaître et croire.",
              category: "foi",
              part: 4,
              article: 3,
            },
          ],
        },
        {
          id: "px-angelus",
          part: 4,
          article: 4,
          title: "L'Angelus",
          titleShort: "L'Angelus",
          content: `L'Angelus est la prière qui rappelle le mystère de l'Incarnation. On le récite trois fois par jour: le matin, à midi et le soir.

V/: L'ange du Seigneur annonça à Marie.
R/: Et elle conçut du Saint-Esprit.

Je vous salue, Marie...

V/: Voici la servante du Seigneur.
R/: Qu'il me soit fait selon votre parole.

Je vous salue, Marie...

V/: Et le Verbe s'est fait chair.
R/: Et il a habité parmi nous.

Je vous salue, Marie...

V/: Priez pour nous, sainte Mère de Dieu.
R/: Afin que nous soyons rendus dignes des promesses du Christ.

Prions:
Que ta miséricorde, Seigneur, se répande dans nos cœurs: nous qui, par l'ange, avons connu l'Incarnation de ton Fils, conduis-nous par sa Passion et par sa croix jusqu'à la gloire de la Résurrection. Par le même Jésus-Christ, notre Seigneur.

R/: Amen.

On sonne l'Angelus à la cloche. Pendant le Temps pascal, on remplace l'Angelus par le Regina Cæli.`,
          questions: [
            {
              id: "px-q29",
              question: "Qu'est-ce que l'Angelus ?",
              reponse:
                "L'Angelus est la prière qui rappelle le mystère de l'Incarnation. On le récite trois fois par jour: le matin, à midi et le soir. Pendant le Temps pascal, on dit le Regina Cæli.",
              category: "priere",
              part: 4,
              article: 4,
            },
          ],
        },
        {
          id: "px-actes-vertus",
          part: 4,
          article: 5,
          title: "Les Actes de Foi, d'Espérance et de Charité",
          titleShort: "Actes de vertu",
          content: `Les actes de vertu sont des prières par lesquelles nous exprimons nos sentiments de foi, d'espérance et de charité envers Dieu.

Acte de Foi:
Mon Dieu, je crois fermement toutes les vérités que vous avez révélées et que vous nous enseignez par votre sainte Église, parce que vous ne pouvez ni vous tromper ni nous tromper.

Acte d'Espérance:
Mon Dieu, j'espère avec une ferme confiance que vous me donnerez, par les mérites de Jésus-Christ, la grâce de vous servir en cette vie et la vie éternelle en l'autre, parce que vous l'avez promis et que vous êtes fidèle dans vos promesses.

Acte de Charité:
Mon Dieu, je vous aime de tout mon cœur et par-dessus toutes choses, parce que vous êtes infiniment bon et infiniment aimable; et j'aime mon prochain comme moi-même pour l'amour de vous.

Acte de Contrition:
Mon Dieu, j'ai un très grand regret de vous avoir offensé, parce que vous êtes infiniment bon et infiniment aimable et que le péché vous déplaît. Je prends la ferme résolution, moyennant votre sainte grâce, de ne plus vous offenser et de faire pénitence.

Ces actes sont à réciter chaque jour, surtout le matin et le soir.`,
          questions: [
            {
              id: "px-q30",
              question: "Quel est l'acte de foi ?",
              reponse:
                "L'acte de foi est la prière par laquelle nous déclarons croire fermement toutes les vérités révélées par Dieu et enseignées par l'Église, parce que Dieu ne peut ni se tromper ni nous tromper.",
              category: "foi",
              part: 4,
              article: 5,
            },
            {
              id: "px-q30b",
              question: "Quel est l'acte de contrition ?",
              reponse:
                "L'acte de contrition est la prière par laquelle nous exprimons notre regret d'avoir offensé Dieu, parce qu'il est infiniment bon, et notre résolution de ne plus pécher.",
              category: "sacrement-penitence",
              part: 4,
              article: 5,
            },
          ],
        },
        {
          id: "px-chapelet",
          part: 4,
          article: 6,
          title: "Le Rosaire",
          titleShort: "Le Rosaire",
          content: `Le rosaire est une prière mariale composée de la récitation de Pater et d'Ave Maria, avec la méditation des mystères de la vie du Jésus et de Marie.

Structure du rosaire:
- Chaque rosaire contient 5 dizaines
- Chaque dizaine: 1 Pater + 10 Ave Maria + 1 Gloria Patri
- Au début: Credo + 1 Pater + 3 Ave Maria + Gloria Patri

Les mystères joyeux (lundi et jeudi):
1. L'Annonciation
2. La Visitation
3. La Nativité
4. La Présentation au Temple
5. Le Recouvrement de Jésus au Temple

Les mystères douloureux (mardi et vendredi):
1. L'agonie au Jardin des Oliviers
2. La Flagellation
3. Le Couronnement d'épines
4. Le Portement de la croix
5. La Crucifixion et la Mort

Les mystères glorieux (mercredi et samedi, dimanche):
1. La Résurrection
2. L'Ascension
3. La Pentecôte
4. L'Assomption de Marie
5. Le Couronnement de Marie

Le rosaire est la prière favorite de la Vierge Marie. Elle l'a recommandée à Lourdes et à Fatima. C'est la prière la plus puissante après la sainte messe.`,
          questions: [
            {
              id: "px-q31",
              question: "Qu'est-ce que le rosaire ?",
              reponse:
                "Le rosaire est une prière mariale composée de 5 dizaines, chacune contenant 1 Pater, 10 Ave Maria et 1 Gloria, avec la méditation des mystères de la vie de Jésus et de Marie.",
              category: "priere",
              part: 4,
              article: 6,
            },
          ],
        },
        {
          id: "px-chemin-croix",
          part: 4,
          article: 7,
          title: "Le Chemin de Croix",
          titleShort: "Chemin de Croix",
          content: `Le chemin de croix est une dévotion qui consiste à méditer les quatorze stations de la Passion de Notre Seigneur Jésus-Christ.

Les quatorze stations:
1. Jésus est condamné à mort
2. Jésus est chargé de sa croix
3. Jésus tombe pour la première fois
4. Jésus rencontre sa très sainte Mère
5. Simon de Cyrène aide Jésus à porter sa croix
6. Sainte Véronique essuie le visage de Jésus
7. Jésus tombe pour la deuxième fois
8. Jésus console les filles de Jérusalem
9. Jésus tombe pour la troisième fois
10. Jésus est dépouillé de ses vêtements
11. Jésus est cloué sur la croix
12. Jésus meurt sur la croix
13. Jésus est descendu de la croix
14. Jésus est mis au tombeau

À chaque station, on médite sur la souffrance de Jésus et on lui offre ses propres souffrances.

Le chemin de croix:
- Peut être fait en tout temps mais est particulièrement pratiqué le vendredi et pendant le Carême
- Donne des indulgences plénières
- Nous unit à la Passion du Christ
- Nous aide à comprendre l'amour de Dieu pour nous`,
          questions: [
            {
              id: "px-q32",
              question: "Qu'est-ce que le chemin de croix ?",
              reponse:
                "Le chemin de croix est une dévotion qui consiste à méditer les quatorze stations de la Passion de Jésus-Christ. Il nous unit à la souffrance du Christ et nous rappelle son amour pour nous.",
              category: "priere",
              part: 4,
              article: 7,
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
    "Filioque": "Le Saint-Esprit procède du Père ET du Fils",
    Charité: "Vertu par laquelle on aime Dieu par-dessus tout et le prochain pour l'amour de Dieu",
    "Dons du Saint-Esprit": "Sept dons: sagesse, intelligence, conseil, force, science, piété, crainte de Dieu",
    "Péchés capitaux": "Sept péchés: orgueil, avarice, luxure, envie, gourmandise, colère, paresse",
    "Vertus théologales": "Foi, espérance, charité — vertus surnaturelles infuses",
    "Vertus cardinales": "Prudence, justice, force, tempérance — vertus morales principales",
    Purgatoire: "Lieu de purification des âmes en état de grâce avant d'entrer au ciel",
    "Indulgence": "Remise de la peine temporelle due aux péchés déjà pardonnés",
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
    },
    {
      type: "theologique",
      source: "Concile de Trente",
      citation: "Catéchisme du Concile de Trente (1566)",
    },
  ],
};
