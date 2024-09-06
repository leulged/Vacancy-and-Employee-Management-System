const express = require('express');
const userController = require('../Controllers/userController');  // Ensure this path is correct
const authMiddleware = require('../Middleware/authMiddleware');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/',  userController.createUser);
router.get('/:id',  userController.getUserById);
router.put('/:id',  userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
//authMiddleware('6d8cf299-a521-4712-8d4d-145814fb3b31'),