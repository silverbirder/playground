import { useContext } from "react";
import { CustomElementContext } from "./SearchButton";

const App = () => {
  const customElement = useContext(CustomElementContext);
  const onClick = () => {
    customElement.dispatchEvent(
      new CustomEvent("searchButtonClick", { detail: { num: Math.random() } })
    );
  };
  return <button onClick={onClick}>Search</button>;
};

export default App;
