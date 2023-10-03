const express = require('express');
const router = express.Router();
const AuthController = require('../controller/authController');

router.post('/login', AuthController.AuthController);

module.exports = router;