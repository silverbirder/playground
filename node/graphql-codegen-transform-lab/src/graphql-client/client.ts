import { createClient } from "urql";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const wrapFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  const secound =
    init && init.body && /pokemons/.test(init.body.toString()) ? 1 : 3;
  await sleep(1000 * secound);
  return fetch(input, init);
};

const client = createClient({
  url: "https://trygql.formidable.dev/graphql/basic-pokedex",
  suspense: true,
  fetch: wrapFetch,
});

export { client };
