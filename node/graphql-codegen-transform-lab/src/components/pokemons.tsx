import { useQuery } from "urql";
import {
  Pokemon,
  Pokemons,
  PokemonsQuery,
} from "../graphql-client/generated/graphql";

const PokemonsComponent = () => {
  const result = useQuery<PokemonsQuery>({ query: Pokemons });
  const [query] = result;
  const { data, fetching, error } = query;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <ul>
      {data &&
        data?.pokemons?.map((p: Pokemon | null) => {
          return (
            <li key={p?.id}>
              <div>{p?.name}</div>
            </li>
          );
        })}
    </ul>
  );
};

export { PokemonsComponent };
