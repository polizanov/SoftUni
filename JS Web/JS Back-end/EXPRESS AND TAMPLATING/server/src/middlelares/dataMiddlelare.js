let conterolData = require("../../database/controlData.js")

function checkProperties(name, imgUrl, description, price) {
    if (name == "" || imgUrl == "" || description == "" || price == "") {
        return "All fields are required!!!";
    }

    if (isNaN(Number(price))) {
        return "Price must be number!";
    }

    if (!imgUrl.startsWith("http")) {
        return "Invalid URL!";
    }

    return true;
}

module.exports = function (req, res, next) {
    let name = req.body.name;
    let imgUrl = req.body.imgUrl;
    let description = req.body.description;
    let price = req.body.price;
    const dataValidation = checkProperties(name, imgUrl, description, price);

    if (dataValidation == true) {
        conterolData.add({name, imgUrl, description, price})
        next();
        return;
    }

    res.render("err", {err: dataValidation});
}
