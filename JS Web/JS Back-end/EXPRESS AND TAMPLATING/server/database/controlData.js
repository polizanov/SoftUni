const fs = require("fs")

const products = require("./phones.json");
let dataArr = products.slice();

function add(obj){
    dataArr.push(obj);
    console.log(dataArr)
    writeData(JSON.stringify(dataArr));
}

function show(){
    return dataArr.slice();
}

function writeData(jsonArr){
    fs.writeFile("./database/phones.json", jsonArr, (err) => {
        if(err){
            throw err;
        }

        console.log("The file has been saved!");
    })
}

module.exports = {
    add, 
    show,
}