const cubeService = require("../../services/cubeService.js");

function checkData(obj) {
    if (obj.name == "" || obj.description == "" || obj.imageUrl == "" || obj.difficultyLevel == "") {
        console.log('in check')
        return false;
    }

    if (!obj.imageUrl.startsWith('http')) {
        console.log('in check')
        return false;
    }

    return true;
}


module.exports = async (req, res, next) => {
    let recevedData = req.body;

    let result = checkData({
        name: recevedData.name,
        description: recevedData.description,
        imageUrl: recevedData.imageUrl,
        difficultyLevel: recevedData.difficultyLevel,
    })

    if (result == false) {
        next()
        return;
    }

    await cubeService.create({
        name: recevedData.name,
        description: recevedData.description,
        imageUrl: recevedData.imageUrl,
        difficultyLevel: recevedData.difficultyLevel,
    })
    next()
}