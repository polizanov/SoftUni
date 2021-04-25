const { Router } = require("express");
const dataMiddlelare = require('./src/middlelares/dataMiddlelare.js');
const productServices = require('./database/productServices.js')

let router = Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/home.html");
})

router.get("/about-us", (req, res) => {
    res.sendFile(__dirname + "/public/html/about.html")
})

router.get("/catalog", async (req, res) => {
    let data = await productServices.getAll();
    res.render('catalog', { data });
})

router.post("/add-product", dataMiddlelare,(req, res) => {
    res.redirect('catalog')
})

module.exports = router;
