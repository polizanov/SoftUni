const { Router } = require("express");
const dataMiddlelare = require('./src/middlelares/dataMiddlelare.js');
const controlData = require("./database/controlData.js")

let router = Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/home.html");
})

router.get("/about-us", (req, res) => {
    res.sendFile(__dirname + "/public/html/about.html")
})

router.get("/catalog", (req, res) => {
    let data = controlData.show();
    res.redirect(status, url)
    res.render('catalog', { data });
})

router.post("/add-product", dataMiddlelare, (req, res) => {
    let data = controlData.show();
    res.redirect('catalog', { data })
})

module.exports = router;
