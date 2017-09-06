const express = require('express');

let articleController = require('../controllers/articleController');

let router = new express.Router();

router.get('/savedarticles', articleController.index);
router.post('/savedarticles', articleController.create);
// router.patch('/savedarticles/:id', articleController.update);
// router.delete('/savedarticles/:id', articleController.destroy);

module.exports = router;
