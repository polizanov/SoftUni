const Cube = require("../models/schemes/Cube.js");

async function create(data) {
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

module.exports = {
    create,
    getAll,
    findOne,
}