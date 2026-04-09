/**
 * Données enrichies pour le livre du Deutéronome
 * Livre V de la Bible - 34 chapitres - Pentateuque
 *
 * Contient:
 * - Résumé complet du livre
 * - Notes de lecture détaillées
 * - Plans des 34 chapitres
 * - Passages clés avec commentaires
 */

import type { BookSummary, BookReadingNotes, ChapterOutline, KeyPassage } from "@/data/types/enriched"

/* ============================================================================
 *
 * RÉSUMÉ DU LIVRE
 *
 * ============================================================================ */

export const deuteronomySummary: BookSummary = {
  id: "deuteronomy",
  name: "Deutéronome",
  frenchName: "Deutéronome",
  abbreviation: "Dt",
  testament: "OLD",
  section: "01-Pentateuque",
  genre: "PENTATEUCH",
  chapters: 34,

  overview: `Le Deutéronome ("seconde loi' en grec) est le cinquième et dernier livre du Pentateuque. Il contient les discours d'adieu de Moïse aux Israélites avant sa mort et leur entrée dans le pays promis.

Le livre se situe à la fin des quarante années de pérégrinations, dans les plaines de Moab. La génération rebelle est morte; la nouvelle génération est prête à entrer. Moïse leur rappelle la loi, l'histoire d'Israël, et les exhorte à l'obéissance.

Le titre ""Deutéronome" ( deuteros nomos) vient de la Septante, signifiant 'répétition de la loi.'" En hébreu, il est intitulé "Elle haddévarim' ('Voici les paroles"), d'après les premiers mots.

Structure du livre:
1. Premier discours (1:1-4:43): Rappel historique
2. Deuxième discours (4:44-26:19): Récapitulation de la loi
3. Troisième discours (27:1-30:20): Bénédictions et malédictions
4. Dernières dispositions (31-34): Succession, cantique, bénédiction, mort de Moïse`,

  authorship: {
    author: "Moïse",
    traditionalView: "La tradition attribue unanimement le Deutéronome à Moïse. Le livre lui-même affirme: «Ce sont ici les paroles que Moïse adressa à tout Israël» (1:1).", evidence: [ "Le livre prétend être les paroles de Moïse",
      "Le NT attribue ces lois à Moïse (Mt 19:7-8; Ac 3:22; Rm 10:5, 19)",
      "Style cohérent avec le reste du Pentateuque",
      "Connaissance détaillée de l'histoire et de la loi"
    ],
    date: "Vers 1406 av. J.-C., à la fin des quarante années dans le désert.",
    circumstances: "Moïse prononce ces discours peu avant sa mort. Ils sont compilés et transmis comme testament spirituel."
  },

  historicalContext: {
    period: "Fin des quarante années de pérégrinations, dans les plaines de Moab.",
    setting: "La génération rebelle est morte. La nouvelle génération, née dans le désert, est prête à entrer.",
    geographicalBackground: "Campés près du Jourdain, en face de Jérico. Prêts à conquérir le pays promis."
  },

  keyThemes: [
    {
      theme: "Alliance",
      explanation: "Le Deutéronome est le document de l'alliance qui renouvelle les engagements entre Dieu et Israël avant l'entrée dans le pays."
    },
    {
      theme: "Obeissance",
      explanation: "'Écoute Israël' (6:4) est le grand commandement. L'obéissance apporte la bénédiction; la désobéissance amène la malédiction (ch. 28)."
    },
    {
      theme: "Amour",
      explanation: "'Tu aimeras l'Éternel ton Dieu de tout ton cœur, de toute ton âme et de toute ta force' (6:5). L'amour est la motivation de l'obéissance."
    },
    {
      theme: "Mémorial",
      explanation: "Moïse rappelle l'histoire d'Israël pour que la nouvelle génération se souvienne des œuvres de Dieu. 'Souviens-toi' est une exhortation fréquente."
    },
    {
      theme: "Choix",
      explanation: "'J'ai mis devant toi la vie et la mort, la bénédiction et la malédiction. Choisis la vie' (30:19). Israël doit choisir quotidiennement."
    },
    {
      theme: "Succession",
      explanation: "Moïse prépare sa succession. Josué sera le nouveau leader. La loi doit être lue tous les sept ans (31:10-13)."
    }
  ],

  keyFigures: [
    {
      name: "Moïse",
      role: "Prophète, libérateur, législateur",
      significance: "Donne ses discours d'adieu. Meurt à 120 ans, sur le mont Nebo, voyant le pays promis mais n'y entrant pas."
    },
    {
      name: "Josué",
      role: "Successeur de Moïse",
      significance: "Rempli de l'Esprit, il conduira Israël dans le pays promis. Il est courageux et fidèle."
    },
    {
      name: "Aaron",
      role: "Souverain sacrificateur",
      significance: "Est mort sur le mont Hor (32:50). Éléazar lui succède. Son fils aîné, Nadab, et Abiram sont morts pour avoir offert un feu étranger."
    },
    {
      name: "Les deux tribus et demi",
      role: "Ruben, Gad, demi-tribu de Manassé",
      significance: "Ont reçu leur héritage à l'est du Jourdain. Ont promis de combattre avec leurs frères (3:18-20)."
    }
  ],

  keyPassages: [
    { reference: "Deutéronome 5", description: "Les Dix Commandements (répétition)" },
    { reference: "Deutéronome 6:4-9", description: "Le Shema Israel: Écoute Israël" },
    { reference: "Deutéronome 7", description: "Élection d'Israël et sainteté" },
    { reference: "Deutéronome 18:15-19", description: "Le prophète comme Moïse" },
    { reference: "Deutéronome 27-28", description: "Bénédictions et malédictions du mont Gerizim et Ébal" },
    { reference: "Deutéronome 30", description: "Retour à l'Éternel et choix de la vie" },
    { reference: "Deutéronome 32", description: "Cantique de Moïse" },
    { reference: "Deutéronome 33", description: "Bénédiction de Moïse sur les tribus" },
    { reference: "Deutéronome 34", description: "Mort de Moïse" }
  ],

  theologicalSignificance: `Le Deutéronome est l'un des livres les plus cités dans le NT. Jésus le cite lors de sa tentation (Mt 4; Lc 4) et résume son message dans le grand commandement (Mt 22:37).

Théologie du Deutéronome:

1. Doctrine de Dieu: Dieu est unique (6:4), saint, fidèle, et juste. Il a élu Israël par amour, non par mérite (7:7-8). Il demande un amour exclusif.

2. Doctrine de l'alliance: Le Deutéronome est le document de l'alliance qui renouvelle les engagements du Sinaï. La relation est conditionnelle: obéissance = bénédiction, désobéissance = malédiction.

3. Doctrine de l'élection: Israël est le peuple élu de Dieu, non par mérite mais par amour (7:7-8). L'élection est pour être une bénédiction aux nations.

4. Éthique: L'éthique du Deutéronome est fondée sur l'amour de Dieu et du prochain. La justice sociale est cruciale: protection des veuves, orphelins, étrangers; jugement équitable; aides aux pauvres.

5. Christologie: Le «prophète comme Moïse» (18:15) est identifié à Christ dans le NT (Ac 3:22; 7:37). Le Deutéronome préfigure le nouveau Moïse qui libère du péché.

6. Exhortation: Le livre est un appel à choisir: «J'ai mis devant toi la vie et la mort... Choisis la vie» (30:19). La foi n'est pas automatique mais un choix quotidien.

Le Deutéronome est le livre le plus cité par Jésus (après les Psaumes et Ésaïe). Il est le fondement de la foi juive et chrétienne. Ses principes—amour de Dieu, justice sociale, obéissance de la foi—sont éternels.`,

  christologicalTypes: [
    {
      type: "Le Prophète comme Moïse",
      antitype: "Jésus-Christ",
      parallels: [ "Prophète suscité du milieu de toi (18:15)",
        "Comme Moïse",
        "Parle tout ce que Dieu commande",
        "Quiconque n'écoutera pas sera retranché", "Identifié par Pierre (Ac 3:22), Étienne (Ac 7:37)"
      ],
      ntReferences: [ "Actes 3:22-23", "Actes 7:37", "Jean 1:21", "Jean 6:14"]
    },
    {
      type: "Le Rocher",
      antitype: "Jésus-Christ",
      parallels: [ "Dieu est le Rocher (32:4)",
        "Il t'engendra dans un pays rocailleux (32:13)", "Il est le Rocher de ton salut (pas cité mais sous-entendu)",
        "Paul identifie le Rocher comme Christ (1 Co 10:4)"
      ],
      ntReferences: [ "1 Corinthiens 10:4", "Matthieu 7:24-27", "1 Pierre 2:4-8"]
    },
    {
      type: "La Ville de Refuge",
      antitype: "Jésus-Christ",
      parallels: [ "Villes de refuge (19:1-13)",
        "Asile pour le meurtrier involontaire",
        "Protection jusqu'au procès", "Christ comme refuge (Hé 6:18)"
      ],
      ntReferences: [ "Hébreux 6:18", "Philippiens 3:9", "Éphésiens 2:12-13"]
    },
    {
      type: "Le Sacrifice",
      antitype: "Jésus-Christ",
      parallels: [ "Sacrifice au lieu que Dieu choisira (12:5-14)",
        "Sacrifice substitutif",
        "Sang expié",
        "Christ comme sacrifice parfait (Hé 9-10)"
      ],
      ntReferences: [ "Hébreux 9-10", "Hébreux 13:10-16", "1 Corinthiens 5:7"]
    }
  ],

  literaryStructure: {
    outline: [
      { section: "Premier discours: Rappel historique", chapters: "1:1-4:43" },
      { section: "Deuxième discours: La loi", chapters: "4:44-26:19" },
      { section: "Troisième discours: Alliance", chapters: "27:1-30:20" },
      { section: "Dernières dispositions", chapters: "31-34" }
    ]
  },

  readingTime: "Environ 2.5 heures pour une lecture normale."
}

/* ============================================================================
 *
 * NOTES DE LECTURE
 *
 * ============================================================================ */

export const deuteronomyReadingNotes: BookReadingNotes = {
  bookId: "deuteronomy",
  introduction: `Le Deutéronome est un livre unique dans le Pentateuque. C'est le testament de Moïse, ses dernières paroles à la génération qui va entrer dans le pays promis.

Moïse a 120 ans. Il a conduit Israël pendant quarante ans. Il ne verra pas le pays promis à cause de son péché (Nb 20:10-12). Avant de mourir, il veut transmettre à la nouvelle génération ce qu'ils doivent savoir.

Le Deutéronome n'est pas une nouvelle loi, mais une répétition ('deuteros nomos') et une application de la loi donnée au Sinaï. Moïse l'adapte à la vie sédentaire dans le pays promis.

Le thème central est l'alliance: Israël est le peuple de l'alliance, lié à Dieu par des promesses et des obligations. L'obéissance apporte la bénédiction; la désobéissance amène la malédiction.

Le livre se termine par la mort de Moïse et la montée de Josué. La parole de Dieu est fidèle; ce qu'il a promis, il l'accomplit.`,

  sections: [
    {
      title: "Rappel historique (1:1-4:43)",
      summary: "Moïse rappelle les quarante années dans le désert, les grâces de Dieu, et les échecs d'Israël.", keyQuotes: [ "L'Éternel, notre Dieu, nous a parlé à Horeb... (1:6)", "Vous n'avez point voulu monter, car vous révoltâtes contre l'ordre de l'Éternel (1:26)", "L'Éternel tonna et descendit sur la montagne (5:4)", "Car je vais mourir dans ce pays, je ne passerai point le Jourdain (4:22)"
      ],
      concepts: [
        { term: "Rappel", explanation: "Moïse rappelle l'histoire pour que la nouvelle génération apprenne des erreurs du passé. 'Souviens-toi' est essentiel à la foi." },
        { term: "Horeb", explanation: "Autre nom du Sinaï. Le lieu de l'alliance. Moïse rappelle les événements fondateurs: la loi, l'alliance, la gloire de Dieu." },
        { term: "Incrédulité", explanation: "La génération précédente a refusé d'entrer. Moïse avertit la nouvelle génération de ne pas répéter leur erreur." }
      ],
      theologicalNotes: "Le rappel historique est essentiel pour la foi. 'Souviens-toi' est un commandement fréquent dans la Bible. La mémoire des œuvres de Dieu nourrit la foi pour l'avenir. Moïse veut que la nouvelle génération ne soit pas incrédule comme leurs parents."
    },
    {
      title: "Le Shema Israel (5:1-6:25)",
      summary: "Les Dix Commandements et le grand commandement d'aimer Dieu.", keyQuotes: [ "Je suis l'Éternel, ton Dieu... Tu n'auras point d'autres dieux devant ma face (5:6-7)", "Tu aimeras l'Éternel, ton Dieu, de tout ton cœur, de toute ton âme et de toute ta force (6:5)", "Ces paroles que je te commande aujourd'huiui seront dans ton cœur (6:6)", "Tu les inculqueras à tes enfants (6:7)",
        "Écris-les sur les poteaux de ta maison et sur tes portes (6:9)"
      ],
      concepts: [
        { term: "Shema", explanation: "'Écoute Israël' (6:4). La confession fondamentale du judaïsme et du christianisme. Déclare l'unicité de Dieu." },
        { term: "Grand Commandement", explanation: "'Tu aimeras l'Éternel ton Dieu de tout ton cœur...' Résumé par Jésus comme le plus grand commandement (Mt 22:37-38)." },
        { term: "Phylactères et mezuzot", explanation: "Porter les paroles sur le front et les mains; les écrire sur les portes. Pratiques juives pour conserver la parole de Dieu." }
      ],
      theologicalNotes: "Le Shema (6:4-9) est le credo du judaïsme et du christianisme: 'Écoute, Israël: l'Éternel, notre Dieu, est le seul Éternel.' L'amour de Dieu de tout le cœur, de toute l'âme, et de toute la force est le plus grand commandement. Jésus le cite comme tel (Mt 22:37) et y ajoute l'amour du prochain (Lv 19:18). La foi commence par l'écoute: 'Écoute Israël.'"
    },
    {
      title: "Élection et sainteté (7:1-11:32)",
      summary: "Dieu a élu Israël par amour. Israël doit être saint et distinct des nations.",
      keyQuotes: [ "Ce n'est point parce que vous êtes plus nombreux... que l'Éternel s'est attaché à vous (7:7)", "C'est parce que l'Éternel vous aime (7:8)", "Vous serez saints, car je suis saint (7:6)",
        "Car vous êtes un peuple saint pour l'Éternel, ton Dieu (7:6)", "Tu consumeras par le feu toutes les villes où tu serviras leurs dieux (12:3)"
      ],
      concepts: [
        { term: "Élection", explanation: "Dieu a choisi Israël par amour, non par mérite. L'élection est un acte gratuit de grâce (7:7-8)." },
        { term: "Sainteté", explanation: "Israël doit être distinct des nations, séparé pour Dieu. Cela inclut la destruction de l'idolâtrie." },
        { term: "Lie unique d'adoration", explanation: "Dieu choisira un seul lieu où il sera adoré (12:5). Centralisation du culte pour éviter les hauts lieux." }
      ],
      theologicalNotes: "L'élection d'Israël est un acte gratuit de Dieu: «ce n'est point parce que vous êtes plus nombreux... c'est parce que l'Éternel vous aime» (7:7-8). L'élection n'est pas pour le privilège mais pour la mission: être une bénédiction aux nations (Gn 12:2-3). La sainteté n'est pas seulement rituelle mais morale: justice sociale, honnêteté, protection des faibles."
    },
    {
      title: "Le prophète comme Moïse (12:1-19:21)",
      summary: "Avertissements contre les faux prophètes et promesse d'un prophète comme Moïse.", keyQuotes: [ "Il ne se trouvera point chez toi... qui pratique la divination (18:10)",
        "Je leur susciterai un prophète... comme toi (18:15)",
        "Je mettrai mes paroles dans sa bouche (18:18)",
        "Si quelqu'un n'écoute pas mes paroles... je lui en demanderai compte (18:19)"
      ],
      concepts: [
        { term: "Faux prophètes", explanation: "Ceux qui prophétisent au nom d'autres dieux, ou qui prophétisent faussement au nom de l'Éternel. Le test: si la parole ne s'accomplit pas, c'est un faux prophète." },
        { term: "Prophète comme Moïse", explanation: "Promesse d'un prophète futur qui sera comme Moïse. Identifié à Christ dans le NT (Ac 3:22; 7:37)." },
        { term: "Villes de refuge", explanation: "Trois villes de chaque côté du Jourdain où le meurtrier involontaire peut trouver asile. Préfigure la sécurité en Christ (Hé 6:18)." }
      ],
      theologicalNotes: "La promesse du prophète comme Moïse (18:15-19) est l'une des plus grandes prophéties messianiques du Deutéronome. Le NT identifie ce prophète à Christ (Ac 3:22; 7:37). Comme Moïse, Christ est libérateur, prophète, médiateur, berger. Les villes de refuge montrent que la justice de Dieu inclut la miséricorde: le meurtrier involontaire a un lieu de sécurité jusqu'au procès. Christ est notre refuge (Hé 6:18)."
    },
    {
      title: "Bénédictions et malédictions (27:1-28:68)",
      summary: "Bénédictions sur le mont Gerizim pour l'obéissance, malédictions sur le mont Ébal pour la désobéissance.", keyQuotes: [ "Si tu obéis à l'Éternel, ton Dieu, voici toutes les bénédictions (28:2)", "Tu seras béni dans la ville et dans les champs (28:3)",
        "L'Éternel fera de toi la tête et non la queue (28:13)", "Mais si tu n'obéis point à l'Éternel... voici toutes les malédictions (28:15)", "Tu seras malheureux dans la ville et dans les champs (28:16)",
        "L'Éternel te ramènera en Égypte sur des navires (28:68)"
      ],
      concepts: [
        { term: "Gerizim et Ébal", explanation: "Deux monts près de Sichem. Bénédictions prononcées sur le Gerizim, malédictions sur l'Ébal. Jos 8:30-35 accomplit cela." },
        { term: "Bénédictions", explanation: "Prospérité, victoire, santé, fécondité, faveur parmi les nations. La bénédiction pour l'obéissance." },
        { term: "Malédictions", explanation: "Maladie, défaite, famine, exil. La malédiction pour la désobéissance. Ces malédictions s'accompliront dans l'histoire d'Israël." }
      ],
      theologicalNotes: "Les bénédictions et malédictions expriment le principe de l'alliance: obéissance = bénédiction, désobéissance = malédiction. C'est le principe de la rétribution théocratique. L'histoire d'Israël confirme ces malédictions: les rois apostats ont amené le jugement; l'exil à Babylone est l'accomplissement de 28:64-68. Pour le chrétien, Christ a porté la malédiction (Ga 3:13-14), et nous bénissons ceux qui nous maudissent (Mt 5:44)."
    },
    {
      title: "Retour et choix de la vie (29:1-30:20)",
      summary: "Exhortation au retour à l'Éternel. Choix entre la vie et la mort.", keyQuotes: [ "Les choses cachées sont à l'Éternel, notre Dieu; les choses révélées sont à nous et à nos enfants (29:29)", "Cette parole est très proche de toi, dans ta bouche et dans ton cœur (30:14)",
        "J'ai mis devant toi la vie et la mort, la bénédiction et la malédiction (30:15)", "Choisis la vie, afin que tu vives (30:19)",
        "Car l'Éternel est ta vie et la longueur de tes jours (30:20)"
      ],
      concepts: [
        { term: "Choses cachées et révélées", explanation: "Nous sommes responsables de ce qui est révélé (la parole). Dieu juge ce qui est caché (le cœur). La révélation est suffisante." },
        { term: "Proximité de la parole", explanation: "La parole n'est pas loin (au ciel, au-delà de la mer). Elle est proche: dans la bouche et le cœur. La foi est accessible." },
        { term: "Choix de la vie", explanation: "Dieu met devant Israël la vie et la mort. Le choix est à eux. Dieu ne force pas mais exhorte à choisir la vie." }
      ],
      theologicalNotes: "Ce passage est un sommet du Deutéronome. Dieu offre un choix: la vie ou la mort, la bénédiction ou la malédiction. Ce n'est pas fatalisme mais responsabilité. «Choisis la vie» est l'exhortation finale. La parole est proche, non lointaine: dans la bouche et le cœur. La foi n'est pas difficile mais accessible. Paul cite 30:12-14 dans Romains 10:6-8, montrant que la justice par la foi n'est pas une chose impossible mais proche et accessible."
    },
    {
      title: "Dernières dispositions (31-34)",
      summary: "Josué comme successeur. Loi à lire tous les sept ans. Cantique de Moïse. Bénédiction sur les tribus. Mort de Moïse.",
      keyQuotes: [ "Fortifie-toi et prends courage (31:7)",
        "Cette loi ne sera point oubliée (31:12)",
        "Écoutez, cieux, et je parlerai (32:1)",
        "Il est le Rocher; ses œuvres sont parfaites (32:4)",
        "Il bénit Israël devant sa mort (33:1)",
        "Moïse mourut là dans le pays de Moab (34:5)",
        "Personne ne connaît sa sépulture jusqu'à ce jour (34:6)", "Josué... fut rempli de l'esprit de sagesse (34:9)"
      ],
      concepts: [
        { term: "Succession de Josué", explanation: "Moïse transmet l'autorité à Josué. Il doit être fort et courageux. Dieu sera avec lui comme il a été avec Moïse." },
        { term: "Loi à lire", explanation: "Tous les sept ans, à la fête des tabernacles, toute la loi sera lue. Pour que la génération future entende et craigne Dieu." },
        { term: "Cantique de Moïse", explanation: "Témoignage contre Israël. Décrit la fidélité de Dieu et la rébellion d'Israël. Avertit du jugement à venir." }
      ],
      theologicalNotes: "Le Deutéronome se termine par la mort de Moïse. Il a 120 ans, ses yeux n'ont point affaibli, sa vigueur n'a point diminué (34:7). Il voit le pays promis depuis le mont Nebo mais n'y entre pas. Sa mort marque la fin d'une époque: la fin des pérégrinations, le début de la conquête. Josué est le nouveau leader, rempli de l'esprit de sagesse. Dieu continue avec son peuple malgré le changement de leadership. La fidélité de Dieu à ses promesses est assurée."
    }
  ]
}

/* ============================================================================
 *
 * PLANS DES CHAPITRES
 *
 * ============================================================================ */

export const deuteronomyChapterOutlines: ChapterOutline[] = [
  {
    chapter: 1,
    title: "Discours de Moïse - départ d'Horeb", summary: "Moïse rappelle le départ du Sinaï et la nomination des juges.",
    keyEvents: [ "Commande de partir d'Horeb", "Promesse du pays", "Difficulté de porter seul le fardeau", "Nomination de juges", "Rébellions des explorateurs", "Retour refusé"],
    keyVerses: [ "1:6-8", "1:9-18", "1:19-46"],
    theologicalNotes: "Moïse commence son discours historique. Il rappelle la promesse du pays, la nomination des juges (sagesse partagée), et la rébellion des explorateurs qui a eu des conséquences désastreuses."
  },
  {
    chapter: 2,
    title: "Voyage dans le désert",
    summary: "Rappel du voyage d'Horeb à Kadès, puis autour d'Édom.", keyEvents: [ "Passage par Séir", "Édom refusé le passage", "Passage par Moab", "Sihon roi de Hesbon défait", "Og roi de Basan défait", "Territoire donné aux tribus de Ruben, Gad, Manassé"],
    keyVerses: [ "2:4-8", "2:24-37"],
    theologicalNotes: "Dieu a conduit Israël et lui a donné des victoires. Les territoires conquis sont donnés aux tribus de l'est. Les défaites d'Édom, Moab, et Ammon sont respectées car Dieu a donné ces terres à leurs descendants."
  },
  {
    chapter: 3,
    title: "Victoires sur Sihon et Og",
    summary: "Rappel des victoires et partage du territoire.",
    keyEvents: [ "Victoire sur Sihon", "Victoire sur Og", "Territoire donné", "Josué comme successeur", "N'hésitez pas à entrer dans le pays"],
    keyVerses: [ "3:21-22", "3:23-29"],
    theologicalNotes: "Moïse encourage le peuple: ne craignez pas, l'Éternel combattra pour vous. Josué est présenté comme le successeur qui conduira le peuple. Les victoires passées sont une garantie pour les futures."
  },
  {
    chapter: 4,
    title: "Exhortation à l'obéissance", summary: "Exhortation à garder la loi. Avertissement de l'idolâtrie.", keyEvents: [ "Écoutez les lois", "Ne rien ajouter ni retrancher", "Rappel du Baal-Peor", "Vous êtes témoin oculaire", "Gardez les lois", "Villes de refuge", "Ne passez point le Jourdain"],
    keyVerses: [ "4:2", "4:9", "4:15-19", "4:25-31"],
    theologicalNotes: "Moïse exhorte à garder la loi sans ajout ni retranchement. Il avertit contre l'idolâtrie qui a contaminé le peuple à Baal-Peor. Il se souvient qu'il ne verra pas le pays mais le peuple y entrera."
  },
  {
    chapter: 5,
    title: "Les Dix Commandements",
    summary: "Répétition des Dix Commandements en plaine de Moab.",
    keyEvents: [ "Traité d'alliance en Horeb", "Les Dix Commandements", "Le peuple demande de médiation", "Statuts et ordonnances"],
    keyVerses: [ "5:7-21", "5:22-33"],
    theologicalNotes: "Les Dix Commandements sont répétés avec quelques variations par rapport à Exode 20. Le Sabbat est lié à la délivrance d'Égypte (v. 15). Le peuple demande que Moïse soit médiateur car la gloire de Dieu est terrifiante."
  },
  {
    chapter: 6,
    title: "Le Shema Israel",
    summary: "Le grand commandement d'aimer Dieu.", keyEvents: [ "Écoute Israël: l'Éternel est un", "Aime l'Éterne de tout ton cœur", "Ces paroles dans ton cœur", "Enseigne à tes enfants", "Bénédiction pour l'obéissance", "Ne teste pas l'Éternel", "Témoignage aux enfants"],
    keyVerses: [ "6:4-9", "6:10-19", "6:20-25"],
    theologicalNotes: "Le Shema (6:4) est la confession fondamentale du judaïsme. L'amour de Dieu de tout le cœur, âme, et force est le plus grand commandement. La foi doit être transmise aux enfants. L'obéissance apporte la bénédiction."
  },
  {
    chapter: 7,
    title: "Élection et sainteté",
    summary: "Dieu a élu Israël par amour. Israël doit détruire l'idolâtrie.", keyEvents: [ "Élection par amour, non par mérite", "Sainteté required", "Ne t'associe pas aux idoles", "Dieu est un feu jaloux", "Ne craignez pas", "Signes et prodiges"],
    keyVerses: [ "7:6-8", "7:9", "7:12-16", "7:17-26"],
    theologicalNotes: "L'élection d'Israël est un acte gratuit de Dieu: «c'est parce que l'Éternel vous aime» (v. 8). L'élection exige la sainteté et la séparation des nations idolâtres. Dieu combattra pour son peuple."
  },
  {
    chapter: 8,
    title: "Souviens-toi",
    summary: "Exhortation à se souvenir des œuvres de Dieu dans le désert.",
    keyEvents: [ "Obéis pour vivre", "Souviens-toi du désert", "La manne pour t'humilier", "Ton cœur s'enorgueillit", "C'est Dieu qui te donne la force", "Si tu oublies Dieu, tu périras"],
    keyVerses: [ "8:2-3", "8:11-16", "8:17-20"],
    theologicalNotes: "La mémoire est essentielle à la foi. «Souviens-toi» est un commandement fréquent. Dieu a pourvu aux besoins du peuple dans le désert pour leur apprendre que l'homme ne vit pas de pain seulement mais de toute parole de Dieu."
  },
  {
    chapter: 9,
    title: "Le veau d'or", summary: "Rappel du péché du veau d'or et de l'intercession de Moïse.", keyEvents: [ "Le veau d'or", "Les deux tables brisées", "Moïse intercède", "Arche d'alliance", "Jeûne de 40 jours", "Aaron aussi pécha", "Moïse se prosterna"],
    keyVerses: [ "9:8-21", "9:25-29"],
    theologicalNotes: "Moïse rappelle le péché grave du veau d'or. Il a intercédé pour le peuple, rappelant à Dieu les promesses à Abraham, Isaac, et Jacob. Aaron aussi a péché. Moïse jeûna 40 jours et nuits."
  },
  {
    chapter: 10,
    title: "Les deux tables",
    summary: "Nouvelles tables de la loi. Exhortation à craindre Dieu.",
    keyEvents: [ "Deux nouvelles tables", "Arche de bois", "Moïse jeûna 40 jours", "Ce que Dieu demande", "Crainte de Dieu", "Circoncision du cœur", "Aime l'étranger"],
    keyVerses: [ "10:12-13", "10:16", "10:17-19"],
    theologicalNotes: "Moïse reçoit de nouvelles tables après avoir brisé les premières. Ce que Dieu demande est de craindre, marcher, aimer, et servir Dieu de tout le cœur. La circoncision du cœur (v. 16) est l'essentiel de la foi."
  },
  {
    chapter: 11,
    title: "Amour et obéissance",
    summary: "Exhortation à aimer Dieu et observer les commandements.",
    keyEvents: [ "Aimez l'Éternel", "Gardez les ordonnances", "Regardez les œuvres de Dieu", "Vous serez bénis", "Avertissement contre la rébellion", "Aimez l'étranger"],
    keyVerses: [ "11:1", "11:13-17", "11:18-21", "11:22-25"],
    theologicalNotes: "L'amour de Dieu est la motivation de l'obéissance. La bénédiction pour l'obéissance inclut la pluie en son temps, la victoire sur les ennemis, et la prospérité. L'amour doit s'étendre à l'étranger car Israël a été étranger en Égypte."
  },
  {
    chapter: 12,
    title: "Lieu unique d'adoration", summary: "Centralisation du culte: un seul lieu pour sacrifier.",
    keyEvents: [ "Lieu que Dieu choisira", "Détruire tous les hauts lieux", "N'offre pas tes sacrifices partout", "Réjouis-toi devant l'Éternel", "Lévites sans portion", "Ne mange pas le sang"],
    keyVerses: [ "12:5-7", "12:11-14", "12:18-19", "12:28-32"],
    theologicalNotes: "La centralisation du culte empêche la syncretisme. Un seul lieu pour sacrifier empêche les abus. Les Lévites servent au sanctuaire et n'ont pas d'héritage territorial car Dieu est leur portion."
  },
  {
    chapter: 13,
    title: "Contre les faux prophètes",
    summary: "Avertissements contre les prophètes qui détournent de Dieu.",
    keyEvents: [ "Prophète ou songeur qui dit «Allons après d'autres dieux»", "Mets à mort ce prophète", "Le Seigneur vous éprouve", "N'écoute pas les paroles de ce prophète", "Mets à mort les habitants de la ville infidèle"],
    keyVerses: [ "13:1-5", "13:6-11"],
    theologicalNotes: "Les faux prophètes sont ceux qui détournent de l'Éternel. Même si leurs signes s'accomplissent, ils ne doivent pas être écoutés s'ils disent 'Allons après d'autres dieux.' Le test est la fidélité à l'Éternel."
  },
  {
    chapter: 14,
    title: "Lois alimentaires et dîme",
    summary: "Animaux purs et impurs. Dîme et prémices.",
    keyEvents: [ "Animaux purs: ruminant + sabot divisé", "Animaux impurs", "Ne mangez pas d'abominations", "La dîme", "Lévite, étranger, veuve, orphelin"],
    keyVerses: [ "14:3-21", "14:22-27", "14:28-29"],
    theologicalNotes: "Les lois alimentaires séparent Israël des nations. La dîme (10%) est pour les Lévites. Les prémices appartiennent à Dieu. Les étrangers, veuves, orphelins doivent être inclus dans les fêtes."
  },
  {
    chapter: 15,
    title: "Année sabbatique",
    summary: "Remise des dettes tous les sept ans. Libération des esclaves.",
    keyEvents: [ "Année sabbatique", "Remise des dettes", "Il n'y aura point de pauvre", "Libération des esclaves hébreux", "Premiers-nés consacrés", "Trois fêtes annuelles"],
    keyVerses: [ "15:1-11", "15:12-18", "15:19-23"],
    theologicalNotes: "L'année sabbatique libère les débiteurs et les esclaves. Elle exprime que Dieu est le propriétaire ultime. Les premiers-nés et les prémices sont consacrés à Dieu. Les trois fêtes (Pâque, Pentecôte, Tabernacles) doivent être célébrées au lieu choisi."
  },
  {
    chapter: 16,
    title: "Fêtes des semaines",
    summary: "Instructions pour les fêtes et la justice.",
    keyEvents: [ "Fête de la Pâque", "Fête des semaines (Pentecôte)", "Fête des tabernacles", "Tous les mâles paraîtront", "Juges et officiers", "Pas de bosquets sacrés", "Ne sacrifie pas d'animal avec défaut"],
    keyVerses: [ "16:1-8", "16:9-12", "16:13-17", "16:18-22"],
    theologicalNotes: "Les trois fêtes annuelles commémorent les œuvres de Dieu: délivrance (Pâque), moisson (Pentecôte), pèlerinage (Tabernacles). Tous les mâles doivent paraître devant l'Éternel. La justice doit être rendue sans corruption."
  },
  {
    chapter: 17,
    title: "Juges et rois",
    summary: "Instructions sur les juges, le roi, et les sacrificateurs.",
    keyEvents: [ "Juges et officiers dans chaque ville", "Jugement équitable", "Pas de bosquets sacrés", "Pas de sacrifice avec défaut", "Le roi que tu établiras", "Il écrira une copie de la loi"],
    keyVerses: [ "17:8-13", "17:14-17", "17:18-20"],
    theologicalNotes: "Les juges doivent rendre la justice avec équité. Les cas difficiles sont portés au lieu choisi. Le roi doit être de la fratrie d'Israël, pas un étranger. Il doit écrire une copie de la loi et la lire toute sa vie."
  },
  {
    chapter: 18,
    title: "Le prophète comme Moïse",
    summary: "Les sacrificateurs et les Lévites. Le prophète à venir.",
    keyEvents: [ "Sacrificateurs et Lévites n'ont point de portion", "Ils mangeront des sacrifices", "Prophète comme Moïse", "Ses paroles dans sa bouche", "Faux prophètes punis de mort"],
    keyVerses: [ "18:1-8", "18:15-19", "18:20-22"],
    theologicalNotes: "Les sacrificateurs et Lévites vivent des sacrifices car Dieu est leur portion. La promesse du prophète comme Moïse (v. 15) est une prophétie messianique accomplie en Christ (Ac 3:22; 7:37). Le faux prophète est puni de mort."
  },
  {
    chapter: 19,
    title: "Villes de refuge",
    summary: "Villes de refuge pour le meurtrier involontaire.",
    keyEvents: [ "Villes de refuge", "Pour l'homicide involontaire", "Protège du vengeur", "Trois villes de chaque côté du Jourdain", "Un témoin suffit pour condamner", "Pas de rançon pour le meurtrier"],
    keyVerses: [ "19:1-10", "19:11-13", "19:15-21"],
    theologicalNotes: "Les villes de refuge protègent le meurtrier involontaire de la vengeance du sang avant le procès. Elles illustrent la miséricorde de Dieu au sein de la justice. Christ est notre refuge (Hé 6:18)."
  },
  {
    chapter: 20,
    title: "Lois de la guerre",
    summary: "Instructions sur la guerre et le siège.",
    keyEvents: [ "Ne crains point", "Le sacrificateur encouragera le peuple", "Les exemptions de la guerre", "Offre de paix aux villes", "Villes lointaines vs proches", "Ne détruis pas les arbres fruitiers"],
    keyVerses: [ "20:1-4", "20:5-9", "20:10-18", "20:19-20"],
    theologicalNotes: "La guerre doit être entreprise avec confiance en Dieu. Le sacrificateur encourage le peuple. Certains sont exemptés (nouveau marié, maison, vignes, craintif). Les villes lointaines reçoivent une offre de paix; les villes de Canaan doivent être détruites à cause de leur idolâtrie."
  },
  {
    chapter: 21,
    title: "Affaires non résolues",
    summary: "Procédure pour les meurtres non résolus et autres lois.",
    keyEvents: ["Meurtre non résolu", "Mesure des villes", "Ville la plus proche", "Égorge la génisse", "Procédure pour expier", "Fille captive", "Droit d'aînesse"],
    keyVerses: ["21:1-9", "21:10-14", "21:15-17"],
    theologicalNotes: "Le meurtre non résolu est expié par une procédure symbolique. Les anciens de la ville la plus proche prennent la responsabilité. La fille captive peut être épousée après un mois de deuil. Le droit d'aînesse est protégé."
  },
  {
    chapter: 22,
    title: "Diverses lois",
    summary: "Lois sur la protection, la propriété, et la morale.",
    keyEvents: ["Restitue ce que tu as trouvé", "Toit construit avec un parapet", "Pas de vêtements d'homme et de femme mélangés", "Libération de l'oiseau mère", "Pas de motifs mêlés", "Loi sur le divorce", "Diverses obligations"],
    keyVerses: ["22:1-4", "22:8", "22:13-21", "22:22-30"],
    theologicalNotes: "Ces lois protègent la vie, la propriété, et la dignité humaine. Le parapet sur le toit prévient les accidents. La protection de l'oiseau mère exprime la compassion. Le divorce est permis mais réglementé. Les motifs mêlés (laine et lin) symbolisent la séparation."
  },
  {
    chapter: 23,
    title: "Exclusion de l'assemblée", summary: "Ceux exclus de l'assemblée et diverses lois.", keyEvents: ["Exclus de l'assemblée", "Eunuques, bâtard, Ammonite, Moabite", "Ne cherche pas leur paix ni leur prospérité", "Les Édomites, Égyptiens admis à la troisième génération", "Pureté du camp"],
    keyVerses: ["23:1-8", "23:9-14"],
    theologicalNotes: "Certains sont exclus de l'assemblée pour des raisons rituelles ou morales. Ammonites et Moabites sont exclus à cause de leur hostilité (Balaam). Édomites et Égyptiens sont admis après trois générations. Le camp doit être pur car Dieu y habite."
  },
  {
    chapter: 24,
    title: "Diverses lois",
    summary: "Lois sur le mariage, la famille, et la justice.",
    keyEvents: ["Foi conjugale", "Esclave libérée", "Punition de la prostitution", "Interdiction de prêt à usure", "Vœux à accomplir", "Tu peux grappes dans le champ d'autrui"],
    keyVerses: ["24:1-4", "24:5", "24:6-7", "24:10-15", "24:17-22"],
    theologicalNotes: "Ces lois protègent la famille et les plus vulnérables. Le prêt à usure est interdit entre frères (autorisé avec les étrangers). Les grappes dans le champ d'autrui peuvent être mangées mais pas emportées, exprimant la générosité et le droit au besoin."
  },
  {
    chapter: 25,
    title: "Justice et mesure",
    summary: "Lois sur la justice, les poids, et les mesures.",
    keyEvents: [ "Juge entre tes frères", "Témoins nécessaires", "Faux témoins", "Loi du talion", "Pas de compassion dans le jugement", "Poids et mesures justes", "Souviens-toi d'Amalek"],
    keyVerses: [ "25:1-3", "25:13-16", "25:17-19"],
    theologicalNotes: "La justice doit être rendue avec équité. Le talion «œil pour œil» limite la vengeance. Les faux témois reçoivent la peine qu'ils voulaient infliger. Les poids et mesures justes sont exigés. Amalek doit être effacé de la mémoire."
  },
  {
    chapter: 26,
    title: "Premiers fruits et dîme",
    summary: "Confession lors de l'offrande des prémices. Dîme triennale.", keyEvents: [ "Prémices dans le panier", "Confession: 'Mon père était un Araméen'", "Dîme de la troisième année", "Sainteté pour l'Éternel"],
    keyVerses: [ "26:1-11", "26:12-15", "26:16-19"],
    theologicalNotes: "La confession lors de l'offrande des prémices raconte l'histoire d'Israël: un Araméen errant devient une nation bénie. La dîme de la troisième année est pour les Lévites, étrangers, veuves, orphelins. Israël est appelé à être un peuple saint."
  },
  {
    chapter: 27,
    title: "Bénédictions et malédictions",
    summary: "Instructions pour les bénédictions sur le mont Gerizim et les malédictions sur le mont Ébal.",
    keyEvents: [ "Autels sur le mont Ébal", "Bénédictions sur le mont Gerizim", "Malédictions sur le mont Ébal", "Douze tribus: six sur chaque mont", "Consécration pour la loi"],
    keyVerses: [ "27:1-10", "27:11-26"],
    theologicalNotes: "Six tribus se tiennent sur le mont Gerizim pour prononcer les bénédictions (Simeon, Lévi, Juda, Issacar, Joseph, Benjamin). Six tribus se tiennent sur le mont Ébal pour prononcer les malédictions (Ruben, Gad, Aser, Zabulon, Dan, Nephthali). Jos 8:30-35 accomplit cela."
  },
  {
    chapter: 28,
    title: "Bénédictions et malédictions détaillées",
    summary: "Liste détaillée des bénédictions pour l'obéissance et des malédictions pour la désobéissance.", keyEvents: [ "Bénédictions dans la ville et aux champs", "Victoire sur les ennemis", "Bénédiction du panier, du fruit, des entrailles", "Tête et non queue", "Malédictions détaillées", "Maudit en ville et aux champs", "Fléaux, maladies, défaite", "Exil parmi les nations"],
    keyVerses: [ "28:1-14", "28:15-68"],
    theologicalNotes: "Les bénédictions incluent la prospérité, la victoire, la santé, la faveur. Les malédictions incluent la maladie, la défaite, la famine, l'exil. Ces malédictions s'accompliront dans l'histoire d'Israël. L'exil à Babylone est l'accomplissement de 28:64-68."
  },
  {
    chapter: 29,
    title: "Renouvellement de l'alliance", summary: "Alliance renouvelée dans le pays de Moab. Exhortation à la fidélité.",
    keyEvents: [ "Alliance dans le pays de Moab", "Avec ceux qui sont là aujourd'huiui", "Idolâtrie rootée", "Choses cachées et révélées", "Retour à l'Éternel", "Exil et restauration"],
    keyVerses: [ "29:10-15", "29:16-28", "29:29"],
    theologicalNotes: "L'alliance est renouvelée avec la nouvelle génération. L'idolâtrie est une «racine amère» qui produit du poison. Les choses cachées sont à Dieu; les révélées sont à nous. La restauration est promise après l'exil si le peuple se repent."
  },
  {
    chapter: 30,
    title: "Retour et choix de la vie",
    summary: "Exhortation au retour à l'Éternel. Choix entre la vie et la mort.", keyEvents: [ "Retour à l'Éternel", "La parole est proche de toi", "J'ai mis devant toi la vie et la mort", "Choisis la vie", "Aime l'Éternel", "Écoute sa voix", "Attache-toi à lui"],
    keyVerses: [ "30:1-10", "30:11-14", "30:15-20"],
    theologicalNotes: "Ce passage est un sommet du Deutéronome. Dieu promet la restauration si le peuple se repent. La parole n'est pas loin: dans la bouche et le cœur. Le choix est donné: vie ou mort, bénédiction ou malédiction. 'Choisis la vie' est l'exhortation finale."
  },
  {
    chapter: 31,
    title: "Succession de Josué",
    summary: "Moïse encourage Josué et la loi doit être lue tous les sept ans.",
    keyEvents: [ "Moïse âgé, va passer", "Fortifie-toi et prends courage", "L'Éternel marchera avec toi", "Loi à lire tous les sept ans", "Assemblée d'Israël, femmes, enfants", "Ils écouteront et craindront"],
    keyVerses: [ "31:6-8", "31:9-13"],
    theologicalNotes: "Moïse prépare sa succession. Josué doit être fort et courageux car il conduira le peuple. Dieu sera avec lui comme il a été avec Moïse. La loi doit être lue tous les sept ans pour que la nouvelle génération entende et craigne Dieu."
  },
  {
    chapter: 32,
    title: "Cantique de Moïse",
    summary: "Cantique de Moïse: témoignage contre Israël.",
    keyEvents: [ "Cieux, écoutez", "La Parole de Dieu", "Rocher parfait", "Actions de grâces", "Rejet et jalousie", "Châtiments", "Vengeance des ennemis", "Expiation pour son peuple"],
    keyVerses: [ "32:1-4", "32:15-18", "32:39-43"],
    theologicalNotes: "Le cantique de Moïse est un poème prophétique. Il décrit la fidélité de Dieu et la rébellion d'Israël. Dieu est 'le Rocher, son œuvre est parfaite' (v. 4). Israël est ''un peuple insensé' (v. 6). Le cantique avertit du jugement à venir mais promet l'expiation finale."
  },
  {
    chapter: 33,
    title: "Bénédiction de Moïse",
    summary: "Moïse bénit chaque tribu avant sa mort.",
    keyEvents: [ "Bénédiction sur Israël", "Ruben: vie et nombre d'hommes", "Juda: aide contre ses ennemis", "Lévi: Thummim et Urim", "Benjamin: bien-aimé de l'Éternel", "Joseph: bénédictions des cieux", "Zabulon et Issacar: joie", "Gad: première portion", "Dan: lionceau", "Nephthali: rassasié de faveur", "Aser: favoré de ses frères", "Asher: force", "Pas de peuple comme Israël"],
    keyVerses: [ "33:1", "33:6-25", "33:26-29"],
    theologicalNotes: "La bénédiction de Moïse sur chaque tribu révèle leur caractère et avenir. Juda est la tribu royale. Lévi porte l'Urim et le Thummim. Joseph reçoit les meilleures bénédictions (fécondité, force). Le cantique se termine par l'éloge d'Israël: «Heureux es-tu, Israël!»."
  },
  {
    chapter: 34,
    title: "Mort de Moïse",
    summary: "Moïse meurt sur le mont Nebo. Josué lui succède.",
    keyEvents: [ "Mont Nebo: vue du pays", "Mort de Moïse à 120 ans", "L'Éternel l'ensevelit", "Sépulture inconnue", "Trente jours de deuil", "Josué rempli d'esprit de sagesse", "Prophète comme Moïse ne s'est plus levé"],
    keyVerses: [ "34:1-4", "34:5-7", "34:9-12"],
    theologicalNotes: "Moïse meurt à 120 ans, après avoir vu le pays promis mais n'y étant pas entré. Il a vécu trois périodes de 40 ans: en Égypte, à Madian, dans le désert. Dieu l'ensevelit, personne ne connaît sa sépulture. Josué lui succède, rempli de l'Esprit. 'Il ne s'est plus levé en Israël un prophète comme Moïse'—jusqu'à Christ."
  }
]

/* ============================================================================
 *
 * PASSAGES CLÉS
 *
 * ============================================================================ */

export const deuteronomyKeyPassages: KeyPassage[] = [
  {
    reference: "Deutéronome 6:4-9",
    title: "Le Shema Israel",
    text: "Écoute, Israël! L'Éternel, notre Dieu, est le seul Éternel. Tu aimeras l'Éternel, ton Dieu, de tout ton cœur, de toute ton âme et de toute ta force. Et ces paroles que je te commande aujourd'huiui seront dans ton cœur. Tu les inculqueras à tes enfants, et tu en parleras quand tu seras dans ta maison, quand tu iras en voyage, quand tu te coucheras et quand tu te lèveras. Tu les lieras comme un signe sur ta main, et elles seront comme des fronteaux entre tes yeux. Tu les écriras sur les poteaux de ta maison et sur tes portes.", commentary: `Le Shema Israel ("Écoute, Israël") est la confession fondamentale du judaïsme et du christianisme. Cité par Jésus comme le plus grand commandement (Mt 22:37; Mc 12:29; Lc 10:27).

Structure:
1. 6:4: "Écoute, Israël: l'Éternel, notre Dieu, est le seul Éternel"
   - Déclaration de l'unicité de Dieu
   - Contre le polythéisme cananéen
   - Fondement du monothéisme biblique

2. 6:5: "Tu aimeras l'Éternel, ton Dieu, de tout ton cœur..."
   - Amour total: cœur, âme, force
   - Commandement motivé par l'amour
   - Résumé de toute la loi

3. 6:6-9: Transmission et mémorial
   - Paroles dans le cœur
   - Enseigner aux enfants
   - Parler continuellement
   - Signes sur la main et le front
   - Écrire sur les portes

Signification:
- "Écoute' (Shema): La foi commence par l'écoute. Écouter implique obéir.
- «Un» (Ehad): Peut signifier «unique» (unicité) ou «unifié» dans ses attributs).
- Amour total: L'amour de Dieu est la plus grande motivation.
- Transmission: La foi doit être enseignée aux enfants.
- Mémorial: Phylactères sur le front et la main, mezouzot sur les portes.

Dans le NT:
- Jésus le cite comme le plus grand commandement (Mt 22:37)
- Paul y ajoute l'amour du prochain (Rm 13:9; Ga 5:14)
- L'unicité de Dieu est fondamentale (Jn 17:3; 1 Co 8:4-6; Ép 4:6)

Le Shema est récité deux fois par jour par les Juifs pieux. Il est la confession qui distingue le peuple de l'alliance des nations idolâtres. Pour le chrétien, l'amour de Dieu est la source de toute obéissance et le fondement de toute la loi.`,
    crossReferences: [ "Matthieu 22:37 (Plus grand commandement)",
      "Marc 12:29-30 (Écoute, Israël)",
      "Luc 10:27 (Aime Dieu de tout ton cœur)",
      "Romains 13:9 (L'amour accomplit la loi)"
    ],
    theologicalThemes: [ "Amour", "Unicité", "Commandement", "Transmission", "Mémorial"]
  },
  {
    reference: "Deutéronome 18:15-19",
    title: "Le prophète comme Moïse",
    text: "L'Éternel, ton Dieu, te suscitera un prophète du milieu de toi, d'entre tes frères, comme moi. Vous l'écouterez... C'est ce que tu as demandé à l'Éternel, ton Dieu, à Horeb, le jour de l'assemblée... Et l'Éternel me dit: Ils ont bien parlé. Je leur susciterai un prophète comme toi, du milieu de leurs frères, je mettrai mes paroles dans sa bouche, et il leur dira tout ce que je lui commanderai. Si quelqu'un n'écoute pas mes paroles qu'il dira en mon nom, c'est moi qui lui en demanderai compte.", commentary: `Cette promesse du «prophète comme Moïse» est l'une des plus grandes prophéties messianiques du Deutéronome.

Contexte:
- Le peuple avait demandé un médiateur au Sinaï (Ex 20:19)
- Ils ne pouvaient pas supporter la voix directe de Dieu
- Dieu promet un prophète futur comme Moïse

Caractéristiques du prophète:
1. "Du milieu de toi, d'entre tes frères' — Israélite, pas étranger
2. "Comme moi' — comme Moïse, médiateur, libérateur, prophète
3. "Je mettrai mes paroles dans sa bouche' — parle pour Dieu
4. "Il leur dira tout ce que je lui commanderai' — fidélité à la parole de Dieu

Dans le NT:
- Pierre identifie Jésus comme ce prophète (Ac 3:22-23)
- Étienne affirme que ce prophète est Christ (Ac 7:37)
- La foule identifie Jésus comme "le prophète' (Jn 6:14; 7:40)
- Jésus affirme avoir la parole du Père (Jn 8:28; 12:49-50)

Christ comme Moïse:
- Libérateur: Moïse d'Égypte, Christ du péché (Jn 8:34-36)
- Prophète: Parle pour Dieu (Jn 12:49-50; Hé 1:1-2)
- Médiateur: Entre Dieu et le peuple (1 Tm 2:5; Hé 8:6)
- Berger: Conduit le peuple (Jn 10:11-14)
- Fidèle: Accomplit la parole de Dieu (Jn 17:4)

Supériorité de Christ:
Hébreux 3:1-6 compare Moïse et Christ: Moïse est fidèle dans la maison, mais Christ est Fils sur sa propre maison. Christ est supérieur à Moïse comme le Fils est supérieur au serviteur.

Cette promesse est la base de l'attente juive du Messie. Pour les chrétiens, elle s'accomplit en Jésus, le Prophète par excellence, qui parle pour Dieu et libère son peuple.`,
    crossReferences: [ "Actes 3:22-23 (Pierre: Jésus est ce prophète)",
      "Actes 7:37 (Étienne: comme moi)",
      "Jean 5:46 (Moïse a écrit de moi)",
      "Hébreux 1:1-2 (Dieu a parlé par le Fils)"
    ],
    theologicalThemes: [ "Messianisme", "Prophétie", "Médiation", "Christologie", "Parole"]
  },
  {
    reference: "Deutéronome 27-28",
    title: "Bénédictions et malédictions",
    text: "Moïse et les anciens d'Israël commandèrent au peuple: 'Gardez tous les commandements que je vous prescris aujourd'hui'... Le jour où vous passerez le Jourdain... vous placerez sur le mont Gerizim pour bénir... et sur le mont Ébal pour maudire... Si tu obéis à l'Éternel, ton Dieu, voici toutes les bénédictions: tu seras béni dans la ville et dans les champs... L'Éternel fera de toi la tête et non la queue... Mais si tu n'obéis point à l'Éternel, voici toutes les malédictions: tu seras malheureux dans la ville et dans les champs... L'Éternel envera sur toi la malédiction, la confusion et la menace...", commentary: `Les bénédictions et malédictions du Deutéronome expriment le principe de l'alliance: obéissance = bénédiction, désobéissance = malédiction.

Cérémonie (27:11-14):
- Six tribus sur le mont Gerizim (bénédictions)
- Six tribus sur le mont Ébal (malédictions)
- Accomplie par Josué en Josué 8:30-35

Bénédictions (28:1-14):
- Ville et champs: prospérité partout
- Fruit de tes entrailles, du sol, du bétail
- Panier et hâte (nourriture et commerce)
- Entrée et sortie (voyages)
- Victoire sur les ennemis
- Tête et non queue (domination)
- Peuple saint pour l'Éternel

Malédictions (28:15-68):
- Maudit dans la ville et aux champs
- Malédiction du panier et de l'hâte
- Maladie, stérilité, défaite
- Sécheresse et famine
- Enlevé dans une nation inconnue
- Serviras tes ennemis
- Exil parmi les nations
- Retour en Égypte (v. 68 — ironie ultime)

Principe de rétribution théocratique:
Cette structure exprime le principe que Dieu récompense l'obéissance et puni la désobéissance. C'est le principe de l'alliance mosaïque, distinct de l'alliance abrahamique inconditionnelle.

Accomplissement historique:
Les rois apostates (Jéroboam, Achab, Manassé) ont vu les malédictions s'accomplir. L'exil à Babylone est l'accomplissement de 28:64-68. Les prophètes (Jérémie, Ézéchiel) ont averti mais le peuple n'a pas écouté.

Pour le chrétien:
- Christ a porté la malédiction pour nous (Ga 3:13-14)
- Nous bénissons ceux qui nous maudissent (Mt 5:44)
- Les principes de sagesse s'appliquent (Pr 3:33; 1 Pi 4:12-19)
- L'accomplissement eschatologique: Apocalypse (bénédictions au vainqueur, malédictions au rebelle)

Le Deutéronome 28 montre que Dieu est saint et juste. Le péché a des conséquences. Mais Christ a porté notre malédiction sur la croix pour que nous recevions la bénédiction d'Abraham (Ga 3:14).`,
    crossReferences: [ "Josué 8:30-35 (Accomplissement de la cérémonie)",
      "Galates 3:13-14 (Christ racheté de la malédiction)",
      "Lévitique 26 (Bénédictions et malédictions au Sinaï)",
      "Apocalypse 22:14 (Bienheureux ceux qui observent les commandements)"
    ],
    theologicalThemes: [ "Alliance", "Bénédiction", "Malédiction", "Obéissance", "Jugement"]
  },
  {
    reference: "Deutéronome 30:11-20",
    title: "Choisis la vie",
    text: "Car ce commandement que je te prescris aujourd'hui n'est point trop difficile pour toi, il n'est point éloigné... Cette parole n'est point dans le ciel... Elle n'est point au-delà de la mer... Elle est tout près de toi, dans ta bouche et dans ton cœur, pour que tu puisses la faire... Vois, je mets aujourd'hui devant toi la vie et le bien, la mort et le mal... Car je t'adresse aujourd'hui les cieux et la terre pour témoin contre toi, je mets devant toi la vie et la mort, la bénédiction et la malédiction. Choisis la vie, afin que tu vives, toi et ta postérité, en aimant l'Éternel, ton Dieu, en obéissant à sa voix, et en t'attachant à lui; car c'est ta vie et la longueur de tes jours...", commentary: `Ce passage est le sommet du Deutéronome et un résumé de son message: choisis la vie!

La parole est accessible (vv. 11-14):
- "Pas trop difficile, ni éloignée"
- Pas dans le ciel ou au-delà de la mer
- "Tout près de toi, dans ta bouche et dans ton cœur"
- La foi est accessible, pas réservée aux sages

Paul cite ce passage (Rm 10:6-8):
- La justice par la foi n'est pas une chose impossible
- Elle est proche et accessible
- La parole est dans la bouche et le cœur

Le choix devant Israël (vv. 15-18):
- Vie et bien vs mort et mal
- Bénédiction et malédiction
- Le choix est à eux

Appel au choix (vv. 19-20):
- "Prends le ciel et la terre pour témoins"
- "J'ai mis devant toi la vie et la mort"
- "Choisis la vie, afin que tu vives"
- Comment? En aimant Dieu, en obéissant, en s'attachant à lui

Signification:
Dieu ne force pas mais exhorte. Il offre un choix réel. La vie et la mort, la bénédiction et la malédiction sont devant le peuple. Le résultat dépend de leur choix.

Le choix de la vie signifie:
- Aimer Dieu
- Obéir à sa voix
- S"attacher à lui
- Car il est la vie et la longueur des jours

Pour le chrétien:
- Le choix de la vie se réalise en Christ (Jn 14:6; 11:25)
- La foi est une réponse à la grâce, pas une œuvre
- L'appel à choisir reste (Jos 24:15; Mt 7:13-14)
- La vie éternelle en Christ

Le Deutéronome montre que la foi est un choix quotidien. Chaque génération doit choisir. La grâce de Dieu est offerte mais doit être reçue. "Choisis la vie!' est l'appel final de Moïse et l'appel de Dieu à chaque génération.`,
    crossReferences: [ "Romains 10:6-10 (La parole près de toi)",
      "Josué 24:15 (Choisissez aujourd'huiui)", "Matthieu 7:13-14 (Porte étroite et large)",
      "Jean 14:6 (Je suis le chemin, la vérité, la vie)"
    ],
    theologicalThemes: [ "Choix", "Vie", "Grâce", "Responsabilité", "Amour"]
  },
  {
    reference: "Deutéronome 32:4, 18, 30-31, 39, 43",
    title: "Cantique de Moïse",
    text: "Il est le Rocher, ses œuvres sont parfaites, car toutes ses voies sont justes. C'est un Dieu fidèle et sans iniquité... Tu as oublié le Rocher qui t'a engendré... Sont-ils sages, ces choses? Ils n'ont point d'intelligence... «Leur dieu est un Rocher qui enfante des enfants indignes»... Voyez maintenant que c'est moi, moi seul, et il n'y a point de Dieu avec moi: je fais mourir et je fais vivre... Nations, chantez les exploits de son peuple! Car il venge le sang de ses serviteurs...", commentary: `Le cantique de Moïse (Dt 32) est un poème prophétique qui décrit la relation entre Dieu et Israël.

Thèmes du cantique:

1. Dieu comme Rocher (v. 4, 15, 18, 30-31):
   - "Il est le Rocher, ses œuvres sont parfaites"
   - "Tu as oublié le Rocher qui t'a engendré"
   - "Leur Rocher les a vendus"
   - Image de stabilité, force, protection

2. Bonté de Dieu (vv. 1-14):
   - Il a trouvé Jacob dans le désert
   - Il l'a entouré de ses soins
   - Il l'a gardé comme la prunelle de son œil

3. Rejet d'Israël (vv. 15-18):
   - Israël a oublié son Dieu
   - Sacrifices à des démons
   - "Un peuple insensé"

4. Jugement (vv. 19-33):
   - Dieu les cachera sa face
   - Envoi des ennemis comme fouet
   - "Je ferai mourir et je ferai vivre"

5. Compassion finale (vv. 36-42):
   - Si l'ennemi se vante trop
   - Dieu aura compassion de ses serviteurs
   - Vengeance du sang de ses serviteurs
   - Expiation pour son peuple

Dans le NT:
- Cité dans Romains 12:19 ("A toi la vengeance")
- Cité dans Hébreux 10:30 ("Le jugement appartient à Dieu")
- L'image du Rocher est appliquée à Christ (1 Co 10:4)

Signification:
Le cantique est un témoignage contre Israël (v. 31; 31:19-21). Il avertit du jugement à venir mais promet la restauration finale. Il révèle Dieu comme juste et fidèle, mais aussi comme juge. Le cantique montre que Dieu est patient mais que le péché a des conséquences. La miséricorde finale (vv. 36-43) est la promesse d'une nouvelle alliance.`,
    crossReferences: [ "Romains 12:19 (La vengeance à Dieu)",
      "Hébreux 10:30 (Le jugement à Dieu)",
      "1 Corinthiens 10:4 (Le Rocher est Christ)",
      "Apocalypse 15:3 (Cantique de Moïse et de l'Agneau)"
    ],
    theologicalThemes: [ "Justice", "Jugement", "Miséricorde", "Expiation", "Alliance"]
  },
  {
    reference: "Deutéronome 34",
    title: "Mort de Moïse",
    text: "Moïse monta des plaines de Moab sur le mont Nebo, au sommet du Pisga... L'Éternel lui fit voir tout le pays... Et l'Éternel lui dit: «C'est là le pays que j'ai juré de donner à Abraham, à Isaac et à Jacob... Je te le fais voir de tes yeux, mais tu n'y entreras point.» Et Moïse, serviteur de l'Éternel, mourut là dans le pays de Moab, selon l'ordre de l'Éternel. Il l'ensevelit dans la vallée... Personne n'a connu sa séperture jusqu'à ce jour... Il n'a plus paru en Israël un prophète comme Moïse, que l'Éternel connaissait face à face.", commentary: `La mort de Moïse marque la fin du Pentateuque et d'une époque. Moïse meurt à 120 ans après avoir conduit Israël pendant 40 ans.

Caractéristiques de Moïse:
- Serviteur de l'Éternel (v. 5)
- Prophète que l'Éternel connaissait face à face (v. 10)
- Signes et prodiges en Égypte (v. 11)
- Puissance main à main (v. 12)

Vue du pays promis:
- Du mont Nebo (Pisga), Moïse voit tout le pays
- De Galaad jusqu'à Néguev
- De Dan jusqu'à Beer-Shéba
- Il voit le pays mais n'y entre pas (à cause de Nb 20:10-12)

Ensevelissement:
- Dans la vallée en pays de Moab
- Personne n'a connu sa sépulture 'jusqu'à ce jour"
- Dieu l'ensevelit (protection de la tombe)

Deuil et succession:
- Trente jours de deuil pour Moïse (v. 8)
- Josué rempli de l'Esprit de sagesse (v. 9)
- Les fils d'Israël écoutent Josué (v. 9)

Épilogue:
"Il n'a plus paru en Israël un prophète comme Moïse, que l'Éternel connaissait face à face' (v. 10). C'est la reconnaissance ultime de l'unicité de Moïse. Il est incomparable jusqu'à ce qu'un plus grand vienne.

Dans le NT:
- La transfiguration: Moïse apparaît avec Élie et Jésus (Mt 17:3)
- Hébreux 3:1-6: Moïse fidèle, Christ plus glorieux
- Jacques 2:23: Abraham appelé ami de Dieu, comme Moïse connaissait Dieu face à face

Signification:
La mort de Moïse marque la fin d'une ère mais pas la fin de l'œuvre de Dieu. Josué continue. Dieu reste fidèle à ses promesses. Moïse voit l'accomplissement de ses quarante années de service mais n'entre pas dans le pays. C'est un rappel que même les plus grands serviteurs de Dieu sont responsables et que la grâce ne dispense pas des conséquences du péché.`,
    crossReferences: [ "Hébreux 3:1-6 (Moïse fidèle dans la maison)",
      "Jude 9 (Michaël conteste pour le corps de Moïse)",
      "Matthieu 17:3-4 (Moïse à la transfiguration)",
      "Jean 1:17 (La loi par Moïse, la grâce par Jésus)"
    ],
    theologicalThemes: [ "Moïse", "Succession", "Promesse", "Fin d'époque", "Fidélité"]
  }
]

