import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("should render input with placeholder", () => {
    render(<SearchBar placeholder="Rechercher..." />);
    expect(screen.getByPlaceholderText("Rechercher...")).toBeInTheDocument();
  });

  it("should call onSearch with debounced input", async () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} debounceMs={100} />);

    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "test");

    // Wait for debounce
    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(mockSearch).toHaveBeenCalledWith("test");
  });

  it("should call onSearch immediately when debounceMs is 0", async () => {
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} debounceMs={0} />);

    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "test");

    expect(mockSearch).toHaveBeenCalledWith("test");
    expect(mockSearch).toHaveBeenCalledTimes(4); // t, e, s, t
  });

  it("should use default placeholder when none provided", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Rechercher...")).toBeInTheDocument();
  });

  it("should not show icon when icon is 'none'", () => {
    render(<SearchBar icon="none" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("should show search icon by default", () => {
    render(<SearchBar />);
    const iconContainer = document.querySelector("svg.w-5.h-5");
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveAttribute("fill", "none");
  });

  it("should apply variant classes correctly", () => {
    const { rerender } = render(<SearchBar variant="minimal" />);
    const input = screen.getByRole("searchbox");

    expect(input).toHaveClass("bg-transparent");
    expect(input).toHaveClass("border-none");

    rerender(<SearchBar variant="parchment" />);
    expect(input).toHaveClass("bg-parchment-100");
  });

  it("should call onChange when provided", async () => {
    const handleChange = vi.fn();
    render(<SearchBar onChange={handleChange} />);

    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "a");

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
