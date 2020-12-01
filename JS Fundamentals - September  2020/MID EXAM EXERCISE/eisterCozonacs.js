function eisterCozonacs(input) {
    let buget = Number(input.shift());
    let priceFoeOneKgFlour = Number(input.shift());
    let priceForOnePackEggs = priceFoeOneKgFlour * 0.75;
    let priceForLitMilk = (priceFoeOneKgFlour * 1.25) / 4;
    let totalPriceForOneCozonac = priceFoeOneKgFlour + priceForOnePackEggs + priceForLitMilk;
    let numEggs = 0;
    let numCozonacs = 0
    let lostEggs = 0;

    while (buget > totalPriceForOneCozonac) {
        numEggs += 3;
        buget -= totalPriceForOneCozonac;
        numCozonacs++;
        if (numCozonacs % 3 == 0) {
            lostEggs = numCozonacs - 2;
            numEggs -= lostEggs;
        }
    }

    console.log(`You made ${numCozonacs} cozonacs! Now you have ${numEggs} eggs and ${buget.toFixed(2)}BGN left.`);
}

eisterCozonacs(['15.75', '1.4']);