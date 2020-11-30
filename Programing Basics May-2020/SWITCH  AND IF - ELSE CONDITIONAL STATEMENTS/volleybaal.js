function volleybaal(year, numHolidays, numWeekends) {
    numHolidays = Number(numHolidays);
    numWeekendsInBirthTown = Number(numWeekends);
    numWeekend = 48;

    gameHolidays = 2 / 3 * numHolidays;
    gameWeekends = 3 / 4 * (numWeekend - numWeekendsInBirthTown);
    gameBirthTown = numWeekendsInBirthTown;
    sumGames = gameHolidays + gameWeekends + gameBirthTown;


    switch (year) {
        case 'leap':
            sumGames = sumGames + (sumGames * 0.15);
            console.log(Math.floor(sumGames));
            break;
        case 'normal':
            console.log(Math.floor(sumGames));
            break;
    }

}

volleybaal("normal",
    "3",
    "2")

