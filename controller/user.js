const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// user login
exports.login = async (req, res, next) => {
    try {
        const user = req.user.toJSON()
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret)

        delete user.password

        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

// user regiseter 
exports.register = async (req, res, next) => {
    try {
        // check format
        let user = new User(req.body.user)
        // save to db
        await user.save()
        // toJson
        user = user.toJSON()
        // delete user.password
        delete user.password
        // res
        res.status(201).json({
            message: "succeed",
            user
        })
    } catch (err) {
        next(err)
    }
}

// get user info
exports.getCurrentUser = async (req, res, next) => {
    try {
        res.status(201).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}

// update user info
exports.updateCurrentUser = async (req, res, next) => {
    try {
        res.send('put: /user')
    } catch (err) {
        next(err)
    }
}