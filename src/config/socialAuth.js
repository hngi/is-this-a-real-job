import { TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  SITE_URL } from './constants';

export const twitterConfig = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: `${SITE_URL}/auth/twitter/redirect`,
  includeEmail: true
};

export const googleConfig = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${SITE_URL}/auth/google/redirect`
};

export const facebookConfig = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: `${SITE_URL}/auth/facebook/redirect`,
  profileFields: ['id', 'displayName', 'photos', 'email']
};
