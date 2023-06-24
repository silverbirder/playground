import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FlagProvider } from "@unleash/proxy-client-react";

const config = {
  url: `${process.env.REACT_APP_UNLEASH_URL}/api/frontend`, // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey:
    "*:development.f6c03af28f3e8a82fef98bbffc90d0504211a11598ee819196e481fa", // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
  appName: "default", // The name of your application. It's only used for identifying your application
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
