function lowestPrices(input) {
    let products = {};

    for (const line of input) {
        let [townName, productName, productPrice] = line.split(" | ");
        productPrice = Number(productPrice);

        if(!products.hasOwnProperty(productName)){
            products[productName] = {productPrice, townName};
            continue;
        }

        let oldPrice = products[productName].productPrice
        if(productPrice < oldPrice){
            products[productName] = {productPrice, townName};
        }

    }
    
    Object.entries(products).forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1].productPrice} (${kvp[1].townName})`);
        
    });

}

lowestPrices(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000']
);


['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000']