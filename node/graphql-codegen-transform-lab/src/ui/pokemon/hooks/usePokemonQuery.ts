import { useQuery } from "urql";
import { Pokemon, PokemonQuery } from "../../../graphql-client/generated/graphql";

const transform = (pokemon: Pokemon | null | undefined): Pokemon | null => {
  if (!pokemon) {
    return null;
  }
  return pokemon;
};

export const usePokemonQuery = () => {
  const result = useQuery<PokemonQuery>({ query: Pokemon });
  const [query] = result;
  const { data, fetching, error } = query;
  return { pokemon: transform(data?.pokemon), fetching, error };
};
