function pirates(input) {
    let cities = {};

    let data = input.shift();
    while (data !== 'Sail') {
        let [name, population, gold] = data.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!cities.hasOwnProperty(name)) {
            cities[name] = { population, gold };
        } else {
            cities[name] = {
                population: cities[name].population + population,
                gold: cities[name].gold + gold
            }
        }

        data = input.shift();
    }

    let command = input.shift()
    while (command !== 'End') {
        curCommand = command.split("=>");

        switch (curCommand[0]) {
            case 'Plunder':
                cities = plunderCase(curCommand, cities);
                break;
            case 'Prosper':
                cities = prosperCase(curCommand, cities);
                break;
        }

        command = input.shift()
    }


    function plunderCase(arr, obj) {
        let [name, population, gold] = arr.slice(1);
        populatioin = Number(population);
        gold = Number(gold);


        obj[name].population -= population;
        obj[name].gold -= gold
        console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed.`);

        if (obj[name].population <= 0 || obj[name].gold <= 0) {
            delete obj[name];
            console.log(`${name} has been wiped off the map!`);
        }

        return obj;
    }

    function prosperCase(arr, obj) {
        let [town, gold] = arr.slice(1);
        gold = Number(gold);

        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
            return obj;
        }

        obj[town].gold += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);

        return obj;
    }


    if (Object.entries(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.entries(cities).length} wealthy settlements to go to:`);
    }
    Object.entries(cities)
        .sort((a, b) => {
            if (a[1].gold == b[1].gold) {
                return a[0].localeCompare(b[0]);
            }

            return b[1].gold - a[1].gold;
        })
        .forEach(kvp => {
            console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`)
        });
}

pirates(
    [
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sofia||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End'
    ]



);