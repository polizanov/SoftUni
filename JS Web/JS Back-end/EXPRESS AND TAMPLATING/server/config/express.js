const express = require("express");
const handlebars = require("express-handlebars");
let bodyParser = require("body-parser");
const reqLogger = require('../src/middlelares/reqLogger.js');

module.exports = (app) => {
    app.use(reqLogger);

    app.engine("hbs", handlebars({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/static', express.static("public"))
}