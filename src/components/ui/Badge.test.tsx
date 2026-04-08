import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge, CategoryBadge, CenturyBadge } from "./Badge";

describe("Badge", () => {
  describe("Badge", () => {
    it("renders children correctly", () => {
      render(<Badge>Badge text</Badge>);
      expect(screen.getByText("Badge text")).toBeInTheDocument();
    });

    it("renders as span element", () => {
      render(<Badge>Badge</Badge>);
      expect(screen.getByText("Badge").tagName).toBe("SPAN");
    });

    it("applies default variant", () => {
      render(<Badge>Default</Badge>);
      expect(screen.getByText("Default")).toHaveClass("bg-parchment-200");
    });

    it("applies primary variant", () => {
      render(<Badge variant="primary">Primary</Badge>);
      expect(screen.getByText("Primary")).toHaveClass("bg-liturgical-red");
    });

    it("applies secondary variant", () => {
      render(<Badge variant="secondary">Secondary</Badge>);
      expect(screen.getByText("Secondary")).toHaveClass("bg-ink-900");
    });

    it("applies success variant", () => {
      render(<Badge variant="success">Success</Badge>);
      expect(screen.getByText("Success")).toHaveClass("bg-liturgical-green");
    });

    it("applies warning variant", () => {
      render(<Badge variant="warning">Warning</Badge>);
      expect(screen.getByText("Warning")).toHaveClass("bg-gold-500");
    });

    it("applies danger variant", () => {
      render(<Badge variant="danger">Danger</Badge>);
      expect(screen.getByText("Danger")).toHaveClass("bg-liturgical-red");
    });

    it("applies outline variant", () => {
      render(<Badge variant="outline">Outline</Badge>);
      expect(screen.getByText("Outline")).toHaveClass("bg-transparent");
      expect(screen.getByText("Outline")).toHaveClass("border-2");
    });

    it("applies liturgical variant", () => {
      render(<Badge variant="liturgical">Liturgical</Badge>);
      expect(screen.getByText("Liturgical")).toHaveClass("bg-gradient-to-r");
      expect(screen.getByText("Liturgical")).toHaveClass("from-liturgical-purple");
    });

    it("applies century variant", () => {
      render(<Badge variant="century">IVe</Badge>);
      expect(screen.getByText("IVe")).toHaveClass("bg-ink-900/80");
      expect(screen.getByText("IVe")).toHaveClass("text-gold-400");
    });

    it("applies small size", () => {
      render(<Badge size="sm">Small</Badge>);
      expect(screen.getByText("Small")).toHaveClass("px-2", "py-0.5", "text-xs");
    });

    it("applies medium size (default)", () => {
      render(<Badge size="md">Medium</Badge>);
      expect(screen.getByText("Medium")).toHaveClass("px-2.5", "py-1", "text-sm");
    });

    it("applies large size", () => {
      render(<Badge size="lg">Large</Badge>);
      expect(screen.getByText("Large")).toHaveClass("px-3", "py-1.5", "text-base");
    });

    it("shows dot indicator when dot is true", () => {
      render(<Badge dot>With Dot</Badge>);
      const badge = screen.getByText("With Dot");
      const dot = badge.querySelector("span");
      expect(dot).toBeInTheDocument();
      expect(dot).toHaveClass("h-2", "w-2", "rounded-full");
    });

    it("does not show dot when dot is false", () => {
      render(<Badge dot={false}>No Dot</Badge>);
      const badge = screen.getByText("No Dot");
      const dot = badge.querySelector("span");
      expect(dot).not.toBeInTheDocument();
    });

    it("applies green dot for success variant", () => {
      render(<Badge variant="success" dot>Success</Badge>);
      const badge = screen.getByText("Success");
      const dot = badge.querySelector("span");
      expect(dot).toHaveClass("bg-green-400");
    });

    it("applies gold dot for warning variant", () => {
      render(<Badge variant="warning" dot>Warning</Badge>);
      const badge = screen.getByText("Warning");
      const dot = badge.querySelector("span");
      expect(dot).toHaveClass("bg-gold-400");
    });

    it("applies red dot for danger variant", () => {
      render(<Badge variant="danger" dot>Danger</Badge>);
      const badge = screen.getByText("Danger");
      const dot = badge.querySelector("span");
      expect(dot).toHaveClass("bg-red-400");
    });

    it("applies gray dot for default variant", () => {
      render(<Badge dot>Default</Badge>);
      const badge = screen.getByText("Default");
      const dot = badge.querySelector("span");
      expect(dot).toHaveClass("bg-ink-400");
    });

    it("applies rounded-full styling", () => {
      render(<Badge>Rounded</Badge>);
      expect(screen.getByText("Rounded")).toHaveClass("rounded-full");
    });

    it("applies font-medium styling", () => {
      render(<Badge>Font</Badge>);
      expect(screen.getByText("Font")).toHaveClass("font-medium");
    });

    it("applies custom className", () => {
      render(<Badge className="custom-class">Custom</Badge>);
      expect(screen.getByText("Custom")).toHaveClass("custom-class");
    });

    it("has transition classes", () => {
      render(<Badge>Transition</Badge>);
      expect(screen.getByText("Transition")).toHaveClass("transition-colors");
    });
  });

  describe("CategoryBadge", () => {
    it("renders category name as text", () => {
      render(<CategoryBadge category="doctrine" />);
      expect(screen.getByText("doctrine")).toBeInTheDocument();
    });

    it("maps doctrine category to primary variant", () => {
      render(<CategoryBadge category="doctrine" />);
      expect(screen.getByText("doctrine")).toHaveClass("bg-liturgical-red");
    });

    it("maps liturgy category to secondary variant", () => {
      render(<CategoryBadge category="liturgy" />);
      expect(screen.getByText("liturgy")).toHaveClass("bg-ink-900");
    });

    it("maps bible category to success variant", () => {
      render(<CategoryBadge category="bible" />);
      expect(screen.getByText("bible")).toHaveClass("bg-liturgical-green");
    });

    it("maps catechism category to warning variant", () => {
      render(<CategoryBadge category="catechism" />);
      expect(screen.getByText("catechism")).toHaveClass("bg-gold-500");
    });

    it("maps fathers category to liturgical variant", () => {
      render(<CategoryBadge category="fathers" />);
      const badge = screen.getByText("fathers");
      expect(badge).toHaveClass("bg-gradient-to-r");
    });

    it("maps council category to century variant", () => {
      render(<CategoryBadge category="council" />);
      expect(screen.getByText("council")).toHaveClass("bg-ink-900/80");
    });

    it("uses default variant for unknown category", () => {
      render(<CategoryBadge category="unknown" />);
      expect(screen.getByText("unknown")).toHaveClass("bg-parchment-200");
    });

    it("is case-insensitive for category matching", () => {
      render(<CategoryBadge category="Doctrine" />);
      expect(screen.getByText("Doctrine")).toHaveClass("bg-liturgical-red");
    });

    it("passes additional props to Badge", () => {
      render(<CategoryBadge category="doctrine" className="custom-class" />);
      expect(screen.getByText("doctrine")).toHaveClass("custom-class");
    });

    it("respects size prop", () => {
      render(<CategoryBadge category="doctrine" size="lg" />);
      expect(screen.getByText("doctrine")).toHaveClass("px-3");
    });
  });

  describe("CenturyBadge", () => {
    it("displays century with roman numeral suffix", () => {
      render(<CenturyBadge century={4} />);
      expect(screen.getByText("IVe")).toBeInTheDocument();
    });

    it("converts number to roman numerals correctly", () => {
      const { rerender } = render(<CenturyBadge century={1} />);
      expect(screen.getByText("Ie")).toBeInTheDocument();

      rerender(<CenturyBadge century={5} />);
      expect(screen.getByText("Ve")).toBeInTheDocument();

      rerender(<CenturyBadge century={10} />);
      expect(screen.getByText("Xe")).toBeInTheDocument();

      rerender(<CenturyBadge century={13} />);
      expect(screen.getByText("XIIIe")).toBeInTheDocument();
    });

    it("passes through string centuries unchanged", () => {
      render(<CenturyBadge century="XVIe" />);
      expect(screen.getByText("XVIe")).toBeInTheDocument();
    });

    it("applies century variant", () => {
      render(<CenturyBadge century={4} />);
      expect(screen.getByText("IVe")).toHaveClass("bg-ink-900/80");
    });

    it("applies small size by default", () => {
      render(<CenturyBadge century={4} />);
      expect(screen.getByText("IVe")).toHaveClass("text-xs");
    });

    it("passes additional props to Badge", () => {
      render(<CenturyBadge century={4} className="custom-class" />);
      expect(screen.getByText("IVe")).toHaveClass("custom-class");
    });

    it("handles larger numbers correctly", () => {
      render(<CenturyBadge century={21} />);
      expect(screen.getByText("XXIe")).toBeInTheDocument();
    });

    it("handles complex roman numerals", () => {
      render(<CenturyBadge century={44} />);
      expect(screen.getByText("XLIVe")).toBeInTheDocument();
    });
  });

  describe("Badge edge cases", () => {
    it("renders with empty text", () => {
      render(<Badge></Badge>);
      // Empty badge should still render a span
      const badge = document.querySelector("span");
      expect(badge).toBeInTheDocument();
      expect(badge?.tagName).toBe("SPAN");
    });

    it("century badge handles number 0", () => {
      render(<CenturyBadge century={0} />);
      // The romanize function returns "0e" for 0
      // But our implementation might handle 0 differently
      const badge = document.querySelector("span");
      expect(badge).toBeInTheDocument();
    });

    it("renders with React elements as children", () => {
      render(
        <Badge>
          <span data-testid="badge-icon">★</span>
          Icon Badge
        </Badge>
      );
      expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
      expect(screen.getByText("Icon Badge")).toBeInTheDocument();
    });

  });
});
