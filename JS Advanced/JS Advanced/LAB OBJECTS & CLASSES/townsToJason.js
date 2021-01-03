function townsToJason(input) {
    let data = input
        .map(row => row.split("|").filter(x => x !== "").map(element => element.trim()));

    let properties = data.shift();
    let townData = [];

    for (const row of data) {
        let obj = {
            [properties[0]]: row[0],
            [properties[1]]: Number(Number(row[1]).toFixed(2)),
            [properties[2]]: Number(Number(row[2]).toFixed(2)),
        }

        townData.push(obj);
    }

    console.log(JSON.stringify(townData))

}

townsToJason(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
)