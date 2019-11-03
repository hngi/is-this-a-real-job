import passport from 'passport';
import TwitterStrategy from 'passport-twitter';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import randomstring from 'randomstring';
import Model from '../models';
import { passwordHash } from '../helpers/hash';
import {
  findSingleUser, createUser, updateOneUser
} from '../services/userServices';
import { twitterConfig, googleConfig, facebookConfig } from './socialAuth';

const TwitterAuthStrategy = TwitterStrategy.Strategy;

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

// Twitter Authentication
passport.use(new TwitterAuthStrategy(twitterConfig,
  async (token, tokenSecret, profile, done) => {
    try {
      const {
        id, name, screen_name, profile_image_url_https
      } = profile._json;
      const user = await findSingleUser({ twitterId: id });
      const password = await passwordHash(token);
      const usernameTaken = await findSingleUser({ username: screen_name });
      // Create new user if not exists
      if (!user) {
        const newData = {};
        newData.name = name;
        newData.twitterId = id;
        newData.email = `${screen_name}@itarj-twitter.com`;
        newData.password = password;
        // newData.profileImage = profile_image_url_https;
        if (usernameTaken) {
          newData.username = screen_name + randomstring.generate({ length: 7, charset: 'numeric' });
        } else {
          newData.username = screen_name;
        }
        const newUser = await createUser(newData);
        return done(null, newUser.user);
      }
      // Add user's googleId if it doesn't exist already
      if (user && !user.twitterId) {
        const { userId } = user;
        const updatedUser = await updateOneUser({ twitterId: id }, { userId }).catch(e => {
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


// Google Authentication
passport.use(new GoogleStrategy(googleConfig,
  async (accessToken, refreshToken, profile, done) => {
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
passport.use(new FacebookAuthStrategy(facebookConfig,
  async (accessToken, refreshToken, profile, done) => {
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
        // newData.profileImage = photos[0].value;
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
