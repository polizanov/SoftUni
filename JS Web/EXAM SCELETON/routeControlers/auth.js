const { Router } = require("express");
const { LOGIN_COOKIE_NAME } = require("../config")
const router = Router();

const authService = require("../services/auth");

router.get("/register", (req, res) => {
    res.render("auth/register", { title: "Register" })
})

router.post("/register", async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect("/auth/login");
    } catch (err) {
        res.render("auth/register", { title: "Register", err });
    }
})

router.get("/login", (req, res) => {
    res.render("auth/login", { title: "Login" })
})

router.post("/login", async (req, res) => {
    try {
        let token = await authService.login(req.body);
        res.cookie(LOGIN_COOKIE_NAME, token, { httpOnly: true });
        res.redirect("/");
    } catch (err) {
        res.render("auth/login", { title: "Login", err })
    }
})

router.get("/logout", (req, res) => {
    res.clearCookie(LOGIN_COOKIE_NAME);
    res.redirect("/")
})

module.exports = router;