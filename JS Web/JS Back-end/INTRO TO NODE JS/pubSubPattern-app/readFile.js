const fs = require("fs");

module.exports = (res, path) => {
    const readStream = fs.createReadStream(path, "utf8");

    readStream.on("data", (data) => {
        res.write(data);
    })

    readStream.on("end", () => {
        res.end();
    })
}