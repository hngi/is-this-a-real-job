import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import randomstring from 'randomstring';
import Model from '../models';
import { twitterAuth } from './twitterAuth';
import { passwordHash } from '../helpers/hash';
import {
  findSingleUser, findUsers, createUser, updateOneUser
} from '../services/userServices';
import {
  GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET
} from './constants';

const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookAuthStrategy = FacebookStrategy.Strategy;

const { User } = Model;

// module.exports = () => {
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

  consumerKey: twitterAuth.consumerKey,
  consumerSecret: twitterAuth.consumerSecret,
  callbackURL: twitterAuth.callbackURL

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
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const {
      sub, name, picture, email
    } = profile._json;
    const username = name.replace(/\s/g, '').toLowerCase(); // Create username by joining name string
    const user = await findSingleUser({ email });
    const password = await passwordHash(accessToken);
    const usernameTaken = await findSingleUser({ username });
    // Create new user if not exists
    if (!user) {
      const newData = {};
      newData.name = name;
      newData.googleId = sub;
      newData.profileImage = picture;
      newData.email = email;
      newData.username = username;
      newData.password = password;
      if (usernameTaken) {
        newData.username = username + randomstring.generate({ length: 7, charset: 'numeric' });
      } else {
        newData.username = username;
      }
      const newUser = await createUser(newData);
      return done(null, newUser.user);
    }
    // Add user's googleId if it doesn't exist already
    if (user && !user.googleId) {
      const { userId } = user;
      const updatedUser = await updateOneUser({ googleId: sub }, { userId }).catch(e => {
        throw e;
      });
      return done(null, updatedUser);
    }
    // Return user if user exists
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

// Facebook Authentication
passport.use(new FacebookAuthStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: '/auth/facebook/redirect',
  profileFields: ['id', 'displayName', 'photos', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const {
      id, displayName, photos, emails
    } = profile;
    const email = emails[0].value;
    const username = displayName.replace(/\s/g, '').toLowerCase(); // Create username by joining name string
    const user = await findSingleUser({ email });
    const password = await passwordHash(accessToken);
    const usernameTaken = await findSingleUser({ username });
    // Create new user if not exists
    if (!user) {
      const newData = {};
      newData.name = displayName;
      newData.facebookId = id;
      newData.profileImage = photos[0].value;
      newData.email = email;
      newData.username = username;
      newData.password = password;
      if (usernameTaken) {
        newData.username = username + randomstring.generate({ length: 7, charset: 'numeric' });
      } else {
        newData.username = username;
      }
      const newUser = await createUser(newData);
      return done(null, newUser.user);
    }
    // Add user's googleId if it doesn't exist already
    if (user && !user.googleId) {
      const { userId } = user;
      const updatedUser = await updateOneUser({ facebookId: id }, { userId }).catch(e => {
        throw e;
      });
      return done(null, updatedUser);
    }
    // Return user if user exists
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));