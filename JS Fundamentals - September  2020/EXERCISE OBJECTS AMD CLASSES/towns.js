function towns(inputArray) {
    let input = inputArray.slice();
    let output = [];

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let curObject = input[i].split(' ');
        let town = curObject[0];
        let latitude = Number(curObject[2]).toFixed(2);
        let longitude = Number(curObject[4]).toFixed(2);
        output.push(new Town(town, latitude, longitude));
    }


    function printOutput(array) {
        for (let i = 0; i < array.length; i++) {
            let curElement = array[i];
            console.log(`{ town: '${curElement.town}', latitude: '${curElement.latitude}', longitude: '${curElement.longitude}' }`);
        }
    }

    printOutput(output);
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)