// var passport = require('passport');
// var LocalStrategy = require('passport-local');
// var User = require('../models/User');

module.exports = (passport, LocalStrategy, User) => {
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
};