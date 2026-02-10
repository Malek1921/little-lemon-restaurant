import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { initializeTimes } from "./components/Main";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00"]} />);
  const headingElement = screen.getByText("Find a Table");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns initial time array", () => {
  const times = initializeTimes();
  const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(times).toEqual(expected);
});
