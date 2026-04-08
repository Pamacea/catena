import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  describe("Card", () => {
    it("renders children correctly", () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("applies default variant", () => {
      render(<Card>Default</Card>);
      const card = screen.getByText("Default").closest("div");
      expect(card).toHaveClass("bg-parchment-50");
    });

    it("applies parchment variant", () => {
      render(<Card variant="parchment">Parchment</Card>);
      const card = screen.getByText("Parchment").closest("div");
      expect(card).toHaveClass("bg-parchment-100");
      expect(card).toHaveClass("shadow-md");
    });

    it("applies ink variant", () => {
      render(<Card variant="ink">Ink</Card>);
      const card = screen.getByText("Ink").closest("div");
      expect(card).toHaveClass("bg-ink-900");
      expect(card).toHaveClass("text-parchment-50");
    });

    it("applies gold variant", () => {
      render(<Card variant="gold">Gold</Card>);
      const card = screen.getByText("Gold").closest("div");
      expect(card).toHaveClass("bg-gradient-to-br");
    });

    it("applies divine variant", () => {
      render(<Card variant="divine">Divine</Card>);
      const card = screen.getByText("Divine").closest("div");
      expect(card).toHaveClass("shadow-xl");
      expect(card).toHaveClass("border-2");
    });

    it("applies manuscrit variant", () => {
      render(<Card variant="manuscrit">Manuscrit</Card>);
      const card = screen.getByText("Manuscrit").closest("div");
      expect(card).toHaveClass("border-l-4");
      // The manuscrit variant has a special border configuration
      expect(card?.className).toContain("border-l");
    });

    it("applies rounded-lg styling", () => {
      render(<Card>Rounded</Card>);
      const card = screen.getByText("Rounded").closest("div");
      expect(card).toHaveClass("rounded-lg");
    });

    it("applies border styling", () => {
      render(<Card>Bordered</Card>);
      const card = screen.getByText("Bordered").closest("div");
      expect(card).toHaveClass("border");
    });

    it("applies custom className", () => {
      render(<Card className="custom-class">Custom</Card>);
      const card = screen.getByText("Custom").closest("div");
      expect(card).toHaveClass("custom-class");
    });

    it("has transition classes", () => {
      render(<Card>Transition</Card>);
      const card = screen.getByText("Transition").closest("div");
      expect(card).toHaveClass("transition-shadow");
    });
  });

  describe("CardHeader", () => {
    it("renders children correctly", () => {
      render(<CardHeader>Header content</CardHeader>);
      expect(screen.getByText("Header content")).toBeInTheDocument();
    });

    it("applies padding classes", () => {
      render(<CardHeader>Header</CardHeader>);
      const header = screen.getByText("Header").closest("div");
      expect(header).toHaveClass("p-6");
    });

    it("applies bottom border", () => {
      render(<CardHeader>Header</CardHeader>);
      const header = screen.getByText("Header").closest("div");
      expect(header).toHaveClass("border-b");
    });

    it("applies custom className", () => {
      render(<CardHeader className="custom-class">Header</CardHeader>);
      const header = screen.getByText("Header").closest("div");
      expect(header).toHaveClass("custom-class");
    });
  });

  describe("CardTitle", () => {
    it("renders children correctly", () => {
      render(<CardTitle>Title</CardTitle>);
      expect(screen.getByText("Title")).toBeInTheDocument();
    });

    it("renders as h3 element", () => {
      render(<CardTitle>Title</CardTitle>);
      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    });

    it("applies font-serif styling", () => {
      render(<CardTitle>Serif Title</CardTitle>);
      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toHaveClass("font-serif");
    });

    it("applies font-semibold styling", () => {
      render(<CardTitle>Semibold Title</CardTitle>);
      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toHaveClass("font-semibold");
    });

    it("applies text-ink-900 color", () => {
      render(<CardTitle>Colored Title</CardTitle>);
      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toHaveClass("text-ink-900");
    });

    it("applies custom className", () => {
      render(<CardTitle className="custom-class">Custom</CardTitle>);
      const title = screen.getByRole("heading", { level: 3 });
      expect(title).toHaveClass("custom-class");
    });
  });

  describe("CardDescription", () => {
    it("renders children correctly", () => {
      render(<CardDescription>Description text</CardDescription>);
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("renders as paragraph element", () => {
      render(<CardDescription>Description</CardDescription>);
      expect(screen.getByText("Description").tagName).toBe("P");
    });

    it("applies text-sm size", () => {
      render(<CardDescription>Small text</CardDescription>);
      const desc = screen.getByText("Small text");
      expect(desc).toHaveClass("text-sm");
    });

    it("applies text-ink-700 color", () => {
      render(<CardDescription>Description</CardDescription>);
      const desc = screen.getByText("Description");
      expect(desc).toHaveClass("text-ink-700");
    });

    it("applies custom className", () => {
      render(<CardDescription className="custom-class">Custom</CardDescription>);
      const desc = screen.getByText("Custom");
      expect(desc).toHaveClass("custom-class");
    });
  });

  describe("CardBody", () => {
    it("renders children correctly", () => {
      render(<CardBody>Body content</CardBody>);
      expect(screen.getByText("Body content")).toBeInTheDocument();
    });

    it("applies padding without top", () => {
      render(<CardBody>Body</CardBody>);
      const body = screen.getByText("Body").closest("div");
      expect(body).toHaveClass("p-6");
      expect(body).toHaveClass("pt-0");
    });

    it("applies custom className", () => {
      render(<CardBody className="custom-class">Custom</CardBody>);
      const body = screen.getByText("Custom").closest("div");
      expect(body).toHaveClass("custom-class");
    });
  });

  describe("CardFooter", () => {
    it("renders children correctly", () => {
      render(<CardFooter>Footer content</CardFooter>);
      expect(screen.getByText("Footer content")).toBeInTheDocument();
    });

    it("applies padding without top", () => {
      render(<CardFooter>Footer</CardFooter>);
      const footer = screen.getByText("Footer").closest("div");
      expect(footer).toHaveClass("p-6");
      expect(footer).toHaveClass("pt-0");
    });

    it("applies top border", () => {
      render(<CardFooter>Footer</CardFooter>);
      const footer = screen.getByText("Footer").closest("div");
      expect(footer).toHaveClass("border-t");
    });

    it("applies flex layout", () => {
      render(<CardFooter>Footer</CardFooter>);
      const footer = screen.getByText("Footer").closest("div");
      expect(footer).toHaveClass("flex");
    });

    it("applies custom className", () => {
      render(<CardFooter className="custom-class">Custom</CardFooter>);
      const footer = screen.getByText("Custom").closest("div");
      expect(footer).toHaveClass("custom-class");
    });
  });

  describe("Card composition", () => {
    it("renders complete card with all sub-components", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardBody>Card Body</CardBody>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      );

      expect(screen.getByText("Card Title")).toBeInTheDocument();
      expect(screen.getByText("Card Description")).toBeInTheDocument();
      expect(screen.getByText("Card Body")).toBeInTheDocument();
      expect(screen.getByText("Card Footer")).toBeInTheDocument();
    });

    it("renders card with only body", () => {
      render(
        <Card>
          <CardBody>Just body content</CardBody>
        </Card>
      );

      expect(screen.getByText("Just body content")).toBeInTheDocument();
    });

    it("renders card with multiple body elements", () => {
      render(
        <Card>
          <CardBody>
            <p>First paragraph</p>
            <p>Second paragraph</p>
          </CardBody>
        </Card>
      );

      expect(screen.getByText("First paragraph")).toBeInTheDocument();
      expect(screen.getByText("Second paragraph")).toBeInTheDocument();
    });
  });
});
