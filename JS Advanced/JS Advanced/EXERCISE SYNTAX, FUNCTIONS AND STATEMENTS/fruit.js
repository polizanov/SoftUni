function fruit(type, numWeightG, pricePerKilogram) {
    let kilogramWeight = numWeightG / 1000;
    let price = kilogramWeight * pricePerKilogram;

    console.log(`I need $${price.toFixed(2)} to buy ${kilogramWeight.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80)