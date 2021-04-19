const { Router } = require("express");
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

router.post("/create", (req, res) => {
    console.log(req.body)
})

router.get("/details/:id", (req, res) => {
    res.render("details");
    console.log(req.params.id);
})

module.exports = router;