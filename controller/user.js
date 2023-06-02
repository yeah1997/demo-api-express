const { User } = require('../model')

// user login
exports.login = async (req, res, next) => {
    try {
        res.send('post: /users/login')
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
        res.send('get: /user')
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