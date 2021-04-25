const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    description: String,
    price: String
})

module.exports = mongoose.model("Product", productSchema)