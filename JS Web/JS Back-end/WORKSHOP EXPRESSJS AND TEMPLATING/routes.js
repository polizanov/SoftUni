const { Router } = require("express");
let router = Router();

const homeRoute = require("./config/routes/homeRoute.js");

router.use("/", homeRoute);


module.exports = router;