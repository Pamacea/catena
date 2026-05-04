import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export const metadata = {
  title: "Thèse de Cassiciacum | Crise de l'Église",
  description:
    "La Thèse de Cassiciacum du Père Guérard des Lauriers O.P. — l'explication thomiste de l'état actuel de l'autorité dans l'Église",
};

export default function TheseCassiciacumPage() {
  return (
    <>
      {/* Section header */}
      <header className="mb-10 pb-6 border-b-2 border-gold-400/30">
        <nav className="flex items-center gap-2 text-sm text-ink-600 mb-4">
          <a href="/crise" className="hover:text-gold-700 transition-colors">
            Crise
          </a>
          <span className="text-gold-500">/</span>
          <span className="text-ink-900">Thèse de Cassiciacum</span>
        </nav>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 mb-3">
          Thèse de Cassiciacum
        </h1>
        <p className="text-lg text-ink-700">
          L&apos;explication thomiste de l&apos;état actuel de
          l&apos;autorité dans l&apos;Église, par le Père Guérard des
          Lauriers O.P.
        </p>
      </header>

      {/* ============ 1. INTRODUCTION ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          Introduction
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            La Thèse de Cassiciacum est l&apos;analyse théologique proposée par
            le R. P. Michel-Louis Guérard des Lauriers O.P. (1898–1988) pour
            expliquer la situation sans précédent de l&apos;autorité dans
            l&apos;Église catholique depuis le Concile Vatican II et ses
            réformes. Publiée pour la première fois en 1979 sous le sous-titre{" "}
            <em>« Lex orandi, lex credendi »</em>, cette thèse s&apos;appuie sur
            les principes de la théologie thomiste pour résoudre le dilemme auquel
            sont confrontés les catholiques fidèles à la Tradition.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le nom « Cassiciacum » fait référence à la localité près de Milan où
            saint Augustin reçut le baptême des mains de saint Ambroise, et où il
            composa ses premiers dialogues philosophiques. Le Père Guérard des
            Lauriers choisit ce nom pour souligner la continuité de sa démarche
            avec la tradition intellectuelle catholique.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Cette page présente les fondements théologiques de la Thèse, les
            preuves tirées des conciles, des encycliques, du droit canon, de la
            Somme Théologique de saint Thomas d&apos;Aquin, ainsi que les réponses
            aux objections habituellement soulevées contre elle.
          </p>
        </div>
      </section>

      {/* ============ 2. LE CONSTAT ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          I. Le constat : la crise post-conciliaire
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            La Thèse de Cassiciacum part d&apos;un constat théologique
            rigoureux : le Concile Vatican II (1962–1965) et les réformes qui
            l&apos;ont suivi ont introduit des erreurs doctrinales substantielles
            et des disciplines contraires à la foi et à la pratique constante de
            l&apos;Église. Ce constat est le préalable nécessaire à
            l&apos;examen de la Thèse.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            A. Les erreurs doctrinales de Vatican II
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Quatre points principaux de la doctrine catholique ont été
            affectés par des erreurs introduites à Vatican II :
          </p>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-4 rounded-xs border-l-4 border-red-400 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">1. L&apos;unité
                de l&apos;Église </span> — Vatican II enseigne que
                l&apos;Église du Christ « subsiste » dans l&apos;Église
                catholique (Lumen Gentium §8), au lieu d&apos;affirmer qu&apos;elle
                y <em>est</em> identiquement. Cette formulation ouvre la voie à
                l&apos;œcuménisme en suggérant que d&apos;autres « Églises »
                participeraient de l&apos;Église du Christ.
              </p>
            </div>
            <div className="p-4 rounded-xs border-l-4 border-red-400 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">2.
                L&apos;œcuménisme </span> — Unitatis Redintegratio promeut le
                mouvement œcuménique, alors que l&apos;Église a toujours
                enseigné que les non-catholiques doivent revenir à
                l&apos;unité de l&apos;Église catholique, et non qu&apos;il
                faudrait « reconstruire » cette unité par un dialogue entre
                « Églises sœurs ».
              </p>
            </div>
            <div className="p-4 rounded-xs border-l-4 border-red-400 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">3. La liberté
                religieuse </span> — Dignitatis Humanae affirme un droit naturel
                à la liberté religieuse dans le domaine public, en contradiction
                directe avec l&apos;enseignement de Grégoire XVI (
                <em>Mirari Vos</em>), Pie IX (<em>Quanta Cura</em>), Léon XIII (
                <em>Libertas Praestantissimum</em>) et Pie XI (
                <em>Quas Primas</em>), selon lequel les États ont le devoir de
                rendre à Dieu un culte public selon la religion catholique.
              </p>
            </div>
            <div className="p-4 rounded-xs border-l-4 border-red-400 bg-red-50/30">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-red-700">4. La
                collégialité </span> — Lumen Gentium §22 enseigne que le collège
                des évêques, avec le pape à sa tête, possède le pouvoir
                suprême sur l&apos;Église universelle, ce qui relativise le
                pouvoir monarchique du Pontife Romain tel que défini par le
                Concile du Vatican (<em>Pastor Aeternus</em>, 1870).
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            B. Les disciplines contraires
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le Code de droit canonique de 1983, le Directoire œcuménique de
            1993 et la « nouvelle messe » de Paul VI (Novus Ordo Missae, 1969)
            constituent des disciplines universellement imposées qui sont
            contraires à la foi et à la morale : communion des non-catholiques,{" "}
            <em>communicatio in sacris</em>, libéralisation du mariage, rite
            liturgique protestantisé, nouveaux rites sacramentels douteux ou
            invalides.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            C. Le principe théologique fondamental
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Ce constat se heurte au principe théologique suivant, fondé sur
            l&apos;infaillibilité et l&apos;indéfectibilité de l&apos;Église :
          </p>
          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p>
              Il est <strong>impossible</strong> que l&apos;Église, dans
              l&apos;exercice de son autorité suprême ou dans son magistère
              ordinaire universel, enseigne l&apos;erreur et l&apos;hérésie, ou
              impose une discipline universellement peccamineuse ou un rite
              liturgique qui ne soit pas saint et sanctifiant.
            </p>
          </blockquote>
          <p className="text-ink-800 leading-relaxed mb-4">
            Ce principe repose sur plusieurs fondements dogmatiques :
          </p>
          <div className="space-y-2 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Concile du Vatican (1870),{" "}
                <em>Pastor Aeternus</em> :</span>{" "}
                Le Pontife Romain, lorsqu&apos;il parle <em>ex cathedra</em>,
                jouit de l&apos;infaillibilité promise par le Christ à saint
                Pierre.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Concile de Trente, Session 22,
                Canon 7 :</span>{" "}
                « Si quelqu&apos;un dit que les cérémonies, les vêtements et les
                signes extérieurs dont l&apos;Église se sert dans la célébration
                de la messe sont plutôt des dérisions de l&apos;impiété que des
                marques de piété : qu&apos;il soit anathème. »
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Saint Thomas d&apos;Aquin,{" "}
                <em>Contra errores Graecorum</em> :</span>{" "}
                « La foi catholique enseigne que l&apos;Église ne peut errer. »
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Pie XII, <em>Mystici Corporis
                </em> (1943) :</span>{" "}
                L&apos;Église est le Corps mystique du Christ, dont la sainteté
                et l&apos;indéfectibilité sont garanties par son divin
                Fondateur.
              </p>
            </div>
          </div>
          <p className="text-ink-800 leading-relaxed mb-4">
            La contradiction entre les erreurs de Vatican II et ce principe
            d&apos;infaillibilité impose une conclusion logique : ce qui vient
            de Vatican II ne peut pas provenir de l&apos;autorité de
            l&apos;Église. Il faut donc examiner la question de l&apos;autorité
            de ceux qui ont promulgué ces erreurs.
          </p>
        </div>
      </section>

      {/* ============ 3. LES PRINCIPES THOMISTES ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          II. Les principes thomistes : matière et forme de la Papauté
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            La Thèse de Cassiciacum applique à la question de la papauté la
            distinction aristotélico-thomiste entre la{" "}
            <strong>matière</strong> et la <strong>forme</strong>, distinction
            fondamentale de la philosophie naturelle et de la métaphysique.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            A. La matière et la forme en théologie thomiste
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Saint Thomas d&apos;Aquin enseigne que tout être composé est
            constitué de matière (le principe de détermination, ce qui reçoit
            la forme) et de forme (le principe d&apos;actuation, ce qui donne
            l&apos;être à la matière). Appliquée à la papauté :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
            <div className="p-5 rounded-xs border border-gold-400/30 bg-stone-50">
              <h4 className="font-serif text-lg font-semibold text-ink-900 mb-2">
                Papauté matérielle
              </h4>
              <p className="text-sm text-ink-700 leading-relaxed">
                La <em>potestas</em> — le pouvoir papal en tant que tel,
                l&apos;office du Pontife Romain. C&apos;est la « matière » de
                la papauté : l&apos;élection canonique, la désignation comme
                évêque de Rome, la possession potentielle de
                l&apos;autorité suprême.
              </p>
            </div>
            <div className="p-5 rounded-xs border border-gold-400/30 bg-stone-50">
              <h4 className="font-serif text-lg font-semibold text-ink-900 mb-2">
                Papauté formelle
              </h4>
              <p className="text-sm text-ink-700 leading-relaxed">
                La <em>intentio</em> — l&apos;intention de gouverner
                l&apos;Église selon la foi catholique, de professer et de
                défendre la foi du Christ. C&apos;est la « forme » de la
                papauté : l&apos;intention droite requise pour que le pouvoir
                soit effectivement acte de papauté.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            B. L&apos;union matière-forme : l&apos;acceptation de l&apos;élection
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Saint Antonin de Florence (1389–1459), archevêque de Florence et
            théologien dominicain, dans sa <em>Summa Theologica</em>{" "}
            (Titulus XXII, Caput III), distingue trois éléments dans la
            constitution du pape :
          </p>
          <ol className="list-decimal pl-6 mb-4 text-ink-800 leading-relaxed space-y-2">
            <li>
              L&apos;<strong>élection</strong> canonique par le conclave.
            </li>
            <li>
              La <strong>confirmation</strong> ou acceptation de
              l&apos;élection par l&apos;élu.
            </li>
            <li>
              L&apos;<strong>union</strong> de l&apos;élection et de
              l&apos;acceptation, qui consomme la papauté.
            </li>
          </ol>
          <p className="text-ink-800 leading-relaxed mb-4">
            Le cardinal Cajetan (1469–1534), dans son traité <em>De
            Comparatione Auctoritatis Papae et Concilii</em>, développe cette
            analyse : l&apos;acceptation de l&apos;élection est l&apos;acte par
            lequel l&apos;élu consent à exercer l&apos;office pontifical. Or,
            cet acte d&apos;acceptation requiert une <strong>intention</strong>{" "}
            (intentio), qui est la forme donnant à l&apos;élection sa
            perfection.
          </p>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            C. L&apos;intention requise
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Saint Thomas enseigne (Somme Théologique, IIIa, q. 64, a. 8) que
            le ministre du sacrement doit avoir l&apos;intention de faire ce
            que fait l&apos;Église (<em>intentio faciendi quod facit
            Ecclesia</em>). Par analogie, celui qui est élu pape doit avoir
            l&apos;intention de faire ce que fait le Pape : gouverner
            l&apos;Église selon la foi catholique.
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            Or, si un élu au pontificat refuse d&apos;emblée de gouverner selon
            la foi catholique — s&apos;il promeut au contraire des erreurs
            contraires à cette foi — peut-on dire qu&apos;il possède
            l&apos;intention requise pour être formellement pape ? La réponse
            est négative : l&apos;intention de promouvoir des erreurs est
            incompatible avec l&apos;intention de gouverner l&apos;Église
            selon la foi du Christ.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-4 py-2 my-6 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
            <p>
              « Le Pape ne peut pas être catholique occasionnellement seulement.
              Ou bien le Pape est catholique, et il est Pape dans tous les actes
              qu&apos;il pose ; il doit être suivi dans chacune de ses
              ordonnances, c&apos;est-à-dire habituellement. Ou bien le pape
              n&apos;est pas catholique ; et il n&apos;a pas le droit
              d&apos;être suivi, parce qu&apos;il n&apos;est pas Pape
              formellement. Soit l&apos;un, soit l&apos;autre. L&apos;un
              exclut l&apos;autre. »
            </p>
            <footer className="text-sm text-ink-500 not-italic">
              Père Guérard des Lauriers O.P., réponse à une objection,
              <em> Sodalitium</em> n61.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ============ 4. LA THÈSE ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          III. La Thèse de Cassiciacum exposée
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            Appliquant ces principes thomistes à la situation actuelle, la
            Thèse de Cassiciacum soutient les deux propositions suivantes :
          </p>

          <div className="p-6 rounded-xs border-2 border-gold-500/50 bg-parchment-50 my-6 not-prose">
            <h4 className="font-serif text-lg font-semibold text-gold-800 mb-3">
              Proposition I — Ordre réel (<em>de facto</em>)
            </h4>
            <p className="text-sm text-ink-800 leading-relaxed">
              Les occupants du Siège apostolique depuis Jean XXIII inclusivement
              ne possèdent pas <strong>formellement</strong> l&apos;autorité
              pontificale. Ils ne sont pas de vrais papes dans l&apos;ordre
              réel (<em>de facto</em>), parce qu&apos;ils n&apos;ont pas
              l&apos;intention de gouverner l&apos;Église selon la foi
              catholique — au contraire, ils promeuvent des erreurs substantielles
              contraires à cette foi.
            </p>
          </div>

          <div className="p-6 rounded-xs border-2 border-gold-500/50 bg-parchment-50 my-6 not-prose">
            <h4 className="font-serif text-lg font-semibold text-gold-800 mb-3">
              Proposition II — Ordre juridique (<em>de jure</em>)
            </h4>
            <p className="text-sm text-ink-800 leading-relaxed">
              Cependant, cette nullité n&apos;a pas encore été{" "}
              <strong>juridiquement établie et déclarée</strong> par une
              autorité compétente dans l&apos;Église. Par conséquent, les
              occupants du Siège apostolique conservent une{" "}
              <strong>désignation légale</strong> (<em>de jure</em>) de papes,
              jusqu&apos;à ce que cette désignation leur soit canoniquement
              retirée. Ils conservent la <strong>papauté matérielle</strong>{" "}
              (l&apos;élection canonique, la désignation comme évêque de Rome)
              mais pas la <strong>papauté formelle</strong> (l&apos;intention
              de gouverner selon la foi catholique).
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            Conséquences de la Thèse
          </h3>
          <p className="text-ink-800 leading-relaxed mb-4">
            Cette double distinction permet de sauvegarder simultanément les
            trois aspects de l&apos;indéfectibilité de l&apos;Église que les
            autres solutions sacrifient :
          </p>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-4 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-gold-700">1.
                L&apos;infaillibilité de la foi :</span>{" "}
                Les erreurs de Vatican II ne sont pas attribuées à
                l&apos;autorité de l&apos;Église, puisque ceux qui les ont
                promues n&apos;étaient pas formellement papes.
              </p>
            </div>
            <div className="p-4 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-gold-700">2. La succession
                apostolique perpétuelle :</span>{" "}
                Le Siège romain n&apos;est pas totalement et irrémédiablement
                vacant (vacance formelle et matérielle). La désignation légale
                de pape est maintenue, et l&apos;élection d&apos;un vrai pape
                reste possible et ordonnée par la Providence.
              </p>
            </div>
            <div className="p-4 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold text-gold-700">3.
                L&apos;indéfectibilité des sacrements :</span>{" "}
                La vraie Messe et les vrais sacrements continuent d&apos;être
                célébrés par les prêtres et évêques fidèles à la Tradition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. FONDEMENTS DOCTRINAUX ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          IV. Fondements dans la doctrine catholique
        </h2>
        <div className="prose prose-ink max-w-none">
          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-6 mb-3">
            A. Saint Thomas d&apos;Aquin
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Somme Théologique, IIa-IIae, q.
                1, a. 10 :</span>{" "}
                L&apos;hérétique formel, par le fait même de son hérésie, cesse
                d&apos;appartenir à l&apos;Église. Si le pape devient
                hérétique public, il cesse d&apos;être membre de
                l&apos;Église, et <em>a fortiori</em> cesse d&apos;en être la
                tête.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Somme Théologique, IIIa, q. 64,
                a. 8 :</span>{" "}
                Le ministre doit avoir l&apos;intention de faire ce que fait
                l&apos;Église. Sans cette intention, l&apos;acte sacramentel
                est invalide. Par analogie, l&apos;acceptation de
                l&apos;élection pontificale requiert l&apos;intention de
                gouverner selon la foi.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Somme Théologique, IIIa, q. 82,
                a. 7 :</span>{" "}
                Le prêtre hérétique peut consacrer validement (le sacrement
                dépend de la puissance d&apos;ordre), mais il ne peut pas
                consacrer licitement. Distinction entre validité et licéité
                applicable aussi à la question du pouvoir de juridiction.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">De Veritate, q. 14, a. 11 :</span>{" "}
                L&apos;hérétique séparé de l&apos;Église par sentence
                déclaratoire est juridiquement hors de l&apos;Église.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            B. Saint Robert Bellarmin
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">De Romano Pontifice, Livre II,
                Chap. 30 :</span>{" "}
                « Le pape hérétique manifeste cesse par lui-même d&apos;être
                pape et tête, de la même façon qu&apos;il a cessé par
                lui-même d&apos;être chrétien et membre du corps de
                l&apos;Église. Pour cette raison, il peut être jugé et puni
                par l&apos;Église. C&apos;est l&apos;enseignement de tous les
                Pères anciens. »
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">De Romano Pontifice, Livre II,
                Chap. 30 :</span>{" "}
                Bellarmin examine cinq opinions sur la question du pape
                hérétique. La deuxième opinion (qu&apos;il cesse par
                lui-même, <em>ipso facto</em>) est celle qu&apos;il estime
                « la plus commune et la plus certaine parmi les
                théologiens » (<em>communior et certior</em>).
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            C. Le cardinal Cajetan
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">De Comparatione Auctoritatis
                Papae et Concilii :</span>{" "}
                Cajetan distingue soigneusement l&apos;élection (acte des
                électeurs), l&apos;acceptation (acte de l&apos;élu) et
                l&apos;union des deux. Sans acceptation, il n&apos;y a pas de
                pape. L&apos;acceptation requiert une intention droite.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            D. Saint Antonin de Florence
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Summa Theologica, Titulus XXII,
                Caput III :</span>{" "}
                « Le Pontife Romain, dès lors qu&apos;il est élu et accepte
                l&apos;élection, est dès lors vrai pape [...]. Cependant, si
                quelqu&apos;un était élu par les cardinaux mais refusait
                l&apos;acceptation, il ne serait pas pape [...]. De même, si
                quelqu&apos;un était intrus par force ou par ruse sans
                élection canonique, il ne serait pas pape. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. DROIT CANONIQUE ET CONCILES ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          V. Fondements dans le droit canon et les conciles
        </h2>
        <div className="prose prose-ink max-w-none">
          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-6 mb-3">
            A. Le Code de Droit Canonique de 1917
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Canon 188 §4 :</span>{" "}
                « Tout office ecclésiastique est vacant par le fait même (
                <em>ipso facto</em>) [...] §4 : par la perte publique de la
                foi catholique. » Ce canon s&apos;applique à tout titulaire
                d&apos;office ecclésiastique, y compris — et a fortiori — au
                Pontife Romain.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Canon 1325 §2 :</span>{" "}
                « Si quelqu&apos;un, après avoir reçu le baptême, tout en
                gardant le nom de chrétien, nie obstinément ou met en doute
                quelque vérité de la foi divine et catholique qu&apos;il faut
                croire, celui-là est hérétique ; par le fait même (
                <em>ipso facto</em>) il est séparé de la communion de
                l&apos;Église. »
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Canon 218 §1 :</span>{" "}
                « Le Pontife Romain, successeur de Pierre dans la primauté,
                non seulement a la primauté d&apos;honneur, mais aussi la
                primauté de juridiction pleine, suprême, universelle,
                immédiate, et épiscopale, et cette primauté il peut
                librement exercer. » — Cette primauté exige la foi pour
                être légitimement exercée.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            B. Les conciles
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Concile du Vatican (1870),
                <em>Pastor Aeternus</em> :</span>{" "}
                « Nous enseignons et déclarons que, selon le témoignage de
                l&apos;Évangile, la primauté de juridiction sur toute
                l&apos;Église, tant universelle que particulière, a été
                promise et conférée immédiatement et directement au bienheureux
                apôtre Pierre par le Christ Seigneur. » Cette primauté est
                perpétuelle et indéfectible — mais son exercice légitime
                suppose la foi.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Concile de Constance (1415),
                Session 39 :</span>{" "}
                « Nous déclarons, statuons et décrétons que toute personne [...]
                de quelque état, dignité, prééminence ou condition qu&apos;elle
                soit, même papale [...], qui refusera d&apos;obéir au saint
                concile universel actuellement réuni [...], sera punie [...]
                » — Le concile affirme qu&apos;un pape peut être soumis à un
                concile lorsqu&apos;il y a un doute légitime sur la validité
                de son élection ou de son exercice.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Concile de Trente, Session 7,
                Canon 1 :</span>{" "}
                « Si quelqu&apos;un dit que les sacrements de la Nouvelle Loi
                ne sont pas tous institués par Notre Seigneur Jésus-Christ, ou
                qu&apos;il y en a plus ou moins que sept [...], qu&apos;il
                soit anathème. » — L&apos;altération des rites sacramentels
                par Paul VI pose le problème de leur validité.
              </p>
            </div>
          </div>

          <h3 className="font-serif text-xl font-semibold text-ink-900 mt-8 mb-3">
            C. Les encycliques
          </h3>
          <div className="space-y-3 my-4 not-prose">
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Pie IX, <em>Quanta Cura</em>
                {" "}(1864) :</span>{" "}
                Condamne le « droit à la liberté de conscience et des cultes »
                comme « une erreur délirante » (<em>deliramentum</em>).
                Dignitatis Humanae de Vatican II affirme exactement ce que
                Quanta Cura condamne.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Léon XIII, <em>Satis Cognitum
                </em>{" "}(1896) :</span>{" "}
                « Celui qui n&apos;est pas uni au Corps ne peut pas être uni
                à la Tête. [...] Il ne peut y avoir dans l&apos;Église un
                magistère qui soit, par sa nature, opposé à la vérité et à
                la foi. »
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Léon XIII, <em>Libertas
                Praestantissimum</em>{" "}(1888) :</span>{" "}
                « L&apos;Église de Jésus-Christ a reçu de son divin
                Fondateur la mission de garder et d&apos;interpréter la
                doctrine révélée, et, de plus, le pouvoir de légiférer et de
                juger en matière de discipline, sans aucune dépendance
                vis-à-vis des pouvoirs civils. »
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Pie XII, <em>Humani Generis
                </em>{" "}(1950) :</span>{" "}
                « Le magistère ordinaire universel de l&apos;Église est
                infaillible dans son enseignement. » — Or, Vatican II a
                prétendu exercer un magistère pastoral qui enseigne des
                erreurs.
              </p>
            </div>
            <div className="p-3 rounded-xs border border-gold-400/20 bg-stone-50">
              <p className="text-sm text-ink-800">
                <span className="font-semibold">Pie XII, <em>Mystici Corporis
                </em>{" "}(1943) :</span>{" "}
                « Ceux qui se séparent de la société intérieure de
                l&apos;Église, par l&apos;hérésie, l&apos;apostasie ou le
                schisme, ne peuvent plus être membres de
                l&apos;Église. » — Ce principe s&apos;applique au pape
                hérétique public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. L'ÉLECTION PAPALE ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          VI. La question de l&apos;élection papale
        </h2>
        <div className="prose prose-ink max-w-none">
          <p className="text-ink-800 leading-relaxed mb-4">
            L&apos;objection classique est la suivante : « Si les papes de
            Vatican II ne sont pas de vrais papes, comment l&apos;Église
            pourra-t-elle élire un nouveau pape ? Les cardinaux nommés par
            de faux papes n&apos;ont pas le droit d&apos;élire. »
          </p>
          <p className="text-ink-800 leading-relaxed mb-4">
            La Thèse de Cassiciacum apporte une réponse satisfaisante à cette
            objection, que le sédévacantisme strict (vacance formelle et
            matérielle) ne peut pas résoudre :
          </p>
          <div className="p-5 rounded-xs border-l-4 border-gold-500 bg-parchment-100/50 my-6">
            <p className="text-sm text-ink-800 leading-relaxed">
              Puisque les occupants du Siège apostolique conservent la
              désignation légale (<em>de jure</em>) de papes, les actes
              juridiques qu&apos;ils posent dans l&apos;ordre canonique
              conservent une valeur juridique. Les cardinaux qu&apos;ils
              nomment conservent une désignation légale de cardinaux, et
              peuvent donc participer à un futur conclave. Le pouvoir
              d&apos;élection du pape n&apos;est pas irrémédiablement perdu.
              La Providence divine a prévu le moyen de restaurer
              l&apos;autorité légitime.
            </p>
          </div>
          <p className="text-ink-800 leading-relaxed mb-4">
            Cette solution est conforme à l&apos;enseignement du cardinal
            Cajetan sur la possibilité d&apos;une élection canonique même dans
            des circonstances extraordinaires, et à l&apos;enseignement du
            Concile du Vatican sur la perpétuité de la succession apostolique
            du Siège romain.
          </p>
        </div>
      </section>

      {/* ============ 8. RÉPONSES AUX OBJECTIONS ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          VII. Réponses aux objections contre la Thèse
        </h2>
        <p className="text-sm text-ink-500 mb-6 italic">
          Les objections les plus courantes sont présentées suivies de leur
          réfutation théologique.
        </p>
        <Accordion allowMultiple>
          <AccordionItem value="obj-0">
            <AccordionTrigger value="obj-0">
              Objection 1 — « La Thèse est une nouveauté, les Pères ne
              l&apos;ont jamais enseignée. »
            </AccordionTrigger>
            <AccordionContent value="obj-0">
              <div className="space-y-3">
                <p>
                  Cet argument est historiquement faux. La distinction entre
                  papauté matérielle et papauté formelle se trouve chez saint
                  Antonin de Florence (XVe siècle), dont la <em>Summa
                  Theologica</em> distingue explicitement l&apos;élection de
                  l&apos;acceptation et de leur union. Le cardinal Cajetan
                  (XVIe siècle) développe cette analyse dans son traité{" "}
                  <em>De Comparatione Auctoritatis Papae et Concilii</em>.
                </p>
                <p>
                  De plus, l&apos;argument de la nouveauté prouve trop : le
                  sédévacantisme « strict » (vacance matérielle et formelle)
                  est tout aussi « nouveau » que la Thèse de Cassiciacum. Les
                  circonstances sans précédent de la crise post-conciliaire
                  exigent une analyse théologique adaptée, qui utilise des
                  principes traditionnels pour résoudre un problème nouveau.
                </p>
                <p>
                  Le Père Guérard des Lauriers n&apos;a pas inventé de nouveaux
                  principes : il a appliqué les principes thomistes de matière
                  et forme, d&apos;intention et de causalité formelle, à la
                  question de l&apos;autorité pontificale. C&apos;est la
                  méthode même de saint Thomas.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-1">
            <AccordionTrigger value="obj-1">
              Objection 2 — « La Thèse est philosophiquement absurde : un être
              ne peut pas être matériellement quelque chose sans l&apos;être
              formellement. »
            </AccordionTrigger>
            <AccordionContent value="obj-1">
              <div className="space-y-3">
                <p>
                  Cette objection repose sur une confusion entre
                  l&apos;être physique et l&apos;être juridique. En
                  métaphysique thomiste, la distinction matière/forme
                  s&apos;applique à tout composé. Or, la papauté est un
                  composé d&apos;un office (matière) et d&apos;une intention
                  de gouverner selon la foi (forme). Sans forme, la matière
                  existe encore comme telle, mais elle n&apos;est pas
                  actuée : elle est en puissance, non en acte.
                </p>
                <p>
                  Par analogie : un sacrement célébré sans intention droite
                  du ministre peut être invalide (la matière et la forme
                  extérieures sont présentes, mais la forme intérieure —
                  l&apos;intention — fait défaut). De même,
                  l&apos;élection canonique (matière) peut exister sans que
                  l&apos;intention de gouverner selon la foi (forme) soit
                  présente. Le pouvoir potentiel existe, mais il n&apos;est
                  pas actué.
                </p>
                <p>
                  La distinction entre l&apos;ordre réel (<em>de facto</em>)
                  et l&apos;ordre juridique (<em>de jure</em>) n&apos;est pas
                  non plus absurde : le droit reconnaît des situations de fait
                  qui diffèrent de la situation de droit. Un mariage
                  juridiquement valide peut être réellement nul
                  (consanguinité, défaut de consentement). Un contrat
                  juridiquement existant peut être substantiellement vicié.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-2">
            <AccordionTrigger value="obj-2">
              Objection 3 — « La Thèse ne résout pas le problème de la
              visibilité de l&apos;Église. »
            </AccordionTrigger>
            <AccordionContent value="obj-2">
              <div className="space-y-3">
                <p>
                  C&apos;est l&apos;objection la plus fréquente et la plus
                  sérieuse. Elle repose sur le principe que l&apos;Église est
                  une société visible, et que cette visibilité requiert un
                  chef visible. Si le pape n&apos;est pas formellement pape,
                  l&apos;Église serait-elle invisible ?
                </p>
                <p>
                  La Thèse répond : l&apos;Église demeure visible par sa{" "}
                  <strong>profession de foi</strong>, ses{" "}
                  <strong>sacrements</strong> et son{" "}
                  <strong>gouvernement hiérarchique</strong>. Les prêtres et
                  évêques fidèles à la Tradition, qui célèbrent la vraie Messe
                  et enseignent la vraie foi, sont les éléments visibles de
                  l&apos;Église. La désignation légale des papes de Vatican
                  II assure la continuité juridique. L&apos;Église est
                  identifiable par sa foi et ses sacrements, même si la
                  hiérarchie est en crise.
                </p>
                <p>
                  De plus, l&apos;objection prouve trop : le
                  sédévacantisme strict aboutit au même problème, mais de
                  façon pire, puisqu&apos;il affirme une vacance totale et
                  irrémédiable du Siège, sans perspective canonique de
                  restauration. La Thèse de Cassiciacum, elle, préserve la
                  désignation légale des occupants du Siège, ce qui garantit
                  la possibilité canonique d&apos;une élection future.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-3">
            <AccordionTrigger value="obj-3">
              Objection 4 — « Reconnaître la désignation légale de pape aux
              occupants du Siège revient à les reconnaître comme vrais papes. »
            </AccordionTrigger>
            <AccordionContent value="obj-3">
              <div className="space-y-3">
                <p>
                  C&apos;est une confusion entre l&apos;ordre juridique et
                  l&apos;ordre réel. Reconnaître que quelqu&apos;un a une
                  désignation légale de pape n&apos;est pas la même chose que
                  reconnaître qu&apos;il est formellement pape. Le droit
                  canonique distingue entre la possession de l&apos;office et
                  l&apos;exercice légitime de l&apos;office.
                </p>
                <p>
                  Par analogie : un mariage juridiquement contracté mais
                  réellement nul conserve une existence juridique tant qu&apos;il
                  n&apos;a pas été déclaré nul par l&apos;autorité compétente.
                  Les époux sont juridiquement mariés, mais réellement non
                  mariés. De même, un occupant du Siège apostolique peut être
                  juridiquement « pape » tout en n&apos;étant pas
                  formellement pape.
                </p>
                <p>
                  Cette distinction est fondamentale : c&apos;est elle qui
                  permet de ne pas nommer le pape au Canon de la Messe (car on
                  ne peut pas signifier une communion formelle dans la foi
                  avec quelqu&apos;un qui n&apos;est pas formellement pape)
                  tout en conservant la possibilité canonique d&apos;une
                  restauration.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-4">
            <AccordionTrigger value="obj-4">
              Objection 5 — « La Thèse de Cassiciacum est une position de
              compromis entre le sédévacantisme et le
              « reconnaître-et-résister ». »
            </AccordionTrigger>
            <AccordionContent value="obj-4">
              <div className="space-y-3">
                <p>
                  C&apos;est une erreur. La Thèse de Cassiciacum n&apos;est
                  pas un compromis, mais une position théologique
                  rigoureusement fondée sur les principes thomistes. Elle ne
                  « reconnaît » pas les papes de Vatican II comme vrais papes
                  (contrairement à la FSSPX), et elle ne les considère pas
                  comme irrémédiablement déposés et sans aucune désignation
                  légale (contrairement au sédévacantisme strict).
                </p>
                <p>
                  Comme le dit le Père Guérard des Lauriers : le
                  sédévacantisme strict sacrifie l&apos;indéfectibilité de la
                  succession apostolique au nom de l&apos;indéfectibilité de
                  la foi. La FSSPX sacrifie l&apos;indéfectibilité de la foi
                  au nom de l&apos;indéfectibilité de la succession
                  apostolique. La Thèse sauvegarde les deux, parce
                  qu&apos;elles sont inséparables.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-5">
            <AccordionTrigger value="obj-5">
              Objection 6 — « Si le nouveau rite de consécration épiscopale est
              invalide, alors les « papes » consacrés avec ce rite ne sont pas
              évêques, et la Thèse perd sa pertinence. »
            </AccordionTrigger>
            <AccordionContent value="obj-5">
              <div className="space-y-3">
                <p>
                  Cette objection est traitée en détail par l&apos;abbé
                  Ricossa (Sodalitium n62). La consécration épiscopale n&apos;est
                  pas requise pour l&apos;élection au pontificat : le pape est
                  élu comme évêque de Rome, mais l&apos;élection elle-même est
                  un acte canonique distinct de la consécration épiscopale.
                  L&apos;élu reçoit la juridiction universelle par
                  l&apos;acceptation de l&apos;élection, indépendamment de la
                  question de la validité de sa consécration épiscopale.
                </p>
                <p>
                  De plus, la question de la validité ou de l&apos;invalidité
                  du nouveau rite de consécration épiscopale est une question
                  distincte de celle de la Thèse. Même si le rite était
                  valide, cela ne changerait rien au fait que les occupants du
                  Siège ne sont pas formellement papes en raison de leur
                  absence d&apos;intention de gouverner selon la foi
                  catholique.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="obj-6">
            <AccordionTrigger value="obj-6">
              Objection 7 — « Mgr Guérard des Lauriers se serait rétracté sur
              son lit de mort. »
            </AccordionTrigger>
            <AccordionContent value="obj-6">
              <div className="space-y-3">
                <p>
                  Cette allégation est fausse et a été solidement réfutée par
                  l&apos;Institut Mater Boni Consilii (Sodalitium, 2019–2020).
                  Les témoins de la maladie et de la mort de Mgr Guérard des
                  Lauriers ont confirmé qu&apos;il n&apos;a jamais rétracté
                  sa position. Les prétendues « rétractations » reposent sur
                  des témoignages non fiables et des déformations de ses
                  propos.
                </p>
                <p>
                  Mgr Guérard des Lauriers a réaffirmé sa position à
                  plusieurs reprises, y compris dans les dernières années de
                  sa vie. La cohérence de son œuvre théologique, depuis 1979
                  jusqu&apos;à sa mort en 1988, témoigne de la solidité de
                  sa conviction.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ============ 9. BIBLIOGRAPHIE ============ */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-ink-900 mb-4">
          VIII. Bibliographie
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Essentiel
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Mgr Sanborn — La Papauté Matérielle
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Étude scolastique classique. Présente l&apos;ensemble des
                principes thomistes, expose la thèse, et réfute une douzaine
                d&apos;objections. Sodalitium n46, n48, n49.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Essentiel
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Abbé Ricossa — Pape, Papauté et Siège vacant
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Excellent résumé de la Thèse s&apos;appuyant sur saint Antonin
                de Florence et le cardinal Cajetan. Sodalitium n66.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Apologétique
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Abbé Ricossa — Réponse à La Tradizione Cattolica (FSSPX)
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Réponse détaillée aux objections de la FSSPX contre le
                sédévacantisme et la Thèse. Sodalitium n55.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Apologétique
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Abbé Ricossa — « Le Sel de la terre » et le sédévacantisme
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Réfutation des objections de la revue dominicaine d&apos;Avrillé.
                Sodalitium n52.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Théologie
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Père Guérard des Lauriers O.P. — Réponse à une objection
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Le Père Guérard répond à l&apos;objection du pape « catholique
                occasionnellement ». Sodalitium n61.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Droit canon
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Abbé Ricossa — Une consécration épiscopale valide est-elle
                nécessaire pour être Pape ?
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Réponse à l&apos;objection liée aux consécrations épiscopales
                et à Ratzinger. Sodalitium n62.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Droit canon
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Abbé Ricossa — L&apos;élection du Pape
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Solution au problème de l&apos;élection canonique d&apos;un
                futur pape. Sodalitium n54.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Source
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Père Guérard des Lauriers O.P. — <em>Lex orandi, lex credendi
                </em> (1979)
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Publication originale de la Thèse de Cassiciacum.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xs border border-gold-400/20 bg-stone-50">
            <span className="text-xs px-2 py-1 rounded-xs bg-gold-100 text-gold-800 font-medium flex-shrink-0 mt-0.5">
              Théologie
            </span>
            <div>
              <h3 className="font-serif text-ink-900 font-medium">
                Pseudo-Dionisius — Brèves réponses aux articles de la Fraternité
              </h3>
              <p className="text-sm text-ink-600 mt-1">
                Sur le magistère comme règle prochaine de la foi. Sodalitium
                n44.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NOTE FINALE ============ */}
      <section className="mb-12">
        <blockquote className="border-l-4 border-gold-500 pl-4 py-2 italic text-ink-700 bg-parchment-100/50 rounded-r-xs">
          <p className="mb-2">
            « L&apos;Institut Mater Boni Consilii est conçu et né dans la
            Charité de la Vérité. <em>Dominus incipit. Ipse perficiat.</em> »
          </p>
          <footer className="text-sm text-ink-500 not-italic">
            Mgr Guérard des Lauriers, mai 1987.
          </footer>
        </blockquote>
      </section>
    </>
  );
}
