import { Pokemon } from "../../graphql-client/generated/graphql";
import { usePokemonsQuery } from "./hooks/usePokemonsQuery";

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

export default PokemonsComponent;
