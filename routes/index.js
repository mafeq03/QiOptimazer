const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const User    = require('../models/user');
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
  res.render('/views/concepts/basics.hbs');
})
//Route to display Herbs
router.get('/herbs', (req, res, next) => {
  res.render('/views/concepts/herbs.hbs');
})
//Route to display other Treatments
router.get('/other-techniques', (req, res, next) => {
  res.render('/views/concepts/techniques.hbs');
})

module.exports = router;
