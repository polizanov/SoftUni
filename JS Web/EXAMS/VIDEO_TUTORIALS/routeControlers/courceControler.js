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

router.get("/details/:courceId", async (req, res, next) => {
    try {
        let data = await courceService.getOneById(req.params.courceId);
        let isOwner = data.ownerId == res.locals.user._id;
        res.render("cource/details", { title: "Details", data, isOwner });
    } catch (err){
        console.log(err)
        next()
    }
})

module.exports = router;