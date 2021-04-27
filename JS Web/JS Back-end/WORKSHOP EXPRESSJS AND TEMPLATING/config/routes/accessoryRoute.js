const { Router } = require("express");
const router = Router();

const saveAccessory = require("../../models/validate/saveAccessory.js");
const cubeService = require("../../services/cubeService.js")
const accessoryService = require("../../services/accessoryService.js")

router.get("/create", (req, res) => {
    res.render("createAccessory");
})

router.post("/create", saveAccessory, (req, res) => {
    res.redirect("/");
})

router.get("/attach/:id", async (req, res) => {
    let [cubeDetails, accessoryArr] = await Promise.all([
        cubeService.findOne(req.params.id),
        accessoryService.getAll(),
    ])
    res.render("attachAccessory", {cubeDetails, accessoryArr});
})

router.post("/attach/:id", async (req, res) => {
    // console.log(req.body.accessory)
    // console.log(req.params.id)
    await cubeService.attachAccessory(req.params.id, req.body.accessory);
    res.redirect("/details/" + req.params.id)
})

module.exports = router;
