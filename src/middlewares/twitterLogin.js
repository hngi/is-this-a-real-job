import passport from 'passport';
let LocalStrategy = require ('passport-local').Strategy;
let TwitterStrategy = require ('passport-twitter').Strategy;

export const passportAuthenticate = passport.authenticate('twitter');

    // handle the callback after twitter has authenticated the user
    
     export const passportAuthCallback = passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
        });

