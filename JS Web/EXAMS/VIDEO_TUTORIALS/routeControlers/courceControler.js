const { Router } = require("express");
const router = Router();

const courceService = require("../services/courceService")

router.get("/create", (req, res) => {
    res.render('cource/create', { title: "Create Cource" });
})

router.post("/create", async (req, res) => {
    try {
        await courceService.create(req.body, res.locals.user._id);
        res.redirect("/");
    } catch (err) {
        res.render('cource/create', { title: "Create Cource", err })
    }
})

module.exports = router;