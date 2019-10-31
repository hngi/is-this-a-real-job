import passport from 'passport';
let TwitterStrategy  = require('passport-twitter').Strategy;
import { updateOneUser, findUsers } from '../services/userServices'
import User from "../models/user"
module.exports = ()=> {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findUsers(id, function(err, user) {
            done(err, user);
        });
    });


};

