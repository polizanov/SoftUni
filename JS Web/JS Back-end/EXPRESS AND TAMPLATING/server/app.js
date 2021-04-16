const express = require("express");
const handlebars = require("express-handlebars");
let bodyParser = require("body-parser");

const app = express();
const port = 3000;
const consoleVue = (p) => console.log(`Server running on port ${p}...`);

const reqLogger = require('./src/middlelares/reqLogger.js');
const dataMiddlelare = require('./src/middlelares/dataMiddlelare.js');
const controlData = require("./database/controlData.js")

app.use('/static', express.static("public"))

app.use(reqLogger);

app.engine("hbs", handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/home.html");
})

app.get("/about-us", (req, res) => {
    res.sendFile(__dirname + "/public/html/about.html")
})

app.get("/catalog", (req, res) => {
    let data = controlData.show();
    res.render('catalog', {data});
})


app.post("/add-product", dataMiddlelare, (req, res) => {
    let data = controlData.show();
    res.redirect('catalog', {data})
})

app.listen(port, consoleVue(port));

