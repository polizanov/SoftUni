const { Router } = require("express");
const router = Router();

const homeControler = require("./routeControlers/home.js");
const authCntroler = require("./routeControlers/auth")

router.use("/", homeControler);
router.use("/auth", authCntroler);
router.get("/*", (req, res) => {
    throw { message: "Page not found!", status: 404 }
})

module.exports = router;