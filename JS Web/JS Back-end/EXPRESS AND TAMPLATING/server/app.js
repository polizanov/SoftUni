const express = require("express");
const router = require('./routes.js')

const app = express();
const port = 3000;
const consoleVue = (p) => console.log(`Server running on port ${p}...`);

require("./config/express.js")(app);
require('./config/mongoose.js')();
app.use(router);


app.listen(port, consoleVue(port));

