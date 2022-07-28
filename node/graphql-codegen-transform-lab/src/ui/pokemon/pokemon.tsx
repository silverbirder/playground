import withSuspense from "../withSuspense";
import { usePokemonQuery } from "./hooks/usePokemonQuery";

const PokemonComponent = () => {
  const { pokemon } = usePokemonQuery();

  return (
    pokemon && (
      <ul>
        <li key={pokemon.id}>
          <div>{pokemon.name}</div>
        </li>
      </ul>
    )
  );
};

export default withSuspense(PokemonComponent);
