const express = require('express');
const router = express.Router();

const userController = require("../controllers/usersController");

router.post('/login', userController.login)
router.post('/register', userController.create)

module.exports = router;