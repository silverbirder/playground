declare namespace JSX {
  interface IntrinsicElements {
    [tagName: string]: any;
  }
}

declare module "content/App" {
  const JsonView: CustomElementConstructor;
  export { JsonView };
}

declare module "search/App" {
  const SearchButton: CustomElementConstructor;
  export { SearchButton };
}
