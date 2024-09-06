const express = require('express');
const jobPostController = require('../Controllers/jobPostController');
const router = express.Router();

router.post('/', jobPostController.createJobPost);
router.get('/', jobPostController.getJobPosts);
router.get('/:id', jobPostController.getJobPostById);
router.put('/:id', jobPostController.updateJobPost);
router.delete('/:id', jobPostController.deleteJobPost);

module.exports = router;
