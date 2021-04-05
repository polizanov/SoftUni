const http = require("http");
const url = require("url");
const fs = require("fs")
const port = 3000;


function generateHtml(req, res, pathName) {
    fs.readFile(`./views${pathName}.html`, (err, data) => {
        if (err) {
            console.log(`ERROR: ${err}`);
            return;
        }

        console.log(`METHOD ${req.method}: PATH ${pathName}`);
        res.write(data);
        res.end();
    })
}


http.createServer((req, res) => {
    let urlInfo = url.parse(req.url);

    switch (urlInfo.path) {
        case "/apple-page":
            generateHtml(req, res, urlInfo.path)
            break;
        case "/samsung-page":
            generateHtml(req, res, urlInfo.path)
            break;
        case "/huawei-page":
            generateHtml(req, res, urlInfo.path)
            break;
    }
}).listen(port, () => console.log(`Server are started at localhost:${port}`))