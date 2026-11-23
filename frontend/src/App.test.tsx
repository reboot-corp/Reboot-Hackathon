import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
});

test("renders the home page", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Reboot" })).toBeInTheDocument();
});

test("nav links scroll to their section", () => {
  render(<App />);
  fireEvent.click(screen.getByTitle("About"));
  expect(window.location.hash).toBe("#about");
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
});

test("Try demo opens the play page", () => {
  render(<App />);
  fireEvent.click(screen.getAllByTitle("Try demo")[0]);
  expect(window.location.pathname).toBe("/play");
  expect(screen.getByText("Recommend fullscreen for best experience")).toBeInTheDocument();
});

test("unknown paths show the 404 page", () => {
  window.history.pushState({}, "", "/missing");
  render(<App />);
  expect(screen.getByRole("heading", { name: "404 Error" })).toBeInTheDocument();
});
