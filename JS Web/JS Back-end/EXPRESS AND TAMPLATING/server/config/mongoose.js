let mongoose = require("mongoose");
const db = mongoose.connection;

module.exports = () => {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Connected database!'));
}