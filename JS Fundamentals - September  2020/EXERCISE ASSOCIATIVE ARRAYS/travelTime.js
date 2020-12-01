function travelTime(input) {
    let travelData = {}
    for (let line of input) {
        let [country, town, price] = line.split(" > ");
        price = Number(price);


        if (!travelData.hasOwnProperty(country)) {
            travelData[country] = [];
        }

        let findObj = travelData[country].find(obj => obj.town === town);
        if (!findObj) {
            travelData[country].push({ town, price })
        } else if (price < findObj.price) {
            findObj.price = price;
        }
    }

    let output = ""
    Object.keys(travelData)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            output += `${key} -> `
            travelData[key]
                .sort((a, b) => a.price - b.price)
                .forEach(element => {
                    output += `${element.town} -> ${element.price} `
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
])