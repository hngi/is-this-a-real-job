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
import { twitterConfig} from './socialAuth';

const TwitterAuthStrategy = TwitterStrategy.Strategy;

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

