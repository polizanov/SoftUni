function minerTask(input) {
    let mineResousces = {};
    
    while (input.length > 0) {
        let resourse = input.shift();
        let quantity = Number(input.shift());

        if (!mineResousces.hasOwnProperty(resourse)) {
            mineResousces[resourse] = quantity;
            continue;
        }

        mineResousces[resourse] += quantity;
    }

    for (const key in mineResousces) {
        console.log(`${key} -> ${mineResousces[key]}`);
    }

}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)
