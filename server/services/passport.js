const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('../keys');

passport.use(new GoogleStrategy({
   clientID: keys.googleID,
   clientSecret: keys.googleSecret,
   callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
   new User({ googleID: profile.id }).save()
      .then(user => {
         console.log(user);
      })
}));
