const { Router } = require("express");
const router = Router();
require("body-parser");


const {create, findOneWithAccesssories, getAll} = require("../../services/cubeService.js")
const forAutheticated = require("../../middlewares/authenticated");

router.get("/", async (req, res) => {
    try {
        let data = await getAll({})
        res.render("home", { title: "Home page", data })
    } catch (err) {
        res.status(500)
    }
})

router.get("/about", (req, res) => {
    res.render("about", { title: "About page" })
})

router.get("/create", forAutheticated, (req, res) => {
    res.render("create", { title: "Create page" })
})

router.post("/create", forAutheticated, async (req, res) => {
    try {
        await create(req.body, req.user._id);
    } catch (err){
        return res.render("create", {err});
    }
    res.redirect("/");
})

router.get("/details/:id", async (req, res) => {
    try {
        detailsData = await findOneWithAccesssories(req.params.id);
        res.render("updatedDetailsPage", { title: "Details page", detailsData: detailsData })
    } catch (err) {
        res.status(500)
    }
})

router.post("/search", async (req, res) => {
    let info = req.body;
    try {
        let data = await getAll({
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