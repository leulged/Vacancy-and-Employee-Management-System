// routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const teamController = require('../Controllers/teamController');
const { verifyToken, authorizeRole } = require('../Middleware/authMiddleware');

router.get('/', verifyToken, authorizeRole('Manager'), teamController.getAllTeams);
router.get('/:id', verifyToken, authorizeRole('Manager'), teamController.getTeamById);
router.post('/', verifyToken, authorizeRole('Manager'),  teamController.createTeam);
router.put('/:id', verifyToken, authorizeRole('Manager'), teamController.updateTeam);
router.delete('/:id', verifyToken, authorizeRole('Manager'), teamController.deleteTeam);

module.exports = router;
