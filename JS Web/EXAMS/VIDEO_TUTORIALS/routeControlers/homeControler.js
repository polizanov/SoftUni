const { Router } = require("express");
const moment = require("moment");
const router = Router();

const courceService = require("../services/courceService")

router.get("/", (req, res, next) => {
    if (res.locals.isAuthenticated) {
        {
            courceService.getAllCourcesForUsers(res.locals.user._id)
                .then(cources => {
                    cources = cources.map(x => Object.assign(x, {createdAt: moment().format('MMMM Do YYYY') }));
                    res.render("home/home", { title: "Home Page", cources });
                })
                .catch(next);
        }
    } else {
        res.render("home/home", { title: "Home Page" });
    }


    
})

router.get("/about", (req, res) => {
    res.send("About");
})

module.exports = router;