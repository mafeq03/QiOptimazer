const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const Herb    = require('../models/herbs');


//Route to show herbs 
router.get('/', (req, res, next) => {
  Herb.find()
    .then(herbs => {
      console.log(herbs);
      res.render('herbs/herbs', { herbs });
    })
    .catch(error => {
      console.log(error);
    })
});

//how can i limit the edit function to just administrator?

//Route to show deatils of one herb
router.get('/:id', (req, res, next) => {
  let herbId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(herbId)) { 
    return res.status(404).render('not-found');
  }
  Herb.findOne({'_id': herbId})
    
    .then(herb => {
      if (!herb) {
          return res.status(404).render('not-found');
      }
      res.render("herbs/herbs-detail", { herb });
    })
    .catch(next);
});

//Route to edit Herbs
//Get part of route
router.get('/edit', (req, res, next) => {
  Herb.findOne({_id: req.query.herb_id})
  .then((herb) => {
    res.render("herbs/herbs-edit", { herb });
  })
  .catch((error) => {
    console.log(error);
  });
});
//Post part of route
router.post('/edit', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  Herb.update({_id: req.query.herb_id}, { $set: {name, description, image, symptoms, reviews }}, { new: true })
  .then((herb) => {
    res.redirect('/herbs');
  })
  .catch((error) => {
    console.log(error);
  })
});


//Route to add herbs - GET to call the add form
router.get('/add', (req, res, next) => {
  res.render("herbs/herbs-add");
});

//Route to add herbs - POST to submit the form
router.post('/add', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  const newHerb = new Herb({ name, description, image, symptoms, reviews});
  newHerb.save()
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
  });
});



module.exports = router;