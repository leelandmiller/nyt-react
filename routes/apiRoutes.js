const express = require('express');

let articleController = require('../controllers/articleController');

let router = new express.Router();

router.get('/savedarticles', articleController.index);
router.post('/savedarticles', articleController.create);
router.delete('/savedarticles/:articleId', articleController.destroy);

module.exports = router;
