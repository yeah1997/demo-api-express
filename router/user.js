const express = require('express')

const userCtrl = require('../controller/user')

const router = express.Router()

// user login
router.post('/users/login', userCtrl.login)

// user register
router.post('/users', userCtrl.register)

// Get user info
router.get('/user', userCtrl.getCurrentUser)

// update user
router.put('/user', userCtrl.updateCurrentUser)

module.exports = router