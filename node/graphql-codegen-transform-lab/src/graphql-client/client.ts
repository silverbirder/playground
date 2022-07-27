import { createClient, useQuery } from "urql";
import { PokemonsQuery, Pokemons } from "./generated/graphql";

const client = createClient({
  url: "https://trygql.formidable.dev/graphql/basic-pokedex",
  suspense: true,
});

export { client };
