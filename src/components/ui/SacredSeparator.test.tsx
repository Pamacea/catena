import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SacredSeparator } from "./SacredSeparator";

describe("SacredSeparator", () => {
  function getContainer() {
    return document.querySelector("[class*='my-8']") as HTMLElement;
  }

  describe("variants", () => {
    it("applies cross variant by default", () => {
      render(<SacredSeparator />);
      const container = getContainer();
      expect(container).toHaveClass("flex", "items-center", "justify-center");
    });

    it("renders cross symbol for cross variant", () => {
      render(<SacredSeparator variant="cross" />);
      expect(screen.getByText("✝")).toBeInTheDocument();
    });

    it("applies correct gradient for cross variant", () => {
      render(<SacredSeparator variant="cross" />);
      const container = getContainer();
      expect(container.className).toContain("before:via-gold-500/50");
    });

    it("renders chi-rho symbol for chi-rho variant", () => {
      render(<SacredSeparator variant="chi-rho" />);
      expect(screen.getByText("☧")).toBeInTheDocument();
    });

    it("applies correct gradient for chi-rho variant", () => {
      render(<SacredSeparator variant="chi-rho" />);
      const container = getContainer();
      expect(container.className).toContain("before:via-liturgical-red/30");
    });

    it("does not render symbol for line variant", () => {
      render(<SacredSeparator variant="line" />);
      expect(screen.queryByText("✝")).not.toBeInTheDocument();
      expect(screen.queryByText("☧")).not.toBeInTheDocument();
    });

    it("applies h-px for line variant", () => {
      render(<SacredSeparator variant="line" />);
      const container = getContainer();
      expect(container).toHaveClass("h-px");
    });

    it("does not render symbol for ornate variant", () => {
      render(<SacredSeparator variant="ornate" />);
      expect(screen.queryByText("✝")).not.toBeInTheDocument();
      expect(screen.queryByText("☧")).not.toBeInTheDocument();
    });

    it("applies stronger gradient for ornate variant", () => {
      render(<SacredSeparator variant="ornate" />);
      const container = getContainer();
      expect(container.className).toContain("before:via-gold-500");
    });
  });

  describe("symbol styling", () => {
    it("applies text-gold-600 to cross symbol", () => {
      render(<SacredSeparator variant="cross" />);
      expect(screen.getByText("✝")).toHaveClass("text-gold-600");
    });

    it("applies text-xl size to symbol", () => {
      render(<SacredSeparator variant="cross" />);
      expect(screen.getByText("✝")).toHaveClass("text-xl");
    });

    it("applies font-serif to symbol", () => {
      render(<SacredSeparator variant="cross" />);
      expect(screen.getByText("✝")).toHaveClass("font-serif");
    });

    it("applies opacity-80 to symbol", () => {
      render(<SacredSeparator variant="cross" />);
      expect(screen.getByText("✝")).toHaveClass("opacity-80");
    });
  });

  describe("layout", () => {
    it("applies my-8 spacing by default", () => {
      render(<SacredSeparator />);
      const container = getContainer();
      expect(container).toHaveClass("my-8");
    });

    it("applies gap-4 for symbol variants", () => {
      render(<SacredSeparator variant="cross" />);
      const container = getContainer();
      expect(container).toHaveClass("gap-4");
    });
  });

  describe("accessibility", () => {
    it("has aria-orientation horizontal", () => {
      render(<SacredSeparator />);
      const container = getContainer();
      expect(container).toHaveAttribute("aria-orientation", "horizontal");
    });
  });

  describe("custom styling", () => {
    it("applies custom className", () => {
      render(<SacredSeparator className="custom-class" />);
      const container = getContainer();
      expect(container).toHaveClass("custom-class");
    });

    it("merges custom className with variant classes", () => {
      render(<SacredSeparator variant="cross" className="custom-class" />);
      const container = getContainer();
      expect(container).toHaveClass("flex", "items-center");
      expect(container).toHaveClass("custom-class");
    });

    it("passes through other HTML attributes", () => {
      render(<SacredSeparator data-testid="custom-separator" />);
      expect(screen.getByTestId("custom-separator")).toBeInTheDocument();
    });
  });

  describe("pseudo-elements", () => {
    it("has before pseudo-element with gradient", () => {
      render(<SacredSeparator variant="cross" />);
      const container = getContainer();
      expect(container.className).toContain("before:");
    });

    it("has after pseudo-element with gradient", () => {
      render(<SacredSeparator variant="cross" />);
      const container = getContainer();
      expect(container.className).toContain("after:");
    });

    it("before pseudo-element has flex-1", () => {
      render(<SacredSeparator variant="cross" />);
      const container = getContainer();
      expect(container.className).toContain("before:flex-1");
    });

    it("after pseudo-element has flex-1", () => {
      render(<SacredSeparator variant="cross" />);
      const container = getContainer();
      expect(container.className).toContain("after:flex-1");
    });
  });

  describe("edge cases", () => {
    it("renders without variant specified (defaults to cross)", () => {
      render(<SacredSeparator />);
      expect(screen.getByText("✝")).toBeInTheDocument();
    });

    it("handles all variant types", () => {
      const { rerender } = render(<SacredSeparator variant="cross" />);
      expect(screen.getByText("✝")).toBeInTheDocument();

      rerender(<SacredSeparator variant="chi-rho" />);
      expect(screen.getByText("☧")).toBeInTheDocument();

      rerender(<SacredSeparator variant="line" />);
      expect(screen.queryByText("✝")).not.toBeInTheDocument();

      rerender(<SacredSeparator variant="ornate" />);
      expect(screen.queryByText("✝")).not.toBeInTheDocument();
    });
  });
});
