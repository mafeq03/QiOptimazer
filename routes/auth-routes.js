const express  = require('express');
const bcrypt   = require('bcryptjs');
const bcryptSalt = 10;
const User     = require('../models/user');
const authRoutes   = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const multer   = require('multer');
const path       = require('path');

//Singup and Log in Routes using passport 

//Signup route - show form to sign up
authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});
//sends information to MongoDB - Creates User
authRoutes.post("/signup", (req, res, next) => {
  const {
    name,
    email,
    username,
    password,
    location, 
    profilePic
  } = req.body;
//requires both UN and Pass to create profile
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }
//ensure email is not being used
  User.findOne({ email })
    .then(user => {
      if (user !== null) {
        res.render("auth/signup", { message: "The email is already being used" });
        return;
      }
//used to encrypt password
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
//creates new user
      const newUser = new User({
        name,
        email,
        username,
        password: hashPass,
        location, 
        profilePic
      });

      newUser.save(err => {
        if (err) {
          res.render("auth/signup", { message: "Something went wrong" });
        } else {
          res.redirect("/login");
        }
      });
    })
    .catch(error => {
      next(error);
    });
});

//Login Route
authRoutes.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

authRoutes.post("/login", passport.authenticate("local", {
  successRedirect: "/welcome",
  successFlash: true, 
  failureRedirect: "/",
  failureFlash: true,
  passReqToCallback: true
}));



//Log in with FB
authRoutes.get("/auth/facebook", passport.authenticate("facebook"));
authRoutes.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/welcome",
    failureRedirect: "/"
  })
);

//Logout Route
authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/logout");
});



module.exports = authRoutes;
