import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "urql";
import { client } from "./graphql-client/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
