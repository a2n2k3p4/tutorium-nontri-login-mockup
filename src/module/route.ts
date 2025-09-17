import Elysia from "elysia";
import { LoginMock, LoginRequest, LoginResponse } from "./schema";
import { createMockUser, login } from "./service";

export const Route = new Elysia({ prefix: "/auth" }).post("/login",
  async ({ body }) => {
    const { Action, ID, Password } = body;

    const result = await login({ ID, Password });
    return result;
  }, {
  body: LoginRequest,
  response: LoginResponse
}
).post("/mock",
  async ({ body }) => {
    const { ID,name,surname } = body;

    const result = await createMockUser({ ID,name,surname });
    return result;
  },
  {
    body: LoginMock,
    response: LoginResponse
  }
);
