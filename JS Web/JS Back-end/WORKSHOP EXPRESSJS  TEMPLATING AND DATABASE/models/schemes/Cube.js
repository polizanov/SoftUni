const mongoose = require("mongoose");

let cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /https?/,
    }, 
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    }, 
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
    }],
    userId: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Cube', cubeSchema);