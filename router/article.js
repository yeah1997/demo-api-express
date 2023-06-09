const express = require('express')
const articleCtrl = require('../controller/article')
const router = express.Router()
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

// get articles
router.get('/', articleCtrl.getArticles)

// get Feed articles
router.get('/feed', articleCtrl.getFeedArticles)

// get article
router.get('/:articleId', articleValidator.getArticle, articleCtrl.getArticle)

// create article
router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)

// update article
router.put('/:articleId', auth, articleValidator.updateArticle, articleCtrl.updateArticle)

// delete article
router.delete('/:articleId', auth, articleValidator.deleteArticle, articleCtrl.deleteArticle)

// add article comment
router.post('/:articleId/comments', articleCtrl.createArticleComment)

// get article comment list
router.get('/:articleId/comments', articleCtrl.getArticleComments)

// delete article comment
router.delete('/:articleId/comments/:id', articleCtrl.deleteArticleComment)

// like article
router.post('/:articleId/favorite', articleCtrl.favoriteArticle)

// cancle article like
router.delete('/:articleId/favorite', articleCtrl.unfavoriteArticle)

module.exports = router