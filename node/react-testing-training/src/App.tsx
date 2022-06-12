import { CounterButton } from "./components/CounterButton";
import { Hello } from "./components/Hello";
import { LoadJson } from "./components/LoadJson";

function App() {
  return (
    <>
      <CounterButton />
      <Hello />
      <LoadJson src="https://api.coindesk.com/v1/bpi/currentprice.json" />
    </>
  );
}

export default App;
