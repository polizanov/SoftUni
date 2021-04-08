const pubSub = require("./pubSub.js");
const readFile = require("./readFile.js");
require("./onRequest.js");

module.exports = function editFile(res, path){
    if(path.startsWith("/add")){
        let modelName = path.split("=")[1];
        pubSub.publish("printModel", modelName);
        readFile(res, "./views/message.html");
    } else if(path.startsWith("/remove")){
        let modelName = path.split("=")[1];
        pubSub.publish("removeModel", modelName);
        readFile(res, "./views/message.html");
    }
}