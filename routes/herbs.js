const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const Herb    = require('../models/herbs.js');


//Route to show herbs 
router.get('/', (req, res, next) => {
  Herb.find()
    .then(herbs => {
      // console.log(herbs);
      res.render("herbs/herbs", { herbs });
    })
    .catch(error => {
      console.log(error);
      next();
    })
});

//how can i limit the edit function to just administrator?

//Route to show deatils of one herb
router.get('/:id', (req, res, next) => {
  let herbId = req.params.id;
  Herb.findOne({'_id': herbId})
    .then(herb => {
      res.render("herbs/herbs-detail", { herb });
    })
    .catch(error => {
      console.log(error);
      next();
    });
});

//Route to add herbs - GET to call the edit form
router.get('/add', (req, res, next) => {
  res.render("herbs/herbs-add");
});

//Route to add herbs - POST to submit the form
router.post('/add', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  const newHerb = new Herb({ name, description, image, symptoms, reviews});
  newHerb.save()
  .then((herb) => {
    console.log('Created a new herb', herb);
    res.redirect('/herbs');
     })
  .catch((error) => {
    console.log(error);
    next();
  });
});

//Route to edit Herbs get part of route
router.get('/edit', (req, res, next) => {
  Herb.findOne({_id: req.query.herb_id})
  .then((herb) => {
    res.render("herbs/herbs-edit", { herb });
  })
  .catch((error) => {
    console.log(error);
    next();
  });
});

//Post part of editing route
router.post('/edit/:id', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  Herb.update({_id: req.query.herb_id}, { $set: {name, description, image, symptoms, reviews }}, { new: true })
  .then((herb) => {
    res.redirect('/herbs');
  })
  .catch((error) => {
    console.log(error);
  });
});


//Route to add reviews on Herbs
router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
  Herb.update({ _id: req.query.herb_id }, { $push: { reviews: { user, comments }}})
  .then(herb => {
    res.redirect('/herbs/' + req.query.herb_id);
  })
  .catch((error) => {
    console.log(error);
    next();
  });
});



module.exports = router;