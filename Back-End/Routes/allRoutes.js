const express = require('express');

const teamRoutes = require('./teamRoutes');
const userRoutes = require('./userRoutes');
const roleRoutes = require('./roleRoutes');
const teamMembershipRoutes = require('./teamMembershipRoutes');
const categoryRoutes = require('./categoryRoutes');
const jobPostRoutes = require('./jobPostRoutes');
const applicationRoutes = require('./applicationRoutes');
const postedByRoutes = require('./postedByRoutes');
const permissionRoutes = require('./permissionRoutes')
const permissionRoleRoutes = require("./permissionRoleRoutes");

const router = express.Router();

router.use('/api/teams', teamRoutes);
router.use('/api/users', userRoutes);
router.use('/api/roles', roleRoutes);
router.use('/api/team-memberships', teamMembershipRoutes);
router.use('/api/auth', authRoutes);  // Add auth routes here
router.use('/api/categories', categoryRoutes);
router.use('/api/job-posts', jobPostRoutes);
router.use('/api/applications', applicationRoutes);
router.use('/api/postedBy', postedByRoutes);
router.use('/api/permissions', permissionRoutes);
router.use("/api/permissionRole", permissionRoleRoutes);

module.exports = router;
