/*
 * Catéchisme de la Persévérance de la Grâce
 * Auteur: Jean de La Guérie (1656-1734)
 * Date: 1723
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
  name: "Jean de La Guérie",
  dates: "1656-1734",
  role: "Prêtre et théologien français",
};

export const laguerieCatechism: CatechismMetadata = {
  id: "laguerie-perseverance-grace",
  title: "Petit Catéchisme de la Persévérance de la Grâce",
  titleShort: "Catéchisme de La Guérie",
  author: author,
  date: "1723",
  doctrine: "Persévérance de la grâce (théologie catholique du XVIIe siècle)",
  description:
    "Catéchisme sur la doctrine de la persévérance de la grâce, enseignant que ceux qui sont véritablement justifiés ne peuvent perdre la grâce sanctifiante. Rédigé par Jean de La Guérie dans le contexte de la controverse janséniste du XVIIe siècle.",
  context: `Ce catéchisme a été rédigé pendant la controverse janséniste (XVIIe siècle), opposant Cornelius Jansen aux Jésuites. Jean de La Guérie adopte une position proche du jansénisme sur la grâce efficace et la prédestination, tout en restant dans la communion de l'Église catholique.

La doctrine de la persévérance de la grâce affirme que les justifiés persévèrent jusqu'à la fin par l'opération de la grâce divine. Cette position se distingue de la position protestante ("une fois sauvé, toujours sauvé") par son insistance sur la nécessité de la coopération humaine à la grace.

Le catéchisme couvre sept parties:
1. La Foi et la Grâce
2. La Justification
3. La Persévérance
4. Les Sacrements
5. La Prière et les Vertus
6. Les Péchés
7. Les Quatre Dernières Choses`,

  parts: [
    {
      id: "foi-grace",
      part: 1,
      title: "De la Foi et de la Grâce",
      description: "Les fondements de la vie chrétienne: la foi, la grâce, et le péché originel.",
      articles: [
        {
          id: "article-foi",
          part: 1,
          article: 1,
          title: "De la Foi",
          titleShort: "La Foi",
          content:
            "La foi est une vertu surnaturelle par laquelle nous croyons fermement tous les ce que Dieu a révélé, non parce que nous voyons ces vérités avec la lumière naturelle, mais parce que Dieu les a révélées.",
          questions: [
            {
              id: "foi-quest-1",
              question: "Qu'est-ce que la foi ?",
              reponse:
                "La foi est une vertu surnaturelle par laquelle nous croyons fermement tous les ce que Dieu a révélé, non parce que nous voyons ces vérités avec la lumière naturelle, mais parce que Dieu les a révélées.",
              category: "foi",
              part: 1,
              article: 1,
              references: [
                {
                  type: "biblique",
                  source: "Hébreux 11:1",
                  citation:
                    "Or, la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit point.",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+11%3A1&version=LSG",
                },
                {
                  type: "biblique",
                  source: "2 Corinthiens 5:7",
                  citation: "Nous marchons par la foi et non par la vue.",
                  url: "https://www.biblegateway.com/passage/?search=2+Corinthiens+5%3A7&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session VI, Décret sur la justification (1547)",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
                {
                  type: "theologique",
                  source: "Thomas d'Aquin",
                  citation: "Summa Theologiae, II-II, q. 1-7",
                  url: "https://www.corpusthomisticum.org/ii.html",
                },
              ],
            },
          ],
          references: [
            {
              type: "biblique",
              source: "Augustin d'Hippone",
              citation: "De Correptione et Gratia",
              url: "https://www.augustinus.it/",
            },
          ],
        },
        {
          id: "article-grace",
          part: 1,
          article: 2,
          title: "De la Grâce",
          titleShort: "La Grâce",
          content: `La grâce est un don surnaturel accordé par Dieu à l'homme pour sa sanctification et son salut.

Types de grâce:
1. Grâce actualle — Assistance pour une action particulière
2. Grâce sanctifiante — Habitude permanente qui rend l'âme sainte et agréable à Dieu
3. Grâce gratuite — Données extraordinaires (charismes)`,
          questions: [
            {
              id: "grace-quest-1",
              question: "Qu'est-ce que la grâce ?",
              reponse:
                "La grâce est un don surnaturel accordé par Dieu à l'homme pour sa sanctification et son salut.",
              category: "grace",
              part: 1,
              article: 2,
              references: [
                {
                  type: "biblique",
                  source: "Éphésiens 2:8-9",
                  citation: "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi.",
                  url: "https://www.biblegateway.com/passage/?search=%C3%89ph%C3%A9siens+2%3A8-9&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Tite 2:11",
                  citation:
                    "La grâce de Dieu, source de salut pour tous les hommes, a été manifestée.",
                  url: "https://www.biblegateway.com/passage/?search=Tite+2%3A11&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 15:10",
                  citation: "Par la grâce de Dieu, je suis ce que je suis.",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+15%3A10&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-peche-originel",
          part: 1,
          article: 3,
          title: "Du Péché Originel",
          titleShort: "Le Péché Originel",
          content: `Le péché originel est l'état de privation de la grâce sanctifiante dans lequel tous les hommes naissent à cause de la désobéissance d'Adam.

Conséquences du péché originel:
- Privation de la grâce sanctifiante
- Affaiblissement de la volonté
- Concupiscence (inclination au péché)
- Mortalité et souffrance`,
          questions: [
            {
              id: "peche-originel-quest-1",
              question: "Qu'est-ce que le péché originel ?",
              reponse:
                "Le péché originel est l'état de privation de la grâce sanctifiante dans lequel tous les hommes naissent à cause de la désobéissance d'Adam.",
              category: "peche-originel",
              part: 1,
              article: 3,
              references: [
                {
                  type: "biblique",
                  source: "Romains 5:12",
                  citation:
                    "C'est pourquoi, comme par un seul homme le péché est entré dans le monde, et par le péché la mort...",
                  url: "https://www.biblegateway.com/passage/?search=Romains+5%3A12&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Psaume 51:7",
                  citation:
                    "Voici, je suis né dans l'iniquité, et ma mère m'a conçu dans le péché.",
                  url: "https://www.biblegateway.com/passage/?search=Psaume+51%3A7&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "justification",
      part: 2,
      title: "De la Justification",
      description:
        "La justification comme action divine rendant juste le pécheur, et la nécessité absolue de la grâce.",
      articles: [
        {
          id: "article-necessite-grace",
          part: 2,
          article: 4,
          title: "De la Nécessité de la Grâce",
          titleShort: "Nécessité de la Grâce",
          content: `La grâce est nécessaire car, depuis le péché originel, l'homme ne peut ni se justifier ni faire aucun mérite pour le salut sans l'assistance divine.

Principes:
1. L'homme ne peut pas se sauver par ses propres forces
2. La grâce précède toujours toute bonne œuvre
3. La coopération humaine à la grâce est elle-même un don de Dieu`,
          questions: [
            {
              id: "necessite-grace-quest-1",
              question: "Pourquoi la grâce est-elle nécessaire ?",
              reponse:
                "La grâce est nécessaire car, depuis le péché originel, l'homme ne peut ni se justifier ni faire aucun mérite pour le salut sans l'assistance divine.",
              category: "justification",
              part: 2,
              article: 4,
              references: [
                {
                  type: "biblique",
                  source: "Jean 15:5",
                  citation: "Sans moi, vous ne pouvez rien faire.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+15%3A5&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Romains 8:8",
                  citation: "Ceux qui vivent selon la chair ne sauraient plaire à Dieu.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+8%3A8&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Philippiens 2:13",
                  citation: "C'est Dieu qui opère en vous le vouloir et le faire.",
                  url: "https://www.biblegateway.com/passage/?search=Philippiens+2%3A13&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-justification",
          part: 2,
          article: 5,
          title: "De la Justification",
          titleShort: "La Justification",
          content: `La justification est l'action par laquelle Dieu rend juste le pécheur, en lui pardonnant ses péchés et en lui infusant la grâce sanctifiante.

Étapes de la justification:
1. Préparation — L'homme est appelé par la grâce
2. Mouvement de foi — Adhésion à la vérité révélée
3. Contrition — Douleur d'avoir offensé Dieu
4. Espérance — Confiance en la miséricorde divine
5. Justification proprement dite — Infusion de la grâce`,
          questions: [
            {
              id: "justification-quest-1",
              question: "Qu'est-ce que la justification ?",
              reponse:
                "La justification est l'action par laquelle Dieu rend juste le pécheur, en lui pardonnant ses péchés et en lui infusant la grâce sanctifiante.",
              category: "justification",
              part: 2,
              article: 5,
              references: [
                {
                  type: "biblique",
                  source: "Romains 3:24",
                  citation:
                    "Ils sont gratuitement justifiés par sa grâce, par le moyen de la rédemption qui est en Jésus-Christ.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+3%3A24&version=LSG",
                },
                {
                  type: "biblique",
                  source: "2 Corinthiens 5:17",
                  citation: "Si quelqu'un est en Christ, il est une nouvelle créature.",
                  url: "https://www.biblegateway.com/passage/?search=2+Corinthiens+5%3A17&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-merites",
          part: 2,
          article: 6,
          title: "Des Mérites",
          titleShort: "Les Mérites",
          content: `Le mérite est le droit à une récompense que l'on acquiert par l'accomplissement d'une bonne œuvre en état de grâce.

Conditions du mérite surnaturel:
1. Œuvre bonne moralement
2. État de grâce
3. Liberté (sans contrainte)
4. Intention droite (pour la gloire de Dieu)`,
          questions: [
            {
              id: "merites-quest-1",
              question: "Qu'est-ce que le mérite ?",
              reponse:
                "Le mérite est le droit à une récompense que l'on acquiert par l'accomplissement d'une bonne œuvre en état de grâce.",
              category: "justification",
              part: 2,
              article: 6,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 25:21",
                  citation:
                    "C'est bien, bon et fidèle serviteur... entre dans la joie de ton maître.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+25%3A21&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 3:8",
                  citation: "Chacun recevra son propre salaire selon son propre travail.",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+3%3A8&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Hébreux 11:6",
                  citation: "Dieu récompense ceux qui le cherchent.",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+11%3A6&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "perseverance",
      part: 3,
      title: "De la Persévérance",
      description:
        "La doctrine de la persévérance de la grâce et les controverses sur la grâce. Examen de l'assurance du salut.",
      articles: [
        {
          id: "article-perseverance",
          part: 3,
          article: 7,
          title: "Doctrine de la Persévérance",
          titleShort: "Persévérance de la Grâce",
          content: `La persévérance de la grâce est la doctrine selon laquelle ceux qui sont une fois véritablement justifiés ne peuvent perdre la grâce sanctifiante et par conséquent la vie éternelle.

Points essentiels:
1. La grâce, une fois infuse, ne peut être perdue
2. Les justifiés persévèrent jusqu'à la fin
3. Cette persévérance est elle-même un don de Dieu`,
          questions: [
            {
              id: "perseverance-quest-1",
              question: "Qu'est-ce que la persévérance de la grâce ?",
              reponse:
                "La persévérance de la grâce est la doctrine selon laquelle ceux qui sont une fois véritablement justifiés ne peuvent perdre la grâce sanctifiante et par conséquent la vie éternelle.",
              category: "perseverance",
              part: 3,
              article: 7,
              references: [
                {
                  type: "biblique",
                  source: "Jean 10:28-29",
                  citation:
                    "Je leur donne la vie éternelle; elles ne périront jamais, et personne ne les ravira de ma main.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+10%3A28-29&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Romains 8:30",
                  citation: "Ceux qu'il a justifiés, il les a aussi glorifiés.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+8%3A30&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Philippiens 1:6",
                  citation:
                    "Celui qui a commencé en vous cette bonne œuvre la parachèvera jusqu'au jour de Jésus-Christ.",
                  url: "https://www.biblegateway.com/passage/?search=Philippiens+1%3A6&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Jean 2:19",
                  citation: "S'ils avaient été des nôtres, ils seraient demeurés avec nous.",
                  url: "https://www.biblegateway.com/passage/?search=1+Jean+2%3A19&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Augustin d'Hippone",
                  citation: "De Correptione et Gratia, chap. 12-13",
                  url: "https://www.augustinus.it/latino/correctione_gratia",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session VI, ch. 15",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
                {
                  type: "theologique",
                  source: "Jansénius",
                  citation: "Augustinus (1640)",
                  url: "https://gallica.bnf.fr/ark:/12148/bpt6k73948b",
                },
              ],
            },
          ],
        },
        {
          id: "controverses-grace",
          part: 3,
          article: 8,
          title: "Controverses sur la Grâce",
          titleShort: "Controverses Jansénistes",
          content: `Débat janséniste vs thomiste:

| Aspect | Position janséniste | Position thomiste/moliniste |
|--------|---------------------|----------------------------|
| Grâce efficace | Toujours intrinèquement efficace | Peut être résistée |
| Liberté | Semi-pélagianisme | Libre arbitre conservé |
| Prédestination | Double prédestination | Prédestination aux grâces |
| Portée de la grâce | Restreinte aux élus | Universelle |

Note historique: Jean de La Guérie écrit dans le contexte de la controverse janséniste (XVIIe siècle), opposant Cornelius Jansen aux Jésuites.`,
        },
        {
          id: "article-assurance",
          part: 3,
          article: 9,
          title: "De l'Assurance du Salut",
          titleShort: "Assurance du Salut",
          content: `L'Église catholique enseigne une confiance raisonnable mais pas une certitude absolue de foi concernant le salut personnel, car l'homme ne peut connaître avec certitude s'il possède la véritable foi.

Distinction importante:
- Certitude de foi (absolue): Appartient à Dieu seul
- Confiance raisonnable: Fondée sur les promesses divines et les signes de foi
- Présomption pécheresse: Croire être sauvé sans conversion véritable`,
          questions: [
            {
              id: "assurance-quest-1",
              question: "Le chrétien peut-il avoir l'assurance de son salut ?",
              reponse:
                "L'Église catholique enseigne une confiance raisonnable mais pas une certitude absolue de foi concernant le salut personnel, car l'homme ne peut connaître avec certitude s'il possède la véritable foi.",
              category: "perseverance",
              part: 3,
              article: 9,
              references: [
                {
                  type: "biblique",
                  source: "1 Jean 5:13",
                  citation:
                    "Je vous ai écrit ces choses, afin que vous sachiez que vous avez la vie éternelle.",
                  url: "https://www.biblegateway.com/passage/?search=1+Jean+5%3A13&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 4:4",
                  citation: "Je ne m'estime pas justifié...",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+4%3A4&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Philippiens 2:12",
                  citation: "Travaillez à votre salut avec crainte et tremblement.",
                  url: "https://www.biblegateway.com/passage/?search=Philippiens+2%3A12&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sacrements",
      part: 4,
      title: "Des Sacrements",
      description: "Les sept sacrements de l'Église catholique comme moyens de grâce.",
      articles: [
        {
          id: "sacrements-general",
          part: 4,
          article: 10,
          title: "Des Sacrements en général",
          titleShort: "Les Sacrements",
          content: `Un sacrement est un signe visible institué par le Christ pour confer la grâce invisible qu'il signifie.

Propriétés des sacrements:
1. Signification (signe sensible)
2. Efficacité (confèrent la grâce)
3. Institution divine (par le Christ)`,
          questions: [
            {
              id: "sacrements-quest-1",
              question: "Qu'est-ce qu'un sacrement ?",
              reponse:
                "Un sacrement est un signe visible institué par le Christ pour confer la grâce invisible qu'il signifie.",
              category: "sacrements",
              part: 4,
              article: 10,
              references: [
                {
                  type: "biblique",
                  source: "Jean 3:5",
                  citation:
                    "Si un homme ne naît d'eau et d'Esprit, il ne peut entrer dans le royaume de Dieu.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+3%3A5&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jean 6:53-54",
                  citation:
                    "Si vous ne mangez la chair du Fils de l'homme, et si vous ne buvez son sang, vous n'avez point la vie en vous.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+6%3A53-54&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "sacrement-bapteme",
          part: 4,
          article: 11,
          title: "Du Baptême",
          titleShort: "Le Baptême",
          content: `Le baptême est le sacrement qui efface le péché originel et les péchés actuels, et fait de nous des enfants de Dieu.

Effets du baptême:
1. Remise du péché originel
2. Infusion de la grâce sanctifiante
3. Caractère indélébile
4. Incorporation à l'Église`,
          questions: [
            {
              id: "bapteme-quest-1",
              question: "Qu'est-ce que le baptême ?",
              reponse:
                "Le baptême est le sacrement qui efface le péché originel et les péchés actuels, et fait de nous des enfants de Dieu.",
              category: "sacrement-bapteme",
              part: 4,
              article: 11,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 28:19",
                  citation:
                    "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+28%3A19&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Actes 2:38",
                  citation:
                    "Repentez-vous, et que chacun de vous soit baptisé au nom de Jésus-Christ, pour le pardon de vos péchés.",
                  url: "https://www.biblegateway.com/passage/?search=Actes+2%3A38&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Romains 6:3-4",
                  citation:
                    "Nous tous qui avons été baptisés en Jésus-Christ, c'est en sa mort que nous avons été baptisés.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+6%3A3-4&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "sacrement-eucharistie",
          part: 4,
          article: 12,
          title: "De l'Eucharistie",
          titleShort: "L'Eucharistie",
          content: `L'Eucharistie est le sacrement du corps et du sang de Jésus-Christ sous les espèces du pain et du vin, institué par le Christ lors de la Cène.`,
          questions: [
            {
              id: "eucharistie-quest-1",
              question: "Qu'est-ce que l'Eucharistie ?",
              reponse:
                "L'Eucharistie est le sacrement du corps et du sang de Jésus-Christ sous les espèces du pain et du vin, institué par le Christ lors de la Cène.",
              category: "sacrement-eucharistie",
              part: 4,
              article: 12,
              references: [
                {
                  type: "biblique",
                  source: "Luc 22:19-20",
                  citation: "Institution de l'Eucharistie",
                  url: "https://www.biblegateway.com/passage/?search=Luc+22%3A19-20&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 11:23-29",
                  citation: "Récit de l'institution et avertissement",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+11%3A23-29&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jean 6:53-58",
                  citation: "Discours sur le pain de vie",
                  url: "https://www.biblegateway.com/passage/?search=Jean+6%3A53-58&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "sacrement-penitence",
          part: 4,
          article: 13,
          title: "De la Pénitence",
          titleShort: "Le Sacrement de Pénitence",
          content: `La pénitence (ou confession) est le sacrement par lequel les péchés commis après le baptême sont pardonnés.

Éléments essentiels:
1. Contrition (douleur du péché)
2. Confession (aveu intégral)
3. Satisfaction (réparation)`,
          questions: [
            {
              id: "penitence-quest-1",
              question: "Qu'est-ce que le sacrement de pénitence ?",
              reponse:
                "La pénitence (ou confession) est le sacrement par lequel les péchés commis après le baptême sont pardonnés.",
              category: "sacrement-penitence",
              part: 4,
              article: 13,
              references: [
                {
                  type: "biblique",
                  source: "Jean 20:22-23",
                  citation: "Ceux à qui vous pardonnerez les péchés, ils leur seront pardonnés.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+20%3A22-23&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jacques 5:16",
                  citation: "Confessez donc vos péchés les uns aux autres.",
                  url: "https://www.biblegateway.com/passage/?search=Jacques+5%3A16&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Luc 15:7",
                  citation: "Parabole de la brebis perdue",
                  url: "https://www.biblegateway.com/passage/?search=Luc+15%3A7&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "sacrement-extreme-onction",
          part: 4,
          article: 14,
          title: "De l'Extrême-Onction",
          titleShort: "L'Extrême-Onction",
          content: `L'extrême-onction (onction des malades) est le sacrement qui fortifie ceux qui sont en danger de mort.`,
          questions: [
            {
              id: "extreme-onction-quest-1",
              question: "Qu'est-ce que l'extrême-onction ?",
              reponse:
                "L'extrême-onction (onction des malades) est le sacrement qui fortifie ceux qui sont en danger de mort.",
              category: "sacrement-extreme-onction",
              part: 4,
              article: 14,
              references: [
                {
                  type: "biblique",
                  source: "Jacques 5:14-15",
                  citation:
                    "Quelqu'un parmi vous est-il malade? Qu'il appelle les anciens de l'Église, et que les anciens prient pour lui, en l'oignant d'huile au nom du Seigneur.",
                  url: "https://www.biblegateway.com/passage/?search=Jacques+5%3A14-15&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "sacrement-ordre",
          part: 4,
          article: 15,
          title: "De l'Ordre",
          titleShort: "Le Sacrement de l'Ordre",
          content: `L'ordre est le sacrement qui confère le pouvoir d'exercer les fonctions sacrées (prêtrise, épiscopat).`,
          questions: [
            {
              id: "ordre-quest-1",
              question: "Qu'est-ce que le sacrement de l'ordre ?",
              reponse:
                "L'ordre est le sacrement qui confère le pouvoir d'exercer les fonctions sacrées (prêtrise, épiscopat).",
              category: "sacrement-ordre",
              part: 4,
              article: 15,
              references: [
                {
                  type: "biblique",
                  source: "Luc 22:19",
                  citation: "Faites ceci en mémoire de moi.",
                  url: "https://www.biblegateway.com/passage/?search=Luc+22%3A19&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Actes 6:6",
                  citation: "Imposition des mains",
                  url: "https://www.biblegateway.com/passage/?search=Actes+6%3A6&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Timothée 4:14",
                  citation: "Imposition des mains pour l'ordination",
                  url: "https://www.biblegateway.com/passage/?search=1+Timoth%C3%A9e+4%3A14&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "sacrement-mariage",
          part: 4,
          article: 16,
          title: "Du Mariage",
          titleShort: "Le Mariage",
          content: `Le mariage est l'union légitime et indissoluble entre un homme et une femme, signifiant l'union du Christ et de l'Église.

Propriétés du mariage:
1. Unité (un seul conjoint)
2. Indissolubilité (jusqu'à la mort)`,
          questions: [
            {
              id: "mariage-quest-1",
              question: "Qu'est-ce que le sacrement de mariage ?",
              reponse:
                "Le mariage est l'union légitime et indissoluble entre un homme et une femme, signifiant l'union du Christ et de l'Église.",
              category: "sacrement-mariage",
              part: 4,
              article: 16,
              references: [
                {
                  type: "biblique",
                  source: "Genèse 2:24",
                  citation: "L'homme quittera son père et sa mère, et s'attachera à sa femme.",
                  url: "https://www.biblegateway.com/passage/?search=Gen%C3%A8se+2%3A24&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 19:6",
                  citation: "Ce que Dieu a joint, l'homme ne le sépare point.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+19%3A6&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Éphésiens 5:31-32",
                  citation:
                    "Ce mystère est grand; je dis cela par rapport au Christ et à l'Église.",
                  url: "https://www.biblegateway.com/passage/?search=%C3%89ph%C3%A9siens+5%3A31-32&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "priere-vertus",
      part: 5,
      title: "De la Prière et des Vertus",
      description:
        "La prière, les vertus théologales et cardinales, et les sept dons du Saint-Esprit.",
      articles: [
        {
          id: "article-priere",
          part: 5,
          article: 17,
          title: "De la Prière",
          titleShort: "La Prière",
          content: `La prière est l'élévation de l'âme vers Dieu pour le louer, le remercier, ou lui demander des grâces.

Types de prière:
1. Adoration — Reconnaître Dieu comme créateur
2. Action de grâce — Remercier pour les bienfaits
3. Demande — Demander les grâces nécessaires
4. Réparation — Demander pardon pour les péchés`,
          questions: [
            {
              id: "priere-quest-1",
              question: "Qu'est-ce que la prière ?",
              reponse:
                "La prière est l'élévation de l'âme vers Dieu pour le louer, le remercier, ou lui demander des grâces.",
              category: "priere",
              part: 5,
              article: 17,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 7:7",
                  citation: "Demandez, et l'on vous donnera.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+7%3A7&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Luc 18:1",
                  citation: "Il faut toujours prier, et ne point se relâcher.",
                  url: "https://www.biblegateway.com/passage/?search=Luc+18%3A1&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Thessaloniciens 5:17",
                  citation: "Priez sans cesse.",
                  url: "https://www.biblegateway.com/passage/?search=1+Thessaloniciens+5%3A17&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Philippiens 4:6",
                  citation:
                    "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications.",
                  url: "https://www.biblegateway.com/passage/?search=Philippiens+4%3A6&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-vertus-theologales",
          part: 5,
          article: 18,
          title: "Des Vertus Théologales",
          titleShort: "Vertus Théologales",
          content: `Les vertus théologales sont la foi, l'espérance et la charité. Elles sont appelées théologales parce qu'elles ont Dieu pour objet.`,
          questions: [
            {
              id: "esperance-quest-1",
              question: "Qu'est-ce que l'espérance ?",
              reponse:
                "L'espérance est la vertu par laquelle nous désirons et attendons de Dieu la vie éternelle et les grâces nécessaires pour l'obtenir.",
              category: "vertus-theologales",
              part: 5,
              article: 18,
              references: [
                {
                  type: "biblique",
                  source: "Romains 15:13",
                  citation:
                    "Que le Dieu de l'espérance vous remplisse de toute joie et de toute paix.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+15%3A13&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Hébreux 6:19",
                  citation:
                    "Cette espérance, nous la possédons comme une ancre de l'âme, sûre et solide.",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+6%3A19&version=LSG",
                },
              ],
            },
            {
              id: "charite-quest-1",
              question: "Qu'est-ce que la charité ?",
              reponse:
                "La charité est la vertu reine par laquelle nous aimons Dieu par-dessus toute chose et notre prochain comme nous-mêmes pour l'amour de Dieu.",
              category: "vertus-theologales",
              part: 5,
              article: 18,
              references: [
                {
                  type: "biblique",
                  source: "1 Corinthiens 13:1-13",
                  citation: "Hymne à la charité",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+13%3A1-13&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 22:37-40",
                  citation: "Le grand commandement",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+22%3A37-40&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Jean 4:8",
                  citation: "Dieu est amour.",
                  url: "https://www.biblegateway.com/passage/?search=1+Jean+4%3A8&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jean 13:34",
                  citation: "Je vous donne un commandement nouveau: Aimez-vous les uns les autres.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+13%3A34&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-vertus-cardinales",
          part: 5,
          article: 19,
          title: "Des Vertus Morales (Cardinales)",
          titleShort: "Vertus Cardinales",
          content: `Les vertus cardinales sont les vertus morales fondamentales : prudence, justice, force, tempérance.

| Vertu | Définition |
|-------|------------|
| Prudence | Discernement du bien et du mal |
| Justice | Donner à chacun ce qui lui est dû |
| Force | Courage dans l'épreuve |
| Tempérance | Modération dans les plaisirs`,
          questions: [
            {
              id: "vertus-cardinales-quest-1",
              question: "Quelles sont les vertus cardinales ?",
              reponse:
                "Les vertus cardinales sont les vertus morales fondamentales: prudence, justice, force, tempérance.",
              category: "vertus-cardinales",
              part: 5,
              article: 19,
              references: [
                {
                  type: "theologique",
                  source: "Thomas d'Aquin",
                  citation: "Summa Theologiae, II-II, q. 47-170",
                  url: "https://www.corpusthomisticum.org/ii.html",
                },
              ],
            },
          ],
        },
        {
          id: "dons-saint-esprit",
          part: 5,
          article: 20,
          title: "Des Sept Dons du Saint-Esprit",
          titleShort: "Dons du Saint-Esprit",
          content: `Les sept dons du Saint-Esprit sont des dispositions permanentes qui rendent l'âme docile à suivre les inspirations divines:

1. Sagesse — Goût des choses de Dieu
2. Intelligence — Intelligence des mystères révélés
3. Conseil — Aide dans les décisions difficiles
4. Force — Courage pour témoigner de la foi
5. Science — Connaissance du créé et du Créateur
6. Piété — Filialité envers Dieu
7. Crainte de Dieu — Respect filial, non servile`,
          questions: [
            {
              id: "dons-esprit-quest-1",
              question: "Quels sont les dons du Saint-Esprit ?",
              reponse:
                "Les sept dons du Saint-Esprit sont des dispositions permanentes qui rendent l'âme docile à suivre les inspirations divines.",
              category: "vertus",
              part: 5,
              article: 20,
              references: [
                {
                  type: "biblique",
                  source: "Ésaïe 11:2-3",
                  citation: "Prophétie sur les dons de l'Esprit",
                  url: "https://www.biblegateway.com/passage/?search=%C3%89sa%C3%AFe+11%3A2-3&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 12:4-11",
                  citation: "Diversité des charismes",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+12%3A4-11&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "peches",
      part: 6,
      title: "Des Péchés",
      description:
        "La nature du péché, les distinctions entre péché mortel et véniel, et les péchés contre le Saint-Esprit.",
      articles: [
        {
          id: "article-peche-mortel",
          part: 6,
          article: 21,
          title: "Du Péché Mortel et Véniel",
          titleShort: "Péché Mortel et Véniel",
          content: `Le péché mortel est une transgression grave de la loi divine qui rompt l'amitié avec Dieu et mérite la mort éternelle.

Conditions du péché mortel:
1. Matière grave — Commandement important violé
2. Pleine connaissance — Conscience du mal commis
3. Consentement plein et entier — Volonté délibérée

Le péché véniel est une transgression légère de la loi divine qui affaiblit la charité sans la détruire.`,
          questions: [
            {
              id: "peche-mortel-quest-1",
              question: "Qu'est-ce que le péché mortel ?",
              reponse:
                "Le péché mortel est une transgression grave de la loi divine qui rompt l'amitié avec Dieu et mérite la mort éternelle.",
              category: "peche-mortel",
              part: 6,
              article: 21,
              references: [
                {
                  type: "biblique",
                  source: "1 Jean 5:16-17",
                  citation: "Distinction entre péché mortel et péché qui ne mène pas à la mort",
                  url: "https://www.biblegateway.com/passage/?search=1+Jean+5%3A16-17&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 5:19",
                  citation: "Hiérarchie des commandements",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+5%3A19&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jacques 2:10",
                  citation:
                    "Quiconque observe toute la loi, mais pèche contre un seul commandement, devient coupable de tous.",
                  url: "https://www.biblegateway.com/passage/?search=Jacques+2%3A10&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-peche-esprit",
          part: 6,
          article: 22,
          title: "Des Péchés Contre le Saint-Esprit",
          titleShort: "Péché contre le Saint-Esprit",
          content: `Le péché contre le Saint-Esprit est l'impénitence finale, le refus obstiné de se convertir jusqu'à la mort. Ce péché n'est pas pardonné parce que le pécheur refuse la miséricorde.`,
          questions: [
            {
              id: "peche-esprit-quest-1",
              question: "Qu'est-ce que le péché contre le Saint-Esprit ?",
              reponse:
                "Le péché contre le Saint-Esprit est l'impénitence finale, le refus obstiné de se convertir jusqu'à la mort.",
              category: "peche-esprit",
              part: 6,
              article: 22,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 12:31-32",
                  citation:
                    "Toute espèce de péché et de blasphème sera pardonnée... mais le blasphème contre l'Esprit ne sera point pardonné.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+12%3A31-32&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Hébreux 6:4-6",
                  citation: "Impossibilité de renouveler par la pénitence ceux qui sont tombés",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+6%3A4-6&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Hébreux 10:26-27",
                  citation: "Le péché volontaire après avoir connu la vérité",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+10%3A26-27&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-orgueil",
          part: 6,
          article: 23,
          title: "Du Péché d'Orgueil",
          titleShort: "L'Orgueil",
          content: `L'orgueil est le péché originel de Lucifer et la racine de tous les péchés. Il consiste à s'attribuer à soi-même le bien qui vient de Dieu.`,
          questions: [
            {
              id: "orgueil-quest-1",
              question: "Qu'est-ce que l'orgueil ?",
              reponse:
                "L'orgueil est le péché originel de Lucifer et la racine de tous les péchés. Il consiste à s'attribuer à soi-même le bien qui vient de Dieu.",
              category: "peches",
              part: 6,
              article: 23,
              references: [
                {
                  type: "biblique",
                  source: "Proverbes 16:18",
                  citation: "La précipitation devant la chute, et l'orgueil devant l'écueil.",
                  url: "https://www.biblegateway.com/passage/?search=Proverbes+16%3A18&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jacques 4:6",
                  citation: "Dieu résiste aux orgueilleux, mais il fait grâce aux humbles.",
                  url: "https://www.biblegateway.com/passage/?search=Jacques+4%3A6&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Luc 14:11",
                  citation: "Quiconque s'élève sera abaissé.",
                  url: "https://www.biblegateway.com/passage/?search=Luc+14%3A11&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "dernieres-choses",
      part: 7,
      title: "Des Quatre Dernières Choses",
      description:
        "La mort, le jugement, l'enfer, le purgatoire et le ciel: les \"quatre dernières choses\" de l'eschatologie.",
      articles: [
        {
          id: "article-mort",
          part: 7,
          article: 24,
          title: "De la Mort",
          titleShort: "La Mort",
          content: `La mort est la séparation de l'âme et du corps. Elle est la conséquence du péché originel mais a été vaincue par le Christ.`,
          questions: [
            {
              id: "mort-quest-1",
              question: "Qu'est-ce que la mort ?",
              reponse:
                "La mort est la séparation de l'âme et du corps. Elle est la conséquence du péché originel mais a été vaincue par le Christ.",
              category: "mort",
              part: 7,
              article: 24,
              references: [
                {
                  type: "biblique",
                  source: "Hébreux 9:27",
                  citation: "Il est réservé aux hommes de mourir une seule fois.",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+9%3A27&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Sagesse 1:14",
                  citation: "Dieu n'a point fait la mort.",
                  url: "https://www.biblegateway.com/passage/?search=Sagesse+1%3A14&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 15:54-57",
                  citation: "O mort, où est ta victoire?",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+15%3A54-57&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Romains 6:23",
                  citation: "Le salaire du péché, c'est la mort.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+6%3A23&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-jugement",
          part: 7,
          article: 25,
          title: "Du Jugement",
          titleShort: "Le Jugement",
          content: `Le jugement particulier est le moment où chaque âme, immédiatement après la mort, est jugée par Dieu selon ses œuvres.

Le jugement universel (dernier jugement) aura lieu à la fin des temps, quand le Christ reviendra dans la gloire.`,
          questions: [
            {
              id: "jugement-quest-1",
              question: "Qu'est-ce que le jugement particulier ?",
              reponse:
                "Le jugement particulier est le moment où chaque âme, immédiatement après la mort, est jugée par Dieu selon ses œuvres.",
              category: "jugement",
              part: 7,
              article: 25,
              references: [
                {
                  type: "biblique",
                  source: "Hébreux 9:27",
                  citation:
                    "Il est réservé aux hommes de mourir une seule fois, après quoi vient le jugement.",
                  url: "https://www.biblegateway.com/passage/?search=H%C3%A9breux+9%3A27&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 25:31-46",
                  citation: "Parabole du jugement dernier",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+25%3A31-46&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Romains 14:10",
                  citation: "Nous comparaîtrons tous devant le tribunal de Dieu.",
                  url: "https://www.biblegateway.com/passage/?search=Romains+14%3A10&version=LSG",
                },
                {
                  type: "biblique",
                  source: "2 Corinthiens 5:10",
                  citation: "Il faut que nous soyons tous manifestés devant le tribunal de Christ.",
                  url: "https://www.biblegateway.com/passage/?search=2+Corinthiens+5%3A10&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-enfer",
          part: 7,
          article: 26,
          title: "De l'Enfer",
          titleShort: "L'Enfer",
          content: `L'enfer est la séparation éternelle d'avec Dieu, où les âmes des pécheurs mortels sans repentir souffrent la peine du dam (perte de la vue de Dieu) et éventuellement la peine du sens (souffrance sensible).`,
          questions: [
            {
              id: "enfer-quest-1",
              question: "Qu'est-ce que l'enfer ?",
              reponse:
                "L'enfer est la séparation éternelle d'avec Dieu, où les âmes des pécheurs mortels sans repentir souffrent la peine du dam (perte de la vue de Dieu) et éventuellement la peine du sens (souffrance sensible).",
              category: "enfer",
              part: 7,
              article: 26,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 13:42",
                  citation: "Ils seront jetés dans la fournaise ardente.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+13%3A42&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Matthieu 25:41",
                  citation: "Retirez-vous de moi, maudits, allez dans le feu éternel.",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+25%3A41&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Apocalypse 21:8",
                  citation:
                    "Mais pour les lâches, les incrédules... leur part sera dans l'étang de feu.",
                  url: "https://www.biblegateway.com/passage/?search=Apocalypse+21%3A8&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Marc 9:48",
                  citation: "là où leur ver ne meurt point, et où le feu ne s'éteint point.",
                  url: "https://www.biblegateway.com/passage/?search=Marc+9%3A48&version=LSG",
                },
              ],
            },
          ],
        },
        {
          id: "article-purgatoire",
          part: 7,
          article: 27,
          title: "Du Purgatoire",
          titleShort: "Le Purgatoire",
          content: `Le purgatoire est l'état où les âmes des justifiés qui meurent avec des fautes vénielles non expiées ou sans avoir satisfait pleinement pour leurs péchés sont purifiées avant d'entrer au ciel.`,
          questions: [
            {
              id: "purgatoire-quest-1",
              question: "Qu'est-ce que le purgatoire ?",
              reponse:
                "Le purgatoire est l'état où les âmes des justifiés qui meurent avec des fautes vénielles non expiées ou sans avoir satisfait pleinement pour leurs péchés sont purifiées avant d'entrer au ciel.",
              category: "purgatoire",
              part: 7,
              article: 27,
              references: [
                {
                  type: "biblique",
                  source: "2 Maccabées 12:46",
                  citation:
                    "C'est ainsi qu'il pensait de la résurrection: car s'il n'avait pas espéré que ceux qui étaient morts ressusciteraient, il était superflu et sot de prier pour les morts.",
                  url: "https://www.biblegateway.com/passage/?search=2+Maccab%C3%A9es+12%3A46&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 3:13-15",
                  citation:
                    "L'œuvre de chacun sera manifestée... Si l'œuvre de quelqu'un brûle, il perdra sa récompense; mais lui-même sera sauvé, mais comme à travers le feu.",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+3%3A13-15&version=LSG",
                },
                {
                  type: "theologique",
                  source: "Concile de Trente",
                  citation: "Session XXV, Décret sur le purgatoire (1563)",
                  url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
                },
              ],
            },
          ],
        },
        {
          id: "article-ciel",
          part: 7,
          article: 28,
          title: "du Ciel",
          titleShort: "Le Ciel",
          content: `Le ciel est la vision béatifique, la contemplation face à face de Dieu dans l'éternité, où les justes jouissent du bonheur parfait.

Caractéristiques du ciel:
1. Vision béatifique (voir Dieu face à face)
2. Béatitude parfaite (joie complète)
3. Immortalité (plus de mort ni souffrance)
4. Communion avec les anges et les saints`,
          questions: [
            {
              id: "ciel-quest-1",
              question: "Qu'est-ce que le ciel ?",
              reponse:
                "Le ciel est la vision béatifique, la contemplation face à face de Dieu dans l'éternité, où les justes jouissent du bonheur parfait.",
              category: "ciel",
              part: 7,
              article: 28,
              references: [
                {
                  type: "biblique",
                  source: "Matthieu 5:8",
                  citation: "Heureux ceux qui ont le cœur pur, car ils verront Dieu!",
                  url: "https://www.biblegateway.com/passage/?search=Matthieu+5%3A8&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Corinthiens 13:12",
                  citation:
                    "Car nous voyons maintenant au moyen d'un miroir, d'une manière obscure, mais alors nous verrons face à face.",
                  url: "https://www.biblegateway.com/passage/?search=1+Corinthiens+13%3A12&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Apocalypse 21:4",
                  citation: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus.",
                  url: "https://www.biblegateway.com/passage/?search=Apocalypse+21%3A4&version=LSG",
                },
                {
                  type: "biblique",
                  source: "Jean 17:3",
                  citation:
                    "La vie éternelle, c'est qu'ils te connaissent, toi, le seul vrai Dieu.",
                  url: "https://www.biblegateway.com/passage/?search=Jean+17%3A3&version=LSG",
                },
                {
                  type: "biblique",
                  source: "1 Jean 3:2",
                  citation: "Nous lui serons semblables, parce que nous le verrons tel qu'il est.",
                  url: "https://www.biblegateway.com/passage/?search=1+Jean+3%3A2&version=LSG",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  glossary: {
    "Grâce actualle": "Assistance de Dieu pour une action particulière",
    "Grâce sanctifiante": "Habitude permanente rendant l'âme sainte",
    Justification: "Action par laquelle Dieu rend juste le pécheur",
    Mérite: "Droit à récompense acquis par les œuvres en état de grâce",
    Persévérance: "Capacité de rester en grâce jusqu'à la fin",
    "Vision béatifique": "Contemplation de Dieu face à face dans l'éternité",
    "Péché mortel": "Péché grave qui détruit la charité",
    "Péché véniel": "Péché léger qui affaiblit la charité sans la détruire",
  },
  references: [
    {
      type: "document",
      source: "Catéchisme de l'Église Catholique",
      citation: "Magistère de l'Église",
      url: "https://www.vatican.va/archive/FRA0013/_INDEX.HTM",
    },
    {
      type: "document",
      source: "Concile de Trente",
      citation: "Concile de Trente (1545-1563)",
      url: "https://www.vatican.va/archive/ITA0053/_INDEX.HTM",
    },
  ],
};
