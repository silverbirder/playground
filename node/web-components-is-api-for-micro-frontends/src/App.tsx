import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    import("content/App").then((module) => {
      const { JsonView } = module;
      if (customElements.get("json-view") === undefined) {
        customElements.define("json-view", JsonView);
      }
    });
    import("search/App").then((module) => {
      const { SearchButton } = module;
      if (customElements.get("search-button") === undefined) {
        customElements.define("search-button", SearchButton);
      }
      const SearchButtonElement = document.querySelector("search-button");
      SearchButtonElement?.addEventListener("searchButtonClick", ((
        e: CustomEvent
      ) => {
        document
          .querySelector("json-view")
          ?.setAttribute("json", JSON.stringify(e.detail));
      }) as EventListener);
    });
  }, []);

  return (
    <>
      <search-button />
      <json-view json="{}" />
    </>
  );
};

export default App;
