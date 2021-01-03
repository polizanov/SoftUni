function sumByTown(input) {
    let data = {}
    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let members = Number(input[i + 1]);

        if (!data.hasOwnProperty(town)) {
            data[town] = members;
        } else {
            data[town] = data[town] + members
        }
    }

    console.log(JSON.stringify(data));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);