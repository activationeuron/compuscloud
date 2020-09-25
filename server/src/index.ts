import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { executableSchema } from "../graphql/index";
const app: Application = express();

const server = new ApolloServer({
  schema: executableSchema,
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("App Running on port http://localhost:3000");
});
