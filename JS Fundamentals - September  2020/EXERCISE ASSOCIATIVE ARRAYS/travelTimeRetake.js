function travelTime(input) {
    let travelInfo = {}
    for (let line of input) {
        let [country, town, price] = line.split(" > ");

        if (!travelInfo.hasOwnProperty(country)) {
            travelInfo[country] = [];
        }

        let findSameTown = travelInfo[country].find(obj => obj.town === town);
        if (findSameTown) {
            if (price < findSameTown.price) {
                findSameTown.price = price;
            }
        } else {
            travelInfo[country].push({ town, price });
        }
    }

    let output = "";
    Object.keys(travelInfo)
        .sort((a, b) => a.localeCompare(b))
        .forEach(element => {
            output += `${element} -> `
            travelInfo[element]
                .sort((a, b) => a.price - b.price)
                .forEach(townData => {
                    output += `${townData.town} -> ${townData.price} `
                })
            output += "\n"
        })

    console.log(output.trim());
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)