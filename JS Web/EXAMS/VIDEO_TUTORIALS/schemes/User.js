const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    enrolledCources: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cource'
    }]
})

module.exports = mongoose.model("User", userSchema);