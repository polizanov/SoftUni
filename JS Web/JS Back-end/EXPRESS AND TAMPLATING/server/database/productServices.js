const Product = require("../models/Products.js")

function getAll(){
    return Product.find({}).lean();
}

async function create(data){
    let product = new Product(data);
    return product.save();
}

module.exports = {
    getAll,
    create
}