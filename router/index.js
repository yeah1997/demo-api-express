const express = require('express')

const router = express.Router()

// user
router.use(require('./user'))
// profile
router.use('/profiles', require('./profile'))
// article
router.use('/articles', require('./article'))
// tag
router.use('/tags', require('./tag'))


module.exports = router