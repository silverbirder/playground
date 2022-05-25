import ReactDOM from "react-dom/client";
import App from "./App";

export class JsonDiv extends HTMLElement {
  root: ReactDOM.Root | undefined;
  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback() {
    const value = this.getAttribute("value") || ("{}" as string);
    const props = { json: value };
    if (this.root) {
      this.root.render(<App {...props} />);
    }
  }

  connectedCallback() {
    const value = this.getAttribute("value") || ("{}" as string);
    const props = { json: value };
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);
    this.root = ReactDOM.createRoot(mountPoint as HTMLElement);
    this.root.render(<App {...props} />);
  }
}
