import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

const customRender = (ui, { providerProps, ...options } = {}) => {
  return render(
    <MemoryRouter>
      <AuthProvider {...providerProps}>{ui}</AuthProvider>
    </MemoryRouter>,
    options
  );
};

describe("Navbar", () => {
  test("renders login and signup when not authenticated", () => {
    customRender(<Navbar />);
    expect(screen.getByText(/EventBooking/)).toBeInTheDocument();
    expect(screen.getByText(/Login/)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/)).toBeInTheDocument();
  });
});
