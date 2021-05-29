const express = require("express");
const app = express()
const routes = require("./routes")
const { PORT } = require("./config");
const errorHandler = require("./middlewares/errorHandler")



require("./config/express")(app);

require("./config/mongoose")()

app.use(routes);

app.use(errorHandler);




app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));