import { screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../testUtils";

describe("Navbar", () => {
  test("renders login and signup when not authenticated", () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText(/EventBooking/)).toBeInTheDocument();
    expect(screen.getByText(/Login/)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/)).toBeInTheDocument();
  });
});
