import { useMemo } from "react";
import { ServiceType } from "@bufbuild/protobuf";
import {
  createConnectTransport,
  createPromiseClient,
  PromiseClient,
  Transport,
} from "@bufbuild/connect-web";

// This transport is going to be used throughout the app
const defaultTransport = createConnectTransport({
  baseUrl: "https://demo.connect.build",
});

/**
 * Get a promise client for the given service.
 */
export function useClient<T extends ServiceType>(
  service: T,
  transport: Transport = defaultTransport
): PromiseClient<T> {
  // We memoize the client, so that we only create one instance per service.
  return useMemo(() => createPromiseClient(service, transport), [service]);
}
