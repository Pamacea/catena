import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export const metadata = {
  title: "Non Una Cum | Crise de l'Église",
  description:
    "La question du Non Una Cum — position théologique et liturgique dans la crise de l'Église",
};

export default function NonUnaCumPage() {
  return (
    <>
      {/* Section header */}
      <header className="mb-10 pb-6 border-b-2 border-gold-400/30">
        <nav className="flex items-center gap-2 text-sm text-ink-600 mb-4">
          <a href="/crise" className="hover:text-gold-700 transition-colors">
            Crise
          </a>
          <span className="text-gold-500">/</span>
          <span className="text-ink-900">Non Una Cum</span>
        </nav>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-3">
          Non Una Cum
        </h1>
        <p className="text-lg text-ink-700">
          La question liturgique et théologique du <em>Non Una Cum</em>{" "}
          dans la crise de l&apos;Église
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Introduction
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Comme le jeune abbé Guépin autrefois, nos prêtres ont trouvé dans
            les travaux théologiques de Monseigneur Guérard des Lauriers O.P.
            les principes d&apos;une analyse adéquate et cohérente de la
            situation actuelle de l&apos;autorité dans l&apos;Église, dans cette
            crise sans précédent ouverte par Vatican II et la « nouvelle messe
            ». Cette analyse théologique s&apos;articule autour de plusieurs
            aspects, que nous présentons succinctement sur cette page.
          </p>
        </div>
      </section>

      {/* Vatican II et le Novus Ordo Missae */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Vatican II et le Novus Ordo Missae
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Le Concile Vatican II a enseigné des doctrines qui avaient déjà été
            condamnées par l&apos;Église et a édicté des disciplines contraires
            à l&apos;enseignement et à la pratique constante de
            l&apos;Église.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            Erreurs doctrinales
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Il y a quatre points principaux de la doctrine catholique contre
            lesquels Vatican II a introduit des erreurs : (1)
            l&apos;unité de l&apos;Église ; (2) l&apos;œcuménisme ; (3) la
            liberté religieuse ; (4) la collégialité.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            Disciplines peccamineuses
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Les erreurs de Vatican II ont été implémentées de façon universelle
            et systématique. Le Code de droit canonique de 1983 reprend
            l&apos;hérésie de Vatican II concernant l&apos;Église, mentionnée
            ci-dessus. Il autorise également le sacrilège envers le
            Saint-Sacrement, en approuvant la réception de la sainte communion
            par des non-catholiques, ce qui est un péché mortel. Il autorise
            également la <em>communicatio in sacris</em> (culte public commun)
            avec les non-catholiques, ce qui est un péché mortel. En outre, le
            Directoire œcuménique de 1993 impose des pratiques œcuméniques qui
            ont toujours été condamnées par l&apos;Église comme un péché mortel.
            La facilité avec laquelle des centaines de milliers de déclarations
            de nullité de mariage sont accordées sans motif sérieux est une
            forme de « divorce catholique » déguisé, permise par les nouveautés
            du Code de 1983.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            Liturgie protestantisée
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            La « nouvelle messe » de Paul VI, qui a remplacé la Messe
            catholique traditionnelle, contient des éléments empruntés au culte
            protestant. Il s&apos;agit d&apos;un rite novateur dans lequel la
            doctrine catholique sur la nature du Saint Sacrifice de la Messe
            telle qu&apos;elle a été enseignée par le Concile de Trente a été
            systématiquement éliminée et remplacée par de fausses doctrines
            concernant la Messe, la Présence réelle et le sacerdoce.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le Père Guérard des Lauriers O.P. est l&apos;auteur principal du
            Bref Examen Critique, signé par les Cardinaux Ottaviani et Bacci, et
            remis à Paul VI, avant même que la nouvelle messe commence à être
            célébrée, demandant l&apos;abrogation pure et simple de ce nouveau
            rite moderniste. Cette critique présentait déjà les problèmes
            essentiels inhérents à cette nouvelle liturgie.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p className="mb-2">
              « Le nouvel ORDO MISSAE, si l&apos;on considère les éléments
              nouveaux, susceptibles d&apos;appréciations fort diverses, qui y
              paraissent sous-entendus ou impliqués, s&apos;éloigne de façon
              impressionnante, dans l&apos;ensemble comme dans le détail, de la
              théologie catholique de la Sainte Messe, telle qu&apos;elle a été
              formulée à la XXème session du Concile de Trente. »
            </p>
            <footer className="text-sm text-ink-500 not-italic">
              Cardinaux Ottaviani et Bacci, Lettre à Paul VI, 3 septembre 1969.
            </footer>
          </blockquote>

          <p className="text-ink-800 leading-relaxed mb-4">
            Pour une étude approfondie et didactique des changements liturgiques
            introduits par Paul VI, se référer au livre de monsieur
            l&apos;abbé Anthony Cekada, <em>La Messe de Paul VI en question</em>
            .
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Pour les lecteurs avertis, il existe une étude théologique très
            poussée : <em>Réflexion sur le Novus Ordo Missae</em>, par
            Monseigneur Guérard des Lauriers O.P.
          </p>
        </div>
      </section>

      {/* Une nouvelle religion moderniste */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Une nouvelle religion moderniste
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Tout ceci signifie que Vatican II et ses réformes ultérieures nous
            ont donné une nouvelle religion, une religion substantiellement
            différente de la religion catholique instituée par Notre Seigneur
            Jésus-Christ. Les réformateurs ont considérablement modifié les trois
            composantes principales de la religion : la doctrine, le culte et la
            discipline. En conséquence, la religion que les catholiques trouvent
            dans leurs paroisses et leurs écoles, bien que catholiques de nom,
            est une nouvelle religion non catholique.
          </p>
        </div>
      </section>

      {/* Le problème de l'Autorité */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Le problème de l&apos;Autorité
        </h2>
        <div className="prose prose-ink max-w-none">
          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-6 mb-3">
            Un problème de conscience posé aux catholiques
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            L&apos;autorité suprême de l&apos;Église est infaillible lorsqu
            elle définit une doctrine de foi et de morale. De plus,
            l&apos;Église ne peut pas imposer universellement une doctrine
            pernicieuse dans son enseignement authentique et officiel.
            L&apos;Église est infaillible dans sa discipline et sa liturgie, en
            ce sens que la discipline et la liturgie universelle de
            l&apos;Église sont saintes et sanctifiantes et ne peuvent nuire à la
            foi et à la morale des fidèles. L&apos;Église est également
            infaillible dans les canonisations solennelles des saints.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Ce constat provoque une crise de conscience chez les catholiques.
            D&apos;une part, en bons catholiques, ils doivent se soumettre avec
            une obéissance religieuse à l&apos;autorité de l&apos;Église.
            D&apos;un autre côté, ils comprennent la nécessité de préserver la
            doctrine, le culte et la discipline traditionnels de
            l&apos;Église. Cette crise oblige les catholiques à se pencher sur
            la question des « papes de Vatican II » dont l&apos;autorité
            suprême aurait dû garantir l&apos;orthodoxie desdites réformes.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Il est impossible pour un catholique de rejeter Vatican II, ou de
            rejeter la nouvelle messe de Paul VI en les attribuant à
            l&apos;autorité de l&apos;Église.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le Père Guérard des Lauriers O.P., un des plus grands théologiens du
            XXe siècle, a analysé cette situation sans précédent et en a décrit
            les divers aspects dans ce qui est désormais connu sous le nom de «
            Thèse de Cassiciacum ». Il s&apos;agit en effet de réconcilier les
            différentes exigences de l&apos;indéfectibilité de l&apos;Église
            dans cette crise terrible.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            D&apos;une part, il est impossible que l&apos;Église, tant dans
            l&apos;exercice de son autorité suprême, que dans son magistère
            ordinaire universel, enseigne l&apos;erreur et l&apos;hérésie, ou
            impose une discipline universelle peccamineuse ou un rite liturgique
            qui ne soit pas saint et sanctifiant.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p className="mb-2">
              « Si quelqu&apos;un dit que les cérémonies, les vêtements et les
              signes extérieurs dont l&apos;Église se sert dans la célébration
              de la messe sont plutôt des dérisions de l&apos;impiété que des
              marques de piété : qu&apos;il soit anathème. »
            </p>
            <footer className="text-sm text-ink-500 not-italic">
              Concile de Trente, Session 22, Canon 7.
            </footer>
          </blockquote>

          <p className="text-ink-800 leading-relaxed mb-4">
            D&apos;un autre côté, Jean XXIII, Paul VI, et leurs successeurs
            semblent avoir été dûment élus au souverain pontificat. Vatican II
            semble avoir été un concile œcuménique de l&apos;Église, dûment
            confirmé par l&apos;autorité du Souverain Pontife.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            Différentes solutions théologiques ont été proposées
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Comment réconcilier ces deux aspects ? Quelle est la situation de
            l&apos;autorité dans l&apos;Église ? Les solutions suivantes ont été
            proposées :
          </p>

          {/* Les 4 positions */}
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 rounded-xs border border-red-200/60 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">1. </span>
                Les « papes de Vatican II » jouissent de l&apos;autorité suprême
                de l&apos;Église, et les catholiques sont obligés d&apos;obéir
                et de se soumettre, tout en dénonçant quelque peu lesdites
                doctrines et réformes. C&apos;est la position de groupes tels
                que la Fraternité sacerdotale Saint-Pierre et
                l&apos;Institut du Christ Roi Souverain Prêtre.
              </p>
            </div>
            <div className="p-4 rounded-xs border border-red-200/60 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">2. </span>
                Les « papes de Vatican II » jouissent de l&apos;autorité suprême
                de l&apos;Église, mais il faut résister et rejeter ouvertement
                lesdites doctrines et réformes, et exercer un apostolat non
                autorisé pour sauver les âmes. C&apos;est la position de la
                Fraternité Saint-Pie X, connue sous le nom de position «
                Reconnaître et résister. »
              </p>
            </div>
            <div className="p-4 rounded-xs border border-red-200/60 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">3. </span>
                Les « papes de Vatican II » n&apos;ont pas l&apos;autorité du
                Christ, ils ne sont pas de vrais papes et sont déjà
                juridiquement déposés. C&apos;est la position du totalisme, ou
                du sédévacantisme complet.
              </p>
            </div>
            <div className="p-4 rounded-xs border-l-4 border-gold-500 bg-parchment-100/50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-gold-700">4. </span>
                Les « papes de Vatican II » n&apos;ont pas l&apos;autorité du
                Christ, ils ne sont pas de vrais papes, mais ce fait réel
                n&apos;a pas encore été juridiquement établi et reconnu dans
                l&apos;Église universelle. C&apos;est la solution proposée par
                la <strong>Thèse de Cassiciacum</strong>.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            Les deux premières solutions ne sont pas acceptables
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Ces solutions détruisent l&apos;indéfectibilité de l&apos;Église en
            lui attribuant toutes les doctrines et réformes non catholiques
            provenant de Vatican II. Cela oblige en outre soit à coopérer à ces
            doctrines et réformes non catholiques, soit à professer et à
            pratiquer une désobéissance ouverte au Pontife romain, ce qui est
            une attitude schismatique condamnée à plusieurs reprises par
            l&apos;Église.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            La troisième position est-elle viable ?
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            D&apos;une part, cette troisième position est tout à fait correcte
            en niant l&apos;autorité aux « papes de Vatican II, » préservant
            ainsi l&apos;infaillibilité de l&apos;Église en ne lui attribuant
            pas les abominations de Vatican II. Cette position est donc correcte
            dans sa partie essentielle. D&apos;un autre côté, elle ne parvient
            pas à faire la distinction appropriée entre l&apos;ordre réel et
            l&apos;ordre juridique. La position « totaliste » est également
            incapable d&apos;apporter une réponse théologique satisfaisante au
            problème de la succession apostolique perpétuelle du Siège romain,
            exigée par l&apos;indéfectibilité de l&apos;Église et enseignée par
            le Concile du Vatican de 1870 (Constitution dogmatique{" "}
            <em>Pastor Aeternus</em>).
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            La solution proposée par le Père Guérard des Lauriers O.P.
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            La Thèse de Cassiciacum n&apos;attribue pas à l&apos;autorité de
            l&apos;Église les abominations de Vatican II, ne contredisant donc
            pas l&apos;infaillibilité de l&apos;Église à cet égard.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            En même temps, même si les « pontificats de Vatican II » sont nuls
            en réalité, cette nullité n&apos;a pas encore été juridiquement
            établie et déclarée par une autorité compétente dans
            l&apos;Église. Par conséquent, même si le Siège romain est en fait
            vacant, c&apos;est-à-dire que ceux qu&apos;il l&apos;ont occupé
            depuis Vatican II n&apos;étaient pas et ne sont pas de vrais papes,
            ils conservent néanmoins une désignation légale de papes,
            jusqu&apos;à ce qu&apos;elle leur soit canoniquement retirée. Cette
            distinction entre l&apos;ordre réel (<em>de facto</em>) et
            l&apos;ordre juridique (<em>de jure</em>) permet à la Thèse
            d&apos;apporter une solution logique au problème de la succession
            apostolique perpétuelle du Siège romain, exigée par
            l&apos;indéfectibilité de l&apos;Église.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            En effet, on pourrait, pour simplifier, reprocher aux modernistes «
            conservateurs » de sacrifier l&apos;indéfectibilité de la foi sous
            prétexte de sauvegarder l&apos;indéfectibilité de la succession
            apostolique. Aux sédévacantistes complets, on pourrait faire le
            reproche opposé : sacrifier et faire entièrement abstraction de
            l&apos;indéfectibilité de la succession apostolique au nom de
            l&apos;indéfectibilité de la foi. Quant à la position « Reconnaître
            et Résister » (de la FSSPX, entre autres), on pourrait, pour
            simplifier, dire qu&apos;elle sacrifie à moitié l&apos;une et à
            moitié l&apos;autre au nom de l&apos;indéfectibilité des sacrements
            (la Messe en Latin à tout prix, sans aucune consistance théologique).
            Or ces différents aspects de l&apos;indéfectibilité de l&apos;Église
            doivent tous être sauvegardés. On ne peut pas garder seulement un de
            ces aspects, pour en abandonner un autre. Tous ces aspects de
            l&apos;indéfectibilité de l&apos;Église doivent nécessairement
            pouvoir être harmonisés. C&apos;est le nœud gordien que résolut le
            Père Guérard des Lauriers O.P.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            C&apos;est cette explication théologique du Père Guérard des
            Lauriers O.P. qui avait convaincu monsieur l&apos;abbé Guépin et un
            certain nombre de prêtres, de séminaristes et de catholiques dès les
            premiers temps de la « Tradition » et de la résistance à Vatican II,
            et c&apos;est cette même position théologique qui est tenue par
            notre clergé aujourd&apos;hui encore.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p className="mb-2">
              Pour ce motif, nous rejetons et dénonçons catégoriquement toute
              dérive « conclaviste » comme contraire aux règles du droit, à
              l&apos;enseignement des canonistes et des théologiens approuvés (et
              en particulier contraire à l&apos;enseignement de St Robert
              Bellarmin), contredit par la pratique et l&apos;enseignement de
              l&apos;Église (en particulier le Concile de Constance).
            </p>
          </blockquote>
        </div>
      </section>

      {/* Le problème de l'UNA CUM */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Le problème de l&apos;UNA CUM
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Le Père Guérard des Lauriers, en publiant pour la première fois
            (1979) son analyse théologique de la situation de l&apos;autorité
            dans l&apos;Église, le faisait avec le sous-titre{" "}
            <em>« Lex orandi, lex credendi, »</em> principe évocateur
            d&apos;un problème pratique : fallait-il mentionner le nom de Paul
            VI au canon de la Messe ?
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le savant théologien répondait par la négative à ce grave problème.
            Mentionner le nom de Paul VI (ou de François/Bergoglio
            aujourd&apos;hui) au canon de la Messe serait un mensonge
            sacrilège et une participation au « schisme capital »
            (c&apos;est-à-dire le schisme de celui qui devrait être pape mais ne
            l&apos;est pas) de Paul VI.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            C&apos;est en raison de ses positions sur la situation actuelle de
            l&apos;autorité dans l&apos;Église, et ses conclusions relatives au
            problème de l&apos;<em>una cum</em> que le Père Guérard des
            Lauriers O.P. fut renvoyé du séminaire d&apos;Ecône où il
            enseignait depuis quelques années (il avait auparavant été renvoyé
            de son poste, bien plus prestigieux, de professeur à
            l&apos;Université du Latran, à Rome, en raison de sa participation
            au travail du Bref Examen Critique).
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            De façon semblable, c&apos;est en raison de ses convictions
            profondes sur cette grave question de l&apos;<em>una cum</em> que
            monsieur l&apos;abbé Philippe Guépin, avec son confrère monsieur
            l&apos;abbé Hervé Belmont, fut renvoyé de la Fraternité Sacerdotale
            Saint Pie X par Monseigneur Lefèbvre lui-même.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Monsieur l&apos;abbé Guépin garda toute sa vie un grand respect et
            une grande estime pour Monseigneur Lefèbvre, dont il fut un temps le
            chauffeur et le confident, mais il ne pouvait se résoudre à entacher
            la sainte Messe du nom impie de Jean-Paul II.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            C&apos;est cette question, en effet, qui nous sépare le plus, dans
            l&apos;ordre pratique, de la Fraternité Sacerdotale Saint Pie X.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Célébrer la Messe « <em>una cum</em> » Bergoglio,
            c&apos;est-à-dire en union avec lui, c&apos;est le reconnaître,
            dans l&apos;acte le plus solennel et le plus saint de notre religion
            catholique, comme le vicaire de Notre Seigneur Jésus-Christ, la
            règle de notre foi, et le centre de l&apos;unité de
            l&apos;Église. C&apos;est implicitement reconnaître la légitimité de
            tout ce que les « papes de Vatican II » ont enseigné et promulgué.
            C&apos;est être en communion avec eux, et professer que Notre
            Seigneur Lui-même est « un avec » eux.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p className="mb-2">
              « La commémoraison du Pontife romain pendant la Messe, ainsi que
              les prières faites pour lui pendant le Sacrifice sont considérées
              comme étant, et sont un signe déclaratif certain par lequel le
              même Pontife est reconnu comme tête de l&apos;Église, le vicaire
              du Christ et le successeur de saint Pierre, et devient une
              profession d&apos;un esprit et d&apos;une volonté adhérents
              fermement à l&apos;unité catholique… Cette commémoraison est la
              plus haute et la plus honorable forme de communion. »
            </p>
            <footer className="text-sm text-ink-500 not-italic">
              Benoît XIV, <em>De Sacrosancto Missæ Sacrificio</em>, Appendix XVI
              ad Lib. II, §12.
            </footer>
          </blockquote>

          <p className="text-ink-800 leading-relaxed mb-4">
            Comme les chouans et les vendéens qui refusaient de recevoir les
            sacrements administrés par les prêtres jureurs et assermentés au
            gouvernement révolutionnaire, et comme le Pape Pie VI confirma
            effectivement l&apos;importance de ce combat, de même nous
            soutenons aujourd&apos;hui l&apos;importance d&apos;offrir le Saint
            Sacrifice de la Messe pur de toute mention des faux pasteurs de
            Vatican II, qui imposent continuellement l&apos;hérésie et le
            blasphème, et qui participent régulièrement aux rites hérétiques et
            païens.
          </p>
        </div>
      </section>

      {/* Les sacres sans mandat */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Les sacres sans mandat
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Pour assurer la pérennité du sacerdoce, le problème de
            l&apos;épiscopat se posa rapidement à tous ceux qui rejetaient les
            nouveautés de Vatican II et les nouveaux sacrements. Les nouveaux
            rites d&apos;ordination sacerdotale et de consécration épiscopale ne
            remplissent plus les exigences définies par le Pape Pie XII
            (Constitution Apostolique <em>Sacramentum Ordinis</em>, 30 novembre
            1947) et doivent donc à toutes fins pratiques être considérés comme
            invalides.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Cette triste situation, et l&apos;impossibilité de recourir à un
            véritable Pape, successeur légitime de saint Pierre, poussèrent le
            Père Guérard des Lauriers O.P. à étudier théologiquement la
            possibilité de procéder à des consécrations épiscopales sans le
            mandat pontifical normalement exigé par le Droit Canonique. Sur ce
            point comme sur beaucoup d&apos;autres, le Père Guérard fut un
            véritable pionnier. Il accepta lui-même la consécration épiscopale
            le 7 mai 1981, pour assurer la pérennité du sacerdoce catholique.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Nous bénéficions encore aujourd&apos;hui des fruits de cette
            consécration, puisque Monseigneur Guérard des Lauriers O.P. consacra
            Monseigneur McKenna O.P., qui à son tour consacra Monseigneur
            Stuyvert (IMBC), et Monseigneur Sanborn (ICR), lequel ordonna les
            abbés Dutertre, de La Chanonie, et Orasch, qui desservent
            aujourd&apos;hui nos centres de Messe.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p className="mb-2">
              « Considérons le cas du R. P. Guérard des Lauriers, son
              intelligence supérieure (docteur en théologie, en philosophie et
              en mathématiques), son amour de l&apos;Église, sa piété qui nous
              édifiait au séminaire d&apos;Écône. En prenant la décision de se
              faire sacrer évêque (7 mai 1981) pour la sauvegarde du sacerdoce
              catholique, il avait l&apos;intention de rester dans
              l&apos;unité de l&apos;Église malgré l&apos;absence de mandat
              exprès du pape, inaccessible en raison de la vacance du
              Saint-Siège. Et c&apos;est la raison pour laquelle il a signé
              cette admirable profession de Foi et de fidélité à la Sainte
              Église : « Aussitôt que l&apos;Autorité légitime sera rétablie,
              je déposerai mon sacre aux pieds du Successeur de Pierre. » »
            </p>
            <footer className="text-sm text-ink-500 not-italic">
              Abbé Philippe Guépin, <em>Lettre pour éclairer les fidèles</em>,
              11 février 2020.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* La restauration de la liturgie traditionnelle */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          La restauration de la liturgie traditionnelle
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Au delà de la Messe traditionnelle et du Canon romain, les
            catholiques qui rejetèrent Vatican II et la « nouvelle messe » se
            retrouvèrent bientôt confrontés à une évidence : la commission
            liturgique qui avait fabriqué la « nouvelle messe » de toutes
            pièces, et son chef Annibale Bugnini (dénoncé comme étant
            franc-maçon), avait déjà altéré les rubriques du Missel et du
            Bréviaire. Quelques changements furent implémentés par le Pape Pie
            XII lui-même. Ces modifications ne compromettaient pas la Foi, mais
            dans l&apos;intention de ces funestes architectes elles étaient déjà
            des fondations posées pour les réformes ultérieures.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Ce qu&apos;on appelle désormais le « Missel et le Bréviaire de Jean
            XXIII » devint de fait la loi liturgique observée dans
            l&apos;Église toute entière, avant d&apos;être à nouveau supplantée
            par de nouvelles réformes introduites par Paul VI (avant même la
            promulgation du <em>novus ordo missae</em>). Ce qui restait de la
            Messe traditionnelle, au gré de ces changements liturgiques, fut le
            plus proche possible de la nouvelle messe sans être la nouvelle
            messe. Le but avait été, clairement, de préparer les mentalités à
            accepter le nouveau rite liturgique de 1969.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            La difficulté était de concilier deux problèmes : (1) toutes ces
            réformes avaient servi, de fait, d&apos;étapes intermédiaires à la
            messe de Paul VI ; (2) les lois liturgiques sont, de soi,
            obligatoires.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Comme le disait Monseigneur Guérard des Lauriers, il n&apos;y a pas
            de solution canoniquement parfaite dans notre situation. Suivre les
            dernières réformes de Paul VI est évidemment s&apos;approcher
            dangereusement du nouveau rite moderniste. Utiliser les livres
            liturgiques de Jean XXIII est déjà s&apos;en approcher, et
            c&apos;est reconnaître d&apos;une façon spéciale son autorité
            pontificale (or nous considérons Pie XII comme étant le dernier
            Pape certain). Il nous semble plus conforme aux principes
            catholiques de retourner au Missel et Bréviaire de Saint Pie X, qui
            sont antérieurs à ces réformes.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Vient ensuite la question de savoir si l&apos;on doit retourner aux
            dernières modifications de cette liturgie de Saint Pie X,
            introduites par le Pape Pie XII, ou bien si l&apos;on doit
            retourner aux rubriques antérieures à tout changement introduit par
            la Commission liturgique qui a produit la nouvelle messe.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Il nous semble plus logique de retourner aux rubriques telles
            qu&apos;elles existaient avant le travail de cette funeste
            commission liturgique, d&apos;autant plus que les modifications de
            Pie XII n&apos;étaient plus, de fait, la loi liturgique observée
            dans l&apos;Église, et d&apos;autant plus que, tant que nous
            demeurons orphelins d&apos;autorité, il est impossible
            d&apos;obtenir l&apos;unanimité des catholiques sur la date exacte
            à partir de laquelle on devrait ou on ne devrait plus observer les
            lois liturgiques successives émanant du Saint Siège dans cette
            période troublée qui mena à Vatican II.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            A ceux qui disent que ne pas suivre les rubriques de Pie XII
            constitue un péché grave de désobéissance, nous répondons,{" "}
            <em>ad hominem</em>, que dans ce cas l&apos;Église entière aurait
            commis un péché grave (ce qui est impossible) en abandonnant non
            seulement les rubriques de Pie XII, mais même les livres liturgiques
            de Saint Pie X (ce que les rubriques de Pie XII conservaient) pour
            les remplacer par le Missel et le Bréviaire de Jean XXIII.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Tout en témoignant beaucoup d&apos;estime et de respect pour
            monsieur l&apos;abbé Guépin, nos prêtres pensent donc pouvoir
            différer de lui sur cette question légitimement disputée. Tous les
            offices célébrés dans nos chapelles suivent désormais les rubriques
            de la liturgie de Saint Pie X, pure de toute altération produite par
            la commission liturgique qui conduisit à la nouvelle messe. Ceci se
            manifeste particulièrement lors de la Semaine Sainte, dont les rites
            pourtant multi-séculaires furent le plus drastiquement émondés par
            cette commission.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Questions fréquentes
        </h2>
        <Accordion allowMultiple>
          <AccordionItem value="faq-0">
            <AccordionTrigger value="faq-0">
              Que signifie « Non Una Cum » ?
            </AccordionTrigger>
            <AccordionContent value="faq-0">
              <p>
                « Non Una Cum » signifie « non uni avec » en latin. Dans le
                contexte liturgique, cela désigne la pratique de ne pas
                mentionner le nom du pape (ou de l&apos;évêque diocésain) dans le
                Canon de la Messe, signifiant ainsi un refus de communier dans
                les erreurs promues. Célébrer la Messe « una cum » Bergoglio,
                c&apos;est le reconnaître dans l&apos;acte le plus solennel de
                notre religion comme le vicaire de Notre Seigneur Jésus-Christ.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-1">
            <AccordionTrigger value="faq-1">
              Le Non Una Cum est-il un schisme ?
            </AccordionTrigger>
            <AccordionContent value="faq-1">
              <p>
                La question est débattue. Les partisans du Non Una Cum
                argumentent qu&apos;ils ne rompent pas avec la foi catholique,
                mais refusent de signifier une communion dans des erreurs. Le
                schisme suppose un refus de soumission au Pontife Romain en tant
                que tel, ce qui n&apos;est pas le cas ici. La Thèse de
                Cassiciacum distingue l&apos;ordre réel (
                <em>de facto</em>) de l&apos;ordre juridique (
                <em>de jure</em>).
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger value="faq-2">
              Qu&apos;est-ce que la Thèse de Cassiciacum ?
            </AccordionTrigger>
            <AccordionContent value="faq-2">
              <p>
                La Thèse de Cassiciacum, proposée par le Père Guérard des
                Lauriers O.P., est une analyse théologique de la situation de
                l&apos;autorité dans l&apos;Église après Vatican II. Elle
                soutient que les « papes de Vatican II » n&apos;ont pas
                l&apos;autorité du Christ (ils ne sont pas de vrais papes dans
                l&apos;ordre réel), mais que cette nullité n&apos;a pas encore
                été juridiquement établie dans l&apos;Église universelle. Cette
                distinction permet de préserver à la fois
                l&apos;infaillibilité de l&apos;Église et la succession
                apostolique perpétuelle du Siège romain.
              </p>
              <p className="mt-2">
                <Link
                  href="/crise/cassiciacum"
                  className="text-gold-600 hover:text-gold-700 underline transition-colors"
                >
                  Voir la page dédiée à la Thèse de Cassiciacum pour une
                  étude complète.
                </Link>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger value="faq-3">
              Pourquoi ne pas simplement « reconnaître et résister » comme la
              FSSPX ?
            </AccordionTrigger>
            <AccordionContent value="faq-3">
              <p>
                La position « Reconnaître et Résister » reconnaît
                l&apos;autorité des « papes de Vatican II » tout en résistant à
                leurs erreurs. Cette approche, selon les tenants de la Thèse de
                Cassiciacum, sacrifie à moitié l&apos;indéfectibilité de la foi
                et à moitié l&apos;indéfectibilité de la succession apostolique
                au nom de l&apos;indéfectibilité des sacrements. Elle oblige
                également à professer et pratiquer une désobéissance ouverte au
                Pontife romain, ce qui est une attitude schismatique condamnée
                par l&apos;Église.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger value="faq-4">
              Qu&apos;est-ce que le Bref Examen Critique ?
            </AccordionTrigger>
            <AccordionContent value="faq-4">
              <p>
                Le Bref Examen Critique de l&apos;Ordo Missae de Paul VI est une
                étude théologique rédigée principalement par le Père Guérard des
                Lauriers O.P., signée par les Cardinaux Ottaviani et Bacci, et
                remise à Paul VI en 1969. Cette critique démontrait que le
                nouvel Ordo Missae « s&apos;éloigne de façon impressionnante,
                dans l&apos;ensemble comme dans le détail, de la théologie
                catholique de la Sainte Messe, telle qu&apos;elle a été
                formulée à la XXème session du Concile de Trente. »
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger value="faq-5">
              Pourquoi les sacres épiscopaux sans mandat pontifical ?
            </AccordionTrigger>
            <AccordionContent value="faq-5">
              <p>
                Pour assurer la pérennité du sacerdoce catholique, les nouveaux
                rites d&apos;ordination et de consécration étant considérés
                comme invalides (ne remplissant pas les exigences de Pie XII
                dans <em>Sacramentum Ordinis</em>), il fallut recourir à des
                consécrations épiscopales sans le mandat pontifical normalement
                exigé. Le Père Guérard des Lauriers O.P. accepta lui-même la
                consécration épiscopale le 7 mai 1981, signant une profession de
                foi : « Aussitôt que l&apos;Autorité légitime sera rétablie, je
                déposerai mon sacre aux pieds du Successeur de Pierre. »
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Sources et références */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Sources et références
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Source
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Cardinal Ottaviani et Cardinal Bacci — Lettre à Paul VI
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Lettre accompagnant le Bref Examen Critique, 3 septembre 1969.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Théologie
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Mgr Guérard des Lauriers O.P. — Thèse de Cassiciacum
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Analyse théologique de la situation de l&apos;autorité dans
                l&apos;Église, sous-titrée{" "}
                <em>« Lex orandi, lex credendi »</em> (1979).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Canon
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Benoît XIV — De Sacrosancto Missæ Sacrificio
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Appendix XVI ad Lib. II, §12 — sur la commémoraison du Pontife
                romain comme signe de communion.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Dogme
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Concile de Trente — Session 22, Canon 7
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Sur les cérémonies et signes extérieurs de la Messe.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Dogme
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Concile du Vatican — Pastor Aeternus (1870)
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Constitution dogmatique sur la succession apostolique perpétuelle
                du Siège romain.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Liturgie
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Pie XII — Sacramentum Ordinis (1947)
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Constitution Apostolique définissant les exigences des rites
                d&apos;ordination et de consécration épiscopale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
