const { Router } = require("express");
const saveModel = require('./models/saveModel.js')
const search = require("./models/helpers/search.js")
let router = Router();
let data = require("./models/db.json");

router.get("/", (req, res) => {
    res.render("home", { title: "Home page", data })
})

router.get("/about", (req, res) => {
    res.render("about", { title: "About page" })
})

router.get("/create", (req, res) => {
    res.render("create", { title: "Create page" })
})

router.post("/create", saveModel, (req, res) => {
    res.redirect("/");
})

router.get("/details/:id", (req, res) => {
    let detailsData = findCube(req.params.id);
    res.render("details", {title: "Details page", detailsData })

})

router.post("/search", (req, res) => {
    let findedData = search({
        search: req.body.search,
        from: req.body.from,
        to: req.body.to,
    })
    res.render("home", {title: "Home page", data: findedData});
})

router.get("*", (req, res) => {
    res.render('404');
})

function findCube(id) {
    return data.find(x => x.id == id);
}


module.exports = router;