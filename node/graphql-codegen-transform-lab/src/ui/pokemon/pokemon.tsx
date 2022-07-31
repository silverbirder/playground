import withSuspense from "../withSuspense";
import { usePokemonQueryWrap } from "./hooks/usePokemonQueryWrap";

const PokemonComponent = () => {
  const { pokemon } = usePokemonQueryWrap();

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
