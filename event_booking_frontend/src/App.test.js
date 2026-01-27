import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithoutRouter } from "./testUtils";

test("renders navbar brand and Home content", () => {
  renderWithoutRouter(<App />);
  // Check the navbar brand (logo text)
  expect(screen.getByText(/EventBooking/i)).toBeInTheDocument();
  // Assert Home page root heading is present (stable, unlikely to break)
  expect(screen.getByText(/Event Booking Platform/i)).toBeInTheDocument();
});
