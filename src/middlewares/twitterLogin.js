import passport from 'passport';
let LocalStrategy = require ('passport-local').Strategy;
let TwitterStrategy = require ('passport-twitter').Strategy;
import {twitterAuth} from '../config/twitterAuth';
passport.use("twitter", new TwitterStrategy({

    consumerKey     : twitterAuth.consumerKey,
    consumerSecret  : twitterAuth.consumerSecret,
    callbackURL     : twitterAuth.callbackURL

},(token, tokenSecret, profile, done)=> {
     process.nextTick(function() {
        User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
            if (err)
                return done(err);

            // if the user is found then log them in
            if (user) {
                return done(null, user); // user found, return that user
            } else {
                // if there is no user, create them
                var newUser                 = new User();
                // set all of the user data that we need
                newUser.twitter.id          = profile.id;
                newUser.twitter.username    = profile.username;
                newUser.twitter.displayName = profile.displayName;

                // save our user into the database
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        });

});

}))
export const passportAuthenticate = passport.authenticate("twitter");

    // handle the callback after twitter has authenticated the user
    
     export const passportAuthCallback = passport.authenticate("twitter", {
            successRedirect : '/jobinvites',
            failureRedirect : '/'
        });

