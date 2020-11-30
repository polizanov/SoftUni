function vacantion(inputData) {
    let index = 0;

    let moneyForVacantion = Number(inputData[index++]);
    let totalMoney = Number(inputData[index++]);

    let action = inputData[index++];
    let actionPrice = Number(inputData[index++]);
    let spendDays = 1;
    let curDay = 0;
    let iscantSaveMoney = false;

    while (totalMoney < moneyForVacantion) {
        curDay++;

        if (totalMoney < 0) {
            totalMoney = 0;
        }

        if (spendDays == 5) {
            iscantSaveMoney = true;
            console.log(`You can't save the money.`);
            console.log(curDay);
            break;
        }

        switch (action) {
            case 'spend':
                totalMoney -= actionPrice;
                spendDays++;
                action = inputData[index++];
                actionPrice = Number(inputData[index++]);
                continue;
            case 'save':
                totalMoney += actionPrice;
                action = inputData[index++];
                actionPrice = Number(inputData[index++]);
                continue;

        }

    }

    if (!iscantSaveMoney) {
        console.log(`You saved the money for ${curDay} days.`);
    }

}

vacantion(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])


