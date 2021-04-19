const { Router } = require("express");
let router = Router();

router.get("/", (req, res) => {
    res.send('hone works');
})

// router.get("/about", (req, res) => {

// })

module.exports = router;