const mongoose = require('mongoose');

let accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /https?/,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    }
})

module.exports = mongoose.model("Accessory", accessorySchema);