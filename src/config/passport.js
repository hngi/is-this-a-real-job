import passport from 'passport';
import Model from '../models';
import { consumerKey, consumerSecret, SITE_URL } from './constants';

// load the auth variables
import configTwitter from './twitterAuth';

const TwitterStrategy = require('passport-twitter').Strategy;

const { User } = Model;

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findUsers(id, (err, user) => {
      done(err, user);
    });
  });
  passport.use('twitter', new TwitterStrategy({

    consumerKey,
    consumerSecret,
    callbackURL: `${SITE_URL}/profile`

  }, (token, tokenSecret, profile, done) => {
    process.nextTick(() => {
      User.findOne({ 'twitter.id': profile.id }, (err, user) => {
        if (err) { return done(err); }

        // if the user is found then log them in
        if (user) {
          return done(null, user); // user found, return that user
        }
        // if there is no user, create them
        const newUser = new User();
        // set all of the user data that we need
        newUser.twitter.id = profile.id;
        newUser.twitter.username = profile.username;
        newUser.twitter.displayName = profile.displayName;

        // save our user into the database
        newUser.save((err) => {
          if (err) { throw err; }
          return done(null, newUser);
        });
      });
    });
  }));
};
