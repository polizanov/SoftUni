const pubSub = require("./pubSub")
let models = [];

function onRequest(model) {
    if (!models.includes(model)) {
        console.log(`We have new deveice! -> ${model}`);
        models.push(model);
        return;
    }

    console.log(`${model} are already set up !!!`)
}

function onRemove(model) {
    if(models.includes(model)){
        console.log(`${model} are removed succesfully.`)
        models = models.filter(x => x !== model);
        return;
    }

    console.log(`${model} doesent exist!!!`);
}

pubSub.subscribe("printModel", onRequest);
pubSub.subscribe("removeModel", onRemove)
module.exports = { onRequest, onRemove };