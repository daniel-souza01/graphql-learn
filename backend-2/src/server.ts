import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppointmentResolver } from "./resolvers/appointments-resolver";
import { resolve } from "node:path";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentResolver],
    emitSchemaFile: resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();

  console.log(`HTTP Server running on ${url}`);
}

bootstrap();
