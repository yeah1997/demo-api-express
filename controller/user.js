// user login
exports.login = async (req, res) => {
    try {
        res.send('post: /users/login')
    } catch (err) {
        next(err)
    }
}

// user regiseter 
exports.register = async (req, res) => {
    try {
        res.send('post: /users')
    } catch (err) {
        next(err)
    }
}

// get user info
exports.getCurrentUser = async (req, res) => {
    try {
        res.send('get: /user')
    } catch (err) {
        next(err)
    }
}

// update user info
exports.updateCurrentUser = async (req, res) => {
    try {
        res.send('put: /user')
    } catch (err) {
        next(err)
    }
}