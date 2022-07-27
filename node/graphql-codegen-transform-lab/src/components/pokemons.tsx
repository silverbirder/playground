import { useQuery } from "urql";
import {
  Pokemon,
  Pokemons,
  PokemonsQuery,
} from "../graphql-client/generated/graphql";

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

const PokemonsComponent = () => {
  const result = useQuery<PokemonsQuery>({ query: Pokemons });
  const [query] = result;
  const { data, fetching, error } = query;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const pokemons = transform(data?.pokemons);
  return (
    <ul>
      {pokemons.map((p: Pokemon) => (
        <li key={p.id}>
          <div>{p.name}</div>
        </li>
      ))}
    </ul>
  );
};

export { PokemonsComponent };
