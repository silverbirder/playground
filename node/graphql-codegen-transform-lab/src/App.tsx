import { Suspense } from "react";
import PokemonsComponent from "./ui/pokemons";
import PokemonComponent from "./ui/pokemon";

function App() {
  return (
    <>
      <p>Hello World</p>
      <Suspense fallback={<div>Loading ...</div>}>
        <PokemonsComponent />
        <PokemonComponent />
      </Suspense>
    </>
  );
}

export default App;
