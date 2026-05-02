/**
 *
 * Crise Post-Conciliaire — La Crise dans l'Église Catholique
 *
 * Données structurées sur la crise post-Vatican II,
 * incluant la Thèse de Cassiciacum, les invalidités de V2,
 * les positions face à la crise, et les références magistérielles.
 *
 * Source principale : P. Guérard des Lauriers O.P., Cahiers de Cassiciacum (1979-1982)
 */

// ===== THÈSE DE CASSICIACUM =====

export enum PositionFaceAlaCrise {
  OBEISSANCE = "OBEISSANCE",
  RECONNAITRE_RESISTER = "RECONNAITRE_RESISTER",
  SEDEVACANTISME_CLASSIQUE = "SEDEVACANTISME_CLASSIQUE",
  THESE_CASSICIACUM = "THESE_CASSICIACUM",
}

export interface PositionCrise {
  slug: PositionFaceAlaCrise;
  name: string;
  description: string;
  defendPar: string;
  indefectibiliteFoi: boolean;
  indefectibiliteSuccession: boolean;
  coherente: boolean;
  arguments: string[];
  objections: string[];
}

export const positionsFaceAlaCrise: PositionCrise[] = [
  {
    slug: PositionFaceAlaCrise.OBEISSANCE,
    name: "Obéissance",
    description:
      "Reconnaître l'autorité des « papes de Vatican II » et obéir, tout en dénonçant les erreurs.",
    defendPar: "Néo-modernistes, progressistes",
    indefectibiliteFoi: false,
    indefectibiliteSuccession: true,
    coherente: false,
    arguments: [
      "Sauvegarde l'unité visible de l'Église",
      "Le pape est toujours le pape, même s'il se trompe",
    ],
    objections: [
      "Attribue les erreurs de V2 à l'autorité légitime de l'Église — destruction de l'indéfectibilité de la foi",
      "Implique que l'Église peut enseigner l'erreur — contraire à l'infaillibilité",
    ],
  },
  {
    slug: PositionFaceAlaCrise.RECONNAITRE_RESISTER,
    name: "Reconnaître et Résister (FSSPX)",
    description:
      "Reconnaître l'autorité des « papes de Vatican II » mais résister ouvertement aux erreurs de Vatican II.",
    defendPar: "FSSPX, traditionalistes « romains »",
    indefectibiliteFoi: false,
    indefectibiliteSuccession: true,
    coherente: false,
    arguments: [
      "Sauvegarde la succession apostolique visible",
      "Saint Thomas enseigne qu'on peut résister à un supérieur en certaines circonstances (IIa-IIae, q. 33, a. 4)",
    ],
    objections: [
      "Reconnaît l'autorité mais refuse l'obéissance — attitude schismatique",
      "Attribue les erreurs de V2 à l'autorité légitime — moitié de l'indéfectibilité sacrifiée",
      "Être « una cum » au Canon tout en résistant est contradictoire",
    ],
  },
  {
    slug: PositionFaceAlaCrise.SEDEVACANTISME_CLASSIQUE,
    name: "Sédévacantisme classique",
    description:
      "Les « papes de Vatican II » ne sont pas de vrais papes ; le siège est simplement et totalement vacant depuis 1958.",
    defendPar: "Sédévacantistes « totalistes »",
    indefectibiliteFoi: true,
    indefectibiliteSuccession: false,
    coherente: false,
    arguments: [
      "Sauvegarde l'indéfectibilité de la foi en n'attribuant pas les erreurs de V2 à l'autorité de l'Église",
      "L'hérésie coupe ipso facto de l'Église (ST II-IIae, q. 39, a. 4)",
    ],
    objections: [
      "Sacrifie l'indéfectibilité de la succession — siège vacant sans structure visible depuis 65+ ans",
      "Confond l'ordre réel et l'ordre juridique — déclare la nullité juridique sans jugement compétent",
      "Ne peut expliquer comment l'Église retrouvera un pape légitime",
    ],
  },
  {
    slug: PositionFaceAlaCrise.THESE_CASSICIACUM,
    name: "Thèse de Cassiciacum",
    description:
      "Les « papes de Vatican II » ont la sessio (désignation canonique) mais pas la missio (autorité du Christ). Leur nullité est réelle (de facto) mais pas encore juridiquement établie (de jure).",
    defendPar: "P. Guérard des Lauriers O.P., Notre-Dame des Dons, IMBC, ICR",
    indefectibiliteFoi: true,
    indefectibiliteSuccession: true,
    coherente: true,
    arguments: [
      "Sauvegarde l'indéfectibilité de la foi : les erreurs de V2 ne sont pas attribuées à l'autorité du Christ",
      "Sauvegarde l'indéfectibilité de la succession : la désignation canonique (sessio) n'est pas encore vidée",
      "Distinction classique en droit canonique entre de facto et de jure",
      "Analogie sacramentelle : un sacrement peut être validement conféré mais ne pas produire son effet",
    ],
    objections: [
      "Objection : « Si le sujet a la sessio mais pas la missio, est-il pape ou non ? » — Réponse : juridiquement désigné mais théologiquement inhabilité, pas pape au sens plein",
      "Objection : « Comment un sujet peut-il avoir la sessio sans la missio ? » — Réponse : analogie sacramentelle, l'hérésie formelle empêche de recevoir la missio",
      "Objection : « La sessio sans missio est une invention moderne » — Réponse : distinction thomiste entre office et grâce",
    ],
  },
];

// ===== DISTINCTION SESSIO / MISSIO =====

export interface SessioMissioTerm {
  name: string;
  nameLatin: string;
  definition: string;
  source: string;
  nature: "juridique" | "theologique";
  visible: boolean;
  peutSePerdre: boolean;
  condition: string;
  loiApplicable: string;
}

export const sessio: SessioMissioTerm = {
  name: "Sessio",
  nameLatin: "Possessio Sedis",
  definition:
    "L'occupation juridique d'un siège épiscopal ou pontifical. La désignation canonique d'un sujet à un office.",
  source: "Acte humain (élection, nomination)",
  nature: "juridique",
  visible: true,
  peutSePerdre: true,
  condition: "Canonicité (forme légale)",
  loiApplicable: "CIC (droit humain)",
};

export const missio: SessioMissioTerm = {
  name: "Missio",
  nameLatin: "Auctoritas Divina",
  definition:
    "L'autorité de gouverner l'Église, reçue du Christ lui-même. Le pouvoir de juridiction divin qui accompagne la charge.",
  source: "Le Christ seul (Lc 10, 16)",
  nature: "theologique",
  visible: false,
  peutSePerdre: true,
  condition: "Foi intacte (communion avec le Christ)",
  loiApplicable: "Droit divin (jus divinum)",
};

// ===== INVALIDITÉS DE VATICAN II =====

export interface IncompatibiliteV2 {
  documentV2: string;
  erreurEnseignee: string;
  magistereCondamnant: string;
  anneeCondamnation: number;
}

export const incompatibilitesV2: IncompatibiliteV2[] = [
  {
    documentV2: "Dignitatis Humanae",
    erreurEnseignee: "Droit à la liberté religieuse comme droit fondamental",
    magistereCondamnant:
      "Syllabus (prop. 15, 77-80) ; Mirari Vos (Grégoire XVI, 1832) ; Quanta Cura (Pie IX, 1864) ; Libertas Praestantissimum (Léon XIII, 1888)",
    anneeCondamnation: 1864,
  },
  {
    documentV2: "Nostra Aetate",
    erreurEnseignee:
      "Les religions non-chrétiennes contiennent des « rayons de vérité » et sont respectables",
    magistereCondamnant:
      "Florence, Cantate Domino (1442) ; Mortalium Animos (Pie XI, 1928) ; Syllabus prop. 16-18",
    anneeCondamnation: 1928,
  },
  {
    documentV2: "Lumen Gentium",
    erreurEnseignee:
      "Collégialité épiscopale partageant le pouvoir avec le pape",
    magistereCondamnant:
      "Pastor Aeternus (Vatican I, 1870) ; Auctorem Fidei prop. 78 (Pie VI, 1794)",
    anneeCondamnation: 1870,
  },
  {
    documentV2: "Gaudium et Spes",
    erreurEnseignee:
      "L'Église « va de l'avant » — évolution des dogmes",
    magistereCondamnant:
      "Dei Filius ch. 4 (Vatican I, 1870) ; Lamentabili prop. 20 (Pie X, 1907)",
    anneeCondamnation: 1907,
  },
  {
    documentV2: "Unitatis Redintegratio",
    erreurEnseignee:
      "Œcuménisme comme dialogue entre égaux",
    magistereCondamnant:
      "Mortalium Animos (Pie XI, 1928) ; Satis Cognitum (Léon XIII, 1896)",
    anneeCondamnation: 1928,
  },
  {
    documentV2: "Orientalium Ecclesiarum",
    erreurEnseignee:
      "Églises orientales schismatiques comme « véritablement particulières »",
    magistereCondamnant:
      "Florence (1439) ; Satis Cognitum (Léon XIII, 1896)",
    anneeCondamnation: 1439,
  },
  {
    documentV2: "Sacrosanctum Concilium",
    erreurEnseignee:
      "Réforme liturgique ouvrant la voie au Novus Ordo",
    magistereCondamnant:
      "Quo Primum (Pie V, 1570) ; Trente sess. XXII sur le Canon romain",
    anneeCondamnation: 1570,
  },
];

// ===== CAUSES D'INVALIDITÉ =====

export enum CauseInvalidite {
  VICE_CAUSE = "VICE_CAUSE",
  VICE_FORME = "VICE_FORME",
  VICE_LIBERTE = "VICE_LIBERTE",
  VICE_OBJET = "VICE_OBJET",
}

export interface InvaliditeV2 {
  cause: CauseInvalidite;
  name: string;
  description: string;
  argument: string;
}

export const causesInvalidite: InvaliditeV2[] = [
  {
    cause: CauseInvalidite.VICE_CAUSE,
    name: "Vice de la cause",
    description: "Hérésie des présidents du concile",
    argument:
      "Si les papes qui ont convoqué, présidé et confirmé Vatican II étaient hérétiques formels, ils n'avaient pas la missio. Un concile présidé sans autorité légitime n'a aucune autorité.",
  },
  {
    cause: CauseInvalidite.VICE_FORME,
    name: "Vice de la forme",
    description: "Absence d'anathèmes",
    argument:
      "Un concile œcuménique dogmatique définit des vérités de foi et condamne les erreurs par des anathèmes. Vatican II n'a prononcé aucun anathème — il se déclare donc non-infaillible.",
  },
  {
    cause: CauseInvalidite.VICE_LIBERTE,
    name: "Vice de la liberté",
    description: "Coercition des Pères conciliaires",
    argument:
      "Les schéma préparatoires conservateurs ont été rejetés ; le coetus internationalis des évêques conservateurs a été marginalisé ; le Secrétariat pour l'Unité des Chrétiens a orienté les débats.",
  },
  {
    cause: CauseInvalidite.VICE_OBJET,
    name: "Vice de l'objet",
    description: "Incompatibilité avec le Magistère antérieur",
    argument:
      "Un acte qui contredit un Magistère infaillible antérieur est nul de nullité absolue. Vatican II contredit le Syllabus, Mortalium Animos, Pastor Aeternus, Florence et Trente.",
  },
];

// ===== CONSÉQUENCES PRATIQUES =====

export interface ConsequencePratique {
  slug: string;
  title: string;
  description: string;
}

export const consequencesPratiques: ConsequencePratique[] = [
  {
    slug: "v2-non-lie",
    title: "Vatican II ne lie pas les catholiques",
    description:
      "Puisque Vatican II n'a aucune autorité (les présidents n'avaient pas la missio), aucun catholique n'est tenu d'accepter ses enseignements. Le refus de Vatican II n'est pas du schisme mais de l'obéissance au Magistère traditionnel.",
  },
  {
    slug: "novus-ordo-illegitime",
    title: "Le Novus Ordo est illégitime",
    description:
      "Le Novus Ordo Missae (1969) a été promulgué par Paul VI, qui n'avait pas la missio. Sa promulgation est juridiquement faite mais théologiquement sans autorité. La question de la validité sacramentelle est distincte de la légitimité.",
  },
  {
    slug: "cic-1983-illegitime",
    title: "Le CIC 1983 est illégitime",
    description:
      "Le nouveau Code de Droit Canonique (1983) a été promulgué par Jean-Paul II, qui n'avait pas la missio. Le CIC 1917 reste la référence.",
  },
  {
    slug: "non-una-cum",
    title: "Non Una Cum au Canon de la Messe",
    description:
      "Mentionner le nom d'un « pape de Vatican II » au Canon de la Messe est un mensonge sacrilège et une participation au schisme capital. La commémoraison du pape est la plus haute forme de communion (Benoît XIV).",
  },
];

// ===== SOURCES MAGISTÉRIELLES CLÉS =====

export interface SourceMagisterielle {
  slug: string;
  auteur: string;
  document: string;
  annee: number;
  type: "encyclique" | "bulle" | "constitution" | "syllabus" | "concile";
  contenu: string;
  latin?: string;
  application: string;
}

export const sourcesMagisterielles: SourceMagisterielle[] = [
  {
    slug: "cum-ex-apostolatus",
    auteur: "Pape Paul IV",
    document: "Cum Ex Apostolatus Officio",
    annee: 1559,
    type: "bulle",
    contenu:
      "Si jamais un évêque, cardinal ou le Pontife Romain lui-même avait dévié de la foi catholique avant son élévation, sa promotion est nulle, invalide et vaine.",
    application:
      "Si le sujet était hérétique avant son élection, l'élection est nulle.",
  },
  {
    slug: "vacantis-apostolicae-sedis",
    auteur: "Pape Pie XII",
    document: "Vacantis Apostolicae Sedis",
    annee: 1945,
    type: "constitution",
    contenu:
      "Si un élu au Pontificat accepte l'élection contre la liberté canonique, ou si l'élection est entachée de simonie, l'élection est nulle et sans effet.",
    application:
      "Une élection viciée est nulle — à plus forte raison si le sujet est hérétique.",
  },
  {
    slug: "pastor-aeternus",
    auteur: "Concile Vatican I",
    document: "Pastor Æternus",
    annee: 1870,
    type: "constitution",
    contenu:
      "Le Siège de Pierre demeure toujours intact dans les Pontifes qui lui succèdent. Le pontife romain est infaillible lorsqu'il parle ex cathedra.",
    latin:
      "Romanus Pontifex, cum ex cathedra loquitur, ea definire infallibilis est in fide et moribus.",
    application:
      "L'indéfectibilité de la succession est garantie — la sessio n'est pas vidée.",
  },
  {
    slug: "pascendi",
    auteur: "Pape Pie X",
    document: "Pascendi Dominici Gregis",
    annee: 1907,
    type: "encyclique",
    contenu:
      "Le modernisme est la synthèse de toutes les hérésies. Celui qui embrasse le modernisme détruit tous les dogmes catholiques.",
    latin:
      "Modernismus est compendium omnium hæresium. Qui modernismum amplectitur, is omnia dogmata catholica destruit.",
    application:
      "Les papes post-V2 sont des modernistes — ils n'ont pas la missio.",
  },
  {
    slug: "sacramentum-ordinis",
    auteur: "Pape Pie XII",
    document: "Sacramentum Ordinis",
    annee: 1947,
    type: "constitution",
    contenu:
      "Les rites sacramentels, en particulier les rites d'ordination et de consécration épiscopale, sont définis par l'Église et ne peuvent être altérés.",
    application:
      "Les nouveaux rites d'ordination post-V2 sont invalides s'ils ne remplissent pas les exigences de Sacramentum Ordinis.",
  },
  {
    slug: "quo-primum",
    auteur: "Pape Pie V",
    document: "Quo Primum",
    annee: 1570,
    type: "bulle",
    contenu:
      "Le Missel Romain est perpétuel. Personne ne peut être forcé de célébrer autrement que selon ce Missel. Aucune autorité ne peut abroger cette bulle.",
    application:
      "Le Novus Ordo (1969) ne peut pas légitimement remplacer le Missel de Pie V.",
  },
  {
    slug: "mortalium-animos",
    auteur: "Pape Pie XI",
    document: "Mortalium Animos",
    annee: 1928,
    type: "encyclique",
    contenu:
      "Il est interdit aux catholiques de participer à des réunions œcuméniques, car cela favorise l'indifférentisme religieux.",
    application:
      "L'œcuménisme de Vatican II (Unitatis Redintegratio, Nostra Aetate) est condamné par avance.",
  },
];

// ===== LIGNÉE ÉPISCOPOSTALE =====

export interface EvequeConsacre {
  name: string;
  anneeConsacration?: number;
  anneeDeces?: number;
  ordre: "premier" | "successeur";
  consacrePar?: string;
  institution?: string;
}

export const ligneeEpiscopaleCassiciacum: EvequeConsacre[] = [
  {
    name: "Mgr Guérard des Lauriers O.P.",
    anneeConsacration: 1981,
    anneeDeces: 1988,
    ordre: "premier",
  },
  {
    name: "Mgr McKenna O.P.",
    anneeDeces: 2006,
    ordre: "successeur",
    consacrePar: "Mgr Guérard des Lauriers",
  },
  {
    name: "Mgr Stuyvert",
    ordre: "successeur",
    consacrePar: "Mgr McKenna",
    institution: "IMBC",
  },
  {
    name: "Mgr Sanborn",
    ordre: "successeur",
    consacrePar: "Mgr McKenna",
    institution: "ICR",
  },
];

// ===== HELPERS =====

export const getPositionBySlug = (
  slug: PositionFaceAlaCrise
): PositionCrise | undefined =>
  positionsFaceAlaCrise.find(p => p.slug === slug);

export const getPositionCoherente = (): PositionCrise =>
  positionsFaceAlaCrise.find(p => p.coherente)!;

export const getSourceMagisterielle = (
  slug: string
): SourceMagisterielle | undefined =>
  sourcesMagisterielles.find(s => s.slug === slug);
