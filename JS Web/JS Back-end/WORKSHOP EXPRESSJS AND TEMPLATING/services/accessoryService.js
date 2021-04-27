const Accessory = require("../models/schemes/Accessory.js");

function create(data){
    let accessory = new Accessory(data);
    return accessory.save();
}

function getAll(){
    return Accessory.find({}).lean();
}

module.exports = {
    create,
    getAll,
}