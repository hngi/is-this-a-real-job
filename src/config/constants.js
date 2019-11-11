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
  SITE_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  EMAIL_ADDR,
  EMAIL_PASSWORD,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  SENDER_ADDR,
} = process.env;

export const EXPIRATION_DURATION = 172800;

export const SEED_USER_ID = '47bcca82-7fb2-4c49-8937-19e18627b6b7';
export const SEED_ADMIN_ID = '539b62b2-fad8-40cc-a6d7-1dbbd8cd8c70';
export const SEED_USER_ID_2 = 'adcd468a-5466-4f2f-8fe0-ae12dd8d5234';
export const SEED_INVITE_ID = 'fdbd468a-2976-4f2f-8fe0-ae12dd8d5101';
export const SEED_INVITE_ID_2 = '449b6232-fad8-40cc-a6d7-1dbbd8cd8a34';
export const SEED_INVITE_ID_3 = '449b6232-fad8-40cc-a6d7-1dbbd8cd8a35';

// eslint-disable-next-line no-useless-escape
export const VALID_UUID = /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
