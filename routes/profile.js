const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const bcrypt = require('bcryptjs');
const bcryptSalt     = 10;

// Function to check if user is logged in - must be logged in to view profile and edit it or delete it 
// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     res.redirect('/login');
//   }
// }
// ensureLogin.ensureAuthenticated('/login')

router.get('/:id', (req, res, next) => {
  let userId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(userId)) { 
    return res.status(404).render('not-found');
  }
  User.findOne({'_id': userId})
     .then(user => {
      if (!user) {
          return res.status(404).render('not-found');
      }
      res.render("profile/profile", { user });
    })
    .catch(next);
});

//Route to edit profile - render profile editing page
router.get('/:id/edit', (req, res, next) => {
  let userId = req.params.id;
  if(!userId){
    console.log(userId + 'This user does not exist');
    return res.status(404).render('not-found');
  }
  User.findById(userId)
  .then(user =>{
  if(!userId){
     console.log(userId + 'This user does not exist');
     return res.status(404).render('not-found');
 }
    res.render("profile/editProfile", {user});
  })
  .catch(err => {
    console.log('There is an error', err);
    next();
  });
});
//Post portion to edit and pass new information
router.post('/:id/edit', (req,res,next) =>{
  let userId = req.params.id;
  const {name, email, username, location, profilePic} = req.body;
  User.update({_id: userId},{$set:{name, email, username, location, profilePic}},{new: true})
  .then((user) =>{
    console.log(user.name);
    res.redirect('/profile');
  })
  .catch((err) =>{
    console.log(err);
    next();
  });
});

//Route to add current Treatments being used by user
router.post('/treatments/add', (req, res, next) => {
  const { name, date, time, comments } = req.body;
  User.update({ _id: req.query.user_id }, { $push: { treatments: { name, date, time, comments }}})
  .then(user => {
    res.redirect('/profile/' + req.query.user_id);
  })
  .catch((error) => {
    console.log(error);
    next();
  });
});



//Route to delete profile
router.post('/:id/delete', (req,res,next) => {
  let userId = req.params.id;
  User.findByIdAndRemove(userId)
  .then((user) => {
    if(!userId){
      console.log(userId + 'This user does not exist');
      return res.status(404).render('not-found');
  }
    console.log('Deletion Completed');
    res.redirect('/');
  })
  .catch((err)=>{
    console.log('Could not delete profile', err);
    next();
  });
});

module.exports = router;