const express = require('express');
const userController = require('../Controllers/userController');  // Ensure this path is correct
const { verifyToken, authorizeRole } = require('../Middleware/authMiddleware');

const router = express.Router();

router.get('/',  userController.getAllUsers);
router.post('/',  verifyToken, authorizeRole('Manager'), userController.createUser);
router.get('/:id', verifyToken, authorizeRole('Manager'), userController.getUserById);
router.put('/:id', verifyToken, authorizeRole('Manager'), userController.updateUser);
router.delete('/:id',verifyToken, authorizeRole('Manager'), userController.deleteUser);
router.get('/:email', verifyToken, userController.getUserByEmail);

module.exports = router;
//authMiddleware('6d8cf299-a521-4712-8d4d-145814fb3b31'),