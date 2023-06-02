const express = require('express')
const { validationResult, body } = require('express-validator');
const userCtrl = require('../controller/user')
const { User } = require('../model')
const userValidator = require('../validator/user')

const router = express.Router()

// user login
router.post('/users/login', userCtrl.login)

// user register
router.post('/users', userValidator.register, userCtrl.register)

// Get user info
router.get('/user', userCtrl.getCurrentUser)

// update user
router.put('/user', userCtrl.updateCurrentUser)

module.exports = router