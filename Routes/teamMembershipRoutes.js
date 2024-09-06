// routes/teamMembershipRoutes.js
const express = require('express');
const router = express.Router();
const teamMembershipController = require('../Controllers/teamMembershipController');

router.get('/', teamMembershipController.getAllMemberships);
router.get('/:id', teamMembershipController.getMembershipById);
router.post('/', teamMembershipController.createMembership);
router.put('/:id', teamMembershipController.updateMembership);
router.delete('/:id', teamMembershipController.deleteMembership);
router.get("/team/:teamId", teamMembershipController.getUsersByTeam);

module.exports = router;
