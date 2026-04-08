import { describe, it, expect } from "vitest";
import type {
  CatechismQuestion,
  CatechismReference,
  CatechismArticle,
  CatechismPart,
  CatechismCategory,
  CatechismAuthor,
  CatechismMetadata,
} from "./catechism";

describe("Catechism Types", () => {
  describe("CatechismQuestion", () => {
    it("creates valid question object", () => {
      const question: CatechismQuestion = {
        id: "1",
        question: "What is the chief end of man?",
        reponse: "To glorify God",
        category: "foi",
        part: 1,
        article: 1,
      };

      expect(question.id).toBe("1");
      expect(question.question).toBe("What is the chief end of man?");
      expect(question.reponse).toBe("To glorify God");
      expect(question.category).toBe("foi");
      expect(question.part).toBe(1);
      expect(question.article).toBe(1);
    });

    it("allows optional references", () => {
      const question: CatechismQuestion = {
        id: "1",
        question: "Question",
        reponse: "Answer",
        category: "grace",
        part: 1,
        article: 1,
        references: [
          {
            type: "biblique",
            source: "Jean",
            citation: "3:16",
          },
        ],
      };

      expect(question.references).toBeDefined();
      expect(question.references).toHaveLength(1);
      expect(question.references?.[0].type).toBe("biblique");
    });
  });

  describe("CatechismReference", () => {
    it("creates biblical reference", () => {
      const reference: CatechismReference = {
        type: "biblique",
        source: "Genèse",
        citation: "1:1",
      };

      expect(reference.type).toBe("biblique");
      expect(reference.source).toBe("Genèse");
      expect(reference.citation).toBe("1:1");
    });

    it("creates theological reference", () => {
      const reference: CatechismReference = {
        type: "theologique",
        source: "Saint Thomas d'Aquin",
        citation: "Summa Theologiae I, q. 1",
      };

      expect(reference.type).toBe("theologique");
    });

    it("creates document reference with URL", () => {
      const reference: CatechismReference = {
        type: "document",
        source: "Concile de Trente",
        citation: "Session IV",
        url: "https://example.com",
      };

      expect(reference.type).toBe("document");
      expect(reference.url).toBe("https://example.com");
    });

    it("allows optional URL", () => {
      const reference: CatechismReference = {
        type: "biblique",
        source: "Psaumes",
        citation: "23",
      };

      expect(reference.url).toBeUndefined();
    });
  });

  describe("CatechismArticle", () => {
    it("creates valid article object", () => {
      const article: CatechismArticle = {
        id: "art-1-1",
        part: 1,
        article: 1,
        title: "Du Symbole des Apôtres",
        titleShort: "Symbole",
        content: "Article content here",
        questions: [],
      };

      expect(article.id).toBe("art-1-1");
      expect(article.part).toBe(1);
      expect(article.article).toBe(1);
      expect(article.title).toBe("Du Symbole des Apôtres");
      expect(article.titleShort).toBe("Symbole");
      expect(article.questions).toHaveLength(0);
    });

    it("allows optional references", () => {
      const article: CatechismArticle = {
        id: "art-1-1",
        part: 1,
        article: 1,
        title: "Title",
        titleShort: "Short",
        content: "Content",
        questions: [],
        references: [
          {
            type: "theologique",
            source: "Source",
            citation: "citation",
          },
        ],
      };

      expect(article.references).toBeDefined();
      expect(article.references).toHaveLength(1);
    });
  });

  describe("CatechismPart", () => {
    it("creates valid part object", () => {
      const part: CatechismPart = {
        id: "part-1",
        part: 1,
        title: "Première Partie",
        description: "Description of first part",
        articles: [],
      };

      expect(part.id).toBe("part-1");
      expect(part.part).toBe(1);
      expect(part.title).toBe("Première Partie");
      expect(part.description).toBe("Description of first part");
      expect(part.articles).toHaveLength(0);
    });

    it("holds multiple articles", () => {
      const article1: CatechismArticle = {
        id: "art-1",
        part: 1,
        article: 1,
        title: "Article 1",
        titleShort: "Art 1",
        content: "Content 1",
        questions: [],
      };

      const article2: CatechismArticle = {
        id: "art-2",
        part: 1,
        article: 2,
        title: "Article 2",
        titleShort: "Art 2",
        content: "Content 2",
        questions: [],
      };

      const part: CatechismPart = {
        id: "part-1",
        part: 1,
        title: "Part 1",
        description: "Description",
        articles: [article1, article2],
      };

      expect(part.articles).toHaveLength(2);
      expect(part.articles[0].title).toBe("Article 1");
      expect(part.articles[1].title).toBe("Article 2");
    });
  });

  describe("CatechismCategory", () => {
    it("accepts foi category", () => {
      const category: CatechismCategory = "foi";
      expect(category).toBe("foi");
    });

    it("accepts grace category", () => {
      const category: CatechismCategory = "grace";
      expect(category).toBe("grace");
    });

    it("accepts peche-originel category", () => {
      const category: CatechismCategory = "peche-originel";
      expect(category).toBe("peche-originel");
    });

    it("accepts sacrament categories", () => {
      const sacraments: CatechismCategory[] = [
        "sacrement-bapteme",
        "sacrement-eucharistie",
        "sacrement-penitence",
        "sacrement-extreme-onction",
        "sacrement-ordre",
        "sacrement-mariage",
      ];

      sacraments.forEach((s) => {
        expect(s).toMatch(/^sacrement-/);
      });
    });

    it("accepts vertu categories", () => {
      const vertus: CatechismCategory[] = ["vertus-theologales", "vertus-cardinales", "vertus"];

      vertus.forEach((v) => {
        expect(v).toMatch(/vertu/);
      });
    });

    it("accepts peche categories", () => {
      const peches: CatechismCategory[] = ["peche-mortel", "peche-veniel", "peche-esprit", "peches"];

      peches.forEach((p) => {
        expect(p).toMatch(/pech/);
      });
    });

    it("accepts eschatology categories", () => {
      const eschatology: CatechismCategory[] = ["mort", "jugement", "enfer", "purgatoire", "ciel", "dernieres-choses", "eschatologie"];

      eschatology.forEach((e) => {
        expect(["mort", "jugement", "enfer", "purgatoire", "ciel", "dernieres-choses", "eschatologie"]).toContain(e);
      });
    });

    it("accepts all valid categories", () => {
      const validCategories: CatechismCategory[] = [
        "foi",
        "grace",
        "peche-originel",
        "justification",
        "merites",
        "perseverance",
        "sacrements",
        "priere",
        "vertus-theologales",
        "vertus-cardinales",
        "peches",
        "dernieres-choses",
        "eschatologie",
        "sacrement-bapteme",
        "sacrement-eucharistie",
        "sacrement-penitence",
        "sacrement-extreme-onction",
        "sacrement-ordre",
        "sacrement-mariage",
        "vertus",
        "peche-mortel",
        "peche-veniel",
        "peche-esprit",
        "mort",
        "jugement",
        "enfer",
        "purgatoire",
        "ciel",
      ];

      validCategories.forEach((category) => {
        const valid: CatechismCategory = category;
        expect(valid).toBeDefined();
      });
    });
  });

  describe("CatechismAuthor", () => {
    it("creates valid author object", () => {
      const author: CatechismAuthor = {
        name: "Saint Thomas d'Aquin",
        dates: "1225-1274",
        role: "Docteur de l'Église",
      };

      expect(author.name).toBe("Saint Thomas d'Aquin");
      expect(author.dates).toBe("1225-1274");
      expect(author.role).toBe("Docteur de l'Église");
    });

    it("handles single year dates", () => {
      const author: CatechismAuthor = {
        name: "Author",
        dates: "1850",
        role: "Writer",
      };

      expect(author.dates).toBe("1850");
    });

    it("handles circa dates", () => {
      const author: CatechismAuthor = {
        name: "Author",
        dates: "c. 350-420",
        role: "Writer",
      };

      expect(author.dates).toBe("c. 350-420");
    });
  });

  describe("CatechismMetadata", () => {
    it("creates valid metadata object", () => {
      const metadata: CatechismMetadata = {
        id: "tridentine",
        title: "Catéchisme du Concile de Trente",
        titleShort: "Tridentine",
        author: {
          name: "Concile de Trente",
          dates: "1545-1563",
          role: "Concile œcuménique",
        },
        date: "1566",
        doctrine: "Catholique Romaine",
        description: "Catéchisme officiel du Concile de Trente",
        parts: [],
      };

      expect(metadata.id).toBe("tridentine");
      expect(metadata.title).toBe("Catéchisme du Concile de Trente");
      expect(metadata.titleShort).toBe("Tridentine");
      expect(metadata.author.name).toBe("Concile de Trente");
      expect(metadata.date).toBe("1566");
      expect(metadata.doctrine).toBe("Catholique Romaine");
      expect(metadata.description).toBe("Catéchisme officiel du Concile de Trente");
      expect(metadata.parts).toHaveLength(0);
    });

    it("allows optional context", () => {
      const metadata: CatechismMetadata = {
        id: "test",
        title: "Test",
        titleShort: "T",
        author: {
          name: "Author",
          dates: "1800-1900",
          role: "Writer",
        },
        date: "1850",
        doctrine: "Catholic",
        description: "Description",
        context: "Historical context of this catechism",
        parts: [],
      };

      expect(metadata.context).toBe("Historical context of this catechism");
    });

    it("allows optional glossary", () => {
      const metadata: CatechismMetadata = {
        id: "test",
        title: "Test",
        titleShort: "T",
        author: {
          name: "Author",
          dates: "1800-1900",
          role: "Writer",
        },
        date: "1850",
        doctrine: "Catholic",
        description: "Description",
        parts: [],
        glossary: {
          term: "Definition of the term",
        },
      };

      expect(metadata.glossary).toBeDefined();
      expect(metadata.glossary?.term).toBe("Definition of the term");
    });

    it("allows optional references", () => {
      const metadata: CatechismMetadata = {
        id: "test",
        title: "Test",
        titleShort: "T",
        author: {
          name: "Author",
          dates: "1800-1900",
          role: "Writer",
        },
        date: "1850",
        doctrine: "Catholic",
        description: "Description",
        parts: [],
        references: [
          {
            type: "document",
            source: "Reference",
            citation: "citation",
          },
        ],
      };

      expect(metadata.references).toBeDefined();
      expect(metadata.references).toHaveLength(1);
    });
  });

  describe("Type relationships", () => {
    it("creates complete catechism structure", () => {
      const question: CatechismQuestion = {
        id: "q1",
        question: "What is faith?",
        reponse: "Faith is...",
        category: "foi",
        part: 1,
        article: 1,
      };

      const article: CatechismArticle = {
        id: "art-1-1",
        part: 1,
        article: 1,
        title: "Article Title",
        titleShort: "Art 1",
        content: "Article content",
        questions: [question],
      };

      const part: CatechismPart = {
        id: "part-1",
        part: 1,
        title: "Part 1",
        description: "First part",
        articles: [article],
      };

      const metadata: CatechismMetadata = {
        id: "test",
        title: "Test Catechism",
        titleShort: "Test",
        author: {
          name: "Author",
          dates: "1800-1900",
          role: "Writer",
        },
        date: "1850",
        doctrine: "Catholic",
        description: "Test description",
        parts: [part],
      };

      // Verify structure integrity
      expect(metadata.parts[0].articles[0].questions[0].id).toBe("q1");
      expect(metadata.parts[0].articles[0].questions[0].category).toBe("foi");
    });
  });
});
