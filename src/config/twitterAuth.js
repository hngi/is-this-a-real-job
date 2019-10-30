import {SITE_URL, consumerKey, consumerSecret }from "./constants"
function test (){
    console.log({SITE_URL, consumerKey, consumerSecret });
    
}
test();
export const twitterAuth = {

    
        'consumerKey'       : consumerKey,
        'consumerSecret'    : consumerSecret,
        'callbackURL'       : `${SITE_URL}/auth/twitter/callback`
    
}