const crypto = require('crypto')

module.exports = str => {
    return crypto.createHash('md5').update("lee" + str).digest('hex')
}
