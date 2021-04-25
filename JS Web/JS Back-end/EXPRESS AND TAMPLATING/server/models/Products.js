let mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    description: String,
    price: String
})

module.exports = mongoose.model("Products", productsSchema);


