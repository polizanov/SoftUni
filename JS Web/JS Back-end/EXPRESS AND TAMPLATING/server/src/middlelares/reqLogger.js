module.exports = function (req, res, next){
    console.log(`METHOD: ${req.method} PATH: ${req.originalUrl}`)
    next()
}