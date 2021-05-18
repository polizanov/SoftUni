const { Router } = require("express");
const router = Router();
const { register, login } = require("../../services/authService");
const { USER_SESSION } = require("../start").dev
require("body-parser");

router.get("/login", (req, res) => {
    res.render("login");
})

router.post("/login", async (req, res) => {
    try {
        let token = await login(req.body);
        res.cookie(USER_SESSION, token);
    } catch (err) {
        res.render("login", { err })
        return;
    }
    res.redirect("/");
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