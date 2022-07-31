import { Pokemon } from "../../graphql-client/generated/graphql";
import withSuspense from "../withSuspense";
import { usePokemonsQueryWrap } from "./hooks/usePokemonsQueryWrap";

const PokemonsComponent = () => {
  const { pokemons } = usePokemonsQueryWrap();

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

export default withSuspense(PokemonsComponent);
