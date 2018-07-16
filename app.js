require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const bcrypt       = require("bcrypt");
const saltRounds   = 10;
const session      = require('express-session');
const MongoStore   = require('connect-mongo')(session);
const multer       = require('multer');
const FbStrategy   = require('passport-facebook').Strategy;
const passport     = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash         = require("connect-flash");
const User     = require('./models/user');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/qioptimizer', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(flash());

//FB log in
passport.use(new FbStrategy({
  clientID: "843986969132392",
  clientSecret: "8b10b3ce3cd31646467869ce62ea5d47",
  callbackURL: "/auth/facebook/callback"
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ facebookID: profile.id }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (user) {
      return done(null, user);
    }

    const newUser = new User({
      facebookID: profile.id
    });

    newUser.save((err) => {
      if (err) {
        return done(err);
      }
      done(null, newUser);
    });
  });

}));


// default value for title local
app.locals.title = 'QiOptimizer';


const index = require('./routes/index');
app.use('/', index);


const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);



module.exports = app;
