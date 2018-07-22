const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const User    = require('../models/user');

//Route to display profile
router.get('/:id', (req, res, next) => {
  let userId = req.params.id;
  User.findOne({'_id': userId})
    .then(user => {
      res.render("profile/profile", { user });
    })
    .catch(error => {
      console.log(error);
    });
});
// router.get('/:id', (req, res, next) => {
//   let userId = req.params.id;
//     if(!userId){
//       return res.status(404).render('User not-found');
//     }
//     User.findById(userId)
//     .then(user => {
//       if(!user){
//         return res.status(404).render('not-found');
//       }
//       res.render("profile/profile", { user });
//     })
//     .catch(next);  
//   });

//Route to edit profile
router.get('/:id/edit', (req, res, next) => {
  let userId = req.params.id;
  User.findById(userId)
  .then(user => {
    if(!user){
      return res.status(404).render('not-found');
    }
    res.render("profile/editProfile", user);
  })
  .catch((error) => {
    console.log(error);
  });
});

//Post route to edit profile


//Route to delete profile

module.exports = router;