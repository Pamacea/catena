/*
 * Catéchisme de l'Institut du Bon Pasteur
 * Auteur: Abbé Philippe Laguerie (né en 1940)
 * Source: CATECHISME_COMPLET_LAGUERIE.pdf
 * 32 leçons complètes pour adultes
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
  name: "Abbé Philippe Laguerie",
  dates: "né en 1940",
  role: "Fondateur de l'Institut du Bon Pasteur",
};

export const laguerieIBPCatechism: CatechismMetadata = {
  id: "laguerie-institut-bon-pasteur",
  title: "Catéchisme pour Adultes - Institut du Bon Pasteur",
  titleShort: "Catéchisme de l'IBP",
  author: author,
  date: "2006-présent",
  doctrine: "Doctrine catholique traditionnelle selon la forme extraordinaire du rite romain",
  description:
    "Enseignement catéchétique complet de l'Institut du Bon Pasteur fondé par l'Abbé Philippe Laguerie. 32 leçons pour adultes couvrant l'ensemble de la foi catholique.",
  context: `L'Institut du Bon Pasteur (IBP) a été fondé en 2006 par l'Abbé Philippe Laguerie, ancien membre de la Fraternité Sacerdotale Saint-Pie X (FSSPX). Ordonné prêtre en 1979 par Mgr Marcel Lefebvre, l'Abbé Laguerie a servi à Saint-Nicolas du Chardonnet (Paris) avant de fonder l'IBP.

L'Institut a été érigé en société de vie apostolique de droit diocésain par Mgr Ginoux, évêque de Luçon, en 2022, marquant sa régularisation canonique.

Ce catéchisme s'inscrit dans la ligne de la tradition catholique:
- Le Catéchisme du Concile de Trente
- Le Catéchisme de Saint Pie X
- La doctrine thomiste

Les 32 leçons couvrent:
1. La doctrine catholique
2. L'existence de Dieu
3. Les attributs de Dieu
4. Les mystères
5. Le péché originel
6. L'Église (1ère partie)
7. L'Église (2ème partie)
8. Les fins dernières
9. Les sacrements
10. Le baptême
11. L'eucharistie
12. Le sacrifice de la messe
13. Foi et espérance
14. La charité
15. La force
16-32. Autres leçons (virtus, prière, morale, etc.)

Videos disponibles sur YouTube accompagnant ce catéchisme.`,

  parts: [
    {
      id: "introduction",
      part: 0,
      title: "Introduction à la Foi",
      description: "Leçon préliminaire sur la doctrine catholique et la méthode de ce catéchisme.",
      articles: [
        {
          id: "article-doctrine",
          part: 0,
          article: 1,
          title: "La Doctrine Catholique",
          titleShort: "Introduction",
          content: `La doctrine catholique est l'ensemble des vérités que Dieu a révélées et que l'Église enseigne. Ce n'est pas une opinion humaine, mais la vérité révélée.

Caractéristiques de la doctrine catholique:
- Elle est divine dans son origine (Dieu l'a révélée)
- Elle est une dans son objet (une seule vérité, pas de contradictions)
- Elle est surnaturelle (dépasse notre raison mais ne la contredit pas)
- Elle est nécessaire (on ne peut pas être sauvé sans la connaître)

Pour étudier la doctrine catholique:
1. Lire le Catéchisme du Concile de Trente
2. Écouter les enseignements de l'Église
3. Prier pour demander la lumière de l'Esprit Saint`,
          questions: [
            {
              id: "doctrine-quest-1",
              question: "Qu'est-ce que la doctrine catholique ?",
              reponse:
                "La doctrine catholique est l'ensemble des vérités révélées par Dieu que l'Église catholique enseigne. Elle est divine dans son origine, une dans son objet, et surnaturelle.",
              category: "foi",
              part: 0,
              article: 1,
            },
          ],
        },
      ],
    },
    {
      id: "dieu",
      part: 1,
      title: "Dieu et Ses Attributs",
      description:
        "L'existence de Dieu, ses attributs incompréhensibles, et les mystères de la foi.",
      articles: [
        {
          id: "article-existence-dieu",
          part: 1,
          article: 1,
          title: "L'Existence de Dieu",
          titleShort: "Preuves de l'Existence",
          content: `L'existence de Dieu peut être prouvée par la raison naturelle, même si la foi nous donne une certitude plus grande.

Cinq preuves de l'existence de Dieu:

1. Mouvement: Tout ce qui bouge doit être mû par quelque chose. Rien ne se meut tout seul. L'univers est en mouvement (planètes, étoiles, atomes), donc il doit y avoir un premier moteur.

2. Causalité: Tout effet a une cause. On ne peut pas avoir une chaîne infinie de causes. Il doit y avoir une première cause incausée: Dieu.

3. Ordre: L'univers montre un ordre étonnant (lois de la physique, adaptation des êtres vivants). Cet ordre suppose une intelligence ordonnatrice.

4. Finalité: Les êtres naturels tendent vers une fin (l'œil vers la vue, l'acorn vers le chêne). Cette finalité suppose une intelligence suprême.

5. Consentement universel: Tous les peuples de toutes les époques ont cru en des dieux ou en Dieu. Ce consentement universel ne peut être une erreur totale.

Saint Thomas d'Aquin: "Il est nécessaire de poser un premier moteur, cause incausée, laquelle tous appellent Dieu." (Summa Theologiae I, q.2, a.3)`,
          questions: [
            {
              id: "existence-dieu-quest-1",
              question: "Comment prouver l'existence de Dieu ?",
              reponse:
                "L'existence de Dieu se prouve par: le mouvement (premier moteur), la causalité (première cause), l'ordre (intelligence ordonnatrice), la finalité (fin suprême), et le consentement universel de tous les peuples.",
              category: "foi",
              part: 1,
              article: 1,
              references: [
                {
                  type: "theologique",
                  source: "Saint Thomas d'Aquin",
                  citation: "Summa Theologiae I, q.2, a.3",
                  url: "https://www.corpusthomisticum.org/i.html",
                },
                {
                  type: "theologique",
                  source: "Concile du Vatican I",
                  citation: "Dei Filius, Chap. 2 (1870) - Foi et raison",
                  url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_council_18700424_constitutio-dei-filius_fr.html",
                },
              ],
            },
          ],
        },
        {
          id: "article-attributs-dieu",
          part: 1,
          article: 2,
          title: "Les Attributs de Dieu",
          titleShort: "Nature de Dieu",
          content: `Les attributs de Dieu sont ces perfections qui existent en Dieu à un degré infini et qui ne conviennent qu'à Lui seul.

Définition de Dieu (Saint Thomas d'Aquin): "Dieu est l'Être dont l'Essence est d'exister."

Les principaux attributs de Dieu:
1. Toute-puissance: Dieu peut tout faire qui ne contredit pas sa sagesse
2. Ubiquité: Dieu est partout présent
3. Simplicité: Dieu est sans parties, sans composition
4. Infinité: Dieu est sans limite
5. Éternité: Dieu est hors du temps
6. Providence: Dieu conduit chaque chose à sa fin
7. Amour: Dieu est charité infinie

Dieu est un seul Dieu en trois personnes: Père, Fils et Saint-Esprit (Sainte Trinité)`,
          questions: [
            {
              id: "attributs-dieu-quest-1",
              question: "Qu'est-ce que Dieu ?",
              reponse:
                "Dieu est l'Être dont l'Essence est d'exister. Il est infini, éternel, omnipotent, omniprésent, et amour infini. Il est un seul Dieu en trois personnes: le Père, le Fils et le Saint-Esprit.",
              category: "foi",
              part: 1,
              article: 2,
              references: [
                {
                  type: "theologique",
                  source: "Saint Thomas d'Aquin",
                  citation: "Summa Theologiae I, q.3-13",
                  url: "https://www.corpusthomisticum.org/i.html",
                },
                {
                  type: "biblique",
                  source: "Exode 3:14",
                  citation: "Je suis Celui qui suis",
                  url: "https://www.biblegateway.com/passage/?search=Exode+3%3A14&version=LSG",
                },
              ],
            },
            {
              id: "attributs-dieu-quest-2",
              question: "Pourquoi Dieu est-il un en trois ?",
              reponse:
                "Dieu est un seul Dieu en trois personnes: Père, Fils et Saint-Esprit. Les trois personnes ont la même nature divine (une seule essence), mais sont distinctes dans leurs relations. Le Père n'est pas engendré, le Fils est engendré par le Père, le Saint-Esprit procède du Père et du Fils.",
              category: "foi",
              part: 1,
              article: 2,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Tolède XI",
                  citation: "Symbole de Saint Athanase",
                  url: "https://www.newadvent.org/fathers/2813.htm",
                },
                {
                  type: "biblique",
                  source: "Matthieu 28:19",
                  citation: "Baptisez au nom du Père, du Fils et du Saint-Esprit",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+28%3A19&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-mysteres",
          part: 1,
          article: 3,
          title: "Les Mystères",
          titleShort: "Mystères de la Foi",
          content: `Un mystère est une vérité certaine révélée par Dieu, que nous devons croire pour être sauvés, mais qui dépasse notre intelligence.

Caractéristiques d'un mystère:
- C'est une vérité certaine (pas une opinion)
- C'est révélé par Dieu (non découvert par la raison)
- C'est nécessaire pour le salut
- C'est au-dessus de notre raison (mais pas contradictoire)

Les trois principaux mystères:
1. Sainte Trinité: Un seul Dieu en trois personnes
2. Incarnation: Le Fils de Dieu s'est fait homme
3. Rédemption: Le Christ est mort pour nous sauver

D'autres mystères: la grâce, l'enfer, la providence divine.

Saint Augustin: "Credo ut intelligam" - Je crois pour comprendre.`,
          questions: [
            {
              id: "mysteres-quest-1",
              question: "Qu'est-ce qu'un mystère ?",
              reponse:
                "Un mystère est une vérité révélée par Dieu que nous devons croire pour être sauvés, mais qui dépasse notre intelligence. Ce n'est pas quelque chose d'absurde, mais une réalité que nous ne pouvons pas fully comprendre.",
              category: "foi",
              part: 1,
              article: 3,
              references: [
                {
                  type: "theologique",
                  source: "Concile du Vatican I",
                  citation: "Dei Filius, Chap. 4 - Foi et raison",
                  url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_council_18700424_constitutio-dei-filius_fr.html",
                },
              ],
            },
            {
              id: "mysteres-quest-2",
              question: "Quels sont les principaux mystères ?",
              reponse:
                "Les principaux mystères sont: la Sainte Trinité (un seul Dieu en trois personnes), l'Incarnation (le Fils de Dieu fait homme), et la Rédemption (le mort et résurrection du Christ pour notre salut).",
              category: "foi",
              part: 1,
              article: 3,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Chalcédoine",
                  citation: "Décret sur les deux natures du Christ (451)",
                  url: "https://www.ccel.org/ccel/schaff/creeds2.ch.iv.html",
                },
              ],
            },
          ],
        },
        {
          id: "article-peche-originel",
          part: 1,
          article: 4,
          title: "Le Péché Originel",
          titleShort: "La Chute",
          content: `Le péché originel est le péché d'Adam et Ève, nos premiers parents, qui a perdu pour eux et pour toute leur descendance la grâce sanctifiante et les dons préternaturels.

Les différents états possibles de la nature humaine:
- Nature pure: avec dons préternaturels, sans grâce, sans faute (jamais existé)
- Justice originelle: avec grâce, dons préternaturels, sans faute (état d'Adam et Ève avant la chute)
- Nature déchue: sans grâce, sans dons, nature blessée (notre état actuel sans la rédemption)
- Nature restaurée: avec grâce, sans dons, nature blessée (notre état actuel avec la rédemption)

Conséquences du péché originel:
- Perte de la grâce sanctifiante
- Perte des dons préternaturels (impassibilité, immortalité, science, intégrité)
- Nature blessée (intelligence obscurcie, volonté affaiblie, concupiscence)
- Mort et souffrance
- Condamnation à l'enfer (sans la rédemption)

Le péché originel se transmet par la génération, pas par imitation. Seule la Vierge Marie en a été préservée par privilège spécial.`,
          questions: [
            {
              id: "peche-originel-quest-1",
              question: "Qu'est-ce que le péché originel ?",
              reponse:
                "Le péché originel est le péché d'Adam et Ève qui a perdu la grâce et les dons préternaturels pour eux-mêmes et toute leur descendance. Il se transmet à tous les hommes par la génération, sauf la Vierge Marie qui en a été préservée.",
              category: "peche-originel",
              part: 1,
              article: 4,
              references: [
                {
                  type: "biblique",
                  source: "Romains 5:12",
                  citation:
                    "C'est pourquoi, comme par un seul homme le péché est entré dans le monde",
                  url: "https://www.biblegateway.com/passage/?search=Romains+5%3A12&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Décret sur le péché originel (1545)",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
            {
              id: "peche-originel-quest-2",
              question: "Qu'était l'état d'Adam et Ève avant la chute ?",
              reponse:
                "Avant la chute, Adam et Ève étaient en état de justice originelle: ils possédaient la grâce sanctifiante, les dons préternaturels (impassibilité, immortalité, science, intégrité), et étaient dans une amitié parfaite avec Dieu.",
              category: "peche-originel",
              part: 1,
              article: 4,
              references: [
                {
                  type: "theologique",
                  source: "Saint Thomas d'Aquin",
                  citation: "Summa Theologiae I, q.95",
                  url: "https://www.corpusthomisticum.org/i.html",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "eglise",
      part: 2,
      title: "L'Église",
      description: "L'Église fondée par le Christ, sa constitution, ses membres, et sa mission.",
      articles: [
        {
          id: "article-eglise-definition",
          part: 2,
          article: 1,
          title: "Définition de l'Église",
          titleShort: "Qu'est-ce que l'Église ?",
          content: `L'Église est la société de tous les chrétiens, fondée par Jésus-Christ et dirigée par le pape et les évêques.

Deux éléments indissociables:
- Aspect visible: les baptisés unis par la foi, la soumission à l'autorité
- Aspect invisible: l'Âme qui est le Saint-Esprit ou la grâce

L'Église a trois parties:
- Église militante: les chrétiens sur terre
- Église souffrante: les âmes au purgatoire
- Église triomphante: les saints au ciel

Pour appartenir à l'Église militante, il faut:
1. Recevoir le baptême
2. Professer la foi catholique
3. Reconnaître l'autorité de l'Église

L'Église est à la fois:
- Une société visible (organisation hiérarchique)
- Un corps mystique (communion spirituelle)
- Une société parfaite (instituée par le Christ)
- Une société nécessaire (pour le salut)`,
          questions: [
            {
              id: "eglise-quest-1",
              question: "Qu'est-ce que l'Église ?",
              reponse:
                "L'Église est la société de tous les chrétiens, fondée par Jésus-Christ et dirigée par le pape et les évêques. Elle a un aspect visible (les fidèles organisés) et un aspect invisible (la grâce du Saint-Esprit).",
              category: "eglise",
              part: 2,
              article: 1,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session VI, Chap. 15",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
                {
                  type: "biblique",
                  source: "Matthieu 16:18",
                  citation: "Tu es Pierre, et sur cette pierre je bâtirai mon Église",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+16%3A18&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-papet-evêque",
          part: 2,
          article: 2,
          title: "Le Pape et les Évêques",
          titleShort: "Hiérarchie de l'Église",
          content: `Le Christ a donné à son Église une hiérarchie visible pour la diriger: le Pape (successeur de Pierre) et les évêques (successeurs des Apôtres).

Le Pape:
- Évêque de Rome, successeur de Saint Pierre
- Vicaire du Christ sur terre
- Possède l'infaillibilité doctrinale
- A autorité suprême sur toute l'Église

Les Évêques:
- Successeurs des Apôtres
- Collaborateurs du Pape dans le gouvernement de l'Église
- Responsables d'un diocèse (territoire)

La hiérarchie ecclésiastique:
Pape → Cardinaux → Évêques → Prêtres → Diacres → Laïcs

Le pape est: "le serviteur des serviteurs de Dieu" (Saint Grégoire le Grand)`,
          questions: [
            {
              id: "pape-quest-1",
              question: "Qui est le Pape ?",
              reponse:
                "Le Pape est l'évêque de Rome, successeur de Saint Pierre, vicaire du Christ sur terre. Il possède l'infaillibilité doctrinale et a autorité suprême sur toute l'Église.",
              category: "eglise",
              part: 2,
              article: 2,
              references: [
                {
                  type: "theologique",
                  source: "Premier Concile du Vatican",
                  citation: "Pastor Aeternus (1870) - Infaillibilité pontificale",
                  url: "https://www.vatican.va/archive/hist_councils/i_vatican_council/documents/vat-i_council_18700418_-.html",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sacrements",
      part: 3,
      title: "Les Sacrements",
      description: "Les sept sacrements institués par le Christ pour conférer la grâce.",
      articles: [
        {
          id: "article-sacrements-general",
          part: 3,
          article: 1,
          title: "Les Sacrements en général",
          titleShort: "Qu'est-ce qu'un sacrement ?",
          content: `Un sacrement est un signe sensible qui opère ce qu'il signifie (efficace ex opere operato), institué par le Christ pour conférer la grâce.

Caractéristiques d'un sacrement:
1. Signe sensible: quelque chose de visible (eau, huile, pain, etc.)
2. Effet: confère la grâce (augmente ou restaure la grâce sanctifiante)
3. Institution divine: établi par le Christ lui-même

Les sept sacrements:
1. Baptême
2. Confirmation
3. Eucharistie
4. Pénitence (Confession)
5. Onction des malades (Extrême-Onction)
6. Ordre (prêtrise)
7. Mariage

Chaque sacrement a:
- Une matière (eau, huile, pain, vin)
- Une forme (paroles essentielles prononcées par le ministre)
- Un ministre (prêtre ou évêque, sauf le mariage)
- Un sujet (personne baptisée, pénitente, etc.)`,
          questions: [
            {
              id: "sacrements-quest-1",
              question: "Qu'est-ce qu'un sacrement ?",
              reponse:
                "Un sacrement est un signe sensible qui opère ce qu'il signifie, institué par le Christ pour conférer la grâce. Il y a sept sacrements: baptême, confirmation, eucharistie, pénitence, onction des malades, ordre, mariage.",
              category: "sacrements",
              part: 3,
              article: 1,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session VII, Décret sur les sacrements",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
          ],
        },
        {
          id: "article-bapteme",
          part: 3,
          article: 2,
          title: "Le Baptême",
          titleShort: "Porte des Sacrements",
          content: `Le baptême est le premier sacrement, nécessaire de moyen et de précepte pour le salut ("Nul ne peut être sauvé sans renaître d'eau et d'Esprit" - Jean 3:5).

Effets du baptême:
- Effacement du péché originel (et de tous les péchés actuels)
- Infusion de la grâce sanctifiante
- Caractère indélébile (marque ineffaçable)
- Incorporation à l'Église
- Privilège de pouvoir recevoir les autres sacrements

Matière: eau (toute eau non altérée)
Forme: "Je te baptise au nom du Père, et du Fils, et du Saint-Esprit"
Ministre: prêtre ou diacre (en cas de nécessité)

Le baptême ne peut être réitéré (car le caractère est indélébile).`,
          questions: [
            {
              id: "bapteme-quest-1",
              question: "Pourquoi le baptême est-il nécessaire ?",
              reponse:
                "Le baptême est nécessaire car c'est la porte d'entrée dans la vie divine. Il efface le péché originel, donne la grâce sanctifiante, nous fait enfants de Dieu et membres de l'Église.",
              category: "sacrement-bapteme",
              part: 3,
              article: 2,
              references: [
                {
                  type: "biblique",
                  source: "Jean 3:5",
                  citation:
                    "Nul ne peut entrer dans le Royaume de Dieu sans naître d'eau et d'Esprit",
                  url: "https://www.biblegateway.com/passage/?search=Jean+3%3A5&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session V, Décret sur le péché originel",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
          ],
        },
        {
          id: "article-eucharistie",
          part: 3,
          article: 3,
          title: "L'Eucharistie",
          titleShort: "Saint Sacrement",
          content: `L'eucharistie est le sacrement du corps et du sang de Jésus-Christ sous les espèces du pain et du vin. C'est le sacrement par excellence, appelé "Saint Sacrement".

Matière: pain de froment (pur) et vin de raisin
Forme: "Ceci est mon corps... Ceci est mon sang..." (prononcée par le prêtre)
Ministre: prêtre validement ordonné

Effets:
- Présence réelle du Christ (corps, âme, sang, divinité)
- Nourriture spirituelle pour l'âme
- Union au Christ et à l'Église (Corpus Christi)

Conditions pour recevoir:
- État de grâce (pas de péché mortel non confessé)
- Jeûne depuis une heure (au moins)
- Croire en la présence réelle (foi)`,
          questions: [
            {
              id: "eucharistie-quest-1",
              question: "Qu'est-ce que l'Eucharistie ?",
              reponse:
                "L'Eucharistie est le sacrement du corps et du sang de JésusChrist sous les espèces du pain et du vin. Le Christ y est réellement présent: corps, âme, sang, divinité.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 3,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XIII, Décret sur l'Eucharistie",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
                {
                  type: "biblique",
                  source: "Jean 6:53-56",
                  citation:
                    "Ma chair est vraiment une nourriture, et mon sang est vraiment une boisson",
                  url: "https://www.biblegateway.com/passage/?search=Jean+6%3A53-56&version=LSG",
                },
              ],
            },
            {
              id: "eucharistie-quest-2",
              question: "Qu'est-ce que la transsubstantiation ?",
              reponse:
                "La transsubstantiation est le changement de toute la substance du pain en corps du Christ et de toute la substance du vin en son sang, par les paroles de la consécration prononcées par le prêtre. Seules les espèces (apparences) du pain et du vin demeurent. C'est un dogme défini par le Concile de Latran IV (1215) et confirmé par le Concile de Trente.",
              category: "sacrement-eucharistie",
              part: 3,
              article: 3,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XIII, chap. IV : « Par la consécration du pain et du vin s'opère le changement de toute la substance du pain en la substance du corps du Christ »",
                },
                {
                  type: "biblique",
                  source: "Matthieu 26:26",
                  citation: "Ceci est mon corps",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+26%3A26&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-messe",
          part: 3,
          article: 4,
          title: "Le Sacrifice de la Messe",
          titleShort: "Saint Sacrifice",
          content: `La messe est le renouvellement non sanglant du sacrifice de la Croix. Le Christ s'offre lui-même au Père sous les espèces du pain et du vin.

Structure de la messe traditionnelle:
1. Prières au bas de l'autel (Aspérges, Kyrie, Gloria, Collecte)
2. Épître (lecture d'une lettre des Apôtres)
3. Évangile (lecture d'un passage des Évangiles)
4. Offertoire (offertoire du pain et du vin)
5. Canon (prière eucharistique, consécration)
6. Notre Père et prières préparatoires
7. Communion (réception du Corps du Christ)
8. Action de grâces et renvoi

La messe est: le même sacrifice que celui de la Croix, offert de manière non sanglante, par le prêtre, au nom de toute l'Église.`,
          questions: [
            {
              id: "messe-quest-1",
              question: "Qu'est-ce que la messe ?",
              reponse:
                "La messe est le sacrifice non sanglant du Christ sur la croix, offert par le prêtre sur l'autel. C'est le mémorial de la Passion et la rend présente à chaque messe.",
              category: "liturgie",
              part: 3,
              article: 4,
              references: [
                {
                  type: "document",
                  source: "Saint Pie V",
                  citation: "Bulle Quo Primum (1570)",
                  url: "https://www.catholiqueculture.org/",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XXII, Doctrine sur le sacrifice de la messe",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
            {
              id: "messe-quest-2",
              question: "En quoi la messe est-elle le même sacrifice que celui de la Croix ?",
              reponse:
                "La messe est le même sacrifice que celui de la Croix parce que la victime est la même (le Christ) et le prêtre principal est le même (le Christ, agissant par le ministère du prêtre). La seule différence est dans la manière d'offrir : sur la Croix, le Christ a versé son sang de manière sanglante ; à la messe, il s'offre de manière non sanglante sous les espèces du pain et du vin. Le sacrifice de la messe n'ajoute rien au sacrifice de la Croix, mais le rend présent et applicable aux fidèles.",
              category: "liturgie",
              part: 3,
              article: 4,
              references: [
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XXII, chap. II : « C'est une seule et même victime ; c'est le même qui offre maintenant par le ministère des prêtres, qui s'est offert lui-même alors sur la croix »",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 11:26",
                  citation: "Toutes les fois que vous mangez ce pain et que vous buvez cette coupe, vous annoncez la mort du Seigneur, jusqu'à ce qu'il vienne",
                },
              ],
            },
          ],
        },
        {
          id: "article-penitence",
          part: 3,
          article: 5,
          title: "Le Sacrement de Pénitence",
          titleShort: "Confession",
          content: `La pénitence (ou confession) est le sacrement institué par le Christ pour remettre les péchés commis après le baptême.

Éléments essentiels (avec contrition parfaite):
1. Examen de conscience: rechercher tous les péchés
2. Contrition: douleur d'avoir offensé Dieu
3. Confession: aveu complet de tous les péchés mortels en espèce et en nombre
4. Absolution: pardon donné par le prêtre au nom du Christ
5. Satisfaction: accomplir les pénitences données

Conditions pour une bonne confession:
- Confession sincère (sans cacher de péchés)
- Confession complète (tous les péchés mortels)
- Confession humble (avec détail suffisant)
- Confession prompte (dans un temps raisonnable)

Fréquence: au moins une fois par an (précepte pascal).
Indulgences: remise de la peine temporelle due aux péchés pardonnés.`,
          questions: [
            {
              id: "penitence-quest-1",
              question: "Comment se confesser ?",
              reponse:
                "Pour se confesser: 1) Faire un examen de conscience pour identifier ses péchés, 2) Avoir une contrition (douleur d'avoir offensé Dieu), 3) Confesser tous les péchés mortels au prêtre, 4) Accomplir les pénitences, 5) Croire en la rémission.",
              category: "sacrement-penitence",
              part: 3,
              article: 5,
            },
            {
              id: "penitence-quest-2",
              question: "Quelle est la différence entre contrition parfaite et contrition imparfaite (attrition) ?",
              reponse:
                "La contrition parfaite est la douleur d'avoir offensé Dieu parce qu'il est infiniment bon et digne d'être aimé par-dessus toute chose. Elle vient de l'amour de charité et remet immédiatement le péché mortel (si elle inclut le désir de se confesser). L'attrition est la douleur d'avoir offensé Dieu à cause de la laideur du péché ou de la crainte de l'enfer. Elle suffit pour recevoir valablement l'absolution sacramentelle.",
              category: "sacrement-penitence",
              part: 3,
              article: 5,
            },
          ],
        },
        {
          id: "article-confirmation",
          part: 3,
          article: 6,
          title: "La Confirmation",
          titleShort: "Sacrement de la Force",
          content: `La confirmation est le sacrement qui donne le Saint-Esprit avec la plénitude de ses dons pour fortifier les baptisés dans la foi.

Effets de la confirmation:
- Réception des sept dons du Saint-Esprit (sagesse, intelligence, conseil, force, science, piété, crainte de Dieu)
- Force pour confesser courageusement la foi
- Perfection du caractère baptismal
- Incorporation plus parfaite à l'Église

Matière: saint chrême (huile + baume) consacré par l'évêque
Formule: "Je te signe du signe de la croix et je te confirme avec le chrême du salut"
Ministre: l'évêque seul (de droit divin)

La confirmation ne peut être reçue qu'une seule fois, car elle imprime un caractère indélébile. Le confirmé devient "soldat du Christ" (miles Christi).`,
          questions: [
            {
              id: "confirmation-quest-1",
              question: "Qu'est-ce que la confirmation ?",
              reponse:
                "La confirmation est le sacrement qui donne le Saint-Esprit avec la plénitude de ses dons pour fortifier les baptisés dans la foi. Elle les rend soldats du Christ et leur donne la force de confesser leur foi.",
              category: "sacrement-confirmation",
              part: 3,
              article: 6,
              references: [
                {
                  type: "biblique",
                  source: "Actes 8:14-17",
                  citation: "Les apôtres imposèrent les mains et ils reçurent le Saint-Esprit.",
                  url: "https://www.biblegateway.com/passage/?search=Actes+8%3A14-17&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session VII, Canons sur la confirmation",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
          ],
        },
        {
          id: "article-extreme-onction",
          part: 3,
          article: 7,
          title: "L'Extrême-Onction",
          titleShort: "Onction des Malades",
          content: `L'extrême-onction (ou onction des malades) est le sacrement qui donne la grâce spéciale aux fidèles en danger de mort par maladie ou vieillesse.

Effets de l'extrême-onction:
- Réconfort de l'âme et parfois du corps
- Résistance contre les dernières tentations du démon
- Rémission des péchés (si le malade ne peut se confesser)
- Préparation à la vie éternelle

Matière: huile d'olive bénite par l'évêque
Formule: "Par cette onction sainte, que le Seigneur vous assiste par la grâce de l'Esprit-Saint"
Ministre: prêtre seulement

Il ne faut pas attendre le dernier moment pour appeler le prêtre. L'Église recommande d'informer le prêtre dès que la maladie est grave.`,
          questions: [
            {
              id: "extreme-onction-quest-1",
              question: "Qu'est-ce que l'extrême-onction ?",
              reponse:
                "L'extrême-onction est le sacrement qui donne la grâce spéciale aux fidèles en danger de mort. Il réconforte l'âme, donne la force contre les dernières tentations, et peut remettre les péchés.",
              category: "sacrement-extreme-onction",
              part: 3,
              article: 7,
              references: [
                {
                  type: "biblique",
                  source: "Jacques 5:14-15",
                  citation:
                    "Quelqu'un est-il malade ? Qu'il appelle les prêtres de l'Église, et que les prêtres prient pour lui, en l'oignant d'huile au nom du Seigneur.",
                  url: "https://www.biblegateway.com/passage/?search=Jacques+5%3A14-15&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-mariage",
          part: 3,
          article: 8,
          title: "Le Mariage",
          titleShort: "Sacrement de Mariage",
          content: `Le mariage chrétien est le sacrement par lequel un homme et une femme baptisés s'engagent mutuellement dans une union indissoluble pour se sanctifier et élever des enfants dans la foi.

Propriétés du mariage chrétien:
1. Unité: un seul homme, une seule femme (monogamie)
2. Indissolubilité: l'union ne peut être rompue que par la mort
3. Sacramentalité: chez les baptisés, le mariage est toujours un sacrement

Fins du mariage:
- Fin primaire: la procréation et l'éducation des enfants
- Fin secondaire: l'aide mutuelle et le remède à la concupiscence

Ministres du sacrement: les époux eux-mêmes (le prêtre est le témoin de l'Église)

Les empêchements de mariage sont réglementés par le droit canonique (consanguinité, lien antérieur, disparité de culte, etc.).`,
          questions: [
            {
              id: "mariage-quest-1",
              question: "Qu'est-ce que le sacrement de mariage ?",
              reponse:
                "Le mariage est le sacrement par lequel un homme et une femme baptisés s'engagent dans une union indissoluble, une, et sanctifiée par le Christ, pour se sanctifier et élever des enfants dans la foi.",
              category: "sacrement-mariage",
              part: 3,
              article: 8,
              references: [
                {
                  type: "biblique",
                  source: "Éphésiens 5:25-32",
                  citation: "Le mariage est le symbole de l'union du Christ et de l'Église.",
                  url: "https://www.biblegateway.com/passage/?search=%C3%89ph%C3%A9siens+5%3A25-32&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XXIV, Doctrine sur le sacrement de mariage",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "commandements",
      part: 7,
      title: "Les Commandements",
      description: "Les dix commandements de Dieu et les commandements de l'Église, loi morale de la vie chrétienne.",
      articles: [
        {
          id: "article-commandements-dieu",
          part: 7,
          article: 1,
          title: "Les Dix Commandements de Dieu",
          titleShort: "Le Décalogue",
          content: `Les dix commandements de Dieu (Décalogue) furent donnés par Dieu à Moïse sur le mont Sinaï (Exode 20). Ils sont la loi morale naturelle gravée dans le cœur de tout homme.

Premier Tableau (devoirs envers Dieu):
1. Un seul Dieu tu adoreras et aimeras parfaitement
2. Le nom de Dieu en vain ne jureras
3. Le jour du dimanche tu sanctifieras

Second Tableau (devoirs envers le prochain):
4. Père et mère honoreras
5. Ne tueras point
6. Le péché de chair tu ne commettras
7. Tu ne déroberas point
8. Ne diras point faux témoignage
9. Le bien d'autrui ne désireras point
10. La femme d'autrui ne convoiteras

Le Christ a résumé toute la loi en deux commandements: "Tu aimeras le Seigneur ton Dieu de tout ton cœur" et "Tu aimeras ton prochain comme toi-même" (Matthieu 22:37-40).`,
          questions: [
            {
              id: "commandements-dieu-quest-1",
              question: "Quels sont les dix commandements de Dieu ?",
              reponse:
                "Les dix commandements sont: 1) Un seul Dieu tu adoreras, 2) Le nom de Dieu en vain ne jureras, 3) Le dimanche tu sanctifieras, 4) Père et mère honoreras, 5) Ne tueras point, 6) Le péché de chair tu ne commettras, 7) Tu ne déroberas point, 8) Pas de faux témoignage, 9) Le bien d'autrui ne désireras, 10) La femme d'autrui ne convoiteras.",
              category: "commandements",
              part: 7,
              article: 1,
              references: [
                {
                  type: "biblique",
                  source: "Exode 20:1-17",
                  citation: "Les dix commandements donnés à Moïse sur le Sinaï.",
                  url: "https://www.biblegateway.com/passage/?search=Exode+20%3A1-17&version=LSG",
                },
              ],
            },
            {
              id: "commandements-dieu-quest-2",
              question: "Les dix commandements engagent-ils tous les hommes ?",
              reponse:
                "Oui, les dix commandements engagent tous les hommes parce qu'ils expriment la loi naturelle gravée par Dieu dans le cœur de chaque créature humaine. Ils ne sont pas une invention humaine mais l'expression de la volonté divine. Leur contenu est universel et immuable : nul ne peut les transgresser sans péché. Le Christ n'a pas aboli la loi mais l'a accomplie et perfectionnée (Mt 5, 17).",
              category: "commandements",
              part: 7,
              article: 1,
              references: [
                {
                  type: "theologique",
                  source: "Catéchisme du Concile de Trente",
                  citation: "Les commandements de Dieu sont universels et immuables, fondés sur la loi naturelle",
                },
                {
                  type: "biblique",
                  source: "Romains 2:14-15",
                  citation: "Quand les païens, qui n'ont pas la loi, font naturellement ce que prescrit la loi, ils sont, eux qui n'ont pas la loi, une loi pour eux-mêmes",
                },
              ],
            },
          ],
        },
        {
          id: "article-commandements-eglise",
          part: 7,
          article: 2,
          title: "Les Commandements de l'Église",
          titleShort: "Loi de l'Église",
          content: `Les commandements de l'Église complètent le Décalogue et précisent les obligations minimales de la vie chrétienne.

Les cinq commandements de l'Église:
1. Assister à la messe entière le dimanche et les fêtes d'obligation
2. Confesser ses péchés au moins une fois par an (précepte pascal)
3. Communier au moins à Pâques (précepte pascal)
4. Jeûner et faire abstinence les jours prescrits (Mercredi des Cendres, Vendredi Saint, vigiles)
5. Subvenir aux besoins matériels de l'Église selon ses moyens

Ces commandements obligent sous peine de péché grave (pour le 1er) ou de péché véniel. Ils sont des lois ecclésiastiques positives visant à aider les fidèles à vivre leur foi.`,
          questions: [
            {
              id: "commandements-eglise-quest-1",
              question: "Quels sont les commandements de l'Église ?",
              reponse:
                "Les commandements de l'Église sont: 1) Assister à la messe le dimanche, 2) Se confesser au moins une fois par an, 3) Communier à Pâques, 4) Jeûner et faire abstinence les jours prescrits, 5) Subvenir aux besoins de l'Église.",
              category: "commandements",
              part: 7,
              article: 2,
            },
          ],
        },
      ],
    },
    {
      id: "dons-saint-esprit",
      part: 8,
      title: "Les Dons du Saint-Esprit et la Vie Spirituelle",
      description: "Les sept dons du Saint-Esprit, les péchés capitaux, et les moyens de persévérance.",
      articles: [
        {
          id: "article-dons-esprit",
          part: 8,
          article: 1,
          title: "Les Sept Dons du Saint-Esprit",
          titleShort: "Dons du Saint-Esprit",
          content: `Les sept dons du Saint-Esprit (Isaïe 11:2-3) sont des habitudes surnaturelles qui perfectionnent les vertus et rendent l'âme docile aux inspirations divines.

Les sept dons:
1. Sagesse — Goût des choses de Dieu, juger tout selon Dieu
2. Intelligence — Pénétrer le sens des mystères révélés
3. Conseil — Discerner la volonté de Dieu dans les cas difficiles
4. Force — Résister avec courage aux ennemis de l'âme
5. Science — Juger sainement des créatures par rapport à Dieu
6. Piété — Cultiver un amour filial envers Dieu et les saints
7. Crainte de Dieu — Redouter d'offenser Dieu et s'éloigner du péché

Les dons sont supérieurs aux vertus car ils mettent l'âme en mouvement sous l'impulsion directe du Saint-Esprit, sans délibération humaine.`,
          questions: [
            {
              id: "dons-esprit-quest-1",
              question: "Quels sont les sept dons du Saint-Esprit ?",
              reponse:
                "Les sept dons sont: sagesse, intelligence, conseil, force, science, piété et crainte de Dieu. Ce sont des habitudes surnaturelles qui rendent l'âme docile aux inspirations du Saint-Esprit.",
              category: "vertus",
              part: 8,
              article: 1,
              references: [
                {
                  type: "biblique",
                  source: "Isaïe 11:2-3",
                  citation: "L'esprit de sagesse et d'intelligence, l'esprit de conseil et de force, l'esprit de science et de piété, et l'esprit de crainte de Dieu.",
                  url: "https://www.biblegateway.com/passage/?search=Isa%C3%AFe+11%3A2-3&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Thomas d'Aquin",
                  citation: "Summa Theologiae, II-II, q. 8-9 (Dons du Saint-Esprit)",
                  url: "https://www.corpusthomisticum.org/ii.html",
                },
              ],
            },
          ],
        },
        {
          id: "article-peches-capitaux",
          part: 8,
          article: 2,
          title: "Les Péchés Capitaux",
          titleShort: "Sept Péchés Capitaux",
          content: `Les péchés capitaux sont les vices dont naissent tous les autres péchés. Ils sont appelés "capitaux" (du latin caput, tête) car ils sont la source et le principe des autres fautes.

Les sept péchés capitaux:
1. Orgueil — Amour désordonné de soi, refus de se soumettre à Dieu
2. Avarice — Attachement désordonné aux biens matériels
3. Luxure — Recherche désordonnée du plaisir charnel
4. Envie — Tristesse du bien d'autrui
5. Gourmandise — Désir désordonné de manger et boire
6. Colère — Désir de vengeance, emportement
7. Paresse — Tristesse face au bien spirituel, refus de la joie divine

À chaque péché capital correspond une vertu qui le combat:
- Orgueil → Humilité
- Avarice → Générosité
- Luxure → Chasteté
- Envie → Charité
- Gourmandise → Tempérance
- Colère → Douceur
- Paresse → Diligence`,
          questions: [
            {
              id: "peches-capitaux-quest-1",
              question: "Quels sont les péchés capitaux ?",
              reponse:
                "Les sept péchés capitaux sont: l'orgueil, l'avarice, la luxure, l'envie, la gourmandise, la colère et la paresse. Ils sont la source de tous les autres péchés.",
              category: "peches",
              part: 8,
              article: 2,
            },
          ],
        },
        {
          id: "article-moyens-perseverance",
          part: 8,
          article: 3,
          title: "Les Moyens de Persévérance",
          titleShort: "Persévérer dans la Grâce",
          content: `Pour persévérer dans la grâce jusqu'à la mort, le chrétien dispose de moyens surnaturels indispensables.

Les principaux moyens de persévérance:
1. La prière — Demander chaque jour la grâce de Dieu
2. Les sacrements — Se confesser et communier fréquemment
3. La méditation — Réfléchir aux vérités éternelles
4. La dévotion à la Sainte Vierge — Le chapelet quotidien
5. La fuite des occasions de péché — S'éloigner des dangers
6. La fréquentation des bons — S'entourer de compagnie vertueuse
7. L'examen de conscience quotidien — Reconnaître ses fautes
8. La mortification — Se priver de plaisirs légitimes par amour de Dieu

Le Christ lui-même nous avertit: "Veillez et priez, pour ne pas entrer en tentation" (Matthieu 26:41). La persévérance est un don de Dieu, mais nous devons coopérer avec sa grâce.`,
          questions: [
            {
              id: "perseverance-moyens-quest-1",
              question: "Quels sont les moyens de persévérance ?",
              reponse:
                "Les moyens de persévérance sont: la prière, les sacrements, la méditation, la dévotion à la Sainte Vierge, la fuite des occasions de péché, la fréquentation des bons, l'examen de conscience quotidien et la mortification.",
              category: "perseverance",
              part: 8,
              article: 3,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 26:41",
                  citation: "Veillez et priez, pour ne pas entrer en tentation.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+26%3A41&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fins-dernieres",
      part: 4,
      title: "Les Fins Dernières",
      description:
        "La mort, le jugement, l'enfer, le purgatoire et le paradis - les quatre dernières choses.",
      articles: [
        {
          id: "article-mort",
          part: 4,
          article: 1,
          title: "La Mort",
          titleShort: "Fin de la vie terrestre",
          content: `La mort n'est pas une fin mais un passage. C'est la séparation de l'âme et du corps.

Aspect de la mort:
- Naturel: conséquence du péché originel
- Physique: cessation des fonctions vitales
- Spirituel: moment du jugement particulier

Le moment de la mort:
- Pour chacun: moment fixé par Dieu
- Incertitude pour nous (mais nous savons qu'elle viendra)
- Préparation constante nécessaire

Le chrétien face à la mort:
- Espérance de la résurrection ("Je suis la résurrection et la vie" - Jean 11:25)
- Confidence en la miséricorde divine
- Union aux souffrances du Christ
- Prière pour les mourants

La mort transforme toutes nos relations: fin des biens matériels, début de la vie éternelle.`,
          questions: [
            {
              id: "mort-quest-1",
              question: "Le chrétien doit-il craindre la mort ?",
              reponse:
                "Le chrétien ne doit pas craindre la mort comme une fin absolue, mais comme un passage vers la vie éternelle. La mort est le moment de notre rencontre définitive avec Dieu. Nous devons y être préparés par une vie de foi et de charité.",
              category: "mort",
              part: 4,
              article: 1,
              references: [
                {
                  type: "biblique",
                  source: "Jean 11:25",
                  citation: "Je suis la résurrection et la vie",
                  url: "https://www.biblegateway.com/passage/?search=Jean+11%3A25&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Catéchisme de l'Église Catholique",
                  citation: "§1010-1014",
                  url: "https://www.vatican.va/archive/FRA0013/_INDEX.HTM",
                },
              ],
            },
          ],
        },
        {
          id: "article-jugement",
          part: 4,
          article: 2,
          title: "Le Jugement",
          titleShort: "Jugement Particulier et Dernier",
          content: `À la mort, chaque âme est jugée par Dieu (jugement particulier). À la fin du monde, il y aura un jugement universel où tous seront jugés publiquement.

Le jugement particulier:
- Moment immédiat après la mort
- Chaque âme voit sa vie passée
- Sentiment de sa condition devant Dieu
- Destination fixée: paradis, enfer, ou purgatoire
- Irévocable (mais pas définitive pour le purgatoire)

Le jugement universel:
- À la fin du monde
- Christ reviendra dans la gloire
- Tous ressusciteront
- Œuvres cachées révélées
- Sentence publique prononcée

Critères du jugement:
- Amour (charité envers les pauvres)
- Foi (adhésion à la vérité révélée)
- Œuvres (mais la foi sans œuvres est morte)
- Miséricorde reçue (et donnée)`,
          questions: [
            {
              id: "jugement-quest-1",
              question: "Qu'est-ce que le jugement particulier ?",
              reponse:
                "Le jugement particulier est le moment immédiat après la mort où chaque âme est jugée par Dieu selon ses œuvres et sa foi. L'âme est alors envoyée au paradis, au purgatoire, ou en enfer.",
              category: "jugement",
              part: 4,
              article: 2,
              references: [
                {
                  type: "biblique",
                  source: "Hébreux 9:27",
                  citation:
                    "Il est réservé aux hommes de mourir une seule fois, après quoi vient le jugement",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+9%3A27&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 25:31-46",
                  citation: "Le jugement dernier (séparation des brebis et des boucs)",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+25%3A31-46&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-enfer",
          part: 4,
          article: 3,
          title: "L'Enfer",
          titleShort: "Séparation Éternelle",
          content: `L'enfer est la séparation éternelle d'avec Dieu, où les âmes des damnés souffrent la peine du dam (perte de la vision de Dieu) et la peine du sens.

L'enfer existe:
- Révélélé par le Christ ("feu éternel préparé pour le diable et ses anges")
- Enseigné par l'Église de toujours
- Raisonnable: la justice de Dieu exige que ceux qui le rejettent éternellement soient séparés de lui

Nature de l'enfer:
- Peine du dam: perte définitive de Dieu (supplice)
- Peine du sens: souffrances sensibles (feu, froid, remords)
- Éternité: pas de fin, pas de remède possible
- Volontaire: choix délibéré de rejeter Dieu

L'enfer est:
- Un mystère (comment la peine peut-elle être éternelle ?)
- Une conséquence du libre arbitre
- Un avertissement sérieux pour nous convertir`,
          questions: [
            {
              id: "enfer-quest-1",
              question: "L'enfer existe-t-il vraiment ?",
              reponse:
                "Oui, l'enfer existe vraiment. Le Christ l'a enseigné clairement, l'Église l'a toujours enseigné. C'est la conséquence logique du libre arbitre: si nous pouvons choisir Dieu pour toujours, nous pouvons aussi le rejeter pour toujours.",
              category: "enfer",
              part: 4,
              article: 3,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 13:42",
                  citation: "Ils seront jetés dans la fournaise ardente",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+13%3A42&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Marc 9:48",
                  citation: "là où leur ver ne meurt point et où le feu ne s'éteint point",
                  url: "https://www.biblegateway.com/passage/?search=Marc+9%3A48&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-purgatoire",
          part: 4,
          article: 4,
          title: "Le Purgatoire",
          titleShort: "Purification",
          content: `Le purgatoire est l'état de purification des âmes des justes qui meurent en état de grâce mais imparfaitement purifiées.

Pourquoi le purgatoire ?
- Rien d'impur peut entrer au ciel (Apocalypse 21:27)
- La justice de Dieu exige une purification complète
- La miséricorde de Dieu permet cette purification

Nature du purgatoire:
- État temporaire (pas éternel)
- Purification par le feu de la charité divine
- Souffrance expiatrice pour les péchés véniels
- Attente de la vision béatifique

À noter:
- Les âmes au purgatoire sont sauvées (certitude de salut)
- Elles peuvent être aidées par nos prières et messes
- La durée varie selon l'état de l'âme

Indulgences: manière d'obtenir remise de peine temporelle par les prières et œuvres de piété.`,
          questions: [
            {
              id: "purgatoire-quest-1",
              question: "Qu'est-ce que le purgatoire ?",
              reponse:
                "Le purgatoire est un état de purification pour les âmes justes qui meurent en état de grâce mais imparfaitement purifiées. Ils y sont purifiés avant d'entrer au ciel.",
              category: "purgatoire",
              part: 4,
              article: 4,
              references: [
                {
                  type: "biblique",
                  source: "2 Maccabées 12:46",
                  citation: "Prière pour les morts",
                  url: "https://www.biblegateway.com/passage/?search=2+Maccab%C3%A9es+12%3A46&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XXV, Décret sur le purgatoire",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
            {
              id: "purgatoire-quest-2",
              question: "Comment pouvons-nous aider les âmes du purgatoire ?",
              reponse:
                "Nous pouvons aider les âmes du purgatoire par les suffrages : la prière, la messe, l'aumône, les indulgences, le jeûne et les autres œuvres de piété offerts pour elles. Le sacrifice de la messe est le moyen le plus efficace, car c'est le sacrifice du Christ lui-même. Le Concile de Trente enseigne que les suffrages des vivants profitent véritablement aux défunts, même si la manière dont ils allègent leurs peines relève du mystère de Dieu.",
              category: "purgatoire",
              part: 4,
              article: 4,
              references: [
                {
                  type: "biblique",
                  source: "2 Maccabées 12:46",
                  citation: "C'est une chose sainte et salutaire de prier pour les morts, afin qu'ils soient délivrés de leurs péchés",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XXV : « Les âmes détenues au purgatoire sont soulagées par les suffrages des fidèles, et surtout par l'acceptable sacrifice de l'autel »",
                },
              ],
            },
          ],
        },
        {
          id: "article-ciel",
          part: 4,
          article: 5,
          title: "Le Paradis (Ciel)",
          titleShort: "Vision Béatifique",
          content: `Le paradis est la vision face à face de Dieu dans l'éternité, où les justes jouissent du bonheur parfait.

Caractéristiques du paradis:
- Vision béatifique (voir Dieu face à face)
- Béatitude parfaite (joie complète sans mélange de tristesse)
- Immortalité (plus de mort, ni souffrance)
- Communion avec les anges et les saints
- Connaissance parfaite (vision de toutes choses dans Dieu)
- Paix éternelle
- Lumière sans ombre

Le paradis est:
- La fin ultime de l'homme créé pour Dieu
- L'accomplissement de tous nos désirs
- La joie ineffable que "l'œil n'a pas vu, ni l'oreille n'a entendu"

Préparation au paradis:
- Vie de foi et de charité
- Usage des sacrements
- Prière et sacrifice
- Union à la volonté de Dieu`,
          questions: [
            {
              id: "ciel-quest-1",
              question: "Qu'est-ce que le paradis ?",
              reponse:
                "Le paradis est la vision face à face de Dieu dans l'éternité, où les justes jouissent d'un bonheur parfait. C'est la fin pour laquelle nous avons été créés.",
              category: "ciel",
              part: 4,
              article: 5,
              references: [
                {
                  type: "biblique",
                  source: "Apocalypse 21:4",
                  citation: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus",
                  url: "https://www.biblegateway.com/passage/?search=Apocalypse+21%3A4&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 13:12",
                  citation: "Nous verrons face à face",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+13%3A12&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "vertus-theologales",
      part: 5,
      title: "Les Vertus Théologales",
      description:
        "Les trois vertus théologales: foi, espérance et charité - fondement de la vie chrétienne.",
      articles: [
        {
          id: "article-foi",
          part: 5,
          article: 1,
          title: "La Foi",
          titleShort: "Vertu de Foi",
          content: `La foi est la vertu théologale par laquelle nous croyons en Dieu et en tout ce qu'il a révélé.

Objet de la foi:
- Dieu lui-même (Sainte Trinité)
- Toutes les vérités révélées (Écriture Sainte, Tradition)
- Tout ce que l'Église enseigne infailliblement

Propriétés de la foi:
- Don surnaturel (donnée par Dieu, pas acquise par raison)
- Infaillible (l'Église ne peut errer dans la foi)
- Nécessaire au salut (sans foi on ne peut être sauvé)
- Unitaire (tous les chrétiens ont la même foi)

Actes de foi:
- Croire (adhésion intellectuelle)
- Confesser (profession publique)
- Vivre (conformité de vie)

La foi doit croître:
- Malgré les épreuves (doutes, tentations)
- En approfondissant (étude, prière, sacrements)`,
          questions: [
            {
              id: "foi-quest-1",
              question: "Qu'est-ce que la foi ?",
              reponse:
                "La foi est la vertu théologale par laquelle nous croyons en Dieu et en tout ce qu'il a révélé. Elle nous fait adhérer intellectuellement aux vérités révélées et nous donne la certitude du salut.",
              category: "foi",
              part: 5,
              article: 1,
              references: [
                {
                  type: "biblique",
                  source: "Hébreux 11:1",
                  citation: "La foi est une ferme assurance des choses qu'on espère",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+11%3A1&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-esperance",
          part: 5,
          article: 2,
          title: "L'Espérance",
          titleShort: "Vertu d'Espérance",
          content: `L'espérance est la vertu théologale par laquelle nous désirons et attendons de Dieu la vie éternelle et les moyens de l'obtenir.

Objet de l'espérance:
- La vie éternelle avec Dieu (béatitude du ciel)
- Les moyens d'y parvenir (grâce, prière, sacrements)
- La bienheureuse éternité

Différence avec la foi:
- Foi: croire ce que Dieu a révélé
- Espérance: attendre ce que Dieu a promis

Propriétés de l'espérance:
- Surnaturelle (donnée par Dieu)
- Inébranlable (malgré les épreuves)
- Joyeuse (confiance en la bonté divine)
- Purificatrice (nous détache des biens terrestres)

L'espérance nous fait:
- Désirer le ciel plus que la terre
- Travailler pour le salut
- Supporter les épreuves avec patience
- Mourir en état de grâce`,
          questions: [
            {
              id: "esperance-quest-1",
              question: "Qu'est-ce que l'espérance ?",
              reponse:
                "L'espérance est la vertu théologale par laquelle nous désirons et attendons de Dieu la vie éternelle et tous les moyens pour y parvenir. Elle nous fait désirer le ciel plus que la terre.",
              category: "vertus-theologales",
              part: 5,
              article: 2,
              references: [
                {
                  type: "biblique",
                  source: "Romains 15:13",
                  citation: "Que le Dieu de l'espérance vous remplisse de joie",
                  url: "https://www.biblegateway.com/passage/?search=Romains+15%3A13&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-charite",
          part: 5,
          article: 3,
          title: "La Charité",
          titleShort: "Reine des Vertus",
          content: `La charité est la plus grande des vertus, la "reine des vertus" (Saint Paul). Elle est aussi une vertu théologale.

Nature de la charité:
- Amour de Dieu par-dessus toute chose
- Amour du prochain pour Dieu
- Désintéressement (donner sans attendre en retour)
- Universelle (pour tous, y compris ennemis)

Commandement de la charité:
"Aimez le Seigneur ton Dieu de tout ton cœur, de toute ton âme, de toute ta force, et de toute ta pensée. Aime ton prochain comme toi-même." (Matthieu 22:37-40)

L'ordre de la charité:
1. Dieu en premier
2. Notre prochain ensuite
3. Nous-mêmes enfin (ordre de bon sens)

Expressions concrètes de la charité:
- Pardon des offenses
- Aumône aux pauvres
- Visite aux malades
- Enseignement, correction, conseil

La charité:
- Éternelle (ne passera jamais)
- Suprême (ne peut dépasser Dieu)
- Notre but ultime (la fin de tous les commandements)`,
          questions: [
            {
              id: "charite-quest-1",
              question: "Qu'est-ce que la charité ?",
              reponse:
                "La charité est l'amour de Dieu et du prochain. C'est la plus grande vertu, la reine des vertus. Elle nous fait aimer Dieu par-dessus tout et notre prochain comme nous-mêmes pour Dieu.",
              category: "vertus-theologales",
              part: 5,
              article: 3,
              references: [
                {
                  type: "biblique",
                  source: "1 Corinthiens 13",
                  citation: "Hymne à la charité",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+13&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 22:37-40",
                  citation: "Le grand commandement",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+22%3A37-40&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "vertus-cardinales",
      part: 6,
      title: "Les Vertus Morales",
      description: "Les vertus cardinales et morales qui nous guident dans la vie quotidienne.",
      articles: [
        {
          id: "article-prudence",
          part: 6,
          article: 1,
          title: "La Prudence",
          titleShort: "Vertu de Prudence",
          content: `La prudence est la vertu cardinale qui discerne le bien du mal et nous indique la bonne action à faire.

La prudence comprend:
- La mémoire (se souvenir des expériences passées)
- L'intelligence (comprendre le présent)
- La providence (prévoir les conséquences)
- La circonspection (exécuter avec soin)

La prudence est:
- La règle de la morale (dirige les autres vertus)
- La vertu du gouvernement (dirige les décisions)
- La vertu de la conduite (dirige l'action)

Exemples de prudence:
- Ne pas précipiter dans les décisions
- Consulter avant d'agir
- Éviter les occasions de péché
- Choisir le bon moment

La prudence s'acquiert par:
- L'expérience (apprendre de ses erreurs)
- L'observation (voir les autres)
- Le conseil (écouter les sages)
- La prière (demander la lumière à Dieu)`,
          questions: [
            {
              id: "prudence-quest-1",
              question: "Qu'est-ce que la prudence ?",
              reponse:
                "La prudence est la vertu qui discerne le bien du mal et nous guide dans nos décisions. Elle inclut la mémoire, l'intelligence, la prévoyance et la circonspection.",
              category: "vertus-cardinales",
              part: 6,
              article: 1,
            },
          ],
        },
        {
          id: "article-justice",
          part: 6,
          article: 2,
          title: "La Justice",
          titleShort: "Vertu de Justice",
          content: `La justice est la vertu cardinale qui donne à chacun ce qui lui est dû.

Formes de justice:
- Commutative: échange équitable
- Distributive: répartition proportionnée
- Légale: respect des lois
- Divine: rétribution selon les œuvres

Principes de justice:
- Égalité: traiter les personnes de manière égale
- Équité: proportionnalité selon le mérite
- Impartialité: sans favoritisme
- Vérité: basée sur les faits

La justice divine:
- Parfaite dans son discernement
- Inévitable dans son application
- Miséricordieuse dans les modes (pardonnement possible)

Notre justice doit être:
- Tempérée (ni trop sévère, ni trop laxiste)
- Miséricordieuse (compassion pour les faibles)
- Ferme (constante dans ses principes)`,
          questions: [
            {
              id: "justice-quest-1",
              question: "Qu'est-ce que la justice ?",
              reponse:
                "La justice est la vertu qui donne à chacun ce qui lui est dû. Elle traite les personnes de manière égale, récompense selon le mérite, et cherche la vérité.",
              category: "vertus-cardinales",
              part: 6,
              article: 2,
            },
          ],
        },
        {
          id: "article-force",
          part: 6,
          article: 3,
          title: "La Force",
          titleShort: "Vertu de Force",
          content: `La force est la vertu cardinale qui nous donne le courage de bien faire et de supporter les difficultés.

La force chrétienne n'est pas:
- La violence (agressivité, domination)
- L'entêtement (dureté insensible)
- L'orgueil (fierté)

La véritable force est:
- Le courage de la vérité (dire la vérité même si coûte)
- La constance dans l'épreuve (persévérer malgré les difficultés)
- Le martyre (mourir pour la foi si nécessaire)
- La patience/endurance (supporter les épreuves quotidiennes)

Exemples de force:
- Les martyrs préférant mourir plutôt que renier le Christ
- Les confesseurs de la foi pendant les persécutions
- Les parents protégeant leurs enfants de la corruption du monde
- La résistance aux tentations`,
          questions: [
            {
              id: "force-quest-1",
              question: "Qu'est-ce que la force chrétienne ?",
              reponse:
                "La force chrétienne n'est pas la violence ou la dureté, mais le courage de la vérité, la constance dans l'épreuve, et la persévérance malgré les difficultés.",
              category: "vertus-cardinales",
              part: 6,
              article: 3,
            },
          ],
        },
        {
          id: "article-temperance",
          part: 6,
          article: 4,
          title: "La Tempérance",
          titleShort: "Vertu de Tempérance",
          content: `La tempérance est la vertu cardinale qui modère nos désirs et nous garde dans un juste milieu.

La tempérance concerne:
- Le plaisir (manger, boire, sexualité)
- Les biens (argent, possessions)
- Les émotions (colère, joie excessive)
- Les opinions (ne pas être arrogant ou fermé)

La tempérance est:
- Pas une indifférence (on ne peut pas tout faire)
- Pas un rigorisme (on peut profiter des biens)
- Une mesure sage entre excès et défaut

Les excès à éviter:
- Gourmandise (excès de manger)
- Ivresse (excès de boire)
- Luxure (excès d'argent)
- Colère emportée
- Vanité (orgueil de sa propre importance)

La tempérance s'oppose aux vices capitaux: l'orgueil (excès d'amour-propre), l'avarice (excès d'amour de l'argent), la luxure (excès de confort).`,
          questions: [
            {
              id: "temperance-quest-1",
              question: "Qu'est-ce que la tempérance ?",
              reponse:
                "La tempérance est la vertu qui modère nos désirs et nous garde dans un juste milieu. Elle n'est ni indifférence ni rigorisme, mais une mesure sage dans l'usage des biens créés.",
              category: "vertus-cardinales",
              part: 6,
              article: 4,
            },
          ],
        },
      ],
    },
  ],
  glossary: {
    "Sainte Trinité": "Un seul Dieu en trois personnes: Père, Fils et Saint-Esprit",
    Incarnation: "Le Fils de Dieu a pris nature humaine dans le sein de la Vierge Marie",
    Rédemption: "Le Christ a racheté les hommes par sa mort et résurrection",
    "Grace sanctifiante": "Don surnaturel qui rend l'âme sainte et agréable à Dieu",
    "Péché originel": "Péché d'Adam qui perd la grâce pour tous ses descendants",
    Sacrement: "Signe visible institué par le Christ pour conférer la grâce",
    Eucharistie: "Sacrement du corps et sang du Christ sous les espèces du pain et du vin",
    Purgatoire: "État de purification des âmes justes avant d'entrer au ciel",
    Infaillibilité: "Le Pape ne peut enseigner l'erreur en matière de foi et de mœurs",
    Ordre: "Sacrement donnant le pouvoir d'exercer les fonctions sacrées",
    Confirmation: "Sacrement qui donne le Saint-Esprit avec la plénitude de ses dons",
    "Extrême-Onction": "Sacrement qui réconforte les fidèles en danger de mort",
    Mariage: "Sacrement d'union indissoluble entre un homme et une femme",
    Décalogue: "Les dix commandements de Dieu donnés à Moïse sur le Sinaï",
    "Péchés capitaux": "Les sept vices sources de tous les autres péchés: orgueil, avarice, luxure, envie, gourmandise, colère, paresse",
    "Dons du Saint-Esprit": "Les sept dons: sagesse, intelligence, conseil, force, science, piété, crainte de Dieu",
  },
  references: [
    {
      type: "document",
      source: "Catéchisme du Concile de Trente",
      citation: "Catéchisme romain pour les paroisses (1566)",
      url: "https://www.catholiqueculture.org/",
    },
    {
      type: "document",
      source: "Catéchisme de Saint Pie X",
      citation: "Catéchisme de la doctrine chrétienne (1910)",
      url: "https://www.catholiqueculture.org/",
    },
    {
      type: "document",
      source: "Institut du Bon Pasteur",
      citation: "Site officiel de l'IBP",
      url: "https://institutdubonpasteur.org/",
    },
    {
      type: "document",
      source: "YouTube",
      citation: "Vidéos d'accompagnement du catéchisme",
      url: "https://youtube.com/@laguerie_ibp",
    },
  ],
};
