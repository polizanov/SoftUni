const { Router } = require("express");
const router = Router();

const authService = require("../services/auth");

router.get("/register", (req, res) => {
    res.render("auth/register", { title: "Register" })
})

router.post("/register", async (req, res) => {
    try {
        await authService.register(req.body);
        res.redirect("/auth/register");
    } catch (err) {
        res.render("auth/register", { title: "Register", err});
    }
})

module.exports = router;