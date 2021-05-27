const app = require("express")();
const expressSet = require("./config/express");
const routes = require("./routes")
const { PORT } = require("./config");

expressSet(app);
app.use(routes);


app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));