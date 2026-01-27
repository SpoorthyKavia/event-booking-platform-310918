import { screen } from "@testing-library/react";
import Events from "../pages/Events";
import * as eventsApi from "../api/events";
import { renderWithProviders } from "../testUtils";

jest.mock("../api/events");

const mockEvents = [{ id: 1, title: "Event1", description: "First", location: "X" }];

test("renders event cards", async () => {
  eventsApi.fetchEvents.mockResolvedValue({ events: mockEvents });
  renderWithProviders(<Events />);
  expect(await screen.findByText(/Event1/)).toBeInTheDocument();
});

test("shows error on fetch fail", async () => {
  eventsApi.fetchEvents.mockRejectedValue({ data: { detail: "err" } });
  renderWithProviders(<Events />);
  expect(await screen.findByText(/Error: err/)).toBeInTheDocument();
});
