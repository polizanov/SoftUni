const { Router } = require("express");
let router = Router();

router.get("/", (req, res) => {
    res.send('hone works');
})

module.exports = router;