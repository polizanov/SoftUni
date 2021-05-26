const { Router } = require("express");
const router = Router();

const homeControler = require("./routeControlers/home.js");
const authCntroler = require("./routeControlers/auth")

router.use("/", homeControler);
router.use("/auth", authCntroler);

module.exports = router;