const { Article } = require('../model')

// get article list
exports.getArticles = async (req, res, next) => {
    try {
        const articles = await Article.find()
        const articlesCount = await Article.countDocuments()

        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (err) {
        next(err)
    }
}

// get like aritlces
exports.getFeedArticles = async (req, res, next) => {
    try {
        res.send('getFeedArticles')
    } catch (err) {
        next(err)
    }
}

// get article
exports.getArticle = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.articleId).populate('author')
        if (!article) {
            return res.status(404).end()
        }
        console.log("article")
        res.status(200).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

// create article
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article)
        article.author = req.user._id
        article.populate('author').execPopulate()
        await article.save()

        res.status(201).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

// update article
exports.updateArticle = async (req, res, next) => {
    try {
        res.send('updateArticle')
    } catch (err) {
        next(err)
    }
}

// delete article
exports.deleteArticle = async (req, res, next) => {
    try {
        res.send('deleteArticle')
    } catch (err) {
        next(err)
    }
}

// add article comment
exports.createArticleComment = async (req, res, next) => {
    try {
        res.send('createArticleComment')
    } catch (err) {
        next(err)
    }
}

// get artilce comment list
exports.getArticleComments = async (req, res, next) => {
    try {
        res.send('getArticleComments')
    } catch (err) {
        next(err)
    }
}

// delete article comment
exports.deleteArticleComment = async (req, res, next) => {
    try {
        res.send('deleteArticleComment')
    } catch (err) {
        next(err)
    }
}

// like article 
exports.favoriteArticle = async (req, res, next) => {
    try {
        res.send('favoriteArticle')
    } catch (err) {
        next(err)
    }
}

// unlike article like
exports.unfavoriteArticle = async (req, res, next) => {
    try {
        res.send('unfavoriteArticle')
    } catch (err) {
        next(err)
    }
}
