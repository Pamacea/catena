/*
 * Catéchisme du Curé d'Ars
 * Auteur: Saint Jean-Marie Vianney (1786-1859)
 * Source: Enseignements pastoraux du saint curé d'Ars
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
  name: "Saint Jean-Marie Vianney",
  dates: "1786-1859",
  role: "Curé d'Ars, patron des prêtres",
};

export const cureDArsCatechism: CatechismMetadata = {
  id: "cure-d-ars",
  title: "Catéchisme du Curé d'Ars",
  titleShort: "Catéchisme du Curé d'Ars",
  author: author,
  date: "1860",
  doctrine: "Doctrine catholique traditionnelle",
  description:
    "Le catéchisme composé par saint Jean-Marie Vianney, curé d'Ars, connu pour sa piété exceptionnelle et son zèle pastoral. Ses enseignements simples et profonds ont converti des milliers de pécheurs.",
  context: `Saint Jean-Marie Vianney (1786-1859) fut nommé curé du petit village d'Ars, près de Lyon, en 1818. Pendant les quarante années de son ministère, il transforma la paroisse par sa vie de prière, de pénitence et de prédication.

Le curé d'Ars est célèbre pour:
- Ses confessions (jusqu'à 18 heures par jour)
- Ses homélies simples et ferventes sur la foi et la morale
- Ses miracles (guérisons, lectures des cœurs)
- Sa pauvreté volontaire
- Sa dévotion à la Vierge Marie et à saint Philomène

Il fut canonisé en 1925 par Pie XI et déclaré patron des curés de paroisse en 1929.

Ce catéchisme reflète son style direct, nourri de l'Écriture Sainte et des saints Pères, et son souci du salut des âmes.`,
  parts: [
    {
      id: "foi-ars",
      part: 1,
      title: "La Foi",
      description: "La nature de la foi, ses nécessité, et ses devoirs.",
      articles: [
        {
          id: "ars-foi",
          part: 1,
          article: 1,
          title: "Qu'est-ce que la Foi ?",
          titleShort: "La Vertu de Foi",
          content: `La foi est une lumière surnaturelle qui nous fait connaître Dieu et tout ce qu'il a révélé.

La foi:
- Est un don gratuit de Dieu que nous recevons dans le baptême
- Est une vertu surnaturelle qui dépasse la raison naturelle
- Nous fait croire des vérités que nous ne pouvons pas voir
- Est nécessaire pour le salut (sans foi on ne peut être sauvé)

Objet de la foi:
- Les vérités révélées par Dieu
- Contenues dans l'Écriture Sainte et la Tradition
- Enseignées par l'Église catholique

La foi doit être:
- Vive (agissant dans nos œuvres)
- Orthodoxe (conforme à la vérité)
- Ferme (inébranlable face aux épreuves)
- Agissante (produisant des œuvres bonnes)

La foi sans les œuvres est morte: "Ce n'est pas en disant: Seigneur, Seigneur, qu'on entrera dans le royaume des cieux, mais c'est en faisant la volonté de mon Père qui est dans les cieux." (Matthieu 7:21)

Le curé d'Ars disait: "La foi est la clef du trésor; avec elle on ouvre le cœur de Dieu, sans elle on reste dehors."`,
          questions: [
            {
              id: "ars-q1",
              question: "Qu'est-ce que la foi ?",
              reponse:
                "La foi est une lumière surnaturelle qui nous fait connaître Dieu et tout ce qu'il a révélé. C'est un don gratuit de Dieu, nécessaire pour le salut, et doit être vive et agissante.",
              category: "foi",
              part: 1,
              article: 1,
            },
            {
              id: "ars-q2",
              question: "La foi suffit-elle pour être sauvé ?",
              reponse:
                "La foi est nécessaire mais pas suffisante. Il faut aussi faire les œuvres bonnes commandées par Dieu, persévérer jusqu'à la mort dans la grâce, et recevoir les sacrements. La foi sans les œuvres est morte.",
              category: "justification",
              part: 1,
              article: 1,
            },
          ],
        },
        {
          id: "ars-foi-vivre",
          part: 1,
          article: 2,
          title: "La Foi Vivante",
          titleShort: "Œuvres de la Foi",
          content: `La foi ne doit pas rester dans l'intelligence; elle doit descendre dans le cœur et se traduire en œuvres.

Œuvres de la foi:
- Prier (lever le matin et soir, prier avant et après les repas)
- Assister à la messe le dimanche
- Se confesser régulièrement (au moins une fois par an)
- Communier dignement (en état de grâce)
- Lire l'Écriture Sainte
- Pratiquer l'aumône
- Supporter les injustices avec patience
- Pardonner les offenses

Le curé d'Ars enseignait:
- "Celui qui ne prie pas est comme un corps sans âme"
- "Un quart d'heure de méditation vaut mieux qu'une heure d'oraison sans attention"
- "La prière est la respiration de l'âme"

Le prêtre nous dit dans la messe: "Oremus" - Prions. Cela montre l'importance de la prière.`,
          questions: [
            {
              id: "ars-q3",
              question: "Comment la foi se manifeste-t-elle dans la vie ?",
              reponse:
                "La foi se manifeste par la prière, l'assistance à la messe, la confession, la communion, la lecture de l'Écriture, l'aumône, et le pardon des offenses. \"La foi sans les œuvres est morte.\"",
              category: "vertus",
              part: 1,
              article: 2,
            },
          ],
        },
      ],
    },
    {
      id: "grace-ars",
      part: 2,
      title: "La Grâce et le Péché",
      description: "La grâce de Dieu, le péché mortel et véniel, et la conversion.",
      articles: [
        {
          id: "ars-grace",
          part: 2,
          article: 1,
          title: "La Grâce de Dieu",
          titleShort: "Le Don de Dieu",
          content: `La grâce est un don que Dieu nous fait gratuitement, sans aucun mérite de notre part.

Grâce actuelle:
- Une lumière qui nous éclaire sur ce que nous devons faire
- Une force qui nous aide à le faire
- Nous est donnée au moment de l'action

Grâce sanctifiante:
- Un habit d'innocence qui nous rend beaux aux yeux de Dieu
- Une qualité surnaturelle qui nous fait enfants de Dieu
- Nous donne le droit au ciel si nous mourons en état de grâce

Comment obtenir la grâce:
- Par la prière
- Par les sacrements
- Par les bonnes œuvres
- Par la pratique des vertus

Le curé d'Ars disait: "Tout est grâce de Dieu, même notre désir de le servir. C'est lui qui nous donne le vouloir et le faire."

La grâce ne nous force jamais; elle respecte notre liberté. Nous pouvons l'accepter ou la rejeter.`,
          questions: [
            {
              id: "ars-q4",
              question: "Qu'est-ce que la grâce ?",
              reponse:
                "La grâce est un don que Dieu nous fait gratuitement. La grâce actuelle nous aide à faire une bonne action. La grâce sanctifiante nous rend saints et justes, enfants de Dieu et héritiers du ciel.",
              category: "grace",
              part: 2,
              article: 1,
            },
          ],
        },
        {
          id: "ars-peche-mortel",
          part: 2,
          article: 2,
          title: "Le Péché Mortel",
          titleShort: "Mort Spirituel",
          content: `Le péché mortel est comme un poison mortel pour l'âme.

Conditions du péché mortel:
1. Matière grave: une chose sérieusement interdite
2. Pleine connaissance: savoir que c'est grave
3. Plein consentement: choisir librement de le faire

Conséquences:
- Perte de la grâce sanctifiante
- Privation de l'amitié de Dieu
- Mort spirituelle de l'âme
- Si on meurt ainsi, l'enfer pour toujours

Exemples de péchés mortels:
- Homicide (volontaire ou par avortement)
- Adultère
- Vol grave
- Fausse déclaration en justice
- Sacrilege (simuler les sacrements sans être prêtre)
- Blasphème
- Refus d'obéir à l'Église en matière grave

Le curé d'Ars disait: "Le péché mortel est comme un poison: une seule goutte peut tuer."

La seule chose qui ne peut être pardonnée: le désespoir (refuser d'espérer le pardon de Dieu) et l'impénitence finale (refuser de se repentir jusqu'à la mort).`,
          questions: [
            {
              id: "ars-q5",
              question: "Qu'est-ce qu'un péché mortel ?",
              reponse:
                "Un péché mortel est une désobéissance grave à la loi de Dieu, en pleine connaissance et de plein consentement. Il prive l'âme de la grâce sanctifiante et mérite l'enfer si on ne se repent pas.",
              category: "peche-mortel",
              part: 2,
              article: 2,
            },
          ],
        },
        {
          id: "ars-peche-veniel",
          part: 2,
          article: 3,
          title: "Le Péché Véniel",
          titleShort: "Fautes Légères",
          content: `Le péché véniel est comme une maladie de l'âme qui ne la tue pas mais l'affaiblit.

Ce qui est péché véniel:
- Une pensée, parole ou action désordonnée légère
- Une faute grave sans pleine connaissance
- Une faute grave sans plein consentement
- L'omission d'une prière prescrite

Exemples:
- Mensonge léger (sans gravité)
- Impatience, colère légère
- Paroles inutiles ou blessantes
- Distraction pendant la prière
- Omission d'aumône quand on le pourrait

Conséquences:
- Affaiblit la charité
- Diminue notre résistance au mal
- Mérite une peine temporelle (au purgatoire)
- Ne détruit pas l'amitié avec Dieu

Pour le pardonner:
- Prière (acte de contrition)
- Aumône
- Œuvres de pénitence

Le curé d'Ars disait: "Les péchés véniels sont comme les feuilles qui tombent en automne: beaucoup de petites feuilles finissent par faire un grand tas."`,
          questions: [
            {
              id: "ars-q6",
              question: "Qu'est-ce qu'un péché véniel ?",
              reponse:
                "Un péché véniel est une désobéissance légère à la loi de Dieu, ou une désobéissance grave sans pleine connaissance ou consentement. Il affaiblit la charité mais ne la détruit pas, et peut être pardonné par la prière.",
              category: "peche-veniel",
              part: 2,
              article: 3,
            },
          ],
        },
        {
          id: "ars-conversion",
          part: 2,
          article: 4,
          title: "La Conversion",
          titleShort: "Retour à Dieu",
          content: `La conversion est le retour à Dieu après avoir vécu dans le péché.

Étapes de la conversion:
1. Reconnaître son péché
2. Avoir contrition (douleur d'avoir offensé Dieu)
3. Confesser ses péchés
4. Faire pénitence
5. Résoudre de ne plus pécher

La contrition parfaite:
- Douleur d'avoir offensé Dieu
- Parce qu'on a peur de l'enfer ou du châtiment
- Suffit pour le sacrement de pénitence (si on se confesse)

La contrition parfaite:
- Douleur d'avoir offensé Dieu
- Parce qu'on l'aime par-dessus tout
- Préférable mais pas nécessaire

Le curé d'Ars disait: "Mon Dieu, vous m'avez pardonné bien des fois, je vous en remercie. Si je retombe, je vous en demande pardon encore."

La conversion doit être constante: chaque jour nous devons nous améliorer et combattre nos défauts.`,
          questions: [
            {
              id: "ars-q7",
              question: "Qu'est-ce que la conversion ?",
              reponse:
                "La conversion est le retour à Dieu après avoir vécu dans le péché. Elle demande de reconnaître ses fautes, d'avoir contrition, de se confesser, de faire pénitence, et de résoudre de ne plus pécher.",
              category: "grace",
              part: 2,
              article: 4,
            },
          ],
        },
      ],
    },
    {
      id: "sacrements-ars",
      part: 3,
      title: "Les Sacrements",
      description: "Les sacrements comme moyens de salut institués par Jésus-Christ.",
      articles: [
        {
          id: "ars-messe",
          part: 3,
          article: 1,
          title: "La Messe",
          titleShort: "Saint Sacrifice",
          content: `La messe est le sacrifice de la Croix renouvelé sur l'autel de manière non sanglante.

Le curé d'Ars disait:
- "La messe est le sacrifice de la loi nouvelle"
- "C'est le saint sacrifice de l'autel"
- "C'est le sacrifice du corps et du sang de Jésus-Christ"

À la messe, le prêtre offre:
- Le Corps et le Sang de Jésus-Christ
- Au Père éternel
- Pour les péchés du peuple entier

Structure de la messe traditionnelle:
- Prières au bas de l'autel
- Kyrie, Gloria, Collecte
- Épître (lecture d'une lettre des Apôtres)
- Évangile (lecture d'un Évangile)
- Credo (symbole de foi)
- Offertoire
- Canon de la messe (consécration)
- Notre Père
- Communion
- Action de grâces et renvoi

La messe est la chose la plus précieuse sur la terre parce que Jésus-Christ s'y offre pour nous.`,
          questions: [
            {
              id: "ars-q8",
              question: "Qu'est-ce que la messe ?",
              reponse:
                "La messe est le sacrifice de la Croix renouvelé sur l'autel de manière non sanglante. Jésus-Christ s'y offre lui-même au Père pour nos péchés. C'est la chose la plus précieuse sur la terre.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 1,
            },
          ],
        },
        {
          id: "ars-confession",
          part: 3,
          article: 2,
          title: "La Confession",
          titleShort: "Miséricorde Divine",
          content: `La confession est le sacrement de la miséricorde de Dieu institué par Jésus-Christ le soir de sa résurrection.

Paroles du Christ:
- "À qui vous remettrez les péchés, ils seront remis"
- "Ceux que vous retiendrez, ils seront retenus"

Le pouvoir de pardonner:
- A été donné aux apôtres et à leurs successeurs (les prêtres)
- Le prêtre pardonne au nom de Jésus-Christ
- Il n'y a aucun péché, si grand soit-il, qui ne puisse être pardonné

Pour se bien confesser:
- Faire un examen de conscience sérieux
- Avoir une véritable contrition
- Avoir la résolution de ne plus pécher
- Confesser tous les péchés mortels en espèce et en nombre
- Ne rien cacher (rien cacher = fausse confession)
- Accomplir la pénitence

Le curé d'Ars passait des heures au confessionnal. Il disait: "Je ne vous demande que de bien vous examiner."

Fréquence: au moins une fois par an, plus souvent si nécessaire.`,
          questions: [
            {
              id: "ars-q9",
              question: "Qu'est-ce que la confession ?",
              reponse:
                "La confession est l'aveu de ses péchés à un prêtre qui a reçu le pouvoir de Jésus-Christ de les pardonner. Pour bien se confesser, il faut examiner sa conscience, être contrit, ne rien cacher, et accomplir la pénitence.",
              category: "sacrement-penitence",
              part: 3,
              article: 2,
            },
          ],
        },
        {
          id: "ars-communion",
          part: 3,
          article: 3,
          title: "La Communion",
          titleShort: "Union au Christ",
          content: `La sainte communion est la réception du Corps de Jésus-Christ.

Conditions pour bien communier:
1. Être à jeun (une heure avant)
2. Être en état de grâce (pas de péché mortel non confessé)
3. Avoir la dévotion et le respect
4. S'approcher de la communion avec humilité

Le curé d'Ars disait:
- "La communion est le pain des anges"
- "Une communion bien faite vaut plus que toutes les lectures du monde"
- "Quand on a communié, on a Jésus-Christ en soi"

Effets de la communion:
- Union intime avec Jésus-Christ
- Augmentation de la grâce
- Preservation contre les péchés futurs
- Force pour faire le bien

Fréquence: les fidèles sont encouragés à communier souvent. L'Église recommande au moins chaque dimanche.

Le curé d'Ars communiait chaque jour et encourageait ses paroissiens à faire de même.`,
          questions: [
            {
              id: "ars-q10",
              question: "Qu'est-ce que la communion ?",
              reponse:
                "La communion est la réception du Corps de Jésus-Christ. Pour bien communier, il faut être à jeun, en état de grâce, avoir de la dévotion, et s'approcher de la sainte table avec humilité.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 3,
            },
          ],
        },
      ],
    },
    {
      id: "mort-ars",
      part: 4,
      title: "La Mort et l'Éternité",
      description: "La mort, le jugement, l'enfer, le purgatoire et le paradis.",
      articles: [
        {
          id: "ars-mort",
          part: 4,
          article: 1,
          title: "La Mort",
          titleShort: "Passage Éternel",
          content: `La mort n'est pas une fin mais un passage vers l'éternité.

Le moment de la mort:
- Est fixé par Dieu pour chacun
- Est inconnu des hommes
- Peut survenir à tout moment
- Doit nous trouver prêts

Le curé d'Ars disait:
- "Nous ne savons ni le jour ni l'heure"
- "Il faut être prêt tous les jours"
- "La mort est l'éternité qui commence"

Comment se préparer:
- Vivre chaque jour comme si c'était le dernier
- Prier sans cesse
- Se confesser régulièrement
- Faire des aumônes
- Pardonner à tous

À la mort:
- L'âme quitte le corps
- Elle est jugée immédiatement par Dieu (jugement particulier)
- Elle va au paradis (si parfaite en grâce), au purgatoire (si imparfaite), ou en enfer (si en état de péché mortel)

Le corps retourne à la terre jusqu'à la résurrection finale.`,
          questions: [
            {
              id: "ars-q11",
              question: "Comment se préparer à la mort ?",
              reponse:
                "Pour se préparer à la mort, il faut vivre chaque jour comme si c'était le dernier, prier sans cesse, se confesser régulièrement, faire des aumônes, et pardonner à tous. La mort peut survenir à tout moment.",
              category: "mort",
              part: 4,
              article: 1,
            },
          ],
        },
        {
          id: "ars-enfer",
          part: 4,
          article: 2,
          title: "L'Enfer",
          titleShort: "Séparation Éternelle",
          content: `L'enfer est la privation éternelle de la vue de Dieu.

L'enfer existe:
- Le Christ l'a enseigné clairement
- L'Église l'a toujours cru
- La raison le confirme (justice de Dieu)

Peines de l'enfer:
- Peine du dam: perte de la vision de Dieu (supplice)
- Peine du sens: souffrances sensibles (feu, froid, etc.)
- Éternité: sans fin, jamais de remède possible

L'enfer est peuplé:
- Des démons (anges déchus)
- Des âmes humaines qui sont mortes en état de péché mortel sans repentir

Le curé d'Ars disait:
- "L'enfer est rempli de gens qui disent: non, non, c'est trop difficile"
- "Le démon n'est pas dangereux quand on le craint"
- "Mais il est très dangereux quand on ne le craint pas"

Pour éviter l'enfer:
- Vivre en état de grâce
- Se confesser régulièrement
- Fuir les occasions de péché
- Prier pour la persévérance finale`,
          questions: [
            {
              id: "ars-q12",
              question: "Qu'est-ce que l'enfer ?",
              reponse:
                "L'enfer est la séparation éternelle d'avec Dieu, où les âmes damnées souffrent la perte de sa vue (peine du dam) et des souffrances sensibles. C'est le châtiment éternel pour ceux qui meurent en état de péché mortel.",
              category: "enfer",
              part: 4,
              article: 2,
            },
          ],
        },
        {
          id: "ars-purgatoire",
          part: 4,
          article: 3,
          title: "Le Purgatoire",
          titleShort: "Purification",
          content: `Le purgatoire est un état de purification pour les âmes qui meurent en état de grâce mais imparfaitement pures.

Pourquoi le purgatoire ?
- Rien de souillé peut entrer au ciel (Apocalypse 21:27)
- La justice de Dieu exige une purification complète
- La miséricorde de Dieu permet cette purification

Nature du purgatoire:
- Temporaire (pas éternel comme l'enfer)
- Souffrance expiatrice pour les péchés véniels
- Attente de la vision béatifique
- Certitude du salut (tous seront sauvés)

Comment aider les âmes du purgatoire:
- La messe (le plus puissant moyen)
- La prière (notamment le chapelet)
- Les indulgences
- Les œuvres de pénitence
- L'aumône

Le curé d'Ars disait: "Les âmes du purgatoire nous attendent. Si nous avions leur foi, nous prierions beaucoup pour elles."

Les âmes au purgatoire souffrent mais sont dans la paix, car elles savent qu'elles seront sauvées.`,
          questions: [
            {
              id: "ars-q13",
              question: "Qu'est-ce que le purgatoire ?",
              reponse:
                "Le purgatoire est un état temporaire de purification pour les âmes qui meurent en état de grâce mais imparfaitement pures. Elles y souffrent pour être purifiées avant d'entrer au ciel. Nous pouvons les aider par nos prières et messes.",
              category: "purgatoire",
              part: 4,
              article: 3,
            },
          ],
        },
        {
          id: "ars-ciel",
          part: 4,
          article: 4,
          title: "Le Paradis",
          titleShort: "Béatitude Éternelle",
          content: `Le paradis est la possession de Dieu face à face pour toujours.

Bonheur du paradis:
- Voir Dieu (vision béatifique)
- L'aimer parfaitement
- Être aimé parfaitement
- Plus de souffrance, ni mort, ni tristesse
- Plus de tentations, ni péché
- Joie ineffable et paix parfaite

Le curé d'Ars disait:
- "Le paradis, c'est la possession de Dieu"
- "Là, on voit Dieu, on l'aime, on le possède"
- "Là, on ne s'ennuie jamais, car on voit Dieu"

Caractéristiques de la vision béatifique:
- Immédiate (sans intermédiaire)
- Claire (sans nuage)
- Directe (face à face)
- Stable (pour toujours)

Pour aller au paradis:
- Mourir en état de grâce
- Avoir accompli la pénitence pour ses péchés
- Avoir persévéré jusqu'à la fin

Le paradis dure pour l'éternité: sans fin.`,
          questions: [
            {
              id: "ars-q14",
              question: "Qu'est-ce que le paradis ?",
              reponse:
                "Le paradis est la possession de Dieu face à face pour toujours. Là, on voit Dieu, on l'aime, on le possède. Il n'y a plus de souffrance, ni mort, ni tristesse, seulement la joie et la paix éternelle.",
              category: "ciel",
              part: 4,
              article: 4,
            },
          ],
        },
      ],
    },
  ],
  glossary: {
    Foi: "Vertu surnaturelle qui nous fait croire les vérités révélées par Dieu",
    Grâce: "Don gratuit de Dieu qui nous aide à faire le bien et à éviter le mal",
    "Péché mortel": "Désobéissance grave en pleine connaissance et consentement",
    "Péché véniel": "Désobéissance légère qui affaiblit la charité sans la détruire",
    Contrition: "Douleur d'avoir offensé Dieu",
    "Vision béatifique": "Vision de Dieu face à face dans le paradis",
    Purgatoire: "État de purification pour les âmes justes avant d'entrer au ciel",
  },
  references: [
    {
      type: "document",
      source: "Saint Jean-Marie Vianney",
      citation: "Sermons et catéchismes",
      url: "https://www.vatican.va/content/jean-marie-vianney",
    },
    {
      type: "theologique",
      source: "Concile de Trente",
      citation: "Décret sur la justification et la pénitence",
      url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
    },
  ],
};
