import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import AdminDashboard from "../pages/AdminDashboard";
import CreateEvent from "../pages/CreateEvent";
import EditEvent from "../pages/EditEvent";

test("renders Home page", () => {
  render(<Home />);
  expect(screen.getByText(/Event Booking Platform/)).toBeInTheDocument();
});

test("renders Bookings page", () => {
  render(<Bookings />);
  expect(screen.getByText(/Bookings/)).toBeInTheDocument();
});

test("renders AdminDashboard", () => {
  render(<AdminDashboard />);
  expect(screen.getByText(/Admin Dashboard/)).toBeInTheDocument();
});

test("renders Login/Register forms", () => {
  render(<Login />);
  expect(screen.getByText(/Sign In/)).toBeInTheDocument();
  render(<Register />);
  expect(screen.getByText(/Register/)).toBeInTheDocument();
});

test("renders Create/Edit Event", () => {
  render(<CreateEvent />);
  expect(screen.getByText(/Create Event/)).toBeInTheDocument();
  render(<EditEvent />);
  expect(screen.getByText(/Edit Event/)).toBeInTheDocument();
});
