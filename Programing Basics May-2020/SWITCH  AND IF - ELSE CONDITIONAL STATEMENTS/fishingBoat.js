function fishingBoat(buget, sezon, numFishmen) {
    buget = Number(buget);
    numFishmen = Number(numFishmen);
    let priceBoat = 0;
    let discount = 0;
    let finalPrice = 0;

    switch (sezon) {
        case 'Spring':
            priceBoat = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            priceBoat = 4200;
            break;
        case 'Winter':
            priceBoat = 2600;
            break;
    }

    if (numFishmen <= 6) {
        discount = priceBoat * 0.10;
    } else if (numFishmen >= 7 && numFishmen <= 11) {
        discount = priceBoat * 0.15;
    } else if (numFishmen >= 12) {
        discount = priceBoat * 0.25;
    }

    if (numFishmen % 2 === 0 && sezon !== 'Autumn') {
        discount = discount * 0.95;

    }

    finalPrice = priceBoat - discount;

    if (buget >= finalPrice) {
        console.log(`Yes! You have ${(buget - finalPrice).toFixed(2)} leva left.`);
    } else if (buget < finalPrice) {
        console.log(`Not enough money! You need ${(Math.abs(finalPrice - buget)).toFixed(2)} leva.`);
    }

}


fishingBoat("3000",
    "Summer",
    "11")






