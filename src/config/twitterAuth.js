import {SITE_URL, consumerKey, consumerSecret }from "./constants"

export const configTwitter = {

    'twitterAuth' : {
        'consumerKey'       : consumerKey,
        'consumerSecret'    : consumerSecret,
        'callbackURL'       : `${SITE_URL}/auth/twitter/callback`
    }
}