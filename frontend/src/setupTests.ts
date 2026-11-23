// jest-dom adds custom matchers for asserting on DOM nodes, e.g. expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// jsdom does not implement scrolling.
Element.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
