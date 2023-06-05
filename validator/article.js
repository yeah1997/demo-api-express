const { body, param } = require('express-validator')
const validate = require('../middleware/validate')
const mongoose = require('mongoose')

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage("Title of article can't be empty"),
    body('article.description').notEmpty().withMessage("Description of article can't be empty"),
    body('article.body').notEmpty().withMessage("Body of article can't be empty")
])


exports.getArticle = validate([
    param('articleId').custom(async value => {
        if (!mongoose.isValidObjectId(value)) {
            return Promise.reject('Article ID is not correct')
        }
    })
])