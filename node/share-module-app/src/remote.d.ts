declare namespace JSX {
  interface IntrinsicElements {
    [tagName: string]: any;
  }
}

declare module "content/App" {
  const JsonDiv: CustomElementConstructor;
  export { JsonDiv };
}

declare module "search/App" {
  const SearchButton: CustomElementConstructor;
  export { SearchButton };
}
