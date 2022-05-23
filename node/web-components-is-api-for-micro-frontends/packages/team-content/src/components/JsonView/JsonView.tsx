import ReactDOM from "react-dom/client";
import App from "./App";

export class JsonView extends HTMLElement {
  root: ReactDOM.Root | undefined;
  static get observedAttributes() {
    return ["json"];
  }

  attributeChangedCallback() {
    const json = this.getAttribute("json") as string;
    const props = { json: json };
    if (this.root) {
      this.root.render(<App {...props} />);
    }
  }

  connectedCallback() {
    if (!this.hasAttribute("json")) {
      throw new Error("Nothing attributes: json");
    }
    const json = this.getAttribute("json") as string;
    const props = { json: json };
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);
    this.root = ReactDOM.createRoot(mountPoint as HTMLElement);
    this.root.render(<App {...props} />);
  }
}
