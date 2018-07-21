const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const Other  = require('../models/others');


//Route to show techniques
router.get('/techniques', (req, res, next) => {
  Other.find()
    .then(others => {
      console.log(others);
      res.render("techniques/techniques", { others });
    })
    .catch(error => {
      console.log(error);
    })
});

//how can i limit the edit function to just administrator?

//Route to show deatils of one technique
router.get('/technique/:id', (req, res, next) => {
  let otherId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(otherId)) { 
    return res.status(404).render('not-found');
  }
  Other.findOne({'_id': otherId})
    
    .then(other => {
      if (!other) {
          return res.status(404).render('not-found');
      }
      res.render("techniques-detail", { other });
    })
    .catch(next);
});

//Route to add technique - GET to call the edit form
router.get('/techniques/add', (req, res, next) => {
  res.render("techniques/tecniques-add");
});

//Route to add techniques - POST to submit the form
router.post('/techniques/add', (req, res, next) => {
  const { name, description, image, symptoms, reviews } = req.body;
  const newOther= new Other({ name, description, image, symptoms, reviews});
  newOther.save()
  .then((other) => {
    res.redirect('/techniques');
     })
  .catch((error) => {
    console.log(error);
  });
});

//Route to Edit techniques - only for admin
router.get('/techniques/edit', (req, res, next) => {
  Other.findOne({_id: req.query.other_id})
  .then((other) => {
    res.render("techniques/technique-edit", {technique});
  })
  .catch((error) => {
    console.log(error);
  });
});

//Route to add reviews on Techniques
router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
 Other.update({ _id: req.query.other_id }, { $push: { reviews: { user, comments }}})
  .then(herb => {
    res.redirect('/techniques/' + req.query.other_id);
  })
  .catch((error) => {
    console.log(error);
  });
});



module.exports = router;