const express = require("express");
const handlebars = require("express-handlebars")
const app = express();

module.exports = (app) => {
    app.engine("hbs", handlebars({extname: ".hbs"}))
    app.set("view-engine", "hbs")
}
