const express = require('express');
const router = express.Router();
const userController = require('../controller/userControler');

router.post('/users', userController.CreateUser);
router.get('/users', userController.GetAllUsers);
router.get('/users/:id', userController.GetUserById);
router.put('/users/:id', userController.UpdateUser);

module.exports = router;