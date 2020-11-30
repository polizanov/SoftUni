function cleverLily(inputData) {
    ageLily = Number(inputData.shift());
    priceWashingM = Number(inputData.shift());
    priceToy = Number(inputData.shift());
    let numToys = 0;
    let addMoneyForBirthDay = 1
    let moneyForBirthDay = 0;
    let moneyForBrother = 0
    let sumMoney = 0;

    for (curAge = 1; curAge <= ageLily; curAge++) {

        if (curAge % 2 == 0) {
            curMoney = addMoneyForBirthDay * 10;
            moneyForBirthDay += curMoney;
            addMoneyForBirthDay++;
            moneyForBrother++
        } else {
            numToys++
        }

        sumMoney = (moneyForBirthDay + (numToys * priceToy)) - (moneyForBrother * 1);

    }

    if (sumMoney > priceWashingM) {
        console.log(`Yes! ${(sumMoney - priceWashingM).toFixed(2)}`);
    } else if (sumMoney == priceWashingM) {
        console.log('Yes! 0.00')
    } else if (priceWashingM > sumMoney) {
        console.log(`No! ${(priceWashingM - sumMoney).toFixed(2)}`);
    }

}

cleverLily(['10', '170.00', '6']);