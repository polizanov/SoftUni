const { Router } = require("express");
let router = Router();

const homeRoute = require("./config/routes/homeRoute.js");
const accessoryRoute = require("./config/routes/accessoryRoute.js");

router.use("/", homeRoute);
router.use("/accessories", accessoryRoute);



module.exports = router;