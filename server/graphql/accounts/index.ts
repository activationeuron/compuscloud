import { createModule, gql } from "graphql-modules";

export const AccountModule = createModule({
  id: "AccountModule",
  dirname: __dirname,
  typeDefs: gql`
    type Query {
      firstName: String
    }
  `,
});
