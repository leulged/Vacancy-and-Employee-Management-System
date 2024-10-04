const express = require('express');
const jobPostController = require('../Controllers/jobPostController');
const router = express.Router();
const { verifyToken, authorizeRole } = require('../Middleware/authMiddleware');

router.post('/', verifyToken, authorizeRole('HR Leader', 'Team Leader'), jobPostController.createJobPost);
router.get('/',verifyToken, authorizeRole('HR Leader', 'Team Leader','Manager'),  jobPostController.getJobPosts);
router.get('/:id', jobPostController.getJobPostById);
router.put('/:id',verifyToken, authorizeRole('Manager'),  jobPostController.updateJobPost);
router.delete('/:id', verifyToken, authorizeRole('HR Leader', 'Team Leader'), jobPostController.deleteJobPost);

module.exports = router;
