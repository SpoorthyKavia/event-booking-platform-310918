import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './__tests__/testUtils';

test('renders navbar brand and at least Home route content', () => {
  renderWithProviders(<App />);
  // Navbar brand is always visible
  expect(screen.getByText(/EventBooking/i)).toBeInTheDocument();
  // Home page heading appears at initial route "/"
  expect(screen.getByText(/Event Booking Platform/i)).toBeInTheDocument();
});
