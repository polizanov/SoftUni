const fs = require("fs")
const Product = require('./productSchema.js')

// const products = require("./phones.json");
// let dataArr = products.slice();

function add(obj){
    // dataArr.push(obj);
    // console.log(dataArr)
    writeData(obj);
}

function show(){
    let data = []
    Product.find({}, (err, products) => {
        if(err){
            console.log(`ERROR ${err}`);
            return;
        }
        console.log(products)
        data.push(products)
    })
    // return dataArr.slice();
    return data;
}

function writeData(jsonArr){
    // fs.writeFile("./database/phones.json", jsonArr, (err) => {
    //     if(err){
    //         throw err;
    //     }

    //     console.log("The file has been saved!");
    // })
    new Product(jsonArr)
        .save((err, documentFoo, [isSaveSuccessful]) => {
            if(err){
                console.log(`ERROR: ${err}`);
                return;
            }

            if(isSaveSuccessful == 1){
                console.log('Product has been saved correctly');
            }
        })
}

module.exports = {
    add, 
    show,
}