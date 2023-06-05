const { body, param } = require('express-validator')
const mongoose = require('mongoose')
const validate = require('../middleware/validate')
const { Article } = require('../model')

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage("Title of article can't be empty"),
    body('article.description').notEmpty().withMessage("Description of article can't be empty"),
    body('article.body').notEmpty().withMessage("Body of article can't be empty")
])

exports.getArticle = validate([
    validate.isValidObjectId(['params'], 'articleId')
])

exports.updateArticle = [
    validate([
        validate.isValidObjectId(['params'], 'articleId'),
    ]),
    async (req, res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        req.article = article
        if (!article) {
            return res.status(404).end()
        }

        next()
    },
    async (req, res, next) => {
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).end()
        }
        next()
    }
]

exports.deleteArticle = exports.updateArticle