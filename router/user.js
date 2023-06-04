const express = require('express')
const { validationResult, body } = require('express-validator');
const userCtrl = require('../controller/user')
const { User } = require('../model')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()

// user login
router.post('/users/login', userValidator.login, userCtrl.login)

// user register
router.post('/users', userValidator.register, userCtrl.register)

// Get user info
router.get('/user', auth, userCtrl.getCurrentUser)

// update user
router.put('/user', auth, userCtrl.updateCurrentUser)

module.exports = router