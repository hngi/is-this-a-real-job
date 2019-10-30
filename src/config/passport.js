import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import Model from '../models';
import { findSingleUser, findUsers, createUser, updateOneUser } from '../services/userServices';
import {
  consumerKey, consumerSecret, SITE_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
} from './constants';

const TwitterStrategy = require('passport-twitter').Strategy;

const { User } = Model;

// module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((userId, done) => {
    User.findUsers(id, (err, user) => {
      done(err, user);
    });
  });
  passport.use('twitter', new TwitterStrategy({

    consumerKey,
    consumerSecret,
    callbackURL: `${SITE_URL}/auth/twitter/callback`

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


  // Google Authentication
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
  }, async(accessToken, refreshToken, profile, done) => {
    try {
      const { sub, name, picture, email } = profile._json;
      const username = name.replace(/\s/g, ''); // Create username by joining name string
      const user = await User.findOne({where: { email }});
      if(!user) {
        const newData = {}
        newData.name = name;
        newData.username = username;
        newData.googleId = sub;
        newData.profileImage = picture;
        newData.password = accessToken;
        newData.email = email;
        const newUser = await createUser(newData);
        return done(null, newUser);
      }
      // Add user's googleId if it doesn't exist already
      if(user && !user.googleId) {
        const updatedUser = await User.updateOneUser({ googleId: sub }, { email })
        return done(null, updatedUser);
      }
      // Return user if user exists
      return done(null, user)
    } catch(err){
      return done(null, false)
    }
  }));
// };
