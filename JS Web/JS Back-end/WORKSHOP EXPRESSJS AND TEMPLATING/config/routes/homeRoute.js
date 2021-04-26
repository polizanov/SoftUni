const { Router } = require("express");
let router = Router();
require("body-parser");

const saveModel = require("../../models/saveModel.js");
let cubeService = require("../../services/cubeService.js")

router.get("/", async (req, res) => {
    let data = await cubeService.getAll({})
    res.render("home", { title: "Home page", data})
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

router.get("/details/:id", async (req, res) => {
    detailsData = await cubeService.findOne(req.params.id);
    res.render("details", {title: "Details page", detailsData: detailsData })
})

router.post("/search", async (req, res) => {
    let info = req.body;
    let data = await cubeService.getAll({
        search: info.search,
        from: info.from,
        to: info.to,
    })
    res.render("home", {title: "Home page", data});
})

module.exports = router;