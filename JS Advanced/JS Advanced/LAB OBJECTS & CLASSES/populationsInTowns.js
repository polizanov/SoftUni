function populationsInTowns(input){
    let data = {};

    for (const line of input) {
        let[town, population]  = line.split(" <-> ");
        population = Number(population);

        if(!data.hasOwnProperty(town)){
            data[town] = population;
        } else {
            data[town] = data[town] + population;
        }
    }

    Object.entries(data)
        .forEach(kvp => {
            console.log(`${kvp[0]} : ${kvp[1]}`);
        });

}

populationsInTowns(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)