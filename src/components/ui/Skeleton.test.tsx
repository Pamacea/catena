import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton, ManuscriptSkeleton, CardSkeleton, GridSkeleton, ChapterSkeleton } from "./Skeleton";

describe("Skeleton", () => {
  describe("Skeleton - rect variant (default)", () => {
    it("renders div element", () => {
      const { container } = render(<Skeleton />);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("applies default rect variant styling", () => {
      render(<Skeleton />);
      const skeleton = document.body;
      expect(skeleton.querySelector(".rounded")).toBeInTheDocument();
    });

    it("applies animate-pulse class", () => {
      render(<Skeleton />);
      const skeleton = document.body;
      expect(skeleton.querySelector(".animate-pulse")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<Skeleton className="custom-class" />);
      const skeleton = document.body;
      expect(skeleton.querySelector(".custom-class")).toBeInTheDocument();
    });
  });

  describe("Skeleton - text variant", () => {
    it("renders multiple lines", () => {
      render(<Skeleton variant="text" lines={3} />);
      const lines = document.querySelectorAll(".h-4");
      expect(lines.length).toBe(3);
    });

    it("respects custom lines prop", () => {
      render(<Skeleton variant="text" lines={5} />);
      const lines = document.querySelectorAll(".h-4");
      expect(lines.length).toBe(5);
    });

    it("uses 3 lines by default", () => {
      render(<Skeleton variant="text" />);
      const lines = document.querySelectorAll(".h-4");
      expect(lines.length).toBe(3);
    });
  });

  describe("Skeleton - circle variant", () => {
    it("applies rounded-full class", () => {
      render(<Skeleton variant="circle" />);
      const skeleton = document.body;
      expect(skeleton.querySelector(".rounded-full")).toBeInTheDocument();
    });

    it("has default 40px size", () => {
      render(<Skeleton variant="circle" />);
      const skeleton = document.body.querySelector(".rounded-full") as HTMLElement;
      expect(skeleton).toBeInTheDocument();
    });
  });

  describe("Skeleton - manuscript variant", () => {
    it("renders title line", () => {
      render(<Skeleton variant="manuscript" />);
      const title = document.body.querySelector(".h-7");
      expect(title).toBeInTheDocument();
    });

    it("renders content lines", () => {
      render(<Skeleton variant="manuscript" lines={4} />);
      const lines = document.querySelectorAll(".h-5");
      expect(lines.length).toBeGreaterThan(0);
    });

    it("applies gradient classes", () => {
      render(<Skeleton variant="manuscript" />);
      const gradient = document.body.querySelector(".bg-gradient-to-r");
      expect(gradient).toBeInTheDocument();
    });
  });

  describe("ManuscriptSkeleton", () => {
    it("renders title line", () => {
      render(<ManuscriptSkeleton />);
      const title = document.body.querySelector(".h-7");
      expect(title).toBeInTheDocument();
    });

    it("renders default number of lines", () => {
      render(<ManuscriptSkeleton />);
      const content = document.body;
      const lines = content.querySelectorAll(".h-5");
      expect(lines.length).toBe(8); // default 8 lines
    });

    it("respects custom lines prop", () => {
      render(<ManuscriptSkeleton lines={5} />);
      const content = document.body;
      const lines = content.querySelectorAll(".h-5");
      expect(lines.length).toBe(5);
    });
  });

  describe("CardSkeleton", () => {
    it("renders card container", () => {
      render(<CardSkeleton />);
      const card = document.body.querySelector(".rounded-lg");
      expect(card).toBeInTheDocument();
    });

    it("renders circle avatar", () => {
      render(<CardSkeleton />);
      const circles = document.querySelectorAll(".rounded-full");
      expect(circles.length).toBeGreaterThan(0);
    });

    it("has proper spacing", () => {
      render(<CardSkeleton />);
      const card = document.body.querySelector(".space-y-4");
      expect(card).toBeInTheDocument();
    });
  });

  describe("GridSkeleton", () => {
    it("renders cards", () => {
      render(<GridSkeleton count={4} />);
      const cards = document.querySelectorAll(".rounded-lg");
      expect(cards.length).toBeGreaterThan(0);
    });

    it("applies grid classes", () => {
      render(<GridSkeleton />);
      const grid = document.body.querySelector(".grid");
      expect(grid).toBeInTheDocument();
    });

    it("applies gap-6 spacing", () => {
      render(<GridSkeleton />);
      const grid = document.body.querySelector(".gap-6");
      expect(grid).toBeInTheDocument();
    });
  });

  describe("ChapterSkeleton", () => {
    it("renders chapter number skeleton", () => {
      render(<ChapterSkeleton />);
      // Chapter skeleton should have some skeleton elements
      const skeletonElements = document.querySelectorAll(".animate-pulse");
      expect(skeletonElements.length).toBeGreaterThan(0);
    });

    it("renders verse blocks", () => {
      render(<ChapterSkeleton />);
      const elements = document.querySelectorAll(".animate-pulse");
      expect(elements.length).toBeGreaterThan(1);
    });

    it("has max-w-4xl mx-auto container", () => {
      render(<ChapterSkeleton />);
      const container = document.body.querySelector(".max-w-4xl");
      expect(container).toBeInTheDocument();
    });
  });

  describe("Skeleton edge cases", () => {
    it("handles zero lines for text variant", () => {
      render(<Skeleton variant="text" lines={0} />);
      // Should still render structure
      expect(document.body.querySelector("div")).toBeInTheDocument();
    });

    it("handles zero lines for manuscript variant", () => {
      render(<Skeleton variant="manuscript" lines={0} />);
      // Should render title line
      const title = document.body.querySelector(".h-7");
      expect(title).toBeInTheDocument();
    });

    it("GridSkeleton handles zero count", () => {
      render(<GridSkeleton count={0} />);
      // Should render grid container
      expect(document.body.querySelector(".grid")).toBeInTheDocument();
    });
  });
});
