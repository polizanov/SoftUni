const Accessory = require("../models/schemes/Accessory.js");

function create(data) {
    let accessory = new Accessory(data);
    return accessory.save();
}

async function getAll(id) {
    return Accessory.find({ _id: { $nin: id } }).lean();
}

module.exports = {
    create,
    getAll,
}