import { SITE_URL, consumerKey, consumerSecret } from './constants';

export const twitterAuth = {
  consumerKey,
  consumerSecret,
  callbackURL: `${SITE_URL}/auth/twitter/callback`
};
