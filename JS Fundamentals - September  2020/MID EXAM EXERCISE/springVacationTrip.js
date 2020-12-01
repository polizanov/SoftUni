function springVacationTrip(input) {
    input = input.map(Number);

    let numDays = input.shift();
    let buget = input.shift();
    let groupOfPeople = input.shift();
    let priceForKmFuel = input.shift();
    let foodExpecedPerPerson = input.shift();
    let priceForOneNightPerPerson = input.shift();
    let distance = input.shift();
    let hotelPrice = priceForOneNightPerPerson * groupOfPeople * numDays
    let difference = 0

    if (groupOfPeople > 10) {
        hotelPrice = hotelPrice * 0.75
    }

    let foodPrice = foodExpecedPerPerson * groupOfPeople * numDays;

    let curExpences = hotelPrice + foodPrice;

    for (let i = 1; i <= numDays; i++) {
        if (curExpences > buget) {
            break;
        }

        let dailyFuel = distance * priceForKmFuel;
        curExpences += dailyFuel

        if (i % 3 === 0 || i % 5 === 0) {
            curExpences += curExpences * 0.4;
        }

        if (i % 7 === 0) {
            curExpences -= curExpences / groupOfPeople;
        }

        distance = input.shift();
    }

    difference = Math.abs(buget - curExpences);

    if (buget >= curExpences) {
        console.log(`You have reached the destination. You have ${(difference).toFixed(2)}$ budget left.`);
    } else {
        console.log(`Not enough money to continue the trip. You need ${(difference).toFixed(2)}$ more.`);
    }
}

springVacationTrip(

    [
        '10', '20500', '11',
        '1.2', '8', '13',
        '100', '150', '500',
        '400', '600', '130',
        '300', '350', '200',
        '300'
    ]

);