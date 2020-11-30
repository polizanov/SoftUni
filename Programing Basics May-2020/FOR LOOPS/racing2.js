function solve(fuel, usedFuelPerLap, countLaps) {
    fuel = +fuel;
    usedFuelPerLap = +usedFuelPerLap;
    countLaps = +countLaps;
    let count = 0;
    for (let i = 1; i <= countLaps; i++) {

        fuel -= usedFuelPerLap;
        usedFuelPerLap -= 0.01;
        if (fuel < 0) {
            break;
        }
        count++;
    }

    if (fuel >= 0) {
        console.log(`Congrats! You won the race!`);
    } else {
        console.log(`You are out of fuel in round ${count}!`);

    }

}

solve("50", "4.3", "30")