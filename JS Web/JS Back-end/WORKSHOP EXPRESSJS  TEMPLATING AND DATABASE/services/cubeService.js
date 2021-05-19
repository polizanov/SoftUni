const Cube = require("../models/schemes/Cube.js");

async function create(data) {
    if (data.name == "" || data.description == "" || data.imageUrl == "") {
        throw { message: "All fields are required!" }
    }

    if (!data.imageUrl.startsWith('http')) {
        throw { message: "Invalid URL!" }
    }

    

    let cube = new Cube(data);
    return cube.save();
}

async function getAll(query) {
    let cubes = await Cube.find({}).lean();

    if (query.search) {
        cubes = cubes.filter(x => x.name.toLowerCase().includes(query.search));
    }
    
    if (query.from) {
        cubes = cubes.filter(x => Number(x.difficultyLevel) >= Number(query.from));
    }
    
    if (query.to) {
        cubes = cubes.filter(x => Number(x.difficultyLevel) <= Number(query.to));
    }

    return cubes;
}

async function findOne(id){
    return Cube.findById(id).lean();
}

async function findOneWithAccesssories(id){
    return Cube.findById(id).populate('accessories').lean();
}

async function attachAccessory(cubeId, accessoryId){
    let cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);
    return cube.save();
}

module.exports = {
    create,
    getAll,
    findOne,
    attachAccessory,
    findOneWithAccesssories,
}