import { Pokemon } from "../graphql-client/generated/graphql";
import { usePokemonsQuery } from "./usePokemonsQuery";

const PokemonsComponent = () => {
  const { pokemons } = usePokemonsQuery();

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
