const express = require('express')
const router = express.Router()

// Get user profile
router.get('/:username', (req, res) => {
    try {
        res.send('get: /profiles/:username')
    } catch (err) {
        next(err)
    }
})

// follow user
router.post('/:username/follow', (req, res) => {
    try {
        res.send('get: /profiles/:username')
    } catch (err) {
        next(err)
    }
})

// unfollow user
router.delete('/:username/follow', (req, res) => {
    try {
        res.send('get: /profiles/:username')
    } catch (err) {
        next(err)
    }
})


module.exports = router