import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cn, formatDate, formatYearRange, slugify, truncate, debounce } from "./utils";

describe("cn (className utility)", () => {
  it("merges class names correctly", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("handles conditional classes", () => {
    expect(cn("base-class", true && "active", false && "inactive")).toBe("base-class active");
  });

  it("resolves Tailwind conflicts with later classes winning", () => {
    expect(cn("px-4", "px-2")).toBe("px-2");
  });

  it("handles empty inputs", () => {
    expect(cn()).toBe("");
  });

  it("handles arrays of classes", () => {
    expect(cn(["px-4", "py-2"])).toBe("px-4 py-2");
  });

  it("handles objects with boolean values", () => {
    expect(cn({ "px-4": true, "py-2": false })).toBe("px-4");
  });

  it("merges complex inputs", () => {
    expect(cn("px-4", { "py-2": true, "mt-4": false }, ["text-sm"])).toBe("px-4 py-2 text-sm");
  });

  it("removes conflicting Tailwind classes", () => {
    expect(cn("p-4 p-2")).toBe("p-2");
  });

  it("handles undefined and null values", () => {
    expect(cn("px-4", undefined, null, "py-2")).toBe("px-4 py-2");
  });
});

describe("formatDate", () => {
  it("formats Date object to French locale", () => {
    const date = new Date("2026-04-07");
    expect(formatDate(date)).toMatch(/avril/);
    expect(formatDate(date)).toMatch(/2026/);
  });

  it("formats ISO date string", () => {
    expect(formatDate("2026-04-07")).toMatch(/7/);
    expect(formatDate("2026-04-07")).toMatch(/avril/);
  });

  it("includes day, month, and year", () => {
    const formatted = formatDate("2026-04-07");
    expect(formatted).toMatch(/\d{1,2}/); // day
    expect(formatted).toMatch(/avril/); // month
    expect(formatted).toMatch(/2026/); // year
  });

  it("handles different months", () => {
    expect(formatDate("2026-01-15")).toMatch(/janvier/);
    const decResult = formatDate("2026-12-25");
    expect(decResult).toBeTruthy();
  });

  it("handles single digit days", () => {
    expect(formatDate("2026-04-01")).toMatch(/1/);
  });

  it("handles leap year dates", () => {
    const febResult = formatDate("2024-02-29");
    expect(febResult).toBeTruthy();
  });
});

describe("formatYearRange", () => {
  it("formats start and end year", () => {
    expect(formatYearRange(325, 787)).toBe("325-787");
  });

  it("formats only start year with 'Depuis'", () => {
    expect(formatYearRange(1054)).toBe("Depuis 1054");
  });

  it("formats only end year with 'Jusqu'en'", () => {
    expect(formatYearRange(undefined, 476)).toBe("Jusqu'en 476");
  });

  it("returns empty string when no years provided", () => {
    expect(formatYearRange()).toBe("");
  });

  it("handles zero as start year", () => {
    const result = formatYearRange(0, 100);
    expect(result).toContain("0");
    expect(result).toContain("100");
  });

  it("handles negative years (BC)", () => {
    expect(formatYearRange(-30, 30)).toBe("-30-30");
  });

  it("handles same year for start and end", () => {
    expect(formatYearRange(800, 800)).toBe("800-800");
  });
});

describe("slugify", () => {
  it("converts to lowercase", () => {
    expect(slugify("HELLO")).toBe("hello");
  });

  it("replaces spaces with hyphens", () => {
    expect(slugify("hello world")).toBe("hello-world");
  });

  it("removes accents", () => {
    expect(slugify("Concile de Nicée")).toBe("concile-de-nicee");
    expect(slugify("Saint Jean Chrysostome")).toBe("saint-jean-chrysostome");
  });

  it("removes special characters", () => {
    expect(slugify("hello@world!")).toBe("hello-world");
  });

  it("removes leading and trailing hyphens", () => {
    expect(slugify("--hello--")).toBe("hello");
  });

  it("handles multiple spaces", () => {
    expect(slugify("hello   world   test")).toBe("hello-world-test");
  });

  it("preserves numbers", () => {
    expect(slugify("Council of 1234")).toBe("council-of-1234");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });

  it("collapses multiple hyphens", () => {
    expect(slugify("hello--world")).toBe("hello-world");
  });

  it("handles special French characters", () => {
    expect(slugify("àâäéèêëïîôùûüÿ")).toBe("aaaeeeeiiouuuy");
  });

  it("preserves alphanumeric characters", () => {
    expect(slugify("abc123-xyz")).toBe("abc123-xyz");
  });
});

describe("truncate", () => {
  it("returns string unchanged if shorter than limit", () => {
    expect(truncate("Short", 10)).toBe("Short");
  });

  it("returns string unchanged if equal to limit", () => {
    expect(truncate("Exact", 5)).toBe("Exact");
  });

  it("truncates and adds ellipsis when longer than limit", () => {
    expect(truncate("Lorem ipsum dolor sit amet", 10)).toBe("Lorem ipsu...");
  });

  it("handles empty string", () => {
    expect(truncate("", 10)).toBe("");
  });

  it("handles single character", () => {
    expect(truncate("A", 10)).toBe("A");
  });

  it("handles limit of 0", () => {
    expect(truncate("Hello", 0)).toBe("...");
  });

  it("handles limit of 1", () => {
    expect(truncate("Hello", 1)).toBe("H...");
  });

  it("preserves original string length in calculation", () => {
    const result = truncate("Hello World", 8);
    expect(result.length).toBe(11); // 8 chars + "..."
  });
});

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("delays function execution", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 300);

    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("cancels previous calls when called again", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 300);

    debouncedFn("first");
    debouncedFn("second");
    debouncedFn("third");

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("third");
  });

  it("resets timer on subsequent calls", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 300);

    debouncedFn();
    vi.advanceTimersByTime(200);
    debouncedFn();
    vi.advanceTimersByTime(200);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("passes arguments correctly", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    debouncedFn("arg1", "arg2", 42);

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith("arg1", "arg2", 42);
  });

  it("handles multiple different delays", () => {
    const fn1 = vi.fn();
    const fn2 = vi.fn();
    const debouncedFn1 = debounce(fn1, 100);
    const debouncedFn2 = debounce(fn2, 300);

    debouncedFn1();
    debouncedFn2();

    vi.advanceTimersByTime(100);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).not.toHaveBeenCalled();

    vi.advanceTimersByTime(200);
    expect(fn2).toHaveBeenCalledTimes(1);
  });

  it("works with zero delay", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 0);

    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(0);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
