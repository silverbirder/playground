import type { IGraphQLConfig } from "graphql-config";
import {config} from 'dotenv';

config();

/** @type {import('graphql-config').IGraphQLConfig} */
const graphqlConfig: IGraphQLConfig = {
  schema: [
    {
      [`${process.env.SUPABASE_URL}/graphql/v1`]: {
        headers: {
          apikey: process.env.SUPABASE_ANON_KEY || "",
          authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
      },
    },
  ],
  documents: "./documents.graphql",
  extensions: {
    diff: {
      baseSchema: "./schema.graphql",
    },
    codegen: {
      overwrite: true,
      generates: {
        "generated/schema.graphql": {
          plugins: ["schema-ast"],
        },
        "generated/msw.ts": {
          plugins: ["typescript", "typescript-operations", "typescript-msw"],
        },
      },
    },
  },
};

export default graphqlConfig;