const fs = require("fs");
const data = require('./db.json');
const uniqid = require('uniqid');


function checkData(obj){
    if(obj.name == "" || obj.description == "" || obj.imageUrl == "" || obj.difficultyLevel == ""){
        console.log('in check')
        return false;
    }

    if(!obj.imageUrl.startsWith('http')){
        console.log('in check')
        return false;
    }

    return true;
}

function saveData(obj){
    data.push(obj);
    console.log("in")

    fs.writeFile('./models/db.json', JSON.stringify(data), (err) => {
        if(err){
            throw err;
        }
        console.log("File has been saved successfully")
    })
}


module.exports = (req, res, next) => {
    let recevedData = req.body;

    let result = checkData({
        name: recevedData.name,
        description: recevedData.description,
        imageUrl: recevedData.imageUrl,
        difficultyLevel: recevedData.difficultyLevel,
    })

    if(result == false){
        next()
        return;
    }

    saveData({
        name: recevedData.name,
        description: recevedData.description,
        imageUrl: recevedData.imageUrl,
        difficultyLevel: recevedData.difficultyLevel,
        id: uniqid(),
    })
    next()
}