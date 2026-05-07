/**
 * Bible Text Parser v4 — Memory-efficient
 *
 * Processes the 8MB single-line OCR text chunk by chunk.
 * Uses simple string scanning instead of heavy regex on the full text.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const SRC = "V:/-ressources/-obsidian/^Le Livre/bible_text.txt";
const OUT = join(process.cwd(), "src/data/bible-text");

/**
 * Book search definitions.
 *
 * Each entry has:
 *   id         — canonical book id
 *   patterns   — strings to search for in the OCR text
 *   shared     — if true, find ALL occurrences and map sequentially to bookGroup
 *   bookGroup  — ordered list of book ids that share this pattern
 *   lastMatch  — if true, take the LAST occurrence (for books near end of text)
 *   minSearch  — minimum number of occurrences to scan before giving up
 */
const BOOK_SEARCHES = [
  // === Pentateuch ===
  { id: "genesis", patterns: ["LA GENESE", "LA GENÈSE"] },
  { id: "exodus", patterns: ["EXODE"] },
  { id: "leviticus", patterns: ["LE LEVITIQUE", "LE LÉVITIQUE"] },
  { id: "numbers", patterns: ["LES NOMBRES"] },
  { id: "deuteronomy", patterns: ["LE DEUTERONOME", "LE DEUTÉRONOME"] },
  // === Historical ===
  { id: "joshua", patterns: ["JOSUE"] },
  { id: "judges", patterns: ["JUGES"] },
  { id: "ruth", patterns: ["RUTH"] },
  { id: "1-samuel", patterns: ["PREMIER LIVRE DE SAMUEL", "PREMIER LIVRES DE SAMUEL"] },
  { id: "2-samuel", patterns: ["DEUXIEME LIVRE DE SAMUEL", "DEUXIÈME LIVRE DE SAMUEL"] },
  { id: "1-kings", patterns: ["PREMIER LIVRE DES ROIS", "PREMIER LIVRES DES ROIS"] },
  { id: "2-kings", patterns: ["DEUXIEME LIVRE DES ROIS", "DEUXIÈME LIVRE DES ROIS"] },
  { id: "1-chronicles", patterns: ["PREMIER LIVRE DES CHRONIQUES", "PREMIER LIVRES DES CHRONIQUES"] },
  { id: "2-chronicles", patterns: ["DEUXIEME LIVRE DES CHRONIQUES", "DEUXIÈME LIVRE DES CHRONIQUES"] },
  { id: "ezra", patterns: ["ESDRAS"], minSearch: 10 },
  { id: "nehemiah", patterns: ["NEHEMIE", "NÉHÉMIE"] },
  { id: "tobit", patterns: ["TOBIE"], minSearch: 25 },
  { id: "judith", patterns: ["JUDITH"], minSearch: 25 },
  { id: "esther", patterns: ["ESTHER"], fixedPos: 2761541 },
  // === Wisdom ===
  { id: "job", patterns: ["JOB"], minSearch: 20 },
  { id: "psalms", patterns: ["PSAUMES"], minSearch: 20 },
  { id: "proverbs", patterns: ["PROVERBES"] },
  { id: "ecclesiastes", patterns: ["ECCLESIASTE", "ECCLÉSIASTE"] },
  { id: "song-of-songs", patterns: ["CANTIQUE DES CANTIQUES"] },
  { id: "wisdom", patterns: ["SAGESSE"], minSearch: 15 },
  { id: "sirach", patterns: ["ECCLÉSIASTIQUE"] },
  // === Prophets ===
  { id: "isaiah", patterns: ["ISAIE"], minSearch: 10 },
  { id: "jeremiah", patterns: ["JEREMIE", "JÉRÉMIE"] },
  { id: "lamentations", patterns: ["LAMENTATIONS"] },
  { id: "baruch", patterns: ["BARUCH"] },
  { id: "ezekiel", patterns: ["EZECHIEL", "ÉZÉCHIEL"] },
  { id: "daniel", patterns: ["DANIEL"] },
  { id: "hosea", patterns: ["OSÉE", "OSSEE"] },
  { id: "joel", patterns: ["JOËL", "JOEL"] },
  { id: "amos", patterns: ["AMOS"] },
  { id: "obadiah", patterns: ["ABDIAS"] },
  { id: "jonah", patterns: ["JONAS"] },
  { id: "micah", patterns: ["MICHÉE", "MICHEE"] },
  { id: "nahum", patterns: ["NAHUM"] },
  { id: "habakkuk", patterns: ["HABAQUQ"] },
  { id: "zephaniah", patterns: ["SOPHONIE"] },
  { id: "haggai", patterns: ["AGGÉE", "AGEE"] },
  { id: "zechariah", patterns: ["ZACHARIE"] },
  { id: "malachi", patterns: ["MALACHIE"] },
  // === Deuterocanonical ===
  { id: "1-maccabees", patterns: ["PREMIER LIVRE DES MACCABEES", "PREMIÈRE LIVRE DES MACCABÉES"] },
  { id: "2-maccabees", patterns: ["DEUXIEME LIVRE DES MACCABEES", "DEUXIÈME LIVRE DES MACCABÉES"] },
  // === Gospels (minSearch needed to skip TOC/intro entries) ===
  { id: "matthew", patterns: ["SELON SAINT MATTHIEU"], minSearch: 10 },
  { id: "mark", patterns: ["SELON SAINT MARC"], minSearch: 10 },
  { id: "luke", patterns: ["SELON SAINT LUC"], minSearch: 10 },
  { id: "john", patterns: ["SELON SAINT JEAN"], minSearch: 10 },
  { id: "acts", patterns: ["ACTES DES APOTRES", "ACTES DES APÔTRES"], minSearch: 10 },
  // === Pauline Epistles ===
  { id: "romans", patterns: ["AUX ROMAINS"] },
  { id: "1-corinthians", patterns: ["AUX CORINTHIENS"] },
  { id: "2-corinthians", patterns: ["DEUXIEME EPITRE AUX CORINTHIENS", "DEUXIÈME ÉPÎTRE AUX CORINTHIENS", "DEUXIEME AUX CORINTHIENS"] },
  { id: "galatians", patterns: ["AUX GALATES"] },
  { id: "ephesians", patterns: ["AUX EPHESIENS", "AUX ÉPHÉSIENS"] },
  { id: "philippians", patterns: ["AUX PHILIPPIENS", "PHILIPPIENS"], fixedPos: 7285346 },
  { id: "colossians", patterns: ["AUX COLOSSIENS"] },
  { id: "1-thessalonians", patterns: ["PREMIER AUX THESSALONICIENS", "PREMIÈRE AUX THESSALONICIENS", "PREMIÈRE AUX THESSALONICIENS", "PREMIÈRE ÉPÎTRE AUX THESSALONICIENS", "AUX THESSALONICIENS"] },
  { id: "2-thessalonians", patterns: ["DEUXIEME AUX THESSALONICIENS", "DEUXIÈME AUX THESSALONICIENS", "DEUXIEME EPITRE AUX THESSALONICIENS", "DEUXIÈME ÉPÎTRE AUX THESSALONICIENS"] },
  { id: "1-timothy", patterns: ["PREMIÈRE ÉPÎTRE À TIMOTHÉE", "PREMIÈRE EPITRE A TIMOTHEE", "PREMIERE EPITRE A TIMOTHEE", "PREMIÈRE ÉPÎTRE A TIMOTHÉE", "PREMIÈRE EPÎTRE À TIMOTHEE", "PREMIÈRE ËPlTRE À TIMOTHEE"] },
  { id: "2-timothy", patterns: ["DEUXIÈME ÉPÎTRE A TIMOTHÉE", "DEUXIÈME EPITRE A TIMOTHEE", "DEUXIÈME ÉPÎTRE À TIMOTHÉE", "DEUXIÈME EPlTRE A TIMOTHEE"] },
  { id: "titus", patterns: ["TITE"] },
  { id: "philemon", patterns: ["PHILÉMON", "PHILEMON"] },
  { id: "hebrews", patterns: ["HÉBREUX", "HEBREUX"] },
  // === Catholic Epistles ===
  { id: "james", patterns: ["JACQUES"] },
  // PIERRE — specific epistle titles to avoid false matches
  { id: "1-peter", patterns: ["PREMIÈRE ÉPÎTRE DE SAINT PIERRE", "PREMIÈRE EPITRE DE SAINT PIERRE", "PREMIERE EPÎTRE DE SAINT PIERRE", "PREMIERE ÉPÎTRE DE SAINT PIERRE", "PREMIÈRE ÉPlTRE DE SAINT PIERRE"] },
  { id: "2-peter", patterns: ["DEUXIÈME ÉPÎTRE DE SAINT PIERRE", "DEUXIEME EPITRE DE SAINT PIERRE", "DEUXIEME EPÎTRE DE SAINT PIERRE", "DEUXIÈME ÉPlTRE DE SAINT PIERRE"] },
  // JEAN (epistles) — specific epistle titles to avoid Gospel section headers
  { id: "1-john", patterns: ["PREMIÈRE ÉPÎTRE DE SAINT JEAN", "PREMIÈRE EPITRE DE SAINT JEAN", "PREMIERE EPÎTRE DE SAINT JEAN", "PREMIÈRE ÉPlTRE DE SAINT JEAN"] },
  { id: "2-john", patterns: ["DEUXIÈME ÉPITRE DE SAINT JEAN", "DEUXIEME EPITRE DE SAINT JEAN", "DEUXIÈME ÉPÎTRE DE SAINT JEAN", "DEUXIEME ÉPITRE DE SAINT JEAN", "DEUXIÈME ÉPlTRE DE SAINT JEAN"] },
  { id: "3-john", patterns: ["TROISIÈME ÉPÎTRE DE SAINT JEAN", "TROISIEME EPITRE DE SAINT JEAN", "TROISIEME ÉPITRE DE SAINT JEAN", "TROISIÈME ÉPlTRE DE SAINT JEAN"] },
  { id: "jude", patterns: ["JUDE"] },
  // === Revelation — first occurrence with verse content (intro may precede verses) ===
  { id: "revelation", patterns: ["L\u2019APOCALYPSE", "APOCALYPSE"], minSearch: 5 },
];

const CHAPTER_COUNTS = {
  genesis: 50, exodus: 40, leviticus: 27, numbers: 36, deuteronomy: 34,
  joshua: 24, judges: 21, ruth: 4, "1-samuel": 31, "2-samuel": 24,
  "1-kings": 22, "2-kings": 25, "1-chronicles": 29, "2-chronicles": 36,
  ezra: 10, nehemiah: 13, tobit: 14, judith: 16, esther: 16,
  job: 42, psalms: 150, proverbs: 31, ecclesiastes: 12, "song-of-songs": 8,
  wisdom: 19, sirach: 51,
  isaiah: 66, jeremiah: 52, lamentations: 5, baruch: 6, ezekiel: 48, daniel: 14,
  hosea: 14, joel: 4, amos: 9, obadiah: 1, jonah: 4, micah: 7,
  nahum: 3, habakkuk: 3, zephaniah: 3, haggai: 2, zechariah: 14, malachi: 4,
  "1-maccabees": 16, "2-maccabees": 15,
  matthew: 28, mark: 16, luke: 24, john: 21, acts: 28,
  romans: 16, "1-corinthians": 16, "2-corinthians": 13,
  galatians: 6, ephesians: 6, philippians: 4, colossians: 4,
  "1-thessalonians": 5, "2-thessalonians": 3,
  "1-timothy": 6, "2-timothy": 4, titus: 3, philemon: 1, hebrews: 13,
  james: 5, "1-peter": 5, "2-peter": 3,
  "1-john": 5, "2-john": 1, "3-john": 1, jude: 1, revelation: 22,
};

/**
 * Clean a verse string
 */
function cleanVerse(t) {
  // Remove footnotes: single letter ) followed by text until next uppercase
  t = t.replace(/[a-d]\)\s*[^A-ZÀ-Ü]{3,300}/g, "");
  // Remove cross-ref patterns "/ 2co46" etc
  t = t.replace(/\/\s*\d*[a-z]+\d+[a-z]*/g, "");
  // Remove special chars
  t = t.replace(/[•■♦►◄▼▲★☆◆◇*†‡§¶#]/g, "");
  // Remove standalone a/b/c/d
  t = t.replace(/\s[a-d]\s/g, " ");
  // Remove page numbers
  t = t.replace(/\s\d{3,4}\s/g, " ");
  // HTML entities
  t = t.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  // Collapse spaces
  t = t.replace(/\s{2,}/g, " ");
  return t.trim();
}

/**
 * Scan a book text and extract verse objects { verse, text }.
 *
 * Strategy: find all candidate verse-start positions (digit sequences 1-300
 * followed by a letter, with optional whitespace/punctuation in between).
 * Then split the text at those positions.
 */
function scanVerses(text) {
  const len = text.length;

  // Phase 1: find all candidate verse-start positions
  const candidates = [];
  let i = 0;

  while (i < len) {
    // Skip non-digits
    while (i < len && (text[i] < '0' || text[i] > '9')) i++;
    if (i >= len) break;

    // Read number
    const numStart = i;
    while (i < len && text[i] >= '0' && text[i] <= '9') i++;
    const numStr = text.substring(numStart, i);
    const num = parseInt(numStr, 10);

    // Must be 1-200 and 1-3 digits
    if (num < 1 || num > 200 || numStr.length > 3) continue;

    // KEY FILTER: number must NOT be preceded by a letter
    // This eliminates cross-references like "Gn11", "Mt28", "2Co32"
    if (numStart > 0 && /[A-ZÀ-Üa-zà-ü]/.test(text[numStart - 1])) continue;

    // Check what follows: must be a letter (direct) or whitespace+punctuation then letter
    let m = i;
    // Skip optional whitespace and common punctuation between number and text
    while (m < len && /[ \t*†‡§¶•]/.test(text[m])) m++;
    if (m >= len) continue;
    // Must see a letter next (start of verse text)
    if (!/[A-ZÀ-Üa-zà-üéèêëàâîïôùûüç]/.test(text[m])) continue;

    // Valid verse start
    candidates.push({ num, numPos: numStart, textStart: m });
  }

  // Phase 2: score candidates by neighborhood sequentiality
  // A candidate surrounded by sequential neighbors is likely a real verse.
  // Score = number of neighbors (prev/next) with num within ±2 of this candidate's num.
  const scores = [];
  for (let j = 0; j < candidates.length; j++) {
    let score = 0;
    if (j > 0 && Math.abs(candidates[j - 1].num - candidates[j].num) <= 2) score++;
    if (j < candidates.length - 1 && Math.abs(candidates[j + 1].num - candidates[j].num) <= 2) score++;
    scores.push(score);
  }

  // Keep candidates with score >= 1 (at least one sequential neighbor)
  const filtered = [];
  for (let j = 0; j < candidates.length; j++) {
    if (scores[j] >= 1) filtered.push(candidates[j]);
  }

  // Phase 3: extract verse text between consecutive filtered candidates
  const verses = [];
  for (let idx = 0; idx < filtered.length; idx++) {
    const { num, textStart } = filtered[idx];

    const endPos = idx < filtered.length - 1
      ? filtered[idx + 1].textStart
      : len;

    let verseText = text.substring(textStart, endPos).trim();
    verseText = cleanVerse(verseText);

    if (verseText.length >= 3) {
      verses.push({ verse: num, text: verseText });
    }
  }

  return verses;
}

/**
 * Distribute verses into chapters
 */
function toChapters(verses, totalChapters) {
  if (verses.length === 0) return {};
  const chapters = {};
  let ch = 1;
  let buf = [];

  for (const v of verses) {
    if (v.verse === 1 && buf.length > 3 && ch < totalChapters) {
      chapters[String(ch)] = buf.map((x, i) => ({ verse: i + 1, text: x.text }));
      ch++;
      buf = [];
    }
    buf.push(v);
    if (buf.length > 200) {
      chapters[String(ch)] = buf.map((x, i) => ({ verse: i + 1, text: x.text }));
      ch++;
      buf = [];
      if (ch > totalChapters) break;
    }
  }
  if (buf.length > 0 && ch <= totalChapters) {
    chapters[String(ch)] = buf.map((x, i) => ({ verse: i + 1, text: x.text }));
  }
  return chapters;
}

// ===== MAIN =====
console.log("Reading bible_text.txt...");
const raw = readFileSync(SRC, "utf8");
console.log(`File size: ${(raw.length / 1024 / 1024).toFixed(1)} MB`);

/**
 * Find the first occurrence of `pat` in `raw` starting from `searchFrom`
 * that has verse-like content within `windowSize` chars after it.
 * Returns { pos, pat } or null.
 */
function findWithVerse(raw, pat, searchFrom, windowSize = 500, maxIterations = 100) {
  let sf = searchFrom;
  for (let i = 0; i < maxIterations; i++) {
    const idx = raw.indexOf(pat, sf);
    if (idx === -1) return null;
    const after = raw.substring(idx + pat.length, idx + pat.length + windowSize);
    if (/\d{1,3}\s+[A-ZÀ-Üa-zà-ü]/.test(after)) {
      return { pos: idx, pattern: pat };
    }
    sf = idx + pat.length;
  }
  return null;
}

// Phase 1: Find all books
const found = [];

for (const book of BOOK_SEARCHES) {
  // If fixedPos is set, skip pattern search and use exact position
  if (book.fixedPos) {
    found.push({ id: book.id, pos: book.fixedPos, pattern: book.patterns[0] });
    continue;
  }

  let bestResult = null;
  const minSearch = book.minSearch || 5;

  for (const pat of book.patterns) {
    const result = findWithVerse(raw, pat, 50000, 500, minSearch);
    if (result) {
      bestResult = result;
      break;
    }
  }

  if (bestResult) {
    found.push({ id: book.id, pos: bestResult.pos, pattern: bestResult.pattern });
  }
}

// Sort by position and deduplicate by ID (first occurrence wins)
found.sort((a, b) => a.pos - b.pos);
const seen = new Set();
const books = [];
for (const f of found) {
  if (!seen.has(f.id)) { seen.add(f.id); books.push(f); }
}

console.log(`Found ${books.length}/73 books`);

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Phase 3: Parse each book into chapters
let totalVerses = 0;
for (let i = 0; i < books.length; i++) {
  const { id, pos, pattern } = books[i];
  const nextPos = i < books.length - 1 ? books[i + 1].pos : Math.min(pos + 500000, raw.length);
  const bookText = raw.substring(pos + pattern.length, nextPos);
  const totalCh = CHAPTER_COUNTS[id] || 1;

  const verses = scanVerses(bookText);
  const chapters = toChapters(verses, totalCh);
  const chCount = Object.keys(chapters).length;
  totalVerses += verses.length;

  writeFileSync(join(OUT, `${id}.json`), JSON.stringify({ bookId: id, chapters }));
  console.log(`  ${id}: ${chCount}ch/${totalCh}, ${verses.length}v`);
}

// Report missing books
const foundIds = new Set(books.map(b => b.id));
const allExpected = new Set(BOOK_SEARCHES.map(b => b.id));
const missing = [...allExpected].filter(id => !foundIds.has(id));
if (missing.length > 0) {
  console.log(`\nMissing ${missing.length} books:`);
  for (const m of missing) console.log(`  - ${m}`);
}

console.log(`\nTotal: ${totalVerses} verses in ${books.length} books`);
