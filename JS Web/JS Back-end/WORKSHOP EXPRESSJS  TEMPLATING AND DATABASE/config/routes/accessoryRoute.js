const { Router } = require("express");
const router = Router();

const saveAccessory = require("../../models/validate/saveAccessory.js");
const cubeService = require("../../services/cubeService.js")
const accessoryService = require("../../services/accessoryService.js")

router.get("/create", (req, res) => {
    res.render("createAccessory", { title: "Create accessory" });
})

router.post("/create", saveAccessory, (req, res) => {
    res.redirect("/");
})

router.get("/attach/:id", async (req, res) => {
    try {
        let cubeDetails = await cubeService.findOne(req.params.id);
        let accessoryArr = await accessoryService.getAll(cubeDetails.accessories);
        res.render("attachAccessory", { title: "Attach a new accessory", cubeDetails, accessoryArr });
    } catch (err){
        res.status(500)
    }
})

router.post("/attach/:id", async (req, res) => {
    try {
        await cubeService.attachAccessory(req.params.id, req.body.accessory);
        res.redirect("/details/" + req.params.id)
    } catch (err){
        res.status(500)
    }
    
})

module.exports = router;
