"use client";

/**
 * TanStack Query Client Configuration for Next.js 16
 *
 * This file provides the QueryClient setup for Client Components.
 * For Server Components, use theProviders component with dehydrated state.
 */

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider, type QueryClientConfig } from "@tanstack/react-query";

/**
 * Default QueryClient configuration
 */
const defaultConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
};

/**
 * QueryClientProvider component for Next.js 16
 *
 * This ensures we don't create a new QueryClient on every render
 * and avoids the "Cannot update a component while rendering a different component" warning.
 */
export function QueryProviders({ children }: { children: ReactNode }) {
  // useState ensures the client is only created once per component lifecycle
  const [queryClient] = useState(() => new QueryClient(defaultConfig));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
