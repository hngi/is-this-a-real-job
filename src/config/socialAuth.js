import {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} from './constants';

export const twitterConfig = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: '/auth/twitter/callback'
};

