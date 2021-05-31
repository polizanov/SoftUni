const Cource = require("../schemes/Cource");

function create(data, userId) {
    if (data.title == "" || data.description == "" || data.imageUrl == "") {
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

async function getAllCourcesForUsers(userId) {
    return await Cource.find({}).sort({ createdAt: -1 }).lean()
        .then(x => x.filter((e) => {
            if (e.ownerId == userId) {
                return true;
            } else {
                return e.isPublic == true
            }
        }));
}

async function getOneById(id, userId) {
    let data = await Cource.findOne({ _id: id }).lean();
    data.isOwner = data.ownerId == userId;

    data.usersEnroled.forEach(user => {
        if (user == userId) {
            data = Object.assign({ isEnroll: true }, data)
        }
    });

    return data
}

async function enrollUser(courceId, userId){
    let data = await Cource.findOne({ _id: courceId });
    data.usersEnroled.push(userId);
    return Cource.replaceOne({ _id: courceId }, data);
}

module.exports = {
    create,
    getAllCourcesForUsers,
    getOneById,
    enrollUser,
}