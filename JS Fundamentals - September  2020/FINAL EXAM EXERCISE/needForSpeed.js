function needForSpeed(input) {
    let cars = {};
    let numberOfCars = Number(input.shift());

    for (let i = 0; i < numberOfCars; i++) {
        let [model, mileage, fuel] = input.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (!cars.hasOwnProperty(model)) {
            cars[model] = { mileage, fuel };
        } else {
            cars[model] = {
                mileage: cars[model].mileage + mileage,
                fuel: cars[model].fuel + fuel
            }
        }
    }

    let command = input.shift();
    while (command !== 'Stop') {
        let curCommand = command.split(" : ");

        switch (curCommand[0]) {
            case 'Drive':
                cars = driveCase(curCommand, cars);
                break;
            case 'Refuel':
                cars = refuelCase(curCommand, cars);
                break;
            case 'Revert':
                cars = revertCase(curCommand, cars);
                break;
        }

        command = input.shift();
    }

    Object.entries(cars)
        .sort((a, b) => {
            if (a[1].mileage == b[1].mileage) {
                return a[0].localeCompare(b[0]);
            }

            return b[1].mileage - a[1].mileage;
        })
        .forEach(kvp => {
            console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
        })

    function driveCase(arr, obj) {
        let [model, distance, fuel] = arr.slice(1);
        distance = Number(distance);
        fuel = Number(fuel);

        if (obj[model].fuel < fuel) {
            console.log('Not enough fuel to make that ride');
            return obj;
        }

        obj[model].fuel -= fuel;
        obj[model].mileage += distance;
        console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

        if (obj[model].mileage >= 100000) {
            delete obj[model];
            console.log(`Time to sell the ${model}!`);
        }

        return obj;
    }

    function refuelCase(arr, obj) {
        let [model, fuel] = arr.slice(1);
        fuel = Number(fuel);
        let totalFuel = obj[model].fuel;

        if (obj[model].fuel + fuel > 75) {
            obj[model].fuel = 75;
            console.log(`${model} refueled with ${75 - totalFuel} liters`);
        } else {
            obj[model].fuel += fuel;
            console.log(`${model} refueled with ${fuel} liters`);
        }

        return obj;
    }

    function revertCase(arr, obj) {
        let [model, kilometers] = arr.slice(1);
        kilometers = Number(kilometers);

        obj[model].mileage -= kilometers;

        if (obj[model].mileage < 10000) {
            obj[model].mileage = 10000;
            return obj;
        }

        console.log(`${model} mileage decreased by ${kilometers} kilometers`);
        return obj;
    }

}

needForSpeed(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]

);