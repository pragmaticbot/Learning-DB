const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

const keys = require('../keys');

passport.serializeUser((user, done) => {
   done(null, user.id);
})

passport.deserializeUser((id, done) => {
   User.findById(id).then(user => {
      done(null, user);
   })
})

passport.use(new GoogleStrategy({
   clientID: keys.googleID,
   clientSecret: keys.googleSecret,
   callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
   User.findOne({ googleID: profile.id }).then(user => {
      if(user) {
         done(null, user);
      } else {
         new User({ googleID: profile.id }).save()
            .then(user => done(null, user));
      }
   })
}));
