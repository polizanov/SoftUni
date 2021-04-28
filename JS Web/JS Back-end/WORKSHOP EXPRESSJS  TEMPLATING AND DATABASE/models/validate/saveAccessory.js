const accessoryService = require('../../services/accessoryService.js')

function checkData(obj) {
    if (obj.name == "" || obj.description == "" || obj.imageUrl == "") {
        return false;
    }

    if (!obj.imageUrl.startsWith('http')) {
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
    })

    if (result == false) {
        next()
        return;
    }

    await accessoryService.create({
        name: recevedData.name,
        description: recevedData.description,
        imageUrl: recevedData.imageUrl,
    })
    next()
}