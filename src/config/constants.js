import dotenv from 'dotenv';

dotenv.config();

export const {
  NODE_ENV,
  PORT,
  DEV_DATABASE_URL,
  TEST_DATABASE_URL,
  PROD_DATABASE_URL,
  SALT_ROUNDS,
  SECRET_KEY,
} = process.env;

export const EXPIRATION_DURATION = 172800;
