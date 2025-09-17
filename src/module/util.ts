const argon2 = require('argon2');

export async function hashPassword(Password: string): Promise<string> {
  const hashPassword = await argon2.hash(Password);
  return hashPassword;
}

export async function verifyPassword(hashedPassword: string, inputPassword: string): Promise<Boolean> {
  const verify = await argon2.verify(hashedPassword, inputPassword);
  return verify;
}

export function genToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < 16; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return token;
}
