const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const User    = require('../models/user');

//Route to display profile
router.get('/profile', function (req, res, next){
  User.find((err, profilePics) =>{
    res.render('profile', {profilePics})
  })
});

//Route to edit profile



//Route to delete profile