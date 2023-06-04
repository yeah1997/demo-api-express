const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    try {
        // check token
        let token = req.headers['authorization']
        token = token ? token.split('Bearer ')[1] : null

        // err
        if (!token) {
            return res.status(401).end()
        }
        const decodedToken = await verify(token, jwtSecret)
        req.user = await User.findById(decodedToken.userId)
        next()
    } catch (err) {
    }

    // ok

}