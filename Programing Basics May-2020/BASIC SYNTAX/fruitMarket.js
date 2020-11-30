function market(priceStawLv, numBananaInKg, numOrangeInKg, numRasInKg, numStrawInKg) {
    priceStawLv = Number(priceStawLv);
    numBananaInKg = Number(numBananaInKg);
    numOrangeInKg = Number(numOrangeInKg);
    numRasInKg = Number(numRasInKg);
    numStrawInKg = Number(numStrawInKg);

    priceRas = priceStawLv / 2;
    priceOrange = priceRas - (priceRas * 0.40);
    priceBanana = priceRas - (priceRas * 0.80);

    allPriceRas = priceRas * numRasInKg;
    allPriceOrange = priceOrange * numOrangeInKg;
    allPriceBanana = priceBanana * numBananaInKg;
    allPriceSt = priceStawLv * numStrawInKg;

    allPrice = allPriceRas + allPriceOrange + allPriceBanana + allPriceSt;
    console.log(allPrice)

}

market("63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5")
