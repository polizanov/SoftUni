const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/exam', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log("DB CONNECTED!"));
}



