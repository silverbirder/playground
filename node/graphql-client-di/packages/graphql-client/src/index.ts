import type { ClientIF, ProviderIF, useQueryIF } from "./interface";
import { Client, useQuery, Provider } from "./vendors/urql";

const myClient: ClientIF = Client as ClientIF;
const myProvider: ProviderIF = Provider as ProviderIF;
const myUseQuery: useQueryIF = useQuery as useQueryIF;

export { myClient as Client, myProvider as Provider, myUseQuery as useQuery };
