const express = require("express");
const app = express();
const start = require("./settings/start.js")

app.listen(start.dev.port, () => console.log(`Server started at port ${start.dev.port}`));

