const { Router } = require("express");
const saveModel = require('./models/saveModel.js')
let router = Router();

router.get("/", (req, res) => {
    res.render("home", {title: "Home page"})
})

router.get("/about", (req, res) => {
    res.render("about", {title: "About page"})
})

router.get("/create", (req, res) => {
    res.render("create", {title: "Create page"})
})

router.post("/create", saveModel, (req, res) => {
    res.redirect("/");
})

router.get("/details/:id", (req, res) => {
    res.render("details");
    console.log(req.params.id);
})

module.exports = router;