const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const User    = require('../models/user');
const Other  = require('../models/other.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Route to Logout Page
router.get('/logout', (req, res, next) => {
  res.render('logout');
});

//Route to display Welcome Page
router.get('/welcome', (req, res, next) => {
  User.findById(req.session.passport.user)
  .then(user => {
   if (!user) {
       return res.status(404).render('not-found');
   }
   res.render("initial/welcome-page", { user });
 })
 .catch(err => {
  console.log('There is an error', err);
  next();
 });
  });

//Route to display essential information
router.get('/basics', (req, res, next) => {
  res.render('concepts/basics');
});

//Route to display map to search specialist near you
router.get('/tcm-nearyou', (req, res, next) => {
  res.render('initial/map-search');
});




module.exports = router;
