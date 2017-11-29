const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose');
const cookie = require('cookie-session');

/* Requires */
const keys = require('./keys');

/* Initialize Server */
mongoose.connect(keys.mlabURL, { useMongoClient: true });
mongoose.Promise = global.Promise;
require('./models/User');

const app = express();

app.use(cookie({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());

/* Middleware Requires */
require('./services/passport');

/* Routes */
app.get('/', (req, res) => {
  res.send({ Welcome: req.user });
});

app.get('/auth/google', passport.authenticate('google', {
   scope: ['email', 'profile']
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
   res.redirect('/surveys')
});

app.get('/surveys', (req, res) => {
   res.send('surveys');
});

app.get('/api/user', (req, res) => {
   res.send(req.user);
});

app.get('/api/logout', (req, res) => {
   req.logout();
   res.redirect('/');
});


/* Run Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
