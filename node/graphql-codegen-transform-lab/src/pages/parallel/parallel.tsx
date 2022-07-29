import { useQuery } from "urql";
import {
  Pokemon,
  PokemonQuery,
  Pokemons,
  PokemonsQuery,
} from "../../graphql-client/generated/graphql";

const Parallel = () => {
  useQuery<PokemonsQuery>({ query: Pokemons });
  useQuery<PokemonQuery>({ query: Pokemon });
  return <>hello world</>;
};

export default Parallel;
