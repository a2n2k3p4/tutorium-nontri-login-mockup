// import { argon2d } from "argon2";

import { PrismaClient } from "../generated/prisma";
import { genToken, hashPassword, verifyPassword } from "./util";

const prisma = new PrismaClient();

export async function login(LoginRequest: { ID: string, Password: string; }) {
  try {
    const { ID, Password } = LoginRequest;

    const user = await prisma.user.findFirst({
      where: {
        nisit_id: ID
      }
    });

    if (!user) {
      return {
        id: "",
        name_th: "",
        surname_th: "",
        name_en: "",
        surname_en: "",
        img_profile: "",
        token: "",
        status: "false"
      };
    }

    const isPasswordValid = await verifyPassword(user.Password, Password);

    if (!isPasswordValid) {
      return {
        id: "",
        name_th: "",
        surname_th: "",
        name_en: "",
        surname_en: "",
        img_profile: "",
        token: "",
        status: "false"
      };
    }

    const token = genToken();

    return {
      id: user.nisit_id,
      name_th: user.NameTH,
      surname_th: user.SurnameTH,
      name_en: user.NameEN,
      img_profile: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
      token: token,
      status: "true"
    };
  }
  catch (error) {
    return {
      id: "",
      name_th: "",
      surname_th: "",
      name_en: "",
      surname_en: "",
      img_profile: "",
      token: "",
      status: "false"
    };
  }
}

export async function createMockUser(mockRequest: { ID: string, name:string, surname: string }) {
  try {
    const { ID,name,surname } = mockRequest;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        nisit_id: ID
      }
    });

    if (existingUser) {
      return {
        id: existingUser.nisit_id,
        name_th: existingUser.NameTH,
        surname_th: existingUser.SurnameTH,
        name_en: existingUser.NameEN,
        img_profile: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        token: "",
        status: "already_exists"
      };
    }

    // Hash default password
    const hashedPassword = await hashPassword("1q2w3e4r");

    // Create new user with mock data
    const newUser = await prisma.user.create({
      data: {
        nisit_id: ID,
        Password: hashedPassword,
        Token: "",
        NameTH: name,
        SurnameTH: surname,
        NameEN: "Name"
      }
    });

    return {
      id: newUser.nisit_id,
      name_th: newUser.NameTH,
      surname_th: newUser.SurnameTH,
      name_en: newUser.NameEN,
      img_profile: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      token: "",
      status: "created"
    };
  }
  catch (error) {
    return {
      id: "",
      name_th: "",
      surname_th: "",
      name_en: "",
      img_profile: "",
      token: "",
      status: "error"
    };
  }
}
