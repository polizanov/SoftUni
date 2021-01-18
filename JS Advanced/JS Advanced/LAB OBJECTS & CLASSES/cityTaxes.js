function cityTaxes(name, population, treasury) {
    let taxRate = 10;
    let obj = {
        name,
        population,
        treasury,
        taxRate,
        "collectTaxes": () => {
            treasury += population * taxRate
            obj["treasury"] = treasury;
            return obj;
        },
        "applyGrowth": (pers) => {
            let additionalPeople = population * (pers / 100);
            obj["population"] = population + additionalPeople;
            return obj;
        },
        "applyRecession": (pers) => {
            treasury = treasury - treasury * (pers / 100);
            obj["treasury"] = treasury;
            return obj;
        }
    }

    return obj;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.treasury);
console.log(city)

