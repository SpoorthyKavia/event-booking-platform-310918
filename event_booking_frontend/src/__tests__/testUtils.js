import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

/**
 * Renders the given UI wrapped in all required providers:
 * - MemoryRouter (to provide router context for useNavigate, <Link>, etc)
 * - QueryClientProvider (React Query)
 * - AuthProvider (with neutral/defaults)
 *
 * Accepts optional initialRoute and AuthProvider props overrides for custom auth context in tests.
 */
export function renderWithProviders(
  ui,
  {
    route = "/",
    authProviderProps = {},
    queryClientConfig = {},
    ...options
  } = {}
) {
  const queryClient = new QueryClient(queryClientConfig);

  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider {...authProviderProps}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </AuthProvider>
    </QueryClientProvider>,
    options
  );
}
