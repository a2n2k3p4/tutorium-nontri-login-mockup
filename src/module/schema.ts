import { t } from "elysia";


// schema login requrestr
export const LoginRequest = t.Object({
  Action: t.String(),
  ID: t.String(),
  Password: t.String()
});

export const LoginResponse = t.Object({
  id: t.String(),
  name_th: t.String(),
  surname_th: t.String(),
  name_en: t.String(),
  img_profile: t.String(),
  token: t.String(),
  status: t.String(),
});

// schema login add data  mock
export const LoginMock = t.Object({
  ID: t.String(),
    name: t.String(),
    surname: t.String(),
});
