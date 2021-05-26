const app = require("express")();
const expressSet = require("./config/express");
const routes = require("./routes")
const { PORT } = require("./config");

// app.use(expressSet);

app.use(routes);

app.get("/home", (req, res) => {
    res.send("HOME");
})

app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));