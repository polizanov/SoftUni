const fs = require("fs");
const data = require('./db.json');

function searchData(obj){
    let finded = [];

    finded = data
        .filter(x => x.name.toLocaleLowerCase().includes(obj.search.toLocaleLowerCase()))
        .filter(x => {
            if(obj.from == ""){
                obj.from = 0;
            }

            if(obj.to == ""){
                obj.to = data.length;
            }

            return Number(x.difficultyLevel) >= Number(obj.from) && Number(x.difficultyLevel) <= Number(obj.to);
        })

        if(finded.length == 0){
            return data;
        }

        return finded;
}

module.exports = (req, res, next) => {

    let findedData = searchData({
        search: req.body.search,
        from: req.body.from,
        to: req.body.to,
    })
    next();
}