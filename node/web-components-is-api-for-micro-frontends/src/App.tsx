import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    import("content/App").then((module) => {
      const { JsonDiv } = module;
      if (customElements.get("json-div") === undefined) {
        customElements.define("json-div", JsonDiv);
      }
    });
    import("search/App").then((module) => {
      const { SearchButton } = module;
      if (customElements.get("search-button") === undefined) {
        customElements.define("search-button", SearchButton);
      }
      const SearchButtonElement = document.querySelector("search-button");
      SearchButtonElement?.addEventListener("search", ((e: CustomEvent) => {
        document
          .querySelector("json-div")
          ?.setAttribute("value", JSON.stringify(e.detail));
      }) as EventListener);
    });
  }, []);

  return (
    <>
      <search-button />
      <json-div />
    </>
  );
};

export default App;
