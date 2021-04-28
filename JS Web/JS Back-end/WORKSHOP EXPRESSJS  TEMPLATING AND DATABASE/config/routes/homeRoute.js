const { Router } = require("express");
const router = Router();
require("body-parser");

const saveModel = require("../../models/validate/saveModel.js");
const cubeService = require("../../services/cubeService.js")

router.get("/", async (req, res) => {
    try {
        let data = await cubeService.getAll({})
        res.render("home", { title: "Home page", data })
    } catch (err) {
        res.status(500)
    }
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
    try {
        detailsData = await cubeService.findOneWithAccesssories(req.params.id);
        res.render("updatedDetailsPage", { title: "Details page", detailsData: detailsData })
    } catch (err) {
        res.status(500)
    }
})

router.post("/search", async (req, res) => {
    let info = req.body;
    try {
        let data = await cubeService.getAll({
            search: info.search,
            from: info.from,
            to: info.to,
        })
        res.render("home", { title: "Home page", data });
    } catch (err) {
        res.status(500)
    }
})

module.exports = router;