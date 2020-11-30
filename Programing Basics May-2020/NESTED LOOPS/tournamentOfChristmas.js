function tournament(inputData) {
    let index = 0;
    let numDays = Number(inputData[index++]);
    let totalWinGames = 0;
    let totalLoseGames = 0;
    let money = 0;
    let winDays = 0;
    let loseDays = 0;
    let allMoney = 0;
    let isEndDay = false;

    for (let curDay = 1; curDay <= numDays; curDay++) {


        let curSport = inputData[index++];
        let result = inputData[index++];

        while (curSport != 'Finish') {

            switch (result) {
                case 'win':
                    totalWinGames++;
                    money += 20;
                    break;
                case 'lose':
                    totalLoseGames++;
                    break;
            }



            curSport = inputData[index++];
            if (curSport != 'Finish') {
                result = inputData[index++];
            } else if (curSport == 'Finish') {
                isEndDay = true;

            }
            if (isEndDay) {
                if (totalWinGames > totalLoseGames) {
                    money = money + (money * 0.1);
                    allMoney += money;
                    money = 0;
                    totalWinGames = 0;
                    totalLoseGames = 0;
                    winDays++;
                    isEndDay = false;
                } else if (totalLoseGames > totalWinGames) {
                    allMoney += money;
                    money = 0;
                    totalWinGames = 0;
                    totalLoseGames = 0;
                    loseDays++;
                    isEndDay = false;
                }
            }

        }


    }

    if (winDays > loseDays) {
        allMoney = allMoney + (allMoney * 0.2);
        console.log(`You won the tournament! Total raised money: ${(allMoney).toFixed(2)}`)
    } else if (loseDays > winDays) {
        console.log(`You lost the tournament! Total raised money: ${(allMoney).toFixed(2)}`)
    }

}

tournament([
    '3', 'darts',
    'lose', 'handball',
    'lose', 'judo',
    'win', 'Finish',
    'snooker', 'lose',
    'swimming', 'lose',
    'squash', 'lose',
    'table tennis', 'win',
    'Finish', 'volleyball',
    'win', 'basketball',
    'win', 'Finish'
]

)