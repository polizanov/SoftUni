function towns(input) {
    let townInfo = [];

    class Info {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    input.forEach(x => {
        let curData = x.split(' | ');
        let town = curData.shift();
        let latitude = Number(curData.shift()).toFixed(2);
        let longitude = Number(curData.shift()).toFixed(2);
        townInfo.push(new Info(town, latitude, longitude))
    });

    function printData(arr) {
        arr.forEach(x => {
            console.log(`{ town: '${x.town}', latitude: '${x.latitude}', longitude: '${x.longitude}' }`);
        })
    }

    printData(townInfo)

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

