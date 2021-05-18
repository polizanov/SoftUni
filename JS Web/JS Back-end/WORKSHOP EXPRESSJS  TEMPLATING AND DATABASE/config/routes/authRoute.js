const { Router } = require("express");
const router = Router();
const { register } = require("../../services/authService")
require("body-parser");

router.get("/login", (req, res) => {
    res.render("login");
})

router.get("/register", (req, res) => {
    res.render("register");
})

router.post("/register", async (req, res) => {
    try {
        await register(req.body)
    } catch (err) {
        res.render("register", { err })
        return;
    }
    res.redirect("/auth/login");
})

module.exports = router;