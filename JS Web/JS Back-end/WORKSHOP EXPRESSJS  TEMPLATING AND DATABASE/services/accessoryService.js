const Accessory = require("../models/schemes/Accessory.js");

function create(data) {
    if (data.name == "" || data.description == "" || data.imageUrl == "") {
        throw { message: "All fields are required!" }
    }

    if (!data.imageUrl.startsWith('http')) {
        throw { message: "Invalid URL!" }
    }

  
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