const Cource = require("../schemes/Cource");

function create(data, userId){
    if(data.title == "" || data.description == "" || data.imageUrl == ""){
        throw { message: "All fields are requred" }
    }

    let isPublic = data.isPublic == "on";

    let dataObj = {
        title: data.title,
        description: data.description, 
        imageUrl: data.imageUrl,
        isPublic,
        createdAt: new Date(),
        ownerId: userId,
    }

    
    let courceObj = new Cource(dataObj);
    return courceObj.save()
}

async function getAllCourcesForUsers(userId){
    return await Cource.find({}).sort({createdAt: -1}).lean()
    .then(x => x.filter((e) => {
        if(e.ownerId == userId){
            return true;
        } else {
            return e.isPublic == true
        }
    }));
}

module.exports = {
    create,
    getAllCourcesForUsers,
}