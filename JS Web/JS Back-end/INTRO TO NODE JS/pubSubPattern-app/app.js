const http = require("http");
const url = require("url");
const readFile = require("./readFile.js");
const editFile = require("./editFile.js");

const port = 3000;
const vueMessage = () => console.log(`App started at http://localhost:3000/home`);

http.createServer((req, res) => {
    let urlInfo = url.parse(req.url);
    let path = urlInfo.pathname;

    switch (path) {
        case "/home":
            readFile(res, "./views/home.html");
            break;
        case "/add-product":
            readFile(res, "./views/add-product.html");
            break;
        case "/remove-product":
            readFile(res, "./views/remove-product.html");
            break;
        default:
            if(path.includes("%3F")){
                editFile(res, path);
            } else {
                readFile(res, "./views/page-not-found.html");
            }
            break;
    }

}).listen(port, vueMessage())