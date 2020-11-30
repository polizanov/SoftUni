function racing(litFuel, fuelLit, numLabs) {
    litFuel = Number(litFuel);
    fuelLit = Number(fuelLit);
    numLabs = Number(numLabs);
    let lab = 0;

    for (let curLab = 1; curLab <= numLabs; curLab++) {


        litFuel -= fuelLit;
        fuelLit -= 0.1;

        if (litFuel <= 0) {
            break;
        }

        lab++

    }

    if (litFuel >= 0) {
        console.log('Congrats! You won the race!');
    } else {
        console.log(`You are out of fuel in round ${lab}!`);
    }

}

racing("50", "4.3", "30")