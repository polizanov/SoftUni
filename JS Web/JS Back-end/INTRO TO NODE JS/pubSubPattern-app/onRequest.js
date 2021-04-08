const pubSub = require("./pubSub");
const fs = require("fs");
let models = [];

function onRequest(model) {
    if (!models.includes(model)) {
        console.log(`We have new deveice! -> ${model}`);
        models.push(model);
        writeModels();
        return;
    }

    console.log(`${model} are already set up !!!`)
}

function onRemove(model) {
    if(models.includes(model)){
        console.log(`${model} are removed succesfully.`)
        models = models.filter(x => x !== model);
        writeModels();
        return;
    }

    console.log(`${model} doesent exist!!!`);
}

function writeModels(){
    let modelsData = models.length == 0 ? "No devices in the list" : 
    `Here are the list with devices: ${models.join(", ")}`;

    const data = new Uint8Array(Buffer.from(modelsData));
    fs.writeFile("./list.txt", data, (err) => {
        if(err){
            throw err;
        }

        console.log("The file has saved successfully!")
    })
}



pubSub.subscribe("printModel", onRequest);
pubSub.subscribe("removeModel", onRemove)
module.exports = { onRequest, onRemove };