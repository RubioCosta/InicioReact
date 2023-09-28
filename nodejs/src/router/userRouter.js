const express = require('express');
const router = express.Router();
const userController = require('../controller/userControler');

router.post('/users', userController.CreateUser);

module.exports = router;