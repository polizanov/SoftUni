function fuelMoney(distance, passengers, priceForOneLitterDisel) {
    let buesFuelfForLitter = (distance / 100) * 7;
    buesFuelfForLitter += passengers * 0.100
    totalPrice = priceForOneLitterDisel * buesFuelfForLitter;

    console.log(`Needed money for that trip is ${totalPrice}lv.`);

}

fuelMoney(90, 14, 2.88);