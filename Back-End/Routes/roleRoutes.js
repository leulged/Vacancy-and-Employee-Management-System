// routes/roleRoutes.js
const express = require('express');
const router = express.Router();
const { verifyToken, authorizeRole } = require('../Middleware/authMiddleware');
const roleController = require('../Controllers/rolesController');

// Apply middlewares to all routes that require authorization
router.post('/', verifyToken, authorizeRole('Manager'), roleController.createRole);
router.put('/:id', verifyToken, authorizeRole('Manager'), roleController.updateRole);
router.delete('/:id', verifyToken, authorizeRole('Manager'), roleController.deleteRole);
router.get('/', verifyToken, authorizeRole('Manager'), roleController.getRoles);

module.exports = router;
