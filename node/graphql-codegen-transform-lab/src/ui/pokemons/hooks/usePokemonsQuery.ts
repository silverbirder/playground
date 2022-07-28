import { useQuery } from "urql";
import {
  Pokemon,
  Pokemons,
  PokemonsQuery,
} from "../../../graphql-client/generated/graphql";

const transform = (
  pokemons: Array<Pokemon | null> | null | undefined
): Pokemon[] => {
  if (!pokemons) {
    return [];
  }
  const newPokemons: Pokemon[] = [];
  pokemons.forEach((pokemon: Pokemon | null) => {
    if (pokemon === null) {
      return;
    }
    newPokemons.push(pokemon);
  });
  return newPokemons;
};

export const usePokemonsQuery = () => {
  const result = useQuery<PokemonsQuery>({ query: Pokemons });
  const [query] = result;
  const { data, fetching, error } = query;
  return { pokemons: transform(data?.pokemons), fetching, error };
};
