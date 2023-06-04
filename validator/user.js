const { body } = require('express-validator')
const validate = require('../middleware/validate')
const { User } = require('../model')
const md5 = require('../util/md5')

exports.register = validate([
    body('user.username')
        .notEmpty().withMessage("Username can't be empty")
        .custom(async username => {
            const user = await User.findOne({ username })
            if (user) {
                return Promise.reject('Username has been save')
            }
        }),
    body('user.password').notEmpty().withMessage("Password can't be empty"),
    body('user.email')
        .notEmpty().withMessage("Email can't be empty")
        .isEmail().withMessage("Email isn't correct")
        .bail()
        .custom(async email => {
            const user = await User.findOne({ email })
            if (user) {
                return Promise.reject('Email has been save')
            }
        }),
])

exports.login = [
    validate([
        body('user.email')
            .notEmpty().withMessage("Email can't be empty"),
        body('user.password')
            .notEmpty().withMessage("Password can't be empty")
    ]),
    validate([
        body('user.email').custom(async (email, { req }) => {
            const user = await User.findOne({ email }).select(['email', 'username', 'bio', 'iamge', 'password'])
            if (!user) {
                return Promise.reject('Email is not correct')
            }
            req.user = user
        })
    ]),
    validate([
        body('user.password').custom(async (password, { req }) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('Password is not correct')
            }
        })
    ])
] 