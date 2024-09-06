// Routes/postedByRoutes.js
const express = require('express');
const router = express.Router();
const postedByController = require('../Controllers/postedByController');

router.get('/', postedByController.getAllPostedBy);
router.post('/', postedByController.createPostedBy);
router.get('/:id', postedByController.getPostedByById);
router.put('/:id', postedByController.updatePostedBy);
router.delete('/:id', postedByController.deletePostedBy);
router.get('/team/:teamId', postedByController.getPostedByTeamId); // New route to get by team

module.exports = router;
