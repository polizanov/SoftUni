function toyShop(priceJorney, numPuzzle, numTalkingDolls, numTeddyBear, numMinions, numTrucks) {
    priceJorney = Number(priceJorney);
    numPuzzle = Number(numPuzzle);
    numTalkingDolls = Number(numTalkingDolls);
    numTeddyBear = Number(numTeddyBear);
    numMinions = Number(numMinions);
    numTrucks = Number(numTrucks);
    let discount = 0;

    pricePuzzle = numPuzzle * 2.60;
    priceDolls = numTalkingDolls * 3;
    priceBear = numTeddyBear * 4.10;
    priceMinion = numMinions * 8.20;
    priceTrucks = numTrucks * 2;

    priceToys = pricePuzzle + priceDolls + priceBear + priceMinion + priceTrucks;

    numToys = numPuzzle + numTalkingDolls + numTeddyBear + numMinions + numTrucks;

    if (numToys >= 50) {
        discount = priceToys * 0.25;
    }

    priceToys = priceToys - discount;

    rent = priceToys * 0.10;
    profit = priceToys - rent;

    if (profit > priceJorney) {
        console.log(`Yes! ${(profit - priceJorney).toFixed(2)} lv left.`);
    } else if (profit < priceJorney) {
        console.log(`Not enough money! ${(priceJorney - profit).toFixed(2)} lv needed.`);
    } else if (profit === priceJorney) {
        console.log("Yes! 0.00 lv left.");
    }

}


toyShop("320", "8", "2", "5", "5", "1")