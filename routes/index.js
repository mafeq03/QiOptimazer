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
  res.render('initial/welcome-page');
});

//Route to display essential information
router.get('/basics', (req, res, next) => {
  res.render('concepts/basics');
});


module.exports = router;
