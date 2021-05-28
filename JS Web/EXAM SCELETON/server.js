const express = require("express");
const app = express()
const routes = require("./routes")
const { PORT } = require("./config");



require("./config/express")(app);

require("./config/mongoose")()

app.use(routes);




app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));