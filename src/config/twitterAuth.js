import { SITE_URL, consumerKey, consumerSecret } from './constants';


    
        'consumerKey'       : consumerKey,
        'consumerSecret'    : consumerSecret,
        'callbackURL'       : `${SITE_URL}/jobinvites`
    
}

export const twitterAuth = {
  consumerKey,
  consumerSecret,
  callbackURL: `${SITE_URL}/auth/twitter/callback`
};

