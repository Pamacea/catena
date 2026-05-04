import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export const metadata = {
  title: "Vatican II | Crise de l'Église",
  description:
    "Les erreurs doctrinales de Vatican II et pourquoi le concile ne peut être reçu comme œcuménique.",
};

// ===== Données =====

const erreurs = [
  {
    id: "unite-eglise",
    titre: "L'unité de l'Église",
    concile: "Lumen Gentium §8",
    texte:
      "« C'est là l'unique Église du Christ que dans le Symbole nous confessons une, sainte, catholique et apostolique [...]. Cette Église, en tant que société constituée et organisée en ce monde, <strong>subsiste dans</strong> l'Église catholique. »",
    condamnation:
      "Le Magistère antérieur enseigne que l'Église du Christ <em>est</em> (et non « subsiste dans ») l'Église catholique. Le mot « subsistit in » ouvre la voie à l'idée que d'autres « Églises » participeraient de l'Église du Christ.",
    references: [
      "Pie XII, Mystici Corporis (1943) : « Cette Église [...] est l'Église catholique »",
      "Pape Léon XIII, Satis Cognitum (1896)",
      "Concile du Vatican, Pastor Aeternus (1870)",
    ],
  },
  {
    id: "oecumenisme",
    titre: "L'œcuménisme",
    concile: "Unitatis Redintegratio",
    texte:
      "Le décret promeut un mouvement œcuménique visant à « rétablir l'unité » entre les chrétiens, impliquant que les non-catholiques n'auraient pas à revenir individuellement à l'Église catholique.",
    condamnation:
      "L'Église a toujours enseigné que les non-catholiques doivent revenir à l'unité de l'Église catholique, et non qu'il faudrait « reconstruire » cette unité par un dialogue entre « Églises sœurs ». La « communicatio in sacris » avec les non-catholiques est un péché mortel.",
    references: [
      "Pie XI, Mortalium Animos (1928) : condamne le mouvement œcuménique",
      "Léon XIII, Satis Cognitum (1896) : « Celui qui n'est pas uni au Corps ne peut pas être uni à la Tête »",
      "Saint Pie X, Notre Charge Apostolique (1910) : condamne le « ralliement » au monde moderne",
    ],
  },
  {
    id: "liberte-religieuse",
    titre: "La liberté religieuse",
    concile: "Dignitatis Humanae",
    texte:
      "« La personne humaine a droit à la liberté religieuse. [...] Ce droit de la personne humaine à la liberté religieuse dans l'ordre juridique de la société doit être reconnu de telle sorte qu'il constitue un droit civil. »",
    condamnation:
      "Cet enseignement affirme un droit naturel à la liberté religieuse dans le domaine public, en contradiction directe avec l'enseignement constant de l'Église selon lequel les États ont le devoir de rendre à Dieu un culte public selon la religion catholique.",
    references: [
      "Grégoire XVI, Mirari Vos (1832) : condamne l'« indifférentisme » et la « liberté de conscience »",
      "Pie IX, Quanta Cura (1864) + Syllabus : condamne le « droit à la liberté de conscience et des cultes »",
      "Léon XIII, Libertas Praestantissimum (1888) : « La liberté, comme faculté d'agir ou de ne pas agir [...] ne constitue pas un droit naturel en toutes circonstances »",
      "Pie XI, Quas Primas (1925) : le devoir des États de reconnaître le règne social du Christ",
    ],
  },
  {
    id: "collegialite",
    titre: "La collégialité",
    concile: "Lumen Gentium §22",
    texte:
      "« Le collège des évêques [...] exerce sur l'Église universelle un pouvoir souverain, plénier, immédiat et universel, toutefois sans porter atteinte au pouvoir du Pontife Romain. »",
    condamnation:
      "Cette formulation relativise le pouvoir monarchique du Pontife Romain tel que défini par le Concile du Vatican. Le pape possède seul la juridiction universelle immédiate ; les évêques n'exercent leur juridiction que par délégation du pape.",
    references: [
      "Concile du Vatican, Pastor Aeternus (1870) : le pape possède la primauté de juridiction pleine, suprême, universelle",
      "Léon XIII, Satis Cognitum (1896) : le pouvoir des évêques dépend de la communion avec le pape",
      "Concile de Trente, Session 6, Canon 7 : sur la juridiction épiscopale",
    ],
  },
];

const disciplines = [
  {
    titre: "Le Novus Ordo Missae (1969)",
    texte:
      "La « nouvelle messe » contient des éléments empruntés au culte protestant. La doctrine catholique sur la nature du Saint Sacrifice de la Messe a été systématiquement éliminée. Le Bref Examen Critique (Ottaviani-Bacci) l'a dénoncée dès 1969.",
    references: [
      "Cardinaux Ottaviani et Bacci, Lettre à Paul VI (3 sept. 1969)",
      "Abbé Cekada, La Messe de Paul VI en question",
      "Mgr Guérard des Lauriers, Réflexion sur le Novus Ordo Missae",
    ],
  },
  {
    titre: "Les nouveaux rites sacramentels",
    texte:
      "Les rites de consécration épiscopale et d'ordination sacerdotale réformés par Paul VI ne remplissent plus les exigences définies par Pie XII dans Sacramentum Ordinis (1947) et doivent être considérés comme douteux sinon invalides.",
    references: [
      "Pie XII, Sacramentum Ordinis (1947)",
      "Jean XXIII, Pontificalis Romani (1968) : nouveau rite de consécration",
    ],
  },
  {
    titre: "Le Code de Droit Canonique de 1983",
    texte:
      "Le nouveau Code autorise la communion des non-catholiques, la communicatio in sacris, et reprend l'hérésie de Vatican II concernant l'Église. La facilité des déclarations de nullité constitue un « divorce catholique » déguisé.",
    references: [
      "Code de Droit Canonique de 1917 (comparaison)",
      "Directoire œcuménique de 1993",
    ],
  },
];

const conditions = [
  {
    numero: "1",
    texte:
      "Le concile doit être convoqué légitimement par le Pontife Romain, ou au moins confirmé par lui.",
  },
  {
    numero: "2",
    texte:
      "Le concile doit être composé d'évêques unis au Pontife Romain par la communion dans la foi.",
  },
  {
    numero: "3",
    texte:
      "Le concile doit traiter de questions de foi et de morale, et définir des vérités que les fidèles doivent croire.",
  },
  {
    numero: "4",
    texte:
      "Les définitions du concile doivent être conformes à la foi antérieure de l'Église et ne pouvoir contenir aucune erreur contre la foi ou la morale.",
  },
  {
    numero: "5",
    texte:
      "Les actes du concile doivent être confirmés par le Pontife Romain pour avoir force obligatoire.",
  },
];

export default function VaticanIIPage() {
  return (
    <>
      {/* Section header */}
      <header className="mb-10 pb-6 border-b-2 border-gold-400/30">
        <nav className="flex items-center gap-2 text-sm text-ink-600 mb-4">
          <a href="/crise" className="hover:text-gold-700 transition-colors">
            Crise
          </a>
          <span className="text-gold-500">/</span>
          <span className="text-ink-900">Vatican II</span>
        </nav>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-3">
          Vatican II
        </h1>
        <p className="text-lg text-ink-700">
          Les erreurs doctrinales du concile, les preuves de leur contradiction
          avec le Magistère antérieur, et pourquoi Vatican II ne peut être reçu
          comme concile œcuménique.
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Introduction
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Le Concile Vatican II (1962–1965), convoqué par le Pape Jean XXIII
            et poursuivi par Paul VI, se présente comme le XXIe concile
            œcuménique de l&apos;Église catholique. Contrairement aux conciles
            précédents, Vatican II a été déclaré « pastoral » plutôt que
            dogmatique, affirmant ne vouloir définir aucun dogme nouveau.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Cependant, l&apos;examen attentif de ses documents révèle des
            enseignements substantiellement contraires à la doctrine catholique
            antérieure. Cette page présente les preuves de ces contradictions,
            établit que Vatican II remplit les conditions d&apos;un concile
            non recevable, et répond aux objections.
          </p>
        </div>
      </section>

      {/* ===== 1. LES ERREURS DOCTRINALES ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-6">
          I. Les erreurs doctrinales de Vatican II
        </h2>
        <p className="text-sm text-ink-500 mb-6 italic">
          Chaque erreur est mise en regard avec l&apos;enseignement antérieur du
          Magistère qui la condamne.
        </p>
        <div className="space-y-6">
          {erreurs.map((err) => (
            <div
              key={err.id}
              className="p-6 rounded-xs border border-red-200/60 bg-red-50/20"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-serif text-xl font-semibold text-ink-900">
                  {err.titre}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-xs bg-red-100 text-red-800 font-medium">
                  {err.concile}
                </span>
              </div>

              <div className="mb-4 p-4 rounded-xs bg-white/60 border border-red-100">
                <p
                  className="text-sm text-ink-700 leading-relaxed italic"
                  dangerouslySetInnerHTML={{ __html: err.texte }}
                />
              </div>

              <div className="mb-4 p-4 rounded-xs bg-green-50/40 border border-green-200/40">
                <p className="text-xs font-semibold text-green-800 mb-1 uppercase tracking-wider">
                  Enseignement antérieur du Magistère
                </p>
                <p
                  className="text-sm text-ink-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: err.condamnation }}
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-ink-500 mb-1 uppercase tracking-wider">
                  Références
                </p>
                <div className="flex flex-wrap gap-1">
                  {err.references.map((ref, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-xs bg-parchment-200 text-ink-600"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 2. LES DISCIPLINES CONTRAIRES ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-6">
          II. Les disciplines et réformes contraires
        </h2>
        <div className="space-y-6">
          {disciplines.map((d, i) => (
            <div
              key={i}
              className="p-6 rounded-xs border border-amber-200/60 bg-amber-50/20"
            >
              <h3 className="font-serif text-lg font-semibold text-ink-900 mb-3">
                {d.titre}
              </h3>
              <p className="text-sm text-ink-800 leading-relaxed mb-4">
                {d.texte}
              </p>
              <div className="flex flex-wrap gap-1">
                {d.references.map((ref, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-0.5 rounded-xs bg-parchment-200 text-ink-600"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. CONDITIONS D'UN CONCILE OECUMÉNIQUE ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          III. Conditions d&apos;un concile œcuménique recevable
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Pour qu&apos;un concile soit reconnu comme véritable concile
            œcuménique de l&apos;Église catholique, il doit remplir certaines
            conditions théologiques et canoniques. La théologie catholique
            enseigne les conditions suivantes :
          </p>
        </div>
        <div className="space-y-3 my-6">
          {conditions.map((c) => (
            <div
              key={c.numero}
              className="flex gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gold-100 text-gold-800 font-semibold text-sm">
                {c.numero}
              </span>
              <p className="text-sm text-ink-800 leading-relaxed pt-1">
                {c.texte}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4. POURQUOI VATICAN II N'EST PAS RECEVABLE ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          IV. Pourquoi Vatican II ne peut être reçu comme concile œcuménique
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            L&apos;examen des conditions établies ci-dessus, mis en regard avec
            le contenu effectif de Vatican II, conduit à la conclusion que ce
            concile ne peut pas être reçu comme un concile œcuménique
            authentique de l&apos;Église catholique. Voici pourquoi :
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            A. Erreur contre la foi (condition 4)
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Comme démontré dans la section I, les documents de Vatican II
            contiennent des enseignements qui sont en contradiction directe et
            substantielle avec le Magistère antérieur de l&apos;Église. Or, un
            concile qui enseigne l&apos;erreur contre la foi ne peut pas
            provenir de l&apos;autorité de l&apos;Église, car l&apos;Église est
            infaillible dans son magistère. Si les erreurs sont imputées au
            concile lui-même, c&apos;est le concile qui est défaillant. Si
            elles sont imputées à l&apos;autorité qui l&apos;a convoqué et
            confirmé, c&apos;est cette autorité qui est défaillante.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            B. Nature « pastorale » et non dogmatique
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Vatican II a été déclaré « pastoral » : il ne voulait définir aucun
            dogme nouveau. Les partisans de la « réception » de Vatican II
            arguent que les textes « pastoraux » n&apos;engagent pas
            l&apos;infaillibilité. Cependant, même un enseignement non
            infaillible <em>ex cathedra</em> ne peut pas contenir des erreurs
            substantielles dans le magistère ordinaire universel, car
            l&apos;Église est infaillible aussi dans son magistère ordinaire (
            <em>Humani Generis</em>, 1950).
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            De plus, les définitions de Vatican II ont été traitées par les
            papes post-conciliaires comme ayant force obligatoire. Jean-Paul II
            a parlé de « l&apos;enseignement conciliaire » comme d&apos;une
            « boussole » pour guider l&apos;Église. François a qualifié{" "}
            <em>Amoris Laetitia</em> (qui prolonge Vatican II) de texte
            « magistériel ». L&apos;argument du caractère « pastoral » est
            donc une échappatoire qui ne résiste pas à l&apos;examen.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            C. La question de l&apos;autorité
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le concile a été convoqué par Jean XXIII et confirmé par Paul VI.
            Les pères conciliaires (évêques) ont voté les textes. Si les textes
            contiennent des erreurs, l&apos;explication la plus cohérente avec
            l&apos;infaillibilité de l&apos;Église est que l&apos;autorité qui
            a convoqué, dirigé et confirmé le concile ne jouissait pas de
            l&apos;autorité légitime de l&apos;Église dans l&apos;ordre réel (
            <em>de facto</em>). C&apos;est la conclusion de la{" "}
            <a
              href="/crise/cassiciacum"
              className="text-gold-600 hover:text-gold-700 underline transition-colors"
            >
              Thèse de Cassiciacum
            </a>
            .
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p>
              « Il est impossible que l&apos;Église, dans l&apos;exercice de son
              autorité suprême, enseigne l&apos;erreur et l&apos;hérésie, ou
              impose une discipline universellement peccamineuse. »
            </p>
            <footer className="text-sm text-ink-500 not-italic">
              Principe théologique fondé sur l&apos;infaillibilité et
              l&apos;indéfectibilité de l&apos;Église.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ===== 5. TABLEAU COMPARATIF ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          V. Tableau comparatif : Magistère antérieur vs. Vatican II
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-stone-100">
                <th className="text-left p-3 border border-gold-400/20 font-semibold text-ink-900">
                  Point de doctrine
                </th>
                <th className="text-left p-3 border border-gold-400/20 font-semibold text-green-800">
                  Enseignement antérieur
                </th>
                <th className="text-left p-3 border border-gold-400/20 font-semibold text-red-800">
                  Vatican II
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gold-400/20 font-medium text-ink-900">
                  Unité de l&apos;Église
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  L&apos;Église du Christ <em>est</em> l&apos;Église
                  catholique (Mystici Corporis)
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  L&apos;Église du Christ <em>subsiste dans</em>{" "}
                  l&apos;Église catholique (LG §8)
                </td>
              </tr>
              <tr className="bg-parchment-50/30">
                <td className="p-3 border border-gold-400/20 font-medium text-ink-900">
                  Œcuménisme
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Les non-catholiques doivent revenir à l&apos;Église
                  (Mortalium Animos)
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Mouvement œcuménique de « réunification » (UR)
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gold-400/20 font-medium text-ink-900">
                  Liberté religieuse
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  L&apos;État doit reconnaître la religion catholique (Quanta
                  Cura, Quas Primas)
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Droit civil à la liberté religieuse (DH)
                </td>
              </tr>
              <tr className="bg-parchment-50/30">
                <td className="p-3 border border-gold-400/20 font-medium text-ink-900">
                  Collégialité
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Le pape possède seul la juridiction universelle (Pastor
                  Aeternus)
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Le collège des évêques partage le pouvoir suprême (LG §22)
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gold-400/20 font-medium text-ink-900">
                  Relations Église-État
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Coopération nécessaire, reconnaissance de la religion
                  catholique (Immortale Dei)
                </td>
                <td className="p-3 border border-gold-400/20 text-ink-700">
                  Séparation et autonomie de l&apos;État (GS §76)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== 6. RÉPONSES AUX OBJECTIONS ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          VI. Réponses aux objections
        </h2>
        <Accordion allowMultiple>
          <AccordionItem value="obj-v2-0">
            <AccordionTrigger value="obj-v2-0">
              « Vatican II a été confirmé par le pape, donc il est
              œcuménique. »
            </AccordionTrigger>
            <AccordionContent value="obj-v2-0">
              <div className="space-y-3">
                <p>
                  La confirmation par le pape est une condition nécessaire mais
                  non suffisante. Si le pape lui-même est défaillant dans la
                  foi, sa confirmation ne peut pas donner à un concile le
                  caractère d&apos;infaillibilité. L&apos;infaillibilité du
                  concile dépend de sa conformité à la foi antérieure, et non
                  du simple fait d&apos;être confirmé par celui qui se dit
                  pape.
                </p>
                <p>
                  De plus, la{" "}
                  <a
                    href="/crise/cassiciacum"
                    className="text-gold-600 hover:text-gold-700 underline"
                  >
                    Thèse de Cassiciacum
                  </a>{" "}
                  montre que les « papes de Vatican II » ne sont pas
                  formellement papes dans l&apos;ordre réel, précisément parce
                  qu&apos;ils ont promu des erreurs substantielles contre la
                  foi.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-v2-1">
            <AccordionTrigger value="obj-v2-1">
              « Les textes de Vatican II sont « pastoraux » et n&apos;engagent
              pas l&apos;infaillibilité. »
            </AccordionTrigger>
            <AccordionContent value="obj-v2-1">
              <div className="space-y-3">
                <p>
                  Cet argument est doublement problématique. D&apos;abord, même
                  un enseignement non <em>ex cathedra</em> ne peut pas contenir
                  des erreurs dans le magistère ordinaire universel (
                  <em>Humani Generis</em>). Ensuite, les papes post-conciliaires
                  ont traité Vatican II comme ayant force obligatoire : Jean-Paul
                  II l&apos;a qualifié de « boussole de l&apos;Église », et
                  François l&apos;a invoqué pour justifier ses propres
                  enseignements.
                </p>
                <p>
                  L&apos;argument du « pastoral » est donc une échappatoire :
                  quand les textes plaisent, ils sont magistériels ; quand ils
                  sont critiqués, ils ne sont que pastoraux.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-v2-2">
            <AccordionTrigger value="obj-v2-2">
              « Les Pères conciliaires ont voté les textes à l&apos;immense
              majorité. »
            </AccordionTrigger>
            <AccordionContent value="obj-v2-2">
              <div className="space-y-3">
                <p>
                  La majorité numérique ne détermine pas la vérité théologique.
                  Le concile de Chalcédoine (451) a été violemment contesté par
                  une grande partie des évêputs orientaux, et il a fallu
                  l&apos;intervention du pape Léon Ier pour imposer la
                  définition christologique. L&apos;histoire de l&apos;Église
                  montre que de nombreux évêques ont soutenu des erreurs
                  (ariens, nestoriens, monothélites).
                </p>
                <p>
                  De plus, les conditions du vote à Vatican II étaient
                  problématiques : les schémas préparatoires (traditionnels) ont
                  été systématiquement remplacés par des schémas rédigés par des
                  experts progressistes. Les pressions exercées par le Secrétariat
                  pour l&apos;Unité des Chrétiens sont documentées.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-v2-3">
            <AccordionTrigger value="obj-v2-3">
              « Tous les conciles ont eu des formulations imparfaites. »
            </AccordionTrigger>
            <AccordionContent value="obj-v2-3">
              <div className="space-y-3">
                <p>
                  Il y a une différence entre une formulation imparfaite mais
                  orthodoxe (qui peut être clarifiée par la suite) et une
                  formulation substantiellement hérétique. Les erreurs de
                  Vatican II ne sont pas des maladresses de style : elles
                  enseignent positivement des doctrines contraires à la foi.
                </p>
                <p>
                  Par exemple, affirmer que l&apos;Église du Christ « subsiste
                  dans » l&apos;Église catholique au lieu d&apos;affirmer
                  qu&apos;elle « est » l&apos;Église catholique n&apos;est pas
                  une simple nuance linguistique : c&apos;est une modification
                  substantielle de la doctrine sur l&apos;unité de
                  l&apos;Église, ouvrant la porte à l&apos;œcuménisme et au
                  relativisme religieux.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-v2-4">
            <AccordionTrigger value="obj-v2-4">
              « Si Vatican II n&apos;est pas œcuménique, alors aucun concile
              n&apos;est sûr. »
            </AccordionTrigger>
            <AccordionContent value="obj-v2-4">
              <div className="space-y-3">
                <p>
                  C&apos;est un argument <em>ad consequentiam</em> (argument
                  par les conséquences) qui ne prouve rien sur le fond. Que la
                  conclusion soit dérangeante ne la rend pas fausse. Les
                  critères d&apos;un concile œcuménique recevable sont clairs :
                  conformité à la foi antérieure, infaillibilité, et autorité
                  légitime. Si Vatican II ne remplit pas ces critères, c&apos;est
                  Vatican II qui doit être rejeté, et non les critères qui
                  doivent être assouplis.
                </p>
                <p>
                  La question n&apos;est pas de savoir si « aucun concile
                  n&apos;est sûr », mais si <em>ce</em> concile-ci, au vu de
                  son contenu effectif, peut être reçu comme un authentique
                  concile de l&apos;Église catholique.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ===== 7. RÉFÉRENCES MAGISTÉRIELLES ===== */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          VII. Références magistérielles citées
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              t: "Grégoire XVI — Mirari Vos (1832)",
              d: "Condamnation de l'indifférentisme et de la liberté de conscience.",
            },
            {
              t: "Pie IX — Quanta Cura + Syllabus (1864)",
              d: "Condamnation de 80 erreurs modernes, dont la liberté religieuse.",
            },
            {
              t: "Concile du Vatican — Pastor Aeternus (1870)",
              d: "Infaillibilité du pape, primauté de juridiction, succession apostolique perpétuelle.",
            },
            {
              t: "Léon XIII — Satis Cognitum (1896)",
              d: "L'Église est une, et ceux qui s'en séparent n'en sont pas membres.",
            },
            {
              t: "Léon XIII — Libertas Praestantissimum (1888)",
              d: "La liberté authentique est soumise à la vérité et à la loi naturelle.",
            },
            {
              t: "Léon XIII — Immortale Dei (1885)",
              d: "Le devoir des États de reconnaître la religion catholique.",
            },
            {
              t: "Saint Pie X — Notre Charge Apostolique (1910)",
              d: "Condamnation du « Sillon » et du modernisme social.",
            },
            {
              t: "Saint Pie X — Pascendi (1907)",
              d: "Condamnation du modernisme comme synthèse de toutes les hérésies.",
            },
            {
              t: "Pie XI — Mortalium Animos (1928)",
              d: "Condamnation du mouvement œcuménique.",
            },
            {
              t: "Pie XI — Quas Primas (1925)",
              d: "Le règne social du Christ sur les nations.",
            },
            {
              t: "Pie XII — Mystici Corporis (1943)",
              d: "L'Église catholique est le Corps mystique du Christ.",
            },
            {
              t: "Pie XII — Humani Generis (1950)",
              d: "Infaillibilité du magistère ordinaire universel.",
            },
          ].map((ref, i) => (
            <div
              key={i}
              className="p-3 rounded-xs border border-gold-400/20 bg-stone-50"
            >
              <h4 className="font-medium text-ink-900 text-sm">{ref.t}</h4>
              <p className="text-xs text-ink-600 mt-0.5">{ref.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
