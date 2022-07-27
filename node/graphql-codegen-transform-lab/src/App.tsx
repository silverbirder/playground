import { Suspense } from "react";
import { PokemonsComponent } from "./components/pokemons";

function App() {
  return (
    <>
      <p>Hello World</p>
      <Suspense fallback={<div>Loading ...</div>}>
        <PokemonsComponent />
      </Suspense>
    </>
  );
}

export default App;
