const express = require('express');
const applicationController = require('../Controllers/applicationController');
const { verifyToken, authorizeRole } = require('../Middleware/authMiddleware');

const router = express.Router();

router.post('/', applicationController.createApplication);
router.get('/', verifyToken, authorizeRole('HR Leader', 'Team Leader'), applicationController.getApplications);

router.get('/:id',verifyToken, authorizeRole('HR Leader', 'Team Leader'), applicationController.getApplicationById);
router.put('/:id', verifyToken, authorizeRole('HR Leader', 'Team Leader'),applicationController.updateApplication);
router.delete('/:id', verifyToken, authorizeRole('HR Leader', 'Team Leader'),applicationController.deleteApplication);

module.exports = router;
