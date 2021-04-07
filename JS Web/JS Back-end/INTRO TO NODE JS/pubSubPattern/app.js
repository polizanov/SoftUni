const http = require("http");
const pubSub = require("./pubSub.js");
const url = require("url");
const querystring = require("querystring");
require("./onRequest.js");

const port = 3000;
const vueMessage = () => console.log(`Server started at loclahost://${port}`);

http.createServer((req, res) => {
    let urlInfo = url.parse(req.url);
    let path = urlInfo.pathname;
    let parameters = querystring.parse(urlInfo.query)
    let model = parameters.model;


    switch (path) {
        case "/visit" :
            if (model) {
                pubSub.publish("printModel", model);
            }
            break;
        case "/remove" :
            if (model) {
                pubSub.publish("removeModel", model);
            }
            break;
    }

    res.end()

}).listen(port, vueMessage())