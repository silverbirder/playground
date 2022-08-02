type ClientOptions = {
  url: string;
};

type Client = {
  new (opts: ClientOptions): Client;
};

export type { Client as ClientIF };
