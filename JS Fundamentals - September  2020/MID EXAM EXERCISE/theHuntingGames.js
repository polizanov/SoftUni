function theHuntingGames(input) {
    let numDays = Number(input.shift());
    let numPlayers = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDayForOne = Number(input.shift());
    let foodPerDayForOnePerson = Number(input.shift());
    let totalWater = numDays * numPlayers * waterPerDayForOne;
    let totalFood = numDays * numPlayers * foodPerDayForOnePerson;

    for (let i = 1; i <= numDays; i++) {
        let lostEnergy = input.shift();
        groupEnergy -= lostEnergy;
        if (groupEnergy <= 0) {
            break;
        }

        if (i % 2 == 0) {
            groupEnergy += groupEnergy * 0.05;
            totalWater -= totalWater * 0.30;
        }

        if (i % 3 == 0) {
            totalFood -= totalFood / numPlayers;
            groupEnergy += groupEnergy * 0.10;
        }
    }
    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}

theHuntingGames(
    [
        '12', '6', '4430',
        '9.8', '5.5', '620.3',
        '840.2', '960.1', '220',
        '340', '674', '365',
        '345.5', '212', '412.12',
        '258', '496', ''
    ]

);