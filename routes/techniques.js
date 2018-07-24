const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const Other  = require('../models/other.js');


//Route to show techniques
router.get('/', (req, res, next) => {
  Other.find()
    .then(others => {
       // console.log('==========',others);
      res.render("techniques/techniques", { others });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

//how can i limit the edit function to just administrator?

//Route to show deatils of one technique
router.get('/:id', (req, res, next) => {
  let otherId = req.params.id;
  Other.findOne({'_id': otherId})
    .then(other => {
      let user = req.session.passport.user;
      res.render("techniques/techniques-detail", { other, user });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

//Route to add technique - GET to call the edit form
router.get('/add', (req, res, next) => {
  res.render("techniques/techniques-add");
});

//Route to add techniques - POST to submit the form
router.post('/add', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  const newOther= new Other({ name, description, image, symptoms, reviews});
  newOther.save()
  .then((other) => {
    console.log('Created a new technique', other);
    res.redirect('/techniques');
     })
  .catch((error) => {
    console.log(error);
    next();
  });
});

//Route to Edit techniques - only for admin
router.get('/edit', (req, res, next) => {
  Other.findOne({_id: req.query.other_id})
  .then((other) => {
    res.render("techniques/techniques-edit", { other });
  })
  .catch((error) => {
    console.log(error);
    next();
  })
});

//Post portion of editing technique route
router.post('/edit/:id', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  Other.update({_id: req.query.other_id}, { $set: {name, description, image, symptoms, reviews }}, { new: true })
  .then((other) => {
    res.redirect("/techniques");
  })
  .catch((error) => {
    console.log(error);
    next();

  });
});

//Route to add reviews on Techniques
router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
 Other.update({ _id: req.query.other_id }, { $push: { reviews: { user, comments }}})
  .then(other => {
    res.redirect('/techniques/' + req.query.other_id);
  })
  .catch((error) => {
    console.log(error);
      });
});



module.exports = router;