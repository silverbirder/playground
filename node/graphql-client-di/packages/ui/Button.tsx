import { useQuery } from "@graphql-client-di/graphql-client";
// import { Pokemon } from "@graphql-client-di/graphql-codegen";
// → Module parse failed: Unexpected token (2:7) ...
import gql from "graphql-tag";

export const Button = () => {
  const [result] = useQuery({
    query: gql`
      query Pokemon {
        pokemon(id: "001") {
          id
          name
        }
      }
    `,
  });
  const { data, fetching } = result;
  console.log({ data, fetching });

  return <button>Boop</button>;
};
