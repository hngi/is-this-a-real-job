import passport from 'passport';
import Model from '../models';
import { twitterAuth } from '../config/twitterAuth';

const TwitterStrategy = require('passport-twitter').Strategy;


const { User } = Model;


passport.use('twitter', new TwitterStrategy({

  consumerKey: twitterAuth.consumerKey,
  consumerSecret: twitterAuth.consumerSecret,
  callbackURL: twitterAuth.callbackURL


    // handle the callback after twitter has authenticated the user
    
     export const passportAuthCallback = passport.authenticate("twitter", {
            successRedirect : '/jobinvites',
            failureRedirect : '/'
        });

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
export const passportAuthenticate = passport.authenticate('twitter');

// handle the callback after twitter has authenticated the user

export const passportAuthCallback = passport.authenticate('twitter', {
  successRedirect: '/profile',
  failureRedirect: '/'
});
