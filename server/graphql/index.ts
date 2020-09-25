import { createApplication } from "graphql-modules";
// schema Modeuls
import { AccountModule } from "./accounts";
const app = createApplication({
  modules: [AccountModule],
});

export const executableSchema = app.createSchemaForApollo();
