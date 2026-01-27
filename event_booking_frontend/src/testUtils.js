import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

/**
 * Renders the given UI wrapped in all required providers:
 * - MemoryRouter (to provide router context)
 * - QueryClientProvider (React Query)
 * - AuthProvider (with neutral/defaults)
 * Accepts options:
 *   - withRouter: boolean (default true), disables router if false.
 *   - route: string (initial route for router)
 *   - authProviderProps, queryClientConfig: passed to providers
 *   - ...options: passed to render()
 */
export function renderWithProviders(
  ui,
  {
    withRouter = true,
    route = "/",
    authProviderProps = {},
    queryClientConfig = { defaultOptions: { queries: { retry: false } } },
    ...options
  } = {}
) {
  const queryClient = new QueryClient(queryClientConfig);

  let tree = (
    <QueryClientProvider client={queryClient}>
      <AuthProvider {...authProviderProps}>
        {withRouter ? <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter> : ui}
      </AuthProvider>
    </QueryClientProvider>
  );

  return render(tree, options);
}

/**
 * For components that already include their own Router (e.g., App).
 * Does NOT wrap with any router, only QueryClientProvider and AuthProvider.
 */
export function renderWithoutRouter(
  ui,
  {
    authProviderProps = {},
    queryClientConfig = { defaultOptions: { queries: { retry: false } } },
    ...options
  } = {}
) {
  const queryClient = new QueryClient(queryClientConfig);

  return render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider {...authProviderProps}>{ui}</AuthProvider>
    </QueryClientProvider>,
    options
  );
}
