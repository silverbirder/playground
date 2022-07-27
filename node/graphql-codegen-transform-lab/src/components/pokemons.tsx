import { Pokemon } from "../graphql-client/generated/graphql";
import { usePokemonsQuery } from "./usePokemonsQuery";

const PokemonsComponent = () => {
  const { pokemons, fetching, error } = usePokemonsQuery();
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
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
