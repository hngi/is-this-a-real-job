const passport = require('passport');
const LocalStrategy    = require('passport-local').Strategy;
const TwitterStrategy  = require('passport-twitter').Strategy;
import { updateOneUser, findUsers } from '../services/userServices'
import User from "../models/user"
// load up the user model
var User       = require('../app/models/user');

// load the auth variables
import configTwitter from './twitterAuth';

export const authenticateWithTwitter = (passport)=> {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findUsers(id, function(err, user) {
            done(err, user);
        });
    });
    passport.use("twitter", new TwitterStrategy({

        consumerKey     : configTwitter.twitterAuth.consumerKey,
        consumerSecret  : configTwitter.twitterAuth.consumerSecret,
        callbackURL     : configTwitter.twitterAuth.callbackURL

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
                    newUser.twitter.token       = token;
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

    }));

};

