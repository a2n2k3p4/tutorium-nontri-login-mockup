import swagger from "@elysiajs/swagger";
import Elysia from "elysia";
import { Route } from "./module/route";


const app = new Elysia()
  .use(swagger({
    documentation: {
      info: {
        title: "KU All Login API",
        version: "1.0.0",
        description: "API documentation for Mock KU All Login"
      }
    }
  })).use(Route)
  .listen(8001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
