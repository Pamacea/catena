import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies default variant (primary)", () => {
    render(<Button>Default</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-liturgical-red");
  });

  it("applies primary variant", () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-liturgical-red");
  });

  it("applies secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-parchment-200");
  });

  it("applies danger variant", () => {
    render(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-liturgical-red");
  });

  it("applies outline variant", () => {
    render(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-transparent");
    expect(screen.getByRole("button")).toHaveClass("border-2");
  });

  it("applies ghost variant", () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-transparent");
  });

  it("applies sacred variant", () => {
    render(<Button variant="sacred">Sacred</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-gradient-to-r");
    expect(screen.getByRole("button")).toHaveClass("from-gold-500");
  });

  it("applies vitrail variant", () => {
    render(<Button variant="vitrail">Vitrail</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-gradient-to-br");
    expect(screen.getByRole("button")).toHaveClass("from-liturgical-purple");
  });

  it("applies small size", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-3", "py-1.5", "text-sm");
  });

  it("applies medium size (default)", () => {
    render(<Button size="md">Medium</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-4", "py-2", "text-base");
  });

  it("applies large size", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("px-6", "py-3", "text-lg");
  });

  it("applies fullWidth class when true", () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("does not apply fullWidth class when false", () => {
    render(<Button fullWidth={false}>Not Full</Button>);
    expect(screen.getByRole("button")).not.toHaveClass("w-full");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies disabled styling", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toHaveClass("disabled:opacity-50");
  });

  it("has default button type", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("can override type prop", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("merges custom className with variant classes", () => {
    render(<Button variant="primary" className="mt-4">Primary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-liturgical-red");
    expect(screen.getByRole("button")).toHaveClass("mt-4");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };

    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("has focus-visible styling", () => {
    render(<Button>Focus Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("focus-visible:ring-2");
  });

  it("has transition classes", () => {
    render(<Button>Transition</Button>);
    expect(screen.getByRole("button")).toHaveClass("transition-colors");
  });

  it("renders with icon in children", () => {
    render(
      <Button>
        <span data-testid="icon">★</span>
        With Icon
      </Button>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("With Icon");
  });

  it("applies rounded-md styling", () => {
    render(<Button>Rounded</Button>);
    expect(screen.getByRole("button")).toHaveClass("rounded-md");
  });

  it("applies font-medium styling", () => {
    render(<Button>Font</Button>);
    expect(screen.getByRole("button")).toHaveClass("font-medium");
  });
});
