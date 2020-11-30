function balance(inputData) {
    let index = 0;
    let totalMoney = 0;
    let curMoney = inputData[index++];

    while (curMoney != 'NoMoreMoney') {
        curMoney = Number(curMoney);

        if (curMoney < 0) {
            console.log('Invalid operation!');
            curMoney = inputData[index++];
            break;
        }

        totalMoney += curMoney
        console.log(`Increase: ${(curMoney).toFixed(2)}`);
        curMoney = inputData[index++];

    }

    console.log(`Total: ${(totalMoney).toFixed(2)}`);

}

balance(["120",
    "45.55",
    "-150"])

