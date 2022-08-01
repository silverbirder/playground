import { Button } from "@graphql-client-di/ui";
import { createClient, Provider } from "@graphql-client-di/graphql-client";

const client = createClient({
  url: "https://trygql.formidable.dev/graphql/basic-pokedex",
});

export default function Web() {
  return (
    <Provider value={client}>
      <div>
        <h1>Web</h1>
        <Button />
      </div>
    </Provider>
  );
}
