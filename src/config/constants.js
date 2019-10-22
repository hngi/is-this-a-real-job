import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  DB_URL,
  SALT_ROUNDS,
  SECRET_KEY,
} = process.env;

export const EXPIRATION_DURATION = 172800;
