const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const User    = require('../models/user');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//Logout Page
router.get('/logout', (req, res, next) => {
  res.render('logout');
});

//Homepage
router.get('/home', (req, res, next) => {
  res.render('index');
});

//Welcome Page
router.get('/welcome', (req, res, next) => {
  res.render('../views/initial/welcome-page.hbs' );
});

//Learn more about
router.get('/basics', (req, res, next) => {
  res.render('../views/concepts/basics.hbs');
});


module.exports = router;
