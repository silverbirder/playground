import type { ClientIF } from "./client";
import type { Provider } from "react";

type MyProvider = Provider<ClientIF>;

export type { MyProvider as ProviderIF };
