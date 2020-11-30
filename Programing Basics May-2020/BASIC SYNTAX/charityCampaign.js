function charity(numDays, numConf, numCakes, numCorr, numPancakes) {
    numDays = Number(numDays);
    numConf = Number(numConf);
    numCakes = Number(numCakes);
    numCorr = Number(numCorr);
    numPancakes = Number(numPancakes);

    let priceForCakes = numCakes * 45;
    let priceForCorr = numCorr * 5.80;
    let pirceForPancakes = numPancakes * 3.20;

    let priceForOneDay = (priceForCakes + priceForCorr + pirceForPancakes) * numConf;
    let priceForCompany = priceForOneDay * numDays;
    let allPrice = priceForCompany - (1 / 8 * priceForCompany);

    console.log(allPrice);

}


charity("23",
    "8",
    "14",
    "30",
    "16")
